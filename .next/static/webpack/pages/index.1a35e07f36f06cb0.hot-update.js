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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatFooter: function() { return /* binding */ ChatFooter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatFooter(param) {\n    let { chatId } = param;\n    _s();\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSendMessage = (e)=>{\n        e.preventDefault();\n        _services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"chats\").doc(chatId).collection(\"messages\").add({\n            message: message,\n            user: user.email,\n            photoURL: user.photoURL,\n            timestamp: firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore.FieldValue.serverTimestamp()\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        w: \"100%\",\n        bottom: 0,\n        p: \"0.5rem\",\n        display: \"flex\",\n        bg: \"#9ca6ff\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n            gap: 12,\n            display: \"flex\",\n            onSubmit: handleSendMessage,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                    onChange: (e)=>setMessage(e.target.value),\n                    value: message,\n                    placeholder: \"Mensagem\",\n                    color: \"black\",\n                    _focus: {\n                        border: \"1px solid #452ad8\"\n                    },\n                    bg: \"white\"\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    bg: \"#452ad8\",\n                    p: \"1rem\",\n                    type: \"button\",\n                    _hover: {\n                        bg: \"#02ad41\"\n                    },\n                    color: \"white\",\n                    onClick: handleSendMessage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Img, {\n                        src: \"/paperwhite.svg\",\n                        height: 30,\n                        w: 30\n                    }, void 0, false, {\n                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatFooter/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatFooter, \"LlPfaChUx4ihJGOzmbhG9CymKtY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = ChatFooter;\nvar _c;\n$RefreshReg$(_c, \"ChatFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXRGb290ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEk7QUFDN0Y7QUFDUztBQUN2QjtBQUNVO0FBQ0Y7QUFFbEMsU0FBU2lCLFdBQVcsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUN2QixNQUFNLENBQUNDLEtBQUssR0FBR04sdUVBQVlBLENBQUNGLG9EQUFJQTtJQUNoQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3ZCQSxFQUFFQyxjQUFjO1FBRWhCWixrREFBRUEsQ0FBQ2EsVUFBVSxDQUFDLFNBQVNDLEdBQUcsQ0FBQ1IsUUFBUU8sVUFBVSxDQUFDLFlBQVlFLEdBQUcsQ0FBQztZQUMxRFAsU0FBU0E7WUFDVEQsTUFBTUEsS0FBS1MsS0FBSztZQUNoQkMsVUFBVVYsS0FBS1UsUUFBUTtZQUN2QkMsV0FBV2YscUVBQWtCLENBQUNpQixVQUFVLENBQUNDLGVBQWU7UUFDNUQ7UUFFQVosV0FBVztJQUNmO0lBRUEscUJBQ0ksOERBQUNwQixpREFBR0E7UUFDQWlDLEdBQUc7UUFDSEMsUUFBUTtRQUNSQyxHQUFHO1FBQ0hDLFNBQVM7UUFDVEMsSUFBSTtrQkFFSiw0RUFBQ25DLHlEQUFXQTtZQUFDb0MsS0FBSztZQUFJRixTQUFTO1lBQVFHLFVBQVVsQjs7OEJBQzdDLDhEQUFDZixtREFBS0E7b0JBQ0ZrQyxVQUFVLENBQUNsQixJQUFNRixXQUFXRSxFQUFFbUIsTUFBTSxDQUFDQyxLQUFLO29CQUMxQ0EsT0FBT3ZCO29CQUNQd0IsYUFBWTtvQkFDWkMsT0FBTztvQkFDUEMsUUFBUTt3QkFBRUMsUUFBUTtvQkFBb0I7b0JBQ3RDVCxJQUFJOzs7Ozs7OEJBRVIsOERBQUN0QyxvREFBTUE7b0JBQUNzQyxJQUFJO29CQUFXRixHQUFHO29CQUFRWSxNQUFLO29CQUFTQyxRQUFRO3dCQUFFWCxJQUFJO29CQUFVO29CQUFHTyxPQUFPO29CQUFTSyxTQUFTNUI7OEJBQ2pHLDRFQUFDWixpREFBR0E7d0JBQUN5QyxLQUFJO3dCQUFrQkMsUUFBUTt3QkFBSWxCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0Q7R0F4Q2dCakI7O1FBQ0dKLG1FQUFZQTs7O0tBRGZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXQvY2hhdEZvb3Rlci9pbmRleC5qcz8wNzRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQm94LCBUZXh0LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBGb3JtRXJyb3JNZXNzYWdlLCBGb3JtSGVscGVyVGV4dCwgSW5wdXQsIEljb24sIEljb25CdXR0b24sIEltZ30gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJ0Avc2VydmljZXMvZmlyZWJhc2UnO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5pbXBvcnQgKiBhcyBSZWFjdEljb25zIGZyb20gJ3JlYWN0LWljb25zJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhdEZvb3Rlcih7IGNoYXRJZCB9KSB7XG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmRvYyhjaGF0SWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKS5hZGQoe1xuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgIHVzZXI6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldE1lc3NhZ2UoXCJcIik7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHc9e1wiMTAwJVwifVxuICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgcD17XCIwLjVyZW1cIn1cbiAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgICAgYmc9e1wiIzljYTZmZlwifVxuICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZ2FwPXsxMn0gZGlzcGxheT17XCJmbGV4XCJ9IG9uU3VibWl0PXtoYW5kbGVTZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J01lbnNhZ2VtJyBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wiYmxhY2tcIn1cbiAgICAgICAgICAgICAgICAgICAgX2ZvY3VzPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjNDUyYWQ4JyB9fVxuICAgICAgICAgICAgICAgICAgICBiZz17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiZz17XCIjNDUyYWQ4XCJ9IHA9e1wiMXJlbVwifSB0eXBlPSdidXR0b24nIF9ob3Zlcj17eyBiZzogJyMwMmFkNDEnIH19IGNvbG9yPXtcIndoaXRlXCJ9IG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz0nL3BhcGVyd2hpdGUuc3ZnJyBoZWlnaHQ9ezMwfSB3PXszMH0gLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiQm94IiwiVGV4dCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiRm9ybUVycm9yTWVzc2FnZSIsIkZvcm1IZWxwZXJUZXh0IiwiSW5wdXQiLCJJY29uIiwiSWNvbkJ1dHRvbiIsIkltZyIsImF1dGgiLCJkYiIsInVzZUF1dGhTdGF0ZSIsInVzZVN0YXRlIiwiZmlyZWJhc2UiLCJSZWFjdEljb25zIiwiQ2hhdEZvb3RlciIsImNoYXRJZCIsInVzZXIiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29sbGVjdGlvbiIsImRvYyIsImFkZCIsImVtYWlsIiwicGhvdG9VUkwiLCJ0aW1lc3RhbXAiLCJmaXJlc3RvcmUiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwidyIsImJvdHRvbSIsInAiLCJkaXNwbGF5IiwiYmciLCJnYXAiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNvbG9yIiwiX2ZvY3VzIiwiYm9yZGVyIiwidHlwZSIsIl9ob3ZlciIsIm9uQ2xpY2siLCJzcmMiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/chat/chatFooter/index.js\n"));

/***/ })

});