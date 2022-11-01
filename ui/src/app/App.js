"use strict";

import React, { Component } from 'react';
import Header from './Header';
import propTypes from "prop-types";


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

export default App;