"use strict";

import React from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} location={useLocation()} />; // eslint-disable-line react/display-name
}