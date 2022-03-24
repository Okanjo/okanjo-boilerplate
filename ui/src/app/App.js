"use strict";

import React, { Component } from 'react';

import Header from './Header';

import { connect } from 'react-redux';
import propTypes from "prop-types";

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (/*state*/) => {
    return {
    };
};

class App extends Component {

    static propTypes = {
        children: propTypes.any
    };

    render() {
        return (
            <div id="main">
                <Header />
                <div id="main-section">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);