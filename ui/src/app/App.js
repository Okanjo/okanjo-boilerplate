"use strict";

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import Header from './Header';

import { connect } from 'react-redux';

// noinspection JSUnusedLocalSymbols
const mapStateToProps = (state) => {
    return {
    };
};

class App extends Component {
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

export default withRouter(connect(mapStateToProps)(App));