export class Popup {
  constructor() {
    this._popup = document.querySelector(".popup");
    this._closeBtn = this._popup.querySelector(".popup__close-btn");
    this._img = document.querySelector(".popup__img");
    this._setEventListener();
  }

  open(src, alt) {
    this._popup.classList.add("popup_opened");
    this._img.src = src;
    this._img.alt = alt;
  }

  _close() {
    this._popup.classList.remove("popup_opened");
  }

  _setEventListener() {
    this._closeBtn.addEventListener("click", () => {
      this._close();
    });
  }
}

export default Popup;
