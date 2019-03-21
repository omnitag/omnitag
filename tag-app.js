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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDefault */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toMap; });
/* unused harmony export initMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_constant__ = __webpack_require__(1);


var isArray = Array.isArray;

var getWebpack4Default = function getWebpack4Default(o) {
  return get(o, [__WEBPACK_IMPORTED_MODULE_1_reshow_constant__["a" /* DEFAULT */], __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["a" /* DEFAULT */]], function () {
    return get(o, [__WEBPACK_IMPORTED_MODULE_1_reshow_constant__["a" /* DEFAULT */]], function () {
      return o;
    });
  });
};

var toJS = function toJS(v) {
  return v && v.toJS ? v.toJS() : v;
};

var toMap = function toMap(a) {
  return get(toJS(a), null, {});
};

var initMap = function initMap(o) {
  return function (k, v) {
    return o[k] || (o[k] = getDefaultValue(v));
  };
};

var getDefaultValue = function getDefaultValue(v) {
  return __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(v) ? v() : v;
};

var get = function get(o, path, defaultValue) {
  if (null === o || __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(o)) {
    return getDefaultValue(defaultValue);
  }

  var current = toJS(o);

  if (!isArray(path)) {
    return current;
  }

  path.every(function (a) {
    if (null !== current[a] && __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(current[a])) {
      current = current[a];
      return true;
    } else {
      current = getDefaultValue(defaultValue);
      return false;
    }
  });
  return current;
};

/* harmony default export */ __webpack_exports__["a"] = (get);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STRING; });
var UNDEFINED = 'undefined';
var FUNCTION = 'function';
var OBJECT = 'object';
var SYMBOL = 'symbol';
var DEFAULT = 'default';
var STRING = 'string';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTypeOf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_constant__ = __webpack_require__(1);



var _typeof = function _typeof(o) {
  return __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["e" /* SYMBOL */] === Object(__WEBPACK_IMPORTED_MODULE_0__getTypeOf__["a" /* default */])(o) ? __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["e" /* SYMBOL */] : Object(__WEBPACK_IMPORTED_MODULE_0__getTypeOf__["a" /* default */])(o, __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["c" /* OBJECT */]);
};

/* harmony default export */ __webpack_exports__["a"] = (_typeof);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (classCallCheck);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defineProperties = function defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
};

var createClass = function createClass(Constructor, protoProps, staticProps) {
  if (protoProps) defineProperties(Constructor.prototype, protoProps);
  if (staticProps) defineProperties(Constructor, staticProps);
  return Constructor;
};

/* harmony default export */ __webpack_exports__["a"] = (createClass);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/**
 * !!Important!! do not use reshow-constant here
 * Bable will transpile it to double undefined
 */
var doc = function doc() {
  return 'undefined' !== typeof document ? document : {};
};

var win = function win() {
  return 'undefined' !== typeof window ? window : {};
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectSpread;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getTypeOf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_constant__ = __webpack_require__(1);



function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (Object(__WEBPACK_IMPORTED_MODULE_1__getTypeOf__["a" /* default */])(Object.getOwnPropertySymbols) === __WEBPACK_IMPORTED_MODULE_2_reshow_constant__["b" /* FUNCTION */]) {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(__WEBPACK_IMPORTED_MODULE_0__defineProperty__["a" /* default */])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defineProperty = function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/* harmony default export */ __webpack_exports__["a"] = (_defineProperty);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _possibleConstructorReturn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getTypeOf__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__refError__ = __webpack_require__(26);



function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw Object(__WEBPACK_IMPORTED_MODULE_2__refError__["a" /* default */])();
  }

  var isObject = __WEBPACK_IMPORTED_MODULE_0_reshow_constant__["c" /* OBJECT */] === Object(__WEBPACK_IMPORTED_MODULE_1__getTypeOf__["a" /* default */])(call);
  return call && (isObject || Object(__WEBPACK_IMPORTED_MODULE_1__getTypeOf__["a" /* default */])(call) === __WEBPACK_IMPORTED_MODULE_0_reshow_constant__["b" /* FUNCTION */]) ? call : self;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _getPrototypeOf;
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inherits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getTypeOf__ = __webpack_require__(13);



function _inherits(subClass, superClass) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2__getTypeOf__["a" /* default */])(superClass) !== __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["b" /* FUNCTION */] && superClass !== null) {
    throw new TypeError('Super must be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(__WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__["a" /* default */])(subClass, superClass);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export queryAll */
/* unused harmony export queryAncestor */
/* unused harmony export queryEl */
/* unused harmony export queryOne */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queryFrom__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__queryFrom__["a"]; });

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__queryFrom__["b" /* defaultQuery */]);
var queryAll = __WEBPACK_IMPORTED_MODULE_0__queryFrom__["b" /* defaultQuery */].all,
    queryAncestor = __WEBPACK_IMPORTED_MODULE_0__queryFrom__["b" /* defaultQuery */].ancestor,
    queryEl = __WEBPACK_IMPORTED_MODULE_0__queryFrom__["b" /* defaultQuery */].el,
    queryOne = __WEBPACK_IMPORTED_MODULE_0__queryFrom__["b" /* defaultQuery */].one;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var replaceValue = function replaceValue(obj, arrKey, val, isAppend) {
  var last = arrKey.pop();
  arrKey.forEach(function (k) {
    obj[k] = obj[k] || {};
    obj = obj[k];
  });
  if (isAppend && (!obj[last] || !obj[last].push)) {
    obj[last] = [val];
  } else if (isAppend && obj[last].push) {
    obj[last].push(val);
  } else {
    obj[last] = val;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (replaceValue);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var types = '|number|string|boolean|object|function|undefined|';
/**
 * Do not use this.
 * The class name not reliable after code compress.
 */

var toBase = function toBase(type, name) {
  if (-1 === types.indexOf('|' + type + '|')) {
    if (!name) {
      name = type;
    }

    return name;
  } else {
    return type;
  }
};

var getTypeOf = function getTypeOf(val, name) {
  var type;

  try {
    type = Object.getPrototypeOf(val).constructor.name.toLowerCase();
    return toBase(type, name);
  } catch (ex) {
    type = Object.prototype.toString.call(val).replace(/^\[object\s(.*)\]$/, '$1').toLowerCase();
    return toBase(type, name);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getTypeOf);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLastScript; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_el__ = __webpack_require__(39);

var scriptCount = 0;
var inlineScripts = [];
var queueScripts = {};
var lastScript;
var keys = Object.keys;

var getLastScript = function getLastScript() {
  return lastScript;
};

var handleScriptOnload = function handleScriptOnload(win, errCb) {
  return function (i) {
    if (i) {
      delete queueScripts[i];
    }

    if (!keys(queueScripts).length) {
      inlineScripts.forEach(function (script, key) {
        try {
          lastScript = script;
          win.eval('(function(){ ' + script + ' }())');
        } catch (e) {
          if ('function' !== typeof errCb) {
            throw e;
          } else {
            errCb(e, script);
          }
        }
      });
      inlineScripts = [];
    }
  };
};

var execScript = function execScript(el, win, jsBase, errCb) {
  if (!win) {
    win = window;
  }

  if (!jsBase) {
    jsBase = document.body;
  }

  var thisEl = 'string' === typeof el ? Object(__WEBPACK_IMPORTED_MODULE_0_create_el__["a" /* create */])('div')()({
    innerHTML: el
  }) : el;
  var onLoad = handleScriptOnload(win, errCb);
  var scripts = thisEl.getElementsByTagName('script');

  for (var i = 0, len = scripts.length; i < len; i++) {
    var script = scripts[i];
    var src = script.src;

    if (src) {
      var attrs = script.attributes;
      attrs.key = 'id-' + scriptCount;
      var dScript = Object(__WEBPACK_IMPORTED_MODULE_0_create_el__["b" /* js */])(jsBase)(function () {
        return onLoad(key);
      })(src, {
        key: key
      });
      queueScripts[key] = dScript;
      scriptCount++;
    } else {
      inlineScripts.push(script.innerHTML);
    }
  }

  onLoad();
};

/* harmony default export */ __webpack_exports__["a"] = (execScript);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_constant__ = __webpack_require__(1);



var callFunc = function callFunc(func, args, scope) {
  return __WEBPACK_IMPORTED_MODULE_1_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(func) ? func.apply(scope, args) : undefined;
};

/* harmony default export */ __webpack_exports__["a"] = (callFunc);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPath; });
/* unused harmony export unsetUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getKeyReg__ = __webpack_require__(58);


var uriReg = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;

var getPath = function getPath(url) {
  return uriReg.exec(url)[2];
};

var resetUrl = function resetUrl(url) {
  return url ? url : Object(__WEBPACK_IMPORTED_MODULE_0_win_doc__["a" /* doc */])().URL;
};

var getUrl = function getUrl(key, url) {
  url = resetUrl(url);
  var reg = Object(__WEBPACK_IMPORTED_MODULE_1__getKeyReg__["a" /* default */])(key);
  var exec = reg.exec(url);
  return !exec ? '' : decodeURIComponent(exec[3]);
};

var unsetUrl = function unsetUrl(key, url) {
  var reg = Object(__WEBPACK_IMPORTED_MODULE_1__getKeyReg__["a" /* default */])(key);
  url = resetUrl(url);
  var exec = reg.exec(url);

  if (exec) {
    url = exec[2] === '?' ? url.replace(reg, '?') : url.replace(reg, '');
  }

  return url;
};

var setUrl = function setUrl(key, value, url, KeepRawValue) {
  var reg = Object(__WEBPACK_IMPORTED_MODULE_1__getKeyReg__["a" /* default */])(key);

  if (!KeepRawValue) {
    value = encodeURIComponent(value);
  }

  url = resetUrl(url);
  url = reg.test(url) ? url.replace(reg, '$1' + value) : url + (-1 === url.indexOf('?') ? '?' : '&') + key + '=' + value;
  return url;
};


/* harmony default export */ __webpack_exports__["a"] = (setUrl);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_BaseI13nStore__ = __webpack_require__(25);
/* unused harmony reexport BaseI13nStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i13nDispatcher__ = __webpack_require__(20);
/* unused harmony reexport i13nDispatcher */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__i13nDispatcher__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getTime__ = __webpack_require__(29);
/* unused harmony reexport getTime */
// Stores
 // Dispatch

 // Util



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/* harmony default export */ __webpack_exports__["a"] = (objectWithoutProperties);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return localStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sessionStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_constant__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Storage__["a"]; });






var getStorage = function getStorage(storageType) {
  return function (key) {
    return function (value) {
      var oWin = Object(__WEBPACK_IMPORTED_MODULE_3_win_doc__["b" /* win */])();

      if (!oWin) {
        return;
      }

      var store = Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["a" /* default */])(oWin, [storageType]);

      if (__WEBPACK_IMPORTED_MODULE_4_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(store)) {
        console.warn('Not support. [' + storageType + ']');
        return;
      }

      if (__WEBPACK_IMPORTED_MODULE_4_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(value)) {
        return store.getItem(key);
      } else {
        try {
          return store.setItem(key, value);
        } catch (err) {
          store.clear();
          return store.setItem(key, value);
        }
      }
    };
  };
};

var localStorage = getStorage('localStorage');
var sessionStorage = getStorage('sessionStorage');


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return i13nDispatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_flux_base__ = __webpack_require__(28);

var instance = new __WEBPACK_IMPORTED_MODULE_0_reshow_flux_base__["a" /* Dispatcher */]();
/* harmony default export */ __webpack_exports__["a"] = (instance);
var i13nDispatch = instance.dispatch;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr) || !Array.from) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (toConsumableArray);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__merge__ = __webpack_require__(55);
/* unused harmony reexport default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combine__ = __webpack_require__(56);
/* unused harmony reexport combine */
/* unused harmony reexport combineSub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__removeEmpty__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__removeEmpty__["a"]; });




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_constant__ = __webpack_require__(1);




var sStore = new __WEBPACK_IMPORTED_MODULE_1_get_storage__["a" /* Storage */](__WEBPACK_IMPORTED_MODULE_1_get_storage__["c" /* sessionStorage */]);
var lazyKey = 'lazyAttr';

var lazyAttr = function lazyAttr(key) {
  return function (value) {
    var arr = Object(__WEBPACK_IMPORTED_MODULE_2_get_object_value__["c" /* toMap */])(sStore.get(lazyKey));

    if (__WEBPACK_IMPORTED_MODULE_3_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(key)) {
      return arr;
    }

    if (__WEBPACK_IMPORTED_MODULE_3_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(value)) {
      arr[key] = value;
      sStore.set(lazyKey, arr);
    }

    return arr[key];
  };
};

/* harmony default export */ __webpack_exports__["a"] = (lazyAttr);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_get_object_value__ = __webpack_require__(0);





var BaseTag =
/*#__PURE__*/
function () {
  function BaseTag() {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, BaseTag);

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "key", null);

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "store", null);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(BaseTag, [{
    key: "register",
    value: function register(store, key) {
      this.key = key;
      this.store = store;
      store.addListener(this.init.bind(this), 'init');
      store.addListener(this.action.bind(this), 'action');
      store.addListener(this.impression.bind(this), 'impression');
    }
  }, {
    key: "getStore",
    value: function getStore() {
      return this.store;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.getStore().getState();
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }
  }, {
    key: "getTagData",
    value: function getTagData() {
      var state = this.getState();
      var key = this.getKey();
      var tagData = state.get('tag').get(key).toJS();
      tagData.tagId = state.get('tagId');
      tagData.mpHost = tagData.mpHost || state.get('mpHost');
      tagData.defaultMpHost = state.get('defaultMpHost');
      return tagData;
    }
  }, {
    key: "getClone",
    value: function getClone(key) {
      var state = this.getState();
      var data = Object(__WEBPACK_IMPORTED_MODULE_3_get_object_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3_get_object_value__["b" /* toJS */])(state.get(key)), null, {});
      return JSON.parse(JSON.stringify(data));
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "action",
    value: function action() {}
  }, {
    key: "impression",
    value: function impression() {}
  }]);

  return BaseTag;
}();

/* harmony default export */ __webpack_exports__["a"] = (BaseTag);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectWithoutProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_extends__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reshow_runtime_es_helpers_assertThisInitialized__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reshow_flux_base__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_set_object_value__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_get_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_reshow_constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__i13nDispatcher__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getTime__ = __webpack_require__(29);



















var lStore = new __WEBPACK_IMPORTED_MODULE_14_get_storage__["a" /* Storage */](__WEBPACK_IMPORTED_MODULE_14_get_storage__["b" /* localStorage */]);

var docUrl = function docUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_16_win_doc__["a" /* doc */])().URL;
};

var isArray = Array.isArray;
var keys = Object.keys;
var PARAMS = 'params';
var hashKey = '__hash';
var seqKey = '__seq';
var lazyActionKey = 'lazyAction';

var getParams = function getParams(action) {
  return Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(action, [PARAMS], {});
};

var BaseI13nStore =
/*#__PURE__*/
function (_Store) {
  Object(__WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_inherits__["a" /* default */])(BaseI13nStore, _Store);

  function BaseI13nStore() {
    var _getPrototypeOf2;

    var _this;

    Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, BaseI13nStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(__WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, (_getPrototypeOf2 = Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(BaseI13nStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(__WEBPACK_IMPORTED_MODULE_10_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(_this)), "handleAfterInit", function (state) {
      _this.nextEmits.push('init');

      state = state.set('init', true);
      Object(__WEBPACK_IMPORTED_MODULE_17__i13nDispatcher__["b" /* i13nDispatch */])(state); // for async, need located before lazyAction

      var lazyAction = _this.getLazy();

      if (lazyAction) {
        var handleLazy = function handleLazy(lazeArr, key) {
          var laze = lazeArr[key];

          var _getParams = getParams(laze),
              wait = _getParams.wait,
              stop = _getParams.stop;

          if (!wait || wait <= 0) {
            if (!stop) {
              if (__WEBPACK_IMPORTED_MODULE_15_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(laze, ['params', 'wait']))) {
                delete laze.params.wait;
              }

              Object(__WEBPACK_IMPORTED_MODULE_17__i13nDispatcher__["b" /* i13nDispatch */])(laze);
            }

            delete lazeArr[key];
          } else {
            laze.params.wait = --wait;
          }

          return lazeArr[key];
        };

        var seq = Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(lazyAction, [seqKey]);

        if (isArray(seq)) {
          lazyAction.__seq = seq.filter(function (action, key) {
            return handleLazy(seq, key);
          });
        }

        var hash = Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(lazyAction, [hashKey]);

        if (hash) {
          keys(hash).forEach(function (key) {
            return handleLazy(hash, key);
          });
        }

        lStore.set(lazyActionKey, lazyAction);
      }

      Object(__WEBPACK_IMPORTED_MODULE_17__i13nDispatcher__["b" /* i13nDispatch */])('view');
      return state;
    });

    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_createClass__["a" /* default */])(BaseI13nStore, [{
    key: "sendBeacon",
    value: function sendBeacon(state, action) {
      return state;
    }
  }, {
    key: "processAction",
    value: function processAction(state, action) {
      var vpvid = state.get('vpvid');

      if (vpvid) {
        Object(__WEBPACK_IMPORTED_MODULE_13_set_object_value__["a" /* default */])(action, [PARAMS, 'query', 'vpvid'], vpvid);
      }

      return this.sendBeacon(state, action);
    }
  }, {
    key: "processView",
    value: function processView(state, action) {
      state = this.sendBeacon(state, action);
      return state;
    }
  }, {
    key: "pushLazyAction",
    value: function pushLazyAction(action, key) {
      var _getParams2 = getParams(action),
          params = Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_extends__["a" /* default */])({}, _getParams2);

      var thisAction = {
        params: params,
        type: action.type
      };
      Object(__WEBPACK_IMPORTED_MODULE_13_set_object_value__["a" /* default */])(thisAction, [PARAMS, 'lazeInfo'], {
        from: docUrl(),
        time: Object(__WEBPACK_IMPORTED_MODULE_18__getTime__["a" /* default */])().toString()
      });
      var lazyAction = this.getLazy();

      if (key) {
        Object(__WEBPACK_IMPORTED_MODULE_13_set_object_value__["a" /* default */])(lazyAction, [hashKey, key], thisAction);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_13_set_object_value__["a" /* default */])(lazyAction, [seqKey], thisAction, true);
      }

      lStore.set(lazyActionKey, lazyAction);
    }
  }, {
    key: "mergeWithLazy",
    value: function mergeWithLazy(action, key) {
      var lazyAction = this.getLazy();

      var _get = Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(lazyAction, [hashKey, key, PARAMS], {}),
          stop = _get.stop,
          wait = _get.wait,
          lazeInfo = _get.lazeInfo,
          lazyKey = _get.lazyKey,
          lazeParams = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectWithoutProperties__["a" /* default */])(_get, ["stop", "wait", "lazeInfo", "lazyKey"]);

      keys(lazeParams).forEach(function (pKey) {
        var p = lazeParams[pKey];
        var newP = __WEBPACK_IMPORTED_MODULE_15_reshow_constant__["c" /* OBJECT */] === Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(p) ? Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, p, Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(action, [PARAMS, pKey], {})) : Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(action, [PARAMS, pKey], p);
        Object(__WEBPACK_IMPORTED_MODULE_13_set_object_value__["a" /* default */])(action, [PARAMS, pKey], newP);
      });
      delete action.params.withLazy;
      return action;
    }
  }, {
    key: "removeLazy",
    value: function removeLazy(key) {
      var lazyAction = this.getLazy();

      if (Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["a" /* default */])(lazyAction, [hashKey, key])) {
        delete lazyAction.__hash[key];
        lStore.set(lazyActionKey, lazyAction);
      }
    }
  }, {
    key: "getLazy",
    value: function getLazy(key) {
      var lazyAction = Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["c" /* toMap */])(lStore.get(lazyActionKey));
      return __WEBPACK_IMPORTED_MODULE_15_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(key) ? lazyAction : Object(__WEBPACK_IMPORTED_MODULE_12_get_object_value__["c" /* toMap */])(lazyAction.__hash)[key];
    }
  }, {
    key: "handleAction",
    value: function handleAction(state, action) {
      var actionHandler = state.get('actionHandler');

      var _getParams3 = getParams(action),
          withLazy = _getParams3.withLazy;

      if (!actionHandler) {
        actionHandler = this.processAction.bind(this);
      }

      if (withLazy) {
        action = this.mergeWithLazy(action, withLazy);
      }

      var next = actionHandler(state, action);

      var _getParams4 = getParams(action),
          wait = _getParams4.wait,
          stop = _getParams4.stop,
          lazyKey = _getParams4.lazyKey; // need locate after next


      if (__WEBPACK_IMPORTED_MODULE_15_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(wait) && !stop) {
        this.nextEmits.push('action');

        if (withLazy && withLazy !== lazyKey) {
          this.removeLazy(withLazy);
        }
      }

      return next;
    }
  }, {
    key: "handleInit",
    value: function handleInit(state, action) {
      var initHandler = state.get('initHandler');

      if (__WEBPACK_IMPORTED_MODULE_15_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(initHandler)) {
        return initHandler(state, action, this.handleAfterInit);
      } else {
        return this.handleAfterInit(state);
      }
    }
  }, {
    key: "handleImpression",
    value: function handleImpression(state, action) {
      var _this2 = this;

      state = state.set('lastUrl', docUrl());

      var run = function run(state) {
        var impressionHandler = state.get('impressionHandler');

        if (!impressionHandler) {
          impressionHandler = _this2.processView.bind(_this2);
        }

        var next = impressionHandler(state, action);

        var _getParams5 = getParams(action),
            wait = _getParams5.wait,
            stop = _getParams5.stop; // need locate after next


        if (__WEBPACK_IMPORTED_MODULE_15_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_typeof__["a" /* default */])(wait) && !stop) {
          _this2.nextEmits.push('impression');
        }

        return next;
      };

      var init = state.get('init');

      if (!init) {
        return this.handleInit(state, action);
      } else {
        return run(state);
      }
    }
  }, {
    key: "reduce",
    value: function reduce(state, action) {
      switch (action.type) {
        case 'action':
          return this.handleAction(state, action);

        case 'view':
          return this.handleImpression(state, action);

        case 'config/set':
          return state.merge(action.params);

        case 'reset':
          /**
           * !!Important!!
           * Keep in mind, always don't reset localstorage
           * It will effect lazy action
           */
          return this.reset().merge(action.params);

        default:
          return !!keys(action).length ? state.merge(action) : state;
      }
    }
  }]);

  return BaseI13nStore;
}(__WEBPACK_IMPORTED_MODULE_11_reshow_flux_base__["b" /* Store */]);

/* harmony default export */ __webpack_exports__["a"] = (BaseI13nStore);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var refError = function refError() {
  return new ReferenceError("this hasn't been initialised - super() hasn't been called");
};

/* harmony default export */ __webpack_exports__["a"] = (refError);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__refError__ = __webpack_require__(26);

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw Object(__WEBPACK_IMPORTED_MODULE_0__refError__["a" /* default */])();
  }

  return self;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Store__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Store__["a"]; });
/* unused harmony reexport CHANGE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dispatcher__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Dispatcher__["a"]; });



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var fixDigit = function fixDigit(i) {
  return i < 10 ? 0 + '' + i : i;
};

var getTime = function getTime(s) {
  var date = s ? new Date(s) : new Date();
  var arr = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(function (v) {
    return fixDigit(v);
  });
  return {
    toArray: function toArray() {
      return arr;
    },
    toString: function toString() {
      return [arr.slice(0, 3).join('-'), 'T', arr.slice(3).join(':'), 'Z'].join('');
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (getTime);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDebugFlag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_i13n__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_exec_script__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_win_doc__ = __webpack_require__(5);




var debugFlag = false;

var logError = function logError(error, action) {
  var _ref = error || {},
      message = _ref.message,
      stack = _ref.stack;

  stack = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(error, ['stack'], '').split(/\n/);
  var wait = action && -1 !== action.indexOf('I13nScript') ? 0 : undefined;
  Object(__WEBPACK_IMPORTED_MODULE_1_i13n__["a" /* i13nDispatch */])('action', {
    wait: wait,
    I13N: {
      action: action,
      category: 'Error',
      label: {
        message: message,
        stack: stack,
        url: Object(__WEBPACK_IMPORTED_MODULE_3_win_doc__["a" /* doc */])().URL,
        lastExec: Object(__WEBPACK_IMPORTED_MODULE_2_exec_script__["b" /* getLastScript */])()
      }
    }
  });

  if (debugFlag) {
    throw error;
  }
};

var setDebugFlag = function setDebugFlag(bool) {
  return debugFlag = bool;
};

/* harmony default export */ __webpack_exports__["a"] = (logError);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_i13n__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_to_percent_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_array_merge__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_css_query_selector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_seturl__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_get_cookie__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_get_random_id__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logError__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__getOptionText__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__getElValue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__getRadioValue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lazyAttr__ = __webpack_require__(23);









 // local







 // constant

var keys = Object.keys;

var utils = function utils() {
  var o = {
    merge: function merge() {
      var results = {};

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args.forEach(function (a) {
        return results = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, results, a);
      });
      return results;
    },
    error: function error(message) {
      return Object(__WEBPACK_IMPORTED_MODULE_10__logError__["a" /* default */])({
        message: message
      }, 'CustomError');
    },
    arrayFrom: function arrayFrom(arr) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(arr);
    },
    objectToArray: function objectToArray(obj) {
      return keys(obj).map(function (key) {
        return obj[key];
      });
    },
    getNum: function getNum(s) {
      return Object(__WEBPACK_IMPORTED_MODULE_3_to_percent_js__["a" /* getNum */])(Object(__WEBPACK_IMPORTED_MODULE_11__text__["a" /* default */])(s));
    },
    joinCategory: function joinCategory(arr) {
      return arr.map(function (item) {
        return Object(__WEBPACK_IMPORTED_MODULE_11__text__["a" /* default */])(item).replace('/', '-');
      }).join('/');
    },
    dispatch: __WEBPACK_IMPORTED_MODULE_2_i13n__["a" /* i13nDispatch */],
    isArray: Array.isArray,
    keys: keys,
    removeEmpty: __WEBPACK_IMPORTED_MODULE_4_array_merge__["a" /* removeEmpty */],
    query: __WEBPACK_IMPORTED_MODULE_5_css_query_selector__["a" /* default */],
    queryFrom: __WEBPACK_IMPORTED_MODULE_5_css_query_selector__["b" /* queryFrom */],
    getUrl: __WEBPACK_IMPORTED_MODULE_6_seturl__["c" /* getUrl */],
    get: __WEBPACK_IMPORTED_MODULE_9_get_object_value__["a" /* default */],
    getOptionText: __WEBPACK_IMPORTED_MODULE_12__getOptionText__["a" /* default */],
    getElValue: __WEBPACK_IMPORTED_MODULE_13__getElValue__["a" /* default */],
    getRadioValue: __WEBPACK_IMPORTED_MODULE_14__getRadioValue__["a" /* default */],
    getCookie: __WEBPACK_IMPORTED_MODULE_7_get_cookie__["a" /* default */],
    getRandomId: __WEBPACK_IMPORTED_MODULE_8_get_random_id__["a" /* default */],
    delegate: __WEBPACK_IMPORTED_MODULE_15__delegate__["a" /* default */],
    lazyAttr: __WEBPACK_IMPORTED_MODULE_16__lazyAttr__["a" /* default */],
    text: __WEBPACK_IMPORTED_MODULE_11__text__["a" /* default */],
    toJS: __WEBPACK_IMPORTED_MODULE_9_get_object_value__["b" /* toJS */]
  };
  return o;
};

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export round */
/* unused harmony export toRoundNum */
/* unused harmony export percent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNum; });
/* unused harmony export toInt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);

var numTypes = '|number|string|';

var toPercent = function toPercent(num) {
  return percent(num) + '%';
};

var percent = function percent(num) {
  return round(toNum(num) * 100);
};

var round = function round(f) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return toNum(f).toFixed(precision);
};

var toRoundNum = function toRoundNum(f) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return toNum(round(f, precision));
};

var toNum = function toNum(num) {
  if ('undefined' === typeof num) {
    return 0;
  } else if (-1 === numTypes.indexOf('|' + Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(num) + '|') || !num) {
    return Number(num);
  } else {
    var maybeFloat = parseFloat(num);
    var maybeInt = parseInt(num, 10);

    if (maybeFloat === maybeInt) {
      return maybeInt;
    } else {
      return isNaN(maybeFloat) ? 0 : maybeFloat;
    }
  }
};

var toInt = function toInt(num) {
  return toNum(round(num, 0));
};

var numReg = /(\-)?(\d+)(\.)?(\d+)?/g;

var getNum = function getNum(s) {
  var match = s.replace(',', '').match(numReg);

  if (!match) {
    console.warn('Get number fail', s);
    return 0;
  } else {
    return toNum(match[0]);
  }
};


/* unused harmony default export */ var _unused_webpack_default_export = (toPercent);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cacheReg; });
var esc = /[|\\{}()[\]^$+*?.]/g;
var getSafeReg = function getSafeReg(name) {
    return name.replace(esc, '\\$&');
};
var cacheReg = function cacheReg(cache) {
    return function (regString) {
        return function (name) {
            if (!cache[name]) {
                cache[name] = new RegExp(regString(name));
            }
            return cache[name];
        };
    };
};
/* harmony default export */ __webpack_exports__["b"] = (getSafeReg);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCookieRegString */
/* unused harmony export getCookieReg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_safe_reg__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_win_doc__ = __webpack_require__(5);



var getRegString = function getRegString(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_get_safe_reg__["b" /* default */])(name) + '=([^;]+)';
};

var cache = Object(__WEBPACK_IMPORTED_MODULE_0_get_safe_reg__["a" /* cacheReg */])({})(getRegString);

var getCookieReg = function getCookieReg(name) {
  return cache(name);
};

var docCookie = function docCookie(cookie) {
  return cookie || Object(__WEBPACK_IMPORTED_MODULE_1_win_doc__["a" /* doc */])().cookie;
};

var getCookie = function getCookie(name, cookie) {
  cookie = docCookie(cookie);
  var value = getCookieReg(name).exec(cookie);
  return value !== null ? decodeURIComponent(value[1]) : null;
};

var setCookie = function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  Object(__WEBPACK_IMPORTED_MODULE_1_win_doc__["a" /* doc */])().cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

/* harmony default export */ __webpack_exports__["a"] = (getCookie);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return new Date().getTime() + '' + Math.random();
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_query_selector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_call_func__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_constant__ = __webpack_require__(1);





var isArray = Array.isArray;

var delegate = function delegate(el, type, childs, defaultFunc) {
  if (!el || !childs || !childs.length) {
    return;
  }

  if (!isArray(childs)) {
    childs = [{
      select: childs
    }];
  }

  __WEBPACK_IMPORTED_MODULE_2_css_query_selector__["a" /* default */].el(el).addEventListener(type, function (e) {
    var t = e.target;
    var isRun;
    childs.some(function (_ref) {
      var select = _ref.select,
          func = _ref.func;
      var arrSel = __WEBPACK_IMPORTED_MODULE_2_css_query_selector__["a" /* default */].all(select);

      if (!arrSel.length) {
        return false;
      }

      if (__WEBPACK_IMPORTED_MODULE_4_reshow_constant__["b" /* FUNCTION */] !== Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_typeof__["a" /* default */])(func)) {
        func = defaultFunc;
      }

      arrSel.some(function (childEl) {
        if (t.isSameNode(childEl) || childEl.contains(t)) {
          Object(__WEBPACK_IMPORTED_MODULE_3_call_func__["a" /* default */])(func, [Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, e, {
            currentTarget: childEl
          })]);
          isRun = true;
          return true;
        } else {
          return false;
        }
      });

      if (isRun) {
        return true;
      } else {
        return false;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (delegate);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beacon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_seturl__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_constant__ = __webpack_require__(1);





var GET = 'GET';
var POST = 'POST';
var keys = Object.keys;

var req = function req(url, callback, type, query) {
  if (!type) {
    type = GET;
  }

  var w = Object(__WEBPACK_IMPORTED_MODULE_2_win_doc__["b" /* win */])();
  var request = __WEBPACK_IMPORTED_MODULE_4_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(w.XDomainRequest) ? w.XDomainRequest : w.XMLHttpRequest;

  if (!request) {
    return false;
  }

  var oReq = new request();

  if (__WEBPACK_IMPORTED_MODULE_4_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(callback)) {
    oReq.onload = callback(oReq);
  }

  oReq.open(type, url);
  oReq.send(query);
  return true;
};

var imageTag = function imageTag(url) {
  return new Image().src = url;
};

var beaconApi = function beaconApi(url, query) {
  var navigator = Object(__WEBPACK_IMPORTED_MODULE_3_get_object_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_win_doc__["b" /* win */])(), ['navigator'], {});
  var oSendBeacon = navigator.sendBeacon;

  if (!oSendBeacon) {
    return false;
  }

  oSendBeacon.bind(navigator)(url, query);
  return true;
};

var dataToQuery = function dataToQuery(data) {
  var url = '?';

  if (!data) {
    return url;
  }

  keys(data).forEach(function (key) {
    url = Object(__WEBPACK_IMPORTED_MODULE_1_seturl__["a" /* default */])(key, data[key], url);
  });
  return url.substring(2);
};

var beacon = function beacon(url, data, ajax, imgTag) {
  if (!ajax) {
    ajax = req;
  }

  if (!imgTag) {
    imgTag = imageTag;
  }

  var thisUrl = url;
  var query = dataToQuery(data);
  var getUrl = thisUrl + '?' + query;

  if (2036 >= getUrl.length) {
    imgTag(getUrl);
  } else {
    beaconApi(url, query) || ajax(thisUrl, null, POST, query) || imgTag(getUrl);
  }
};

/* harmony default export */ __webpack_exports__["b"] = (req);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);



var BaseGTag =
/*#__PURE__*/
function () {
  function BaseGTag(props) {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, BaseGTag);

    this.props = props || {};
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(BaseGTag, [{
    key: "init",
    value: function init() {}
  }, {
    key: "push",
    value: function push(config) {}
  }]);

  return BaseGTag;
}();

/* harmony default export */ __webpack_exports__["a"] = (BaseGTag);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return js; });
/* unused harmony export css */
/* unused harmony export inject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);


var doc = function doc() {
  return document;
};

var keys = Object.keys;

var inject = function inject(base, isStart) {
  return function (dNode) {
    if ('function' === typeof base) {
      base = base();
    }

    if (base && (base.nodeName === 'BODY' || base.nodeName === 'HEAD')) {
      if (isStart && base.firstChild) {
        base.insertBefore(dNode, base.firstChild);
        return;
      } else {
        base.appendChild(dNode);
        return;
      }
    } else {
      var d = doc();

      if (!base) {
        base = d.currentScript ? d.currentScript : d.body;
      }

      var parentNode = base.parentNode;

      if (parentNode) {
        if (!isStart) {
          if (base.nextSibling) {
            parentNode.insertBefore(dNode, base.nextSibling);
            return;
          } else {
            parentNode.appendChild(dNode);
            return;
          }
        } else {
          parentNode.insertBefore(dNode, base);
          return;
        }
      }

      d.body.appendChild(dNode);
    }
  };
};

var create = function create(tag) {
  return function (callback) {
    return function (attrs) {
      var d = doc();
      var dNode = d.createElement(tag);

      if (attrs) {
        keys(attrs).forEach(function (key) {
          return dNode[key] = attrs[key];
        });
      }

      if (callback) {
        dNode.onreadystatechange = dNode.onload = function () {
          var readyState = dNode.readyState;

          if (!readyState || -1 !== '|loaded|complete|'.indexOf('|' + readyState + '|')) {
            setTimeout(callback);
          }
        };
      }

      return dNode;
    };
  };
};

var js = function js(base, isStart) {
  return function (callback) {
    return function (url, attrs) {
      var dNode = create('script')(callback)(Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({
        type: 'text/javascript'
      }, attrs));

      if (base) {
        inject(base, isStart)(dNode);
      }

      dNode.src = url;
      return dNode;
    };
  };
};

var css = function css(base, isStart) {
  return function (callback) {
    return function (url, attrs) {
      var dNode = create('link')(callback)(Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({
        rel: 'stylesheet',
        type: 'text/css'
      }, attrs));

      if (base) {
        inject(base, isStart)(dNode);
      }

      dNode.href = url;
      return dNode;
    };
  };
};



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__client__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_i13n__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_i13n_store__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parse_ini_string__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_object_nested__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_exec_script__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_get_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_set_object_value__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_css_query_selector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reshow_constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_call_func__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logError__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delegate__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__req__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mergeConfig__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lazyAttr__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lazyProducts__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__debug_tag__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__google_tag__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__usergram_tag__ = __webpack_require__(72);












 // local import








 // tags



 // constant

var keys = Object.keys;
var lStore = new __WEBPACK_IMPORTED_MODULE_6_get_storage__["a" /* Storage */](__WEBPACK_IMPORTED_MODULE_6_get_storage__["b" /* localStorage */]);
var PARAMS = 'params';
/**
 * functions
 */

var getParams = function getParams(action) {
  return Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(action, [PARAMS], {});
};

var addSectionEvent = function addSectionEvent(configs, nextDelegates) {
  return function (section) {
    var secs = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['sec', section]);

    if (!secs) {
      console.warn('Section: [' + section + '] not found.');
      return;
    }

    Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(secs, ['selects'], []).forEach(function (select, skey) {
      var type = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(secs, ['types', skey]);

      var func = function func(e) {
        Object(__WEBPACK_IMPORTED_MODULE_1_i13n__["a" /* i13nDispatch */])({
          lastEvent: e,
          i13nCbParams: JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(secs, [PARAMS, skey]))
        });
        var scriptName = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(secs, ['scripts', skey]);

        if (!scriptName) {
          console.warn('Script name not found', secs, skey);
          return;
        }

        var scriptCode = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['script', scriptName]);

        if (scriptCode) {
          Object(__WEBPACK_IMPORTED_MODULE_5_exec_script__["a" /* default */])(scriptCode, null, null, function (e) {
            return Object(__WEBPACK_IMPORTED_MODULE_13__logError__["a" /* default */])(e, 'I13nScriptErr');
          });
        } else {
          console.warn('Script: [' + scriptName + '] not found.');
        }
      };

      var sels = __WEBPACK_IMPORTED_MODULE_9_css_query_selector__["a" /* default */].all(select);

      if (!sels.length && 'click' === type || 'delegate' === type) {
        nextDelegates.push({
          select: select,
          func: func
        });
      } else {
        sels.forEach(function (el) {
          return el.addEventListener(type, func);
        });
      }
    });
  };
};

var pushPageScript = function pushPageScript(configs, nextConfigs) {
  return function (name) {
    var arrScriptName = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['page', name, 'scripts']);

    if (!arrScriptName) {
      return;
    }

    arrScriptName.forEach(function (scriptName, key) {
      var pageScript = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['script', scriptName]);

      if (pageScript) {
        var script = [pageScript];
        var scriptParam = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['page', name, PARAMS, key]);

        if (scriptParam) {
          script.push(JSON.parse(scriptParam));
        }

        nextConfigs.nextScripts.push(script);
      }
    });
  };
};

var handleError = function handleError(e) {
  var error = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(e, ['error'], {
    message: Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(e, ['message'])
  });
  var type = e.error ? 'WindowScriptErr' : 'ExternalScriptErr';
  Object(__WEBPACK_IMPORTED_MODULE_13__logError__["a" /* default */])(error, type);
};

var processText = function processText(state, done) {
  return function (maybeText, arrMerge) {
    var userConfig = __WEBPACK_IMPORTED_MODULE_11_reshow_constant__["d" /* STRING */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(maybeText) ? Object(__WEBPACK_IMPORTED_MODULE_4_object_nested__["a" /* nest */])(Object(__WEBPACK_IMPORTED_MODULE_3_parse_ini_string__["a" /* default */])(maybeText), '_') : maybeText;
    Object(__WEBPACK_IMPORTED_MODULE_18__mergeConfig__["a" /* default */])(userConfig, arrMerge);
    initTags(userConfig);
    var nextConfigs = initRouter(userConfig);
    setTimeout(function () {
      state = state.merge(userConfig);
      __WEBPACK_IMPORTED_MODULE_2_i13n_store__["a" /* default */].addListener(initPageScript, 'init'); // The last Line

      done(state.set('nextConfigs', nextConfigs));
    }, Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(nextConfigs, ['timeout'], 0));
  };
};
/**
 * init functions
 */


var initPageScript = function initPageScript() {
  Object(__WEBPACK_IMPORTED_MODULE_10_win_doc__["b" /* win */])().addEventListener('error', handleError);
  Object(__WEBPACK_IMPORTED_MODULE_10_win_doc__["b" /* win */])().i13n = Object(__WEBPACK_IMPORTED_MODULE_14__utils__["a" /* default */])();
  var state = __WEBPACK_IMPORTED_MODULE_2_i13n_store__["a" /* default */].getState();

  var _toJS = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('nextConfigs')),
      nextScripts = _toJS.nextScripts,
      nextSections = _toJS.nextSections;

  nextScripts.forEach(function (script) {
    if (script[1]) {
      Object(__WEBPACK_IMPORTED_MODULE_1_i13n__["a" /* i13nDispatch */])({
        i13nCbParams: script[1]
      });
    }

    Object(__WEBPACK_IMPORTED_MODULE_5_exec_script__["a" /* default */])(script[0], null, null, function (e) {
      return Object(__WEBPACK_IMPORTED_MODULE_13__logError__["a" /* default */])(e, 'InitI13nScriptErr');
    });
  });
  var nextDelegates = [];
  var doAddSectionEvent = addSectionEvent({
    sec: Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('sec')),
    script: Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('script'))
  }, nextDelegates);
  keys(nextSections).forEach(function (sec) {
    return doAddSectionEvent(sec);
  });
  Object(__WEBPACK_IMPORTED_MODULE_15__delegate__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_10_win_doc__["a" /* doc */])(), 'click', nextDelegates);
  Object(__WEBPACK_IMPORTED_MODULE_12_call_func__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('nextCallback')));
};

var initRouter = function initRouter(configs) {
  var router = new __WEBPACK_IMPORTED_MODULE_16__Router__["a" /* default */]();
  var nextConfigs = {
    nextScripts: [],
    nextSections: {},
    timeout: 0
  };
  var exePushPageScript = pushPageScript(configs, nextConfigs);
  Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['router', 'rules'], []).forEach(function (rule, key) {
    router.addRoute(rule, function () {
      var pageName = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['router', 'pages', key]);
      var pageConfigs = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['page', pageName]);
      exePushPageScript(pageName);
      Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(pageConfigs, ['secs'], []).forEach(function (sec) {
        return nextConfigs.nextSections[sec] = 1;
      });
      return Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(pageConfigs, ['timeout'], 0);
    });
  });
  var urlPathName = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['location'], function () {
    return Object(__WEBPACK_IMPORTED_MODULE_10_win_doc__["a" /* doc */])().location.pathname;
  });
  var match = router.match(urlPathName);

  if (match) {
    var timeouts = [];
    timeouts.push(match.fn());

    while (match = match.next()) {
      timeouts.push(match.fn());
    }

    nextConfigs.timeout = Math.max.apply(Math, timeouts);
  }

  return nextConfigs;
};

var initTags = function initTags(configs) {
  var tagMap = {
    debug: __WEBPACK_IMPORTED_MODULE_21__debug_tag__["a" /* default */],
    gtag: __WEBPACK_IMPORTED_MODULE_22__google_tag__["a" /* default */],
    usergram: __WEBPACK_IMPORTED_MODULE_23__usergram_tag__["a" /* default */]
  };
  var tags = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(configs, ['tag'], {});
  keys(tags).forEach(function (key) {
    var TAG = tagMap[key];

    if (tags[key].enabled && TAG) {
      if ('debug' === key) {
        Object(__WEBPACK_IMPORTED_MODULE_13__logError__["b" /* setDebugFlag */])(true);
      }

      TAG.register(__WEBPACK_IMPORTED_MODULE_2_i13n_store__["a" /* default */], key);
    }
  });
};
/**
 * Handler
 */


var initHandler = function initHandler(state, action, initDone) {
  var params = getParams(action);
  state = state.merge(params);
  var iniUrl = params.iniUrl,
      iniCb = params.iniCb;
  var process = processText(state, initDone);

  var cb = function cb(maybeText) {
    return __WEBPACK_IMPORTED_MODULE_11_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(iniCb) ? iniCb(maybeText, process) : process(maybeText);
  };

  if (__WEBPACK_IMPORTED_MODULE_11_reshow_constant__["d" /* STRING */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(iniUrl)) {
    var localIni = lStore.get(iniUrl);
    var sessionIni = Object(__WEBPACK_IMPORTED_MODULE_19__lazyAttr__["a" /* default */])(iniUrl);

    if (sessionIni() && localIni) {
      cb(localIni);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_17__req__["b" /* default */])(iniUrl, function (oReq) {
        return function (e) {
          cb(oReq.responseText);
          lStore.set(iniUrl, oReq.responseText);
          sessionIni(true);
        };
      });
    }
  } else {
    cb(iniUrl); // assign config object
  }

  return state;
};

var actionHandler = function actionHandler(state, action) {
  var params = getParams(action);
  var I13N = params.I13N;
  var i13nCb = params.i13nCb,
      lazeInfo = params.lazeInfo,
      i13nPageCb = params.i13nPageCb,
      wait = params.wait,
      lazyKey = params.lazyKey;
  var i13nCbParams = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('i13nCbParams'));

  if (__WEBPACK_IMPORTED_MODULE_11_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(i13nCb)) {
    I13N = i13nCb(Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["b" /* toJS */])(state.get('lastEvent')), Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(I13N, null, {}), i13nCbParams, state);
    delete action.params.i13nCb;
  }

  if (lazeInfo) {
    I13N.lazeInfo = lazeInfo;
  } // reset I13N


  state = state.set('I13N', I13N);

  if (!I13N) {
    Object(__WEBPACK_IMPORTED_MODULE_8_set_object_value__["a" /* default */])(action, [PARAMS, 'stop'], true);
  } else {
    if (__WEBPACK_IMPORTED_MODULE_11_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(wait)) {
      Object(__WEBPACK_IMPORTED_MODULE_8_set_object_value__["a" /* default */])(action, [PARAMS, 'I13N'], Object(__WEBPACK_IMPORTED_MODULE_20__lazyProducts__["b" /* forEachStoreProducts */])(I13N));
      __WEBPACK_IMPORTED_MODULE_2_i13n_store__["a" /* default */].pushLazyAction(action, lazyKey);
    }
  }

  if (__WEBPACK_IMPORTED_MODULE_11_reshow_constant__["b" /* FUNCTION */] === Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(i13nPageCb)) {
    var i13nPage = i13nPageCb(action, I13N, i13nCbParams);

    if (i13nPage) {
      var stateI13nPage = state.get('i13nPage');
      state = state.set('i13nPage', stateI13nPage ? stateI13nPage.merge(i13nPage) : i13nPage);
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_20__lazyProducts__["a" /* default */])(state.delete('lastEvent').delete('i13nCbParams'));
};

var impressionHandler = function impressionHandler(state, action) {
  return Object(__WEBPACK_IMPORTED_MODULE_20__lazyProducts__["a" /* default */])(state);
};

var getIni = function getIni(iniUrl, iniCb) {
  var isLoad = false;

  var run = function run(e) {
    if (!isLoad) {
      isLoad = true;
      Object(__WEBPACK_IMPORTED_MODULE_1_i13n__["a" /* i13nDispatch */])('reset', {
        initHandler: initHandler,
        actionHandler: actionHandler,
        impressionHandler: impressionHandler
      });
      Object(__WEBPACK_IMPORTED_MODULE_1_i13n__["a" /* i13nDispatch */])('view', {
        iniUrl: iniUrl,
        iniCb: iniCb,
        initTrigerBy: e.type
      });
    }
  };

  run({
    type: 'directly'
  });
};

/* harmony default export */ __webpack_exports__["a"] = (getIni);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/* harmony default export */ __webpack_exports__["a"] = (_extends);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CHANGE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mitt__ = __webpack_require__(45);




var CHANGE = 'chg';

var Store =
/*#__PURE__*/
function () {
  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(Store, [{
    key: "reduce",
    value: function reduce() {
      console.error('Not override reduce().');
    }
  }, {
    key: "getInitialState",
    value: function getInitialState() {
      console.error('Not override getInitialState().');
    }
  }, {
    key: "equals",
    value: function equals(one, two) {
      return one === two;
    }
  }]);

  function Store(dispatcher) {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, Store);

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "getState", function () {
      return _this._state;
    });

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "__invokeOnDispatch", function (action) {
      var startingState = _this._state;

      var endingState = _this.reduce(startingState, action);

      if (endingState === undefined) {
        console.error('reduce() return undefined.');
      }

      if (!_this.equals(startingState, endingState)) {
        _this._state = endingState;

        _this.emit(CHANGE);
      }

      var next = _this.nextEmits.slice(0);

      _this.nextEmits = [];
      next.forEach(function (emit) {
        return _this.emit(emit);
      });
    });

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "emit", function (e) {
      return _this.mitt.emit(e);
    });

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "addListener", function (listener, e) {
      return _this.mitt.on(e, listener);
    });

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "removeListener", function (listener, e) {
      return _this.mitt.off(e, listener);
    });

    dispatcher.register(this.__invokeOnDispatch);
    this._state = this.reset();
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(Store, [{
    key: "reset",
    value: function reset() {
      this.mitt = new __WEBPACK_IMPORTED_MODULE_3__mitt__["a" /* default */]();
      this.nextEmits = [];
      return this.getInitialState();
    }
    /* Following not extendable */

  }]);

  return Store;
}();

/* harmony default export */ __webpack_exports__["a"] = (Store);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var type = function type(all) {
  return function (t) {
    return all[t] || (all[t] = []);
  };
};

var mitt = function mitt() {
  var all = type({});
  return {
    on: function on(t, handler) {
      return all(t).push(handler);
    },
    off: function off(t, handler) {
      return all(t).splice(all(t).indexOf(handler) >>> 0, 1);
    },
    emit: function emit(t, state) {
      for (var a = all(t).slice(), i = 0, j = a.length; i < j; i++) {
        a[i](state);
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (mitt);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);



var Dispatcher = function Dispatcher() {
  var _this = this;

  Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, Dispatcher);

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "cbs", []);

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "register", function (cb) {
    return _this.cbs.push(cb);
  });

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "dispatch", function (payload, params) {
    if (!payload) {
      payload = {};
    }

    if ('string' === typeof payload) {
      payload = {
        type: payload,
        params: params
      };

      if (!params) {
        delete payload.params;
      }
    }

    _this.cbs.forEach(function (c) {
      return c(payload);
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Dispatcher);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_constant__ = __webpack_require__(1);





var keys = Object.keys;

var toInt = function toInt(d) {
  return parseInt(d, 10);
};

var Storage =
/*#__PURE__*/
function () {
  function Storage(_storage) {
    Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, Storage);

    this._storage = _storage;
  }

  Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_createClass__["a" /* default */])(Storage, [{
    key: "set",
    value: function set(k, v) {
      var _v = JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_3_get_object_value__["b" /* toJS */])(v));

      var vLen = _v.length;
      var s = vLen + ',' + _v;

      this._storage(k)(s);

      return new Storage(this._storage);
    }
  }, {
    key: "merge",
    value: function merge(arr) {
      var _this = this;

      if (!arr || __WEBPACK_IMPORTED_MODULE_4_reshow_constant__["c" /* OBJECT */] !== Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(arr)) {
        return this;
      }

      var pKeys = keys(arr);

      if (!pKeys || !pKeys.length) {
        return this;
      }

      pKeys.forEach(function (key) {
        return _this.set(key, arr[key]);
      });
      return new Storage(this._storage);
    }
  }, {
    key: "get",
    value: function get(k) {
      var s = this._storage(k)();

      if (!s) {
        return;
      }

      var iStar = s.indexOf(',');
      var vLen = toInt(s.substring(0, iStar));
      var value = s.substr(iStar + 1);
      return vLen === value.length ? JSON.parse(value) : null;
    }
  }]);

  return Storage;
}();

/* harmony default export */ __webpack_exports__["a"] = (Storage);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_i13n_build_es_src_stores_i13nStore__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_i13n_build_es_src_stores_i13nStore__["a"]; });



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_get__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_BaseI13nStore__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__i13nDispatcher__ = __webpack_require__(20);













var Map =
/*#__PURE__*/
function () {
  function Map(obj) {
    Object(__WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, Map);

    Object(__WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "_state", {});

    if (obj) {
      this._state = obj;
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_createClass__["a" /* default */])(Map, [{
    key: "get",
    value: function get(k) {
      return 'object' === Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_typeof__["a" /* default */])(this._state[k]) && null !== this._state[k] ? new Map(this._state[k]) : this._state[k];
    }
  }, {
    key: "set",
    value: function set(k, v) {
      this._state[k] = Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["b" /* toJS */])(v);
      return new Map(this._state);
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      delete this._state[k];
      return new Map(this._state);
    }
  }, {
    key: "merge",
    value: function merge(arr) {
      this._state = Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, this._state, Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["b" /* toJS */])(arr));
      return new Map(this._state);
    }
  }, {
    key: "toJS",
    value: function toJS() {
      return this._state;
    }
  }]);

  return Map;
}();

var I13nStore =
/*#__PURE__*/
function (_BaseI13nStore) {
  Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_inherits__["a" /* default */])(I13nStore, _BaseI13nStore);

  function I13nStore() {
    Object(__WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, I13nStore);

    return Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(I13nStore).apply(this, arguments));
  }

  Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_createClass__["a" /* default */])(I13nStore, [{
    key: "getInitialState",
    value: function getInitialState() {
      return new Map();
    }
  }, {
    key: "handleEmit",
    value: function handleEmit(state, action) {
      var on = get(action, [PARAMS]);
      this.nextEmits.push(on);
      return state;
    }
  }, {
    key: "handleRegister",
    value: function handleRegister(state, action) {
      var _get2 = get(action, [PARAMS]),
          func = _get2.func,
          on = _get2.on,
          mod = _get2.mod;

      switch (mod) {
        case 'remove':
          this.removeListener(func, on);
          break;

        case 'add':
        default:
          this.addListener(func, on);
          break;
      }

      return state;
    }
  }, {
    key: "reduce",
    value: function reduce(state, action) {
      switch (action.type) {
        case 'emit':
          return this.handleEmit(state, action);

        case 'register':
          return this.handleRegister(state, action);

        default:
          return Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(I13nStore.prototype), "reduce", this).call(this, state, action);
      }
    }
  }]);

  return I13nStore;
}(__WEBPACK_IMPORTED_MODULE_10__stores_BaseI13nStore__["a" /* default */]); // Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.


var instance = new I13nStore(__WEBPACK_IMPORTED_MODULE_11__i13nDispatcher__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var get = function get(object, property, receiver) {
  if (object === null) {
    object = Function.prototype;
  }

  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ('value' in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (get);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var commentReg = /^\s*[;]/;
var kvReg = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
var linesReg = /[\r\n]+/g;
var stripQuoteReg = /\\"/g;
var isArray = Array.isArray;

var isQuoted = function isQuoted(s) {
  if (s.length <= 1) {
    return false;
  }

  var bAndE = s.charAt(0) + '' + s.slice(-1);
  return bAndE === '""' || bAndE === "''";
};

var stripQuote = function stripQuote(s) {
  return s.replace(stripQuoteReg, '"').substring(1, s.length - 1);
};

var isMultiLine = function isMultiLine(s) {
  var n = s.trim();

  if (isQuoted(n)) {
    return false;
  }

  if (n.charAt(0) === '"') {
    return true;
  } else {
    return false;
  }
};

var parse = function parse(s) {
  var lines = s.split(linesReg);
  var value = '';
  var key = '';
  var p = {};
  lines.forEach(function (line) {
    var isEnd = false;

    if (!line || commentReg.test(line)) {
      return;
    }

    if (!key) {
      var match = line.match(kvReg);

      if (!match) {
        console.error('Ini Parse Fail: ' + line);
        return;
      }

      key = match[2];
      value = match[3] ? match[4] || '' : '';

      if (key.length > 2 && key.slice(-2) === '[]') {
        key = key.substring(0, key.length - 2);

        if (!p[key]) {
          p[key] = [];
        } else if (!isArray(p[key])) {
          p[key] = [p[key]];
        }
      }

      if (!isMultiLine(value)) {
        isEnd = true;
      }
    } else {
      if (line.trim().slice(-1) === '"') {
        isEnd = true;
      }

      value += line;
    }

    if (isEnd) {
      if (isQuoted(value)) {
        value = stripQuote(value);
      }

      switch (value.toLowerCase()) {
        case 'true':
        case 'false':
        case 'null':
          value = JSON.parse(value);
      }

      if (isArray(p[key])) {
        p[key].push(value);
      } else {
        p[key] = value;
      }

      key = '';
      value = '';
    }
  });
  return p;
};

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nest__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nest__["a"]; });




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_set_object_value__ = __webpack_require__(12);




var keys = Object.keys;

var nest = function nest(a, delimiter) {
    if (!delimiter) {
        delimiter = '.';
    }
    var tree = {};
    keys(a).forEach(function (k) {
        if (-1 === k.indexOf(delimiter)) {
            tree[k] = a[k];
            return;
        }
        var subKeys = k.split(delimiter);
        Object(__WEBPACK_IMPORTED_MODULE_0_set_object_value__["a" /* default */])(tree, subKeys, a[k]);
    });
    return tree;
};

/* harmony default export */ __webpack_exports__["a"] = (nest);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(21);



var arrayFrom = function arrayFrom(a) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(a);
};

var queryFrom = function queryFrom(base) {
  var doc;

  switch (Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(base)) {
    case 'function':
      doc = base;
      break;

    default:
      doc = function doc() {
        return defaultQuery.el(base);
      };

      break;
  }

  var queryOne = function queryOne(sel) {
    return doc().querySelector(sel);
  };

  var queryAll = function queryAll(sel) {
    return arrayFrom(doc().querySelectorAll(sel));
  };

  var queryEl = function queryEl(el) {
    return 'string' === typeof el ? queryOne(el) : el;
  };

  var queryAncestor = function queryAncestor(el, ancestor) {
    el = queryEl(el);

    var findHit = function findHit(all) {
      var hit = false;
      all.some(function (p) {
        if (p.contains(el) && !p.isSameNode(el)) {
          hit = p;
          return true;
        } else {
          return false;
        }
      });
      return hit;
    };

    var lastHit;
    var hit;
    var all = queryAll(ancestor);
    hit = findHit(all);

    while (hit) {
      lastHit = hit;
      all = hit.querySelectorAll(ancestor);

      if (all) {
        hit = findHit(arrayFrom(all));
      } else {
        break;
      }
    }

    return lastHit;
  };

  return {
    all: queryAll,
    ancestor: queryAncestor,
    el: queryEl,
    one: queryOne
  };
};

var defaultQuery = queryFrom(function () {
  return document;
});
/* harmony default export */ __webpack_exports__["a"] = (queryFrom);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isArray = Array.isArray;

var arrayMerge = function arrayMerge() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var arg1 = args.shift();

  if (!isArray(arg1)) {
    arg1 = [arg1];
  }

  args.forEach(function (a) {
    if (null === a || 'undefined' === typeof a) {
      return;
    }

    if (isArray(a)) {
      arg1 = arg1.concat(a);
    } else {
      arg1.push(a);
    }
  });
  return arg1;
};

/* unused harmony default export */ var _unused_webpack_default_export = (arrayMerge);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export combineSub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_object_value__ = __webpack_require__(0);

var keys = Object.keys;

var combine = function combine(arr, objKey) {
  var nextArr = objKey ? {} : [];
  var thisKeys = keys(arr);
  arr[thisKeys[0]].forEach(function (val, key) {
    var next = {};
    var thisObjKey = key;
    thisKeys.forEach(function (k) {
      next[k] = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(arr, [k, key]);

      if (objKey && objKey === k) {
        thisObjKey = next[k];
      }
    });

    if (!objKey) {
      nextArr.push(next);
    } else {
      nextArr[thisObjKey] = next;
    }
  });
  return nextArr;
};

var combineSub = function combineSub(arr, subArr, key) {
  arr.forEach(function (a) {
    var thisSub = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(subArr, [a[key]]);
    a[key] = thisSub ? combine(thisSub) : null;
  });
  return arr;
};

/* unused harmony default export */ var _unused_webpack_default_export = (combine);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var keys = Object.keys;

var removeEmpty = function removeEmpty(arr, undefinedOnly, exclude) {
  if (!arr) {
    return arr;
  }

  var result = {};
  keys(arr).forEach(function (key) {
    var value = arr[key];

    if (exclude && exclude.length && -1 !== exclude.indexOf(key)) {
      return;
    }

    if (value || undefinedOnly && 'undefined' !== typeof value) {
      result[key] = value;
    }
  });
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (removeEmpty);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_safe_reg__ = __webpack_require__(33);


var getRegString = function getRegString(name) {
  return '(([#?&])' + Object(__WEBPACK_IMPORTED_MODULE_0_get_safe_reg__["b" /* default */])(name) + '=)([^&#]*)';
};

var cache = Object(__WEBPACK_IMPORTED_MODULE_0_get_safe_reg__["a" /* cacheReg */])({})(getRegString);
/* harmony default export */ __webpack_exports__["a"] = (function (name) {
  return cache(name);
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var text = function text(el) {
  return el ? (el.innerText ? el.innerText : el.trim ? el : '').trim() : '';
};

/* harmony default export */ __webpack_exports__["a"] = (text);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_query_selector__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_object_value__ = __webpack_require__(0);



var getOptionText = function getOptionText(sel) {
  var thisSel = __WEBPACK_IMPORTED_MODULE_0_css_query_selector__["a" /* default */].el(sel);

  if (!thisSel) {
    return;
  }

  var val = Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["a" /* default */])(thisSel, ['value'], '');
  return Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0_css_query_selector__["b" /* queryFrom */])(thisSel).one("option[value='" + val + "']"), ['text'], '');
};

/* harmony default export */ __webpack_exports__["a"] = (getOptionText);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_query_selector__ = __webpack_require__(11);



var getElValue = function getElValue(el, from) {
  var q = __WEBPACK_IMPORTED_MODULE_1_css_query_selector__["a" /* default */];

  if (from) {
    q = Object(__WEBPACK_IMPORTED_MODULE_1_css_query_selector__["b" /* queryFrom */])(from);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(q.el(el), ['value']);
};

/* harmony default export */ __webpack_exports__["a"] = (getElValue);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_css_query_selector__ = __webpack_require__(11);



var getRadioValue = function getRadioValue(selector) {
  var sels = 'string' === typeof selector ? __WEBPACK_IMPORTED_MODULE_1_css_query_selector__["a" /* default */].all(selector) : Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(selector);
  var value;
  sels.some(function (sel) {
    if (sel.checked) {
      value = sel.value;
      return true;
    } else {
      return false;
    }
  });
  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (getRadioValue);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_seturl__ = __webpack_require__(16);




/**
 * Convert path to route object
 *
 * A string or RegExp should be passed,
 * will return { re, src, keys} obj
 *
 * @param  {String / RegExp} path
 * @return {Object}
 */


var Route = function Route(path, fn) {
  var keys = [];
  var re = pathToRegExp(path, keys);
  var src = path;
  return {
    re: re,
    src: src,
    keys: keys,
    fn: fn
  };
};
/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String} path
 * @param  {Array} keys
 * @return {RegExp}
 */


var pathToRegExp = function pathToRegExp(path, keys) {
  path = path.concat('/?').replace(/\/\(/g, '(?:/').replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function (_, slash, format, key, capture, optional) {
    if (_ === '*') {
      keys.push(undefined);
      return _;
    }

    keys.push(key);
    slash = slash || '';
    return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || '([^/]+?)') + ')' + (optional || '');
  }).replace(/([\/.])/g, '\\$1').replace(/\*/g, '(.*)');
  return new RegExp('^' + path + '$', 'i');
};

var paraseParms = function paraseParms(captures, route) {
  var keys = route.keys,
      src = route.src,
      fn = route.fn;
  var params = {};
  var splats = [];
  Object.keys(captures).forEach(function (cKey, index) {
    var item = captures[cKey];
    var key = keys[index];
    var val = 'string' === typeof item ? decodeURI(item) : item;

    if (key) {
      params[key] = val;
    } else {
      splats.push(val);
    }
  });
  var result = {
    fn: fn,
    params: params,
    splats: splats,
    route: src
  };
  return result;
};
/**
 * Attempt to match the given request to
 * one of the routes. When successful
 * a  {fn, params, splats} obj is returned
 *
 * @param  {Array} routes
 * @param  {String} uri
 * @return {Object}
 */


var _match = function match(routes, uri) {
  var thisUri = Object(__WEBPACK_IMPORTED_MODULE_3_seturl__["b" /* getPath */])(uri);

  if (!thisUri) {
    return false;
  }

  var result;
  routes.some(function (route, index) {
    var re = route.re;
    var captures = thisUri.match(re);

    if (captures) {
      result = paraseParms(captures, route);
      result.nextIndex = index + 1;
      return true;
    } else {
      return false;
    }
  });
  return result;
};
/**
 * Default "normal" router constructor.
 * accepts path, fn tuples via addRoute
 * returns {fn, params, splats, route}
 *  via match
 *
 * @return {Object}
 */


var Router =
/*#__PURE__*/
function () {
  function Router() {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, Router);

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "routes", []);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(Router, [{
    key: "addRoute",
    value: function addRoute(path, fn) {
      if (!path) {
        throw new Error('Route requires a path');
      }

      if (!fn) {
        throw new Error('Route ' + path.toString() + ' requires a callback');
      }

      this.routes.push(Route(path, fn));
    }
  }, {
    key: "match",
    value: function match(pathname, startAt) {
      startAt = startAt ? startAt : 0;
      var routes = this.routes.slice(startAt);

      var route = _match(routes, pathname);

      if (route) {
        route.next = this.match.bind(this, pathname, startAt + route.nextIndex);
      }

      return route;
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_set_object_value__ = __webpack_require__(12);


var mergeConfig = function mergeConfig(conf, merges) {
  return merges && merges.forEach(function (_ref) {
    var path = _ref.path,
        value = _ref.value,
        append = _ref.append;
    return Object(__WEBPACK_IMPORTED_MODULE_0_set_object_value__["a" /* default */])(conf, path, value, append);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (mergeConfig);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forEachStoreProducts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_array_merge__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazyAttr__ = __webpack_require__(23);




var sessionStore = Object(__WEBPACK_IMPORTED_MODULE_3__lazyAttr__["a" /* default */])('__prods');
var isArray = Array.isArray;

var storeProducts = function storeProducts(products, arrP) {
  if (!products || !isArray(products)) {
    return;
  }

  products.forEach(function (p, key) {
    if (!p || !p.id) {
      return;
    }

    arrP[p.id] = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, arrP[p.id], Object(__WEBPACK_IMPORTED_MODULE_2_array_merge__["a" /* removeEmpty */])(p));
    products[key] = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, p, arrP[p.id]);
  });
};

var forEachStoreProducts = function forEachStoreProducts(arr) {
  var arrP = Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["c" /* toMap */])(sessionStore());
  [arr.impressions, arr.detailProducts, arr.products].forEach(function (prods) {
    if (prods) {
      storeProducts(prods, arrP);
    }
  });
  sessionStore(arrP);
  return arr;
};

var lazyProducts = function lazyProducts(state) {
  var I13N = forEachStoreProducts(Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["c" /* toMap */])(state.get('I13N')));
  var i13nPage = forEachStoreProducts(Object(__WEBPACK_IMPORTED_MODULE_1_get_object_value__["c" /* toMap */])(state.get('i13nPage')));
  return state.set('I13N', I13N).set('i13nPage', i13nPage);
};

/* harmony default export */ __webpack_exports__["a"] = (lazyProducts);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BaseTag__ = __webpack_require__(24);






var c = console;

var DebugTag =
/*#__PURE__*/
function (_BaseTag) {
  Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__["a" /* default */])(DebugTag, _BaseTag);

  function DebugTag() {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, DebugTag);

    return Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(DebugTag).apply(this, arguments));
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(DebugTag, [{
    key: "init",
    value: function init() {
      var state = this.getState().toJS();
      c.log('init', state, JSON.stringify(state));
    }
  }, {
    key: "action",
    value: function action() {
      var i13n = this.getClone('I13N');
      c.log('action', i13n, JSON.stringify(i13n));
    }
  }, {
    key: "impression",
    value: function impression() {
      var i13n = this.getClone('i13nPage');
      c.log('impression', i13n, JSON.stringify(i13n));
    }
  }]);

  return DebugTag;
}(__WEBPACK_IMPORTED_MODULE_5__BaseTag__["a" /* default */]);

var instance = new DebugTag();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_assertThisInitialized__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BaseTag__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__google_ecommerce__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__official_gtag__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mp_gtag__ = __webpack_require__(70);














var keys = Object.keys;
var downstreamMap = {
  mp: __WEBPACK_IMPORTED_MODULE_13__mp_gtag__["a" /* default */],
  official: __WEBPACK_IMPORTED_MODULE_12__official_gtag__["a" /* default */]
};

var GoogleTag =
/*#__PURE__*/
function (_BaseTag) {
  Object(__WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_inherits__["a" /* default */])(GoogleTag, _BaseTag);

  function GoogleTag() {
    var _getPrototypeOf2;

    var _this;

    Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, GoogleTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, (_getPrototypeOf2 = Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(GoogleTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(__WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(_this)), "isInit", false);

    Object(__WEBPACK_IMPORTED_MODULE_8_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_assertThisInitialized__["a" /* default */])(_this)), "downstreams", []);

    return _this;
  }

  Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_createClass__["a" /* default */])(GoogleTag, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var tagData = this.getTagData();
      var id = tagData.id,
          downstreams = tagData.downstreams;
      Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["a" /* default */])(downstreams, null, []).forEach(function (downstreamKey) {
        var obj = downstreamMap[downstreamKey];

        if (!obj) {
          console.warn('Downstream is not found. [' + downstreamKey + ']');
          return;
        }

        var oDownstream = new obj(tagData);

        _this2.downstreams.push(oDownstream);

        oDownstream.init();
      });
    }
  }, {
    key: "push",
    value: function push(config) {
      var _this$getTagData = this.getTagData(),
          gaId = _this$getTagData.gaId,
          bCookieIndex = _this$getTagData.bCookieIndex,
          lazeInfoIndex = _this$getTagData.lazeInfoIndex;

      var state = this.getState();
      var uid = state.get('uid');

      if (uid) {
        config.bCookie = uid;

        if (bCookieIndex) {
          config.bCookieIndex = bCookieIndex;
        }
      }

      if (config.lazeInfo && lazeInfoIndex) {
        config.lazeInfoIndex = lazeInfoIndex;
      }

      config.expId = state.get('expId');
      config.expVar = state.get('expVar');
      config.gaId = gaId;
      this.downstreams.forEach(function (downstream) {
        return downstream.push(config);
      });
    }
  }, {
    key: "mergeLabel",
    value: function mergeLabel(label, more) {
      var thisLabel = label;

      if (keys(more).length) {
        if ('object' !== Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_typeof__["a" /* default */])(thisLabel)) {
          thisLabel = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({
            label: label
          }, more);
        } else {
          thisLabel = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, thisLabel, more);
        }
      }

      if ('object' === Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_typeof__["a" /* default */])(thisLabel)) {
        thisLabel = JSON.stringify(thisLabel);
      }

      return thisLabel;
    }
  }, {
    key: "action",
    value: function action() {
      var state = this.getState();
      var I13N = this.getClone('I13N');
      var lazeInfo = I13N.lazeInfo,
          action = I13N.action,
          category = I13N.category,
          label = I13N.label,
          value = I13N.value;
      var p = Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["a" /* default */])(I13N, ['p']);
      var thisCategory = category ? category : action;
      var more = {};
      var config = {
        event: 'lucencyEventAction',
        p: p,
        action: action,
        category: thisCategory,
        value: value,
        lazeInfo: JSON.stringify(lazeInfo)
      };
      var ecommerce = Object(__WEBPACK_IMPORTED_MODULE_11__google_ecommerce__["a" /* getActionEcommerce */])(I13N, state.get('currencyCode'));

      if (keys(ecommerce).length) {
        config.ecommerce = ecommerce;
        config.category = 'Ecommerce';
        more.ecommerce = ecommerce;
      }

      config.label = this.mergeLabel(label, more);
      this.push(config);
    }
  }, {
    key: "impression",
    value: function impression() {
      var state = this.getState();
      var I13N = this.getClone('i13nPage');
      var p = Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["a" /* default */])(I13N, ['p']);
      var config = {
        event: 'lucencyEventView',
        p: p
      };
      var ecommerce = Object(__WEBPACK_IMPORTED_MODULE_11__google_ecommerce__["b" /* getViewEcommerce */])(I13N, state.get('currencyCode'));

      if (keys(ecommerce).length) {
        config.ecommerce = ecommerce;
      }

      this.push(config);
    }
  }]);

  return GoogleTag;
}(__WEBPACK_IMPORTED_MODULE_10__BaseTag__["a" /* default */]);

var instance = new GoogleTag();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getViewEcommerce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActionEcommerce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_set_object_value__ = __webpack_require__(12);
/**
 * Actions ->
 *
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#action-types
 *
 * click: ClickProduct
 * add: AddToCart
 * remove: RemoveFromCart
 * promo_click: ClickPromotion
 * [x] detail: [view]
 * [x] checkout: [handleStep: stepNo]
 * [x] checkout_option: [handleStep: stepOption]
 * [x] purchase: [handlePurchase: purchaseId]
 * [x] refund: [handlePurchase: refundId]
 *
 * View ->
 * Product: impressions
 * Promotion: promotions
 * detail: detailProducts
 * checkout: [handleStep: stepNo]
 * checkout_option: [handleStep: stepOption]
 * purchase: [handlePurchase: purchaseId]
 * refund: [handlePurchase: refundId]
 *
 * fromP (list) ->
 * detail
 *
 * p (list) ->
 * impressions,
 * ClickProduct
 */



var getActionEcommerce = function getActionEcommerce(I13N, defaultCurrencyCode) {
  var p = I13N.p,
      action = I13N.action,
      products = I13N.products,
      promotions = I13N.promotions;
  var ecommerce = {};

  switch (action) {
    case 'ClickPromotion':
      ecommerce = {
        promoClick: {
          promotions: promotions
        }
      };
      break;

    case 'ClickProduct':
      ecommerce = {
        click: {
          actionField: {
            list: p
          },
          products: products
        }
      };
      setCurrency(I13N, ecommerce, defaultCurrencyCode);
      break;

    case 'AddToCart':
      ecommerce = {
        add: {
          products: products
        }
      };
      setCurrency(I13N, ecommerce, defaultCurrencyCode);
      break;

    case 'RemoveFromCart':
      ecommerce = {
        remove: {
          products: products
        }
      };
      setCurrency(I13N, ecommerce, defaultCurrencyCode);
      break;
  }

  handleStep(I13N, ecommerce, defaultCurrencyCode);
  handlePurchase(I13N, ecommerce, defaultCurrencyCode);
  return ecommerce;
};

var getViewEcommerce = function getViewEcommerce(I13N, defaultCurrencyCode) {
  var p = I13N.p,
      fromP = I13N.fromP,
      impressions = I13N.impressions,
      detailProducts = I13N.detailProducts,
      promotions = I13N.promotions;
  var ecommerce = {};

  if (impressions) {
    setCurrency(I13N, ecommerce, defaultCurrencyCode);

    if (p) {
      impressions.forEach(function (item) {
        return item.list = p;
      });
    }

    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['impressions'], impressions);
  }

  if (detailProducts) {
    if (fromP) {
      Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['detail', 'actionField', 'list'], fromP);
    }

    setCurrency(I13N, ecommerce, defaultCurrencyCode);
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['detail', 'products'], detailProducts);
  }

  if (promotions) {
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['promoView', 'promotions'], promotions);
  }

  handlePurchase(I13N, ecommerce, defaultCurrencyCode);
  handleStep(I13N, ecommerce, defaultCurrencyCode);
  return ecommerce;
};

var CURRENCY_CODE = 'currencyCode';

var setCurrency = function setCurrency(I13N, ecommerce, defaultCurrencyCode) {
  var currencyCode = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, [CURRENCY_CODE]) || defaultCurrencyCode;
  Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, [CURRENCY_CODE], currencyCode);
};

var stepSend = {};

var handleStep = function handleStep(I13N, ecommerce, defaultCurrencyCode) {
  var step = I13N.stepNo,
      option = I13N.stepOption,
      products = I13N.products;

  if (!step) {
    return;
  }

  var actionField = {
    step: step,
    option: option
  };

  if (!stepSend[step] || products && products.length || !option) {
    stepSend[step] = {
      actionField: actionField,
      products: products
    };
    setCurrency(I13N, ecommerce, defaultCurrencyCode);
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['checkout'], stepSend[step]);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['checkout_option'], {
      actionField: actionField
    });
  }
};

var handlePurchase = function handlePurchase(I13N, ecommerce, defaultCurrencyCode) {
  var purchaseId = I13N.purchaseId,
      refundId = I13N.refundId,
      products = I13N.products;
  var affiliation = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, ['affiliation'], '');
  var coupon = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, ['coupon'], '');
  var revenue = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, ['revenue'], 0);
  var tax = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, ['tax'], 0);
  var shipping = Object(__WEBPACK_IMPORTED_MODULE_0_get_object_value__["a" /* default */])(I13N, ['shipping'], 0);

  if (purchaseId) {
    setCurrency(I13N, ecommerce, defaultCurrencyCode);
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['purchase', 'actionField'], {
      id: purchaseId,
      affiliation: affiliation,
      revenue: revenue,
      tax: tax,
      shipping: shipping,
      coupon: coupon
    });
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['purchase', 'products'], products);
  }

  if (refundId) {
    Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['refund', 'actionField', 'id'], refundId);

    if (products) {
      setCurrency(I13N, ecommerce, defaultCurrencyCode);
      Object(__WEBPACK_IMPORTED_MODULE_1_set_object_value__["a" /* default */])(ecommerce, ['refund', 'products'], products);
    }
  }
};



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_exec_script__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BaseGTag__ = __webpack_require__(38);









var getScript = function getScript(gtagId) {
  var script = " \n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','".concat(gtagId, "');</script>\n");
  return script;
};

var OfficialGTag =
/*#__PURE__*/
function (_BaseGTag) {
  Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__["a" /* default */])(OfficialGTag, _BaseGTag);

  function OfficialGTag() {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, OfficialGTag);

    return Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(OfficialGTag).apply(this, arguments));
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(OfficialGTag, [{
    key: "init",
    value: function init() {
      var id = this.props.id;
      Object(__WEBPACK_IMPORTED_MODULE_5_exec_script__["a" /* default */])(getScript(id));
    }
  }, {
    key: "push",
    value: function push(config) {
      Object(__WEBPACK_IMPORTED_MODULE_6_win_doc__["b" /* win */])().dataLayer.push(config);
    }
  }]);

  return OfficialGTag;
}(__WEBPACK_IMPORTED_MODULE_7__BaseGTag__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (OfficialGTag);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BaseGTag__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__req__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DataLayerToMp__ = __webpack_require__(71);








var oDataLayerToMp = new __WEBPACK_IMPORTED_MODULE_7__DataLayerToMp__["a" /* default */]();

var MpGTag =
/*#__PURE__*/
function (_BaseGTag) {
  Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_inherits__["a" /* default */])(MpGTag, _BaseGTag);

  function MpGTag() {
    Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, MpGTag);

    return Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(MpGTag).apply(this, arguments));
  }

  Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_createClass__["a" /* default */])(MpGTag, [{
    key: "getHost",
    value: function getHost() {
      var _this$props = this.props,
          mpHost = _this$props.mpHost,
          defaultMpHost = _this$props.defaultMpHost;
      return mpHost || defaultMpHost;
    }
  }, {
    key: "push",
    value: function push(config, send) {
      var host = this.getHost();

      if (host) {
        if (!send) {
          send = __WEBPACK_IMPORTED_MODULE_6__req__["a" /* beacon */];
        }

        var d = oDataLayerToMp.getMp(this.props, config); // console.log([this.props, config, host, d]);

        send(host + '/collect', d);
      } else {
        console.log('mp host not found');
      }
    }
  }]);

  return MpGTag;
}(__WEBPACK_IMPORTED_MODULE_5__BaseGTag__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (MpGTag);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectWithoutProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_defineProperty__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_get_cookie__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_random_id__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_array_merge__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_to_percent_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_call_func__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_reshow_constant__ = __webpack_require__(1);














var seq = 1;
var DIMENSION = 'dimension';
var METRIC = 'metric';
var X = 'x';
var MP_CLIENT_ID = '_ga';

var isArray = function isArray(a) {
  return a && Array.isArray(a) && a.length;
};

var keys = Object.keys;
var pvid = Object(__WEBPACK_IMPORTED_MODULE_9_get_random_id__["a" /* default */])();

var DataLayerToMp =
/*#__PURE__*/
function () {
  function DataLayerToMp() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, DataLayerToMp);

    Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "isSameHost", function (hostName) {
      return function (test) {
        var thisHost = '//' + hostName;
        var i = test.indexOf(thisHost);

        if (5 === i || 6 === i) {
          var check = test.charAt(i + thisHost.length);

          if ('/' === check || '?' === check || '' === check || ':' === check) {
            return true;
          }
        }

        return false;
      };
    });

    Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "getPromotionsData", function (promotions) {
      return _this.getItemsData(promotions, 'promo', _this.setOnePromotion);
    });

    Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "setOnePromotion", function (key, data, item) {
      var id = item.id,
          name = item.name,
          creative = item.creative,
          position = item.position;
      data[key + 'id'] = id;
      data[key + 'nm'] = name;
      data[key + 'cr'] = creative;
      data[key + 'ps'] = position;
    });

    Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_defineProperty__["a" /* default */])(this, "getProductsData", function (products) {
      return _this.getItemsData(products, 'pr', _this.setOneProduct);
    });
  }

  Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_createClass__["a" /* default */])(DataLayerToMp, [{
    key: "getClientIdCookie",
    value: function getClientIdCookie(key) {
      var cookies = (Object(__WEBPACK_IMPORTED_MODULE_8_get_cookie__["a" /* default */])(key || '') || '').split('.');

      if (cookies[2] && cookies[3]) {
        return cookies[2] + '.' + cookies[3];
      }
    }
  }, {
    key: "getClientId",
    value: function getClientId() {
      var c = this.getClientIdCookie(MP_CLIENT_ID);

      if (!c) {
        c = Object(__WEBPACK_IMPORTED_MODULE_9_get_random_id__["a" /* default */])();
        Object(__WEBPACK_IMPORTED_MODULE_8_get_cookie__["b" /* setCookie */])(MP_CLIENT_ID, 'GA1.3.' + c, 365 * 2);
      }

      return c;
    }
  }, {
    key: "getReferrer",
    value: function getReferrer(oDoc) {
      if (!oDoc) {
        oDoc = Object(__WEBPACK_IMPORTED_MODULE_6_win_doc__["a" /* doc */])();
      }

      var hostname = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(oDoc, ['location', 'hostname']);
      var referrer = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(oDoc, ['referrer']);

      if (referrer && !this.isSameHost(hostname)(referrer)) {
        return {
          dr: referrer
        };
      }
    }
  }, {
    key: "getActionData",
    value: function getActionData(config) {
      var _ref = config || {},
          action = _ref.action,
          category = _ref.category,
          label = _ref.label,
          value = _ref.value;

      var data = {
        ec: category,
        ea: action,
        el: label,
        ev: __WEBPACK_IMPORTED_MODULE_13_reshow_constant__["f" /* UNDEFINED */] !== Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_typeof__["a" /* default */])(value) ? Object(__WEBPACK_IMPORTED_MODULE_11_to_percent_js__["b" /* toNum */])(value) : value
      };
      return data;
    }
  }, {
    key: "getItemsData",
    value: function getItemsData(items, itemKey, itemCb) {
      if (isArray(items)) {
        var sn = 1;
        var data = {};
        items.forEach(function (item) {
          if (!item) {
            return;
          }

          var key = itemKey + sn;
          sn++;
          Object(__WEBPACK_IMPORTED_MODULE_12_call_func__["a" /* default */])(itemCb, [key, data, item]);
        });
        return data;
      }
    }
  }, {
    key: "getEcPromotionData",
    value: function getEcPromotionData(promoView, promoClick) {
      if (promoView || promoClick) {
        var action;

        var _ref2 = promoView || promoClick,
            promotions = _ref2.promotions;

        if (promoView) {
          action = 'view';
        } else {
          action = 'click';
        }

        var data = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({
          promoa: action
        }, this.getPromotionsData(promotions));

        return data;
      }
    }
  }, {
    key: "setOneProduct",
    value: function setOneProduct(key, data, item) {
      var id = item.id,
          name = item.name,
          category = item.category,
          brand = item.brand,
          variant = item.variant,
          position = item.position,
          price = item.price,
          others = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectWithoutProperties__["a" /* default */])(item, ["id", "name", "category", "brand", "variant", "position", "price"]);

      data[key + 'id'] = id;
      data[key + 'nm'] = name;
      data[key + 'ca'] = category;
      data[key + 'br'] = brand;
      data[key + 'va'] = variant;
      data[key + 'ps'] = position;
      data[key + 'pr'] = price;
      keys(others).forEach(function (k) {
        var endKey;

        if (0 === k.indexOf(DIMENSION)) {
          endKey = 'cd';
        }

        if (0 === k.indexOf(METRIC)) {
          endKey = 'cm';
        }

        if (endKey) {
          var sn = Object(__WEBPACK_IMPORTED_MODULE_11_to_percent_js__["a" /* getNum */])(k);
          data[key + endKey + sn] = others[k];
        }
      });
    }
  }, {
    key: "getEcPurchaseData",
    value: function getEcPurchaseData(purchase, refund) {
      if (purchase || refund) {
        var _ref3 = purchase || refund,
            actionField = _ref3.actionField,
            products = _ref3.products;

        var _ref4 = actionField || {},
            id = _ref4.id,
            affiliation = _ref4.affiliation,
            revenue = _ref4.revenue,
            tax = _ref4.tax,
            shipping = _ref4.shipping,
            coupon = _ref4.coupon;

        var data;

        if (purchase) {
          data = {
            pa: 'purchase',
            ti: id,
            ta: affiliation,
            tr: revenue,
            tt: tax,
            ts: shipping,
            tcc: coupon
          };
        } else {
          data = {
            pa: 'refund',
            ti: id
          };
        }

        if (products) {
          data = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, data, this.getProductsData(products));
        }

        return data;
      }
    }
  }, {
    key: "getEcStepData",
    value: function getEcStepData(checkout, checkout_option) {
      if (checkout || checkout_option) {
        var _ref5 = checkout || checkout_option,
            actionField = _ref5.actionField,
            products = _ref5.products;

        var _ref6 = actionField || {},
            step = _ref6.step,
            option = _ref6.option;

        var data = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({
          cos: step,
          col: option,
          pa: checkout_option ? 'checkout_option' : 'checkout'
        }, this.getProductsData(products));

        return data;
      }
    }
  }, {
    key: "getEcActionData",
    value: function getEcActionData(config, action) {
      if (config) {
        var actionField = config.actionField,
            products = config.products;

        var _ref7 = actionField || {},
            list = _ref7.list;

        var data = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, this.getProductsData(products), {
          pa: action,
          pal: list
        }); // use removeEmtpy to clean non-use pa


        return Object(__WEBPACK_IMPORTED_MODULE_10_array_merge__["a" /* removeEmpty */])(data, true);
      }
    }
  }, {
    key: "getEcImpressionsData",
    value: function getEcImpressionsData(impressions) {
      var _this2 = this;

      if (isArray(impressions)) {
        var listLen = 1;
        var aList = {};
        var data = {};
        impressions.forEach(function (_ref8) {
          var list = _ref8.list,
              prod = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectWithoutProperties__["a" /* default */])(_ref8, ["list"]);

          if (!aList[list]) {
            aList[list] = {
              key: 'il' + listLen,
              n: 1
            };
            listLen++;
            data[aList[list].key + 'nm'] = list;
          }

          var key = aList[list].key + 'pi' + aList[list].n;
          aList[list].n++;

          _this2.setOneProduct(key, data, prod);
        });
        return data;
      }
    }
  }, {
    key: "getEcData",
    value: function getEcData(config) {
      var _ref9 = config || {},
          ecommerce = _ref9.ecommerce;

      if (ecommerce) {
        var impressions = ecommerce.impressions,
            detail = ecommerce.detail,
            click = ecommerce.click,
            add = ecommerce.add,
            remove = ecommerce.remove,
            checkout = ecommerce.checkout,
            checkout_option = ecommerce.checkout_option,
            purchase = ecommerce.purchase,
            refund = ecommerce.refund,
            promoView = ecommerce.promoView,
            promoClick = ecommerce.promoClick,
            currencyCode = ecommerce.currencyCode;

        var data = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, this.getEcImpressionsData(impressions), this.getEcActionData(detail, 'detail'), this.getEcActionData(click, 'click'), this.getEcActionData(add, 'add'), this.getEcActionData(remove, 'remove'), this.getEcStepData(checkout, checkout_option), this.getEcPurchaseData(purchase, refund), this.getEcPromotionData(promoView, promoClick), {
          cu: currencyCode
        });

        return data;
      }
    }
  }, {
    key: "getMp",
    value: function getMp(props, data) {
      var oDoc = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6_win_doc__["a" /* doc */])(), null, {});
      var oWin = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6_win_doc__["b" /* win */])(), null, {});
      var nav = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(oWin, ['navigator'], {});
      var screen = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(oWin, ['screen'], {});
      var docEl = Object(__WEBPACK_IMPORTED_MODULE_7_get_object_value__["a" /* default */])(oDoc, ['documentElement'], {});
      var vw = Math.max(docEl.clientWidth || 0, oWin.innerWidth || 0);
      var vh = Math.max(docEl.clientHeight || 0, oWin.innerHeight || 0);

      var _ref10 = props || {},
          tagId = _ref10.tagId;

      var _ref11 = data || {},
          ev = _ref11.event,
          bCookieIndex = _ref11.bCookieIndex,
          bCookie = _ref11.bCookie,
          lazeInfoIndex = _ref11.lazeInfoIndex,
          lazeInfo = _ref11.lazeInfo,
          expId = _ref11.expId,
          expVar = _ref11.expVar,
          p = _ref11.p,
          p2 = _ref11.p2,
          p3 = _ref11.p3,
          p4 = _ref11.p4,
          p5 = _ref11.p5;

      var d = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, this.getActionData(data), this.getEcData(data), this.getReferrer(), {
        xid: expId,
        xvar: expVar,
        cg1: p,
        cg2: p2,
        cg3: p3,
        cg4: p4,
        cg5: p5,
        _s: seq,
        dl: oDoc.URL,
        ul: (nav.language || nav.browserLanguage || '').toLowerCase(),
        de: oDoc.characterSet || oDoc.charset,
        dt: oDoc.title,
        sd: screen.colorDepth + '-bit',
        sr: screen.width + X + screen.height,
        vp: vw + X + vh,
        je: Object(__WEBPACK_IMPORTED_MODULE_11_to_percent_js__["b" /* toNum */])(Object(__WEBPACK_IMPORTED_MODULE_12_call_func__["a" /* default */])(nav.javaEnabled, null, nav)),
        tid: tagId,
        cid: this.getClientId(),
        _gid: this.getClientIdCookie('_gid'),
        v: 1,
        //version
        z: Object(__WEBPACK_IMPORTED_MODULE_9_get_random_id__["a" /* default */])(),
        a: pvid
      });

      seq++;
      d.t = -1 !== (ev || '').toLowerCase().indexOf('view') ? 'pageview' : 'event';

      if (bCookie) {
        if (bCookieIndex) {
          d['cd' + bCookieIndex] = bCookie;
        }

        d.uid = bCookie;
      }

      if (lazeInfo) {
        if (lazeInfoIndex) {
          d['cd' + lazeInfoIndex] = lazeInfo;
        }

        var oLazyInfo = JSON.parse(lazeInfo);

        if (oLazyInfo.time) {
          var past = new Date(oLazyInfo.time).getTime();

          if (!isNaN(past)) {
            d.qt = new Date().getTime() - past;
          }
        }
      }

      return Object(__WEBPACK_IMPORTED_MODULE_10_array_merge__["a" /* removeEmpty */])(d, true);
    }
  }]);

  return DataLayerToMp;
}();

/* harmony default export */ __webpack_exports__["a"] = (DataLayerToMp);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectWithoutProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_typeof__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_createClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_possibleConstructorReturn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_getPrototypeOf__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_inherits__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_exec_script__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_object_value__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_set_object_value__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reshow_constant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__BaseTag__ = __webpack_require__(24);














var getScript = function getScript(tagData) {
  var jsName = tagData.test ? 'usergram_test.js' : 'usergram.js';
  var script = " \n<script>\n(function(){var a=window,b=document,c=a.usergram=a.usergram||[],d,e;\n  c.l||(c.s=(new Date()).getTime(),c.l=!0,d=b.getElementsByTagName('script')[0],\n    e=b.createElement('script'),e.type='text/javascript',e.async=true,\n    e.src='//code.usergram.info/js/".concat(jsName, "',d.parentNode.insertBefore(e,d))})();\n\nwindow.usergram=window.usergram||[];\n</script>\n");
  return script;
};

var win = function win() {
  return window;
};

var keys = Object.keys;
var isArray = Array.isArray;

var UsergramTag =
/*#__PURE__*/
function (_BaseTag) {
  Object(__WEBPACK_IMPORTED_MODULE_7_reshow_runtime_es_helpers_inherits__["a" /* default */])(UsergramTag, _BaseTag);

  function UsergramTag() {
    Object(__WEBPACK_IMPORTED_MODULE_3_reshow_runtime_es_helpers_classCallCheck__["a" /* default */])(this, UsergramTag);

    return Object(__WEBPACK_IMPORTED_MODULE_5_reshow_runtime_es_helpers_possibleConstructorReturn__["a" /* default */])(this, Object(__WEBPACK_IMPORTED_MODULE_6_reshow_runtime_es_helpers_getPrototypeOf__["a" /* default */])(UsergramTag).apply(this, arguments));
  }

  Object(__WEBPACK_IMPORTED_MODULE_4_reshow_runtime_es_helpers_createClass__["a" /* default */])(UsergramTag, [{
    key: "init",
    value: function init() {
      if (!win().usergram) {
        var tagData = this.getTagData();
        var script = getScript(tagData);
        Object(__WEBPACK_IMPORTED_MODULE_8_exec_script__["a" /* default */])(script);
      }
    }
  }, {
    key: "push",
    value: function push(config) {
      var tagData = this.getTagData();
      config.unshift('send', tagData.id);
      win().usergram.push(config);
    }
  }, {
    key: "assignUid",
    value: function assignUid(att) {
      var state = this.getState();
      var uid = state.get('uid');

      if (__WEBPACK_IMPORTED_MODULE_11_reshow_constant__["f" /* UNDEFINED */] === Object(__WEBPACK_IMPORTED_MODULE_2_reshow_runtime_es_helpers_typeof__["a" /* default */])(uid)) {
        return att;
      } else {
        if (!att) {
          att = {};
        }

        att.serviceId = uid;
        return att;
      }
    }
  }, {
    key: "convertOne",
    value: function convertOne(attrKeys, arr, result) {
      keys(attrKeys).forEach(function (key) {
        var to = attrKeys[key];
        arr.forEach(function (a) {
          if (a[key]) {
            Object(__WEBPACK_IMPORTED_MODULE_10_set_object_value__["a" /* default */])(result, [to], a[key], true);
          }
        });
      });
    }
  }, {
    key: "converAttr",
    value: function converAttr(attrKeys, flats, I13N) {
      var _this = this;

      if (!attrKeys) {
        return;
      }

      var result = {};
      var defFlats = ['label', 'products', 'impressions', 'detailProducts', 'promotions'];

      if (isArray(flats)) {
        flats = flats.concat(defFlats);
      } else {
        flats = defFlats;
      }

      var thisI13N = Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_objectSpread__["a" /* default */])({}, I13N);

      flats.forEach(function (flat) {
        var arr = thisI13N[flat];

        if (arr) {
          if (!isArray(arr)) {
            arr = [arr];
          }

          _this.convertOne(attrKeys, arr, result);

          delete thisI13N[flat];
        }
      });
      this.convertOne(attrKeys, [thisI13N], result);
      return result;
    }
  }, {
    key: "action",
    value: function action() {
      var tagData = this.getTagData();
      var cv = tagData.cv,
          attr = tagData.attr,
          flat = tagData.flat;
      var I13N = this.getClone('I13N');

      var p = I13N.p,
          action = I13N.action,
          category = I13N.category,
          value = I13N.value,
          others = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_objectWithoutProperties__["a" /* default */])(I13N, ["p", "action", "category", "value"]);

      var type = cv && action && -1 !== cv.indexOf(action) ? 'cv' : 'event';
      var attribute;

      if ('cv' === type) {
        attribute = this.converAttr(attr, flat, I13N);
      }

      var send = [type, action];

      if (!attribute || !keys(attribute).length) {
        var label = Object(__WEBPACK_IMPORTED_MODULE_9_get_object_value__["a" /* default */])(I13N, ['label'], others);
        attribute = {
          p: p,
          category: category,
          label: label,
          value: value
        };
      }

      send.push(this.assignUid(attribute));
      this.push(send);
    }
  }, {
    key: "handleEcImpression",
    value: function handleEcImpression(I13N) {
      var p = I13N.p,
          fromP = I13N.fromP,
          impressions = I13N.impressions,
          detailProducts = I13N.detailProducts,
          promotions = I13N.promotions;

      if (impressions) {
        this.push(['event', 'ProductImpression', {
          impressions: impressions
        }]);
      }

      if (detailProducts) {
        this.push(['event', 'ProductDetailImpression', {
          detailProducts: detailProducts
        }]);
      }

      if (promotions) {
        this.push(['event', 'PromotionImpression', {
          promotions: promotions
        }]);
      }
    }
  }, {
    key: "impression",
    value: function impression() {
      var I13N = this.getClone('i13nPage');
      var attribute = this.assignUid(attribute);
      this.push(['pv', attribute]);
      this.handleEcImpression(I13N);
    }
  }]);

  return UsergramTag;
}(__WEBPACK_IMPORTED_MODULE_12__BaseTag__["a" /* default */]);

var instance = new UsergramTag();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOverWrite; });
var getOverWrite = function getOverWrite() {
  return [{
    path: ['defaultMpHost'],
    value: 'https://analytics.omniscientai.com'
  }];
};



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_i13n_client__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_win_doc__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tagBase__ = __webpack_require__(73);



Object(__WEBPACK_IMPORTED_MODULE_0_i13n_client__["a" /* client */])(Object(__WEBPACK_IMPORTED_MODULE_1_win_doc__["b" /* win */])().i13nData, function (configs, cb) {
  return cb(configs, Object(__WEBPACK_IMPORTED_MODULE_2__tagBase__["a" /* getOverWrite */])());
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map