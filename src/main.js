import TripFilterView from './view/trip-filter-view.js';
import TripSortView from './view/trip-sort-view.js';
import RoutePresenter from './presenter/route-presenter.js';
// import {render} from './render.js';

const contentContainer = document.querySelector('.trip-events');
const filterContainer = document.querySelector('.trip-controls__filters');
const routePresenter = new RoutePresenter();

filterContainer.append(new TripFilterView());
contentContainer.append(new TripSortView());
routePresenter.init(contentContainer);
