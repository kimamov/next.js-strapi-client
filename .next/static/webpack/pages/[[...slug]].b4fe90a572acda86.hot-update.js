"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/layouts/MainLayout.tsx":
/*!*******************************************!*\
  !*** ./components/layouts/MainLayout.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction MainLayout(param) {\n    var children = param.children, pageData = param.pageData, _pagesList = param.pagesList, pagesList = _pagesList === void 0 ? [] : _pagesList;\n    var _this = this;\n    _s();\n    // TODO: handle multiple slashes in slug\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var currentRoute = router.asPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"py-2\",\n                    children: pagesList.map(function(pageLink) {\n                        var ref, ref1;\n                        var ref2;\n                        var href = \"/\".concat((ref2 = pageLink === null || pageLink === void 0 ? void 0 : (ref = pageLink.attributes) === null || ref === void 0 ? void 0 : ref.slug) !== null && ref2 !== void 0 ? ref2 : \"\");\n                        var isLinkActive = href === currentRoute;\n                        var ref3;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: href,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"mx-2 p-2 text-lg inline-block\".concat(isLinkActive ? \"text-violet-600\" : \"\"),\n                                children: (ref3 = pageLink === null || pageLink === void 0 ? void 0 : (ref1 = pageLink.attributes) === null || ref1 === void 0 ? void 0 : ref1.metaTitle) !== null && ref3 !== void 0 ? ref3 : \"invalid page title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, _this)\n                        }, \"navLink_\".concat(pageLink === null || pageLink === void 0 ? void 0 : pageLink.id), false, {\n                            fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"footer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Schwartza\\\\Desktop\\\\next.js-client-for-strapi\\\\next.js-client-for-strapi\\\\components\\\\layouts\\\\MainLayout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(MainLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainLayout;\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ1U7O0FBUXhCLFNBQVNFLFVBQVUsQ0FBQyxLQUkxQixFQUFFO1FBSFRDLFFBQVEsR0FEeUIsS0FJMUIsQ0FIUEEsUUFBUSxFQUNSQyxRQUFRLEdBRnlCLEtBSTFCLENBRlBBLFFBQVEsZUFGeUIsS0FJMUIsQ0FEUEMsU0FBUyxFQUFUQSxTQUFTLDJCQUFHLEVBQUU7OztJQUVkLHdDQUF3QztJQUN4QyxJQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsSUFBTU0sWUFBWSxHQUFHRCxNQUFNLENBQUNFLE1BQU07SUFFbEMscUJBQ0U7OzBCQUNFLDhEQUFDQyxRQUFNOzBCQUNMLDRFQUFDQyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs4QkFDbEJOLFNBQVMsQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLFFBQWEsRUFBSzs0QkFDZkEsR0FBb0IsRUFTOUJBLElBQW9COzRCQVRWQSxJQUEwQjt3QkFBM0MsSUFBTUMsSUFBSSxHQUFHLEdBQUUsQ0FBbUMsT0FBakNELENBQUFBLElBQTBCLEdBQTFCQSxRQUFRLGFBQVJBLFFBQVEsV0FBWSxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLENBQUFBLEdBQW9CLEdBQXBCQSxRQUFRLENBQUVFLFVBQVUsY0FBcEJGLEdBQW9CLGNBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsR0FBb0IsQ0FBRUcsSUFBSSxjQUExQkgsSUFBMEIsY0FBMUJBLElBQTBCLEdBQUksRUFBRSxDQUFFO3dCQUNuRCxJQUFNSSxZQUFZLEdBQUdILElBQUksS0FBS1AsWUFBWTs0QkFRbkNNLElBQStCO3dCQU50QyxxQkFDRSw4REFBQ2Isa0RBQUk7NEJBRUhjLElBQUksRUFBRUEsSUFBSTtzQ0FFViw0RUFBQ0ksR0FBQztnQ0FBQ1AsU0FBUyxFQUFFLCtCQUE4QixDQUF3QyxPQUF0Q00sWUFBWSxHQUFHLGlCQUFpQixHQUFHLEVBQUUsQ0FBRTswQ0FDbEZKLENBQUFBLElBQStCLEdBQS9CQSxRQUFRLGFBQVJBLFFBQVEsV0FBWSxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLENBQUFBLElBQW9CLEdBQXBCQSxRQUFRLENBQUVFLFVBQVUsY0FBcEJGLElBQW9CLGNBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsSUFBb0IsQ0FBRU0sU0FBUyxjQUEvQk4sSUFBK0IsY0FBL0JBLElBQStCLEdBQUksb0JBQW9COzs7OztxQ0FDdEQ7MkJBTEMsVUFBUyxDQUFlLE9BQWJBLFFBQVEsYUFBUkEsUUFBUSxXQUFJLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsUUFBUSxDQUFFTyxFQUFFLENBQUU7Ozs7aUNBTXpCLENBQ1I7cUJBQ0YsQ0FBQzs7Ozs7d0JBQ0U7Ozs7O29CQUNDOzBCQUNULDhEQUFDQyxNQUFJOzBCQUFFbEIsUUFBUTs7Ozs7b0JBQVE7MEJBQ3ZCLDhEQUFDbUIsUUFBTTswQkFBQyxRQUFNOzs7OztvQkFBUzs7b0JBQ3RCLENBQ0g7Q0FDSDtHQWxDdUJwQixVQUFVOztRQU1qQkQsa0RBQVM7OztBQU5GQyxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluTGF5b3V0LnRzeD83NGM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUHJvcHNXaXRoQ2hpbGRyZW4ge1xuICBwYWdlRGF0YTogYW55O1xuICBwYWdlc0xpc3Q6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkxheW91dCh7XG4gIGNoaWxkcmVuLFxuICBwYWdlRGF0YSxcbiAgcGFnZXNMaXN0ID0gW10sXG59OiBJUHJvcHMpIHtcbiAgLy8gVE9ETzogaGFuZGxlIG11bHRpcGxlIHNsYXNoZXMgaW4gc2x1Z1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY3VycmVudFJvdXRlID0gcm91dGVyLmFzUGF0aFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgIHtwYWdlc0xpc3QubWFwKChwYWdlTGluazogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gYC8ke3BhZ2VMaW5rPy5hdHRyaWJ1dGVzPy5zbHVnID8/IFwiXCJ9YFxuICAgICAgICAgICAgY29uc3QgaXNMaW5rQWN0aXZlID0gaHJlZiA9PT0gY3VycmVudFJvdXRlO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17YG5hdkxpbmtfJHtwYWdlTGluaz8uaWR9YH1cbiAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbXgtMiBwLTIgdGV4dC1sZyBpbmxpbmUtYmxvY2ske2lzTGlua0FjdGl2ZSA/ICd0ZXh0LXZpb2xldC02MDAnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICB7cGFnZUxpbms/LmF0dHJpYnV0ZXM/Lm1ldGFUaXRsZSA/PyBcImludmFsaWQgcGFnZSB0aXRsZVwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxmb290ZXI+Zm9vdGVyPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VEYXRhIiwicGFnZXNMaXN0Iiwicm91dGVyIiwiY3VycmVudFJvdXRlIiwiYXNQYXRoIiwiaGVhZGVyIiwibmF2IiwiY2xhc3NOYW1lIiwibWFwIiwicGFnZUxpbmsiLCJocmVmIiwiYXR0cmlidXRlcyIsInNsdWciLCJpc0xpbmtBY3RpdmUiLCJhIiwibWV0YVRpdGxlIiwiaWQiLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/MainLayout.tsx\n");

/***/ })

});