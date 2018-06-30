"use strict";

import QueryString from 'querystring';

export default QueryString.parse(window.location.search.replace(/^\?/, ''));

