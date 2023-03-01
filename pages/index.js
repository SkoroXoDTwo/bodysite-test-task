import { catalogList, template } from "../utils/constants.js";
import { catalogConfig } from "../configs/catalogConfig.js";
import CatalogCard from "../components/CatalogCard.js";

const render = () => {
  renderCatalog();
};

const renderCatalog = () => {
  catalogConfig.forEach((item) => {
    const card = new CatalogCard(item, template.catalogCard);
    catalogList.append(card.generateCard());
  });
};

render();
