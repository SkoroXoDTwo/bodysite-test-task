export class Slider {
  constructor(container, btnsId, sliderItems, render) {
    this._container = container;
    this._btnNext = container.querySelector(btnsId.next);
    this._btnPrevious = container.querySelector(btnsId.previous);
    this._sliderItems = sliderItems;
    this._page = 0;
    this._render = render;
    this._quantitySlidesPerview = 0;
    this._maxPage = 0;

    this._setNumberMaxPage();
    this._setEventListener();
  }

  _setEventListener() {
    this._btnNext.addEventListener("click", () => {
      if (this._page < this._maxPage - 1) {
        this._page++;
        this._render(this._getSliderPerviewItems());
      }
    });

    this._btnPrevious.addEventListener("click", () => {
      if (this._page > 0) {
        this._page--;
        this._render(this._getSliderPerviewItems());
      }
    });

    window.addEventListener("resize", () => {
      this._setNumberMaxPage();
    });
  }

  _getSliderPerviewItems() {
    const startIndexItem = this._page * this._quantitySlidesPerview;
    const endIndexItem = startIndexItem + this._quantitySlidesPerview;

    return this._sliderItems.slice(startIndexItem, endIndexItem);
  }

  _setMaxPage() {
    this._maxPage = Math.ceil(
      this._sliderItems.length / this._quantitySlidesPerview
    );
  }

  _setNumberMaxPage() {
    const windowWidth = document.documentElement.clientWidth;
    let tmpQuantitySlidesPerview = 0;

    if (windowWidth > 1400) {
      tmpQuantitySlidesPerview = 4;
    } else if (windowWidth > 1130) {
      tmpQuantitySlidesPerview = 3;
    } else if (windowWidth > 660) {
      tmpQuantitySlidesPerview = 2;
    } else {
      tmpQuantitySlidesPerview = 1;
    }

    if (tmpQuantitySlidesPerview !== this._quantitySlidesPerview) {
      this._quantitySlidesPerview = tmpQuantitySlidesPerview;
      this._setMaxPage();
      this._page = 0;
      this._render(this._getSliderPerviewItems());
    }
    console.log(this._maxPage);
  }
}

export default Slider;
