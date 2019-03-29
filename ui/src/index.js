"use strict";

// import 'babel-polyfill'; // Feel like loving IE9? Uncomment this
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import AppContainer from './app/AppContainer';
import configureStore from './configureStore';

const preloadedState = undefined;
const store = configureStore(preloadedState);

render(
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>,
    document.getElementById('root')
);