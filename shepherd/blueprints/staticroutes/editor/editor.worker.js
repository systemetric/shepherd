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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/monaco-editor/esm/vs/base/common/async.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/async.js ***!
  \****************************************************************/
/*! exports provided: isThenable, toThenable, createCancelablePromise, asWinJsPromise, wireCancellationToken, Throttler, Delayer, ShallowCancelThenPromise, timeout, always, first2, first, setDisposableTimeout, TimeoutTimer, IntervalTimer, RunOnceScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toThenable", function() { return toThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCancelablePromise", function() { return createCancelablePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asWinJsPromise", function() { return asWinJsPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wireCancellationToken", function() { return wireCancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throttler", function() { return Throttler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delayer", function() { return Delayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShallowCancelThenPromise", function() { return ShallowCancelThenPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first2", function() { return first2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisposableTimeout", function() { return setDisposableTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTimer", function() { return TimeoutTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalTimer", function() { return IntervalTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunOnceScheduler", function() { return RunOnceScheduler; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winjs.base.js */ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js");
/* harmony import */ var _cancellation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancellation.js */ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




function isThenable(obj) {
    return obj && typeof obj.then === 'function';
}
function toThenable(arg) {
    if (isThenable(arg)) {
        return arg;
    }
    else {
        return _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(arg);
    }
}
function createCancelablePromise(callback) {
    var source = new _cancellation_js__WEBPACK_IMPORTED_MODULE_2__["CancellationTokenSource"]();
    var thenable = callback(source.token);
    var promise = new Promise(function (resolve, reject) {
        source.token.onCancellationRequested(function () {
            reject(_errors_js__WEBPACK_IMPORTED_MODULE_0__["canceled"]());
        });
        Promise.resolve(thenable).then(function (value) {
            source.dispose();
            resolve(value);
        }, function (err) {
            source.dispose();
            reject(err);
        });
    });
    return new /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.cancel = function () {
            source.cancel();
        };
        class_1.prototype.then = function (resolve, reject) {
            return promise.then(resolve, reject);
        };
        class_1.prototype.catch = function (reject) {
            return this.then(undefined, reject);
        };
        return class_1;
    }());
}
function asWinJsPromise(callback) {
    var source = new _cancellation_js__WEBPACK_IMPORTED_MODULE_2__["CancellationTokenSource"]();
    return new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (resolve, reject, progress) {
        var item = callback(source.token);
        if (item instanceof _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"]) {
            item.then(function (result) {
                source.dispose();
                resolve(result);
            }, function (err) {
                source.dispose();
                reject(err);
            }, progress);
        }
        else if (isThenable(item)) {
            item.then(function (result) {
                source.dispose();
                resolve(result);
            }, function (err) {
                source.dispose();
                reject(err);
            });
        }
        else {
            source.dispose();
            resolve(item);
        }
    }, function () {
        source.cancel();
    });
}
/**
 * Hook a cancellation token to a WinJS Promise
 */
function wireCancellationToken(token, promise, resolveAsUndefinedWhenCancelled) {
    var subscription = token.onCancellationRequested(function () { return promise.cancel(); });
    if (resolveAsUndefinedWhenCancelled) {
        promise = promise.then(undefined, function (err) {
            if (!_errors_js__WEBPACK_IMPORTED_MODULE_0__["isPromiseCanceledError"](err)) {
                return _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].wrapError(err);
            }
            return undefined;
        });
    }
    return always(promise, function () { return subscription.dispose(); });
}
/**
 * A helper to prevent accumulation of sequential async tasks.
 *
 * Imagine a mail man with the sole task of delivering letters. As soon as
 * a letter submitted for delivery, he drives to the destination, delivers it
 * and returns to his base. Imagine that during the trip, N more letters were submitted.
 * When the mail man returns, he picks those N letters and delivers them all in a
 * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
 *
 * The throttler implements this via the queue() method, by providing it a task
 * factory. Following the example:
 *
 * 		const throttler = new Throttler();
 * 		const letters = [];
 *
 * 		function deliver() {
 * 			const lettersToDeliver = letters;
 * 			letters = [];
 * 			return makeTheTrip(lettersToDeliver);
 * 		}
 *
 * 		function onLetterReceived(l) {
 * 			letters.push(l);
 * 			throttler.queue(deliver);
 * 		}
 */
var Throttler = /** @class */ (function () {
    function Throttler() {
        this.activePromise = null;
        this.queuedPromise = null;
        this.queuedPromiseFactory = null;
    }
    Throttler.prototype.queue = function (promiseFactory) {
        var _this = this;
        if (this.activePromise) {
            this.queuedPromiseFactory = promiseFactory;
            if (!this.queuedPromise) {
                var onComplete_1 = function () {
                    _this.queuedPromise = null;
                    var result = _this.queue(_this.queuedPromiseFactory);
                    _this.queuedPromiseFactory = null;
                    return result;
                };
                this.queuedPromise = new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (c, e, p) {
                    _this.activePromise.then(onComplete_1, onComplete_1, p).done(c);
                }, function () {
                    _this.activePromise.cancel();
                });
            }
            return new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (c, e, p) {
                _this.queuedPromise.then(c, e, p);
            }, function () {
                // no-op
            });
        }
        this.activePromise = promiseFactory();
        return new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (c, e, p) {
            _this.activePromise.done(function (result) {
                _this.activePromise = null;
                c(result);
            }, function (err) {
                _this.activePromise = null;
                e(err);
            }, p);
        }, function () {
            _this.activePromise.cancel();
        });
    };
    return Throttler;
}());

/**
 * A helper to delay execution of a task that is being requested often.
 *
 * Following the throttler, now imagine the mail man wants to optimize the number of
 * trips proactively. The trip itself can be long, so he decides not to make the trip
 * as soon as a letter is submitted. Instead he waits a while, in case more
 * letters are submitted. After said waiting period, if no letters were submitted, he
 * decides to make the trip. Imagine that N more letters were submitted after the first
 * one, all within a short period of time between each other. Even though N+1
 * submissions occurred, only 1 delivery was made.
 *
 * The delayer offers this behavior via the trigger() method, into which both the task
 * to be executed and the waiting period (delay) must be passed in as arguments. Following
 * the example:
 *
 * 		const delayer = new Delayer(WAITING_PERIOD);
 * 		const letters = [];
 *
 * 		function letterReceived(l) {
 * 			letters.push(l);
 * 			delayer.trigger(() => { return makeTheTrip(); });
 * 		}
 */
var Delayer = /** @class */ (function () {
    function Delayer(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.timeout = null;
        this.completionPromise = null;
        this.onSuccess = null;
        this.task = null;
    }
    Delayer.prototype.trigger = function (task, delay) {
        var _this = this;
        if (delay === void 0) { delay = this.defaultDelay; }
        this.task = task;
        this.cancelTimeout();
        if (!this.completionPromise) {
            this.completionPromise = new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (c) {
                _this.onSuccess = c;
            }, function () {
                // no-op
            }).then(function () {
                _this.completionPromise = null;
                _this.onSuccess = null;
                var task = _this.task;
                _this.task = null;
                return task();
            });
        }
        this.timeout = setTimeout(function () {
            _this.timeout = null;
            _this.onSuccess(null);
        }, delay);
        return this.completionPromise;
    };
    Delayer.prototype.cancel = function () {
        this.cancelTimeout();
        if (this.completionPromise) {
            this.completionPromise.cancel();
            this.completionPromise = null;
        }
    };
    Delayer.prototype.cancelTimeout = function () {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    return Delayer;
}());

var ShallowCancelThenPromise = /** @class */ (function (_super) {
    __extends(ShallowCancelThenPromise, _super);
    function ShallowCancelThenPromise(outer) {
        var _this = this;
        var completeCallback, errorCallback, progressCallback;
        _this = _super.call(this, function (c, e, p) {
            completeCallback = c;
            errorCallback = e;
            progressCallback = p;
        }, function () {
            // cancel this promise but not the
            // outer promise
            errorCallback(_errors_js__WEBPACK_IMPORTED_MODULE_0__["canceled"]());
        }) || this;
        outer.then(completeCallback, errorCallback, progressCallback);
        return _this;
    }
    return ShallowCancelThenPromise;
}(_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"]));

/**
 * Replacement for `WinJS.TPromise.timeout`.
 */
function timeout(n) {
    return createCancelablePromise(function (token) {
        return new Promise(function (resolve, reject) {
            var handle = setTimeout(resolve, n);
            token.onCancellationRequested(function (_) {
                clearTimeout(handle);
                reject(_errors_js__WEBPACK_IMPORTED_MODULE_0__["canceled"]());
            });
        });
    });
}
function isWinJSPromise(candidate) {
    return _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].is(candidate) && typeof candidate.done === 'function';
}
function always(winjsPromiseOrThenable, f) {
    if (isWinJSPromise(winjsPromiseOrThenable)) {
        return new _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"](function (c, e, p) {
            winjsPromiseOrThenable.done(function (result) {
                try {
                    f(result);
                }
                catch (e1) {
                    _errors_js__WEBPACK_IMPORTED_MODULE_0__["onUnexpectedError"](e1);
                }
                c(result);
            }, function (err) {
                try {
                    f(err);
                }
                catch (e1) {
                    _errors_js__WEBPACK_IMPORTED_MODULE_0__["onUnexpectedError"](e1);
                }
                e(err);
            }, function (progress) {
                p(progress);
            });
        }, function () {
            winjsPromiseOrThenable.cancel();
        });
    }
    else {
        // simple
        winjsPromiseOrThenable.then(function (_) { return f(); }, function (_) { return f(); });
        return winjsPromiseOrThenable;
    }
}
function first2(promiseFactories, shouldStop, defaultValue) {
    if (shouldStop === void 0) { shouldStop = function (t) { return !!t; }; }
    if (defaultValue === void 0) { defaultValue = null; }
    var index = 0;
    var len = promiseFactories.length;
    var loop = function () {
        if (index >= len) {
            return Promise.resolve(defaultValue);
        }
        var factory = promiseFactories[index++];
        var promise = factory();
        return promise.then(function (result) {
            if (shouldStop(result)) {
                return Promise.resolve(result);
            }
            return loop();
        });
    };
    return loop();
}
function first(promiseFactories, shouldStop, defaultValue) {
    if (shouldStop === void 0) { shouldStop = function (t) { return !!t; }; }
    if (defaultValue === void 0) { defaultValue = null; }
    var index = 0;
    var len = promiseFactories.length;
    var loop = function () {
        if (index >= len) {
            return _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(defaultValue);
        }
        var factory = promiseFactories[index++];
        var promise = factory();
        return promise.then(function (result) {
            if (shouldStop(result)) {
                return _winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(result);
            }
            return loop();
        });
    };
    return loop();
}
function setDisposableTimeout(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var handle = setTimeout.apply(void 0, [handler, timeout].concat(args));
    return { dispose: function () { clearTimeout(handle); } };
}
var TimeoutTimer = /** @class */ (function (_super) {
    __extends(TimeoutTimer, _super);
    function TimeoutTimer() {
        var _this = _super.call(this) || this;
        _this._token = -1;
        return _this;
    }
    TimeoutTimer.prototype.dispose = function () {
        this.cancel();
        _super.prototype.dispose.call(this);
    };
    TimeoutTimer.prototype.cancel = function () {
        if (this._token !== -1) {
            clearTimeout(this._token);
            this._token = -1;
        }
    };
    TimeoutTimer.prototype.cancelAndSet = function (runner, timeout) {
        var _this = this;
        this.cancel();
        this._token = setTimeout(function () {
            _this._token = -1;
            runner();
        }, timeout);
    };
    TimeoutTimer.prototype.setIfNotSet = function (runner, timeout) {
        var _this = this;
        if (this._token !== -1) {
            // timer is already set
            return;
        }
        this._token = setTimeout(function () {
            _this._token = -1;
            runner();
        }, timeout);
    };
    return TimeoutTimer;
}(_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__["Disposable"]));

var IntervalTimer = /** @class */ (function (_super) {
    __extends(IntervalTimer, _super);
    function IntervalTimer() {
        var _this = _super.call(this) || this;
        _this._token = -1;
        return _this;
    }
    IntervalTimer.prototype.dispose = function () {
        this.cancel();
        _super.prototype.dispose.call(this);
    };
    IntervalTimer.prototype.cancel = function () {
        if (this._token !== -1) {
            clearInterval(this._token);
            this._token = -1;
        }
    };
    IntervalTimer.prototype.cancelAndSet = function (runner, interval) {
        this.cancel();
        this._token = setInterval(function () {
            runner();
        }, interval);
    };
    return IntervalTimer;
}(_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__["Disposable"]));

var RunOnceScheduler = /** @class */ (function () {
    function RunOnceScheduler(runner, timeout) {
        this.timeoutToken = -1;
        this.runner = runner;
        this.timeout = timeout;
        this.timeoutHandler = this.onTimeout.bind(this);
    }
    /**
     * Dispose RunOnceScheduler
     */
    RunOnceScheduler.prototype.dispose = function () {
        this.cancel();
        this.runner = null;
    };
    /**
     * Cancel current scheduled runner (if any).
     */
    RunOnceScheduler.prototype.cancel = function () {
        if (this.isScheduled()) {
            clearTimeout(this.timeoutToken);
            this.timeoutToken = -1;
        }
    };
    /**
     * Cancel previous runner (if any) & schedule a new runner.
     */
    RunOnceScheduler.prototype.schedule = function (delay) {
        if (delay === void 0) { delay = this.timeout; }
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    };
    /**
     * Returns true if scheduled.
     */
    RunOnceScheduler.prototype.isScheduled = function () {
        return this.timeoutToken !== -1;
    };
    RunOnceScheduler.prototype.onTimeout = function () {
        this.timeoutToken = -1;
        if (this.runner) {
            this.doRun();
        }
    };
    RunOnceScheduler.prototype.doRun = function () {
        this.runner();
    };
    return RunOnceScheduler;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/cancellation.js ***!
  \***********************************************************************/
/*! exports provided: CancellationToken, CancellationTokenSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationToken", function() { return CancellationToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationTokenSource", function() { return CancellationTokenSource; });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var shortcutEvent = Object.freeze(function (callback, context) {
    var handle = setTimeout(callback.bind(context), 0);
    return { dispose: function () { clearTimeout(handle); } };
});
var CancellationToken;
(function (CancellationToken) {
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: _event_js__WEBPACK_IMPORTED_MODULE_0__["Event"].None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = /** @class */ (function () {
    function MutableToken() {
        this._isCancelled = false;
    }
    MutableToken.prototype.cancel = function () {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    };
    Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
        get: function () {
            return this._isCancelled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
        get: function () {
            if (this._isCancelled) {
                return shortcutEvent;
            }
            if (!this._emitter) {
                this._emitter = new _event_js__WEBPACK_IMPORTED_MODULE_0__["Emitter"]();
            }
            return this._emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MutableToken.prototype.dispose = function () {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = undefined;
        }
    };
    return MutableToken;
}());
var CancellationTokenSource = /** @class */ (function () {
    function CancellationTokenSource() {
    }
    Object.defineProperty(CancellationTokenSource.prototype, "token", {
        get: function () {
            if (!this._token) {
                // be lazy and create the token only when
                // actually needed
                this._token = new MutableToken();
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    CancellationTokenSource.prototype.cancel = function () {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    };
    CancellationTokenSource.prototype.dispose = function () {
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    };
    return CancellationTokenSource;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js ***!
  \********************************************************************/
/*! exports provided: stringDiff, Debug, MyArray, LcsDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringDiff", function() { return stringDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyArray", function() { return MyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcsDiff", function() { return LcsDiff; });
/* harmony import */ var _diffChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diffChange.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function createStringSequence(a) {
    return {
        getLength: function () { return a.length; },
        getElementAtIndex: function (pos) { return a.charCodeAt(pos); }
    };
}
function stringDiff(original, modified, pretty) {
    return new LcsDiff(createStringSequence(original), createStringSequence(modified)).ComputeDiff(pretty);
}
//
// The code below has been ported from a C# implementation in VS
//
var Debug = /** @class */ (function () {
    function Debug() {
    }
    Debug.Assert = function (condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    };
    return Debug;
}());

var MyArray = /** @class */ (function () {
    function MyArray() {
    }
    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    MyArray.Copy = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
        for (var i = 0; i < length; i++) {
            destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
        }
    };
    return MyArray;
}());

//*****************************************************************************
// LcsDiff.cs
//
// An implementation of the difference algorithm described in
// "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
//
// Copyright (C) 2008 Microsoft Corporation @minifier_do_not_preserve
//*****************************************************************************
// Our total memory usage for storing history is (worst-case):
// 2 * [(MaxDifferencesHistory + 1) * (MaxDifferencesHistory + 1) - 1] * sizeof(int)
// 2 * [1448*1448 - 1] * 4 = 16773624 = 16MB
var MaxDifferencesHistory = 1447;
//let MaxDifferencesHistory = 100;
/**
 * A utility class which helps to create the set of DiffChanges from
 * a difference operation. This class accepts original DiffElements and
 * modified DiffElements that are involved in a particular change. The
 * MarktNextChange() method can be called to mark the separation between
 * distinct changes. At the end, the Changes property can be called to retrieve
 * the constructed changes.
 */
var DiffChangeHelper = /** @class */ (function () {
    /**
     * Constructs a new DiffChangeHelper for the given DiffSequences.
     */
    function DiffChangeHelper() {
        this.m_changes = [];
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
    }
    /**
     * Marks the beginning of the next change in the set of differences.
     */
    DiffChangeHelper.prototype.MarkNextChange = function () {
        // Only add to the list if there is something to add
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Add the new change to our list
            this.m_changes.push(new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
        }
        // Reset for the next change
        this.m_originalCount = 0;
        this.m_modifiedCount = 0;
        this.m_originalStart = Number.MAX_VALUE;
        this.m_modifiedStart = Number.MAX_VALUE;
    };
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */
    DiffChangeHelper.prototype.AddOriginalElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_originalCount++;
    };
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */
    DiffChangeHelper.prototype.AddModifiedElement = function (originalIndex, modifiedIndex) {
        // The 'true' start index is the smallest of the ones we've seen
        this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
        this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
        this.m_modifiedCount++;
    };
    /**
     * Retrieves all of the changes marked by the class.
     */
    DiffChangeHelper.prototype.getChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        return this.m_changes;
    };
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */
    DiffChangeHelper.prototype.getReverseChanges = function () {
        if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
            // Finish up on whatever is left
            this.MarkNextChange();
        }
        this.m_changes.reverse();
        return this.m_changes;
    };
    return DiffChangeHelper;
}());
/**
 * An implementation of the difference algorithm described in
 * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
 */
var LcsDiff = /** @class */ (function () {
    /**
     * Constructs the DiffFinder
     */
    function LcsDiff(originalSequence, newSequence, continueProcessingPredicate) {
        if (continueProcessingPredicate === void 0) { continueProcessingPredicate = null; }
        this.OriginalSequence = originalSequence;
        this.ModifiedSequence = newSequence;
        this.ContinueProcessingPredicate = continueProcessingPredicate;
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
    }
    LcsDiff.prototype.ElementsAreEqual = function (originalIndex, newIndex) {
        return (this.OriginalSequence.getElementAtIndex(originalIndex) === this.ModifiedSequence.getElementAtIndex(newIndex));
    };
    LcsDiff.prototype.OriginalElementsAreEqual = function (index1, index2) {
        return (this.OriginalSequence.getElementAtIndex(index1) === this.OriginalSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ModifiedElementsAreEqual = function (index1, index2) {
        return (this.ModifiedSequence.getElementAtIndex(index1) === this.ModifiedSequence.getElementAtIndex(index2));
    };
    LcsDiff.prototype.ComputeDiff = function (pretty) {
        return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, pretty);
    };
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype._ComputeDiff = function (originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
        var quitEarlyArr = [false];
        var changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
        if (pretty) {
            // We have to clean up the computed diff to be more intuitive
            // but it turns out this cannot be done correctly until the entire set
            // of diffs have been computed
            return this.ShiftChanges(changes);
        }
        return changes;
    };
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */
    LcsDiff.prototype.ComputeDiffRecursive = function (originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
        quitEarlyArr[0] = false;
        // Find the start of the differences
        while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
            originalStart++;
            modifiedStart++;
        }
        // Find the end of the differences
        while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
            originalEnd--;
            modifiedEnd--;
        }
        // In the special case where we either have all insertions or all deletions or the sequences are identical
        if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
            var changes = void 0;
            if (modifiedStart <= modifiedEnd) {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                // All insertions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
                ];
            }
            else if (originalStart <= originalEnd) {
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // All deletions
                changes = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
                ];
            }
            else {
                Debug.Assert(originalStart === originalEnd + 1, 'originalStart should only be one more than originalEnd');
                Debug.Assert(modifiedStart === modifiedEnd + 1, 'modifiedStart should only be one more than modifiedEnd');
                // Identical sequences - No differences
                changes = [];
            }
            return changes;
        }
        // This problem can be solved using the Divide-And-Conquer technique.
        var midOriginalArr = [0], midModifiedArr = [0];
        var result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
        var midOriginal = midOriginalArr[0];
        var midModified = midModifiedArr[0];
        if (result !== null) {
            // Result is not-null when there was enough memory to compute the changes while
            // searching for the recursion point
            return result;
        }
        else if (!quitEarlyArr[0]) {
            // We can break the problem down recursively by finding the changes in the
            // First Half:   (originalStart, modifiedStart) to (midOriginal, midModified)
            // Second Half:  (midOriginal + 1, minModified + 1) to (originalEnd, modifiedEnd)
            // NOTE: ComputeDiff() is inclusive, therefore the second range starts on the next point
            var leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
            var rightChanges = [];
            if (!quitEarlyArr[0]) {
                rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
            }
            else {
                // We did't have time to finish the first half, so we don't have time to compute this half.
                // Consider the entire rest of the sequence different.
                rightChanges = [
                    new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
                ];
            }
            return this.ConcatenateChanges(leftChanges, rightChanges);
        }
        // If we hit here, we quit early, and so can't return anything meaningful
        return [
            new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
        ];
    };
    LcsDiff.prototype.WALKTRACE = function (diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
        var forwardChanges = null, reverseChanges = null;
        // First, walk backward through the forward diagonals history
        var changeHelper = new DiffChangeHelper();
        var diagonalMin = diagonalForwardStart;
        var diagonalMax = diagonalForwardEnd;
        var diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalForwardOffset;
        var lastOriginalIndex = Number.MIN_VALUE;
        var historyIndex = this.m_forwardHistory.length - 1;
        var diagonal;
        do {
            // Get the diagonal index from the relative diagonal number
            diagonal = diagonalRelative + diagonalForwardBase;
            // Figure out where we came from
            if (diagonal === diagonalMin || (diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                // Vertical line (the element is an insert)
                originalIndex = forwardPoints[diagonal + 1];
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex;
                changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
                diagonalRelative = (diagonal + 1) - diagonalForwardBase; //Setup for the next iteration
            }
            else {
                // Horizontal line (the element is a deletion)
                originalIndex = forwardPoints[diagonal - 1] + 1;
                modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
                if (originalIndex < lastOriginalIndex) {
                    changeHelper.MarkNextChange();
                }
                lastOriginalIndex = originalIndex - 1;
                changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
                diagonalRelative = (diagonal - 1) - diagonalForwardBase; //Setup for the next iteration
            }
            if (historyIndex >= 0) {
                forwardPoints = this.m_forwardHistory[historyIndex];
                diagonalForwardBase = forwardPoints[0]; //We stored this in the first spot
                diagonalMin = 1;
                diagonalMax = forwardPoints.length - 1;
            }
        } while (--historyIndex >= -1);
        // Ironically, we get the forward changes as the reverse of the
        // order we added them since we technically added them backwards
        forwardChanges = changeHelper.getReverseChanges();
        if (quitEarlyArr[0]) {
            // TODO: Calculate a partial from the reverse diagonals.
            //       For now, just assume everything after the midOriginal/midModified point is a diff
            var originalStartPoint = midOriginalArr[0] + 1;
            var modifiedStartPoint = midModifiedArr[0] + 1;
            if (forwardChanges !== null && forwardChanges.length > 0) {
                var lastForwardChange = forwardChanges[forwardChanges.length - 1];
                originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
                modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
            }
            reverseChanges = [
                new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
            ];
        }
        else {
            // Now walk backward through the reverse diagonals history
            changeHelper = new DiffChangeHelper();
            diagonalMin = diagonalReverseStart;
            diagonalMax = diagonalReverseEnd;
            diagonalRelative = (midOriginalArr[0] - midModifiedArr[0]) - diagonalReverseOffset;
            lastOriginalIndex = Number.MAX_VALUE;
            historyIndex = (deltaIsEven) ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
            do {
                // Get the diagonal index from the relative diagonal number
                diagonal = diagonalRelative + diagonalReverseBase;
                // Figure out where we came from
                if (diagonal === diagonalMin || (diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    // Horizontal line (the element is a deletion))
                    originalIndex = reversePoints[diagonal + 1] - 1;
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex + 1;
                    changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal + 1) - diagonalReverseBase; //Setup for the next iteration
                }
                else {
                    // Vertical line (the element is an insertion)
                    originalIndex = reversePoints[diagonal - 1];
                    modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
                    if (originalIndex > lastOriginalIndex) {
                        changeHelper.MarkNextChange();
                    }
                    lastOriginalIndex = originalIndex;
                    changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
                    diagonalRelative = (diagonal - 1) - diagonalReverseBase; //Setup for the next iteration
                }
                if (historyIndex >= 0) {
                    reversePoints = this.m_reverseHistory[historyIndex];
                    diagonalReverseBase = reversePoints[0]; //We stored this in the first spot
                    diagonalMin = 1;
                    diagonalMax = reversePoints.length - 1;
                }
            } while (--historyIndex >= -1);
            // There are cases where the reverse history will find diffs that
            // are correct, but not intuitive, so we need shift them.
            reverseChanges = changeHelper.getChanges();
        }
        return this.ConcatenateChanges(forwardChanges, reverseChanges);
    };
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */
    LcsDiff.prototype.ComputeRecursionPoint = function (originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
        var originalIndex, modifiedIndex;
        var diagonalForwardStart = 0, diagonalForwardEnd = 0;
        var diagonalReverseStart = 0, diagonalReverseEnd = 0;
        var numDifferences;
        // To traverse the edit graph and produce the proper LCS, our actual
        // start position is just outside the given boundary
        originalStart--;
        modifiedStart--;
        // We set these up to make the compiler happy, but they will
        // be replaced before we return with the actual recursion point
        midOriginalArr[0] = 0;
        midModifiedArr[0] = 0;
        // Clear out the history
        this.m_forwardHistory = [];
        this.m_reverseHistory = [];
        // Each cell in the two arrays corresponds to a diagonal in the edit graph.
        // The integer value in the cell represents the originalIndex of the furthest
        // reaching point found so far that ends in that diagonal.
        // The modifiedIndex can be computed mathematically from the originalIndex and the diagonal number.
        var maxDifferences = (originalEnd - originalStart) + (modifiedEnd - modifiedStart);
        var numDiagonals = maxDifferences + 1;
        var forwardPoints = new Array(numDiagonals);
        var reversePoints = new Array(numDiagonals);
        // diagonalForwardBase: Index into forwardPoints of the diagonal which passes through (originalStart, modifiedStart)
        // diagonalReverseBase: Index into reversePoints of the diagonal which passes through (originalEnd, modifiedEnd)
        var diagonalForwardBase = (modifiedEnd - modifiedStart);
        var diagonalReverseBase = (originalEnd - originalStart);
        // diagonalForwardOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalForwardBase)
        // diagonalReverseOffset: Geometric offset which allows modifiedIndex to be computed from originalIndex and the
        //    diagonal number (relative to diagonalReverseBase)
        var diagonalForwardOffset = (originalStart - modifiedStart);
        var diagonalReverseOffset = (originalEnd - modifiedEnd);
        // delta: The difference between the end diagonal and the start diagonal. This is used to relate diagonal numbers
        //   relative to the start diagonal with diagonal numbers relative to the end diagonal.
        // The Even/Oddn-ness of this delta is important for determining when we should check for overlap
        var delta = diagonalReverseBase - diagonalForwardBase;
        var deltaIsEven = (delta % 2 === 0);
        // Here we set up the start and end points as the furthest points found so far
        // in both the forward and reverse directions, respectively
        forwardPoints[diagonalForwardBase] = originalStart;
        reversePoints[diagonalReverseBase] = originalEnd;
        // Remember if we quit early, and thus need to do a best-effort result instead of a real result.
        quitEarlyArr[0] = false;
        // A couple of points:
        // --With this method, we iterate on the number of differences between the two sequences.
        //   The more differences there actually are, the longer this will take.
        // --Also, as the number of differences increases, we have to search on diagonals further
        //   away from the reference diagonal (which is diagonalForwardBase for forward, diagonalReverseBase for reverse).
        // --We extend on even diagonals (relative to the reference diagonal) only when numDifferences
        //   is even and odd diagonals only when numDifferences is odd.
        var diagonal, tempOriginalIndex;
        for (numDifferences = 1; numDifferences <= (maxDifferences / 2) + 1; numDifferences++) {
            var furthestOriginalIndex = 0;
            var furthestModifiedIndex = 0;
            // Run the algorithm in the forward direction
            diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
            for (diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalStart, modifiedStart)
                if (diagonal === diagonalForwardStart || (diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1])) {
                    originalIndex = forwardPoints[diagonal + 1];
                }
                else {
                    originalIndex = forwardPoints[diagonal - 1] + 1;
                }
                modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
                // Save the current originalIndex so we can test for false overlap in step 3
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // so long as the elements are equal.
                while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
                    originalIndex++;
                    modifiedIndex++;
                }
                forwardPoints[diagonal] = originalIndex;
                if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
                    furthestOriginalIndex = originalIndex;
                    furthestModifiedIndex = modifiedIndex;
                }
                // STEP 3: If delta is odd (overlap first happens on forward when delta is odd)
                // and diagonal is in the range of reverse diagonals computed for numDifferences-1
                // (the previous iteration; we haven't computed reverse diagonals for numDifferences yet)
                // then check for overlap.
                if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= (numDifferences - 1)) {
                    if (originalIndex >= reversePoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex <= reversePoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Check to see if we should be quitting early, before moving on to the next iteration.
            var matchLengthOfLongest = ((furthestOriginalIndex - originalStart) + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
            if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, this.OriginalSequence, matchLengthOfLongest)) {
                // We can't finish, so skip ahead to generating a result from what we have.
                quitEarlyArr[0] = true;
                // Use the furthest distance we got in the forward direction.
                midOriginalArr[0] = furthestOriginalIndex;
                midModifiedArr[0] = furthestModifiedIndex;
                if (matchLengthOfLongest > 0 && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                    // Enough of the history is in memory to walk it backwards
                    return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                }
                else {
                    // We didn't actually remember enough of the history.
                    //Since we are quiting the diff early, we need to shift back the originalStart and modified start
                    //back into the boundary limits since we decremented their value above beyond the boundary limit.
                    originalStart++;
                    modifiedStart++;
                    return [
                        new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
                    ];
                }
            }
            // Run the algorithm in the reverse direction
            diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
            for (diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
                // STEP 1: We extend the furthest reaching point in the present diagonal
                // by looking at the diagonals above and below and picking the one whose point
                // is further away from the start point (originalEnd, modifiedEnd)
                if (diagonal === diagonalReverseStart || (diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1])) {
                    originalIndex = reversePoints[diagonal + 1] - 1;
                }
                else {
                    originalIndex = reversePoints[diagonal - 1];
                }
                modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
                // Save the current originalIndex so we can test for false overlap
                tempOriginalIndex = originalIndex;
                // STEP 2: We can continue to extend the furthest reaching point in the present diagonal
                // as long as the elements are equal.
                while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
                    originalIndex--;
                    modifiedIndex--;
                }
                reversePoints[diagonal] = originalIndex;
                // STEP 4: If delta is even (overlap first happens on reverse when delta is even)
                // and diagonal is in the range of forward diagonals computed for numDifferences
                // then check for overlap.
                if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
                    if (originalIndex <= forwardPoints[diagonal]) {
                        midOriginalArr[0] = originalIndex;
                        midModifiedArr[0] = modifiedIndex;
                        if (tempOriginalIndex >= forwardPoints[diagonal] && MaxDifferencesHistory > 0 && numDifferences <= (MaxDifferencesHistory + 1)) {
                            // BINGO! We overlapped, and we have the full trace in memory!
                            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
                        }
                        else {
                            // Either false overlap, or we didn't have enough memory for the full trace
                            // Just return the recursion point
                            return null;
                        }
                    }
                }
            }
            // Save current vectors to history before the next iteration
            if (numDifferences <= MaxDifferencesHistory) {
                // We are allocating space for one extra int, which we fill with
                // the index of the diagonal base index
                var temp = new Array(diagonalForwardEnd - diagonalForwardStart + 2);
                temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
                MyArray.Copy(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
                this.m_forwardHistory.push(temp);
                temp = new Array(diagonalReverseEnd - diagonalReverseStart + 2);
                temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
                MyArray.Copy(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
                this.m_reverseHistory.push(temp);
            }
        }
        // If we got here, then we have the full trace in history. We just have to convert it to a change list
        // NOTE: This part is a bit messy
        return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    };
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */
    LcsDiff.prototype.ShiftChanges = function (changes) {
        var mergedDiffs;
        do {
            mergedDiffs = false;
            // Shift all the changes down first
            for (var i = 0; i < changes.length; i++) {
                var change = changes[i];
                var originalStop = (i < changes.length - 1) ? changes[i + 1].originalStart : this.OriginalSequence.getLength();
                var modifiedStop = (i < changes.length - 1) ? changes[i + 1].modifiedStart : this.ModifiedSequence.getLength();
                var checkOriginal = change.originalLength > 0;
                var checkModified = change.modifiedLength > 0;
                while (change.originalStart + change.originalLength < originalStop &&
                    change.modifiedStart + change.modifiedLength < modifiedStop &&
                    (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) &&
                    (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
                    change.originalStart++;
                    change.modifiedStart++;
                }
            }
            // Build up the new list (we have to build a new list because we
            // might have changes we can merge together now)
            var result = new Array();
            var mergedChangeArr = [null];
            for (var i = 0; i < changes.length; i++) {
                if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
                    mergedDiffs = true;
                    result.push(mergedChangeArr[0]);
                    i++;
                }
                else {
                    result.push(changes[i]);
                }
            }
            changes = result;
        } while (mergedDiffs);
        // Shift changes back up until we hit empty or whitespace-only lines
        for (var i = changes.length - 1; i >= 0; i--) {
            var change = changes[i];
            var originalStop = 0;
            var modifiedStop = 0;
            if (i > 0) {
                var prevChange = changes[i - 1];
                if (prevChange.originalLength > 0) {
                    originalStop = prevChange.originalStart + prevChange.originalLength;
                }
                if (prevChange.modifiedLength > 0) {
                    modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
                }
            }
            var checkOriginal = change.originalLength > 0;
            var checkModified = change.modifiedLength > 0;
            var bestDelta = 0;
            var bestScore = this._boundaryScore(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
            for (var delta = 1;; delta++) {
                var originalStart = change.originalStart - delta;
                var modifiedStart = change.modifiedStart - delta;
                if (originalStart < originalStop || modifiedStart < modifiedStop) {
                    break;
                }
                if (checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + change.originalLength)) {
                    break;
                }
                if (checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + change.modifiedLength)) {
                    break;
                }
                var score = this._boundaryScore(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
                if (score > bestScore) {
                    bestScore = score;
                    bestDelta = delta;
                }
            }
            change.originalStart -= bestDelta;
            change.modifiedStart -= bestDelta;
        }
        return changes;
    };
    LcsDiff.prototype._OriginalIsBoundary = function (index) {
        if (index <= 0 || index >= this.OriginalSequence.getLength() - 1) {
            return true;
        }
        var element = this.OriginalSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._OriginalRegionIsBoundary = function (originalStart, originalLength) {
        if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
            return true;
        }
        if (originalLength > 0) {
            var originalEnd = originalStart + originalLength;
            if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._ModifiedIsBoundary = function (index) {
        if (index <= 0 || index >= this.ModifiedSequence.getLength() - 1) {
            return true;
        }
        var element = this.ModifiedSequence.getElementAtIndex(index);
        return (typeof element === 'string' && /^\s*$/.test(element));
    };
    LcsDiff.prototype._ModifiedRegionIsBoundary = function (modifiedStart, modifiedLength) {
        if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
            return true;
        }
        if (modifiedLength > 0) {
            var modifiedEnd = modifiedStart + modifiedLength;
            if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
                return true;
            }
        }
        return false;
    };
    LcsDiff.prototype._boundaryScore = function (originalStart, originalLength, modifiedStart, modifiedLength) {
        var originalScore = (this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0);
        var modifiedScore = (this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0);
        return (originalScore + modifiedScore);
    };
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */
    LcsDiff.prototype.ConcatenateChanges = function (left, right) {
        var mergedChangeArr = [];
        var result = null;
        if (left.length === 0 || right.length === 0) {
            return (right.length > 0) ? right : left;
        }
        else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
            // Since we break the problem down recursively, it is possible that we
            // might recurse in the middle of a change thereby splitting it into
            // two changes. Here in the combining stage, we detect and fuse those
            // changes back together
            result = new Array(left.length + right.length - 1);
            MyArray.Copy(left, 0, result, 0, left.length - 1);
            result[left.length - 1] = mergedChangeArr[0];
            MyArray.Copy(right, 1, result, left.length, right.length - 1);
            return result;
        }
        else {
            result = new Array(left.length + right.length);
            MyArray.Copy(left, 0, result, 0, left.length);
            MyArray.Copy(right, 0, result, left.length, right.length);
            return result;
        }
    };
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */
    LcsDiff.prototype.ChangesOverlap = function (left, right, mergedChangeArr) {
        Debug.Assert(left.originalStart <= right.originalStart, 'Left change is not less than or equal to right change');
        Debug.Assert(left.modifiedStart <= right.modifiedStart, 'Left change is not less than or equal to right change');
        if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
            var originalStart = left.originalStart;
            var originalLength = left.originalLength;
            var modifiedStart = left.modifiedStart;
            var modifiedLength = left.modifiedLength;
            if (left.originalStart + left.originalLength >= right.originalStart) {
                originalLength = right.originalStart + right.originalLength - left.originalStart;
            }
            if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
                modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
            }
            mergedChangeArr[0] = new _diffChange_js__WEBPACK_IMPORTED_MODULE_0__["DiffChange"](originalStart, originalLength, modifiedStart, modifiedLength);
            return true;
        }
        else {
            mergedChangeArr[0] = null;
            return false;
        }
    };
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */
    LcsDiff.prototype.ClipDiagonalBound = function (diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
        if (diagonal >= 0 && diagonal < numDiagonals) {
            // Nothing to clip, its in range
            return diagonal;
        }
        // diagonalsBelow: The number of diagonals below the reference diagonal
        // diagonalsAbove: The number of diagonals above the reference diagonal
        var diagonalsBelow = diagonalBaseIndex;
        var diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
        var diffEven = (numDifferences % 2 === 0);
        if (diagonal < 0) {
            var lowerBoundEven = (diagonalsBelow % 2 === 0);
            return (diffEven === lowerBoundEven) ? 0 : 1;
        }
        else {
            var upperBoundEven = (diagonalsAbove % 2 === 0);
            return (diffEven === upperBoundEven) ? numDiagonals - 1 : numDiagonals - 2;
        }
    };
    return LcsDiff;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/diff/diffChange.js ***!
  \**************************************************************************/
/*! exports provided: DiffChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffChange", function() { return DiffChange; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Represents information about a specific difference between two sequences.
 */
var DiffChange = /** @class */ (function () {
    /**
     * Constructs a new DiffChange with the given sequence information
     * and content.
     */
    function DiffChange(originalStart, originalLength, modifiedStart, modifiedLength) {
        //Debug.Assert(originalLength > 0 || modifiedLength > 0, "originalLength and modifiedLength cannot both be <= 0");
        this.originalStart = originalStart;
        this.originalLength = originalLength;
        this.modifiedStart = modifiedStart;
        this.modifiedLength = modifiedLength;
    }
    /**
     * The end point (exclusive) of the change in the original sequence.
     */
    DiffChange.prototype.getOriginalEnd = function () {
        return this.originalStart + this.originalLength;
    };
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */
    DiffChange.prototype.getModifiedEnd = function () {
        return this.modifiedStart + this.modifiedLength;
    };
    return DiffChange;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/errors.js":
/*!*****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/errors.js ***!
  \*****************************************************************/
/*! exports provided: ErrorHandler, errorHandler, onUnexpectedError, onUnexpectedExternalError, transformErrorForSerialization, isPromiseCanceledError, canceled, illegalArgument, illegalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedError", function() { return onUnexpectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnexpectedExternalError", function() { return onUnexpectedExternalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformErrorForSerialization", function() { return transformErrorForSerialization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseCanceledError", function() { return isPromiseCanceledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canceled", function() { return canceled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalArgument", function() { return illegalArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "illegalState", function() { return illegalState; });
/* harmony import */ var _winjs_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winjs.base.js */ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


// ------ BEGIN Hook up error listeners to winjs promises
var outstandingPromiseErrors = {};
function promiseErrorHandler(e) {
    //
    // e.detail looks like: { exception, error, promise, handler, id, parent }
    //
    var details = e.detail;
    var id = details.id;
    // If the error has a parent promise then this is not the origination of the
    //  error so we check if it has a handler, and if so we mark that the error
    //  was handled by removing it from outstandingPromiseErrors
    //
    if (details.parent) {
        if (details.handler && outstandingPromiseErrors) {
            delete outstandingPromiseErrors[id];
        }
        return;
    }
    // Indicate that this error was originated and needs to be handled
    outstandingPromiseErrors[id] = details;
    // The first time the queue fills up this iteration, schedule a timeout to
    // check if any errors are still unhandled.
    if (Object.keys(outstandingPromiseErrors).length === 1) {
        setTimeout(function () {
            var errors = outstandingPromiseErrors;
            outstandingPromiseErrors = {};
            Object.keys(errors).forEach(function (errorId) {
                var error = errors[errorId];
                if (error.exception) {
                    onUnexpectedError(error.exception);
                }
                else if (error.error) {
                    onUnexpectedError(error.error);
                }
                console.log('WARNING: Promise with no error callback:' + error.id);
                console.log(error);
                if (error.exception) {
                    console.log(error.exception.stack);
                }
            });
        }, 0);
    }
}
_winjs_base_js__WEBPACK_IMPORTED_MODULE_0__["TPromise"].addEventListener('error', promiseErrorHandler);
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    ErrorHandler.prototype.emit = function (e) {
        this.listeners.forEach(function (listener) {
            listener(e);
        });
    };
    ErrorHandler.prototype.onUnexpectedError = function (e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    };
    // For external errors, we don't want the listeners to be called
    ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
        this.unexpectedErrorHandler(e);
    };
    return ErrorHandler;
}());

var errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
/**
 * Returns an error that signals cancellation.
 */
function canceled() {
    var error = new Error(canceledName);
    error.name = error.message;
    return error;
}
function illegalArgument(name) {
    if (name) {
        return new Error("Illegal argument: " + name);
    }
    else {
        return new Error('Illegal argument');
    }
}
function illegalState(name) {
    if (name) {
        return new Error("Illegal state: " + name);
    }
    else {
        return new Error('Illegal state');
    }
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/event.js":
/*!****************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/event.js ***!
  \****************************************************************/
/*! exports provided: Event, Emitter, EventMultiplexer, once, anyEvent, debounceEvent, EventBufferer, mapEvent, filterEvent, chain, Relay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMultiplexer", function() { return EventMultiplexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyEvent", function() { return anyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceEvent", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBufferer", function() { return EventBufferer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEvent", function() { return mapEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEvent", function() { return filterEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relay", function() { return Relay; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _functional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functional.js */ "./node_modules/monaco-editor/esm/vs/base/common/functional.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedList.js */ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





var Event;
(function (Event) {
    var _disposable = { dispose: function () { } };
    Event.None = function () { return _disposable; };
})(Event || (Event = {}));
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */
var Emitter = /** @class */ (function () {
    function Emitter(_options) {
        this._options = _options;
    }
    Object.defineProperty(Emitter.prototype, "event", {
        /**
         * For the public to allow to subscribe
         * to events from this Emitter
         */
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = function (listener, thisArgs, disposables) {
                    if (!_this._listeners) {
                        _this._listeners = new _linkedList_js__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]();
                    }
                    var firstListener = _this._listeners.isEmpty();
                    if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                        _this._options.onFirstListenerAdd(_this);
                    }
                    var remove = _this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
                    if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                        _this._options.onFirstListenerDidAdd(_this);
                    }
                    if (_this._options && _this._options.onListenerDidAdd) {
                        _this._options.onListenerDidAdd(_this, listener, thisArgs);
                    }
                    var result;
                    result = {
                        dispose: function () {
                            result.dispose = Emitter._noop;
                            if (!_this._disposed) {
                                remove();
                                if (_this._options && _this._options.onLastListenerRemove && _this._listeners.isEmpty()) {
                                    _this._options.onLastListenerRemove(_this);
                                }
                            }
                        }
                    };
                    if (Array.isArray(disposables)) {
                        disposables.push(result);
                    }
                    return result;
                };
            }
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    Emitter.prototype.fire = function (event) {
        if (this._listeners) {
            // put all [listener,event]-pairs into delivery queue
            // then emit all event. an inner/nested event might be
            // the driver of this
            if (!this._deliveryQueue) {
                this._deliveryQueue = [];
            }
            for (var iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
                this._deliveryQueue.push([e.value, event]);
            }
            while (this._deliveryQueue.length > 0) {
                var _a = this._deliveryQueue.shift(), listener = _a[0], event_1 = _a[1];
                try {
                    if (typeof listener === 'function') {
                        listener.call(undefined, event_1);
                    }
                    else {
                        listener[0].call(listener[1], event_1);
                    }
                }
                catch (e) {
                    Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["onUnexpectedError"])(e);
                }
            }
        }
    };
    Emitter.prototype.dispose = function () {
        if (this._listeners) {
            this._listeners = undefined;
        }
        if (this._deliveryQueue) {
            this._deliveryQueue.length = 0;
        }
        this._disposed = true;
    };
    Emitter._noop = function () { };
    return Emitter;
}());

var EventMultiplexer = /** @class */ (function () {
    function EventMultiplexer() {
        var _this = this;
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onFirstListenerAdd: function () { return _this.onFirstListenerAdd(); },
            onLastListenerRemove: function () { return _this.onLastListenerRemove(); }
        });
    }
    Object.defineProperty(EventMultiplexer.prototype, "event", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    EventMultiplexer.prototype.add = function (event) {
        var _this = this;
        var e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        var dispose = function () {
            if (_this.hasListeners) {
                _this.unhook(e);
            }
            var idx = _this.events.indexOf(e);
            _this.events.splice(idx, 1);
        };
        return Object(_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["toDisposable"])(Object(_functional_js__WEBPACK_IMPORTED_MODULE_1__["once"])(dispose));
    };
    EventMultiplexer.prototype.onFirstListenerAdd = function () {
        var _this = this;
        this.hasListeners = true;
        this.events.forEach(function (e) { return _this.hook(e); });
    };
    EventMultiplexer.prototype.onLastListenerRemove = function () {
        var _this = this;
        this.hasListeners = false;
        this.events.forEach(function (e) { return _this.unhook(e); });
    };
    EventMultiplexer.prototype.hook = function (e) {
        var _this = this;
        e.listener = e.event(function (r) { return _this.emitter.fire(r); });
    };
    EventMultiplexer.prototype.unhook = function (e) {
        e.listener.dispose();
        e.listener = null;
    };
    EventMultiplexer.prototype.dispose = function () {
        this.emitter.dispose();
    };
    return EventMultiplexer;
}());

function once(event) {
    return function (listener, thisArgs, disposables) {
        if (thisArgs === void 0) { thisArgs = null; }
        var result = event(function (e) {
            result.dispose();
            return listener.call(thisArgs, e);
        }, null, disposables);
        return result;
    };
}
function anyEvent() {
    var events = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        events[_i] = arguments[_i];
    }
    return function (listener, thisArgs, disposables) {
        if (thisArgs === void 0) { thisArgs = null; }
        return Object(_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["combinedDisposable"])(events.map(function (event) { return event(function (e) { return listener.call(thisArgs, e); }, null, disposables); }));
    };
}
function debounceEvent(event, merger, delay, leading) {
    if (delay === void 0) { delay = 100; }
    if (leading === void 0) { leading = false; }
    var subscription;
    var output = undefined;
    var handle = undefined;
    var numDebouncedCalls = 0;
    var emitter = new Emitter({
        onFirstListenerAdd: function () {
            subscription = event(function (cur) {
                numDebouncedCalls++;
                output = merger(output, cur);
                if (leading && !handle) {
                    emitter.fire(output);
                }
                clearTimeout(handle);
                handle = setTimeout(function () {
                    var _output = output;
                    output = undefined;
                    handle = undefined;
                    if (!leading || numDebouncedCalls > 1) {
                        emitter.fire(_output);
                    }
                    numDebouncedCalls = 0;
                }, delay);
            });
        },
        onLastListenerRemove: function () {
            subscription.dispose();
        }
    });
    return emitter.event;
}
/**
 * The EventDelayer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
var EventBufferer = /** @class */ (function () {
    function EventBufferer() {
        this.buffers = [];
    }
    EventBufferer.prototype.wrapEvent = function (event) {
        var _this = this;
        return function (listener, thisArgs, disposables) {
            return event(function (i) {
                var buffer = _this.buffers[_this.buffers.length - 1];
                if (buffer) {
                    buffer.push(function () { return listener.call(thisArgs, i); });
                }
                else {
                    listener.call(thisArgs, i);
                }
            }, void 0, disposables);
        };
    };
    EventBufferer.prototype.bufferEvents = function (fn) {
        var buffer = [];
        this.buffers.push(buffer);
        fn();
        this.buffers.pop();
        buffer.forEach(function (flush) { return flush(); });
    };
    return EventBufferer;
}());

function mapEvent(event, map) {
    return function (listener, thisArgs, disposables) {
        if (thisArgs === void 0) { thisArgs = null; }
        return event(function (i) { return listener.call(thisArgs, map(i)); }, null, disposables);
    };
}
function filterEvent(event, filter) {
    return function (listener, thisArgs, disposables) {
        if (thisArgs === void 0) { thisArgs = null; }
        return event(function (e) { return filter(e) && listener.call(thisArgs, e); }, null, disposables);
    };
}
var ChainableEvent = /** @class */ (function () {
    function ChainableEvent(_event) {
        this._event = _event;
    }
    Object.defineProperty(ChainableEvent.prototype, "event", {
        get: function () { return this._event; },
        enumerable: true,
        configurable: true
    });
    ChainableEvent.prototype.map = function (fn) {
        return new ChainableEvent(mapEvent(this._event, fn));
    };
    ChainableEvent.prototype.filter = function (fn) {
        return new ChainableEvent(filterEvent(this._event, fn));
    };
    ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
        return this._event(listener, thisArgs, disposables);
    };
    return ChainableEvent;
}());
function chain(event) {
    return new ChainableEvent(event);
}
var Relay = /** @class */ (function () {
    function Relay() {
        this.emitter = new Emitter();
        this.event = this.emitter.event;
        this.disposable = _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__["Disposable"].None;
    }
    Object.defineProperty(Relay.prototype, "input", {
        set: function (event) {
            this.disposable.dispose();
            this.disposable = event(this.emitter.fire, this.emitter);
        },
        enumerable: true,
        configurable: true
    });
    Relay.prototype.dispose = function () {
        this.disposable.dispose();
        this.emitter.dispose();
    };
    return Relay;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/functional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/functional.js ***!
  \*********************************************************************/
/*! exports provided: once */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function once(fn) {
    var _this = this;
    var didCall = false;
    var result;
    return function () {
        if (didCall) {
            return result;
        }
        didCall = true;
        result = fn.apply(_this, arguments);
        return result;
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js ***!
  \*******************************************************************/
/*! exports provided: KeyCodeUtils, KeyChord, createKeybinding, createSimpleKeybinding, SimpleKeybinding, ChordKeybinding, ResolvedKeybindingPart, ResolvedKeybinding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodeUtils", function() { return KeyCodeUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyChord", function() { return KeyChord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKeybinding", function() { return createKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSimpleKeybinding", function() { return createSimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleKeybinding", function() { return SimpleKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordKeybinding", function() { return ChordKeybinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybindingPart", function() { return ResolvedKeybindingPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolvedKeybinding", function() { return ResolvedKeybinding; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var KeyCodeStrMap = /** @class */ (function () {
    function KeyCodeStrMap() {
        this._keyCodeToStr = [];
        this._strToKeyCode = Object.create(null);
    }
    KeyCodeStrMap.prototype.define = function (keyCode, str) {
        this._keyCodeToStr[keyCode] = str;
        this._strToKeyCode[str.toLowerCase()] = keyCode;
    };
    KeyCodeStrMap.prototype.keyCodeToStr = function (keyCode) {
        return this._keyCodeToStr[keyCode];
    };
    KeyCodeStrMap.prototype.strToKeyCode = function (str) {
        return this._strToKeyCode[str.toLowerCase()] || 0 /* Unknown */;
    };
    return KeyCodeStrMap;
}());
var uiMap = new KeyCodeStrMap();
var userSettingsUSMap = new KeyCodeStrMap();
var userSettingsGeneralMap = new KeyCodeStrMap();
(function () {
    function define(keyCode, uiLabel, usUserSettingsLabel, generalUserSettingsLabel) {
        if (usUserSettingsLabel === void 0) { usUserSettingsLabel = uiLabel; }
        if (generalUserSettingsLabel === void 0) { generalUserSettingsLabel = usUserSettingsLabel; }
        uiMap.define(keyCode, uiLabel);
        userSettingsUSMap.define(keyCode, usUserSettingsLabel);
        userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel);
    }
    define(0 /* Unknown */, 'unknown');
    define(1 /* Backspace */, 'Backspace');
    define(2 /* Tab */, 'Tab');
    define(3 /* Enter */, 'Enter');
    define(4 /* Shift */, 'Shift');
    define(5 /* Ctrl */, 'Ctrl');
    define(6 /* Alt */, 'Alt');
    define(7 /* PauseBreak */, 'PauseBreak');
    define(8 /* CapsLock */, 'CapsLock');
    define(9 /* Escape */, 'Escape');
    define(10 /* Space */, 'Space');
    define(11 /* PageUp */, 'PageUp');
    define(12 /* PageDown */, 'PageDown');
    define(13 /* End */, 'End');
    define(14 /* Home */, 'Home');
    define(15 /* LeftArrow */, 'LeftArrow', 'Left');
    define(16 /* UpArrow */, 'UpArrow', 'Up');
    define(17 /* RightArrow */, 'RightArrow', 'Right');
    define(18 /* DownArrow */, 'DownArrow', 'Down');
    define(19 /* Insert */, 'Insert');
    define(20 /* Delete */, 'Delete');
    define(21 /* KEY_0 */, '0');
    define(22 /* KEY_1 */, '1');
    define(23 /* KEY_2 */, '2');
    define(24 /* KEY_3 */, '3');
    define(25 /* KEY_4 */, '4');
    define(26 /* KEY_5 */, '5');
    define(27 /* KEY_6 */, '6');
    define(28 /* KEY_7 */, '7');
    define(29 /* KEY_8 */, '8');
    define(30 /* KEY_9 */, '9');
    define(31 /* KEY_A */, 'A');
    define(32 /* KEY_B */, 'B');
    define(33 /* KEY_C */, 'C');
    define(34 /* KEY_D */, 'D');
    define(35 /* KEY_E */, 'E');
    define(36 /* KEY_F */, 'F');
    define(37 /* KEY_G */, 'G');
    define(38 /* KEY_H */, 'H');
    define(39 /* KEY_I */, 'I');
    define(40 /* KEY_J */, 'J');
    define(41 /* KEY_K */, 'K');
    define(42 /* KEY_L */, 'L');
    define(43 /* KEY_M */, 'M');
    define(44 /* KEY_N */, 'N');
    define(45 /* KEY_O */, 'O');
    define(46 /* KEY_P */, 'P');
    define(47 /* KEY_Q */, 'Q');
    define(48 /* KEY_R */, 'R');
    define(49 /* KEY_S */, 'S');
    define(50 /* KEY_T */, 'T');
    define(51 /* KEY_U */, 'U');
    define(52 /* KEY_V */, 'V');
    define(53 /* KEY_W */, 'W');
    define(54 /* KEY_X */, 'X');
    define(55 /* KEY_Y */, 'Y');
    define(56 /* KEY_Z */, 'Z');
    define(57 /* Meta */, 'Meta');
    define(58 /* ContextMenu */, 'ContextMenu');
    define(59 /* F1 */, 'F1');
    define(60 /* F2 */, 'F2');
    define(61 /* F3 */, 'F3');
    define(62 /* F4 */, 'F4');
    define(63 /* F5 */, 'F5');
    define(64 /* F6 */, 'F6');
    define(65 /* F7 */, 'F7');
    define(66 /* F8 */, 'F8');
    define(67 /* F9 */, 'F9');
    define(68 /* F10 */, 'F10');
    define(69 /* F11 */, 'F11');
    define(70 /* F12 */, 'F12');
    define(71 /* F13 */, 'F13');
    define(72 /* F14 */, 'F14');
    define(73 /* F15 */, 'F15');
    define(74 /* F16 */, 'F16');
    define(75 /* F17 */, 'F17');
    define(76 /* F18 */, 'F18');
    define(77 /* F19 */, 'F19');
    define(78 /* NumLock */, 'NumLock');
    define(79 /* ScrollLock */, 'ScrollLock');
    define(80 /* US_SEMICOLON */, ';', ';', 'OEM_1');
    define(81 /* US_EQUAL */, '=', '=', 'OEM_PLUS');
    define(82 /* US_COMMA */, ',', ',', 'OEM_COMMA');
    define(83 /* US_MINUS */, '-', '-', 'OEM_MINUS');
    define(84 /* US_DOT */, '.', '.', 'OEM_PERIOD');
    define(85 /* US_SLASH */, '/', '/', 'OEM_2');
    define(86 /* US_BACKTICK */, '`', '`', 'OEM_3');
    define(110 /* ABNT_C1 */, 'ABNT_C1');
    define(111 /* ABNT_C2 */, 'ABNT_C2');
    define(87 /* US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
    define(88 /* US_BACKSLASH */, '\\', '\\', 'OEM_5');
    define(89 /* US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
    define(90 /* US_QUOTE */, '\'', '\'', 'OEM_7');
    define(91 /* OEM_8 */, 'OEM_8');
    define(92 /* OEM_102 */, 'OEM_102');
    define(93 /* NUMPAD_0 */, 'NumPad0');
    define(94 /* NUMPAD_1 */, 'NumPad1');
    define(95 /* NUMPAD_2 */, 'NumPad2');
    define(96 /* NUMPAD_3 */, 'NumPad3');
    define(97 /* NUMPAD_4 */, 'NumPad4');
    define(98 /* NUMPAD_5 */, 'NumPad5');
    define(99 /* NUMPAD_6 */, 'NumPad6');
    define(100 /* NUMPAD_7 */, 'NumPad7');
    define(101 /* NUMPAD_8 */, 'NumPad8');
    define(102 /* NUMPAD_9 */, 'NumPad9');
    define(103 /* NUMPAD_MULTIPLY */, 'NumPad_Multiply');
    define(104 /* NUMPAD_ADD */, 'NumPad_Add');
    define(105 /* NUMPAD_SEPARATOR */, 'NumPad_Separator');
    define(106 /* NUMPAD_SUBTRACT */, 'NumPad_Subtract');
    define(107 /* NUMPAD_DECIMAL */, 'NumPad_Decimal');
    define(108 /* NUMPAD_DIVIDE */, 'NumPad_Divide');
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
    function toString(keyCode) {
        return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toString = toString;
    function fromString(key) {
        return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromString = fromString;
    function toUserSettingsUS(keyCode) {
        return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
        return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
        return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils.fromUserSettings = fromUserSettings;
})(KeyCodeUtils || (KeyCodeUtils = {}));
function KeyChord(firstPart, secondPart) {
    var chordPart = ((secondPart & 0x0000ffff) << 16) >>> 0;
    return (firstPart | chordPart) >>> 0;
}
function createKeybinding(keybinding, OS) {
    if (keybinding === 0) {
        return null;
    }
    var firstPart = (keybinding & 0x0000ffff) >>> 0;
    var chordPart = (keybinding & 0xffff0000) >>> 16;
    if (chordPart !== 0) {
        return new ChordKeybinding(createSimpleKeybinding(firstPart, OS), createSimpleKeybinding(chordPart, OS));
    }
    return createSimpleKeybinding(firstPart, OS);
}
function createSimpleKeybinding(keybinding, OS) {
    var ctrlCmd = (keybinding & 2048 /* CtrlCmd */ ? true : false);
    var winCtrl = (keybinding & 256 /* WinCtrl */ ? true : false);
    var ctrlKey = (OS === 2 /* Macintosh */ ? winCtrl : ctrlCmd);
    var shiftKey = (keybinding & 1024 /* Shift */ ? true : false);
    var altKey = (keybinding & 512 /* Alt */ ? true : false);
    var metaKey = (OS === 2 /* Macintosh */ ? ctrlCmd : winCtrl);
    var keyCode = (keybinding & 255 /* KeyCode */);
    return new SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
var SimpleKeybinding = /** @class */ (function () {
    function SimpleKeybinding(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
        this.type = 1 /* Simple */;
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyCode = keyCode;
    }
    SimpleKeybinding.prototype.equals = function (other) {
        if (other.type !== 1 /* Simple */) {
            return false;
        }
        return (this.ctrlKey === other.ctrlKey
            && this.shiftKey === other.shiftKey
            && this.altKey === other.altKey
            && this.metaKey === other.metaKey
            && this.keyCode === other.keyCode);
    };
    SimpleKeybinding.prototype.isModifierKey = function () {
        return (this.keyCode === 0 /* Unknown */
            || this.keyCode === 5 /* Ctrl */
            || this.keyCode === 57 /* Meta */
            || this.keyCode === 6 /* Alt */
            || this.keyCode === 4 /* Shift */);
    };
    /**
     * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
     */
    SimpleKeybinding.prototype.isDuplicateModifierCase = function () {
        return ((this.ctrlKey && this.keyCode === 5 /* Ctrl */)
            || (this.shiftKey && this.keyCode === 4 /* Shift */)
            || (this.altKey && this.keyCode === 6 /* Alt */)
            || (this.metaKey && this.keyCode === 57 /* Meta */));
    };
    return SimpleKeybinding;
}());

var ChordKeybinding = /** @class */ (function () {
    function ChordKeybinding(firstPart, chordPart) {
        this.type = 2 /* Chord */;
        this.firstPart = firstPart;
        this.chordPart = chordPart;
    }
    return ChordKeybinding;
}());

var ResolvedKeybindingPart = /** @class */ (function () {
    function ResolvedKeybindingPart(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
        this.ctrlKey = ctrlKey;
        this.shiftKey = shiftKey;
        this.altKey = altKey;
        this.metaKey = metaKey;
        this.keyLabel = kbLabel;
        this.keyAriaLabel = kbAriaLabel;
    }
    return ResolvedKeybindingPart;
}());

/**
 * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
 */
var ResolvedKeybinding = /** @class */ (function () {
    function ResolvedKeybinding() {
    }
    return ResolvedKeybinding;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js ***!
  \********************************************************************/
/*! exports provided: isDisposable, dispose, combinedDisposable, toDisposable, Disposable, ImmortalReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispose", function() { return dispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinedDisposable", function() { return combinedDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDisposable", function() { return toDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disposable", function() { return Disposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmortalReference", function() { return ImmortalReference; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function isDisposable(thing) {
    return typeof thing.dispose === 'function'
        && thing.dispose.length === 0;
}
function dispose(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (Array.isArray(first)) {
        first.forEach(function (d) { return d && d.dispose(); });
        return [];
    }
    else if (rest.length === 0) {
        if (first) {
            first.dispose();
            return first;
        }
        return undefined;
    }
    else {
        dispose(first);
        dispose(rest);
        return [];
    }
}
function combinedDisposable(disposables) {
    return { dispose: function () { return dispose(disposables); } };
}
function toDisposable(fn) {
    return { dispose: function () { fn(); } };
}
var Disposable = /** @class */ (function () {
    function Disposable() {
        this._toDispose = [];
    }
    Object.defineProperty(Disposable.prototype, "toDispose", {
        get: function () { return this._toDispose; },
        enumerable: true,
        configurable: true
    });
    Disposable.prototype.dispose = function () {
        this._toDispose = dispose(this._toDispose);
    };
    Disposable.prototype._register = function (t) {
        this._toDispose.push(t);
        return t;
    };
    Disposable.None = Object.freeze({ dispose: function () { } });
    return Disposable;
}());

var ImmortalReference = /** @class */ (function () {
    function ImmortalReference(object) {
        this.object = object;
    }
    ImmortalReference.prototype.dispose = function () { };
    return ImmortalReference;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/linkedList.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/linkedList.js ***!
  \*********************************************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Node = /** @class */ (function () {
    function Node(element) {
        this.element = element;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.isEmpty = function () {
        return !this._first;
    };
    LinkedList.prototype.unshift = function (element) {
        return this.insert(element, false);
    };
    LinkedList.prototype.push = function (element) {
        return this.insert(element, true);
    };
    LinkedList.prototype.insert = function (element, atTheEnd) {
        var _this = this;
        var newNode = new Node(element);
        if (!this._first) {
            this._first = newNode;
            this._last = newNode;
        }
        else if (atTheEnd) {
            // push
            var oldLast = this._last;
            this._last = newNode;
            newNode.prev = oldLast;
            oldLast.next = newNode;
        }
        else {
            // unshift
            var oldFirst = this._first;
            this._first = newNode;
            newNode.next = oldFirst;
            oldFirst.prev = newNode;
        }
        return function () {
            for (var candidate = _this._first; candidate instanceof Node; candidate = candidate.next) {
                if (candidate !== newNode) {
                    continue;
                }
                if (candidate.prev && candidate.next) {
                    // middle
                    var anchor = candidate.prev;
                    anchor.next = candidate.next;
                    candidate.next.prev = anchor;
                }
                else if (!candidate.prev && !candidate.next) {
                    // only node
                    _this._first = undefined;
                    _this._last = undefined;
                }
                else if (!candidate.next) {
                    // last
                    _this._last = _this._last.prev;
                    _this._last.next = undefined;
                }
                else if (!candidate.prev) {
                    // first
                    _this._first = _this._first.next;
                    _this._first.prev = undefined;
                }
                // done
                break;
            }
        };
    };
    LinkedList.prototype.iterator = function () {
        var element = {
            done: undefined,
            value: undefined,
        };
        var node = this._first;
        return {
            next: function () {
                if (!node) {
                    element.done = true;
                    element.value = undefined;
                }
                else {
                    element.done = false;
                    element.value = node.element;
                    node = node.next;
                }
                return element;
            }
        };
    };
    return LinkedList;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/platform.js ***!
  \*******************************************************************/
/*! exports provided: LANGUAGE_DEFAULT, Platform, isWindows, isMacintosh, isLinux, isNative, isWeb, globals, setImmediate, OS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_DEFAULT", function() { return LANGUAGE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return isWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMacintosh", function() { return isMacintosh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinux", function() { return isLinux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNative", function() { return isNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeb", function() { return isWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isNative = false;
var _isWeb = false;
var _locale = undefined;
var _language = undefined;
var _translationsConfigFile = undefined;
var LANGUAGE_DEFAULT = 'en';
// OS detection
if (typeof process === 'object' && typeof process.nextTick === 'function' && typeof process.platform === 'string') {
    _isWindows = (process.platform === 'win32');
    _isMacintosh = (process.platform === 'darwin');
    _isLinux = (process.platform === 'linux');
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
    if (rawNlsConfig) {
        try {
            var nlsConfig = JSON.parse(rawNlsConfig);
            var resolved = nlsConfig.availableLanguages['*'];
            _locale = nlsConfig.locale;
            // VSCode's default language is 'en'
            _language = resolved ? resolved : LANGUAGE_DEFAULT;
            _translationsConfigFile = nlsConfig._translationsConfigFile;
        }
        catch (e) {
        }
    }
    _isNative = true;
}
else if (typeof navigator === 'object') {
    var userAgent = navigator.userAgent;
    _isWindows = userAgent.indexOf('Windows') >= 0;
    _isMacintosh = userAgent.indexOf('Macintosh') >= 0;
    _isLinux = userAgent.indexOf('Linux') >= 0;
    _isWeb = true;
    _locale = navigator.language;
    _language = _locale;
}
var Platform;
(function (Platform) {
    Platform[Platform["Web"] = 0] = "Web";
    Platform[Platform["Mac"] = 1] = "Mac";
    Platform[Platform["Linux"] = 2] = "Linux";
    Platform[Platform["Windows"] = 3] = "Windows";
})(Platform || (Platform = {}));
var _platform = Platform.Web;
if (_isNative) {
    if (_isMacintosh) {
        _platform = Platform.Mac;
    }
    else if (_isWindows) {
        _platform = Platform.Windows;
    }
    else if (_isLinux) {
        _platform = Platform.Linux;
    }
}
var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var _globals = (typeof self === 'object' ? self : typeof global === 'object' ? global : {});
var globals = _globals;
var _setImmediate = null;
function setImmediate(callback) {
    if (_setImmediate === null) {
        if (globals.setImmediate) {
            _setImmediate = globals.setImmediate.bind(globals);
        }
        else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
            _setImmediate = process.nextTick.bind(process);
        }
        else {
            _setImmediate = globals.setTimeout.bind(globals);
        }
    }
    return _setImmediate(callback);
}
var OS = (_isMacintosh ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/strings.js":
/*!******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/strings.js ***!
  \******************************************************************/
/*! exports provided: empty, isFalsyOrWhitespace, pad, format, escape, escapeRegExpCharacters, trim, ltrim, rtrim, convertSimple2RegExpPattern, startsWith, endsWith, createRegExp, regExpLeadsToEndlessLoop, firstNonWhitespaceIndex, getLeadingWhitespace, lastNonWhitespaceIndex, compare, compareIgnoreCase, isLowerAsciiLetter, isUpperAsciiLetter, equalsIgnoreCase, startsWithIgnoreCase, commonPrefixLength, commonSuffixLength, isHighSurrogate, isLowSurrogate, containsRTL, containsEmoji, isBasicASCII, containsFullWidthCharacter, isFullWidthCharacter, UTF8_BOM_CHARACTER, startsWithUTF8BOM, safeBtoa, repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsyOrWhitespace", function() { return isFalsyOrWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExpCharacters", function() { return escapeRegExpCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSimple2RegExpPattern", function() { return convertSimple2RegExpPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegExp", function() { return createRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpLeadsToEndlessLoop", function() { return regExpLeadsToEndlessLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNonWhitespaceIndex", function() { return firstNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeadingWhitespace", function() { return getLeadingWhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNonWhitespaceIndex", function() { return lastNonWhitespaceIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareIgnoreCase", function() { return compareIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowerAsciiLetter", function() { return isLowerAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpperAsciiLetter", function() { return isUpperAsciiLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsIgnoreCase", function() { return equalsIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithIgnoreCase", function() { return startsWithIgnoreCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPrefixLength", function() { return commonPrefixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonSuffixLength", function() { return commonSuffixLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHighSurrogate", function() { return isHighSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLowSurrogate", function() { return isLowSurrogate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsRTL", function() { return containsRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsEmoji", function() { return containsEmoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBasicASCII", function() { return isBasicASCII; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsFullWidthCharacter", function() { return containsFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullWidthCharacter", function() { return isFullWidthCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UTF8_BOM_CHARACTER", function() { return UTF8_BOM_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithUTF8BOM", function() { return startsWithUTF8BOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeBtoa", function() { return safeBtoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * The empty string.
 */
var empty = '';
function isFalsyOrWhitespace(str) {
    if (!str || typeof str !== 'string') {
        return true;
    }
    return str.trim().length === 0;
}
/**
 * @returns the provided number with the given number of preceding zeros.
 */
function pad(n, l, char) {
    if (char === void 0) { char = '0'; }
    var str = '' + n;
    var r = [str];
    for (var i = str.length; i < l; i++) {
        r.push(char);
    }
    return r.reverse().join('');
}
var _formatRegexp = /{(\d+)}/g;
/**
 * Helper to produce a string with a variable number of arguments. Insert variable segments
 * into the string using the {n} notation where N is the index of the argument following the string.
 * @param value string to which formatting is applied
 * @param args replacements for {n}-entries
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0) {
        return value;
    }
    return value.replace(_formatRegexp, function (match, group) {
        var idx = parseInt(group, 10);
        return isNaN(idx) || idx < 0 || idx >= args.length ?
            match :
            args[idx];
    });
}
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */
function escape(html) {
    return html.replace(/[<|>|&]/g, function (match) {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */
function trim(haystack, needle) {
    if (needle === void 0) { needle = ' '; }
    var trimmed = ltrim(haystack, needle);
    return rtrim(trimmed, needle);
}
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function ltrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length;
    if (needleLen === 0 || haystack.length === 0) {
        return haystack;
    }
    var offset = 0, idx = -1;
    while ((idx = haystack.indexOf(needle, offset)) === offset) {
        offset = offset + needleLen;
    }
    return haystack.substring(offset);
}
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function rtrim(haystack, needle) {
    if (!haystack || !needle) {
        return haystack;
    }
    var needleLen = needle.length, haystackLen = haystack.length;
    if (needleLen === 0 || haystackLen === 0) {
        return haystack;
    }
    var offset = haystackLen, idx = -1;
    while (true) {
        idx = haystack.lastIndexOf(needle, offset - 1);
        if (idx === -1 || idx + needleLen !== offset) {
            break;
        }
        if (idx === 0) {
            return '';
        }
        offset = idx;
    }
    return haystack.substring(0, offset);
}
function convertSimple2RegExpPattern(pattern) {
    return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
}
/**
 * Determines if haystack starts with needle.
 */
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    if (haystack === needle) {
        return true;
    }
    for (var i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.indexOf(needle, diff) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
function createRegExp(searchString, isRegex, options) {
    if (options === void 0) { options = {}; }
    if (!searchString) {
        throw new Error('Cannot create regex from empty string');
    }
    if (!isRegex) {
        searchString = escapeRegExpCharacters(searchString);
    }
    if (options.wholeWord) {
        if (!/\B/.test(searchString.charAt(0))) {
            searchString = '\\b' + searchString;
        }
        if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
            searchString = searchString + '\\b';
        }
    }
    var modifiers = '';
    if (options.global) {
        modifiers += 'g';
    }
    if (!options.matchCase) {
        modifiers += 'i';
    }
    if (options.multiline) {
        modifiers += 'm';
    }
    return new RegExp(searchString, modifiers);
}
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    var match = regexp.exec('');
    return (match && regexp.lastIndex === 0);
}
/**
 * Returns first index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function firstNonWhitespaceIndex(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
/**
 * Returns the leading whitespace of the string.
 * If the string contains only whitespaces, returns entire string
 */
function getLeadingWhitespace(str, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = str.length; }
    for (var i = start; i < end; i++) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return str.substring(start, i);
        }
    }
    return str.substring(start, end);
}
/**
 * Returns last index of the string that is not whitespace.
 * If string is empty or contains only whitespaces, returns -1
 */
function lastNonWhitespaceIndex(str, startIndex) {
    if (startIndex === void 0) { startIndex = str.length - 1; }
    for (var i = startIndex; i >= 0; i--) {
        var chCode = str.charCodeAt(i);
        if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
            return i;
        }
    }
    return -1;
}
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
function compareIgnoreCase(a, b) {
    var len = Math.min(a.length, b.length);
    for (var i = 0; i < len; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            // equal
            continue;
        }
        if (isUpperAsciiLetter(codeA)) {
            codeA += 32;
        }
        if (isUpperAsciiLetter(codeB)) {
            codeB += 32;
        }
        var diff = codeA - codeB;
        if (diff === 0) {
            // equal -> ignoreCase
            continue;
        }
        else if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
            //
            return diff;
        }
        else {
            return compare(a.toLowerCase(), b.toLowerCase());
        }
    }
    if (a.length < b.length) {
        return -1;
    }
    else if (a.length > b.length) {
        return 1;
    }
    else {
        return 0;
    }
}
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    var len1 = a ? a.length : 0;
    var len2 = b ? b.length : 0;
    if (len1 !== len2) {
        return false;
    }
    return doEqualsIgnoreCase(a, b);
}
function doEqualsIgnoreCase(a, b, stopAt) {
    if (stopAt === void 0) { stopAt = a.length; }
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    for (var i = 0; i < stopAt; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            var diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        else {
            if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
function startsWithIgnoreCase(str, candidate) {
    var candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
/**
 * @returns the length of the common prefix of the two strings.
 */
function commonPrefixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
/**
 * @returns the length of the common suffix of the two strings.
 */
function commonSuffixLength(a, b) {
    var i, len = Math.min(a.length, b.length);
    var aLastIndex = a.length - 1;
    var bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
            return i;
        }
    }
    return len;
}
// --- unicode
// http://en.wikipedia.org/wiki/Surrogate_pair
// Returns the code point starting at a specified index in a string
// Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
// Code points U+10000 to U+10FFFF are represented on two consecutive characters
//export function getUnicodePoint(str:string, index:number, len:number):number {
//	let chrCode = str.charCodeAt(index);
//	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
//		let nextChrCode = str.charCodeAt(index + 1);
//		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
//			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
//		}
//	}
//	return chrCode;
//}
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
 */
var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
/**
 * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
 */
function containsRTL(str) {
    return CONTAINS_RTL.test(str);
}
/**
 * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-emoji-test.js
 */
var CONTAINS_EMOJI = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
function containsEmoji(str) {
    return CONTAINS_EMOJI.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
/**
 * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
 */
function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
}
function containsFullWidthCharacter(str) {
    for (var i = 0, len = str.length; i < len; i++) {
        if (isFullWidthCharacter(str.charCodeAt(i))) {
            return true;
        }
    }
    return false;
}
function isFullWidthCharacter(charCode) {
    // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
    // http://jrgraphix.net/research/unicode_blocks.php
    //          2E80 — 2EFF   CJK Radicals Supplement
    //          2F00 — 2FDF   Kangxi Radicals
    //          2FF0 — 2FFF   Ideographic Description Characters
    //          3000 — 303F   CJK Symbols and Punctuation
    //          3040 — 309F   Hiragana
    //          30A0 — 30FF   Katakana
    //          3100 — 312F   Bopomofo
    //          3130 — 318F   Hangul Compatibility Jamo
    //          3190 — 319F   Kanbun
    //          31A0 — 31BF   Bopomofo Extended
    //          31F0 — 31FF   Katakana Phonetic Extensions
    //          3200 — 32FF   Enclosed CJK Letters and Months
    //          3300 — 33FF   CJK Compatibility
    //          3400 — 4DBF   CJK Unified Ideographs Extension A
    //          4DC0 — 4DFF   Yijing Hexagram Symbols
    //          4E00 — 9FFF   CJK Unified Ideographs
    //          A000 — A48F   Yi Syllables
    //          A490 — A4CF   Yi Radicals
    //          AC00 — D7AF   Hangul Syllables
    // [IGNORE] D800 — DB7F   High Surrogates
    // [IGNORE] DB80 — DBFF   High Private Use Surrogates
    // [IGNORE] DC00 — DFFF   Low Surrogates
    // [IGNORE] E000 — F8FF   Private Use Area
    //          F900 — FAFF   CJK Compatibility Ideographs
    // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
    // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
    // [IGNORE] FE00 — FE0F   Variation Selectors
    // [IGNORE] FE20 — FE2F   Combining Half Marks
    // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
    // [IGNORE] FE50 — FE6F   Small Form Variants
    // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
    //          FF00 — FFEF   Halfwidth and Fullwidth Forms
    //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
    //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
    // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
    // [IGNORE] FFF0 — FFFF   Specials
    charCode = +charCode; // @perf
    return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
        || (charCode >= 0xF900 && charCode <= 0xFAFF)
        || (charCode >= 0xFF01 && charCode <= 0xFF5E));
}
// -- UTF-8 BOM
var UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
function startsWithUTF8BOM(str) {
    return (str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
}
function safeBtoa(str) {
    return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/uri.js":
/*!**************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/uri.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;

var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
function _validateUri(ret) {
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
var _empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component paths
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 *
 *
 */
var URI = /** @class */ (function () {
    /**
     * @internal
     */
    function URI(schemeOrData, authority, path, query, fragment) {
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        }
        else {
            this.scheme = schemeOrData || _empty;
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this);
        }
    }
    URI.isUri = function (thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string';
    };
    Object.defineProperty(URI.prototype, "fsPath", {
        // ---- filesystem path -----------------------
        /**
         * Returns a string representing the corresponding file system path of this URI.
         * Will handle UNC paths and normalize windows drive letters to lower-case. Also
         * uses the platform specific path separator. Will *not* validate the path for
         * invalid characters and semantics. Will *not* look at the scheme of this URI.
         */
        get: function () {
            return _makeFsPath(this);
        },
        enumerable: true,
        configurable: true
    });
    // ---- modify to new -------------------------
    URI.prototype.with = function (change) {
        if (!change) {
            return this;
        }
        var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
        if (scheme === void 0) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === void 0) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === void 0) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === void 0) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === void 0) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return new _URI(scheme, authority, path, query, fragment);
    };
    // ---- parse & validate ------------------------
    URI.parse = function (value) {
        var match = _regexp.exec(value);
        if (!match) {
            return new _URI(_empty, _empty, _empty, _empty, _empty);
        }
        return new _URI(match[2] || _empty, decodeURIComponent(match[4] || _empty), decodeURIComponent(match[5] || _empty), decodeURIComponent(match[7] || _empty), decodeURIComponent(match[9] || _empty));
    };
    URI.file = function (path) {
        var authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            var idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new _URI('file', authority, path, _empty, _empty);
    };
    URI.from = function (components) {
        return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
    };
    // ---- printing/externalize ---------------------------
    /**
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        return _asFormatted(this, skipEncoding);
    };
    URI.prototype.toJSON = function () {
        return this;
    };
    URI.revive = function (data) {
        if (!data) {
            return data;
        }
        else if (data instanceof URI) {
            return data;
        }
        else {
            var result = new _URI(data);
            result._fsPath = data.fsPath;
            result._formatted = data.external;
            return result;
        }
    };
    return URI;
}());
/* harmony default export */ __webpack_exports__["default"] = (URI);
// tslint:disable-next-line:class-name
var _URI = /** @class */ (function (_super) {
    __extends(_URI, _super);
    function _URI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatted = null;
        _this._fsPath = null;
        return _this;
    }
    Object.defineProperty(_URI.prototype, "fsPath", {
        get: function () {
            if (!this._fsPath) {
                this._fsPath = _makeFsPath(this);
            }
            return this._fsPath;
        },
        enumerable: true,
        configurable: true
    });
    _URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            // we don't cache that
            return _asFormatted(this, true);
        }
    };
    _URI.prototype.toJSON = function () {
        var res = {
            $mid: 1
        };
        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    };
    return _URI;
}(URI));
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
var encodeTable = (_a = {},
    _a[58 /* Colon */] = '%3A',
    _a[47 /* Slash */] = '%2F',
    _a[63 /* QuestionMark */] = '%3F',
    _a[35 /* Hash */] = '%23',
    _a[91 /* OpenSquareBracket */] = '%5B',
    _a[93 /* CloseSquareBracket */] = '%5D',
    _a[64 /* AtSign */] = '%40',
    _a[33 /* ExclamationMark */] = '%21',
    _a[36 /* DollarSign */] = '%24',
    _a[38 /* Ampersand */] = '%26',
    _a[39 /* SingleQuote */] = '%27',
    _a[40 /* OpenParen */] = '%28',
    _a[41 /* CloseParen */] = '%29',
    _a[42 /* Asterisk */] = '%2A',
    _a[43 /* Plus */] = '%2B',
    _a[44 /* Comma */] = '%2C',
    _a[59 /* Semicolon */] = '%3B',
    _a[61 /* Equals */] = '%3D',
    _a[32 /* Space */] = '%20',
    _a);
function encodeURIComponentFast(uriComponent, allowSlash) {
    var res = undefined;
    var nativeEncodePos = -1;
    for (var pos = 0; pos < uriComponent.length; pos++) {
        var code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if ((code >= 97 /* a */ && code <= 122 /* z */)
            || (code >= 65 /* A */ && code <= 90 /* Z */)
            || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
            || code === 45 /* Dash */
            || code === 46 /* Period */
            || code === 95 /* Underline */
            || code === 126 /* Tilde */
            || (allowSlash && code === 47 /* Slash */)) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            var escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    var res = undefined;
    for (var pos = 0; pos < path.length; pos++) {
        var code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 * @param uri
 */
function _makeFsPath(uri) {
    var value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = "//" + uri.authority + uri.path;
    }
    else if (uri.path.charCodeAt(0) === 47 /* Slash */
        && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
        && uri.path.charCodeAt(2) === 58 /* Colon */) {
        // windows drive letter: file:///c:/far/boo
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
    }
    else {
        // other path
        value = uri.path;
    }
    if (_platform_js__WEBPACK_IMPORTED_MODULE_0__["isWindows"]) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
/**
 * Create the external version of a uri
 */
function _asFormatted(uri, skipEncoding) {
    var encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    var res = '';
    var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        var idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            var userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            }
            else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        }
        else {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
            var code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
            var code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
            }
        }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js ***!
  \*********************************************************************/
/*! exports provided: Promise, TPromise, PPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return Promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPromise", function() { return TPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPromise", function() { return PPromise; });
/**
 * Extracted from https://github.com/winjs/winjs
 * Version: 4.4.0(ec3258a9f3a36805a187848984e3bb938044178d)
 * Copyright (c) Microsoft Corporation.
 * All Rights Reserved.
 * Licensed under the MIT License.
 */
var __winjs_exports;

(function() {

var _modules = Object.create(null);//{};
_modules["WinJS/Core/_WinJS"] = {};

var _winjs = function(moduleId, deps, factory) {
    var exports = {};
    var exportsPassedIn = false;

    var depsValues = deps.map(function(dep) {
        if (dep === 'exports') {
            exportsPassedIn = true;
            return exports;
        }
        return _modules[dep];
    });

    var result = factory.apply({}, depsValues);

    _modules[moduleId] = exportsPassedIn ? exports : result;
};


_winjs("WinJS/Core/_Global", [], function () {
    "use strict";

    // Appease jshint
    /* global window, self, global */

    var globalObject =
        typeof window !== 'undefined' ? window :
        typeof self !== 'undefined' ? self :
        typeof global !== 'undefined' ? global :
        {};
    return globalObject;
});

_winjs("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function baseCoreUtilsInit(_Global) {
    "use strict";

    var hasWinRT = !!_Global.Windows;

    function markSupportedForProcessing(func) {
        /// <signature helpKeyword="WinJS.Utilities.markSupportedForProcessing">
        /// <summary locid="WinJS.Utilities.markSupportedForProcessing">
        /// Marks a function as being compatible with declarative processing, such as WinJS.UI.processAll
        /// or WinJS.Binding.processAll.
        /// </summary>
        /// <param name="func" type="Function" locid="WinJS.Utilities.markSupportedForProcessing_p:func">
        /// The function to be marked as compatible with declarative processing.
        /// </param>
        /// <returns type="Function" locid="WinJS.Utilities.markSupportedForProcessing_returnValue">
        /// The input function.
        /// </returns>
        /// </signature>
        func.supportedForProcessing = true;
        return func;
    }

    var actualSetImmediate = null;

    return {
        hasWinRT: hasWinRT,
        markSupportedForProcessing: markSupportedForProcessing,
        _setImmediate: function (callback) {
            // BEGIN monaco change
            if (actualSetImmediate === null) {
                if (_Global.setImmediate) {
                    actualSetImmediate = _Global.setImmediate.bind(_Global);
                } else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
                    actualSetImmediate = process.nextTick.bind(process);
                } else {
                    actualSetImmediate = _Global.setTimeout.bind(_Global);
                }
            }
            actualSetImmediate(callback);
            // END monaco change
        }
    };
});
_winjs("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function profilerInit(_Global) {
    "use strict";

    return _Global.msWriteProfilerMark || function () { };
});
_winjs("WinJS/Core/_Base", ["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"], function baseInit(_WinJS, _Global, _BaseCoreUtils, _WriteProfilerMark) {
    "use strict";

    function initializeProperties(target, members, prefix) {
        var keys = Object.keys(members);
        var isArray = Array.isArray(target);
        var properties;
        var i, len;
        for (i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var enumerable = key.charCodeAt(0) !== /*_*/95;
            var member = members[key];
            if (member && typeof member === 'object') {
                if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
                    if (member.enumerable === undefined) {
                        member.enumerable = enumerable;
                    }
                    if (prefix && member.setName && typeof member.setName === 'function') {
                        member.setName(prefix + "." + key);
                    }
                    properties = properties || {};
                    properties[key] = member;
                    continue;
                }
            }
            if (!enumerable) {
                properties = properties || {};
                properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true };
                continue;
            }
            if (isArray) {
                target.forEach(function (target) {
                    target[key] = member;
                });
            } else {
                target[key] = member;
            }
        }
        if (properties) {
            if (isArray) {
                target.forEach(function (target) {
                    Object.defineProperties(target, properties);
                });
            } else {
                Object.defineProperties(target, properties);
            }
        }
    }

    (function () {

        var _rootNamespace = _WinJS;
        if (!_rootNamespace.Namespace) {
            _rootNamespace.Namespace = Object.create(Object.prototype);
        }

        function createNamespace(parentNamespace, name) {
            var currentNamespace = parentNamespace || {};
            if (name) {
                var namespaceFragments = name.split(".");
                if (currentNamespace === _Global && namespaceFragments[0] === "WinJS") {
                    currentNamespace = _WinJS;
                    namespaceFragments.splice(0, 1);
                }
                for (var i = 0, len = namespaceFragments.length; i < len; i++) {
                    var namespaceName = namespaceFragments[i];
                    if (!currentNamespace[namespaceName]) {
                        Object.defineProperty(currentNamespace, namespaceName,
                            { value: {}, writable: false, enumerable: true, configurable: true }
                        );
                    }
                    currentNamespace = currentNamespace[namespaceName];
                }
            }
            return currentNamespace;
        }

        function defineWithParent(parentNamespace, name, members) {
            /// <signature helpKeyword="WinJS.Namespace.defineWithParent">
            /// <summary locid="WinJS.Namespace.defineWithParent">
            /// Defines a new namespace with the specified name under the specified parent namespace.
            /// </summary>
            /// <param name="parentNamespace" type="Object" locid="WinJS.Namespace.defineWithParent_p:parentNamespace">
            /// The parent namespace.
            /// </param>
            /// <param name="name" type="String" locid="WinJS.Namespace.defineWithParent_p:name">
            /// The name of the new namespace.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.defineWithParent_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.defineWithParent_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            var currentNamespace = createNamespace(parentNamespace, name);

            if (members) {
                initializeProperties(currentNamespace, members, name || "<ANONYMOUS>");
            }

            return currentNamespace;
        }

        function define(name, members) {
            /// <signature helpKeyword="WinJS.Namespace.define">
            /// <summary locid="WinJS.Namespace.define">
            /// Defines a new namespace with the specified name.
            /// </summary>
            /// <param name="name" type="String" locid="WinJS.Namespace.define_p:name">
            /// The name of the namespace. This could be a dot-separated name for nested namespaces.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.define_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.define_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            return defineWithParent(_Global, name, members);
        }

        var LazyStates = {
            uninitialized: 1,
            working: 2,
            initialized: 3,
        };

        function lazy(f) {
            var name;
            var state = LazyStates.uninitialized;
            var result;
            return {
                setName: function (value) {
                    name = value;
                },
                get: function () {
                    switch (state) {
                        case LazyStates.initialized:
                            return result;

                        case LazyStates.uninitialized:
                            state = LazyStates.working;
                            try {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StartTM");
                                result = f();
                            } finally {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StopTM");
                                state = LazyStates.uninitialized;
                            }
                            f = null;
                            state = LazyStates.initialized;
                            return result;

                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            throw "Illegal";
                    }
                },
                set: function (value) {
                    switch (state) {
                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            state = LazyStates.initialized;
                            result = value;
                            break;
                    }
                },
                enumerable: true,
                configurable: true,
            };
        }

        // helper for defining AMD module members
        function moduleDefine(exports, name, members) {
            var target = [exports];
            var publicNS = null;
            if (name) {
                publicNS = createNamespace(_Global, name);
                target.push(publicNS);
            }
            initializeProperties(target, members, name || "<ANONYMOUS>");
            return publicNS;
        }

        // Establish members of the "WinJS.Namespace" namespace
        Object.defineProperties(_rootNamespace.Namespace, {

            defineWithParent: { value: defineWithParent, writable: true, enumerable: true, configurable: true },

            define: { value: define, writable: true, enumerable: true, configurable: true },

            _lazy: { value: lazy, writable: true, enumerable: true, configurable: true },

            _moduleDefine: { value: moduleDefine, writable: true, enumerable: true, configurable: true }

        });

    })();

    (function () {

        function define(constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.define">
            /// <summary locid="WinJS.Class.define">
            /// Defines a class using the given constructor and the specified instance members.
            /// </summary>
            /// <param name="constructor" type="Function" locid="WinJS.Class.define_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.define_p:instanceMembers">
            /// The set of instance fields, properties, and methods made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.define_p:staticMembers">
            /// The set of static fields, properties, and methods made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.define_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            _BaseCoreUtils.markSupportedForProcessing(constructor);
            if (instanceMembers) {
                initializeProperties(constructor.prototype, instanceMembers);
            }
            if (staticMembers) {
                initializeProperties(constructor, staticMembers);
            }
            return constructor;
        }

        function derive(baseClass, constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.derive">
            /// <summary locid="WinJS.Class.derive">
            /// Creates a sub-class based on the supplied baseClass parameter, using prototypal inheritance.
            /// </summary>
            /// <param name="baseClass" type="Function" locid="WinJS.Class.derive_p:baseClass">
            /// The class to inherit from.
            /// </param>
            /// <param name="constructor" type="Function" locid="WinJS.Class.derive_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.derive_p:instanceMembers">
            /// The set of instance fields, properties, and methods to be made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.derive_p:staticMembers">
            /// The set of static fields, properties, and methods to be made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.derive_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            if (baseClass) {
                constructor = constructor || function () { };
                var basePrototype = baseClass.prototype;
                constructor.prototype = Object.create(basePrototype);
                _BaseCoreUtils.markSupportedForProcessing(constructor);
                Object.defineProperty(constructor.prototype, "constructor", { value: constructor, writable: true, configurable: true, enumerable: true });
                if (instanceMembers) {
                    initializeProperties(constructor.prototype, instanceMembers);
                }
                if (staticMembers) {
                    initializeProperties(constructor, staticMembers);
                }
                return constructor;
            } else {
                return define(constructor, instanceMembers, staticMembers);
            }
        }

        function mix(constructor) {
            /// <signature helpKeyword="WinJS.Class.mix">
            /// <summary locid="WinJS.Class.mix">
            /// Defines a class using the given constructor and the union of the set of instance members
            /// specified by all the mixin objects. The mixin parameter list is of variable length.
            /// </summary>
            /// <param name="constructor" locid="WinJS.Class.mix_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.mix_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            var i, len;
            for (i = 1, len = arguments.length; i < len; i++) {
                initializeProperties(constructor.prototype, arguments[i]);
            }
            return constructor;
        }

        // Establish members of "WinJS.Class" namespace
        _WinJS.Namespace.define("WinJS.Class", {
            define: define,
            derive: derive,
            mix: mix
        });

    })();

    return {
        Namespace: _WinJS.Namespace,
        Class: _WinJS.Class
    };

});
_winjs("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function errorsInit(_Base) {
    "use strict";

    var ErrorFromName = _Base.Class.derive(Error, function (name, message) {
        /// <signature helpKeyword="WinJS.ErrorFromName">
        /// <summary locid="WinJS.ErrorFromName">
        /// Creates an Error object with the specified name and message properties.
        /// </summary>
        /// <param name="name" type="String" locid="WinJS.ErrorFromName_p:name">The name of this error. The name is meant to be consumed programmatically and should not be localized.</param>
        /// <param name="message" type="String" optional="true" locid="WinJS.ErrorFromName_p:message">The message for this error. The message is meant to be consumed by humans and should be localized.</param>
        /// <returns type="Error" locid="WinJS.ErrorFromName_returnValue">Error instance with .name and .message properties populated</returns>
        /// </signature>
        this.name = name;
        this.message = message || name;
    }, {
        /* empty */
    }, {
        supportedForProcessing: false,
    });

    _Base.Namespace.define("WinJS", {
        // ErrorFromName establishes a simple pattern for returning error codes.
        //
        ErrorFromName: ErrorFromName
    });

    return ErrorFromName;

});


_winjs("WinJS/Core/_Events", ["exports","WinJS/Core/_Base"], function eventsInit(exports, _Base) {
    "use strict";


    function createEventProperty(name) {
        var eventPropStateName = "_on" + name + "state";

        return {
            get: function () {
                var state = this[eventPropStateName];
                return state && state.userHandler;
            },
            set: function (handler) {
                var state = this[eventPropStateName];
                if (handler) {
                    if (!state) {
                        state = { wrapper: function (evt) { return state.userHandler(evt); }, userHandler: handler };
                        Object.defineProperty(this, eventPropStateName, { value: state, enumerable: false, writable:true, configurable: true });
                        this.addEventListener(name, state.wrapper, false);
                    }
                    state.userHandler = handler;
                } else if (state) {
                    this.removeEventListener(name, state.wrapper, false);
                    this[eventPropStateName] = null;
                }
            },
            enumerable: true
        };
    }

    function createEventProperties() {
        /// <signature helpKeyword="WinJS.Utilities.createEventProperties">
        /// <summary locid="WinJS.Utilities.createEventProperties">
        /// Creates an object that has one property for each name passed to the function.
        /// </summary>
        /// <param name="events" locid="WinJS.Utilities.createEventProperties_p:events">
        /// A variable list of property names.
        /// </param>
        /// <returns type="Object" locid="WinJS.Utilities.createEventProperties_returnValue">
        /// The object with the specified properties. The names of the properties are prefixed with 'on'.
        /// </returns>
        /// </signature>
        var props = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var name = arguments[i];
            props["on" + name] = createEventProperty(name);
        }
        return props;
    }

    var EventMixinEvent = _Base.Class.define(
        function EventMixinEvent_ctor(type, detail, target) {
            this.detail = detail;
            this.target = target;
            this.timeStamp = Date.now();
            this.type = type;
        },
        {
            bubbles: { value: false, writable: false },
            cancelable: { value: false, writable: false },
            currentTarget: {
                get: function () { return this.target; }
            },
            defaultPrevented: {
                get: function () { return this._preventDefaultCalled; }
            },
            trusted: { value: false, writable: false },
            eventPhase: { value: 0, writable: false },
            target: null,
            timeStamp: null,
            type: null,

            preventDefault: function () {
                this._preventDefaultCalled = true;
            },
            stopImmediatePropagation: function () {
                this._stopImmediatePropagationCalled = true;
            },
            stopPropagation: function () {
            }
        }, {
            supportedForProcessing: false,
        }
    );

    var eventMixin = {
        _listeners: null,

        addEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.addEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.addEventListener">
            /// Adds an event listener to the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.addEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.addEventListener_p:listener">
            /// The listener to invoke when the event is raised.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.addEventListener_p:useCapture">
            /// if true initiates capture, otherwise false.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            this._listeners = this._listeners || {};
            var eventListeners = (this._listeners[type] = this._listeners[type] || []);
            for (var i = 0, len = eventListeners.length; i < len; i++) {
                var l = eventListeners[i];
                if (l.useCapture === useCapture && l.listener === listener) {
                    return;
                }
            }
            eventListeners.push({ listener: listener, useCapture: useCapture });
        },
        dispatchEvent: function (type, details) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.dispatchEvent">
            /// <summary locid="WinJS.Utilities.eventMixin.dispatchEvent">
            /// Raises an event of the specified type and with the specified additional properties.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="details" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:details">
            /// The set of additional properties to be attached to the event object when the event is raised.
            /// </param>
            /// <returns type="Boolean" locid="WinJS.Utilities.eventMixin.dispatchEvent_returnValue">
            /// true if preventDefault was called on the event.
            /// </returns>
            /// </signature>
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                var eventValue = new EventMixinEvent(type, details, this);
                // Need to copy the array to protect against people unregistering while we are dispatching
                listeners = listeners.slice(0, listeners.length);
                for (var i = 0, len = listeners.length; i < len && !eventValue._stopImmediatePropagationCalled; i++) {
                    listeners[i].listener(eventValue);
                }
                return eventValue.defaultPrevented || false;
            }
            return false;
        },
        removeEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.removeEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.removeEventListener">
            /// Removes an event listener from the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.removeEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.removeEventListener_p:listener">
            /// The listener to remove.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.removeEventListener_p:useCapture">
            /// Specifies whether to initiate capture.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.listener === listener && l.useCapture === useCapture) {
                        listeners.splice(i, 1);
                        if (listeners.length === 0) {
                            delete this._listeners[type];
                        }
                        // Only want to remove one element for each call to removeEventListener
                        break;
                    }
                }
            }
        }
    };

    _Base.Namespace._moduleDefine(exports, "WinJS.Utilities", {
        _createEventProperty: createEventProperty,
        createEventProperties: createEventProperties,
        eventMixin: eventMixin
    });

});


_winjs("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function traceInit(_Global) {
    "use strict";

    function nop(v) {
        return v;
    }

    return {
        _traceAsyncOperationStarting: (_Global.Debug && _Global.Debug.msTraceAsyncOperationStarting && _Global.Debug.msTraceAsyncOperationStarting.bind(_Global.Debug)) || nop,
        _traceAsyncOperationCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncOperationCompleted && _Global.Debug.msTraceAsyncOperationCompleted.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackStarting: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackStarting && _Global.Debug.msTraceAsyncCallbackStarting.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackCompleted && _Global.Debug.msTraceAsyncCallbackCompleted.bind(_Global.Debug)) || nop
    };
});
_winjs("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"], function promiseStateMachineInit(_Global, _BaseCoreUtils, _Base, _ErrorFromName, _Events, _Trace) {
    "use strict";

    _Global.Debug && (_Global.Debug.setNonUserCodeExceptions = true);

    var ListenerType = _Base.Class.mix(_Base.Class.define(null, { /*empty*/ }, { supportedForProcessing: false }), _Events.eventMixin);
    var promiseEventListeners = new ListenerType();
    // make sure there is a listeners collection so that we can do a more trivial check below
    promiseEventListeners._listeners = {};
    var errorET = "error";
    var canceledName = "Canceled";
    var tagWithStack = false;
    var tag = {
        promise: 0x01,
        thenPromise: 0x02,
        errorPromise: 0x04,
        exceptionPromise: 0x08,
        completePromise: 0x10,
    };
    tag.all = tag.promise | tag.thenPromise | tag.errorPromise | tag.exceptionPromise | tag.completePromise;

    //
    // Global error counter, for each error which enters the system we increment this once and then
    // the error number travels with the error as it traverses the tree of potential handlers.
    //
    // When someone has registered to be told about errors (WinJS.Promise.callonerror) promises
    // which are in error will get tagged with a ._errorId field. This tagged field is the
    // contract by which nested promises with errors will be identified as chaining for the
    // purposes of the callonerror semantics. If a nested promise in error is encountered without
    // a ._errorId it will be assumed to be foreign and treated as an interop boundary and
    // a new error id will be minted.
    //
    var error_number = 1;

    //
    // The state machine has a interesting hiccup in it with regards to notification, in order
    // to flatten out notification and avoid recursion for synchronous completion we have an
    // explicit set of *_notify states which are responsible for notifying their entire tree
    // of children. They can do this because they know that immediate children are always
    // ThenPromise instances and we can therefore reach into their state to access the
    // _listeners collection.
    //
    // So, what happens is that a Promise will be fulfilled through the _completed or _error
    // messages at which point it will enter a *_notify state and be responsible for to move
    // its children into an (as appropriate) success or error state and also notify that child's
    // listeners of the state transition, until leaf notes are reached.
    //

    var state_created,              // -> working
        state_working,              // -> error | error_notify | success | success_notify | canceled | waiting
        state_waiting,              // -> error | error_notify | success | success_notify | waiting_canceled
        state_waiting_canceled,     // -> error | error_notify | success | success_notify | canceling
        state_canceled,             // -> error | error_notify | success | success_notify | canceling
        state_canceling,            // -> error_notify
        state_success_notify,       // -> success
        state_success,              // -> .
        state_error_notify,         // -> error
        state_error;                // -> .

    // Noop function, used in the various states to indicate that they don't support a given
    // message. Named with the somewhat cute name '_' because it reads really well in the states.

    function _() { }

    // Initial state
    //
    state_created = {
        name: "created",
        enter: function (promise) {
            promise._setState(state_working);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Ready state, waiting for a message (completed/error/progress), able to be canceled
    //
    state_working = {
        name: "working",
        enter: _,
        cancel: function (promise) {
            promise._setState(state_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting state, if a promise is completed with a value which is itself a promise
    // (has a then() method) it signs up to be informed when that child promise is
    // fulfilled at which point it will be fulfilled with that value.
    //
    state_waiting = {
        name: "waiting",
        enter: function (promise) {
            var waitedUpon = promise._value;
            // We can special case our own intermediate promises which are not in a
            //  terminal state by just pushing this promise as a listener without
            //  having to create new indirection functions
            if (waitedUpon instanceof ThenPromise &&
                waitedUpon._state !== state_error &&
                waitedUpon._state !== state_success) {
                pushListener(waitedUpon, { promise: promise });
            } else {
                var error = function (value) {
                    if (waitedUpon._errorId) {
                        promise._chainedError(value, waitedUpon);
                    } else {
                        // Because this is an interop boundary we want to indicate that this
                        //  error has been handled by the promise infrastructure before we
                        //  begin a new handling chain.
                        //
                        callonerror(promise, value, detailsForHandledError, waitedUpon, error);
                        promise._error(value);
                    }
                };
                error.handlesOnError = true;
                waitedUpon.then(
                    promise._completed.bind(promise),
                    error,
                    promise._progress.bind(promise)
                );
            }
        },
        cancel: function (promise) {
            promise._setState(state_waiting_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting canceled state, when a promise has been in a waiting state and receives a
    // request to cancel its pending work it will forward that request to the child promise
    // and then waits to be informed of the result. This promise moves itself into the
    // canceling state but understands that the child promise may instead push it to a
    // different state.
    //
    state_waiting_canceled = {
        name: "waiting_canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. Triggering a cancel on the promise
            // that we are waiting upon may result in a different state transition
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            var waitedUpon = promise._value;
            if (waitedUpon.cancel) {
                waitedUpon.cancel();
            }
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceled state, moves to the canceling state and then tells the promise to do
    // whatever it might need to do on cancelation.
    //
    state_canceled = {
        name: "canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. The _cancelAction may change the state
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            promise._cancelAction();
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceling state, commits to the promise moving to an error state with an error
    // object whose 'name' and 'message' properties contain the string "Canceled"
    //
    state_canceling = {
        name: "canceling",
        enter: function (promise) {
            var error = new Error(canceledName);
            error.name = error.message;
            promise._value = error;
            promise._setState(state_error_notify);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success notify state, moves a promise to the success state and notifies all children
    //
    state_success_notify = {
        name: "complete_notify",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_success);
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success state, moves a promise to the success state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_success = {
        name: "success",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error notify state, moves a promise to the error state and notifies all children
    //
    state_error_notify = {
        name: "error_notify",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_error);
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error state, moves a promise to the error state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_error = {
        name: "error",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    //
    // The statemachine implementation follows a very particular pattern, the states are specified
    // as static stateless bags of functions which are then indirected through the state machine
    // instance (a Promise). As such all of the functions on each state have the promise instance
    // passed to them explicitly as a parameter and the Promise instance members do a little
    // dance where they indirect through the state and insert themselves in the argument list.
    //
    // We could instead call directly through the promise states however then every caller
    // would have to remember to do things like pumping the state machine to catch state transitions.
    //

    var PromiseStateMachine = _Base.Class.define(null, {
        _listeners: null,
        _nextState: null,
        _state: null,
        _value: null,

        cancel: function () {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
            /// <summary locid="WinJS.PromiseStateMachine.cancel">
            /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
            /// already been fulfilled and cancellation is supported, the promise enters
            /// the error state with a value of Error("Canceled").
            /// </summary>
            /// </signature>
            this._state.cancel(this);
            this._run();
        },
        done: function Promise_done(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
            /// <summary locid="WinJS.PromiseStateMachine.done">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            ///
            /// After the handlers have finished executing, this function throws any error that would have been returned
            /// from then() as a promise in the error state.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The fulfilled value is passed as the single argument. If the value is null,
            /// the fulfilled value is returned. The value returned
            /// from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while executing the function, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function is the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
            /// the function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// </signature>
            this._state.done(this, onComplete, onError, onProgress);
        },
        then: function Promise_then(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
            /// <summary locid="WinJS.PromiseStateMachine.then">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The value is passed as the single argument. If the value is null, the value is returned.
            /// The value returned from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while this function is being executed, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function becomes the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
            /// The function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
            /// The promise whose value is the result of executing the complete or
            /// error function.
            /// </returns>
            /// </signature>
            // BEGIN monaco change
            if (this.then !== Promise_then) {
                this.then(onComplete, onError, onProgress);
                return;
            }
            // END monaco change
            return this._state.then(this, onComplete, onError, onProgress);
        },

        _chainedError: function (value, context) {
            var result = this._state._error(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _completed: function (value) {
            var result = this._state._completed(this, value);
            this._run();
            return result;
        },
        _error: function (value) {
            var result = this._state._error(this, value, detailsForError);
            this._run();
            return result;
        },
        _progress: function (value) {
            this._state._progress(this, value);
        },
        _setState: function (state) {
            this._nextState = state;
        },
        _setCompleteValue: function (value) {
            this._state._setCompleteValue(this, value);
            this._run();
        },
        _setChainedErrorValue: function (value, context) {
            var result = this._state._setErrorValue(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _setExceptionValue: function (value) {
            var result = this._state._setErrorValue(this, value, detailsForException);
            this._run();
            return result;
        },
        _run: function () {
            while (this._nextState) {
                this._state = this._nextState;
                this._nextState = null;
                this._state.enter(this);
            }
        }
    }, {
        supportedForProcessing: false
    });

    //
    // Implementations of shared state machine code.
    //

    function completed(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success_notify;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function createErrorDetails(exception, error, promise, id, parent, handler) {
        return {
            exception: exception,
            error: error,
            promise: promise,
            handler: handler,
            id: id,
            parent: parent
        };
    }
    function detailsForHandledError(promise, errorValue, context, handler) {
        var exception = context._isException;
        var errorId = context._errorId;
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context,
            handler
        );
    }
    function detailsForChainedError(promise, errorValue, context) {
        var exception = context._isException;
        var errorId = context._errorId;
        setErrorInfo(promise, errorId, exception);
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context
        );
    }
    function detailsForError(promise, errorValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId);
        return createErrorDetails(
            null,
            errorValue,
            promise,
            errorId
        );
    }
    function detailsForException(promise, exceptionValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId, true);
        return createErrorDetails(
            exceptionValue,
            null,
            promise,
            errorId
        );
    }
    function done(promise, onComplete, onError, onProgress) {
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.done");
        pushListener(promise, { c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
    }
    function error(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error_notify);
    }
    function notifySuccess(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onComplete = listener.c;
            var target = listener.promise;

            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, _Global.Debug && _Global.Debug.MS_ASYNC_OP_STATUS_SUCCESS);

            if (target) {
                _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                try {
                    target._setCompleteValue(onComplete ? onComplete(value) : value);
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    _Trace._traceAsyncCallbackCompleted();
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                CompletePromise.prototype.done.call(promise, onComplete);
            }
        }
    }
    function notifyError(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onError = listener.e;
            var target = listener.promise;

            var errorID = _Global.Debug && (value && value.name === canceledName ? _Global.Debug.MS_ASYNC_OP_STATUS_CANCELED : _Global.Debug.MS_ASYNC_OP_STATUS_ERROR);
            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, errorID);

            if (target) {
                var asyncCallbackStarted = false;
                try {
                    if (onError) {
                        _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                        asyncCallbackStarted = true;
                        if (!onError.handlesOnError) {
                            callonerror(target, value, detailsForHandledError, promise, onError);
                        }
                        target._setCompleteValue(onError(value));
                    } else {
                        target._setChainedErrorValue(value, promise);
                    }
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    if (asyncCallbackStarted) {
                        _Trace._traceAsyncCallbackCompleted();
                    }
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                ErrorPromise.prototype.done.call(promise, null, onError);
            }
        }
    }
    function callonerror(promise, value, onerrorDetailsGenerator, context, handler) {
        if (promiseEventListeners._listeners[errorET]) {
            if (value instanceof Error && value.message === canceledName) {
                return;
            }
            promiseEventListeners.dispatchEvent(errorET, onerrorDetailsGenerator(promise, value, context, handler));
        }
    }
    function progress(promise, value) {
        var listeners = promise._listeners;
        if (listeners) {
            var i, len;
            for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
                var listener = len === 1 ? listeners : listeners[i];
                var onProgress = listener.p;
                if (onProgress) {
                    try { onProgress(value); } catch (ex) { }
                }
                if (!(listener.c || listener.e) && listener.promise) {
                    listener.promise._progress(value);
                }
            }
        }
    }
    function pushListener(promise, listener) {
        var listeners = promise._listeners;
        if (listeners) {
            // We may have either a single listener (which will never be wrapped in an array)
            // or 2+ listeners (which will be wrapped). Since we are now adding one more listener
            // we may have to wrap the single listener before adding the second.
            listeners = Array.isArray(listeners) ? listeners : [listeners];
            listeners.push(listener);
        } else {
            listeners = listener;
        }
        promise._listeners = listeners;
    }
    // The difference beween setCompleteValue()/setErrorValue() and complete()/error() is that setXXXValue() moves
    // a promise directly to the success/error state without starting another notification pass (because one
    // is already ongoing).
    function setErrorInfo(promise, errorId, isException) {
        promise._isException = isException || false;
        promise._errorId = errorId;
    }
    function setErrorValue(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error);
    }
    function setCompleteValue(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function then(promise, onComplete, onError, onProgress) {
        var result = new ThenPromise(promise);
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.then");
        pushListener(promise, { promise: result, c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
        return result;
    }

    //
    // Internal implementation detail promise, ThenPromise is created when a promise needs
    // to be returned from a then() method.
    //
    var ThenPromise = _Base.Class.derive(PromiseStateMachine,
        function (creator) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.thenPromise))) {
                this._stack = Promise._getStack();
            }

            this._creator = creator;
            this._setState(state_created);
            this._run();
        }, {
            _creator: null,

            _cancelAction: function () { if (this._creator) { this._creator.cancel(); } },
            _cleanupAction: function () { this._creator = null; }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Slim promise implementations for already completed promises, these are created
    // under the hood on synchronous completion paths as well as by WinJS.Promise.wrap
    // and WinJS.Promise.wrapError.
    //

    var ErrorPromise = _Base.Class.define(
        function ErrorPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.errorPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForError);
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function ErrorPromise_done(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                var value = this._value;
                if (onError) {
                    try {
                        if (!onError.handlesOnError) {
                            callonerror(null, value, detailsForHandledError, this, onError);
                        }
                        var result = onError(value);
                        if (result && typeof result === "object" && typeof result.done === "function") {
                            // If a promise is returned we need to wait on it.
                            result.done();
                        }
                        return;
                    } catch (ex) {
                        value = ex;
                    }
                }
                if (value instanceof Error && value.message === canceledName) {
                    // suppress cancel
                    return;
                }
                // force the exception to be thrown asyncronously to avoid any try/catch blocks
                //
                Promise._doneHandler(value);
            },
            then: function ErrorPromise_then(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>

                // If the promise is already in a error state and no error handler is provided
                // we optimize by simply returning the promise instead of creating a new one.
                //
                if (!onError) { return this; }
                var result;
                var value = this._value;
                try {
                    if (!onError.handlesOnError) {
                        callonerror(null, value, detailsForHandledError, this, onError);
                    }
                    result = new CompletePromise(onError(value));
                } catch (ex) {
                    // If the value throw from the error handler is the same as the value
                    // provided to the error handler then there is no need for a new promise.
                    //
                    if (ex === value) {
                        result = this;
                    } else {
                        result = new ExceptionPromise(ex);
                    }
                }
                return result;
            }
        }, {
            supportedForProcessing: false
        }
    );

    var ExceptionPromise = _Base.Class.derive(ErrorPromise,
        function ExceptionPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.exceptionPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForException);
        }, {
            /* empty */
        }, {
            supportedForProcessing: false
        }
    );

    var CompletePromise = _Base.Class.define(
        function CompletePromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.completePromise))) {
                this._stack = Promise._getStack();
            }

            if (value && typeof value === "object" && typeof value.then === "function") {
                var result = new ThenPromise(null);
                result._setCompleteValue(value);
                return result;
            }
            this._value = value;
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function CompletePromise_done(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                if (!onComplete) { return; }
                try {
                    var result = onComplete(this._value);
                    if (result && typeof result === "object" && typeof result.done === "function") {
                        result.done();
                    }
                } catch (ex) {
                    // force the exception to be thrown asynchronously to avoid any try/catch blocks
                    Promise._doneHandler(ex);
                }
            },
            then: function CompletePromise_then(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>
                try {
                    // If the value returned from the completion handler is the same as the value
                    // provided to the completion handler then there is no need for a new promise.
                    //
                    var newValue = onComplete ? onComplete(this._value) : this._value;
                    return newValue === this._value ? this : new CompletePromise(newValue);
                } catch (ex) {
                    return new ExceptionPromise(ex);
                }
            }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Promise is the user-creatable WinJS.Promise object.
    //

    function timeout(timeoutMS) {
        var id;
        return new Promise(
            function (c) {
                if (timeoutMS) {
                    id = _Global.setTimeout(c, timeoutMS);
                } else {
                    _BaseCoreUtils._setImmediate(c);
                }
            },
            function () {
                if (id) {
                    _Global.clearTimeout(id);
                }
            }
        );
    }

    function timeoutWithPromise(timeout, promise) {
        var cancelPromise = function () { promise.cancel(); };
        var cancelTimeout = function () { timeout.cancel(); };
        timeout.then(cancelPromise);
        promise.then(cancelTimeout, cancelTimeout);
        return promise;
    }

    var staticCanceledPromise;

    var Promise = _Base.Class.derive(PromiseStateMachine,
        function Promise_ctor(init, oncancel) {
            /// <signature helpKeyword="WinJS.Promise">
            /// <summary locid="WinJS.Promise">
            /// A promise provides a mechanism to schedule work to be done on a value that
            /// has not yet been computed. It is a convenient abstraction for managing
            /// interactions with asynchronous APIs.
            /// </summary>
            /// <param name="init" type="Function" locid="WinJS.Promise_p:init">
            /// The function that is called during construction of the  promise. The function
            /// is given three arguments (complete, error, progress). Inside this function
            /// you should add event listeners for the notifications supported by this value.
            /// </param>
            /// <param name="oncancel" optional="true" locid="WinJS.Promise_p:oncancel">
            /// The function to call if a consumer of this promise wants
            /// to cancel its undone work. Promises are not required to
            /// support cancellation.
            /// </param>
            /// </signature>

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.promise))) {
                this._stack = Promise._getStack();
            }

            this._oncancel = oncancel;
            this._setState(state_created);
            this._run();

            try {
                var complete = this._completed.bind(this);
                var error = this._error.bind(this);
                var progress = this._progress.bind(this);
                init(complete, error, progress);
            } catch (ex) {
                this._setExceptionValue(ex);
            }
        }, {
            _oncancel: null,

            _cancelAction: function () {
                // BEGIN monaco change
                try {
                    if (this._oncancel) {
                        this._oncancel();
                    } else {
                        throw new Error('Promise did not implement oncancel');
                    }
                } catch (ex) {
                    // Access fields to get them created
                    var msg = ex.message;
                    var stack = ex.stack;
                    promiseEventListeners.dispatchEvent('error', ex);
                }
                // END monaco change
            },
            _cleanupAction: function () { this._oncancel = null; }
        }, {

            addEventListener: function Promise_addEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.addEventListener">
                /// <summary locid="WinJS.Promise.addEventListener">
                /// Adds an event listener to the control.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.addEventListener_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="listener" locid="WinJS.Promise.addEventListener_p:listener">
                /// The listener to invoke when the event is raised.
                /// </param>
                /// <param name="capture" locid="WinJS.Promise.addEventListener_p:capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.addEventListener(eventType, listener, capture);
            },
            any: function Promise_any(values) {
                /// <signature helpKeyword="WinJS.Promise.any">
                /// <summary locid="WinJS.Promise.any">
                /// Returns a promise that is fulfilled when one of the input promises
                /// has been fulfilled.
                /// </summary>
                /// <param name="values" type="Array" locid="WinJS.Promise.any_p:values">
                /// An array that contains promise objects or objects whose property
                /// values include promise objects.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.any_returnValue">
                /// A promise that on fulfillment yields the value of the input (complete or error).
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error) {
                        var keys = Object.keys(values);
                        if (keys.length === 0) {
                            complete();
                        }
                        var canceled = 0;
                        keys.forEach(function (key) {
                            Promise.as(values[key]).then(
                                function () { complete({ key: key, value: values[key] }); },
                                function (e) {
                                    if (e instanceof Error && e.name === canceledName) {
                                        if ((++canceled) === keys.length) {
                                            complete(Promise.cancel);
                                        }
                                        return;
                                    }
                                    error({ key: key, value: values[key] });
                                }
                            );
                        });
                    },
                    function () {
                        var keys = Object.keys(values);
                        keys.forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            as: function Promise_as(value) {
                /// <signature helpKeyword="WinJS.Promise.as">
                /// <summary locid="WinJS.Promise.as">
                /// Returns a promise. If the object is already a promise it is returned;
                /// otherwise the object is wrapped in a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.as_p:value">
                /// The value to be treated as a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.as_returnValue">
                /// A promise.
                /// </returns>
                /// </signature>
                if (value && typeof value === "object" && typeof value.then === "function") {
                    return value;
                }
                return new CompletePromise(value);
            },
            /// <field type="WinJS.Promise" helpKeyword="WinJS.Promise.cancel" locid="WinJS.Promise.cancel">
            /// Canceled promise value, can be returned from a promise completion handler
            /// to indicate cancelation of the promise chain.
            /// </field>
            cancel: {
                get: function () {
                    return (staticCanceledPromise = staticCanceledPromise || new ErrorPromise(new _ErrorFromName(canceledName)));
                }
            },
            dispatchEvent: function Promise_dispatchEvent(eventType, details) {
                /// <signature helpKeyword="WinJS.Promise.dispatchEvent">
                /// <summary locid="WinJS.Promise.dispatchEvent">
                /// Raises an event of the specified type and properties.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.dispatchEvent_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="details" locid="WinJS.Promise.dispatchEvent_p:details">
                /// The set of additional properties to be attached to the event object.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.dispatchEvent_returnValue">
                /// Specifies whether preventDefault was called on the event.
                /// </returns>
                /// </signature>
                return promiseEventListeners.dispatchEvent(eventType, details);
            },
            is: function Promise_is(value) {
                /// <signature helpKeyword="WinJS.Promise.is">
                /// <summary locid="WinJS.Promise.is">
                /// Determines whether a value fulfills the promise contract.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.is_p:value">
                /// A value that may be a promise.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.is_returnValue">
                /// true if the specified value is a promise, otherwise false.
                /// </returns>
                /// </signature>
                return value && typeof value === "object" && typeof value.then === "function";
            },
            join: function Promise_join(values) {
                /// <signature helpKeyword="WinJS.Promise.join">
                /// <summary locid="WinJS.Promise.join">
                /// Creates a promise that is fulfilled when all the values are fulfilled.
                /// </summary>
                /// <param name="values" type="Object" locid="WinJS.Promise.join_p:values">
                /// An object whose fields contain values, some of which may be promises.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.join_returnValue">
                /// A promise whose value is an object with the same field names as those of the object in the values parameter, where
                /// each field value is the fulfilled value of a promise.
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error, progress) {
                        var keys = Object.keys(values);
                        var errors = Array.isArray(values) ? [] : {};
                        var results = Array.isArray(values) ? [] : {};
                        var undefineds = 0;
                        var pending = keys.length;
                        var argDone = function (key) {
                            if ((--pending) === 0) {
                                var errorCount = Object.keys(errors).length;
                                if (errorCount === 0) {
                                    complete(results);
                                } else {
                                    var canceledCount = 0;
                                    keys.forEach(function (key) {
                                        var e = errors[key];
                                        if (e instanceof Error && e.name === canceledName) {
                                            canceledCount++;
                                        }
                                    });
                                    if (canceledCount === errorCount) {
                                        complete(Promise.cancel);
                                    } else {
                                        error(errors);
                                    }
                                }
                            } else {
                                progress({ Key: key, Done: true });
                            }
                        };
                        keys.forEach(function (key) {
                            var value = values[key];
                            if (value === undefined) {
                                undefineds++;
                            } else {
                                Promise.then(value,
                                    function (value) { results[key] = value; argDone(key); },
                                    function (value) { errors[key] = value; argDone(key); }
                                );
                            }
                        });
                        pending -= undefineds;
                        if (pending === 0) {
                            complete(results);
                            return;
                        }
                    },
                    function () {
                        Object.keys(values).forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            removeEventListener: function Promise_removeEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.removeEventListener">
                /// <summary locid="WinJS.Promise.removeEventListener">
                /// Removes an event listener from the control.
                /// </summary>
                /// <param name='eventType' locid="WinJS.Promise.removeEventListener_eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name='listener' locid="WinJS.Promise.removeEventListener_listener">
                /// The listener to remove.
                /// </param>
                /// <param name='capture' locid="WinJS.Promise.removeEventListener_capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.removeEventListener(eventType, listener, capture);
            },
            supportedForProcessing: false,
            then: function Promise_then(value, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.then">
                /// <summary locid="WinJS.Promise.then">
                /// A static version of the promise instance method then().
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.then_p:value">
                /// the value to be treated as a promise.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.then_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If it is null, the promise simply
                /// returns the value. The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.then_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.then_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.then_returnValue">
                /// A promise whose value is the result of executing the provided complete function.
                /// </returns>
                /// </signature>
                return Promise.as(value).then(onComplete, onError, onProgress);
            },
            thenEach: function Promise_thenEach(values, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.thenEach">
                /// <summary locid="WinJS.Promise.thenEach">
                /// Performs an operation on all the input promises and returns a promise
                /// that has the shape of the input and contains the result of the operation
                /// that has been performed on each input.
                /// </summary>
                /// <param name="values" locid="WinJS.Promise.thenEach_p:values">
                /// A set of values (which could be either an array or an object) of which some or all are promises.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.thenEach_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If the value is null, the promise returns the value.
                /// The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.thenEach_returnValue">
                /// A promise that is the result of calling Promise.join on the values parameter.
                /// </returns>
                /// </signature>
                var result = Array.isArray(values) ? [] : {};
                Object.keys(values).forEach(function (key) {
                    result[key] = Promise.as(values[key]).then(onComplete, onError, onProgress);
                });
                return Promise.join(result);
            },
            timeout: function Promise_timeout(time, promise) {
                /// <signature helpKeyword="WinJS.Promise.timeout">
                /// <summary locid="WinJS.Promise.timeout">
                /// Creates a promise that is fulfilled after a timeout.
                /// </summary>
                /// <param name="timeout" type="Number" optional="true" locid="WinJS.Promise.timeout_p:timeout">
                /// The timeout period in milliseconds. If this value is zero or not specified
                /// setImmediate is called, otherwise setTimeout is called.
                /// </param>
                /// <param name="promise" type="Promise" optional="true" locid="WinJS.Promise.timeout_p:promise">
                /// A promise that will be canceled if it doesn't complete before the
                /// timeout has expired.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.timeout_returnValue">
                /// A promise that is completed asynchronously after the specified timeout.
                /// </returns>
                /// </signature>
                var to = timeout(time);
                return promise ? timeoutWithPromise(to, promise) : to;
            },
            wrap: function Promise_wrap(value) {
                /// <signature helpKeyword="WinJS.Promise.wrap">
                /// <summary locid="WinJS.Promise.wrap">
                /// Wraps a non-promise value in a promise. You can use this function if you need
                /// to pass a value to a function that requires a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.wrap_p:value">
                /// Some non-promise value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrap_returnValue">
                /// A promise that is successfully fulfilled with the specified value
                /// </returns>
                /// </signature>
                return new CompletePromise(value);
            },
            wrapError: function Promise_wrapError(error) {
                /// <signature helpKeyword="WinJS.Promise.wrapError">
                /// <summary locid="WinJS.Promise.wrapError">
                /// Wraps a non-promise error value in a promise. You can use this function if you need
                /// to pass an error to a function that requires a promise.
                /// </summary>
                /// <param name="error" locid="WinJS.Promise.wrapError_p:error">
                /// A non-promise error value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrapError_returnValue">
                /// A promise that is in an error state with the specified value.
                /// </returns>
                /// </signature>
                return new ErrorPromise(error);
            },

            _veryExpensiveTagWithStack: {
                get: function () { return tagWithStack; },
                set: function (value) { tagWithStack = value; }
            },
            _veryExpensiveTagWithStack_tag: tag,
            _getStack: function () {
                if (_Global.Debug && _Global.Debug.debuggerEnabled) {
                    try { throw new Error(); } catch (e) { return e.stack; }
                }
            },

            _cancelBlocker: function Promise__cancelBlocker(input, oncancel) {
                //
                // Returns a promise which on cancelation will still result in downstream cancelation while
                //  protecting the promise 'input' from being  canceled which has the effect of allowing
                //  'input' to be shared amoung various consumers.
                //
                if (!Promise.is(input)) {
                    return Promise.wrap(input);
                }
                var complete;
                var error;
                var output = new Promise(
                    function (c, e) {
                        complete = c;
                        error = e;
                    },
                    function () {
                        complete = null;
                        error = null;
                        oncancel && oncancel();
                    }
                );
                input.then(
                    function (v) { complete && complete(v); },
                    function (e) { error && error(e); }
                );
                return output;
            },

        }
    );
    Object.defineProperties(Promise, _Events.createEventProperties(errorET));

    Promise._doneHandler = function (value) {
        _BaseCoreUtils._setImmediate(function Promise_done_rethrow() {
            throw value;
        });
    };

    return {
        PromiseStateMachine: PromiseStateMachine,
        Promise: Promise,
        state_created: state_created
    };
});

_winjs("WinJS/Promise", ["WinJS/Core/_Base","WinJS/Promise/_StateMachine"], function promiseInit( _Base, _StateMachine) {
    "use strict";

    _Base.Namespace.define("WinJS", {
        Promise: _StateMachine.Promise
    });

    return _StateMachine.Promise;
});

__winjs_exports = _modules["WinJS/Core/_WinJS"];
__winjs_exports.TPromise = __winjs_exports.Promise;
__winjs_exports.PPromise = __winjs_exports.Promise;

// ESM-comment-begin
// if (typeof exports === 'undefined' && typeof define === 'function' && define.amd) {
//     define([], __winjs_exports);
// } else {
//     module.exports = __winjs_exports;
// }
// ESM-comment-end

})();

// ESM-uncomment-begin
var Promise = __winjs_exports.Promise;
var TPromise = __winjs_exports.TPromise;
var PPromise = __winjs_exports.PPromise;
// ESM-uncomment-end

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js ***!
  \******************************************************************************/
/*! exports provided: logOnceWebWorkerWarning, SimpleWorkerClient, SimpleWorkerServer, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOnceWebWorkerWarning", function() { return logOnceWebWorkerWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerClient", function() { return SimpleWorkerClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWorkerServer", function() { return SimpleWorkerServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "./node_modules/monaco-editor/esm/vs/base/common/errors.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lifecycle.js */ "./node_modules/monaco-editor/esm/vs/base/common/lifecycle.js");
/* harmony import */ var _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winjs.base.js */ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js");
/* harmony import */ var _async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../async.js */ "./node_modules/monaco-editor/esm/vs/base/common/async.js");
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var INITIALIZE = '$initialize';
var webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!_platform_js__WEBPACK_IMPORTED_MODULE_4__["isWeb"]) {
        // running tests
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
var SimpleWorkerProtocol = /** @class */ (function () {
    function SimpleWorkerProtocol(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
    }
    SimpleWorkerProtocol.prototype.setWorkerId = function (workerId) {
        this._workerId = workerId;
    };
    SimpleWorkerProtocol.prototype.sendMessage = function (method, args) {
        var req = String(++this._lastSentReq);
        var reply = {
            c: null,
            e: null
        };
        var result = new _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"](function (c, e) {
            reply.c = c;
            reply.e = e;
        }, function () {
            // Cancel not supported
        });
        this._pendingReplies[req] = reply;
        this._send({
            vsWorker: this._workerId,
            req: req,
            method: method,
            args: args
        });
        return result;
    };
    SimpleWorkerProtocol.prototype.handleMessage = function (serializedMessage) {
        var message;
        try {
            message = JSON.parse(serializedMessage);
        }
        catch (e) {
            // nothing
        }
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    };
    SimpleWorkerProtocol.prototype._handleMessage = function (msg) {
        var _this = this;
        if (msg.seq) {
            var replyMessage = msg;
            if (!this._pendingReplies[replyMessage.seq]) {
                console.warn('Got reply to unknown seq');
                return;
            }
            var reply = this._pendingReplies[replyMessage.seq];
            delete this._pendingReplies[replyMessage.seq];
            if (replyMessage.err) {
                var err = replyMessage.err;
                if (replyMessage.err.$isError) {
                    err = new Error();
                    err.name = replyMessage.err.name;
                    err.message = replyMessage.err.message;
                    err.stack = replyMessage.err.stack;
                }
                reply.e(err);
                return;
            }
            reply.c(replyMessage.res);
            return;
        }
        var requestMessage = msg;
        var req = requestMessage.req;
        var result = this._handler.handleMessage(requestMessage.method, requestMessage.args);
        result.then(function (r) {
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: r,
                err: undefined
            });
        }, function (e) {
            if (e.detail instanceof Error) {
                // Loading errors have a detail property that points to the actual error
                e.detail = Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e.detail);
            }
            _this._send({
                vsWorker: _this._workerId,
                seq: req,
                res: undefined,
                err: Object(_errors_js__WEBPACK_IMPORTED_MODULE_0__["transformErrorForSerialization"])(e)
            });
        });
    };
    SimpleWorkerProtocol.prototype._send = function (msg) {
        var strMsg = JSON.stringify(msg);
        // console.log('SENDING: ' + strMsg);
        this._handler.sendMessage(strMsg);
    };
    return SimpleWorkerProtocol;
}());
/**
 * Main thread side
 */
var SimpleWorkerClient = /** @class */ (function (_super) {
    __extends(SimpleWorkerClient, _super);
    function SimpleWorkerClient(workerFactory, moduleId) {
        var _this = _super.call(this) || this;
        var lazyProxyFulfill = null;
        var lazyProxyReject = null;
        _this._worker = _this._register(workerFactory.create('vs/base/common/worker/simpleWorker', function (msg) {
            _this._protocol.handleMessage(msg);
        }, function (err) {
            // in Firefox, web workers fail lazily :(
            // we will reject the proxy
            lazyProxyReject(err);
        }));
        _this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg) {
                _this._worker.postMessage(msg);
            },
            handleMessage: function (method, args) {
                // Intentionally not supporting worker -> main requests
                return _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"].as(null);
            }
        });
        _this._protocol.setWorkerId(_this._worker.getId());
        // Gather loader configuration
        var loaderConfiguration = null;
        if (typeof self.require !== 'undefined' && typeof self.require.getConfig === 'function') {
            // Get the configuration from the Monaco AMD Loader
            loaderConfiguration = self.require.getConfig();
        }
        else if (typeof self.requirejs !== 'undefined') {
            // Get the configuration from requirejs
            loaderConfiguration = self.requirejs.s.contexts._.config;
        }
        _this._lazyProxy = new _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"](function (c, e) {
            lazyProxyFulfill = c;
            lazyProxyReject = e;
        }, function () { });
        // Send initialize message
        _this._onModuleLoaded = _this._protocol.sendMessage(INITIALIZE, [
            _this._worker.getId(),
            moduleId,
            loaderConfiguration
        ]);
        _this._onModuleLoaded.then(function (availableMethods) {
            var proxy = {};
            for (var i = 0; i < availableMethods.length; i++) {
                proxy[availableMethods[i]] = createProxyMethod(availableMethods[i], proxyMethodRequest);
            }
            lazyProxyFulfill(proxy);
        }, function (e) {
            lazyProxyReject(e);
            _this._onError('Worker failed to load ' + moduleId, e);
        });
        // Create proxy to loaded code
        var proxyMethodRequest = function (method, args) {
            return _this._request(method, args);
        };
        var createProxyMethod = function (method, proxyMethodRequest) {
            return function () {
                var args = Array.prototype.slice.call(arguments, 0);
                return proxyMethodRequest(method, args);
            };
        };
        return _this;
    }
    SimpleWorkerClient.prototype.getProxyObject = function () {
        // Do not allow chaining promises to cancel the proxy creation
        return new _async_js__WEBPACK_IMPORTED_MODULE_3__["ShallowCancelThenPromise"](this._lazyProxy);
    };
    SimpleWorkerClient.prototype._request = function (method, args) {
        var _this = this;
        return new _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"](function (c, e) {
            _this._onModuleLoaded.then(function () {
                _this._protocol.sendMessage(method, args).then(c, e);
            }, e);
        }, function () {
            // Cancel intentionally not supported
        });
    };
    SimpleWorkerClient.prototype._onError = function (message, error) {
        console.error(message);
        console.info(error);
    };
    return SimpleWorkerClient;
}(_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__["Disposable"]));

/**
 * Worker side
 */
var SimpleWorkerServer = /** @class */ (function () {
    function SimpleWorkerServer(postSerializedMessage, requestHandler) {
        var _this = this;
        this._requestHandler = requestHandler;
        this._protocol = new SimpleWorkerProtocol({
            sendMessage: function (msg) {
                postSerializedMessage(msg);
            },
            handleMessage: function (method, args) { return _this._handleMessage(method, args); }
        });
    }
    SimpleWorkerServer.prototype.onmessage = function (msg) {
        this._protocol.handleMessage(msg);
    };
    SimpleWorkerServer.prototype._handleMessage = function (method, args) {
        if (method === INITIALIZE) {
            return this.initialize(args[0], args[1], args[2]);
        }
        if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
            return _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"].wrapError(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"].as(this._requestHandler[method].apply(this._requestHandler, args));
        }
        catch (e) {
            return _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"].wrapError(e);
        }
    };
    SimpleWorkerServer.prototype.initialize = function (workerId, moduleId, loaderConfig) {
        var _this = this;
        this._protocol.setWorkerId(workerId);
        if (this._requestHandler) {
            // static request handler
            var methods = [];
            for (var prop in this._requestHandler) {
                if (typeof this._requestHandler[prop] === 'function') {
                    methods.push(prop);
                }
            }
            return _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"].as(methods);
        }
        if (loaderConfig) {
            // Remove 'baseUrl', handling it is beyond scope for now
            if (typeof loaderConfig.baseUrl !== 'undefined') {
                delete loaderConfig['baseUrl'];
            }
            if (typeof loaderConfig.paths !== 'undefined') {
                if (typeof loaderConfig.paths.vs !== 'undefined') {
                    delete loaderConfig.paths['vs'];
                }
            }
            // Since this is in a web worker, enable catching errors
            loaderConfig.catchError = true;
            self.require.config(loaderConfig);
        }
        var cc;
        var ee;
        var r = new _winjs_base_js__WEBPACK_IMPORTED_MODULE_2__["TPromise"](function (c, e) {
            cc = c;
            ee = e;
        });
        // Use the global require to be sure to get the global config
        self.require([moduleId], function () {
            var result = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                result[_i] = arguments[_i];
            }
            var handlerModule = result[0];
            _this._requestHandler = handlerModule.create();
            var methods = [];
            for (var prop in _this._requestHandler) {
                if (typeof _this._requestHandler[prop] === 'function') {
                    methods.push(prop);
                }
            }
            cc(methods);
        }, ee);
        return r;
    };
    return SimpleWorkerServer;
}());

/**
 * Called on the worker side
 */
function create(postMessage) {
    return new SimpleWorkerServer(postMessage, null);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js ***!
  \*************************************************************************************/
/*! exports provided: CharacterClassifier, CharacterSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterClassifier", function() { return CharacterClassifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSet", function() { return CharacterSet; });
/* harmony import */ var _uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A fast character classifier that uses a compact array for ASCII values.
 */
var CharacterClassifier = /** @class */ (function () {
    function CharacterClassifier(_defaultValue) {
        var defaultValue = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_defaultValue);
        this._defaultValue = defaultValue;
        this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
        this._map = new Map();
    }
    CharacterClassifier._createAsciiMap = function (defaultValue) {
        var asciiMap = new Uint8Array(256);
        for (var i = 0; i < 256; i++) {
            asciiMap[i] = defaultValue;
        }
        return asciiMap;
    };
    CharacterClassifier.prototype.set = function (charCode, _value) {
        var value = Object(_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint8"])(_value);
        if (charCode >= 0 && charCode < 256) {
            this._asciiMap[charCode] = value;
        }
        else {
            this._map.set(charCode, value);
        }
    };
    CharacterClassifier.prototype.get = function (charCode) {
        if (charCode >= 0 && charCode < 256) {
            return this._asciiMap[charCode];
        }
        else {
            return (this._map.get(charCode) || this._defaultValue);
        }
    };
    return CharacterClassifier;
}());

var CharacterSet = /** @class */ (function () {
    function CharacterSet() {
        this._actual = new CharacterClassifier(0 /* False */);
    }
    CharacterSet.prototype.add = function (charCode) {
        this._actual.set(charCode, 1 /* True */);
    };
    CharacterSet.prototype.has = function (charCode) {
        return (this._actual.get(charCode) === 1 /* True */);
    };
    return CharacterSet;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/position.js ***!
  \**************************************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A position in the editor.
 */
var Position = /** @class */ (function () {
    function Position(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
     * Test if this position equals other position
     */
    Position.prototype.equals = function (other) {
        return Position.equals(this, other);
    };
    /**
     * Test if position `a` equals position `b`
     */
    Position.equals = function (a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.lineNumber === b.lineNumber &&
            a.column === b.column);
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    Position.prototype.isBefore = function (other) {
        return Position.isBefore(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */
    Position.isBefore = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    };
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    Position.prototype.isBeforeOrEqual = function (other) {
        return Position.isBeforeOrEqual(this, other);
    };
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */
    Position.isBeforeOrEqual = function (a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    };
    /**
     * A function that compares positions, useful for sorting
     */
    Position.compare = function (a, b) {
        var aLineNumber = a.lineNumber | 0;
        var bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            var aColumn = a.column | 0;
            var bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    };
    /**
     * Clone this position.
     */
    Position.prototype.clone = function () {
        return new Position(this.lineNumber, this.column);
    };
    /**
     * Convert to a human-readable representation.
     */
    Position.prototype.toString = function () {
        return '(' + this.lineNumber + ',' + this.column + ')';
    };
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    Position.lift = function (pos) {
        return new Position(pos.lineNumber, pos.column);
    };
    /**
     * Test if `obj` is an `IPosition`.
     */
    Position.isIPosition = function (obj) {
        return (obj
            && (typeof obj.lineNumber === 'number')
            && (typeof obj.column === 'number'));
    };
    return Position;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/range.js ***!
  \***********************************************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */
var Range = /** @class */ (function () {
    function Range(startLineNumber, startColumn, endLineNumber, endColumn) {
        if ((startLineNumber > endLineNumber) || (startLineNumber === endLineNumber && startColumn > endColumn)) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        }
        else {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    /**
     * Test if this range is empty.
     */
    Range.prototype.isEmpty = function () {
        return Range.isEmpty(this);
    };
    /**
     * Test if `range` is empty.
     */
    Range.isEmpty = function (range) {
        return (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn);
    };
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    Range.prototype.containsPosition = function (position) {
        return Range.containsPosition(this, position);
    };
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */
    Range.containsPosition = function (range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    Range.prototype.containsRange = function (range) {
        return Range.containsRange(this, range);
    };
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    Range.containsRange = function (range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.prototype.plusRange = function (range) {
        return Range.plusRange(this, range);
    };
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    Range.plusRange = function (a, b) {
        var startLineNumber;
        var startColumn;
        var endLineNumber;
        var endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        }
        else if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        }
        else {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        }
        else if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        }
        else {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.prototype.intersectRanges = function (range) {
        return Range.intersectRanges(this, range);
    };
    /**
     * A intersection of the two ranges.
     */
    Range.intersectRanges = function (a, b) {
        var resultStartLineNumber = a.startLineNumber;
        var resultStartColumn = a.startColumn;
        var resultEndLineNumber = a.endLineNumber;
        var resultEndColumn = a.endColumn;
        var otherStartLineNumber = b.startLineNumber;
        var otherStartColumn = b.startColumn;
        var otherEndLineNumber = b.endLineNumber;
        var otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        }
        else if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        }
        else if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        // Check if selection is now empty
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    };
    /**
     * Test if this range equals other.
     */
    Range.prototype.equalsRange = function (other) {
        return Range.equalsRange(this, other);
    };
    /**
     * Test if range `a` equals `b`.
     */
    Range.equalsRange = function (a, b) {
        return (!!a &&
            !!b &&
            a.startLineNumber === b.startLineNumber &&
            a.startColumn === b.startColumn &&
            a.endLineNumber === b.endLineNumber &&
            a.endColumn === b.endColumn);
    };
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    Range.prototype.getEndPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.endLineNumber, this.endColumn);
    };
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    Range.prototype.getStartPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__["Position"](this.startLineNumber, this.startColumn);
    };
    /**
     * Transform to a user presentable string representation.
     */
    Range.prototype.toString = function () {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    };
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */
    Range.prototype.setEndPosition = function (endLineNumber, endColumn) {
        return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    };
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */
    Range.prototype.setStartPosition = function (startLineNumber, startColumn) {
        return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.prototype.collapseToStart = function () {
        return Range.collapseToStart(this);
    };
    /**
     * Create a new empty range using this range's start position.
     */
    Range.collapseToStart = function (range) {
        return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    };
    // ---
    Range.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    /**
     * Create a `Range` from an `IRange`.
     */
    Range.lift = function (range) {
        if (!range) {
            return null;
        }
        return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    };
    /**
     * Test if `obj` is an `IRange`.
     */
    Range.isIRange = function (obj) {
        return (obj
            && (typeof obj.startLineNumber === 'number')
            && (typeof obj.startColumn === 'number')
            && (typeof obj.endLineNumber === 'number')
            && (typeof obj.endColumn === 'number'));
    };
    /**
     * Test if the two ranges are touching in any way.
     */
    Range.areIntersectingOrTouching = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */
    Range.areIntersecting = function (a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */
    Range.compareRangesUsingStarts = function (a, b) {
        var aStartLineNumber = a.startLineNumber | 0;
        var bStartLineNumber = b.startLineNumber | 0;
        if (aStartLineNumber === bStartLineNumber) {
            var aStartColumn = a.startColumn | 0;
            var bStartColumn = b.startColumn | 0;
            if (aStartColumn === bStartColumn) {
                var aEndLineNumber = a.endLineNumber | 0;
                var bEndLineNumber = b.endLineNumber | 0;
                if (aEndLineNumber === bEndLineNumber) {
                    var aEndColumn = a.endColumn | 0;
                    var bEndColumn = b.endColumn | 0;
                    return aEndColumn - bEndColumn;
                }
                return aEndLineNumber - bEndLineNumber;
            }
            return aStartColumn - bStartColumn;
        }
        return aStartLineNumber - bStartLineNumber;
    };
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */
    Range.compareRangesUsingEnds = function (a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    };
    /**
     * Test if the range spans multiple lines.
     */
    Range.spansMultipleLines = function (range) {
        return range.endLineNumber > range.startLineNumber;
    };
    return Range;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js ***!
  \***************************************************************************/
/*! exports provided: SelectionDirection, Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionDirection", function() { return SelectionDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * The direction of a selection.
 */
var SelectionDirection;
(function (SelectionDirection) {
    /**
     * The selection starts above where it ends.
     */
    SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
    /**
     * The selection starts below where it ends.
     */
    SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));
/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
        var _this = _super.call(this, selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) || this;
        _this.selectionStartLineNumber = selectionStartLineNumber;
        _this.selectionStartColumn = selectionStartColumn;
        _this.positionLineNumber = positionLineNumber;
        _this.positionColumn = positionColumn;
        return _this;
    }
    /**
     * Clone this selection.
     */
    Selection.prototype.clone = function () {
        return new Selection(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    };
    /**
     * Transform to a human-readable representation.
     */
    Selection.prototype.toString = function () {
        return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    };
    /**
     * Test if equals other selection.
     */
    Selection.prototype.equalsSelection = function (other) {
        return (Selection.selectionsEqual(this, other));
    };
    /**
     * Test if the two selections are equal.
     */
    Selection.selectionsEqual = function (a, b) {
        return (a.selectionStartLineNumber === b.selectionStartLineNumber &&
            a.selectionStartColumn === b.selectionStartColumn &&
            a.positionLineNumber === b.positionLineNumber &&
            a.positionColumn === b.positionColumn);
    };
    /**
     * Get directions (LTR or RTL).
     */
    Selection.prototype.getDirection = function () {
        if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
            return SelectionDirection.LTR;
        }
        return SelectionDirection.RTL;
    };
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.setEndPosition = function (endLineNumber, endColumn) {
        if (this.getDirection() === SelectionDirection.LTR) {
            return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    };
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */
    Selection.prototype.getPosition = function () {
        return new _position_js__WEBPACK_IMPORTED_MODULE_1__["Position"](this.positionLineNumber, this.positionColumn);
    };
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */
    Selection.prototype.setStartPosition = function (startLineNumber, startColumn) {
        if (this.getDirection() === SelectionDirection.LTR) {
            return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }
        return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    };
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    Selection.fromPositions = function (start, end) {
        if (end === void 0) { end = start; }
        return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    };
    /**
     * Create a `Selection` from an `ISelection`.
     */
    Selection.liftSelection = function (sel) {
        return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    };
    /**
     * `a` equals `b`.
     */
    Selection.selectionsArrEqual = function (a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0, len = a.length; i < len; i++) {
            if (!this.selectionsEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Test if `obj` is an `ISelection`.
     */
    Selection.isISelection = function (obj) {
        return (obj
            && (typeof obj.selectionStartLineNumber === 'number')
            && (typeof obj.selectionStartColumn === 'number')
            && (typeof obj.positionLineNumber === 'number')
            && (typeof obj.positionColumn === 'number'));
    };
    /**
     * Create with a direction.
     */
    Selection.createWithDirection = function (startLineNumber, startColumn, endLineNumber, endColumn, direction) {
        if (direction === SelectionDirection.LTR) {
            return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    };
    return Selection;
}(_range_js__WEBPACK_IMPORTED_MODULE_0__["Range"]));



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js":
/*!***********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/token.js ***!
  \***********************************************************************/
/*! exports provided: Token, TokenizationResult, TokenizationResult2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult", function() { return TokenizationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenizationResult2", function() { return TokenizationResult2; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Token = /** @class */ (function () {
    function Token(offset, type, language) {
        this.offset = offset | 0; // @perf
        this.type = type;
        this.language = language;
    }
    Token.prototype.toString = function () {
        return '(' + this.offset + ', ' + this.type + ')';
    };
    return Token;
}());

var TokenizationResult = /** @class */ (function () {
    function TokenizationResult(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult;
}());

var TokenizationResult2 = /** @class */ (function () {
    function TokenizationResult2(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
    }
    return TokenizationResult2;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js ***!
  \**********************************************************************/
/*! exports provided: Uint8Matrix, toUint8, toUint32, toUint32Array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8Matrix", function() { return Uint8Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8", function() { return toUint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return toUint32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32Array", function() { return toUint32Array; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var Uint8Matrix = /** @class */ (function () {
    function Uint8Matrix(rows, cols, defaultValue) {
        var data = new Uint8Array(rows * cols);
        for (var i = 0, len = rows * cols; i < len; i++) {
            data[i] = defaultValue;
        }
        this._data = data;
        this.rows = rows;
        this.cols = cols;
    }
    Uint8Matrix.prototype.get = function (row, col) {
        return this._data[row * this.cols + col];
    };
    Uint8Matrix.prototype.set = function (row, col, value) {
        this._data[row * this.cols + col] = value;
    };
    return Uint8Matrix;
}());

function toUint8(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 255 /* MAX_UINT_8 */) {
        return 255 /* MAX_UINT_8 */;
    }
    return v | 0;
}
function toUint32(v) {
    if (v < 0) {
        return 0;
    }
    if (v > 4294967295 /* MAX_UINT_32 */) {
        return 4294967295 /* MAX_UINT_32 */;
    }
    return v | 0;
}
function toUint32Array(arr) {
    var len = arr.length;
    var r = new Uint32Array(len);
    for (var i = 0; i < len; i++) {
        r[i] = toUint32(arr[i]);
    }
    return r;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js ***!
  \******************************************************************************/
/*! exports provided: DiffComputer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffComputer", function() { return DiffComputer; });
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/strings.js */ "./node_modules/monaco-editor/esm/vs/base/common/strings.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var MAXIMUM_RUN_TIME = 5000; // 5 seconds
var MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    var diffAlgo = new _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__["LcsDiff"](originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
}
var LineMarkerSequence = /** @class */ (function () {
    function LineMarkerSequence(lines) {
        var startColumns = [];
        var endColumns = [];
        for (var i = 0, length_1 = lines.length; i < length_1; i++) {
            startColumns[i] = LineMarkerSequence._getFirstNonBlankColumn(lines[i], 1);
            endColumns[i] = LineMarkerSequence._getLastNonBlankColumn(lines[i], 1);
        }
        this._lines = lines;
        this._startColumns = startColumns;
        this._endColumns = endColumns;
    }
    LineMarkerSequence.prototype.getLength = function () {
        return this._lines.length;
    };
    LineMarkerSequence.prototype.getElementAtIndex = function (i) {
        return this._lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
    };
    LineMarkerSequence.prototype.getStartLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence.prototype.getEndLineNumber = function (i) {
        return i + 1;
    };
    LineMarkerSequence._getFirstNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["firstNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 1;
    };
    LineMarkerSequence._getLastNonBlankColumn = function (txt, defaultValue) {
        var r = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__["lastNonWhitespaceIndex"](txt);
        if (r === -1) {
            return defaultValue;
        }
        return r + 2;
    };
    LineMarkerSequence.prototype.getCharSequence = function (shouldIgnoreTrimWhitespace, startIndex, endIndex) {
        var charCodes = [];
        var lineNumbers = [];
        var columns = [];
        var len = 0;
        for (var index = startIndex; index <= endIndex; index++) {
            var lineContent = this._lines[index];
            var startColumn = (shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1);
            var endColumn = (shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1);
            for (var col = startColumn; col < endColumn; col++) {
                charCodes[len] = lineContent.charCodeAt(col - 1);
                lineNumbers[len] = index + 1;
                columns[len] = col;
                len++;
            }
        }
        return new CharSequence(charCodes, lineNumbers, columns);
    };
    return LineMarkerSequence;
}());
var CharSequence = /** @class */ (function () {
    function CharSequence(charCodes, lineNumbers, columns) {
        this._charCodes = charCodes;
        this._lineNumbers = lineNumbers;
        this._columns = columns;
    }
    CharSequence.prototype.getLength = function () {
        return this._charCodes.length;
    };
    CharSequence.prototype.getElementAtIndex = function (i) {
        return this._charCodes[i];
    };
    CharSequence.prototype.getStartLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getStartColumn = function (i) {
        return this._columns[i];
    };
    CharSequence.prototype.getEndLineNumber = function (i) {
        return this._lineNumbers[i];
    };
    CharSequence.prototype.getEndColumn = function (i) {
        return this._columns[i] + 1;
    };
    return CharSequence;
}());
var CharChange = /** @class */ (function () {
    function CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalStartColumn = originalStartColumn;
        this.originalEndLineNumber = originalEndLineNumber;
        this.originalEndColumn = originalEndColumn;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedStartColumn = modifiedStartColumn;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.modifiedEndColumn = modifiedEndColumn;
    }
    CharChange.createFromDiffChange = function (diffChange, originalCharSequence, modifiedCharSequence) {
        var originalStartLineNumber;
        var originalStartColumn;
        var originalEndLineNumber;
        var originalEndColumn;
        var modifiedStartLineNumber;
        var modifiedStartColumn;
        var modifiedEndLineNumber;
        var modifiedEndColumn;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = 0;
            originalStartColumn = 0;
            originalEndLineNumber = 0;
            originalEndColumn = 0;
        }
        else {
            originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
            originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
            originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
            originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = 0;
            modifiedStartColumn = 0;
            modifiedEndLineNumber = 0;
            modifiedEndColumn = 0;
        }
        else {
            modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
            modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    };
    return CharChange;
}());
function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
        return rawChanges;
    }
    var result = [rawChanges[0]];
    var prevChange = result[0];
    for (var i = 1, len = rawChanges.length; i < len; i++) {
        var currChange = rawChanges[i];
        var originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
        var modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
        // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true
        var matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
        if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
            // Merge the current change into the previous one
            prevChange.originalLength = (currChange.originalStart + currChange.originalLength) - prevChange.originalStart;
            prevChange.modifiedLength = (currChange.modifiedStart + currChange.modifiedLength) - prevChange.modifiedStart;
        }
        else {
            // Add the current change
            result.push(currChange);
            prevChange = currChange;
        }
    }
    return result;
}
var LineChange = /** @class */ (function () {
    function LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalEndLineNumber = originalEndLineNumber;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.charChanges = charChanges;
    }
    LineChange.createFromDiffResult = function (shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueProcessingPredicate, shouldComputeCharChanges, shouldPostProcessCharChanges) {
        var originalStartLineNumber;
        var originalEndLineNumber;
        var modifiedStartLineNumber;
        var modifiedEndLineNumber;
        var charChanges;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
            originalEndLineNumber = 0;
        }
        else {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
            originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
            modifiedEndLineNumber = 0;
        }
        else {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        if (shouldComputeCharChanges && diffChange.originalLength !== 0 && diffChange.modifiedLength !== 0 && continueProcessingPredicate()) {
            var originalCharSequence = originalLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
            var modifiedCharSequence = modifiedLineSequence.getCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
            var rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueProcessingPredicate, true);
            if (shouldPostProcessCharChanges) {
                rawChanges = postProcessCharChanges(rawChanges);
            }
            charChanges = [];
            for (var i = 0, length_2 = rawChanges.length; i < length_2; i++) {
                charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
            }
        }
        return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    };
    return LineChange;
}());
var DiffComputer = /** @class */ (function () {
    function DiffComputer(originalLines, modifiedLines, opts) {
        this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
        this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
        this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
        this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
        this.maximumRunTimeMs = MAXIMUM_RUN_TIME;
        this.originalLines = originalLines;
        this.modifiedLines = modifiedLines;
        this.original = new LineMarkerSequence(originalLines);
        this.modified = new LineMarkerSequence(modifiedLines);
    }
    DiffComputer.prototype.computeDiff = function () {
        if (this.original.getLength() === 1 && this.original.getElementAtIndex(0).length === 0) {
            // empty original => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        if (this.modified.getLength() === 1 && this.modified.getElementAtIndex(0).length === 0) {
            // empty modified => fast path
            return [{
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [{
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0
                        }]
                }];
        }
        this.computationStartTime = (new Date()).getTime();
        var rawChanges = computeDiff(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);
        // The diff is always computed with ignoring trim whitespace
        // This ensures we get the prettiest diff
        if (this.shouldIgnoreTrimWhitespace) {
            var lineChanges = [];
            for (var i = 0, length_3 = rawChanges.length; i < length_3; i++) {
                lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            }
            return lineChanges;
        }
        // Need to post-process and introduce changes where the trim whitespace is different
        // Note that we are looping starting at -1 to also cover the lines before the first change
        var result = [];
        var originalLineIndex = 0;
        var modifiedLineIndex = 0;
        for (var i = -1 /* !!!! */, len = rawChanges.length; i < len; i++) {
            var nextChange = (i + 1 < len ? rawChanges[i + 1] : null);
            var originalStop = (nextChange ? nextChange.originalStart : this.originalLines.length);
            var modifiedStop = (nextChange ? nextChange.modifiedStart : this.modifiedLines.length);
            while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
                var originalLine = this.originalLines[originalLineIndex];
                var modifiedLine = this.modifiedLines[modifiedLineIndex];
                if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                        var originalStartColumn = LineMarkerSequence._getFirstNonBlankColumn(originalLine, 1);
                        var modifiedStartColumn = LineMarkerSequence._getFirstNonBlankColumn(modifiedLine, 1);
                        while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                            var originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                            var modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalStartColumn--;
                            modifiedStartColumn--;
                        }
                        if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
                        }
                    }
                    // Check the trailing whitespace
                    {
                        var originalEndColumn = LineMarkerSequence._getLastNonBlankColumn(originalLine, 1);
                        var modifiedEndColumn = LineMarkerSequence._getLastNonBlankColumn(modifiedLine, 1);
                        var originalMaxColumn = originalLine.length + 1;
                        var modifiedMaxColumn = modifiedLine.length + 1;
                        while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                            var originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                            var modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalEndColumn++;
                            modifiedEndColumn++;
                        }
                        if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
                        }
                    }
                }
                originalLineIndex++;
                modifiedLineIndex++;
            }
            if (nextChange) {
                // Emit the actual change
                result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                originalLineIndex += nextChange.originalLength;
                modifiedLineIndex += nextChange.modifiedLength;
            }
        }
        return result;
    };
    DiffComputer.prototype._pushTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
            // Merged into previous
            return;
        }
        var charChanges;
        if (this.shouldComputeCharChanges) {
            charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
        }
        result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    };
    DiffComputer.prototype._mergeTrimWhitespaceCharChange = function (result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        var len = result.length;
        if (len === 0) {
            return false;
        }
        var prevChange = result[len - 1];
        if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
            // Don't merge with inserts/deletes
            return false;
        }
        if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
            prevChange.originalEndLineNumber = originalLineNumber;
            prevChange.modifiedEndLineNumber = modifiedLineNumber;
            if (this.shouldComputeCharChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        return false;
    };
    DiffComputer.prototype._continueProcessingPredicate = function () {
        if (this.maximumRunTimeMs === 0) {
            return true;
        }
        var now = (new Date()).getTime();
        return now - this.computationStartTime < this.maximumRunTimeMs;
    };
    return DiffComputer;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js ***!
  \**********************************************************************************/
/*! exports provided: MirrorTextModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorTextModel", function() { return MirrorTextModel; });
/* harmony import */ var _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewModel/prefixSumComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var MirrorTextModel = /** @class */ (function () {
    function MirrorTextModel(uri, lines, eol, versionId) {
        this._uri = uri;
        this._lines = lines;
        this._eol = eol;
        this._versionId = versionId;
    }
    MirrorTextModel.prototype.dispose = function () {
        this._lines.length = 0;
    };
    MirrorTextModel.prototype.getText = function () {
        return this._lines.join(this._eol);
    };
    MirrorTextModel.prototype.onEvents = function (e) {
        if (e.eol && e.eol !== this._eol) {
            this._eol = e.eol;
            this._lineStarts = null;
        }
        // Update my lines
        var changes = e.changes;
        for (var i = 0, len = changes.length; i < len; i++) {
            var change = changes[i];
            this._acceptDeleteRange(change.range);
            this._acceptInsertText(new _core_position_js__WEBPACK_IMPORTED_MODULE_1__["Position"](change.range.startLineNumber, change.range.startColumn), change.text);
        }
        this._versionId = e.versionId;
    };
    MirrorTextModel.prototype._ensureLineStarts = function () {
        if (!this._lineStarts) {
            var eolLength = this._eol.length;
            var linesLength = this._lines.length;
            var lineStartValues = new Uint32Array(linesLength);
            for (var i = 0; i < linesLength; i++) {
                lineStartValues[i] = this._lines[i].length + eolLength;
            }
            this._lineStarts = new _viewModel_prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_0__["PrefixSumComputer"](lineStartValues);
        }
    };
    /**
     * All changes to a line's text go through this method
     */
    MirrorTextModel.prototype._setLineText = function (lineIndex, newValue) {
        this._lines[lineIndex] = newValue;
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.changeValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
        }
    };
    MirrorTextModel.prototype._acceptDeleteRange = function (range) {
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                // Nothing to delete
                return;
            }
            // Delete text on the affected line
            this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
                + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
            return;
        }
        // Take remaining text on last line and append it to remaining text on first line
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
            + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
        // Delete middle lines
        this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        }
    };
    MirrorTextModel.prototype._acceptInsertText = function (position, insertText) {
        if (insertText.length === 0) {
            // Nothing to insert
            return;
        }
        var insertLines = insertText.split(/\r\n|\r|\n/);
        if (insertLines.length === 1) {
            // Inserting text on one line
            this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
                + insertLines[0]
                + this._lines[position.lineNumber - 1].substring(position.column - 1));
            return;
        }
        // Append overflowing text from first line to the end of text to insert
        insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
        // Delete overflowing text from first line and insert text on first line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
            + insertLines[0]);
        // Insert new lines & store lengths
        var newLengths = new Uint32Array(insertLines.length - 1);
        for (var i = 1; i < insertLines.length; i++) {
            this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
            newLengths[i - 1] = insertLines[i].length + this._eol.length;
        }
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.insertValues(position.lineNumber, newLengths);
        }
    };
    return MirrorTextModel;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js ***!
  \*****************************************************************************/
/*! exports provided: USUAL_WORD_SEPARATORS, DEFAULT_WORD_REGEXP, ensureValidWordDefinition, getWordAtText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USUAL_WORD_SEPARATORS", function() { return USUAL_WORD_SEPARATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WORD_REGEXP", function() { return DEFAULT_WORD_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValidWordDefinition", function() { return ensureValidWordDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWordAtText", function() { return getWordAtText; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */
function createWordRegExp(allowInWords) {
    if (allowInWords === void 0) { allowInWords = ''; }
    var source = '(-?\\d*\\.\\d\\w*)|([^';
    for (var i = 0; i < USUAL_WORD_SEPARATORS.length; i++) {
        if (allowInWords.indexOf(USUAL_WORD_SEPARATORS[i]) >= 0) {
            continue;
        }
        source += '\\' + USUAL_WORD_SEPARATORS[i];
    }
    source += '\\s]+)';
    return new RegExp(source, 'g');
}
// catches numbers (including floating numbers) in the first group, and alphanum in the second
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
    var result = DEFAULT_WORD_REGEXP;
    if (wordDefinition && (wordDefinition instanceof RegExp)) {
        if (!wordDefinition.global) {
            var flags = 'g';
            if (wordDefinition.ignoreCase) {
                flags += 'i';
            }
            if (wordDefinition.multiline) {
                flags += 'm';
            }
            result = new RegExp(wordDefinition.source, flags);
        }
        else {
            result = wordDefinition;
        }
    }
    result.lastIndex = 0;
    return result;
}
function getWordAtPosFast(column, wordDefinition, text, textOffset) {
    // find whitespace enclosed text around column and match from there
    var pos = column - 1 - textOffset;
    var start = text.lastIndexOf(' ', pos - 1) + 1;
    var end = text.indexOf(' ', pos);
    if (end === -1) {
        end = text.length;
    }
    wordDefinition.lastIndex = start;
    var match;
    while (match = wordDefinition.exec(text)) {
        if (match.index <= pos && wordDefinition.lastIndex >= pos) {
            return {
                word: match[0],
                startColumn: textOffset + 1 + match.index,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtPosSlow(column, wordDefinition, text, textOffset) {
    // matches all words starting at the beginning
    // of the input until it finds a match that encloses
    // the desired column. slow but correct
    var pos = column - 1 - textOffset;
    wordDefinition.lastIndex = 0;
    var match;
    while (match = wordDefinition.exec(text)) {
        if (match.index > pos) {
            // |nW -> matched only after the pos
            return null;
        }
        else if (wordDefinition.lastIndex >= pos) {
            // W|W -> match encloses pos
            return {
                word: match[0],
                startColumn: textOffset + 1 + match.index,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtText(column, wordDefinition, text, textOffset) {
    // if `words` can contain whitespace character we have to use the slow variant
    // otherwise we use the fast variant of finding a word
    wordDefinition.lastIndex = 0;
    var match = wordDefinition.exec(text);
    if (!match) {
        return null;
    }
    // todo@joh the `match` could already be the (first) word
    var ret = match[0].indexOf(' ') >= 0
        // did match a word which contains a space character -> use slow word find
        ? getWordAtPosSlow(column, wordDefinition, text, textOffset)
        // sane word definition -> use fast word find
        : getWordAtPosFast(column, wordDefinition, text, textOffset);
    // both (getWordAtPosFast and getWordAtPosSlow) leave the wordDefinition-RegExp
    // in an undefined state and to not confuse other users of the wordDefinition
    // we reset the lastIndex
    wordDefinition.lastIndex = 0;
    return ret;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js ***!
  \*******************************************************************************/
/*! exports provided: computeLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLinks", function() { return computeLinks; });
/* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/characterClassifier.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js");
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var StateMachine = /** @class */ (function () {
    function StateMachine(edges) {
        var maxCharCode = 0;
        var maxState = 0 /* Invalid */;
        for (var i = 0, len = edges.length; i < len; i++) {
            var _a = edges[i], from = _a[0], chCode = _a[1], to = _a[2];
            if (chCode > maxCharCode) {
                maxCharCode = chCode;
            }
            if (from > maxState) {
                maxState = from;
            }
            if (to > maxState) {
                maxState = to;
            }
        }
        maxCharCode++;
        maxState++;
        var states = new _core_uint_js__WEBPACK_IMPORTED_MODULE_1__["Uint8Matrix"](maxState, maxCharCode, 0 /* Invalid */);
        for (var i = 0, len = edges.length; i < len; i++) {
            var _b = edges[i], from = _b[0], chCode = _b[1], to = _b[2];
            states.set(from, chCode, to);
        }
        this._states = states;
        this._maxCharCode = maxCharCode;
    }
    StateMachine.prototype.nextState = function (currentState, chCode) {
        if (chCode < 0 || chCode >= this._maxCharCode) {
            return 0 /* Invalid */;
        }
        return this._states.get(currentState, chCode);
    };
    return StateMachine;
}());
// State machine for http:// or https:// or file://
var _stateMachine = null;
function getStateMachine() {
    if (_stateMachine === null) {
        _stateMachine = new StateMachine([
            [1 /* Start */, 104 /* h */, 2 /* H */],
            [1 /* Start */, 72 /* H */, 2 /* H */],
            [1 /* Start */, 102 /* f */, 6 /* F */],
            [1 /* Start */, 70 /* F */, 6 /* F */],
            [2 /* H */, 116 /* t */, 3 /* HT */],
            [2 /* H */, 84 /* T */, 3 /* HT */],
            [3 /* HT */, 116 /* t */, 4 /* HTT */],
            [3 /* HT */, 84 /* T */, 4 /* HTT */],
            [4 /* HTT */, 112 /* p */, 5 /* HTTP */],
            [4 /* HTT */, 80 /* P */, 5 /* HTTP */],
            [5 /* HTTP */, 115 /* s */, 9 /* BeforeColon */],
            [5 /* HTTP */, 83 /* S */, 9 /* BeforeColon */],
            [5 /* HTTP */, 58 /* Colon */, 10 /* AfterColon */],
            [6 /* F */, 105 /* i */, 7 /* FI */],
            [6 /* F */, 73 /* I */, 7 /* FI */],
            [7 /* FI */, 108 /* l */, 8 /* FIL */],
            [7 /* FI */, 76 /* L */, 8 /* FIL */],
            [8 /* FIL */, 101 /* e */, 9 /* BeforeColon */],
            [8 /* FIL */, 69 /* E */, 9 /* BeforeColon */],
            [9 /* BeforeColon */, 58 /* Colon */, 10 /* AfterColon */],
            [10 /* AfterColon */, 47 /* Slash */, 11 /* AlmostThere */],
            [11 /* AlmostThere */, 47 /* Slash */, 12 /* End */],
        ]);
    }
    return _stateMachine;
}
var _classifier = null;
function getClassifier() {
    if (_classifier === null) {
        _classifier = new _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__["CharacterClassifier"](0 /* None */);
        var FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…';
        for (var i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
            _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1 /* ForceTermination */);
        }
        var CANNOT_END_WITH_CHARACTERS = '.,;';
        for (var i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
            _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(i), 2 /* CannotEndIn */);
        }
    }
    return _classifier;
}
var LinkComputer = /** @class */ (function () {
    function LinkComputer() {
    }
    LinkComputer._createLink = function (classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
        // Do not allow to end link in certain characters...
        var lastIncludedCharIndex = linkEndIndex - 1;
        do {
            var chCode = line.charCodeAt(lastIncludedCharIndex);
            var chClass = classifier.get(chCode);
            if (chClass !== 2 /* CannotEndIn */) {
                break;
            }
            lastIncludedCharIndex--;
        } while (lastIncludedCharIndex > linkBeginIndex);
        // Handle links enclosed in parens, square brackets and curlys.
        if (linkBeginIndex > 0) {
            var charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
            var lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
            if ((charCodeBeforeLink === 40 /* OpenParen */ && lastCharCodeInLink === 41 /* CloseParen */)
                || (charCodeBeforeLink === 91 /* OpenSquareBracket */ && lastCharCodeInLink === 93 /* CloseSquareBracket */)
                || (charCodeBeforeLink === 123 /* OpenCurlyBrace */ && lastCharCodeInLink === 125 /* CloseCurlyBrace */)) {
                // Do not end in ) if ( is before the link start
                // Do not end in ] if [ is before the link start
                // Do not end in } if { is before the link start
                lastIncludedCharIndex--;
            }
        }
        return {
            range: {
                startLineNumber: lineNumber,
                startColumn: linkBeginIndex + 1,
                endLineNumber: lineNumber,
                endColumn: lastIncludedCharIndex + 2
            },
            url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
        };
    };
    LinkComputer.computeLinks = function (model) {
        var stateMachine = getStateMachine();
        var classifier = getClassifier();
        var result = [];
        for (var i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
            var line = model.getLineContent(i);
            var len = line.length;
            var j = 0;
            var linkBeginIndex = 0;
            var linkBeginChCode = 0;
            var state = 1 /* Start */;
            var hasOpenParens = false;
            var hasOpenSquareBracket = false;
            var hasOpenCurlyBracket = false;
            while (j < len) {
                var resetStateMachine = false;
                var chCode = line.charCodeAt(j);
                if (state === 13 /* Accept */) {
                    var chClass = void 0;
                    switch (chCode) {
                        case 40 /* OpenParen */:
                            hasOpenParens = true;
                            chClass = 0 /* None */;
                            break;
                        case 41 /* CloseParen */:
                            chClass = (hasOpenParens ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 91 /* OpenSquareBracket */:
                            hasOpenSquareBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 93 /* CloseSquareBracket */:
                            chClass = (hasOpenSquareBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        case 123 /* OpenCurlyBrace */:
                            hasOpenCurlyBracket = true;
                            chClass = 0 /* None */;
                            break;
                        case 125 /* CloseCurlyBrace */:
                            chClass = (hasOpenCurlyBracket ? 0 /* None */ : 1 /* ForceTermination */);
                            break;
                        /* The following three rules make it that ' or " or ` are allowed inside links if the link began with a different one */
                        case 39 /* SingleQuote */:
                            chClass = (linkBeginChCode === 34 /* DoubleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 34 /* DoubleQuote */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 96 /* BackTick */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        case 96 /* BackTick */:
                            chClass = (linkBeginChCode === 39 /* SingleQuote */ || linkBeginChCode === 34 /* DoubleQuote */) ? 0 /* None */ : 1 /* ForceTermination */;
                            break;
                        default:
                            chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                        resetStateMachine = true;
                    }
                }
                else if (state === 12 /* End */) {
                    var chClass = classifier.get(chCode);
                    // Check if character terminates link
                    if (chClass === 1 /* ForceTermination */) {
                        resetStateMachine = true;
                    }
                    else {
                        state = 13 /* Accept */;
                    }
                }
                else {
                    state = stateMachine.nextState(state, chCode);
                    if (state === 0 /* Invalid */) {
                        resetStateMachine = true;
                    }
                }
                if (resetStateMachine) {
                    state = 1 /* Start */;
                    hasOpenParens = false;
                    hasOpenSquareBracket = false;
                    hasOpenCurlyBracket = false;
                    // Record where the link started
                    linkBeginIndex = j + 1;
                    linkBeginChCode = chCode;
                }
                j++;
            }
            if (state === 13 /* Accept */) {
                result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
            }
        }
        return result;
    };
    return LinkComputer;
}());
/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */
function computeLinks(model) {
    if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
        // Unknown caller!
        return [];
    }
    return LinkComputer.computeLinks(model);
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js ***!
  \*************************************************************************************************/
/*! exports provided: BasicInplaceReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInplaceReplace", function() { return BasicInplaceReplace; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var BasicInplaceReplace = /** @class */ (function () {
    function BasicInplaceReplace() {
        this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
        ];
    }
    BasicInplaceReplace.prototype.navigateValueSet = function (range1, text1, range2, text2, up) {
        if (range1 && text1) {
            var result = this.doNavigateValueSet(text1, up);
            if (result) {
                return {
                    range: range1,
                    value: result
                };
            }
        }
        if (range2 && text2) {
            var result = this.doNavigateValueSet(text2, up);
            if (result) {
                return {
                    range: range2,
                    value: result
                };
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.doNavigateValueSet = function (text, up) {
        var numberResult = this.numberReplace(text, up);
        if (numberResult !== null) {
            return numberResult;
        }
        return this.textReplace(text, up);
    };
    BasicInplaceReplace.prototype.numberReplace = function (value, up) {
        var precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
        var n1 = Number(value);
        var n2 = parseFloat(value);
        if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
            if (n1 === 0 && !up) {
                return null; // don't do negative
                //			} else if(n1 === 9 && up) {
                //				return null; // don't insert 10 into a number
            }
            else {
                n1 = Math.floor(n1 * precision);
                n1 += up ? precision : -precision;
                return String(n1 / precision);
            }
        }
        return null;
    };
    BasicInplaceReplace.prototype.textReplace = function (value, up) {
        return this.valueSetsReplace(this._defaultValueSet, value, up);
    };
    BasicInplaceReplace.prototype.valueSetsReplace = function (valueSets, value, up) {
        var result = null;
        for (var i = 0, len = valueSets.length; result === null && i < len; i++) {
            result = this.valueSetReplace(valueSets[i], value, up);
        }
        return result;
    };
    BasicInplaceReplace.prototype.valueSetReplace = function (valueSet, value, up) {
        var idx = valueSet.indexOf(value);
        if (idx >= 0) {
            idx += up ? +1 : -1;
            if (idx < 0) {
                idx = valueSet.length - 1;
            }
            else {
                idx %= valueSet.length;
            }
            return valueSet[idx];
        }
        return null;
    };
    BasicInplaceReplace.INSTANCE = new BasicInplaceReplace();
    return BasicInplaceReplace;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js ***!
  \****************************************************************************************/
/*! exports provided: BaseEditorSimpleWorker, EditorSimpleWorkerImpl, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditorSimpleWorker", function() { return BaseEditorSimpleWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorSimpleWorkerImpl", function() { return EditorSimpleWorkerImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/* harmony import */ var _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/winjs.base.js */ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../diff/diffComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/diff/diffComputer.js");
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/common/diff/diff.js */ "./node_modules/monaco-editor/esm/vs/base/common/diff/diff.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/mirrorTextModel.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/mirrorTextModel.js");
/* harmony import */ var _modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modes/linkComputer.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/linkComputer.js");
/* harmony import */ var _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modes/supports/inplaceReplaceSupport.js */ "./node_modules/monaco-editor/esm/vs/editor/common/modes/supports/inplaceReplaceSupport.js");
/* harmony import */ var _model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/wordHelper.js */ "./node_modules/monaco-editor/esm/vs/editor/common/model/wordHelper.js");
/* harmony import */ var _standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../standalone/standaloneBase.js */ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js");
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../base/common/platform.js */ "./node_modules/monaco-editor/esm/vs/base/common/platform.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();












/**
 * @internal
 */
var MirrorModel = /** @class */ (function (_super) {
    __extends(MirrorModel, _super);
    function MirrorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MirrorModel.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "version", {
        get: function () {
            return this._versionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MirrorModel.prototype, "eol", {
        get: function () {
            return this._eol;
        },
        enumerable: true,
        configurable: true
    });
    MirrorModel.prototype.getValue = function () {
        return this.getText();
    };
    MirrorModel.prototype.getLinesContent = function () {
        return this._lines.slice(0);
    };
    MirrorModel.prototype.getLineCount = function () {
        return this._lines.length;
    };
    MirrorModel.prototype.getLineContent = function (lineNumber) {
        return this._lines[lineNumber - 1];
    };
    MirrorModel.prototype.getWordAtPosition = function (position, wordDefinition) {
        var wordAtText = Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["getWordAtText"])(position.column, Object(_model_wordHelper_js__WEBPACK_IMPORTED_MODULE_9__["ensureValidWordDefinition"])(wordDefinition), this._lines[position.lineNumber - 1], 0);
        if (wordAtText) {
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_2__["Range"](position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
        }
        return null;
    };
    MirrorModel.prototype.getWordUntilPosition = function (position, wordDefinition) {
        var wordAtPosition = this.getWordAtPosition(position, wordDefinition);
        if (!wordAtPosition) {
            return {
                word: '',
                startColumn: position.column,
                endColumn: position.column
            };
        }
        return {
            word: this._lines[position.lineNumber - 1].substring(wordAtPosition.startColumn - 1, position.column - 1),
            startColumn: wordAtPosition.startColumn,
            endColumn: position.column
        };
    };
    MirrorModel.prototype.createWordIterator = function (wordDefinition) {
        var _this = this;
        var obj = {
            done: false,
            value: ''
        };
        var lineNumber = 0;
        var lineText;
        var wordRangesIdx = 0;
        var wordRanges = [];
        var next = function () {
            if (wordRangesIdx < wordRanges.length) {
                obj.done = false;
                obj.value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                wordRangesIdx += 1;
            }
            else if (lineNumber >= _this._lines.length) {
                obj.done = true;
                obj.value = undefined;
            }
            else {
                lineText = _this._lines[lineNumber];
                wordRanges = _this._wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
                return next();
            }
            return obj;
        };
        return { next: next };
    };
    MirrorModel.prototype._wordenize = function (content, wordDefinition) {
        var result = [];
        var match;
        wordDefinition.lastIndex = 0; // reset lastIndex just to be sure
        while (match = wordDefinition.exec(content)) {
            if (match[0].length === 0) {
                // it did match the empty string
                break;
            }
            result.push({ start: match.index, end: match.index + match[0].length });
        }
        return result;
    };
    MirrorModel.prototype.getValueInRange = function (range) {
        range = this._validateRange(range);
        if (range.startLineNumber === range.endLineNumber) {
            return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
        }
        var lineEnding = this._eol;
        var startLineIndex = range.startLineNumber - 1;
        var endLineIndex = range.endLineNumber - 1;
        var resultLines = [];
        resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
        for (var i = startLineIndex + 1; i < endLineIndex; i++) {
            resultLines.push(this._lines[i]);
        }
        resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
        return resultLines.join(lineEnding);
    };
    MirrorModel.prototype.offsetAt = function (position) {
        position = this._validatePosition(position);
        this._ensureLineStarts();
        return this._lineStarts.getAccumulatedValue(position.lineNumber - 2) + (position.column - 1);
    };
    MirrorModel.prototype.positionAt = function (offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        this._ensureLineStarts();
        var out = this._lineStarts.getIndexOf(offset);
        var lineLength = this._lines[out.index].length;
        // Ensure we return a valid position
        return {
            lineNumber: 1 + out.index,
            column: 1 + Math.min(out.remainder, lineLength)
        };
    };
    MirrorModel.prototype._validateRange = function (range) {
        var start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
        var end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
        if (start.lineNumber !== range.startLineNumber
            || start.column !== range.startColumn
            || end.lineNumber !== range.endLineNumber
            || end.column !== range.endColumn) {
            return {
                startLineNumber: start.lineNumber,
                startColumn: start.column,
                endLineNumber: end.lineNumber,
                endColumn: end.column
            };
        }
        return range;
    };
    MirrorModel.prototype._validatePosition = function (position) {
        if (!_core_position_js__WEBPACK_IMPORTED_MODULE_5__["Position"].isIPosition(position)) {
            throw new Error('bad position');
        }
        var lineNumber = position.lineNumber, column = position.column;
        var hasChanged = false;
        if (lineNumber < 1) {
            lineNumber = 1;
            column = 1;
            hasChanged = true;
        }
        else if (lineNumber > this._lines.length) {
            lineNumber = this._lines.length;
            column = this._lines[lineNumber - 1].length + 1;
            hasChanged = true;
        }
        else {
            var maxCharacter = this._lines[lineNumber - 1].length + 1;
            if (column < 1) {
                column = 1;
                hasChanged = true;
            }
            else if (column > maxCharacter) {
                column = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        else {
            return { lineNumber: lineNumber, column: column };
        }
    };
    return MirrorModel;
}(_model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_6__["MirrorTextModel"]));
/**
 * @internal
 */
var BaseEditorSimpleWorker = /** @class */ (function () {
    function BaseEditorSimpleWorker(foreignModuleFactory) {
        this._foreignModuleFactory = foreignModuleFactory;
        this._foreignModule = null;
    }
    // ---- BEGIN diff --------------------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.computeDiff = function (originalUrl, modifiedUrl, ignoreTrimWhitespace) {
        var original = this._getModel(originalUrl);
        var modified = this._getModel(modifiedUrl);
        if (!original || !modified) {
            return null;
        }
        var originalLines = original.getLinesContent();
        var modifiedLines = modified.getLinesContent();
        var diffComputer = new _diff_diffComputer_js__WEBPACK_IMPORTED_MODULE_3__["DiffComputer"](originalLines, modifiedLines, {
            shouldComputeCharChanges: true,
            shouldPostProcessCharChanges: true,
            shouldIgnoreTrimWhitespace: ignoreTrimWhitespace,
            shouldMakePrettyDiff: true
        });
        return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(diffComputer.computeDiff());
    };
    BaseEditorSimpleWorker.prototype.computeMoreMinimalEdits = function (modelUrl, edits) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(edits);
        }
        var result = [];
        var lastEol;
        for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
            var _a = edits_1[_i], range = _a.range, text = _a.text, eol = _a.eol;
            if (typeof eol === 'number') {
                lastEol = eol;
            }
            if (!range) {
                // eol-change only
                continue;
            }
            var original = model.getValueInRange(range);
            text = text.replace(/\r\n|\n|\r/g, model.eol);
            if (original === text) {
                // noop
                continue;
            }
            // make sure diff won't take too long
            if (Math.max(text.length, original.length) > BaseEditorSimpleWorker._diffLimit) {
                result.push({ range: range, text: text });
                continue;
            }
            // compute diff between original and edit.text
            var changes = Object(_base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__["stringDiff"])(original, text, false);
            var editOffset = model.offsetAt(_core_range_js__WEBPACK_IMPORTED_MODULE_2__["Range"].lift(range).getStartPosition());
            for (var _b = 0, changes_1 = changes; _b < changes_1.length; _b++) {
                var change = changes_1[_b];
                var start = model.positionAt(editOffset + change.originalStart);
                var end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                var newEdit = {
                    text: text.substr(change.modifiedStart, change.modifiedLength),
                    range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                };
                if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                    result.push(newEdit);
                }
            }
        }
        if (typeof lastEol === 'number') {
            result.push({ eol: lastEol, text: undefined, range: undefined });
        }
        return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(result);
    };
    // ---- END minimal edits ---------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.computeLinks = function (modelUrl) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return null;
        }
        return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(Object(_modes_linkComputer_js__WEBPACK_IMPORTED_MODULE_7__["computeLinks"])(model));
    };
    BaseEditorSimpleWorker.prototype.textualSuggest = function (modelUrl, position, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (model) {
            var suggestions = [];
            var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
            var currentWord = model.getWordUntilPosition(position, wordDefRegExp).word;
            var seen = Object.create(null);
            seen[currentWord] = true;
            for (var iter = model.createWordIterator(wordDefRegExp), e = iter.next(); !e.done && suggestions.length <= BaseEditorSimpleWorker._suggestionsLimit; e = iter.next()) {
                var word = e.value;
                if (seen[word]) {
                    continue;
                }
                seen[word] = true;
                if (!isNaN(Number(word))) {
                    continue;
                }
                suggestions.push({
                    type: 'text',
                    label: word,
                    insertText: word,
                    noAutoAccept: true,
                    overwriteBefore: currentWord.length
                });
            }
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as({ suggestions: suggestions });
        }
        return undefined;
    };
    // ---- END suggest --------------------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.navigateValueSet = function (modelUrl, range, up, wordDef, wordDefFlags) {
        var model = this._getModel(modelUrl);
        if (!model) {
            return null;
        }
        var wordDefRegExp = new RegExp(wordDef, wordDefFlags);
        if (range.startColumn === range.endColumn) {
            range = {
                startLineNumber: range.startLineNumber,
                startColumn: range.startColumn,
                endLineNumber: range.endLineNumber,
                endColumn: range.endColumn + 1
            };
        }
        var selectionText = model.getValueInRange(range);
        var wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
        var word = null;
        if (wordRange !== null) {
            word = model.getValueInRange(wordRange);
        }
        var result = _modes_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_8__["BasicInplaceReplace"].INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
        return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(result);
    };
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    BaseEditorSimpleWorker.prototype.loadForeignModule = function (moduleId, createData) {
        var _this = this;
        var ctx = {
            getMirrorModels: function () {
                return _this._getModels();
            }
        };
        if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(ctx, createData);
            // static foreing module
            var methods = [];
            for (var prop in this._foreignModule) {
                if (typeof this._foreignModule[prop] === 'function') {
                    methods.push(prop);
                }
            }
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(methods);
        }
        // ESM-comment-begin
        // 		return new TPromise<any>((c, e) => {
        // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
        // 				this._foreignModule = foreignModule.create(ctx, createData);
        // 
        // 				let methods: string[] = [];
        // 				for (let prop in this._foreignModule) {
        // 					if (typeof this._foreignModule[prop] === 'function') {
        // 						methods.push(prop);
        // 					}
        // 				}
        // 
        // 				c(methods);
        // 
        // 			}, e);
        // 		});
        // ESM-comment-end
        // ESM-uncomment-begin
        return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].wrapError(new Error("Unexpected usage"));
        // ESM-uncomment-end
    };
    // foreign method request
    BaseEditorSimpleWorker.prototype.fmr = function (method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].wrapError(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].as(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_1__["TPromise"].wrapError(e);
        }
    };
    // ---- END diff --------------------------------------------------------------------------
    // ---- BEGIN minimal edits ---------------------------------------------------------------
    BaseEditorSimpleWorker._diffLimit = 10000;
    // ---- BEGIN suggest --------------------------------------------------------------------------
    BaseEditorSimpleWorker._suggestionsLimit = 10000;
    return BaseEditorSimpleWorker;
}());

/**
 * @internal
 */
var EditorSimpleWorkerImpl = /** @class */ (function (_super) {
    __extends(EditorSimpleWorkerImpl, _super);
    function EditorSimpleWorkerImpl(foreignModuleFactory) {
        var _this = _super.call(this, foreignModuleFactory) || this;
        _this._models = Object.create(null);
        return _this;
    }
    EditorSimpleWorkerImpl.prototype.dispose = function () {
        this._models = Object.create(null);
    };
    EditorSimpleWorkerImpl.prototype._getModel = function (uri) {
        return this._models[uri];
    };
    EditorSimpleWorkerImpl.prototype._getModels = function () {
        var _this = this;
        var all = [];
        Object.keys(this._models).forEach(function (key) { return all.push(_this._models[key]); });
        return all;
    };
    EditorSimpleWorkerImpl.prototype.acceptNewModel = function (data) {
        this._models[data.url] = new MirrorModel(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_0__["default"].parse(data.url), data.lines, data.EOL, data.versionId);
    };
    EditorSimpleWorkerImpl.prototype.acceptModelChanged = function (strURL, e) {
        if (!this._models[strURL]) {
            return;
        }
        var model = this._models[strURL];
        model.onEvents(e);
    };
    EditorSimpleWorkerImpl.prototype.acceptRemovedModel = function (strURL) {
        if (!this._models[strURL]) {
            return;
        }
        delete this._models[strURL];
    };
    return EditorSimpleWorkerImpl;
}(BaseEditorSimpleWorker));

/**
 * Called on the worker side
 * @internal
 */
function create() {
    return new EditorSimpleWorkerImpl(null);
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_11__["globals"].monaco = Object(_standalone_standaloneBase_js__WEBPACK_IMPORTED_MODULE_10__["createMonacoBaseAPI"])();
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js ***!
  \**************************************************************************************/
/*! exports provided: MarkerTag, MarkerSeverity, KeyMod, KeyCode, createMonacoBaseAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerTag", function() { return MarkerTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerSeverity", function() { return MarkerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyMod", function() { return KeyMod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMonacoBaseAPI", function() { return createMonacoBaseAPI; });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../base/common/event.js */ "./node_modules/monaco-editor/esm/vs/base/common/event.js");
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../base/common/keyCodes.js */ "./node_modules/monaco-editor/esm/vs/base/common/keyCodes.js");
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/position.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/position.js");
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/range.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/range.js");
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/selection.js");
/* harmony import */ var _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/common/winjs.base.js */ "./node_modules/monaco-editor/esm/vs/base/common/winjs.base.js");
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../base/common/cancellation.js */ "./node_modules/monaco-editor/esm/vs/base/common/cancellation.js");
/* harmony import */ var _core_token_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/token.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/token.js");
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../base/common/uri.js */ "./node_modules/monaco-editor/esm/vs/base/common/uri.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










// --------------------------------------------
// This is repeated here so it can be exported
// because TS inlines const enums
// --------------------------------------------
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag || (MarkerTag = {}));
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
// --------------------------------------------
// This is repeated here so it can be exported
// because TS inlines const enums
// --------------------------------------------
var KeyMod = /** @class */ (function () {
    function KeyMod() {
    }
    KeyMod.chord = function (firstPart, secondPart) {
        return Object(_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_1__["KeyChord"])(firstPart, secondPart);
    };
    KeyMod.CtrlCmd = 2048 /* CtrlCmd */;
    KeyMod.Shift = 1024 /* Shift */;
    KeyMod.Alt = 512 /* Alt */;
    KeyMod.WinCtrl = 256 /* WinCtrl */;
    return KeyMod;
}());

// --------------------------------------------
// This is repeated here so it can be exported
// because TS inlines const enums
// --------------------------------------------
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
var KeyCode;
(function (KeyCode) {
    /**
     * Placed first to cover the 0 value of the enum.
     */
    KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
    KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
    KeyCode[KeyCode["Tab"] = 2] = "Tab";
    KeyCode[KeyCode["Enter"] = 3] = "Enter";
    KeyCode[KeyCode["Shift"] = 4] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 6] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
    KeyCode[KeyCode["Escape"] = 9] = "Escape";
    KeyCode[KeyCode["Space"] = 10] = "Space";
    KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
    KeyCode[KeyCode["End"] = 13] = "End";
    KeyCode[KeyCode["Home"] = 14] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 19] = "Insert";
    KeyCode[KeyCode["Delete"] = 20] = "Delete";
    KeyCode[KeyCode["KEY_0"] = 21] = "KEY_0";
    KeyCode[KeyCode["KEY_1"] = 22] = "KEY_1";
    KeyCode[KeyCode["KEY_2"] = 23] = "KEY_2";
    KeyCode[KeyCode["KEY_3"] = 24] = "KEY_3";
    KeyCode[KeyCode["KEY_4"] = 25] = "KEY_4";
    KeyCode[KeyCode["KEY_5"] = 26] = "KEY_5";
    KeyCode[KeyCode["KEY_6"] = 27] = "KEY_6";
    KeyCode[KeyCode["KEY_7"] = 28] = "KEY_7";
    KeyCode[KeyCode["KEY_8"] = 29] = "KEY_8";
    KeyCode[KeyCode["KEY_9"] = 30] = "KEY_9";
    KeyCode[KeyCode["KEY_A"] = 31] = "KEY_A";
    KeyCode[KeyCode["KEY_B"] = 32] = "KEY_B";
    KeyCode[KeyCode["KEY_C"] = 33] = "KEY_C";
    KeyCode[KeyCode["KEY_D"] = 34] = "KEY_D";
    KeyCode[KeyCode["KEY_E"] = 35] = "KEY_E";
    KeyCode[KeyCode["KEY_F"] = 36] = "KEY_F";
    KeyCode[KeyCode["KEY_G"] = 37] = "KEY_G";
    KeyCode[KeyCode["KEY_H"] = 38] = "KEY_H";
    KeyCode[KeyCode["KEY_I"] = 39] = "KEY_I";
    KeyCode[KeyCode["KEY_J"] = 40] = "KEY_J";
    KeyCode[KeyCode["KEY_K"] = 41] = "KEY_K";
    KeyCode[KeyCode["KEY_L"] = 42] = "KEY_L";
    KeyCode[KeyCode["KEY_M"] = 43] = "KEY_M";
    KeyCode[KeyCode["KEY_N"] = 44] = "KEY_N";
    KeyCode[KeyCode["KEY_O"] = 45] = "KEY_O";
    KeyCode[KeyCode["KEY_P"] = 46] = "KEY_P";
    KeyCode[KeyCode["KEY_Q"] = 47] = "KEY_Q";
    KeyCode[KeyCode["KEY_R"] = 48] = "KEY_R";
    KeyCode[KeyCode["KEY_S"] = 49] = "KEY_S";
    KeyCode[KeyCode["KEY_T"] = 50] = "KEY_T";
    KeyCode[KeyCode["KEY_U"] = 51] = "KEY_U";
    KeyCode[KeyCode["KEY_V"] = 52] = "KEY_V";
    KeyCode[KeyCode["KEY_W"] = 53] = "KEY_W";
    KeyCode[KeyCode["KEY_X"] = 54] = "KEY_X";
    KeyCode[KeyCode["KEY_Y"] = 55] = "KEY_Y";
    KeyCode[KeyCode["KEY_Z"] = 56] = "KEY_Z";
    KeyCode[KeyCode["Meta"] = 57] = "Meta";
    KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
    KeyCode[KeyCode["F1"] = 59] = "F1";
    KeyCode[KeyCode["F2"] = 60] = "F2";
    KeyCode[KeyCode["F3"] = 61] = "F3";
    KeyCode[KeyCode["F4"] = 62] = "F4";
    KeyCode[KeyCode["F5"] = 63] = "F5";
    KeyCode[KeyCode["F6"] = 64] = "F6";
    KeyCode[KeyCode["F7"] = 65] = "F7";
    KeyCode[KeyCode["F8"] = 66] = "F8";
    KeyCode[KeyCode["F9"] = 67] = "F9";
    KeyCode[KeyCode["F10"] = 68] = "F10";
    KeyCode[KeyCode["F11"] = 69] = "F11";
    KeyCode[KeyCode["F12"] = 70] = "F12";
    KeyCode[KeyCode["F13"] = 71] = "F13";
    KeyCode[KeyCode["F14"] = 72] = "F14";
    KeyCode[KeyCode["F15"] = 73] = "F15";
    KeyCode[KeyCode["F16"] = 74] = "F16";
    KeyCode[KeyCode["F17"] = 75] = "F17";
    KeyCode[KeyCode["F18"] = 76] = "F18";
    KeyCode[KeyCode["F19"] = 77] = "F19";
    KeyCode[KeyCode["NumLock"] = 78] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 79] = "ScrollLock";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ';:' key
     */
    KeyCode[KeyCode["US_SEMICOLON"] = 80] = "US_SEMICOLON";
    /**
     * For any country/region, the '+' key
     * For the US standard keyboard, the '=+' key
     */
    KeyCode[KeyCode["US_EQUAL"] = 81] = "US_EQUAL";
    /**
     * For any country/region, the ',' key
     * For the US standard keyboard, the ',<' key
     */
    KeyCode[KeyCode["US_COMMA"] = 82] = "US_COMMA";
    /**
     * For any country/region, the '-' key
     * For the US standard keyboard, the '-_' key
     */
    KeyCode[KeyCode["US_MINUS"] = 83] = "US_MINUS";
    /**
     * For any country/region, the '.' key
     * For the US standard keyboard, the '.>' key
     */
    KeyCode[KeyCode["US_DOT"] = 84] = "US_DOT";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '/?' key
     */
    KeyCode[KeyCode["US_SLASH"] = 85] = "US_SLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '`~' key
     */
    KeyCode[KeyCode["US_BACKTICK"] = 86] = "US_BACKTICK";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '[{' key
     */
    KeyCode[KeyCode["US_OPEN_SQUARE_BRACKET"] = 87] = "US_OPEN_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '\|' key
     */
    KeyCode[KeyCode["US_BACKSLASH"] = 88] = "US_BACKSLASH";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ']}' key
     */
    KeyCode[KeyCode["US_CLOSE_SQUARE_BRACKET"] = 89] = "US_CLOSE_SQUARE_BRACKET";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ''"' key
     */
    KeyCode[KeyCode["US_QUOTE"] = 90] = "US_QUOTE";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     */
    KeyCode[KeyCode["OEM_8"] = 91] = "OEM_8";
    /**
     * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
     */
    KeyCode[KeyCode["OEM_102"] = 92] = "OEM_102";
    KeyCode[KeyCode["NUMPAD_0"] = 93] = "NUMPAD_0";
    KeyCode[KeyCode["NUMPAD_1"] = 94] = "NUMPAD_1";
    KeyCode[KeyCode["NUMPAD_2"] = 95] = "NUMPAD_2";
    KeyCode[KeyCode["NUMPAD_3"] = 96] = "NUMPAD_3";
    KeyCode[KeyCode["NUMPAD_4"] = 97] = "NUMPAD_4";
    KeyCode[KeyCode["NUMPAD_5"] = 98] = "NUMPAD_5";
    KeyCode[KeyCode["NUMPAD_6"] = 99] = "NUMPAD_6";
    KeyCode[KeyCode["NUMPAD_7"] = 100] = "NUMPAD_7";
    KeyCode[KeyCode["NUMPAD_8"] = 101] = "NUMPAD_8";
    KeyCode[KeyCode["NUMPAD_9"] = 102] = "NUMPAD_9";
    KeyCode[KeyCode["NUMPAD_MULTIPLY"] = 103] = "NUMPAD_MULTIPLY";
    KeyCode[KeyCode["NUMPAD_ADD"] = 104] = "NUMPAD_ADD";
    KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 105] = "NUMPAD_SEPARATOR";
    KeyCode[KeyCode["NUMPAD_SUBTRACT"] = 106] = "NUMPAD_SUBTRACT";
    KeyCode[KeyCode["NUMPAD_DECIMAL"] = 107] = "NUMPAD_DECIMAL";
    KeyCode[KeyCode["NUMPAD_DIVIDE"] = 108] = "NUMPAD_DIVIDE";
    /**
     * Cover all key codes when IME is processing input.
     */
    KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 109] = "KEY_IN_COMPOSITION";
    KeyCode[KeyCode["ABNT_C1"] = 110] = "ABNT_C1";
    KeyCode[KeyCode["ABNT_C2"] = 111] = "ABNT_C2";
    /**
     * Placed last to cover the length of the enum.
     * Please do not depend on this value!
     */
    KeyCode[KeyCode["MAX_VALUE"] = 112] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));
function createMonacoBaseAPI() {
    return {
        editor: undefined,
        languages: undefined,
        CancellationTokenSource: _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_6__["CancellationTokenSource"],
        Emitter: _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__["Emitter"],
        KeyCode: KeyCode,
        KeyMod: KeyMod,
        Position: _core_position_js__WEBPACK_IMPORTED_MODULE_2__["Position"],
        Range: _core_range_js__WEBPACK_IMPORTED_MODULE_3__["Range"],
        Selection: _core_selection_js__WEBPACK_IMPORTED_MODULE_4__["Selection"],
        SelectionDirection: _core_selection_js__WEBPACK_IMPORTED_MODULE_4__["SelectionDirection"],
        MarkerSeverity: MarkerSeverity,
        MarkerTag: MarkerTag,
        Promise: _base_common_winjs_base_js__WEBPACK_IMPORTED_MODULE_5__["TPromise"],
        Uri: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_8__["default"],
        Token: _core_token_js__WEBPACK_IMPORTED_MODULE_7__["Token"]
    };
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/common/viewModel/prefixSumComputer.js ***!
  \****************************************************************************************/
/*! exports provided: PrefixSumIndexOfResult, PrefixSumComputer, PrefixSumComputerWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumIndexOfResult", function() { return PrefixSumIndexOfResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputer", function() { return PrefixSumComputer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixSumComputerWithCache", function() { return PrefixSumComputerWithCache; });
/* harmony import */ var _core_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/uint.js */ "./node_modules/monaco-editor/esm/vs/editor/common/core/uint.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var PrefixSumIndexOfResult = /** @class */ (function () {
    function PrefixSumIndexOfResult(index, remainder) {
        this.index = index;
        this.remainder = remainder;
    }
    return PrefixSumIndexOfResult;
}());

var PrefixSumComputer = /** @class */ (function () {
    function PrefixSumComputer(values) {
        this.values = values;
        this.prefixSum = new Uint32Array(values.length);
        this.prefixSumValidIndex = new Int32Array(1);
        this.prefixSumValidIndex[0] = -1;
    }
    PrefixSumComputer.prototype.getCount = function () {
        return this.values.length;
    };
    PrefixSumComputer.prototype.insertValues = function (insertIndex, insertValues) {
        insertIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(insertIndex);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        var insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length + insertValuesLen);
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = new Uint32Array(this.values.length);
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.changeValue = function (index, value) {
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        value = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    };
    PrefixSumComputer.prototype.removeValues = function (startIndex, cnt) {
        startIndex = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(startIndex);
        cnt = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(cnt);
        var oldValues = this.values;
        var oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        var maxCnt = oldValues.length - startIndex;
        if (cnt >= maxCnt) {
            cnt = maxCnt;
        }
        if (cnt === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length - cnt);
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + cnt), startIndex);
        this.prefixSum = new Uint32Array(this.values.length);
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    };
    PrefixSumComputer.prototype.getTotalValue = function () {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getAccumulatedValue(this.values.length - 1);
    };
    PrefixSumComputer.prototype.getAccumulatedValue = function (index) {
        if (index < 0) {
            return 0;
        }
        index = Object(_core_uint_js__WEBPACK_IMPORTED_MODULE_0__["toUint32"])(index);
        return this._getAccumulatedValue(index);
    };
    PrefixSumComputer.prototype._getAccumulatedValue = function (index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        var startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (var i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    };
    PrefixSumComputer.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        // Compute all sums (to get a fully valid prefixSum)
        this.getTotalValue();
        var low = 0;
        var high = this.values.length - 1;
        var mid;
        var midStop;
        var midStart;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (accumulatedValue < midStart) {
                high = mid - 1;
            }
            else if (accumulatedValue >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return new PrefixSumIndexOfResult(mid, accumulatedValue - midStart);
    };
    return PrefixSumComputer;
}());

var PrefixSumComputerWithCache = /** @class */ (function () {
    function PrefixSumComputerWithCache(values) {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
        this._actual = new PrefixSumComputer(values);
        this._bustCache();
    }
    PrefixSumComputerWithCache.prototype._bustCache = function () {
        this._cacheAccumulatedValueStart = 0;
        this._cache = null;
    };
    PrefixSumComputerWithCache.prototype.insertValues = function (insertIndex, insertValues) {
        if (this._actual.insertValues(insertIndex, insertValues)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.changeValue = function (index, value) {
        if (this._actual.changeValue(index, value)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.removeValues = function (startIndex, cnt) {
        if (this._actual.removeValues(startIndex, cnt)) {
            this._bustCache();
        }
    };
    PrefixSumComputerWithCache.prototype.getTotalValue = function () {
        return this._actual.getTotalValue();
    };
    PrefixSumComputerWithCache.prototype.getAccumulatedValue = function (index) {
        return this._actual.getAccumulatedValue(index);
    };
    PrefixSumComputerWithCache.prototype.getIndexOf = function (accumulatedValue) {
        accumulatedValue = Math.floor(accumulatedValue); //@perf
        if (this._cache !== null) {
            var cacheIndex = accumulatedValue - this._cacheAccumulatedValueStart;
            if (cacheIndex >= 0 && cacheIndex < this._cache.length) {
                // Cache hit!
                return this._cache[cacheIndex];
            }
        }
        // Cache miss!
        return this._actual.getIndexOf(accumulatedValue);
    };
    /**
     * Gives a hint that a lot of requests are about to come in for these accumulated values.
     */
    PrefixSumComputerWithCache.prototype.warmUpCache = function (accumulatedValueStart, accumulatedValueEnd) {
        var newCache = [];
        for (var accumulatedValue = accumulatedValueStart; accumulatedValue <= accumulatedValueEnd; accumulatedValue++) {
            newCache[accumulatedValue - accumulatedValueStart] = this.getIndexOf(accumulatedValue);
        }
        this._cache = newCache;
        this._cacheAccumulatedValueStart = accumulatedValueStart;
    };
    return PrefixSumComputerWithCache;
}());



/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js":
/*!*******************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/editor/editor.worker.js ***!
  \*******************************************************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/services/editorSimpleWorker.js */ "./node_modules/monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js");
/* harmony import */ var _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/common/worker/simpleWorker.js */ "./node_modules/monaco-editor/esm/vs/base/common/worker/simpleWorker.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var initialized = false;
function initialize(foreignModule) {
    if (initialized) {
        return;
    }
    initialized = true;
    var editorWorker = new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_0__["EditorSimpleWorkerImpl"](foreignModule);
    var simpleWorker = new _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_1__["SimpleWorkerServer"](function (msg) {
        self.postMessage(msg);
    }, editorWorker);
    self.onmessage = function (e) {
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = function (e) {
    // Ignore first message in this case and initialize if not yet initialized
    if (!initialized) {
        initialize(null);
    }
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9jYW5jZWxsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2RpZmYvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vZGlmZi9kaWZmQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2UvY29tbW9uL2V2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9mdW5jdGlvbmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9rZXlDb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vbGlmZWN5Y2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9saW5rZWRMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzZS9jb21tb24vdXJpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi93aW5qcy5iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvY2hhcmFjdGVyQ2xhc3NpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL2NvcmUvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vY29yZS90b2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9jb3JlL3VpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vZGlmZi9kaWZmQ29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZWwvbWlycm9yVGV4dE1vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVsL3dvcmRIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vbW9kZXMvbGlua0NvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9lZGl0b3IvY29tbW9uL21vZGVzL3N1cHBvcnRzL2lucGxhY2VSZXBsYWNlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi9zZXJ2aWNlcy9lZGl0b3JTaW1wbGVXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9jb21tb24vc3RhbmRhbG9uZS9zdGFuZGFsb25lQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2NvbW1vbi92aWV3TW9kZWwvcHJlZml4U3VtQ29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2VkaXRvci9lZGl0b3Iud29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYixpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNxQztBQUNLO0FBQ2lCO0FBQ2hCO0FBQ3JDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVEQUFRO0FBQ3ZCO0FBQ0E7QUFDTztBQUNQLHFCQUFxQix3RUFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFlO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQLHFCQUFxQix3RUFBdUI7QUFDNUMsZUFBZSx1REFBUTtBQUN2QjtBQUNBLDRCQUE0Qix1REFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0VBQWtFLHlCQUF5QixFQUFFO0FBQzdGO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQTZCO0FBQzlDLHVCQUF1Qix1REFBUTtBQUMvQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0NBQXdDLCtCQUErQixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdURBQVE7QUFDakQ7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSx1QkFBdUIsdURBQVE7QUFDL0I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQix1REFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDb0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1REFBUTtBQUNqRDtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNrQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBCQUEwQixtREFBZTtBQUN6QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsdURBQVE7QUFDMEI7QUFDcEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFlO0FBQ3RDLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLHVEQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBLG1CQUFtQix1REFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUF3QjtBQUM1QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUF3QjtBQUM1QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWSxFQUFFLGdCQUFnQixZQUFZLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ087QUFDUCxnQ0FBZ0MsNEJBQTRCLFlBQVksR0FBRztBQUMzRSxrQ0FBa0MscUJBQXFCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0NBQWdDLDRCQUE0QixZQUFZLEdBQUc7QUFDM0Usa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFRO0FBQy9CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUIsc0JBQXNCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMsd0RBQVU7QUFDWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyx3REFBVTtBQUNhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzJCOzs7Ozs7Ozs7Ozs7O0FDN2Q1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDK0I7QUFDNUM7QUFDQTtBQUNBLFlBQVksdUJBQXVCLHNCQUFzQixFQUFFO0FBQzNELENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQ0FBSztBQUN0QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFPO0FBQzNDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDa0M7Ozs7Ozs7Ozs7Ozs7QUNyR25DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDZ0M7QUFDN0M7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUIsRUFBRTtBQUNuRCwyQ0FBMkMsMEJBQTBCO0FBQ3JFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2dCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2tCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5REFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsb0NBQW9DO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNENBQTRDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0NBQWdDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZ0NBQWdDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx5REFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2tCOzs7Ozs7Ozs7Ozs7O0FDanlCbkI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7Ozs7Ozs7Ozs7Ozs7QUNsQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQzhCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUNqQjtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ21DO0FBQ0M7QUFDNkI7QUFDakM7QUFDdEM7QUFDUDtBQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtBQUNoRCw4QkFBOEIsb0JBQW9CO0FBQ2xELENBQUMsc0JBQXNCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx5REFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxTQUFTO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9FQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLENBQUM7QUFDa0I7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG1DQUFtQyxFQUFFO0FBQ2xGLCtDQUErQyxxQ0FBcUM7QUFDcEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRUFBWSxDQUFDLDJEQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHdCQUF3QixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw4QkFBOEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzJCO0FBQ3JCO0FBQ1A7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25ELGVBQWUsd0VBQWtCLDhCQUE4Qiw0QkFBNEIsbUNBQW1DLEVBQUUscUJBQXFCLEVBQUU7QUFDdko7QUFDQTtBQUNPO0FBQ1AsMkJBQTJCLGFBQWE7QUFDeEMsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsbUNBQW1DLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBLENBQUM7QUFDd0I7QUFDbEI7QUFDUDtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsbUNBQW1DLHdDQUF3QyxFQUFFO0FBQzdFO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCxtQ0FBbUMsZ0RBQWdELEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CLEVBQUU7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3REFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7QUN0VmpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFDOUI7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzJCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzZCOzs7Ozs7Ozs7Ozs7O0FDcFE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDTjtBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksdUJBQXVCLDZCQUE2QixFQUFFO0FBQ2xFO0FBQ087QUFDUCxZQUFZLHVCQUF1QixNQUFNLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QixFQUFFO0FBQ3BEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCLEVBQUUsRUFBRTtBQUNoRTtBQUNBLENBQUM7QUFDcUI7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxDQUFDO0FBQzRCOzs7Ozs7Ozs7Ozs7O0FDaEU3QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkJBQTJCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7Ozs7Ozs7Ozs7Ozs7QUNsR3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1AsMEZBQTBGO0FBQ25GO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7O0FDdEZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEM7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNPO0FBQ1A7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwyQkFBMkIsV0FBVztBQUN0Qyx5QkFBeUIsa0JBQWtCO0FBQzNDLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGdDQUFnQyw2QkFBNkI7QUFDN0QsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQLHlDQUF5QztBQUN6QztBQUNPO0FBQ1A7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdkQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLGtFQUFHLEVBQUM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN2VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUNBQWlDOztBQUVqQztBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQSx1REFBdUQ7QUFDdkQsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxTQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsZ0ZBQWdGOztBQUUvRyxxQkFBcUIsc0VBQXNFOztBQUUzRixvQkFBb0Isb0VBQW9FOztBQUV4Riw0QkFBNEI7O0FBRTVCLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSwyRUFBMkU7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQkFBMEIsK0JBQStCLEVBQUU7QUFDNUYseUVBQXlFLHFFQUFxRTtBQUM5STtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RCx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0Esa0NBQWtDLG9CQUFvQjtBQUN0RCxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0MsbUNBQW1DO0FBQ3JFLGFBQWE7QUFDYixzQkFBc0IsZ0NBQWdDO0FBQ3RELHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkNBQTZDO0FBQzlFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHdEQUF3RDtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQSxpRUFBaUUsWUFBWSxHQUFHLGdDQUFnQztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUJBQW1CO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBaUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsU0FBUztBQUN2RjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CLEVBQUUsYUFBYTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtGQUFrRjtBQUNqSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdDQUF3QyxxQkFBcUIsd0JBQXdCLEVBQUUsRUFBRTtBQUN6Rix5Q0FBeUMsc0JBQXNCO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsa0JBQWtCO0FBQzNELHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix5Q0FBeUMsdUJBQXVCO0FBQ2hFLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXLCtCQUErQixFQUFFLEVBQUU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsK0JBQStCO0FBQzFFO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QiwwQ0FBMEMsdUJBQXVCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHNEQUFzRCxzQkFBc0IsY0FBYyxFQUFFO0FBQzVGLHNEQUFzRCxxQkFBcUIsY0FBYztBQUN6RjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLGtDQUFrQyxxQkFBcUIsRUFBRTtBQUN6RCx1Q0FBdUMsc0JBQXNCO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQW1CLEVBQUUsWUFBWSxnQkFBZ0I7QUFDMUU7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5QkFBeUIsRUFBRTtBQUM3RCxrQ0FBa0MsbUJBQW1CO0FBQ3JEO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNPO0FBQ0E7QUFDQTtBQUNQOzs7Ozs7Ozs7Ozs7OztBQy9pRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2IsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDNkQ7QUFDakI7QUFDRDtBQUNXO0FBQ2hCO0FBQ3ZDO0FBQ0E7QUFDTztBQUNQLFNBQVMsa0RBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBUTtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsaUZBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUZBQThCO0FBQ25ELGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsdURBQVE7QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBUTtBQUN2QztBQUNBO0FBQ0EsU0FBUyxlQUFlLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrRUFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFRO0FBQzNCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyx3REFBVTtBQUNrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvREFBb0QsMkNBQTJDO0FBQy9GLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVE7QUFDM0I7QUFDQTtBQUNBLG1CQUFtQix1REFBUTtBQUMzQjtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUM2QjtBQUM5QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ3VCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7QUN2RHhCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDbUI7Ozs7Ozs7Ozs7Ozs7QUNqSHBCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2dCOzs7Ozs7Ozs7Ozs7O0FDclVqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ2tDO0FBQ007QUFDekM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQywrQ0FBSztBQUNjOzs7Ozs7Ozs7Ozs7O0FDaEtyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzZCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUNoQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCO0FBQ2hCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUMrQztBQUNEO0FBQzNELDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsdUJBQXVCLGlFQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQStCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4RUFBOEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7QUM3WHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUN5RDtBQUN2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLHVDQUF1QywwREFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0EsbUNBQW1DLGlGQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzBCOzs7Ozs7Ozs7Ozs7O0FDM0czQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOLDhDQUE4QyxFQUFFLElBQUk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxJQUFJLE1BQU07QUFDbEU7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUN3RDtBQUN2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFXO0FBQ3BDLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdGQUFtQjtBQUM3QztBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyx1QkFBdUIsdUNBQXVDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsZ0JBQWdCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdE9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUM4Qjs7Ozs7Ozs7Ozs7OztBQ3ZGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ2IsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDNkM7QUFDZ0I7QUFDckI7QUFDYztBQUNRO0FBQ2hCO0FBQ2tDO0FBQ3pCO0FBQ3lCO0FBQ0M7QUFDWjtBQUNYO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwRUFBYSxrQkFBa0Isc0ZBQXlCO0FBQ2pGO0FBQ0EsdUJBQXVCLG9EQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBeUQ7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsK0RBQStEO0FBQzNHLDBDQUEwQywyREFBMkQ7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMERBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMseUVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrRUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxlQUFlLG1FQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxQkFBcUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0RUFBVTtBQUNwQyw0Q0FBNEMsb0RBQUs7QUFDakQsaURBQWlELHVCQUF1QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFrRDtBQUMzRTtBQUNBLGVBQWUsbUVBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1FQUFRLElBQUksMkVBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLDJFQUEyRTtBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsbUJBQW1CLG1FQUFRLEtBQUssMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELCtEQUErRDtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0RkFBbUI7QUFDeEMsZUFBZSxtRUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUVBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdDQUFnQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZUFBZSxtRUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFRO0FBQzNCO0FBQ0E7QUFDQSxtQkFBbUIsbUVBQVE7QUFDM0I7QUFDQTtBQUNBLG1CQUFtQixtRUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNpQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxxQ0FBcUMsRUFBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMkRBQUc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNpQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFPLFVBQVUsMEZBQW1CO0FBQ3hDOzs7Ozs7Ozs7Ozs7O0FDaGRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDMkM7QUFDSTtBQUNiO0FBQ047QUFDNEI7QUFDUDtBQUNpQjtBQUN0QztBQUNLO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUVBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNpQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBCQUEwQjtBQUNwQjtBQUNQO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvRkFBdUI7QUFDeEQsaUJBQWlCLDZEQUFPO0FBQ3hCO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVE7QUFDMUIsZUFBZSxvREFBSztBQUNwQixtQkFBbUIsNERBQVM7QUFDNUIsNEJBQTRCLHFFQUFrQjtBQUM5QztBQUNBO0FBQ0EsaUJBQWlCLG1FQUFRO0FBQ3pCLGFBQWEsMkRBQUc7QUFDaEIsZUFBZSxvREFBSztBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDelBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQzhCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFRO0FBQ3hCLGdCQUFnQiw4REFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4REFBUTtBQUM3QixjQUFjLDhEQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUM0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHlDQUF5QztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FDOzs7Ozs7Ozs7Ozs7O0FDeE10QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDb0U7QUFDTjtBQUMzRTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkZBQXNCO0FBQ2pELDJCQUEyQixzRkFBa0I7QUFDN0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJlZGl0b3Iud29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvZWRpdG9yL2VkaXRvci53b3JrZXIuanNcIik7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCB7IFRQcm9taXNlIH0gZnJvbSAnLi93aW5qcy5iYXNlLmpzJztcbmltcG9ydCB7IENhbmNlbGxhdGlvblRva2VuU291cmNlIH0gZnJvbSAnLi9jYW5jZWxsYXRpb24uanMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZSB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBpc1RoZW5hYmxlKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGhlbmFibGUoYXJnKSB7XG4gICAgaWYgKGlzVGhlbmFibGUoYXJnKSkge1xuICAgICAgICByZXR1cm4gYXJnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFRQcm9taXNlLmFzKGFyZyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbmNlbGFibGVQcm9taXNlKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG5ldyBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSgpO1xuICAgIHZhciB0aGVuYWJsZSA9IGNhbGxiYWNrKHNvdXJjZS50b2tlbik7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNvdXJjZS50b2tlbi5vbkNhbmNlbGxhdGlvblJlcXVlc3RlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3JzLmNhbmNlbGVkKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoZW5hYmxlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc291cmNlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzb3VyY2UuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNvdXJjZS5jYW5jZWwoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgcmVqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XG4gICAgfSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc1dpbkpzUHJvbWlzZShjYWxsYmFjaykge1xuICAgIHZhciBzb3VyY2UgPSBuZXcgQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UoKTtcbiAgICByZXR1cm4gbmV3IFRQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QsIHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBpdGVtID0gY2FsbGJhY2soc291cmNlLnRva2VuKTtcbiAgICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBUUHJvbWlzZSkge1xuICAgICAgICAgICAgaXRlbS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSwgcHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVGhlbmFibGUoaXRlbSkpIHtcbiAgICAgICAgICAgIGl0ZW0udGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc291cmNlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc291cmNlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc291cmNlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNvdXJjZS5jYW5jZWwoKTtcbiAgICB9KTtcbn1cbi8qKlxuICogSG9vayBhIGNhbmNlbGxhdGlvbiB0b2tlbiB0byBhIFdpbkpTIFByb21pc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpcmVDYW5jZWxsYXRpb25Ub2tlbih0b2tlbiwgcHJvbWlzZSwgcmVzb2x2ZUFzVW5kZWZpbmVkV2hlbkNhbmNlbGxlZCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0b2tlbi5vbkNhbmNlbGxhdGlvblJlcXVlc3RlZChmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9taXNlLmNhbmNlbCgpOyB9KTtcbiAgICBpZiAocmVzb2x2ZUFzVW5kZWZpbmVkV2hlbkNhbmNlbGxlZCkge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKCFlcnJvcnMuaXNQcm9taXNlQ2FuY2VsZWRFcnJvcihlcnIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRQcm9taXNlLndyYXBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhbHdheXMocHJvbWlzZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTsgfSk7XG59XG4vKipcbiAqIEEgaGVscGVyIHRvIHByZXZlbnQgYWNjdW11bGF0aW9uIG9mIHNlcXVlbnRpYWwgYXN5bmMgdGFza3MuXG4gKlxuICogSW1hZ2luZSBhIG1haWwgbWFuIHdpdGggdGhlIHNvbGUgdGFzayBvZiBkZWxpdmVyaW5nIGxldHRlcnMuIEFzIHNvb24gYXNcbiAqIGEgbGV0dGVyIHN1Ym1pdHRlZCBmb3IgZGVsaXZlcnksIGhlIGRyaXZlcyB0byB0aGUgZGVzdGluYXRpb24sIGRlbGl2ZXJzIGl0XG4gKiBhbmQgcmV0dXJucyB0byBoaXMgYmFzZS4gSW1hZ2luZSB0aGF0IGR1cmluZyB0aGUgdHJpcCwgTiBtb3JlIGxldHRlcnMgd2VyZSBzdWJtaXR0ZWQuXG4gKiBXaGVuIHRoZSBtYWlsIG1hbiByZXR1cm5zLCBoZSBwaWNrcyB0aG9zZSBOIGxldHRlcnMgYW5kIGRlbGl2ZXJzIHRoZW0gYWxsIGluIGFcbiAqIHNpbmdsZSB0cmlwLiBFdmVuIHRob3VnaCBOKzEgc3VibWlzc2lvbnMgb2NjdXJyZWQsIG9ubHkgMiBkZWxpdmVyaWVzIHdlcmUgbWFkZS5cbiAqXG4gKiBUaGUgdGhyb3R0bGVyIGltcGxlbWVudHMgdGhpcyB2aWEgdGhlIHF1ZXVlKCkgbWV0aG9kLCBieSBwcm92aWRpbmcgaXQgYSB0YXNrXG4gKiBmYWN0b3J5LiBGb2xsb3dpbmcgdGhlIGV4YW1wbGU6XG4gKlxuICogXHRcdGNvbnN0IHRocm90dGxlciA9IG5ldyBUaHJvdHRsZXIoKTtcbiAqIFx0XHRjb25zdCBsZXR0ZXJzID0gW107XG4gKlxuICogXHRcdGZ1bmN0aW9uIGRlbGl2ZXIoKSB7XG4gKiBcdFx0XHRjb25zdCBsZXR0ZXJzVG9EZWxpdmVyID0gbGV0dGVycztcbiAqIFx0XHRcdGxldHRlcnMgPSBbXTtcbiAqIFx0XHRcdHJldHVybiBtYWtlVGhlVHJpcChsZXR0ZXJzVG9EZWxpdmVyKTtcbiAqIFx0XHR9XG4gKlxuICogXHRcdGZ1bmN0aW9uIG9uTGV0dGVyUmVjZWl2ZWQobCkge1xuICogXHRcdFx0bGV0dGVycy5wdXNoKGwpO1xuICogXHRcdFx0dGhyb3R0bGVyLnF1ZXVlKGRlbGl2ZXIpO1xuICogXHRcdH1cbiAqL1xudmFyIFRocm90dGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaHJvdHRsZXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVldWVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVldWVkUHJvbWlzZUZhY3RvcnkgPSBudWxsO1xuICAgIH1cbiAgICBUaHJvdHRsZXIucHJvdG90eXBlLnF1ZXVlID0gZnVuY3Rpb24gKHByb21pc2VGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWVkUHJvbWlzZUZhY3RvcnkgPSBwcm9taXNlRmFjdG9yeTtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9uQ29tcGxldGVfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVldWVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5xdWV1ZShfdGhpcy5xdWV1ZWRQcm9taXNlRmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXVlZFByb21pc2VGYWN0b3J5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkUHJvbWlzZSA9IG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYywgZSwgcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVQcm9taXNlLnRoZW4ob25Db21wbGV0ZV8xLCBvbkNvbXBsZXRlXzEsIHApLmRvbmUoYyk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVQcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYywgZSwgcCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnF1ZXVlZFByb21pc2UudGhlbihjLCBlLCBwKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBuby1vcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVQcm9taXNlID0gcHJvbWlzZUZhY3RvcnkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYywgZSwgcCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZlUHJvbWlzZS5kb25lKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjKHJlc3VsdCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZShlcnIpO1xuICAgICAgICAgICAgfSwgcCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2ZVByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRocm90dGxlcjtcbn0oKSk7XG5leHBvcnQgeyBUaHJvdHRsZXIgfTtcbi8qKlxuICogQSBoZWxwZXIgdG8gZGVsYXkgZXhlY3V0aW9uIG9mIGEgdGFzayB0aGF0IGlzIGJlaW5nIHJlcXVlc3RlZCBvZnRlbi5cbiAqXG4gKiBGb2xsb3dpbmcgdGhlIHRocm90dGxlciwgbm93IGltYWdpbmUgdGhlIG1haWwgbWFuIHdhbnRzIHRvIG9wdGltaXplIHRoZSBudW1iZXIgb2ZcbiAqIHRyaXBzIHByb2FjdGl2ZWx5LiBUaGUgdHJpcCBpdHNlbGYgY2FuIGJlIGxvbmcsIHNvIGhlIGRlY2lkZXMgbm90IHRvIG1ha2UgdGhlIHRyaXBcbiAqIGFzIHNvb24gYXMgYSBsZXR0ZXIgaXMgc3VibWl0dGVkLiBJbnN0ZWFkIGhlIHdhaXRzIGEgd2hpbGUsIGluIGNhc2UgbW9yZVxuICogbGV0dGVycyBhcmUgc3VibWl0dGVkLiBBZnRlciBzYWlkIHdhaXRpbmcgcGVyaW9kLCBpZiBubyBsZXR0ZXJzIHdlcmUgc3VibWl0dGVkLCBoZVxuICogZGVjaWRlcyB0byBtYWtlIHRoZSB0cmlwLiBJbWFnaW5lIHRoYXQgTiBtb3JlIGxldHRlcnMgd2VyZSBzdWJtaXR0ZWQgYWZ0ZXIgdGhlIGZpcnN0XG4gKiBvbmUsIGFsbCB3aXRoaW4gYSBzaG9ydCBwZXJpb2Qgb2YgdGltZSBiZXR3ZWVuIGVhY2ggb3RoZXIuIEV2ZW4gdGhvdWdoIE4rMVxuICogc3VibWlzc2lvbnMgb2NjdXJyZWQsIG9ubHkgMSBkZWxpdmVyeSB3YXMgbWFkZS5cbiAqXG4gKiBUaGUgZGVsYXllciBvZmZlcnMgdGhpcyBiZWhhdmlvciB2aWEgdGhlIHRyaWdnZXIoKSBtZXRob2QsIGludG8gd2hpY2ggYm90aCB0aGUgdGFza1xuICogdG8gYmUgZXhlY3V0ZWQgYW5kIHRoZSB3YWl0aW5nIHBlcmlvZCAoZGVsYXkpIG11c3QgYmUgcGFzc2VkIGluIGFzIGFyZ3VtZW50cy4gRm9sbG93aW5nXG4gKiB0aGUgZXhhbXBsZTpcbiAqXG4gKiBcdFx0Y29uc3QgZGVsYXllciA9IG5ldyBEZWxheWVyKFdBSVRJTkdfUEVSSU9EKTtcbiAqIFx0XHRjb25zdCBsZXR0ZXJzID0gW107XG4gKlxuICogXHRcdGZ1bmN0aW9uIGxldHRlclJlY2VpdmVkKGwpIHtcbiAqIFx0XHRcdGxldHRlcnMucHVzaChsKTtcbiAqIFx0XHRcdGRlbGF5ZXIudHJpZ2dlcigoKSA9PiB7IHJldHVybiBtYWtlVGhlVHJpcCgpOyB9KTtcbiAqIFx0XHR9XG4gKi9cbnZhciBEZWxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlbGF5ZXIoZGVmYXVsdERlbGF5KSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdERlbGF5ID0gZGVmYXVsdERlbGF5O1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBsZXRpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLnRhc2sgPSBudWxsO1xuICAgIH1cbiAgICBEZWxheWVyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKHRhc2ssIGRlbGF5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gdGhpcy5kZWZhdWx0RGVsYXk7IH1cbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG4gICAgICAgIGlmICghdGhpcy5jb21wbGV0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uUHJvbWlzZSA9IG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uU3VjY2VzcyA9IGM7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gbm8tb3BcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5vblN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gX3RoaXMudGFzaztcbiAgICAgICAgICAgICAgICBfdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIF90aGlzLm9uU3VjY2VzcyhudWxsKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uUHJvbWlzZTtcbiAgICB9O1xuICAgIERlbGF5ZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxUaW1lb3V0KCk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRpb25Qcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25Qcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlbGF5ZXIucHJvdG90eXBlLmNhbmNlbFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERlbGF5ZXI7XG59KCkpO1xuZXhwb3J0IHsgRGVsYXllciB9O1xudmFyIFNoYWxsb3dDYW5jZWxUaGVuUHJvbWlzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2hhbGxvd0NhbmNlbFRoZW5Qcm9taXNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNoYWxsb3dDYW5jZWxUaGVuUHJvbWlzZShvdXRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tcGxldGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgcHJvZ3Jlc3NDYWxsYmFjaztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAoYywgZSwgcCkge1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayA9IGM7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gZTtcbiAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2sgPSBwO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjYW5jZWwgdGhpcyBwcm9taXNlIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAvLyBvdXRlciBwcm9taXNlXG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKGVycm9ycy5jYW5jZWxlZCgpKTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgb3V0ZXIudGhlbihjb21wbGV0ZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2hhbGxvd0NhbmNlbFRoZW5Qcm9taXNlO1xufShUUHJvbWlzZSkpO1xuZXhwb3J0IHsgU2hhbGxvd0NhbmNlbFRoZW5Qcm9taXNlIH07XG4vKipcbiAqIFJlcGxhY2VtZW50IGZvciBgV2luSlMuVFByb21pc2UudGltZW91dGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0KG4pIHtcbiAgICByZXR1cm4gY3JlYXRlQ2FuY2VsYWJsZVByb21pc2UoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gc2V0VGltZW91dChyZXNvbHZlLCBuKTtcbiAgICAgICAgICAgIHRva2VuLm9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycy5jYW5jZWxlZCgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzV2luSlNQcm9taXNlKGNhbmRpZGF0ZSkge1xuICAgIHJldHVybiBUUHJvbWlzZS5pcyhjYW5kaWRhdGUpICYmIHR5cGVvZiBjYW5kaWRhdGUuZG9uZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbHdheXMod2luanNQcm9taXNlT3JUaGVuYWJsZSwgZikge1xuICAgIGlmIChpc1dpbkpTUHJvbWlzZSh3aW5qc1Byb21pc2VPclRoZW5hYmxlKSkge1xuICAgICAgICByZXR1cm4gbmV3IFRQcm9taXNlKGZ1bmN0aW9uIChjLCBlLCBwKSB7XG4gICAgICAgICAgICB3aW5qc1Byb21pc2VPclRoZW5hYmxlLmRvbmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGYocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUxKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5vblVuZXhwZWN0ZWRFcnJvcihlMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGMocmVzdWx0KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlMSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMub25VbmV4cGVjdGVkRXJyb3IoZTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlKGVycik7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBwKHByb2dyZXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5qc1Byb21pc2VPclRoZW5hYmxlLmNhbmNlbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNpbXBsZVxuICAgICAgICB3aW5qc1Byb21pc2VPclRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKF8pIHsgcmV0dXJuIGYoKTsgfSwgZnVuY3Rpb24gKF8pIHsgcmV0dXJuIGYoKTsgfSk7XG4gICAgICAgIHJldHVybiB3aW5qc1Byb21pc2VPclRoZW5hYmxlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdDIocHJvbWlzZUZhY3Rvcmllcywgc2hvdWxkU3RvcCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHNob3VsZFN0b3AgPT09IHZvaWQgMCkgeyBzaG91bGRTdG9wID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuICEhdDsgfTsgfVxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkgeyBkZWZhdWx0VmFsdWUgPSBudWxsOyB9XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGVuID0gcHJvbWlzZUZhY3Rvcmllcy5sZW5ndGg7XG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbmRleCA+PSBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmFjdG9yeSA9IHByb21pc2VGYWN0b3JpZXNbaW5kZXgrK107XG4gICAgICAgIHZhciBwcm9taXNlID0gZmFjdG9yeSgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdG9wKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbG9vcCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBsb29wKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3QocHJvbWlzZUZhY3Rvcmllcywgc2hvdWxkU3RvcCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHNob3VsZFN0b3AgPT09IHZvaWQgMCkgeyBzaG91bGRTdG9wID0gZnVuY3Rpb24gKHQpIHsgcmV0dXJuICEhdDsgfTsgfVxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkgeyBkZWZhdWx0VmFsdWUgPSBudWxsOyB9XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGVuID0gcHJvbWlzZUZhY3Rvcmllcy5sZW5ndGg7XG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbmRleCA+PSBsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyhkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmYWN0b3J5ID0gcHJvbWlzZUZhY3Rvcmllc1tpbmRleCsrXTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBmYWN0b3J5KCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0b3AocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvb3AoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gbG9vcCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERpc3Bvc2FibGVUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBoYW5kbGUgPSBzZXRUaW1lb3V0LmFwcGx5KHZvaWQgMCwgW2hhbmRsZXIsIHRpbWVvdXRdLmNvbmNhdChhcmdzKSk7XG4gICAgcmV0dXJuIHsgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyBjbGVhclRpbWVvdXQoaGFuZGxlKTsgfSB9O1xufVxudmFyIFRpbWVvdXRUaW1lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGltZW91dFRpbWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRpbWVvdXRUaW1lcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3Rva2VuID0gLTE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVGltZW91dFRpbWVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFRpbWVvdXRUaW1lci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fdG9rZW4gIT09IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGltZW91dFRpbWVyLnByb3RvdHlwZS5jYW5jZWxBbmRTZXQgPSBmdW5jdGlvbiAocnVubmVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgICAgIHJ1bm5lcigpO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9O1xuICAgIFRpbWVvdXRUaW1lci5wcm90b3R5cGUuc2V0SWZOb3RTZXQgPSBmdW5jdGlvbiAocnVubmVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLl90b2tlbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIHRpbWVyIGlzIGFscmVhZHkgc2V0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdG9rZW4gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90b2tlbiA9IC0xO1xuICAgICAgICAgICAgcnVubmVyKCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbWVvdXRUaW1lcjtcbn0oRGlzcG9zYWJsZSkpO1xuZXhwb3J0IHsgVGltZW91dFRpbWVyIH07XG52YXIgSW50ZXJ2YWxUaW1lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50ZXJ2YWxUaW1lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRlcnZhbFRpbWVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdG9rZW4gPSAtMTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBJbnRlcnZhbFRpbWVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEludGVydmFsVGltZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rva2VuICE9PSAtMSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90b2tlbik7XG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IC0xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnRlcnZhbFRpbWVyLnByb3RvdHlwZS5jYW5jZWxBbmRTZXQgPSBmdW5jdGlvbiAocnVubmVyLCBpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLl90b2tlbiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5lcigpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50ZXJ2YWxUaW1lcjtcbn0oRGlzcG9zYWJsZSkpO1xuZXhwb3J0IHsgSW50ZXJ2YWxUaW1lciB9O1xudmFyIFJ1bk9uY2VTY2hlZHVsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUnVuT25jZVNjaGVkdWxlcihydW5uZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0VG9rZW4gPSAtMTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIHRoaXMudGltZW91dEhhbmRsZXIgPSB0aGlzLm9uVGltZW91dC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIFJ1bk9uY2VTY2hlZHVsZXJcbiAgICAgKi9cbiAgICBSdW5PbmNlU2NoZWR1bGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYW5jZWwgY3VycmVudCBzY2hlZHVsZWQgcnVubmVyIChpZiBhbnkpLlxuICAgICAqL1xuICAgIFJ1bk9uY2VTY2hlZHVsZXIucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY2hlZHVsZWQoKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFRva2VuKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dFRva2VuID0gLTE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbmNlbCBwcmV2aW91cyBydW5uZXIgKGlmIGFueSkgJiBzY2hlZHVsZSBhIG5ldyBydW5uZXIuXG4gICAgICovXG4gICAgUnVuT25jZVNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSB0aGlzLnRpbWVvdXQ7IH1cbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgdGhpcy50aW1lb3V0VG9rZW4gPSBzZXRUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZXIsIGRlbGF5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBzY2hlZHVsZWQuXG4gICAgICovXG4gICAgUnVuT25jZVNjaGVkdWxlci5wcm90b3R5cGUuaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVvdXRUb2tlbiAhPT0gLTE7XG4gICAgfTtcbiAgICBSdW5PbmNlU2NoZWR1bGVyLnByb3RvdHlwZS5vblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZW91dFRva2VuID0gLTE7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgdGhpcy5kb1J1bigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSdW5PbmNlU2NoZWR1bGVyLnByb3RvdHlwZS5kb1J1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ydW5uZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBSdW5PbmNlU2NoZWR1bGVyO1xufSgpKTtcbmV4cG9ydCB7IFJ1bk9uY2VTY2hlZHVsZXIgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgRXZlbnQsIEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50LmpzJztcbnZhciBzaG9ydGN1dEV2ZW50ID0gT2JqZWN0LmZyZWV6ZShmdW5jdGlvbiAoY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICB2YXIgaGFuZGxlID0gc2V0VGltZW91dChjYWxsYmFjay5iaW5kKGNvbnRleHQpLCAwKTtcbiAgICByZXR1cm4geyBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IGNsZWFyVGltZW91dChoYW5kbGUpOyB9IH07XG59KTtcbmV4cG9ydCB2YXIgQ2FuY2VsbGF0aW9uVG9rZW47XG4oZnVuY3Rpb24gKENhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW4uTm9uZSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBpc0NhbmNlbGxhdGlvblJlcXVlc3RlZDogZmFsc2UsXG4gICAgICAgIG9uQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiBFdmVudC5Ob25lXG4gICAgfSk7XG4gICAgQ2FuY2VsbGF0aW9uVG9rZW4uQ2FuY2VsbGVkID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkOiB0cnVlLFxuICAgICAgICBvbkNhbmNlbGxhdGlvblJlcXVlc3RlZDogc2hvcnRjdXRFdmVudFxuICAgIH0pO1xufSkoQ2FuY2VsbGF0aW9uVG9rZW4gfHwgKENhbmNlbGxhdGlvblRva2VuID0ge30pKTtcbnZhciBNdXRhYmxlVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXV0YWJsZVRva2VuKCkge1xuICAgICAgICB0aGlzLl9pc0NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBNdXRhYmxlVG9rZW4ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0dGVyLmZpcmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11dGFibGVUb2tlbi5wcm90b3R5cGUsIFwiaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0NhbmNlbGxlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE11dGFibGVUb2tlbi5wcm90b3R5cGUsIFwib25DYW5jZWxsYXRpb25SZXF1ZXN0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0NhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG9ydGN1dEV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbWl0dGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlci5ldmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTXV0YWJsZVRva2VuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZW1pdHRlcikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9lbWl0dGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXV0YWJsZVRva2VuO1xufSgpKTtcbnZhciBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSgpIHtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZSwgXCJ0b2tlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgICAgIC8vIGJlIGxhenkgYW5kIGNyZWF0ZSB0aGUgdG9rZW4gb25seSB3aGVuXG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgbmVlZGVkXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBuZXcgTXV0YWJsZVRva2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdG9rZW4pIHtcbiAgICAgICAgICAgIC8vIHNhdmUgYW4gb2JqZWN0IGJ5IHJldHVybmluZyB0aGUgZGVmYXVsdFxuICAgICAgICAgICAgLy8gY2FuY2VsbGVkIHRva2VuIHdoZW4gY2FuY2VsbGF0aW9uIGhhcHBlbnNcbiAgICAgICAgICAgIC8vIGJlZm9yZSBzb21lb25lIGFza3MgZm9yIHRoZSB0b2tlblxuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBDYW5jZWxsYXRpb25Ub2tlbi5DYW5jZWxsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdG9rZW4gaW5zdGFuY2VvZiBNdXRhYmxlVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGNhbmNlbFxuICAgICAgICAgICAgdGhpcy5fdG9rZW4uY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhbmNlbGxhdGlvblRva2VuU291cmNlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICAgICAgICAvLyBlbnN1cmUgdG8gaW5pdGlhbGl6ZSB3aXRoIGFuIGVtcHR5IHRva2VuIGlmIHdlIGhhZCBub25lXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IENhbmNlbGxhdGlvblRva2VuLk5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdG9rZW4gaW5zdGFuY2VvZiBNdXRhYmxlVG9rZW4pIHtcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGRpc3Bvc2VcbiAgICAgICAgICAgIHRoaXMuX3Rva2VuLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhbmNlbGxhdGlvblRva2VuU291cmNlO1xufSgpKTtcbmV4cG9ydCB7IENhbmNlbGxhdGlvblRva2VuU291cmNlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IERpZmZDaGFuZ2UgfSBmcm9tICcuL2RpZmZDaGFuZ2UuanMnO1xuZnVuY3Rpb24gY3JlYXRlU3RyaW5nU2VxdWVuY2UoYSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldExlbmd0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYS5sZW5ndGg7IH0sXG4gICAgICAgIGdldEVsZW1lbnRBdEluZGV4OiBmdW5jdGlvbiAocG9zKSB7IHJldHVybiBhLmNoYXJDb2RlQXQocG9zKTsgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRGlmZihvcmlnaW5hbCwgbW9kaWZpZWQsIHByZXR0eSkge1xuICAgIHJldHVybiBuZXcgTGNzRGlmZihjcmVhdGVTdHJpbmdTZXF1ZW5jZShvcmlnaW5hbCksIGNyZWF0ZVN0cmluZ1NlcXVlbmNlKG1vZGlmaWVkKSkuQ29tcHV0ZURpZmYocHJldHR5KTtcbn1cbi8vXG4vLyBUaGUgY29kZSBiZWxvdyBoYXMgYmVlbiBwb3J0ZWQgZnJvbSBhIEMjIGltcGxlbWVudGF0aW9uIGluIFZTXG4vL1xudmFyIERlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlYnVnKCkge1xuICAgIH1cbiAgICBEZWJ1Zy5Bc3NlcnQgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEZWJ1Zztcbn0oKSk7XG5leHBvcnQgeyBEZWJ1ZyB9O1xudmFyIE15QXJyYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXlBcnJheSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgcmFuZ2Ugb2YgZWxlbWVudHMgZnJvbSBhbiBBcnJheSBzdGFydGluZyBhdCB0aGUgc3BlY2lmaWVkIHNvdXJjZSBpbmRleCBhbmQgcGFzdGVzXG4gICAgICogdGhlbSB0byBhbm90aGVyIEFycmF5IHN0YXJ0aW5nIGF0IHRoZSBzcGVjaWZpZWQgZGVzdGluYXRpb24gaW5kZXguIFRoZSBsZW5ndGggYW5kIHRoZSBpbmRleGVzXG4gICAgICogYXJlIHNwZWNpZmllZCBhcyA2NC1iaXQgaW50ZWdlcnMuXG4gICAgICogc291cmNlQXJyYXk6XG4gICAgICpcdFx0VGhlIEFycmF5IHRoYXQgY29udGFpbnMgdGhlIGRhdGEgdG8gY29weS5cbiAgICAgKiBzb3VyY2VJbmRleDpcbiAgICAgKlx0XHRBIDY0LWJpdCBpbnRlZ2VyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggaW4gdGhlIHNvdXJjZUFycmF5IGF0IHdoaWNoIGNvcHlpbmcgYmVnaW5zLlxuICAgICAqIGRlc3RpbmF0aW9uQXJyYXk6XG4gICAgICpcdFx0VGhlIEFycmF5IHRoYXQgcmVjZWl2ZXMgdGhlIGRhdGEuXG4gICAgICogZGVzdGluYXRpb25JbmRleDpcbiAgICAgKlx0XHRBIDY0LWJpdCBpbnRlZ2VyIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5kZXggaW4gdGhlIGRlc3RpbmF0aW9uQXJyYXkgYXQgd2hpY2ggc3RvcmluZyBiZWdpbnMuXG4gICAgICogbGVuZ3RoOlxuICAgICAqXHRcdEEgNjQtYml0IGludGVnZXIgdGhhdCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY29weS5cbiAgICAgKi9cbiAgICBNeUFycmF5LkNvcHkgPSBmdW5jdGlvbiAoc291cmNlQXJyYXksIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkFycmF5LCBkZXN0aW5hdGlvbkluZGV4LCBsZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25BcnJheVtkZXN0aW5hdGlvbkluZGV4ICsgaV0gPSBzb3VyY2VBcnJheVtzb3VyY2VJbmRleCArIGldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTXlBcnJheTtcbn0oKSk7XG5leHBvcnQgeyBNeUFycmF5IH07XG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBMY3NEaWZmLmNzXG4vL1xuLy8gQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIGRpZmZlcmVuY2UgYWxnb3JpdGhtIGRlc2NyaWJlZCBpblxuLy8gXCJBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgaXRzIHZhcmlhdGlvbnNcIiBieSBFdWdlbmUgVy4gTXllcnNcbi8vXG4vLyBDb3B5cmlnaHQgKEMpIDIwMDggTWljcm9zb2Z0IENvcnBvcmF0aW9uIEBtaW5pZmllcl9kb19ub3RfcHJlc2VydmVcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIE91ciB0b3RhbCBtZW1vcnkgdXNhZ2UgZm9yIHN0b3JpbmcgaGlzdG9yeSBpcyAod29yc3QtY2FzZSk6XG4vLyAyICogWyhNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSAqIChNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSAtIDFdICogc2l6ZW9mKGludClcbi8vIDIgKiBbMTQ0OCoxNDQ4IC0gMV0gKiA0ID0gMTY3NzM2MjQgPSAxNk1CXG52YXIgTWF4RGlmZmVyZW5jZXNIaXN0b3J5ID0gMTQ0Nztcbi8vbGV0IE1heERpZmZlcmVuY2VzSGlzdG9yeSA9IDEwMDtcbi8qKlxuICogQSB1dGlsaXR5IGNsYXNzIHdoaWNoIGhlbHBzIHRvIGNyZWF0ZSB0aGUgc2V0IG9mIERpZmZDaGFuZ2VzIGZyb21cbiAqIGEgZGlmZmVyZW5jZSBvcGVyYXRpb24uIFRoaXMgY2xhc3MgYWNjZXB0cyBvcmlnaW5hbCBEaWZmRWxlbWVudHMgYW5kXG4gKiBtb2RpZmllZCBEaWZmRWxlbWVudHMgdGhhdCBhcmUgaW52b2x2ZWQgaW4gYSBwYXJ0aWN1bGFyIGNoYW5nZS4gVGhlXG4gKiBNYXJrdE5leHRDaGFuZ2UoKSBtZXRob2QgY2FuIGJlIGNhbGxlZCB0byBtYXJrIHRoZSBzZXBhcmF0aW9uIGJldHdlZW5cbiAqIGRpc3RpbmN0IGNoYW5nZXMuIEF0IHRoZSBlbmQsIHRoZSBDaGFuZ2VzIHByb3BlcnR5IGNhbiBiZSBjYWxsZWQgdG8gcmV0cmlldmVcbiAqIHRoZSBjb25zdHJ1Y3RlZCBjaGFuZ2VzLlxuICovXG52YXIgRGlmZkNoYW5nZUhlbHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IERpZmZDaGFuZ2VIZWxwZXIgZm9yIHRoZSBnaXZlbiBEaWZmU2VxdWVuY2VzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERpZmZDaGFuZ2VIZWxwZXIoKSB7XG4gICAgICAgIHRoaXMubV9jaGFuZ2VzID0gW107XG4gICAgICAgIHRoaXMubV9vcmlnaW5hbFN0YXJ0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLm1fb3JpZ2luYWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50ID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGJlZ2lubmluZyBvZiB0aGUgbmV4dCBjaGFuZ2UgaW4gdGhlIHNldCBvZiBkaWZmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlSGVscGVyLnByb3RvdHlwZS5NYXJrTmV4dENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gT25seSBhZGQgdG8gdGhlIGxpc3QgaWYgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGFkZFxuICAgICAgICBpZiAodGhpcy5tX29yaWdpbmFsQ291bnQgPiAwIHx8IHRoaXMubV9tb2RpZmllZENvdW50ID4gMCkge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBuZXcgY2hhbmdlIHRvIG91ciBsaXN0XG4gICAgICAgICAgICB0aGlzLm1fY2hhbmdlcy5wdXNoKG5ldyBEaWZmQ2hhbmdlKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCB0aGlzLm1fb3JpZ2luYWxDb3VudCwgdGhpcy5tX21vZGlmaWVkU3RhcnQsIHRoaXMubV9tb2RpZmllZENvdW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzZXQgZm9yIHRoZSBuZXh0IGNoYW5nZVxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5tX29yaWdpbmFsU3RhcnQgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICB0aGlzLm1fbW9kaWZpZWRTdGFydCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBvcmlnaW5hbCBlbGVtZW50IGF0IHRoZSBnaXZlbiBwb3NpdGlvbiB0byB0aGUgZWxlbWVudHNcbiAgICAgKiBhZmZlY3RlZCBieSB0aGUgY3VycmVudCBjaGFuZ2UuIFRoZSBtb2RpZmllZCBpbmRleCBnaXZlcyBjb250ZXh0XG4gICAgICogdG8gdGhlIGNoYW5nZSBwb3NpdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIG9yaWdpbmFsIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgb3JpZ2luYWwgZWxlbWVudCB0byBhZGQuXG4gICAgICogQHBhcmFtIG1vZGlmaWVkSW5kZXggVGhlIGluZGV4IG9mIHRoZSBtb2RpZmllZCBlbGVtZW50IHRoYXQgcHJvdmlkZXMgY29ycmVzcG9uZGluZyBwb3NpdGlvbiBpbiB0aGUgbW9kaWZpZWQgc2VxdWVuY2UuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuQWRkT3JpZ2luYWxFbGVtZW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG1vZGlmaWVkSW5kZXgpIHtcbiAgICAgICAgLy8gVGhlICd0cnVlJyBzdGFydCBpbmRleCBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIG9uZXMgd2UndmUgc2VlblxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxTdGFydCA9IE1hdGgubWluKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEluZGV4KTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBNYXRoLm1pbih0aGlzLm1fbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRJbmRleCk7XG4gICAgICAgIHRoaXMubV9vcmlnaW5hbENvdW50Kys7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBtb2RpZmllZCBlbGVtZW50IGF0IHRoZSBnaXZlbiBwb3NpdGlvbiB0byB0aGUgZWxlbWVudHNcbiAgICAgKiBhZmZlY3RlZCBieSB0aGUgY3VycmVudCBjaGFuZ2UuIFRoZSBvcmlnaW5hbCBpbmRleCBnaXZlcyBjb250ZXh0XG4gICAgICogdG8gdGhlIGNoYW5nZSBwb3NpdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGhlIG1vZGlmaWVkIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgb3JpZ2luYWwgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGNvcnJlc3BvbmRpbmcgcG9zaXRpb24gaW4gdGhlIG9yaWdpbmFsIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSBtb2RpZmllZEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbW9kaWZpZWQgZWxlbWVudCB0byBhZGQuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuQWRkTW9kaWZpZWRFbGVtZW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG1vZGlmaWVkSW5kZXgpIHtcbiAgICAgICAgLy8gVGhlICd0cnVlJyBzdGFydCBpbmRleCBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIG9uZXMgd2UndmUgc2VlblxuICAgICAgICB0aGlzLm1fb3JpZ2luYWxTdGFydCA9IE1hdGgubWluKHRoaXMubV9vcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEluZGV4KTtcbiAgICAgICAgdGhpcy5tX21vZGlmaWVkU3RhcnQgPSBNYXRoLm1pbih0aGlzLm1fbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRJbmRleCk7XG4gICAgICAgIHRoaXMubV9tb2RpZmllZENvdW50Kys7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIG9mIHRoZSBjaGFuZ2VzIG1hcmtlZCBieSB0aGUgY2xhc3MuXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuZ2V0Q2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMubV9vcmlnaW5hbENvdW50ID4gMCB8fCB0aGlzLm1fbW9kaWZpZWRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmlzaCB1cCBvbiB3aGF0ZXZlciBpcyBsZWZ0XG4gICAgICAgICAgICB0aGlzLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubV9jaGFuZ2VzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGFsbCBvZiB0aGUgY2hhbmdlcyBtYXJrZWQgYnkgdGhlIGNsYXNzIGluIHRoZSByZXZlcnNlIG9yZGVyXG4gICAgICovXG4gICAgRGlmZkNoYW5nZUhlbHBlci5wcm90b3R5cGUuZ2V0UmV2ZXJzZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1fb3JpZ2luYWxDb3VudCA+IDAgfHwgdGhpcy5tX21vZGlmaWVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2ggdXAgb24gd2hhdGV2ZXIgaXMgbGVmdFxuICAgICAgICAgICAgdGhpcy5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubV9jaGFuZ2VzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9jaGFuZ2VzO1xuICAgIH07XG4gICAgcmV0dXJuIERpZmZDaGFuZ2VIZWxwZXI7XG59KCkpO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgZGlmZmVyZW5jZSBhbGdvcml0aG0gZGVzY3JpYmVkIGluXG4gKiBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgdmFyaWF0aW9uc1wiIGJ5IEV1Z2VuZSBXLiBNeWVyc1xuICovXG52YXIgTGNzRGlmZiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIHRoZSBEaWZmRmluZGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gTGNzRGlmZihvcmlnaW5hbFNlcXVlbmNlLCBuZXdTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlKSB7XG4gICAgICAgIGlmIChjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgPT09IHZvaWQgMCkgeyBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgPSBudWxsOyB9XG4gICAgICAgIHRoaXMuT3JpZ2luYWxTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2U7XG4gICAgICAgIHRoaXMuTW9kaWZpZWRTZXF1ZW5jZSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB0aGlzLkNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSA9IGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZTtcbiAgICAgICAgdGhpcy5tX2ZvcndhcmRIaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMubV9yZXZlcnNlSGlzdG9yeSA9IFtdO1xuICAgIH1cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5FbGVtZW50c0FyZUVxdWFsID0gZnVuY3Rpb24gKG9yaWdpbmFsSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KG9yaWdpbmFsSW5kZXgpID09PSB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgobmV3SW5kZXgpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLk9yaWdpbmFsRWxlbWVudHNBcmVFcXVhbCA9IGZ1bmN0aW9uIChpbmRleDEsIGluZGV4Mikge1xuICAgICAgICByZXR1cm4gKHRoaXMuT3JpZ2luYWxTZXF1ZW5jZS5nZXRFbGVtZW50QXRJbmRleChpbmRleDEpID09PSB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgyKSk7XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5Nb2RpZmllZEVsZW1lbnRzQXJlRXF1YWwgPSBmdW5jdGlvbiAoaW5kZXgxLCBpbmRleDIpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgxKSA9PT0gdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldEVsZW1lbnRBdEluZGV4KGluZGV4MikpO1xuICAgIH07XG4gICAgTGNzRGlmZi5wcm90b3R5cGUuQ29tcHV0ZURpZmYgPSBmdW5jdGlvbiAocHJldHR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Db21wdXRlRGlmZigwLCB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0TGVuZ3RoKCkgLSAxLCAwLCB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0TGVuZ3RoKCkgLSAxLCBwcmV0dHkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIG9yaWdpbmFsIGFuZCBtb2RpZmllZCBpbnB1dFxuICAgICAqIHNlcXVlbmNlcyBvbiB0aGUgYm91bmRlZCByYW5nZS5cbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdHdvIGlucHV0IHNlcXVlbmNlcy5cbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5fQ29tcHV0ZURpZmYgPSBmdW5jdGlvbiAob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kLCBwcmV0dHkpIHtcbiAgICAgICAgdmFyIHF1aXRFYXJseUFyciA9IFtmYWxzZV07XG4gICAgICAgIHZhciBjaGFuZ2VzID0gdGhpcy5Db21wdXRlRGlmZlJlY3Vyc2l2ZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIHF1aXRFYXJseUFycik7XG4gICAgICAgIGlmIChwcmV0dHkpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2xlYW4gdXAgdGhlIGNvbXB1dGVkIGRpZmYgdG8gYmUgbW9yZSBpbnR1aXRpdmVcbiAgICAgICAgICAgIC8vIGJ1dCBpdCB0dXJucyBvdXQgdGhpcyBjYW5ub3QgYmUgZG9uZSBjb3JyZWN0bHkgdW50aWwgdGhlIGVudGlyZSBzZXRcbiAgICAgICAgICAgIC8vIG9mIGRpZmZzIGhhdmUgYmVlbiBjb21wdXRlZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hpZnRDaGFuZ2VzKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBoZWxwZXIgbWV0aG9kIHdoaWNoIGNvbXB1dGVzIHRoZSBkaWZmZXJlbmNlcyBvbiB0aGUgYm91bmRlZCByYW5nZVxuICAgICAqIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gaW5wdXQgc2VxdWVuY2VzLlxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNvbXB1dGVEaWZmUmVjdXJzaXZlID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHF1aXRFYXJseUFyclswXSA9IGZhbHNlO1xuICAgICAgICAvLyBGaW5kIHRoZSBzdGFydCBvZiB0aGUgZGlmZmVyZW5jZXNcbiAgICAgICAgd2hpbGUgKG9yaWdpbmFsU3RhcnQgPD0gb3JpZ2luYWxFbmQgJiYgbW9kaWZpZWRTdGFydCA8PSBtb2RpZmllZEVuZCAmJiB0aGlzLkVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxTdGFydCwgbW9kaWZpZWRTdGFydCkpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhcnQrKztcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnQrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIHRoZSBlbmQgb2YgdGhlIGRpZmZlcmVuY2VzXG4gICAgICAgIHdoaWxlIChvcmlnaW5hbEVuZCA+PSBvcmlnaW5hbFN0YXJ0ICYmIG1vZGlmaWVkRW5kID49IG1vZGlmaWVkU3RhcnQgJiYgdGhpcy5FbGVtZW50c0FyZUVxdWFsKG9yaWdpbmFsRW5kLCBtb2RpZmllZEVuZCkpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kLS07XG4gICAgICAgICAgICBtb2RpZmllZEVuZC0tO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluIHRoZSBzcGVjaWFsIGNhc2Ugd2hlcmUgd2UgZWl0aGVyIGhhdmUgYWxsIGluc2VydGlvbnMgb3IgYWxsIGRlbGV0aW9ucyBvciB0aGUgc2VxdWVuY2VzIGFyZSBpZGVudGljYWxcbiAgICAgICAgaWYgKG9yaWdpbmFsU3RhcnQgPiBvcmlnaW5hbEVuZCB8fCBtb2RpZmllZFN0YXJ0ID4gbW9kaWZpZWRFbmQpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VzID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVkU3RhcnQgPD0gbW9kaWZpZWRFbmQpIHtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQob3JpZ2luYWxTdGFydCA9PT0gb3JpZ2luYWxFbmQgKyAxLCAnb3JpZ2luYWxTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG9yaWdpbmFsRW5kJyk7XG4gICAgICAgICAgICAgICAgLy8gQWxsIGluc2VydGlvbnNcbiAgICAgICAgICAgICAgICBjaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCAwLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnQgKyAxKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW5hbFN0YXJ0IDw9IG9yaWdpbmFsRW5kKSB7XG4gICAgICAgICAgICAgICAgRGVidWcuQXNzZXJ0KG1vZGlmaWVkU3RhcnQgPT09IG1vZGlmaWVkRW5kICsgMSwgJ21vZGlmaWVkU3RhcnQgc2hvdWxkIG9ubHkgYmUgb25lIG1vcmUgdGhhbiBtb2RpZmllZEVuZCcpO1xuICAgICAgICAgICAgICAgIC8vIEFsbCBkZWxldGlvbnNcbiAgICAgICAgICAgICAgICBjaGFuZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCAtIG9yaWdpbmFsU3RhcnQgKyAxLCBtb2RpZmllZFN0YXJ0LCAwKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBEZWJ1Zy5Bc3NlcnQob3JpZ2luYWxTdGFydCA9PT0gb3JpZ2luYWxFbmQgKyAxLCAnb3JpZ2luYWxTdGFydCBzaG91bGQgb25seSBiZSBvbmUgbW9yZSB0aGFuIG9yaWdpbmFsRW5kJyk7XG4gICAgICAgICAgICAgICAgRGVidWcuQXNzZXJ0KG1vZGlmaWVkU3RhcnQgPT09IG1vZGlmaWVkRW5kICsgMSwgJ21vZGlmaWVkU3RhcnQgc2hvdWxkIG9ubHkgYmUgb25lIG1vcmUgdGhhbiBtb2RpZmllZEVuZCcpO1xuICAgICAgICAgICAgICAgIC8vIElkZW50aWNhbCBzZXF1ZW5jZXMgLSBObyBkaWZmZXJlbmNlc1xuICAgICAgICAgICAgICAgIGNoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgcHJvYmxlbSBjYW4gYmUgc29sdmVkIHVzaW5nIHRoZSBEaXZpZGUtQW5kLUNvbnF1ZXIgdGVjaG5pcXVlLlxuICAgICAgICB2YXIgbWlkT3JpZ2luYWxBcnIgPSBbMF0sIG1pZE1vZGlmaWVkQXJyID0gWzBdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5Db21wdXRlUmVjdXJzaW9uUG9pbnQob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kLCBtaWRPcmlnaW5hbEFyciwgbWlkTW9kaWZpZWRBcnIsIHF1aXRFYXJseUFycik7XG4gICAgICAgIHZhciBtaWRPcmlnaW5hbCA9IG1pZE9yaWdpbmFsQXJyWzBdO1xuICAgICAgICB2YXIgbWlkTW9kaWZpZWQgPSBtaWRNb2RpZmllZEFyclswXTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gUmVzdWx0IGlzIG5vdC1udWxsIHdoZW4gdGhlcmUgd2FzIGVub3VnaCBtZW1vcnkgdG8gY29tcHV0ZSB0aGUgY2hhbmdlcyB3aGlsZVxuICAgICAgICAgICAgLy8gc2VhcmNoaW5nIGZvciB0aGUgcmVjdXJzaW9uIHBvaW50XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFxdWl0RWFybHlBcnJbMF0pIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBicmVhayB0aGUgcHJvYmxlbSBkb3duIHJlY3Vyc2l2ZWx5IGJ5IGZpbmRpbmcgdGhlIGNoYW5nZXMgaW4gdGhlXG4gICAgICAgICAgICAvLyBGaXJzdCBIYWxmOiAgIChvcmlnaW5hbFN0YXJ0LCBtb2RpZmllZFN0YXJ0KSB0byAobWlkT3JpZ2luYWwsIG1pZE1vZGlmaWVkKVxuICAgICAgICAgICAgLy8gU2Vjb25kIEhhbGY6ICAobWlkT3JpZ2luYWwgKyAxLCBtaW5Nb2RpZmllZCArIDEpIHRvIChvcmlnaW5hbEVuZCwgbW9kaWZpZWRFbmQpXG4gICAgICAgICAgICAvLyBOT1RFOiBDb21wdXRlRGlmZigpIGlzIGluY2x1c2l2ZSwgdGhlcmVmb3JlIHRoZSBzZWNvbmQgcmFuZ2Ugc3RhcnRzIG9uIHRoZSBuZXh0IHBvaW50XG4gICAgICAgICAgICB2YXIgbGVmdENoYW5nZXMgPSB0aGlzLkNvbXB1dGVEaWZmUmVjdXJzaXZlKG9yaWdpbmFsU3RhcnQsIG1pZE9yaWdpbmFsLCBtb2RpZmllZFN0YXJ0LCBtaWRNb2RpZmllZCwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgICAgIHZhciByaWdodENoYW5nZXMgPSBbXTtcbiAgICAgICAgICAgIGlmICghcXVpdEVhcmx5QXJyWzBdKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRDaGFuZ2VzID0gdGhpcy5Db21wdXRlRGlmZlJlY3Vyc2l2ZShtaWRPcmlnaW5hbCArIDEsIG9yaWdpbmFsRW5kLCBtaWRNb2RpZmllZCArIDEsIG1vZGlmaWVkRW5kLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZGlkJ3QgaGF2ZSB0aW1lIHRvIGZpbmlzaCB0aGUgZmlyc3QgaGFsZiwgc28gd2UgZG9uJ3QgaGF2ZSB0aW1lIHRvIGNvbXB1dGUgdGhpcyBoYWxmLlxuICAgICAgICAgICAgICAgIC8vIENvbnNpZGVyIHRoZSBlbnRpcmUgcmVzdCBvZiB0aGUgc2VxdWVuY2UgZGlmZmVyZW50LlxuICAgICAgICAgICAgICAgIHJpZ2h0Q2hhbmdlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERpZmZDaGFuZ2UobWlkT3JpZ2luYWwgKyAxLCBvcmlnaW5hbEVuZCAtIChtaWRPcmlnaW5hbCArIDEpICsgMSwgbWlkTW9kaWZpZWQgKyAxLCBtb2RpZmllZEVuZCAtIChtaWRNb2RpZmllZCArIDEpICsgMSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29uY2F0ZW5hdGVDaGFuZ2VzKGxlZnRDaGFuZ2VzLCByaWdodENoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGhpdCBoZXJlLCB3ZSBxdWl0IGVhcmx5LCBhbmQgc28gY2FuJ3QgcmV0dXJuIGFueXRoaW5nIG1lYW5pbmdmdWxcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCArIDEsIG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCArIDEpXG4gICAgICAgIF07XG4gICAgfTtcbiAgICBMY3NEaWZmLnByb3RvdHlwZS5XQUxLVFJBQ0UgPSBmdW5jdGlvbiAoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHZhciBmb3J3YXJkQ2hhbmdlcyA9IG51bGwsIHJldmVyc2VDaGFuZ2VzID0gbnVsbDtcbiAgICAgICAgLy8gRmlyc3QsIHdhbGsgYmFja3dhcmQgdGhyb3VnaCB0aGUgZm9yd2FyZCBkaWFnb25hbHMgaGlzdG9yeVxuICAgICAgICB2YXIgY2hhbmdlSGVscGVyID0gbmV3IERpZmZDaGFuZ2VIZWxwZXIoKTtcbiAgICAgICAgdmFyIGRpYWdvbmFsTWluID0gZGlhZ29uYWxGb3J3YXJkU3RhcnQ7XG4gICAgICAgIHZhciBkaWFnb25hbE1heCA9IGRpYWdvbmFsRm9yd2FyZEVuZDtcbiAgICAgICAgdmFyIGRpYWdvbmFsUmVsYXRpdmUgPSAobWlkT3JpZ2luYWxBcnJbMF0gLSBtaWRNb2RpZmllZEFyclswXSkgLSBkaWFnb25hbEZvcndhcmRPZmZzZXQ7XG4gICAgICAgIHZhciBsYXN0T3JpZ2luYWxJbmRleCA9IE51bWJlci5NSU5fVkFMVUU7XG4gICAgICAgIHZhciBoaXN0b3J5SW5kZXggPSB0aGlzLm1fZm9yd2FyZEhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGRpYWdvbmFsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRpYWdvbmFsIGluZGV4IGZyb20gdGhlIHJlbGF0aXZlIGRpYWdvbmFsIG51bWJlclxuICAgICAgICAgICAgZGlhZ29uYWwgPSBkaWFnb25hbFJlbGF0aXZlICsgZGlhZ29uYWxGb3J3YXJkQmFzZTtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hlcmUgd2UgY2FtZSBmcm9tXG4gICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsTWluIHx8IChkaWFnb25hbCA8IGRpYWdvbmFsTWF4ICYmIGZvcndhcmRQb2ludHNbZGlhZ29uYWwgLSAxXSA8IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhbiBpbnNlcnQpXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXTtcbiAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIGRpYWdvbmFsUmVsYXRpdmUgLSBkaWFnb25hbEZvcndhcmRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPCBsYXN0T3JpZ2luYWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIZWxwZXIuTWFya05leHRDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRNb2RpZmllZEVsZW1lbnQob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgKyAxKSAtIGRpYWdvbmFsRm9yd2FyZEJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhIGRlbGV0aW9uKVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsIC0gMV0gKyAxO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsRm9yd2FyZE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA8IGxhc3RPcmlnaW5hbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRPcmlnaW5hbEVsZW1lbnQob3JpZ2luYWxJbmRleCwgbW9kaWZpZWRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgLSAxKSAtIGRpYWdvbmFsRm9yd2FyZEJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpc3RvcnlJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yd2FyZFBvaW50cyA9IHRoaXMubV9mb3J3YXJkSGlzdG9yeVtoaXN0b3J5SW5kZXhdO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsRm9yd2FyZEJhc2UgPSBmb3J3YXJkUG9pbnRzWzBdOyAvL1dlIHN0b3JlZCB0aGlzIGluIHRoZSBmaXJzdCBzcG90XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxNaW4gPSAxO1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsTWF4ID0gZm9yd2FyZFBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgtLWhpc3RvcnlJbmRleCA+PSAtMSk7XG4gICAgICAgIC8vIElyb25pY2FsbHksIHdlIGdldCB0aGUgZm9yd2FyZCBjaGFuZ2VzIGFzIHRoZSByZXZlcnNlIG9mIHRoZVxuICAgICAgICAvLyBvcmRlciB3ZSBhZGRlZCB0aGVtIHNpbmNlIHdlIHRlY2huaWNhbGx5IGFkZGVkIHRoZW0gYmFja3dhcmRzXG4gICAgICAgIGZvcndhcmRDaGFuZ2VzID0gY2hhbmdlSGVscGVyLmdldFJldmVyc2VDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChxdWl0RWFybHlBcnJbMF0pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IENhbGN1bGF0ZSBhIHBhcnRpYWwgZnJvbSB0aGUgcmV2ZXJzZSBkaWFnb25hbHMuXG4gICAgICAgICAgICAvLyAgICAgICBGb3Igbm93LCBqdXN0IGFzc3VtZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBtaWRPcmlnaW5hbC9taWRNb2RpZmllZCBwb2ludCBpcyBhIGRpZmZcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0UG9pbnQgPSBtaWRPcmlnaW5hbEFyclswXSArIDE7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRTdGFydFBvaW50ID0gbWlkTW9kaWZpZWRBcnJbMF0gKyAxO1xuICAgICAgICAgICAgaWYgKGZvcndhcmRDaGFuZ2VzICE9PSBudWxsICYmIGZvcndhcmRDaGFuZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEZvcndhcmRDaGFuZ2UgPSBmb3J3YXJkQ2hhbmdlc1tmb3J3YXJkQ2hhbmdlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0UG9pbnQgPSBNYXRoLm1heChvcmlnaW5hbFN0YXJ0UG9pbnQsIGxhc3RGb3J3YXJkQ2hhbmdlLmdldE9yaWdpbmFsRW5kKCkpO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRQb2ludCA9IE1hdGgubWF4KG1vZGlmaWVkU3RhcnRQb2ludCwgbGFzdEZvcndhcmRDaGFuZ2UuZ2V0TW9kaWZpZWRFbmQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXZlcnNlQ2hhbmdlcyA9IFtcbiAgICAgICAgICAgICAgICBuZXcgRGlmZkNoYW5nZShvcmlnaW5hbFN0YXJ0UG9pbnQsIG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydFBvaW50ICsgMSwgbW9kaWZpZWRTdGFydFBvaW50LCBtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnRQb2ludCArIDEpXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm93IHdhbGsgYmFja3dhcmQgdGhyb3VnaCB0aGUgcmV2ZXJzZSBkaWFnb25hbHMgaGlzdG9yeVxuICAgICAgICAgICAgY2hhbmdlSGVscGVyID0gbmV3IERpZmZDaGFuZ2VIZWxwZXIoKTtcbiAgICAgICAgICAgIGRpYWdvbmFsTWluID0gZGlhZ29uYWxSZXZlcnNlU3RhcnQ7XG4gICAgICAgICAgICBkaWFnb25hbE1heCA9IGRpYWdvbmFsUmV2ZXJzZUVuZDtcbiAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAobWlkT3JpZ2luYWxBcnJbMF0gLSBtaWRNb2RpZmllZEFyclswXSkgLSBkaWFnb25hbFJldmVyc2VPZmZzZXQ7XG4gICAgICAgICAgICBsYXN0T3JpZ2luYWxJbmRleCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICBoaXN0b3J5SW5kZXggPSAoZGVsdGFJc0V2ZW4pID8gdGhpcy5tX3JldmVyc2VIaXN0b3J5Lmxlbmd0aCAtIDEgOiB0aGlzLm1fcmV2ZXJzZUhpc3RvcnkubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGRpYWdvbmFsIGluZGV4IGZyb20gdGhlIHJlbGF0aXZlIGRpYWdvbmFsIG51bWJlclxuICAgICAgICAgICAgICAgIGRpYWdvbmFsID0gZGlhZ29uYWxSZWxhdGl2ZSArIGRpYWdvbmFsUmV2ZXJzZUJhc2U7XG4gICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGVyZSB3ZSBjYW1lIGZyb21cbiAgICAgICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsTWluIHx8IChkaWFnb25hbCA8IGRpYWdvbmFsTWF4ICYmIHJldmVyc2VQb2ludHNbZGlhZ29uYWwgLSAxXSA+PSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhvcml6b250YWwgbGluZSAodGhlIGVsZW1lbnQgaXMgYSBkZWxldGlvbikpXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsICsgMV0gLSAxO1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIGRpYWdvbmFsUmVsYXRpdmUgLSBkaWFnb25hbFJldmVyc2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4ID4gbGFzdE9yaWdpbmFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5NYXJrTmV4dENoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmlnaW5hbEluZGV4ID0gb3JpZ2luYWxJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUhlbHBlci5BZGRPcmlnaW5hbEVsZW1lbnQob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlhZ29uYWxSZWxhdGl2ZSA9IChkaWFnb25hbCArIDEpIC0gZGlhZ29uYWxSZXZlcnNlQmFzZTsgLy9TZXR1cCBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBsaW5lICh0aGUgZWxlbWVudCBpcyBhbiBpbnNlcnRpb24pXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gZGlhZ29uYWxSZWxhdGl2ZSAtIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPiBsYXN0T3JpZ2luYWxJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGVscGVyLk1hcmtOZXh0Q2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIZWxwZXIuQWRkTW9kaWZpZWRFbGVtZW50KG9yaWdpbmFsSW5kZXggKyAxLCBtb2RpZmllZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsUmVsYXRpdmUgPSAoZGlhZ29uYWwgLSAxKSAtIGRpYWdvbmFsUmV2ZXJzZUJhc2U7IC8vU2V0dXAgZm9yIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVBvaW50cyA9IHRoaXMubV9yZXZlcnNlSGlzdG9yeVtoaXN0b3J5SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbFJldmVyc2VCYXNlID0gcmV2ZXJzZVBvaW50c1swXTsgLy9XZSBzdG9yZWQgdGhpcyBpbiB0aGUgZmlyc3Qgc3BvdFxuICAgICAgICAgICAgICAgICAgICBkaWFnb25hbE1pbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGRpYWdvbmFsTWF4ID0gcmV2ZXJzZVBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKC0taGlzdG9yeUluZGV4ID49IC0xKTtcbiAgICAgICAgICAgIC8vIFRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgcmV2ZXJzZSBoaXN0b3J5IHdpbGwgZmluZCBkaWZmcyB0aGF0XG4gICAgICAgICAgICAvLyBhcmUgY29ycmVjdCwgYnV0IG5vdCBpbnR1aXRpdmUsIHNvIHdlIG5lZWQgc2hpZnQgdGhlbS5cbiAgICAgICAgICAgIHJldmVyc2VDaGFuZ2VzID0gY2hhbmdlSGVscGVyLmdldENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Db25jYXRlbmF0ZUNoYW5nZXMoZm9yd2FyZENoYW5nZXMsIHJldmVyc2VDaGFuZ2VzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHRoZSByYW5nZSB0byBjb21wdXRlIHRoZSBkaWZmIG9uLCB0aGlzIG1ldGhvZCBmaW5kcyB0aGUgcG9pbnQ6XG4gICAgICogKG1pZE9yaWdpbmFsLCBtaWRNb2RpZmllZClcbiAgICAgKiB0aGF0IGV4aXN0cyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBMQ1Mgb2YgdGhlIHR3byBzZXF1ZW5jZXMgYW5kXG4gICAgICogaXMgdGhlIHBvaW50IGF0IHdoaWNoIHRoZSBMQ1MgcHJvYmxlbSBtYXkgYmUgYnJva2VuIGRvd24gcmVjdXJzaXZlbHkuXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCB0cnkgdG8ga2VlcCB0aGUgTENTIHRyYWNlIGluIG1lbW9yeS4gSWYgdGhlIExDUyByZWN1cnNpb25cbiAgICAgKiBwb2ludCBpcyBjYWxjdWxhdGVkIGFuZCB0aGUgZnVsbCB0cmFjZSBpcyBhdmFpbGFibGUgaW4gbWVtb3J5LCB0aGVuIHRoaXMgbWV0aG9kXG4gICAgICogd2lsbCByZXR1cm4gdGhlIGNoYW5nZSBsaXN0LlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFN0YXJ0IFRoZSBzdGFydCBib3VuZCBvZiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxFbmQgVGhlIGVuZCBib3VuZCBvZiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UgcmFuZ2VcbiAgICAgKiBAcGFyYW0gbW9kaWZpZWRTdGFydCBUaGUgc3RhcnQgYm91bmQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1vZGlmaWVkRW5kIFRoZSBlbmQgYm91bmQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1pZE9yaWdpbmFsIFRoZSBtaWRkbGUgcG9pbnQgb2YgdGhlIG9yaWdpbmFsIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHBhcmFtIG1pZE1vZGlmaWVkIFRoZSBtaWRkbGUgcG9pbnQgb2YgdGhlIG1vZGlmaWVkIHNlcXVlbmNlIHJhbmdlXG4gICAgICogQHJldHVybnMgVGhlIGRpZmYgY2hhbmdlcywgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgbnVsbFxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNvbXB1dGVSZWN1cnNpb25Qb2ludCA9IGZ1bmN0aW9uIChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbEVuZCwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQsIG1pZE9yaWdpbmFsQXJyLCBtaWRNb2RpZmllZEFyciwgcXVpdEVhcmx5QXJyKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEluZGV4LCBtb2RpZmllZEluZGV4O1xuICAgICAgICB2YXIgZGlhZ29uYWxGb3J3YXJkU3RhcnQgPSAwLCBkaWFnb25hbEZvcndhcmRFbmQgPSAwO1xuICAgICAgICB2YXIgZGlhZ29uYWxSZXZlcnNlU3RhcnQgPSAwLCBkaWFnb25hbFJldmVyc2VFbmQgPSAwO1xuICAgICAgICB2YXIgbnVtRGlmZmVyZW5jZXM7XG4gICAgICAgIC8vIFRvIHRyYXZlcnNlIHRoZSBlZGl0IGdyYXBoIGFuZCBwcm9kdWNlIHRoZSBwcm9wZXIgTENTLCBvdXIgYWN0dWFsXG4gICAgICAgIC8vIHN0YXJ0IHBvc2l0aW9uIGlzIGp1c3Qgb3V0c2lkZSB0aGUgZ2l2ZW4gYm91bmRhcnlcbiAgICAgICAgb3JpZ2luYWxTdGFydC0tO1xuICAgICAgICBtb2RpZmllZFN0YXJ0LS07XG4gICAgICAgIC8vIFdlIHNldCB0aGVzZSB1cCB0byBtYWtlIHRoZSBjb21waWxlciBoYXBweSwgYnV0IHRoZXkgd2lsbFxuICAgICAgICAvLyBiZSByZXBsYWNlZCBiZWZvcmUgd2UgcmV0dXJuIHdpdGggdGhlIGFjdHVhbCByZWN1cnNpb24gcG9pbnRcbiAgICAgICAgbWlkT3JpZ2luYWxBcnJbMF0gPSAwO1xuICAgICAgICBtaWRNb2RpZmllZEFyclswXSA9IDA7XG4gICAgICAgIC8vIENsZWFyIG91dCB0aGUgaGlzdG9yeVxuICAgICAgICB0aGlzLm1fZm9yd2FyZEhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5tX3JldmVyc2VIaXN0b3J5ID0gW107XG4gICAgICAgIC8vIEVhY2ggY2VsbCBpbiB0aGUgdHdvIGFycmF5cyBjb3JyZXNwb25kcyB0byBhIGRpYWdvbmFsIGluIHRoZSBlZGl0IGdyYXBoLlxuICAgICAgICAvLyBUaGUgaW50ZWdlciB2YWx1ZSBpbiB0aGUgY2VsbCByZXByZXNlbnRzIHRoZSBvcmlnaW5hbEluZGV4IG9mIHRoZSBmdXJ0aGVzdFxuICAgICAgICAvLyByZWFjaGluZyBwb2ludCBmb3VuZCBzbyBmYXIgdGhhdCBlbmRzIGluIHRoYXQgZGlhZ29uYWwuXG4gICAgICAgIC8vIFRoZSBtb2RpZmllZEluZGV4IGNhbiBiZSBjb21wdXRlZCBtYXRoZW1hdGljYWxseSBmcm9tIHRoZSBvcmlnaW5hbEluZGV4IGFuZCB0aGUgZGlhZ29uYWwgbnVtYmVyLlxuICAgICAgICB2YXIgbWF4RGlmZmVyZW5jZXMgPSAob3JpZ2luYWxFbmQgLSBvcmlnaW5hbFN0YXJ0KSArIChtb2RpZmllZEVuZCAtIG1vZGlmaWVkU3RhcnQpO1xuICAgICAgICB2YXIgbnVtRGlhZ29uYWxzID0gbWF4RGlmZmVyZW5jZXMgKyAxO1xuICAgICAgICB2YXIgZm9yd2FyZFBvaW50cyA9IG5ldyBBcnJheShudW1EaWFnb25hbHMpO1xuICAgICAgICB2YXIgcmV2ZXJzZVBvaW50cyA9IG5ldyBBcnJheShudW1EaWFnb25hbHMpO1xuICAgICAgICAvLyBkaWFnb25hbEZvcndhcmRCYXNlOiBJbmRleCBpbnRvIGZvcndhcmRQb2ludHMgb2YgdGhlIGRpYWdvbmFsIHdoaWNoIHBhc3NlcyB0aHJvdWdoIChvcmlnaW5hbFN0YXJ0LCBtb2RpZmllZFN0YXJ0KVxuICAgICAgICAvLyBkaWFnb25hbFJldmVyc2VCYXNlOiBJbmRleCBpbnRvIHJldmVyc2VQb2ludHMgb2YgdGhlIGRpYWdvbmFsIHdoaWNoIHBhc3NlcyB0aHJvdWdoIChvcmlnaW5hbEVuZCwgbW9kaWZpZWRFbmQpXG4gICAgICAgIHZhciBkaWFnb25hbEZvcndhcmRCYXNlID0gKG1vZGlmaWVkRW5kIC0gbW9kaWZpZWRTdGFydCk7XG4gICAgICAgIHZhciBkaWFnb25hbFJldmVyc2VCYXNlID0gKG9yaWdpbmFsRW5kIC0gb3JpZ2luYWxTdGFydCk7XG4gICAgICAgIC8vIGRpYWdvbmFsRm9yd2FyZE9mZnNldDogR2VvbWV0cmljIG9mZnNldCB3aGljaCBhbGxvd3MgbW9kaWZpZWRJbmRleCB0byBiZSBjb21wdXRlZCBmcm9tIG9yaWdpbmFsSW5kZXggYW5kIHRoZVxuICAgICAgICAvLyAgICBkaWFnb25hbCBudW1iZXIgKHJlbGF0aXZlIHRvIGRpYWdvbmFsRm9yd2FyZEJhc2UpXG4gICAgICAgIC8vIGRpYWdvbmFsUmV2ZXJzZU9mZnNldDogR2VvbWV0cmljIG9mZnNldCB3aGljaCBhbGxvd3MgbW9kaWZpZWRJbmRleCB0byBiZSBjb21wdXRlZCBmcm9tIG9yaWdpbmFsSW5kZXggYW5kIHRoZVxuICAgICAgICAvLyAgICBkaWFnb25hbCBudW1iZXIgKHJlbGF0aXZlIHRvIGRpYWdvbmFsUmV2ZXJzZUJhc2UpXG4gICAgICAgIHZhciBkaWFnb25hbEZvcndhcmRPZmZzZXQgPSAob3JpZ2luYWxTdGFydCAtIG1vZGlmaWVkU3RhcnQpO1xuICAgICAgICB2YXIgZGlhZ29uYWxSZXZlcnNlT2Zmc2V0ID0gKG9yaWdpbmFsRW5kIC0gbW9kaWZpZWRFbmQpO1xuICAgICAgICAvLyBkZWx0YTogVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZW5kIGRpYWdvbmFsIGFuZCB0aGUgc3RhcnQgZGlhZ29uYWwuIFRoaXMgaXMgdXNlZCB0byByZWxhdGUgZGlhZ29uYWwgbnVtYmVyc1xuICAgICAgICAvLyAgIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBkaWFnb25hbCB3aXRoIGRpYWdvbmFsIG51bWJlcnMgcmVsYXRpdmUgdG8gdGhlIGVuZCBkaWFnb25hbC5cbiAgICAgICAgLy8gVGhlIEV2ZW4vT2Rkbi1uZXNzIG9mIHRoaXMgZGVsdGEgaXMgaW1wb3J0YW50IGZvciBkZXRlcm1pbmluZyB3aGVuIHdlIHNob3VsZCBjaGVjayBmb3Igb3ZlcmxhcFxuICAgICAgICB2YXIgZGVsdGEgPSBkaWFnb25hbFJldmVyc2VCYXNlIC0gZGlhZ29uYWxGb3J3YXJkQmFzZTtcbiAgICAgICAgdmFyIGRlbHRhSXNFdmVuID0gKGRlbHRhICUgMiA9PT0gMCk7XG4gICAgICAgIC8vIEhlcmUgd2Ugc2V0IHVwIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50cyBhcyB0aGUgZnVydGhlc3QgcG9pbnRzIGZvdW5kIHNvIGZhclxuICAgICAgICAvLyBpbiBib3RoIHRoZSBmb3J3YXJkIGFuZCByZXZlcnNlIGRpcmVjdGlvbnMsIHJlc3BlY3RpdmVseVxuICAgICAgICBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsRm9yd2FyZEJhc2VdID0gb3JpZ2luYWxTdGFydDtcbiAgICAgICAgcmV2ZXJzZVBvaW50c1tkaWFnb25hbFJldmVyc2VCYXNlXSA9IG9yaWdpbmFsRW5kO1xuICAgICAgICAvLyBSZW1lbWJlciBpZiB3ZSBxdWl0IGVhcmx5LCBhbmQgdGh1cyBuZWVkIHRvIGRvIGEgYmVzdC1lZmZvcnQgcmVzdWx0IGluc3RlYWQgb2YgYSByZWFsIHJlc3VsdC5cbiAgICAgICAgcXVpdEVhcmx5QXJyWzBdID0gZmFsc2U7XG4gICAgICAgIC8vIEEgY291cGxlIG9mIHBvaW50czpcbiAgICAgICAgLy8gLS1XaXRoIHRoaXMgbWV0aG9kLCB3ZSBpdGVyYXRlIG9uIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdHdvIHNlcXVlbmNlcy5cbiAgICAgICAgLy8gICBUaGUgbW9yZSBkaWZmZXJlbmNlcyB0aGVyZSBhY3R1YWxseSBhcmUsIHRoZSBsb25nZXIgdGhpcyB3aWxsIHRha2UuXG4gICAgICAgIC8vIC0tQWxzbywgYXMgdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlcyBpbmNyZWFzZXMsIHdlIGhhdmUgdG8gc2VhcmNoIG9uIGRpYWdvbmFscyBmdXJ0aGVyXG4gICAgICAgIC8vICAgYXdheSBmcm9tIHRoZSByZWZlcmVuY2UgZGlhZ29uYWwgKHdoaWNoIGlzIGRpYWdvbmFsRm9yd2FyZEJhc2UgZm9yIGZvcndhcmQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UgZm9yIHJldmVyc2UpLlxuICAgICAgICAvLyAtLVdlIGV4dGVuZCBvbiBldmVuIGRpYWdvbmFscyAocmVsYXRpdmUgdG8gdGhlIHJlZmVyZW5jZSBkaWFnb25hbCkgb25seSB3aGVuIG51bURpZmZlcmVuY2VzXG4gICAgICAgIC8vICAgaXMgZXZlbiBhbmQgb2RkIGRpYWdvbmFscyBvbmx5IHdoZW4gbnVtRGlmZmVyZW5jZXMgaXMgb2RkLlxuICAgICAgICB2YXIgZGlhZ29uYWwsIHRlbXBPcmlnaW5hbEluZGV4O1xuICAgICAgICBmb3IgKG51bURpZmZlcmVuY2VzID0gMTsgbnVtRGlmZmVyZW5jZXMgPD0gKG1heERpZmZlcmVuY2VzIC8gMikgKyAxOyBudW1EaWZmZXJlbmNlcysrKSB7XG4gICAgICAgICAgICB2YXIgZnVydGhlc3RPcmlnaW5hbEluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBmdXJ0aGVzdE1vZGlmaWVkSW5kZXggPSAwO1xuICAgICAgICAgICAgLy8gUnVuIHRoZSBhbGdvcml0aG0gaW4gdGhlIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgICAgICBkaWFnb25hbEZvcndhcmRTdGFydCA9IHRoaXMuQ2xpcERpYWdvbmFsQm91bmQoZGlhZ29uYWxGb3J3YXJkQmFzZSAtIG51bURpZmZlcmVuY2VzLCBudW1EaWZmZXJlbmNlcywgZGlhZ29uYWxGb3J3YXJkQmFzZSwgbnVtRGlhZ29uYWxzKTtcbiAgICAgICAgICAgIGRpYWdvbmFsRm9yd2FyZEVuZCA9IHRoaXMuQ2xpcERpYWdvbmFsQm91bmQoZGlhZ29uYWxGb3J3YXJkQmFzZSArIG51bURpZmZlcmVuY2VzLCBudW1EaWZmZXJlbmNlcywgZGlhZ29uYWxGb3J3YXJkQmFzZSwgbnVtRGlhZ29uYWxzKTtcbiAgICAgICAgICAgIGZvciAoZGlhZ29uYWwgPSBkaWFnb25hbEZvcndhcmRTdGFydDsgZGlhZ29uYWwgPD0gZGlhZ29uYWxGb3J3YXJkRW5kOyBkaWFnb25hbCArPSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gU1RFUCAxOiBXZSBleHRlbmQgdGhlIGZ1cnRoZXN0IHJlYWNoaW5nIHBvaW50IGluIHRoZSBwcmVzZW50IGRpYWdvbmFsXG4gICAgICAgICAgICAgICAgLy8gYnkgbG9va2luZyBhdCB0aGUgZGlhZ29uYWxzIGFib3ZlIGFuZCBiZWxvdyBhbmQgcGlja2luZyB0aGUgb25lIHdob3NlIHBvaW50XG4gICAgICAgICAgICAgICAgLy8gaXMgZnVydGhlciBhd2F5IGZyb20gdGhlIHN0YXJ0IHBvaW50IChvcmlnaW5hbFN0YXJ0LCBtb2RpZmllZFN0YXJ0KVxuICAgICAgICAgICAgICAgIGlmIChkaWFnb25hbCA9PT0gZGlhZ29uYWxGb3J3YXJkU3RhcnQgfHwgKGRpYWdvbmFsIDwgZGlhZ29uYWxGb3J3YXJkRW5kICYmIGZvcndhcmRQb2ludHNbZGlhZ29uYWwgLSAxXSA8IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9IGZvcndhcmRQb2ludHNbZGlhZ29uYWwgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsIC0gMV0gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb2RpZmllZEluZGV4ID0gb3JpZ2luYWxJbmRleCAtIChkaWFnb25hbCAtIGRpYWdvbmFsRm9yd2FyZEJhc2UpIC0gZGlhZ29uYWxGb3J3YXJkT2Zmc2V0O1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgb3JpZ2luYWxJbmRleCBzbyB3ZSBjYW4gdGVzdCBmb3IgZmFsc2Ugb3ZlcmxhcCBpbiBzdGVwIDNcbiAgICAgICAgICAgICAgICB0ZW1wT3JpZ2luYWxJbmRleCA9IG9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gU1RFUCAyOiBXZSBjYW4gY29udGludWUgdG8gZXh0ZW5kIHRoZSBmdXJ0aGVzdCByZWFjaGluZyBwb2ludCBpbiB0aGUgcHJlc2VudCBkaWFnb25hbFxuICAgICAgICAgICAgICAgIC8vIHNvIGxvbmcgYXMgdGhlIGVsZW1lbnRzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxJbmRleCA8IG9yaWdpbmFsRW5kICYmIG1vZGlmaWVkSW5kZXggPCBtb2RpZmllZEVuZCAmJiB0aGlzLkVsZW1lbnRzQXJlRXF1YWwob3JpZ2luYWxJbmRleCArIDEsIG1vZGlmaWVkSW5kZXggKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yd2FyZFBvaW50c1tkaWFnb25hbF0gPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEluZGV4ICsgbW9kaWZpZWRJbmRleCA+IGZ1cnRoZXN0T3JpZ2luYWxJbmRleCArIGZ1cnRoZXN0TW9kaWZpZWRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBmdXJ0aGVzdE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBmdXJ0aGVzdE1vZGlmaWVkSW5kZXggPSBtb2RpZmllZEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTVEVQIDM6IElmIGRlbHRhIGlzIG9kZCAob3ZlcmxhcCBmaXJzdCBoYXBwZW5zIG9uIGZvcndhcmQgd2hlbiBkZWx0YSBpcyBvZGQpXG4gICAgICAgICAgICAgICAgLy8gYW5kIGRpYWdvbmFsIGlzIGluIHRoZSByYW5nZSBvZiByZXZlcnNlIGRpYWdvbmFscyBjb21wdXRlZCBmb3IgbnVtRGlmZmVyZW5jZXMtMVxuICAgICAgICAgICAgICAgIC8vICh0aGUgcHJldmlvdXMgaXRlcmF0aW9uOyB3ZSBoYXZlbid0IGNvbXB1dGVkIHJldmVyc2UgZGlhZ29uYWxzIGZvciBudW1EaWZmZXJlbmNlcyB5ZXQpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBjaGVjayBmb3Igb3ZlcmxhcC5cbiAgICAgICAgICAgICAgICBpZiAoIWRlbHRhSXNFdmVuICYmIE1hdGguYWJzKGRpYWdvbmFsIC0gZGlhZ29uYWxSZXZlcnNlQmFzZSkgPD0gKG51bURpZmZlcmVuY2VzIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5kZXggPj0gcmV2ZXJzZVBvaW50c1tkaWFnb25hbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZE9yaWdpbmFsQXJyWzBdID0gb3JpZ2luYWxJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZE1vZGlmaWVkQXJyWzBdID0gbW9kaWZpZWRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wT3JpZ2luYWxJbmRleCA8PSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsXSAmJiBNYXhEaWZmZXJlbmNlc0hpc3RvcnkgPiAwICYmIG51bURpZmZlcmVuY2VzIDw9IChNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJJTkdPISBXZSBvdmVybGFwcGVkLCBhbmQgd2UgaGF2ZSB0aGUgZnVsbCB0cmFjZSBpbiBtZW1vcnkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV0FMS1RSQUNFKGRpYWdvbmFsRm9yd2FyZEJhc2UsIGRpYWdvbmFsRm9yd2FyZFN0YXJ0LCBkaWFnb25hbEZvcndhcmRFbmQsIGRpYWdvbmFsRm9yd2FyZE9mZnNldCwgZGlhZ29uYWxSZXZlcnNlQmFzZSwgZGlhZ29uYWxSZXZlcnNlU3RhcnQsIGRpYWdvbmFsUmV2ZXJzZUVuZCwgZGlhZ29uYWxSZXZlcnNlT2Zmc2V0LCBmb3J3YXJkUG9pbnRzLCByZXZlcnNlUG9pbnRzLCBvcmlnaW5hbEluZGV4LCBvcmlnaW5hbEVuZCwgbWlkT3JpZ2luYWxBcnIsIG1vZGlmaWVkSW5kZXgsIG1vZGlmaWVkRW5kLCBtaWRNb2RpZmllZEFyciwgZGVsdGFJc0V2ZW4sIHF1aXRFYXJseUFycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFaXRoZXIgZmFsc2Ugb3ZlcmxhcCwgb3Igd2UgZGlkbid0IGhhdmUgZW5vdWdoIG1lbW9yeSBmb3IgdGhlIGZ1bGwgdHJhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKdXN0IHJldHVybiB0aGUgcmVjdXJzaW9uIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2Ugc2hvdWxkIGJlIHF1aXR0aW5nIGVhcmx5LCBiZWZvcmUgbW92aW5nIG9uIHRvIHRoZSBuZXh0IGl0ZXJhdGlvbi5cbiAgICAgICAgICAgIHZhciBtYXRjaExlbmd0aE9mTG9uZ2VzdCA9ICgoZnVydGhlc3RPcmlnaW5hbEluZGV4IC0gb3JpZ2luYWxTdGFydCkgKyAoZnVydGhlc3RNb2RpZmllZEluZGV4IC0gbW9kaWZpZWRTdGFydCkgLSBudW1EaWZmZXJlbmNlcykgLyAyO1xuICAgICAgICAgICAgaWYgKHRoaXMuQ29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlICE9PSBudWxsICYmICF0aGlzLkNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZShmdXJ0aGVzdE9yaWdpbmFsSW5kZXgsIHRoaXMuT3JpZ2luYWxTZXF1ZW5jZSwgbWF0Y2hMZW5ndGhPZkxvbmdlc3QpKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgZmluaXNoLCBzbyBza2lwIGFoZWFkIHRvIGdlbmVyYXRpbmcgYSByZXN1bHQgZnJvbSB3aGF0IHdlIGhhdmUuXG4gICAgICAgICAgICAgICAgcXVpdEVhcmx5QXJyWzBdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGZ1cnRoZXN0IGRpc3RhbmNlIHdlIGdvdCBpbiB0aGUgZm9yd2FyZCBkaXJlY3Rpb24uXG4gICAgICAgICAgICAgICAgbWlkT3JpZ2luYWxBcnJbMF0gPSBmdXJ0aGVzdE9yaWdpbmFsSW5kZXg7XG4gICAgICAgICAgICAgICAgbWlkTW9kaWZpZWRBcnJbMF0gPSBmdXJ0aGVzdE1vZGlmaWVkSW5kZXg7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoTGVuZ3RoT2ZMb25nZXN0ID4gMCAmJiBNYXhEaWZmZXJlbmNlc0hpc3RvcnkgPiAwICYmIG51bURpZmZlcmVuY2VzIDw9IChNYXhEaWZmZXJlbmNlc0hpc3RvcnkgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbm91Z2ggb2YgdGhlIGhpc3RvcnkgaXMgaW4gbWVtb3J5IHRvIHdhbGsgaXQgYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldBTEtUUkFDRShkaWFnb25hbEZvcndhcmRCYXNlLCBkaWFnb25hbEZvcndhcmRTdGFydCwgZGlhZ29uYWxGb3J3YXJkRW5kLCBkaWFnb25hbEZvcndhcmRPZmZzZXQsIGRpYWdvbmFsUmV2ZXJzZUJhc2UsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCBkaWFnb25hbFJldmVyc2VFbmQsIGRpYWdvbmFsUmV2ZXJzZU9mZnNldCwgZm9yd2FyZFBvaW50cywgcmV2ZXJzZVBvaW50cywgb3JpZ2luYWxJbmRleCwgb3JpZ2luYWxFbmQsIG1pZE9yaWdpbmFsQXJyLCBtb2RpZmllZEluZGV4LCBtb2RpZmllZEVuZCwgbWlkTW9kaWZpZWRBcnIsIGRlbHRhSXNFdmVuLCBxdWl0RWFybHlBcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgZGlkbid0IGFjdHVhbGx5IHJlbWVtYmVyIGVub3VnaCBvZiB0aGUgaGlzdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgLy9TaW5jZSB3ZSBhcmUgcXVpdGluZyB0aGUgZGlmZiBlYXJseSwgd2UgbmVlZCB0byBzaGlmdCBiYWNrIHRoZSBvcmlnaW5hbFN0YXJ0IGFuZCBtb2RpZmllZCBzdGFydFxuICAgICAgICAgICAgICAgICAgICAvL2JhY2sgaW50byB0aGUgYm91bmRhcnkgbGltaXRzIHNpbmNlIHdlIGRlY3JlbWVudGVkIHRoZWlyIHZhbHVlIGFib3ZlIGJleW9uZCB0aGUgYm91bmRhcnkgbGltaXQuXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnQrKztcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpZmZDaGFuZ2Uob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxFbmQgLSBvcmlnaW5hbFN0YXJ0ICsgMSwgbW9kaWZpZWRTdGFydCwgbW9kaWZpZWRFbmQgLSBtb2RpZmllZFN0YXJ0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSdW4gdGhlIGFsZ29yaXRobSBpbiB0aGUgcmV2ZXJzZSBkaXJlY3Rpb25cbiAgICAgICAgICAgIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0ID0gdGhpcy5DbGlwRGlhZ29uYWxCb3VuZChkaWFnb25hbFJldmVyc2VCYXNlIC0gbnVtRGlmZmVyZW5jZXMsIG51bURpZmZlcmVuY2VzLCBkaWFnb25hbFJldmVyc2VCYXNlLCBudW1EaWFnb25hbHMpO1xuICAgICAgICAgICAgZGlhZ29uYWxSZXZlcnNlRW5kID0gdGhpcy5DbGlwRGlhZ29uYWxCb3VuZChkaWFnb25hbFJldmVyc2VCYXNlICsgbnVtRGlmZmVyZW5jZXMsIG51bURpZmZlcmVuY2VzLCBkaWFnb25hbFJldmVyc2VCYXNlLCBudW1EaWFnb25hbHMpO1xuICAgICAgICAgICAgZm9yIChkaWFnb25hbCA9IGRpYWdvbmFsUmV2ZXJzZVN0YXJ0OyBkaWFnb25hbCA8PSBkaWFnb25hbFJldmVyc2VFbmQ7IGRpYWdvbmFsICs9IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBTVEVQIDE6IFdlIGV4dGVuZCB0aGUgZnVydGhlc3QgcmVhY2hpbmcgcG9pbnQgaW4gdGhlIHByZXNlbnQgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICAvLyBieSBsb29raW5nIGF0IHRoZSBkaWFnb25hbHMgYWJvdmUgYW5kIGJlbG93IGFuZCBwaWNraW5nIHRoZSBvbmUgd2hvc2UgcG9pbnRcbiAgICAgICAgICAgICAgICAvLyBpcyBmdXJ0aGVyIGF3YXkgZnJvbSB0aGUgc3RhcnQgcG9pbnQgKG9yaWdpbmFsRW5kLCBtb2RpZmllZEVuZClcbiAgICAgICAgICAgICAgICBpZiAoZGlhZ29uYWwgPT09IGRpYWdvbmFsUmV2ZXJzZVN0YXJ0IHx8IChkaWFnb25hbCA8IGRpYWdvbmFsUmV2ZXJzZUVuZCAmJiByZXZlcnNlUG9pbnRzW2RpYWdvbmFsIC0gMV0gPj0gcmV2ZXJzZVBvaW50c1tkaWFnb25hbCArIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4ID0gcmV2ZXJzZVBvaW50c1tkaWFnb25hbCArIDFdIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPSByZXZlcnNlUG9pbnRzW2RpYWdvbmFsIC0gMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXggPSBvcmlnaW5hbEluZGV4IC0gKGRpYWdvbmFsIC0gZGlhZ29uYWxSZXZlcnNlQmFzZSkgLSBkaWFnb25hbFJldmVyc2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBvcmlnaW5hbEluZGV4IHNvIHdlIGNhbiB0ZXN0IGZvciBmYWxzZSBvdmVybGFwXG4gICAgICAgICAgICAgICAgdGVtcE9yaWdpbmFsSW5kZXggPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFNURVAgMjogV2UgY2FuIGNvbnRpbnVlIHRvIGV4dGVuZCB0aGUgZnVydGhlc3QgcmVhY2hpbmcgcG9pbnQgaW4gdGhlIHByZXNlbnQgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICAvLyBhcyBsb25nIGFzIHRoZSBlbGVtZW50cyBhcmUgZXF1YWwuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsSW5kZXggPiBvcmlnaW5hbFN0YXJ0ICYmIG1vZGlmaWVkSW5kZXggPiBtb2RpZmllZFN0YXJ0ICYmIHRoaXMuRWxlbWVudHNBcmVFcXVhbChvcmlnaW5hbEluZGV4LCBtb2RpZmllZEluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkSW5kZXgtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV2ZXJzZVBvaW50c1tkaWFnb25hbF0gPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgIC8vIFNURVAgNDogSWYgZGVsdGEgaXMgZXZlbiAob3ZlcmxhcCBmaXJzdCBoYXBwZW5zIG9uIHJldmVyc2Ugd2hlbiBkZWx0YSBpcyBldmVuKVxuICAgICAgICAgICAgICAgIC8vIGFuZCBkaWFnb25hbCBpcyBpbiB0aGUgcmFuZ2Ugb2YgZm9yd2FyZCBkaWFnb25hbHMgY29tcHV0ZWQgZm9yIG51bURpZmZlcmVuY2VzXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBjaGVjayBmb3Igb3ZlcmxhcC5cbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFJc0V2ZW4gJiYgTWF0aC5hYnMoZGlhZ29uYWwgLSBkaWFnb25hbEZvcndhcmRCYXNlKSA8PSBudW1EaWZmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJbmRleCA8PSBmb3J3YXJkUG9pbnRzW2RpYWdvbmFsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkT3JpZ2luYWxBcnJbMF0gPSBvcmlnaW5hbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkTW9kaWZpZWRBcnJbMF0gPSBtb2RpZmllZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBPcmlnaW5hbEluZGV4ID49IGZvcndhcmRQb2ludHNbZGlhZ29uYWxdICYmIE1heERpZmZlcmVuY2VzSGlzdG9yeSA+IDAgJiYgbnVtRGlmZmVyZW5jZXMgPD0gKE1heERpZmZlcmVuY2VzSGlzdG9yeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQklOR08hIFdlIG92ZXJsYXBwZWQsIGFuZCB3ZSBoYXZlIHRoZSBmdWxsIHRyYWNlIGluIG1lbW9yeSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XQUxLVFJBQ0UoZGlhZ29uYWxGb3J3YXJkQmFzZSwgZGlhZ29uYWxGb3J3YXJkU3RhcnQsIGRpYWdvbmFsRm9yd2FyZEVuZCwgZGlhZ29uYWxGb3J3YXJkT2Zmc2V0LCBkaWFnb25hbFJldmVyc2VCYXNlLCBkaWFnb25hbFJldmVyc2VTdGFydCwgZGlhZ29uYWxSZXZlcnNlRW5kLCBkaWFnb25hbFJldmVyc2VPZmZzZXQsIGZvcndhcmRQb2ludHMsIHJldmVyc2VQb2ludHMsIG9yaWdpbmFsSW5kZXgsIG9yaWdpbmFsRW5kLCBtaWRPcmlnaW5hbEFyciwgbW9kaWZpZWRJbmRleCwgbW9kaWZpZWRFbmQsIG1pZE1vZGlmaWVkQXJyLCBkZWx0YUlzRXZlbiwgcXVpdEVhcmx5QXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVpdGhlciBmYWxzZSBvdmVybGFwLCBvciB3ZSBkaWRuJ3QgaGF2ZSBlbm91Z2ggbWVtb3J5IGZvciB0aGUgZnVsbCB0cmFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1c3QgcmV0dXJuIHRoZSByZWN1cnNpb24gcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCB2ZWN0b3JzIHRvIGhpc3RvcnkgYmVmb3JlIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgaWYgKG51bURpZmZlcmVuY2VzIDw9IE1heERpZmZlcmVuY2VzSGlzdG9yeSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBhbGxvY2F0aW5nIHNwYWNlIGZvciBvbmUgZXh0cmEgaW50LCB3aGljaCB3ZSBmaWxsIHdpdGhcbiAgICAgICAgICAgICAgICAvLyB0aGUgaW5kZXggb2YgdGhlIGRpYWdvbmFsIGJhc2UgaW5kZXhcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IG5ldyBBcnJheShkaWFnb25hbEZvcndhcmRFbmQgLSBkaWFnb25hbEZvcndhcmRTdGFydCArIDIpO1xuICAgICAgICAgICAgICAgIHRlbXBbMF0gPSBkaWFnb25hbEZvcndhcmRCYXNlIC0gZGlhZ29uYWxGb3J3YXJkU3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIE15QXJyYXkuQ29weShmb3J3YXJkUG9pbnRzLCBkaWFnb25hbEZvcndhcmRTdGFydCwgdGVtcCwgMSwgZGlhZ29uYWxGb3J3YXJkRW5kIC0gZGlhZ29uYWxGb3J3YXJkU3RhcnQgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1fZm9yd2FyZEhpc3RvcnkucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgICAgICB0ZW1wID0gbmV3IEFycmF5KGRpYWdvbmFsUmV2ZXJzZUVuZCAtIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0ICsgMik7XG4gICAgICAgICAgICAgICAgdGVtcFswXSA9IGRpYWdvbmFsUmV2ZXJzZUJhc2UgLSBkaWFnb25hbFJldmVyc2VTdGFydCArIDE7XG4gICAgICAgICAgICAgICAgTXlBcnJheS5Db3B5KHJldmVyc2VQb2ludHMsIGRpYWdvbmFsUmV2ZXJzZVN0YXJ0LCB0ZW1wLCAxLCBkaWFnb25hbFJldmVyc2VFbmQgLSBkaWFnb25hbFJldmVyc2VTdGFydCArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMubV9yZXZlcnNlSGlzdG9yeS5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGdvdCBoZXJlLCB0aGVuIHdlIGhhdmUgdGhlIGZ1bGwgdHJhY2UgaW4gaGlzdG9yeS4gV2UganVzdCBoYXZlIHRvIGNvbnZlcnQgaXQgdG8gYSBjaGFuZ2UgbGlzdFxuICAgICAgICAvLyBOT1RFOiBUaGlzIHBhcnQgaXMgYSBiaXQgbWVzc3lcbiAgICAgICAgcmV0dXJuIHRoaXMuV0FMS1RSQUNFKGRpYWdvbmFsRm9yd2FyZEJhc2UsIGRpYWdvbmFsRm9yd2FyZFN0YXJ0LCBkaWFnb25hbEZvcndhcmRFbmQsIGRpYWdvbmFsRm9yd2FyZE9mZnNldCwgZGlhZ29uYWxSZXZlcnNlQmFzZSwgZGlhZ29uYWxSZXZlcnNlU3RhcnQsIGRpYWdvbmFsUmV2ZXJzZUVuZCwgZGlhZ29uYWxSZXZlcnNlT2Zmc2V0LCBmb3J3YXJkUG9pbnRzLCByZXZlcnNlUG9pbnRzLCBvcmlnaW5hbEluZGV4LCBvcmlnaW5hbEVuZCwgbWlkT3JpZ2luYWxBcnIsIG1vZGlmaWVkSW5kZXgsIG1vZGlmaWVkRW5kLCBtaWRNb2RpZmllZEFyciwgZGVsdGFJc0V2ZW4sIHF1aXRFYXJseUFycik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTaGlmdHMgdGhlIGdpdmVuIGNoYW5nZXMgdG8gcHJvdmlkZSBhIG1vcmUgaW50dWl0aXZlIGRpZmYuXG4gICAgICogV2hpbGUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYSBkaWZmIG1hdGNoZXMgdGhlIGZpcnN0IGVsZW1lbnQgYWZ0ZXIgdGhlIGRpZmYsXG4gICAgICogd2Ugc2hpZnQgdGhlIGRpZmYgZG93bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBsaXN0IG9mIGNoYW5nZXMgdG8gc2hpZnRcbiAgICAgKiBAcmV0dXJucyBUaGUgc2hpZnRlZCBjaGFuZ2VzXG4gICAgICovXG4gICAgTGNzRGlmZi5wcm90b3R5cGUuU2hpZnRDaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdmFyIG1lcmdlZERpZmZzO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBtZXJnZWREaWZmcyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU2hpZnQgYWxsIHRoZSBjaGFuZ2VzIGRvd24gZmlyc3RcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0b3AgPSAoaSA8IGNoYW5nZXMubGVuZ3RoIC0gMSkgPyBjaGFuZ2VzW2kgKyAxXS5vcmlnaW5hbFN0YXJ0IDogdGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldExlbmd0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZFN0b3AgPSAoaSA8IGNoYW5nZXMubGVuZ3RoIC0gMSkgPyBjaGFuZ2VzW2kgKyAxXS5tb2RpZmllZFN0YXJ0IDogdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldExlbmd0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBjaGVja09yaWdpbmFsID0gY2hhbmdlLm9yaWdpbmFsTGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tNb2RpZmllZCA9IGNoYW5nZS5tb2RpZmllZExlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoIDwgb3JpZ2luYWxTdG9wICYmXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5tb2RpZmllZFN0YXJ0ICsgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoIDwgbW9kaWZpZWRTdG9wICYmXG4gICAgICAgICAgICAgICAgICAgICghY2hlY2tPcmlnaW5hbCB8fCB0aGlzLk9yaWdpbmFsRWxlbWVudHNBcmVFcXVhbChjaGFuZ2Uub3JpZ2luYWxTdGFydCwgY2hhbmdlLm9yaWdpbmFsU3RhcnQgKyBjaGFuZ2Uub3JpZ2luYWxMZW5ndGgpKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIWNoZWNrTW9kaWZpZWQgfHwgdGhpcy5Nb2RpZmllZEVsZW1lbnRzQXJlRXF1YWwoY2hhbmdlLm1vZGlmaWVkU3RhcnQsIGNoYW5nZS5tb2RpZmllZFN0YXJ0ICsgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLm9yaWdpbmFsU3RhcnQrKztcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLm1vZGlmaWVkU3RhcnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBCdWlsZCB1cCB0aGUgbmV3IGxpc3QgKHdlIGhhdmUgdG8gYnVpbGQgYSBuZXcgbGlzdCBiZWNhdXNlIHdlXG4gICAgICAgICAgICAvLyBtaWdodCBoYXZlIGNoYW5nZXMgd2UgY2FuIG1lcmdlIHRvZ2V0aGVyIG5vdylcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHZhciBtZXJnZWRDaGFuZ2VBcnIgPSBbbnVsbF07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGNoYW5nZXMubGVuZ3RoIC0gMSAmJiB0aGlzLkNoYW5nZXNPdmVybGFwKGNoYW5nZXNbaV0sIGNoYW5nZXNbaSArIDFdLCBtZXJnZWRDaGFuZ2VBcnIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZERpZmZzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWVyZ2VkQ2hhbmdlQXJyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hhbmdlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlcyA9IHJlc3VsdDtcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkRGlmZnMpO1xuICAgICAgICAvLyBTaGlmdCBjaGFuZ2VzIGJhY2sgdXAgdW50aWwgd2UgaGl0IGVtcHR5IG9yIHdoaXRlc3BhY2Utb25seSBsaW5lc1xuICAgICAgICBmb3IgKHZhciBpID0gY2hhbmdlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTdG9wID0gMDtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0b3AgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZDaGFuZ2UgPSBjaGFuZ2VzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAocHJldkNoYW5nZS5vcmlnaW5hbExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdG9wID0gcHJldkNoYW5nZS5vcmlnaW5hbFN0YXJ0ICsgcHJldkNoYW5nZS5vcmlnaW5hbExlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZDaGFuZ2UubW9kaWZpZWRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RvcCA9IHByZXZDaGFuZ2UubW9kaWZpZWRTdGFydCArIHByZXZDaGFuZ2UubW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoZWNrT3JpZ2luYWwgPSBjaGFuZ2Uub3JpZ2luYWxMZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGNoZWNrTW9kaWZpZWQgPSBjaGFuZ2UubW9kaWZpZWRMZW5ndGggPiAwO1xuICAgICAgICAgICAgdmFyIGJlc3REZWx0YSA9IDA7XG4gICAgICAgICAgICB2YXIgYmVzdFNjb3JlID0gdGhpcy5fYm91bmRhcnlTY29yZShjaGFuZ2Uub3JpZ2luYWxTdGFydCwgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoLCBjaGFuZ2UubW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGRlbHRhID0gMTs7IGRlbHRhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTdGFydCA9IGNoYW5nZS5vcmlnaW5hbFN0YXJ0IC0gZGVsdGE7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnQgPSBjaGFuZ2UubW9kaWZpZWRTdGFydCAtIGRlbHRhO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0YXJ0IDwgb3JpZ2luYWxTdG9wIHx8IG1vZGlmaWVkU3RhcnQgPCBtb2RpZmllZFN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja09yaWdpbmFsICYmICF0aGlzLk9yaWdpbmFsRWxlbWVudHNBcmVFcXVhbChvcmlnaW5hbFN0YXJ0LCBvcmlnaW5hbFN0YXJ0ICsgY2hhbmdlLm9yaWdpbmFsTGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTW9kaWZpZWQgJiYgIXRoaXMuTW9kaWZpZWRFbGVtZW50c0FyZUVxdWFsKG1vZGlmaWVkU3RhcnQsIG1vZGlmaWVkU3RhcnQgKyBjaGFuZ2UubW9kaWZpZWRMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSB0aGlzLl9ib3VuZGFyeVNjb3JlKG9yaWdpbmFsU3RhcnQsIGNoYW5nZS5vcmlnaW5hbExlbmd0aCwgbW9kaWZpZWRTdGFydCwgY2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGJlc3REZWx0YSA9IGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZS5vcmlnaW5hbFN0YXJ0IC09IGJlc3REZWx0YTtcbiAgICAgICAgICAgIGNoYW5nZS5tb2RpZmllZFN0YXJ0IC09IGJlc3REZWx0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlcztcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9PcmlnaW5hbElzQm91bmRhcnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDw9IDAgfHwgaW5kZXggPj0gdGhpcy5PcmlnaW5hbFNlcXVlbmNlLmdldExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLk9yaWdpbmFsU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyAmJiAvXlxccyokLy50ZXN0KGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9PcmlnaW5hbFJlZ2lvbklzQm91bmRhcnkgPSBmdW5jdGlvbiAob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX09yaWdpbmFsSXNCb3VuZGFyeShvcmlnaW5hbFN0YXJ0KSB8fCB0aGlzLl9PcmlnaW5hbElzQm91bmRhcnkob3JpZ2luYWxTdGFydCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZ2luYWxMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFbmQgPSBvcmlnaW5hbFN0YXJ0ICsgb3JpZ2luYWxMZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5fT3JpZ2luYWxJc0JvdW5kYXJ5KG9yaWdpbmFsRW5kIC0gMSkgfHwgdGhpcy5fT3JpZ2luYWxJc0JvdW5kYXJ5KG9yaWdpbmFsRW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9Nb2RpZmllZElzQm91bmRhcnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDw9IDAgfHwgaW5kZXggPj0gdGhpcy5Nb2RpZmllZFNlcXVlbmNlLmdldExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLk1vZGlmaWVkU2VxdWVuY2UuZ2V0RWxlbWVudEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyAmJiAvXlxccyokLy50ZXN0KGVsZW1lbnQpKTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9Nb2RpZmllZFJlZ2lvbklzQm91bmRhcnkgPSBmdW5jdGlvbiAobW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuX01vZGlmaWVkSXNCb3VuZGFyeShtb2RpZmllZFN0YXJ0KSB8fCB0aGlzLl9Nb2RpZmllZElzQm91bmRhcnkobW9kaWZpZWRTdGFydCAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kaWZpZWRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRFbmQgPSBtb2RpZmllZFN0YXJ0ICsgbW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICBpZiAodGhpcy5fTW9kaWZpZWRJc0JvdW5kYXJ5KG1vZGlmaWVkRW5kIC0gMSkgfHwgdGhpcy5fTW9kaWZpZWRJc0JvdW5kYXJ5KG1vZGlmaWVkRW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIExjc0RpZmYucHJvdG90eXBlLl9ib3VuZGFyeVNjb3JlID0gZnVuY3Rpb24gKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZExlbmd0aCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxTY29yZSA9ICh0aGlzLl9PcmlnaW5hbFJlZ2lvbklzQm91bmRhcnkob3JpZ2luYWxTdGFydCwgb3JpZ2luYWxMZW5ndGgpID8gMSA6IDApO1xuICAgICAgICB2YXIgbW9kaWZpZWRTY29yZSA9ICh0aGlzLl9Nb2RpZmllZFJlZ2lvbklzQm91bmRhcnkobW9kaWZpZWRTdGFydCwgbW9kaWZpZWRMZW5ndGgpID8gMSA6IDApO1xuICAgICAgICByZXR1cm4gKG9yaWdpbmFsU2NvcmUgKyBtb2RpZmllZFNjb3JlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbmNhdGVuYXRlcyB0aGUgdHdvIGlucHV0IERpZmZDaGFuZ2UgbGlzdHMgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZ1xuICAgICAqIGxpc3QuXG4gICAgICogQHBhcmFtIFRoZSBsZWZ0IGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gVGhlIHJpZ2h0IGNoYW5nZXNcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uY2F0ZW5hdGVkIGxpc3RcbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5Db25jYXRlbmF0ZUNoYW5nZXMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIG1lcmdlZENoYW5nZUFyciA9IFtdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGxlZnQubGVuZ3RoID09PSAwIHx8IHJpZ2h0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChyaWdodC5sZW5ndGggPiAwKSA/IHJpZ2h0IDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLkNoYW5nZXNPdmVybGFwKGxlZnRbbGVmdC5sZW5ndGggLSAxXSwgcmlnaHRbMF0sIG1lcmdlZENoYW5nZUFycikpIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHdlIGJyZWFrIHRoZSBwcm9ibGVtIGRvd24gcmVjdXJzaXZlbHksIGl0IGlzIHBvc3NpYmxlIHRoYXQgd2VcbiAgICAgICAgICAgIC8vIG1pZ2h0IHJlY3Vyc2UgaW4gdGhlIG1pZGRsZSBvZiBhIGNoYW5nZSB0aGVyZWJ5IHNwbGl0dGluZyBpdCBpbnRvXG4gICAgICAgICAgICAvLyB0d28gY2hhbmdlcy4gSGVyZSBpbiB0aGUgY29tYmluaW5nIHN0YWdlLCB3ZSBkZXRlY3QgYW5kIGZ1c2UgdGhvc2VcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgYmFjayB0b2dldGhlclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KGxlZnQubGVuZ3RoICsgcmlnaHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkobGVmdCwgMCwgcmVzdWx0LCAwLCBsZWZ0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVzdWx0W2xlZnQubGVuZ3RoIC0gMV0gPSBtZXJnZWRDaGFuZ2VBcnJbMF07XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkocmlnaHQsIDEsIHJlc3VsdCwgbGVmdC5sZW5ndGgsIHJpZ2h0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZWZ0Lmxlbmd0aCArIHJpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkobGVmdCwgMCwgcmVzdWx0LCAwLCBsZWZ0Lmxlbmd0aCk7XG4gICAgICAgICAgICBNeUFycmF5LkNvcHkocmlnaHQsIDAsIHJlc3VsdCwgbGVmdC5sZW5ndGgsIHJpZ2h0Lmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byBjaGFuZ2VzIG92ZXJsYXAgYW5kIGNhbiBiZSBtZXJnZWQgaW50byBhIHNpbmdsZVxuICAgICAqIGNoYW5nZVxuICAgICAqIEBwYXJhbSBsZWZ0IFRoZSBsZWZ0IGNoYW5nZVxuICAgICAqIEBwYXJhbSByaWdodCBUaGUgcmlnaHQgY2hhbmdlXG4gICAgICogQHBhcmFtIG1lcmdlZENoYW5nZSBUaGUgbWVyZ2VkIGNoYW5nZSBpZiB0aGUgdHdvIG92ZXJsYXAsIG51bGwgb3RoZXJ3aXNlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHdvIGNoYW5nZXMgb3ZlcmxhcFxuICAgICAqL1xuICAgIExjc0RpZmYucHJvdG90eXBlLkNoYW5nZXNPdmVybGFwID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBtZXJnZWRDaGFuZ2VBcnIpIHtcbiAgICAgICAgRGVidWcuQXNzZXJ0KGxlZnQub3JpZ2luYWxTdGFydCA8PSByaWdodC5vcmlnaW5hbFN0YXJ0LCAnTGVmdCBjaGFuZ2UgaXMgbm90IGxlc3MgdGhhbiBvciBlcXVhbCB0byByaWdodCBjaGFuZ2UnKTtcbiAgICAgICAgRGVidWcuQXNzZXJ0KGxlZnQubW9kaWZpZWRTdGFydCA8PSByaWdodC5tb2RpZmllZFN0YXJ0LCAnTGVmdCBjaGFuZ2UgaXMgbm90IGxlc3MgdGhhbiBvciBlcXVhbCB0byByaWdodCBjaGFuZ2UnKTtcbiAgICAgICAgaWYgKGxlZnQub3JpZ2luYWxTdGFydCArIGxlZnQub3JpZ2luYWxMZW5ndGggPj0gcmlnaHQub3JpZ2luYWxTdGFydCB8fCBsZWZ0Lm1vZGlmaWVkU3RhcnQgKyBsZWZ0Lm1vZGlmaWVkTGVuZ3RoID49IHJpZ2h0Lm1vZGlmaWVkU3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0ID0gbGVmdC5vcmlnaW5hbFN0YXJ0O1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGVuZ3RoID0gbGVmdC5vcmlnaW5hbExlbmd0aDtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0YXJ0ID0gbGVmdC5tb2RpZmllZFN0YXJ0O1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkTGVuZ3RoID0gbGVmdC5tb2RpZmllZExlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZWZ0Lm9yaWdpbmFsU3RhcnQgKyBsZWZ0Lm9yaWdpbmFsTGVuZ3RoID49IHJpZ2h0Lm9yaWdpbmFsU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbExlbmd0aCA9IHJpZ2h0Lm9yaWdpbmFsU3RhcnQgKyByaWdodC5vcmlnaW5hbExlbmd0aCAtIGxlZnQub3JpZ2luYWxTdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZWZ0Lm1vZGlmaWVkU3RhcnQgKyBsZWZ0Lm1vZGlmaWVkTGVuZ3RoID49IHJpZ2h0Lm1vZGlmaWVkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllZExlbmd0aCA9IHJpZ2h0Lm1vZGlmaWVkU3RhcnQgKyByaWdodC5tb2RpZmllZExlbmd0aCAtIGxlZnQubW9kaWZpZWRTdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lcmdlZENoYW5nZUFyclswXSA9IG5ldyBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZExlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZENoYW5nZUFyclswXSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdXNlZCB0byBjbGlwIGEgZGlhZ29uYWwgaW5kZXggdG8gdGhlIHJhbmdlIG9mIHZhbGlkXG4gICAgICogZGlhZ29uYWxzLiBUaGlzIGFsc28gZGVjaWRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgZGlhZ29uYWwgaW5kZXgsXG4gICAgICogaWYgaXQgZXhjZWVkcyB0aGUgYm91bmRhcnksIHNob3VsZCBiZSBjbGlwcGVkIHRvIHRoZSBib3VuZGFyeSBvciBjbGlwcGVkXG4gICAgICogb25lIGluc2lkZSB0aGUgYm91bmRhcnkgZGVwZW5kaW5nIG9uIHRoZSBFdmVuL09kZCBzdGF0dXMgb2YgdGhlIGJvdW5kYXJ5XG4gICAgICogYW5kIG51bURpZmZlcmVuY2VzLlxuICAgICAqIEBwYXJhbSBkaWFnb25hbCBUaGUgaW5kZXggb2YgdGhlIGRpYWdvbmFsIHRvIGNsaXAuXG4gICAgICogQHBhcmFtIG51bURpZmZlcmVuY2VzIFRoZSBjdXJyZW50IG51bWJlciBvZiBkaWZmZXJlbmNlcyBiZWluZyBpdGVyYXRlZCB1cG9uLlxuICAgICAqIEBwYXJhbSBkaWFnb25hbEJhc2VJbmRleCBUaGUgYmFzZSByZWZlcmVuY2UgZGlhZ29uYWwuXG4gICAgICogQHBhcmFtIG51bURpYWdvbmFscyBUaGUgdG90YWwgbnVtYmVyIG9mIGRpYWdvbmFscy5cbiAgICAgKiBAcmV0dXJucyBUaGUgY2xpcHBlZCBkaWFnb25hbCBpbmRleC5cbiAgICAgKi9cbiAgICBMY3NEaWZmLnByb3RvdHlwZS5DbGlwRGlhZ29uYWxCb3VuZCA9IGZ1bmN0aW9uIChkaWFnb25hbCwgbnVtRGlmZmVyZW5jZXMsIGRpYWdvbmFsQmFzZUluZGV4LCBudW1EaWFnb25hbHMpIHtcbiAgICAgICAgaWYgKGRpYWdvbmFsID49IDAgJiYgZGlhZ29uYWwgPCBudW1EaWFnb25hbHMpIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gY2xpcCwgaXRzIGluIHJhbmdlXG4gICAgICAgICAgICByZXR1cm4gZGlhZ29uYWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlhZ29uYWxzQmVsb3c6IFRoZSBudW1iZXIgb2YgZGlhZ29uYWxzIGJlbG93IHRoZSByZWZlcmVuY2UgZGlhZ29uYWxcbiAgICAgICAgLy8gZGlhZ29uYWxzQWJvdmU6IFRoZSBudW1iZXIgb2YgZGlhZ29uYWxzIGFib3ZlIHRoZSByZWZlcmVuY2UgZGlhZ29uYWxcbiAgICAgICAgdmFyIGRpYWdvbmFsc0JlbG93ID0gZGlhZ29uYWxCYXNlSW5kZXg7XG4gICAgICAgIHZhciBkaWFnb25hbHNBYm92ZSA9IG51bURpYWdvbmFscyAtIGRpYWdvbmFsQmFzZUluZGV4IC0gMTtcbiAgICAgICAgdmFyIGRpZmZFdmVuID0gKG51bURpZmZlcmVuY2VzICUgMiA9PT0gMCk7XG4gICAgICAgIGlmIChkaWFnb25hbCA8IDApIHtcbiAgICAgICAgICAgIHZhciBsb3dlckJvdW5kRXZlbiA9IChkaWFnb25hbHNCZWxvdyAlIDIgPT09IDApO1xuICAgICAgICAgICAgcmV0dXJuIChkaWZmRXZlbiA9PT0gbG93ZXJCb3VuZEV2ZW4pID8gMCA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdXBwZXJCb3VuZEV2ZW4gPSAoZGlhZ29uYWxzQWJvdmUgJSAyID09PSAwKTtcbiAgICAgICAgICAgIHJldHVybiAoZGlmZkV2ZW4gPT09IHVwcGVyQm91bmRFdmVuKSA/IG51bURpYWdvbmFscyAtIDEgOiBudW1EaWFnb25hbHMgLSAyO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGNzRGlmZjtcbn0oKSk7XG5leHBvcnQgeyBMY3NEaWZmIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogUmVwcmVzZW50cyBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gc2VxdWVuY2VzLlxuICovXG52YXIgRGlmZkNoYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IERpZmZDaGFuZ2Ugd2l0aCB0aGUgZ2l2ZW4gc2VxdWVuY2UgaW5mb3JtYXRpb25cbiAgICAgKiBhbmQgY29udGVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEaWZmQ2hhbmdlKG9yaWdpbmFsU3RhcnQsIG9yaWdpbmFsTGVuZ3RoLCBtb2RpZmllZFN0YXJ0LCBtb2RpZmllZExlbmd0aCkge1xuICAgICAgICAvL0RlYnVnLkFzc2VydChvcmlnaW5hbExlbmd0aCA+IDAgfHwgbW9kaWZpZWRMZW5ndGggPiAwLCBcIm9yaWdpbmFsTGVuZ3RoIGFuZCBtb2RpZmllZExlbmd0aCBjYW5ub3QgYm90aCBiZSA8PSAwXCIpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3RhcnQgPSBvcmlnaW5hbFN0YXJ0O1xuICAgICAgICB0aGlzLm9yaWdpbmFsTGVuZ3RoID0gb3JpZ2luYWxMZW5ndGg7XG4gICAgICAgIHRoaXMubW9kaWZpZWRTdGFydCA9IG1vZGlmaWVkU3RhcnQ7XG4gICAgICAgIHRoaXMubW9kaWZpZWRMZW5ndGggPSBtb2RpZmllZExlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGVuZCBwb2ludCAoZXhjbHVzaXZlKSBvZiB0aGUgY2hhbmdlIGluIHRoZSBvcmlnaW5hbCBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBEaWZmQ2hhbmdlLnByb3RvdHlwZS5nZXRPcmlnaW5hbEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxTdGFydCArIHRoaXMub3JpZ2luYWxMZW5ndGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgZW5kIHBvaW50IChleGNsdXNpdmUpIG9mIHRoZSBjaGFuZ2UgaW4gdGhlIG1vZGlmaWVkIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIERpZmZDaGFuZ2UucHJvdG90eXBlLmdldE1vZGlmaWVkRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmllZFN0YXJ0ICsgdGhpcy5tb2RpZmllZExlbmd0aDtcbiAgICB9O1xuICAgIHJldHVybiBEaWZmQ2hhbmdlO1xufSgpKTtcbmV4cG9ydCB7IERpZmZDaGFuZ2UgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgVFByb21pc2UgfSBmcm9tICcuL3dpbmpzLmJhc2UuanMnO1xuLy8gLS0tLS0tIEJFR0lOIEhvb2sgdXAgZXJyb3IgbGlzdGVuZXJzIHRvIHdpbmpzIHByb21pc2VzXG52YXIgb3V0c3RhbmRpbmdQcm9taXNlRXJyb3JzID0ge307XG5mdW5jdGlvbiBwcm9taXNlRXJyb3JIYW5kbGVyKGUpIHtcbiAgICAvL1xuICAgIC8vIGUuZGV0YWlsIGxvb2tzIGxpa2U6IHsgZXhjZXB0aW9uLCBlcnJvciwgcHJvbWlzZSwgaGFuZGxlciwgaWQsIHBhcmVudCB9XG4gICAgLy9cbiAgICB2YXIgZGV0YWlscyA9IGUuZGV0YWlsO1xuICAgIHZhciBpZCA9IGRldGFpbHMuaWQ7XG4gICAgLy8gSWYgdGhlIGVycm9yIGhhcyBhIHBhcmVudCBwcm9taXNlIHRoZW4gdGhpcyBpcyBub3QgdGhlIG9yaWdpbmF0aW9uIG9mIHRoZVxuICAgIC8vICBlcnJvciBzbyB3ZSBjaGVjayBpZiBpdCBoYXMgYSBoYW5kbGVyLCBhbmQgaWYgc28gd2UgbWFyayB0aGF0IHRoZSBlcnJvclxuICAgIC8vICB3YXMgaGFuZGxlZCBieSByZW1vdmluZyBpdCBmcm9tIG91dHN0YW5kaW5nUHJvbWlzZUVycm9yc1xuICAgIC8vXG4gICAgaWYgKGRldGFpbHMucGFyZW50KSB7XG4gICAgICAgIGlmIChkZXRhaWxzLmhhbmRsZXIgJiYgb3V0c3RhbmRpbmdQcm9taXNlRXJyb3JzKSB7XG4gICAgICAgICAgICBkZWxldGUgb3V0c3RhbmRpbmdQcm9taXNlRXJyb3JzW2lkXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEluZGljYXRlIHRoYXQgdGhpcyBlcnJvciB3YXMgb3JpZ2luYXRlZCBhbmQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuICAgIG91dHN0YW5kaW5nUHJvbWlzZUVycm9yc1tpZF0gPSBkZXRhaWxzO1xuICAgIC8vIFRoZSBmaXJzdCB0aW1lIHRoZSBxdWV1ZSBmaWxscyB1cCB0aGlzIGl0ZXJhdGlvbiwgc2NoZWR1bGUgYSB0aW1lb3V0IHRvXG4gICAgLy8gY2hlY2sgaWYgYW55IGVycm9ycyBhcmUgc3RpbGwgdW5oYW5kbGVkLlxuICAgIGlmIChPYmplY3Qua2V5cyhvdXRzdGFuZGluZ1Byb21pc2VFcnJvcnMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlcnJvcnMgPSBvdXRzdGFuZGluZ1Byb21pc2VFcnJvcnM7XG4gICAgICAgICAgICBvdXRzdGFuZGluZ1Byb21pc2VFcnJvcnMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3JJZCkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tlcnJvcklkXTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVW5leHBlY3RlZEVycm9yKGVycm9yLmV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVW5leHBlY3RlZEVycm9yKGVycm9yLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1dBUk5JTkc6IFByb21pc2Ugd2l0aCBubyBlcnJvciBjYWxsYmFjazonICsgZXJyb3IuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLmV4Y2VwdGlvbi5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn1cblRQcm9taXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcHJvbWlzZUVycm9ySGFuZGxlcik7XG4vLyBBdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5IG9uIEV2ZW50RW1pdHRlciBieSBpbXBsZW1lbnRpbmcgYSBzdWJzZXQgb2YgdGhlIGludGVyZmFjZS5cbnZhciBFcnJvckhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXJyb3JIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuc3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSArICdcXG5cXG4nICsgZS5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgRXJyb3JIYW5kbGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEVycm9ySGFuZGxlci5wcm90b3R5cGUub25VbmV4cGVjdGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgICAgIHRoaXMuZW1pdChlKTtcbiAgICB9O1xuICAgIC8vIEZvciBleHRlcm5hbCBlcnJvcnMsIHdlIGRvbid0IHdhbnQgdGhlIGxpc3RlbmVycyB0byBiZSBjYWxsZWRcbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnVuZXhwZWN0ZWRFcnJvckhhbmRsZXIoZSk7XG4gICAgfTtcbiAgICByZXR1cm4gRXJyb3JIYW5kbGVyO1xufSgpKTtcbmV4cG9ydCB7IEVycm9ySGFuZGxlciB9O1xuZXhwb3J0IHZhciBlcnJvckhhbmRsZXIgPSBuZXcgRXJyb3JIYW5kbGVyKCk7XG5leHBvcnQgZnVuY3Rpb24gb25VbmV4cGVjdGVkRXJyb3IoZSkge1xuICAgIC8vIGlnbm9yZSBlcnJvcnMgZnJvbSBjYW5jZWxsZWQgcHJvbWlzZXNcbiAgICBpZiAoIWlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZSkpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyLm9uVW5leHBlY3RlZEVycm9yKGUpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSkge1xuICAgIC8vIGlnbm9yZSBlcnJvcnMgZnJvbSBjYW5jZWxsZWQgcHJvbWlzZXNcbiAgICBpZiAoIWlzUHJvbWlzZUNhbmNlbGVkRXJyb3IoZSkpIHtcbiAgICAgICAgZXJyb3JIYW5kbGVyLm9uVW5leHBlY3RlZEV4dGVybmFsRXJyb3IoZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGVycm9yKSB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGVycm9yLm5hbWUsIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFja3RyYWNlIHx8IGVycm9yLnN0YWNrO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJGlzRXJyb3I6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lXzEsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgc3RhY2s6IHN0YWNrXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJldHVybiBhcyBpc1xuICAgIHJldHVybiBlcnJvcjtcbn1cbnZhciBjYW5jZWxlZE5hbWUgPSAnQ2FuY2VsZWQnO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGVycm9yIGlzIGEgcHJvbWlzZSBpbiBjYW5jZWxlZCBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlQ2FuY2VsZWRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IGNhbmNlbGVkTmFtZSAmJiBlcnJvci5tZXNzYWdlID09PSBjYW5jZWxlZE5hbWU7XG59XG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdGhhdCBzaWduYWxzIGNhbmNlbGxhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbGVkKCkge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihjYW5jZWxlZE5hbWUpO1xuICAgIGVycm9yLm5hbWUgPSBlcnJvci5tZXNzYWdlO1xuICAgIHJldHVybiBlcnJvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbGxlZ2FsQXJndW1lbnQobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbGxlZ2FsIGFyZ3VtZW50OiBcIiArIG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudCcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbGxlZ2FsU3RhdGUobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbGxlZ2FsIHN0YXRlOiBcIiArIG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignSWxsZWdhbCBzdGF0ZScpO1xuICAgIH1cbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgb25VbmV4cGVjdGVkRXJyb3IgfSBmcm9tICcuL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBvbmNlIGFzIG9uY2VGbiB9IGZyb20gJy4vZnVuY3Rpb25hbC5qcyc7XG5pbXBvcnQgeyBjb21iaW5lZERpc3Bvc2FibGUsIERpc3Bvc2FibGUsIHRvRGlzcG9zYWJsZSB9IGZyb20gJy4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICcuL2xpbmtlZExpc3QuanMnO1xuZXhwb3J0IHZhciBFdmVudDtcbihmdW5jdGlvbiAoRXZlbnQpIHtcbiAgICB2YXIgX2Rpc3Bvc2FibGUgPSB7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgfSB9O1xuICAgIEV2ZW50Lk5vbmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfZGlzcG9zYWJsZTsgfTtcbn0pKEV2ZW50IHx8IChFdmVudCA9IHt9KSk7XG4vKipcbiAqIFRoZSBFbWl0dGVyIGNhbiBiZSB1c2VkIHRvIGV4cG9zZSBhbiBFdmVudCB0byB0aGUgcHVibGljXG4gKiB0byBmaXJlIGl0IGZyb20gdGhlIGluc2lkZXMuXG4gKiBTYW1wbGU6XG4gICAgY2xhc3MgRG9jdW1lbnQge1xuXG4gICAgICAgIHByaXZhdGUgX29uRGlkQ2hhbmdlID0gbmV3IEVtaXR0ZXI8KHZhbHVlOnN0cmluZyk9PmFueT4oKTtcblxuICAgICAgICBwdWJsaWMgb25EaWRDaGFuZ2UgPSB0aGlzLl9vbkRpZENoYW5nZS5ldmVudDtcblxuICAgICAgICAvLyBnZXR0ZXItc3R5bGVcbiAgICAgICAgLy8gZ2V0IG9uRGlkQ2hhbmdlKCk6IEV2ZW50PCh2YWx1ZTpzdHJpbmcpPT5hbnk+IHtcbiAgICAgICAgLy8gXHRyZXR1cm4gdGhpcy5fb25EaWRDaGFuZ2UuZXZlbnQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBwcml2YXRlIF9kb0l0KCkge1xuICAgICAgICAgICAgLy8uLi5cbiAgICAgICAgICAgIHRoaXMuX29uRGlkQ2hhbmdlLmZpcmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICovXG52YXIgRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbWl0dGVyKF9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVtaXR0ZXIucHJvdG90eXBlLCBcImV2ZW50XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciB0aGUgcHVibGljIHRvIGFsbG93IHRvIHN1YnNjcmliZVxuICAgICAgICAgKiB0byBldmVudHMgZnJvbSB0aGlzIEVtaXR0ZXJcbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudCA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycyA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0TGlzdGVuZXIgPSBfdGhpcy5fbGlzdGVuZXJzLmlzRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0TGlzdGVuZXIgJiYgX3RoaXMuX29wdGlvbnMgJiYgX3RoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5vbkZpcnN0TGlzdGVuZXJBZGQoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmUgPSBfdGhpcy5fbGlzdGVuZXJzLnB1c2goIXRoaXNBcmdzID8gbGlzdGVuZXIgOiBbbGlzdGVuZXIsIHRoaXNBcmdzXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdExpc3RlbmVyICYmIF90aGlzLl9vcHRpb25zICYmIF90aGlzLl9vcHRpb25zLm9uRmlyc3RMaXN0ZW5lckRpZEFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29wdGlvbnMub25GaXJzdExpc3RlbmVyRGlkQWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX29wdGlvbnMgJiYgX3RoaXMuX29wdGlvbnMub25MaXN0ZW5lckRpZEFkZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29wdGlvbnMub25MaXN0ZW5lckRpZEFkZChfdGhpcywgbGlzdGVuZXIsIHRoaXNBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRpc3Bvc2UgPSBFbWl0dGVyLl9ub29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX29wdGlvbnMgJiYgX3RoaXMuX29wdGlvbnMub25MYXN0TGlzdGVuZXJSZW1vdmUgJiYgX3RoaXMuX2xpc3RlbmVycy5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vcHRpb25zLm9uTGFzdExpc3RlbmVyUmVtb3ZlKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGlzcG9zYWJsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NhYmxlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUbyBiZSBrZXB0IHByaXZhdGUgdG8gZmlyZSBhbiBldmVudCB0b1xuICAgICAqIHN1YnNjcmliZXJzXG4gICAgICovXG4gICAgRW1pdHRlci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAvLyBwdXQgYWxsIFtsaXN0ZW5lcixldmVudF0tcGFpcnMgaW50byBkZWxpdmVyeSBxdWV1ZVxuICAgICAgICAgICAgLy8gdGhlbiBlbWl0IGFsbCBldmVudC4gYW4gaW5uZXIvbmVzdGVkIGV2ZW50IG1pZ2h0IGJlXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9mIHRoaXNcbiAgICAgICAgICAgIGlmICghdGhpcy5fZGVsaXZlcnlRdWV1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGl0ZXIgPSB0aGlzLl9saXN0ZW5lcnMuaXRlcmF0b3IoKSwgZSA9IGl0ZXIubmV4dCgpOyAhZS5kb25lOyBlID0gaXRlci5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxpdmVyeVF1ZXVlLnB1c2goW2UudmFsdWUsIGV2ZW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fZGVsaXZlcnlRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5fZGVsaXZlcnlRdWV1ZS5zaGlmdCgpLCBsaXN0ZW5lciA9IF9hWzBdLCBldmVudF8xID0gX2FbMV07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh1bmRlZmluZWQsIGV2ZW50XzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbMF0uY2FsbChsaXN0ZW5lclsxXSwgZXZlbnRfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb25VbmV4cGVjdGVkRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBFbWl0dGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2RlbGl2ZXJ5UXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlbGl2ZXJ5UXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kaXNwb3NlZCA9IHRydWU7XG4gICAgfTtcbiAgICBFbWl0dGVyLl9ub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIHJldHVybiBFbWl0dGVyO1xufSgpKTtcbmV4cG9ydCB7IEVtaXR0ZXIgfTtcbnZhciBFdmVudE11bHRpcGxleGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50TXVsdGlwbGV4ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgICAgIG9uRmlyc3RMaXN0ZW5lckFkZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25GaXJzdExpc3RlbmVyQWRkKCk7IH0sXG4gICAgICAgICAgICBvbkxhc3RMaXN0ZW5lclJlbW92ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub25MYXN0TGlzdGVuZXJSZW1vdmUoKTsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLCBcImV2ZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmV2ZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSB7IGV2ZW50OiBldmVudCwgbGlzdGVuZXI6IG51bGwgfTtcbiAgICAgICAgdGhpcy5ldmVudHMucHVzaChlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaGFzTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudW5ob29rKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkeCA9IF90aGlzLmV2ZW50cy5pbmRleE9mKGUpO1xuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdG9EaXNwb3NhYmxlKG9uY2VGbihkaXNwb3NlKSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5vbkZpcnN0TGlzdGVuZXJBZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFzTGlzdGVuZXJzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuaG9vayhlKTsgfSk7XG4gICAgfTtcbiAgICBFdmVudE11bHRpcGxleGVyLnByb3RvdHlwZS5vbkxhc3RMaXN0ZW5lclJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYXNMaXN0ZW5lcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMudW5ob29rKGUpOyB9KTtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlLmxpc3RlbmVyID0gZS5ldmVudChmdW5jdGlvbiAocikgeyByZXR1cm4gX3RoaXMuZW1pdHRlci5maXJlKHIpOyB9KTtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLnVuaG9vayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUubGlzdGVuZXIuZGlzcG9zZSgpO1xuICAgICAgICBlLmxpc3RlbmVyID0gbnVsbDtcbiAgICB9O1xuICAgIEV2ZW50TXVsdGlwbGV4ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5kaXNwb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRNdWx0aXBsZXhlcjtcbn0oKSk7XG5leHBvcnQgeyBFdmVudE11bHRpcGxleGVyIH07XG5leHBvcnQgZnVuY3Rpb24gb25jZShldmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IGV2ZW50KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXN1bHQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGUpO1xuICAgICAgICB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbnlFdmVudCgpIHtcbiAgICB2YXIgZXZlbnRzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZXZlbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICBpZiAodGhpc0FyZ3MgPT09IHZvaWQgMCkgeyB0aGlzQXJncyA9IG51bGw7IH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkRGlzcG9zYWJsZShldmVudHMubWFwKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZXZlbnQoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGUpOyB9LCBudWxsLCBkaXNwb3NhYmxlcyk7IH0pKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlRXZlbnQoZXZlbnQsIG1lcmdlciwgZGVsYXksIGxlYWRpbmcpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDEwMDsgfVxuICAgIGlmIChsZWFkaW5nID09PSB2b2lkIDApIHsgbGVhZGluZyA9IGZhbHNlOyB9XG4gICAgdmFyIHN1YnNjcmlwdGlvbjtcbiAgICB2YXIgb3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgIHZhciBoYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgdmFyIG51bURlYm91bmNlZENhbGxzID0gMDtcbiAgICB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKHtcbiAgICAgICAgb25GaXJzdExpc3RlbmVyQWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBldmVudChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICAgICAgICAgICAgbnVtRGVib3VuY2VkQ2FsbHMrKztcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBtZXJnZXIob3V0cHV0LCBjdXIpO1xuICAgICAgICAgICAgICAgIGlmIChsZWFkaW5nICYmICFoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5maXJlKG91dHB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX291dHB1dCA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbGVhZGluZyB8fCBudW1EZWJvdW5jZWRDYWxscyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZmlyZShfb3V0cHV0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBudW1EZWJvdW5jZWRDYWxscyA9IDA7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTGFzdExpc3RlbmVyUmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVtaXR0ZXIuZXZlbnQ7XG59XG4vKipcbiAqIFRoZSBFdmVudERlbGF5ZXIgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgaW4gd2hpY2ggeW91IHdhbnRcbiAqIHRvIGRlbGF5IGZpcmluZyB5b3VyIGV2ZW50cyBkdXJpbmcgc29tZSBjb2RlLlxuICogWW91IGNhbiB3cmFwIHRoYXQgY29kZSBhbmQgYmUgc3VyZSB0aGF0IHRoZSBldmVudCB3aWxsIG5vdFxuICogYmUgZmlyZWQgZHVyaW5nIHRoYXQgd3JhcC5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGVtaXR0ZXI6IEVtaXR0ZXI7XG4gKiBjb25zdCBkZWxheWVyID0gbmV3IEV2ZW50RGVsYXllcigpO1xuICogY29uc3QgZGVsYXllZEV2ZW50ID0gZGVsYXllci53cmFwRXZlbnQoZW1pdHRlci5ldmVudCk7XG4gKlxuICogZGVsYXllZEV2ZW50KGNvbnNvbGUubG9nKTtcbiAqXG4gKiBkZWxheWVyLmJ1ZmZlckV2ZW50cygoKSA9PiB7XG4gKiAgIGVtaXR0ZXIuZmlyZSgpOyAvLyBldmVudCB3aWxsIG5vdCBiZSBmaXJlZCB5ZXRcbiAqIH0pO1xuICpcbiAqIC8vIGV2ZW50IHdpbGwgb25seSBiZSBmaXJlZCBhdCB0aGlzIHBvaW50XG4gKiBgYGBcbiAqL1xudmFyIEV2ZW50QnVmZmVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRCdWZmZXJlcigpIHtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgfVxuICAgIEV2ZW50QnVmZmVyZXIucHJvdG90eXBlLndyYXBFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBfdGhpcy5idWZmZXJzW190aGlzLmJ1ZmZlcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBpKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXNBcmdzLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB2b2lkIDAsIGRpc3Bvc2FibGVzKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEV2ZW50QnVmZmVyZXIucHJvdG90eXBlLmJ1ZmZlckV2ZW50cyA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB2YXIgYnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGJ1ZmZlcik7XG4gICAgICAgIGZuKCk7XG4gICAgICAgIHRoaXMuYnVmZmVycy5wb3AoKTtcbiAgICAgICAgYnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGZsdXNoKSB7IHJldHVybiBmbHVzaCgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEJ1ZmZlcmVyO1xufSgpKTtcbmV4cG9ydCB7IEV2ZW50QnVmZmVyZXIgfTtcbmV4cG9ydCBmdW5jdGlvbiBtYXBFdmVudChldmVudCwgbWFwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgdGhpc0FyZ3MsIGRpc3Bvc2FibGVzKSB7XG4gICAgICAgIGlmICh0aGlzQXJncyA9PT0gdm9pZCAwKSB7IHRoaXNBcmdzID0gbnVsbDsgfVxuICAgICAgICByZXR1cm4gZXZlbnQoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIG1hcChpKSk7IH0sIG51bGwsIGRpc3Bvc2FibGVzKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckV2ZW50KGV2ZW50LCBmaWx0ZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3RlbmVyLCB0aGlzQXJncywgZGlzcG9zYWJsZXMpIHtcbiAgICAgICAgaWYgKHRoaXNBcmdzID09PSB2b2lkIDApIHsgdGhpc0FyZ3MgPSBudWxsOyB9XG4gICAgICAgIHJldHVybiBldmVudChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZmlsdGVyKGUpICYmIGxpc3RlbmVyLmNhbGwodGhpc0FyZ3MsIGUpOyB9LCBudWxsLCBkaXNwb3NhYmxlcyk7XG4gICAgfTtcbn1cbnZhciBDaGFpbmFibGVFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFpbmFibGVFdmVudChfZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBfZXZlbnQ7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFpbmFibGVFdmVudC5wcm90b3R5cGUsIFwiZXZlbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2V2ZW50OyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQobWFwRXZlbnQodGhpcy5fZXZlbnQsIGZuKSk7XG4gICAgfTtcbiAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hhaW5hYmxlRXZlbnQoZmlsdGVyRXZlbnQodGhpcy5fZXZlbnQsIGZuKSk7XG4gICAgfTtcbiAgICBDaGFpbmFibGVFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQobGlzdGVuZXIsIHRoaXNBcmdzLCBkaXNwb3NhYmxlcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhaW5hYmxlRXZlbnQ7XG59KCkpO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYWluKGV2ZW50KSB7XG4gICAgcmV0dXJuIG5ldyBDaGFpbmFibGVFdmVudChldmVudCk7XG59XG52YXIgUmVsYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVsYXkoKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB0aGlzLmVtaXR0ZXIuZXZlbnQ7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IERpc3Bvc2FibGUuTm9uZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlbGF5LnByb3RvdHlwZSwgXCJpbnB1dFwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5kaXNwb3NhYmxlID0gZXZlbnQodGhpcy5lbWl0dGVyLmZpcmUsIHRoaXMuZW1pdHRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJlbGF5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZGlzcG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbGF5O1xufSgpKTtcbmV4cG9ydCB7IFJlbGF5IH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGlkQ2FsbCA9IGZhbHNlO1xuICAgIHZhciByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZENhbGwpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGlkQ2FsbCA9IHRydWU7XG4gICAgICAgIHJlc3VsdCA9IGZuLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBLZXlDb2RlU3RyTWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleUNvZGVTdHJNYXAoKSB7XG4gICAgICAgIHRoaXMuX2tleUNvZGVUb1N0ciA9IFtdO1xuICAgICAgICB0aGlzLl9zdHJUb0tleUNvZGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBLZXlDb2RlU3RyTWFwLnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbiAoa2V5Q29kZSwgc3RyKSB7XG4gICAgICAgIHRoaXMuX2tleUNvZGVUb1N0cltrZXlDb2RlXSA9IHN0cjtcbiAgICAgICAgdGhpcy5fc3RyVG9LZXlDb2RlW3N0ci50b0xvd2VyQ2FzZSgpXSA9IGtleUNvZGU7XG4gICAgfTtcbiAgICBLZXlDb2RlU3RyTWFwLnByb3RvdHlwZS5rZXlDb2RlVG9TdHIgPSBmdW5jdGlvbiAoa2V5Q29kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5Q29kZVRvU3RyW2tleUNvZGVdO1xuICAgIH07XG4gICAgS2V5Q29kZVN0ck1hcC5wcm90b3R5cGUuc3RyVG9LZXlDb2RlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyVG9LZXlDb2RlW3N0ci50b0xvd2VyQ2FzZSgpXSB8fCAwIC8qIFVua25vd24gKi87XG4gICAgfTtcbiAgICByZXR1cm4gS2V5Q29kZVN0ck1hcDtcbn0oKSk7XG52YXIgdWlNYXAgPSBuZXcgS2V5Q29kZVN0ck1hcCgpO1xudmFyIHVzZXJTZXR0aW5nc1VTTWFwID0gbmV3IEtleUNvZGVTdHJNYXAoKTtcbnZhciB1c2VyU2V0dGluZ3NHZW5lcmFsTWFwID0gbmV3IEtleUNvZGVTdHJNYXAoKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lKGtleUNvZGUsIHVpTGFiZWwsIHVzVXNlclNldHRpbmdzTGFiZWwsIGdlbmVyYWxVc2VyU2V0dGluZ3NMYWJlbCkge1xuICAgICAgICBpZiAodXNVc2VyU2V0dGluZ3NMYWJlbCA9PT0gdm9pZCAwKSB7IHVzVXNlclNldHRpbmdzTGFiZWwgPSB1aUxhYmVsOyB9XG4gICAgICAgIGlmIChnZW5lcmFsVXNlclNldHRpbmdzTGFiZWwgPT09IHZvaWQgMCkgeyBnZW5lcmFsVXNlclNldHRpbmdzTGFiZWwgPSB1c1VzZXJTZXR0aW5nc0xhYmVsOyB9XG4gICAgICAgIHVpTWFwLmRlZmluZShrZXlDb2RlLCB1aUxhYmVsKTtcbiAgICAgICAgdXNlclNldHRpbmdzVVNNYXAuZGVmaW5lKGtleUNvZGUsIHVzVXNlclNldHRpbmdzTGFiZWwpO1xuICAgICAgICB1c2VyU2V0dGluZ3NHZW5lcmFsTWFwLmRlZmluZShrZXlDb2RlLCBnZW5lcmFsVXNlclNldHRpbmdzTGFiZWwpO1xuICAgIH1cbiAgICBkZWZpbmUoMCAvKiBVbmtub3duICovLCAndW5rbm93bicpO1xuICAgIGRlZmluZSgxIC8qIEJhY2tzcGFjZSAqLywgJ0JhY2tzcGFjZScpO1xuICAgIGRlZmluZSgyIC8qIFRhYiAqLywgJ1RhYicpO1xuICAgIGRlZmluZSgzIC8qIEVudGVyICovLCAnRW50ZXInKTtcbiAgICBkZWZpbmUoNCAvKiBTaGlmdCAqLywgJ1NoaWZ0Jyk7XG4gICAgZGVmaW5lKDUgLyogQ3RybCAqLywgJ0N0cmwnKTtcbiAgICBkZWZpbmUoNiAvKiBBbHQgKi8sICdBbHQnKTtcbiAgICBkZWZpbmUoNyAvKiBQYXVzZUJyZWFrICovLCAnUGF1c2VCcmVhaycpO1xuICAgIGRlZmluZSg4IC8qIENhcHNMb2NrICovLCAnQ2Fwc0xvY2snKTtcbiAgICBkZWZpbmUoOSAvKiBFc2NhcGUgKi8sICdFc2NhcGUnKTtcbiAgICBkZWZpbmUoMTAgLyogU3BhY2UgKi8sICdTcGFjZScpO1xuICAgIGRlZmluZSgxMSAvKiBQYWdlVXAgKi8sICdQYWdlVXAnKTtcbiAgICBkZWZpbmUoMTIgLyogUGFnZURvd24gKi8sICdQYWdlRG93bicpO1xuICAgIGRlZmluZSgxMyAvKiBFbmQgKi8sICdFbmQnKTtcbiAgICBkZWZpbmUoMTQgLyogSG9tZSAqLywgJ0hvbWUnKTtcbiAgICBkZWZpbmUoMTUgLyogTGVmdEFycm93ICovLCAnTGVmdEFycm93JywgJ0xlZnQnKTtcbiAgICBkZWZpbmUoMTYgLyogVXBBcnJvdyAqLywgJ1VwQXJyb3cnLCAnVXAnKTtcbiAgICBkZWZpbmUoMTcgLyogUmlnaHRBcnJvdyAqLywgJ1JpZ2h0QXJyb3cnLCAnUmlnaHQnKTtcbiAgICBkZWZpbmUoMTggLyogRG93bkFycm93ICovLCAnRG93bkFycm93JywgJ0Rvd24nKTtcbiAgICBkZWZpbmUoMTkgLyogSW5zZXJ0ICovLCAnSW5zZXJ0Jyk7XG4gICAgZGVmaW5lKDIwIC8qIERlbGV0ZSAqLywgJ0RlbGV0ZScpO1xuICAgIGRlZmluZSgyMSAvKiBLRVlfMCAqLywgJzAnKTtcbiAgICBkZWZpbmUoMjIgLyogS0VZXzEgKi8sICcxJyk7XG4gICAgZGVmaW5lKDIzIC8qIEtFWV8yICovLCAnMicpO1xuICAgIGRlZmluZSgyNCAvKiBLRVlfMyAqLywgJzMnKTtcbiAgICBkZWZpbmUoMjUgLyogS0VZXzQgKi8sICc0Jyk7XG4gICAgZGVmaW5lKDI2IC8qIEtFWV81ICovLCAnNScpO1xuICAgIGRlZmluZSgyNyAvKiBLRVlfNiAqLywgJzYnKTtcbiAgICBkZWZpbmUoMjggLyogS0VZXzcgKi8sICc3Jyk7XG4gICAgZGVmaW5lKDI5IC8qIEtFWV84ICovLCAnOCcpO1xuICAgIGRlZmluZSgzMCAvKiBLRVlfOSAqLywgJzknKTtcbiAgICBkZWZpbmUoMzEgLyogS0VZX0EgKi8sICdBJyk7XG4gICAgZGVmaW5lKDMyIC8qIEtFWV9CICovLCAnQicpO1xuICAgIGRlZmluZSgzMyAvKiBLRVlfQyAqLywgJ0MnKTtcbiAgICBkZWZpbmUoMzQgLyogS0VZX0QgKi8sICdEJyk7XG4gICAgZGVmaW5lKDM1IC8qIEtFWV9FICovLCAnRScpO1xuICAgIGRlZmluZSgzNiAvKiBLRVlfRiAqLywgJ0YnKTtcbiAgICBkZWZpbmUoMzcgLyogS0VZX0cgKi8sICdHJyk7XG4gICAgZGVmaW5lKDM4IC8qIEtFWV9IICovLCAnSCcpO1xuICAgIGRlZmluZSgzOSAvKiBLRVlfSSAqLywgJ0knKTtcbiAgICBkZWZpbmUoNDAgLyogS0VZX0ogKi8sICdKJyk7XG4gICAgZGVmaW5lKDQxIC8qIEtFWV9LICovLCAnSycpO1xuICAgIGRlZmluZSg0MiAvKiBLRVlfTCAqLywgJ0wnKTtcbiAgICBkZWZpbmUoNDMgLyogS0VZX00gKi8sICdNJyk7XG4gICAgZGVmaW5lKDQ0IC8qIEtFWV9OICovLCAnTicpO1xuICAgIGRlZmluZSg0NSAvKiBLRVlfTyAqLywgJ08nKTtcbiAgICBkZWZpbmUoNDYgLyogS0VZX1AgKi8sICdQJyk7XG4gICAgZGVmaW5lKDQ3IC8qIEtFWV9RICovLCAnUScpO1xuICAgIGRlZmluZSg0OCAvKiBLRVlfUiAqLywgJ1InKTtcbiAgICBkZWZpbmUoNDkgLyogS0VZX1MgKi8sICdTJyk7XG4gICAgZGVmaW5lKDUwIC8qIEtFWV9UICovLCAnVCcpO1xuICAgIGRlZmluZSg1MSAvKiBLRVlfVSAqLywgJ1UnKTtcbiAgICBkZWZpbmUoNTIgLyogS0VZX1YgKi8sICdWJyk7XG4gICAgZGVmaW5lKDUzIC8qIEtFWV9XICovLCAnVycpO1xuICAgIGRlZmluZSg1NCAvKiBLRVlfWCAqLywgJ1gnKTtcbiAgICBkZWZpbmUoNTUgLyogS0VZX1kgKi8sICdZJyk7XG4gICAgZGVmaW5lKDU2IC8qIEtFWV9aICovLCAnWicpO1xuICAgIGRlZmluZSg1NyAvKiBNZXRhICovLCAnTWV0YScpO1xuICAgIGRlZmluZSg1OCAvKiBDb250ZXh0TWVudSAqLywgJ0NvbnRleHRNZW51Jyk7XG4gICAgZGVmaW5lKDU5IC8qIEYxICovLCAnRjEnKTtcbiAgICBkZWZpbmUoNjAgLyogRjIgKi8sICdGMicpO1xuICAgIGRlZmluZSg2MSAvKiBGMyAqLywgJ0YzJyk7XG4gICAgZGVmaW5lKDYyIC8qIEY0ICovLCAnRjQnKTtcbiAgICBkZWZpbmUoNjMgLyogRjUgKi8sICdGNScpO1xuICAgIGRlZmluZSg2NCAvKiBGNiAqLywgJ0Y2Jyk7XG4gICAgZGVmaW5lKDY1IC8qIEY3ICovLCAnRjcnKTtcbiAgICBkZWZpbmUoNjYgLyogRjggKi8sICdGOCcpO1xuICAgIGRlZmluZSg2NyAvKiBGOSAqLywgJ0Y5Jyk7XG4gICAgZGVmaW5lKDY4IC8qIEYxMCAqLywgJ0YxMCcpO1xuICAgIGRlZmluZSg2OSAvKiBGMTEgKi8sICdGMTEnKTtcbiAgICBkZWZpbmUoNzAgLyogRjEyICovLCAnRjEyJyk7XG4gICAgZGVmaW5lKDcxIC8qIEYxMyAqLywgJ0YxMycpO1xuICAgIGRlZmluZSg3MiAvKiBGMTQgKi8sICdGMTQnKTtcbiAgICBkZWZpbmUoNzMgLyogRjE1ICovLCAnRjE1Jyk7XG4gICAgZGVmaW5lKDc0IC8qIEYxNiAqLywgJ0YxNicpO1xuICAgIGRlZmluZSg3NSAvKiBGMTcgKi8sICdGMTcnKTtcbiAgICBkZWZpbmUoNzYgLyogRjE4ICovLCAnRjE4Jyk7XG4gICAgZGVmaW5lKDc3IC8qIEYxOSAqLywgJ0YxOScpO1xuICAgIGRlZmluZSg3OCAvKiBOdW1Mb2NrICovLCAnTnVtTG9jaycpO1xuICAgIGRlZmluZSg3OSAvKiBTY3JvbGxMb2NrICovLCAnU2Nyb2xsTG9jaycpO1xuICAgIGRlZmluZSg4MCAvKiBVU19TRU1JQ09MT04gKi8sICc7JywgJzsnLCAnT0VNXzEnKTtcbiAgICBkZWZpbmUoODEgLyogVVNfRVFVQUwgKi8sICc9JywgJz0nLCAnT0VNX1BMVVMnKTtcbiAgICBkZWZpbmUoODIgLyogVVNfQ09NTUEgKi8sICcsJywgJywnLCAnT0VNX0NPTU1BJyk7XG4gICAgZGVmaW5lKDgzIC8qIFVTX01JTlVTICovLCAnLScsICctJywgJ09FTV9NSU5VUycpO1xuICAgIGRlZmluZSg4NCAvKiBVU19ET1QgKi8sICcuJywgJy4nLCAnT0VNX1BFUklPRCcpO1xuICAgIGRlZmluZSg4NSAvKiBVU19TTEFTSCAqLywgJy8nLCAnLycsICdPRU1fMicpO1xuICAgIGRlZmluZSg4NiAvKiBVU19CQUNLVElDSyAqLywgJ2AnLCAnYCcsICdPRU1fMycpO1xuICAgIGRlZmluZSgxMTAgLyogQUJOVF9DMSAqLywgJ0FCTlRfQzEnKTtcbiAgICBkZWZpbmUoMTExIC8qIEFCTlRfQzIgKi8sICdBQk5UX0MyJyk7XG4gICAgZGVmaW5lKDg3IC8qIFVTX09QRU5fU1FVQVJFX0JSQUNLRVQgKi8sICdbJywgJ1snLCAnT0VNXzQnKTtcbiAgICBkZWZpbmUoODggLyogVVNfQkFDS1NMQVNIICovLCAnXFxcXCcsICdcXFxcJywgJ09FTV81Jyk7XG4gICAgZGVmaW5lKDg5IC8qIFVTX0NMT1NFX1NRVUFSRV9CUkFDS0VUICovLCAnXScsICddJywgJ09FTV82Jyk7XG4gICAgZGVmaW5lKDkwIC8qIFVTX1FVT1RFICovLCAnXFwnJywgJ1xcJycsICdPRU1fNycpO1xuICAgIGRlZmluZSg5MSAvKiBPRU1fOCAqLywgJ09FTV84Jyk7XG4gICAgZGVmaW5lKDkyIC8qIE9FTV8xMDIgKi8sICdPRU1fMTAyJyk7XG4gICAgZGVmaW5lKDkzIC8qIE5VTVBBRF8wICovLCAnTnVtUGFkMCcpO1xuICAgIGRlZmluZSg5NCAvKiBOVU1QQURfMSAqLywgJ051bVBhZDEnKTtcbiAgICBkZWZpbmUoOTUgLyogTlVNUEFEXzIgKi8sICdOdW1QYWQyJyk7XG4gICAgZGVmaW5lKDk2IC8qIE5VTVBBRF8zICovLCAnTnVtUGFkMycpO1xuICAgIGRlZmluZSg5NyAvKiBOVU1QQURfNCAqLywgJ051bVBhZDQnKTtcbiAgICBkZWZpbmUoOTggLyogTlVNUEFEXzUgKi8sICdOdW1QYWQ1Jyk7XG4gICAgZGVmaW5lKDk5IC8qIE5VTVBBRF82ICovLCAnTnVtUGFkNicpO1xuICAgIGRlZmluZSgxMDAgLyogTlVNUEFEXzcgKi8sICdOdW1QYWQ3Jyk7XG4gICAgZGVmaW5lKDEwMSAvKiBOVU1QQURfOCAqLywgJ051bVBhZDgnKTtcbiAgICBkZWZpbmUoMTAyIC8qIE5VTVBBRF85ICovLCAnTnVtUGFkOScpO1xuICAgIGRlZmluZSgxMDMgLyogTlVNUEFEX01VTFRJUExZICovLCAnTnVtUGFkX011bHRpcGx5Jyk7XG4gICAgZGVmaW5lKDEwNCAvKiBOVU1QQURfQUREICovLCAnTnVtUGFkX0FkZCcpO1xuICAgIGRlZmluZSgxMDUgLyogTlVNUEFEX1NFUEFSQVRPUiAqLywgJ051bVBhZF9TZXBhcmF0b3InKTtcbiAgICBkZWZpbmUoMTA2IC8qIE5VTVBBRF9TVUJUUkFDVCAqLywgJ051bVBhZF9TdWJ0cmFjdCcpO1xuICAgIGRlZmluZSgxMDcgLyogTlVNUEFEX0RFQ0lNQUwgKi8sICdOdW1QYWRfRGVjaW1hbCcpO1xuICAgIGRlZmluZSgxMDggLyogTlVNUEFEX0RJVklERSAqLywgJ051bVBhZF9EaXZpZGUnKTtcbn0pKCk7XG5leHBvcnQgdmFyIEtleUNvZGVVdGlscztcbihmdW5jdGlvbiAoS2V5Q29kZVV0aWxzKSB7XG4gICAgZnVuY3Rpb24gdG9TdHJpbmcoa2V5Q29kZSkge1xuICAgICAgICByZXR1cm4gdWlNYXAua2V5Q29kZVRvU3RyKGtleUNvZGUpO1xuICAgIH1cbiAgICBLZXlDb2RlVXRpbHMudG9TdHJpbmcgPSB0b1N0cmluZztcbiAgICBmdW5jdGlvbiBmcm9tU3RyaW5nKGtleSkge1xuICAgICAgICByZXR1cm4gdWlNYXAuc3RyVG9LZXlDb2RlKGtleSk7XG4gICAgfVxuICAgIEtleUNvZGVVdGlscy5mcm9tU3RyaW5nID0gZnJvbVN0cmluZztcbiAgICBmdW5jdGlvbiB0b1VzZXJTZXR0aW5nc1VTKGtleUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJTZXR0aW5nc1VTTWFwLmtleUNvZGVUb1N0cihrZXlDb2RlKTtcbiAgICB9XG4gICAgS2V5Q29kZVV0aWxzLnRvVXNlclNldHRpbmdzVVMgPSB0b1VzZXJTZXR0aW5nc1VTO1xuICAgIGZ1bmN0aW9uIHRvVXNlclNldHRpbmdzR2VuZXJhbChrZXlDb2RlKSB7XG4gICAgICAgIHJldHVybiB1c2VyU2V0dGluZ3NHZW5lcmFsTWFwLmtleUNvZGVUb1N0cihrZXlDb2RlKTtcbiAgICB9XG4gICAgS2V5Q29kZVV0aWxzLnRvVXNlclNldHRpbmdzR2VuZXJhbCA9IHRvVXNlclNldHRpbmdzR2VuZXJhbDtcbiAgICBmdW5jdGlvbiBmcm9tVXNlclNldHRpbmdzKGtleSkge1xuICAgICAgICByZXR1cm4gdXNlclNldHRpbmdzVVNNYXAuc3RyVG9LZXlDb2RlKGtleSkgfHwgdXNlclNldHRpbmdzR2VuZXJhbE1hcC5zdHJUb0tleUNvZGUoa2V5KTtcbiAgICB9XG4gICAgS2V5Q29kZVV0aWxzLmZyb21Vc2VyU2V0dGluZ3MgPSBmcm9tVXNlclNldHRpbmdzO1xufSkoS2V5Q29kZVV0aWxzIHx8IChLZXlDb2RlVXRpbHMgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIEtleUNob3JkKGZpcnN0UGFydCwgc2Vjb25kUGFydCkge1xuICAgIHZhciBjaG9yZFBhcnQgPSAoKHNlY29uZFBhcnQgJiAweDAwMDBmZmZmKSA8PCAxNikgPj4+IDA7XG4gICAgcmV0dXJuIChmaXJzdFBhcnQgfCBjaG9yZFBhcnQpID4+PiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUtleWJpbmRpbmcoa2V5YmluZGluZywgT1MpIHtcbiAgICBpZiAoa2V5YmluZGluZyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGZpcnN0UGFydCA9IChrZXliaW5kaW5nICYgMHgwMDAwZmZmZikgPj4+IDA7XG4gICAgdmFyIGNob3JkUGFydCA9IChrZXliaW5kaW5nICYgMHhmZmZmMDAwMCkgPj4+IDE2O1xuICAgIGlmIChjaG9yZFBhcnQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaG9yZEtleWJpbmRpbmcoY3JlYXRlU2ltcGxlS2V5YmluZGluZyhmaXJzdFBhcnQsIE9TKSwgY3JlYXRlU2ltcGxlS2V5YmluZGluZyhjaG9yZFBhcnQsIE9TKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVTaW1wbGVLZXliaW5kaW5nKGZpcnN0UGFydCwgT1MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUtleWJpbmRpbmcoa2V5YmluZGluZywgT1MpIHtcbiAgICB2YXIgY3RybENtZCA9IChrZXliaW5kaW5nICYgMjA0OCAvKiBDdHJsQ21kICovID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB2YXIgd2luQ3RybCA9IChrZXliaW5kaW5nICYgMjU2IC8qIFdpbkN0cmwgKi8gPyB0cnVlIDogZmFsc2UpO1xuICAgIHZhciBjdHJsS2V5ID0gKE9TID09PSAyIC8qIE1hY2ludG9zaCAqLyA/IHdpbkN0cmwgOiBjdHJsQ21kKTtcbiAgICB2YXIgc2hpZnRLZXkgPSAoa2V5YmluZGluZyAmIDEwMjQgLyogU2hpZnQgKi8gPyB0cnVlIDogZmFsc2UpO1xuICAgIHZhciBhbHRLZXkgPSAoa2V5YmluZGluZyAmIDUxMiAvKiBBbHQgKi8gPyB0cnVlIDogZmFsc2UpO1xuICAgIHZhciBtZXRhS2V5ID0gKE9TID09PSAyIC8qIE1hY2ludG9zaCAqLyA/IGN0cmxDbWQgOiB3aW5DdHJsKTtcbiAgICB2YXIga2V5Q29kZSA9IChrZXliaW5kaW5nICYgMjU1IC8qIEtleUNvZGUgKi8pO1xuICAgIHJldHVybiBuZXcgU2ltcGxlS2V5YmluZGluZyhjdHJsS2V5LCBzaGlmdEtleSwgYWx0S2V5LCBtZXRhS2V5LCBrZXlDb2RlKTtcbn1cbnZhciBTaW1wbGVLZXliaW5kaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpbXBsZUtleWJpbmRpbmcoY3RybEtleSwgc2hpZnRLZXksIGFsdEtleSwgbWV0YUtleSwga2V5Q29kZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSAxIC8qIFNpbXBsZSAqLztcbiAgICAgICAgdGhpcy5jdHJsS2V5ID0gY3RybEtleTtcbiAgICAgICAgdGhpcy5zaGlmdEtleSA9IHNoaWZ0S2V5O1xuICAgICAgICB0aGlzLmFsdEtleSA9IGFsdEtleTtcbiAgICAgICAgdGhpcy5tZXRhS2V5ID0gbWV0YUtleTtcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZTtcbiAgICB9XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIGlmIChvdGhlci50eXBlICE9PSAxIC8qIFNpbXBsZSAqLykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5jdHJsS2V5ID09PSBvdGhlci5jdHJsS2V5XG4gICAgICAgICAgICAmJiB0aGlzLnNoaWZ0S2V5ID09PSBvdGhlci5zaGlmdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5hbHRLZXkgPT09IG90aGVyLmFsdEtleVxuICAgICAgICAgICAgJiYgdGhpcy5tZXRhS2V5ID09PSBvdGhlci5tZXRhS2V5XG4gICAgICAgICAgICAmJiB0aGlzLmtleUNvZGUgPT09IG90aGVyLmtleUNvZGUpO1xuICAgIH07XG4gICAgU2ltcGxlS2V5YmluZGluZy5wcm90b3R5cGUuaXNNb2RpZmllcktleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmtleUNvZGUgPT09IDAgLyogVW5rbm93biAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA1IC8qIEN0cmwgKi9cbiAgICAgICAgICAgIHx8IHRoaXMua2V5Q29kZSA9PT0gNTcgLyogTWV0YSAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA2IC8qIEFsdCAqL1xuICAgICAgICAgICAgfHwgdGhpcy5rZXlDb2RlID09PSA0IC8qIFNoaWZ0ICovKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERvZXMgdGhpcyBrZXliaW5kaW5nIHJlZmVyIHRvIHRoZSBrZXkgY29kZSBvZiBhIG1vZGlmaWVyIGFuZCBpdCBhbHNvIGhhcyB0aGUgbW9kaWZpZXIgZmxhZz9cbiAgICAgKi9cbiAgICBTaW1wbGVLZXliaW5kaW5nLnByb3RvdHlwZS5pc0R1cGxpY2F0ZU1vZGlmaWVyQ2FzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgodGhpcy5jdHJsS2V5ICYmIHRoaXMua2V5Q29kZSA9PT0gNSAvKiBDdHJsICovKVxuICAgICAgICAgICAgfHwgKHRoaXMuc2hpZnRLZXkgJiYgdGhpcy5rZXlDb2RlID09PSA0IC8qIFNoaWZ0ICovKVxuICAgICAgICAgICAgfHwgKHRoaXMuYWx0S2V5ICYmIHRoaXMua2V5Q29kZSA9PT0gNiAvKiBBbHQgKi8pXG4gICAgICAgICAgICB8fCAodGhpcy5tZXRhS2V5ICYmIHRoaXMua2V5Q29kZSA9PT0gNTcgLyogTWV0YSAqLykpO1xuICAgIH07XG4gICAgcmV0dXJuIFNpbXBsZUtleWJpbmRpbmc7XG59KCkpO1xuZXhwb3J0IHsgU2ltcGxlS2V5YmluZGluZyB9O1xudmFyIENob3JkS2V5YmluZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaG9yZEtleWJpbmRpbmcoZmlyc3RQYXJ0LCBjaG9yZFBhcnQpIHtcbiAgICAgICAgdGhpcy50eXBlID0gMiAvKiBDaG9yZCAqLztcbiAgICAgICAgdGhpcy5maXJzdFBhcnQgPSBmaXJzdFBhcnQ7XG4gICAgICAgIHRoaXMuY2hvcmRQYXJ0ID0gY2hvcmRQYXJ0O1xuICAgIH1cbiAgICByZXR1cm4gQ2hvcmRLZXliaW5kaW5nO1xufSgpKTtcbmV4cG9ydCB7IENob3JkS2V5YmluZGluZyB9O1xudmFyIFJlc29sdmVkS2V5YmluZGluZ1BhcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x2ZWRLZXliaW5kaW5nUGFydChjdHJsS2V5LCBzaGlmdEtleSwgYWx0S2V5LCBtZXRhS2V5LCBrYkxhYmVsLCBrYkFyaWFMYWJlbCkge1xuICAgICAgICB0aGlzLmN0cmxLZXkgPSBjdHJsS2V5O1xuICAgICAgICB0aGlzLnNoaWZ0S2V5ID0gc2hpZnRLZXk7XG4gICAgICAgIHRoaXMuYWx0S2V5ID0gYWx0S2V5O1xuICAgICAgICB0aGlzLm1ldGFLZXkgPSBtZXRhS2V5O1xuICAgICAgICB0aGlzLmtleUxhYmVsID0ga2JMYWJlbDtcbiAgICAgICAgdGhpcy5rZXlBcmlhTGFiZWwgPSBrYkFyaWFMYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIFJlc29sdmVkS2V5YmluZGluZ1BhcnQ7XG59KCkpO1xuZXhwb3J0IHsgUmVzb2x2ZWRLZXliaW5kaW5nUGFydCB9O1xuLyoqXG4gKiBBIHJlc29sdmVkIGtleWJpbmRpbmcuIENhbiBiZSBhIHNpbXBsZSBrZXliaW5kaW5nIG9yIGEgY2hvcmQga2V5YmluZGluZy5cbiAqL1xudmFyIFJlc29sdmVkS2V5YmluZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvbHZlZEtleWJpbmRpbmcoKSB7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHZlZEtleWJpbmRpbmc7XG59KCkpO1xuZXhwb3J0IHsgUmVzb2x2ZWRLZXliaW5kaW5nIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc3Bvc2FibGUodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmRpc3Bvc2UgPT09ICdmdW5jdGlvbidcbiAgICAgICAgJiYgdGhpbmcuZGlzcG9zZS5sZW5ndGggPT09IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZShmaXJzdCkge1xuICAgIHZhciByZXN0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmlyc3QpKSB7XG4gICAgICAgIGZpcnN0LmZvckVhY2goZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgJiYgZC5kaXNwb3NlKCk7IH0pO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgZmlyc3QuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkaXNwb3NlKGZpcnN0KTtcbiAgICAgICAgZGlzcG9zZShyZXN0KTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lZERpc3Bvc2FibGUoZGlzcG9zYWJsZXMpIHtcbiAgICByZXR1cm4geyBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkaXNwb3NlKGRpc3Bvc2FibGVzKTsgfSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvRGlzcG9zYWJsZShmbikge1xuICAgIHJldHVybiB7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgZm4oKTsgfSB9O1xufVxudmFyIERpc3Bvc2FibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlzcG9zYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdG9EaXNwb3NlID0gW107XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEaXNwb3NhYmxlLnByb3RvdHlwZSwgXCJ0b0Rpc3Bvc2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3RvRGlzcG9zZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdG9EaXNwb3NlID0gZGlzcG9zZSh0aGlzLl90b0Rpc3Bvc2UpO1xuICAgIH07XG4gICAgRGlzcG9zYWJsZS5wcm90b3R5cGUuX3JlZ2lzdGVyID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdGhpcy5fdG9EaXNwb3NlLnB1c2godCk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgRGlzcG9zYWJsZS5Ob25lID0gT2JqZWN0LmZyZWV6ZSh7IGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgfSB9KTtcbiAgICByZXR1cm4gRGlzcG9zYWJsZTtcbn0oKSk7XG5leHBvcnQgeyBEaXNwb3NhYmxlIH07XG52YXIgSW1tb3J0YWxSZWZlcmVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1tb3J0YWxSZWZlcmVuY2Uob2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIH1cbiAgICBJbW1vcnRhbFJlZmVyZW5jZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICByZXR1cm4gSW1tb3J0YWxSZWZlcmVuY2U7XG59KCkpO1xuZXhwb3J0IHsgSW1tb3J0YWxSZWZlcmVuY2UgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbnZhciBMaW5rZWRMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG4gICAgfVxuICAgIExpbmtlZExpc3QucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5fZmlyc3Q7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0KGVsZW1lbnQsIGZhbHNlKTtcbiAgICB9O1xuICAgIExpbmtlZExpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnQoZWxlbWVudCwgdHJ1ZSk7XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXRUaGVFbmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXRUaGVFbmQpIHtcbiAgICAgICAgICAgIC8vIHB1c2hcbiAgICAgICAgICAgIHZhciBvbGRMYXN0ID0gdGhpcy5fbGFzdDtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbmV3Tm9kZS5wcmV2ID0gb2xkTGFzdDtcbiAgICAgICAgICAgIG9sZExhc3QubmV4dCA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB1bnNoaWZ0XG4gICAgICAgICAgICB2YXIgb2xkRmlyc3QgPSB0aGlzLl9maXJzdDtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIG5ld05vZGUubmV4dCA9IG9sZEZpcnN0O1xuICAgICAgICAgICAgb2xkRmlyc3QucHJldiA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNhbmRpZGF0ZSA9IF90aGlzLl9maXJzdDsgY2FuZGlkYXRlIGluc3RhbmNlb2YgTm9kZTsgY2FuZGlkYXRlID0gY2FuZGlkYXRlLm5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlICE9PSBuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlLnByZXYgJiYgY2FuZGlkYXRlLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWlkZGxlXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSBjYW5kaWRhdGUucHJldjtcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLm5leHQgPSBjYW5kaWRhdGUubmV4dDtcbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLm5leHQucHJldiA9IGFuY2hvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWNhbmRpZGF0ZS5wcmV2ICYmICFjYW5kaWRhdGUubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZpcnN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWNhbmRpZGF0ZS5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3RcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xhc3QgPSBfdGhpcy5fbGFzdC5wcmV2O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbGFzdC5uZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghY2FuZGlkYXRlLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZpcnN0ID0gX3RoaXMuX2ZpcnN0Lm5leHQ7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9maXJzdC5wcmV2ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkb25lXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBMaW5rZWRMaXN0LnByb3RvdHlwZS5pdGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB7XG4gICAgICAgICAgICBkb25lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX2ZpcnN0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBub2RlLmVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIExpbmtlZExpc3Q7XG59KCkpO1xuZXhwb3J0IHsgTGlua2VkTGlzdCB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX2lzV2luZG93cyA9IGZhbHNlO1xudmFyIF9pc01hY2ludG9zaCA9IGZhbHNlO1xudmFyIF9pc0xpbnV4ID0gZmFsc2U7XG52YXIgX2lzTmF0aXZlID0gZmFsc2U7XG52YXIgX2lzV2ViID0gZmFsc2U7XG52YXIgX2xvY2FsZSA9IHVuZGVmaW5lZDtcbnZhciBfbGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG52YXIgX3RyYW5zbGF0aW9uc0NvbmZpZ0ZpbGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgdmFyIExBTkdVQUdFX0RFRkFVTFQgPSAnZW4nO1xuLy8gT1MgZGV0ZWN0aW9uXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9jZXNzLnBsYXRmb3JtID09PSAnc3RyaW5nJykge1xuICAgIF9pc1dpbmRvd3MgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyk7XG4gICAgX2lzTWFjaW50b3NoID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKTtcbiAgICBfaXNMaW51eCA9IChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnKTtcbiAgICBfbG9jYWxlID0gTEFOR1VBR0VfREVGQVVMVDtcbiAgICBfbGFuZ3VhZ2UgPSBMQU5HVUFHRV9ERUZBVUxUO1xuICAgIHZhciByYXdObHNDb25maWcgPSBwcm9jZXNzLmVudlsnVlNDT0RFX05MU19DT05GSUcnXTtcbiAgICBpZiAocmF3TmxzQ29uZmlnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbmxzQ29uZmlnID0gSlNPTi5wYXJzZShyYXdObHNDb25maWcpO1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkID0gbmxzQ29uZmlnLmF2YWlsYWJsZUxhbmd1YWdlc1snKiddO1xuICAgICAgICAgICAgX2xvY2FsZSA9IG5sc0NvbmZpZy5sb2NhbGU7XG4gICAgICAgICAgICAvLyBWU0NvZGUncyBkZWZhdWx0IGxhbmd1YWdlIGlzICdlbidcbiAgICAgICAgICAgIF9sYW5ndWFnZSA9IHJlc29sdmVkID8gcmVzb2x2ZWQgOiBMQU5HVUFHRV9ERUZBVUxUO1xuICAgICAgICAgICAgX3RyYW5zbGF0aW9uc0NvbmZpZ0ZpbGUgPSBubHNDb25maWcuX3RyYW5zbGF0aW9uc0NvbmZpZ0ZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaXNOYXRpdmUgPSB0cnVlO1xufVxuZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBfaXNXaW5kb3dzID0gdXNlckFnZW50LmluZGV4T2YoJ1dpbmRvd3MnKSA+PSAwO1xuICAgIF9pc01hY2ludG9zaCA9IHVzZXJBZ2VudC5pbmRleE9mKCdNYWNpbnRvc2gnKSA+PSAwO1xuICAgIF9pc0xpbnV4ID0gdXNlckFnZW50LmluZGV4T2YoJ0xpbnV4JykgPj0gMDtcbiAgICBfaXNXZWIgPSB0cnVlO1xuICAgIF9sb2NhbGUgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgX2xhbmd1YWdlID0gX2xvY2FsZTtcbn1cbmV4cG9ydCB2YXIgUGxhdGZvcm07XG4oZnVuY3Rpb24gKFBsYXRmb3JtKSB7XG4gICAgUGxhdGZvcm1bUGxhdGZvcm1bXCJXZWJcIl0gPSAwXSA9IFwiV2ViXCI7XG4gICAgUGxhdGZvcm1bUGxhdGZvcm1bXCJNYWNcIl0gPSAxXSA9IFwiTWFjXCI7XG4gICAgUGxhdGZvcm1bUGxhdGZvcm1bXCJMaW51eFwiXSA9IDJdID0gXCJMaW51eFwiO1xuICAgIFBsYXRmb3JtW1BsYXRmb3JtW1wiV2luZG93c1wiXSA9IDNdID0gXCJXaW5kb3dzXCI7XG59KShQbGF0Zm9ybSB8fCAoUGxhdGZvcm0gPSB7fSkpO1xudmFyIF9wbGF0Zm9ybSA9IFBsYXRmb3JtLldlYjtcbmlmIChfaXNOYXRpdmUpIHtcbiAgICBpZiAoX2lzTWFjaW50b3NoKSB7XG4gICAgICAgIF9wbGF0Zm9ybSA9IFBsYXRmb3JtLk1hYztcbiAgICB9XG4gICAgZWxzZSBpZiAoX2lzV2luZG93cykge1xuICAgICAgICBfcGxhdGZvcm0gPSBQbGF0Zm9ybS5XaW5kb3dzO1xuICAgIH1cbiAgICBlbHNlIGlmIChfaXNMaW51eCkge1xuICAgICAgICBfcGxhdGZvcm0gPSBQbGF0Zm9ybS5MaW51eDtcbiAgICB9XG59XG5leHBvcnQgdmFyIGlzV2luZG93cyA9IF9pc1dpbmRvd3M7XG5leHBvcnQgdmFyIGlzTWFjaW50b3NoID0gX2lzTWFjaW50b3NoO1xuZXhwb3J0IHZhciBpc0xpbnV4ID0gX2lzTGludXg7XG5leHBvcnQgdmFyIGlzTmF0aXZlID0gX2lzTmF0aXZlO1xuZXhwb3J0IHZhciBpc1dlYiA9IF9pc1dlYjtcbnZhciBfZ2xvYmFscyA9ICh0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgPyBzZWxmIDogdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgPyBnbG9iYWwgOiB7fSk7XG5leHBvcnQgdmFyIGdsb2JhbHMgPSBfZ2xvYmFscztcbnZhciBfc2V0SW1tZWRpYXRlID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICBpZiAoX3NldEltbWVkaWF0ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoZ2xvYmFscy5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIF9zZXRJbW1lZGlhdGUgPSBnbG9iYWxzLnNldEltbWVkaWF0ZS5iaW5kKGdsb2JhbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3NldEltbWVkaWF0ZSA9IHByb2Nlc3MubmV4dFRpY2suYmluZChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9zZXRJbW1lZGlhdGUgPSBnbG9iYWxzLnNldFRpbWVvdXQuYmluZChnbG9iYWxzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3NldEltbWVkaWF0ZShjYWxsYmFjayk7XG59XG5leHBvcnQgdmFyIE9TID0gKF9pc01hY2ludG9zaCA/IDIgLyogTWFjaW50b3NoICovIDogKF9pc1dpbmRvd3MgPyAxIC8qIFdpbmRvd3MgKi8gOiAzIC8qIExpbnV4ICovKSk7XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogVGhlIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IHZhciBlbXB0eSA9ICcnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzRmFsc3lPcldoaXRlc3BhY2Uoc3RyKSB7XG4gICAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdHIudHJpbSgpLmxlbmd0aCA9PT0gMDtcbn1cbi8qKlxuICogQHJldHVybnMgdGhlIHByb3ZpZGVkIG51bWJlciB3aXRoIHRoZSBnaXZlbiBudW1iZXIgb2YgcHJlY2VkaW5nIHplcm9zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkKG4sIGwsIGNoYXIpIHtcbiAgICBpZiAoY2hhciA9PT0gdm9pZCAwKSB7IGNoYXIgPSAnMCc7IH1cbiAgICB2YXIgc3RyID0gJycgKyBuO1xuICAgIHZhciByID0gW3N0cl07XG4gICAgZm9yICh2YXIgaSA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgci5wdXNoKGNoYXIpO1xuICAgIH1cbiAgICByZXR1cm4gci5yZXZlcnNlKCkuam9pbignJyk7XG59XG52YXIgX2Zvcm1hdFJlZ2V4cCA9IC97KFxcZCspfS9nO1xuLyoqXG4gKiBIZWxwZXIgdG8gcHJvZHVjZSBhIHN0cmluZyB3aXRoIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cy4gSW5zZXJ0IHZhcmlhYmxlIHNlZ21lbnRzXG4gKiBpbnRvIHRoZSBzdHJpbmcgdXNpbmcgdGhlIHtufSBub3RhdGlvbiB3aGVyZSBOIGlzIHRoZSBpbmRleCBvZiB0aGUgYXJndW1lbnQgZm9sbG93aW5nIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHdoaWNoIGZvcm1hdHRpbmcgaXMgYXBwbGllZFxuICogQHBhcmFtIGFyZ3MgcmVwbGFjZW1lbnRzIGZvciB7bn0tZW50cmllc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShfZm9ybWF0UmVnZXhwLCBmdW5jdGlvbiAobWF0Y2gsIGdyb3VwKSB7XG4gICAgICAgIHZhciBpZHggPSBwYXJzZUludChncm91cCwgMTApO1xuICAgICAgICByZXR1cm4gaXNOYU4oaWR4KSB8fCBpZHggPCAwIHx8IGlkeCA+PSBhcmdzLmxlbmd0aCA/XG4gICAgICAgICAgICBtYXRjaCA6XG4gICAgICAgICAgICBhcmdzW2lkeF07XG4gICAgfSk7XG59XG4vKipcbiAqIENvbnZlcnRzIEhUTUwgY2hhcmFjdGVycyBpbnNpZGUgdGhlIHN0cmluZyB0byB1c2UgZW50aXRpZXMgaW5zdGVhZC4gTWFrZXMgdGhlIHN0cmluZyBzYWZlIGZyb21cbiAqIGJlaW5nIHVzZWQgZS5nLiBpbiBIVE1MRWxlbWVudC5pbm5lckhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoL1s8fD58Jl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNhc2UgJzwnOiByZXR1cm4gJyZsdDsnO1xuICAgICAgICAgICAgY2FzZSAnPic6IHJldHVybiAnJmd0Oyc7XG4gICAgICAgICAgICBjYXNlICcmJzogcmV0dXJuICcmYW1wOyc7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY2hhcmFjdGVycyBpbiBhIGdpdmVuIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwQ2hhcmFjdGVycyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXFwtXFxcXFxce1xcfVxcKlxcK1xcP1xcfFxcXlxcJFxcLlxcW1xcXVxcKFxcKVxcI10vZywgJ1xcXFwkJicpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgaGF5c3RhY2suXG4gKiBAcGFyYW0gaGF5c3RhY2sgc3RyaW5nIHRvIHRyaW1cbiAqIEBwYXJhbSBuZWVkbGUgdGhlIHRoaW5nIHRvIHRyaW0gKGRlZmF1bHQgaXMgYSBibGFuaylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmIChuZWVkbGUgPT09IHZvaWQgMCkgeyBuZWVkbGUgPSAnICc7IH1cbiAgICB2YXIgdHJpbW1lZCA9IGx0cmltKGhheXN0YWNrLCBuZWVkbGUpO1xuICAgIHJldHVybiBydHJpbSh0cmltbWVkLCBuZWVkbGUpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGFsbCBvY2N1cnJlbmNlcyBvZiBuZWVkbGUgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIGhheXN0YWNrLlxuICogQHBhcmFtIGhheXN0YWNrIHN0cmluZyB0byB0cmltXG4gKiBAcGFyYW0gbmVlZGxlIHRoZSB0aGluZyB0byB0cmltXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsdHJpbShoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgaWYgKCFoYXlzdGFjayB8fCAhbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgdmFyIG5lZWRsZUxlbiA9IG5lZWRsZS5sZW5ndGg7XG4gICAgaWYgKG5lZWRsZUxlbiA9PT0gMCB8fCBoYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0ID0gMCwgaWR4ID0gLTE7XG4gICAgd2hpbGUgKChpZHggPSBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSwgb2Zmc2V0KSkgPT09IG9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKyBuZWVkbGVMZW47XG4gICAgfVxuICAgIHJldHVybiBoYXlzdGFjay5zdWJzdHJpbmcob2Zmc2V0KTtcbn1cbi8qKlxuICogUmVtb3ZlcyBhbGwgb2NjdXJyZW5jZXMgb2YgbmVlZGxlIGZyb20gdGhlIGVuZCBvZiBoYXlzdGFjay5cbiAqIEBwYXJhbSBoYXlzdGFjayBzdHJpbmcgdG8gdHJpbVxuICogQHBhcmFtIG5lZWRsZSB0aGUgdGhpbmcgdG8gdHJpbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnRyaW0oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgIGlmICghaGF5c3RhY2sgfHwgIW5lZWRsZSkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2s7XG4gICAgfVxuICAgIHZhciBuZWVkbGVMZW4gPSBuZWVkbGUubGVuZ3RoLCBoYXlzdGFja0xlbiA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICBpZiAobmVlZGxlTGVuID09PSAwIHx8IGhheXN0YWNrTGVuID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjaztcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IGhheXN0YWNrTGVuLCBpZHggPSAtMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZHggPSBoYXlzdGFjay5sYXN0SW5kZXhPZihuZWVkbGUsIG9mZnNldCAtIDEpO1xuICAgICAgICBpZiAoaWR4ID09PSAtMSB8fCBpZHggKyBuZWVkbGVMZW4gIT09IG9mZnNldCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCA9IGlkeDtcbiAgICB9XG4gICAgcmV0dXJuIGhheXN0YWNrLnN1YnN0cmluZygwLCBvZmZzZXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRTaW1wbGUyUmVnRXhwUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvW1xcLVxcXFxcXHtcXH1cXCtcXD9cXHxcXF5cXCRcXC5cXCxcXFtcXF1cXChcXClcXCNcXHNdL2csICdcXFxcJCYnKS5yZXBsYWNlKC9bXFwqXS9nLCAnLionKTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBoYXlzdGFjayBzdGFydHMgd2l0aCBuZWVkbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydHNXaXRoKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICBpZiAoaGF5c3RhY2subGVuZ3RoIDwgbmVlZGxlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChoYXlzdGFjayA9PT0gbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5lZWRsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGF5c3RhY2tbaV0gIT09IG5lZWRsZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGhheXN0YWNrIGVuZHMgd2l0aCBuZWVkbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRzV2l0aChoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgdmFyIGRpZmYgPSBoYXlzdGFjay5sZW5ndGggLSBuZWVkbGUubGVuZ3RoO1xuICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUsIGRpZmYpID09PSBkaWZmO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaWZmID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoYXlzdGFjayA9PT0gbmVlZGxlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWdFeHAoc2VhcmNoU3RyaW5nLCBpc1JlZ2V4LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAoIXNlYXJjaFN0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgcmVnZXggZnJvbSBlbXB0eSBzdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKCFpc1JlZ2V4KSB7XG4gICAgICAgIHNlYXJjaFN0cmluZyA9IGVzY2FwZVJlZ0V4cENoYXJhY3RlcnMoc2VhcmNoU3RyaW5nKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2hvbGVXb3JkKSB7XG4gICAgICAgIGlmICghL1xcQi8udGVzdChzZWFyY2hTdHJpbmcuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgc2VhcmNoU3RyaW5nID0gJ1xcXFxiJyArIHNlYXJjaFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIS9cXEIvLnRlc3Qoc2VhcmNoU3RyaW5nLmNoYXJBdChzZWFyY2hTdHJpbmcubGVuZ3RoIC0gMSkpKSB7XG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcgKyAnXFxcXGInO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBtb2RpZmllcnMgPSAnJztcbiAgICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICdnJztcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zLm1hdGNoQ2FzZSkge1xuICAgICAgICBtb2RpZmllcnMgKz0gJ2knO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tdWx0aWxpbmUpIHtcbiAgICAgICAgbW9kaWZpZXJzICs9ICdtJztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc2VhcmNoU3RyaW5nLCBtb2RpZmllcnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ0V4cExlYWRzVG9FbmRsZXNzTG9vcChyZWdleHApIHtcbiAgICAvLyBFeGl0IGVhcmx5IGlmIGl0J3Mgb25lIG9mIHRoZXNlIHNwZWNpYWwgY2FzZXMgd2hpY2ggYXJlIG1lYW50IHRvIG1hdGNoXG4gICAgLy8gYWdhaW5zdCBhbiBlbXB0eSBzdHJpbmdcbiAgICBpZiAocmVnZXhwLnNvdXJjZSA9PT0gJ14nIHx8IHJlZ2V4cC5zb3VyY2UgPT09ICdeJCcgfHwgcmVnZXhwLnNvdXJjZSA9PT0gJyQnIHx8IHJlZ2V4cC5zb3VyY2UgPT09ICdeXFxcXHMqJCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBXZSBjaGVjayBhZ2FpbnN0IGFuIGVtcHR5IHN0cmluZy4gSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2Vzbid0IGFkdmFuY2VcbiAgICAvLyAoZS5nLiBlbmRzIGluIGFuIGVuZGxlc3MgbG9vcCkgaXQgd2lsbCBtYXRjaCBhbiBlbXB0eSBzdHJpbmcuXG4gICAgdmFyIG1hdGNoID0gcmVnZXhwLmV4ZWMoJycpO1xuICAgIHJldHVybiAobWF0Y2ggJiYgcmVnZXhwLmxhc3RJbmRleCA9PT0gMCk7XG59XG4vKipcbiAqIFJldHVybnMgZmlyc3QgaW5kZXggb2YgdGhlIHN0cmluZyB0aGF0IGlzIG5vdCB3aGl0ZXNwYWNlLlxuICogSWYgc3RyaW5nIGlzIGVtcHR5IG9yIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZXMsIHJldHVybnMgLTFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0Tm9uV2hpdGVzcGFjZUluZGV4KHN0cikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hDb2RlICE9PSAzMiAvKiBTcGFjZSAqLyAmJiBjaENvZGUgIT09IDkgLyogVGFiICovKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxlYWRpbmcgd2hpdGVzcGFjZSBvZiB0aGUgc3RyaW5nLlxuICogSWYgdGhlIHN0cmluZyBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VzLCByZXR1cm5zIGVudGlyZSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExlYWRpbmdXaGl0ZXNwYWNlKHN0ciwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7IHN0YXJ0ID0gMDsgfVxuICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBzdHIubGVuZ3RoOyB9XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgdmFyIGNoQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hDb2RlICE9PSAzMiAvKiBTcGFjZSAqLyAmJiBjaENvZGUgIT09IDkgLyogVGFiICovKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZyhzdGFydCwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG59XG4vKipcbiAqIFJldHVybnMgbGFzdCBpbmRleCBvZiB0aGUgc3RyaW5nIHRoYXQgaXMgbm90IHdoaXRlc3BhY2UuXG4gKiBJZiBzdHJpbmcgaXMgZW1wdHkgb3IgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlcywgcmV0dXJucyAtMVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGFzdE5vbldoaXRlc3BhY2VJbmRleChzdHIsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSBzdHIubGVuZ3RoIC0gMTsgfVxuICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgY2hDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaENvZGUgIT09IDMyIC8qIFNwYWNlICovICYmIGNoQ29kZSAhPT0gOSAvKiBUYWIgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlSWdub3JlQ2FzZShhLCBiKSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY29kZUEgPSBhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBjb2RlQiA9IGIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNvZGVBID09PSBjb2RlQikge1xuICAgICAgICAgICAgLy8gZXF1YWxcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VwcGVyQXNjaWlMZXR0ZXIoY29kZUEpKSB7XG4gICAgICAgICAgICBjb2RlQSArPSAzMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVcHBlckFzY2lpTGV0dGVyKGNvZGVCKSkge1xuICAgICAgICAgICAgY29kZUIgKz0gMzI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmYgPSBjb2RlQSAtIGNvZGVCO1xuICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZXF1YWwgLT4gaWdub3JlQ2FzZVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNMb3dlckFzY2lpTGV0dGVyKGNvZGVBKSAmJiBpc0xvd2VyQXNjaWlMZXR0ZXIoY29kZUIpKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoIDwgYi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChhLmxlbmd0aCA+IGIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTG93ZXJBc2NpaUxldHRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPj0gOTcgLyogYSAqLyAmJiBjb2RlIDw9IDEyMiAvKiB6ICovO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVXBwZXJBc2NpaUxldHRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi87XG59XG5mdW5jdGlvbiBpc0FzY2lpTGV0dGVyKGNvZGUpIHtcbiAgICByZXR1cm4gaXNMb3dlckFzY2lpTGV0dGVyKGNvZGUpIHx8IGlzVXBwZXJBc2NpaUxldHRlcihjb2RlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHNJZ25vcmVDYXNlKGEsIGIpIHtcbiAgICB2YXIgbGVuMSA9IGEgPyBhLmxlbmd0aCA6IDA7XG4gICAgdmFyIGxlbjIgPSBiID8gYi5sZW5ndGggOiAwO1xuICAgIGlmIChsZW4xICE9PSBsZW4yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGRvRXF1YWxzSWdub3JlQ2FzZShhLCBiKTtcbn1cbmZ1bmN0aW9uIGRvRXF1YWxzSWdub3JlQ2FzZShhLCBiLCBzdG9wQXQpIHtcbiAgICBpZiAoc3RvcEF0ID09PSB2b2lkIDApIHsgc3RvcEF0ID0gYS5sZW5ndGg7IH1cbiAgICBpZiAodHlwZW9mIGEgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBiICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RvcEF0OyBpKyspIHtcbiAgICAgICAgdmFyIGNvZGVBID0gYS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgY29kZUIgPSBiLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjb2RlQSA9PT0gY29kZUIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGEteiBBLVpcbiAgICAgICAgaWYgKGlzQXNjaWlMZXR0ZXIoY29kZUEpICYmIGlzQXNjaWlMZXR0ZXIoY29kZUIpKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKGNvZGVBIC0gY29kZUIpO1xuICAgICAgICAgICAgaWYgKGRpZmYgIT09IDAgJiYgZGlmZiAhPT0gMzIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQW55IG90aGVyIGNoYXJjb2RlXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZUEpLnRvTG93ZXJDYXNlKCkgIT09IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZUIpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aElnbm9yZUNhc2Uoc3RyLCBjYW5kaWRhdGUpIHtcbiAgICB2YXIgY2FuZGlkYXRlTGVuZ3RoID0gY2FuZGlkYXRlLmxlbmd0aDtcbiAgICBpZiAoY2FuZGlkYXRlLmxlbmd0aCA+IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZG9FcXVhbHNJZ25vcmVDYXNlKHN0ciwgY2FuZGlkYXRlLCBjYW5kaWRhdGVMZW5ndGgpO1xufVxuLyoqXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBjb21tb24gcHJlZml4IG9mIHRoZSB0d28gc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblByZWZpeExlbmd0aChhLCBiKSB7XG4gICAgdmFyIGksIGxlbiA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChhLmNoYXJDb2RlQXQoaSkgIT09IGIuY2hhckNvZGVBdChpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlbjtcbn1cbi8qKlxuICogQHJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY29tbW9uIHN1ZmZpeCBvZiB0aGUgdHdvIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tb25TdWZmaXhMZW5ndGgoYSwgYikge1xuICAgIHZhciBpLCBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICAgIHZhciBhTGFzdEluZGV4ID0gYS5sZW5ndGggLSAxO1xuICAgIHZhciBiTGFzdEluZGV4ID0gYi5sZW5ndGggLSAxO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoYS5jaGFyQ29kZUF0KGFMYXN0SW5kZXggLSBpKSAhPT0gYi5jaGFyQ29kZUF0KGJMYXN0SW5kZXggLSBpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlbjtcbn1cbi8vIC0tLSB1bmljb2RlXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1N1cnJvZ2F0ZV9wYWlyXG4vLyBSZXR1cm5zIHRoZSBjb2RlIHBvaW50IHN0YXJ0aW5nIGF0IGEgc3BlY2lmaWVkIGluZGV4IGluIGEgc3RyaW5nXG4vLyBDb2RlIHBvaW50cyBVKzAwMDAgdG8gVStEN0ZGIGFuZCBVK0UwMDAgdG8gVStGRkZGIGFyZSByZXByZXNlbnRlZCBvbiBhIHNpbmdsZSBjaGFyYWN0ZXJcbi8vIENvZGUgcG9pbnRzIFUrMTAwMDAgdG8gVSsxMEZGRkYgYXJlIHJlcHJlc2VudGVkIG9uIHR3byBjb25zZWN1dGl2ZSBjaGFyYWN0ZXJzXG4vL2V4cG9ydCBmdW5jdGlvbiBnZXRVbmljb2RlUG9pbnQoc3RyOnN0cmluZywgaW5kZXg6bnVtYmVyLCBsZW46bnVtYmVyKTpudW1iZXIge1xuLy9cdGxldCBjaHJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaW5kZXgpO1xuLy9cdGlmICgweEQ4MDAgPD0gY2hyQ29kZSAmJiBjaHJDb2RlIDw9IDB4REJGRiAmJiBpbmRleCArIDEgPCBsZW4pIHtcbi8vXHRcdGxldCBuZXh0Q2hyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4vL1x0XHRpZiAoMHhEQzAwIDw9IG5leHRDaHJDb2RlICYmIG5leHRDaHJDb2RlIDw9IDB4REZGRikge1xuLy9cdFx0XHRyZXR1cm4gKGNockNvZGUgLSAweEQ4MDApIDw8IDEwICsgKG5leHRDaHJDb2RlIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4vL1x0XHR9XG4vL1x0fVxuLy9cdHJldHVybiBjaHJDb2RlO1xuLy99XG5leHBvcnQgZnVuY3Rpb24gaXNIaWdoU3Vycm9nYXRlKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuICgweEQ4MDAgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gMHhEQkZGKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xvd1N1cnJvZ2F0ZShjaGFyQ29kZSkge1xuICAgIHJldHVybiAoMHhEQzAwIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IDB4REZGRik7XG59XG4vKipcbiAqIEdlbmVyYXRlZCB1c2luZyBodHRwczovL2dpdGh1Yi5jb20vYWxleGFuZHJ1ZGltYS91bmljb2RlLXV0aWxzL2Jsb2IvbWFzdGVyL2dlbmVyYXRlLXJ0bC10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19SVEwgPSAvKD86W1xcdTA1QkVcXHUwNUMwXFx1MDVDM1xcdTA1QzZcXHUwNUQwLVxcdTA1RjRcXHUwNjA4XFx1MDYwQlxcdTA2MERcXHUwNjFCLVxcdTA2NEFcXHUwNjZELVxcdTA2NkZcXHUwNjcxLVxcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODMwLVxcdTA4NThcXHUwODVFLVxcdTA4QkRcXHUyMDBGXFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkQzRFxcdUZENTAtXFx1RkRGQ1xcdUZFNzAtXFx1RkVGQ118XFx1RDgwMltcXHVEQzAwLVxcdUREMUJcXHVERDIwLVxcdURFMDBcXHVERTEwLVxcdURFMzNcXHVERTQwLVxcdURFRTRcXHVERUVCLVxcdURGMzVcXHVERjQwLVxcdURGRkZdfFxcdUQ4MDNbXFx1REMwMC1cXHVEQ0ZGXXxcXHVEODNBW1xcdURDMDAtXFx1RENDRlxcdUREMDAtXFx1REQ0M1xcdURENTAtXFx1REZGRl18XFx1RDgzQltcXHVEQzAwLVxcdURFQkJdKS87XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgc3RyYCBjb250YWlucyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBjbGFzc2lmaWVkIGFzIFwiUlwiIG9yIFwiQUxcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zUlRMKHN0cikge1xuICAgIHJldHVybiBDT05UQUlOU19SVEwudGVzdChzdHIpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgdXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhhbmRydWRpbWEvdW5pY29kZS11dGlscy9ibG9iL21hc3Rlci9nZW5lcmF0ZS1lbW9qaS10ZXN0LmpzXG4gKi9cbnZhciBDT05UQUlOU19FTU9KSSA9IC8oPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0YwXFx1MjNGM1xcdTI2MDAtXFx1MjdCRlxcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURERTYtXFx1RERGRlxcdURGMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURFNEZcXHVERTgwLVxcdURFRjhdfFxcdUQ4M0VbXFx1REQwMC1cXHVEREU2XSkvO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zRW1vamkoc3RyKSB7XG4gICAgcmV0dXJuIENPTlRBSU5TX0VNT0pJLnRlc3Qoc3RyKTtcbn1cbnZhciBJU19CQVNJQ19BU0NJSSA9IC9eW1xcdFxcblxcclxceDIwLVxceDdFXSokLztcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBzdHJgIGNvbnRhaW5zIG9ubHkgYmFzaWMgQVNDSUkgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMzIgLSAxMjYgKGluY2x1ZGluZyAzMiBhbmQgMTI2KSBvciBcXG4sIFxcciwgXFx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jhc2ljQVNDSUkoc3RyKSB7XG4gICAgcmV0dXJuIElTX0JBU0lDX0FTQ0lJLnRlc3Qoc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChpc0Z1bGxXaWR0aENoYXJhY3RlcihzdHIuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGxXaWR0aENoYXJhY3RlcihjaGFyQ29kZSkge1xuICAgIC8vIERvIGEgY2hlYXAgdHJpY2sgdG8gYmV0dGVyIHN1cHBvcnQgd3JhcHBpbmcgb2Ygd2lkZSBjaGFyYWN0ZXJzLCB0cmVhdCB0aGVtIGFzIDIgY29sdW1uc1xuICAgIC8vIGh0dHA6Ly9qcmdyYXBoaXgubmV0L3Jlc2VhcmNoL3VuaWNvZGVfYmxvY2tzLnBocFxuICAgIC8vICAgICAgICAgIDJFODAg4oCUIDJFRkYgICBDSksgUmFkaWNhbHMgU3VwcGxlbWVudFxuICAgIC8vICAgICAgICAgIDJGMDAg4oCUIDJGREYgICBLYW5neGkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICAyRkYwIOKAlCAyRkZGICAgSWRlb2dyYXBoaWMgRGVzY3JpcHRpb24gQ2hhcmFjdGVyc1xuICAgIC8vICAgICAgICAgIDMwMDAg4oCUIDMwM0YgICBDSksgU3ltYm9scyBhbmQgUHVuY3R1YXRpb25cbiAgICAvLyAgICAgICAgICAzMDQwIOKAlCAzMDlGICAgSGlyYWdhbmFcbiAgICAvLyAgICAgICAgICAzMEEwIOKAlCAzMEZGICAgS2F0YWthbmFcbiAgICAvLyAgICAgICAgICAzMTAwIOKAlCAzMTJGICAgQm9wb21vZm9cbiAgICAvLyAgICAgICAgICAzMTMwIOKAlCAzMThGICAgSGFuZ3VsIENvbXBhdGliaWxpdHkgSmFtb1xuICAgIC8vICAgICAgICAgIDMxOTAg4oCUIDMxOUYgICBLYW5idW5cbiAgICAvLyAgICAgICAgICAzMUEwIOKAlCAzMUJGICAgQm9wb21vZm8gRXh0ZW5kZWRcbiAgICAvLyAgICAgICAgICAzMUYwIOKAlCAzMUZGICAgS2F0YWthbmEgUGhvbmV0aWMgRXh0ZW5zaW9uc1xuICAgIC8vICAgICAgICAgIDMyMDAg4oCUIDMyRkYgICBFbmNsb3NlZCBDSksgTGV0dGVycyBhbmQgTW9udGhzXG4gICAgLy8gICAgICAgICAgMzMwMCDigJQgMzNGRiAgIENKSyBDb21wYXRpYmlsaXR5XG4gICAgLy8gICAgICAgICAgMzQwMCDigJQgNERCRiAgIENKSyBVbmlmaWVkIElkZW9ncmFwaHMgRXh0ZW5zaW9uIEFcbiAgICAvLyAgICAgICAgICA0REMwIOKAlCA0REZGICAgWWlqaW5nIEhleGFncmFtIFN5bWJvbHNcbiAgICAvLyAgICAgICAgICA0RTAwIOKAlCA5RkZGICAgQ0pLIFVuaWZpZWQgSWRlb2dyYXBoc1xuICAgIC8vICAgICAgICAgIEEwMDAg4oCUIEE0OEYgICBZaSBTeWxsYWJsZXNcbiAgICAvLyAgICAgICAgICBBNDkwIOKAlCBBNENGICAgWWkgUmFkaWNhbHNcbiAgICAvLyAgICAgICAgICBBQzAwIOKAlCBEN0FGICAgSGFuZ3VsIFN5bGxhYmxlc1xuICAgIC8vIFtJR05PUkVdIEQ4MDAg4oCUIERCN0YgICBIaWdoIFN1cnJvZ2F0ZXNcbiAgICAvLyBbSUdOT1JFXSBEQjgwIOKAlCBEQkZGICAgSGlnaCBQcml2YXRlIFVzZSBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gREMwMCDigJQgREZGRiAgIExvdyBTdXJyb2dhdGVzXG4gICAgLy8gW0lHTk9SRV0gRTAwMCDigJQgRjhGRiAgIFByaXZhdGUgVXNlIEFyZWFcbiAgICAvLyAgICAgICAgICBGOTAwIOKAlCBGQUZGICAgQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuICAgIC8vIFtJR05PUkVdIEZCMDAg4oCUIEZCNEYgICBBbHBoYWJldGljIFByZXNlbnRhdGlvbiBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZCNTAg4oCUIEZERkYgICBBcmFiaWMgUHJlc2VudGF0aW9uIEZvcm1zLUFcbiAgICAvLyBbSUdOT1JFXSBGRTAwIOKAlCBGRTBGICAgVmFyaWF0aW9uIFNlbGVjdG9yc1xuICAgIC8vIFtJR05PUkVdIEZFMjAg4oCUIEZFMkYgICBDb21iaW5pbmcgSGFsZiBNYXJrc1xuICAgIC8vIFtJR05PUkVdIEZFMzAg4oCUIEZFNEYgICBDSksgQ29tcGF0aWJpbGl0eSBGb3Jtc1xuICAgIC8vIFtJR05PUkVdIEZFNTAg4oCUIEZFNkYgICBTbWFsbCBGb3JtIFZhcmlhbnRzXG4gICAgLy8gW0lHTk9SRV0gRkU3MCDigJQgRkVGRiAgIEFyYWJpYyBQcmVzZW50YXRpb24gRm9ybXMtQlxuICAgIC8vICAgICAgICAgIEZGMDAg4oCUIEZGRUYgICBIYWxmd2lkdGggYW5kIEZ1bGx3aWR0aCBGb3Jtc1xuICAgIC8vICAgICAgICAgICAgICAgW2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hhbGZ3aWR0aF9hbmRfZnVsbHdpZHRoX2Zvcm1zXVxuICAgIC8vICAgICAgICAgICAgICAgb2Ygd2hpY2ggRkYwMSAtIEZGNUUgZnVsbHdpZHRoIEFTQ0lJIG9mIDIxIHRvIDdFXG4gICAgLy8gW0lHTk9SRV0gICAgYW5kIEZGNjUgLSBGRkRDIGhhbGZ3aWR0aCBvZiBLYXRha2FuYSBhbmQgSGFuZ3VsXG4gICAgLy8gW0lHTk9SRV0gRkZGMCDigJQgRkZGRiAgIFNwZWNpYWxzXG4gICAgY2hhckNvZGUgPSArY2hhckNvZGU7IC8vIEBwZXJmXG4gICAgcmV0dXJuICgoY2hhckNvZGUgPj0gMHgyRTgwICYmIGNoYXJDb2RlIDw9IDB4RDdBRilcbiAgICAgICAgfHwgKGNoYXJDb2RlID49IDB4RjkwMCAmJiBjaGFyQ29kZSA8PSAweEZBRkYpXG4gICAgICAgIHx8IChjaGFyQ29kZSA+PSAweEZGMDEgJiYgY2hhckNvZGUgPD0gMHhGRjVFKSk7XG59XG4vLyAtLSBVVEYtOCBCT01cbmV4cG9ydCB2YXIgVVRGOF9CT01fQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NTI3OSAvKiBVVEY4X0JPTSAqLyk7XG5leHBvcnQgZnVuY3Rpb24gc3RhcnRzV2l0aFVURjhCT00oc3RyKSB7XG4gICAgcmV0dXJuIChzdHIgJiYgc3RyLmxlbmd0aCA+IDAgJiYgc3RyLmNoYXJDb2RlQXQoMCkgPT09IDY1Mjc5IC8qIFVURjhfQk9NICovKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYWZlQnRvYShzdHIpIHtcbiAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIHdlIHVzZSBlbmNvZGVVUklDb21wb25lbnQgYmVjYXVzZSBidG9hIGZhaWxzIGZvciBub24gTGF0aW4gMSB2YWx1ZXNcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXQocywgY291bnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfYTtcbmltcG9ydCB7IGlzV2luZG93cyB9IGZyb20gJy4vcGxhdGZvcm0uanMnO1xudmFyIF9zY2hlbWVQYXR0ZXJuID0gL15cXHdbXFx3XFxkKy4tXSokLztcbnZhciBfc2luZ2xlU2xhc2hTdGFydCA9IC9eXFwvLztcbnZhciBfZG91YmxlU2xhc2hTdGFydCA9IC9eXFwvXFwvLztcbmZ1bmN0aW9uIF92YWxpZGF0ZVVyaShyZXQpIHtcbiAgICAvLyBzY2hlbWUsIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4xXG4gICAgLy8gQUxQSEEgKiggQUxQSEEgLyBESUdJVCAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiApXG4gICAgaWYgKHJldC5zY2hlbWUgJiYgIV9zY2hlbWVQYXR0ZXJuLnRlc3QocmV0LnNjaGVtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBTY2hlbWUgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzLicpO1xuICAgIH1cbiAgICAvLyBwYXRoLCBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgLy8gSWYgYSBVUkkgY29udGFpbnMgYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjb21wb25lbnRcbiAgICAvLyBtdXN0IGVpdGhlciBiZSBlbXB0eSBvciBiZWdpbiB3aXRoIGEgc2xhc2ggKFwiL1wiKSBjaGFyYWN0ZXIuICBJZiBhIFVSSVxuICAgIC8vIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjYW5ub3QgYmVnaW5cbiAgICAvLyB3aXRoIHR3byBzbGFzaCBjaGFyYWN0ZXJzIChcIi8vXCIpLlxuICAgIGlmIChyZXQucGF0aCkge1xuICAgICAgICBpZiAocmV0LmF1dGhvcml0eSkge1xuICAgICAgICAgICAgaWYgKCFfc2luZ2xlU2xhc2hTdGFydC50ZXN0KHJldC5wYXRoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1VyaUVycm9yXTogSWYgYSBVUkkgY29udGFpbnMgYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjb21wb25lbnQgbXVzdCBlaXRoZXIgYmUgZW1wdHkgb3IgYmVnaW4gd2l0aCBhIHNsYXNoIChcIi9cIikgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoX2RvdWJsZVNsYXNoU3RhcnQudGVzdChyZXQucGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IElmIGEgVVJJIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0aG9yaXR5IGNvbXBvbmVudCwgdGhlbiB0aGUgcGF0aCBjYW5ub3QgYmVnaW4gd2l0aCB0d28gc2xhc2ggY2hhcmFjdGVycyAoXCIvL1wiKScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gaW1wbGVtZW50cyBhIGJpdCBvZiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTVcbmZ1bmN0aW9uIF9yZWZlcmVuY2VSZXNvbHV0aW9uKHNjaGVtZSwgcGF0aCkge1xuICAgIC8vIHRoZSBzbGFzaC1jaGFyYWN0ZXIgaXMgb3VyICdkZWZhdWx0IGJhc2UnIGFzIHdlIGRvbid0XG4gICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3RpbmcgVVJJcyByZWxhdGl2ZSB0byBvdGhlciBVUklzLiBUaGlzXG4gICAgLy8gYWxzbyBtZWFucyB0aGF0IHdlIGFsdGVyIGFuZCBwb3RlbnRpYWxseSBicmVhayBwYXRocy5cbiAgICAvLyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjEuNFxuICAgIHN3aXRjaCAoc2NoZW1lKSB7XG4gICAgICAgIGNhc2UgJ2h0dHBzJzpcbiAgICAgICAgY2FzZSAnaHR0cCc6XG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IF9zbGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGhbMF0gIT09IF9zbGFzaCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBfc2xhc2ggKyBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxudmFyIF9lbXB0eSA9ICcnO1xudmFyIF9zbGFzaCA9ICcvJztcbnZhciBfcmVnZXhwID0gL14oKFteOi8/I10rPyk6KT8oXFwvXFwvKFteLz8jXSopKT8oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPy87XG4vKipcbiAqIFVuaWZvcm0gUmVzb3VyY2UgSWRlbnRpZmllciAoVVJJKSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2LlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbXBsZSBwYXJzZXIgd2hpY2ggY3JlYXRlcyB0aGUgYmFzaWMgY29tcG9uZW50IHBhdGhzXG4gKiAoaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMpIHdpdGggbWluaW1hbCB2YWxpZGF0aW9uXG4gKiBhbmQgZW5jb2RpbmcuXG4gKlxuICogICAgICAgZm9vOi8vZXhhbXBsZS5jb206ODA0Mi9vdmVyL3RoZXJlP25hbWU9ZmVycmV0I25vc2VcbiAqICAgICAgIFxcXy8gICBcXF9fX19fX19fX19fX19fL1xcX19fX19fX19fLyBcXF9fX19fX19fXy8gXFxfXy9cbiAqICAgICAgICB8ICAgICAgICAgICB8ICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgICAgIHxcbiAqICAgICBzY2hlbWUgICAgIGF1dGhvcml0eSAgICAgICBwYXRoICAgICAgICBxdWVyeSAgIGZyYWdtZW50XG4gKiAgICAgICAgfCAgIF9fX19fX19fX19fX19fX19fX19fX3xfX1xuICogICAgICAgLyBcXCAvICAgICAgICAgICAgICAgICAgICAgICAgXFxcbiAqICAgICAgIHVybjpleGFtcGxlOmFuaW1hbDpmZXJyZXQ6bm9zZVxuICpcbiAqXG4gKi9cbnZhciBVUkkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gVVJJKHNjaGVtZU9yRGF0YSwgYXV0aG9yaXR5LCBwYXRoLCBxdWVyeSwgZnJhZ21lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzY2hlbWVPckRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVtZSA9IHNjaGVtZU9yRGF0YS5zY2hlbWUgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHkgPSBzY2hlbWVPckRhdGEuYXV0aG9yaXR5IHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHNjaGVtZU9yRGF0YS5wYXRoIHx8IF9lbXB0eTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBzY2hlbWVPckRhdGEucXVlcnkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5mcmFnbWVudCA9IHNjaGVtZU9yRGF0YS5mcmFnbWVudCB8fCBfZW1wdHk7XG4gICAgICAgICAgICAvLyBubyB2YWxpZGF0aW9uIGJlY2F1c2UgaXQncyB0aGlzIFVSSVxuICAgICAgICAgICAgLy8gdGhhdCBjcmVhdGVzIHVyaSBjb21wb25lbnRzLlxuICAgICAgICAgICAgLy8gX3ZhbGlkYXRlVXJpKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWUgPSBzY2hlbWVPckRhdGEgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHkgPSBhdXRob3JpdHkgfHwgX2VtcHR5O1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gX3JlZmVyZW5jZVJlc29sdXRpb24odGhpcy5zY2hlbWUsIHBhdGggfHwgX2VtcHR5KTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeSB8fCBfZW1wdHk7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQgfHwgX2VtcHR5O1xuICAgICAgICAgICAgX3ZhbGlkYXRlVXJpKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFVSSS5pc1VyaSA9IGZ1bmN0aW9uICh0aGluZykge1xuICAgICAgICBpZiAodGhpbmcgaW5zdGFuY2VvZiBVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nLmF1dGhvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5mcmFnbWVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGluZy5wYXRoID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnF1ZXJ5ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaW5nLnNjaGVtZSA9PT0gJ3N0cmluZyc7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVVJJLnByb3RvdHlwZSwgXCJmc1BhdGhcIiwge1xuICAgICAgICAvLyAtLS0tIGZpbGVzeXN0ZW0gcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgZmlsZSBzeXN0ZW0gcGF0aCBvZiB0aGlzIFVSSS5cbiAgICAgICAgICogV2lsbCBoYW5kbGUgVU5DIHBhdGhzIGFuZCBub3JtYWxpemUgd2luZG93cyBkcml2ZSBsZXR0ZXJzIHRvIGxvd2VyLWNhc2UuIEFsc29cbiAgICAgICAgICogdXNlcyB0aGUgcGxhdGZvcm0gc3BlY2lmaWMgcGF0aCBzZXBhcmF0b3IuIFdpbGwgKm5vdCogdmFsaWRhdGUgdGhlIHBhdGggZm9yXG4gICAgICAgICAqIGludmFsaWQgY2hhcmFjdGVycyBhbmQgc2VtYW50aWNzLiBXaWxsICpub3QqIGxvb2sgYXQgdGhlIHNjaGVtZSBvZiB0aGlzIFVSSS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9tYWtlRnNQYXRoKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvLyAtLS0tIG1vZGlmeSB0byBuZXcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFVSSS5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY2hlbWUgPSBjaGFuZ2Uuc2NoZW1lLCBhdXRob3JpdHkgPSBjaGFuZ2UuYXV0aG9yaXR5LCBwYXRoID0gY2hhbmdlLnBhdGgsIHF1ZXJ5ID0gY2hhbmdlLnF1ZXJ5LCBmcmFnbWVudCA9IGNoYW5nZS5mcmFnbWVudDtcbiAgICAgICAgaWYgKHNjaGVtZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzY2hlbWUgPSB0aGlzLnNjaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzY2hlbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNjaGVtZSA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXV0aG9yaXR5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF1dGhvcml0eSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgYXV0aG9yaXR5ID0gX2VtcHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGF0aCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGF0aCA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeSA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZyYWdtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IF9lbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZW1lID09PSB0aGlzLnNjaGVtZVxuICAgICAgICAgICAgJiYgYXV0aG9yaXR5ID09PSB0aGlzLmF1dGhvcml0eVxuICAgICAgICAgICAgJiYgcGF0aCA9PT0gdGhpcy5wYXRoXG4gICAgICAgICAgICAmJiBxdWVyeSA9PT0gdGhpcy5xdWVyeVxuICAgICAgICAgICAgJiYgZnJhZ21lbnQgPT09IHRoaXMuZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgX1VSSShzY2hlbWUsIGF1dGhvcml0eSwgcGF0aCwgcXVlcnksIGZyYWdtZW50KTtcbiAgICB9O1xuICAgIC8vIC0tLS0gcGFyc2UgJiB2YWxpZGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBVUkkucGFyc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gX3JlZ2V4cC5leGVjKHZhbHVlKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBfVVJJKF9lbXB0eSwgX2VtcHR5LCBfZW1wdHksIF9lbXB0eSwgX2VtcHR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IF9VUkkobWF0Y2hbMl0gfHwgX2VtcHR5LCBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbNF0gfHwgX2VtcHR5KSwgZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzVdIHx8IF9lbXB0eSksIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFs3XSB8fCBfZW1wdHkpLCBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbOV0gfHwgX2VtcHR5KSk7XG4gICAgfTtcbiAgICBVUkkuZmlsZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHZhciBhdXRob3JpdHkgPSBfZW1wdHk7XG4gICAgICAgIC8vIG5vcm1hbGl6ZSB0byBmd2Qtc2xhc2hlcyBvbiB3aW5kb3dzLFxuICAgICAgICAvLyBvbiBvdGhlciBzeXN0ZW1zIGJ3ZC1zbGFzaGVzIGFyZSB2YWxpZFxuICAgICAgICAvLyBmaWxlbmFtZSBjaGFyYWN0ZXIsIGVnIC9mXFxvby9iYVxcci50eHRcbiAgICAgICAgaWYgKGlzV2luZG93cykge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBfc2xhc2gpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGZvciBhdXRob3JpdHkgYXMgdXNlZCBpbiBVTkMgc2hhcmVzXG4gICAgICAgIC8vIG9yIHVzZSB0aGUgcGF0aCBhcyBnaXZlblxuICAgICAgICBpZiAocGF0aFswXSA9PT0gX3NsYXNoICYmIHBhdGhbMV0gPT09IF9zbGFzaCkge1xuICAgICAgICAgICAgdmFyIGlkeCA9IHBhdGguaW5kZXhPZihfc2xhc2gsIDIpO1xuICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBhdXRob3JpdHkgPSBwYXRoLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gX3NsYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gcGF0aC5zdWJzdHJpbmcoMiwgaWR4KTtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoaWR4KSB8fCBfc2xhc2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBfVVJJKCdmaWxlJywgYXV0aG9yaXR5LCBwYXRoLCBfZW1wdHksIF9lbXB0eSk7XG4gICAgfTtcbiAgICBVUkkuZnJvbSA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgX1VSSShjb21wb25lbnRzLnNjaGVtZSwgY29tcG9uZW50cy5hdXRob3JpdHksIGNvbXBvbmVudHMucGF0aCwgY29tcG9uZW50cy5xdWVyeSwgY29tcG9uZW50cy5mcmFnbWVudCk7XG4gICAgfTtcbiAgICAvLyAtLS0tIHByaW50aW5nL2V4dGVybmFsaXplIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNraXBFbmNvZGluZyBEbyBub3QgZW5jb2RlIHRoZSByZXN1bHQsIGRlZmF1bHQgaXMgYGZhbHNlYFxuICAgICAqL1xuICAgIFVSSS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoc2tpcEVuY29kaW5nKSB7XG4gICAgICAgIGlmIChza2lwRW5jb2RpbmcgPT09IHZvaWQgMCkgeyBza2lwRW5jb2RpbmcgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gX2FzRm9ybWF0dGVkKHRoaXMsIHNraXBFbmNvZGluZyk7XG4gICAgfTtcbiAgICBVUkkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBVUkkucmV2aXZlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVVJJKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgX1VSSShkYXRhKTtcbiAgICAgICAgICAgIHJlc3VsdC5fZnNQYXRoID0gZGF0YS5mc1BhdGg7XG4gICAgICAgICAgICByZXN1bHQuX2Zvcm1hdHRlZCA9IGRhdGEuZXh0ZXJuYWw7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVVJJO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFVSSTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG52YXIgX1VSSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoX1VSSSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBfVVJJKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2Zvcm1hdHRlZCA9IG51bGw7XG4gICAgICAgIF90aGlzLl9mc1BhdGggPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfVVJJLnByb3RvdHlwZSwgXCJmc1BhdGhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fZnNQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnNQYXRoID0gX21ha2VGc1BhdGgodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnNQYXRoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBfVVJJLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChza2lwRW5jb2RpbmcpIHtcbiAgICAgICAgaWYgKHNraXBFbmNvZGluZyA9PT0gdm9pZCAwKSB7IHNraXBFbmNvZGluZyA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghc2tpcEVuY29kaW5nKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Zvcm1hdHRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1hdHRlZCA9IF9hc0Zvcm1hdHRlZCh0aGlzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgY2FjaGUgdGhhdFxuICAgICAgICAgICAgcmV0dXJuIF9hc0Zvcm1hdHRlZCh0aGlzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX1VSSS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0ge1xuICAgICAgICAgICAgJG1pZDogMVxuICAgICAgICB9O1xuICAgICAgICAvLyBjYWNoZWQgc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuX2ZzUGF0aCkge1xuICAgICAgICAgICAgcmVzLmZzUGF0aCA9IHRoaXMuX2ZzUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZm9ybWF0dGVkKSB7XG4gICAgICAgICAgICByZXMuZXh0ZXJuYWwgPSB0aGlzLl9mb3JtYXR0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXJpIGNvbXBvbmVudHNcbiAgICAgICAgaWYgKHRoaXMucGF0aCkge1xuICAgICAgICAgICAgcmVzLnBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NoZW1lKSB7XG4gICAgICAgICAgICByZXMuc2NoZW1lID0gdGhpcy5zY2hlbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXMuYXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgICAgICAgIHJlcy5xdWVyeSA9IHRoaXMucXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHJlcy5mcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBfVVJJO1xufShVUkkpKTtcbi8vIHJlc2VydmVkIGNoYXJhY3RlcnM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMi4yXG52YXIgZW5jb2RlVGFibGUgPSAoX2EgPSB7fSxcbiAgICBfYVs1OCAvKiBDb2xvbiAqL10gPSAnJTNBJyxcbiAgICBfYVs0NyAvKiBTbGFzaCAqL10gPSAnJTJGJyxcbiAgICBfYVs2MyAvKiBRdWVzdGlvbk1hcmsgKi9dID0gJyUzRicsXG4gICAgX2FbMzUgLyogSGFzaCAqL10gPSAnJTIzJyxcbiAgICBfYVs5MSAvKiBPcGVuU3F1YXJlQnJhY2tldCAqL10gPSAnJTVCJyxcbiAgICBfYVs5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi9dID0gJyU1RCcsXG4gICAgX2FbNjQgLyogQXRTaWduICovXSA9ICclNDAnLFxuICAgIF9hWzMzIC8qIEV4Y2xhbWF0aW9uTWFyayAqL10gPSAnJTIxJyxcbiAgICBfYVszNiAvKiBEb2xsYXJTaWduICovXSA9ICclMjQnLFxuICAgIF9hWzM4IC8qIEFtcGVyc2FuZCAqL10gPSAnJTI2JyxcbiAgICBfYVszOSAvKiBTaW5nbGVRdW90ZSAqL10gPSAnJTI3JyxcbiAgICBfYVs0MCAvKiBPcGVuUGFyZW4gKi9dID0gJyUyOCcsXG4gICAgX2FbNDEgLyogQ2xvc2VQYXJlbiAqL10gPSAnJTI5JyxcbiAgICBfYVs0MiAvKiBBc3RlcmlzayAqL10gPSAnJTJBJyxcbiAgICBfYVs0MyAvKiBQbHVzICovXSA9ICclMkInLFxuICAgIF9hWzQ0IC8qIENvbW1hICovXSA9ICclMkMnLFxuICAgIF9hWzU5IC8qIFNlbWljb2xvbiAqL10gPSAnJTNCJyxcbiAgICBfYVs2MSAvKiBFcXVhbHMgKi9dID0gJyUzRCcsXG4gICAgX2FbMzIgLyogU3BhY2UgKi9dID0gJyUyMCcsXG4gICAgX2EpO1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50RmFzdCh1cmlDb21wb25lbnQsIGFsbG93U2xhc2gpIHtcbiAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgIHZhciBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCB1cmlDb21wb25lbnQubGVuZ3RoOyBwb3MrKykge1xuICAgICAgICB2YXIgY29kZSA9IHVyaUNvbXBvbmVudC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgIC8vIHVucmVzZXJ2ZWQgY2hhcmFjdGVyczogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjNcbiAgICAgICAgaWYgKChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMjIgLyogeiAqLylcbiAgICAgICAgICAgIHx8IChjb2RlID49IDY1IC8qIEEgKi8gJiYgY29kZSA8PSA5MCAvKiBaICovKVxuICAgICAgICAgICAgfHwgKGNvZGUgPj0gNDggLyogRGlnaXQwICovICYmIGNvZGUgPD0gNTcgLyogRGlnaXQ5ICovKVxuICAgICAgICAgICAgfHwgY29kZSA9PT0gNDUgLyogRGFzaCAqL1xuICAgICAgICAgICAgfHwgY29kZSA9PT0gNDYgLyogUGVyaW9kICovXG4gICAgICAgICAgICB8fCBjb2RlID09PSA5NSAvKiBVbmRlcmxpbmUgKi9cbiAgICAgICAgICAgIHx8IGNvZGUgPT09IDEyNiAvKiBUaWxkZSAqL1xuICAgICAgICAgICAgfHwgKGFsbG93U2xhc2ggJiYgY29kZSA9PT0gNDcgLyogU2xhc2ggKi8pKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgZGVsYXlpbmcgbmF0aXZlIGVuY29kZVxuICAgICAgICAgICAgaWYgKG5hdGl2ZUVuY29kZVBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHVyaUNvbXBvbmVudC5zdWJzdHJpbmcobmF0aXZlRW5jb2RlUG9zLCBwb3MpKTtcbiAgICAgICAgICAgICAgICBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIHdyaXRlIGludG8gYSBuZXcgc3RyaW5nIChieSBkZWZhdWx0IHdlIHRyeSB0byByZXR1cm4gdGhlIHBhcmFtKVxuICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IHVyaUNvbXBvbmVudC5jaGFyQXQocG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVuY29kaW5nIG5lZWRlZCwgd2UgbmVlZCB0byBhbGxvY2F0ZSBhIG5ldyBzdHJpbmdcbiAgICAgICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHVyaUNvbXBvbmVudC5zdWJzdHIoMCwgcG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIHdpdGggZGVmYXVsdCB0YWJsZSBmaXJzdFxuICAgICAgICAgICAgdmFyIGVzY2FwZWQgPSBlbmNvZGVUYWJsZVtjb2RlXTtcbiAgICAgICAgICAgIGlmIChlc2NhcGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgZGVsYXlpbmcgbmF0aXZlIGVuY29kZVxuICAgICAgICAgICAgICAgIGlmIChuYXRpdmVFbmNvZGVQb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MsIHBvcykpO1xuICAgICAgICAgICAgICAgICAgICBuYXRpdmVFbmNvZGVQb3MgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIGVzY2FwZWQgdmFyaWFudCB0byByZXN1bHRcbiAgICAgICAgICAgICAgICByZXMgKz0gZXNjYXBlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hdGl2ZUVuY29kZVBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgbmF0aXZlIGVuY29kZSBvbmx5IHdoZW4gbmVlZGVkXG4gICAgICAgICAgICAgICAgbmF0aXZlRW5jb2RlUG9zID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYXRpdmVFbmNvZGVQb3MgIT09IC0xKSB7XG4gICAgICAgIHJlcyArPSBlbmNvZGVVUklDb21wb25lbnQodXJpQ29tcG9uZW50LnN1YnN0cmluZyhuYXRpdmVFbmNvZGVQb3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkID8gcmVzIDogdXJpQ29tcG9uZW50O1xufVxuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50TWluaW1hbChwYXRoKSB7XG4gICAgdmFyIHJlcyA9IHVuZGVmaW5lZDtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCBwYXRoLmxlbmd0aDsgcG9zKyspIHtcbiAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDM1IC8qIEhhc2ggKi8gfHwgY29kZSA9PT0gNjMgLyogUXVlc3Rpb25NYXJrICovKSB7XG4gICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBwYXRoLnN1YnN0cigwLCBwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzICs9IGVuY29kZVRhYmxlW2NvZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9IHBhdGhbcG9zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzICE9PSB1bmRlZmluZWQgPyByZXMgOiBwYXRoO1xufVxuLyoqXG4gKiBDb21wdXRlIGBmc1BhdGhgIGZvciB0aGUgZ2l2ZW4gdXJpXG4gKiBAcGFyYW0gdXJpXG4gKi9cbmZ1bmN0aW9uIF9tYWtlRnNQYXRoKHVyaSkge1xuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAodXJpLmF1dGhvcml0eSAmJiB1cmkucGF0aC5sZW5ndGggPiAxICYmIHVyaS5zY2hlbWUgPT09ICdmaWxlJykge1xuICAgICAgICAvLyB1bmMgcGF0aDogZmlsZTovL3NoYXJlcy9jJC9mYXIvYm9vXG4gICAgICAgIHZhbHVlID0gXCIvL1wiICsgdXJpLmF1dGhvcml0eSArIHVyaS5wYXRoO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmkucGF0aC5jaGFyQ29kZUF0KDApID09PSA0NyAvKiBTbGFzaCAqL1xuICAgICAgICAmJiAodXJpLnBhdGguY2hhckNvZGVBdCgxKSA+PSA2NSAvKiBBICovICYmIHVyaS5wYXRoLmNoYXJDb2RlQXQoMSkgPD0gOTAgLyogWiAqLyB8fCB1cmkucGF0aC5jaGFyQ29kZUF0KDEpID49IDk3IC8qIGEgKi8gJiYgdXJpLnBhdGguY2hhckNvZGVBdCgxKSA8PSAxMjIgLyogeiAqLylcbiAgICAgICAgJiYgdXJpLnBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgLy8gd2luZG93cyBkcml2ZSBsZXR0ZXI6IGZpbGU6Ly8vYzovZmFyL2Jvb1xuICAgICAgICB2YWx1ZSA9IHVyaS5wYXRoWzFdLnRvTG93ZXJDYXNlKCkgKyB1cmkucGF0aC5zdWJzdHIoMik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBvdGhlciBwYXRoXG4gICAgICAgIHZhbHVlID0gdXJpLnBhdGg7XG4gICAgfVxuICAgIGlmIChpc1dpbmRvd3MpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBDcmVhdGUgdGhlIGV4dGVybmFsIHZlcnNpb24gb2YgYSB1cmlcbiAqL1xuZnVuY3Rpb24gX2FzRm9ybWF0dGVkKHVyaSwgc2tpcEVuY29kaW5nKSB7XG4gICAgdmFyIGVuY29kZXIgPSAhc2tpcEVuY29kaW5nXG4gICAgICAgID8gZW5jb2RlVVJJQ29tcG9uZW50RmFzdFxuICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudE1pbmltYWw7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHZhciBzY2hlbWUgPSB1cmkuc2NoZW1lLCBhdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LCBwYXRoID0gdXJpLnBhdGgsIHF1ZXJ5ID0gdXJpLnF1ZXJ5LCBmcmFnbWVudCA9IHVyaS5mcmFnbWVudDtcbiAgICBpZiAoc2NoZW1lKSB7XG4gICAgICAgIHJlcyArPSBzY2hlbWU7XG4gICAgICAgIHJlcyArPSAnOic7XG4gICAgfVxuICAgIGlmIChhdXRob3JpdHkgfHwgc2NoZW1lID09PSAnZmlsZScpIHtcbiAgICAgICAgcmVzICs9IF9zbGFzaDtcbiAgICAgICAgcmVzICs9IF9zbGFzaDtcbiAgICB9XG4gICAgaWYgKGF1dGhvcml0eSkge1xuICAgICAgICB2YXIgaWR4ID0gYXV0aG9yaXR5LmluZGV4T2YoJ0AnKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIDx1c2VyPkA8YXV0aD5cbiAgICAgICAgICAgIHZhciB1c2VyaW5mbyA9IGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IGF1dGhvcml0eS5zdWJzdHIoaWR4ICsgMSk7XG4gICAgICAgICAgICBpZHggPSB1c2VyaW5mby5pbmRleE9mKCc6Jyk7XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyA8dXNlcj46PHBhc3M+QDxhdXRoPlxuICAgICAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKHVzZXJpbmZvLnN1YnN0cigwLCBpZHgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JztcbiAgICAgICAgICAgICAgICByZXMgKz0gZW5jb2Rlcih1c2VyaW5mby5zdWJzdHIoaWR4ICsgMSksIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcyArPSAnQCc7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yaXR5ID0gYXV0aG9yaXR5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlkeCA9IGF1dGhvcml0eS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICByZXMgKz0gZW5jb2RlcihhdXRob3JpdHksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIDxhdXRoPjo8cG9ydD5cbiAgICAgICAgICAgIHJlcyArPSBlbmNvZGVyKGF1dGhvcml0eS5zdWJzdHIoMCwgaWR4KSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVzICs9IGF1dGhvcml0eS5zdWJzdHIoaWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0aCkge1xuICAgICAgICAvLyBsb3dlci1jYXNlIHdpbmRvd3MgZHJpdmUgbGV0dGVycyBpbiAvQzovZmZmIG9yIEM6L2ZmZlxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPj0gMyAmJiBwYXRoLmNoYXJDb2RlQXQoMCkgPT09IDQ3IC8qIFNsYXNoICovICYmIHBhdGguY2hhckNvZGVBdCgyKSA9PT0gNTggLyogQ29sb24gKi8pIHtcbiAgICAgICAgICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDEpO1xuICAgICAgICAgICAgaWYgKGNvZGUgPj0gNjUgLyogQSAqLyAmJiBjb2RlIDw9IDkwIC8qIFogKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCIvXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAzMikgKyBcIjpcIiArIHBhdGguc3Vic3RyKDMpOyAvLyBcIi9jOlwiLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhdGgubGVuZ3RoID49IDIgJiYgcGF0aC5jaGFyQ29kZUF0KDEpID09PSA1OCAvKiBDb2xvbiAqLykge1xuICAgICAgICAgICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBpZiAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gOTAgLyogWiAqLykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUgKyAzMikgKyBcIjpcIiArIHBhdGguc3Vic3RyKDIpOyAvLyBcIi9jOlwiLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVuY29kZSB0aGUgcmVzdCBvZiB0aGUgcGF0aFxuICAgICAgICByZXMgKz0gZW5jb2RlcihwYXRoLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIHJlcyArPSAnPyc7XG4gICAgICAgIHJlcyArPSBlbmNvZGVyKHF1ZXJ5LCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChmcmFnbWVudCkge1xuICAgICAgICByZXMgKz0gJyMnO1xuICAgICAgICByZXMgKz0gIXNraXBFbmNvZGluZyA/IGVuY29kZVVSSUNvbXBvbmVudEZhc3QoZnJhZ21lbnQsIGZhbHNlKSA6IGZyYWdtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuIiwiLyoqXG4gKiBFeHRyYWN0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vd2luanMvd2luanNcbiAqIFZlcnNpb246IDQuNC4wKGVjMzI1OGE5ZjNhMzY4MDVhMTg3ODQ4OTg0ZTNiYjkzODA0NDE3OGQpXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbnZhciBfX3dpbmpzX2V4cG9ydHM7XG5cbihmdW5jdGlvbigpIHtcblxudmFyIF9tb2R1bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTsvL3t9O1xuX21vZHVsZXNbXCJXaW5KUy9Db3JlL19XaW5KU1wiXSA9IHt9O1xuXG52YXIgX3dpbmpzID0gZnVuY3Rpb24obW9kdWxlSWQsIGRlcHMsIGZhY3RvcnkpIHtcbiAgICB2YXIgZXhwb3J0cyA9IHt9O1xuICAgIHZhciBleHBvcnRzUGFzc2VkSW4gPSBmYWxzZTtcblxuICAgIHZhciBkZXBzVmFsdWVzID0gZGVwcy5tYXAoZnVuY3Rpb24oZGVwKSB7XG4gICAgICAgIGlmIChkZXAgPT09ICdleHBvcnRzJykge1xuICAgICAgICAgICAgZXhwb3J0c1Bhc3NlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfbW9kdWxlc1tkZXBdO1xuICAgIH0pO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhY3RvcnkuYXBwbHkoe30sIGRlcHNWYWx1ZXMpO1xuXG4gICAgX21vZHVsZXNbbW9kdWxlSWRdID0gZXhwb3J0c1Bhc3NlZEluID8gZXhwb3J0cyA6IHJlc3VsdDtcbn07XG5cblxuX3dpbmpzKFwiV2luSlMvQ29yZS9fR2xvYmFsXCIsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBBcHBlYXNlIGpzaGludFxuICAgIC8qIGdsb2JhbCB3aW5kb3csIHNlbGYsIGdsb2JhbCAqL1xuXG4gICAgdmFyIGdsb2JhbE9iamVjdCA9XG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDpcbiAgICAgICAgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6XG4gICAgICAgIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICAgICAge307XG4gICAgcmV0dXJuIGdsb2JhbE9iamVjdDtcbn0pO1xuXG5fd2luanMoXCJXaW5KUy9Db3JlL19CYXNlQ29yZVV0aWxzXCIsIFtcIldpbkpTL0NvcmUvX0dsb2JhbFwiXSwgZnVuY3Rpb24gYmFzZUNvcmVVdGlsc0luaXQoX0dsb2JhbCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGhhc1dpblJUID0gISFfR2xvYmFsLldpbmRvd3M7XG5cbiAgICBmdW5jdGlvbiBtYXJrU3VwcG9ydGVkRm9yUHJvY2Vzc2luZyhmdW5jKSB7XG4gICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuVXRpbGl0aWVzLm1hcmtTdXBwb3J0ZWRGb3JQcm9jZXNzaW5nXCI+XG4gICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5tYXJrU3VwcG9ydGVkRm9yUHJvY2Vzc2luZ1wiPlxuICAgICAgICAvLy8gTWFya3MgYSBmdW5jdGlvbiBhcyBiZWluZyBjb21wYXRpYmxlIHdpdGggZGVjbGFyYXRpdmUgcHJvY2Vzc2luZywgc3VjaCBhcyBXaW5KUy5VSS5wcm9jZXNzQWxsXG4gICAgICAgIC8vLyBvciBXaW5KUy5CaW5kaW5nLnByb2Nlc3NBbGwuXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImZ1bmNcIiB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5tYXJrU3VwcG9ydGVkRm9yUHJvY2Vzc2luZ19wOmZ1bmNcIj5cbiAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBtYXJrZWQgYXMgY29tcGF0aWJsZSB3aXRoIGRlY2xhcmF0aXZlIHByb2Nlc3NpbmcuXG4gICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIkZ1bmN0aW9uXCIgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMubWFya1N1cHBvcnRlZEZvclByb2Nlc3NpbmdfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgLy8vIFRoZSBpbnB1dCBmdW5jdGlvbi5cbiAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICBmdW5jLnN1cHBvcnRlZEZvclByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuYztcbiAgICB9XG5cbiAgICB2YXIgYWN0dWFsU2V0SW1tZWRpYXRlID0gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhhc1dpblJUOiBoYXNXaW5SVCxcbiAgICAgICAgbWFya1N1cHBvcnRlZEZvclByb2Nlc3Npbmc6IG1hcmtTdXBwb3J0ZWRGb3JQcm9jZXNzaW5nLFxuICAgICAgICBfc2V0SW1tZWRpYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIEJFR0lOIG1vbmFjbyBjaGFuZ2VcbiAgICAgICAgICAgIGlmIChhY3R1YWxTZXRJbW1lZGlhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoX0dsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2V0SW1tZWRpYXRlID0gX0dsb2JhbC5zZXRJbW1lZGlhdGUuYmluZChfR2xvYmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxTZXRJbW1lZGlhdGUgPSBwcm9jZXNzLm5leHRUaWNrLmJpbmQocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2V0SW1tZWRpYXRlID0gX0dsb2JhbC5zZXRUaW1lb3V0LmJpbmQoX0dsb2JhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0dWFsU2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8vIEVORCBtb25hY28gY2hhbmdlXG4gICAgICAgIH1cbiAgICB9O1xufSk7XG5fd2luanMoXCJXaW5KUy9Db3JlL19Xcml0ZVByb2ZpbGVyTWFya1wiLCBbXCJXaW5KUy9Db3JlL19HbG9iYWxcIl0sIGZ1bmN0aW9uIHByb2ZpbGVySW5pdChfR2xvYmFsKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICByZXR1cm4gX0dsb2JhbC5tc1dyaXRlUHJvZmlsZXJNYXJrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbn0pO1xuX3dpbmpzKFwiV2luSlMvQ29yZS9fQmFzZVwiLCBbXCJXaW5KUy9Db3JlL19XaW5KU1wiLFwiV2luSlMvQ29yZS9fR2xvYmFsXCIsXCJXaW5KUy9Db3JlL19CYXNlQ29yZVV0aWxzXCIsXCJXaW5KUy9Db3JlL19Xcml0ZVByb2ZpbGVyTWFya1wiXSwgZnVuY3Rpb24gYmFzZUluaXQoX1dpbkpTLCBfR2xvYmFsLCBfQmFzZUNvcmVVdGlscywgX1dyaXRlUHJvZmlsZXJNYXJrKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplUHJvcGVydGllcyh0YXJnZXQsIG1lbWJlcnMsIHByZWZpeCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG1lbWJlcnMpO1xuICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbiAgICAgICAgdmFyIHByb3BlcnRpZXM7XG4gICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGVudW1lcmFibGUgPSBrZXkuY2hhckNvZGVBdCgwKSAhPT0gLypfKi85NTtcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBtZW1iZXJzW2tleV07XG4gICAgICAgICAgICBpZiAobWVtYmVyICYmIHR5cGVvZiBtZW1iZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lbWJlci52YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBtZW1iZXIuZ2V0ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBtZW1iZXIuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXIuZW51bWVyYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXIuZW51bWVyYWJsZSA9IGVudW1lcmFibGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZpeCAmJiBtZW1iZXIuc2V0TmFtZSAmJiB0eXBlb2YgbWVtYmVyLnNldE5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlci5zZXROYW1lKHByZWZpeCArIFwiLlwiICsga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gbWVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWVudW1lcmFibGUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7IHZhbHVlOiBtZW1iZXIsIGVudW1lcmFibGU6IGVudW1lcmFibGUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lbWJlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBtZW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgX3Jvb3ROYW1lc3BhY2UgPSBfV2luSlM7XG4gICAgICAgIGlmICghX3Jvb3ROYW1lc3BhY2UuTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBfcm9vdE5hbWVzcGFjZS5OYW1lc3BhY2UgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTmFtZXNwYWNlKHBhcmVudE5hbWVzcGFjZSwgbmFtZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnROYW1lc3BhY2UgPSBwYXJlbnROYW1lc3BhY2UgfHwge307XG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lc3BhY2VGcmFnbWVudHMgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE5hbWVzcGFjZSA9PT0gX0dsb2JhbCAmJiBuYW1lc3BhY2VGcmFnbWVudHNbMF0gPT09IFwiV2luSlNcIikge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TmFtZXNwYWNlID0gX1dpbkpTO1xuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2VGcmFnbWVudHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbmFtZXNwYWNlRnJhZ21lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lc3BhY2VOYW1lID0gbmFtZXNwYWNlRnJhZ21lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnROYW1lc3BhY2VbbmFtZXNwYWNlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdXJyZW50TmFtZXNwYWNlLCBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IHt9LCB3cml0YWJsZTogZmFsc2UsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROYW1lc3BhY2UgPSBjdXJyZW50TmFtZXNwYWNlW25hbWVzcGFjZU5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50TmFtZXNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lV2l0aFBhcmVudChwYXJlbnROYW1lc3BhY2UsIG5hbWUsIG1lbWJlcnMpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuTmFtZXNwYWNlLmRlZmluZVdpdGhQYXJlbnRcIj5cbiAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLk5hbWVzcGFjZS5kZWZpbmVXaXRoUGFyZW50XCI+XG4gICAgICAgICAgICAvLy8gRGVmaW5lcyBhIG5ldyBuYW1lc3BhY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUgdW5kZXIgdGhlIHNwZWNpZmllZCBwYXJlbnQgbmFtZXNwYWNlLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInBhcmVudE5hbWVzcGFjZVwiIHR5cGU9XCJPYmplY3RcIiBsb2NpZD1cIldpbkpTLk5hbWVzcGFjZS5kZWZpbmVXaXRoUGFyZW50X3A6cGFyZW50TmFtZXNwYWNlXCI+XG4gICAgICAgICAgICAvLy8gVGhlIHBhcmVudCBuYW1lc3BhY2UuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm5hbWVcIiB0eXBlPVwiU3RyaW5nXCIgbG9jaWQ9XCJXaW5KUy5OYW1lc3BhY2UuZGVmaW5lV2l0aFBhcmVudF9wOm5hbWVcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbmFtZSBvZiB0aGUgbmV3IG5hbWVzcGFjZS5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwibWVtYmVyc1wiIHR5cGU9XCJPYmplY3RcIiBsb2NpZD1cIldpbkpTLk5hbWVzcGFjZS5kZWZpbmVXaXRoUGFyZW50X3A6bWVtYmVyc1wiPlxuICAgICAgICAgICAgLy8vIFRoZSBtZW1iZXJzIG9mIHRoZSBuZXcgbmFtZXNwYWNlLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIk9iamVjdFwiIGxvY2lkPVwiV2luSlMuTmFtZXNwYWNlLmRlZmluZVdpdGhQYXJlbnRfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbmV3bHktZGVmaW5lZCBuYW1lc3BhY2UuXG4gICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgdmFyIGN1cnJlbnROYW1lc3BhY2UgPSBjcmVhdGVOYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCBuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplUHJvcGVydGllcyhjdXJyZW50TmFtZXNwYWNlLCBtZW1iZXJzLCBuYW1lIHx8IFwiPEFOT05ZTU9VUz5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50TmFtZXNwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lKG5hbWUsIG1lbWJlcnMpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuTmFtZXNwYWNlLmRlZmluZVwiPlxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuTmFtZXNwYWNlLmRlZmluZVwiPlxuICAgICAgICAgICAgLy8vIERlZmluZXMgYSBuZXcgbmFtZXNwYWNlIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm5hbWVcIiB0eXBlPVwiU3RyaW5nXCIgbG9jaWQ9XCJXaW5KUy5OYW1lc3BhY2UuZGVmaW5lX3A6bmFtZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSBuYW1lIG9mIHRoZSBuYW1lc3BhY2UuIFRoaXMgY291bGQgYmUgYSBkb3Qtc2VwYXJhdGVkIG5hbWUgZm9yIG5lc3RlZCBuYW1lc3BhY2VzLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJtZW1iZXJzXCIgdHlwZT1cIk9iamVjdFwiIGxvY2lkPVwiV2luSlMuTmFtZXNwYWNlLmRlZmluZV9wOm1lbWJlcnNcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbWVtYmVycyBvZiB0aGUgbmV3IG5hbWVzcGFjZS5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxyZXR1cm5zIHR5cGU9XCJPYmplY3RcIiBsb2NpZD1cIldpbkpTLk5hbWVzcGFjZS5kZWZpbmVfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbmV3bHktZGVmaW5lZCBuYW1lc3BhY2UuXG4gICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgcmV0dXJuIGRlZmluZVdpdGhQYXJlbnQoX0dsb2JhbCwgbmFtZSwgbWVtYmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgTGF6eVN0YXRlcyA9IHtcbiAgICAgICAgICAgIHVuaW5pdGlhbGl6ZWQ6IDEsXG4gICAgICAgICAgICB3b3JraW5nOiAyLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IDMsXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbGF6eShmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZTtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IExhenlTdGF0ZXMudW5pbml0aWFsaXplZDtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNldE5hbWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXp5U3RhdGVzLmluaXRpYWxpemVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTGF6eVN0YXRlcy51bmluaXRpYWxpemVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTGF6eVN0YXRlcy53b3JraW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9Xcml0ZVByb2ZpbGVyTWFyayhcIldpbkpTLk5hbWVzcGFjZS5fbGF6eTpcIiArIG5hbWUgKyBcIixTdGFydFRNXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX1dyaXRlUHJvZmlsZXJNYXJrKFwiV2luSlMuTmFtZXNwYWNlLl9sYXp5OlwiICsgbmFtZSArIFwiLFN0b3BUTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBMYXp5U3RhdGVzLnVuaW5pdGlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gTGF6eVN0YXRlcy5pbml0aWFsaXplZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExhenlTdGF0ZXMud29ya2luZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIklsbGVnYWw6IHJlZW50cmFuY3kgb24gaW5pdGlhbGl6YXRpb25cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIklsbGVnYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMYXp5U3RhdGVzLndvcmtpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJJbGxlZ2FsOiByZWVudHJhbmN5IG9uIGluaXRpYWxpemF0aW9uXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBMYXp5U3RhdGVzLmluaXRpYWxpemVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoZWxwZXIgZm9yIGRlZmluaW5nIEFNRCBtb2R1bGUgbWVtYmVyc1xuICAgICAgICBmdW5jdGlvbiBtb2R1bGVEZWZpbmUoZXhwb3J0cywgbmFtZSwgbWVtYmVycykge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IFtleHBvcnRzXTtcbiAgICAgICAgICAgIHZhciBwdWJsaWNOUyA9IG51bGw7XG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHB1YmxpY05TID0gY3JlYXRlTmFtZXNwYWNlKF9HbG9iYWwsIG5hbWUpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKHB1YmxpY05TKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXRpYWxpemVQcm9wZXJ0aWVzKHRhcmdldCwgbWVtYmVycywgbmFtZSB8fCBcIjxBTk9OWU1PVVM+XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHB1YmxpY05TO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXN0YWJsaXNoIG1lbWJlcnMgb2YgdGhlIFwiV2luSlMuTmFtZXNwYWNlXCIgbmFtZXNwYWNlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKF9yb290TmFtZXNwYWNlLk5hbWVzcGFjZSwge1xuXG4gICAgICAgICAgICBkZWZpbmVXaXRoUGFyZW50OiB7IHZhbHVlOiBkZWZpbmVXaXRoUGFyZW50LCB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0sXG5cbiAgICAgICAgICAgIGRlZmluZTogeyB2YWx1ZTogZGVmaW5lLCB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0sXG5cbiAgICAgICAgICAgIF9sYXp5OiB7IHZhbHVlOiBsYXp5LCB3cml0YWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0sXG5cbiAgICAgICAgICAgIF9tb2R1bGVEZWZpbmU6IHsgdmFsdWU6IG1vZHVsZURlZmluZSwgd3JpdGFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmdW5jdGlvbiBkZWZpbmUoY29uc3RydWN0b3IsIGluc3RhbmNlTWVtYmVycywgc3RhdGljTWVtYmVycykge1xuICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5DbGFzcy5kZWZpbmVcIj5cbiAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLkNsYXNzLmRlZmluZVwiPlxuICAgICAgICAgICAgLy8vIERlZmluZXMgYSBjbGFzcyB1c2luZyB0aGUgZ2l2ZW4gY29uc3RydWN0b3IgYW5kIHRoZSBzcGVjaWZpZWQgaW5zdGFuY2UgbWVtYmVycy5cbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJjb25zdHJ1Y3RvclwiIHR5cGU9XCJGdW5jdGlvblwiIGxvY2lkPVwiV2luSlMuQ2xhc3MuZGVmaW5lX3A6Y29uc3RydWN0b3JcIj5cbiAgICAgICAgICAgIC8vLyBBIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBpbnN0YW50aWF0ZSB0aGlzIGNsYXNzLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJpbnN0YW5jZU1lbWJlcnNcIiB0eXBlPVwiT2JqZWN0XCIgbG9jaWQ9XCJXaW5KUy5DbGFzcy5kZWZpbmVfcDppbnN0YW5jZU1lbWJlcnNcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgc2V0IG9mIGluc3RhbmNlIGZpZWxkcywgcHJvcGVydGllcywgYW5kIG1ldGhvZHMgbWFkZSBhdmFpbGFibGUgb24gdGhlIGNsYXNzLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJzdGF0aWNNZW1iZXJzXCIgdHlwZT1cIk9iamVjdFwiIGxvY2lkPVwiV2luSlMuQ2xhc3MuZGVmaW5lX3A6c3RhdGljTWVtYmVyc1wiPlxuICAgICAgICAgICAgLy8vIFRoZSBzZXQgb2Ygc3RhdGljIGZpZWxkcywgcHJvcGVydGllcywgYW5kIG1ldGhvZHMgbWFkZSBhdmFpbGFibGUgb24gdGhlIGNsYXNzLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIkZ1bmN0aW9uXCIgbG9jaWQ9XCJXaW5KUy5DbGFzcy5kZWZpbmVfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbmV3bHktZGVmaW5lZCBjbGFzcy5cbiAgICAgICAgICAgIC8vLyA8L3JldHVybnM+XG4gICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgIF9CYXNlQ29yZVV0aWxzLm1hcmtTdXBwb3J0ZWRGb3JQcm9jZXNzaW5nKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZU1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplUHJvcGVydGllcyhjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGluc3RhbmNlTWVtYmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGljTWVtYmVycykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yLCBzdGF0aWNNZW1iZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlcml2ZShiYXNlQ2xhc3MsIGNvbnN0cnVjdG9yLCBpbnN0YW5jZU1lbWJlcnMsIHN0YXRpY01lbWJlcnMpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuQ2xhc3MuZGVyaXZlXCI+XG4gICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5DbGFzcy5kZXJpdmVcIj5cbiAgICAgICAgICAgIC8vLyBDcmVhdGVzIGEgc3ViLWNsYXNzIGJhc2VkIG9uIHRoZSBzdXBwbGllZCBiYXNlQ2xhc3MgcGFyYW1ldGVyLCB1c2luZyBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImJhc2VDbGFzc1wiIHR5cGU9XCJGdW5jdGlvblwiIGxvY2lkPVwiV2luSlMuQ2xhc3MuZGVyaXZlX3A6YmFzZUNsYXNzXCI+XG4gICAgICAgICAgICAvLy8gVGhlIGNsYXNzIHRvIGluaGVyaXQgZnJvbS5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiY29uc3RydWN0b3JcIiB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLkNsYXNzLmRlcml2ZV9wOmNvbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICAvLy8gQSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaW5zdGFudGlhdGUgdGhpcyBjbGFzcy5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiaW5zdGFuY2VNZW1iZXJzXCIgdHlwZT1cIk9iamVjdFwiIGxvY2lkPVwiV2luSlMuQ2xhc3MuZGVyaXZlX3A6aW5zdGFuY2VNZW1iZXJzXCI+XG4gICAgICAgICAgICAvLy8gVGhlIHNldCBvZiBpbnN0YW5jZSBmaWVsZHMsIHByb3BlcnRpZXMsIGFuZCBtZXRob2RzIHRvIGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwic3RhdGljTWVtYmVyc1wiIHR5cGU9XCJPYmplY3RcIiBsb2NpZD1cIldpbkpTLkNsYXNzLmRlcml2ZV9wOnN0YXRpY01lbWJlcnNcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgc2V0IG9mIHN0YXRpYyBmaWVsZHMsIHByb3BlcnRpZXMsIGFuZCBtZXRob2RzIHRvIGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBjbGFzcy5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxyZXR1cm5zIHR5cGU9XCJGdW5jdGlvblwiIGxvY2lkPVwiV2luSlMuQ2xhc3MuZGVyaXZlX3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAvLy8gVGhlIG5ld2x5LWRlZmluZWQgY2xhc3MuXG4gICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgaWYgKGJhc2VDbGFzcykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3IgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgICAgIHZhciBiYXNlUHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGJhc2VQcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIF9CYXNlQ29yZVV0aWxzLm1hcmtTdXBwb3J0ZWRGb3JQcm9jZXNzaW5nKGNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IGNvbnN0cnVjdG9yLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZU1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZVByb3BlcnRpZXMoY29uc3RydWN0b3IucHJvdG90eXBlLCBpbnN0YW5jZU1lbWJlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGljTWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplUHJvcGVydGllcyhjb25zdHJ1Y3Rvciwgc3RhdGljTWVtYmVycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluZShjb25zdHJ1Y3RvciwgaW5zdGFuY2VNZW1iZXJzLCBzdGF0aWNNZW1iZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1peChjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5DbGFzcy5taXhcIj5cbiAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLkNsYXNzLm1peFwiPlxuICAgICAgICAgICAgLy8vIERlZmluZXMgYSBjbGFzcyB1c2luZyB0aGUgZ2l2ZW4gY29uc3RydWN0b3IgYW5kIHRoZSB1bmlvbiBvZiB0aGUgc2V0IG9mIGluc3RhbmNlIG1lbWJlcnNcbiAgICAgICAgICAgIC8vLyBzcGVjaWZpZWQgYnkgYWxsIHRoZSBtaXhpbiBvYmplY3RzLiBUaGUgbWl4aW4gcGFyYW1ldGVyIGxpc3QgaXMgb2YgdmFyaWFibGUgbGVuZ3RoLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImNvbnN0cnVjdG9yXCIgbG9jaWQ9XCJXaW5KUy5DbGFzcy5taXhfcDpjb25zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgLy8vIEEgY29uc3RydWN0b3IgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGluc3RhbnRpYXRlIHRoaXMgY2xhc3MuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLkNsYXNzLm1peF9yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSBuZXdseS1kZWZpbmVkIGNsYXNzLlxuICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3IgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgICAgIGZvciAoaSA9IDEsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVQcm9wZXJ0aWVzKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVzdGFibGlzaCBtZW1iZXJzIG9mIFwiV2luSlMuQ2xhc3NcIiBuYW1lc3BhY2VcbiAgICAgICAgX1dpbkpTLk5hbWVzcGFjZS5kZWZpbmUoXCJXaW5KUy5DbGFzc1wiLCB7XG4gICAgICAgICAgICBkZWZpbmU6IGRlZmluZSxcbiAgICAgICAgICAgIGRlcml2ZTogZGVyaXZlLFxuICAgICAgICAgICAgbWl4OiBtaXhcbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTmFtZXNwYWNlOiBfV2luSlMuTmFtZXNwYWNlLFxuICAgICAgICBDbGFzczogX1dpbkpTLkNsYXNzXG4gICAgfTtcblxufSk7XG5fd2luanMoXCJXaW5KUy9Db3JlL19FcnJvckZyb21OYW1lXCIsIFtcIldpbkpTL0NvcmUvX0Jhc2VcIl0sIGZ1bmN0aW9uIGVycm9yc0luaXQoX0Jhc2UpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBFcnJvckZyb21OYW1lID0gX0Jhc2UuQ2xhc3MuZGVyaXZlKEVycm9yLCBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xuICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLkVycm9yRnJvbU5hbWVcIj5cbiAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuRXJyb3JGcm9tTmFtZVwiPlxuICAgICAgICAvLy8gQ3JlYXRlcyBhbiBFcnJvciBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIG1lc3NhZ2UgcHJvcGVydGllcy5cbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwibmFtZVwiIHR5cGU9XCJTdHJpbmdcIiBsb2NpZD1cIldpbkpTLkVycm9yRnJvbU5hbWVfcDpuYW1lXCI+VGhlIG5hbWUgb2YgdGhpcyBlcnJvci4gVGhlIG5hbWUgaXMgbWVhbnQgdG8gYmUgY29uc3VtZWQgcHJvZ3JhbW1hdGljYWxseSBhbmQgc2hvdWxkIG5vdCBiZSBsb2NhbGl6ZWQuPC9wYXJhbT5cbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwibWVzc2FnZVwiIHR5cGU9XCJTdHJpbmdcIiBvcHRpb25hbD1cInRydWVcIiBsb2NpZD1cIldpbkpTLkVycm9yRnJvbU5hbWVfcDptZXNzYWdlXCI+VGhlIG1lc3NhZ2UgZm9yIHRoaXMgZXJyb3IuIFRoZSBtZXNzYWdlIGlzIG1lYW50IHRvIGJlIGNvbnN1bWVkIGJ5IGh1bWFucyBhbmQgc2hvdWxkIGJlIGxvY2FsaXplZC48L3BhcmFtPlxuICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIkVycm9yXCIgbG9jaWQ9XCJXaW5KUy5FcnJvckZyb21OYW1lX3JldHVyblZhbHVlXCI+RXJyb3IgaW5zdGFuY2Ugd2l0aCAubmFtZSBhbmQgLm1lc3NhZ2UgcHJvcGVydGllcyBwb3B1bGF0ZWQ8L3JldHVybnM+XG4gICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCBuYW1lO1xuICAgIH0sIHtcbiAgICAgICAgLyogZW1wdHkgKi9cbiAgICB9LCB7XG4gICAgICAgIHN1cHBvcnRlZEZvclByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgX0Jhc2UuTmFtZXNwYWNlLmRlZmluZShcIldpbkpTXCIsIHtcbiAgICAgICAgLy8gRXJyb3JGcm9tTmFtZSBlc3RhYmxpc2hlcyBhIHNpbXBsZSBwYXR0ZXJuIGZvciByZXR1cm5pbmcgZXJyb3IgY29kZXMuXG4gICAgICAgIC8vXG4gICAgICAgIEVycm9yRnJvbU5hbWU6IEVycm9yRnJvbU5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBFcnJvckZyb21OYW1lO1xuXG59KTtcblxuXG5fd2luanMoXCJXaW5KUy9Db3JlL19FdmVudHNcIiwgW1wiZXhwb3J0c1wiLFwiV2luSlMvQ29yZS9fQmFzZVwiXSwgZnVuY3Rpb24gZXZlbnRzSW5pdChleHBvcnRzLCBfQmFzZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudFByb3BlcnR5KG5hbWUpIHtcbiAgICAgICAgdmFyIGV2ZW50UHJvcFN0YXRlTmFtZSA9IFwiX29uXCIgKyBuYW1lICsgXCJzdGF0ZVwiO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2V2ZW50UHJvcFN0YXRlTmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlLnVzZXJIYW5kbGVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW2V2ZW50UHJvcFN0YXRlTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7IHdyYXBwZXI6IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIHN0YXRlLnVzZXJIYW5kbGVyKGV2dCk7IH0sIHVzZXJIYW5kbGVyOiBoYW5kbGVyIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgZXZlbnRQcm9wU3RhdGVOYW1lLCB7IHZhbHVlOiBzdGF0ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOnRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBzdGF0ZS53cmFwcGVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlckhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHN0YXRlLndyYXBwZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tldmVudFByb3BTdGF0ZU5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5VdGlsaXRpZXMuY3JlYXRlRXZlbnRQcm9wZXJ0aWVzXCI+XG4gICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5jcmVhdGVFdmVudFByb3BlcnRpZXNcIj5cbiAgICAgICAgLy8vIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgaGFzIG9uZSBwcm9wZXJ0eSBmb3IgZWFjaCBuYW1lIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImV2ZW50c1wiIGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmNyZWF0ZUV2ZW50UHJvcGVydGllc19wOmV2ZW50c1wiPlxuICAgICAgICAvLy8gQSB2YXJpYWJsZSBsaXN0IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgLy8vIDxyZXR1cm5zIHR5cGU9XCJPYmplY3RcIiBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5jcmVhdGVFdmVudFByb3BlcnRpZXNfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgLy8vIFRoZSBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuIFRoZSBuYW1lcyBvZiB0aGUgcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCAnb24nLlxuICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgIHZhciBwcm9wcyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIHByb3BzW1wib25cIiArIG5hbWVdID0gY3JlYXRlRXZlbnRQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgdmFyIEV2ZW50TWl4aW5FdmVudCA9IF9CYXNlLkNsYXNzLmRlZmluZShcbiAgICAgICAgZnVuY3Rpb24gRXZlbnRNaXhpbkV2ZW50X2N0b3IodHlwZSwgZGV0YWlsLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBidWJibGVzOiB7IHZhbHVlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB7IHZhbHVlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRhcmdldDsgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQ6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ByZXZlbnREZWZhdWx0Q2FsbGVkOyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJ1c3RlZDogeyB2YWx1ZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgZXZlbnRQaGFzZTogeyB2YWx1ZTogMCwgd3JpdGFibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgICAgICB0aW1lU3RhbXA6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZlbnREZWZhdWx0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25DYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRGb3JQcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB2YXIgZXZlbnRNaXhpbiA9IHtcbiAgICAgICAgX2xpc3RlbmVyczogbnVsbCxcblxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4uYWRkRXZlbnRMaXN0ZW5lclwiPlxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4uYWRkRXZlbnRMaXN0ZW5lclwiPlxuICAgICAgICAgICAgLy8vIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbnRyb2wuXG4gICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwidHlwZVwiIGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4uYWRkRXZlbnRMaXN0ZW5lcl9wOnR5cGVcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgdHlwZSAobmFtZSkgb2YgdGhlIGV2ZW50LlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJsaXN0ZW5lclwiIGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4uYWRkRXZlbnRMaXN0ZW5lcl9wOmxpc3RlbmVyXCI+XG4gICAgICAgICAgICAvLy8gVGhlIGxpc3RlbmVyIHRvIGludm9rZSB3aGVuIHRoZSBldmVudCBpcyByYWlzZWQuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInVzZUNhcHR1cmVcIiBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5ldmVudE1peGluLmFkZEV2ZW50TGlzdGVuZXJfcDp1c2VDYXB0dXJlXCI+XG4gICAgICAgICAgICAvLy8gaWYgdHJ1ZSBpbml0aWF0ZXMgY2FwdHVyZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcbiAgICAgICAgICAgIHZhciBldmVudExpc3RlbmVycyA9ICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gfHwgW10pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBldmVudExpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobC51c2VDYXB0dXJlID09PSB1c2VDYXB0dXJlICYmIGwubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKHsgbGlzdGVuZXI6IGxpc3RlbmVyLCB1c2VDYXB0dXJlOiB1c2VDYXB0dXJlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSwgZGV0YWlscykge1xuICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5kaXNwYXRjaEV2ZW50XCI+XG4gICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5kaXNwYXRjaEV2ZW50XCI+XG4gICAgICAgICAgICAvLy8gUmFpc2VzIGFuIGV2ZW50IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhbmQgd2l0aCB0aGUgc3BlY2lmaWVkIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0eXBlXCIgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5kaXNwYXRjaEV2ZW50X3A6dHlwZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSB0eXBlIChuYW1lKSBvZiB0aGUgZXZlbnQuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImRldGFpbHNcIiBsb2NpZD1cIldpbkpTLlV0aWxpdGllcy5ldmVudE1peGluLmRpc3BhdGNoRXZlbnRfcDpkZXRhaWxzXCI+XG4gICAgICAgICAgICAvLy8gVGhlIHNldCBvZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGV2ZW50IG9iamVjdCB3aGVuIHRoZSBldmVudCBpcyByYWlzZWQuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiQm9vbGVhblwiIGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4uZGlzcGF0Y2hFdmVudF9yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgLy8vIHRydWUgaWYgcHJldmVudERlZmF1bHQgd2FzIGNhbGxlZCBvbiB0aGUgZXZlbnQuXG4gICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyAmJiB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VmFsdWUgPSBuZXcgRXZlbnRNaXhpbkV2ZW50KHR5cGUsIGRldGFpbHMsIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gY29weSB0aGUgYXJyYXkgdG8gcHJvdGVjdCBhZ2FpbnN0IHBlb3BsZSB1bnJlZ2lzdGVyaW5nIHdoaWxlIHdlIGFyZSBkaXNwYXRjaGluZ1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwLCBsaXN0ZW5lcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbiAmJiAhZXZlbnRWYWx1ZS5fc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uQ2FsbGVkOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmxpc3RlbmVyKGV2ZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRWYWx1ZS5kZWZhdWx0UHJldmVudGVkIHx8IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lclwiPlxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuVXRpbGl0aWVzLmV2ZW50TWl4aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lclwiPlxuICAgICAgICAgICAgLy8vIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgY29udHJvbC5cbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0eXBlXCIgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5yZW1vdmVFdmVudExpc3RlbmVyX3A6dHlwZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSB0eXBlIChuYW1lKSBvZiB0aGUgZXZlbnQuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImxpc3RlbmVyXCIgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5yZW1vdmVFdmVudExpc3RlbmVyX3A6bGlzdGVuZXJcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgbGlzdGVuZXIgdG8gcmVtb3ZlLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ1c2VDYXB0dXJlXCIgbG9jaWQ9XCJXaW5KUy5VdGlsaXRpZXMuZXZlbnRNaXhpbi5yZW1vdmVFdmVudExpc3RlbmVyX3A6dXNlQ2FwdHVyZVwiPlxuICAgICAgICAgICAgLy8vIFNwZWNpZmllcyB3aGV0aGVyIHRvIGluaXRpYXRlIGNhcHR1cmUuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyAmJiB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwubGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIGwudXNlQ2FwdHVyZSA9PT0gdXNlQ2FwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgd2FudCB0byByZW1vdmUgb25lIGVsZW1lbnQgZm9yIGVhY2ggY2FsbCB0byByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfQmFzZS5OYW1lc3BhY2UuX21vZHVsZURlZmluZShleHBvcnRzLCBcIldpbkpTLlV0aWxpdGllc1wiLCB7XG4gICAgICAgIF9jcmVhdGVFdmVudFByb3BlcnR5OiBjcmVhdGVFdmVudFByb3BlcnR5LFxuICAgICAgICBjcmVhdGVFdmVudFByb3BlcnRpZXM6IGNyZWF0ZUV2ZW50UHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRNaXhpbjogZXZlbnRNaXhpblxuICAgIH0pO1xuXG59KTtcblxuXG5fd2luanMoXCJXaW5KUy9Db3JlL19UcmFjZVwiLCBbXCJXaW5KUy9Db3JlL19HbG9iYWxcIl0sIGZ1bmN0aW9uIHRyYWNlSW5pdChfR2xvYmFsKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBub3Aodikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBfdHJhY2VBc3luY09wZXJhdGlvblN0YXJ0aW5nOiAoX0dsb2JhbC5EZWJ1ZyAmJiBfR2xvYmFsLkRlYnVnLm1zVHJhY2VBc3luY09wZXJhdGlvblN0YXJ0aW5nICYmIF9HbG9iYWwuRGVidWcubXNUcmFjZUFzeW5jT3BlcmF0aW9uU3RhcnRpbmcuYmluZChfR2xvYmFsLkRlYnVnKSkgfHwgbm9wLFxuICAgICAgICBfdHJhY2VBc3luY09wZXJhdGlvbkNvbXBsZXRlZDogKF9HbG9iYWwuRGVidWcgJiYgX0dsb2JhbC5EZWJ1Zy5tc1RyYWNlQXN5bmNPcGVyYXRpb25Db21wbGV0ZWQgJiYgX0dsb2JhbC5EZWJ1Zy5tc1RyYWNlQXN5bmNPcGVyYXRpb25Db21wbGV0ZWQuYmluZChfR2xvYmFsLkRlYnVnKSkgfHwgbm9wLFxuICAgICAgICBfdHJhY2VBc3luY0NhbGxiYWNrU3RhcnRpbmc6IChfR2xvYmFsLkRlYnVnICYmIF9HbG9iYWwuRGVidWcubXNUcmFjZUFzeW5jQ2FsbGJhY2tTdGFydGluZyAmJiBfR2xvYmFsLkRlYnVnLm1zVHJhY2VBc3luY0NhbGxiYWNrU3RhcnRpbmcuYmluZChfR2xvYmFsLkRlYnVnKSkgfHwgbm9wLFxuICAgICAgICBfdHJhY2VBc3luY0NhbGxiYWNrQ29tcGxldGVkOiAoX0dsb2JhbC5EZWJ1ZyAmJiBfR2xvYmFsLkRlYnVnLm1zVHJhY2VBc3luY0NhbGxiYWNrQ29tcGxldGVkICYmIF9HbG9iYWwuRGVidWcubXNUcmFjZUFzeW5jQ2FsbGJhY2tDb21wbGV0ZWQuYmluZChfR2xvYmFsLkRlYnVnKSkgfHwgbm9wXG4gICAgfTtcbn0pO1xuX3dpbmpzKFwiV2luSlMvUHJvbWlzZS9fU3RhdGVNYWNoaW5lXCIsIFtcIldpbkpTL0NvcmUvX0dsb2JhbFwiLFwiV2luSlMvQ29yZS9fQmFzZUNvcmVVdGlsc1wiLFwiV2luSlMvQ29yZS9fQmFzZVwiLFwiV2luSlMvQ29yZS9fRXJyb3JGcm9tTmFtZVwiLFwiV2luSlMvQ29yZS9fRXZlbnRzXCIsXCJXaW5KUy9Db3JlL19UcmFjZVwiXSwgZnVuY3Rpb24gcHJvbWlzZVN0YXRlTWFjaGluZUluaXQoX0dsb2JhbCwgX0Jhc2VDb3JlVXRpbHMsIF9CYXNlLCBfRXJyb3JGcm9tTmFtZSwgX0V2ZW50cywgX1RyYWNlKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBfR2xvYmFsLkRlYnVnICYmIChfR2xvYmFsLkRlYnVnLnNldE5vblVzZXJDb2RlRXhjZXB0aW9ucyA9IHRydWUpO1xuXG4gICAgdmFyIExpc3RlbmVyVHlwZSA9IF9CYXNlLkNsYXNzLm1peChfQmFzZS5DbGFzcy5kZWZpbmUobnVsbCwgeyAvKmVtcHR5Ki8gfSwgeyBzdXBwb3J0ZWRGb3JQcm9jZXNzaW5nOiBmYWxzZSB9KSwgX0V2ZW50cy5ldmVudE1peGluKTtcbiAgICB2YXIgcHJvbWlzZUV2ZW50TGlzdGVuZXJzID0gbmV3IExpc3RlbmVyVHlwZSgpO1xuICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBpcyBhIGxpc3RlbmVycyBjb2xsZWN0aW9uIHNvIHRoYXQgd2UgY2FuIGRvIGEgbW9yZSB0cml2aWFsIGNoZWNrIGJlbG93XG4gICAgcHJvbWlzZUV2ZW50TGlzdGVuZXJzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICB2YXIgZXJyb3JFVCA9IFwiZXJyb3JcIjtcbiAgICB2YXIgY2FuY2VsZWROYW1lID0gXCJDYW5jZWxlZFwiO1xuICAgIHZhciB0YWdXaXRoU3RhY2sgPSBmYWxzZTtcbiAgICB2YXIgdGFnID0ge1xuICAgICAgICBwcm9taXNlOiAweDAxLFxuICAgICAgICB0aGVuUHJvbWlzZTogMHgwMixcbiAgICAgICAgZXJyb3JQcm9taXNlOiAweDA0LFxuICAgICAgICBleGNlcHRpb25Qcm9taXNlOiAweDA4LFxuICAgICAgICBjb21wbGV0ZVByb21pc2U6IDB4MTAsXG4gICAgfTtcbiAgICB0YWcuYWxsID0gdGFnLnByb21pc2UgfCB0YWcudGhlblByb21pc2UgfCB0YWcuZXJyb3JQcm9taXNlIHwgdGFnLmV4Y2VwdGlvblByb21pc2UgfCB0YWcuY29tcGxldGVQcm9taXNlO1xuXG4gICAgLy9cbiAgICAvLyBHbG9iYWwgZXJyb3IgY291bnRlciwgZm9yIGVhY2ggZXJyb3Igd2hpY2ggZW50ZXJzIHRoZSBzeXN0ZW0gd2UgaW5jcmVtZW50IHRoaXMgb25jZSBhbmQgdGhlblxuICAgIC8vIHRoZSBlcnJvciBudW1iZXIgdHJhdmVscyB3aXRoIHRoZSBlcnJvciBhcyBpdCB0cmF2ZXJzZXMgdGhlIHRyZWUgb2YgcG90ZW50aWFsIGhhbmRsZXJzLlxuICAgIC8vXG4gICAgLy8gV2hlbiBzb21lb25lIGhhcyByZWdpc3RlcmVkIHRvIGJlIHRvbGQgYWJvdXQgZXJyb3JzIChXaW5KUy5Qcm9taXNlLmNhbGxvbmVycm9yKSBwcm9taXNlc1xuICAgIC8vIHdoaWNoIGFyZSBpbiBlcnJvciB3aWxsIGdldCB0YWdnZWQgd2l0aCBhIC5fZXJyb3JJZCBmaWVsZC4gVGhpcyB0YWdnZWQgZmllbGQgaXMgdGhlXG4gICAgLy8gY29udHJhY3QgYnkgd2hpY2ggbmVzdGVkIHByb21pc2VzIHdpdGggZXJyb3JzIHdpbGwgYmUgaWRlbnRpZmllZCBhcyBjaGFpbmluZyBmb3IgdGhlXG4gICAgLy8gcHVycG9zZXMgb2YgdGhlIGNhbGxvbmVycm9yIHNlbWFudGljcy4gSWYgYSBuZXN0ZWQgcHJvbWlzZSBpbiBlcnJvciBpcyBlbmNvdW50ZXJlZCB3aXRob3V0XG4gICAgLy8gYSAuX2Vycm9ySWQgaXQgd2lsbCBiZSBhc3N1bWVkIHRvIGJlIGZvcmVpZ24gYW5kIHRyZWF0ZWQgYXMgYW4gaW50ZXJvcCBib3VuZGFyeSBhbmRcbiAgICAvLyBhIG5ldyBlcnJvciBpZCB3aWxsIGJlIG1pbnRlZC5cbiAgICAvL1xuICAgIHZhciBlcnJvcl9udW1iZXIgPSAxO1xuXG4gICAgLy9cbiAgICAvLyBUaGUgc3RhdGUgbWFjaGluZSBoYXMgYSBpbnRlcmVzdGluZyBoaWNjdXAgaW4gaXQgd2l0aCByZWdhcmRzIHRvIG5vdGlmaWNhdGlvbiwgaW4gb3JkZXJcbiAgICAvLyB0byBmbGF0dGVuIG91dCBub3RpZmljYXRpb24gYW5kIGF2b2lkIHJlY3Vyc2lvbiBmb3Igc3luY2hyb25vdXMgY29tcGxldGlvbiB3ZSBoYXZlIGFuXG4gICAgLy8gZXhwbGljaXQgc2V0IG9mICpfbm90aWZ5IHN0YXRlcyB3aGljaCBhcmUgcmVzcG9uc2libGUgZm9yIG5vdGlmeWluZyB0aGVpciBlbnRpcmUgdHJlZVxuICAgIC8vIG9mIGNoaWxkcmVuLiBUaGV5IGNhbiBkbyB0aGlzIGJlY2F1c2UgdGhleSBrbm93IHRoYXQgaW1tZWRpYXRlIGNoaWxkcmVuIGFyZSBhbHdheXNcbiAgICAvLyBUaGVuUHJvbWlzZSBpbnN0YW5jZXMgYW5kIHdlIGNhbiB0aGVyZWZvcmUgcmVhY2ggaW50byB0aGVpciBzdGF0ZSB0byBhY2Nlc3MgdGhlXG4gICAgLy8gX2xpc3RlbmVycyBjb2xsZWN0aW9uLlxuICAgIC8vXG4gICAgLy8gU28sIHdoYXQgaGFwcGVucyBpcyB0aGF0IGEgUHJvbWlzZSB3aWxsIGJlIGZ1bGZpbGxlZCB0aHJvdWdoIHRoZSBfY29tcGxldGVkIG9yIF9lcnJvclxuICAgIC8vIG1lc3NhZ2VzIGF0IHdoaWNoIHBvaW50IGl0IHdpbGwgZW50ZXIgYSAqX25vdGlmeSBzdGF0ZSBhbmQgYmUgcmVzcG9uc2libGUgZm9yIHRvIG1vdmVcbiAgICAvLyBpdHMgY2hpbGRyZW4gaW50byBhbiAoYXMgYXBwcm9wcmlhdGUpIHN1Y2Nlc3Mgb3IgZXJyb3Igc3RhdGUgYW5kIGFsc28gbm90aWZ5IHRoYXQgY2hpbGQnc1xuICAgIC8vIGxpc3RlbmVycyBvZiB0aGUgc3RhdGUgdHJhbnNpdGlvbiwgdW50aWwgbGVhZiBub3RlcyBhcmUgcmVhY2hlZC5cbiAgICAvL1xuXG4gICAgdmFyIHN0YXRlX2NyZWF0ZWQsICAgICAgICAgICAgICAvLyAtPiB3b3JraW5nXG4gICAgICAgIHN0YXRlX3dvcmtpbmcsICAgICAgICAgICAgICAvLyAtPiBlcnJvciB8IGVycm9yX25vdGlmeSB8IHN1Y2Nlc3MgfCBzdWNjZXNzX25vdGlmeSB8IGNhbmNlbGVkIHwgd2FpdGluZ1xuICAgICAgICBzdGF0ZV93YWl0aW5nLCAgICAgICAgICAgICAgLy8gLT4gZXJyb3IgfCBlcnJvcl9ub3RpZnkgfCBzdWNjZXNzIHwgc3VjY2Vzc19ub3RpZnkgfCB3YWl0aW5nX2NhbmNlbGVkXG4gICAgICAgIHN0YXRlX3dhaXRpbmdfY2FuY2VsZWQsICAgICAvLyAtPiBlcnJvciB8IGVycm9yX25vdGlmeSB8IHN1Y2Nlc3MgfCBzdWNjZXNzX25vdGlmeSB8IGNhbmNlbGluZ1xuICAgICAgICBzdGF0ZV9jYW5jZWxlZCwgICAgICAgICAgICAgLy8gLT4gZXJyb3IgfCBlcnJvcl9ub3RpZnkgfCBzdWNjZXNzIHwgc3VjY2Vzc19ub3RpZnkgfCBjYW5jZWxpbmdcbiAgICAgICAgc3RhdGVfY2FuY2VsaW5nLCAgICAgICAgICAgIC8vIC0+IGVycm9yX25vdGlmeVxuICAgICAgICBzdGF0ZV9zdWNjZXNzX25vdGlmeSwgICAgICAgLy8gLT4gc3VjY2Vzc1xuICAgICAgICBzdGF0ZV9zdWNjZXNzLCAgICAgICAgICAgICAgLy8gLT4gLlxuICAgICAgICBzdGF0ZV9lcnJvcl9ub3RpZnksICAgICAgICAgLy8gLT4gZXJyb3JcbiAgICAgICAgc3RhdGVfZXJyb3I7ICAgICAgICAgICAgICAgIC8vIC0+IC5cblxuICAgIC8vIE5vb3AgZnVuY3Rpb24sIHVzZWQgaW4gdGhlIHZhcmlvdXMgc3RhdGVzIHRvIGluZGljYXRlIHRoYXQgdGhleSBkb24ndCBzdXBwb3J0IGEgZ2l2ZW5cbiAgICAvLyBtZXNzYWdlLiBOYW1lZCB3aXRoIHRoZSBzb21ld2hhdCBjdXRlIG5hbWUgJ18nIGJlY2F1c2UgaXQgcmVhZHMgcmVhbGx5IHdlbGwgaW4gdGhlIHN0YXRlcy5cblxuICAgIGZ1bmN0aW9uIF8oKSB7IH1cblxuICAgIC8vIEluaXRpYWwgc3RhdGVcbiAgICAvL1xuICAgIHN0YXRlX2NyZWF0ZWQgPSB7XG4gICAgICAgIG5hbWU6IFwiY3JlYXRlZFwiLFxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UuX3NldFN0YXRlKHN0YXRlX3dvcmtpbmcpO1xuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IF8sXG4gICAgICAgIGRvbmU6IF8sXG4gICAgICAgIHRoZW46IF8sXG4gICAgICAgIF9jb21wbGV0ZWQ6IF8sXG4gICAgICAgIF9lcnJvcjogXyxcbiAgICAgICAgX25vdGlmeTogXyxcbiAgICAgICAgX3Byb2dyZXNzOiBfLFxuICAgICAgICBfc2V0Q29tcGxldGVWYWx1ZTogXyxcbiAgICAgICAgX3NldEVycm9yVmFsdWU6IF9cbiAgICB9O1xuXG4gICAgLy8gUmVhZHkgc3RhdGUsIHdhaXRpbmcgZm9yIGEgbWVzc2FnZSAoY29tcGxldGVkL2Vycm9yL3Byb2dyZXNzKSwgYWJsZSB0byBiZSBjYW5jZWxlZFxuICAgIC8vXG4gICAgc3RhdGVfd29ya2luZyA9IHtcbiAgICAgICAgbmFtZTogXCJ3b3JraW5nXCIsXG4gICAgICAgIGVudGVyOiBfLFxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9zZXRTdGF0ZShzdGF0ZV9jYW5jZWxlZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvbmU6IGRvbmUsXG4gICAgICAgIHRoZW46IHRoZW4sXG4gICAgICAgIF9jb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgICAgX2Vycm9yOiBlcnJvcixcbiAgICAgICAgX25vdGlmeTogXyxcbiAgICAgICAgX3Byb2dyZXNzOiBwcm9ncmVzcyxcbiAgICAgICAgX3NldENvbXBsZXRlVmFsdWU6IHNldENvbXBsZXRlVmFsdWUsXG4gICAgICAgIF9zZXRFcnJvclZhbHVlOiBzZXRFcnJvclZhbHVlXG4gICAgfTtcblxuICAgIC8vIFdhaXRpbmcgc3RhdGUsIGlmIGEgcHJvbWlzZSBpcyBjb21wbGV0ZWQgd2l0aCBhIHZhbHVlIHdoaWNoIGlzIGl0c2VsZiBhIHByb21pc2VcbiAgICAvLyAoaGFzIGEgdGhlbigpIG1ldGhvZCkgaXQgc2lnbnMgdXAgdG8gYmUgaW5mb3JtZWQgd2hlbiB0aGF0IGNoaWxkIHByb21pc2UgaXNcbiAgICAvLyBmdWxmaWxsZWQgYXQgd2hpY2ggcG9pbnQgaXQgd2lsbCBiZSBmdWxmaWxsZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgIC8vXG4gICAgc3RhdGVfd2FpdGluZyA9IHtcbiAgICAgICAgbmFtZTogXCJ3YWl0aW5nXCIsXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgdmFyIHdhaXRlZFVwb24gPSBwcm9taXNlLl92YWx1ZTtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBzcGVjaWFsIGNhc2Ugb3VyIG93biBpbnRlcm1lZGlhdGUgcHJvbWlzZXMgd2hpY2ggYXJlIG5vdCBpbiBhXG4gICAgICAgICAgICAvLyAgdGVybWluYWwgc3RhdGUgYnkganVzdCBwdXNoaW5nIHRoaXMgcHJvbWlzZSBhcyBhIGxpc3RlbmVyIHdpdGhvdXRcbiAgICAgICAgICAgIC8vICBoYXZpbmcgdG8gY3JlYXRlIG5ldyBpbmRpcmVjdGlvbiBmdW5jdGlvbnNcbiAgICAgICAgICAgIGlmICh3YWl0ZWRVcG9uIGluc3RhbmNlb2YgVGhlblByb21pc2UgJiZcbiAgICAgICAgICAgICAgICB3YWl0ZWRVcG9uLl9zdGF0ZSAhPT0gc3RhdGVfZXJyb3IgJiZcbiAgICAgICAgICAgICAgICB3YWl0ZWRVcG9uLl9zdGF0ZSAhPT0gc3RhdGVfc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHB1c2hMaXN0ZW5lcih3YWl0ZWRVcG9uLCB7IHByb21pc2U6IHByb21pc2UgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2FpdGVkVXBvbi5fZXJyb3JJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fY2hhaW5lZEVycm9yKHZhbHVlLCB3YWl0ZWRVcG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhpcyBpcyBhbiBpbnRlcm9wIGJvdW5kYXJ5IHdlIHdhbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgZXJyb3IgaGFzIGJlZW4gaGFuZGxlZCBieSB0aGUgcHJvbWlzZSBpbmZyYXN0cnVjdHVyZSBiZWZvcmUgd2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBiZWdpbiBhIG5ldyBoYW5kbGluZyBjaGFpbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsb25lcnJvcihwcm9taXNlLCB2YWx1ZSwgZGV0YWlsc0ZvckhhbmRsZWRFcnJvciwgd2FpdGVkVXBvbiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fZXJyb3IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlcnJvci5oYW5kbGVzT25FcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2FpdGVkVXBvbi50aGVuKFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLl9jb21wbGV0ZWQuYmluZChwcm9taXNlKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzLmJpbmQocHJvbWlzZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9zZXRTdGF0ZShzdGF0ZV93YWl0aW5nX2NhbmNlbGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgdGhlbjogdGhlbixcbiAgICAgICAgX2NvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBfZXJyb3I6IGVycm9yLFxuICAgICAgICBfbm90aWZ5OiBfLFxuICAgICAgICBfcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICBfc2V0Q29tcGxldGVWYWx1ZTogc2V0Q29tcGxldGVWYWx1ZSxcbiAgICAgICAgX3NldEVycm9yVmFsdWU6IHNldEVycm9yVmFsdWVcbiAgICB9O1xuXG4gICAgLy8gV2FpdGluZyBjYW5jZWxlZCBzdGF0ZSwgd2hlbiBhIHByb21pc2UgaGFzIGJlZW4gaW4gYSB3YWl0aW5nIHN0YXRlIGFuZCByZWNlaXZlcyBhXG4gICAgLy8gcmVxdWVzdCB0byBjYW5jZWwgaXRzIHBlbmRpbmcgd29yayBpdCB3aWxsIGZvcndhcmQgdGhhdCByZXF1ZXN0IHRvIHRoZSBjaGlsZCBwcm9taXNlXG4gICAgLy8gYW5kIHRoZW4gd2FpdHMgdG8gYmUgaW5mb3JtZWQgb2YgdGhlIHJlc3VsdC4gVGhpcyBwcm9taXNlIG1vdmVzIGl0c2VsZiBpbnRvIHRoZVxuICAgIC8vIGNhbmNlbGluZyBzdGF0ZSBidXQgdW5kZXJzdGFuZHMgdGhhdCB0aGUgY2hpbGQgcHJvbWlzZSBtYXkgaW5zdGVhZCBwdXNoIGl0IHRvIGFcbiAgICAvLyBkaWZmZXJlbnQgc3RhdGUuXG4gICAgLy9cbiAgICBzdGF0ZV93YWl0aW5nX2NhbmNlbGVkID0ge1xuICAgICAgICBuYW1lOiBcIndhaXRpbmdfY2FuY2VsZWRcIixcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBJbml0aWF0ZSBhIHRyYW5zaXRpb24gdG8gY2FuY2VsaW5nLiBUcmlnZ2VyaW5nIGEgY2FuY2VsIG9uIHRoZSBwcm9taXNlXG4gICAgICAgICAgICAvLyB0aGF0IHdlIGFyZSB3YWl0aW5nIHVwb24gbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCBzdGF0ZSB0cmFuc2l0aW9uXG4gICAgICAgICAgICAvLyBiZWZvcmUgdGhlIHN0YXRlIG1hY2hpbmUgcHVtcCBydW5zIGFnYWluLlxuICAgICAgICAgICAgcHJvbWlzZS5fc2V0U3RhdGUoc3RhdGVfY2FuY2VsaW5nKTtcbiAgICAgICAgICAgIHZhciB3YWl0ZWRVcG9uID0gcHJvbWlzZS5fdmFsdWU7XG4gICAgICAgICAgICBpZiAod2FpdGVkVXBvbi5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICB3YWl0ZWRVcG9uLmNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWw6IF8sXG4gICAgICAgIGRvbmU6IGRvbmUsXG4gICAgICAgIHRoZW46IHRoZW4sXG4gICAgICAgIF9jb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgICAgX2Vycm9yOiBlcnJvcixcbiAgICAgICAgX25vdGlmeTogXyxcbiAgICAgICAgX3Byb2dyZXNzOiBwcm9ncmVzcyxcbiAgICAgICAgX3NldENvbXBsZXRlVmFsdWU6IHNldENvbXBsZXRlVmFsdWUsXG4gICAgICAgIF9zZXRFcnJvclZhbHVlOiBzZXRFcnJvclZhbHVlXG4gICAgfTtcblxuICAgIC8vIENhbmNlbGVkIHN0YXRlLCBtb3ZlcyB0byB0aGUgY2FuY2VsaW5nIHN0YXRlIGFuZCB0aGVuIHRlbGxzIHRoZSBwcm9taXNlIHRvIGRvXG4gICAgLy8gd2hhdGV2ZXIgaXQgbWlnaHQgbmVlZCB0byBkbyBvbiBjYW5jZWxhdGlvbi5cbiAgICAvL1xuICAgIHN0YXRlX2NhbmNlbGVkID0ge1xuICAgICAgICBuYW1lOiBcImNhbmNlbGVkXCIsXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgLy8gSW5pdGlhdGUgYSB0cmFuc2l0aW9uIHRvIGNhbmNlbGluZy4gVGhlIF9jYW5jZWxBY3Rpb24gbWF5IGNoYW5nZSB0aGUgc3RhdGVcbiAgICAgICAgICAgIC8vIGJlZm9yZSB0aGUgc3RhdGUgbWFjaGluZSBwdW1wIHJ1bnMgYWdhaW4uXG4gICAgICAgICAgICBwcm9taXNlLl9zZXRTdGF0ZShzdGF0ZV9jYW5jZWxpbmcpO1xuICAgICAgICAgICAgcHJvbWlzZS5fY2FuY2VsQWN0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogXyxcbiAgICAgICAgZG9uZTogZG9uZSxcbiAgICAgICAgdGhlbjogdGhlbixcbiAgICAgICAgX2NvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgICBfZXJyb3I6IGVycm9yLFxuICAgICAgICBfbm90aWZ5OiBfLFxuICAgICAgICBfcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICBfc2V0Q29tcGxldGVWYWx1ZTogc2V0Q29tcGxldGVWYWx1ZSxcbiAgICAgICAgX3NldEVycm9yVmFsdWU6IHNldEVycm9yVmFsdWVcbiAgICB9O1xuXG4gICAgLy8gQ2FuY2VsaW5nIHN0YXRlLCBjb21taXRzIHRvIHRoZSBwcm9taXNlIG1vdmluZyB0byBhbiBlcnJvciBzdGF0ZSB3aXRoIGFuIGVycm9yXG4gICAgLy8gb2JqZWN0IHdob3NlICduYW1lJyBhbmQgJ21lc3NhZ2UnIHByb3BlcnRpZXMgY29udGFpbiB0aGUgc3RyaW5nIFwiQ2FuY2VsZWRcIlxuICAgIC8vXG4gICAgc3RhdGVfY2FuY2VsaW5nID0ge1xuICAgICAgICBuYW1lOiBcImNhbmNlbGluZ1wiLFxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihjYW5jZWxlZE5hbWUpO1xuICAgICAgICAgICAgZXJyb3IubmFtZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICBwcm9taXNlLl92YWx1ZSA9IGVycm9yO1xuICAgICAgICAgICAgcHJvbWlzZS5fc2V0U3RhdGUoc3RhdGVfZXJyb3Jfbm90aWZ5KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiBfLFxuICAgICAgICBkb25lOiBfLFxuICAgICAgICB0aGVuOiBfLFxuICAgICAgICBfY29tcGxldGVkOiBfLFxuICAgICAgICBfZXJyb3I6IF8sXG4gICAgICAgIF9ub3RpZnk6IF8sXG4gICAgICAgIF9wcm9ncmVzczogXyxcbiAgICAgICAgX3NldENvbXBsZXRlVmFsdWU6IF8sXG4gICAgICAgIF9zZXRFcnJvclZhbHVlOiBfXG4gICAgfTtcblxuICAgIC8vIFN1Y2Nlc3Mgbm90aWZ5IHN0YXRlLCBtb3ZlcyBhIHByb21pc2UgdG8gdGhlIHN1Y2Nlc3Mgc3RhdGUgYW5kIG5vdGlmaWVzIGFsbCBjaGlsZHJlblxuICAgIC8vXG4gICAgc3RhdGVfc3VjY2Vzc19ub3RpZnkgPSB7XG4gICAgICAgIG5hbWU6IFwiY29tcGxldGVfbm90aWZ5XCIsXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5kb25lID0gQ29tcGxldGVQcm9taXNlLnByb3RvdHlwZS5kb25lO1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuID0gQ29tcGxldGVQcm9taXNlLnByb3RvdHlwZS50aGVuO1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IFtwcm9taXNlXTtcbiAgICAgICAgICAgICAgICB2YXIgcDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBwLl9zdGF0ZS5fbm90aWZ5KHAsIHF1ZXVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlLl9zZXRTdGF0ZShzdGF0ZV9zdWNjZXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiBfLFxuICAgICAgICBkb25lOiBudWxsLCAvKmVycm9yIHRvIGdldCBoZXJlICovXG4gICAgICAgIHRoZW46IG51bGwsIC8qZXJyb3IgdG8gZ2V0IGhlcmUgKi9cbiAgICAgICAgX2NvbXBsZXRlZDogXyxcbiAgICAgICAgX2Vycm9yOiBfLFxuICAgICAgICBfbm90aWZ5OiBub3RpZnlTdWNjZXNzLFxuICAgICAgICBfcHJvZ3Jlc3M6IF8sXG4gICAgICAgIF9zZXRDb21wbGV0ZVZhbHVlOiBfLFxuICAgICAgICBfc2V0RXJyb3JWYWx1ZTogX1xuICAgIH07XG5cbiAgICAvLyBTdWNjZXNzIHN0YXRlLCBtb3ZlcyBhIHByb21pc2UgdG8gdGhlIHN1Y2Nlc3Mgc3RhdGUgYW5kIGRvZXMgTk9UIG5vdGlmeSBhbnkgY2hpbGRyZW4uXG4gICAgLy8gU29tZSB1cHN0cmVhbSBwcm9taXNlIGlzIG93bmluZyB0aGUgbm90aWZpY2F0aW9uIHBhc3MuXG4gICAgLy9cbiAgICBzdGF0ZV9zdWNjZXNzID0ge1xuICAgICAgICBuYW1lOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLmRvbmUgPSBDb21wbGV0ZVByb21pc2UucHJvdG90eXBlLmRvbmU7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4gPSBDb21wbGV0ZVByb21pc2UucHJvdG90eXBlLnRoZW47XG4gICAgICAgICAgICBwcm9taXNlLl9jbGVhbnVwQWN0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogXyxcbiAgICAgICAgZG9uZTogbnVsbCwgLyplcnJvciB0byBnZXQgaGVyZSAqL1xuICAgICAgICB0aGVuOiBudWxsLCAvKmVycm9yIHRvIGdldCBoZXJlICovXG4gICAgICAgIF9jb21wbGV0ZWQ6IF8sXG4gICAgICAgIF9lcnJvcjogXyxcbiAgICAgICAgX25vdGlmeTogbm90aWZ5U3VjY2VzcyxcbiAgICAgICAgX3Byb2dyZXNzOiBfLFxuICAgICAgICBfc2V0Q29tcGxldGVWYWx1ZTogXyxcbiAgICAgICAgX3NldEVycm9yVmFsdWU6IF9cbiAgICB9O1xuXG4gICAgLy8gRXJyb3Igbm90aWZ5IHN0YXRlLCBtb3ZlcyBhIHByb21pc2UgdG8gdGhlIGVycm9yIHN0YXRlIGFuZCBub3RpZmllcyBhbGwgY2hpbGRyZW5cbiAgICAvL1xuICAgIHN0YXRlX2Vycm9yX25vdGlmeSA9IHtcbiAgICAgICAgbmFtZTogXCJlcnJvcl9ub3RpZnlcIixcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLmRvbmUgPSBFcnJvclByb21pc2UucHJvdG90eXBlLmRvbmU7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4gPSBFcnJvclByb21pc2UucHJvdG90eXBlLnRoZW47XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gW3Byb21pc2VdO1xuICAgICAgICAgICAgICAgIHZhciBwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHAuX3N0YXRlLl9ub3RpZnkocCwgcXVldWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2UuX3NldFN0YXRlKHN0YXRlX2Vycm9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiBfLFxuICAgICAgICBkb25lOiBudWxsLCAvKmVycm9yIHRvIGdldCBoZXJlKi9cbiAgICAgICAgdGhlbjogbnVsbCwgLyplcnJvciB0byBnZXQgaGVyZSovXG4gICAgICAgIF9jb21wbGV0ZWQ6IF8sXG4gICAgICAgIF9lcnJvcjogXyxcbiAgICAgICAgX25vdGlmeTogbm90aWZ5RXJyb3IsXG4gICAgICAgIF9wcm9ncmVzczogXyxcbiAgICAgICAgX3NldENvbXBsZXRlVmFsdWU6IF8sXG4gICAgICAgIF9zZXRFcnJvclZhbHVlOiBfXG4gICAgfTtcblxuICAgIC8vIEVycm9yIHN0YXRlLCBtb3ZlcyBhIHByb21pc2UgdG8gdGhlIGVycm9yIHN0YXRlIGFuZCBkb2VzIE5PVCBub3RpZnkgYW55IGNoaWxkcmVuLlxuICAgIC8vIFNvbWUgdXBzdHJlYW0gcHJvbWlzZSBpcyBvd25pbmcgdGhlIG5vdGlmaWNhdGlvbiBwYXNzLlxuICAgIC8vXG4gICAgc3RhdGVfZXJyb3IgPSB7XG4gICAgICAgIG5hbWU6IFwiZXJyb3JcIixcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLmRvbmUgPSBFcnJvclByb21pc2UucHJvdG90eXBlLmRvbmU7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4gPSBFcnJvclByb21pc2UucHJvdG90eXBlLnRoZW47XG4gICAgICAgICAgICBwcm9taXNlLl9jbGVhbnVwQWN0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogXyxcbiAgICAgICAgZG9uZTogbnVsbCwgLyplcnJvciB0byBnZXQgaGVyZSovXG4gICAgICAgIHRoZW46IG51bGwsIC8qZXJyb3IgdG8gZ2V0IGhlcmUqL1xuICAgICAgICBfY29tcGxldGVkOiBfLFxuICAgICAgICBfZXJyb3I6IF8sXG4gICAgICAgIF9ub3RpZnk6IG5vdGlmeUVycm9yLFxuICAgICAgICBfcHJvZ3Jlc3M6IF8sXG4gICAgICAgIF9zZXRDb21wbGV0ZVZhbHVlOiBfLFxuICAgICAgICBfc2V0RXJyb3JWYWx1ZTogX1xuICAgIH07XG5cbiAgICAvL1xuICAgIC8vIFRoZSBzdGF0ZW1hY2hpbmUgaW1wbGVtZW50YXRpb24gZm9sbG93cyBhIHZlcnkgcGFydGljdWxhciBwYXR0ZXJuLCB0aGUgc3RhdGVzIGFyZSBzcGVjaWZpZWRcbiAgICAvLyBhcyBzdGF0aWMgc3RhdGVsZXNzIGJhZ3Mgb2YgZnVuY3Rpb25zIHdoaWNoIGFyZSB0aGVuIGluZGlyZWN0ZWQgdGhyb3VnaCB0aGUgc3RhdGUgbWFjaGluZVxuICAgIC8vIGluc3RhbmNlIChhIFByb21pc2UpLiBBcyBzdWNoIGFsbCBvZiB0aGUgZnVuY3Rpb25zIG9uIGVhY2ggc3RhdGUgaGF2ZSB0aGUgcHJvbWlzZSBpbnN0YW5jZVxuICAgIC8vIHBhc3NlZCB0byB0aGVtIGV4cGxpY2l0bHkgYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBQcm9taXNlIGluc3RhbmNlIG1lbWJlcnMgZG8gYSBsaXR0bGVcbiAgICAvLyBkYW5jZSB3aGVyZSB0aGV5IGluZGlyZWN0IHRocm91Z2ggdGhlIHN0YXRlIGFuZCBpbnNlcnQgdGhlbXNlbHZlcyBpbiB0aGUgYXJndW1lbnQgbGlzdC5cbiAgICAvL1xuICAgIC8vIFdlIGNvdWxkIGluc3RlYWQgY2FsbCBkaXJlY3RseSB0aHJvdWdoIHRoZSBwcm9taXNlIHN0YXRlcyBob3dldmVyIHRoZW4gZXZlcnkgY2FsbGVyXG4gICAgLy8gd291bGQgaGF2ZSB0byByZW1lbWJlciB0byBkbyB0aGluZ3MgbGlrZSBwdW1waW5nIHRoZSBzdGF0ZSBtYWNoaW5lIHRvIGNhdGNoIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgIC8vXG5cbiAgICB2YXIgUHJvbWlzZVN0YXRlTWFjaGluZSA9IF9CYXNlLkNsYXNzLmRlZmluZShudWxsLCB7XG4gICAgICAgIF9saXN0ZW5lcnM6IG51bGwsXG4gICAgICAgIF9uZXh0U3RhdGU6IG51bGwsXG4gICAgICAgIF9zdGF0ZTogbnVsbCxcbiAgICAgICAgX3ZhbHVlOiBudWxsLFxuXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmNhbmNlbFwiPlxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5jYW5jZWxcIj5cbiAgICAgICAgICAgIC8vLyBBdHRlbXB0cyB0byBjYW5jZWwgdGhlIGZ1bGZpbGxtZW50IG9mIGEgcHJvbWlzZWQgdmFsdWUuIElmIHRoZSBwcm9taXNlIGhhc24ndFxuICAgICAgICAgICAgLy8vIGFscmVhZHkgYmVlbiBmdWxmaWxsZWQgYW5kIGNhbmNlbGxhdGlvbiBpcyBzdXBwb3J0ZWQsIHRoZSBwcm9taXNlIGVudGVyc1xuICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBzdGF0ZSB3aXRoIGEgdmFsdWUgb2YgRXJyb3IoXCJDYW5jZWxlZFwiKS5cbiAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZS5jYW5jZWwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9ydW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9uZTogZnVuY3Rpb24gUHJvbWlzZV9kb25lKG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5kb25lXCI+XG4gICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVcIj5cbiAgICAgICAgICAgIC8vLyBBbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHdvcmsgdG8gYmUgZG9uZSBvbiB0aGUgZnVsZmlsbG1lbnQgb2YgdGhlIHByb21pc2VkIHZhbHVlLFxuICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBoYW5kbGluZyB0byBiZSBwZXJmb3JtZWQgaWYgdGhlIHByb21pc2UgZmFpbHMgdG8gZnVsZmlsbFxuICAgICAgICAgICAgLy8vIGEgdmFsdWUsIGFuZCB0aGUgaGFuZGxpbmcgb2YgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBhbG9uZyB0aGUgd2F5LlxuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgICAvLy8gQWZ0ZXIgdGhlIGhhbmRsZXJzIGhhdmUgZmluaXNoZWQgZXhlY3V0aW5nLCB0aGlzIGZ1bmN0aW9uIHRocm93cyBhbnkgZXJyb3IgdGhhdCB3b3VsZCBoYXZlIGJlZW4gcmV0dXJuZWRcbiAgICAgICAgICAgIC8vLyBmcm9tIHRoZW4oKSBhcyBhIHByb21pc2UgaW4gdGhlIGVycm9yIHN0YXRlLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25Db21wbGV0ZScgdHlwZT0nRnVuY3Rpb24nIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5kb25lX3A6b25Db21wbGV0ZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHN1Y2Nlc3NmdWxseSB3aXRoIGEgdmFsdWUuXG4gICAgICAgICAgICAvLy8gVGhlIGZ1bGZpbGxlZCB2YWx1ZSBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsXG4gICAgICAgICAgICAvLy8gdGhlIGZ1bGZpbGxlZCB2YWx1ZSBpcyByZXR1cm5lZC4gVGhlIHZhbHVlIHJldHVybmVkXG4gICAgICAgICAgICAvLy8gZnJvbSB0aGUgZnVuY3Rpb24gYmVjb21lcyB0aGUgZnVsZmlsbGVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5XG4gICAgICAgICAgICAvLy8gdGhlbigpLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIHdoaWxlIGV4ZWN1dGluZyB0aGUgZnVuY3Rpb24sIHRoZSBwcm9taXNlIHJldHVybmVkXG4gICAgICAgICAgICAvLy8gYnkgdGhlbigpIG1vdmVzIGludG8gdGhlIGVycm9yIHN0YXRlLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uRXJyb3InIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVfcDpvbkVycm9yXCI+XG4gICAgICAgICAgICAvLy8gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWQgd2l0aCBhbiBlcnJvci4gVGhlIGVycm9yXG4gICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIElmIGl0IGlzIG51bGwsIHRoZSBlcnJvciBpcyBmb3J3YXJkZWQuXG4gICAgICAgICAgICAvLy8gVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIGlzIHRoZSBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlbigpLlxuICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uUHJvZ3Jlc3MnIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVfcDpvblByb2dyZXNzXCI+XG4gICAgICAgICAgICAvLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSByZXBvcnRzIHByb2dyZXNzLiBEYXRhIGFib3V0IHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgLy8vIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LiBQcm9taXNlcyBhcmUgbm90IHJlcXVpcmVkIHRvIHN1cHBvcnRcbiAgICAgICAgICAgIC8vLyBwcm9ncmVzcy5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUuZG9uZSh0aGlzLCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvblByb2dyZXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gUHJvbWlzZV90aGVuKG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuXCI+XG4gICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5cIj5cbiAgICAgICAgICAgIC8vLyBBbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHdvcmsgdG8gYmUgZG9uZSBvbiB0aGUgZnVsZmlsbG1lbnQgb2YgdGhlIHByb21pc2VkIHZhbHVlLFxuICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBoYW5kbGluZyB0byBiZSBwZXJmb3JtZWQgaWYgdGhlIHByb21pc2UgZmFpbHMgdG8gZnVsZmlsbFxuICAgICAgICAgICAgLy8vIGEgdmFsdWUsIGFuZCB0aGUgaGFuZGxpbmcgb2YgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBhbG9uZyB0aGUgd2F5LlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25Db21wbGV0ZScgdHlwZT0nRnVuY3Rpb24nIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuX3A6b25Db21wbGV0ZVwiPlxuICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHN1Y2Nlc3NmdWxseSB3aXRoIGEgdmFsdWUuXG4gICAgICAgICAgICAvLy8gVGhlIHZhbHVlIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICAgICAgICAgICAgLy8vIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiBiZWNvbWVzIHRoZSBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnlcbiAgICAgICAgICAgIC8vLyB0aGVuKCkuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gd2hpbGUgdGhpcyBmdW5jdGlvbiBpcyBiZWluZyBleGVjdXRlZCwgdGhlIHByb21pc2UgcmV0dXJuZWRcbiAgICAgICAgICAgIC8vLyBieSB0aGVuKCkgbW92ZXMgaW50byB0aGUgZXJyb3Igc3RhdGUuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25FcnJvcicgdHlwZT0nRnVuY3Rpb24nIG9wdGlvbmFsPSd0cnVlJyBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUudGhlbl9wOm9uRXJyb3JcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGVycm9yLiBUaGUgZXJyb3JcbiAgICAgICAgICAgIC8vLyBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgaXQgaXMgbnVsbCwgdGhlIGVycm9yIGlzIGZvcndhcmRlZC5cbiAgICAgICAgICAgIC8vLyBUaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24gYmVjb21lcyB0aGUgZnVsZmlsbGVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4oKS5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPSdvblByb2dyZXNzJyB0eXBlPSdGdW5jdGlvbicgb3B0aW9uYWw9J3RydWUnIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuX3A6b25Qcm9ncmVzc1wiPlxuICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgcmVwb3J0cyBwcm9ncmVzcy4gRGF0YSBhYm91dCB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIC8vLyBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gUHJvbWlzZXMgYXJlIG5vdCByZXF1aXJlZCB0byBzdXBwb3J0XG4gICAgICAgICAgICAvLy8gcHJvZ3Jlc3MuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiV2luSlMuUHJvbWlzZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuX3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAvLy8gVGhlIHByb21pc2Ugd2hvc2UgdmFsdWUgaXMgdGhlIHJlc3VsdCBvZiBleGVjdXRpbmcgdGhlIGNvbXBsZXRlIG9yXG4gICAgICAgICAgICAvLy8gZXJyb3IgZnVuY3Rpb24uXG4gICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgLy8gQkVHSU4gbW9uYWNvIGNoYW5nZVxuICAgICAgICAgICAgaWYgKHRoaXMudGhlbiAhPT0gUHJvbWlzZV90aGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVuKG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVORCBtb25hY28gY2hhbmdlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUudGhlbih0aGlzLCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvblByb2dyZXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfY2hhaW5lZEVycm9yOiBmdW5jdGlvbiAodmFsdWUsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zdGF0ZS5fZXJyb3IodGhpcywgdmFsdWUsIGRldGFpbHNGb3JDaGFpbmVkRXJyb3IsIGNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5fcnVuKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBfY29tcGxldGVkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zdGF0ZS5fY29tcGxldGVkKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3J1bigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgX2Vycm9yOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zdGF0ZS5fZXJyb3IodGhpcywgdmFsdWUsIGRldGFpbHNGb3JFcnJvcik7XG4gICAgICAgICAgICB0aGlzLl9ydW4oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIF9wcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZS5fcHJvZ3Jlc3ModGhpcywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBfc2V0U3RhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dFN0YXRlID0gc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIF9zZXRDb21wbGV0ZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlLl9zZXRDb21wbGV0ZVZhbHVlKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3J1bigpO1xuICAgICAgICB9LFxuICAgICAgICBfc2V0Q2hhaW5lZEVycm9yVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3N0YXRlLl9zZXRFcnJvclZhbHVlKHRoaXMsIHZhbHVlLCBkZXRhaWxzRm9yQ2hhaW5lZEVycm9yLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX3J1bigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgX3NldEV4Y2VwdGlvblZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zdGF0ZS5fc2V0RXJyb3JWYWx1ZSh0aGlzLCB2YWx1ZSwgZGV0YWlsc0ZvckV4Y2VwdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9ydW4oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIF9ydW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9uZXh0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX25leHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlLmVudGVyKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBzdXBwb3J0ZWRGb3JQcm9jZXNzaW5nOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgLy9cbiAgICAvLyBJbXBsZW1lbnRhdGlvbnMgb2Ygc2hhcmVkIHN0YXRlIG1hY2hpbmUgY29kZS5cbiAgICAvL1xuXG4gICAgZnVuY3Rpb24gY29tcGxldGVkKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXRTdGF0ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZSA9IHN0YXRlX3dhaXRpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZSA9IHN0YXRlX3N1Y2Nlc3Nfbm90aWZ5O1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHByb21pc2UuX3NldFN0YXRlKHRhcmdldFN0YXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRXJyb3JEZXRhaWxzKGV4Y2VwdGlvbiwgZXJyb3IsIHByb21pc2UsIGlkLCBwYXJlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4Y2VwdGlvbjogZXhjZXB0aW9uLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRhaWxzRm9ySGFuZGxlZEVycm9yKHByb21pc2UsIGVycm9yVmFsdWUsIGNvbnRleHQsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IGNvbnRleHQuX2lzRXhjZXB0aW9uO1xuICAgICAgICB2YXIgZXJyb3JJZCA9IGNvbnRleHQuX2Vycm9ySWQ7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcnJvckRldGFpbHMoXG4gICAgICAgICAgICBleGNlcHRpb24gPyBlcnJvclZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA/IG51bGwgOiBlcnJvclZhbHVlLFxuICAgICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICAgIGVycm9ySWQsXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgaGFuZGxlclxuICAgICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRhaWxzRm9yQ2hhaW5lZEVycm9yKHByb21pc2UsIGVycm9yVmFsdWUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IGNvbnRleHQuX2lzRXhjZXB0aW9uO1xuICAgICAgICB2YXIgZXJyb3JJZCA9IGNvbnRleHQuX2Vycm9ySWQ7XG4gICAgICAgIHNldEVycm9ySW5mbyhwcm9taXNlLCBlcnJvcklkLCBleGNlcHRpb24pO1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJyb3JEZXRhaWxzKFxuICAgICAgICAgICAgZXhjZXB0aW9uID8gZXJyb3JWYWx1ZSA6IG51bGwsXG4gICAgICAgICAgICBleGNlcHRpb24gPyBudWxsIDogZXJyb3JWYWx1ZSxcbiAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICBlcnJvcklkLFxuICAgICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRhaWxzRm9yRXJyb3IocHJvbWlzZSwgZXJyb3JWYWx1ZSkge1xuICAgICAgICB2YXIgZXJyb3JJZCA9ICsrZXJyb3JfbnVtYmVyO1xuICAgICAgICBzZXRFcnJvckluZm8ocHJvbWlzZSwgZXJyb3JJZCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcnJvckRldGFpbHMoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgZXJyb3JWYWx1ZSxcbiAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICBlcnJvcklkXG4gICAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGFpbHNGb3JFeGNlcHRpb24ocHJvbWlzZSwgZXhjZXB0aW9uVmFsdWUpIHtcbiAgICAgICAgdmFyIGVycm9ySWQgPSArK2Vycm9yX251bWJlcjtcbiAgICAgICAgc2V0RXJyb3JJbmZvKHByb21pc2UsIGVycm9ySWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJyb3JEZXRhaWxzKFxuICAgICAgICAgICAgZXhjZXB0aW9uVmFsdWUsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICAgIGVycm9ySWRcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZG9uZShwcm9taXNlLCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvblByb2dyZXNzKSB7XG4gICAgICAgIHZhciBhc3luY09wSUQgPSBfVHJhY2UuX3RyYWNlQXN5bmNPcGVyYXRpb25TdGFydGluZyhcIldpbkpTLlByb21pc2UuZG9uZVwiKTtcbiAgICAgICAgcHVzaExpc3RlbmVyKHByb21pc2UsIHsgYzogb25Db21wbGV0ZSwgZTogb25FcnJvciwgcDogb25Qcm9ncmVzcywgYXN5bmNPcElEOiBhc3luY09wSUQgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVycm9yKHByb21pc2UsIHZhbHVlLCBvbmVycm9yRGV0YWlscywgY29udGV4dCkge1xuICAgICAgICBwcm9taXNlLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBjYWxsb25lcnJvcihwcm9taXNlLCB2YWx1ZSwgb25lcnJvckRldGFpbHMsIGNvbnRleHQpO1xuICAgICAgICBwcm9taXNlLl9zZXRTdGF0ZShzdGF0ZV9lcnJvcl9ub3RpZnkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3RpZnlTdWNjZXNzKHByb21pc2UsIHF1ZXVlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZhbHVlO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gcHJvbWlzZS5fbGlzdGVuZXJzO1xuICAgICAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UuX2xpc3RlbmVycyA9IG51bGw7XG4gICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IEFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSA/IGxpc3RlbmVycy5sZW5ndGggOiAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGxlbiA9PT0gMSA/IGxpc3RlbmVycyA6IGxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIHZhciBvbkNvbXBsZXRlID0gbGlzdGVuZXIuYztcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBsaXN0ZW5lci5wcm9taXNlO1xuXG4gICAgICAgICAgICBfVHJhY2UuX3RyYWNlQXN5bmNPcGVyYXRpb25Db21wbGV0ZWQobGlzdGVuZXIuYXN5bmNPcElELCBfR2xvYmFsLkRlYnVnICYmIF9HbG9iYWwuRGVidWcuTVNfQVNZTkNfT1BfU1RBVFVTX1NVQ0NFU1MpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgX1RyYWNlLl90cmFjZUFzeW5jQ2FsbGJhY2tTdGFydGluZyhsaXN0ZW5lci5hc3luY09wSUQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5fc2V0Q29tcGxldGVWYWx1ZShvbkNvbXBsZXRlID8gb25Db21wbGV0ZSh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Ll9zZXRFeGNlcHRpb25WYWx1ZShleCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgX1RyYWNlLl90cmFjZUFzeW5jQ2FsbGJhY2tDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5fc3RhdGUgIT09IHN0YXRlX3dhaXRpbmcgJiYgdGFyZ2V0Ll9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tcGxldGVQcm9taXNlLnByb3RvdHlwZS5kb25lLmNhbGwocHJvbWlzZSwgb25Db21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbm90aWZ5RXJyb3IocHJvbWlzZSwgcXVldWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdmFsdWU7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBwcm9taXNlLl9saXN0ZW5lcnM7XG4gICAgICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZS5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpID8gbGlzdGVuZXJzLmxlbmd0aCA6IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGVuID09PSAxID8gbGlzdGVuZXJzIDogbGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBsaXN0ZW5lci5lO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGxpc3RlbmVyLnByb21pc2U7XG5cbiAgICAgICAgICAgIHZhciBlcnJvcklEID0gX0dsb2JhbC5EZWJ1ZyAmJiAodmFsdWUgJiYgdmFsdWUubmFtZSA9PT0gY2FuY2VsZWROYW1lID8gX0dsb2JhbC5EZWJ1Zy5NU19BU1lOQ19PUF9TVEFUVVNfQ0FOQ0VMRUQgOiBfR2xvYmFsLkRlYnVnLk1TX0FTWU5DX09QX1NUQVRVU19FUlJPUik7XG4gICAgICAgICAgICBfVHJhY2UuX3RyYWNlQXN5bmNPcGVyYXRpb25Db21wbGV0ZWQobGlzdGVuZXIuYXN5bmNPcElELCBlcnJvcklEKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHZhciBhc3luY0NhbGxiYWNrU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfVHJhY2UuX3RyYWNlQXN5bmNDYWxsYmFja1N0YXJ0aW5nKGxpc3RlbmVyLmFzeW5jT3BJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luY0NhbGxiYWNrU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9uRXJyb3IuaGFuZGxlc09uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsb25lcnJvcih0YXJnZXQsIHZhbHVlLCBkZXRhaWxzRm9ySGFuZGxlZEVycm9yLCBwcm9taXNlLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5fc2V0Q29tcGxldGVWYWx1ZShvbkVycm9yKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuX3NldENoYWluZWRFcnJvclZhbHVlKHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5fc2V0RXhjZXB0aW9uVmFsdWUoZXgpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3luY0NhbGxiYWNrU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX1RyYWNlLl90cmFjZUFzeW5jQ2FsbGJhY2tDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Ll9zdGF0ZSAhPT0gc3RhdGVfd2FpdGluZyAmJiB0YXJnZXQuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBFcnJvclByb21pc2UucHJvdG90eXBlLmRvbmUuY2FsbChwcm9taXNlLCBudWxsLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxsb25lcnJvcihwcm9taXNlLCB2YWx1ZSwgb25lcnJvckRldGFpbHNHZW5lcmF0b3IsIGNvbnRleHQsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHByb21pc2VFdmVudExpc3RlbmVycy5fbGlzdGVuZXJzW2Vycm9yRVRdKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvciAmJiB2YWx1ZS5tZXNzYWdlID09PSBjYW5jZWxlZE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlRXZlbnRMaXN0ZW5lcnMuZGlzcGF0Y2hFdmVudChlcnJvckVULCBvbmVycm9yRGV0YWlsc0dlbmVyYXRvcihwcm9taXNlLCB2YWx1ZSwgY29udGV4dCwgaGFuZGxlcikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb2dyZXNzKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBwcm9taXNlLl9saXN0ZW5lcnM7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBBcnJheS5pc0FycmF5KGxpc3RlbmVycykgPyBsaXN0ZW5lcnMubGVuZ3RoIDogMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGVuID09PSAxID8gbGlzdGVuZXJzIDogbGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBvblByb2dyZXNzID0gbGlzdGVuZXIucDtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0cnkgeyBvblByb2dyZXNzKHZhbHVlKTsgfSBjYXRjaCAoZXgpIHsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIShsaXN0ZW5lci5jIHx8IGxpc3RlbmVyLmUpICYmIGxpc3RlbmVyLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIucHJvbWlzZS5fcHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwdXNoTGlzdGVuZXIocHJvbWlzZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHByb21pc2UuX2xpc3RlbmVycztcbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgLy8gV2UgbWF5IGhhdmUgZWl0aGVyIGEgc2luZ2xlIGxpc3RlbmVyICh3aGljaCB3aWxsIG5ldmVyIGJlIHdyYXBwZWQgaW4gYW4gYXJyYXkpXG4gICAgICAgICAgICAvLyBvciAyKyBsaXN0ZW5lcnMgKHdoaWNoIHdpbGwgYmUgd3JhcHBlZCkuIFNpbmNlIHdlIGFyZSBub3cgYWRkaW5nIG9uZSBtb3JlIGxpc3RlbmVyXG4gICAgICAgICAgICAvLyB3ZSBtYXkgaGF2ZSB0byB3cmFwIHRoZSBzaW5nbGUgbGlzdGVuZXIgYmVmb3JlIGFkZGluZyB0aGUgc2Vjb25kLlxuICAgICAgICAgICAgbGlzdGVuZXJzID0gQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpID8gbGlzdGVuZXJzIDogW2xpc3RlbmVyc107XG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBwcm9taXNlLl9saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgfVxuICAgIC8vIFRoZSBkaWZmZXJlbmNlIGJld2VlbiBzZXRDb21wbGV0ZVZhbHVlKCkvc2V0RXJyb3JWYWx1ZSgpIGFuZCBjb21wbGV0ZSgpL2Vycm9yKCkgaXMgdGhhdCBzZXRYWFhWYWx1ZSgpIG1vdmVzXG4gICAgLy8gYSBwcm9taXNlIGRpcmVjdGx5IHRvIHRoZSBzdWNjZXNzL2Vycm9yIHN0YXRlIHdpdGhvdXQgc3RhcnRpbmcgYW5vdGhlciBub3RpZmljYXRpb24gcGFzcyAoYmVjYXVzZSBvbmVcbiAgICAvLyBpcyBhbHJlYWR5IG9uZ29pbmcpLlxuICAgIGZ1bmN0aW9uIHNldEVycm9ySW5mbyhwcm9taXNlLCBlcnJvcklkLCBpc0V4Y2VwdGlvbikge1xuICAgICAgICBwcm9taXNlLl9pc0V4Y2VwdGlvbiA9IGlzRXhjZXB0aW9uIHx8IGZhbHNlO1xuICAgICAgICBwcm9taXNlLl9lcnJvcklkID0gZXJyb3JJZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0RXJyb3JWYWx1ZShwcm9taXNlLCB2YWx1ZSwgb25lcnJvckRldGFpbHMsIGNvbnRleHQpIHtcbiAgICAgICAgcHJvbWlzZS5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY2FsbG9uZXJyb3IocHJvbWlzZSwgdmFsdWUsIG9uZXJyb3JEZXRhaWxzLCBjb250ZXh0KTtcbiAgICAgICAgcHJvbWlzZS5fc2V0U3RhdGUoc3RhdGVfZXJyb3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRDb21wbGV0ZVZhbHVlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXRTdGF0ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZSA9IHN0YXRlX3dhaXRpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZSA9IHN0YXRlX3N1Y2Nlc3M7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZS5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcHJvbWlzZS5fc2V0U3RhdGUodGFyZ2V0U3RhdGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0aGVuKHByb21pc2UsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBUaGVuUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdmFyIGFzeW5jT3BJRCA9IF9UcmFjZS5fdHJhY2VBc3luY09wZXJhdGlvblN0YXJ0aW5nKFwiV2luSlMuUHJvbWlzZS50aGVuXCIpO1xuICAgICAgICBwdXNoTGlzdGVuZXIocHJvbWlzZSwgeyBwcm9taXNlOiByZXN1bHQsIGM6IG9uQ29tcGxldGUsIGU6IG9uRXJyb3IsIHA6IG9uUHJvZ3Jlc3MsIGFzeW5jT3BJRDogYXN5bmNPcElEIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gZGV0YWlsIHByb21pc2UsIFRoZW5Qcm9taXNlIGlzIGNyZWF0ZWQgd2hlbiBhIHByb21pc2UgbmVlZHNcbiAgICAvLyB0byBiZSByZXR1cm5lZCBmcm9tIGEgdGhlbigpIG1ldGhvZC5cbiAgICAvL1xuICAgIHZhciBUaGVuUHJvbWlzZSA9IF9CYXNlLkNsYXNzLmRlcml2ZShQcm9taXNlU3RhdGVNYWNoaW5lLFxuICAgICAgICBmdW5jdGlvbiAoY3JlYXRvcikge1xuXG4gICAgICAgICAgICBpZiAodGFnV2l0aFN0YWNrICYmICh0YWdXaXRoU3RhY2sgPT09IHRydWUgfHwgKHRhZ1dpdGhTdGFjayAmIHRhZy50aGVuUHJvbWlzZSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhY2sgPSBQcm9taXNlLl9nZXRTdGFjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jcmVhdG9yID0gY3JlYXRvcjtcbiAgICAgICAgICAgIHRoaXMuX3NldFN0YXRlKHN0YXRlX2NyZWF0ZWQpO1xuICAgICAgICAgICAgdGhpcy5fcnVuKCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIF9jcmVhdG9yOiBudWxsLFxuXG4gICAgICAgICAgICBfY2FuY2VsQWN0aW9uOiBmdW5jdGlvbiAoKSB7IGlmICh0aGlzLl9jcmVhdG9yKSB7IHRoaXMuX2NyZWF0b3IuY2FuY2VsKCk7IH0gfSxcbiAgICAgICAgICAgIF9jbGVhbnVwQWN0aW9uOiBmdW5jdGlvbiAoKSB7IHRoaXMuX2NyZWF0b3IgPSBudWxsOyB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHN1cHBvcnRlZEZvclByb2Nlc3Npbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBTbGltIHByb21pc2UgaW1wbGVtZW50YXRpb25zIGZvciBhbHJlYWR5IGNvbXBsZXRlZCBwcm9taXNlcywgdGhlc2UgYXJlIGNyZWF0ZWRcbiAgICAvLyB1bmRlciB0aGUgaG9vZCBvbiBzeW5jaHJvbm91cyBjb21wbGV0aW9uIHBhdGhzIGFzIHdlbGwgYXMgYnkgV2luSlMuUHJvbWlzZS53cmFwXG4gICAgLy8gYW5kIFdpbkpTLlByb21pc2Uud3JhcEVycm9yLlxuICAgIC8vXG5cbiAgICB2YXIgRXJyb3JQcm9taXNlID0gX0Jhc2UuQ2xhc3MuZGVmaW5lKFxuICAgICAgICBmdW5jdGlvbiBFcnJvclByb21pc2VfY3Rvcih2YWx1ZSkge1xuXG4gICAgICAgICAgICBpZiAodGFnV2l0aFN0YWNrICYmICh0YWdXaXRoU3RhY2sgPT09IHRydWUgfHwgKHRhZ1dpdGhTdGFjayAmIHRhZy5lcnJvclByb21pc2UpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrID0gUHJvbWlzZS5fZ2V0U3RhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNhbGxvbmVycm9yKHRoaXMsIHZhbHVlLCBkZXRhaWxzRm9yRXJyb3IpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAvLy8gQXR0ZW1wdHMgdG8gY2FuY2VsIHRoZSBmdWxmaWxsbWVudCBvZiBhIHByb21pc2VkIHZhbHVlLiBJZiB0aGUgcHJvbWlzZSBoYXNuJ3RcbiAgICAgICAgICAgICAgICAvLy8gYWxyZWFkeSBiZWVuIGZ1bGZpbGxlZCBhbmQgY2FuY2VsbGF0aW9uIGlzIHN1cHBvcnRlZCwgdGhlIHByb21pc2UgZW50ZXJzXG4gICAgICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBzdGF0ZSB3aXRoIGEgdmFsdWUgb2YgRXJyb3IoXCJDYW5jZWxlZFwiKS5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb25lOiBmdW5jdGlvbiBFcnJvclByb21pc2VfZG9uZSh1bnVzZWQsIG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuZG9uZVwiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuZG9uZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBBbGxvd3MgeW91IHRvIHNwZWNpZnkgdGhlIHdvcmsgdG8gYmUgZG9uZSBvbiB0aGUgZnVsZmlsbG1lbnQgb2YgdGhlIHByb21pc2VkIHZhbHVlLFxuICAgICAgICAgICAgICAgIC8vLyB0aGUgZXJyb3IgaGFuZGxpbmcgdG8gYmUgcGVyZm9ybWVkIGlmIHRoZSBwcm9taXNlIGZhaWxzIHRvIGZ1bGZpbGxcbiAgICAgICAgICAgICAgICAvLy8gYSB2YWx1ZSwgYW5kIHRoZSBoYW5kbGluZyBvZiBwcm9ncmVzcyBub3RpZmljYXRpb25zIGFsb25nIHRoZSB3YXkuXG4gICAgICAgICAgICAgICAgLy8vXG4gICAgICAgICAgICAgICAgLy8vIEFmdGVyIHRoZSBoYW5kbGVycyBoYXZlIGZpbmlzaGVkIGV4ZWN1dGluZywgdGhpcyBmdW5jdGlvbiB0aHJvd3MgYW55IGVycm9yIHRoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkXG4gICAgICAgICAgICAgICAgLy8vIGZyb20gdGhlbigpIGFzIGEgcHJvbWlzZSBpbiB0aGUgZXJyb3Igc3RhdGUuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uQ29tcGxldGUnIHR5cGU9J0Z1bmN0aW9uJyBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuZG9uZV9wOm9uQ29tcGxldGVcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWQgc3VjY2Vzc2Z1bGx5IHdpdGggYSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIGZ1bGZpbGxlZCB2YWx1ZSBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsXG4gICAgICAgICAgICAgICAgLy8vIHRoZSBmdWxmaWxsZWQgdmFsdWUgaXMgcmV0dXJuZWQuIFRoZSB2YWx1ZSByZXR1cm5lZFxuICAgICAgICAgICAgICAgIC8vLyBmcm9tIHRoZSBmdW5jdGlvbiBiZWNvbWVzIHRoZSBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnlcbiAgICAgICAgICAgICAgICAvLy8gdGhlbigpLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIHdoaWxlIGV4ZWN1dGluZyB0aGUgZnVuY3Rpb24sIHRoZSBwcm9taXNlIHJldHVybmVkXG4gICAgICAgICAgICAgICAgLy8vIGJ5IHRoZW4oKSBtb3ZlcyBpbnRvIHRoZSBlcnJvciBzdGF0ZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uRXJyb3InIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVfcDpvbkVycm9yXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gZXJyb3IuIFRoZSBlcnJvclxuICAgICAgICAgICAgICAgIC8vLyBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgaXQgaXMgbnVsbCwgdGhlIGVycm9yIGlzIGZvcndhcmRlZC5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIGlzIHRoZSBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlbigpLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25Qcm9ncmVzcycgdHlwZT0nRnVuY3Rpb24nIG9wdGlvbmFsPSd0cnVlJyBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuZG9uZV9wOm9uUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAvLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSByZXBvcnRzIHByb2dyZXNzLiBEYXRhIGFib3V0IHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIC8vLyBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gUHJvbWlzZXMgYXJlIG5vdCByZXF1aXJlZCB0byBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8vIHByb2dyZXNzLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yLmhhbmRsZXNPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbG9uZXJyb3IobnVsbCwgdmFsdWUsIGRldGFpbHNGb3JIYW5kbGVkRXJyb3IsIHRoaXMsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9uRXJyb3IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZXN1bHQuZG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBwcm9taXNlIGlzIHJldHVybmVkIHdlIG5lZWQgdG8gd2FpdCBvbiBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvciAmJiB2YWx1ZS5tZXNzYWdlID09PSBjYW5jZWxlZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3VwcHJlc3MgY2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yY2UgdGhlIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24gYXN5bmNyb25vdXNseSB0byBhdm9pZCBhbnkgdHJ5L2NhdGNoIGJsb2Nrc1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5fZG9uZUhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIEVycm9yUHJvbWlzZV90aGVuKHVudXNlZCwgb25FcnJvcikge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuXCI+XG4gICAgICAgICAgICAgICAgLy8vIEFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgd29yayB0byBiZSBkb25lIG9uIHRoZSBmdWxmaWxsbWVudCBvZiB0aGUgcHJvbWlzZWQgdmFsdWUsXG4gICAgICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBoYW5kbGluZyB0byBiZSBwZXJmb3JtZWQgaWYgdGhlIHByb21pc2UgZmFpbHMgdG8gZnVsZmlsbFxuICAgICAgICAgICAgICAgIC8vLyBhIHZhbHVlLCBhbmQgdGhlIGhhbmRsaW5nIG9mIHByb2dyZXNzIG5vdGlmaWNhdGlvbnMgYWxvbmcgdGhlIHdheS5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25Db21wbGV0ZScgdHlwZT0nRnVuY3Rpb24nIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuX3A6b25Db21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCBzdWNjZXNzZnVsbHkgd2l0aCBhIHZhbHVlLlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgdmFsdWUgaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIElmIHRoZSB2YWx1ZSBpcyBudWxsLCB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gICAgICAgICAgICAgICAgLy8vIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiBiZWNvbWVzIHRoZSBmdWxmaWxsZWQgdmFsdWUgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgYnlcbiAgICAgICAgICAgICAgICAvLy8gdGhlbigpLiBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIHdoaWxlIHRoaXMgZnVuY3Rpb24gaXMgYmVpbmcgZXhlY3V0ZWQsIHRoZSBwcm9taXNlIHJldHVybmVkXG4gICAgICAgICAgICAgICAgLy8vIGJ5IHRoZW4oKSBtb3ZlcyBpbnRvIHRoZSBlcnJvciBzdGF0ZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uRXJyb3InIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5fcDpvbkVycm9yXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYW4gZXJyb3IuIFRoZSBlcnJvclxuICAgICAgICAgICAgICAgIC8vLyBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgaXQgaXMgbnVsbCwgdGhlIGVycm9yIGlzIGZvcndhcmRlZC5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIGJlY29tZXMgdGhlIGZ1bGZpbGxlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGVuKCkuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPSdvblByb2dyZXNzJyB0eXBlPSdGdW5jdGlvbicgb3B0aW9uYWw9J3RydWUnIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS50aGVuX3A6b25Qcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIHJlcG9ydHMgcHJvZ3Jlc3MuIERhdGEgYWJvdXQgdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgLy8vIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LiBQcm9taXNlcyBhcmUgbm90IHJlcXVpcmVkIHRvIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLy8gcHJvZ3Jlc3MuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxyZXR1cm5zIHR5cGU9XCJXaW5KUy5Qcm9taXNlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5fcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHByb21pc2Ugd2hvc2UgdmFsdWUgaXMgdGhlIHJlc3VsdCBvZiBleGVjdXRpbmcgdGhlIGNvbXBsZXRlIG9yXG4gICAgICAgICAgICAgICAgLy8vIGVycm9yIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgIC8vLyA8L3JldHVybnM+XG4gICAgICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb21pc2UgaXMgYWxyZWFkeSBpbiBhIGVycm9yIHN0YXRlIGFuZCBubyBlcnJvciBoYW5kbGVyIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgLy8gd2Ugb3B0aW1pemUgYnkgc2ltcGx5IHJldHVybmluZyB0aGUgcHJvbWlzZSBpbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IG9uZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlmICghb25FcnJvcikgeyByZXR1cm4gdGhpczsgfVxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yLmhhbmRsZXNPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsb25lcnJvcihudWxsLCB2YWx1ZSwgZGV0YWlsc0ZvckhhbmRsZWRFcnJvciwgdGhpcywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENvbXBsZXRlUHJvbWlzZShvbkVycm9yKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIHRocm93IGZyb20gdGhlIGVycm9yIGhhbmRsZXIgaXMgdGhlIHNhbWUgYXMgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb3ZpZGVkIHRvIHRoZSBlcnJvciBoYW5kbGVyIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSBuZXcgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBFeGNlcHRpb25Qcm9taXNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRGb3JQcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHZhciBFeGNlcHRpb25Qcm9taXNlID0gX0Jhc2UuQ2xhc3MuZGVyaXZlKEVycm9yUHJvbWlzZSxcbiAgICAgICAgZnVuY3Rpb24gRXhjZXB0aW9uUHJvbWlzZV9jdG9yKHZhbHVlKSB7XG5cbiAgICAgICAgICAgIGlmICh0YWdXaXRoU3RhY2sgJiYgKHRhZ1dpdGhTdGFjayA9PT0gdHJ1ZSB8fCAodGFnV2l0aFN0YWNrICYgdGFnLmV4Y2VwdGlvblByb21pc2UpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrID0gUHJvbWlzZS5fZ2V0U3RhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNhbGxvbmVycm9yKHRoaXMsIHZhbHVlLCBkZXRhaWxzRm9yRXhjZXB0aW9uKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLyogZW1wdHkgKi9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3VwcG9ydGVkRm9yUHJvY2Vzc2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICB2YXIgQ29tcGxldGVQcm9taXNlID0gX0Jhc2UuQ2xhc3MuZGVmaW5lKFxuICAgICAgICBmdW5jdGlvbiBDb21wbGV0ZVByb21pc2VfY3Rvcih2YWx1ZSkge1xuXG4gICAgICAgICAgICBpZiAodGFnV2l0aFN0YWNrICYmICh0YWdXaXRoU3RhY2sgPT09IHRydWUgfHwgKHRhZ1dpdGhTdGFjayAmIHRhZy5jb21wbGV0ZVByb21pc2UpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrID0gUHJvbWlzZS5fZ2V0U3RhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBUaGVuUHJvbWlzZShudWxsKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuX3NldENvbXBsZXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUuY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAvLy8gQXR0ZW1wdHMgdG8gY2FuY2VsIHRoZSBmdWxmaWxsbWVudCBvZiBhIHByb21pc2VkIHZhbHVlLiBJZiB0aGUgcHJvbWlzZSBoYXNuJ3RcbiAgICAgICAgICAgICAgICAvLy8gYWxyZWFkeSBiZWVuIGZ1bGZpbGxlZCBhbmQgY2FuY2VsbGF0aW9uIGlzIHN1cHBvcnRlZCwgdGhlIHByb21pc2UgZW50ZXJzXG4gICAgICAgICAgICAgICAgLy8vIHRoZSBlcnJvciBzdGF0ZSB3aXRoIGEgdmFsdWUgb2YgRXJyb3IoXCJDYW5jZWxlZFwiKS5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb25lOiBmdW5jdGlvbiBDb21wbGV0ZVByb21pc2VfZG9uZShvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVcIj5cbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVcIj5cbiAgICAgICAgICAgICAgICAvLy8gQWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSB3b3JrIHRvIGJlIGRvbmUgb24gdGhlIGZ1bGZpbGxtZW50IG9mIHRoZSBwcm9taXNlZCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAvLy8gdGhlIGVycm9yIGhhbmRsaW5nIHRvIGJlIHBlcmZvcm1lZCBpZiB0aGUgcHJvbWlzZSBmYWlscyB0byBmdWxmaWxsXG4gICAgICAgICAgICAgICAgLy8vIGEgdmFsdWUsIGFuZCB0aGUgaGFuZGxpbmcgb2YgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBhbG9uZyB0aGUgd2F5LlxuICAgICAgICAgICAgICAgIC8vL1xuICAgICAgICAgICAgICAgIC8vLyBBZnRlciB0aGUgaGFuZGxlcnMgaGF2ZSBmaW5pc2hlZCBleGVjdXRpbmcsIHRoaXMgZnVuY3Rpb24gdGhyb3dzIGFueSBlcnJvciB0aGF0IHdvdWxkIGhhdmUgYmVlbiByZXR1cm5lZFxuICAgICAgICAgICAgICAgIC8vLyBmcm9tIHRoZW4oKSBhcyBhIHByb21pc2UgaW4gdGhlIGVycm9yIHN0YXRlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPSdvbkNvbXBsZXRlJyB0eXBlPSdGdW5jdGlvbicgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVfcDpvbkNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHN1Y2Nlc3NmdWxseSB3aXRoIGEgdmFsdWUuXG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdWxmaWxsZWQgdmFsdWUgaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIElmIHRoZSB2YWx1ZSBpcyBudWxsLFxuICAgICAgICAgICAgICAgIC8vLyB0aGUgZnVsZmlsbGVkIHZhbHVlIGlzIHJldHVybmVkLiBUaGUgdmFsdWUgcmV0dXJuZWRcbiAgICAgICAgICAgICAgICAvLy8gZnJvbSB0aGUgZnVuY3Rpb24gYmVjb21lcyB0aGUgZnVsZmlsbGVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5XG4gICAgICAgICAgICAgICAgLy8vIHRoZW4oKS4gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biB3aGlsZSBleGVjdXRpbmcgdGhlIGZ1bmN0aW9uLCB0aGUgcHJvbWlzZSByZXR1cm5lZFxuICAgICAgICAgICAgICAgIC8vLyBieSB0aGVuKCkgbW92ZXMgaW50byB0aGUgZXJyb3Igc3RhdGUuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPSdvbkVycm9yJyB0eXBlPSdGdW5jdGlvbicgb3B0aW9uYWw9J3RydWUnIGxvY2lkPVwiV2luSlMuUHJvbWlzZVN0YXRlTWFjaGluZS5kb25lX3A6b25FcnJvclwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGVycm9yLiBUaGUgZXJyb3JcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIElmIGl0IGlzIG51bGwsIHRoZSBlcnJvciBpcyBmb3J3YXJkZWQuXG4gICAgICAgICAgICAgICAgLy8vIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiBpcyB0aGUgZnVsZmlsbGVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4oKS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uUHJvZ3Jlc3MnIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLmRvbmVfcDpvblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgLy8vIHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgcmVwb3J0cyBwcm9ncmVzcy4gRGF0YSBhYm91dCB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIFByb21pc2VzIGFyZSBub3QgcmVxdWlyZWQgdG8gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vLyBwcm9ncmVzcy5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgaWYgKCFvbkNvbXBsZXRlKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvbkNvbXBsZXRlKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZXN1bHQuZG9uZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yY2UgdGhlIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24gYXN5bmNocm9ub3VzbHkgdG8gYXZvaWQgYW55IHRyeS9jYXRjaCBibG9ja3NcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5fZG9uZUhhbmRsZXIoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiBDb21wbGV0ZVByb21pc2VfdGhlbihvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5cIj5cbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5cIj5cbiAgICAgICAgICAgICAgICAvLy8gQWxsb3dzIHlvdSB0byBzcGVjaWZ5IHRoZSB3b3JrIHRvIGJlIGRvbmUgb24gdGhlIGZ1bGZpbGxtZW50IG9mIHRoZSBwcm9taXNlZCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAvLy8gdGhlIGVycm9yIGhhbmRsaW5nIHRvIGJlIHBlcmZvcm1lZCBpZiB0aGUgcHJvbWlzZSBmYWlscyB0byBmdWxmaWxsXG4gICAgICAgICAgICAgICAgLy8vIGEgdmFsdWUsIGFuZCB0aGUgaGFuZGxpbmcgb2YgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBhbG9uZyB0aGUgd2F5LlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPSdvbkNvbXBsZXRlJyB0eXBlPSdGdW5jdGlvbicgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5fcDpvbkNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHN1Y2Nlc3NmdWxseSB3aXRoIGEgdmFsdWUuXG4gICAgICAgICAgICAgICAgLy8vIFRoZSB2YWx1ZSBpcyBwYXNzZWQgYXMgdGhlIHNpbmdsZSBhcmd1bWVudC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIGJlY29tZXMgdGhlIGZ1bGZpbGxlZCB2YWx1ZSBvZiB0aGUgcHJvbWlzZSByZXR1cm5lZCBieVxuICAgICAgICAgICAgICAgIC8vLyB0aGVuKCkuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gd2hpbGUgdGhpcyBmdW5jdGlvbiBpcyBiZWluZyBleGVjdXRlZCwgdGhlIHByb21pc2UgcmV0dXJuZWRcbiAgICAgICAgICAgICAgICAvLy8gYnkgdGhlbigpIG1vdmVzIGludG8gdGhlIGVycm9yIHN0YXRlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nb25FcnJvcicgdHlwZT0nRnVuY3Rpb24nIG9wdGlvbmFsPSd0cnVlJyBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUudGhlbl9wOm9uRXJyb3JcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWQgd2l0aCBhbiBlcnJvci4gVGhlIGVycm9yXG4gICAgICAgICAgICAgICAgLy8vIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LiBJZiBpdCBpcyBudWxsLCB0aGUgZXJyb3IgaXMgZm9yd2FyZGVkLlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24gYmVjb21lcyB0aGUgZnVsZmlsbGVkIHZhbHVlIG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZW4oKS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J29uUHJvZ3Jlc3MnIHR5cGU9J0Z1bmN0aW9uJyBvcHRpb25hbD0ndHJ1ZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlU3RhdGVNYWNoaW5lLnRoZW5fcDpvblByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgcmVwb3J0cyBwcm9ncmVzcy4gRGF0YSBhYm91dCB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIFByb21pc2VzIGFyZSBub3QgcmVxdWlyZWQgdG8gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vLyBwcm9ncmVzcy5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIldpbkpTLlByb21pc2VcIiBsb2NpZD1cIldpbkpTLlByb21pc2VTdGF0ZU1hY2hpbmUudGhlbl9yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgcHJvbWlzZSB3aG9zZSB2YWx1ZSBpcyB0aGUgcmVzdWx0IG9mIGV4ZWN1dGluZyB0aGUgY29tcGxldGUgb3JcbiAgICAgICAgICAgICAgICAvLy8gZXJyb3IgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIGNvbXBsZXRpb24gaGFuZGxlciBpcyB0aGUgc2FtZSBhcyB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvdmlkZWQgdG8gdGhlIGNvbXBsZXRpb24gaGFuZGxlciB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgbmV3IHByb21pc2UuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG9uQ29tcGxldGUgPyBvbkNvbXBsZXRlKHRoaXMuX3ZhbHVlKSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlID8gdGhpcyA6IG5ldyBDb21wbGV0ZVByb21pc2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhjZXB0aW9uUHJvbWlzZShleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRGb3JQcm9jZXNzaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vXG4gICAgLy8gUHJvbWlzZSBpcyB0aGUgdXNlci1jcmVhdGFibGUgV2luSlMuUHJvbWlzZSBvYmplY3QuXG4gICAgLy9cblxuICAgIGZ1bmN0aW9uIHRpbWVvdXQodGltZW91dE1TKSB7XG4gICAgICAgIHZhciBpZDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dE1TKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkID0gX0dsb2JhbC5zZXRUaW1lb3V0KGMsIHRpbWVvdXRNUyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX0Jhc2VDb3JlVXRpbHMuX3NldEltbWVkaWF0ZShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgICAgICBfR2xvYmFsLmNsZWFyVGltZW91dChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpbWVvdXRXaXRoUHJvbWlzZSh0aW1lb3V0LCBwcm9taXNlKSB7XG4gICAgICAgIHZhciBjYW5jZWxQcm9taXNlID0gZnVuY3Rpb24gKCkgeyBwcm9taXNlLmNhbmNlbCgpOyB9O1xuICAgICAgICB2YXIgY2FuY2VsVGltZW91dCA9IGZ1bmN0aW9uICgpIHsgdGltZW91dC5jYW5jZWwoKTsgfTtcbiAgICAgICAgdGltZW91dC50aGVuKGNhbmNlbFByb21pc2UpO1xuICAgICAgICBwcm9taXNlLnRoZW4oY2FuY2VsVGltZW91dCwgY2FuY2VsVGltZW91dCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIHZhciBzdGF0aWNDYW5jZWxlZFByb21pc2U7XG5cbiAgICB2YXIgUHJvbWlzZSA9IF9CYXNlLkNsYXNzLmRlcml2ZShQcm9taXNlU3RhdGVNYWNoaW5lLFxuICAgICAgICBmdW5jdGlvbiBQcm9taXNlX2N0b3IoaW5pdCwgb25jYW5jZWwpIHtcbiAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZVwiPlxuICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZVwiPlxuICAgICAgICAgICAgLy8vIEEgcHJvbWlzZSBwcm92aWRlcyBhIG1lY2hhbmlzbSB0byBzY2hlZHVsZSB3b3JrIHRvIGJlIGRvbmUgb24gYSB2YWx1ZSB0aGF0XG4gICAgICAgICAgICAvLy8gaGFzIG5vdCB5ZXQgYmVlbiBjb21wdXRlZC4gSXQgaXMgYSBjb252ZW5pZW50IGFic3RyYWN0aW9uIGZvciBtYW5hZ2luZ1xuICAgICAgICAgICAgLy8vIGludGVyYWN0aW9ucyB3aXRoIGFzeW5jaHJvbm91cyBBUElzLlxuICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImluaXRcIiB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLlByb21pc2VfcDppbml0XCI+XG4gICAgICAgICAgICAvLy8gVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgdGhlICBwcm9taXNlLiBUaGUgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vLyBpcyBnaXZlbiB0aHJlZSBhcmd1bWVudHMgKGNvbXBsZXRlLCBlcnJvciwgcHJvZ3Jlc3MpLiBJbnNpZGUgdGhpcyBmdW5jdGlvblxuICAgICAgICAgICAgLy8vIHlvdSBzaG91bGQgYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIG5vdGlmaWNhdGlvbnMgc3VwcG9ydGVkIGJ5IHRoaXMgdmFsdWUuXG4gICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uY2FuY2VsXCIgb3B0aW9uYWw9XCJ0cnVlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlX3A6b25jYW5jZWxcIj5cbiAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gY2FsbCBpZiBhIGNvbnN1bWVyIG9mIHRoaXMgcHJvbWlzZSB3YW50c1xuICAgICAgICAgICAgLy8vIHRvIGNhbmNlbCBpdHMgdW5kb25lIHdvcmsuIFByb21pc2VzIGFyZSBub3QgcmVxdWlyZWQgdG9cbiAgICAgICAgICAgIC8vLyBzdXBwb3J0IGNhbmNlbGxhdGlvbi5cbiAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuXG4gICAgICAgICAgICBpZiAodGFnV2l0aFN0YWNrICYmICh0YWdXaXRoU3RhY2sgPT09IHRydWUgfHwgKHRhZ1dpdGhTdGFjayAmIHRhZy5wcm9taXNlKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFjayA9IFByb21pc2UuX2dldFN0YWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX29uY2FuY2VsID0gb25jYW5jZWw7XG4gICAgICAgICAgICB0aGlzLl9zZXRTdGF0ZShzdGF0ZV9jcmVhdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX3J1bigpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZSA9IHRoaXMuX2NvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2Vycm9yLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gdGhpcy5fcHJvZ3Jlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpbml0KGNvbXBsZXRlLCBlcnJvciwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFeGNlcHRpb25WYWx1ZShleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIF9vbmNhbmNlbDogbnVsbCxcblxuICAgICAgICAgICAgX2NhbmNlbEFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEJFR0lOIG1vbmFjbyBjaGFuZ2VcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb21pc2UgZGlkIG5vdCBpbXBsZW1lbnQgb25jYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFjY2VzcyBmaWVsZHMgdG8gZ2V0IHRoZW0gY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXgubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrID0gZXguc3RhY2s7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VFdmVudExpc3RlbmVycy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRU5EIG1vbmFjbyBjaGFuZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfY2xlYW51cEFjdGlvbjogZnVuY3Rpb24gKCkgeyB0aGlzLl9vbmNhbmNlbCA9IG51bGw7IH1cbiAgICAgICAgfSwge1xuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBQcm9taXNlX2FkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS5hZGRFdmVudExpc3RlbmVyXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZS5hZGRFdmVudExpc3RlbmVyXCI+XG4gICAgICAgICAgICAgICAgLy8vIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbnRyb2wuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJldmVudFR5cGVcIiBsb2NpZD1cIldpbkpTLlByb21pc2UuYWRkRXZlbnRMaXN0ZW5lcl9wOmV2ZW50VHlwZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgdHlwZSAobmFtZSkgb2YgdGhlIGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImxpc3RlbmVyXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFkZEV2ZW50TGlzdGVuZXJfcDpsaXN0ZW5lclwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgbGlzdGVuZXIgdG8gaW52b2tlIHdoZW4gdGhlIGV2ZW50IGlzIHJhaXNlZC5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJjYXB0dXJlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFkZEV2ZW50TGlzdGVuZXJfcDpjYXB0dXJlXCI+XG4gICAgICAgICAgICAgICAgLy8vIFNwZWNpZmllcyB3aGV0aGVyIG9yIG5vdCB0byBpbml0aWF0ZSBjYXB0dXJlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgICAgICBwcm9taXNlRXZlbnRMaXN0ZW5lcnMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbnk6IGZ1bmN0aW9uIFByb21pc2VfYW55KHZhbHVlcykge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS5hbnlcIj5cbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFueVwiPlxuICAgICAgICAgICAgICAgIC8vLyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIG9uZSBvZiB0aGUgaW5wdXQgcHJvbWlzZXNcbiAgICAgICAgICAgICAgICAvLy8gaGFzIGJlZW4gZnVsZmlsbGVkLlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwidmFsdWVzXCIgdHlwZT1cIkFycmF5XCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFueV9wOnZhbHVlc1wiPlxuICAgICAgICAgICAgICAgIC8vLyBBbiBhcnJheSB0aGF0IGNvbnRhaW5zIHByb21pc2Ugb2JqZWN0cyBvciBvYmplY3RzIHdob3NlIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8vIHZhbHVlcyBpbmNsdWRlIHByb21pc2Ugb2JqZWN0cy5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIldpbkpTLlByb21pc2VcIiBsb2NpZD1cIldpbkpTLlByb21pc2UuYW55X3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgcHJvbWlzZSB0aGF0IG9uIGZ1bGZpbGxtZW50IHlpZWxkcyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IChjb21wbGV0ZSBvciBlcnJvcikuXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY29tcGxldGUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbGVkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hcyh2YWx1ZXNba2V5XSkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkgeyBjb21wbGV0ZSh7IGtleToga2V5LCB2YWx1ZTogdmFsdWVzW2tleV0gfSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yICYmIGUubmFtZSA9PT0gY2FuY2VsZWROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgrK2NhbmNlbGVkKSA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoUHJvbWlzZS5jYW5jZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcih7IGtleToga2V5LCB2YWx1ZTogdmFsdWVzW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLmFzKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb21pc2UuY2FuY2VsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXM6IGZ1bmN0aW9uIFByb21pc2VfYXModmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2UuYXNcIj5cbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFzXCI+XG4gICAgICAgICAgICAgICAgLy8vIFJldHVybnMgYSBwcm9taXNlLiBJZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYSBwcm9taXNlIGl0IGlzIHJldHVybmVkO1xuICAgICAgICAgICAgICAgIC8vLyBvdGhlcndpc2UgdGhlIG9iamVjdCBpcyB3cmFwcGVkIGluIGEgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInZhbHVlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmFzX3A6dmFsdWVcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHZhbHVlIHRvIGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiV2luSlMuUHJvbWlzZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS5hc19yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBBIHByb21pc2UuXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV0ZVByb21pc2UodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vLyA8ZmllbGQgdHlwZT1cIldpbkpTLlByb21pc2VcIiBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2UuY2FuY2VsXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmNhbmNlbFwiPlxuICAgICAgICAgICAgLy8vIENhbmNlbGVkIHByb21pc2UgdmFsdWUsIGNhbiBiZSByZXR1cm5lZCBmcm9tIGEgcHJvbWlzZSBjb21wbGV0aW9uIGhhbmRsZXJcbiAgICAgICAgICAgIC8vLyB0byBpbmRpY2F0ZSBjYW5jZWxhdGlvbiBvZiB0aGUgcHJvbWlzZSBjaGFpbi5cbiAgICAgICAgICAgIC8vLyA8L2ZpZWxkPlxuICAgICAgICAgICAgY2FuY2VsOiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoc3RhdGljQ2FuY2VsZWRQcm9taXNlID0gc3RhdGljQ2FuY2VsZWRQcm9taXNlIHx8IG5ldyBFcnJvclByb21pc2UobmV3IF9FcnJvckZyb21OYW1lKGNhbmNlbGVkTmFtZSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gUHJvbWlzZV9kaXNwYXRjaEV2ZW50KGV2ZW50VHlwZSwgZGV0YWlscykge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS5kaXNwYXRjaEV2ZW50XCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZS5kaXNwYXRjaEV2ZW50XCI+XG4gICAgICAgICAgICAgICAgLy8vIFJhaXNlcyBhbiBldmVudCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYW5kIHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJldmVudFR5cGVcIiBsb2NpZD1cIldpbkpTLlByb21pc2UuZGlzcGF0Y2hFdmVudF9wOmV2ZW50VHlwZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgdHlwZSAobmFtZSkgb2YgdGhlIGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImRldGFpbHNcIiBsb2NpZD1cIldpbkpTLlByb21pc2UuZGlzcGF0Y2hFdmVudF9wOmRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHNldCBvZiBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIkJvb2xlYW5cIiBsb2NpZD1cIldpbkpTLlByb21pc2UuZGlzcGF0Y2hFdmVudF9yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBTcGVjaWZpZXMgd2hldGhlciBwcmV2ZW50RGVmYXVsdCB3YXMgY2FsbGVkIG9uIHRoZSBldmVudC5cbiAgICAgICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZUV2ZW50TGlzdGVuZXJzLmRpc3BhdGNoRXZlbnQoZXZlbnRUeXBlLCBkZXRhaWxzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpczogZnVuY3Rpb24gUHJvbWlzZV9pcyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS5pc1wiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2UuaXNcIj5cbiAgICAgICAgICAgICAgICAvLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgZnVsZmlsbHMgdGhlIHByb21pc2UgY29udHJhY3QuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ2YWx1ZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS5pc19wOnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgdmFsdWUgdGhhdCBtYXkgYmUgYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiQm9vbGVhblwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS5pc19yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYSBwcm9taXNlLCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGpvaW46IGZ1bmN0aW9uIFByb21pc2Vfam9pbih2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2Uuam9pblwiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2Uuam9pblwiPlxuICAgICAgICAgICAgICAgIC8vLyBDcmVhdGVzIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIGFsbCB0aGUgdmFsdWVzIGFyZSBmdWxmaWxsZWQuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ2YWx1ZXNcIiB0eXBlPVwiT2JqZWN0XCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmpvaW5fcDp2YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAvLy8gQW4gb2JqZWN0IHdob3NlIGZpZWxkcyBjb250YWluIHZhbHVlcywgc29tZSBvZiB3aGljaCBtYXkgYmUgcHJvbWlzZXMuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxyZXR1cm5zIHR5cGU9XCJXaW5KUy5Qcm9taXNlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLmpvaW5fcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAvLy8gQSBwcm9taXNlIHdob3NlIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGZpZWxkIG5hbWVzIGFzIHRob3NlIG9mIHRoZSBvYmplY3QgaW4gdGhlIHZhbHVlcyBwYXJhbWV0ZXIsIHdoZXJlXG4gICAgICAgICAgICAgICAgLy8vIGVhY2ggZmllbGQgdmFsdWUgaXMgdGhlIGZ1bGZpbGxlZCB2YWx1ZSBvZiBhIHByb21pc2UuXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY29tcGxldGUsIGVycm9yLCBwcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IEFycmF5LmlzQXJyYXkodmFsdWVzKSA/IFtdIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IEFycmF5LmlzQXJyYXkodmFsdWVzKSA/IFtdIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5kZWZpbmVkcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGVuZGluZyA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ0RvbmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgtLXBlbmRpbmcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvckNvdW50ID0gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYW5jZWxlZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBlcnJvcnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yICYmIGUubmFtZSA9PT0gY2FuY2VsZWROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxlZENvdW50ID09PSBlcnJvckNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoUHJvbWlzZS5jYW5jZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MoeyBLZXk6IGtleSwgRG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS50aGVuKHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7IHJlc3VsdHNba2V5XSA9IHZhbHVlOyBhcmdEb25lKGtleSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHsgZXJyb3JzW2tleV0gPSB2YWx1ZTsgYXJnRG9uZShrZXkpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nIC09IHVuZGVmaW5lZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UuYXModmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvbWlzZS5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBQcm9taXNlX3JlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS5yZW1vdmVFdmVudExpc3RlbmVyXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZS5yZW1vdmVFdmVudExpc3RlbmVyXCI+XG4gICAgICAgICAgICAgICAgLy8vIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgY29udHJvbC5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nZXZlbnRUeXBlJyBsb2NpZD1cIldpbkpTLlByb21pc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcl9ldmVudFR5cGVcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHR5cGUgKG5hbWUpIG9mIHRoZSBldmVudC5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9J2xpc3RlbmVyJyBsb2NpZD1cIldpbkpTLlByb21pc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcl9saXN0ZW5lclwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgbGlzdGVuZXIgdG8gcmVtb3ZlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT0nY2FwdHVyZScgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLnJlbW92ZUV2ZW50TGlzdGVuZXJfY2FwdHVyZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBTcGVjaWZpZXMgd2hldGhlciBvciBub3QgdG8gaW5pdGlhdGUgY2FwdHVyZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgcHJvbWlzZUV2ZW50TGlzdGVuZXJzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VwcG9ydGVkRm9yUHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiBQcm9taXNlX3RoZW4odmFsdWUsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2UudGhlblwiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlblwiPlxuICAgICAgICAgICAgICAgIC8vLyBBIHN0YXRpYyB2ZXJzaW9uIG9mIHRoZSBwcm9taXNlIGluc3RhbmNlIG1ldGhvZCB0aGVuKCkuXG4gICAgICAgICAgICAgICAgLy8vIDwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ2YWx1ZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS50aGVuX3A6dmFsdWVcIj5cbiAgICAgICAgICAgICAgICAvLy8gdGhlIHZhbHVlIHRvIGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uQ29tcGxldGVcIiB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbl9wOmNvbXBsZXRlXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkIHdpdGggYSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLy8gSWYgaXQgaXMgbnVsbCwgdGhlIHByb21pc2Ugc2ltcGx5XG4gICAgICAgICAgICAgICAgLy8vIHJldHVybnMgdGhlIHZhbHVlLiBUaGUgdmFsdWUgaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwib25FcnJvclwiIHR5cGU9XCJGdW5jdGlvblwiIG9wdGlvbmFsPVwidHJ1ZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS50aGVuX3A6ZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgcHJvbWlzZSBpcyBmdWxmaWxsZWQgd2l0aCBhbiBlcnJvci4gVGhlIGVycm9yXG4gICAgICAgICAgICAgICAgLy8vIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uUHJvZ3Jlc3NcIiB0eXBlPVwiRnVuY3Rpb25cIiBvcHRpb25hbD1cInRydWVcIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbl9wOnByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgcmVwb3J0cyBwcm9ncmVzcy4gRGF0YSBhYm91dCB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIFByb21pc2VzIGFyZSBub3QgcmVxdWlyZWQgdG8gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vLyBwcm9ncmVzcy5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIldpbkpTLlByb21pc2VcIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbl9yZXR1cm5WYWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBBIHByb21pc2Ugd2hvc2UgdmFsdWUgaXMgdGhlIHJlc3VsdCBvZiBleGVjdXRpbmcgdGhlIHByb3ZpZGVkIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgIC8vLyA8L3JldHVybnM+XG4gICAgICAgICAgICAgICAgLy8vIDwvc2lnbmF0dXJlPlxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFzKHZhbHVlKS50aGVuKG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoZW5FYWNoOiBmdW5jdGlvbiBQcm9taXNlX3RoZW5FYWNoKHZhbHVlcywgb25Db21wbGV0ZSwgb25FcnJvciwgb25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIC8vLyA8c2lnbmF0dXJlIGhlbHBLZXl3b3JkPVwiV2luSlMuUHJvbWlzZS50aGVuRWFjaFwiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbkVhY2hcIj5cbiAgICAgICAgICAgICAgICAvLy8gUGVyZm9ybXMgYW4gb3BlcmF0aW9uIG9uIGFsbCB0aGUgaW5wdXQgcHJvbWlzZXMgYW5kIHJldHVybnMgYSBwcm9taXNlXG4gICAgICAgICAgICAgICAgLy8vIHRoYXQgaGFzIHRoZSBzaGFwZSBvZiB0aGUgaW5wdXQgYW5kIGNvbnRhaW5zIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIC8vLyB0aGF0IGhhcyBiZWVuIHBlcmZvcm1lZCBvbiBlYWNoIGlucHV0LlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwidmFsdWVzXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLnRoZW5FYWNoX3A6dmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgc2V0IG9mIHZhbHVlcyAod2hpY2ggY291bGQgYmUgZWl0aGVyIGFuIGFycmF5IG9yIGFuIG9iamVjdCkgb2Ygd2hpY2ggc29tZSBvciBhbGwgYXJlIHByb21pc2VzLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uQ29tcGxldGVcIiB0eXBlPVwiRnVuY3Rpb25cIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbkVhY2hfcDpjb21wbGV0ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGEgdmFsdWUuXG4gICAgICAgICAgICAgICAgLy8vIElmIHRoZSB2YWx1ZSBpcyBudWxsLCB0aGUgcHJvbWlzZSByZXR1cm5zIHRoZSB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHZhbHVlIGlzIHBhc3NlZCBhcyB0aGUgc2luZ2xlIGFyZ3VtZW50LlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIm9uRXJyb3JcIiB0eXBlPVwiRnVuY3Rpb25cIiBvcHRpb25hbD1cInRydWVcIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbkVhY2hfcDplcnJvclwiPlxuICAgICAgICAgICAgICAgIC8vLyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGlmIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGVycm9yLiBUaGUgZXJyb3JcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuXG4gICAgICAgICAgICAgICAgLy8vIDwvcGFyYW0+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwib25Qcm9ncmVzc1wiIHR5cGU9XCJGdW5jdGlvblwiIG9wdGlvbmFsPVwidHJ1ZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS50aGVuRWFjaF9wOnByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgLy8vIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgaWYgdGhlIHByb21pc2UgcmVwb3J0cyBwcm9ncmVzcy4gRGF0YSBhYm91dCB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAvLy8gaXMgcGFzc2VkIGFzIHRoZSBzaW5nbGUgYXJndW1lbnQuIFByb21pc2VzIGFyZSBub3QgcmVxdWlyZWQgdG8gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vLyBwcm9ncmVzcy5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIldpbkpTLlByb21pc2VcIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGhlbkVhY2hfcmV0dXJuVmFsdWVcIj5cbiAgICAgICAgICAgICAgICAvLy8gQSBwcm9taXNlIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIFByb21pc2Uuam9pbiBvbiB0aGUgdmFsdWVzIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gW10gOiB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFByb21pc2UuYXModmFsdWVzW2tleV0pLnRoZW4ob25Db21wbGV0ZSwgb25FcnJvciwgb25Qcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2Uuam9pbihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGZ1bmN0aW9uIFByb21pc2VfdGltZW91dCh0aW1lLCBwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgLy8vIDxzaWduYXR1cmUgaGVscEtleXdvcmQ9XCJXaW5KUy5Qcm9taXNlLnRpbWVvdXRcIj5cbiAgICAgICAgICAgICAgICAvLy8gPHN1bW1hcnkgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLnRpbWVvdXRcIj5cbiAgICAgICAgICAgICAgICAvLy8gQ3JlYXRlcyBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgYWZ0ZXIgYSB0aW1lb3V0LlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwidGltZW91dFwiIHR5cGU9XCJOdW1iZXJcIiBvcHRpb25hbD1cInRydWVcIiBsb2NpZD1cIldpbkpTLlByb21pc2UudGltZW91dF9wOnRpbWVvdXRcIj5cbiAgICAgICAgICAgICAgICAvLy8gVGhlIHRpbWVvdXQgcGVyaW9kIGluIG1pbGxpc2Vjb25kcy4gSWYgdGhpcyB2YWx1ZSBpcyB6ZXJvIG9yIG5vdCBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgICAvLy8gc2V0SW1tZWRpYXRlIGlzIGNhbGxlZCwgb3RoZXJ3aXNlIHNldFRpbWVvdXQgaXMgY2FsbGVkLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInByb21pc2VcIiB0eXBlPVwiUHJvbWlzZVwiIG9wdGlvbmFsPVwidHJ1ZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS50aW1lb3V0X3A6cHJvbWlzZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBBIHByb21pc2UgdGhhdCB3aWxsIGJlIGNhbmNlbGVkIGlmIGl0IGRvZXNuJ3QgY29tcGxldGUgYmVmb3JlIHRoZVxuICAgICAgICAgICAgICAgIC8vLyB0aW1lb3V0IGhhcyBleHBpcmVkLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiV2luSlMuUHJvbWlzZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS50aW1lb3V0X3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgcHJvbWlzZSB0aGF0IGlzIGNvbXBsZXRlZCBhc3luY2hyb25vdXNseSBhZnRlciB0aGUgc3BlY2lmaWVkIHRpbWVvdXQuXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgdmFyIHRvID0gdGltZW91dCh0aW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZSA/IHRpbWVvdXRXaXRoUHJvbWlzZSh0bywgcHJvbWlzZSkgOiB0bztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3cmFwOiBmdW5jdGlvbiBQcm9taXNlX3dyYXAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2Uud3JhcFwiPlxuICAgICAgICAgICAgICAgIC8vLyA8c3VtbWFyeSBsb2NpZD1cIldpbkpTLlByb21pc2Uud3JhcFwiPlxuICAgICAgICAgICAgICAgIC8vLyBXcmFwcyBhIG5vbi1wcm9taXNlIHZhbHVlIGluIGEgcHJvbWlzZS4gWW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiBpZiB5b3UgbmVlZFxuICAgICAgICAgICAgICAgIC8vLyB0byBwYXNzIGEgdmFsdWUgdG8gYSBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIGEgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInZhbHVlXCIgbG9jaWQ9XCJXaW5KUy5Qcm9taXNlLndyYXBfcDp2YWx1ZVwiPlxuICAgICAgICAgICAgICAgIC8vLyBTb21lIG5vbi1wcm9taXNlIHZhbHVlIHRvIGJlIHdyYXBwZWQgaW4gYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3BhcmFtPlxuICAgICAgICAgICAgICAgIC8vLyA8cmV0dXJucyB0eXBlPVwiV2luSlMuUHJvbWlzZVwiIGxvY2lkPVwiV2luSlMuUHJvbWlzZS53cmFwX3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgcHJvbWlzZSB0aGF0IGlzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsZWQgd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlXG4gICAgICAgICAgICAgICAgLy8vIDwvcmV0dXJucz5cbiAgICAgICAgICAgICAgICAvLy8gPC9zaWduYXR1cmU+XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV0ZVByb21pc2UodmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdyYXBFcnJvcjogZnVuY3Rpb24gUHJvbWlzZV93cmFwRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLy8gPHNpZ25hdHVyZSBoZWxwS2V5d29yZD1cIldpbkpTLlByb21pc2Uud3JhcEVycm9yXCI+XG4gICAgICAgICAgICAgICAgLy8vIDxzdW1tYXJ5IGxvY2lkPVwiV2luSlMuUHJvbWlzZS53cmFwRXJyb3JcIj5cbiAgICAgICAgICAgICAgICAvLy8gV3JhcHMgYSBub24tcHJvbWlzZSBlcnJvciB2YWx1ZSBpbiBhIHByb21pc2UuIFlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb24gaWYgeW91IG5lZWRcbiAgICAgICAgICAgICAgICAvLy8gdG8gcGFzcyBhbiBlcnJvciB0byBhIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgYSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZXJyb3JcIiBsb2NpZD1cIldpbkpTLlByb21pc2Uud3JhcEVycm9yX3A6ZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAvLy8gQSBub24tcHJvbWlzZSBlcnJvciB2YWx1ZSB0byBiZSB3cmFwcGVkIGluIGEgcHJvbWlzZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9wYXJhbT5cbiAgICAgICAgICAgICAgICAvLy8gPHJldHVybnMgdHlwZT1cIldpbkpTLlByb21pc2VcIiBsb2NpZD1cIldpbkpTLlByb21pc2Uud3JhcEVycm9yX3JldHVyblZhbHVlXCI+XG4gICAgICAgICAgICAgICAgLy8vIEEgcHJvbWlzZSB0aGF0IGlzIGluIGFuIGVycm9yIHN0YXRlIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAvLy8gPC9yZXR1cm5zPlxuICAgICAgICAgICAgICAgIC8vLyA8L3NpZ25hdHVyZT5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yUHJvbWlzZShlcnJvcik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBfdmVyeUV4cGVuc2l2ZVRhZ1dpdGhTdGFjazoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFnV2l0aFN0YWNrOyB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHRhZ1dpdGhTdGFjayA9IHZhbHVlOyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZlcnlFeHBlbnNpdmVUYWdXaXRoU3RhY2tfdGFnOiB0YWcsXG4gICAgICAgICAgICBfZ2V0U3RhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX0dsb2JhbC5EZWJ1ZyAmJiBfR2xvYmFsLkRlYnVnLmRlYnVnZ2VyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZS5zdGFjazsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF9jYW5jZWxCbG9ja2VyOiBmdW5jdGlvbiBQcm9taXNlX19jYW5jZWxCbG9ja2VyKGlucHV0LCBvbmNhbmNlbCkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggb24gY2FuY2VsYXRpb24gd2lsbCBzdGlsbCByZXN1bHQgaW4gZG93bnN0cmVhbSBjYW5jZWxhdGlvbiB3aGlsZVxuICAgICAgICAgICAgICAgIC8vICBwcm90ZWN0aW5nIHRoZSBwcm9taXNlICdpbnB1dCcgZnJvbSBiZWluZyAgY2FuY2VsZWQgd2hpY2ggaGFzIHRoZSBlZmZlY3Qgb2YgYWxsb3dpbmdcbiAgICAgICAgICAgICAgICAvLyAgJ2lucHV0JyB0byBiZSBzaGFyZWQgYW1vdW5nIHZhcmlvdXMgY29uc3VtZXJzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKCFQcm9taXNlLmlzKGlucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS53cmFwKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gbmV3IFByb21pc2UoXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjLCBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2FuY2VsICYmIG9uY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlucHV0LnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh2KSB7IGNvbXBsZXRlICYmIGNvbXBsZXRlKHYpOyB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBlcnJvciAmJiBlcnJvcihlKTsgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfVxuICAgICk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUHJvbWlzZSwgX0V2ZW50cy5jcmVhdGVFdmVudFByb3BlcnRpZXMoZXJyb3JFVCkpO1xuXG4gICAgUHJvbWlzZS5fZG9uZUhhbmRsZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgX0Jhc2VDb3JlVXRpbHMuX3NldEltbWVkaWF0ZShmdW5jdGlvbiBQcm9taXNlX2RvbmVfcmV0aHJvdygpIHtcbiAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgUHJvbWlzZVN0YXRlTWFjaGluZTogUHJvbWlzZVN0YXRlTWFjaGluZSxcbiAgICAgICAgUHJvbWlzZTogUHJvbWlzZSxcbiAgICAgICAgc3RhdGVfY3JlYXRlZDogc3RhdGVfY3JlYXRlZFxuICAgIH07XG59KTtcblxuX3dpbmpzKFwiV2luSlMvUHJvbWlzZVwiLCBbXCJXaW5KUy9Db3JlL19CYXNlXCIsXCJXaW5KUy9Qcm9taXNlL19TdGF0ZU1hY2hpbmVcIl0sIGZ1bmN0aW9uIHByb21pc2VJbml0KCBfQmFzZSwgX1N0YXRlTWFjaGluZSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgX0Jhc2UuTmFtZXNwYWNlLmRlZmluZShcIldpbkpTXCIsIHtcbiAgICAgICAgUHJvbWlzZTogX1N0YXRlTWFjaGluZS5Qcm9taXNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gX1N0YXRlTWFjaGluZS5Qcm9taXNlO1xufSk7XG5cbl9fd2luanNfZXhwb3J0cyA9IF9tb2R1bGVzW1wiV2luSlMvQ29yZS9fV2luSlNcIl07XG5fX3dpbmpzX2V4cG9ydHMuVFByb21pc2UgPSBfX3dpbmpzX2V4cG9ydHMuUHJvbWlzZTtcbl9fd2luanNfZXhwb3J0cy5QUHJvbWlzZSA9IF9fd2luanNfZXhwb3J0cy5Qcm9taXNlO1xuXG4vLyBFU00tY29tbWVudC1iZWdpblxuLy8gaWYgKHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbi8vICAgICBkZWZpbmUoW10sIF9fd2luanNfZXhwb3J0cyk7XG4vLyB9IGVsc2Uge1xuLy8gICAgIG1vZHVsZS5leHBvcnRzID0gX193aW5qc19leHBvcnRzO1xuLy8gfVxuLy8gRVNNLWNvbW1lbnQtZW5kXG5cbn0pKCk7XG5cbi8vIEVTTS11bmNvbW1lbnQtYmVnaW5cbmV4cG9ydCB2YXIgUHJvbWlzZSA9IF9fd2luanNfZXhwb3J0cy5Qcm9taXNlO1xuZXhwb3J0IHZhciBUUHJvbWlzZSA9IF9fd2luanNfZXhwb3J0cy5UUHJvbWlzZTtcbmV4cG9ydCB2YXIgUFByb21pc2UgPSBfX3dpbmpzX2V4cG9ydHMuUFByb21pc2U7XG4vLyBFU00tdW5jb21tZW50LWVuZFxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IHRyYW5zZm9ybUVycm9yRm9yU2VyaWFsaXphdGlvbiB9IGZyb20gJy4uL2Vycm9ycy5qcyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlIH0gZnJvbSAnLi4vbGlmZWN5Y2xlLmpzJztcbmltcG9ydCB7IFRQcm9taXNlIH0gZnJvbSAnLi4vd2luanMuYmFzZS5qcyc7XG5pbXBvcnQgeyBTaGFsbG93Q2FuY2VsVGhlblByb21pc2UgfSBmcm9tICcuLi9hc3luYy5qcyc7XG5pbXBvcnQgeyBpc1dlYiB9IGZyb20gJy4uL3BsYXRmb3JtLmpzJztcbnZhciBJTklUSUFMSVpFID0gJyRpbml0aWFsaXplJztcbnZhciB3ZWJXb3JrZXJXYXJuaW5nTG9nZ2VkID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gbG9nT25jZVdlYldvcmtlcldhcm5pbmcoZXJyKSB7XG4gICAgaWYgKCFpc1dlYikge1xuICAgICAgICAvLyBydW5uaW5nIHRlc3RzXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF3ZWJXb3JrZXJXYXJuaW5nTG9nZ2VkKSB7XG4gICAgICAgIHdlYldvcmtlcldhcm5pbmdMb2dnZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBjcmVhdGUgd2ViIHdvcmtlcihzKS4gRmFsbGluZyBiYWNrIHRvIGxvYWRpbmcgd2ViIHdvcmtlciBjb2RlIGluIG1haW4gdGhyZWFkLCB3aGljaCBtaWdodCBjYXVzZSBVSSBmcmVlemVzLiBQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvbW9uYWNvLWVkaXRvciNmYXEnKTtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbn1cbnZhciBTaW1wbGVXb3JrZXJQcm90b2NvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaW1wbGVXb3JrZXJQcm90b2NvbChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcklkID0gLTE7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLl9sYXN0U2VudFJlcSA9IDA7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdSZXBsaWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLnNldFdvcmtlcklkID0gZnVuY3Rpb24gKHdvcmtlcklkKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcklkID0gd29ya2VySWQ7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIHZhciByZXEgPSBTdHJpbmcoKyt0aGlzLl9sYXN0U2VudFJlcSk7XG4gICAgICAgIHZhciByZXBseSA9IHtcbiAgICAgICAgICAgIGM6IG51bGwsXG4gICAgICAgICAgICBlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgVFByb21pc2UoZnVuY3Rpb24gKGMsIGUpIHtcbiAgICAgICAgICAgIHJlcGx5LmMgPSBjO1xuICAgICAgICAgICAgcmVwbHkuZSA9IGU7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCBub3Qgc3VwcG9ydGVkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9wZW5kaW5nUmVwbGllc1tyZXFdID0gcmVwbHk7XG4gICAgICAgIHRoaXMuX3NlbmQoe1xuICAgICAgICAgICAgdnNXb3JrZXI6IHRoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgcmVxOiByZXEsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuaGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChzZXJpYWxpemVkTWVzc2FnZSkge1xuICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKHNlcmlhbGl6ZWRNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVzc2FnZSB8fCAhbWVzc2FnZS52c1dvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl93b3JrZXJJZCAhPT0gLTEgJiYgbWVzc2FnZS52c1dvcmtlciAhPT0gdGhpcy5fd29ya2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyUHJvdG9jb2wucHJvdG90eXBlLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobXNnLnNlcSkge1xuICAgICAgICAgICAgdmFyIHJlcGx5TWVzc2FnZSA9IG1zZztcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGVuZGluZ1JlcGxpZXNbcmVwbHlNZXNzYWdlLnNlcV0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0dvdCByZXBseSB0byB1bmtub3duIHNlcScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXBseSA9IHRoaXMuX3BlbmRpbmdSZXBsaWVzW3JlcGx5TWVzc2FnZS5zZXFdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdSZXBsaWVzW3JlcGx5TWVzc2FnZS5zZXFdO1xuICAgICAgICAgICAgaWYgKHJlcGx5TWVzc2FnZS5lcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVwbHlNZXNzYWdlLmVycjtcbiAgICAgICAgICAgICAgICBpZiAocmVwbHlNZXNzYWdlLmVyci4kaXNFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyLm5hbWUgPSByZXBseU1lc3NhZ2UuZXJyLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlID0gcmVwbHlNZXNzYWdlLmVyci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBlcnIuc3RhY2sgPSByZXBseU1lc3NhZ2UuZXJyLnN0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXBseS5lKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVwbHkuYyhyZXBseU1lc3NhZ2UucmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWVzdE1lc3NhZ2UgPSBtc2c7XG4gICAgICAgIHZhciByZXEgPSByZXF1ZXN0TWVzc2FnZS5yZXE7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9oYW5kbGVyLmhhbmRsZU1lc3NhZ2UocmVxdWVzdE1lc3NhZ2UubWV0aG9kLCByZXF1ZXN0TWVzc2FnZS5hcmdzKTtcbiAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIF90aGlzLl9zZW5kKHtcbiAgICAgICAgICAgICAgICB2c1dvcmtlcjogX3RoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgICAgIHNlcTogcmVxLFxuICAgICAgICAgICAgICAgIHJlczogcixcbiAgICAgICAgICAgICAgICBlcnI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5kZXRhaWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIExvYWRpbmcgZXJyb3JzIGhhdmUgYSBkZXRhaWwgcHJvcGVydHkgdGhhdCBwb2ludHMgdG8gdGhlIGFjdHVhbCBlcnJvclxuICAgICAgICAgICAgICAgIGUuZGV0YWlsID0gdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGUuZGV0YWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLl9zZW5kKHtcbiAgICAgICAgICAgICAgICB2c1dvcmtlcjogX3RoaXMuX3dvcmtlcklkLFxuICAgICAgICAgICAgICAgIHNlcTogcmVxLFxuICAgICAgICAgICAgICAgIHJlczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGVycjogdHJhbnNmb3JtRXJyb3JGb3JTZXJpYWxpemF0aW9uKGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTaW1wbGVXb3JrZXJQcm90b2NvbC5wcm90b3R5cGUuX3NlbmQgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHZhciBzdHJNc2cgPSBKU09OLnN0cmluZ2lmeShtc2cpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnU0VORElORzogJyArIHN0ck1zZyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIuc2VuZE1lc3NhZ2Uoc3RyTXNnKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVXb3JrZXJQcm90b2NvbDtcbn0oKSk7XG4vKipcbiAqIE1haW4gdGhyZWFkIHNpZGVcbiAqL1xudmFyIFNpbXBsZVdvcmtlckNsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2ltcGxlV29ya2VyQ2xpZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNpbXBsZVdvcmtlckNsaWVudCh3b3JrZXJGYWN0b3J5LCBtb2R1bGVJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgbGF6eVByb3h5RnVsZmlsbCA9IG51bGw7XG4gICAgICAgIHZhciBsYXp5UHJveHlSZWplY3QgPSBudWxsO1xuICAgICAgICBfdGhpcy5fd29ya2VyID0gX3RoaXMuX3JlZ2lzdGVyKHdvcmtlckZhY3RvcnkuY3JlYXRlKCd2cy9iYXNlL2NvbW1vbi93b3JrZXIvc2ltcGxlV29ya2VyJywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMuX3Byb3RvY29sLmhhbmRsZU1lc3NhZ2UobXNnKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLy8gaW4gRmlyZWZveCwgd2ViIHdvcmtlcnMgZmFpbCBsYXppbHkgOihcbiAgICAgICAgICAgIC8vIHdlIHdpbGwgcmVqZWN0IHRoZSBwcm94eVxuICAgICAgICAgICAgbGF6eVByb3h5UmVqZWN0KGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgX3RoaXMuX3Byb3RvY29sID0gbmV3IFNpbXBsZVdvcmtlclByb3RvY29sKHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3dvcmtlci5wb3N0TWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAvLyBJbnRlbnRpb25hbGx5IG5vdCBzdXBwb3J0aW5nIHdvcmtlciAtPiBtYWluIHJlcXVlc3RzXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRQcm9taXNlLmFzKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuX3Byb3RvY29sLnNldFdvcmtlcklkKF90aGlzLl93b3JrZXIuZ2V0SWQoKSk7XG4gICAgICAgIC8vIEdhdGhlciBsb2FkZXIgY29uZmlndXJhdGlvblxuICAgICAgICB2YXIgbG9hZGVyQ29uZmlndXJhdGlvbiA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5yZXF1aXJlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2VsZi5yZXF1aXJlLmdldENvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBjb25maWd1cmF0aW9uIGZyb20gdGhlIE1vbmFjbyBBTUQgTG9hZGVyXG4gICAgICAgICAgICBsb2FkZXJDb25maWd1cmF0aW9uID0gc2VsZi5yZXF1aXJlLmdldENvbmZpZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxmLnJlcXVpcmVqcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHJlcXVpcmVqc1xuICAgICAgICAgICAgbG9hZGVyQ29uZmlndXJhdGlvbiA9IHNlbGYucmVxdWlyZWpzLnMuY29udGV4dHMuXy5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2xhenlQcm94eSA9IG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYywgZSkge1xuICAgICAgICAgICAgbGF6eVByb3h5RnVsZmlsbCA9IGM7XG4gICAgICAgICAgICBsYXp5UHJveHlSZWplY3QgPSBlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAvLyBTZW5kIGluaXRpYWxpemUgbWVzc2FnZVxuICAgICAgICBfdGhpcy5fb25Nb2R1bGVMb2FkZWQgPSBfdGhpcy5fcHJvdG9jb2wuc2VuZE1lc3NhZ2UoSU5JVElBTElaRSwgW1xuICAgICAgICAgICAgX3RoaXMuX3dvcmtlci5nZXRJZCgpLFxuICAgICAgICAgICAgbW9kdWxlSWQsXG4gICAgICAgICAgICBsb2FkZXJDb25maWd1cmF0aW9uXG4gICAgICAgIF0pO1xuICAgICAgICBfdGhpcy5fb25Nb2R1bGVMb2FkZWQudGhlbihmdW5jdGlvbiAoYXZhaWxhYmxlTWV0aG9kcykge1xuICAgICAgICAgICAgdmFyIHByb3h5ID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF2YWlsYWJsZU1ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm94eVthdmFpbGFibGVNZXRob2RzW2ldXSA9IGNyZWF0ZVByb3h5TWV0aG9kKGF2YWlsYWJsZU1ldGhvZHNbaV0sIHByb3h5TWV0aG9kUmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXp5UHJveHlGdWxmaWxsKHByb3h5KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxhenlQcm94eVJlamVjdChlKTtcbiAgICAgICAgICAgIF90aGlzLl9vbkVycm9yKCdXb3JrZXIgZmFpbGVkIHRvIGxvYWQgJyArIG1vZHVsZUlkLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENyZWF0ZSBwcm94eSB0byBsb2FkZWQgY29kZVxuICAgICAgICB2YXIgcHJveHlNZXRob2RSZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9yZXF1ZXN0KG1ldGhvZCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjcmVhdGVQcm94eU1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QsIHByb3h5TWV0aG9kUmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5TWV0aG9kUmVxdWVzdChtZXRob2QsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTaW1wbGVXb3JrZXJDbGllbnQucHJvdG90eXBlLmdldFByb3h5T2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEbyBub3QgYWxsb3cgY2hhaW5pbmcgcHJvbWlzZXMgdG8gY2FuY2VsIHRoZSBwcm94eSBjcmVhdGlvblxuICAgICAgICByZXR1cm4gbmV3IFNoYWxsb3dDYW5jZWxUaGVuUHJvbWlzZSh0aGlzLl9sYXp5UHJveHkpO1xuICAgIH07XG4gICAgU2ltcGxlV29ya2VyQ2xpZW50LnByb3RvdHlwZS5fcmVxdWVzdCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBUUHJvbWlzZShmdW5jdGlvbiAoYywgZSkge1xuICAgICAgICAgICAgX3RoaXMuX29uTW9kdWxlTG9hZGVkLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wcm90b2NvbC5zZW5kTWVzc2FnZShtZXRob2QsIGFyZ3MpLnRoZW4oYywgZSk7XG4gICAgICAgICAgICB9LCBlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIGludGVudGlvbmFsbHkgbm90IHN1cHBvcnRlZFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlckNsaWVudC5wcm90b3R5cGUuX29uRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKGVycm9yKTtcbiAgICB9O1xuICAgIHJldHVybiBTaW1wbGVXb3JrZXJDbGllbnQ7XG59KERpc3Bvc2FibGUpKTtcbmV4cG9ydCB7IFNpbXBsZVdvcmtlckNsaWVudCB9O1xuLyoqXG4gKiBXb3JrZXIgc2lkZVxuICovXG52YXIgU2ltcGxlV29ya2VyU2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpbXBsZVdvcmtlclNlcnZlcihwb3N0U2VyaWFsaXplZE1lc3NhZ2UsIHJlcXVlc3RIYW5kbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RIYW5kbGVyID0gcmVxdWVzdEhhbmRsZXI7XG4gICAgICAgIHRoaXMuX3Byb3RvY29sID0gbmV3IFNpbXBsZVdvcmtlclByb3RvY29sKHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgcG9zdFNlcmlhbGl6ZWRNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlTWVzc2FnZTogZnVuY3Rpb24gKG1ldGhvZCwgYXJncykgeyByZXR1cm4gX3RoaXMuX2hhbmRsZU1lc3NhZ2UobWV0aG9kLCBhcmdzKTsgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU2ltcGxlV29ya2VyU2VydmVyLnByb3RvdHlwZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHRoaXMuX3Byb3RvY29sLmhhbmRsZU1lc3NhZ2UobXNnKTtcbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUuX2hhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IElOSVRJQUxJWkUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxpemUoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yZXF1ZXN0SGFuZGxlciB8fCB0eXBlb2YgdGhpcy5fcmVxdWVzdEhhbmRsZXJbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIFRQcm9taXNlLndyYXBFcnJvcihuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWVzdEhhbmRsZXIgb3IgbWV0aG9kOiAnICsgbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyh0aGlzLl9yZXF1ZXN0SGFuZGxlclttZXRob2RdLmFwcGx5KHRoaXMuX3JlcXVlc3RIYW5kbGVyLCBhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS53cmFwRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNpbXBsZVdvcmtlclNlcnZlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICh3b3JrZXJJZCwgbW9kdWxlSWQsIGxvYWRlckNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9wcm90b2NvbC5zZXRXb3JrZXJJZCh3b3JrZXJJZCk7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0SGFuZGxlcikge1xuICAgICAgICAgICAgLy8gc3RhdGljIHJlcXVlc3QgaGFuZGxlclxuICAgICAgICAgICAgdmFyIG1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5fcmVxdWVzdEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3JlcXVlc3RIYW5kbGVyW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gVFByb21pc2UuYXMobWV0aG9kcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvYWRlckNvbmZpZykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlICdiYXNlVXJsJywgaGFuZGxpbmcgaXQgaXMgYmV5b25kIHNjb3BlIGZvciBub3dcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGVyQ29uZmlnLmJhc2VVcmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvYWRlckNvbmZpZ1snYmFzZVVybCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2FkZXJDb25maWcucGF0aHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2FkZXJDb25maWcucGF0aHMudnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkZXJDb25maWcucGF0aHNbJ3ZzJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBpcyBpbiBhIHdlYiB3b3JrZXIsIGVuYWJsZSBjYXRjaGluZyBlcnJvcnNcbiAgICAgICAgICAgIGxvYWRlckNvbmZpZy5jYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYucmVxdWlyZS5jb25maWcobG9hZGVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2M7XG4gICAgICAgIHZhciBlZTtcbiAgICAgICAgdmFyIHIgPSBuZXcgVFByb21pc2UoZnVuY3Rpb24gKGMsIGUpIHtcbiAgICAgICAgICAgIGNjID0gYztcbiAgICAgICAgICAgIGVlID0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVzZSB0aGUgZ2xvYmFsIHJlcXVpcmUgdG8gYmUgc3VyZSB0byBnZXQgdGhlIGdsb2JhbCBjb25maWdcbiAgICAgICAgc2VsZi5yZXF1aXJlKFttb2R1bGVJZF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlck1vZHVsZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIF90aGlzLl9yZXF1ZXN0SGFuZGxlciA9IGhhbmRsZXJNb2R1bGUuY3JlYXRlKCk7XG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBfdGhpcy5fcmVxdWVzdEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLl9yZXF1ZXN0SGFuZGxlcltwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2RzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MobWV0aG9kcyk7XG4gICAgICAgIH0sIGVlKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gU2ltcGxlV29ya2VyU2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IFNpbXBsZVdvcmtlclNlcnZlciB9O1xuLyoqXG4gKiBDYWxsZWQgb24gdGhlIHdvcmtlciBzaWRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUocG9zdE1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IFNpbXBsZVdvcmtlclNlcnZlcihwb3N0TWVzc2FnZSwgbnVsbCk7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IHRvVWludDggfSBmcm9tICcuL3VpbnQuanMnO1xuLyoqXG4gKiBBIGZhc3QgY2hhcmFjdGVyIGNsYXNzaWZpZXIgdGhhdCB1c2VzIGEgY29tcGFjdCBhcnJheSBmb3IgQVNDSUkgdmFsdWVzLlxuICovXG52YXIgQ2hhcmFjdGVyQ2xhc3NpZmllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyYWN0ZXJDbGFzc2lmaWVyKF9kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHRvVWludDgoX2RlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy5fYXNjaWlNYXAgPSBDaGFyYWN0ZXJDbGFzc2lmaWVyLl9jcmVhdGVBc2NpaU1hcChkZWZhdWx0VmFsdWUpO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIENoYXJhY3RlckNsYXNzaWZpZXIuX2NyZWF0ZUFzY2lpTWFwID0gZnVuY3Rpb24gKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgYXNjaWlNYXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgICAgICAgICBhc2NpaU1hcFtpXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXNjaWlNYXA7XG4gICAgfTtcbiAgICBDaGFyYWN0ZXJDbGFzc2lmaWVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoY2hhckNvZGUsIF92YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0b1VpbnQ4KF92YWx1ZSk7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDwgMjU2KSB7XG4gICAgICAgICAgICB0aGlzLl9hc2NpaU1hcFtjaGFyQ29kZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21hcC5zZXQoY2hhckNvZGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhcmFjdGVyQ2xhc3NpZmllci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAwICYmIGNoYXJDb2RlIDwgMjU2KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXNjaWlNYXBbY2hhckNvZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXAuZ2V0KGNoYXJDb2RlKSB8fCB0aGlzLl9kZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhcmFjdGVyQ2xhc3NpZmllcjtcbn0oKSk7XG5leHBvcnQgeyBDaGFyYWN0ZXJDbGFzc2lmaWVyIH07XG52YXIgQ2hhcmFjdGVyU2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYXJhY3RlclNldCgpIHtcbiAgICAgICAgdGhpcy5fYWN0dWFsID0gbmV3IENoYXJhY3RlckNsYXNzaWZpZXIoMCAvKiBGYWxzZSAqLyk7XG4gICAgfVxuICAgIENoYXJhY3RlclNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gICAgICAgIHRoaXMuX2FjdHVhbC5zZXQoY2hhckNvZGUsIDEgLyogVHJ1ZSAqLyk7XG4gICAgfTtcbiAgICBDaGFyYWN0ZXJTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChjaGFyQ29kZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2FjdHVhbC5nZXQoY2hhckNvZGUpID09PSAxIC8qIFRydWUgKi8pO1xuICAgIH07XG4gICAgcmV0dXJuIENoYXJhY3RlclNldDtcbn0oKSk7XG5leHBvcnQgeyBDaGFyYWN0ZXJTZXQgfTtcbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBBIHBvc2l0aW9uIGluIHRoZSBlZGl0b3IuXG4gKi9cbnZhciBQb3NpdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb3NpdGlvbihsaW5lTnVtYmVyLCBjb2x1bW4pIHtcbiAgICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhpcyBwb3NpdGlvbiBlcXVhbHMgb3RoZXIgcG9zaXRpb25cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5lcXVhbHModGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgZXF1YWxzIHBvc2l0aW9uIGBiYFxuICAgICAqL1xuICAgIFBvc2l0aW9uLmVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmICghYSAmJiAhYikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICghIWEgJiZcbiAgICAgICAgICAgICEhYiAmJlxuICAgICAgICAgICAgYS5saW5lTnVtYmVyID09PSBiLmxpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEuY29sdW1uID09PSBiLmNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoaXMgcG9zaXRpb24gaXMgYmVmb3JlIG90aGVyIHBvc2l0aW9uLlxuICAgICAqIElmIHRoZSB0d28gcG9zaXRpb25zIGFyZSBlcXVhbCwgdGhlIHJlc3VsdCB3aWxsIGJlIGZhbHNlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS5pc0JlZm9yZSA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICByZXR1cm4gUG9zaXRpb24uaXNCZWZvcmUodGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgaXMgYmVmb3JlIHBvc2l0aW9uIGBiYC5cbiAgICAgKiBJZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgZXF1YWwsIHRoZSByZXN1bHQgd2lsbCBiZSBmYWxzZS5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5pc0JlZm9yZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmxpbmVOdW1iZXIgPCBiLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLmxpbmVOdW1iZXIgPCBhLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5jb2x1bW4gPCBiLmNvbHVtbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhpcyBwb3NpdGlvbiBpcyBiZWZvcmUgb3RoZXIgcG9zaXRpb24uXG4gICAgICogSWYgdGhlIHR3byBwb3NpdGlvbnMgYXJlIGVxdWFsLCB0aGUgcmVzdWx0IHdpbGwgYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuaXNCZWZvcmVPckVxdWFsID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBQb3NpdGlvbi5pc0JlZm9yZU9yRXF1YWwodGhpcywgb3RoZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBgYWAgaXMgYmVmb3JlIHBvc2l0aW9uIGBiYC5cbiAgICAgKiBJZiB0aGUgdHdvIHBvc2l0aW9ucyBhcmUgZXF1YWwsIHRoZSByZXN1bHQgd2lsbCBiZSB0cnVlLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmlzQmVmb3JlT3JFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChhLmxpbmVOdW1iZXIgPCBiLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLmxpbmVOdW1iZXIgPCBhLmxpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5jb2x1bW4gPD0gYi5jb2x1bW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgcG9zaXRpb25zLCB1c2VmdWwgZm9yIHNvcnRpbmdcbiAgICAgKi9cbiAgICBQb3NpdGlvbi5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGFMaW5lTnVtYmVyID0gYS5saW5lTnVtYmVyIHwgMDtcbiAgICAgICAgdmFyIGJMaW5lTnVtYmVyID0gYi5saW5lTnVtYmVyIHwgMDtcbiAgICAgICAgaWYgKGFMaW5lTnVtYmVyID09PSBiTGluZU51bWJlcikge1xuICAgICAgICAgICAgdmFyIGFDb2x1bW4gPSBhLmNvbHVtbiB8IDA7XG4gICAgICAgICAgICB2YXIgYkNvbHVtbiA9IGIuY29sdW1uIHwgMDtcbiAgICAgICAgICAgIHJldHVybiBhQ29sdW1uIC0gYkNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUxpbmVOdW1iZXIgLSBiTGluZU51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb25lIHRoaXMgcG9zaXRpb24uXG4gICAgICovXG4gICAgUG9zaXRpb24ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKHRoaXMubGluZU51bWJlciwgdGhpcy5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29udmVydCB0byBhIGh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcoJyArIHRoaXMubGluZU51bWJlciArICcsJyArIHRoaXMuY29sdW1uICsgJyknO1xuICAgIH07XG4gICAgLy8gLS0tXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFBvc2l0aW9uYCBmcm9tIGFuIGBJUG9zaXRpb25gLlxuICAgICAqL1xuICAgIFBvc2l0aW9uLmxpZnQgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24ocG9zLmxpbmVOdW1iZXIsIHBvcy5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgb2JqYCBpcyBhbiBgSVBvc2l0aW9uYC5cbiAgICAgKi9cbiAgICBQb3NpdGlvbi5pc0lQb3NpdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIChvYmpcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLmxpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmouY29sdW1uID09PSAnbnVtYmVyJykpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvc2l0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFBvc2l0aW9uIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG4vKipcbiAqIEEgcmFuZ2UgaW4gdGhlIGVkaXRvci4gKHN0YXJ0TGluZU51bWJlcixzdGFydENvbHVtbikgaXMgPD0gKGVuZExpbmVOdW1iZXIsZW5kQ29sdW1uKVxuICovXG52YXIgUmFuZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFuZ2Uoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGlmICgoc3RhcnRMaW5lTnVtYmVyID4gZW5kTGluZU51bWJlcikgfHwgKHN0YXJ0TGluZU51bWJlciA9PT0gZW5kTGluZU51bWJlciAmJiBzdGFydENvbHVtbiA+IGVuZENvbHVtbikpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRMaW5lTnVtYmVyID0gZW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICAgICAgICB0aGlzLmVuZExpbmVOdW1iZXIgPSBzdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLmVuZENvbHVtbiA9IHN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydExpbmVOdW1iZXIgPSBzdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29sdW1uID0gc3RhcnRDb2x1bW47XG4gICAgICAgICAgICB0aGlzLmVuZExpbmVOdW1iZXIgPSBlbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHJhbmdlIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmFuZ2UuaXNFbXB0eSh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYHJhbmdlYCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBSYW5nZS5pc0VtcHR5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiAocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIHJhbmdlLnN0YXJ0Q29sdW1uID09PSByYW5nZS5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBwb3NpdGlvbiBpcyBpbiB0aGlzIHJhbmdlLiBJZiB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVkZ2VzLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5jb250YWluc1Bvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5jb250YWluc1Bvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgYHBvc2l0aW9uYCBpcyBpbiBgcmFuZ2VgLiBJZiB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVkZ2VzLCB3aWxsIHJldHVybiB0cnVlLlxuICAgICAqL1xuICAgIFJhbmdlLmNvbnRhaW5zUG9zaXRpb24gPSBmdW5jdGlvbiAocmFuZ2UsIHBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChwb3NpdGlvbi5saW5lTnVtYmVyIDwgcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIHx8IHBvc2l0aW9uLmxpbmVOdW1iZXIgPiByYW5nZS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uLmxpbmVOdW1iZXIgPT09IHJhbmdlLnN0YXJ0TGluZU51bWJlciAmJiBwb3NpdGlvbi5jb2x1bW4gPCByYW5nZS5zdGFydENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbi5saW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIHBvc2l0aW9uLmNvbHVtbiA+IHJhbmdlLmVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiByYW5nZSBpcyBpbiB0aGlzIHJhbmdlLiBJZiB0aGUgcmFuZ2UgaXMgZXF1YWwgdG8gdGhpcyByYW5nZSwgd2lsbCByZXR1cm4gdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuY29udGFpbnNSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gUmFuZ2UuY29udGFpbnNSYW5nZSh0aGlzLCByYW5nZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGBvdGhlclJhbmdlYCBpcyBpbiBgcmFuZ2VgLiBJZiB0aGUgcmFuZ2VzIGFyZSBlcXVhbCwgd2lsbCByZXR1cm4gdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5jb250YWluc1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlLCBvdGhlclJhbmdlKSB7XG4gICAgICAgIGlmIChvdGhlclJhbmdlLnN0YXJ0TGluZU51bWJlciA8IHJhbmdlLnN0YXJ0TGluZU51bWJlciB8fCBvdGhlclJhbmdlLmVuZExpbmVOdW1iZXIgPCByYW5nZS5zdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5zdGFydExpbmVOdW1iZXIgPiByYW5nZS5lbmRMaW5lTnVtYmVyIHx8IG90aGVyUmFuZ2UuZW5kTGluZU51bWJlciA+IHJhbmdlLmVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5zdGFydExpbmVOdW1iZXIgPT09IHJhbmdlLnN0YXJ0TGluZU51bWJlciAmJiBvdGhlclJhbmdlLnN0YXJ0Q29sdW1uIDwgcmFuZ2Uuc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXJSYW5nZS5lbmRMaW5lTnVtYmVyID09PSByYW5nZS5lbmRMaW5lTnVtYmVyICYmIG90aGVyUmFuZ2UuZW5kQ29sdW1uID4gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIHJldW5pb24gb2YgdGhlIHR3byByYW5nZXMuXG4gICAgICogVGhlIHNtYWxsZXN0IHBvc2l0aW9uIHdpbGwgYmUgdXNlZCBhcyB0aGUgc3RhcnQgcG9pbnQsIGFuZCB0aGUgbGFyZ2VzdCBvbmUgYXMgdGhlIGVuZCBwb2ludC5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUucGx1c1JhbmdlID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5wbHVzUmFuZ2UodGhpcywgcmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSByZXVuaW9uIG9mIHRoZSB0d28gcmFuZ2VzLlxuICAgICAqIFRoZSBzbWFsbGVzdCBwb3NpdGlvbiB3aWxsIGJlIHVzZWQgYXMgdGhlIHN0YXJ0IHBvaW50LCBhbmQgdGhlIGxhcmdlc3Qgb25lIGFzIHRoZSBlbmQgcG9pbnQuXG4gICAgICovXG4gICAgUmFuZ2UucGx1c1JhbmdlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIHN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgZW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIGVuZENvbHVtbjtcbiAgICAgICAgaWYgKGIuc3RhcnRMaW5lTnVtYmVyIDwgYS5zdGFydExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlciA9IGIuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgc3RhcnRDb2x1bW4gPSBiLnN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIuc3RhcnRMaW5lTnVtYmVyID09PSBhLnN0YXJ0TGluZU51bWJlcikge1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gYi5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICBzdGFydENvbHVtbiA9IE1hdGgubWluKGIuc3RhcnRDb2x1bW4sIGEuc3RhcnRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyID0gYS5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICBzdGFydENvbHVtbiA9IGEuc3RhcnRDb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIuZW5kTGluZU51bWJlciA+IGEuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgZW5kTGluZU51bWJlciA9IGIuZW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIGVuZENvbHVtbiA9IGIuZW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIuZW5kTGluZU51bWJlciA9PT0gYS5lbmRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBlbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgZW5kQ29sdW1uID0gTWF0aC5tYXgoYi5lbmRDb2x1bW4sIGEuZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZExpbmVOdW1iZXIgPSBhLmVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICBlbmRDb2x1bW4gPSBhLmVuZENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4sIGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGludGVyc2VjdGlvbiBvZiB0aGUgdHdvIHJhbmdlcy5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuaW50ZXJzZWN0UmFuZ2VzID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5pbnRlcnNlY3RSYW5nZXModGhpcywgcmFuZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBpbnRlcnNlY3Rpb24gb2YgdGhlIHR3byByYW5nZXMuXG4gICAgICovXG4gICAgUmFuZ2UuaW50ZXJzZWN0UmFuZ2VzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHJlc3VsdFN0YXJ0TGluZU51bWJlciA9IGEuc3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgcmVzdWx0U3RhcnRDb2x1bW4gPSBhLnN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgcmVzdWx0RW5kTGluZU51bWJlciA9IGEuZW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIHJlc3VsdEVuZENvbHVtbiA9IGEuZW5kQ29sdW1uO1xuICAgICAgICB2YXIgb3RoZXJTdGFydExpbmVOdW1iZXIgPSBiLnN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIG90aGVyU3RhcnRDb2x1bW4gPSBiLnN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgb3RoZXJFbmRMaW5lTnVtYmVyID0gYi5lbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3RoZXJFbmRDb2x1bW4gPSBiLmVuZENvbHVtbjtcbiAgICAgICAgaWYgKHJlc3VsdFN0YXJ0TGluZU51bWJlciA8IG90aGVyU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRTdGFydExpbmVOdW1iZXIgPSBvdGhlclN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgICAgIHJlc3VsdFN0YXJ0Q29sdW1uID0gb3RoZXJTdGFydENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXN1bHRTdGFydExpbmVOdW1iZXIgPT09IG90aGVyU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHRTdGFydENvbHVtbiA9IE1hdGgubWF4KHJlc3VsdFN0YXJ0Q29sdW1uLCBvdGhlclN0YXJ0Q29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0RW5kTGluZU51bWJlciA+IG90aGVyRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0RW5kTGluZU51bWJlciA9IG90aGVyRW5kTGluZU51bWJlcjtcbiAgICAgICAgICAgIHJlc3VsdEVuZENvbHVtbiA9IG90aGVyRW5kQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdEVuZExpbmVOdW1iZXIgPT09IG90aGVyRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0RW5kQ29sdW1uID0gTWF0aC5taW4ocmVzdWx0RW5kQ29sdW1uLCBvdGhlckVuZENvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0aW9uIGlzIG5vdyBlbXB0eVxuICAgICAgICBpZiAocmVzdWx0U3RhcnRMaW5lTnVtYmVyID4gcmVzdWx0RW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdFN0YXJ0TGluZU51bWJlciA9PT0gcmVzdWx0RW5kTGluZU51bWJlciAmJiByZXN1bHRTdGFydENvbHVtbiA+IHJlc3VsdEVuZENvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShyZXN1bHRTdGFydExpbmVOdW1iZXIsIHJlc3VsdFN0YXJ0Q29sdW1uLCByZXN1bHRFbmRMaW5lTnVtYmVyLCByZXN1bHRFbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGlzIHJhbmdlIGVxdWFscyBvdGhlci5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuZXF1YWxzUmFuZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIFJhbmdlLmVxdWFsc1JhbmdlKHRoaXMsIG90aGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgcmFuZ2UgYGFgIGVxdWFscyBgYmAuXG4gICAgICovXG4gICAgUmFuZ2UuZXF1YWxzUmFuZ2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gKCEhYSAmJlxuICAgICAgICAgICAgISFiICYmXG4gICAgICAgICAgICBhLnN0YXJ0TGluZU51bWJlciA9PT0gYi5zdGFydExpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEuc3RhcnRDb2x1bW4gPT09IGIuc3RhcnRDb2x1bW4gJiZcbiAgICAgICAgICAgIGEuZW5kTGluZU51bWJlciA9PT0gYi5lbmRMaW5lTnVtYmVyICYmXG4gICAgICAgICAgICBhLmVuZENvbHVtbiA9PT0gYi5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbmQgcG9zaXRpb24gKHdoaWNoIHdpbGwgYmUgYWZ0ZXIgb3IgZXF1YWwgdG8gdGhlIHN0YXJ0IHBvc2l0aW9uKVxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5nZXRFbmRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLmVuZExpbmVOdW1iZXIsIHRoaXMuZW5kQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RhcnQgcG9zaXRpb24gKHdoaWNoIHdpbGwgYmUgYmVmb3JlIG9yIGVxdWFsIHRvIHRoZSBlbmQgcG9zaXRpb24pXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLmdldFN0YXJ0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5zdGFydExpbmVOdW1iZXIsIHRoaXMuc3RhcnRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRvIGEgdXNlciBwcmVzZW50YWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1snICsgdGhpcy5zdGFydExpbmVOdW1iZXIgKyAnLCcgKyB0aGlzLnN0YXJ0Q29sdW1uICsgJyAtPiAnICsgdGhpcy5lbmRMaW5lTnVtYmVyICsgJywnICsgdGhpcy5lbmRDb2x1bW4gKyAnXSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLCBhbmQgdXNpbmcgZW5kTGluZU51bWJlciBhbmQgZW5kQ29sdW1uIGFzIHRoZSBlbmQgcG9zaXRpb24uXG4gICAgICovXG4gICAgUmFuZ2UucHJvdG90eXBlLnNldEVuZFBvc2l0aW9uID0gZnVuY3Rpb24gKGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbikge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMuc3RhcnRMaW5lTnVtYmVyLCB0aGlzLnN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHJhbmdlIHVzaW5nIHRoaXMgcmFuZ2UncyBlbmQgcG9zaXRpb24sIGFuZCB1c2luZyBzdGFydExpbmVOdW1iZXIgYW5kIHN0YXJ0Q29sdW1uIGFzIHRoZSBzdGFydCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBSYW5nZS5wcm90b3R5cGUuc2V0U3RhcnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2Uoc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbiwgdGhpcy5lbmRMaW5lTnVtYmVyLCB0aGlzLmVuZENvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFJhbmdlLnByb3RvdHlwZS5jb2xsYXBzZVRvU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSYW5nZS5jb2xsYXBzZVRvU3RhcnQodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmFuZ2UgdXNpbmcgdGhpcyByYW5nZSdzIHN0YXJ0IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIFJhbmdlLmNvbGxhcHNlVG9TdGFydCA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2Uuc3RhcnRDb2x1bW4sIHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2Uuc3RhcnRDb2x1bW4pO1xuICAgIH07XG4gICAgLy8gLS0tXG4gICAgUmFuZ2UuZnJvbVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBzdGFydDsgfVxuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0LmNvbHVtbiwgZW5kLmxpbmVOdW1iZXIsIGVuZC5jb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFJhbmdlYCBmcm9tIGFuIGBJUmFuZ2VgLlxuICAgICAqL1xuICAgIFJhbmdlLmxpZnQgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgaWYgKCFyYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS5zdGFydExpbmVOdW1iZXIsIHJhbmdlLnN0YXJ0Q29sdW1uLCByYW5nZS5lbmRMaW5lTnVtYmVyLCByYW5nZS5lbmRDb2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgb2JqYCBpcyBhbiBgSVJhbmdlYC5cbiAgICAgKi9cbiAgICBSYW5nZS5pc0lSYW5nZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIChvYmpcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnN0YXJ0TGluZU51bWJlciA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5zdGFydENvbHVtbiA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5lbmRMaW5lTnVtYmVyID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLmVuZENvbHVtbiA9PT0gJ251bWJlcicpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlc3QgaWYgdGhlIHR3byByYW5nZXMgYXJlIHRvdWNoaW5nIGluIGFueSB3YXkuXG4gICAgICovXG4gICAgUmFuZ2UuYXJlSW50ZXJzZWN0aW5nT3JUb3VjaGluZyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGBhYCBpcyBiZWZvcmUgYGJgXG4gICAgICAgIGlmIChhLmVuZExpbmVOdW1iZXIgPCBiLnN0YXJ0TGluZU51bWJlciB8fCAoYS5lbmRMaW5lTnVtYmVyID09PSBiLnN0YXJ0TGluZU51bWJlciAmJiBhLmVuZENvbHVtbiA8IGIuc3RhcnRDb2x1bW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgYGJgIGlzIGJlZm9yZSBgYWBcbiAgICAgICAgaWYgKGIuZW5kTGluZU51bWJlciA8IGEuc3RhcnRMaW5lTnVtYmVyIHx8IChiLmVuZExpbmVOdW1iZXIgPT09IGEuc3RhcnRMaW5lTnVtYmVyICYmIGIuZW5kQ29sdW1uIDwgYS5zdGFydENvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSByYW5nZXMgbXVzdCBpbnRlcnNlY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSB0d28gcmFuZ2VzIGFyZSBpbnRlcnNlY3RpbmcuIElmIHRoZSByYW5nZXMgYXJlIHRvdWNoaW5nIGl0IHJldHVybnMgdHJ1ZS5cbiAgICAgKi9cbiAgICBSYW5nZS5hcmVJbnRlcnNlY3RpbmcgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBDaGVjayBpZiBgYWAgaXMgYmVmb3JlIGBiYFxuICAgICAgICBpZiAoYS5lbmRMaW5lTnVtYmVyIDwgYi5zdGFydExpbmVOdW1iZXIgfHwgKGEuZW5kTGluZU51bWJlciA9PT0gYi5zdGFydExpbmVOdW1iZXIgJiYgYS5lbmRDb2x1bW4gPD0gYi5zdGFydENvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBgYmAgaXMgYmVmb3JlIGBhYFxuICAgICAgICBpZiAoYi5lbmRMaW5lTnVtYmVyIDwgYS5zdGFydExpbmVOdW1iZXIgfHwgKGIuZW5kTGluZU51bWJlciA9PT0gYS5zdGFydExpbmVOdW1iZXIgJiYgYi5lbmRDb2x1bW4gPD0gYS5zdGFydENvbHVtbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSByYW5nZXMgbXVzdCBpbnRlcnNlY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgY29tcGFyZXMgcmFuZ2VzLCB1c2VmdWwgZm9yIHNvcnRpbmcgcmFuZ2VzXG4gICAgICogSXQgd2lsbCBmaXJzdCBjb21wYXJlIHJhbmdlcyBvbiB0aGUgc3RhcnRQb3NpdGlvbiBhbmQgdGhlbiBvbiB0aGUgZW5kUG9zaXRpb25cbiAgICAgKi9cbiAgICBSYW5nZS5jb21wYXJlUmFuZ2VzVXNpbmdTdGFydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYVN0YXJ0TGluZU51bWJlciA9IGEuc3RhcnRMaW5lTnVtYmVyIHwgMDtcbiAgICAgICAgdmFyIGJTdGFydExpbmVOdW1iZXIgPSBiLnN0YXJ0TGluZU51bWJlciB8IDA7XG4gICAgICAgIGlmIChhU3RhcnRMaW5lTnVtYmVyID09PSBiU3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYVN0YXJ0Q29sdW1uID0gYS5zdGFydENvbHVtbiB8IDA7XG4gICAgICAgICAgICB2YXIgYlN0YXJ0Q29sdW1uID0gYi5zdGFydENvbHVtbiB8IDA7XG4gICAgICAgICAgICBpZiAoYVN0YXJ0Q29sdW1uID09PSBiU3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgYUVuZExpbmVOdW1iZXIgPSBhLmVuZExpbmVOdW1iZXIgfCAwO1xuICAgICAgICAgICAgICAgIHZhciBiRW5kTGluZU51bWJlciA9IGIuZW5kTGluZU51bWJlciB8IDA7XG4gICAgICAgICAgICAgICAgaWYgKGFFbmRMaW5lTnVtYmVyID09PSBiRW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYUVuZENvbHVtbiA9IGEuZW5kQ29sdW1uIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJFbmRDb2x1bW4gPSBiLmVuZENvbHVtbiB8IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhRW5kQ29sdW1uIC0gYkVuZENvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFFbmRMaW5lTnVtYmVyIC0gYkVuZExpbmVOdW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYVN0YXJ0Q29sdW1uIC0gYlN0YXJ0Q29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhU3RhcnRMaW5lTnVtYmVyIC0gYlN0YXJ0TGluZU51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyByYW5nZXMsIHVzZWZ1bCBmb3Igc29ydGluZyByYW5nZXNcbiAgICAgKiBJdCB3aWxsIGZpcnN0IGNvbXBhcmUgcmFuZ2VzIG9uIHRoZSBlbmRQb3NpdGlvbiBhbmQgdGhlbiBvbiB0aGUgc3RhcnRQb3NpdGlvblxuICAgICAqL1xuICAgIFJhbmdlLmNvbXBhcmVSYW5nZXNVc2luZ0VuZHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5lbmRMaW5lTnVtYmVyID09PSBiLmVuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChhLmVuZENvbHVtbiA9PT0gYi5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zdGFydExpbmVOdW1iZXIgPT09IGIuc3RhcnRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN0YXJ0Q29sdW1uIC0gYi5zdGFydENvbHVtbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3RhcnRMaW5lTnVtYmVyIC0gYi5zdGFydExpbmVOdW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYS5lbmRDb2x1bW4gLSBiLmVuZENvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5lbmRMaW5lTnVtYmVyIC0gYi5lbmRMaW5lTnVtYmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiB0aGUgcmFuZ2Ugc3BhbnMgbXVsdGlwbGUgbGluZXMuXG4gICAgICovXG4gICAgUmFuZ2Uuc3BhbnNNdWx0aXBsZUxpbmVzID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgICAgIHJldHVybiByYW5nZS5lbmRMaW5lTnVtYmVyID4gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyO1xuICAgIH07XG4gICAgcmV0dXJuIFJhbmdlO1xufSgpKTtcbmV4cG9ydCB7IFJhbmdlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuL3JhbmdlLmpzJztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi5qcyc7XG4vKipcbiAqIFRoZSBkaXJlY3Rpb24gb2YgYSBzZWxlY3Rpb24uXG4gKi9cbmV4cG9ydCB2YXIgU2VsZWN0aW9uRGlyZWN0aW9uO1xuKGZ1bmN0aW9uIChTZWxlY3Rpb25EaXJlY3Rpb24pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0aW9uIHN0YXJ0cyBhYm92ZSB3aGVyZSBpdCBlbmRzLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbkRpcmVjdGlvbltTZWxlY3Rpb25EaXJlY3Rpb25bXCJMVFJcIl0gPSAwXSA9IFwiTFRSXCI7XG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGlvbiBzdGFydHMgYmVsb3cgd2hlcmUgaXQgZW5kcy5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25EaXJlY3Rpb25bU2VsZWN0aW9uRGlyZWN0aW9uW1wiUlRMXCJdID0gMV0gPSBcIlJUTFwiO1xufSkoU2VsZWN0aW9uRGlyZWN0aW9uIHx8IChTZWxlY3Rpb25EaXJlY3Rpb24gPSB7fSkpO1xuLyoqXG4gKiBBIHNlbGVjdGlvbiBpbiB0aGUgZWRpdG9yLlxuICogVGhlIHNlbGVjdGlvbiBpcyBhIHJhbmdlIHRoYXQgaGFzIGFuIG9yaWVudGF0aW9uLlxuICovXG52YXIgU2VsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHNlbGVjdGlvblN0YXJ0TGluZU51bWJlciwgc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHBvc2l0aW9uTGluZU51bWJlciwgcG9zaXRpb25Db2x1bW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyLCBzZWxlY3Rpb25TdGFydENvbHVtbiwgcG9zaXRpb25MaW5lTnVtYmVyLCBwb3NpdGlvbkNvbHVtbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyID0gc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICBfdGhpcy5zZWxlY3Rpb25TdGFydENvbHVtbiA9IHNlbGVjdGlvblN0YXJ0Q29sdW1uO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbkxpbmVOdW1iZXIgPSBwb3NpdGlvbkxpbmVOdW1iZXI7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uQ29sdW1uID0gcG9zaXRpb25Db2x1bW47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIsIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHRoaXMucG9zaXRpb25MaW5lTnVtYmVyLCB0aGlzLnBvc2l0aW9uQ29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSB0byBhIGh1bWFuLXJlYWRhYmxlIHJlcHJlc2VudGF0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnWycgKyB0aGlzLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciArICcsJyArIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4gKyAnIC0+ICcgKyB0aGlzLnBvc2l0aW9uTGluZU51bWJlciArICcsJyArIHRoaXMucG9zaXRpb25Db2x1bW4gKyAnXSc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIGVxdWFscyBvdGhlciBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5lcXVhbHNTZWxlY3Rpb24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIChTZWxlY3Rpb24uc2VsZWN0aW9uc0VxdWFsKHRoaXMsIG90aGVyKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZXN0IGlmIHRoZSB0d28gc2VsZWN0aW9ucyBhcmUgZXF1YWwuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnNlbGVjdGlvbnNFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYS5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgPT09IGIuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyICYmXG4gICAgICAgICAgICBhLnNlbGVjdGlvblN0YXJ0Q29sdW1uID09PSBiLnNlbGVjdGlvblN0YXJ0Q29sdW1uICYmXG4gICAgICAgICAgICBhLnBvc2l0aW9uTGluZU51bWJlciA9PT0gYi5wb3NpdGlvbkxpbmVOdW1iZXIgJiZcbiAgICAgICAgICAgIGEucG9zaXRpb25Db2x1bW4gPT09IGIucG9zaXRpb25Db2x1bW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGRpcmVjdGlvbnMgKExUUiBvciBSVEwpLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXIgPT09IHRoaXMuc3RhcnRMaW5lTnVtYmVyICYmIHRoaXMuc2VsZWN0aW9uU3RhcnRDb2x1bW4gPT09IHRoaXMuc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3Rpb25EaXJlY3Rpb24uTFRSO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTZWxlY3Rpb25EaXJlY3Rpb24uUlRMO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHNlbGVjdGlvbiB3aXRoIGEgZGlmZmVyZW50IGBwb3NpdGlvbkxpbmVOdW1iZXJgIGFuZCBgcG9zaXRpb25Db2x1bW5gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuc2V0RW5kUG9zaXRpb24gPSBmdW5jdGlvbiAoZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKSB7XG4gICAgICAgIGlmICh0aGlzLmdldERpcmVjdGlvbigpID09PSBTZWxlY3Rpb25EaXJlY3Rpb24uTFRSKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLnN0YXJ0TGluZU51bWJlciwgdGhpcy5zdGFydENvbHVtbiwgZW5kTGluZU51bWJlciwgZW5kQ29sdW1uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4sIHRoaXMuc3RhcnRMaW5lTnVtYmVyLCB0aGlzLnN0YXJ0Q29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcG9zaXRpb24gYXQgYHBvc2l0aW9uTGluZU51bWJlcmAgYW5kIGBwb3NpdGlvbkNvbHVtbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih0aGlzLnBvc2l0aW9uTGluZU51bWJlciwgdGhpcy5wb3NpdGlvbkNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc2VsZWN0aW9uIHdpdGggYSBkaWZmZXJlbnQgYHNlbGVjdGlvblN0YXJ0TGluZU51bWJlcmAgYW5kIGBzZWxlY3Rpb25TdGFydENvbHVtbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5zZXRTdGFydFBvc2l0aW9uID0gZnVuY3Rpb24gKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKCkgPT09IFNlbGVjdGlvbkRpcmVjdGlvbi5MVFIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4sIHRoaXMuZW5kTGluZU51bWJlciwgdGhpcy5lbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuZW5kTGluZU51bWJlciwgdGhpcy5lbmRDb2x1bW4sIHN0YXJ0TGluZU51bWJlciwgc3RhcnRDb2x1bW4pO1xuICAgIH07XG4gICAgLy8gLS0tLVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGBTZWxlY3Rpb25gIGZyb20gb25lIG9yIHR3byBwb3NpdGlvbnNcbiAgICAgKi9cbiAgICBTZWxlY3Rpb24uZnJvbVBvc2l0aW9ucyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSBzdGFydDsgfVxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdGFydC5saW5lTnVtYmVyLCBzdGFydC5jb2x1bW4sIGVuZC5saW5lTnVtYmVyLCBlbmQuY29sdW1uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGBTZWxlY3Rpb25gIGZyb20gYW4gYElTZWxlY3Rpb25gLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5saWZ0U2VsZWN0aW9uID0gZnVuY3Rpb24gKHNlbCkge1xuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihzZWwuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyLCBzZWwuc2VsZWN0aW9uU3RhcnRDb2x1bW4sIHNlbC5wb3NpdGlvbkxpbmVOdW1iZXIsIHNlbC5wb3NpdGlvbkNvbHVtbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBgYWAgZXF1YWxzIGBiYC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24uc2VsZWN0aW9uc0FyckVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgJiYgIWIgfHwgIWEgJiYgYikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYSAmJiAhYikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uc0VxdWFsKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVzdCBpZiBgb2JqYCBpcyBhbiBgSVNlbGVjdGlvbmAuXG4gICAgICovXG4gICAgU2VsZWN0aW9uLmlzSVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIChvYmpcbiAgICAgICAgICAgICYmICh0eXBlb2Ygb2JqLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5zZWxlY3Rpb25TdGFydENvbHVtbiA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAmJiAodHlwZW9mIG9iai5wb3NpdGlvbkxpbmVOdW1iZXIgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgJiYgKHR5cGVvZiBvYmoucG9zaXRpb25Db2x1bW4gPT09ICdudW1iZXInKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgd2l0aCBhIGRpcmVjdGlvbi5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24uY3JlYXRlV2l0aERpcmVjdGlvbiA9IGZ1bmN0aW9uIChzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4sIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBTZWxlY3Rpb25EaXJlY3Rpb24uTFRSKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdGFydExpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uLCBlbmRMaW5lTnVtYmVyLCBlbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0aW9uKGVuZExpbmVOdW1iZXIsIGVuZENvbHVtbiwgc3RhcnRMaW5lTnVtYmVyLCBzdGFydENvbHVtbik7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0aW9uO1xufShSYW5nZSkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBUb2tlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2tlbihvZmZzZXQsIHR5cGUsIGxhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0IHwgMDsgLy8gQHBlcmZcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgICBUb2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnKCcgKyB0aGlzLm9mZnNldCArICcsICcgKyB0aGlzLnR5cGUgKyAnKSc7XG4gICAgfTtcbiAgICByZXR1cm4gVG9rZW47XG59KCkpO1xuZXhwb3J0IHsgVG9rZW4gfTtcbnZhciBUb2tlbml6YXRpb25SZXN1bHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9rZW5pemF0aW9uUmVzdWx0KHRva2VucywgZW5kU3RhdGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMuZW5kU3RhdGUgPSBlbmRTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuaXphdGlvblJlc3VsdDtcbn0oKSk7XG5leHBvcnQgeyBUb2tlbml6YXRpb25SZXN1bHQgfTtcbnZhciBUb2tlbml6YXRpb25SZXN1bHQyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuaXphdGlvblJlc3VsdDIodG9rZW5zLCBlbmRTdGF0ZSkge1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5lbmRTdGF0ZSA9IGVuZFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5pemF0aW9uUmVzdWx0Mjtcbn0oKSk7XG5leHBvcnQgeyBUb2tlbml6YXRpb25SZXN1bHQyIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBVaW50OE1hdHJpeCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVaW50OE1hdHJpeChyb3dzLCBjb2xzLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29scyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3dzICogY29sczsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIH1cbiAgICBVaW50OE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3JvdyAqIHRoaXMuY29scyArIGNvbF07XG4gICAgfTtcbiAgICBVaW50OE1hdHJpeC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kYXRhW3JvdyAqIHRoaXMuY29scyArIGNvbF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBVaW50OE1hdHJpeDtcbn0oKSk7XG5leHBvcnQgeyBVaW50OE1hdHJpeCB9O1xuZXhwb3J0IGZ1bmN0aW9uIHRvVWludDgodikge1xuICAgIGlmICh2IDwgMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHYgPiAyNTUgLyogTUFYX1VJTlRfOCAqLykge1xuICAgICAgICByZXR1cm4gMjU1IC8qIE1BWF9VSU5UXzggKi87XG4gICAgfVxuICAgIHJldHVybiB2IHwgMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1VpbnQzMih2KSB7XG4gICAgaWYgKHYgPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodiA+IDQyOTQ5NjcyOTUgLyogTUFYX1VJTlRfMzIgKi8pIHtcbiAgICAgICAgcmV0dXJuIDQyOTQ5NjcyOTUgLyogTUFYX1VJTlRfMzIgKi87XG4gICAgfVxuICAgIHJldHVybiB2IHwgMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1VpbnQzMkFycmF5KGFycikge1xuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIHZhciByID0gbmV3IFVpbnQzMkFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICByW2ldID0gdG9VaW50MzIoYXJyW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IExjc0RpZmYgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9kaWZmL2RpZmYuanMnO1xuaW1wb3J0ICogYXMgc3RyaW5ncyBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9zdHJpbmdzLmpzJztcbnZhciBNQVhJTVVNX1JVTl9USU1FID0gNTAwMDsgLy8gNSBzZWNvbmRzXG52YXIgTUlOSU1VTV9NQVRDSElOR19DSEFSQUNURVJfTEVOR1RIID0gMztcbmZ1bmN0aW9uIGNvbXB1dGVEaWZmKG9yaWdpbmFsU2VxdWVuY2UsIG1vZGlmaWVkU2VxdWVuY2UsIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSwgcHJldHR5KSB7XG4gICAgdmFyIGRpZmZBbGdvID0gbmV3IExjc0RpZmYob3JpZ2luYWxTZXF1ZW5jZSwgbW9kaWZpZWRTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlKTtcbiAgICByZXR1cm4gZGlmZkFsZ28uQ29tcHV0ZURpZmYocHJldHR5KTtcbn1cbnZhciBMaW5lTWFya2VyU2VxdWVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZU1hcmtlclNlcXVlbmNlKGxpbmVzKSB7XG4gICAgICAgIHZhciBzdGFydENvbHVtbnMgPSBbXTtcbiAgICAgICAgdmFyIGVuZENvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8xID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuZ3RoXzE7IGkrKykge1xuICAgICAgICAgICAgc3RhcnRDb2x1bW5zW2ldID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRGaXJzdE5vbkJsYW5rQ29sdW1uKGxpbmVzW2ldLCAxKTtcbiAgICAgICAgICAgIGVuZENvbHVtbnNbaV0gPSBMaW5lTWFya2VyU2VxdWVuY2UuX2dldExhc3ROb25CbGFua0NvbHVtbihsaW5lc1tpXSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGluZXMgPSBsaW5lcztcbiAgICAgICAgdGhpcy5fc3RhcnRDb2x1bW5zID0gc3RhcnRDb2x1bW5zO1xuICAgICAgICB0aGlzLl9lbmRDb2x1bW5zID0gZW5kQ29sdW1ucztcbiAgICB9XG4gICAgTGluZU1hcmtlclNlcXVlbmNlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5sZW5ndGg7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldEVsZW1lbnRBdEluZGV4ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW2ldLnN1YnN0cmluZyh0aGlzLl9zdGFydENvbHVtbnNbaV0gLSAxLCB0aGlzLl9lbmRDb2x1bW5zW2ldIC0gMSk7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldFN0YXJ0TGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kTGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0Rmlyc3ROb25CbGFua0NvbHVtbiA9IGZ1bmN0aW9uICh0eHQsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICB2YXIgciA9IHN0cmluZ3MuZmlyc3ROb25XaGl0ZXNwYWNlSW5kZXgodHh0KTtcbiAgICAgICAgaWYgKHIgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByICsgMTtcbiAgICB9O1xuICAgIExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0TGFzdE5vbkJsYW5rQ29sdW1uID0gZnVuY3Rpb24gKHR4dCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciByID0gc3RyaW5ncy5sYXN0Tm9uV2hpdGVzcGFjZUluZGV4KHR4dCk7XG4gICAgICAgIGlmIChyID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciArIDI7XG4gICAgfTtcbiAgICBMaW5lTWFya2VyU2VxdWVuY2UucHJvdG90eXBlLmdldENoYXJTZXF1ZW5jZSA9IGZ1bmN0aW9uIChzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdmFyIGNoYXJDb2RlcyA9IFtdO1xuICAgICAgICB2YXIgbGluZU51bWJlcnMgPSBbXTtcbiAgICAgICAgdmFyIGNvbHVtbnMgPSBbXTtcbiAgICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gc3RhcnRJbmRleDsgaW5kZXggPD0gZW5kSW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lQ29udGVudCA9IHRoaXMuX2xpbmVzW2luZGV4XTtcbiAgICAgICAgICAgIHZhciBzdGFydENvbHVtbiA9IChzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSA/IHRoaXMuX3N0YXJ0Q29sdW1uc1tpbmRleF0gOiAxKTtcbiAgICAgICAgICAgIHZhciBlbmRDb2x1bW4gPSAoc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UgPyB0aGlzLl9lbmRDb2x1bW5zW2luZGV4XSA6IGxpbmVDb250ZW50Lmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gc3RhcnRDb2x1bW47IGNvbCA8IGVuZENvbHVtbjsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjaGFyQ29kZXNbbGVuXSA9IGxpbmVDb250ZW50LmNoYXJDb2RlQXQoY29sIC0gMSk7XG4gICAgICAgICAgICAgICAgbGluZU51bWJlcnNbbGVuXSA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb2x1bW5zW2xlbl0gPSBjb2w7XG4gICAgICAgICAgICAgICAgbGVuKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDaGFyU2VxdWVuY2UoY2hhckNvZGVzLCBsaW5lTnVtYmVycywgY29sdW1ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZU1hcmtlclNlcXVlbmNlO1xufSgpKTtcbnZhciBDaGFyU2VxdWVuY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhclNlcXVlbmNlKGNoYXJDb2RlcywgbGluZU51bWJlcnMsIGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5fY2hhckNvZGVzID0gY2hhckNvZGVzO1xuICAgICAgICB0aGlzLl9saW5lTnVtYmVycyA9IGxpbmVOdW1iZXJzO1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICB9XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyQ29kZXMubGVuZ3RoO1xuICAgIH07XG4gICAgQ2hhclNlcXVlbmNlLnByb3RvdHlwZS5nZXRFbGVtZW50QXRJbmRleCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyQ29kZXNbaV07XG4gICAgfTtcbiAgICBDaGFyU2VxdWVuY2UucHJvdG90eXBlLmdldFN0YXJ0TGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lTnVtYmVyc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0U3RhcnRDb2x1bW4gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kTGluZU51bWJlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lTnVtYmVyc1tpXTtcbiAgICB9O1xuICAgIENoYXJTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0RW5kQ29sdW1uID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNbaV0gKyAxO1xuICAgIH07XG4gICAgcmV0dXJuIENoYXJTZXF1ZW5jZTtcbn0oKSk7XG52YXIgQ2hhckNoYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFyQ2hhbmdlKG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbikge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyID0gb3JpZ2luYWxTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTdGFydENvbHVtbiA9IG9yaWdpbmFsU3RhcnRDb2x1bW47XG4gICAgICAgIHRoaXMub3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxFbmRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRW5kQ29sdW1uID0gb3JpZ2luYWxFbmRDb2x1bW47XG4gICAgICAgIHRoaXMubW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0Q29sdW1uID0gbW9kaWZpZWRTdGFydENvbHVtbjtcbiAgICAgICAgdGhpcy5tb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZEVuZExpbmVOdW1iZXI7XG4gICAgICAgIHRoaXMubW9kaWZpZWRFbmRDb2x1bW4gPSBtb2RpZmllZEVuZENvbHVtbjtcbiAgICB9XG4gICAgQ2hhckNoYW5nZS5jcmVhdGVGcm9tRGlmZkNoYW5nZSA9IGZ1bmN0aW9uIChkaWZmQ2hhbmdlLCBvcmlnaW5hbENoYXJTZXF1ZW5jZSwgbW9kaWZpZWRDaGFyU2VxdWVuY2UpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgb3JpZ2luYWxTdGFydENvbHVtbjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kQ29sdW1uO1xuICAgICAgICB2YXIgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI7XG4gICAgICAgIHZhciBtb2RpZmllZFN0YXJ0Q29sdW1uO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRDb2x1bW47XG4gICAgICAgIGlmIChkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0Q29sdW1uID0gMDtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlciA9IDA7XG4gICAgICAgICAgICBvcmlnaW5hbEVuZENvbHVtbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsQ2hhclNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAgICAgb3JpZ2luYWxTdGFydENvbHVtbiA9IG9yaWdpbmFsQ2hhclNlcXVlbmNlLmdldFN0YXJ0Q29sdW1uKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCk7XG4gICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXIgPSBvcmlnaW5hbENoYXJTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kQ29sdW1uID0gb3JpZ2luYWxDaGFyU2VxdWVuY2UuZ2V0RW5kQ29sdW1uKGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbiA9IDA7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSAwO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRDb2x1bW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIgPSBtb2RpZmllZENoYXJTZXF1ZW5jZS5nZXRTdGFydExpbmVOdW1iZXIoZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0KTtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRDb2x1bW4gPSBtb2RpZmllZENoYXJTZXF1ZW5jZS5nZXRTdGFydENvbHVtbihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQpO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gbW9kaWZpZWRDaGFyU2VxdWVuY2UuZ2V0RW5kTGluZU51bWJlcihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbiA9IG1vZGlmaWVkQ2hhclNlcXVlbmNlLmdldEVuZENvbHVtbihkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDaGFyQ2hhbmdlKG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbik7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhckNoYW5nZTtcbn0oKSk7XG5mdW5jdGlvbiBwb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKHJhd0NoYW5nZXMpIHtcbiAgICBpZiAocmF3Q2hhbmdlcy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4gcmF3Q2hhbmdlcztcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IFtyYXdDaGFuZ2VzWzBdXTtcbiAgICB2YXIgcHJldkNoYW5nZSA9IHJlc3VsdFswXTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgY3VyckNoYW5nZSA9IHJhd0NoYW5nZXNbaV07XG4gICAgICAgIHZhciBvcmlnaW5hbE1hdGNoaW5nTGVuZ3RoID0gY3VyckNoYW5nZS5vcmlnaW5hbFN0YXJ0IC0gKHByZXZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIHByZXZDaGFuZ2Uub3JpZ2luYWxMZW5ndGgpO1xuICAgICAgICB2YXIgbW9kaWZpZWRNYXRjaGluZ0xlbmd0aCA9IGN1cnJDaGFuZ2UubW9kaWZpZWRTdGFydCAtIChwcmV2Q2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBwcmV2Q2hhbmdlLm1vZGlmaWVkTGVuZ3RoKTtcbiAgICAgICAgLy8gQm90aCBvZiB0aGUgYWJvdmUgc2hvdWxkIGJlIGVxdWFsLCBidXQgdGhlIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSBtYXkgcHJldmVudCB0aGlzIGZyb20gYmVpbmcgdHJ1ZVxuICAgICAgICB2YXIgbWF0Y2hpbmdMZW5ndGggPSBNYXRoLm1pbihvcmlnaW5hbE1hdGNoaW5nTGVuZ3RoLCBtb2RpZmllZE1hdGNoaW5nTGVuZ3RoKTtcbiAgICAgICAgaWYgKG1hdGNoaW5nTGVuZ3RoIDwgTUlOSU1VTV9NQVRDSElOR19DSEFSQUNURVJfTEVOR1RIKSB7XG4gICAgICAgICAgICAvLyBNZXJnZSB0aGUgY3VycmVudCBjaGFuZ2UgaW50byB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgICAgICBwcmV2Q2hhbmdlLm9yaWdpbmFsTGVuZ3RoID0gKGN1cnJDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGN1cnJDaGFuZ2Uub3JpZ2luYWxMZW5ndGgpIC0gcHJldkNoYW5nZS5vcmlnaW5hbFN0YXJ0O1xuICAgICAgICAgICAgcHJldkNoYW5nZS5tb2RpZmllZExlbmd0aCA9IChjdXJyQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBjdXJyQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoKSAtIHByZXZDaGFuZ2UubW9kaWZpZWRTdGFydDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgY3VycmVudCBjaGFuZ2VcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJDaGFuZ2UpO1xuICAgICAgICAgICAgcHJldkNoYW5nZSA9IGN1cnJDaGFuZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBMaW5lQ2hhbmdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmVDaGFuZ2Uob3JpZ2luYWxTdGFydExpbmVOdW1iZXIsIG9yaWdpbmFsRW5kTGluZU51bWJlciwgbW9kaWZpZWRTdGFydExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kTGluZU51bWJlciwgY2hhckNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRW5kTGluZU51bWJlciA9IG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5tb2RpZmllZFN0YXJ0TGluZU51bWJlciA9IG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB0aGlzLm1vZGlmaWVkRW5kTGluZU51bWJlciA9IG1vZGlmaWVkRW5kTGluZU51bWJlcjtcbiAgICAgICAgdGhpcy5jaGFyQ2hhbmdlcyA9IGNoYXJDaGFuZ2VzO1xuICAgIH1cbiAgICBMaW5lQ2hhbmdlLmNyZWF0ZUZyb21EaWZmUmVzdWx0ID0gZnVuY3Rpb24gKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBkaWZmQ2hhbmdlLCBvcmlnaW5hbExpbmVTZXF1ZW5jZSwgbW9kaWZpZWRMaW5lU2VxdWVuY2UsIGNvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZSwgc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzLCBzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjtcbiAgICAgICAgdmFyIG9yaWdpbmFsRW5kTGluZU51bWJlcjtcbiAgICAgICAgdmFyIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbW9kaWZpZWRFbmRMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgY2hhckNoYW5nZXM7XG4gICAgICAgIGlmIChkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsTGluZVNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpIC0gMTtcbiAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlciA9IG9yaWdpbmFsTGluZVNlcXVlbmNlLmdldFN0YXJ0TGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0RW5kTGluZU51bWJlcihkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQgKyBkaWZmQ2hhbmdlLm9yaWdpbmFsTGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyID0gbW9kaWZpZWRMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCkgLSAxO1xuICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRMaW5lTnVtYmVyID0gbW9kaWZpZWRMaW5lU2VxdWVuY2UuZ2V0U3RhcnRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCk7XG4gICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXIgPSBtb2RpZmllZExpbmVTZXF1ZW5jZS5nZXRFbmRMaW5lTnVtYmVyKGRpZmZDaGFuZ2UubW9kaWZpZWRTdGFydCArIGRpZmZDaGFuZ2UubW9kaWZpZWRMZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzICYmIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggIT09IDAgJiYgZGlmZkNoYW5nZS5tb2RpZmllZExlbmd0aCAhPT0gMCAmJiBjb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUoKSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ2hhclNlcXVlbmNlID0gb3JpZ2luYWxMaW5lU2VxdWVuY2UuZ2V0Q2hhclNlcXVlbmNlKHNob3VsZElnbm9yZVRyaW1XaGl0ZXNwYWNlLCBkaWZmQ2hhbmdlLm9yaWdpbmFsU3RhcnQsIGRpZmZDaGFuZ2Uub3JpZ2luYWxTdGFydCArIGRpZmZDaGFuZ2Uub3JpZ2luYWxMZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZENoYXJTZXF1ZW5jZSA9IG1vZGlmaWVkTGluZVNlcXVlbmNlLmdldENoYXJTZXF1ZW5jZShzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgZGlmZkNoYW5nZS5tb2RpZmllZFN0YXJ0LCBkaWZmQ2hhbmdlLm1vZGlmaWVkU3RhcnQgKyBkaWZmQ2hhbmdlLm1vZGlmaWVkTGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB2YXIgcmF3Q2hhbmdlcyA9IGNvbXB1dGVEaWZmKG9yaWdpbmFsQ2hhclNlcXVlbmNlLCBtb2RpZmllZENoYXJTZXF1ZW5jZSwgY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmF3Q2hhbmdlcyA9IHBvc3RQcm9jZXNzQ2hhckNoYW5nZXMocmF3Q2hhbmdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFyQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8yID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW5ndGhfMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hhckNoYW5nZXMucHVzaChDaGFyQ2hhbmdlLmNyZWF0ZUZyb21EaWZmQ2hhbmdlKHJhd0NoYW5nZXNbaV0sIG9yaWdpbmFsQ2hhclNlcXVlbmNlLCBtb2RpZmllZENoYXJTZXF1ZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgTGluZUNoYW5nZShvcmlnaW5hbFN0YXJ0TGluZU51bWJlciwgb3JpZ2luYWxFbmRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0TGluZU51bWJlciwgbW9kaWZpZWRFbmRMaW5lTnVtYmVyLCBjaGFyQ2hhbmdlcyk7XG4gICAgfTtcbiAgICByZXR1cm4gTGluZUNoYW5nZTtcbn0oKSk7XG52YXIgRGlmZkNvbXB1dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpZmZDb21wdXRlcihvcmlnaW5hbExpbmVzLCBtb2RpZmllZExpbmVzLCBvcHRzKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzID0gb3B0cy5zaG91bGRDb21wdXRlQ2hhckNoYW5nZXM7XG4gICAgICAgIHRoaXMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcyA9IG9wdHMuc2hvdWxkUG9zdFByb2Nlc3NDaGFyQ2hhbmdlcztcbiAgICAgICAgdGhpcy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSA9IG9wdHMuc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2U7XG4gICAgICAgIHRoaXMuc2hvdWxkTWFrZVByZXR0eURpZmYgPSBvcHRzLnNob3VsZE1ha2VQcmV0dHlEaWZmO1xuICAgICAgICB0aGlzLm1heGltdW1SdW5UaW1lTXMgPSBNQVhJTVVNX1JVTl9USU1FO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTGluZXMgPSBvcmlnaW5hbExpbmVzO1xuICAgICAgICB0aGlzLm1vZGlmaWVkTGluZXMgPSBtb2RpZmllZExpbmVzO1xuICAgICAgICB0aGlzLm9yaWdpbmFsID0gbmV3IExpbmVNYXJrZXJTZXF1ZW5jZShvcmlnaW5hbExpbmVzKTtcbiAgICAgICAgdGhpcy5tb2RpZmllZCA9IG5ldyBMaW5lTWFya2VyU2VxdWVuY2UobW9kaWZpZWRMaW5lcyk7XG4gICAgfVxuICAgIERpZmZDb21wdXRlci5wcm90b3R5cGUuY29tcHV0ZURpZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9yaWdpbmFsLmdldExlbmd0aCgpID09PSAxICYmIHRoaXMub3JpZ2luYWwuZ2V0RWxlbWVudEF0SW5kZXgoMCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBvcmlnaW5hbCA9PiBmYXN0IHBhdGhcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyOiAxLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyOiB0aGlzLm1vZGlmaWVkLmdldExlbmd0aCgpLFxuICAgICAgICAgICAgICAgICAgICBjaGFyQ2hhbmdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFN0YXJ0TGluZU51bWJlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVuZExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydENvbHVtbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFN0YXJ0TGluZU51bWJlcjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb2RpZmllZC5nZXRMZW5ndGgoKSA9PT0gMSAmJiB0aGlzLm1vZGlmaWVkLmdldEVsZW1lbnRBdEluZGV4KDApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZW1wdHkgbW9kaWZpZWQgPT4gZmFzdCBwYXRoXG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRW5kTGluZU51bWJlcjogdGhpcy5vcmlnaW5hbC5nZXRMZW5ndGgoKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkRW5kTGluZU51bWJlcjogMSxcbiAgICAgICAgICAgICAgICAgICAgY2hhckNoYW5nZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRFbmRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRTdGFydExpbmVOdW1iZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRMaW5lTnVtYmVyOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3RhcnRDb2x1bW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydExpbmVOdW1iZXI6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wdXRhdGlvblN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciByYXdDaGFuZ2VzID0gY29tcHV0ZURpZmYodGhpcy5vcmlnaW5hbCwgdGhpcy5tb2RpZmllZCwgdGhpcy5fY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLmJpbmQodGhpcyksIHRoaXMuc2hvdWxkTWFrZVByZXR0eURpZmYpO1xuICAgICAgICAvLyBUaGUgZGlmZiBpcyBhbHdheXMgY29tcHV0ZWQgd2l0aCBpZ25vcmluZyB0cmltIHdoaXRlc3BhY2VcbiAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHdlIGdldCB0aGUgcHJldHRpZXN0IGRpZmZcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgIHZhciBsaW5lQ2hhbmdlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aF8zID0gcmF3Q2hhbmdlcy5sZW5ndGg7IGkgPCBsZW5ndGhfMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZUNoYW5nZXMucHVzaChMaW5lQ2hhbmdlLmNyZWF0ZUZyb21EaWZmUmVzdWx0KHRoaXMuc2hvdWxkSWdub3JlVHJpbVdoaXRlc3BhY2UsIHJhd0NoYW5nZXNbaV0sIHRoaXMub3JpZ2luYWwsIHRoaXMubW9kaWZpZWQsIHRoaXMuX2NvbnRpbnVlUHJvY2Vzc2luZ1ByZWRpY2F0ZS5iaW5kKHRoaXMpLCB0aGlzLnNob3VsZENvbXB1dGVDaGFyQ2hhbmdlcywgdGhpcy5zaG91bGRQb3N0UHJvY2Vzc0NoYXJDaGFuZ2VzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGluZUNoYW5nZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTmVlZCB0byBwb3N0LXByb2Nlc3MgYW5kIGludHJvZHVjZSBjaGFuZ2VzIHdoZXJlIHRoZSB0cmltIHdoaXRlc3BhY2UgaXMgZGlmZmVyZW50XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBhcmUgbG9vcGluZyBzdGFydGluZyBhdCAtMSB0byBhbHNvIGNvdmVyIHRoZSBsaW5lcyBiZWZvcmUgdGhlIGZpcnN0IGNoYW5nZVxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBvcmlnaW5hbExpbmVJbmRleCA9IDA7XG4gICAgICAgIHZhciBtb2RpZmllZExpbmVJbmRleCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAtMSAvKiAhISEhICovLCBsZW4gPSByYXdDaGFuZ2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoYW5nZSA9IChpICsgMSA8IGxlbiA/IHJhd0NoYW5nZXNbaSArIDFdIDogbnVsbCk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTdG9wID0gKG5leHRDaGFuZ2UgPyBuZXh0Q2hhbmdlLm9yaWdpbmFsU3RhcnQgOiB0aGlzLm9yaWdpbmFsTGluZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFN0b3AgPSAobmV4dENoYW5nZSA/IG5leHRDaGFuZ2UubW9kaWZpZWRTdGFydCA6IHRoaXMubW9kaWZpZWRMaW5lcy5sZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsTGluZUluZGV4IDwgb3JpZ2luYWxTdG9wICYmIG1vZGlmaWVkTGluZUluZGV4IDwgbW9kaWZpZWRTdG9wKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGluZSA9IHRoaXMub3JpZ2luYWxMaW5lc1tvcmlnaW5hbExpbmVJbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIG1vZGlmaWVkTGluZSA9IHRoaXMubW9kaWZpZWRMaW5lc1ttb2RpZmllZExpbmVJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsTGluZSAhPT0gbW9kaWZpZWRMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIGxpbmVzIGRpZmZlciBvbmx5IGluIHRyaW0gd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgbGVhZGluZyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFN0YXJ0Q29sdW1uID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRGaXJzdE5vbkJsYW5rQ29sdW1uKG9yaWdpbmFsTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRTdGFydENvbHVtbiA9IExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0Rmlyc3ROb25CbGFua0NvbHVtbihtb2RpZmllZExpbmUsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsU3RhcnRDb2x1bW4gPiAxICYmIG1vZGlmaWVkU3RhcnRDb2x1bW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ2hhciA9IG9yaWdpbmFsTGluZS5jaGFyQ29kZUF0KG9yaWdpbmFsU3RhcnRDb2x1bW4gLSAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpZWRDaGFyID0gbW9kaWZpZWRMaW5lLmNoYXJDb2RlQXQobW9kaWZpZWRTdGFydENvbHVtbiAtIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbENoYXIgIT09IG1vZGlmaWVkQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTdGFydENvbHVtbi0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU3RhcnRDb2x1bW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0YXJ0Q29sdW1uID4gMSB8fCBtb2RpZmllZFN0YXJ0Q29sdW1uID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1c2hUcmltV2hpdGVzcGFjZUNoYXJDaGFuZ2UocmVzdWx0LCBvcmlnaW5hbExpbmVJbmRleCArIDEsIDEsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG1vZGlmaWVkTGluZUluZGV4ICsgMSwgMSwgbW9kaWZpZWRTdGFydENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIHRyYWlsaW5nIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsRW5kQ29sdW1uID0gTGluZU1hcmtlclNlcXVlbmNlLl9nZXRMYXN0Tm9uQmxhbmtDb2x1bW4ob3JpZ2luYWxMaW5lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZEVuZENvbHVtbiA9IExpbmVNYXJrZXJTZXF1ZW5jZS5fZ2V0TGFzdE5vbkJsYW5rQ29sdW1uKG1vZGlmaWVkTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxNYXhDb2x1bW4gPSBvcmlnaW5hbExpbmUubGVuZ3RoICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZE1heENvbHVtbiA9IG1vZGlmaWVkTGluZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsRW5kQ29sdW1uIDwgb3JpZ2luYWxNYXhDb2x1bW4gJiYgbW9kaWZpZWRFbmRDb2x1bW4gPCBtb2RpZmllZE1heENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbENoYXIgPSBvcmlnaW5hbExpbmUuY2hhckNvZGVBdChvcmlnaW5hbEVuZENvbHVtbiAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmllZENoYXIgPSBvcmlnaW5hbExpbmUuY2hhckNvZGVBdChtb2RpZmllZEVuZENvbHVtbiAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbENoYXIgIT09IG1vZGlmaWVkQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbmRDb2x1bW4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEVuZENvbHVtbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsRW5kQ29sdW1uIDwgb3JpZ2luYWxNYXhDb2x1bW4gfHwgbW9kaWZpZWRFbmRDb2x1bW4gPCBtb2RpZmllZE1heENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B1c2hUcmltV2hpdGVzcGFjZUNoYXJDaGFuZ2UocmVzdWx0LCBvcmlnaW5hbExpbmVJbmRleCArIDEsIG9yaWdpbmFsRW5kQ29sdW1uLCBvcmlnaW5hbE1heENvbHVtbiwgbW9kaWZpZWRMaW5lSW5kZXggKyAxLCBtb2RpZmllZEVuZENvbHVtbiwgbW9kaWZpZWRNYXhDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsTGluZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRMaW5lSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gRW1pdCB0aGUgYWN0dWFsIGNoYW5nZVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKExpbmVDaGFuZ2UuY3JlYXRlRnJvbURpZmZSZXN1bHQodGhpcy5zaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZSwgbmV4dENoYW5nZSwgdGhpcy5vcmlnaW5hbCwgdGhpcy5tb2RpZmllZCwgdGhpcy5fY29udGludWVQcm9jZXNzaW5nUHJlZGljYXRlLmJpbmQodGhpcyksIHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzLCB0aGlzLnNob3VsZFBvc3RQcm9jZXNzQ2hhckNoYW5nZXMpKTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbExpbmVJbmRleCArPSBuZXh0Q2hhbmdlLm9yaWdpbmFsTGVuZ3RoO1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkTGluZUluZGV4ICs9IG5leHRDaGFuZ2UubW9kaWZpZWRMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIERpZmZDb21wdXRlci5wcm90b3R5cGUuX3B1c2hUcmltV2hpdGVzcGFjZUNoYXJDaGFuZ2UgPSBmdW5jdGlvbiAocmVzdWx0LCBvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsRW5kQ29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkU3RhcnRDb2x1bW4sIG1vZGlmaWVkRW5kQ29sdW1uKSB7XG4gICAgICAgIGlmICh0aGlzLl9tZXJnZVRyaW1XaGl0ZXNwYWNlQ2hhckNoYW5nZShyZXN1bHQsIG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxTdGFydENvbHVtbiwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRFbmRDb2x1bW4pKSB7XG4gICAgICAgICAgICAvLyBNZXJnZWQgaW50byBwcmV2aW91c1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGFyQ2hhbmdlcztcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzKSB7XG4gICAgICAgICAgICBjaGFyQ2hhbmdlcyA9IFtuZXcgQ2hhckNoYW5nZShvcmlnaW5hbExpbmVOdW1iZXIsIG9yaWdpbmFsU3RhcnRDb2x1bW4sIG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxFbmRDb2x1bW4sIG1vZGlmaWVkTGluZU51bWJlciwgbW9kaWZpZWRTdGFydENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZEVuZENvbHVtbildO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKG5ldyBMaW5lQ2hhbmdlKG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxMaW5lTnVtYmVyLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkTGluZU51bWJlciwgY2hhckNoYW5nZXMpKTtcbiAgICB9O1xuICAgIERpZmZDb21wdXRlci5wcm90b3R5cGUuX21lcmdlVHJpbVdoaXRlc3BhY2VDaGFyQ2hhbmdlID0gZnVuY3Rpb24gKHJlc3VsdCwgb3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbFN0YXJ0Q29sdW1uLCBvcmlnaW5hbEVuZENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZEVuZENvbHVtbikge1xuICAgICAgICB2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2Q2hhbmdlID0gcmVzdWx0W2xlbiAtIDFdO1xuICAgICAgICBpZiAocHJldkNoYW5nZS5vcmlnaW5hbEVuZExpbmVOdW1iZXIgPT09IDAgfHwgcHJldkNoYW5nZS5tb2RpZmllZEVuZExpbmVOdW1iZXIgPT09IDApIHtcbiAgICAgICAgICAgIC8vIERvbid0IG1lcmdlIHdpdGggaW5zZXJ0cy9kZWxldGVzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZDaGFuZ2Uub3JpZ2luYWxFbmRMaW5lTnVtYmVyICsgMSA9PT0gb3JpZ2luYWxMaW5lTnVtYmVyICYmIHByZXZDaGFuZ2UubW9kaWZpZWRFbmRMaW5lTnVtYmVyICsgMSA9PT0gbW9kaWZpZWRMaW5lTnVtYmVyKSB7XG4gICAgICAgICAgICBwcmV2Q2hhbmdlLm9yaWdpbmFsRW5kTGluZU51bWJlciA9IG9yaWdpbmFsTGluZU51bWJlcjtcbiAgICAgICAgICAgIHByZXZDaGFuZ2UubW9kaWZpZWRFbmRMaW5lTnVtYmVyID0gbW9kaWZpZWRMaW5lTnVtYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ29tcHV0ZUNoYXJDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgcHJldkNoYW5nZS5jaGFyQ2hhbmdlcy5wdXNoKG5ldyBDaGFyQ2hhbmdlKG9yaWdpbmFsTGluZU51bWJlciwgb3JpZ2luYWxTdGFydENvbHVtbiwgb3JpZ2luYWxMaW5lTnVtYmVyLCBvcmlnaW5hbEVuZENvbHVtbiwgbW9kaWZpZWRMaW5lTnVtYmVyLCBtb2RpZmllZFN0YXJ0Q29sdW1uLCBtb2RpZmllZExpbmVOdW1iZXIsIG1vZGlmaWVkRW5kQ29sdW1uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBEaWZmQ29tcHV0ZXIucHJvdG90eXBlLl9jb250aW51ZVByb2Nlc3NpbmdQcmVkaWNhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1heGltdW1SdW5UaW1lTXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub3cgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICByZXR1cm4gbm93IC0gdGhpcy5jb21wdXRhdGlvblN0YXJ0VGltZSA8IHRoaXMubWF4aW11bVJ1blRpbWVNcztcbiAgICB9O1xuICAgIHJldHVybiBEaWZmQ29tcHV0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRGlmZkNvbXB1dGVyIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyIH0gZnJvbSAnLi4vdmlld01vZGVsL3ByZWZpeFN1bUNvbXB1dGVyLmpzJztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vY29yZS9wb3NpdGlvbi5qcyc7XG52YXIgTWlycm9yVGV4dE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1pcnJvclRleHRNb2RlbCh1cmksIGxpbmVzLCBlb2wsIHZlcnNpb25JZCkge1xuICAgICAgICB0aGlzLl91cmkgPSB1cmk7XG4gICAgICAgIHRoaXMuX2xpbmVzID0gbGluZXM7XG4gICAgICAgIHRoaXMuX2VvbCA9IGVvbDtcbiAgICAgICAgdGhpcy5fdmVyc2lvbklkID0gdmVyc2lvbklkO1xuICAgIH1cbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xpbmVzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5qb2luKHRoaXMuX2VvbCk7XG4gICAgfTtcbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLm9uRXZlbnRzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuZW9sICYmIGUuZW9sICE9PSB0aGlzLl9lb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX2VvbCA9IGUuZW9sO1xuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIG15IGxpbmVzXG4gICAgICAgIHZhciBjaGFuZ2VzID0gZS5jaGFuZ2VzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hhbmdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgICAgICAgICB0aGlzLl9hY2NlcHREZWxldGVSYW5nZShjaGFuZ2UucmFuZ2UpO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXB0SW5zZXJ0VGV4dChuZXcgUG9zaXRpb24oY2hhbmdlLnJhbmdlLnN0YXJ0TGluZU51bWJlciwgY2hhbmdlLnJhbmdlLnN0YXJ0Q29sdW1uKSwgY2hhbmdlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZlcnNpb25JZCA9IGUudmVyc2lvbklkO1xuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fZW5zdXJlTGluZVN0YXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9saW5lU3RhcnRzKSB7XG4gICAgICAgICAgICB2YXIgZW9sTGVuZ3RoID0gdGhpcy5fZW9sLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMuX2xpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBsaW5lU3RhcnRWYWx1ZXMgPSBuZXcgVWludDMyQXJyYXkobGluZXNMZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZVN0YXJ0VmFsdWVzW2ldID0gdGhpcy5fbGluZXNbaV0ubGVuZ3RoICsgZW9sTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cyA9IG5ldyBQcmVmaXhTdW1Db21wdXRlcihsaW5lU3RhcnRWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGwgY2hhbmdlcyB0byBhIGxpbmUncyB0ZXh0IGdvIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgKi9cbiAgICBNaXJyb3JUZXh0TW9kZWwucHJvdG90eXBlLl9zZXRMaW5lVGV4dCA9IGZ1bmN0aW9uIChsaW5lSW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xpbmVzW2xpbmVJbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2xpbmVTdGFydHMpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcmVmaXggc3VtXG4gICAgICAgICAgICB0aGlzLl9saW5lU3RhcnRzLmNoYW5nZVZhbHVlKGxpbmVJbmRleCwgdGhpcy5fbGluZXNbbGluZUluZGV4XS5sZW5ndGggKyB0aGlzLl9lb2wubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fYWNjZXB0RGVsZXRlUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0TGluZU51bWJlciA9PT0gcmFuZ2UuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgaWYgKHJhbmdlLnN0YXJ0Q29sdW1uID09PSByYW5nZS5lbmRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRlbGV0ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlbGV0ZSB0ZXh0IG9uIHRoZSBhZmZlY3RlZCBsaW5lXG4gICAgICAgICAgICB0aGlzLl9zZXRMaW5lVGV4dChyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1tyYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxXS5zdWJzdHJpbmcoMCwgcmFuZ2Uuc3RhcnRDb2x1bW4gLSAxKVxuICAgICAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKHJhbmdlLmVuZENvbHVtbiAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUYWtlIHJlbWFpbmluZyB0ZXh0IG9uIGxhc3QgbGluZSBhbmQgYXBwZW5kIGl0IHRvIHJlbWFpbmluZyB0ZXh0IG9uIGZpcnN0IGxpbmVcbiAgICAgICAgdGhpcy5fc2V0TGluZVRleHQocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMSwgdGhpcy5fbGluZXNbcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHJhbmdlLnN0YXJ0Q29sdW1uIC0gMSlcbiAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcmFuZ2UuZW5kTGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhyYW5nZS5lbmRDb2x1bW4gLSAxKSk7XG4gICAgICAgIC8vIERlbGV0ZSBtaWRkbGUgbGluZXNcbiAgICAgICAgdGhpcy5fbGluZXMuc3BsaWNlKHJhbmdlLnN0YXJ0TGluZU51bWJlciwgcmFuZ2UuZW5kTGluZU51bWJlciAtIHJhbmdlLnN0YXJ0TGluZU51bWJlcik7XG4gICAgICAgIGlmICh0aGlzLl9saW5lU3RhcnRzKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcHJlZml4IHN1bVxuICAgICAgICAgICAgdGhpcy5fbGluZVN0YXJ0cy5yZW1vdmVWYWx1ZXMocmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCByYW5nZS5lbmRMaW5lTnVtYmVyIC0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWlycm9yVGV4dE1vZGVsLnByb3RvdHlwZS5fYWNjZXB0SW5zZXJ0VGV4dCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgaW5zZXJ0VGV4dCkge1xuICAgICAgICBpZiAoaW5zZXJ0VGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gaW5zZXJ0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluc2VydExpbmVzID0gaW5zZXJ0VGV4dC5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAgICAgaWYgKGluc2VydExpbmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSW5zZXJ0aW5nIHRleHQgb24gb25lIGxpbmVcbiAgICAgICAgICAgIHRoaXMuX3NldExpbmVUZXh0KHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHBvc2l0aW9uLmNvbHVtbiAtIDEpXG4gICAgICAgICAgICAgICAgKyBpbnNlcnRMaW5lc1swXVxuICAgICAgICAgICAgICAgICsgdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhwb3NpdGlvbi5jb2x1bW4gLSAxKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIG92ZXJmbG93aW5nIHRleHQgZnJvbSBmaXJzdCBsaW5lIHRvIHRoZSBlbmQgb2YgdGV4dCB0byBpbnNlcnRcbiAgICAgICAgaW5zZXJ0TGluZXNbaW5zZXJ0TGluZXMubGVuZ3RoIC0gMV0gKz0gdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhwb3NpdGlvbi5jb2x1bW4gLSAxKTtcbiAgICAgICAgLy8gRGVsZXRlIG92ZXJmbG93aW5nIHRleHQgZnJvbSBmaXJzdCBsaW5lIGFuZCBpbnNlcnQgdGV4dCBvbiBmaXJzdCBsaW5lXG4gICAgICAgIHRoaXMuX3NldExpbmVUZXh0KHBvc2l0aW9uLmxpbmVOdW1iZXIgLSAxLCB0aGlzLl9saW5lc1twb3NpdGlvbi5saW5lTnVtYmVyIC0gMV0uc3Vic3RyaW5nKDAsIHBvc2l0aW9uLmNvbHVtbiAtIDEpXG4gICAgICAgICAgICArIGluc2VydExpbmVzWzBdKTtcbiAgICAgICAgLy8gSW5zZXJ0IG5ldyBsaW5lcyAmIHN0b3JlIGxlbmd0aHNcbiAgICAgICAgdmFyIG5ld0xlbmd0aHMgPSBuZXcgVWludDMyQXJyYXkoaW5zZXJ0TGluZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaW5zZXJ0TGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2xpbmVzLnNwbGljZShwb3NpdGlvbi5saW5lTnVtYmVyICsgaSAtIDEsIDAsIGluc2VydExpbmVzW2ldKTtcbiAgICAgICAgICAgIG5ld0xlbmd0aHNbaSAtIDFdID0gaW5zZXJ0TGluZXNbaV0ubGVuZ3RoICsgdGhpcy5fZW9sLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGluZVN0YXJ0cykge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHByZWZpeCBzdW1cbiAgICAgICAgICAgIHRoaXMuX2xpbmVTdGFydHMuaW5zZXJ0VmFsdWVzKHBvc2l0aW9uLmxpbmVOdW1iZXIsIG5ld0xlbmd0aHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWlycm9yVGV4dE1vZGVsO1xufSgpKTtcbmV4cG9ydCB7IE1pcnJvclRleHRNb2RlbCB9O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIFVTVUFMX1dPUkRfU0VQQVJBVE9SUyA9ICdgfiFAIyQlXiYqKCktPStbe119XFxcXHw7OlxcJ1wiLC48Pi8/Jztcbi8qKlxuICogQ3JlYXRlIGEgd29yZCBkZWZpbml0aW9uIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZCBvbiBkZWZhdWx0IHdvcmQgc2VwYXJhdG9ycy5cbiAqIE9wdGlvbmFsbHkgcHJvdmlkZSBhbGxvd2VkIHNlcGFyYXRvcnMgdGhhdCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gd29yZHMuXG4gKlxuICogVGhlIGRlZmF1bHQgd291bGQgbG9vayBsaWtlIHRoaXM6XG4gKiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcI1xcJFxcJVxcXlxcJlxcKlxcKFxcKVxcLVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFw/XFxzXSspL2dcbiAqL1xuZnVuY3Rpb24gY3JlYXRlV29yZFJlZ0V4cChhbGxvd0luV29yZHMpIHtcbiAgICBpZiAoYWxsb3dJbldvcmRzID09PSB2b2lkIDApIHsgYWxsb3dJbldvcmRzID0gJyc7IH1cbiAgICB2YXIgc291cmNlID0gJygtP1xcXFxkKlxcXFwuXFxcXGRcXFxcdyopfChbXic7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBVU1VBTF9XT1JEX1NFUEFSQVRPUlMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFsbG93SW5Xb3Jkcy5pbmRleE9mKFVTVUFMX1dPUkRfU0VQQVJBVE9SU1tpXSkgPj0gMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc291cmNlICs9ICdcXFxcJyArIFVTVUFMX1dPUkRfU0VQQVJBVE9SU1tpXTtcbiAgICB9XG4gICAgc291cmNlICs9ICdcXFxcc10rKSc7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc291cmNlLCAnZycpO1xufVxuLy8gY2F0Y2hlcyBudW1iZXJzIChpbmNsdWRpbmcgZmxvYXRpbmcgbnVtYmVycykgaW4gdGhlIGZpcnN0IGdyb3VwLCBhbmQgYWxwaGFudW0gaW4gdGhlIHNlY29uZFxuZXhwb3J0IHZhciBERUZBVUxUX1dPUkRfUkVHRVhQID0gY3JlYXRlV29yZFJlZ0V4cCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVZhbGlkV29yZERlZmluaXRpb24od29yZERlZmluaXRpb24pIHtcbiAgICB2YXIgcmVzdWx0ID0gREVGQVVMVF9XT1JEX1JFR0VYUDtcbiAgICBpZiAod29yZERlZmluaXRpb24gJiYgKHdvcmREZWZpbml0aW9uIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICBpZiAoIXdvcmREZWZpbml0aW9uLmdsb2JhbCkge1xuICAgICAgICAgICAgdmFyIGZsYWdzID0gJ2cnO1xuICAgICAgICAgICAgaWYgKHdvcmREZWZpbml0aW9uLmlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgICAgICBmbGFncyArPSAnaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod29yZERlZmluaXRpb24ubXVsdGlsaW5lKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ20nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlZ0V4cCh3b3JkRGVmaW5pdGlvbi5zb3VyY2UsIGZsYWdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHdvcmREZWZpbml0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRXb3JkQXRQb3NGYXN0KGNvbHVtbiwgd29yZERlZmluaXRpb24sIHRleHQsIHRleHRPZmZzZXQpIHtcbiAgICAvLyBmaW5kIHdoaXRlc3BhY2UgZW5jbG9zZWQgdGV4dCBhcm91bmQgY29sdW1uIGFuZCBtYXRjaCBmcm9tIHRoZXJlXG4gICAgdmFyIHBvcyA9IGNvbHVtbiAtIDEgLSB0ZXh0T2Zmc2V0O1xuICAgIHZhciBzdGFydCA9IHRleHQubGFzdEluZGV4T2YoJyAnLCBwb3MgLSAxKSArIDE7XG4gICAgdmFyIGVuZCA9IHRleHQuaW5kZXhPZignICcsIHBvcyk7XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgZW5kID0gdGV4dC5sZW5ndGg7XG4gICAgfVxuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IHN0YXJ0O1xuICAgIHZhciBtYXRjaDtcbiAgICB3aGlsZSAobWF0Y2ggPSB3b3JkRGVmaW5pdGlvbi5leGVjKHRleHQpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleCA8PSBwb3MgJiYgd29yZERlZmluaXRpb24ubGFzdEluZGV4ID49IHBvcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3b3JkOiBtYXRjaFswXSxcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogdGV4dE9mZnNldCArIDEgKyBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgd29yZERlZmluaXRpb24ubGFzdEluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0V29yZEF0UG9zU2xvdyhjb2x1bW4sIHdvcmREZWZpbml0aW9uLCB0ZXh0LCB0ZXh0T2Zmc2V0KSB7XG4gICAgLy8gbWF0Y2hlcyBhbGwgd29yZHMgc3RhcnRpbmcgYXQgdGhlIGJlZ2lubmluZ1xuICAgIC8vIG9mIHRoZSBpbnB1dCB1bnRpbCBpdCBmaW5kcyBhIG1hdGNoIHRoYXQgZW5jbG9zZXNcbiAgICAvLyB0aGUgZGVzaXJlZCBjb2x1bW4uIHNsb3cgYnV0IGNvcnJlY3RcbiAgICB2YXIgcG9zID0gY29sdW1uIC0gMSAtIHRleHRPZmZzZXQ7XG4gICAgd29yZERlZmluaXRpb24ubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgbWF0Y2g7XG4gICAgd2hpbGUgKG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyh0ZXh0KSkge1xuICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBwb3MpIHtcbiAgICAgICAgICAgIC8vIHxuVyAtPiBtYXRjaGVkIG9ubHkgYWZ0ZXIgdGhlIHBvc1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod29yZERlZmluaXRpb24ubGFzdEluZGV4ID49IHBvcykge1xuICAgICAgICAgICAgLy8gV3xXIC0+IG1hdGNoIGVuY2xvc2VzIHBvc1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3b3JkOiBtYXRjaFswXSxcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogdGV4dE9mZnNldCArIDEgKyBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHRleHRPZmZzZXQgKyAxICsgd29yZERlZmluaXRpb24ubGFzdEluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdvcmRBdFRleHQoY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCkge1xuICAgIC8vIGlmIGB3b3Jkc2AgY2FuIGNvbnRhaW4gd2hpdGVzcGFjZSBjaGFyYWN0ZXIgd2UgaGF2ZSB0byB1c2UgdGhlIHNsb3cgdmFyaWFudFxuICAgIC8vIG90aGVyd2lzZSB3ZSB1c2UgdGhlIGZhc3QgdmFyaWFudCBvZiBmaW5kaW5nIGEgd29yZFxuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIG1hdGNoID0gd29yZERlZmluaXRpb24uZXhlYyh0ZXh0KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyB0b2RvQGpvaCB0aGUgYG1hdGNoYCBjb3VsZCBhbHJlYWR5IGJlIHRoZSAoZmlyc3QpIHdvcmRcbiAgICB2YXIgcmV0ID0gbWF0Y2hbMF0uaW5kZXhPZignICcpID49IDBcbiAgICAgICAgLy8gZGlkIG1hdGNoIGEgd29yZCB3aGljaCBjb250YWlucyBhIHNwYWNlIGNoYXJhY3RlciAtPiB1c2Ugc2xvdyB3b3JkIGZpbmRcbiAgICAgICAgPyBnZXRXb3JkQXRQb3NTbG93KGNvbHVtbiwgd29yZERlZmluaXRpb24sIHRleHQsIHRleHRPZmZzZXQpXG4gICAgICAgIC8vIHNhbmUgd29yZCBkZWZpbml0aW9uIC0+IHVzZSBmYXN0IHdvcmQgZmluZFxuICAgICAgICA6IGdldFdvcmRBdFBvc0Zhc3QoY29sdW1uLCB3b3JkRGVmaW5pdGlvbiwgdGV4dCwgdGV4dE9mZnNldCk7XG4gICAgLy8gYm90aCAoZ2V0V29yZEF0UG9zRmFzdCBhbmQgZ2V0V29yZEF0UG9zU2xvdykgbGVhdmUgdGhlIHdvcmREZWZpbml0aW9uLVJlZ0V4cFxuICAgIC8vIGluIGFuIHVuZGVmaW5lZCBzdGF0ZSBhbmQgdG8gbm90IGNvbmZ1c2Ugb3RoZXIgdXNlcnMgb2YgdGhlIHdvcmREZWZpbml0aW9uXG4gICAgLy8gd2UgcmVzZXQgdGhlIGxhc3RJbmRleFxuICAgIHdvcmREZWZpbml0aW9uLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHJldDtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyQ2xhc3NpZmllciB9IGZyb20gJy4uL2NvcmUvY2hhcmFjdGVyQ2xhc3NpZmllci5qcyc7XG5pbXBvcnQgeyBVaW50OE1hdHJpeCB9IGZyb20gJy4uL2NvcmUvdWludC5qcyc7XG52YXIgU3RhdGVNYWNoaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRlTWFjaGluZShlZGdlcykge1xuICAgICAgICB2YXIgbWF4Q2hhckNvZGUgPSAwO1xuICAgICAgICB2YXIgbWF4U3RhdGUgPSAwIC8qIEludmFsaWQgKi87XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlZGdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIF9hID0gZWRnZXNbaV0sIGZyb20gPSBfYVswXSwgY2hDb2RlID0gX2FbMV0sIHRvID0gX2FbMl07XG4gICAgICAgICAgICBpZiAoY2hDb2RlID4gbWF4Q2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICBtYXhDaGFyQ29kZSA9IGNoQ29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBtYXhTdGF0ZSA9IGZyb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG8gPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgICAgIG1heFN0YXRlID0gdG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF4Q2hhckNvZGUrKztcbiAgICAgICAgbWF4U3RhdGUrKztcbiAgICAgICAgdmFyIHN0YXRlcyA9IG5ldyBVaW50OE1hdHJpeChtYXhTdGF0ZSwgbWF4Q2hhckNvZGUsIDAgLyogSW52YWxpZCAqLyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlZGdlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIF9iID0gZWRnZXNbaV0sIGZyb20gPSBfYlswXSwgY2hDb2RlID0gX2JbMV0sIHRvID0gX2JbMl07XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KGZyb20sIGNoQ29kZSwgdG8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlcyA9IHN0YXRlcztcbiAgICAgICAgdGhpcy5fbWF4Q2hhckNvZGUgPSBtYXhDaGFyQ29kZTtcbiAgICB9XG4gICAgU3RhdGVNYWNoaW5lLnByb3RvdHlwZS5uZXh0U3RhdGUgPSBmdW5jdGlvbiAoY3VycmVudFN0YXRlLCBjaENvZGUpIHtcbiAgICAgICAgaWYgKGNoQ29kZSA8IDAgfHwgY2hDb2RlID49IHRoaXMuX21heENoYXJDb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gMCAvKiBJbnZhbGlkICovO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZXMuZ2V0KGN1cnJlbnRTdGF0ZSwgY2hDb2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0ZU1hY2hpbmU7XG59KCkpO1xuLy8gU3RhdGUgbWFjaGluZSBmb3IgaHR0cDovLyBvciBodHRwczovLyBvciBmaWxlOi8vXG52YXIgX3N0YXRlTWFjaGluZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRTdGF0ZU1hY2hpbmUoKSB7XG4gICAgaWYgKF9zdGF0ZU1hY2hpbmUgPT09IG51bGwpIHtcbiAgICAgICAgX3N0YXRlTWFjaGluZSA9IG5ldyBTdGF0ZU1hY2hpbmUoW1xuICAgICAgICAgICAgWzEgLyogU3RhcnQgKi8sIDEwNCAvKiBoICovLCAyIC8qIEggKi9dLFxuICAgICAgICAgICAgWzEgLyogU3RhcnQgKi8sIDcyIC8qIEggKi8sIDIgLyogSCAqL10sXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgMTAyIC8qIGYgKi8sIDYgLyogRiAqL10sXG4gICAgICAgICAgICBbMSAvKiBTdGFydCAqLywgNzAgLyogRiAqLywgNiAvKiBGICovXSxcbiAgICAgICAgICAgIFsyIC8qIEggKi8sIDExNiAvKiB0ICovLCAzIC8qIEhUICovXSxcbiAgICAgICAgICAgIFsyIC8qIEggKi8sIDg0IC8qIFQgKi8sIDMgLyogSFQgKi9dLFxuICAgICAgICAgICAgWzMgLyogSFQgKi8sIDExNiAvKiB0ICovLCA0IC8qIEhUVCAqL10sXG4gICAgICAgICAgICBbMyAvKiBIVCAqLywgODQgLyogVCAqLywgNCAvKiBIVFQgKi9dLFxuICAgICAgICAgICAgWzQgLyogSFRUICovLCAxMTIgLyogcCAqLywgNSAvKiBIVFRQICovXSxcbiAgICAgICAgICAgIFs0IC8qIEhUVCAqLywgODAgLyogUCAqLywgNSAvKiBIVFRQICovXSxcbiAgICAgICAgICAgIFs1IC8qIEhUVFAgKi8sIDExNSAvKiBzICovLCA5IC8qIEJlZm9yZUNvbG9uICovXSxcbiAgICAgICAgICAgIFs1IC8qIEhUVFAgKi8sIDgzIC8qIFMgKi8sIDkgLyogQmVmb3JlQ29sb24gKi9dLFxuICAgICAgICAgICAgWzUgLyogSFRUUCAqLywgNTggLyogQ29sb24gKi8sIDEwIC8qIEFmdGVyQ29sb24gKi9dLFxuICAgICAgICAgICAgWzYgLyogRiAqLywgMTA1IC8qIGkgKi8sIDcgLyogRkkgKi9dLFxuICAgICAgICAgICAgWzYgLyogRiAqLywgNzMgLyogSSAqLywgNyAvKiBGSSAqL10sXG4gICAgICAgICAgICBbNyAvKiBGSSAqLywgMTA4IC8qIGwgKi8sIDggLyogRklMICovXSxcbiAgICAgICAgICAgIFs3IC8qIEZJICovLCA3NiAvKiBMICovLCA4IC8qIEZJTCAqL10sXG4gICAgICAgICAgICBbOCAvKiBGSUwgKi8sIDEwMSAvKiBlICovLCA5IC8qIEJlZm9yZUNvbG9uICovXSxcbiAgICAgICAgICAgIFs4IC8qIEZJTCAqLywgNjkgLyogRSAqLywgOSAvKiBCZWZvcmVDb2xvbiAqL10sXG4gICAgICAgICAgICBbOSAvKiBCZWZvcmVDb2xvbiAqLywgNTggLyogQ29sb24gKi8sIDEwIC8qIEFmdGVyQ29sb24gKi9dLFxuICAgICAgICAgICAgWzEwIC8qIEFmdGVyQ29sb24gKi8sIDQ3IC8qIFNsYXNoICovLCAxMSAvKiBBbG1vc3RUaGVyZSAqL10sXG4gICAgICAgICAgICBbMTEgLyogQWxtb3N0VGhlcmUgKi8sIDQ3IC8qIFNsYXNoICovLCAxMiAvKiBFbmQgKi9dLFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIF9zdGF0ZU1hY2hpbmU7XG59XG52YXIgX2NsYXNzaWZpZXIgPSBudWxsO1xuZnVuY3Rpb24gZ2V0Q2xhc3NpZmllcigpIHtcbiAgICBpZiAoX2NsYXNzaWZpZXIgPT09IG51bGwpIHtcbiAgICAgICAgX2NsYXNzaWZpZXIgPSBuZXcgQ2hhcmFjdGVyQ2xhc3NpZmllcigwIC8qIE5vbmUgKi8pO1xuICAgICAgICB2YXIgRk9SQ0VfVEVSTUlOQVRJT05fQ0hBUkFDVEVSUyA9ICcgXFx0PD5cXCdcXFwi44CB44CC772h772k77yM77yO77ya77yb77yf77yB77yg77yD77yE77yF77yG77yK4oCY4oCc44CI44CK44CM44CO44CQ44CU77yI77y7772b772i772j772d77y977yJ44CV44CR44CP44CN44CL44CJ4oCd4oCZ772A772e4oCmJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBGT1JDRV9URVJNSU5BVElPTl9DSEFSQUNURVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfY2xhc3NpZmllci5zZXQoRk9SQ0VfVEVSTUlOQVRJT05fQ0hBUkFDVEVSUy5jaGFyQ29kZUF0KGkpLCAxIC8qIEZvcmNlVGVybWluYXRpb24gKi8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBDQU5OT1RfRU5EX1dJVEhfQ0hBUkFDVEVSUyA9ICcuLDsnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IENBTk5PVF9FTkRfV0lUSF9DSEFSQUNURVJTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfY2xhc3NpZmllci5zZXQoQ0FOTk9UX0VORF9XSVRIX0NIQVJBQ1RFUlMuY2hhckNvZGVBdChpKSwgMiAvKiBDYW5ub3RFbmRJbiAqLyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9jbGFzc2lmaWVyO1xufVxudmFyIExpbmtDb21wdXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMaW5rQ29tcHV0ZXIoKSB7XG4gICAgfVxuICAgIExpbmtDb21wdXRlci5fY3JlYXRlTGluayA9IGZ1bmN0aW9uIChjbGFzc2lmaWVyLCBsaW5lLCBsaW5lTnVtYmVyLCBsaW5rQmVnaW5JbmRleCwgbGlua0VuZEluZGV4KSB7XG4gICAgICAgIC8vIERvIG5vdCBhbGxvdyB0byBlbmQgbGluayBpbiBjZXJ0YWluIGNoYXJhY3RlcnMuLi5cbiAgICAgICAgdmFyIGxhc3RJbmNsdWRlZENoYXJJbmRleCA9IGxpbmtFbmRJbmRleCAtIDE7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHZhciBjaENvZGUgPSBsaW5lLmNoYXJDb2RlQXQobGFzdEluY2x1ZGVkQ2hhckluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaENsYXNzID0gY2xhc3NpZmllci5nZXQoY2hDb2RlKTtcbiAgICAgICAgICAgIGlmIChjaENsYXNzICE9PSAyIC8qIENhbm5vdEVuZEluICovKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5jbHVkZWRDaGFySW5kZXgtLTtcbiAgICAgICAgfSB3aGlsZSAobGFzdEluY2x1ZGVkQ2hhckluZGV4ID4gbGlua0JlZ2luSW5kZXgpO1xuICAgICAgICAvLyBIYW5kbGUgbGlua3MgZW5jbG9zZWQgaW4gcGFyZW5zLCBzcXVhcmUgYnJhY2tldHMgYW5kIGN1cmx5cy5cbiAgICAgICAgaWYgKGxpbmtCZWdpbkluZGV4ID4gMCkge1xuICAgICAgICAgICAgdmFyIGNoYXJDb2RlQmVmb3JlTGluayA9IGxpbmUuY2hhckNvZGVBdChsaW5rQmVnaW5JbmRleCAtIDEpO1xuICAgICAgICAgICAgdmFyIGxhc3RDaGFyQ29kZUluTGluayA9IGxpbmUuY2hhckNvZGVBdChsYXN0SW5jbHVkZWRDaGFySW5kZXgpO1xuICAgICAgICAgICAgaWYgKChjaGFyQ29kZUJlZm9yZUxpbmsgPT09IDQwIC8qIE9wZW5QYXJlbiAqLyAmJiBsYXN0Q2hhckNvZGVJbkxpbmsgPT09IDQxIC8qIENsb3NlUGFyZW4gKi8pXG4gICAgICAgICAgICAgICAgfHwgKGNoYXJDb2RlQmVmb3JlTGluayA9PT0gOTEgLyogT3BlblNxdWFyZUJyYWNrZXQgKi8gJiYgbGFzdENoYXJDb2RlSW5MaW5rID09PSA5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi8pXG4gICAgICAgICAgICAgICAgfHwgKGNoYXJDb2RlQmVmb3JlTGluayA9PT0gMTIzIC8qIE9wZW5DdXJseUJyYWNlICovICYmIGxhc3RDaGFyQ29kZUluTGluayA9PT0gMTI1IC8qIENsb3NlQ3VybHlCcmFjZSAqLykpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluICkgaWYgKCBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluIF0gaWYgWyBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZW5kIGluIH0gaWYgeyBpcyBiZWZvcmUgdGhlIGxpbmsgc3RhcnRcbiAgICAgICAgICAgICAgICBsYXN0SW5jbHVkZWRDaGFySW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IGxpbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IGxpbmtCZWdpbkluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICBlbmRMaW5lTnVtYmVyOiBsaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogbGFzdEluY2x1ZGVkQ2hhckluZGV4ICsgMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogbGluZS5zdWJzdHJpbmcobGlua0JlZ2luSW5kZXgsIGxhc3RJbmNsdWRlZENoYXJJbmRleCArIDEpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBMaW5rQ29tcHV0ZXIuY29tcHV0ZUxpbmtzID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBzdGF0ZU1hY2hpbmUgPSBnZXRTdGF0ZU1hY2hpbmUoKTtcbiAgICAgICAgdmFyIGNsYXNzaWZpZXIgPSBnZXRDbGFzc2lmaWVyKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxpbmVDb3VudCA9IG1vZGVsLmdldExpbmVDb3VudCgpOyBpIDw9IGxpbmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IG1vZGVsLmdldExpbmVDb250ZW50KGkpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpbmUubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICAgICAgdmFyIGxpbmtCZWdpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBsaW5rQmVnaW5DaENvZGUgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gMSAvKiBTdGFydCAqLztcbiAgICAgICAgICAgIHZhciBoYXNPcGVuUGFyZW5zID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaGFzT3BlblNxdWFyZUJyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBoYXNPcGVuQ3VybHlCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciByZXNldFN0YXRlTWFjaGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjaENvZGUgPSBsaW5lLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAxMyAvKiBBY2NlcHQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoQ2xhc3MgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwIC8qIE9wZW5QYXJlbiAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuUGFyZW5zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MSAvKiBDbG9zZVBhcmVuICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAoaGFzT3BlblBhcmVucyA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDkxIC8qIE9wZW5TcXVhcmVCcmFja2V0ICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc09wZW5TcXVhcmVCcmFja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5MyAvKiBDbG9zZVNxdWFyZUJyYWNrZXQgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IChoYXNPcGVuU3F1YXJlQnJhY2tldCA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyMyAvKiBPcGVuQ3VybHlCcmFjZSAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNPcGVuQ3VybHlCcmFja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gMCAvKiBOb25lICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjUgLyogQ2xvc2VDdXJseUJyYWNlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAoaGFzT3BlbkN1cmx5QnJhY2tldCA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBUaGUgZm9sbG93aW5nIHRocmVlIHJ1bGVzIG1ha2UgaXQgdGhhdCAnIG9yIFwiIG9yIGAgYXJlIGFsbG93ZWQgaW5zaWRlIGxpbmtzIGlmIHRoZSBsaW5rIGJlZ2FuIHdpdGggYSBkaWZmZXJlbnQgb25lICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM5IC8qIFNpbmdsZVF1b3RlICovOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSAobGlua0JlZ2luQ2hDb2RlID09PSAzNCAvKiBEb3VibGVRdW90ZSAqLyB8fCBsaW5rQmVnaW5DaENvZGUgPT09IDk2IC8qIEJhY2tUaWNrICovKSA/IDAgLyogTm9uZSAqLyA6IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzQgLyogRG91YmxlUXVvdGUgKi86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hDbGFzcyA9IChsaW5rQmVnaW5DaENvZGUgPT09IDM5IC8qIFNpbmdsZVF1b3RlICovIHx8IGxpbmtCZWdpbkNoQ29kZSA9PT0gOTYgLyogQmFja1RpY2sgKi8pID8gMCAvKiBOb25lICovIDogMSAvKiBGb3JjZVRlcm1pbmF0aW9uICovO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5NiAvKiBCYWNrVGljayAqLzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaENsYXNzID0gKGxpbmtCZWdpbkNoQ29kZSA9PT0gMzkgLyogU2luZ2xlUXVvdGUgKi8gfHwgbGlua0JlZ2luQ2hDb2RlID09PSAzNCAvKiBEb3VibGVRdW90ZSAqLykgPyAwIC8qIE5vbmUgKi8gOiAxIC8qIEZvcmNlVGVybWluYXRpb24gKi87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoQ2xhc3MgPSBjbGFzc2lmaWVyLmdldChjaENvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGNoYXJhY3RlciB0ZXJtaW5hdGVzIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoQ2xhc3MgPT09IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goTGlua0NvbXB1dGVyLl9jcmVhdGVMaW5rKGNsYXNzaWZpZXIsIGxpbmUsIGksIGxpbmtCZWdpbkluZGV4LCBqKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFN0YXRlTWFjaGluZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDEyIC8qIEVuZCAqLykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hDbGFzcyA9IGNsYXNzaWZpZXIuZ2V0KGNoQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGNoYXJhY3RlciB0ZXJtaW5hdGVzIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoQ2xhc3MgPT09IDEgLyogRm9yY2VUZXJtaW5hdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRTdGF0ZU1hY2hpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAxMyAvKiBBY2NlcHQgKi87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gc3RhdGVNYWNoaW5lLm5leHRTdGF0ZShzdGF0ZSwgY2hDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwIC8qIEludmFsaWQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0U3RhdGVNYWNoaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTdGF0ZU1hY2hpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAxIC8qIFN0YXJ0ICovO1xuICAgICAgICAgICAgICAgICAgICBoYXNPcGVuUGFyZW5zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGhhc09wZW5TcXVhcmVCcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGhhc09wZW5DdXJseUJyYWNrZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjb3JkIHdoZXJlIHRoZSBsaW5rIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGlua0JlZ2luSW5kZXggPSBqICsgMTtcbiAgICAgICAgICAgICAgICAgICAgbGlua0JlZ2luQ2hDb2RlID0gY2hDb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDEzIC8qIEFjY2VwdCAqLykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKExpbmtDb21wdXRlci5fY3JlYXRlTGluayhjbGFzc2lmaWVyLCBsaW5lLCBpLCBsaW5rQmVnaW5JbmRleCwgbGVuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBMaW5rQ29tcHV0ZXI7XG59KCkpO1xuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBsaW5rcyBjb250YWlucyBpbiB0aGUgcHJvdmlkZWRcbiAqIGRvY3VtZW50LiAqTm90ZSogdGhhdCB0aGlzIG9wZXJhdGlvbiBpcyBjb21wdXRhdGlvbmFsXG4gKiBleHBlbnNpdmUgYW5kIHNob3VsZCBub3QgcnVuIGluIHRoZSBVSSB0aHJlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlTGlua3MobW9kZWwpIHtcbiAgICBpZiAoIW1vZGVsIHx8IHR5cGVvZiBtb2RlbC5nZXRMaW5lQ291bnQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG1vZGVsLmdldExpbmVDb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVua25vd24gY2FsbGVyIVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBMaW5rQ29tcHV0ZXIuY29tcHV0ZUxpbmtzKG1vZGVsKTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xudmFyIEJhc2ljSW5wbGFjZVJlcGxhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFzaWNJbnBsYWNlUmVwbGFjZSgpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlU2V0ID0gW1xuICAgICAgICAgICAgWyd0cnVlJywgJ2ZhbHNlJ10sXG4gICAgICAgICAgICBbJ1RydWUnLCAnRmFsc2UnXSxcbiAgICAgICAgICAgIFsnUHJpdmF0ZScsICdQdWJsaWMnLCAnRnJpZW5kJywgJ1JlYWRPbmx5JywgJ1BhcnRpYWwnLCAnUHJvdGVjdGVkJywgJ1dyaXRlT25seSddLFxuICAgICAgICAgICAgWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUubmF2aWdhdGVWYWx1ZVNldCA9IGZ1bmN0aW9uIChyYW5nZTEsIHRleHQxLCByYW5nZTIsIHRleHQyLCB1cCkge1xuICAgICAgICBpZiAocmFuZ2UxICYmIHRleHQxKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kb05hdmlnYXRlVmFsdWVTZXQodGV4dDEsIHVwKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UxLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UyICYmIHRleHQyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kb05hdmlnYXRlVmFsdWVTZXQodGV4dDIsIHVwKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogcmFuZ2UyLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcmVzdWx0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEJhc2ljSW5wbGFjZVJlcGxhY2UucHJvdG90eXBlLmRvTmF2aWdhdGVWYWx1ZVNldCA9IGZ1bmN0aW9uICh0ZXh0LCB1cCkge1xuICAgICAgICB2YXIgbnVtYmVyUmVzdWx0ID0gdGhpcy5udW1iZXJSZXBsYWNlKHRleHQsIHVwKTtcbiAgICAgICAgaWYgKG51bWJlclJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlclJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UmVwbGFjZSh0ZXh0LCB1cCk7XG4gICAgfTtcbiAgICBCYXNpY0lucGxhY2VSZXBsYWNlLnByb3RvdHlwZS5udW1iZXJSZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlLCB1cCkge1xuICAgICAgICB2YXIgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHZhbHVlLmxlbmd0aCAtICh2YWx1ZS5sYXN0SW5kZXhPZignLicpICsgMSkpO1xuICAgICAgICB2YXIgbjEgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICB2YXIgbjIgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihuMSkgJiYgIWlzTmFOKG4yKSAmJiBuMSA9PT0gbjIpIHtcbiAgICAgICAgICAgIGlmIChuMSA9PT0gMCAmJiAhdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgZG8gbmVnYXRpdmVcbiAgICAgICAgICAgICAgICAvL1x0XHRcdH0gZWxzZSBpZihuMSA9PT0gOSAmJiB1cCkge1xuICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRyZXR1cm4gbnVsbDsgLy8gZG9uJ3QgaW5zZXJ0IDEwIGludG8gYSBudW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG4xID0gTWF0aC5mbG9vcihuMSAqIHByZWNpc2lvbik7XG4gICAgICAgICAgICAgICAgbjEgKz0gdXAgPyBwcmVjaXNpb24gOiAtcHJlY2lzaW9uO1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcobjEgLyBwcmVjaXNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudGV4dFJlcGxhY2UgPSBmdW5jdGlvbiAodmFsdWUsIHVwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlU2V0c1JlcGxhY2UodGhpcy5fZGVmYXVsdFZhbHVlU2V0LCB2YWx1ZSwgdXApO1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudmFsdWVTZXRzUmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZVNldHMsIHZhbHVlLCB1cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlU2V0cy5sZW5ndGg7IHJlc3VsdCA9PT0gbnVsbCAmJiBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudmFsdWVTZXRSZXBsYWNlKHZhbHVlU2V0c1tpXSwgdmFsdWUsIHVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQmFzaWNJbnBsYWNlUmVwbGFjZS5wcm90b3R5cGUudmFsdWVTZXRSZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlU2V0LCB2YWx1ZSwgdXApIHtcbiAgICAgICAgdmFyIGlkeCA9IHZhbHVlU2V0LmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGlkeCArPSB1cCA/ICsxIDogLTE7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgICAgICAgICAgIGlkeCA9IHZhbHVlU2V0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZHggJT0gdmFsdWVTZXQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlU2V0W2lkeF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBCYXNpY0lucGxhY2VSZXBsYWNlLklOU1RBTkNFID0gbmV3IEJhc2ljSW5wbGFjZVJlcGxhY2UoKTtcbiAgICByZXR1cm4gQmFzaWNJbnBsYWNlUmVwbGFjZTtcbn0oKSk7XG5leHBvcnQgeyBCYXNpY0lucGxhY2VSZXBsYWNlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFVSSSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi91cmkuanMnO1xuaW1wb3J0IHsgVFByb21pc2UgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi93aW5qcy5iYXNlLmpzJztcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vY29yZS9yYW5nZS5qcyc7XG5pbXBvcnQgeyBEaWZmQ29tcHV0ZXIgfSBmcm9tICcuLi9kaWZmL2RpZmZDb21wdXRlci5qcyc7XG5pbXBvcnQgeyBzdHJpbmdEaWZmIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vZGlmZi9kaWZmLmpzJztcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vY29yZS9wb3NpdGlvbi5qcyc7XG5pbXBvcnQgeyBNaXJyb3JUZXh0TW9kZWwgYXMgQmFzZU1pcnJvck1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbWlycm9yVGV4dE1vZGVsLmpzJztcbmltcG9ydCB7IGNvbXB1dGVMaW5rcyB9IGZyb20gJy4uL21vZGVzL2xpbmtDb21wdXRlci5qcyc7XG5pbXBvcnQgeyBCYXNpY0lucGxhY2VSZXBsYWNlIH0gZnJvbSAnLi4vbW9kZXMvc3VwcG9ydHMvaW5wbGFjZVJlcGxhY2VTdXBwb3J0LmpzJztcbmltcG9ydCB7IGdldFdvcmRBdFRleHQsIGVuc3VyZVZhbGlkV29yZERlZmluaXRpb24gfSBmcm9tICcuLi9tb2RlbC93b3JkSGVscGVyLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1vbmFjb0Jhc2VBUEkgfSBmcm9tICcuLi9zdGFuZGFsb25lL3N0YW5kYWxvbmVCYXNlLmpzJztcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi9wbGF0Zm9ybS5qcyc7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgTWlycm9yTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pcnJvck1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1pcnJvck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaXJyb3JNb2RlbC5wcm90b3R5cGUsIFwidXJpXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlycm9yTW9kZWwucHJvdG90eXBlLCBcInZlcnNpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uSWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaXJyb3JNb2RlbC5wcm90b3R5cGUsIFwiZW9sXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW9sO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoKTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRMaW5lc0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5zbGljZSgwKTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRMaW5lQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lcy5sZW5ndGg7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuZ2V0TGluZUNvbnRlbnQgPSBmdW5jdGlvbiAobGluZU51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFdvcmRBdFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgd29yZEF0VGV4dCA9IGdldFdvcmRBdFRleHQocG9zaXRpb24uY29sdW1uLCBlbnN1cmVWYWxpZFdvcmREZWZpbml0aW9uKHdvcmREZWZpbml0aW9uKSwgdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLCAwKTtcbiAgICAgICAgaWYgKHdvcmRBdFRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmFuZ2UocG9zaXRpb24ubGluZU51bWJlciwgd29yZEF0VGV4dC5zdGFydENvbHVtbiwgcG9zaXRpb24ubGluZU51bWJlciwgd29yZEF0VGV4dC5lbmRDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLmdldFdvcmRVbnRpbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgd29yZEF0UG9zaXRpb24gPSB0aGlzLmdldFdvcmRBdFBvc2l0aW9uKHBvc2l0aW9uLCB3b3JkRGVmaW5pdGlvbik7XG4gICAgICAgIGlmICghd29yZEF0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd29yZDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW46IHBvc2l0aW9uLmNvbHVtbixcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHBvc2l0aW9uLmNvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd29yZDogdGhpcy5fbGluZXNbcG9zaXRpb24ubGluZU51bWJlciAtIDFdLnN1YnN0cmluZyh3b3JkQXRQb3NpdGlvbi5zdGFydENvbHVtbiAtIDEsIHBvc2l0aW9uLmNvbHVtbiAtIDEpLFxuICAgICAgICAgICAgc3RhcnRDb2x1bW46IHdvcmRBdFBvc2l0aW9uLnN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiBwb3NpdGlvbi5jb2x1bW5cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5jcmVhdGVXb3JkSXRlcmF0b3IgPSBmdW5jdGlvbiAod29yZERlZmluaXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHZhciBsaW5lTnVtYmVyID0gMDtcbiAgICAgICAgdmFyIGxpbmVUZXh0O1xuICAgICAgICB2YXIgd29yZFJhbmdlc0lkeCA9IDA7XG4gICAgICAgIHZhciB3b3JkUmFuZ2VzID0gW107XG4gICAgICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHdvcmRSYW5nZXNJZHggPCB3b3JkUmFuZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9iai5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgb2JqLnZhbHVlID0gbGluZVRleHQuc3Vic3RyaW5nKHdvcmRSYW5nZXNbd29yZFJhbmdlc0lkeF0uc3RhcnQsIHdvcmRSYW5nZXNbd29yZFJhbmdlc0lkeF0uZW5kKTtcbiAgICAgICAgICAgICAgICB3b3JkUmFuZ2VzSWR4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsaW5lTnVtYmVyID49IF90aGlzLl9saW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBvYmouZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb2JqLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluZVRleHQgPSBfdGhpcy5fbGluZXNbbGluZU51bWJlcl07XG4gICAgICAgICAgICAgICAgd29yZFJhbmdlcyA9IF90aGlzLl93b3JkZW5pemUobGluZVRleHQsIHdvcmREZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICB3b3JkUmFuZ2VzSWR4ID0gMDtcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IG5leHQ6IG5leHQgfTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5fd29yZGVuaXplID0gZnVuY3Rpb24gKGNvbnRlbnQsIHdvcmREZWZpbml0aW9uKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICB3b3JkRGVmaW5pdGlvbi5sYXN0SW5kZXggPSAwOyAvLyByZXNldCBsYXN0SW5kZXgganVzdCB0byBiZSBzdXJlXG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHdvcmREZWZpbml0aW9uLmV4ZWMoY29udGVudCkpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFswXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBpdCBkaWQgbWF0Y2ggdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBzdGFydDogbWF0Y2guaW5kZXgsIGVuZDogbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5nZXRWYWx1ZUluUmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSB0aGlzLl92YWxpZGF0ZVJhbmdlKHJhbmdlKTtcbiAgICAgICAgaWYgKHJhbmdlLnN0YXJ0TGluZU51bWJlciA9PT0gcmFuZ2UuZW5kTGluZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVzW3JhbmdlLnN0YXJ0TGluZU51bWJlciAtIDFdLnN1YnN0cmluZyhyYW5nZS5zdGFydENvbHVtbiAtIDEsIHJhbmdlLmVuZENvbHVtbiAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW5lRW5kaW5nID0gdGhpcy5fZW9sO1xuICAgICAgICB2YXIgc3RhcnRMaW5lSW5kZXggPSByYW5nZS5zdGFydExpbmVOdW1iZXIgLSAxO1xuICAgICAgICB2YXIgZW5kTGluZUluZGV4ID0gcmFuZ2UuZW5kTGluZU51bWJlciAtIDE7XG4gICAgICAgIHZhciByZXN1bHRMaW5lcyA9IFtdO1xuICAgICAgICByZXN1bHRMaW5lcy5wdXNoKHRoaXMuX2xpbmVzW3N0YXJ0TGluZUluZGV4XS5zdWJzdHJpbmcocmFuZ2Uuc3RhcnRDb2x1bW4gLSAxKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydExpbmVJbmRleCArIDE7IGkgPCBlbmRMaW5lSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0TGluZXMucHVzaCh0aGlzLl9saW5lc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0TGluZXMucHVzaCh0aGlzLl9saW5lc1tlbmRMaW5lSW5kZXhdLnN1YnN0cmluZygwLCByYW5nZS5lbmRDb2x1bW4gLSAxKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRMaW5lcy5qb2luKGxpbmVFbmRpbmcpO1xuICAgIH07XG4gICAgTWlycm9yTW9kZWwucHJvdG90eXBlLm9mZnNldEF0ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHBvc2l0aW9uID0gdGhpcy5fdmFsaWRhdGVQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUxpbmVTdGFydHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVTdGFydHMuZ2V0QWNjdW11bGF0ZWRWYWx1ZShwb3NpdGlvbi5saW5lTnVtYmVyIC0gMikgKyAocG9zaXRpb24uY29sdW1uIC0gMSk7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUucG9zaXRpb25BdCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gTWF0aC5mbG9vcihvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgPSBNYXRoLm1heCgwLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLl9lbnN1cmVMaW5lU3RhcnRzKCk7XG4gICAgICAgIHZhciBvdXQgPSB0aGlzLl9saW5lU3RhcnRzLmdldEluZGV4T2Yob2Zmc2V0KTtcbiAgICAgICAgdmFyIGxpbmVMZW5ndGggPSB0aGlzLl9saW5lc1tvdXQuaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgLy8gRW5zdXJlIHdlIHJldHVybiBhIHZhbGlkIHBvc2l0aW9uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxICsgb3V0LmluZGV4LFxuICAgICAgICAgICAgY29sdW1uOiAxICsgTWF0aC5taW4ob3V0LnJlbWFpbmRlciwgbGluZUxlbmd0aClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1pcnJvck1vZGVsLnByb3RvdHlwZS5fdmFsaWRhdGVSYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLl92YWxpZGF0ZVBvc2l0aW9uKHsgbGluZU51bWJlcjogcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyLCBjb2x1bW46IHJhbmdlLnN0YXJ0Q29sdW1uIH0pO1xuICAgICAgICB2YXIgZW5kID0gdGhpcy5fdmFsaWRhdGVQb3NpdGlvbih7IGxpbmVOdW1iZXI6IHJhbmdlLmVuZExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2UuZW5kQ29sdW1uIH0pO1xuICAgICAgICBpZiAoc3RhcnQubGluZU51bWJlciAhPT0gcmFuZ2Uuc3RhcnRMaW5lTnVtYmVyXG4gICAgICAgICAgICB8fCBzdGFydC5jb2x1bW4gIT09IHJhbmdlLnN0YXJ0Q29sdW1uXG4gICAgICAgICAgICB8fCBlbmQubGluZU51bWJlciAhPT0gcmFuZ2UuZW5kTGluZU51bWJlclxuICAgICAgICAgICAgfHwgZW5kLmNvbHVtbiAhPT0gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXJ0TGluZU51bWJlcjogc3RhcnQubGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogc3RhcnQuY29sdW1uLFxuICAgICAgICAgICAgICAgIGVuZExpbmVOdW1iZXI6IGVuZC5saW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIGVuZENvbHVtbjogZW5kLmNvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcbiAgICBNaXJyb3JNb2RlbC5wcm90b3R5cGUuX3ZhbGlkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFQb3NpdGlvbi5pc0lQb3NpdGlvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIHBvc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpbmVOdW1iZXIgPSBwb3NpdGlvbi5saW5lTnVtYmVyLCBjb2x1bW4gPSBwb3NpdGlvbi5jb2x1bW47XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGlmIChsaW5lTnVtYmVyIDwgMSkge1xuICAgICAgICAgICAgbGluZU51bWJlciA9IDE7XG4gICAgICAgICAgICBjb2x1bW4gPSAxO1xuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGluZU51bWJlciA+IHRoaXMuX2xpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGluZU51bWJlciA9IHRoaXMuX2xpbmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbHVtbiA9IHRoaXMuX2xpbmVzW2xpbmVOdW1iZXIgLSAxXS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF4Q2hhcmFjdGVyID0gdGhpcy5fbGluZXNbbGluZU51bWJlciAtIDFdLmxlbmd0aCArIDE7XG4gICAgICAgICAgICBpZiAoY29sdW1uIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IDE7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2x1bW4gPiBtYXhDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSBtYXhDaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geyBsaW5lTnVtYmVyOiBsaW5lTnVtYmVyLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWlycm9yTW9kZWw7XG59KEJhc2VNaXJyb3JNb2RlbCkpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFzZUVkaXRvclNpbXBsZVdvcmtlcihmb3JlaWduTW9kdWxlRmFjdG9yeSkge1xuICAgICAgICB0aGlzLl9mb3JlaWduTW9kdWxlRmFjdG9yeSA9IGZvcmVpZ25Nb2R1bGVGYWN0b3J5O1xuICAgICAgICB0aGlzLl9mb3JlaWduTW9kdWxlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gLS0tLSBCRUdJTiBkaWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQmFzZUVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuY29tcHV0ZURpZmYgPSBmdW5jdGlvbiAob3JpZ2luYWxVcmwsIG1vZGlmaWVkVXJsLCBpZ25vcmVUcmltV2hpdGVzcGFjZSkge1xuICAgICAgICB2YXIgb3JpZ2luYWwgPSB0aGlzLl9nZXRNb2RlbChvcmlnaW5hbFVybCk7XG4gICAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMuX2dldE1vZGVsKG1vZGlmaWVkVXJsKTtcbiAgICAgICAgaWYgKCFvcmlnaW5hbCB8fCAhbW9kaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcmlnaW5hbExpbmVzID0gb3JpZ2luYWwuZ2V0TGluZXNDb250ZW50KCk7XG4gICAgICAgIHZhciBtb2RpZmllZExpbmVzID0gbW9kaWZpZWQuZ2V0TGluZXNDb250ZW50KCk7XG4gICAgICAgIHZhciBkaWZmQ29tcHV0ZXIgPSBuZXcgRGlmZkNvbXB1dGVyKG9yaWdpbmFsTGluZXMsIG1vZGlmaWVkTGluZXMsIHtcbiAgICAgICAgICAgIHNob3VsZENvbXB1dGVDaGFyQ2hhbmdlczogdHJ1ZSxcbiAgICAgICAgICAgIHNob3VsZFBvc3RQcm9jZXNzQ2hhckNoYW5nZXM6IHRydWUsXG4gICAgICAgICAgICBzaG91bGRJZ25vcmVUcmltV2hpdGVzcGFjZTogaWdub3JlVHJpbVdoaXRlc3BhY2UsXG4gICAgICAgICAgICBzaG91bGRNYWtlUHJldHR5RGlmZjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFRQcm9taXNlLmFzKGRpZmZDb21wdXRlci5jb21wdXRlRGlmZigpKTtcbiAgICB9O1xuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmNvbXB1dGVNb3JlTWluaW1hbEVkaXRzID0gZnVuY3Rpb24gKG1vZGVsVXJsLCBlZGl0cykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyhlZGl0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgbGFzdEVvbDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlZGl0c18xID0gZWRpdHM7IF9pIDwgZWRpdHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGVkaXRzXzFbX2ldLCByYW5nZSA9IF9hLnJhbmdlLCB0ZXh0ID0gX2EudGV4dCwgZW9sID0gX2EuZW9sO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlb2wgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgbGFzdEVvbCA9IGVvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBlb2wtY2hhbmdlIG9ubHlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IG1vZGVsLmdldFZhbHVlSW5SYW5nZShyYW5nZSk7XG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG58XFxufFxcci9nLCBtb2RlbC5lb2wpO1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsID09PSB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGRpZmYgd29uJ3QgdGFrZSB0b28gbG9uZ1xuICAgICAgICAgICAgaWYgKE1hdGgubWF4KHRleHQubGVuZ3RoLCBvcmlnaW5hbC5sZW5ndGgpID4gQmFzZUVkaXRvclNpbXBsZVdvcmtlci5fZGlmZkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyByYW5nZTogcmFuZ2UsIHRleHQ6IHRleHQgfSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wdXRlIGRpZmYgYmV0d2VlbiBvcmlnaW5hbCBhbmQgZWRpdC50ZXh0XG4gICAgICAgICAgICB2YXIgY2hhbmdlcyA9IHN0cmluZ0RpZmYob3JpZ2luYWwsIHRleHQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBlZGl0T2Zmc2V0ID0gbW9kZWwub2Zmc2V0QXQoUmFuZ2UubGlmdChyYW5nZSkuZ2V0U3RhcnRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgY2hhbmdlc18xID0gY2hhbmdlczsgX2IgPCBjaGFuZ2VzXzEubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNfMVtfYl07XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbW9kZWwucG9zaXRpb25BdChlZGl0T2Zmc2V0ICsgY2hhbmdlLm9yaWdpbmFsU3RhcnQpO1xuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBtb2RlbC5wb3NpdGlvbkF0KGVkaXRPZmZzZXQgKyBjaGFuZ2Uub3JpZ2luYWxTdGFydCArIGNoYW5nZS5vcmlnaW5hbExlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0VkaXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQuc3Vic3RyKGNoYW5nZS5tb2RpZmllZFN0YXJ0LCBjaGFuZ2UubW9kaWZpZWRMZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICByYW5nZTogeyBzdGFydExpbmVOdW1iZXI6IHN0YXJ0LmxpbmVOdW1iZXIsIHN0YXJ0Q29sdW1uOiBzdGFydC5jb2x1bW4sIGVuZExpbmVOdW1iZXI6IGVuZC5saW5lTnVtYmVyLCBlbmRDb2x1bW46IGVuZC5jb2x1bW4gfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsLmdldFZhbHVlSW5SYW5nZShuZXdFZGl0LnJhbmdlKSAhPT0gbmV3RWRpdC50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ld0VkaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxhc3RFb2wgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGVvbDogbGFzdEVvbCwgdGV4dDogdW5kZWZpbmVkLCByYW5nZTogdW5kZWZpbmVkIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyhyZXN1bHQpO1xuICAgIH07XG4gICAgLy8gLS0tLSBFTkQgbWluaW1hbCBlZGl0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS5jb21wdXRlTGlua3MgPSBmdW5jdGlvbiAobW9kZWxVcmwpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fZ2V0TW9kZWwobW9kZWxVcmwpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVFByb21pc2UuYXMoY29tcHV0ZUxpbmtzKG1vZGVsKSk7XG4gICAgfTtcbiAgICBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLnByb3RvdHlwZS50ZXh0dWFsU3VnZ2VzdCA9IGZ1bmN0aW9uIChtb2RlbFVybCwgcG9zaXRpb24sIHdvcmREZWYsIHdvcmREZWZGbGFncykge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLl9nZXRNb2RlbChtb2RlbFVybCk7XG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgdmFyIHN1Z2dlc3Rpb25zID0gW107XG4gICAgICAgICAgICB2YXIgd29yZERlZlJlZ0V4cCA9IG5ldyBSZWdFeHAod29yZERlZiwgd29yZERlZkZsYWdzKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50V29yZCA9IG1vZGVsLmdldFdvcmRVbnRpbFBvc2l0aW9uKHBvc2l0aW9uLCB3b3JkRGVmUmVnRXhwKS53b3JkO1xuICAgICAgICAgICAgdmFyIHNlZW4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgc2VlbltjdXJyZW50V29yZF0gPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaXRlciA9IG1vZGVsLmNyZWF0ZVdvcmRJdGVyYXRvcih3b3JkRGVmUmVnRXhwKSwgZSA9IGl0ZXIubmV4dCgpOyAhZS5kb25lICYmIHN1Z2dlc3Rpb25zLmxlbmd0aCA8PSBCYXNlRWRpdG9yU2ltcGxlV29ya2VyLl9zdWdnZXN0aW9uc0xpbWl0OyBlID0gaXRlci5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgd29yZCA9IGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHNlZW5bd29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlZW5bd29yZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHdvcmQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQ6IHdvcmQsXG4gICAgICAgICAgICAgICAgICAgIG5vQXV0b0FjY2VwdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlQmVmb3JlOiBjdXJyZW50V29yZC5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyh7IHN1Z2dlc3Rpb25zOiBzdWdnZXN0aW9ucyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLy8gLS0tLSBFTkQgc3VnZ2VzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLm5hdmlnYXRlVmFsdWVTZXQgPSBmdW5jdGlvbiAobW9kZWxVcmwsIHJhbmdlLCB1cCwgd29yZERlZiwgd29yZERlZkZsYWdzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKG1vZGVsVXJsKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdvcmREZWZSZWdFeHAgPSBuZXcgUmVnRXhwKHdvcmREZWYsIHdvcmREZWZGbGFncyk7XG4gICAgICAgIGlmIChyYW5nZS5zdGFydENvbHVtbiA9PT0gcmFuZ2UuZW5kQ29sdW1uKSB7XG4gICAgICAgICAgICByYW5nZSA9IHtcbiAgICAgICAgICAgICAgICBzdGFydExpbmVOdW1iZXI6IHJhbmdlLnN0YXJ0TGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBzdGFydENvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4sXG4gICAgICAgICAgICAgICAgZW5kTGluZU51bWJlcjogcmFuZ2UuZW5kTGluZU51bWJlcixcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IHJhbmdlLmVuZENvbHVtbiArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGVjdGlvblRleHQgPSBtb2RlbC5nZXRWYWx1ZUluUmFuZ2UocmFuZ2UpO1xuICAgICAgICB2YXIgd29yZFJhbmdlID0gbW9kZWwuZ2V0V29yZEF0UG9zaXRpb24oeyBsaW5lTnVtYmVyOiByYW5nZS5zdGFydExpbmVOdW1iZXIsIGNvbHVtbjogcmFuZ2Uuc3RhcnRDb2x1bW4gfSwgd29yZERlZlJlZ0V4cCk7XG4gICAgICAgIHZhciB3b3JkID0gbnVsbDtcbiAgICAgICAgaWYgKHdvcmRSYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd29yZCA9IG1vZGVsLmdldFZhbHVlSW5SYW5nZSh3b3JkUmFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBCYXNpY0lucGxhY2VSZXBsYWNlLklOU1RBTkNFLm5hdmlnYXRlVmFsdWVTZXQocmFuZ2UsIHNlbGVjdGlvblRleHQsIHdvcmRSYW5nZSwgd29yZCwgdXApO1xuICAgICAgICByZXR1cm4gVFByb21pc2UuYXMocmVzdWx0KTtcbiAgICB9O1xuICAgIC8vIC0tLS0gQkVHSU4gZm9yZWlnbiBtb2R1bGUgc3VwcG9ydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIucHJvdG90eXBlLmxvYWRGb3JlaWduTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBjcmVhdGVEYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjdHggPSB7XG4gICAgICAgICAgICBnZXRNaXJyb3JNb2RlbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX2dldE1vZGVscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fZm9yZWlnbk1vZHVsZUZhY3RvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Nb2R1bGUgPSB0aGlzLl9mb3JlaWduTW9kdWxlRmFjdG9yeShjdHgsIGNyZWF0ZURhdGEpO1xuICAgICAgICAgICAgLy8gc3RhdGljIGZvcmVpbmcgbW9kdWxlXG4gICAgICAgICAgICB2YXIgbWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLl9mb3JlaWduTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb3JlaWduTW9kdWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gVFByb21pc2UuYXMobWV0aG9kcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRVNNLWNvbW1lbnQtYmVnaW5cbiAgICAgICAgLy8gXHRcdHJldHVybiBuZXcgVFByb21pc2U8YW55PigoYywgZSkgPT4ge1xuICAgICAgICAvLyBcdFx0XHRyZXF1aXJlKFttb2R1bGVJZF0sIChmb3JlaWduTW9kdWxlOiB7IGNyZWF0ZTogSUZvcmVpZ25Nb2R1bGVGYWN0b3J5IH0pID0+IHtcbiAgICAgICAgLy8gXHRcdFx0XHR0aGlzLl9mb3JlaWduTW9kdWxlID0gZm9yZWlnbk1vZHVsZS5jcmVhdGUoY3R4LCBjcmVhdGVEYXRhKTtcbiAgICAgICAgLy8gXG4gICAgICAgIC8vIFx0XHRcdFx0bGV0IG1ldGhvZHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vIFx0XHRcdFx0Zm9yIChsZXQgcHJvcCBpbiB0aGlzLl9mb3JlaWduTW9kdWxlKSB7XG4gICAgICAgIC8vIFx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuX2ZvcmVpZ25Nb2R1bGVbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gXHRcdFx0XHRcdFx0bWV0aG9kcy5wdXNoKHByb3ApO1xuICAgICAgICAvLyBcdFx0XHRcdFx0fVxuICAgICAgICAvLyBcdFx0XHRcdH1cbiAgICAgICAgLy8gXG4gICAgICAgIC8vIFx0XHRcdFx0YyhtZXRob2RzKTtcbiAgICAgICAgLy8gXG4gICAgICAgIC8vIFx0XHRcdH0sIGUpO1xuICAgICAgICAvLyBcdFx0fSk7XG4gICAgICAgIC8vIEVTTS1jb21tZW50LWVuZFxuICAgICAgICAvLyBFU00tdW5jb21tZW50LWJlZ2luXG4gICAgICAgIHJldHVybiBUUHJvbWlzZS53cmFwRXJyb3IobmV3IEVycm9yKFwiVW5leHBlY3RlZCB1c2FnZVwiKSk7XG4gICAgICAgIC8vIEVTTS11bmNvbW1lbnQtZW5kXG4gICAgfTtcbiAgICAvLyBmb3JlaWduIG1ldGhvZCByZXF1ZXN0XG4gICAgQmFzZUVkaXRvclNpbXBsZVdvcmtlci5wcm90b3R5cGUuZm1yID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuX2ZvcmVpZ25Nb2R1bGUgfHwgdHlwZW9mIHRoaXMuX2ZvcmVpZ25Nb2R1bGVbbWV0aG9kXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIFRQcm9taXNlLndyYXBFcnJvcihuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWVzdEhhbmRsZXIgb3IgbWV0aG9kOiAnICsgbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBUUHJvbWlzZS5hcyh0aGlzLl9mb3JlaWduTW9kdWxlW21ldGhvZF0uYXBwbHkodGhpcy5fZm9yZWlnbk1vZHVsZSwgYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gVFByb21pc2Uud3JhcEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyAtLS0tIEVORCBkaWZmIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gLS0tLSBCRUdJTiBtaW5pbWFsIGVkaXRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIuX2RpZmZMaW1pdCA9IDEwMDAwO1xuICAgIC8vIC0tLS0gQkVHSU4gc3VnZ2VzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIuX3N1Z2dlc3Rpb25zTGltaXQgPSAxMDAwMDtcbiAgICByZXR1cm4gQmFzZUVkaXRvclNpbXBsZVdvcmtlcjtcbn0oKSk7XG5leHBvcnQgeyBCYXNlRWRpdG9yU2ltcGxlV29ya2VyIH07XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgRWRpdG9yU2ltcGxlV29ya2VySW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRWRpdG9yU2ltcGxlV29ya2VySW1wbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsKGZvcmVpZ25Nb2R1bGVGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZvcmVpZ25Nb2R1bGVGYWN0b3J5KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fbW9kZWxzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tb2RlbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VySW1wbC5wcm90b3R5cGUuX2dldE1vZGVsID0gZnVuY3Rpb24gKHVyaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWxzW3VyaV07XG4gICAgfTtcbiAgICBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsLnByb3RvdHlwZS5fZ2V0TW9kZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWxsID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX21vZGVscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBhbGwucHVzaChfdGhpcy5fbW9kZWxzW2tleV0pOyB9KTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9O1xuICAgIEVkaXRvclNpbXBsZVdvcmtlckltcGwucHJvdG90eXBlLmFjY2VwdE5ld01vZGVsID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fbW9kZWxzW2RhdGEudXJsXSA9IG5ldyBNaXJyb3JNb2RlbChVUkkucGFyc2UoZGF0YS51cmwpLCBkYXRhLmxpbmVzLCBkYXRhLkVPTCwgZGF0YS52ZXJzaW9uSWQpO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VySW1wbC5wcm90b3R5cGUuYWNjZXB0TW9kZWxDaGFuZ2VkID0gZnVuY3Rpb24gKHN0clVSTCwgZSkge1xuICAgICAgICBpZiAoIXRoaXMuX21vZGVsc1tzdHJVUkxdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5fbW9kZWxzW3N0clVSTF07XG4gICAgICAgIG1vZGVsLm9uRXZlbnRzKGUpO1xuICAgIH07XG4gICAgRWRpdG9yU2ltcGxlV29ya2VySW1wbC5wcm90b3R5cGUuYWNjZXB0UmVtb3ZlZE1vZGVsID0gZnVuY3Rpb24gKHN0clVSTCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vZGVsc1tzdHJVUkxdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuX21vZGVsc1tzdHJVUkxdO1xuICAgIH07XG4gICAgcmV0dXJuIEVkaXRvclNpbXBsZVdvcmtlckltcGw7XG59KEJhc2VFZGl0b3JTaW1wbGVXb3JrZXIpKTtcbmV4cG9ydCB7IEVkaXRvclNpbXBsZVdvcmtlckltcGwgfTtcbi8qKlxuICogQ2FsbGVkIG9uIHRoZSB3b3JrZXIgc2lkZVxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsKG51bGwpO1xufVxuaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gUnVubmluZyBpbiBhIHdlYiB3b3JrZXJcbiAgICBnbG9iYWxzLm1vbmFjbyA9IGNyZWF0ZU1vbmFjb0Jhc2VBUEkoKTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2V2ZW50LmpzJztcbmltcG9ydCB7IEtleUNob3JkIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24va2V5Q29kZXMuanMnO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9jb3JlL3Bvc2l0aW9uLmpzJztcbmltcG9ydCB7IFJhbmdlIH0gZnJvbSAnLi4vY29yZS9yYW5nZS5qcyc7XG5pbXBvcnQgeyBTZWxlY3Rpb24sIFNlbGVjdGlvbkRpcmVjdGlvbiB9IGZyb20gJy4uL2NvcmUvc2VsZWN0aW9uLmpzJztcbmltcG9ydCB7IFRQcm9taXNlIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9jb21tb24vd2luanMuYmFzZS5qcyc7XG5pbXBvcnQgeyBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvY29tbW9uL2NhbmNlbGxhdGlvbi5qcyc7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4uL2NvcmUvdG9rZW4uanMnO1xuaW1wb3J0IFVSSSBmcm9tICcuLi8uLi8uLi9iYXNlL2NvbW1vbi91cmkuanMnO1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgaXMgcmVwZWF0ZWQgaGVyZSBzbyBpdCBjYW4gYmUgZXhwb3J0ZWRcbi8vIGJlY2F1c2UgVFMgaW5saW5lcyBjb25zdCBlbnVtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCB2YXIgTWFya2VyVGFnO1xuKGZ1bmN0aW9uIChNYXJrZXJUYWcpIHtcbiAgICBNYXJrZXJUYWdbTWFya2VyVGFnW1wiVW5uZWNlc3NhcnlcIl0gPSAxXSA9IFwiVW5uZWNlc3NhcnlcIjtcbn0pKE1hcmtlclRhZyB8fCAoTWFya2VyVGFnID0ge30pKTtcbmV4cG9ydCB2YXIgTWFya2VyU2V2ZXJpdHk7XG4oZnVuY3Rpb24gKE1hcmtlclNldmVyaXR5KSB7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJIaW50XCJdID0gMV0gPSBcIkhpbnRcIjtcbiAgICBNYXJrZXJTZXZlcml0eVtNYXJrZXJTZXZlcml0eVtcIkluZm9cIl0gPSAyXSA9IFwiSW5mb1wiO1xuICAgIE1hcmtlclNldmVyaXR5W01hcmtlclNldmVyaXR5W1wiV2FybmluZ1wiXSA9IDRdID0gXCJXYXJuaW5nXCI7XG4gICAgTWFya2VyU2V2ZXJpdHlbTWFya2VyU2V2ZXJpdHlbXCJFcnJvclwiXSA9IDhdID0gXCJFcnJvclwiO1xufSkoTWFya2VyU2V2ZXJpdHkgfHwgKE1hcmtlclNldmVyaXR5ID0ge30pKTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGlzIHJlcGVhdGVkIGhlcmUgc28gaXQgY2FuIGJlIGV4cG9ydGVkXG4vLyBiZWNhdXNlIFRTIGlubGluZXMgY29uc3QgZW51bXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgS2V5TW9kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtleU1vZCgpIHtcbiAgICB9XG4gICAgS2V5TW9kLmNob3JkID0gZnVuY3Rpb24gKGZpcnN0UGFydCwgc2Vjb25kUGFydCkge1xuICAgICAgICByZXR1cm4gS2V5Q2hvcmQoZmlyc3RQYXJ0LCBzZWNvbmRQYXJ0KTtcbiAgICB9O1xuICAgIEtleU1vZC5DdHJsQ21kID0gMjA0OCAvKiBDdHJsQ21kICovO1xuICAgIEtleU1vZC5TaGlmdCA9IDEwMjQgLyogU2hpZnQgKi87XG4gICAgS2V5TW9kLkFsdCA9IDUxMiAvKiBBbHQgKi87XG4gICAgS2V5TW9kLldpbkN0cmwgPSAyNTYgLyogV2luQ3RybCAqLztcbiAgICByZXR1cm4gS2V5TW9kO1xufSgpKTtcbmV4cG9ydCB7IEtleU1vZCB9O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgaXMgcmVwZWF0ZWQgaGVyZSBzbyBpdCBjYW4gYmUgZXhwb3J0ZWRcbi8vIGJlY2F1c2UgVFMgaW5saW5lcyBjb25zdCBlbnVtc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogVmlydHVhbCBLZXkgQ29kZXMsIHRoZSB2YWx1ZSBkb2VzIG5vdCBob2xkIGFueSBpbmhlcmVudCBtZWFuaW5nLlxuICogSW5zcGlyZWQgc29tZXdoYXQgZnJvbSBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3dpbmRvd3MvZGVza3RvcC9kZDM3NTczMSh2PXZzLjg1KS5hc3B4XG4gKiBCdXQgdGhlc2UgYXJlIFwibW9yZSBnZW5lcmFsXCIsIGFzIHRoZXkgc2hvdWxkIHdvcmsgYWNyb3NzIGJyb3dzZXJzICYgT1Ngcy5cbiAqL1xuZXhwb3J0IHZhciBLZXlDb2RlO1xuKGZ1bmN0aW9uIChLZXlDb2RlKSB7XG4gICAgLyoqXG4gICAgICogUGxhY2VkIGZpcnN0IHRvIGNvdmVyIHRoZSAwIHZhbHVlIG9mIHRoZSBlbnVtLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVua25vd25cIl0gPSAwXSA9IFwiVW5rbm93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkJhY2tzcGFjZVwiXSA9IDFdID0gXCJCYWNrc3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJUYWJcIl0gPSAyXSA9IFwiVGFiXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRW50ZXJcIl0gPSAzXSA9IFwiRW50ZXJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTaGlmdFwiXSA9IDRdID0gXCJTaGlmdFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkN0cmxcIl0gPSA1XSA9IFwiQ3RybFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkFsdFwiXSA9IDZdID0gXCJBbHRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYXVzZUJyZWFrXCJdID0gN10gPSBcIlBhdXNlQnJlYWtcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJDYXBzTG9ja1wiXSA9IDhdID0gXCJDYXBzTG9ja1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVzY2FwZVwiXSA9IDldID0gXCJFc2NhcGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJTcGFjZVwiXSA9IDEwXSA9IFwiU3BhY2VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJQYWdlVXBcIl0gPSAxMV0gPSBcIlBhZ2VVcFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlBhZ2VEb3duXCJdID0gMTJdID0gXCJQYWdlRG93blwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkVuZFwiXSA9IDEzXSA9IFwiRW5kXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiSG9tZVwiXSA9IDE0XSA9IFwiSG9tZVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkxlZnRBcnJvd1wiXSA9IDE1XSA9IFwiTGVmdEFycm93XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVXBBcnJvd1wiXSA9IDE2XSA9IFwiVXBBcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlJpZ2h0QXJyb3dcIl0gPSAxN10gPSBcIlJpZ2h0QXJyb3dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJEb3duQXJyb3dcIl0gPSAxOF0gPSBcIkRvd25BcnJvd1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkluc2VydFwiXSA9IDE5XSA9IFwiSW5zZXJ0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRGVsZXRlXCJdID0gMjBdID0gXCJEZWxldGVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMFwiXSA9IDIxXSA9IFwiS0VZXzBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMVwiXSA9IDIyXSA9IFwiS0VZXzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfMlwiXSA9IDIzXSA9IFwiS0VZXzJcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfM1wiXSA9IDI0XSA9IFwiS0VZXzNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNFwiXSA9IDI1XSA9IFwiS0VZXzRcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNVwiXSA9IDI2XSA9IFwiS0VZXzVcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfNlwiXSA9IDI3XSA9IFwiS0VZXzZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfN1wiXSA9IDI4XSA9IFwiS0VZXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOFwiXSA9IDI5XSA9IFwiS0VZXzhcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfOVwiXSA9IDMwXSA9IFwiS0VZXzlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQVwiXSA9IDMxXSA9IFwiS0VZX0FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQlwiXSA9IDMyXSA9IFwiS0VZX0JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfQ1wiXSA9IDMzXSA9IFwiS0VZX0NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRFwiXSA9IDM0XSA9IFwiS0VZX0RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRVwiXSA9IDM1XSA9IFwiS0VZX0VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfRlwiXSA9IDM2XSA9IFwiS0VZX0ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfR1wiXSA9IDM3XSA9IFwiS0VZX0dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSFwiXSA9IDM4XSA9IFwiS0VZX0hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSVwiXSA9IDM5XSA9IFwiS0VZX0lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfSlwiXSA9IDQwXSA9IFwiS0VZX0pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfS1wiXSA9IDQxXSA9IFwiS0VZX0tcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTFwiXSA9IDQyXSA9IFwiS0VZX0xcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTVwiXSA9IDQzXSA9IFwiS0VZX01cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfTlwiXSA9IDQ0XSA9IFwiS0VZX05cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfT1wiXSA9IDQ1XSA9IFwiS0VZX09cIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUFwiXSA9IDQ2XSA9IFwiS0VZX1BcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUVwiXSA9IDQ3XSA9IFwiS0VZX1FcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfUlwiXSA9IDQ4XSA9IFwiS0VZX1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfU1wiXSA9IDQ5XSA9IFwiS0VZX1NcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVFwiXSA9IDUwXSA9IFwiS0VZX1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVVwiXSA9IDUxXSA9IFwiS0VZX1VcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfVlwiXSA9IDUyXSA9IFwiS0VZX1ZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfV1wiXSA9IDUzXSA9IFwiS0VZX1dcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWFwiXSA9IDU0XSA9IFwiS0VZX1hcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWVwiXSA9IDU1XSA9IFwiS0VZX1lcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJLRVlfWlwiXSA9IDU2XSA9IFwiS0VZX1pcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNZXRhXCJdID0gNTddID0gXCJNZXRhXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQ29udGV4dE1lbnVcIl0gPSA1OF0gPSBcIkNvbnRleHRNZW51XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjFcIl0gPSA1OV0gPSBcIkYxXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjJcIl0gPSA2MF0gPSBcIkYyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjNcIl0gPSA2MV0gPSBcIkYzXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjRcIl0gPSA2Ml0gPSBcIkY0XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjVcIl0gPSA2M10gPSBcIkY1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjZcIl0gPSA2NF0gPSBcIkY2XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjdcIl0gPSA2NV0gPSBcIkY3XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjhcIl0gPSA2Nl0gPSBcIkY4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjlcIl0gPSA2N10gPSBcIkY5XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEwXCJdID0gNjhdID0gXCJGMTBcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTFcIl0gPSA2OV0gPSBcIkYxMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxMlwiXSA9IDcwXSA9IFwiRjEyXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjEzXCJdID0gNzFdID0gXCJGMTNcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTRcIl0gPSA3Ml0gPSBcIkYxNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxNVwiXSA9IDczXSA9IFwiRjE1XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE2XCJdID0gNzRdID0gXCJGMTZcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJGMTdcIl0gPSA3NV0gPSBcIkYxN1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIkYxOFwiXSA9IDc2XSA9IFwiRjE4XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiRjE5XCJdID0gNzddID0gXCJGMTlcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOdW1Mb2NrXCJdID0gNzhdID0gXCJOdW1Mb2NrXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiU2Nyb2xsTG9ja1wiXSA9IDc5XSA9IFwiU2Nyb2xsTG9ja1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICc7Oicga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfU0VNSUNPTE9OXCJdID0gODBdID0gXCJVU19TRU1JQ09MT05cIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJysnIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnPSsnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0VRVUFMXCJdID0gODFdID0gXCJVU19FUVVBTFwiO1xuICAgIC8qKlxuICAgICAqIEZvciBhbnkgY291bnRyeS9yZWdpb24sIHRoZSAnLCcga2V5XG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICcsPCcga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfQ09NTUFcIl0gPSA4Ml0gPSBcIlVTX0NPTU1BXCI7XG4gICAgLyoqXG4gICAgICogRm9yIGFueSBjb3VudHJ5L3JlZ2lvbiwgdGhlICctJyBrZXlcbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy1fJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19NSU5VU1wiXSA9IDgzXSA9IFwiVVNfTUlOVVNcIjtcbiAgICAvKipcbiAgICAgKiBGb3IgYW55IGNvdW50cnkvcmVnaW9uLCB0aGUgJy4nIGtleVxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnLj4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0RPVFwiXSA9IDg0XSA9IFwiVVNfRE9UXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJy8/JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19TTEFTSFwiXSA9IDg1XSA9IFwiVVNfU0xBU0hcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnYH4nIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tUSUNLXCJdID0gODZdID0gXCJVU19CQUNLVElDS1wiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdbeycga2V5XG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg3XSA9IFwiVVNfT1BFTl9TUVVBUkVfQlJBQ0tFVFwiO1xuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIG1pc2NlbGxhbmVvdXMgY2hhcmFjdGVyczsgaXQgY2FuIHZhcnkgYnkga2V5Ym9hcmQuXG4gICAgICogRm9yIHRoZSBVUyBzdGFuZGFyZCBrZXlib2FyZCwgdGhlICdcXHwnIGtleVxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIlVTX0JBQ0tTTEFTSFwiXSA9IDg4XSA9IFwiVVNfQkFDS1NMQVNIXCI7XG4gICAgLyoqXG4gICAgICogVXNlZCBmb3IgbWlzY2VsbGFuZW91cyBjaGFyYWN0ZXJzOyBpdCBjYW4gdmFyeSBieSBrZXlib2FyZC5cbiAgICAgKiBGb3IgdGhlIFVTIHN0YW5kYXJkIGtleWJvYXJkLCB0aGUgJ119JyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19DTE9TRV9TUVVBUkVfQlJBQ0tFVFwiXSA9IDg5XSA9IFwiVVNfQ0xPU0VfU1FVQVJFX0JSQUNLRVRcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqIEZvciB0aGUgVVMgc3RhbmRhcmQga2V5Ym9hcmQsIHRoZSAnJ1wiJyBrZXlcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJVU19RVU9URVwiXSA9IDkwXSA9IFwiVVNfUVVPVEVcIjtcbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBtaXNjZWxsYW5lb3VzIGNoYXJhY3RlcnM7IGl0IGNhbiB2YXJ5IGJ5IGtleWJvYXJkLlxuICAgICAqL1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk9FTV84XCJdID0gOTFdID0gXCJPRU1fOFwiO1xuICAgIC8qKlxuICAgICAqIEVpdGhlciB0aGUgYW5nbGUgYnJhY2tldCBrZXkgb3IgdGhlIGJhY2tzbGFzaCBrZXkgb24gdGhlIFJUIDEwMi1rZXkga2V5Ym9hcmQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiT0VNXzEwMlwiXSA9IDkyXSA9IFwiT0VNXzEwMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8wXCJdID0gOTNdID0gXCJOVU1QQURfMFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8xXCJdID0gOTRdID0gXCJOVU1QQURfMVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8yXCJdID0gOTVdID0gXCJOVU1QQURfMlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF8zXCJdID0gOTZdID0gXCJOVU1QQURfM1wiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF80XCJdID0gOTddID0gXCJOVU1QQURfNFwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF81XCJdID0gOThdID0gXCJOVU1QQURfNVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF82XCJdID0gOTldID0gXCJOVU1QQURfNlwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF83XCJdID0gMTAwXSA9IFwiTlVNUEFEXzdcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfOFwiXSA9IDEwMV0gPSBcIk5VTVBBRF84XCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEXzlcIl0gPSAxMDJdID0gXCJOVU1QQURfOVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9NVUxUSVBMWVwiXSA9IDEwM10gPSBcIk5VTVBBRF9NVUxUSVBMWVwiO1xuICAgIEtleUNvZGVbS2V5Q29kZVtcIk5VTVBBRF9BRERcIl0gPSAxMDRdID0gXCJOVU1QQURfQUREXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX1NFUEFSQVRPUlwiXSA9IDEwNV0gPSBcIk5VTVBBRF9TRVBBUkFUT1JcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfU1VCVFJBQ1RcIl0gPSAxMDZdID0gXCJOVU1QQURfU1VCVFJBQ1RcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJOVU1QQURfREVDSU1BTFwiXSA9IDEwN10gPSBcIk5VTVBBRF9ERUNJTUFMXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiTlVNUEFEX0RJVklERVwiXSA9IDEwOF0gPSBcIk5VTVBBRF9ESVZJREVcIjtcbiAgICAvKipcbiAgICAgKiBDb3ZlciBhbGwga2V5IGNvZGVzIHdoZW4gSU1FIGlzIHByb2Nlc3NpbmcgaW5wdXQuXG4gICAgICovXG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiS0VZX0lOX0NPTVBPU0lUSU9OXCJdID0gMTA5XSA9IFwiS0VZX0lOX0NPTVBPU0lUSU9OXCI7XG4gICAgS2V5Q29kZVtLZXlDb2RlW1wiQUJOVF9DMVwiXSA9IDExMF0gPSBcIkFCTlRfQzFcIjtcbiAgICBLZXlDb2RlW0tleUNvZGVbXCJBQk5UX0MyXCJdID0gMTExXSA9IFwiQUJOVF9DMlwiO1xuICAgIC8qKlxuICAgICAqIFBsYWNlZCBsYXN0IHRvIGNvdmVyIHRoZSBsZW5ndGggb2YgdGhlIGVudW0uXG4gICAgICogUGxlYXNlIGRvIG5vdCBkZXBlbmQgb24gdGhpcyB2YWx1ZSFcbiAgICAgKi9cbiAgICBLZXlDb2RlW0tleUNvZGVbXCJNQVhfVkFMVUVcIl0gPSAxMTJdID0gXCJNQVhfVkFMVUVcIjtcbn0pKEtleUNvZGUgfHwgKEtleUNvZGUgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vbmFjb0Jhc2VBUEkoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdG9yOiB1bmRlZmluZWQsXG4gICAgICAgIGxhbmd1YWdlczogdW5kZWZpbmVkLFxuICAgICAgICBDYW5jZWxsYXRpb25Ub2tlblNvdXJjZTogQ2FuY2VsbGF0aW9uVG9rZW5Tb3VyY2UsXG4gICAgICAgIEVtaXR0ZXI6IEVtaXR0ZXIsXG4gICAgICAgIEtleUNvZGU6IEtleUNvZGUsXG4gICAgICAgIEtleU1vZDogS2V5TW9kLFxuICAgICAgICBQb3NpdGlvbjogUG9zaXRpb24sXG4gICAgICAgIFJhbmdlOiBSYW5nZSxcbiAgICAgICAgU2VsZWN0aW9uOiBTZWxlY3Rpb24sXG4gICAgICAgIFNlbGVjdGlvbkRpcmVjdGlvbjogU2VsZWN0aW9uRGlyZWN0aW9uLFxuICAgICAgICBNYXJrZXJTZXZlcml0eTogTWFya2VyU2V2ZXJpdHksXG4gICAgICAgIE1hcmtlclRhZzogTWFya2VyVGFnLFxuICAgICAgICBQcm9taXNlOiBUUHJvbWlzZSxcbiAgICAgICAgVXJpOiBVUkksXG4gICAgICAgIFRva2VuOiBUb2tlblxuICAgIH07XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IHRvVWludDMyIH0gZnJvbSAnLi4vY29yZS91aW50LmpzJztcbnZhciBQcmVmaXhTdW1JbmRleE9mUmVzdWx0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByZWZpeFN1bUluZGV4T2ZSZXN1bHQoaW5kZXgsIHJlbWFpbmRlcikge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMucmVtYWluZGVyID0gcmVtYWluZGVyO1xuICAgIH1cbiAgICByZXR1cm4gUHJlZml4U3VtSW5kZXhPZlJlc3VsdDtcbn0oKSk7XG5leHBvcnQgeyBQcmVmaXhTdW1JbmRleE9mUmVzdWx0IH07XG52YXIgUHJlZml4U3VtQ29tcHV0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJlZml4U3VtQ29tcHV0ZXIodmFsdWVzKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnByZWZpeFN1bSA9IG5ldyBVaW50MzJBcnJheSh2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4ID0gbmV3IEludDMyQXJyYXkoMSk7XG4gICAgICAgIHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSA9IC0xO1xuICAgIH1cbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuaW5zZXJ0VmFsdWVzID0gZnVuY3Rpb24gKGluc2VydEluZGV4LCBpbnNlcnRWYWx1ZXMpIHtcbiAgICAgICAgaW5zZXJ0SW5kZXggPSB0b1VpbnQzMihpbnNlcnRJbmRleCk7XG4gICAgICAgIHZhciBvbGRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFByZWZpeFN1bSA9IHRoaXMucHJlZml4U3VtO1xuICAgICAgICB2YXIgaW5zZXJ0VmFsdWVzTGVuID0gaW5zZXJ0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluc2VydFZhbHVlc0xlbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IFVpbnQzMkFycmF5KG9sZFZhbHVlcy5sZW5ndGggKyBpbnNlcnRWYWx1ZXNMZW4pO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KDAsIGluc2VydEluZGV4KSwgMCk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChvbGRWYWx1ZXMuc3ViYXJyYXkoaW5zZXJ0SW5kZXgpLCBpbnNlcnRJbmRleCArIGluc2VydFZhbHVlc0xlbik7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChpbnNlcnRWYWx1ZXMsIGluc2VydEluZGV4KTtcbiAgICAgICAgaWYgKGluc2VydEluZGV4IC0gMSA8IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gaW5zZXJ0SW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZml4U3VtID0gbmV3IFVpbnQzMkFycmF5KHRoaXMudmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW0uc2V0KG9sZFByZWZpeFN1bS5zdWJhcnJheSgwLCB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIGluZGV4ID0gdG9VaW50MzIoaW5kZXgpO1xuICAgICAgICB2YWx1ZSA9IHRvVWludDMyKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzW2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGluZGV4IC0gMSA8IHRoaXMucHJlZml4U3VtVmFsaWRJbmRleFswXSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gaW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLnJlbW92ZVZhbHVlcyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjbnQpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IHRvVWludDMyKHN0YXJ0SW5kZXgpO1xuICAgICAgICBjbnQgPSB0b1VpbnQzMihjbnQpO1xuICAgICAgICB2YXIgb2xkVmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbGRQcmVmaXhTdW0gPSB0aGlzLnByZWZpeFN1bTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPj0gb2xkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhDbnQgPSBvbGRWYWx1ZXMubGVuZ3RoIC0gc3RhcnRJbmRleDtcbiAgICAgICAgaWYgKGNudCA+PSBtYXhDbnQpIHtcbiAgICAgICAgICAgIGNudCA9IG1heENudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY250ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgVWludDMyQXJyYXkob2xkVmFsdWVzLmxlbmd0aCAtIGNudCk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChvbGRWYWx1ZXMuc3ViYXJyYXkoMCwgc3RhcnRJbmRleCksIDApO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQob2xkVmFsdWVzLnN1YmFycmF5KHN0YXJ0SW5kZXggKyBjbnQpLCBzdGFydEluZGV4KTtcbiAgICAgICAgdGhpcy5wcmVmaXhTdW0gPSBuZXcgVWludDMyQXJyYXkodGhpcy52YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggLSAxIDwgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeFN1bVZhbGlkSW5kZXhbMF0gPSBzdGFydEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID49IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtLnNldChvbGRQcmVmaXhTdW0uc3ViYXJyYXkoMCwgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldFRvdGFsVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY2N1bXVsYXRlZFZhbHVlKHRoaXMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXIucHJvdG90eXBlLmdldEFjY3VtdWxhdGVkVmFsdWUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXggPSB0b1VpbnQzMihpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRBY2N1bXVsYXRlZFZhbHVlKGluZGV4KTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyLnByb3RvdHlwZS5fZ2V0QWNjdW11bGF0ZWRWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPD0gdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXhTdW1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdICsgMTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtWzBdID0gdGhpcy52YWx1ZXNbMF07XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4U3VtW2ldID0gdGhpcy5wcmVmaXhTdW1baSAtIDFdICsgdGhpcy52YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdID0gTWF0aC5tYXgodGhpcy5wcmVmaXhTdW1WYWxpZEluZGV4WzBdLCBpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZpeFN1bVtpbmRleF07XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlci5wcm90b3R5cGUuZ2V0SW5kZXhPZiA9IGZ1bmN0aW9uIChhY2N1bXVsYXRlZFZhbHVlKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkVmFsdWUgPSBNYXRoLmZsb29yKGFjY3VtdWxhdGVkVmFsdWUpOyAvL0BwZXJmXG4gICAgICAgIC8vIENvbXB1dGUgYWxsIHN1bXMgKHRvIGdldCBhIGZ1bGx5IHZhbGlkIHByZWZpeFN1bSlcbiAgICAgICAgdGhpcy5nZXRUb3RhbFZhbHVlKCk7XG4gICAgICAgIHZhciBsb3cgPSAwO1xuICAgICAgICB2YXIgaGlnaCA9IHRoaXMudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBtaWQ7XG4gICAgICAgIHZhciBtaWRTdG9wO1xuICAgICAgICB2YXIgbWlkU3RhcnQ7XG4gICAgICAgIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgICAgICAgICAgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSAvIDIpIHwgMDtcbiAgICAgICAgICAgIG1pZFN0b3AgPSB0aGlzLnByZWZpeFN1bVttaWRdO1xuICAgICAgICAgICAgbWlkU3RhcnQgPSBtaWRTdG9wIC0gdGhpcy52YWx1ZXNbbWlkXTtcbiAgICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFZhbHVlIDwgbWlkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBoaWdoID0gbWlkIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjY3VtdWxhdGVkVmFsdWUgPj0gbWlkU3RvcCkge1xuICAgICAgICAgICAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByZWZpeFN1bUluZGV4T2ZSZXN1bHQobWlkLCBhY2N1bXVsYXRlZFZhbHVlIC0gbWlkU3RhcnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFByZWZpeFN1bUNvbXB1dGVyO1xufSgpKTtcbmV4cG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyIH07XG52YXIgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUodmFsdWVzKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlQWNjdW11bGF0ZWRWYWx1ZVN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9hY3R1YWwgPSBuZXcgUHJlZml4U3VtQ29tcHV0ZXIodmFsdWVzKTtcbiAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgfVxuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5fYnVzdENhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jYWNoZUFjY3VtdWxhdGVkVmFsdWVTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX2NhY2hlID0gbnVsbDtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5pbnNlcnRWYWx1ZXMgPSBmdW5jdGlvbiAoaW5zZXJ0SW5kZXgsIGluc2VydFZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5fYWN0dWFsLmluc2VydFZhbHVlcyhpbnNlcnRJbmRleCwgaW5zZXJ0VmFsdWVzKSkge1xuICAgICAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5jaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdHVhbC5jaGFuZ2VWYWx1ZShpbmRleCwgdmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9idXN0Q2FjaGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUucHJvdG90eXBlLnJlbW92ZVZhbHVlcyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdHVhbC5yZW1vdmVWYWx1ZXMoc3RhcnRJbmRleCwgY250KSkge1xuICAgICAgICAgICAgdGhpcy5fYnVzdENhY2hlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5nZXRUb3RhbFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0dWFsLmdldFRvdGFsVmFsdWUoKTtcbiAgICB9O1xuICAgIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlLnByb3RvdHlwZS5nZXRBY2N1bXVsYXRlZFZhbHVlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWwuZ2V0QWNjdW11bGF0ZWRWYWx1ZShpbmRleCk7XG4gICAgfTtcbiAgICBQcmVmaXhTdW1Db21wdXRlcldpdGhDYWNoZS5wcm90b3R5cGUuZ2V0SW5kZXhPZiA9IGZ1bmN0aW9uIChhY2N1bXVsYXRlZFZhbHVlKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkVmFsdWUgPSBNYXRoLmZsb29yKGFjY3VtdWxhdGVkVmFsdWUpOyAvL0BwZXJmXG4gICAgICAgIGlmICh0aGlzLl9jYWNoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlSW5kZXggPSBhY2N1bXVsYXRlZFZhbHVlIC0gdGhpcy5fY2FjaGVBY2N1bXVsYXRlZFZhbHVlU3RhcnQ7XG4gICAgICAgICAgICBpZiAoY2FjaGVJbmRleCA+PSAwICYmIGNhY2hlSW5kZXggPCB0aGlzLl9jYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSBoaXQhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2NhY2hlSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENhY2hlIG1pc3MhXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWwuZ2V0SW5kZXhPZihhY2N1bXVsYXRlZFZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdpdmVzIGEgaGludCB0aGF0IGEgbG90IG9mIHJlcXVlc3RzIGFyZSBhYm91dCB0byBjb21lIGluIGZvciB0aGVzZSBhY2N1bXVsYXRlZCB2YWx1ZXMuXG4gICAgICovXG4gICAgUHJlZml4U3VtQ29tcHV0ZXJXaXRoQ2FjaGUucHJvdG90eXBlLndhcm1VcENhY2hlID0gZnVuY3Rpb24gKGFjY3VtdWxhdGVkVmFsdWVTdGFydCwgYWNjdW11bGF0ZWRWYWx1ZUVuZCkge1xuICAgICAgICB2YXIgbmV3Q2FjaGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYWNjdW11bGF0ZWRWYWx1ZSA9IGFjY3VtdWxhdGVkVmFsdWVTdGFydDsgYWNjdW11bGF0ZWRWYWx1ZSA8PSBhY2N1bXVsYXRlZFZhbHVlRW5kOyBhY2N1bXVsYXRlZFZhbHVlKyspIHtcbiAgICAgICAgICAgIG5ld0NhY2hlW2FjY3VtdWxhdGVkVmFsdWUgLSBhY2N1bXVsYXRlZFZhbHVlU3RhcnRdID0gdGhpcy5nZXRJbmRleE9mKGFjY3VtdWxhdGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhY2hlID0gbmV3Q2FjaGU7XG4gICAgICAgIHRoaXMuX2NhY2hlQWNjdW11bGF0ZWRWYWx1ZVN0YXJ0ID0gYWNjdW11bGF0ZWRWYWx1ZVN0YXJ0O1xuICAgIH07XG4gICAgcmV0dXJuIFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlO1xufSgpKTtcbmV4cG9ydCB7IFByZWZpeFN1bUNvbXB1dGVyV2l0aENhY2hlIH07XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IEVkaXRvclNpbXBsZVdvcmtlckltcGwgfSBmcm9tICcuL2NvbW1vbi9zZXJ2aWNlcy9lZGl0b3JTaW1wbGVXb3JrZXIuanMnO1xuaW1wb3J0IHsgU2ltcGxlV29ya2VyU2VydmVyIH0gZnJvbSAnLi4vYmFzZS9jb21tb24vd29ya2VyL3NpbXBsZVdvcmtlci5qcyc7XG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGZvcmVpZ25Nb2R1bGUpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgdmFyIGVkaXRvcldvcmtlciA9IG5ldyBFZGl0b3JTaW1wbGVXb3JrZXJJbXBsKGZvcmVpZ25Nb2R1bGUpO1xuICAgIHZhciBzaW1wbGVXb3JrZXIgPSBuZXcgU2ltcGxlV29ya2VyU2VydmVyKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShtc2cpO1xuICAgIH0sIGVkaXRvcldvcmtlcik7XG4gICAgc2VsZi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzaW1wbGVXb3JrZXIub25tZXNzYWdlKGUuZGF0YSk7XG4gICAgfTtcbn1cbnNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBJZ25vcmUgZmlyc3QgbWVzc2FnZSBpbiB0aGlzIGNhc2UgYW5kIGluaXRpYWxpemUgaWYgbm90IHlldCBpbml0aWFsaXplZFxuICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZShudWxsKTtcbiAgICB9XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=