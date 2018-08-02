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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(15)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(10);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(17)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/node_modules/warning/browser.js
var browser = __webpack_require__(4);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(3);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};
// CONCATENATED MODULE: ./node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ./node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    browser_default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          browser_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ./node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ./node_modules/history/es/createBrowserHistory.js
var createBrowserHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createBrowserHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_browser_default()(canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createHashHistory.js
var createHashHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var createHashHistory_HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_browser_default()(canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    browser_default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        browser_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    browser_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createMemoryHistory.js
var createMemoryHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createMemoryHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory_extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ./node_modules/history/es/index.js









// CONCATENATED MODULE: ./node_modules/react-router/es/Router.js
var Router_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router_Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: Router_extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant_browser_default()(children == null || react_default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react_default.a.Children.only(children) : null;
  };

  return Router;
}(react_default.a.Component);

Router_Router.propTypes = {
  history: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
};
Router_Router.contextTypes = {
  router: prop_types_default.a.object
};
Router_Router.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Router = (Router_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Router.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Router = (es_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js
function BrowserRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BrowserRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BrowserRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter_BrowserRouter = function (_React$Component) {
  BrowserRouter_inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    BrowserRouter_classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = BrowserRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createBrowserHistory(_this.props), _temp), BrowserRouter_possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react_default.a.Component);

BrowserRouter_BrowserRouter.propTypes = {
  basename: prop_types_default.a.string,
  forceRefresh: prop_types_default.a.bool,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_BrowserRouter = (BrowserRouter_BrowserRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/HashRouter.js
function HashRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HashRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function HashRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter_HashRouter = function (_React$Component) {
  HashRouter_inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    HashRouter_classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = HashRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createHashHistory(_this.props), _temp), HashRouter_possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react_default.a.Component);

HashRouter_HashRouter.propTypes = {
  basename: prop_types_default.a.string,
  getUserConfirmation: prop_types_default.a.func,
  hashType: prop_types_default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types_default.a.node
};


/* harmony default export */ var es_HashRouter = (HashRouter_HashRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Link.js
var Link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Link_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link_Link = function (_React$Component) {
  Link_inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    Link_classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Link_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), Link_possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant_browser_default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant_browser_default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? LocationUtils_createLocation(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return react_default.a.createElement("a", Link_extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(react_default.a.Component);

Link_Link.propTypes = {
  onClick: prop_types_default.a.func,
  target: prop_types_default.a.string,
  replace: prop_types_default.a.bool,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func])
};
Link_Link.defaultProps = {
  replace: false
};
Link_Link.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired,
      createHref: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Link = (Link_Link);
// CONCATENATED MODULE: ./node_modules/react-router/es/MemoryRouter.js
function MemoryRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MemoryRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MemoryRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter_MemoryRouter = function (_React$Component) {
  MemoryRouter_inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    MemoryRouter_classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = MemoryRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createMemoryHistory(_this.props), _temp), MemoryRouter_possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return react_default.a.createElement(es_Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react_default.a.Component);

MemoryRouter_MemoryRouter.propTypes = {
  initialEntries: prop_types_default.a.array,
  initialIndex: prop_types_default.a.number,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_MemoryRouter = (MemoryRouter_MemoryRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/MemoryRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_MemoryRouter = (es_MemoryRouter);
// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(5);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/react-router/es/matchPath.js


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var matchPath_compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp_default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = matchPath_compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ var es_matchPath = (matchPath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Route.js
var Route_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Route_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Route_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Route_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Route_isEmptyChildren = function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route_Route = function (_React$Component) {
  Route_inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    Route_classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Route_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), Route_possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: Route_extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant_browser_default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return es_matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning_default()(!(this.props.component && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning_default()(!(this.props.render && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? react_default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !Route_isEmptyChildren(children)) return react_default.a.Children.only(children);

    return null;
  };

  return Route;
}(react_default.a.Component);

Route_Route.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  path: prop_types_default.a.string,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  sensitive: prop_types_default.a.bool,
  component: prop_types_default.a.func,
  render: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  location: prop_types_default.a.object
};
Route_Route.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.object.isRequired,
    route: prop_types_default.a.object.isRequired,
    staticContext: prop_types_default.a.object
  })
};
Route_Route.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Route = (Route_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Route.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Route = (es_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/NavLink.js
var NavLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var NavLink_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function NavLink_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink_NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = NavLink_objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : NavLink_typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return react_default.a.createElement(react_router_dom_es_Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react_default.a.createElement(es_Link, NavLink_extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? NavLink_extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink_NavLink.propTypes = {
  to: es_Link.propTypes.to,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  location: prop_types_default.a.object,
  activeClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  activeStyle: prop_types_default.a.object,
  style: prop_types_default.a.object,
  isActive: prop_types_default.a.func,
  "aria-current": prop_types_default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink_NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ var es_NavLink = (NavLink_NavLink);
// CONCATENATED MODULE: ./node_modules/react-router/es/Prompt.js
function Prompt_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Prompt_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Prompt_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt_Prompt = function (_React$Component) {
  Prompt_inherits(Prompt, _React$Component);

  function Prompt() {
    Prompt_classCallCheck(this, Prompt);

    return Prompt_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react_default.a.Component);

Prompt_Prompt.propTypes = {
  when: prop_types_default.a.bool,
  message: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]).isRequired
};
Prompt_Prompt.defaultProps = {
  when: true
};
Prompt_Prompt.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      block: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Prompt = (Prompt_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Prompt.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Prompt = (es_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router/es/generatePath.js


var generatePath_patternCache = {};
var generatePath_cacheLimit = 10000;
var generatePath_cacheCount = 0;

var generatePath_compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = generatePath_patternCache[cacheKey] || (generatePath_patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp_default.a.compile(pattern);

  if (generatePath_cacheCount < generatePath_cacheLimit) {
    cache[pattern] = compiledGenerator;
    generatePath_cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = generatePath_compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ var es_generatePath = (generatePath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Redirect.js
var Redirect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Redirect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Redirect_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Redirect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect_Redirect = function (_React$Component) {
  Redirect_inherits(Redirect, _React$Component);

  function Redirect() {
    Redirect_classCallCheck(this, Redirect);

    return Redirect_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = LocationUtils_createLocation(prevProps.to);
    var nextTo = LocationUtils_createLocation(this.props.to);

    if (LocationUtils_locationsAreEqual(prevTo, nextTo)) {
      warning_default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return es_generatePath(to, computedMatch.params);
      } else {
        return Redirect_extends({}, to, {
          pathname: es_generatePath(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react_default.a.Component);

Redirect_Redirect.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  push: prop_types_default.a.bool,
  from: prop_types_default.a.string,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired
};
Redirect_Redirect.defaultProps = {
  push: false
};
Redirect_Redirect.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types_default.a.object
  }).isRequired
};


/* harmony default export */ var es_Redirect = (Redirect_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Redirect.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Redirect = (es_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router/es/StaticRouter.js
var StaticRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function StaticRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StaticRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function StaticRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StaticRouter_addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return StaticRouter_extends({}, location, {
    pathname: StaticRouter_addLeadingSlash(basename) + location.pathname
  });
};

var StaticRouter_stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = StaticRouter_addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return StaticRouter_extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var StaticRouter_createURL = function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
};

var StaticRouter_staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_browser_default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter_StaticRouter = function (_React$Component) {
  StaticRouter_inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    StaticRouter_classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = StaticRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return StaticRouter_addLeadingSlash(_this.props.basename + StaticRouter_createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), StaticRouter_possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = StaticRouter_objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: StaticRouter_stripBasename(basename, LocationUtils_createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: StaticRouter_staticHandler("go"),
      goBack: StaticRouter_staticHandler("goBack"),
      goForward: StaticRouter_staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react_default.a.createElement(es_Router, StaticRouter_extends({}, props, { history: history }));
  };

  return StaticRouter;
}(react_default.a.Component);

StaticRouter_StaticRouter.propTypes = {
  basename: prop_types_default.a.string,
  context: prop_types_default.a.object.isRequired,
  location: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object])
};
StaticRouter_StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter_StaticRouter.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_StaticRouter = (StaticRouter_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/StaticRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_StaticRouter = (es_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router/es/Switch.js
function Switch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Switch_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Switch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch_Switch = function (_React$Component) {
  Switch_inherits(Switch, _React$Component);

  function Switch() {
    Switch_classCallCheck(this, Switch);

    return Switch_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react_default.a.Children.forEach(children, function (element) {
      if (match == null && react_default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = es_matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? react_default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react_default.a.Component);

Switch_Switch.contextTypes = {
  router: prop_types_default.a.shape({
    route: prop_types_default.a.object.isRequired
  }).isRequired
};
Switch_Switch.propTypes = {
  children: prop_types_default.a.node,
  location: prop_types_default.a.object
};


/* harmony default export */ var es_Switch = (Switch_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Switch.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Switch = (es_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/generatePath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_generatePath = (es_generatePath);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/matchPath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_matchPath = (es_matchPath);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(7);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/es/withRouter.js
var withRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function withRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter_withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = withRouter_objectWithoutProperties(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(es_Route, {
      children: function children(routeComponentProps) {
        return react_default.a.createElement(Component, withRouter_extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: prop_types_default.a.func
  };

  return hoist_non_react_statics_cjs_default()(C, Component);
};

/* harmony default export */ var es_withRouter = (withRouter_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/withRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_withRouter = (es_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return es_BrowserRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return es_HashRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Link", function() { return es_Link; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom_es_MemoryRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavLink", function() { return es_NavLink; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom_es_Prompt; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom_es_Redirect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom_es_Route; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom_es_Router; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom_es_StaticRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom_es_Switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom_es_generatePath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom_es_matchPath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom_es_withRouter; });





























/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _navbar = __webpack_require__(9);

var _navbar2 = _interopRequireDefault(_navbar);

var _container = __webpack_require__(18);

var _container2 = _interopRequireDefault(_container);

var _reactRouterDom = __webpack_require__(6);

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
			if (localStorage.getItem("access_token")) {
				$.get("http://localhost:3000/api/usersetting", function (res) {
					localStorage.setItem("user_setting", res);
				});
			}
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

ReactDOM.render(React.createElement(
	_reactRouterDom.BrowserRouter,
	null,
	React.createElement(App, null)
), document.getElementById('app'));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AUTH0_CLIENT_ID = "KF8oNwg3qrbhlT5pMeuJ5OL0IAiIt5PZ";
var AUTH0_DOMAIN = "tses.auth0.com";
var AUTH0_CALLBACK_URL = "http://localhost:3000/"; //location.href;
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
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/profile", "class": "nav-link" },
                            "\u500B\u4EBA\u6A94\u6848",
                            React.createElement(
                                "span",
                                { "class": "badge badge-warning ml-1" },
                                "!"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/searchresult", "class": "nav-link" },
                            "\u6B4C\u66F2\u5217\u8868"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/myfavorite", "class": "nav-link" },
                            "\u6211\u7684\u6700\u611B(\u7121)"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/history", "class": "nav-link" },
                            "\u64AD\u653E\u7D00\u9304(\u7121)"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/playlist", "class": "nav-link" },
                            "\u64AD\u653E\u6E05\u55AE"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/addsong", "class": "nav-link" },
                            "\u65B0\u589E\u6B4C\u66F2"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/song", "class": "nav-link" },
                            "\u6B4C\u66F2(\u66AB\u6642)"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/searchresult", "class": "nav-link" },
                            "\u641C\u5C0B\u7D50\u679C(\u66AB\u6642)"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { href: "#", onClick: this.logout, "class": "nav-link" },
                            "\u767B\u51FA"
                        )
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
            localStorage.setItem("authredirectUri", location.href);
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
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { href: "#", "class": "nav-link", onClick: this.authenticate },
                            "\u767B\u5165"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            _reactRouterDom.Link,
                            { to: "/searchresult", "class": "nav-link" },
                            "\u6B4C\u66F2\u5217\u8868"
                        )
                    )
                )
            );
        }
    }]);

    return NavBarGuest;
}(React.Component);

exports.default = NavBar;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(11),n=__webpack_require__(12),p=__webpack_require__(13),q=__webpack_require__(14),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(16);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _containerAddsong = __webpack_require__(19);

var _containerAddsong2 = _interopRequireDefault(_containerAddsong);

var _containerHistory = __webpack_require__(20);

var _containerHistory2 = _interopRequireDefault(_containerHistory);

var _containerHome = __webpack_require__(21);

var _containerHome2 = _interopRequireDefault(_containerHome);

var _containerMyfavorite = __webpack_require__(22);

var _containerMyfavorite2 = _interopRequireDefault(_containerMyfavorite);

var _containerPlaylist = __webpack_require__(23);

var _containerPlaylist2 = _interopRequireDefault(_containerPlaylist);

var _containerSearchresult = __webpack_require__(24);

var _containerSearchresult2 = _interopRequireDefault(_containerSearchresult);

var _containerSong = __webpack_require__(25);

var _containerSong2 = _interopRequireDefault(_containerSong);

var _reactRouterDom = __webpack_require__(6);

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
		value: function render() {
			return React.createElement(
				'main',
				null,
				React.createElement(
					_reactRouterDom.Switch,
					null,
					React.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _containerHome2.default }),
					React.createElement(_reactRouterDom.Route, { exact: true, path: '/searchresult', component: _containerSearchresult2.default }),
					React.createElement(_reactRouterDom.Route, { exact: true, path: '/addsong', component: _containerAddsong2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/addsong/:number', component: _containerAddsong2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/history', component: _containerHistory2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/myfavorite', component: _containerMyfavorite2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/playlist', component: _containerPlaylist2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/searchresult/:number', component: _containerSearchresult2.default }),
					React.createElement(_reactRouterDom.Route, { path: '/song/:number', component: _containerSong2.default })
				)
			);
		}
	}]);

	return Container;
}(React.Component);

exports.default = Container;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddSong = function AddSong(props) {
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

exports.default = AddSong;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function History(props) {
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

exports.default = History;

/***/ }),
/* 21 */
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Myfavorite = function Myfavorite(props) {
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

exports.default = Myfavorite;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Playlist = function Playlist(props) {
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

exports.default = Playlist;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchresult = function Searchresult(props) {
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

exports.default = Searchresult;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Song = function Song(props) {
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

exports.default = Song;

/***/ })
/******/ ]);