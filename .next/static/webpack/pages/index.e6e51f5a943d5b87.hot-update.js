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

/***/ "./src/components/chat/chatFooter/index.js":
/*!*************************************************!*\
  !*** ./src/components/chat/chatFooter/index.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatFooter: function() { return /* binding */ ChatFooter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var phosphor_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phosphor-icons */ \"./node_modules/phosphor-icons/src/index.js\");\n/* harmony import */ var phosphor_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(phosphor_icons__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatFooter(param) {\n    let { chatId } = param;\n    _s();\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSendMessage = (e)=>{\n        e.preventDefault();\n        _services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"chats\").doc(chatId).collection(\"messages\").add({\n            message: message,\n            user: user.email,\n            photoURL: user.photoURL,\n            timestamp: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore.FieldValue.serverTimestamp()\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        w: \"100%\",\n        bottom: 0,\n        p: \"0.5rem\",\n        display: \"flex\",\n        bg: \"#9ca6ff\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {\n            gap: 12,\n            display: \"flex\",\n            onSubmit: handleSendMessage,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                    onChange: (e)=>setMessage(e.target.value),\n                    value: message,\n                    placeholder: \"Mensagem\",\n                    color: \"black\",\n                    _focus: {\n                        border: \"1px solid #452ad8\"\n                    },\n                    bg: \"white\"\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    bg: \"#452ad8\",\n                    type: \"button\",\n                    _hover: {\n                        bg: \"#02ad41\"\n                    },\n                    color: \"white\",\n                    onClick: handleSendMessage,\n                    children: \"envie\"\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatFooter, \"LlPfaChUx4ihJGOzmbhG9CymKtY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = ChatFooter;\nvar _c;\n$RefreshReg$(_c, \"ChatFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXRGb290ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1STtBQUN4RjtBQUNTO0FBQ3ZCO0FBQ1U7QUFDSztBQUV6QyxTQUFTZ0IsV0FBVyxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQ3ZCLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHTix1RUFBWUEsQ0FBQ0Ysb0RBQUlBO0lBQ2hDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUSxvQkFBb0IsQ0FBQ0M7UUFDdkJBLEVBQUVDLGNBQWM7UUFFaEJaLGtEQUFFQSxDQUFDYSxVQUFVLENBQUMsU0FBU0MsR0FBRyxDQUFDUixRQUFRTyxVQUFVLENBQUMsWUFBWUUsR0FBRyxDQUFDO1lBQzFEUCxTQUFTQTtZQUNURCxNQUFNQSxLQUFLUyxLQUFLO1lBQ2hCQyxVQUFVVixLQUFLVSxRQUFRO1lBQ3ZCQyxXQUFXZixxRUFBa0IsQ0FBQ2lCLFVBQVUsQ0FBQ0MsZUFBZTtRQUM1RDtRQUVBWixXQUFXO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ25CLGlEQUFHQTtRQUNBZ0MsR0FBRztRQUNIQyxRQUFRO1FBQ1JDLEdBQUc7UUFDSEMsU0FBUztRQUNUQyxJQUFJO2tCQUVKLDRFQUFDbEMseURBQVdBO1lBQUNtQyxLQUFLO1lBQUlGLFNBQVM7WUFBUUcsVUFBVWxCOzs4QkFDN0MsOERBQUNkLG1EQUFLQTtvQkFDRmlDLFVBQVUsQ0FBQ2xCLElBQU1GLFdBQVdFLEVBQUVtQixNQUFNLENBQUNDLEtBQUs7b0JBQzFDQSxPQUFPdkI7b0JBQ1B3QixhQUFZO29CQUNaQyxPQUFPO29CQUNQQyxRQUFRO3dCQUFFQyxRQUFRO29CQUFvQjtvQkFDdENULElBQUk7Ozs7Ozs4QkFFUiw4REFBQ3JDLG9EQUFNQTtvQkFBQ3FDLElBQUk7b0JBQVdVLE1BQUs7b0JBQVNDLFFBQVE7d0JBQUVYLElBQUk7b0JBQVU7b0JBQUdPLE9BQU87b0JBQVNLLFNBQVM1Qjs4QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVIO0dBeENnQkw7O1FBQ0dKLG1FQUFZQTs7O0tBRGZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXQvY2hhdEZvb3Rlci9pbmRleC5qcz8wNzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQm94LCBUZXh0LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBGb3JtRXJyb3JNZXNzYWdlLCBGb3JtSGVscGVyVGV4dCwgSW5wdXQsIEljb24sIEljb25CdXR0b259IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICdAL3NlcnZpY2VzL2ZpcmViYXNlJztcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xuaW1wb3J0IHsgUGFwZXJQbGFuZVJpZ2h0IH0gZnJvbSAncGhvc3Bob3ItaWNvbnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0Rm9vdGVyKHsgY2hhdElkIH0pIHtcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikuZG9jKGNoYXRJZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLmFkZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdXNlcjogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgdz17XCIxMDAlXCJ9XG4gICAgICAgICAgICBib3R0b209ezB9XG4gICAgICAgICAgICBwPXtcIjAuNXJlbVwifVxuICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgICBiZz17XCIjOWNhNmZmXCJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBnYXA9ezEyfSBkaXNwbGF5PXtcImZsZXhcIn0gb25TdWJtaXQ9e2hhbmRsZVNlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTWVuc2FnZW0nIFxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJibGFja1wifVxuICAgICAgICAgICAgICAgICAgICBfZm9jdXM9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICM0NTJhZDgnIH19XG4gICAgICAgICAgICAgICAgICAgIGJnPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJnPXtcIiM0NTJhZDhcIn0gdHlwZT0nYnV0dG9uJyBfaG92ZXI9e3sgYmc6ICcjMDJhZDQxJyB9fSBjb2xvcj17XCJ3aGl0ZVwifSBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIGVudmllXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L0JveD5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJveCIsIlRleHQiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1FcnJvck1lc3NhZ2UiLCJGb3JtSGVscGVyVGV4dCIsIklucHV0IiwiSWNvbiIsIkljb25CdXR0b24iLCJhdXRoIiwiZGIiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VTdGF0ZSIsImZpcmViYXNlIiwiUGFwZXJQbGFuZVJpZ2h0IiwiQ2hhdEZvb3RlciIsImNoYXRJZCIsInVzZXIiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29sbGVjdGlvbiIsImRvYyIsImFkZCIsImVtYWlsIiwicGhvdG9VUkwiLCJ0aW1lc3RhbXAiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwidyIsImJvdHRvbSIsInAiLCJkaXNwbGF5IiwiYmciLCJnYXAiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNvbG9yIiwiX2ZvY3VzIiwiYm9yZGVyIiwidHlwZSIsIl9ob3ZlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/chat/chatFooter/index.js\n"));

/***/ })

});