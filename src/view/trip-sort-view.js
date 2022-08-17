import BaseView from './base-view.js';
import createAdjacentHtml from './trip-sort-template.js';

export default class TripSortView extends BaseView {
  /**
    * @override
    */
  createAdjacentHtml() {
    return createAdjacentHtml(...arguments);
  }
}

customElements.define('trip-sort', TripSortView);
