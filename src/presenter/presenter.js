import TripListView from '../view/trip-list-view.js';
import TripItemView from '../view/trip-item.js';
import EditFormView from '../view/edit-form-view.js';
import SortButtonsView from '../view/sort-button-view.js';
import ContentContainerView from '../view/content-container-view.js';
import { render } from '../render.js';

const ITEM_COUNT = 3;

export default class Presenter {
  tripListComponent = new TripListView();
  contentComponent = new ContentContainerView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.contentComponent, this.container);
    render(new SortButtonsView(), this.contentComponent.getElement());
    render(this.tripListComponent, this.contentComponent.getElement());
    render(new EditFormView(), this.tripListComponent.getElement());

    for (let i = 0; i < ITEM_COUNT; i++) {
      render(new TripItemView(), this.tripListComponent.getElement());
    }
  }
}
