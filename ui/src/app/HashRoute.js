"use strict";

import React  from 'react';
import { Route } from 'react-router-dom';
import propTypes from "prop-types";


export default function HashRoute({ component: Component, path, ...routeProps }) {
    return (
        <Route
            {...routeProps}
            component={({location, ...props}) =>
                location.hash === path && <Component {...props} />
            }
        />
    );
}

HashRoute.propTypes = {
    component: propTypes.any,
    path: propTypes.string
};