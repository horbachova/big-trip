import FilterButtonView from './view/filter-button-view.js';
import {render} from './render.js';


const FilterButtonsElement = document.querySelector('.trip-controls__filters');

render(new FilterButtonView(), FilterButtonsElement);
