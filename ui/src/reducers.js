"use strict";

import { combineReducers } from 'redux';
import AppReducer from "./app/AppReducer";

// noinspection JSUnusedGlobalSymbols
const reducers = combineReducers({
    app: AppReducer,
});

export default reducers;