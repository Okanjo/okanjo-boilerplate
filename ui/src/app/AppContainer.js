"use strict";

import React from 'react';
import { Route, Switch, withRouter,  } from 'react-router-dom';
import { connect } from 'react-redux';

import App from "./App";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./NotFound";
import Page1 from "../home/overview/page1/Page1";
import Page2 from "../home/overview/page2/Page2";
import HomePage from "../home/HomePage";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return {};
};

const AppContainer = () => (
    <ScrollToTop>
        <App>
            <Switch>
                {/* Customer process pages */}
                <Route exact path="/" component={HomePage} />

                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />

                <Route component={NotFound} />
            </Switch>
        </App>
    </ScrollToTop>
);

export default withRouter(connect(mapStateToProps)(AppContainer));