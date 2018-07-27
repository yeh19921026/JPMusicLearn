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

var _Container = __webpack_require__(2);

var _Container2 = _interopRequireDefault(_Container);

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
        }
    }, {
        key: 'setState',
        value: function setState() {
            var idToken = localStorage.getItem("id_token");
            if (idToken) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setup();
            this.parseHash();
            this.setState();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_navbar2.default, { login: this.loggedIn }),
                React.createElement(_Container2.default, { login: this.loggedIn })
            );
        }
    }]);

    return App;
}(React.Component);

var Home = function (_React$Component2) {
    _inherits(Home, _React$Component2);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this2 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this2.authenticate = _this2.authenticate.bind(_this2);
        return _this2;
    }

    _createClass(Home, [{
        key: 'authenticate',
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'col-xs-8 col-xs-offset-2 jumbotron text-center' },
                    React.createElement(
                        'h1',
                        null,
                        'Jokeish'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'A load of Dad jokes XD123'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx '
                    ),
                    React.createElement(
                        'a',
                        { onClick: this.authenticate, className: 'btn btn-primary btn-lg btn-login btn-block' },
                        'Sign In'
                    )
                )
            );
        }
    }]);

    return Home;
}(React.Component);

var LoggedIn = function (_React$Component3) {
    _inherits(LoggedIn, _React$Component3);

    function LoggedIn(props) {
        _classCallCheck(this, LoggedIn);

        var _this3 = _possibleConstructorReturn(this, (LoggedIn.__proto__ || Object.getPrototypeOf(LoggedIn)).call(this, props));

        _this3.state = {
            jokes: []
        };
        _this3.serverRequest = _this3.serverRequest.bind(_this3);
        _this3.logout = _this3.logout.bind(_this3);
        return _this3;
    }

    _createClass(LoggedIn, [{
        key: 'logout',
        value: function logout() {
            localStorage.removeItem("id_token");
            localStorage.removeItem("access_token");
            localStorage.removeItem("profile");
            location.reload();
        }
    }, {
        key: 'serverRequest',
        value: function serverRequest() {
            var _this4 = this;

            $.get("http://localhost:3000/api/jokes", function (res) {
                console.log(res);
                _this4.setState({
                    jokes: res
                });
                console.log(_this4.state);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.serverRequest();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement('br', null),
                React.createElement(
                    'span',
                    { className: 'pull-right' },
                    React.createElement(
                        'a',
                        { onClick: this.logout },
                        'Log out'
                    )
                ),
                React.createElement(
                    'h2',
                    null,
                    'Jokeish'
                ),
                React.createElement(
                    'p',
                    null,
                    'Let\'s feed you with some funny Jokes!!!'
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'container' },
                        this.state.jokes.map(function (joke, i) {
                            return React.createElement(Joke, { key: i, joke: joke });
                        })
                    )
                )
            );
        }
    }]);

    return LoggedIn;
}(React.Component);

var Joke = function (_React$Component4) {
    _inherits(Joke, _React$Component4);

    function Joke(props) {
        _classCallCheck(this, Joke);

        var _this5 = _possibleConstructorReturn(this, (Joke.__proto__ || Object.getPrototypeOf(Joke)).call(this, props));

        _this5.state = {
            liked: ""
        };
        _this5.like = _this5.like.bind(_this5);
        _this5.serverRequest.bind(_this5);
        return _this5;
    }

    _createClass(Joke, [{
        key: 'like',
        value: function like() {
            var joke = this.props.joke;
            this.serverRequest(joke);
        }
    }, {
        key: 'serverRequest',
        value: function serverRequest(joke) {
            var _this6 = this;

            $.post("http://localhost:3000/api/jokes/like/" + joke.id, { like: 1 }, function (res) {
                console.log("res... ", res);
                _this6.setState({ liked: "Liked!", jokes: res });
                _this6.props.jokes = res;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props.joke);
            return React.createElement(
                'div',
                { className: 'col-xs-4' },
                React.createElement(
                    'div',
                    { className: 'panel panel-default' },
                    React.createElement(
                        'div',
                        { className: 'panel-heading' },
                        '#',
                        this.props.joke.id,
                        ' ',
                        React.createElement(
                            'span',
                            { className: 'pull-right' },
                            this.state.like
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'panel-body' },
                        this.props.joke.data
                    ),
                    React.createElement(
                        'div',
                        { className: 'panel-footer' },
                        this.props.joke.like,
                        ' Likes \xA0',
                        React.createElement(
                            'a',
                            { onClick: this.like, className: 'btn btn-default' },
                            React.createElement('span', { className: 'glyphicon glyphicon-thumbs-up' })
                        )
                    )
                )
            );
        }
    }]);

    return Joke;
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
            if (this.loggedIn) {
                return React.createElement(LoggedIn, null);
            } else {
                return React.createElement(Home, null);
            }
        }
    }]);

    return NavBar;
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
        key: "parseHash",
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
        key: "setup",
        value: function setup() {
            $.ajaxSetup({
                beforeSend: function beforeSend(r) {
                    if (localStorage.getItem("access_token")) {
                        r.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("access_token"));
                    }
                }
            });
        }
    }, {
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
            this.setup();
            this.parseHash();
            this.setState();
        }
    }, {
        key: "render",
        value: function render() {
            if (this.loggedIn) {
                return React.createElement(LoggedIn, null);
            } else {
                return React.createElement(Home, null);
            }
        }
    }]);

    return Container;
}(React.Component);

exports.default = Container;

/***/ })
/******/ ]);