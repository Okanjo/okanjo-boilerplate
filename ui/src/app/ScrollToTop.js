"use strict";

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        // Use pathname so hash changes don't trigger scroll-to-top
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
