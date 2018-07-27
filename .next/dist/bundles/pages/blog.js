module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/i867668/local/portfolio/components/Blog.js";





var Blog = function Blog() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1011087142"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
    pageTitle: "Blog Coming Soon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1011087142",
    css: ".blog.jsx-1011087142{font-size:14px;font-family:'Roboto',arial,sans-serif;font-weight:400;max-width:1280px;color:#090a0f;}.blog.jsx-1011087142 h1.jsx-1011087142{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IsQUFHd0IsQUFPRSxlQU51QixFQU8xQyxvQ0FOa0IsZ0JBQ0MsaUJBQ0gsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9CbG9nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pODY3NjY4L2xvY2FsL3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgcGFnZVRpdGxlPVwiQmxvZyBDb21pbmcgU29vblwiIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuYmxvZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gICAgICAgIGNvbG9yOiAjMDkwYTBmO1xuICAgICAgfVxuICAgICAgLmJsb2cgaDEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=components/Blog.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Blog);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FooterCTA__ = __webpack_require__("./components/FooterCTA.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FooterCopyright__ = __webpack_require__("./components/FooterCopyright.js");
var _jsxFileName = "/Users/i867668/local/portfolio/components/Footer.js";




var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FooterCTA__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FooterCopyright__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/FooterCTA.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/FooterCTA.js";



var FooterCTA = function FooterCTA() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1133112866" + " " + "cta-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1133112866" + " " + "cta-inner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1133112866" + " " + "cta-headline"
  }, "Interested in working together?"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "mailto:dylanmoberg11@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1133112866" + " " + "cta-email"
  }, "Email me ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1133112866" + " " + "fa fa-arrow-right"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1133112866",
    css: ".cta-container.jsx-1133112866{margin:0 auto;border-top:1px solid #F0EEEE;border-bottom:1px solid #F0EEEE;margin:0 auto 20px auto;line-height:1.5em;opacity:.8;padding:40px 0 60px 0;}.cta-inner.jsx-1133112866{text-align:center;margin:0 auto;}.cta-headline.jsx-1133112866{-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;padding:0 0 30px 0;}.cta-email.jsx-1133112866{border-radius:5px;border:1px solid #197993;padding:20px 30px;display:inline-block;font-style:italic;margin:0 1em;margin-bottom:1em;min-width:10em;color:#090a0f;}.cta-email.jsx-1133112866:hover{-webkit-transform:scale(1.020);-ms-transform:scale(1.020);transform:scale(1.020);color:#afb4bc;border-color:#d4e1f7;-webkit-transition:all .25s ease;transition:all .25s ease;}a.jsx-1133112866{color:$copy_color;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyQ1RBLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUd5QixBQVVJLEFBS0csQUFLSCxBQVdLLEFBT0wsY0FyQ1csSUFVZixBQVVXLEFBa0JKLGNBM0J2QixXQVZrQyxBQW9CZCxrQkFDRyxPQWlCdkIsT0FyQzBCLE1BNkJWLENBUkksYUFTRyxJQTdCSCxDQXFCTCxDQVRNLFlBVUQsR0FRTyxDQTdCZCxHQVliLFFBWHdCLEdBcUJQLGVBQ0QsSUFyQmhCLFVBc0JBLGNBTUEiLCJmaWxlIjoiY29tcG9uZW50cy9Gb290ZXJDVEEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2k4Njc2NjgvbG9jYWwvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRm9vdGVyQ1RBID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtaW5uZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImN0YS1oZWFkbGluZVwiPlxuICAgICAgICAgIEludGVyZXN0ZWQgaW4gd29ya2luZyB0b2dldGhlcj9cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3RhLWVtYWlsXCIgaHJlZj1cIm1haWx0bzpkeWxhbm1vYmVyZzExQGdtYWlsLmNvbVwiPlxuICAgICAgICAgIEVtYWlsIG1lIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jdGEtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0YwRUVFRTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YwRUVFRTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHggMCA2MHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jdGEtaW5uZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmN0YS1oZWFkbGluZSB7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAzMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jdGEtZW1haWwge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTk3OTkzO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgICBjb2xvcjogIzA5MGEwZjtcbiAgICAgICAgfVxuICAgICAgICAuY3RhLWVtYWlsOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIwKTtcbiAgICAgICAgICBjb2xvcjogI2FmYjRiYztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNkNGUxZjc7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTsgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAkY29weV9jb2xvcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDVEE7XG4iXX0= */\n/*@ sourceURL=components/FooterCTA.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterCTA);

/***/ }),

/***/ "./components/FooterCopyright.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/FooterCopyright.js";



var FooterCopyright = function FooterCopyright() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2185148238" + " " + "copyright"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2185148238"
  }, "Copyright Dylan Moberg 2017", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://github.com/mobot11/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2185148238"
  }, "source")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2185148238",
    css: ".copyright.jsx-2185148238{padding:30px 0 50px 0;}.copyright.jsx-2185148238 p.jsx-2185148238{text-align:center;margin:0 auto;}.copyright.jsx-2185148238 a.jsx-2185148238{color:#197993;font-style:italic;font-size:12px;-webkit-text-decoration:none;text-decoration:none;}.copyright.jsx-2185148238 a.jsx-2185148238:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyQ29weXJpZ2h0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQixBQUdpQyxBQUlKLEFBS0osQUFPWSxjQU5SLElBTEosSUFKaEIsVUFLQSxBQUtpQixlQUNNLGFBS3ZCLHFDQUpBIiwiZmlsZSI6ImNvbXBvbmVudHMvRm9vdGVyQ29weXJpZ2h0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pODY3NjY4L2xvY2FsL3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvb3RlckNvcHlyaWdodCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxuICAgICAgPHA+XG4gICAgICAgIENvcHlyaWdodCBEeWxhbiBNb2JlcmcgMjAxN3snICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW9ib3QxMS9wb3J0Zm9saW9cIj5zb3VyY2U8L2E+XG4gICAgICA8L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb3B5cmlnaHQge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMCA1MHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb3B5cmlnaHQgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29weXJpZ2h0IGEge1xuICAgICAgICAgIGNvbG9yOiAjMTk3OTkzO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY29weXJpZ2h0IGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDb3B5cmlnaHQ7XG4iXX0= */\n/*@ sourceURL=components/FooterCopyright.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterCopyright);

/***/ }),

/***/ "./components/GlobalHead.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/GlobalHead.js";




var GlobalHead = function GlobalHead(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    lang: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.pageName ? props.pageName : '', " | Dylan Moberg"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "description",
    content: "Dylan Moberg's portfolio website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
};

GlobalHead.propTypes = {
  pageName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalHead);

/***/ }),

/***/ "./components/GlobalStyles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NormalizeCss__ = __webpack_require__("./components/NormalizeCss.js");
var _jsxFileName = "/Users/i867668/local/portfolio/components/GlobalStyles.js";





var GlobalStyles = function GlobalStyles(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3265886048"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NormalizeCss__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3265886048",
    css: "body{padding:0 75px;border:8px solid #090a0f;font-family:\"Roboto\",arial,sans-serif;}html{height:100%;}h1,h2,p{color:#090a0f;}h4{font-size:14px;color:#197993;}@media screen and (max-width:800px){body{padding:0 25px;}h1{font-size:28px;}}h1,h2,h3{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN5QixBQUd3QixBQUtILEFBR0UsQUFHQyxBQUtFLEFBR0EsQUFLRSxBQUlFLFlBdEJ2QixFQUdBLENBUjJCLEFBV1gsQUFLZCxBQUdBLGNBUEYsV0FYMEMsVUEyQjFDLDRCQTFCQSxlQXNCQSIsImZpbGUiOiJjb21wb25lbnRzL0dsb2JhbFN0eWxlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaTg2NzY2OC9sb2NhbC9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOb3JtYWxpemVDc3MgZnJvbSAnLi9Ob3JtYWxpemVDc3MnO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxOb3JtYWxpemVDc3MgLz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMCA3NXB4O1xuICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjMDkwYTBmO1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgYXJpYWwsIHNhbnMtc2VyaWY7IFxuICAgICAgfVxuICAgICAgaHRtbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIGgxLCBoMiwgcCB7XG4gICAgICAgIGNvbG9yOiAjMDkwYTBmO1xuICAgICAgfVxuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMTk3OTkzO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaDEsIGgyLCBoMyB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5HbG9iYWxTdHlsZXMucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbiJdfQ== */\n/*@ sourceURL=components/GlobalStyles.js */"
  }));
};

GlobalStyles.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
};
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyles);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/Header.js";



var Header = function Header(_ref) {
  var pageTitle = _ref.pageTitle;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-4243098953"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      clear: 'both'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-4243098953"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-4243098953" + " " + "header-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-4243098953" + " " + "title"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4243098953"
  }, pageTitle))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4243098953",
    css: ".header-container.jsx-4243098953{max-width:815px;margin:60px auto 80px auto;color:#090a0f;padding:0 10px;overflow:visible;}.header-container.jsx-4243098953 h1.jsx-4243098953{opacity:.8;line-height:1.5em;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}@media screen and (max-width:800px){.header-container.jsx-4243098953{margin:0 auto 60px auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUcyQixBQU9MLEFBTWUsV0FMUixLQVBTLFFBYTNCLEtBTG1CLGNBUEwsY0FDQyxlQUNFLGlCQUNuQixpQ0FLQSIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaTg2NzY2OC9sb2NhbC9wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwYWdlVGl0bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6ICdib3RoJ319IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxoMT57cGFnZVRpdGxlfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgxNXB4O1xuICAgICAgICAgIG1hcmdpbjogNjBweCBhdXRvIDgwcHggYXV0bztcbiAgICAgICAgICBjb2xvcjogIzA5MGEwZjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1jb250YWluZXIgaDEge1xuICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/Menu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    _this.state = {
      hidden: true
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.state.hidden) {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.menu').find('.social_link').addClass('test').fadeIn('slow');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.$social = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this.social);
      __WEBPACK_IMPORTED_MODULE_2_jquery___default()(this.$social).on('click', function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery___default()('.social_item').toggle('slide');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-226943268" + " " + "nav-container"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-226943268" + " " + "nav-menu"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-226943268" + " " + "menu"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-226943268"
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-226943268"
      }, "Projects"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-226943268"
      }, "Blog"))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        ref: function ref(social) {
          _this2.social = social;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-226943268" + " " + 'social hidden'
      }, "Social"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-226943268" + " " + "social_item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/dylanmoberg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-226943268" + " " + "fa fa-linkedin"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-226943268" + " " + "social_item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.github.com/mobot11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-226943268" + " " + "fa fa-github"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-226943268" + " " + "social_item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "https://www.twitter.com/mobot11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-226943268" + " " + "fa fa-twitter"
      }))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-226943268" + " " + "social_item"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        href: "mailto:dylanmoberg11@gmail.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-226943268"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-226943268" + " " + "fa fa-envelope-open"
      }))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-226943268"
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "226943268",
        css: ".nav-menu.jsx-226943268{padding:40px 0;float:right;}.menu.jsx-226943268 li.jsx-226943268{list-style:none;display:inline-block;padding:0 0 0 20px;overflow:hidden;}.menu.jsx-226943268 li.jsx-226943268:hover{-webkit-text-decoration:underline;text-decoration:underline;}.menu.jsx-226943268 li.jsx-226943268 a.jsx-226943268{color:#090a0f;-webkit-text-decoration:none;text-decoration:none;opacity:0.8;}.nav-menu.jsx-226943268 .social.jsx-226943268{cursor:pointer;color:#090a0f;}@media only screen and (max-width:800px){.nav-menu.jsx-226943268 .social.jsx-226943268{display:none !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBRzBCLEFBSUMsQUFNVSxBQUdaLEFBS0MsQUFLVyxjQVRMLENBYlQsQUFrQkUsQ0FkTyxRQW1CckIsR0F0QkYsRUFrQkEsUUFkcUIsbUJBQ0gsSUFJbEIsSUFJYyxRQVBkLElBUUEiLCJmaWxlIjoiY29tcG9uZW50cy9NZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pODY3NjY4L2xvY2FsL3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5oaWRkZW4pIHtcbiAgICAgICQoJy5tZW51JylcbiAgICAgICAgLmZpbmQoJy5zb2NpYWxfbGluaycpXG4gICAgICAgIC5hZGRDbGFzcygndGVzdCcpXG4gICAgICAgIC5mYWRlSW4oJ3Nsb3cnKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLiRzb2NpYWwgPSAkKHRoaXMuc29jaWFsKTtcbiAgICAkKHRoaXMuJHNvY2lhbCkub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJCgnLnNvY2lhbF9pdGVtJykudG9nZ2xlKCdzbGlkZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbWVudVwiPlxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9qZWN0cyc+XG4gICAgICAgICAgICAgICAgICA8YT5Qcm9qZWN0czwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYmxvZyc+XG4gICAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzb2NpYWwgaGlkZGVuJ1xuICAgICAgICAgICAgICAgIHJlZj17c29jaWFsID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsID0gc29jaWFsO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTb2NpYWxcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbF9pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZHlsYW5tb2JlcmdcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWxfaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9tb2JvdDExXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbF9pdGVtXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9tb2JvdDExXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWxfaXRlbVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmR5bGFubW9iZXJnMTFAZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vcGVuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjogJ2JvdGgnfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUgbGk6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IGxpIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDkwYTBmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi1tZW51IC5zb2NpYWwge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzA5MGEwZjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLm5hdi1tZW51IC5zb2NpYWwge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */\n/*@ sourceURL=components/Menu.js */"
      }));
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./components/NormalizeCss.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/NormalizeCss.js";



var NormalizeCss = function NormalizeCss() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2442002532"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2442002532",
    css: "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}article,aside,footer,header,nav,section{display:block;}h1{font-size:2em;margin:.67em 0;}figcaption,figure,main{display:block;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:inherit;font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}dfn{font-style:italic;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-.25em;}sup{top:-.5em;}audio,video{display:inline-block;}audio:not([controls]){display:none;height:0;}img{border-style:none;}svg:not(:root){overflow:hidden;}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:.35em .75em .625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{display:inline-block;vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details,menu{display:block;}summary{display:list-item;}canvas{display:inline-block;}template{display:none;}[hidden]{display:none;}.clearfix:after{content:\".\";visibility:hidden;display:block;height:0;clear:both;}div,p{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTm9ybWFsaXplQ3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt5QixBQUUyQixBQUFpRSxBQUFvRCxBQUFnQixBQUFnRCxBQUFxQixBQUF5QixBQUEwRCxBQUEwQyxBQUFpRSxBQUFvRixBQUE4RCxBQUFnQyxBQUEwQixBQUEyQixBQUFxQixBQUFvRSxBQUFZLEFBQStCLEFBQWtDLEFBQTJCLEFBQTZCLEFBQTRELEFBQWlFLEFBQWdDLEFBQ3g4QixBQUErSSxBQUFzSixBQUFrQyxBQUE0QixBQUErRixBQUEyQyxBQUFzRCxBQUF3RyxBQUE0QyxBQUFpSSxBQUFzRCxBQUNwNUIsQUFBd0IsQUFBMEIsQUFBb0IsQUFBb0IsQUFBMkIsQUFBeUUsU0FGeEgsQ0FBbXBCLEVBQ3ZDLEFBQzVpQixDQUYwcEIsQUFFenRCLEFBQW9CLENBRitCLEFBQTRCLEFBQW9DLEFBQTBiLEFBQWlDLEFBQXdELEFBQ3pMLEFBQ25oQixFQUY4TSxBQUFtb0IsQ0FBcnpCLEFBQWs3QixDQUFoWixBQUFzUCxBQUN4bkIsQUFDcEssQ0FGNFksQ0FBNEUsQUFBOGYsQ0FBdlAsQUFDMVAsQUFDM2MsQ0FGOGlCLEFBQWdNLEFBQzNZLEFBQTJMLEFBQ2xaLENBRmdELEFBQTRxQixDQUM1RCxFQUF4ekIsQUFBdzNCLENBQWpqQixDQUR3VCxBQUN4ZSxDQUR2QyxBQUF1TixBQUNpWSxDQUFuYSxBQUN6TCxFQUYyRyxBQUErQyxBQUE2UCxBQUN3QyxDQURnQixHQUMvTCxFQUR3Z0IsQ0FBemIsQUFDOGEsSUFEdjJCLENBRWtHLENBRG9XLENBRGpOLEFBQTZQLEFBQWlKLEdBQTdiLEFBQ2lmLENBQS9ULEdBQzdRLEVBRjh3QixTQUFDLEFBRTl3QixDQURxUixDQUQzRSxJQUE4VSxHQUFub0IsRUFDaVosSUFEUCxlQUNRLDJEQURQIiwiZmlsZSI6ImNvbXBvbmVudHMvTm9ybWFsaXplQ3NzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pODY3NjY4L2xvY2FsL3BvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5vcm1hbGl6ZUNzcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGh0bWx7bGluZS1oZWlnaHQ6MS4xNTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLG5hdixzZWN0aW9ue2Rpc3BsYXk6YmxvY2t9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1maWdjYXB0aW9uLGZpZ3VyZSxtYWlue2Rpc3BsYXk6YmxvY2t9ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWRmbntmb250LXN0eWxlOml0YWxpY31tYXJre2JhY2tncm91bmQtY29sb3I6I2ZmMDtjb2xvcjojMDAwfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1hdWRpbyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9ja31hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfWltZ3tib3JkZXItc3R5bGU6bm9uZX1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixodG1sIFt0eXBlPVwiYnV0dG9uXCJdLC8qIDEgKi9cbiAgICAgIFt0eXBlPVwicmVzZXRcIl0sW3R5cGU9XCJzdWJtaXRcIl17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9YnV0dG9uOi1tb3otZm9jdXNyaW5nLFt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPVwiY2hlY2tib3hcIl0sW3R5cGU9XCJyYWRpb1wiXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPVwic2VhcmNoXCJdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHMsLyogMSAqL1xuICAgICAgbWVudXtkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19Y2FudmFze2Rpc3BsYXk6aW5saW5lLWJsb2NrfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9LmNsZWFyZml4OmFmdGVye2NvbnRlbnQ6XCIuXCI7dmlzaWJpbGl0eTpoaWRkZW47ZGlzcGxheTpibG9jaztoZWlnaHQ6MDtjbGVhcjpib3RofWRpdixwe2JveC1zaXppbmc6Ym9yZGVyLWJveH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vcm1hbGl6ZUNzcztcbiJdfQ== */\n/*@ sourceURL=components/NormalizeCss.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (NormalizeCss);

/***/ }),

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_GlobalHead__ = __webpack_require__("./components/GlobalHead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_GlobalStyles__ = __webpack_require__("./components/GlobalStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Blog__ = __webpack_require__("./components/Blog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/i867668/local/portfolio/pages/blog.js";








var BlogPage = function BlogPage() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2329041830"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_GlobalStyles__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_GlobalHead__["a" /* default */], {
    pageName: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Blog__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2329041830",
    css: "body{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J5QixBQUd1QixZQUNkIiwiZmlsZSI6InBhZ2VzL2Jsb2cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2k4Njc2NjgvbG9jYWwvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbG9iYWxIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvR2xvYmFsSGVhZCc7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgQmxvZyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8R2xvYmFsU3R5bGVzPlxuICAgICAgICA8TWVudSAvPlxuICAgICAgICA8R2xvYmFsSGVhZCBwYWdlTmFtZT1cIkJsb2dcIiAvPlxuICAgICAgICA8QmxvZyAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0dsb2JhbFN0eWxlcz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQmxvZ1BhZ2UucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xuIl19 */\n/*@ sourceURL=pages/blog.js */"
  }));
};

BlogPage.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/blog.js");


/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map