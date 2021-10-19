/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReloadOnBreakpoint = /*#__PURE__*/function () {
  function ReloadOnBreakpoint(breakpoints) {
    var _this$sorted;

    _classCallCheck(this, ReloadOnBreakpoint);

    _defineProperty(this, "currentScreen", Number);

    _defineProperty(this, "lastBreakpoint", []);

    _defineProperty(this, "minimum", 0);

    _defineProperty(this, "maximum", 99999);

    this.breakpoints = breakpoints;
    this.sorted = this.breakpoints.sort(function (a, b) {
      return a - b;
    });
    this.first = this.sorted[0];
    this.last = (_this$sorted = this.sorted[this.sorted.length - 1]) !== null && _this$sorted !== void 0 ? _this$sorted : this.maximum;
    this.between = this.breakpoints.length == 1 ? [] : this.sorted;

    if (this.breakpoints.length > 1) {
      this.between.pop();
      this.between.shift();
    }
  }

  _createClass(ReloadOnBreakpoint, [{
    key: "checkBreakpoints",
    value: function checkBreakpoints(between) {
      if (window.innerWidth < this.first) {
        this.currentScreen = this.minimum;
      }

      if (window.innerWidth >= this.first && window.innerWidth <= between[0]) {
        this.currentScreen = this.first;
      }

      if (window.innerWidth > this.first && window.innerWidth < this.last) {
        this.checkBreakpointsBetween(between);
      }

      if (window.innerWidth > this.last) {
        this.currentScreen = this.last;
      }

      this.reloadOnChange();
    }
  }, {
    key: "checkBreakpointsBetween",
    value: function checkBreakpointsBetween(between) {
      var _this = this;

      between.length > 0 && between.forEach(function (val, index) {
        var _between;

        var nextPoint = (_between = between[index + 1]) !== null && _between !== void 0 ? _between : _this.last;

        if (window.innerWidth > val && window.innerWidth < nextPoint) {
          _this.currentScreen = val;
        }
      });
      if (between.length == 0) this.currentScreen = this.first;
    }
  }, {
    key: "reloadOnChange",
    value: function reloadOnChange() {
      this.lastBreakpoint.push(this.currentScreen);

      if (this.lastBreakpoint.length >= 3) {
        this.lastBreakpoint.shift();
        if (this.lastBreakpoint[0] !== this.lastBreakpoint[1]) window.location.reload();
      }

      ;
    }
  }, {
    key: "mount",
    value: function mount() {
      var _this2 = this;

      this.checkBreakpoints(this.between);
      window.addEventListener('resize', function () {
        return _this2.checkBreakpoints(_this2.between);
      });
    }
  }]);

  return ReloadOnBreakpoint;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReloadOnBreakpoint);
/******/ })()
;
//# sourceMappingURL=main.js.map