"use strict";

import {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export default function ScrollToTop(props) {
    const location = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        [location]
    );

    return props.children || null;
}

ScrollToTop.propTypes = {
    children: PropTypes.any
};