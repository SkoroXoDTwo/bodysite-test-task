export class CatalogCard {
  constructor(data, template) {
    this._title = data.title;
    this._src = data.src;
    this._count = data.count;
    this._templateCard = template;
  }

  _getTemplate() {
    console.log(this._templateCard);
    const cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".catalog__list-item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.catalog__card-title');
    this._imgElement = this._element.querySelector('.catalog__card-img');
    this._countElement = this._element.querySelector('.catalog__card-count');

    this._titleElement.textContent = this._title;
    this._imgElement.src = this._src;
    this._countElement.textContent = this._count;

    return this._element;
  }
}

export default CatalogCard;
