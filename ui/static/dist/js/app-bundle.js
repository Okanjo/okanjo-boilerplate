(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Header = _interopRequireDefault(require("./Header"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "main"
      }, _react.default.createElement(_Header.default, null), _react.default.createElement("div", {
        id: "main-section"
      }, this.props.children));
    }
  }]);

  return App;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

exports.default = _default;

},{"./Header":4,"react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./App"));

var _ScrollToTop = _interopRequireDefault(require("./ScrollToTop"));

var _NotFound = _interopRequireDefault(require("./NotFound"));

var _Page = _interopRequireDefault(require("../home/overview/page1/Page1"));

var _Page2 = _interopRequireDefault(require("../home/overview/page2/Page2"));

var _HomePage = _interopRequireDefault(require("../home/HomePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var AppContainer = function AppContainer() {
  return _react.default.createElement(_ScrollToTop.default, null, _react.default.createElement(_App.default, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _HomePage.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/page1",
    component: _Page.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/page2",
    component: _Page2.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  }))));
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AppContainer));

exports.default = _default;

},{"../home/HomePage":8,"../home/overview/page1/Page1":9,"../home/overview/page2/Page2":10,"./App":1,"./NotFound":5,"./ScrollToTop":6,"react":"react","react-redux":"react-redux","react-router-dom":"react-router-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppReducer;
var initialState = {
  version: window._ver,
  environment: window._env
}; // noinspection JSUnusedLocalSymbols

function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
}

;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterBootstrap = require("react-router-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
var _default = function _default(props) {
  return _react.default.createElement(_reactBootstrap.Navbar, {
    bg: "dark",
    variant: "dark",
    collapseOnSelect: true,
    expand: "md"
  }, _react.default.createElement(_reactBootstrap.Container, null, _react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/"
  }, _react.default.createElement(_reactBootstrap.Navbar.Brand, {
    href: "/"
  }, "Okanjo Boilerplate")), _react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), _react.default.createElement(_reactBootstrap.Navbar.Collapse, null, _react.default.createElement(_reactBootstrap.Nav, null, _react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/page1"
  }, _react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#"
  }, "Page 1")), _react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/page2"
  }, _react.default.createElement(_reactBootstrap.Nav.Link, {
    href: "#"
  }, "Page 2")), _react.default.createElement(_reactBootstrap.NavDropdown, {
    title: "Dropdown",
    id: "basic-nav-dropdown"
  }, _react.default.createElement(_reactBootstrap.NavDropdown.Item, null, "Action"), _react.default.createElement(_reactBootstrap.NavDropdown.Item, null, "Another action"), _react.default.createElement(_reactBootstrap.NavDropdown.Item, null, "Something else here"), _react.default.createElement(_reactBootstrap.NavDropdown.Divider, null), _react.default.createElement(_reactBootstrap.NavDropdown.Item, null, "Separated link"))), _react.default.createElement(_reactBootstrap.Nav, {
    className: "ml-auto"
  }, _react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/bogus-page"
  }, _react.default.createElement(_reactBootstrap.Nav.Link, {
    eventKey: 1,
    href: "#"
  }, "Bogus Link")), _react.default.createElement(_reactRouterBootstrap.LinkContainer, {
    to: "/bogus-page2"
  }, _react.default.createElement(_reactBootstrap.Nav.Link, {
    eventKey: 2,
    href: "#"
  }, "Link Right"))))));
};

exports.default = _default;

},{"react":"react","react-bootstrap":"react-bootstrap","react-router-bootstrap":"react-router-bootstrap"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedLocalSymbols
var _default = function _default(props) {
  return _react.default.createElement("div", null, _react.default.createElement(_reactBootstrap.Container, null, _react.default.createElement(_reactBootstrap.Row, null, _react.default.createElement(_reactBootstrap.Col, {
    md: 12
  }, _react.default.createElement("h1", null, "Page Not Found"), _react.default.createElement("p", null, "The page you were looking for is not here :/")))));
};

exports.default = _default;

},{"react":"react","react-bootstrap":"react-bootstrap"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollToTop =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTop).apply(this, arguments));
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

var _default = (0, _reactRouterDom.withRouter)(ScrollToTop);

exports.default = _default;

},{"react":"react","react-router-dom":"react-router-dom"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxLocalstorage = _interopRequireDefault(require("redux-localstorage"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var enhancers = composer((0, _reduxLocalstorage.default)(), // comment this if you do not want to persist state
(0, _redux.applyMiddleware)(_reduxThunk.default));

var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_reducers.default, preloadedState, enhancers);
};

var _default = configureStore;
exports.default = _default;

},{"./reducers":12,"redux":"redux","redux-localstorage":"redux-localstorage","redux-thunk":"redux-thunk"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, props));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_reactBootstrap.Container, null, _react.default.createElement(_reactBootstrap.Row, null, _react.default.createElement(_reactBootstrap.Col, {
        md: 12
      }, _react.default.createElement("h1", null, "Home Page"), _react.default.createElement("p", null, "This might be the home page of your app.")))));
    }
  }]);

  return HomePage;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(HomePage));

exports.default = _default;

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var Page1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Page1, _Component);

  function Page1(props) {
    _classCallCheck(this, Page1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page1).call(this, props));
  }

  _createClass(Page1, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_reactBootstrap.Container, null, _react.default.createElement(_reactBootstrap.Row, null, _react.default.createElement(_reactBootstrap.Col, {
        md: 12
      }, _react.default.createElement("h1", null, "Page 1"), _react.default.createElement("p", null, "This might be a regular page of your app.")))));
    }
  }]);

  return Page1;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Page1));

exports.default = _default;

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// noinspection JSUnusedLocalSymbols
var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var Page2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Page2, _Component);

  function Page2(props) {
    _classCallCheck(this, Page2);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page2).call(this, props));
  }

  _createClass(Page2, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_reactBootstrap.Container, null, _react.default.createElement(_reactBootstrap.Row, null, _react.default.createElement(_reactBootstrap.Col, {
        md: 12
      }, _react.default.createElement("h1", null, "Page 2"), _react.default.createElement("p", null, "This might be a yet another regular page of your app.")))));
    }
  }]);

  return Page2;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Page2));

exports.default = _default;

},{"react":"react","react-bootstrap":"react-bootstrap","react-redux":"react-redux","react-router-dom":"react-router-dom"}],11:[function(require,module,exports){
"use strict"; // import 'babel-polyfill'; // Feel like loving IE9? Uncomment this

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _AppContainer = _interopRequireDefault(require("./app/AppContainer"));

var _configureStore = _interopRequireDefault(require("./configureStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = undefined;
var store = (0, _configureStore.default)(preloadedState);
(0, _reactDom.render)(_react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_AppContainer.default, null))), document.getElementById('root'));

},{"./app/AppContainer":2,"./configureStore":7,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router-dom":"react-router-dom"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _AppReducer = _interopRequireDefault(require("./app/AppReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// noinspection JSUnusedGlobalSymbols
var reducers = (0, _redux.combineReducers)({
  app: _AppReducer.default
});
var _default = reducers;
exports.default = _default;

},{"./app/AppReducer":3,"redux":"redux"}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ1aS9zcmMvYXBwL0FwcC5qcyIsInVpL3NyYy9hcHAvQXBwQ29udGFpbmVyLmpzIiwidWkvc3JjL2FwcC9BcHBSZWR1Y2VyLmpzIiwidWkvc3JjL2FwcC9IZWFkZXIuanMiLCJ1aS9zcmMvYXBwL05vdEZvdW5kLmpzIiwidWkvc3JjL2FwcC9TY3JvbGxUb1RvcC5qcyIsInVpL3NyYy9jb25maWd1cmVTdG9yZS5qcyIsInVpL3NyYy9ob21lL0hvbWVQYWdlLmpzIiwidWkvc3JjL2hvbWUvb3ZlcnZpZXcvcGFnZTEvUGFnZTEuanMiLCJ1aS9zcmMvaG9tZS9vdmVydmlldy9wYWdlMi9QYWdlMi5qcyIsInVpL3NyYy9pbmRleC5qcyIsInVpL3NyYy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTSxlQUFlLEdBQUcsU0FBbEIsZUFBa0IsQ0FBQyxLQUFELEVBQVc7QUFDL0IsU0FBTyxFQUFQO0FBRUgsQ0FIRDs7SUFLTSxHOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFDSTtBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsU0FDSSw2QkFBQyxlQUFELE9BREosRUFFSTtBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsU0FDSyxLQUFLLEtBQUwsQ0FBVyxRQURoQixDQUZKLENBREo7QUFRSDs7OztFQVZhLGdCOztlQWFILGdDQUFXLHlCQUFRLGVBQVIsRUFBeUIsR0FBekIsQ0FBWCxDOzs7OztBQzVCZjs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFrQixDQUFDLEtBQUQsRUFBVztBQUMvQixTQUFPLEVBQVA7QUFDSCxD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SUFJTSxLOzs7OztBQUNGLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4RUFDVCxLQURTO0FBRWxCOzs7OzZCQUVRO0FBQ0wsYUFDSSwwQ0FDSSw2QkFBQyx5QkFBRCxRQUNJLDZCQUFDLG1CQUFELFFBQ0ksNkJBQUMsbUJBQUQ7QUFBSyxRQUFBLEVBQUUsRUFBRTtBQUFULFNBQ0ksa0RBREosRUFFSSxnR0FGSixDQURKLENBREosQ0FESixDQURKO0FBWUg7Ozs7RUFsQmUsZ0I7O2VBcUJMLGdDQUFXLHlCQUFRLGVBQVIsRUFBeUIsS0FBekIsQ0FBWCxDOzs7OztBQ2xDZixhLENBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNLGNBQWMsR0FBRyxTQUF2QjtBQUNBLElBQU0sS0FBSyxHQUFHLDZCQUFlLGNBQWYsQ0FBZDtBQUVBLHNCQUNJLDZCQUFDLG9CQUFEO0FBQVUsRUFBQSxLQUFLLEVBQUU7QUFBakIsR0FDSSw2QkFBQyw2QkFBRCxRQUNJLDZCQUFDLHFCQUFELE9BREosQ0FESixDQURKLEVBTUksUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FOSjs7O0FDZEE7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBTSxRQUFRLEdBQUcsNEJBQWdCO0FBQzdCLEVBQUEsR0FBRyxFQUFFO0FBRHdCLENBQWhCLENBQWpCO2VBSWUsUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9O1xufTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBcHApKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIsICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL05vdEZvdW5kXCI7XG5pbXBvcnQgUGFnZTEgZnJvbSBcIi4uL2hvbWUvb3ZlcnZpZXcvcGFnZTEvUGFnZTFcIjtcbmltcG9ydCBQYWdlMiBmcm9tIFwiLi4vaG9tZS9vdmVydmlldy9wYWdlMi9QYWdlMlwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuLi9ob21lL0hvbWVQYWdlXCI7XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgQXBwQ29udGFpbmVyID0gKCkgPT4gKFxuICAgIDxTY3JvbGxUb1RvcD5cbiAgICAgICAgPEFwcD5cbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgey8qIEN1c3RvbWVyIHByb2Nlc3MgcGFnZXMgKi99XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cblxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BhZ2UxXCIgY29tcG9uZW50PXtQYWdlMX0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wYWdlMlwiIGNvbXBvbmVudD17UGFnZTJ9IC8+XG5cbiAgICAgICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0FwcD5cbiAgICA8L1Njcm9sbFRvVG9wPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwQ29udGFpbmVyKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB2ZXJzaW9uOiB3aW5kb3cuX3ZlcixcbiAgICBlbnZpcm9ubWVudDogd2luZG93Ll9lbnZcbn07XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29udGFpbmVyLCBNZW51SXRlbSwgTmF2LCBOYXZiYXIsIE5hdkRyb3Bkb3dufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQge0xpbmtDb250YWluZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCI7XG5cbi8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZExvY2FsU3ltYm9sc1xuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wiIGNvbGxhcHNlT25TZWxlY3QgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5Pa2Fuam8gQm9pbGVycGxhdGU8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvcGFnZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiPlBhZ2UgMTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvcGFnZTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiPlBhZ2UgMjwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRHJvcGRvd25cIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+QWN0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0+QW5vdGhlciBhY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbT5Tb21ldGhpbmcgZWxzZSBoZXJlPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtPlNlcGFyYXRlZCBsaW5rPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9ib2d1cy1wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9ezF9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9ndXMgTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9ib2d1cy1wYWdlMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PXsyfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgUmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbik7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29sLCBDb250YWluZXIsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRMb2NhbFN5bWJvbHNcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHBhZ2UgeW91IHdlcmUgbG9va2luZyBmb3IgaXMgbm90IGhlcmUgOi88L3A+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNsYXNzIFNjcm9sbFRvVG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIC8vIFVzZSBwYXRobmFtZSBzbyBoYXNoIGNoYW5nZXMgZG9uJ3QgdHJpZ2dlciBzY3JvbGwtdG8tdG9wXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwcmV2UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNjcm9sbFRvVG9wKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHBlcnNpc3RTdGF0ZSBmcm9tICdyZWR1eC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5sZXQgY29tcG9zZXIgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmxldCBlbmhhbmNlcnMgPSBjb21wb3NlcihcbiAgICBwZXJzaXN0U3RhdGUoLyogcGF0aHMsIGNvbmZpZyAqLyksIC8vIGNvbW1lbnQgdGhpcyBpZiB5b3UgZG8gbm90IHdhbnQgdG8gcGVyc2lzdCBzdGF0ZVxuICAgIGFwcGx5TWlkZGxld2FyZShUaHVuaylcbik7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gcHJlbG9hZGVkU3RhdGUgPT4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgZW5oYW5jZXJzXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0NvbCwgQ29udGFpbmVyLCBSb3d9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkTG9jYWxTeW1ib2xzXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4geyB9O1xufTtcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBtaWdodCBiZSB0aGUgaG9tZSBwYWdlIG9mIHlvdXIgYXBwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lUGFnZSkpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Q29sLCBDb250YWluZXIsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRMb2NhbFN5bWJvbHNcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IH07XG59O1xuXG5jbGFzcyBQYWdlMSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGFnZSAxPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIG1pZ2h0IGJlIGEgcmVndWxhciBwYWdlIG9mIHlvdXIgYXBwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZTEpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Q29sLCBDb250YWluZXIsIFJvd30gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRMb2NhbFN5bWJvbHNcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IH07XG59O1xuXG5jbGFzcyBQYWdlMiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UGFnZSAyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIG1pZ2h0IGJlIGEgeWV0IGFub3RoZXIgcmVndWxhciBwYWdlIG9mIHlvdXIgYXBwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZTIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJzsgLy8gRmVlbCBsaWtlIGxvdmluZyBJRTk/IFVuY29tbWVudCB0aGlzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vYXBwL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XG5cbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG5cbnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXIgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IEFwcFJlZHVjZXIgZnJvbSBcIi4vYXBwL0FwcFJlZHVjZXJcIjtcblxuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGFwcDogQXBwUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyczsiXX0=
