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

/***/ "./src/components/ModalMobile/chatModalMobile/drawer.js":
/*!**************************************************************!*\
  !*** ./src/components/ModalMobile/chatModalMobile/drawer.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DrawerMobile: function() { return /* binding */ DrawerMobile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/components/ModalMobile/index.js\");\n/* harmony import */ var _components_chat_chatHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/chat/chatHeader */ \"./src/components/chat/chatHeader/index.js\");\n/* harmony import */ var _components_chat_chatBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/chat/chatBody */ \"./src/components/chat/chatBody/index.js\");\n/* harmony import */ var _components_chat_chatFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/chat/chatFooter */ \"./src/components/chat/chatFooter/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DrawerMobile(param) {\n    let { userChat } = param;\n    _s();\n    if (!userChat) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.ModalIndex, {}, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n        lineNumber: 9,\n        columnNumber: 27\n    }, this);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Drawer, {\n        size: \"full\",\n        isOpen: isOpen,\n        isFullHeight: true,\n        placement: \"top\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.DrawerContent, {\n            w: \"100%\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.DrawerBody, {\n                w: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    h: \"100vh\",\n                    direction: \"column\",\n                    w: \"100%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat_chatHeader__WEBPACK_IMPORTED_MODULE_2__.ChatHeader, {\n                            setIsOpen: setIsOpen,\n                            photoURL: userChat === null || userChat === void 0 ? void 0 : userChat.photoURL,\n                            name: userChat === null || userChat === void 0 ? void 0 : userChat.name\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat_chatBody__WEBPACK_IMPORTED_MODULE_3__.ChatBody, {\n                            chatId: userChat === null || userChat === void 0 ? void 0 : userChat.chatId\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat_chatFooter__WEBPACK_IMPORTED_MODULE_4__.ChatFooter, {\n                            chatId: userChat === null || userChat === void 0 ? void 0 : userChat.chatId\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n                    lineNumber: 16,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/chatModalMobile/drawer.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(DrawerMobile, \"mEi83NlPXQzy/XIDfTYWzOSvaHw=\");\n_c = DrawerMobile;\nvar _c;\n$RefreshReg$(_c, \"DrawerMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbE1vYmlsZS9jaGF0TW9kYWxNb2JpbGUvZHJhd2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyRTtBQUMzQztBQUMwQjtBQUNKO0FBQ0k7QUFDekI7QUFFMUIsU0FBU1MsYUFBYSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ3pCLElBQUksQ0FBQ0EsVUFBVSxxQkFBTyw4REFBQ04seUNBQVVBOzs7OztJQUNqQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFFckMscUJBQ0ksOERBQUNSLG9EQUFNQTtRQUFDYSxNQUFNO1FBQVFGLFFBQVFBO1FBQVFHLFlBQVk7UUFBQ0MsV0FBVTtrQkFDekQsNEVBQUNiLDJEQUFhQTtZQUFDYyxHQUFHO3NCQUNkLDRFQUFDZix3REFBVUE7Z0JBQUNlLEdBQUc7MEJBQ1gsNEVBQUNiLGtEQUFJQTtvQkFBQ2MsR0FBRztvQkFBU0MsV0FBVztvQkFBVUYsR0FBRzs7c0NBQ3RDLDhEQUFDWCxtRUFBVUE7NEJBQUNPLFdBQVdBOzRCQUFXTyxRQUFRLEVBQUVULHFCQUFBQSwrQkFBQUEsU0FBVVMsUUFBUTs0QkFBRUMsSUFBSSxFQUFFVixxQkFBQUEsK0JBQUFBLFNBQVVVLElBQUk7Ozs7OztzQ0FDcEYsOERBQUNkLCtEQUFRQTs0QkFBQ2UsTUFBTSxFQUFFWCxxQkFBQUEsK0JBQUFBLFNBQVVXLE1BQU07Ozs7OztzQ0FDbEMsOERBQUNkLG1FQUFVQTs0QkFBQ2MsTUFBTSxFQUFFWCxxQkFBQUEsK0JBQUFBLFNBQVVXLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQWpCZ0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsTW9iaWxlL2NoYXRNb2RhbE1vYmlsZS9kcmF3ZXIuanM/ZDllMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3ZXIsIERyYXdlckJvZHksIERyYXdlckNvbnRlbnQsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWxJbmRleCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgQ2hhdEhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2hhdC9jaGF0SGVhZGVyXCI7XG5pbXBvcnQgeyBDaGF0Qm9keSB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2hhdC9jaGF0Qm9keVwiO1xuaW1wb3J0IHsgQ2hhdEZvb3RlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvY2hhdC9jaGF0Rm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRHJhd2VyTW9iaWxlKHsgdXNlckNoYXQgfSkge1xuICAgIGlmICghdXNlckNoYXQpIHJldHVybiA8TW9kYWxJbmRleCAvPlxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEcmF3ZXIgc2l6ZT17XCJmdWxsXCJ9IGlzT3Blbj17aXNPcGVufSBpc0Z1bGxIZWlnaHQgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICA8RHJhd2VyQ29udGVudCB3PXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgICAgPERyYXdlckJvZHkgdz17XCIxMDAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBoPXtcIjEwMHZoXCJ9IGRpcmVjdGlvbj17XCJjb2x1bW5cIn0gdz17XCIxMDAlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRIZWFkZXIgc2V0SXNPcGVuPXtzZXRJc09wZW59IHBob3RvVVJMPXt1c2VyQ2hhdD8ucGhvdG9VUkx9IG5hbWU9e3VzZXJDaGF0Py5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYXRCb2R5IGNoYXRJZD17dXNlckNoYXQ/LmNoYXRJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0Rm9vdGVyIGNoYXRJZD17dXNlckNoYXQ/LmNoYXRJZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvRHJhd2VyQm9keT5cbiAgICAgICAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJEcmF3ZXJCb2R5IiwiRHJhd2VyQ29udGVudCIsIkZsZXgiLCJNb2RhbEluZGV4IiwiQ2hhdEhlYWRlciIsIkNoYXRCb2R5IiwiQ2hhdEZvb3RlciIsInVzZVN0YXRlIiwiRHJhd2VyTW9iaWxlIiwidXNlckNoYXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzaXplIiwiaXNGdWxsSGVpZ2h0IiwicGxhY2VtZW50IiwidyIsImgiLCJkaXJlY3Rpb24iLCJwaG90b1VSTCIsIm5hbWUiLCJjaGF0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ModalMobile/chatModalMobile/drawer.js\n"));

/***/ })

});