import TripRouteView from '../view/trip-route-view.js';
import TripPointView from '../view/trip-point-view';
import TripNewPointView from '../view/trip-new-point-view';
import TripPointEditorView from '../view/trip-point-editor-view';


export default class RoutePresenter {
  routeComponent = new TripRouteView();

  init(routeContainer) {
    this.routeContainer = routeContainer;

    this.routeComponent.append(new TripNewPointView());
    this.routeComponent.append(new TripPointEditorView());

    for (let i = 0; i < 3; i++) {
      this.routeComponent.append(new TripPointView());
    }

    routeContainer.append(this.routeComponent);
  }
}

