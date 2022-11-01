"use strict";

import React from 'react';
import propTypes from "prop-types";
import {LinkContainer as LC} from "react-router-bootstrap";

export default function LinkContainer({ to, exact, ...linkContainerProps }) {
    if (exact) {
        return <LC {...linkContainerProps} to={to} isActive={(match, location) => location.pathname === to} />;
    } else {
        return <LC {...linkContainerProps} to={to} />;
    }
}

LinkContainer.propTypes = {
    to: propTypes.string,
    exact: propTypes.bool
};