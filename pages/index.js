import {
  catalogList,
  hitsList,
  hitsSliderContainer,
  hitsSliderContainerBtnsId,
  template,
} from "../utils/constants.js";
import { catalogConfig } from "../configs/catalogConfig.js";
import { productsConfig } from "../configs/productsConfig.js";
import CatalogCard from "../components/CatalogCard.js";
import ProductCard from "../components/ProductCard.js";
import Slider from "../components/Slider.js";
import Popup from "../components/Popup.js";

const render = () => {
  renderCatalog();
};

const renderCatalog = () => {
  catalogConfig.forEach((item) => {
    const card = new CatalogCard(item, template.catalogCard);
    catalogList.append(card.generateCard());
  });
};

const popup = new Popup();

const renderProducts = (products) => {
  hitsList.innerHTML = "";

  products.forEach((item) => {
    const card = new ProductCard(item, template.productCard, popup);
    hitsList.append(card.generateCard());
  });
};

new Slider(
  hitsSliderContainer,
  hitsSliderContainerBtnsId,
  productsConfig,
  renderProducts
);

render();
