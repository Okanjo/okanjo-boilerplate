"use strict";

// import 'babel-polyfill'; // Feel like loving IE9? Uncomment this
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import AppFrame from './app/AppFrame';
import configureStore from './configureStore';
import * as Sentry from "@sentry/react";

// Report errors in production only
if (window._dsn) {
    Sentry.init({
        dsn: window._dsn
    });
}

const preloadedState = undefined;
const store = configureStore(preloadedState);

// Clear title tag
document.title = '';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router>
            <AppFrame />
        </Router>
    </Provider>
);

