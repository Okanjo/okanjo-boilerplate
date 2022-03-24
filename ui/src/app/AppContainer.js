"use strict";

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import App from "./App";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./NotFound";
import Page1 from "../home/overview/page1/Page1";
import Page2 from "../home/overview/page2/Page2";
import HomePage from "../home/HomePage";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (/*state*/) => {
    return {};
};

const AppContainer = () => (
    <ScrollToTop>
        <App>
            <Routes>
                {/* Customer process pages */}
                <Route exact path="/" element={<HomePage />} />

                <Route exact path="/page1" element={<Page1 />} />
                <Route exact path="/page2" element={<Page2 />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </App>
    </ScrollToTop>
);

export default connect(mapStateToProps)(AppContainer);