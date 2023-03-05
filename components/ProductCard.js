export class ProductCard {
  constructor(data, template, popup) {
    this._title = data.title;
    this._src = data.src;
    this._feedbackCount = data.feedbackCount;
    this._starsCount = data.starsCount;
    this._price = data.price;
    this._priceOld = data.priceOld;
    this._link = data.link ? data.link : "#";
    this._availability = data.availability;
    this._templateCard = template;
    this._popup = popup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".product-card")
      .cloneNode(true);

    return cardElement;
  }

  _setStarsStyle() {
    this._starElements = this._element.querySelectorAll(".product-card__star");

    for (let i = 0; i < Math.ceil(this._starsCount / 2); i++) {
      if (2 * (i + 1) <= this._starsCount) {
        this._starElements[i].classList.add("product-card__star_type_ceil");
      } else {
        this._starElements[i].classList.add("product-card__star_type_half");
      }
    }
  }

  _setPriceOld() {
    this._priceOldElement = this._element.querySelector(
      ".product-card__price-old"
    );

    if (this._priceOld === "") {
      this._priceOldElement.remove();
    } else {
      this._priceOldElement.textContent = this._priceOld;
    }
  }

  _setAvailability() {
    this._availabilityElement = this._element.querySelector(
      ".product-card__availability-text"
    );
    this._availabilityIconElement = this._element.querySelector(
      ".product-card__availability-icon"
    );

    if (!this._availability) {
      this._availabilityElement.textContent = "Нет в наличии";
      this._availabilityElement.classList.add(
        "product-card__availability-text_false"
      );

      this._availabilityIconElement.classList.add(
        "product-card__availability-icon_false"
      );
    }
  }

  _setEventListener() {
    this._likeElement = this._element.querySelector(".product-card__like-btn");
    this._statisticsElement = this._element.querySelector(
      ".product-card__statistics-btn"
    );
    this._imgContainerElement = this._element.querySelector(
      ".product-card__img-container"
    );

    this._likeElement.addEventListener("click", () => {
      this._likeElement.classList.toggle("product-card__like-btn_active");
    });

    this._statisticsElement.addEventListener("click", () => {
      this._statisticsElement.classList.toggle(
        "product-card__statistics-btn_active"
      );
    });

    this._imgContainerElement.addEventListener("click", () => {
      this._popup.open(this._src, this._title);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector(".product-card__title");
    this._imgElement = this._element.querySelector(".product-card__img");
    this._feedbackCountElement = this._element.querySelector(
      ".product-card__feedback-count"
    );
    this._priceElement = this._element.querySelector(".product-card__price");
    this._linkElement = this._element.querySelector(".product-card__link");

    this._titleElement.textContent = this._title;
    this._imgElement.src = this._src;
    this._imgElement.alt = this._title;
    this._feedbackCountElement.textContent = this._feedbackCount;
    this._priceElement.textContent = this._price;
    this._linkElement.href = this._link;

    this._setPriceOld();
    this._setStarsStyle();
    this._setAvailability();

    this._setEventListener();

    return this._element;
  }
}

export default ProductCard;
