export class ProductCard {
  constructor(data, template) {
    this._title = data.title;
    this._src = data.src;
    this._countFeedback = data.countFeedback;
    this._countStars = data.countStars;
    this._price = data.price;
    this._priceOld = data.priceOld;
    this._link = data.link ? data.link : '#';
    this._templateCard = template;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".product-card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector(".product-card__title");
    this._imgElement = this._element.querySelector(".product-card__img");
    // this._countElement = this._element.querySelector(".catalog__card-count");
    // this._linkElement = this._element.querySelector(".catalog__list-item-link");

    this._titleElement.textContent = this._title;
    this._imgElement.src = this._src;
    this._imgElement.alt = this._title;
    // this._countElement.textContent = this._count;
    // this._linkElement.href = this._link;

    return this._element;
  }
}

export default ProductCard;
