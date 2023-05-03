import FilterButtonView from './view/filter-button-view.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.main');
const FilterButtonsElement = document.querySelector('.trip-controls__filters');

render(new FilterButtonView(), FilterButtonsElement);
