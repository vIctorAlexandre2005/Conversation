"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/login/login.js":
/*!***************************************!*\
  !*** ./src/components/login/login.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginComponent: function() { return /* binding */ LoginComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginComponent(param) {\n    let { user } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    function handleSignin() {\n        _services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.signInWithPopup(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.provider).catch(alert);\n    }\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_3__.MoonLoader, {}, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/login/login.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n            onClick: handleSignin,\n            children: \"Login com o Google\"\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/login/login.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(LoginComponent, \"J7PPXooW06IQ11rfabbvgk72KFw=\");\n_c = LoginComponent;\nvar _c;\n$RefreshReg$(_c, \"LoginComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ1Y7QUFDRTtBQUNBO0FBRXJDLFNBQVNNLGVBQWUsS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkMsU0FBU007UUFDTFYsb0RBQUlBLENBQUNXLGVBQWUsQ0FBQ1Ysd0RBQVFBLEVBQUVXLEtBQUssQ0FBQ0M7SUFDekM7O0lBQ0FWLGdEQUFTQSxDQUFDO1FBQ04sSUFBR0ksTUFBTTtZQUNMRSxXQUFXO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSTtrQkFFSEQsd0JBQ0csOERBQUNILHNEQUFVQTs7OztpQ0FFWCw4REFBQ0gsb0RBQU1BO1lBQUNZLFNBQVNKO3NCQUFjOzs7Ozs7O0FBS3ZDO0dBdEJnQko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbG9naW4vbG9naW4uanM/MTYxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gXCJAL3NlcnZpY2VzL2ZpcmViYXNlXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb29uTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkNvbXBvbmVudCh7IHVzZXIgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2lnbmluKCkge1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikuY2F0Y2goYWxlcnQpO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYodXNlcikge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIFxuICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TW9vbkxvYWRlciAvPlxuICAgICkgOiAoXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2lnbmlufT5Mb2dpbiBjb20gbyBHb29nbGU8L0J1dHRvbj4gICBcbiAgICApfSBcbiAgICAgICAgXG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aCIsInByb3ZpZGVyIiwiQnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb29uTG9hZGVyIiwiTG9naW5Db21wb25lbnQiLCJ1c2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTaWduaW4iLCJzaWduSW5XaXRoUG9wdXAiLCJjYXRjaCIsImFsZXJ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/login/login.js\n"));

/***/ })

});