webpackHotUpdate(6,{

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName = "/Users/i867668/local/portfolio/components/Menu.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

var _default = Menu;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "/Users/i867668/local/portfolio/components/Menu.js");
  reactHotLoader.register(_default, "default", "/Users/i867668/local/portfolio/components/Menu.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/blog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_GlobalHead__ = __webpack_require__("./components/GlobalHead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_GlobalStyles__ = __webpack_require__("./components/GlobalStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Menu__ = __webpack_require__("./components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Blog__ = __webpack_require__("./components/Blog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/i867668/local/portfolio/pages/blog.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var BlogPage = function BlogPage() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_GlobalStyles__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2329041830"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_GlobalHead__["a" /* default */], {
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
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2329041830",
    css: "body.jsx-2329041830{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUd1QixZQUNkIiwiZmlsZSI6InBhZ2VzL2Jsb2cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2k4Njc2NjgvbG9jYWwvcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbG9iYWxIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvR2xvYmFsSGVhZCc7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XG5pbXBvcnQgQmxvZyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHbG9iYWxTdHlsZXM+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEdsb2JhbEhlYWQgcGFnZU5hbWU9XCJCbG9nXCIgLz5cbiAgICAgICAgPEJsb2cgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0dsb2JhbFN0eWxlcz5cbiAgKTtcbn07XG5cbkJsb2dQYWdlLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTtcbiJdfQ== */\n/*@ sourceURL=pages/blog.js */"
  }));
};

BlogPage.propTypes = {};
var _default = BlogPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BlogPage, "BlogPage", "/Users/i867668/local/portfolio/pages/blog.js");
  reactHotLoader.register(_default, "default", "/Users/i867668/local/portfolio/pages/blog.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.a7ee8c4f0d9bcd7a4c4e.hot-update.js.map