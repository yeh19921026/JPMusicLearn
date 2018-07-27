/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(1);

var _navbar2 = _interopRequireDefault(_navbar);

var _container = __webpack_require__(2);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ";
var AUTH0_DOMAIN = "tses.auth0.com";
var AUTH0_CALLBACK_URL = location.href;
var AUTH0_API_AUDIENCE = "https://tses.auth0.com/api/v2/";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'parseHash',
        value: function parseHash() {
            this.auth0 = new auth0.WebAuth({
                domain: AUTH0_DOMAIN,
                clientID: AUTH0_CLIENT_ID
            });
            this.auth0.parseHash(window.location.hash, function (err, authResult) {
                if (err) {
                    return console.log(err);
                }
                if (authResult !== null && authResult.accessToken !== null && authResult.idToken !== null) {
                    localStorage.setItem("access_token", authResult.accessToken);
                    localStorage.setItem("id_token", authResult.idToken);
                    localStorage.setItem("profile", JSON.stringify(authResult.idTokenPayload));
                    window.location = window.location.href.substr(0, window.location.href.indexOf("#"));
                }
            });
        }
    }, {
        key: 'setup',
        value: function setup() {
            $.ajaxSetup({
                beforeSend: function beforeSend(r) {
                    if (localStorage.getItem("access_token")) {
                        r.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
                    }
                }
            });
            if (localStorage.getItem("access_token")) {}
            $.get("http://localhost:3000/api/usersetting", function (res) {
                localStorage.setItem("user_setting", res);
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setup();
            this.parseHash();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_navbar2.default, null),
                React.createElement(_container2.default, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ";
var AUTH0_DOMAIN = "tses.auth0.com";
var AUTH0_CALLBACK_URL = location.href;
var AUTH0_API_AUDIENCE = "https://tses.auth0.com/api/v2/";

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "setState",
        value: function setState() {
            var idToken = localStorage.getItem("id_token");
            if (idToken) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState();
        }
    }, {
        key: "render",
        value: function render() {
            //vavbar container
            return React.createElement(
                "nav",
                { id: "navGroup", "class": "navbar navbar-expand-lg navbar-dark fixed-top bg-dark nav-fill" },
                React.createElement(
                    "button",
                    { "data-parent": "#navGroup", "data-target": "#navbarCollapse", "data-toggle": "collapse", type: "button", "aria-controls": "navbarCollapse", "aria-expanded": "false", "aria-label": "Toggle navigation", "class": "navbar-toggler" },
                    React.createElement("span", { "class": "fa fa-bars" })
                ),
                React.createElement(
                    "button",
                    { "data-parent": "#navGroup", "data-target": "#searchbarCollapse", "data-toggle": "collapse", type: "button", "aria-controls": "navbarCollapse", "aria-expanded": "false", "aria-label": "Toggle navigation", "class": "navbar-toggler" },
                    React.createElement("span", { "aria-hidden": "true", "class": "fa fa-search" })
                ),
                React.createElement(
                    "div",
                    { id: "navbarCollapse", "class": "collapse navbar-collapse text-center" },
                    React.createElement(
                        "a",
                        { href: "home", "class": "navbar-brand ml-lg-0 ml-3" },
                        "JPMusicLearn"
                    ),
                    this.loggedIn ? React.createElement(NavBarLogin, null) : React.createElement(NavBarGuest, null)
                ),
                React.createElement(
                    "div",
                    { id: "searchbarCollapse", "class": "collapse navbar-collapse" },
                    React.createElement(
                        "form",
                        { "class": "nav-item input-group mt-2 mt-md-0" },
                        React.createElement("input", { type: "text", "aria-label": "Search", placeholder: "\u641C\u5C0B", "class": "form-control mr-sm-2" }),
                        React.createElement(
                            "button",
                            { type: "submit", "class": "btn btn-outline-success my-2 my-sm-0" },
                            "\u641C\u5C0B"
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(React.Component);

var NavBarLogin = function (_React$Component2) {
    _inherits(NavBarLogin, _React$Component2);

    function NavBarLogin(props) {
        _classCallCheck(this, NavBarLogin);

        var _this2 = _possibleConstructorReturn(this, (NavBarLogin.__proto__ || Object.getPrototypeOf(NavBarLogin)).call(this, props));

        _this2.logout = _this2.logout.bind(_this2);
        return _this2;
    }

    _createClass(NavBarLogin, [{
        key: "logout",
        value: function logout() {
            localStorage.removeItem("id_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("profile");
            location.reload();
        }
    }, {
        key: "render",
        value: function render() {
            return (
                //menulogin.jade
                React.createElement(
                    "ul",
                    { id: "navbar-menu", "class": "navbar-nav" },
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "profile", "class": "nav-link" },
                        "\u500B\u4EBA\u6A94\u6848",
                        React.createElement(
                            "span",
                            { "class": "badge badge-warning ml-1" },
                            "!"
                        )
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "playlist", "class": "nav-link" },
                        "\u6B4C\u66F2\u5217\u8868"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "#", "class": "nav-link" },
                        "\u6211\u7684\u6700\u611B(\u7121)"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "#", "class": "nav-link" },
                        "\u64AD\u653E\u7D00\u9304(\u7121)"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "playlist", "class": "nav-link" },
                        "\u64AD\u653E\u6E05\u55AE"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "addsong", "class": "nav-link" },
                        "\u65B0\u589E\u6B4C\u66F2"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "song", "class": "nav-link" },
                        "\u6B4C\u66F2(\u66AB\u6642)"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "searchresult", "class": "nav-link" },
                        "\u641C\u5C0B\u7D50\u679C(\u66AB\u6642)"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { onClick: this.logout, "class": "nav-link" },
                        "\u767B\u51FA"
                    )
                )
            );
        }
    }]);

    return NavBarLogin;
}(React.Component);

var NavBarGuest = function (_React$Component3) {
    _inherits(NavBarGuest, _React$Component3);

    function NavBarGuest(props) {
        _classCallCheck(this, NavBarGuest);

        var _this3 = _possibleConstructorReturn(this, (NavBarGuest.__proto__ || Object.getPrototypeOf(NavBarGuest)).call(this, props));

        _this3.authenticate = _this3.authenticate.bind(_this3);
        return _this3;
    }

    _createClass(NavBarGuest, [{
        key: "authenticate",
        value: function authenticate() {
            this.WebAuth = new auth0.WebAuth({
                domain: AUTH0_DOMAIN,
                clientID: AUTH0_CLIENT_ID,
                scope: "openid profile email",
                audience: AUTH0_API_AUDIENCE,
                responseType: "token id_token",
                redirectUri: AUTH0_CALLBACK_URL
            });
            this.WebAuth.authorize();
        }
    }, {
        key: "render",
        value: function render() {
            //vavbar container
            return (
                //menulogin.jade
                React.createElement(
                    "ul",
                    { id: "navbar-menu", "class": "navbar-nav" },
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.authenticate, "class": "nav-link" },
                        "\u767B\u5165"
                    ),
                    React.createElement("li", { "class": "nav-item" }),
                    React.createElement(
                        "a",
                        { href: "#", "class": "nav-link" },
                        "\u6B4C\u66F2\u5217\u8868"
                    )
                )
            );
        }
    }]);

    return NavBarGuest;
}(React.Component);

exports.default = NavBar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _containerHome = __webpack_require__(3);

var _containerHome2 = _interopRequireDefault(_containerHome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'render',

        /*setup() {
            $.ajaxSetup({
                beforeSend: (r) => {
                    if (localStorage.getItem("access_token")) {
                        r.setRequestHeader(
                            "Authorization",
                            "Bearer " + localStorage.getItem("access_token")
                        );
                    }
                }
            });
        }
        setState() {
            let idToken = localStorage.getItem("id_token");
            if (idToken) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }
        componentWillMount() {
            this.setup();
            this.parseHash();
            this.setState();
        }*/
        value: function render() {
            return React.createElement(_containerHome2.default, null);
        }
    }]);

    return Container;
}(React.Component);

exports.default = Container;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function Home(props) {
    return React.createElement(
        "div",
        { "class": "container mt-5 pt-2 pt-lg-3" },
        React.createElement(UnvarifyAlert, null),
        React.createElement(
            "div",
            { "class": "mb-5" },
            React.createElement(
                "div",
                { "class": "h2" },
                "\u7DB2\u7AD9\u4ECB\u7D39"
            ),
            React.createElement("hr", { id: "introduction" }),
            React.createElement(
                "p",
                { "class": "px-2" },
                "\u300A\u547D\u904B\u77F3\u4E4B\u9580\u300B\uFF08\u539F\u540D\uFF1ASteins;Gate[\u8A3B 1]\uFF09\u662F5pb.\u6240\u88FD\u4F5C\u7684\u4E00\u6B3E\u8996\u89BA\u5C0F\u8AAA\u904A\u6232\uFF0C\u65BC2009\u5E7410\u670815\u65E5\u767C\u884C\u3002\u9019\u90E8\u4F5C\u54C1\u662F\u7E7C\u300ACHAOS;HEAD\u300B\u4E4B\u5F8C\uFF0C5pb.\u8207Nitro+\u5408\u4F5C\u4F01\u5283\u7684\u300C\u5984\u60F3\u79D1\u5B78ADV\u7CFB\u5217\u300D\u5192\u96AA\u904A\u6232\uFF08ADV\uFF09\u7684\u7B2C\u4E8C\u4F5C\uFF1A\u5047\u60F3\u79D1\u5B78ADV\u3002\u300ASteins;Gate\u300B\u7684\u300CSteins\u300D\uFF08\u547D\u904B\u77F3\uFF09\u4E00\u8A5E\u53D6\u81EA\u7269\u7406\u5B78\u5BB6\u963F\u723E\u4F2F\u7279\xB7\u611B\u56E0\u65AF\u5766\uFF08Einstein\uFF0C\u30A2\u30A4\u30F3\u30B7\u30E5\u30BF\u30A4\u30F3\uFF09\uFF0C\u6545\u4E8B\u4E2D\u4E5F\u6D89\u53CA\u611B\u56E0\u65AF\u5766\u5275\u7ACB\u7684\u76F8\u5C0D\u8AD6\u7684\u7269\u7406\u5B78\u8981\u7D20\u3002[3]\u672C\u4F5C\u5728\u65E5\u672C\u767C\u552E\u96FB\u8166\u904A\u6232\u524D\u5C31\u5DF2\u7D93\u6709\u52D5\u756B\u5316\u7684\u6D88\u606F\u3002Windows\u7248\u672C\u65BC2010\u5E748\u670826\u65E5\u767C\u552E\u3002\u52D5\u756B\u65BC2011\u5E744\u67085\u65E5\u958B\u59CB\u9996\u64AD\uFF0C\u65BC\u9996\u64AD\u7B2C24\u8A71\uFF082011\u5E749\u670813\u65E5\uFF09\u5B8C\u7562\u5F8C\uFF0C\u516C\u5E03\u88FD\u4F5C\u300A\u5287\u5834\u7248 Steins;Gate\u300B\u7684\u6D88\u606F\u30022015\u5E743\u6708\u5BA3\u5E03\u88FD\u4F5C\u95DC\u65BC\u03B2\u4E16\u754C\u7DDA\u6545\u4E8B\u7684\u65B0\u4F5C\uFF0C\u540D\u70BA\u300ASteins;Gate 0\u300B\uFF0C\u4E14\u65BC\u540C\u671F\u5BA3\u5E03\u52D5\u756B\u5316[4]\u3002\u767C\u552E\u65E5\u671F\u70BA2015\u5E7412\u670810\u65E5\u3002\u540C\u5E747\u6708\uFF0C\u70BA\u914D\u5408\u904A\u6232\u300ASteins;Gate 0\u300B\uFF0C\u6771\u4EAC\u90FD\u6703\u96FB\u8996\u53F0\u91CD\u64AD\u300A\u547D\u904B\u77F3\u4E4B\u9580\u300B\u52D5\u756B\uFF0C\u4F46\u7B2C23\u8A71\u7684\u5167\u5BB9\u537B\u8207\u539F\u7248\u6709\u76F8\u7576\u5927\u7684\u5206\u6B67\uFF0C\u540C\u6642\u539F\u672C\u9810\u8A08\u64AD\u653E\u7B2C24\u8A71\u7684\u6642\u6BB5\u5C07\u6703\u6539\u64AD\u7279\u5225\u7BC0\u76EE\uFF0C\u5167\u5BB9\u662F\u300A\u547D\u904B\u77F3\u4E4B\u95800\u300B\u7684\u5BA3\u50B3\u4EE5\u53CA\u6539\u7DE8\u724823\u96C6\u7684\u5E55\u5F8C\u82B1\u7D6E[5][6]\u3002"
            )
        ),
        React.createElement(
            "div",
            { "class": "mb-5" },
            React.createElement(
                "h2",
                null,
                "\u6700\u65B0\u6B4C\u66F2"
            ),
            React.createElement("hr", null),
            React.createElement("ul", { id: "newsong", "class": "px-2" })
        ),
        React.createElement(
            "div",
            { "class": "mb-5" },
            React.createElement(
                "h2",
                null,
                "\u71B1\u9580\u6B4C\u66F2"
            ),
            React.createElement("hr", null),
            React.createElement("ul", { id: "hotsong", "class": "px-2" })
        )
    );
};

var UnvarifyAlert = function (_React$Component) {
    _inherits(UnvarifyAlert, _React$Component);

    function UnvarifyAlert() {
        _classCallCheck(this, UnvarifyAlert);

        return _possibleConstructorReturn(this, (UnvarifyAlert.__proto__ || Object.getPrototypeOf(UnvarifyAlert)).apply(this, arguments));
    }

    _createClass(UnvarifyAlert, [{
        key: "setState",
        value: function setState() {
            var idToken = localStorage.getItem("id_token");
            if (idToken) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { role: "alert", "class": "alert alert-primary" },
                "\u586B\u5BEB\u500B\u4EBA\u8CC7\u6599\u53EF\u4EE5\u7372\u5F97\u66F4\u591A\u6703\u54E1\u529F\u80FD!"
            );
        }
    }]);

    return UnvarifyAlert;
}(React.Component);

exports.default = Home;

/***/ })
/******/ ]);