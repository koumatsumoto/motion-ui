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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const get_motion_set_stream_1 = __webpack_require__(/*! ./libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream.ts");
const run_on_document_ready_1 = __webpack_require__(/*! ./libs/common/run-on-document-ready */ "./src/libs/common/run-on-document-ready.ts");
run_on_document_ready_1.runOnDocumentReady(() => {
    const debugboard = document.getElementById('debugboard');
    const updateText = (text) => (debugboard.textContent = text);
    updateText('ready');
    get_motion_set_stream_1.getActionStream().subscribe((data) => updateText(JSON.stringify(data)));
});


/***/ }),

/***/ "./src/libs/common/arithmetic/index.ts":
/*!*********************************************!*\
  !*** ./src/libs/common/arithmetic/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./to-fixed */ "./src/libs/common/arithmetic/to-fixed.ts"));
__export(__webpack_require__(/*! ./to-int */ "./src/libs/common/arithmetic/to-int.ts"));
__export(__webpack_require__(/*! ./within */ "./src/libs/common/arithmetic/within.ts"));


/***/ }),

/***/ "./src/libs/common/arithmetic/to-fixed.ts":
/*!************************************************!*\
  !*** ./src/libs/common/arithmetic/to-fixed.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toFixed = (n, precision = 0) => Number.parseFloat(n.toFixed(precision));


/***/ }),

/***/ "./src/libs/common/arithmetic/to-int.ts":
/*!**********************************************!*\
  !*** ./src/libs/common/arithmetic/to-int.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * NOTE: an argument is passed to Number.parseInt as string, to improve performance
 *
 * @param x
 */
exports.floorToInt = (x) => Number.parseInt(x);
exports.roundToInt = (x) => Math.round(x);


/***/ }),

/***/ "./src/libs/common/arithmetic/within.ts":
/*!**********************************************!*\
  !*** ./src/libs/common/arithmetic/within.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.within = (value, min, max) => {
    if (min > max) {
        throw new Error('invalid arguments');
    }
    for (let i = min; i < max; i++) {
        if (i <= value && value <= max) {
            return true;
        }
    }
    return false;
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/get-device-motion-stream.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/get-device-motion-stream.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(/*! ../../rxjs */ "./src/libs/common/rxjs/index.ts");
const rx_operators_1 = __webpack_require__(/*! ./internal/rx-operators */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/rx-operators.ts");
exports.getDeviceMotionEventStream = () => {
    const Subject = rxjs_1.getRx().Subject;
    const subject = new Subject();
    window.addEventListener('devicemotion', (e) => {
        subject.next(e);
    });
    return subject.asObservable();
};
exports.getDeviceMotionStream = () => {
    return exports.getDeviceMotionEventStream().pipe(rx_operators_1.onlyEntire());
};
exports.deprecatedGetDeviceMotionStream = (option = {}, 
// for testing
source = exports.getDeviceMotionStream()) => {
    return source.pipe(rx_operators_1.toInteger(option.precision), rx_operators_1.withChange(), rx_operators_1.asTuple(), rx_operators_1.normalizeByThreshold(option.threshold));
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var get_device_motion_stream_1 = __webpack_require__(/*! ./get-device-motion-stream */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/get-device-motion-stream.ts");
exports.getDeviceMotionStream = get_device_motion_stream_1.getDeviceMotionStream;


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/calculate-average.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/calculate-average.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMotionAverage = (changes) => {
    if (changes.length < 1) {
        return null;
    }
    const count = changes.length;
    const summary = changes.reduce((acc, val) => ({
        acceleration: {
            x: acc.acceleration.x + val.acceleration.x,
            y: acc.acceleration.y + val.acceleration.y,
            z: acc.acceleration.z + val.acceleration.z,
        },
        accelerationIncludingGravity: {
            x: acc.accelerationIncludingGravity.x + val.accelerationIncludingGravity.x,
            y: acc.accelerationIncludingGravity.y + val.accelerationIncludingGravity.y,
            z: acc.accelerationIncludingGravity.z + val.accelerationIncludingGravity.z,
        },
        rotationRate: {
            alpha: acc.rotationRate.alpha + val.rotationRate.alpha,
            beta: acc.rotationRate.beta + val.rotationRate.beta,
            gamma: acc.rotationRate.gamma + val.rotationRate.gamma,
        },
    }));
    return {
        acceleration: {
            x: summary.acceleration.x / count,
            y: summary.acceleration.y / count,
            z: summary.acceleration.z / count,
        },
        accelerationIncludingGravity: {
            x: summary.accelerationIncludingGravity.x / count,
            y: summary.accelerationIncludingGravity.y / count,
            z: summary.accelerationIncludingGravity.z / count,
        },
        rotationRate: {
            alpha: summary.rotationRate.alpha / count,
            beta: summary.rotationRate.beta / count,
            gamma: summary.rotationRate.gamma / count,
        },
    };
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/is-entire-device-motion.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/is-entire-device-motion.ts ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntireDeviceMotion = (e) => {
    const a = e.acceleration;
    if (a === null || a.x === null || a.y === null || a.z === null) {
        return false;
    }
    const g = e.accelerationIncludingGravity;
    if (g === null || g.x === null || g.y === null || g.z === null) {
        return false;
    }
    const r = e.rotationRate;
    if (r === null || r.alpha === null || r.beta === null || r.gamma === null) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/make-change.ts":
/*!*************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/make-change.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arithmetic_1 = __webpack_require__(/*! ../../../arithmetic */ "./src/libs/common/arithmetic/index.ts");
exports.calculateMotionChange = (prev, curr) => ({
    acceleration: {
        x: curr.acceleration.x - prev.acceleration.x,
        y: curr.acceleration.y - prev.acceleration.y,
        z: curr.acceleration.z - prev.acceleration.z,
    },
    accelerationIncludingGravity: {
        x: curr.accelerationIncludingGravity.x - prev.accelerationIncludingGravity.x,
        y: curr.accelerationIncludingGravity.y - prev.accelerationIncludingGravity.y,
        z: curr.accelerationIncludingGravity.z - prev.accelerationIncludingGravity.z,
    },
    rotationRate: {
        alpha: curr.rotationRate.alpha - prev.rotationRate.alpha,
        beta: curr.rotationRate.beta - prev.rotationRate.beta,
        gamma: curr.rotationRate.gamma - prev.rotationRate.gamma,
    },
});
const calc = (a, b, c) => arithmetic_1.floorToInt((a - b) / c);
exports.makeTuple = (v) => ({
    acceleration: {
        x: [v.data.acceleration.x, v.change.acceleration.x],
        y: [v.data.acceleration.y, v.change.acceleration.y],
        z: [v.data.acceleration.z, v.change.acceleration.z],
    },
    accelerationIncludingGravity: {
        x: [v.data.accelerationIncludingGravity.x, v.change.accelerationIncludingGravity.x],
        y: [v.data.accelerationIncludingGravity.y, v.change.accelerationIncludingGravity.y],
        z: [v.data.accelerationIncludingGravity.z, v.change.accelerationIncludingGravity.z],
    },
    rotationRate: {
        alpha: [v.data.rotationRate.alpha, v.change.rotationRate.alpha],
        beta: [v.data.rotationRate.beta, v.change.rotationRate.beta],
        gamma: [v.data.rotationRate.gamma, v.change.rotationRate.gamma],
    },
});
// TODO: use when refactor withChange operator impl
exports.makeChange = (curr, diff) => ({
    acceleration: {
        x: [curr.acceleration.x, diff.acceleration.x],
        y: [curr.acceleration.y, diff.acceleration.y],
        z: [curr.acceleration.z, diff.acceleration.z],
    },
    accelerationIncludingGravity: {
        x: [curr.accelerationIncludingGravity.x, diff.accelerationIncludingGravity.x],
        y: [curr.accelerationIncludingGravity.y, diff.accelerationIncludingGravity.y],
        z: [curr.accelerationIncludingGravity.z, diff.accelerationIncludingGravity.z],
    },
    rotationRate: {
        alpha: [curr.rotationRate.alpha, diff.rotationRate.alpha],
        beta: [curr.rotationRate.beta, diff.rotationRate.beta],
        gamma: [curr.rotationRate.gamma, diff.rotationRate.gamma],
    },
});
/**
 * @deprecated - wrong implementation, should not divide with interval, values are already calculated as per unit
 */
exports.getChangePerMillisecond = (prev, curr) => ({
    acceleration: {
        x: calc(curr.acceleration.x, prev.acceleration.x, curr.interval),
        y: calc(curr.acceleration.y, prev.acceleration.y, curr.interval),
        z: calc(curr.acceleration.z, prev.acceleration.z, curr.interval),
    },
    accelerationIncludingGravity: {
        x: calc(curr.accelerationIncludingGravity.x, prev.accelerationIncludingGravity.x, curr.interval),
        y: calc(curr.accelerationIncludingGravity.y, prev.accelerationIncludingGravity.y, curr.interval),
        z: calc(curr.accelerationIncludingGravity.z, prev.accelerationIncludingGravity.z, curr.interval),
    },
    rotationRate: {
        alpha: calc(curr.rotationRate.alpha, prev.rotationRate.alpha, curr.interval),
        beta: calc(curr.rotationRate.beta, prev.rotationRate.beta, curr.interval),
        gamma: calc(curr.rotationRate.gamma, prev.rotationRate.gamma, curr.interval),
    },
});


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/normalize.ts":
/*!***********************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/normalize.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arithmetic_1 = __webpack_require__(/*! ../../../arithmetic */ "./src/libs/common/arithmetic/index.ts");
const defaultThreshold = {
    acceleration: 10 ** 6,
    accelerationIncludingGravity: 10 ** 6,
    rotationRate: 10 ** 7,
};
const calc = (v, threshold) => [arithmetic_1.roundToInt(v[0] / threshold), arithmetic_1.roundToInt(v[1] / threshold)];
exports.normalize = (v, t = defaultThreshold) => ({
    acceleration: {
        x: calc(v.acceleration.x, t.acceleration),
        y: calc(v.acceleration.y, t.acceleration),
        z: calc(v.acceleration.z, t.acceleration),
    },
    accelerationIncludingGravity: {
        x: calc(v.accelerationIncludingGravity.x, t.accelerationIncludingGravity),
        y: calc(v.accelerationIncludingGravity.y, t.accelerationIncludingGravity),
        z: calc(v.accelerationIncludingGravity.z, t.accelerationIncludingGravity),
    },
    rotationRate: {
        alpha: calc(v.rotationRate.alpha, t.rotationRate),
        beta: calc(v.rotationRate.beta, t.rotationRate),
        gamma: calc(v.rotationRate.gamma, t.rotationRate),
    },
});


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/rx-operators.ts":
/*!**************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/rx-operators.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(/*! ../../../rxjs */ "./src/libs/common/rxjs/index.ts");
const make_change_1 = __webpack_require__(/*! ./make-change */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/make-change.ts");
const calculate_average_1 = __webpack_require__(/*! ./calculate-average */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/calculate-average.ts");
const to_int_1 = __webpack_require__(/*! ./to-int */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/to-int.ts");
const normalize_1 = __webpack_require__(/*! ./normalize */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/normalize.ts");
const is_entire_device_motion_1 = __webpack_require__(/*! ./is-entire-device-motion */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/is-entire-device-motion.ts");
// TODO: use pairwise
exports.withChange = () => (source) => {
    const { scan, skip } = rxjs_1.getRx().operators;
    return source.pipe(scan((state, val) => {
        if (state === null) {
            return {
                data: val,
                // must be skipped below, skip(1)
                change: undefined,
            };
        }
        else {
            return {
                data: val,
                change: make_change_1.calculateMotionChange(state.data, val),
            };
        }
    }, null), skip(1));
};
/**
 * @param denominator - default value is 4, used as buffer count
 */
exports.toAverage = (denominator = 4) => (source) => {
    const { bufferCount, map } = rxjs_1.getRx().operators;
    return source.pipe(bufferCount(denominator), map((items) => calculate_average_1.calculateMotionAverage(items)));
};
exports.toInteger = (precision = 8) => (source) => {
    const { map } = rxjs_1.getRx().operators;
    return source.pipe(map((v) => to_int_1.toInt(v, precision)));
};
exports.asTuple = () => (source) => {
    const { map } = rxjs_1.getRx().operators;
    return source.pipe(map(make_change_1.makeTuple));
};
exports.normalizeByThreshold = (threshold) => (source) => {
    const { map } = rxjs_1.getRx().operators;
    return source.pipe(map((v) => normalize_1.normalize(v, threshold)));
};
exports.onlyEntire = () => (source) => {
    const { filter } = rxjs_1.getRx().operators;
    return source.pipe(filter(is_entire_device_motion_1.isEntireDeviceMotion));
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/to-int.ts":
/*!********************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/devicemotion/internal/to-int.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ti = (v, exponentiation) => {
    return Number.parseInt((v * exponentiation).toFixed(0));
};
exports.toInt = (data, precision = 8) => {
    const e = 10 ** precision;
    return {
        interval: data.interval,
        acceleration: {
            x: ti(data.acceleration.x, e),
            y: ti(data.acceleration.y, e),
            z: ti(data.acceleration.z, e),
        },
        accelerationIncludingGravity: {
            x: ti(data.accelerationIncludingGravity.x, e),
            y: ti(data.accelerationIncludingGravity.y, e),
            z: ti(data.accelerationIncludingGravity.z, e),
        },
        rotationRate: {
            alpha: ti(data.rotationRate.alpha, e),
            beta: ti(data.rotationRate.beta, e),
            gamma: ti(data.rotationRate.gamma, e),
        },
    };
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/get-device-orientation-stream.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/get-device-orientation-stream.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(/*! ../../rxjs */ "./src/libs/common/rxjs/index.ts");
const rx_operators_1 = __webpack_require__(/*! ./internal/rx-operators */ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/rx-operators.ts");
exports.getDeviceOrientationEventStream = () => {
    const Subject = rxjs_1.getRx().Subject;
    const subject = new Subject();
    window.addEventListener('deviceorientation', (e) => {
        subject.next(e);
    });
    return subject.asObservable();
};
exports.getDeviceOrientationStream = () => {
    return exports.getDeviceOrientationEventStream().pipe(rx_operators_1.extract(), rx_operators_1.onlyEntire());
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/is-entire-device-orientation.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/is-entire-device-orientation.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntireDeviceOrientation = (e) => {
    if (e.alpha === null || e.beta === null || e.gamma === null) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/rx-operators.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/rx-operators.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(/*! ../../../rxjs */ "./src/libs/common/rxjs/index.ts");
const arithmetic_1 = __webpack_require__(/*! ../../../arithmetic */ "./src/libs/common/arithmetic/index.ts");
const is_entire_device_orientation_1 = __webpack_require__(/*! ./is-entire-device-orientation */ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/internal/is-entire-device-orientation.ts");
/**
 * strip unnecessary properties
 */
exports.extract = () => (source) => {
    const { map } = rxjs_1.getRx().operators;
    return source.pipe(map((v) => ({
        absolute: v.absolute,
        alpha: v.alpha,
        beta: v.beta,
        gamma: v.gamma,
    })));
};
exports.onlyEntire = () => (source) => {
    const { filter } = rxjs_1.getRx().operators;
    return source.pipe(filter(is_entire_device_orientation_1.isEntireDeviceOrientation));
};
exports.roundDecimal = () => (source) => {
    const { map } = rxjs_1.getRx().operators;
    return source.pipe(map((v) => ({
        absolute: v.absolute,
        alpha: arithmetic_1.roundToInt(v.alpha),
        beta: arithmetic_1.roundToInt(v.beta),
        gamma: arithmetic_1.roundToInt(v.gamma),
    })));
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/hold.ts":
/*!************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/hold.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stoppingCount = 4;
exports.shortHoldCount = 7;
exports.motionEnteringCount = 8;
exports.longHoldCount = 10;
const checkHold = (movements) => {
    let consecutive = 0;
    // check value from right
    for (let i = movements.length - 1; i >= 0; i--) {
        if (movements[i].rate === 0) {
            consecutive++;
        }
        else {
            break;
        }
    }
    if (consecutive >= exports.longHoldCount) {
        return 'long hold';
    }
    else if (consecutive >= exports.shortHoldCount) {
        return 'short hold';
    }
    else if (consecutive >= exports.stoppingCount) {
        return 'stopping';
    }
    else {
        return null;
    }
};
const isConsecutiveZero = (movements, length) => {
    if (movements.length !== length) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        if (movements[i].rate !== 0) {
            return false;
        }
    }
    return true;
};
/**
 *
 * 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0
 *
 * @param movements
 */
exports.isShortHold = (movements) => {
    return isConsecutiveZero(movements, exports.shortHoldCount);
};
/**
 *
 * 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 1
 *
 * @param movements
 */
exports.checkEnterMotionType = (movements) => {
    if (movements.length < exports.motionEnteringCount) {
        return null;
    }
    if (exports.isShortHold(movements.slice(-exports.shortHoldCount))) {
        if (movements[movements.length - 1].rate > 1) {
            return 'quick start';
        }
        else if (movements[movements.length - 1].rate > 0) {
            return 'slow start';
        }
    }
    return null;
};
exports.checkHoldAndEntering = (movements) => {
    const hold = checkHold(movements);
    if (hold) {
        return hold;
    }
    else {
        return exports.checkEnterMotionType(movements);
    }
};
/**
 *
 * 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0
 *
 * @param movements
 */
exports.isLongHold = (movements) => {
    return isConsecutiveZero(movements, exports.longHoldCount);
};
/**
 *
 * 0 -> 0 -> 0 -> 0
 *
 * @param movements
 */
exports.isStopping = (movements) => {
    return isConsecutiveZero(movements, exports.stoppingCount);
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/reverse.ts":
/*!***************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/reverse.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/util.ts");
exports.quickReverseCount = 2;
exports.isQuickReverse = (movements) => {
    if (movements.length < exports.quickReverseCount) {
        return false;
    }
    const values = util_1.simplifyMovements(movements);
    const first = values[0];
    const second = values[1];
    if (first.rate < 3) {
        return false;
    }
    if (second.rate > 0) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/util.ts":
/*!************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/util.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifyMovements = (movements) => {
    if (movements.length < 1) {
        return [];
    }
    let baseDirection;
    return movements.map((m) => {
        if (baseDirection === undefined && m.rate !== 0) {
            baseDirection = m.direction;
        }
        if (baseDirection === undefined || m.direction === baseDirection) {
            return {
                rate: m.rate,
                align: m.align,
            };
        }
        else {
            return {
                // avoid -0
                rate: m.rate === 0 ? 0 : -m.rate,
                align: m.align,
            };
        }
    });
};
exports.contain = (source, pattern) => {
    for (let i = 0; i <= source.length - pattern.length; i++) {
        let mismatch = false;
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] === source[i + j]) {
                continue;
            }
            else {
                mismatch = true;
                break;
            }
        }
        if (!mismatch) {
            return true;
        }
    }
    return false;
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream.ts":
/*!**********************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/get-motion-set-stream.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const get_device_orientation_stream_1 = __webpack_require__(/*! ../deviceorientation/get-device-orientation-stream */ "./src/libs/common/deviceorientation-and-devicemotion/deviceorientation/get-device-orientation-stream.ts");
const devicemotion_1 = __webpack_require__(/*! ../devicemotion */ "./src/libs/common/deviceorientation-and-devicemotion/devicemotion/index.ts");
const rxjs_1 = __webpack_require__(/*! ../../rxjs */ "./src/libs/common/rxjs/index.ts");
const combine_1 = __webpack_require__(/*! ./movement/combine */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/combine.ts");
const classify_movement_1 = __webpack_require__(/*! ./movement/classify-movement */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/classify-movement.ts");
const hold_1 = __webpack_require__(/*! ./action/hold */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/hold.ts");
const reverse_1 = __webpack_require__(/*! ./action/reverse */ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/action/reverse.ts");
exports.getMovementStream = (orientation$ = get_device_orientation_stream_1.getDeviceOrientationStream(), motion$ = devicemotion_1.getDeviceMotionStream()) => {
    const { bufferCount, map, withLatestFrom } = rxjs_1.getRx().operators;
    let sid = 0;
    return motion$.pipe(bufferCount(4), withLatestFrom(orientation$), map(([motions, orientation]) => {
        const gammas = motions.map((m) => m.rotationRate.gamma);
        const aggregation = combine_1.combine(orientation.gamma, gammas);
        const data = classify_movement_1.classify(aggregation);
        return {
            sid: sid++,
            data,
        };
    }));
};
exports.debug3 = () => {
    const { filter, map } = rxjs_1.getRx().operators;
    return exports.getMovementStream().pipe(filter((d) => d.data.rate > 0), map((d) => {
        const di = d.data.direction === 'up' ? 'u' : 'd';
        return `${di}-${d.data.rate}: ${d.sid}`;
    }), rxjs_1.withHistory(20), map((array) => array.reverse()));
};
exports.getActionStream = () => {
    const { Observable } = rxjs_1.getRx();
    const { map } = rxjs_1.getRx().operators;
    const movementCount = 10;
    return new Observable((subscriber) => {
        exports.getMovementStream()
            .pipe(rxjs_1.withHistory(movementCount), map((items) => {
            const movements = items.map((m) => m.data);
            const sid = [items[0].sid, items[items.length - 1].sid];
            const type = hold_1.checkHoldAndEntering(movements);
            if (type) {
                return {
                    type,
                    sid,
                };
            }
            if (reverse_1.isQuickReverse(movements.slice(-2))) {
                return {
                    type: 'quick reverse',
                    sid,
                };
            }
            return {
                type: 'moving',
                sid,
            };
        }))
            .subscribe((value) => {
            subscriber.next(value);
        });
    });
};
exports.getCommandHistoryStream = () => {
    const { map } = rxjs_1.getRx().operators;
    return exports.getActionStream().pipe(rxjs_1.withHistory(32), map((values) => values.map((v) => v.type).reverse()));
};
exports.getLastCommandStream = () => {
    const { distinctUntilChanged, map } = rxjs_1.getRx().operators;
    return exports.getActionStream().pipe(map((v) => v.type), distinctUntilChanged(), rxjs_1.withHistory(8), map((values) => values.reverse()));
};
exports.getCommandStream = () => {
    const { Observable } = rxjs_1.getRx();
    const { map } = rxjs_1.getRx().operators;
    const actionCount = 6;
    return new Observable((subscriber) => {
        exports.getActionStream().pipe(rxjs_1.withHistory(actionCount), map((action) => {
            // not implemented
        }));
    });
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/classify-movement.ts":
/*!***************************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/classify-movement.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// TODO: make generalize for other types like as alpha, beta, x, y, z
exports.defaultThreshold = {
    veryHigh: 120,
    high: 90,
    // to detect tap
    tap: 38,
    low: 20,
    round: 10,
};
const calcRate = (value, threshold) => {
    if (value > threshold.veryHigh) {
        return 5;
    }
    else if (value > threshold.high) {
        return 4;
    }
    else if (value > threshold.tap) {
        return 3;
    }
    else if (value > threshold.low) {
        return 2;
    }
    else if (value > threshold.round) {
        return 1;
    }
    else {
        return 0;
    }
};
exports.classify = (a, threshold = exports.defaultThreshold) => {
    if (a.first < a.last) {
        // up
        const rate = calcRate(a.last - a.first, threshold);
        const align = a.count === a.increase;
        return {
            orientation: a.orientation,
            direction: 'up',
            rate,
            align,
        };
    }
    else if (a.first > a.last) {
        // down
        const rate = calcRate(a.first - a.last, threshold);
        const align = a.count === a.decrease;
        return {
            orientation: a.orientation,
            direction: 'down',
            rate,
            align,
        };
    }
    else {
        let betweenPositive;
        let betweenNegative;
        if (a.first > 0) {
            betweenPositive = a.max - a.first;
            betweenNegative = a.min > 0 ? a.first - a.min : Math.abs(a.min - a.first);
        }
        else {
            betweenPositive = a.max < 0 ? Math.abs(a.first + a.max) : a.max - a.first;
            betweenNegative = Math.abs(a.min + a.first);
        }
        return {
            orientation: a.orientation,
            direction: betweenPositive > betweenNegative ? 'up' : 'down',
            rate: 0,
            align: a.first === a.max && a.first === a.min,
        };
    }
};


/***/ }),

/***/ "./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/combine.ts":
/*!*****************************************************************************************!*\
  !*** ./src/libs/common/deviceorientation-and-devicemotion/new-impl/movement/combine.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arithmetic_1 = __webpack_require__(/*! ../../../arithmetic */ "./src/libs/common/arithmetic/index.ts");
// TODO: currently used only for gamma
exports.combine = (orientation, accelerations) => {
    if (accelerations.length < 2) {
        throw new Error('bad impl');
    }
    const first = accelerations[0];
    const last = accelerations[accelerations.length - 1];
    const movement = {
        orientation: orientation >= 0 ? 'up' : 'down',
        count: accelerations.length,
        increase: 0,
        decrease: 0,
        nochange: 0,
        first,
        last,
        max: accelerations[0],
        min: accelerations[0],
        avg: accelerations[0],
    };
    let sum = 0;
    for (let i = 1; i < accelerations.length; i++) {
        const p = accelerations[i - 1];
        const v = accelerations[i];
        if (v > p) {
            movement.increase++;
        }
        else if (v < p) {
            movement.decrease++;
        }
        else {
            movement.nochange++;
        }
        sum += v;
        movement.max = Math.max(movement.max, v);
        movement.min = Math.min(movement.min, v);
    }
    movement.avg = sum / movement.count;
    movement.avg = arithmetic_1.roundToInt(movement.avg);
    movement.min = arithmetic_1.roundToInt(movement.min);
    movement.max = arithmetic_1.roundToInt(movement.max);
    movement.first = arithmetic_1.roundToInt(movement.first);
    movement.last = arithmetic_1.roundToInt(movement.last);
    return movement;
};


/***/ }),

/***/ "./src/libs/common/load-scripts/load-scripts.ts":
/*!******************************************************!*\
  !*** ./src/libs/common/load-scripts/load-scripts.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = async (src) => new Promise((resolve, reject) => {
    const elem = document.createElement('script');
    elem.setAttribute('src', src);
    elem.addEventListener('load', (e) => resolve(e), { once: true });
    elem.addEventListener('error', (e) => reject(e), { once: true });
    document.body.appendChild(elem);
});
exports.loadScripts = (urls) => Promise.all(urls.map((u) => exports.loadScript(u)));


/***/ }),

/***/ "./src/libs/common/run-on-document-ready.ts":
/*!**************************************************!*\
  !*** ./src/libs/common/run-on-document-ready.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.runOnDocumentReady = (fn) => {
    // see if DOM is already available
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // call on next available tick
        setTimeout(fn, 1);
    }
    else {
        document.addEventListener('DOMContentLoaded', () => fn());
    }
};


/***/ }),

/***/ "./src/libs/common/rxjs/import-rxjs.ts":
/*!*********************************************!*\
  !*** ./src/libs/common/rxjs/import-rxjs.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const load_scripts_1 = __webpack_require__(/*! ../load-scripts/load-scripts */ "./src/libs/common/load-scripts/load-scripts.ts");
exports.importRxJS = () => new Promise((resolve, reject) => {
    if (window.rxjs) {
        resolve(window.rxjs);
    }
    load_scripts_1.loadScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.0.0-alpha.0/rxjs.umd.min.js')
        .then(() => resolve(window.rxjs))
        .catch(reject);
});
// lazy load
exports.getRx = () => window.rxjs;


/***/ }),

/***/ "./src/libs/common/rxjs/index.ts":
/*!***************************************!*\
  !*** ./src/libs/common/rxjs/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./import-rxjs */ "./src/libs/common/rxjs/import-rxjs.ts"));
__export(__webpack_require__(/*! ./operators */ "./src/libs/common/rxjs/operators/index.ts"));


/***/ }),

/***/ "./src/libs/common/rxjs/operators/index.ts":
/*!*************************************************!*\
  !*** ./src/libs/common/rxjs/operators/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./with-history */ "./src/libs/common/rxjs/operators/with-history.ts"));


/***/ }),

/***/ "./src/libs/common/rxjs/operators/with-history.ts":
/*!********************************************************!*\
  !*** ./src/libs/common/rxjs/operators/with-history.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! ../index */ "./src/libs/common/rxjs/index.ts");
exports.withHistory = (n) => (source) => {
    const { Observable } = index_1.getRx();
    return new Observable((subscriber) => {
        const values = [];
        return source.subscribe({
            next(x) {
                values.push(x);
                if (values.length > n) {
                    values.shift();
                    subscriber.next([...values]);
                }
                else if (values.length < n) {
                    return;
                }
                else {
                    subscriber.next([...values]);
                }
            },
            error(err) {
                subscriber.error(err);
            },
            complete() {
                subscriber.complete();
            },
        });
    });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9hcml0aG1ldGljL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9hcml0aG1ldGljL3RvLWZpeGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9hcml0aG1ldGljL3RvLWludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vYXJpdGhtZXRpYy93aXRoaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vZGV2aWNlbW90aW9uL2dldC1kZXZpY2UtbW90aW9uLXN0cmVhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vZGV2aWNlb3JpZW50YXRpb24tYW5kLWRldmljZW1vdGlvbi9kZXZpY2Vtb3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vZGV2aWNlbW90aW9uL2ludGVybmFsL2NhbGN1bGF0ZS1hdmVyYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9kZXZpY2VvcmllbnRhdGlvbi1hbmQtZGV2aWNlbW90aW9uL2RldmljZW1vdGlvbi9pbnRlcm5hbC9pcy1lbnRpcmUtZGV2aWNlLW1vdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vZGV2aWNlb3JpZW50YXRpb24tYW5kLWRldmljZW1vdGlvbi9kZXZpY2Vtb3Rpb24vaW50ZXJuYWwvbWFrZS1jaGFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vZGV2aWNlbW90aW9uL2ludGVybmFsL25vcm1hbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vZGV2aWNlb3JpZW50YXRpb24tYW5kLWRldmljZW1vdGlvbi9kZXZpY2Vtb3Rpb24vaW50ZXJuYWwvcngtb3BlcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9kZXZpY2VvcmllbnRhdGlvbi1hbmQtZGV2aWNlbW90aW9uL2RldmljZW1vdGlvbi9pbnRlcm5hbC90by1pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vZGV2aWNlb3JpZW50YXRpb24vZ2V0LWRldmljZS1vcmllbnRhdGlvbi1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vZGV2aWNlb3JpZW50YXRpb24vaW50ZXJuYWwvaXMtZW50aXJlLWRldmljZS1vcmllbnRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vZGV2aWNlb3JpZW50YXRpb24tYW5kLWRldmljZW1vdGlvbi9kZXZpY2VvcmllbnRhdGlvbi9pbnRlcm5hbC9yeC1vcGVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vbmV3LWltcGwvYWN0aW9uL2hvbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vbmV3LWltcGwvYWN0aW9uL3JldmVyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vbmV3LWltcGwvYWN0aW9uL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2RldmljZW9yaWVudGF0aW9uLWFuZC1kZXZpY2Vtb3Rpb24vbmV3LWltcGwvZ2V0LW1vdGlvbi1zZXQtc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9kZXZpY2VvcmllbnRhdGlvbi1hbmQtZGV2aWNlbW90aW9uL25ldy1pbXBsL21vdmVtZW50L2NsYXNzaWZ5LW1vdmVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2NvbW1vbi9kZXZpY2VvcmllbnRhdGlvbi1hbmQtZGV2aWNlbW90aW9uL25ldy1pbXBsL21vdmVtZW50L2NvbWJpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL2xvYWQtc2NyaXB0cy9sb2FkLXNjcmlwdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL3J1bi1vbi1kb2N1bWVudC1yZWFkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vcnhqcy9pbXBvcnQtcnhqcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vcnhqcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9jb21tb24vcnhqcy9vcGVyYXRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvY29tbW9uL3J4anMvb3BlcmF0b3JzL3dpdGgtaGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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Q0FBQztRQUM3QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUNELDRCQUE0QixFQUFFO1FBQzVCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0tBQzlFO0lBQ0QsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDekQsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdEQsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7S0FDMUQ7Q0FDRixDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNVLCtCQUF1QixHQUFHLENBQUMsSUFBa0IsRUFBRSxJQUFrQixFQUFxQixFQUFFLENBQUMsQ0FBQztJQUNyRyxZQUFZLEVBQUU7UUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFF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QUFNO29CQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQztZQUNELEtBQUssQ0FBQyxHQUFVO2dCQUNkLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUNELFFBQVE7Z0JBQ04sVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IGdldEFjdGlvblN0cmVhbSB9IGZyb20gJy4vbGlicy9jb21tb24vZGV2aWNlb3JpZW50YXRpb24tYW5kLWRldmljZW1vdGlvbi9uZXctaW1wbC9nZXQtbW90aW9uLXNldC1zdHJlYW0nO1xuaW1wb3J0IHsgcnVuT25Eb2N1bWVudFJlYWR5IH0gZnJvbSAnLi9saWJzL2NvbW1vbi9ydW4tb24tZG9jdW1lbnQtcmVhZHknO1xuXG5ydW5PbkRvY3VtZW50UmVhZHkoKCkgPT4ge1xuICBjb25zdCBkZWJ1Z2JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnYm9hcmQnKSE7XG4gIGNvbnN0IHVwZGF0ZVRleHQgPSAodGV4dDogc3RyaW5nKSA9PiAoZGVidWdib2FyZC50ZXh0Q29udGVudCA9IHRleHQpO1xuXG4gIHVwZGF0ZVRleHQoJ3JlYWR5Jyk7XG4gIGdldEFjdGlvblN0cmVhbSgpLnN1YnNjcmliZSgoZGF0YSkgPT4gdXBkYXRlVGV4dChKU09OLnN0cmluZ2lmeShkYXRhKSkpO1xufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3RvLWZpeGVkJztcbmV4cG9ydCAqIGZyb20gJy4vdG8taW50JztcbmV4cG9ydCAqIGZyb20gJy4vd2l0aGluJztcbiIsImV4cG9ydCBjb25zdCB0b0ZpeGVkID0gKG46IG51bWJlciwgcHJlY2lzaW9uID0gMCkgPT4gTnVtYmVyLnBhcnNlRmxvYXQobi50b0ZpeGVkKHByZWNpc2lvbikpO1xuIiwiLyoqXG4gKiBOT1RFOiBhbiBhcmd1bWVudCBpcyBwYXNzZWQgdG8gTnVtYmVyLnBhcnNlSW50IGFzIHN0cmluZywgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICpcbiAqIEBwYXJhbSB4XG4gKi9cbmV4cG9ydCBjb25zdCBmbG9vclRvSW50ID0gKHg6IG51bWJlcikgPT4gTnVtYmVyLnBhcnNlSW50KCh4IGFzIHVua25vd24pIGFzIHN0cmluZyk7XG5cbmV4cG9ydCBjb25zdCByb3VuZFRvSW50ID0gKHg6IG51bWJlcikgPT4gTWF0aC5yb3VuZCh4KTtcbiIsImV4cG9ydCBjb25zdCB3aXRoaW4gPSAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gIGlmIChtaW4gPiBtYXgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gbWluOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoaSA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBtYXgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXRSeCB9IGZyb20gJy4uLy4uL3J4anMnO1xuaW1wb3J0IHsgRGV2aWNlTW90aW9uLCBQYXJ0aWFsRGV2aWNlTW90aW9uLCBQcmVjaXNpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBUaHJlc2hvbGRPcHRpb24gfSBmcm9tICcuL2ludGVybmFsL25vcm1hbGl6ZSc7XG5pbXBvcnQgeyBhc1R1cGxlLCBub3JtYWxpemVCeVRocmVzaG9sZCwgb25seUVudGlyZSwgdG9JbnRlZ2VyLCB3aXRoQ2hhbmdlIH0gZnJvbSAnLi9pbnRlcm5hbC9yeC1vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlTW90aW9uRXZlbnRTdHJlYW0gPSAoKSA9PiB7XG4gIGNvbnN0IFN1YmplY3QgPSBnZXRSeCgpLlN1YmplY3Q7XG4gIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxQYXJ0aWFsRGV2aWNlTW90aW9uPigpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCAoZTogRGV2aWNlTW90aW9uRXZlbnQpID0+IHtcbiAgICBzdWJqZWN0Lm5leHQoZSk7XG4gIH0pO1xuXG4gIHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERldmljZU1vdGlvblN0cmVhbSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldERldmljZU1vdGlvbkV2ZW50U3RyZWFtKCkucGlwZShvbmx5RW50aXJlKCkpIGFzIE9ic2VydmFibGU8RGV2aWNlTW90aW9uPjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZXByZWNhdGVkR2V0RGV2aWNlTW90aW9uU3RyZWFtID0gKFxuICBvcHRpb246IHtcbiAgICBwcmVjaXNpb24/OiBQcmVjaXNpb247XG4gICAgdGhyZXNob2xkPzogVGhyZXNob2xkT3B0aW9uO1xuICB9ID0ge30sXG4gIC8vIGZvciB0ZXN0aW5nXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxEZXZpY2VNb3Rpb24+ID0gZ2V0RGV2aWNlTW90aW9uU3RyZWFtKCksXG4pID0+IHtcbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRvSW50ZWdlcihvcHRpb24ucHJlY2lzaW9uKSwgd2l0aENoYW5nZSgpLCBhc1R1cGxlKCksIG5vcm1hbGl6ZUJ5VGhyZXNob2xkKG9wdGlvbi50aHJlc2hvbGQpKTtcbn07XG4iLCJleHBvcnQgeyBnZXREZXZpY2VNb3Rpb25TdHJlYW0gfSBmcm9tICcuL2dldC1kZXZpY2UtbW90aW9uLXN0cmVhbSc7XG4iLCJpbXBvcnQgeyBEZXZpY2VNb3Rpb25WYWx1ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZU1vdGlvbkF2ZXJhZ2UgPSAoY2hhbmdlczogRGV2aWNlTW90aW9uVmFsdWVbXSk6IERldmljZU1vdGlvblZhbHVlIHwgbnVsbCA9PiB7XG4gIGlmIChjaGFuZ2VzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNvdW50ID0gY2hhbmdlcy5sZW5ndGg7XG4gIGNvbnN0IHN1bW1hcnkgPSBjaGFuZ2VzLnJlZHVjZSgoYWNjLCB2YWwpID0+ICh7XG4gICAgYWNjZWxlcmF0aW9uOiB7XG4gICAgICB4OiBhY2MuYWNjZWxlcmF0aW9uLnggKyB2YWwuYWNjZWxlcmF0aW9uLngsXG4gICAgICB5OiBhY2MuYWNjZWxlcmF0aW9uLnkgKyB2YWwuYWNjZWxlcmF0aW9uLnksXG4gICAgICB6OiBhY2MuYWNjZWxlcmF0aW9uLnogKyB2YWwuYWNjZWxlcmF0aW9uLnosXG4gICAgfSxcbiAgICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiB7XG4gICAgICB4OiBhY2MuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54ICsgdmFsLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCxcbiAgICAgIHk6IGFjYy5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnkgKyB2YWwuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55LFxuICAgICAgejogYWNjLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueiArIHZhbC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnosXG4gICAgfSxcbiAgICByb3RhdGlvblJhdGU6IHtcbiAgICAgIGFscGhhOiBhY2Mucm90YXRpb25SYXRlLmFscGhhICsgdmFsLnJvdGF0aW9uUmF0ZS5hbHBoYSxcbiAgICAgIGJldGE6IGFjYy5yb3RhdGlvblJhdGUuYmV0YSArIHZhbC5yb3RhdGlvblJhdGUuYmV0YSxcbiAgICAgIGdhbW1hOiBhY2Mucm90YXRpb25SYXRlLmdhbW1hICsgdmFsLnJvdGF0aW9uUmF0ZS5nYW1tYSxcbiAgICB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgIHg6IHN1bW1hcnkuYWNjZWxlcmF0aW9uLnggLyBjb3VudCxcbiAgICAgIHk6IHN1bW1hcnkuYWNjZWxlcmF0aW9uLnkgLyBjb3VudCxcbiAgICAgIHo6IHN1bW1hcnkuYWNjZWxlcmF0aW9uLnogLyBjb3VudCxcbiAgICB9LFxuICAgIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICAgIHg6IHN1bW1hcnkuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54IC8gY291bnQsXG4gICAgICB5OiBzdW1tYXJ5LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSAvIGNvdW50LFxuICAgICAgejogc3VtbWFyeS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnogLyBjb3VudCxcbiAgICB9LFxuICAgIHJvdGF0aW9uUmF0ZToge1xuICAgICAgYWxwaGE6IHN1bW1hcnkucm90YXRpb25SYXRlLmFscGhhIC8gY291bnQsXG4gICAgICBiZXRhOiBzdW1tYXJ5LnJvdGF0aW9uUmF0ZS5iZXRhIC8gY291bnQsXG4gICAgICBnYW1tYTogc3VtbWFyeS5yb3RhdGlvblJhdGUuZ2FtbWEgLyBjb3VudCxcbiAgICB9LFxuICB9O1xufTtcbiIsImltcG9ydCB7IFBhcnRpYWxEZXZpY2VNb3Rpb24sIERldmljZU1vdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzRW50aXJlRGV2aWNlTW90aW9uID0gKGU6IFBhcnRpYWxEZXZpY2VNb3Rpb24pOiBlIGlzIERldmljZU1vdGlvbiA9PiB7XG4gIGNvbnN0IGEgPSBlLmFjY2VsZXJhdGlvbjtcbiAgaWYgKGEgPT09IG51bGwgfHwgYS54ID09PSBudWxsIHx8IGEueSA9PT0gbnVsbCB8fCBhLnogPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBnID0gZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5O1xuICBpZiAoZyA9PT0gbnVsbCB8fCBnLnggPT09IG51bGwgfHwgZy55ID09PSBudWxsIHx8IGcueiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHIgPSBlLnJvdGF0aW9uUmF0ZTtcbiAgaWYgKHIgPT09IG51bGwgfHwgci5hbHBoYSA9PT0gbnVsbCB8fCByLmJldGEgPT09IG51bGwgfHwgci5nYW1tYSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydCB7IERldmljZU1vdGlvblZhbHVlLCBEZXZpY2VNb3Rpb24sIERldmljZU1vdGlvbldpdGhDaGFuZ2UsIERldmljZU1vdGlvbkFzVHVwbGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBmbG9vclRvSW50IH0gZnJvbSAnLi4vLi4vLi4vYXJpdGhtZXRpYyc7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVNb3Rpb25DaGFuZ2UgPSAocHJldjogRGV2aWNlTW90aW9uVmFsdWUsIGN1cnI6IERldmljZU1vdGlvblZhbHVlKTogRGV2aWNlTW90aW9uVmFsdWUgPT4gKHtcbiAgYWNjZWxlcmF0aW9uOiB7XG4gICAgeDogY3Vyci5hY2NlbGVyYXRpb24ueCAtIHByZXYuYWNjZWxlcmF0aW9uLngsXG4gICAgeTogY3Vyci5hY2NlbGVyYXRpb24ueSAtIHByZXYuYWNjZWxlcmF0aW9uLnksXG4gICAgejogY3Vyci5hY2NlbGVyYXRpb24ueiAtIHByZXYuYWNjZWxlcmF0aW9uLnosXG4gIH0sXG4gIGFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk6IHtcbiAgICB4OiBjdXJyLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCAtIHByZXYuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54LFxuICAgIHk6IGN1cnIuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55IC0gcHJldi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnksXG4gICAgejogY3Vyci5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnogLSBwcmV2LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueixcbiAgfSxcbiAgcm90YXRpb25SYXRlOiB7XG4gICAgYWxwaGE6IGN1cnIucm90YXRpb25SYXRlLmFscGhhIC0gcHJldi5yb3RhdGlvblJhdGUuYWxwaGEsXG4gICAgYmV0YTogY3Vyci5yb3RhdGlvblJhdGUuYmV0YSAtIHByZXYucm90YXRpb25SYXRlLmJldGEsXG4gICAgZ2FtbWE6IGN1cnIucm90YXRpb25SYXRlLmdhbW1hIC0gcHJldi5yb3RhdGlvblJhdGUuZ2FtbWEsXG4gIH0sXG59KTtcblxuY29uc3QgY2FsYyA9IChhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyKSA9PiBmbG9vclRvSW50KChhIC0gYikgLyBjKTtcblxuZXhwb3J0IGNvbnN0IG1ha2VUdXBsZSA9ICh2OiBEZXZpY2VNb3Rpb25XaXRoQ2hhbmdlKTogRGV2aWNlTW90aW9uQXNUdXBsZSA9PiAoe1xuICBhY2NlbGVyYXRpb246IHtcbiAgICB4OiBbdi5kYXRhLmFjY2VsZXJhdGlvbi54LCB2LmNoYW5nZS5hY2NlbGVyYXRpb24ueF0sXG4gICAgeTogW3YuZGF0YS5hY2NlbGVyYXRpb24ueSwgdi5jaGFuZ2UuYWNjZWxlcmF0aW9uLnldLFxuICAgIHo6IFt2LmRhdGEuYWNjZWxlcmF0aW9uLnosIHYuY2hhbmdlLmFjY2VsZXJhdGlvbi56XSxcbiAgfSxcbiAgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eToge1xuICAgIHg6IFt2LmRhdGEuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54LCB2LmNoYW5nZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnhdLFxuICAgIHk6IFt2LmRhdGEuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55LCB2LmNoYW5nZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnldLFxuICAgIHo6IFt2LmRhdGEuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56LCB2LmNoYW5nZS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnpdLFxuICB9LFxuICByb3RhdGlvblJhdGU6IHtcbiAgICBhbHBoYTogW3YuZGF0YS5yb3RhdGlvblJhdGUuYWxwaGEsIHYuY2hhbmdlLnJvdGF0aW9uUmF0ZS5hbHBoYV0sXG4gICAgYmV0YTogW3YuZGF0YS5yb3RhdGlvblJhdGUuYmV0YSwgdi5jaGFuZ2Uucm90YXRpb25SYXRlLmJldGFdLFxuICAgIGdhbW1hOiBbdi5kYXRhLnJvdGF0aW9uUmF0ZS5nYW1tYSwgdi5jaGFuZ2Uucm90YXRpb25SYXRlLmdhbW1hXSxcbiAgfSxcbn0pO1xuXG4vLyBUT0RPOiB1c2Ugd2hlbiByZWZhY3RvciB3aXRoQ2hhbmdlIG9wZXJhdG9yIGltcGxcbmV4cG9ydCBjb25zdCBtYWtlQ2hhbmdlID0gKGN1cnI6IERldmljZU1vdGlvbiwgZGlmZjogRGV2aWNlTW90aW9uKTogRGV2aWNlTW90aW9uQXNUdXBsZSA9PiAoe1xuICBhY2NlbGVyYXRpb246IHtcbiAgICB4OiBbY3Vyci5hY2NlbGVyYXRpb24ueCwgZGlmZi5hY2NlbGVyYXRpb24ueF0sXG4gICAgeTogW2N1cnIuYWNjZWxlcmF0aW9uLnksIGRpZmYuYWNjZWxlcmF0aW9uLnldLFxuICAgIHo6IFtjdXJyLmFjY2VsZXJhdGlvbi56LCBkaWZmLmFjY2VsZXJhdGlvbi56XSxcbiAgfSxcbiAgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eToge1xuICAgIHg6IFtjdXJyLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCwgZGlmZi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnhdLFxuICAgIHk6IFtjdXJyLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSwgZGlmZi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnldLFxuICAgIHo6IFtjdXJyLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueiwgZGlmZi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnpdLFxuICB9LFxuICByb3RhdGlvblJhdGU6IHtcbiAgICBhbHBoYTogW2N1cnIucm90YXRpb25SYXRlLmFscGhhLCBkaWZmLnJvdGF0aW9uUmF0ZS5hbHBoYV0sXG4gICAgYmV0YTogW2N1cnIucm90YXRpb25SYXRlLmJldGEsIGRpZmYucm90YXRpb25SYXRlLmJldGFdLFxuICAgIGdhbW1hOiBbY3Vyci5yb3RhdGlvblJhdGUuZ2FtbWEsIGRpZmYucm90YXRpb25SYXRlLmdhbW1hXSxcbiAgfSxcbn0pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIC0gd3JvbmcgaW1wbGVtZW50YXRpb24sIHNob3VsZCBub3QgZGl2aWRlIHdpdGggaW50ZXJ2YWwsIHZhbHVlcyBhcmUgYWxyZWFkeSBjYWxjdWxhdGVkIGFzIHBlciB1bml0XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaGFuZ2VQZXJNaWxsaXNlY29uZCA9IChwcmV2OiBEZXZpY2VNb3Rpb24sIGN1cnI6IERldmljZU1vdGlvbik6IERldmljZU1vdGlvblZhbHVlID0+ICh7XG4gIGFjY2VsZXJhdGlvbjoge1xuICAgIHg6IGNhbGMoY3Vyci5hY2NlbGVyYXRpb24ueCwgcHJldi5hY2NlbGVyYXRpb24ueCwgY3Vyci5pbnRlcnZhbCksXG4gICAgeTogY2FsYyhjdXJyLmFjY2VsZXJhdGlvbi55LCBwcmV2LmFjY2VsZXJhdGlvbi55LCBjdXJyLmludGVydmFsKSxcbiAgICB6OiBjYWxjKGN1cnIuYWNjZWxlcmF0aW9uLnosIHByZXYuYWNjZWxlcmF0aW9uLnosIGN1cnIuaW50ZXJ2YWwpLFxuICB9LFxuICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiB7XG4gICAgeDogY2FsYyhjdXJyLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCwgcHJldi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LngsIGN1cnIuaW50ZXJ2YWwpLFxuICAgIHk6IGNhbGMoY3Vyci5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnksIHByZXYuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55LCBjdXJyLmludGVydmFsKSxcbiAgICB6OiBjYWxjKGN1cnIuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56LCBwcmV2LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueiwgY3Vyci5pbnRlcnZhbCksXG4gIH0sXG4gIHJvdGF0aW9uUmF0ZToge1xuICAgIGFscGhhOiBjYWxjKGN1cnIucm90YXRpb25SYXRlLmFscGhhLCBwcmV2LnJvdGF0aW9uUmF0ZS5hbHBoYSwgY3Vyci5pbnRlcnZhbCksXG4gICAgYmV0YTogY2FsYyhjdXJyLnJvdGF0aW9uUmF0ZS5iZXRhLCBwcmV2LnJvdGF0aW9uUmF0ZS5iZXRhLCBjdXJyLmludGVydmFsKSxcbiAgICBnYW1tYTogY2FsYyhjdXJyLnJvdGF0aW9uUmF0ZS5nYW1tYSwgcHJldi5yb3RhdGlvblJhdGUuZ2FtbWEsIGN1cnIuaW50ZXJ2YWwpLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBEZXZpY2VNb3Rpb25Bc1R1cGxlLCBWYWx1ZUFuZENoYW5nZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHJvdW5kVG9JbnQgfSBmcm9tICcuLi8uLi8uLi9hcml0aG1ldGljJztcblxuY29uc3QgZGVmYXVsdFRocmVzaG9sZCA9IHtcbiAgYWNjZWxlcmF0aW9uOiAxMCAqKiA2LFxuICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiAxMCAqKiA2LFxuICByb3RhdGlvblJhdGU6IDEwICoqIDcsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBUaHJlc2hvbGRPcHRpb24gPSB7XG4gIGFjY2VsZXJhdGlvbjogbnVtYmVyO1xuICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiBudW1iZXI7XG4gIHJvdGF0aW9uUmF0ZTogbnVtYmVyO1xufTtcblxuY29uc3QgY2FsYyA9ICh2OiBbbnVtYmVyLCBudW1iZXJdLCB0aHJlc2hvbGQ6IG51bWJlcikgPT4gW3JvdW5kVG9JbnQodlswXSAvIHRocmVzaG9sZCksIHJvdW5kVG9JbnQodlsxXSAvIHRocmVzaG9sZCldIGFzIFZhbHVlQW5kQ2hhbmdlO1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9ICh2OiBEZXZpY2VNb3Rpb25Bc1R1cGxlLCB0OiBUaHJlc2hvbGRPcHRpb24gPSBkZWZhdWx0VGhyZXNob2xkKTogRGV2aWNlTW90aW9uQXNUdXBsZSA9PiAoe1xuICBhY2NlbGVyYXRpb246IHtcbiAgICB4OiBjYWxjKHYuYWNjZWxlcmF0aW9uLngsIHQuYWNjZWxlcmF0aW9uKSxcbiAgICB5OiBjYWxjKHYuYWNjZWxlcmF0aW9uLnksIHQuYWNjZWxlcmF0aW9uKSxcbiAgICB6OiBjYWxjKHYuYWNjZWxlcmF0aW9uLnosIHQuYWNjZWxlcmF0aW9uKSxcbiAgfSxcbiAgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eToge1xuICAgIHg6IGNhbGModi5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LngsIHQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSksXG4gICAgeTogY2FsYyh2LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSwgdC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5KSxcbiAgICB6OiBjYWxjKHYuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56LCB0LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkpLFxuICB9LFxuICByb3RhdGlvblJhdGU6IHtcbiAgICBhbHBoYTogY2FsYyh2LnJvdGF0aW9uUmF0ZS5hbHBoYSwgdC5yb3RhdGlvblJhdGUpLFxuICAgIGJldGE6IGNhbGModi5yb3RhdGlvblJhdGUuYmV0YSwgdC5yb3RhdGlvblJhdGUpLFxuICAgIGdhbW1hOiBjYWxjKHYucm90YXRpb25SYXRlLmdhbW1hLCB0LnJvdGF0aW9uUmF0ZSksXG4gIH0sXG59KTtcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERldmljZU1vdGlvbiwgRGV2aWNlTW90aW9uQXNUdXBsZSwgRGV2aWNlTW90aW9uVmFsdWUsIERldmljZU1vdGlvbldpdGhDaGFuZ2UsIFBhcnRpYWxEZXZpY2VNb3Rpb24sIFByZWNpc2lvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFJ4IH0gZnJvbSAnLi4vLi4vLi4vcnhqcyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVNb3Rpb25DaGFuZ2UsIG1ha2VUdXBsZSB9IGZyb20gJy4vbWFrZS1jaGFuZ2UnO1xuaW1wb3J0IHsgY2FsY3VsYXRlTW90aW9uQXZlcmFnZSB9IGZyb20gJy4vY2FsY3VsYXRlLWF2ZXJhZ2UnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuL3RvLWludCc7XG5pbXBvcnQgeyBub3JtYWxpemUsIFRocmVzaG9sZE9wdGlvbiB9IGZyb20gJy4vbm9ybWFsaXplJztcbmltcG9ydCB7IGlzRW50aXJlRGV2aWNlTW90aW9uIH0gZnJvbSAnLi9pcy1lbnRpcmUtZGV2aWNlLW1vdGlvbic7XG5cbi8vIFRPRE86IHVzZSBwYWlyd2lzZVxuZXhwb3J0IGNvbnN0IHdpdGhDaGFuZ2UgPSAoKSA9PiAoc291cmNlOiBPYnNlcnZhYmxlPERldmljZU1vdGlvbj4pID0+IHtcbiAgY29uc3QgeyBzY2FuLCBza2lwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgc2NhbjxEZXZpY2VNb3Rpb24sIERldmljZU1vdGlvbldpdGhDaGFuZ2UsIG51bGw+KChzdGF0ZSwgdmFsKSA9PiB7XG4gICAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB2YWwsXG4gICAgICAgICAgLy8gbXVzdCBiZSBza2lwcGVkIGJlbG93LCBza2lwKDEpXG4gICAgICAgICAgY2hhbmdlOiB1bmRlZmluZWQgYXMgYW55LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB2YWwsXG4gICAgICAgICAgY2hhbmdlOiBjYWxjdWxhdGVNb3Rpb25DaGFuZ2Uoc3RhdGUuZGF0YSwgdmFsKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBudWxsKSxcbiAgICBza2lwKDEpLFxuICApIGFzIE9ic2VydmFibGU8RGV2aWNlTW90aW9uV2l0aENoYW5nZT47XG59O1xuXG4vKipcbiAqIEBwYXJhbSBkZW5vbWluYXRvciAtIGRlZmF1bHQgdmFsdWUgaXMgNCwgdXNlZCBhcyBidWZmZXIgY291bnRcbiAqL1xuZXhwb3J0IGNvbnN0IHRvQXZlcmFnZSA9IChkZW5vbWluYXRvciA9IDQpID0+IChzb3VyY2U6IE9ic2VydmFibGU8RGV2aWNlTW90aW9uVmFsdWU+KSA9PiB7XG4gIGNvbnN0IHsgYnVmZmVyQ291bnQsIG1hcCB9ID0gZ2V0UngoKS5vcGVyYXRvcnM7XG5cbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIGJ1ZmZlckNvdW50KGRlbm9taW5hdG9yKSxcbiAgICBtYXAoKGl0ZW1zOiBEZXZpY2VNb3Rpb25WYWx1ZVtdKSA9PiBjYWxjdWxhdGVNb3Rpb25BdmVyYWdlKGl0ZW1zKSksXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9JbnRlZ2VyID0gKHByZWNpc2lvbjogUHJlY2lzaW9uID0gOCkgPT4gKHNvdXJjZTogT2JzZXJ2YWJsZTxEZXZpY2VNb3Rpb24+KSA9PiB7XG4gIGNvbnN0IHsgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUobWFwKCh2KSA9PiB0b0ludCh2LCBwcmVjaXNpb24pKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXNUdXBsZSA9ICgpID0+IChzb3VyY2U6IE9ic2VydmFibGU8RGV2aWNlTW90aW9uV2l0aENoYW5nZT4pID0+IHtcbiAgY29uc3QgeyBtYXAgfSA9IGdldFJ4KCkub3BlcmF0b3JzO1xuXG4gIHJldHVybiBzb3VyY2UucGlwZShtYXAobWFrZVR1cGxlKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQnlUaHJlc2hvbGQgPSAodGhyZXNob2xkPzogVGhyZXNob2xkT3B0aW9uKSA9PiAoc291cmNlOiBPYnNlcnZhYmxlPERldmljZU1vdGlvbkFzVHVwbGU+KSA9PiB7XG4gIGNvbnN0IHsgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUobWFwKCh2KSA9PiBub3JtYWxpemUodiwgdGhyZXNob2xkKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9ubHlFbnRpcmUgPSAoKSA9PiAoc291cmNlOiBPYnNlcnZhYmxlPFBhcnRpYWxEZXZpY2VNb3Rpb24+KSA9PiB7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUoZmlsdGVyKGlzRW50aXJlRGV2aWNlTW90aW9uKSk7XG59O1xuIiwiaW1wb3J0IHsgRGV2aWNlTW90aW9uLCBQcmVjaXNpb24gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHRpID0gKHY6IG51bWJlciwgZXhwb25lbnRpYXRpb246IG51bWJlcikgPT4ge1xuICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KCh2ICogZXhwb25lbnRpYXRpb24pLnRvRml4ZWQoMCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRvSW50ID0gKGRhdGE6IERldmljZU1vdGlvbiwgcHJlY2lzaW9uOiBQcmVjaXNpb24gPSA4KTogRGV2aWNlTW90aW9uID0+IHtcbiAgY29uc3QgZSA9IDEwICoqIHByZWNpc2lvbjtcblxuICByZXR1cm4ge1xuICAgIGludGVydmFsOiBkYXRhLmludGVydmFsLFxuICAgIGFjY2VsZXJhdGlvbjoge1xuICAgICAgeDogdGkoZGF0YS5hY2NlbGVyYXRpb24ueCwgZSksXG4gICAgICB5OiB0aShkYXRhLmFjY2VsZXJhdGlvbi55LCBlKSxcbiAgICAgIHo6IHRpKGRhdGEuYWNjZWxlcmF0aW9uLnosIGUpLFxuICAgIH0sXG4gICAgYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eToge1xuICAgICAgeDogdGkoZGF0YS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LngsIGUpLFxuICAgICAgeTogdGkoZGF0YS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnksIGUpLFxuICAgICAgejogdGkoZGF0YS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnosIGUpLFxuICAgIH0sXG4gICAgcm90YXRpb25SYXRlOiB7XG4gICAgICBhbHBoYTogdGkoZGF0YS5yb3RhdGlvblJhdGUuYWxwaGEsIGUpLFxuICAgICAgYmV0YTogdGkoZGF0YS5yb3RhdGlvblJhdGUuYmV0YSwgZSksXG4gICAgICBnYW1tYTogdGkoZGF0YS5yb3RhdGlvblJhdGUuZ2FtbWEsIGUpLFxuICAgIH0sXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0UnggfSBmcm9tICcuLi8uLi9yeGpzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uLCBQYXJ0aWFsRGV2aWNlT3JpZW50YXRpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBleHRyYWN0LCBvbmx5RW50aXJlIH0gZnJvbSAnLi9pbnRlcm5hbC9yeC1vcGVyYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb25FdmVudFN0cmVhbSA9ICgpID0+IHtcbiAgY29uc3QgU3ViamVjdCA9IGdldFJ4KCkuU3ViamVjdDtcbiAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFBhcnRpYWxEZXZpY2VPcmllbnRhdGlvbj4oKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCAoZTogRGV2aWNlT3JpZW50YXRpb25FdmVudCkgPT4ge1xuICAgIHN1YmplY3QubmV4dChlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlT3JpZW50YXRpb25TdHJlYW0gPSAoKSA9PiB7XG4gIHJldHVybiBnZXREZXZpY2VPcmllbnRhdGlvbkV2ZW50U3RyZWFtKCkucGlwZShleHRyYWN0KCksIG9ubHlFbnRpcmUoKSkgYXMgT2JzZXJ2YWJsZTxEZXZpY2VPcmllbnRhdGlvbj47XG59O1xuIiwiaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb24sIFBhcnRpYWxEZXZpY2VPcmllbnRhdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzRW50aXJlRGV2aWNlT3JpZW50YXRpb24gPSAoZTogUGFydGlhbERldmljZU9yaWVudGF0aW9uKTogZSBpcyBEZXZpY2VPcmllbnRhdGlvbiA9PiB7XG4gIGlmIChlLmFscGhhID09PSBudWxsIHx8IGUuYmV0YSA9PT0gbnVsbCB8fCBlLmdhbW1hID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0UnggfSBmcm9tICcuLi8uLi8uLi9yeGpzJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uLCBQYXJ0aWFsRGV2aWNlT3JpZW50YXRpb24gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyByb3VuZFRvSW50IH0gZnJvbSAnLi4vLi4vLi4vYXJpdGhtZXRpYyc7XG5pbXBvcnQgeyBpc0VudGlyZURldmljZU9yaWVudGF0aW9uIH0gZnJvbSAnLi9pcy1lbnRpcmUtZGV2aWNlLW9yaWVudGF0aW9uJztcblxuLyoqXG4gKiBzdHJpcCB1bm5lY2Vzc2FyeSBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBjb25zdCBleHRyYWN0ID0gKCkgPT4gKHNvdXJjZTogT2JzZXJ2YWJsZTxQYXJ0aWFsRGV2aWNlT3JpZW50YXRpb24+KSA9PiB7XG4gIGNvbnN0IHsgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUoXG4gICAgbWFwKCh2KSA9PiAoe1xuICAgICAgYWJzb2x1dGU6IHYuYWJzb2x1dGUsXG4gICAgICBhbHBoYTogdi5hbHBoYSxcbiAgICAgIGJldGE6IHYuYmV0YSxcbiAgICAgIGdhbW1hOiB2LmdhbW1hLFxuICAgIH0pKSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbmx5RW50aXJlID0gKCkgPT4gKHNvdXJjZTogT2JzZXJ2YWJsZTxQYXJ0aWFsRGV2aWNlT3JpZW50YXRpb24+KSA9PiB7XG4gIGNvbnN0IHsgZmlsdGVyIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gc291cmNlLnBpcGUoZmlsdGVyKGlzRW50aXJlRGV2aWNlT3JpZW50YXRpb24pKTtcbn07XG5cbmV4cG9ydCBjb25zdCByb3VuZERlY2ltYWwgPSAoKSA9PiAoc291cmNlOiBPYnNlcnZhYmxlPERldmljZU9yaWVudGF0aW9uPikgPT4ge1xuICBjb25zdCB7IG1hcCB9ID0gZ2V0UngoKS5vcGVyYXRvcnM7XG5cbiAgcmV0dXJuIHNvdXJjZS5waXBlKFxuICAgIG1hcCgodikgPT4gKHtcbiAgICAgIGFic29sdXRlOiB2LmFic29sdXRlLFxuICAgICAgYWxwaGE6IHJvdW5kVG9JbnQodi5hbHBoYSksXG4gICAgICBiZXRhOiByb3VuZFRvSW50KHYuYmV0YSksXG4gICAgICBnYW1tYTogcm91bmRUb0ludCh2LmdhbW1hKSxcbiAgICB9KSksXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgTW92ZW1lbnQgfSBmcm9tICcuLi9tb3ZlbWVudC9jbGFzc2lmeS1tb3ZlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdG9wcGluZ0NvdW50ID0gNDtcbmV4cG9ydCBjb25zdCBzaG9ydEhvbGRDb3VudCA9IDc7XG5leHBvcnQgY29uc3QgbW90aW9uRW50ZXJpbmdDb3VudCA9IDg7XG5leHBvcnQgY29uc3QgbG9uZ0hvbGRDb3VudCA9IDEwO1xuXG5jb25zdCBjaGVja0hvbGQgPSAobW92ZW1lbnRzOiBNb3ZlbWVudFtdKTogJ2xvbmcgaG9sZCcgfCAnc2hvcnQgaG9sZCcgfCAnc3RvcHBpbmcnIHwgbnVsbCA9PiB7XG4gIGxldCBjb25zZWN1dGl2ZSA9IDA7XG4gIC8vIGNoZWNrIHZhbHVlIGZyb20gcmlnaHRcbiAgZm9yIChsZXQgaSA9IG1vdmVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChtb3ZlbWVudHNbaV0ucmF0ZSA9PT0gMCkge1xuICAgICAgY29uc2VjdXRpdmUrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnNlY3V0aXZlID49IGxvbmdIb2xkQ291bnQpIHtcbiAgICByZXR1cm4gJ2xvbmcgaG9sZCc7XG4gIH0gZWxzZSBpZiAoY29uc2VjdXRpdmUgPj0gc2hvcnRIb2xkQ291bnQpIHtcbiAgICByZXR1cm4gJ3Nob3J0IGhvbGQnO1xuICB9IGVsc2UgaWYgKGNvbnNlY3V0aXZlID49IHN0b3BwaW5nQ291bnQpIHtcbiAgICByZXR1cm4gJ3N0b3BwaW5nJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgaXNDb25zZWN1dGl2ZVplcm8gPSAobW92ZW1lbnRzOiBNb3ZlbWVudFtdLCBsZW5ndGg6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICBpZiAobW92ZW1lbnRzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChtb3ZlbWVudHNbaV0ucmF0ZSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKlxuICogMCAtPiAwIC0+IDAgLT4gMCAtPiAwIC0+IDAgLT4gMFxuICpcbiAqIEBwYXJhbSBtb3ZlbWVudHNcbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2hvcnRIb2xkID0gKG1vdmVtZW50czogTW92ZW1lbnRbXSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaXNDb25zZWN1dGl2ZVplcm8obW92ZW1lbnRzLCBzaG9ydEhvbGRDb3VudCk7XG59O1xuXG4vKipcbiAqXG4gKiAwIC0+IDAgLT4gMCAtPiAwIC0+IDAgLT4gMCAtPiAwIC0+IDFcbiAqXG4gKiBAcGFyYW0gbW92ZW1lbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBjaGVja0VudGVyTW90aW9uVHlwZSA9IChtb3ZlbWVudHM6IE1vdmVtZW50W10pOiAncXVpY2sgc3RhcnQnIHwgJ3Nsb3cgc3RhcnQnIHwgbnVsbCA9PiB7XG4gIGlmIChtb3ZlbWVudHMubGVuZ3RoIDwgbW90aW9uRW50ZXJpbmdDb3VudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzU2hvcnRIb2xkKG1vdmVtZW50cy5zbGljZSgtc2hvcnRIb2xkQ291bnQpKSkge1xuICAgIGlmIChtb3ZlbWVudHNbbW92ZW1lbnRzLmxlbmd0aCAtIDFdLnJhdGUgPiAxKSB7XG4gICAgICByZXR1cm4gJ3F1aWNrIHN0YXJ0JztcbiAgICB9IGVsc2UgaWYgKG1vdmVtZW50c1ttb3ZlbWVudHMubGVuZ3RoIC0gMV0ucmF0ZSA+IDApIHtcbiAgICAgIHJldHVybiAnc2xvdyBzdGFydCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tIb2xkQW5kRW50ZXJpbmcgPSAoXG4gIG1vdmVtZW50czogTW92ZW1lbnRbXSxcbik6ICdsb25nIGhvbGQnIHwgJ3Nob3J0IGhvbGQnIHwgJ3N0b3BwaW5nJyB8ICdxdWljayBzdGFydCcgfCAnc2xvdyBzdGFydCcgfCBudWxsID0+IHtcbiAgY29uc3QgaG9sZCA9IGNoZWNrSG9sZChtb3ZlbWVudHMpO1xuICBpZiAoaG9sZCkge1xuICAgIHJldHVybiBob2xkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaGVja0VudGVyTW90aW9uVHlwZShtb3ZlbWVudHMpO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiAwIC0+IDAgLT4gMCAtPiAwIC0+IDAgLT4gMCAtPiAwIC0+IDAgLT4gMCAtPiAwXG4gKlxuICogQHBhcmFtIG1vdmVtZW50c1xuICovXG5leHBvcnQgY29uc3QgaXNMb25nSG9sZCA9IChtb3ZlbWVudHM6IE1vdmVtZW50W10pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlzQ29uc2VjdXRpdmVaZXJvKG1vdmVtZW50cywgbG9uZ0hvbGRDb3VudCk7XG59O1xuXG4vKipcbiAqXG4gKiAwIC0+IDAgLT4gMCAtPiAwXG4gKlxuICogQHBhcmFtIG1vdmVtZW50c1xuICovXG5leHBvcnQgY29uc3QgaXNTdG9wcGluZyA9IChtb3ZlbWVudHM6IE1vdmVtZW50W10pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGlzQ29uc2VjdXRpdmVaZXJvKG1vdmVtZW50cywgc3RvcHBpbmdDb3VudCk7XG59O1xuIiwiaW1wb3J0IHsgTW92ZW1lbnQgfSBmcm9tICcuLi9tb3ZlbWVudC9jbGFzc2lmeS1tb3ZlbWVudCc7XG5pbXBvcnQgeyBzaW1wbGlmeU1vdmVtZW50cyB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBxdWlja1JldmVyc2VDb3VudCA9IDI7XG5cbmV4cG9ydCBjb25zdCBpc1F1aWNrUmV2ZXJzZSA9IChtb3ZlbWVudHM6IE1vdmVtZW50W10pOiBib29sZWFuID0+IHtcbiAgaWYgKG1vdmVtZW50cy5sZW5ndGggPCBxdWlja1JldmVyc2VDb3VudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IHNpbXBsaWZ5TW92ZW1lbnRzKG1vdmVtZW50cyk7XG4gIGNvbnN0IGZpcnN0ID0gdmFsdWVzWzBdO1xuICBjb25zdCBzZWNvbmQgPSB2YWx1ZXNbMV07XG5cbiAgaWYgKGZpcnN0LnJhdGUgPCAzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlY29uZC5yYXRlID4gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydCB7IE1vdmVtZW50IH0gZnJvbSAnLi4vbW92ZW1lbnQvY2xhc3NpZnktbW92ZW1lbnQnO1xuXG5leHBvcnQgdHlwZSBSZWxhdGl2ZU1vdmVtZW50ID0ge1xuICByYXRlOiAtNSB8IC00IHwgLTMgfCAtMiB8IC0xIHwgMCB8IDEgfCAyIHwgMyB8IDQgfCA1O1xuICAvLyBhbGwgZGlyZWN0aW9uIG9mIHZhbHVlIGNoYW5nZSBpcyBzYW1lXG4gIGFsaWduOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpbXBsaWZ5TW92ZW1lbnRzID0gKG1vdmVtZW50czogTW92ZW1lbnRbXSk6IFJlbGF0aXZlTW92ZW1lbnRbXSA9PiB7XG4gIGlmIChtb3ZlbWVudHMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGxldCBiYXNlRGlyZWN0aW9uOiBNb3ZlbWVudFsnZGlyZWN0aW9uJ10gfCB1bmRlZmluZWQ7XG4gIHJldHVybiBtb3ZlbWVudHMubWFwKChtKSA9PiB7XG4gICAgaWYgKGJhc2VEaXJlY3Rpb24gPT09IHVuZGVmaW5lZCAmJiBtLnJhdGUgIT09IDApIHtcbiAgICAgIGJhc2VEaXJlY3Rpb24gPSBtLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoYmFzZURpcmVjdGlvbiA9PT0gdW5kZWZpbmVkIHx8IG0uZGlyZWN0aW9uID09PSBiYXNlRGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByYXRlOiBtLnJhdGUsXG4gICAgICAgIGFsaWduOiBtLmFsaWduLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gYXZvaWQgLTBcbiAgICAgICAgcmF0ZTogbS5yYXRlID09PSAwID8gMCA6ICgtbS5yYXRlIGFzIFJlbGF0aXZlTW92ZW1lbnRbJ3JhdGUnXSksXG4gICAgICAgIGFsaWduOiBtLmFsaWduLFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnRhaW4gPSAoc291cmNlOiBudW1iZXJbXSwgcGF0dGVybjogbnVtYmVyW10pOiBib29sZWFuID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc291cmNlLmxlbmd0aCAtIHBhdHRlcm4ubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbWlzbWF0Y2ggPSBmYWxzZTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhdHRlcm4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChwYXR0ZXJuW2pdID09PSBzb3VyY2VbaSArIGpdKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1pc21hdGNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGV2aWNlTW90aW9uLCBEZXZpY2VPcmllbnRhdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldERldmljZU9yaWVudGF0aW9uU3RyZWFtIH0gZnJvbSAnLi4vZGV2aWNlb3JpZW50YXRpb24vZ2V0LWRldmljZS1vcmllbnRhdGlvbi1zdHJlYW0nO1xuaW1wb3J0IHsgZ2V0RGV2aWNlTW90aW9uU3RyZWFtIH0gZnJvbSAnLi4vZGV2aWNlbW90aW9uJztcbmltcG9ydCB7IGdldFJ4LCB3aXRoSGlzdG9yeSB9IGZyb20gJy4uLy4uL3J4anMnO1xuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gJy4vbW92ZW1lbnQvY29tYmluZSc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY2xhc3NpZnksIE1vdmVtZW50IH0gZnJvbSAnLi9tb3ZlbWVudC9jbGFzc2lmeS1tb3ZlbWVudCc7XG5pbXBvcnQgeyBjaGVja0hvbGRBbmRFbnRlcmluZyB9IGZyb20gJy4vYWN0aW9uL2hvbGQnO1xuaW1wb3J0IHsgaXNRdWlja1JldmVyc2UgfSBmcm9tICcuL2FjdGlvbi9yZXZlcnNlJztcblxuZXhwb3J0IGNvbnN0IGdldE1vdmVtZW50U3RyZWFtID0gKFxuICBvcmllbnRhdGlvbiQ6IE9ic2VydmFibGU8RGV2aWNlT3JpZW50YXRpb24+ID0gZ2V0RGV2aWNlT3JpZW50YXRpb25TdHJlYW0oKSxcbiAgbW90aW9uJDogT2JzZXJ2YWJsZTxEZXZpY2VNb3Rpb24+ID0gZ2V0RGV2aWNlTW90aW9uU3RyZWFtKCksXG4pOiBPYnNlcnZhYmxlPHsgc2lkOiBudW1iZXI7IGRhdGE6IE1vdmVtZW50IH0+ID0+IHtcbiAgY29uc3QgeyBidWZmZXJDb3VudCwgbWFwLCB3aXRoTGF0ZXN0RnJvbSB9ID0gZ2V0UngoKS5vcGVyYXRvcnM7XG5cbiAgbGV0IHNpZCA9IDA7XG4gIHJldHVybiBtb3Rpb24kLnBpcGUoXG4gICAgYnVmZmVyQ291bnQoNCksXG4gICAgd2l0aExhdGVzdEZyb20ob3JpZW50YXRpb24kKSxcbiAgICBtYXAoKFttb3Rpb25zLCBvcmllbnRhdGlvbl0pID0+IHtcbiAgICAgIGNvbnN0IGdhbW1hcyA9IG1vdGlvbnMubWFwKChtKSA9PiBtLnJvdGF0aW9uUmF0ZS5nYW1tYSk7XG4gICAgICBjb25zdCBhZ2dyZWdhdGlvbiA9IGNvbWJpbmUob3JpZW50YXRpb24uZ2FtbWEsIGdhbW1hcyk7XG4gICAgICBjb25zdCBkYXRhID0gY2xhc3NpZnkoYWdncmVnYXRpb24pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaWQ6IHNpZCsrLFxuICAgICAgICBkYXRhLFxuICAgICAgfTtcbiAgICB9KSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZzMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZmlsdGVyLCBtYXAgfSA9IGdldFJ4KCkub3BlcmF0b3JzO1xuXG4gIHJldHVybiBnZXRNb3ZlbWVudFN0cmVhbSgpLnBpcGUoXG4gICAgZmlsdGVyKChkKSA9PiBkLmRhdGEucmF0ZSA+IDApLFxuICAgIG1hcCgoZCkgPT4ge1xuICAgICAgY29uc3QgZGkgPSBkLmRhdGEuZGlyZWN0aW9uID09PSAndXAnID8gJ3UnIDogJ2QnO1xuICAgICAgcmV0dXJuIGAke2RpfS0ke2QuZGF0YS5yYXRlfTogJHtkLnNpZH1gO1xuICAgIH0pLFxuICAgIHdpdGhIaXN0b3J5KDIwKSxcbiAgICBtYXAoKGFycmF5KSA9PiBhcnJheS5yZXZlcnNlKCkpLFxuICApO1xufTtcblxudHlwZSBBY3Rpb24gPSB7XG4gIHR5cGU6IEFjdGlvblR5cGVzO1xuICAvLyBbZmlyc3QsIGxhc3RdXG4gIHNpZD86IG51bWJlcltdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblN0cmVhbSA9ICgpID0+IHtcbiAgY29uc3QgeyBPYnNlcnZhYmxlIH0gPSBnZXRSeCgpO1xuICBjb25zdCB7IG1hcCB9ID0gZ2V0UngoKS5vcGVyYXRvcnM7XG4gIGNvbnN0IG1vdmVtZW50Q291bnQgPSAxMDtcblxuICByZXR1cm4gbmV3IE9ic2VydmFibGU8QWN0aW9uPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGdldE1vdmVtZW50U3RyZWFtKClcbiAgICAgIC5waXBlKFxuICAgICAgICB3aXRoSGlzdG9yeShtb3ZlbWVudENvdW50KSxcbiAgICAgICAgbWFwKChpdGVtcykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1vdmVtZW50cyA9IGl0ZW1zLm1hcCgobSkgPT4gbS5kYXRhKTtcbiAgICAgICAgICBjb25zdCBzaWQgPSBbaXRlbXNbMF0uc2lkLCBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5zaWRdO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNoZWNrSG9sZEFuZEVudGVyaW5nKG1vdmVtZW50cyk7XG4gICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIHNpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzUXVpY2tSZXZlcnNlKG1vdmVtZW50cy5zbGljZSgtMikpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiAncXVpY2sgcmV2ZXJzZScsXG4gICAgICAgICAgICAgIHNpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZpbmcnLFxuICAgICAgICAgICAgc2lkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlIGFzIEFjdGlvbik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWFuZEhpc3RvcnlTdHJlYW0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gZ2V0QWN0aW9uU3RyZWFtKCkucGlwZShcbiAgICB3aXRoSGlzdG9yeSgzMiksXG4gICAgbWFwKCh2YWx1ZXMpID0+IHZhbHVlcy5tYXAoKHYpID0+IHYudHlwZSkucmV2ZXJzZSgpKSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYXN0Q29tbWFuZFN0cmVhbSA9ICgpID0+IHtcbiAgY29uc3QgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcblxuICByZXR1cm4gZ2V0QWN0aW9uU3RyZWFtKCkucGlwZShcbiAgICBtYXAoKHYpID0+IHYudHlwZSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB3aXRoSGlzdG9yeSg4KSxcbiAgICBtYXAoKHZhbHVlcykgPT4gdmFsdWVzLnJldmVyc2UoKSksXG4gICk7XG59O1xuXG50eXBlIENvbW1hbmQgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgLy8gW2ZpcnN0LCBsYXN0XVxuICBzaWQ/OiBudW1iZXJbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb21tYW5kU3RyZWFtID0gKCkgPT4ge1xuICBjb25zdCB7IE9ic2VydmFibGUgfSA9IGdldFJ4KCk7XG4gIGNvbnN0IHsgbWFwIH0gPSBnZXRSeCgpLm9wZXJhdG9ycztcbiAgY29uc3QgYWN0aW9uQ291bnQgPSA2O1xuXG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxBY3Rpb24+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgZ2V0QWN0aW9uU3RyZWFtKCkucGlwZShcbiAgICAgIHdpdGhIaXN0b3J5KGFjdGlvbkNvdW50KSxcbiAgICAgIG1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgIC8vIG5vdCBpbXBsZW1lbnRlZFxuICAgICAgfSksXG4gICAgKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgQ29tYmluZWRWYWx1ZSB9IGZyb20gJy4vY29tYmluZSc7XG5cbnR5cGUgVGhyZXNob2xkID0ge1xuICB2ZXJ5SGlnaDogbnVtYmVyO1xuICBoaWdoOiBudW1iZXI7XG4gIHRhcDogbnVtYmVyO1xuICBsb3c6IG51bWJlcjtcbiAgLy8gZXF1YWxpemUgdmFsdWVzIGlmIHVuZGVyXG4gIC8vIFRPRE86IGNvbnNpZGVyIHJlbmFtZSB0byBzdGVhZHlcbiAgcm91bmQ6IG51bWJlcjtcbn07XG5cbi8vIFRPRE86IG1ha2UgZ2VuZXJhbGl6ZSBmb3Igb3RoZXIgdHlwZXMgbGlrZSBhcyBhbHBoYSwgYmV0YSwgeCwgeSwgelxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUaHJlc2hvbGQ6IFRocmVzaG9sZCA9IHtcbiAgdmVyeUhpZ2g6IDEyMCxcbiAgaGlnaDogOTAsXG4gIC8vIHRvIGRldGVjdCB0YXBcbiAgdGFwOiAzOCxcbiAgbG93OiAyMCxcbiAgcm91bmQ6IDEwLFxufTtcblxuZXhwb3J0IHR5cGUgTW92ZW1lbnQgPSB7XG4gIG9yaWVudGF0aW9uOiAndXAnIHwgJ2Rvd24nO1xuICBkaXJlY3Rpb246ICd1cCcgfCAnZG93bic7XG4gIC8vIHN0b3BwaW5nLCBzbGlnaHRseSwgbG93LCBtaWQsIGhpZ2hcbiAgcmF0ZTogMCB8IDEgfCAyIHwgMyB8IDQgfCA1O1xuICAvLyBhbGwgZGlyZWN0aW9uIG9mIHZhbHVlIGNoYW5nZSBpcyBzYW1lXG4gIGFsaWduOiBib29sZWFuO1xufTtcblxuY29uc3QgY2FsY1JhdGUgPSAodmFsdWU6IG51bWJlciwgdGhyZXNob2xkOiBUaHJlc2hvbGQpID0+IHtcbiAgaWYgKHZhbHVlID4gdGhyZXNob2xkLnZlcnlIaWdoKSB7XG4gICAgcmV0dXJuIDU7XG4gIH0gZWxzZSBpZiAodmFsdWUgPiB0aHJlc2hvbGQuaGlnaCkge1xuICAgIHJldHVybiA0O1xuICB9IGVsc2UgaWYgKHZhbHVlID4gdGhyZXNob2xkLnRhcCkge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKHZhbHVlID4gdGhyZXNob2xkLmxvdykge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2UgaWYgKHZhbHVlID4gdGhyZXNob2xkLnJvdW5kKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbGFzc2lmeSA9IChhOiBDb21iaW5lZFZhbHVlLCB0aHJlc2hvbGQ6IFRocmVzaG9sZCA9IGRlZmF1bHRUaHJlc2hvbGQpOiBNb3ZlbWVudCA9PiB7XG4gIGlmIChhLmZpcnN0IDwgYS5sYXN0KSB7XG4gICAgLy8gdXBcbiAgICBjb25zdCByYXRlID0gY2FsY1JhdGUoYS5sYXN0IC0gYS5maXJzdCwgdGhyZXNob2xkKTtcbiAgICBjb25zdCBhbGlnbiA9IGEuY291bnQgPT09IGEuaW5jcmVhc2U7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb3JpZW50YXRpb246IGEub3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb246ICd1cCcsXG4gICAgICByYXRlLFxuICAgICAgYWxpZ24sXG4gICAgfTtcbiAgfSBlbHNlIGlmIChhLmZpcnN0ID4gYS5sYXN0KSB7XG4gICAgLy8gZG93blxuICAgIGNvbnN0IHJhdGUgPSBjYWxjUmF0ZShhLmZpcnN0IC0gYS5sYXN0LCB0aHJlc2hvbGQpO1xuICAgIGNvbnN0IGFsaWduID0gYS5jb3VudCA9PT0gYS5kZWNyZWFzZTtcblxuICAgIHJldHVybiB7XG4gICAgICBvcmllbnRhdGlvbjogYS5vcmllbnRhdGlvbixcbiAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgcmF0ZSxcbiAgICAgIGFsaWduLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbGV0IGJldHdlZW5Qb3NpdGl2ZTogbnVtYmVyO1xuICAgIGxldCBiZXR3ZWVuTmVnYXRpdmU6IG51bWJlcjtcbiAgICBpZiAoYS5maXJzdCA+IDApIHtcbiAgICAgIGJldHdlZW5Qb3NpdGl2ZSA9IGEubWF4IC0gYS5maXJzdDtcbiAgICAgIGJldHdlZW5OZWdhdGl2ZSA9IGEubWluID4gMCA/IGEuZmlyc3QgLSBhLm1pbiA6IE1hdGguYWJzKGEubWluIC0gYS5maXJzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJldHdlZW5Qb3NpdGl2ZSA9IGEubWF4IDwgMCA/IE1hdGguYWJzKGEuZmlyc3QgKyBhLm1heCkgOiBhLm1heCAtIGEuZmlyc3Q7XG4gICAgICBiZXR3ZWVuTmVnYXRpdmUgPSBNYXRoLmFicyhhLm1pbiArIGEuZmlyc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvcmllbnRhdGlvbjogYS5vcmllbnRhdGlvbixcbiAgICAgIGRpcmVjdGlvbjogYmV0d2VlblBvc2l0aXZlID4gYmV0d2Vlbk5lZ2F0aXZlID8gJ3VwJyA6ICdkb3duJyxcbiAgICAgIHJhdGU6IDAsXG4gICAgICBhbGlnbjogYS5maXJzdCA9PT0gYS5tYXggJiYgYS5maXJzdCA9PT0gYS5taW4sXG4gICAgfTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFdyaXRlYWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHJvdW5kVG9JbnQgfSBmcm9tICcuLi8uLi8uLi9hcml0aG1ldGljJztcblxuLyoqXG4gKiBOT1RFOlxuICpcbiAqIC0gb3JpZW50YXRpb24uZ2FtbWFcbiAqICAgLSBwb3NpdGl2ZSBpZiByaWdodFxuICogICAtIG5lZ2F0aXZlIGlmIGxlZnRcbiAqIC0gcm90YXRpb25SYXRlLmdhbW1hXG4gKiAgIC0gcG9zaXRpdmUgaWYgdGlsdGluZyB0byBsZWZ0XG4gKiAgIC0gbmVnYXRpdmUgaWYgdGlsdGluZyB0byByaWdodFxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQ29tYmluZWRWYWx1ZSA9IHtcbiAgcmVhZG9ubHkgb3JpZW50YXRpb246ICd1cCcgfCAnZG93bic7XG4gIHJlYWRvbmx5IGNvdW50OiBudW1iZXI7XG4gIHJlYWRvbmx5IGluY3JlYXNlOiBudW1iZXI7XG4gIHJlYWRvbmx5IGRlY3JlYXNlOiBudW1iZXI7XG4gIHJlYWRvbmx5IG5vY2hhbmdlOiBudW1iZXI7XG4gIHJlYWRvbmx5IGZpcnN0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGxhc3Q6IG51bWJlcjtcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXI7XG4gIHJlYWRvbmx5IG1pbjogbnVtYmVyO1xuICByZWFkb25seSBhdmc6IG51bWJlcjtcbn07XG5cbi8vIFRPRE86IGN1cnJlbnRseSB1c2VkIG9ubHkgZm9yIGdhbW1hXG5leHBvcnQgY29uc3QgY29tYmluZSA9IChvcmllbnRhdGlvbjogbnVtYmVyLCBhY2NlbGVyYXRpb25zOiBudW1iZXJbXSk6IENvbWJpbmVkVmFsdWUgPT4ge1xuICBpZiAoYWNjZWxlcmF0aW9ucy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgaW1wbCcpO1xuICB9XG5cbiAgY29uc3QgZmlyc3QgPSBhY2NlbGVyYXRpb25zWzBdO1xuICBjb25zdCBsYXN0ID0gYWNjZWxlcmF0aW9uc1thY2NlbGVyYXRpb25zLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IG1vdmVtZW50OiBXcml0ZWFibGU8Q29tYmluZWRWYWx1ZT4gPSB7XG4gICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uID49IDAgPyAndXAnIDogJ2Rvd24nLFxuICAgIGNvdW50OiBhY2NlbGVyYXRpb25zLmxlbmd0aCxcbiAgICBpbmNyZWFzZTogMCxcbiAgICBkZWNyZWFzZTogMCxcbiAgICBub2NoYW5nZTogMCxcbiAgICBmaXJzdCxcbiAgICBsYXN0LFxuICAgIG1heDogYWNjZWxlcmF0aW9uc1swXSxcbiAgICBtaW46IGFjY2VsZXJhdGlvbnNbMF0sXG4gICAgYXZnOiBhY2NlbGVyYXRpb25zWzBdLFxuICB9O1xuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFjY2VsZXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gYWNjZWxlcmF0aW9uc1tpIC0gMV07XG4gICAgY29uc3QgdiA9IGFjY2VsZXJhdGlvbnNbaV07XG4gICAgaWYgKHYgPiBwKSB7XG4gICAgICBtb3ZlbWVudC5pbmNyZWFzZSsrO1xuICAgIH0gZWxzZSBpZiAodiA8IHApIHtcbiAgICAgIG1vdmVtZW50LmRlY3JlYXNlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVtZW50Lm5vY2hhbmdlKys7XG4gICAgfVxuXG4gICAgc3VtICs9IHY7XG4gICAgbW92ZW1lbnQubWF4ID0gTWF0aC5tYXgobW92ZW1lbnQubWF4LCB2KTtcbiAgICBtb3ZlbWVudC5taW4gPSBNYXRoLm1pbihtb3ZlbWVudC5taW4sIHYpO1xuICB9XG5cbiAgbW92ZW1lbnQuYXZnID0gc3VtIC8gbW92ZW1lbnQuY291bnQ7XG4gIG1vdmVtZW50LmF2ZyA9IHJvdW5kVG9JbnQobW92ZW1lbnQuYXZnKTtcbiAgbW92ZW1lbnQubWluID0gcm91bmRUb0ludChtb3ZlbWVudC5taW4pO1xuICBtb3ZlbWVudC5tYXggPSByb3VuZFRvSW50KG1vdmVtZW50Lm1heCk7XG4gIG1vdmVtZW50LmZpcnN0ID0gcm91bmRUb0ludChtb3ZlbWVudC5maXJzdCk7XG4gIG1vdmVtZW50Lmxhc3QgPSByb3VuZFRvSW50KG1vdmVtZW50Lmxhc3QpO1xuXG4gIHJldHVybiBtb3ZlbWVudDtcbn07XG4iLCJleHBvcnQgY29uc3QgbG9hZFNjcmlwdCA9IGFzeW5jIChzcmM6IHN0cmluZykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZTogRXZlbnQpID0+IHJlc29sdmUoZSksIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGU6IEVycm9yRXZlbnQpID0+IHJlamVjdChlKSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBsb2FkU2NyaXB0cyA9ICh1cmxzOiBzdHJpbmdbXSkgPT4gUHJvbWlzZS5hbGwodXJscy5tYXAoKHUpID0+IGxvYWRTY3JpcHQodSkpKTtcbiIsImV4cG9ydCBjb25zdCBydW5PbkRvY3VtZW50UmVhZHkgPSAoZm46IEZ1bmN0aW9uKSA9PiB7XG4gIC8vIHNlZSBpZiBET00gaXMgYWxyZWFkeSBhdmFpbGFibGVcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIC8vIGNhbGwgb24gbmV4dCBhdmFpbGFibGUgdGlja1xuICAgIHNldFRpbWVvdXQoZm4sIDEpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBmbigpKTtcbiAgfVxufTtcbiIsIi8qKlxuICogd2luZG93LnJ4anMgaXMgbG9hZGVkIGJ5IGV4dGVybmFsIHNjcmlwdFxuICoqL1xuaW1wb3J0ICogYXMgUnhUeXBlIGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgb3BlcmF0b3JzVHlwZSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSAnLi4vbG9hZC1zY3JpcHRzL2xvYWQtc2NyaXB0cyc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRSeEpTID0gKCkgPT5cbiAgbmV3IFByb21pc2U8UnhKUz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmICh3aW5kb3cucnhqcykge1xuICAgICAgcmVzb2x2ZSh3aW5kb3cucnhqcyk7XG4gICAgfVxuXG4gICAgbG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcnhqcy83LjAuMC1hbHBoYS4wL3J4anMudW1kLm1pbi5qcycpXG4gICAgICAudGhlbigoKSA9PiByZXNvbHZlKHdpbmRvdy5yeGpzKSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcblxudHlwZSBSeEpTID0ge1xuICBPYnNlcnZhYmxlOiB0eXBlb2YgUnhUeXBlLk9ic2VydmFibGU7XG4gIFN1YmplY3Q6IHR5cGVvZiBSeFR5cGUuU3ViamVjdDtcbiAgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI6IHR5cGVvZiBSeFR5cGUuYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG4gIGNvbWJpbmVMYXRlc3Q6IHR5cGVvZiBSeFR5cGUuY29tYmluZUxhdGVzdDtcbiAgb3BlcmF0b3JzOiB7XG4gICAgYnVmZmVyQ291bnQ6IHR5cGVvZiBvcGVyYXRvcnNUeXBlLmJ1ZmZlckNvdW50O1xuICAgIGRlYm91bmNlVGltZTogdHlwZW9mIG9wZXJhdG9yc1R5cGUuZGVib3VuY2VUaW1lO1xuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkOiB0eXBlb2Ygb3BlcmF0b3JzVHlwZS5kaXN0aW5jdFVudGlsQ2hhbmdlZDtcbiAgICBmaWx0ZXI6IHR5cGVvZiBvcGVyYXRvcnNUeXBlLmZpbHRlcjtcbiAgICBtYXA6IHR5cGVvZiBvcGVyYXRvcnNUeXBlLm1hcDtcbiAgICBwYWlyd2lzZTogdHlwZW9mIG9wZXJhdG9yc1R5cGUucGFpcndpc2U7XG4gICAgc2NhbjogdHlwZW9mIG9wZXJhdG9yc1R5cGUuc2NhbjtcbiAgICBza2lwOiB0eXBlb2Ygb3BlcmF0b3JzVHlwZS5za2lwO1xuICAgIHdpdGhMYXRlc3RGcm9tOiB0eXBlb2Ygb3BlcmF0b3JzVHlwZS53aXRoTGF0ZXN0RnJvbTtcbiAgfTtcbn07XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcnhqczogUnhKUztcbiAgfVxufVxuXG4vLyBsYXp5IGxvYWRcbmV4cG9ydCBjb25zdCBnZXRSeCA9ICgpID0+IHdpbmRvdy5yeGpzIGFzIFJ4SlM7XG4iLCJleHBvcnQgKiBmcm9tICcuL2ltcG9ydC1yeGpzJztcbmV4cG9ydCAqIGZyb20gJy4vb3BlcmF0b3JzJztcbiIsImV4cG9ydCAqIGZyb20gJy4vd2l0aC1oaXN0b3J5JztcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldFJ4IH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3Qgd2l0aEhpc3RvcnkgPSAobjogbnVtYmVyKSA9PiA8VD4oc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiB7XG4gIGNvbnN0IHsgT2JzZXJ2YWJsZSB9ID0gZ2V0UngoKTtcblxuICByZXR1cm4gbmV3IE9ic2VydmFibGU8VFtdPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGNvbnN0IHZhbHVlczogVFtdID0gW107XG4gICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dCh4OiBUKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHgpO1xuXG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gbikge1xuICAgICAgICAgIHZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChbLi4udmFsdWVzXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA8IG4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KFsuLi52YWx1ZXNdKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yKGVycjogRXJyb3IpIHtcbiAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9