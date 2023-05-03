import {createElement} from '../render.js';

function createBoardTemplate() {
  return '<section class="content container"></section>';
}

export default class ContentContainerView {
  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
