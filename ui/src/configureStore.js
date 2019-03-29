"use strict";

import { createStore, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import Thunk from 'redux-thunk';

import rootReducer from './reducers';

let composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let enhancers = composer(
    persistState(/* paths, config */), // comment this if you do not want to persist state
    applyMiddleware(Thunk)
);

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    enhancers
);

export default configureStore;