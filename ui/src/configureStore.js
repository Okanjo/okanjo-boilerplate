"use strict";

import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from './reducers';

let composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let enhancers = composer(
    persistState(/* paths, config */) // comment this if you do not want to persist state
);

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    enhancers
);

export default configureStore;