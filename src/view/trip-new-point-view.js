import BaseView from './base-view.js';
import createAdjacentHtml from './trip-new-point-template.js';

export default class TripNewPointView extends BaseView {
  /**
   * @override
   */
  createAdjacentHtml() {
    return createAdjacentHtml(...arguments);
  }
}

customElements.define('trip-new-point', TripNewPointView);
