import FilterButtonView from './view/filter-button-view.js';
import Presenter from './presenter/presenter.js';
import {render} from './render.js';


const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.trip-events');
const FilterButtonsElement = document.querySelector('.trip-controls__filters');
const presenter = new Presenter({container: tripEventsElement});

render(new FilterButtonView(), FilterButtonsElement);

presenter.init();


