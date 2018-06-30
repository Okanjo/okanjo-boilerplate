(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'main' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'div',
                    { id: 'main-section' },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

},{"./Header":4,"react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _ScrollToTop = require('./ScrollToTop');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Page = require('../home/overview/page1/Page1');

var _Page2 = _interopRequireDefault(_Page);

var _Page3 = require('../home/overview/page2/Page2');

var _Page4 = _interopRequireDefault(_Page3);

var _HomePage = require('../home/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var AppContainer = function AppContainer(_ref) {
    var account = _ref.account,
        store = _ref.store;
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _ScrollToTop2.default,
            null,
            _react2.default.createElement(
                _App2.default,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/page1', component: _Page2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/page2', component: _Page4.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
                )
            )
        )
    );
};

AppContainer.propTypes = {
    store: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AppContainer));

},{"../home/HomePage":8,"../home/overview/page1/Page1":9,"../home/overview/page2/Page2":10,"./App":1,"./NotFound":5,"./ScrollToTop":6,"prop-types":"prop-types","react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AppReducer;
var initialState = {
    version: window._ver,
    environment: window._env
};

// noinspection JSUnusedLocalSymbols
function AppReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    return state;
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _reactRouterBootstrap = require("react-router-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
exports.default = function (props) {
    return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, collapseOnSelect: true },
        _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
                _reactBootstrap.Navbar.Brand,
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/" },
                    "Okanjo Boilerplate"
                )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
                _reactBootstrap.Nav,
                null,
                _react2.default.createElement(
                    _reactRouterBootstrap.LinkContainer,
                    { to: "/page1" },
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { href: "#" },
                        "Page 1"
                    )
                ),
                _react2.default.createElement(
                    _reactRouterBootstrap.LinkContainer,
                    { to: "/page2" },
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { href: "#" },
                        "Page 2"
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.NavDropdown,
                    { eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { eventKey: 3.1 },
                        "Action"
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { eventKey: 3.2 },
                        "Another action"
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { eventKey: 3.3 },
                        "Something else here"
                    ),
                    _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { eventKey: 3.3 },
                        "Separated link"
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Nav,
                { pullRight: true },
                _react2.default.createElement(
                    _reactRouterBootstrap.LinkContainer,
                    { to: "/bogus-page" },
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { eventKey: 1, href: "#" },
                        "Bogus Link"
                    )
                ),
                _react2.default.createElement(
                    _reactRouterBootstrap.LinkContainer,
                    { to: "/bogus-page2" },
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { eventKey: 2, href: "#" },
                        "Link Right"
                    )
                )
            )
        )
    );
};

},{"react":"react","react-bootstrap":"react-bootstrap","react-router-bootstrap":"react-router-bootstrap","react-router-dom":"react-router-dom"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { md: 12 },
                    _react2.default.createElement(
                        "h1",
                        null,
                        "Page Not Found"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "The page you were looking for is not here :/"
                    )
                )
            )
        )
    );
};

},{"react":"react","react-bootstrap":"react-bootstrap"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_Component) {
    _inherits(ScrollToTop, _Component);

    function ScrollToTop() {
        _classCallCheck(this, ScrollToTop);

        return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
    }

    _createClass(ScrollToTop, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            // Use pathname so hash changes don't trigger scroll-to-top
            if (this.props.location.pathname !== prevProps.location.pathname) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.children;
        }
    }]);

    return ScrollToTop;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ScrollToTop);

},{"react":"react","react-router-dom":"react-router-dom"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxLocalstorage = require('redux-localstorage');

var _reduxLocalstorage2 = _interopRequireDefault(_reduxLocalstorage);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var enhancers = composer((0, _reduxLocalstorage2.default)() /* paths, config */ // comment this if you do not want to persist state
);

var configureStore = function configureStore(preloadedState) {
    return (0, _redux.createStore)(_reducers2.default, preloadedState, enhancers);
};

exports.default = configureStore;

},{"./reducers":12,"redux":"redux","redux-localstorage":"redux-localstorage"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 12 },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Home Page'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'This might be the home page of your app.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(HomePage));

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var Page1 = function (_Component) {
    _inherits(Page1, _Component);

    function Page1(props) {
        _classCallCheck(this, Page1);

        var _this = _possibleConstructorReturn(this, (Page1.__proto__ || Object.getPrototypeOf(Page1)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Page1, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 12 },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Page 1'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'This might be a regular page of your app.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Page1;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Page1));

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var Page2 = function (_Component) {
    _inherits(Page2, _Component);

    function Page2(props) {
        _classCallCheck(this, Page2);

        var _this = _possibleConstructorReturn(this, (Page2.__proto__ || Object.getPrototypeOf(Page2)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Page2, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { md: 12 },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Page 2'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'This might be a yet another regular page of your app.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Page2;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Page2));

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],11:[function(require,module,exports){
"use strict";

// import 'babel-polyfill'; // Feel like loving IE9? Uncomment this

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _AppContainer = require('./app/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _configureStore = require('./configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = undefined;
var store = (0, _configureStore2.default)(preloadedState);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_AppContainer2.default, { store: store })
), document.getElementById('root'));

},{"./app/AppContainer":2,"./configureStore":7,"react":"react","react-dom":"react-dom","react-router-dom":"react-router-dom"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require("redux");

var _AppReducer = require("./app/AppReducer");

var _AppReducer2 = _interopRequireDefault(_AppReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedGlobalSymbols
var reducers = (0, _redux.combineReducers)({
    app: _AppReducer2.default
});

exports.default = reducers;

},{"./app/AppReducer":3,"redux":"redux"}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ1aS9zcmMvYXBwL0FwcC5qcyIsInVpL3NyYy9hcHAvQXBwQ29udGFpbmVyLmpzIiwidWkvc3JjL2FwcC9BcHBSZWR1Y2VyLmpzIiwidWkvc3JjL2FwcC9IZWFkZXIuanMiLCJ1aS9zcmMvYXBwL05vdEZvdW5kLmpzIiwidWkvc3JjL2FwcC9TY3JvbGxUb1RvcC5qcyIsInVpL3NyYy9jb25maWd1cmVTdG9yZS5qcyIsInVpL3NyYy9ob21lL0hvbWVQYWdlLmpzIiwidWkvc3JjL2hvbWUvb3ZlcnZpZXcvcGFnZTEvUGFnZTEuanMiLCJ1aS9zcmMvaG9tZS9vdmVydmlldy9wYWdlMi9QYWdlMi5qcyIsInVpL3NyYy9pbmRleC5qcyIsInVpL3NyYy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVc7QUFDL0IsV0FBTyxFQUFQO0FBRUgsQ0FIRDs7SUFLTSxHOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxJQUFHLE1BQVI7QUFDSSxxRUFESjtBQUVJO0FBQUE7QUFBQSxzQkFBSyxJQUFHLGNBQVI7QUFDSyx5QkFBSyxLQUFMLENBQVc7QUFEaEI7QUFGSixhQURKO0FBUUg7Ozs7OztrQkFHVSxnQ0FBVyx5QkFBUSxlQUFSLEVBQXlCLEdBQXpCLENBQVgsQzs7O0FDNUJmOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFXO0FBQy9CLFdBQU8sRUFBUDtBQUNILENBRkQ7O0FBSUEs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Ozs7OztrQkFHVSxnQ0FBVyx5QkFBUSxlQUFSLEVBQXlCLEtBQXpCLENBQVgsQzs7O0FDcENmOztBQUVBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsU0FBdkI7QUFDQSxJQUFNLFFBQVEsOEJBQWUsY0FBZixDQUFkOztBQUVBLHNCQUNJO0FBQUE7QUFBQTtBQUNJLDREQUFjLE9BQU8sS0FBckI7QUFESixDQURKLEVBSUksU0FBUyxjQUFULENBQXdCLE1BQXhCLENBSko7OztBQ2JBOzs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNLFdBQVcsNEJBQWdCO0FBQzdCO0FBRDZCLENBQWhCLENBQWpCOztrQkFJZSxRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9O1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcHApKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL05vdEZvdW5kXCI7XG5pbXBvcnQgUGFnZTEgZnJvbSBcIi4uL2hvbWUvb3ZlcnZpZXcvcGFnZTEvUGFnZTFcIjtcbmltcG9ydCBQYWdlMiBmcm9tIFwiLi4vaG9tZS9vdmVydmlldy9wYWdlMi9QYWdlMlwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuLi9ob21lL0hvbWVQYWdlXCI7XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgQXBwQ29udGFpbmVyID0gKHsgYWNjb3VudCwgc3RvcmUgfSkgPT4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8U2Nyb2xsVG9Ub3A+XG4gICAgICAgICAgICA8QXBwPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDdXN0b21lciBwcm9jZXNzIHBhZ2VzICovfVxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2UxXCIgY29tcG9uZW50PXtQYWdlMX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcGFnZTJcIiBjb21wb25lbnQ9e1BhZ2UyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9BcHA+XG4gICAgICAgIDwvU2Nyb2xsVG9Ub3A+XG4gICAgPC9Qcm92aWRlcj5cbik7XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcENvbnRhaW5lcikpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdmVyc2lvbjogd2luZG93Ll92ZXIsXG4gICAgZW52aXJvbm1lbnQ6IHdpbmRvdy5fZW52XG59O1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRMb2NhbFN5bWJvbHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiBzdGF0ZTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01lbnVJdGVtLCBOYXYsIE5hdmJhciwgTmF2RHJvcGRvd24sIE5hdkl0ZW19IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7TGlua0NvbnRhaW5lcn0gZnJvbSBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkTG9jYWxTeW1ib2xzXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgICA8TmF2YmFyIGludmVyc2UgY29sbGFwc2VPblNlbGVjdD5cbiAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPk9rYW5qbyBCb2lsZXJwbGF0ZTwvTGluaz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9wYWdlMVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiI1wiPlBhZ2UgMTwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvcGFnZTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIiNcIj5QYWdlIDI8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17M30gdGl0bGU9XCJEcm9wZG93blwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4xfT5BY3Rpb248L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuMn0+QW5vdGhlciBhY3Rpb248L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezMuM30+U29tZXRoaW5nIGVsc2UgaGVyZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17My4zfT5TZXBhcmF0ZWQgbGluazwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvYm9ndXMtcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJvZ3VzIExpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9ib2d1cy1wYWdlMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICA8L05hdmJhcj5cbik7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29sLCBHcmlkLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkTG9jYWxTeW1ib2xzXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBpcyBub3QgaGVyZSA6LzwvcD5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBTY3JvbGxUb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICAvLyBVc2UgcGF0aG5hbWUgc28gaGFzaCBjaGFuZ2VzIGRvbid0IHRyaWdnZXIgc2Nyb2xsLXRvLXRvcFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcHJldlByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTY3JvbGxUb1RvcCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcGVyc2lzdFN0YXRlIGZyb20gJ3JlZHV4LWxvY2Fsc3RvcmFnZSc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxubGV0IGNvbXBvc2VyID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5sZXQgZW5oYW5jZXJzID0gY29tcG9zZXIoXG4gICAgcGVyc2lzdFN0YXRlKC8qIHBhdGhzLCBjb25maWcgKi8pIC8vIGNvbW1lbnQgdGhpcyBpZiB5b3UgZG8gbm90IHdhbnQgdG8gcGVyc2lzdCBzdGF0ZVxuKTtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSBwcmVsb2FkZWRTdGF0ZSA9PiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBlbmhhbmNlcnNcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Q29sLCBHcmlkLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkTG9jYWxTeW1ib2xzXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyB9O1xufTtcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIG1pZ2h0IGJlIHRoZSBob21lIHBhZ2Ugb2YgeW91ciBhcHAuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lUGFnZSkpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Q29sLCBHcmlkLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkTG9jYWxTeW1ib2xzXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyB9O1xufTtcblxuY2xhc3MgUGFnZTEgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGFnZSAxPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIG1pZ2h0IGJlIGEgcmVndWxhciBwYWdlIG9mIHlvdXIgYXBwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UxKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtDb2wsIEdyaWQsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRMb2NhbFN5bWJvbHNcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IH07XG59O1xuXG5jbGFzcyBQYWdlMiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QYWdlIDI8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgbWlnaHQgYmUgYSB5ZXQgYW5vdGhlciByZWd1bGFyIHBhZ2Ugb2YgeW91ciBhcHAuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZTIpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7IC8vIEZlZWwgbGlrZSBsb3ZpbmcgSUU5PyBVbmNvbW1lbnQgdGhpc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vYXBwL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XG5cbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG5cbnJlbmRlcihcbiAgICA8Um91dGVyPlxuICAgICAgICA8QXBwQ29udGFpbmVyIHN0b3JlPXtzdG9yZX0gLz5cbiAgICA8L1JvdXRlcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IEFwcFJlZHVjZXIgZnJvbSBcIi4vYXBwL0FwcFJlZHVjZXJcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGFwcDogQXBwUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyczsiXX0=
