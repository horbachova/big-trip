import FilterButtonView from './view/filter-button-view.js';
import Presenter from './presenter/presenter.js';
import {render} from './render.js';


const siteMainElement = document.querySelector('.main');
const FilterButtonsElement = document.querySelector('.trip-controls__filters');
const presenter = new Presenter({container: siteMainElement});

render(new FilterButtonView(), FilterButtonsElement);

presenter.init();


