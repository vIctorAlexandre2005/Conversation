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

/***/ "./src/components/ModalMobile/index.js":
/*!*********************************************!*\
  !*** ./src/components/ModalMobile/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalIndex: function() { return /* binding */ ModalIndex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _chatModalMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatModalMobile */ \"./src/components/ModalMobile/chatModalMobile/index.js\");\n/* harmony import */ var _modalbody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalbody */ \"./src/components/ModalMobile/modalbody.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ModalIndex(param) {\n    let { isOpen, setIsOpen, userChat, setUserChat } = param;\n    _s();\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const getChatRef = ()=>{\n        if (user && user.email) {\n            return _services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"chats\").where(\"users\", \"array-contains\", user.email);\n        }\n        return null;\n    };\n    const refChat = getChatRef();\n    const [chatsSnapShot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)(refChat);\n    const chatExists = (email)=>{\n        if (chatsSnapShot) {\n            return chatsSnapShot.docs.some((doc)=>doc.data().users.includes(email));\n        }\n        return false;\n    };\n    function handleCreateChat() {\n        const emailInput = prompt(\"Escreva o email desejado\");\n        if (!emailInput) return;\n        if (!EmailValidator.validate(emailInput)) {\n            return alert(\"Email inv\\xe1lido\");\n        } else if (emailInput === (user === null || user === void 0 ? void 0 : user.email)) {\n            return alert(\"Insira um email diferente do seu\");\n        } else if (chatExists(emailInput)) {\n            return alert(\"Chat j\\xe1 existe\");\n        }\n        _services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"chats\").add({\n            users: [\n                user === null || user === void 0 ? void 0 : user.email,\n                emailInput\n            ]\n        });\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Modal, {\n        size: \"full\",\n        isOpen: isOpen,\n        isCentered: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalContent, {\n            w: \"100%\",\n            height: \"100vh\",\n            bg: \"white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalHeader, {\n                    w: \"100%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                            fontWeight: \"600\",\n                            color: \"black\",\n                            fontSize: \"1.26rem\",\n                            children: \"Chat App\"\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            p: \"1rem\",\n                            justifyContent: \"space-between\",\n                            display: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Img, {\n                                    onClick: ()=>[\n                                            _services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.signOut(),\n                                            setUserChat(null)\n                                        ],\n                                    src: user === null || user === void 0 ? void 0 : user.photoURL,\n                                    h: 35,\n                                    w: 35,\n                                    borderRadius: \"50%\"\n                                }, void 0, false, {\n                                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, {\n                                        as: \"button\",\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.SmallAddIcon, {\n                                            color: \"white\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 65\n                                        }, void 0),\n                                        onClick: handleCreateChat,\n                                        bg: \"#6C63FF\",\n                                        _hover: {\n                                            bg: \"#5036f5\"\n                                        },\n                                        fontWeight: \"500\",\n                                        fontSize: \"1.2rem\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n                    w: \"100%\",\n                    border: \"2px solid #452ad8\"\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ModalBody, {\n                    w: \"100%\",\n                    bg: \"white\",\n                    flexDir: \"column\",\n                    display: \"flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalbody__WEBPACK_IMPORTED_MODULE_6__.ModalBodyMobile, {\n                        userChat: userChat,\n                        setUserChat: setUserChat\n                    }, void 0, false, {\n                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 23\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n            lineNumber: 49,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/index.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(ModalIndex, \"hGtiakfoDT/VJ2jKlxUOnavWVa0=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection\n    ];\n});\n_c = ModalIndex;\nvar _c;\n$RefreshReg$(_c, \"ModalIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVUE7d0JBQ1ZDLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DO0dBdEVnQko7O1FBQ0dKLG1FQUFZQTtRQVdIQyx5RUFBYUE7OztLQVp6QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxNb2JpbGUvaW5kZXguanM/NTg0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCJAL3NlcnZpY2VzL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBTbWFsbEFkZEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IHsgQm94LCBEaXZpZGVyLCBJY29uQnV0dG9uLCBJbWcsIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsQ29udGVudCwgTW9kYWxIZWFkZXIsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgTW9iaWxlQ2hhdCB9IGZyb20gXCIuL2NoYXRNb2RhbE1vYmlsZVwiO1xuaW1wb3J0IHsgTW9kYWxCb2R5TW9iaWxlIH0gZnJvbSBcIi4vbW9kYWxib2R5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbEluZGV4KHsgaXNPcGVuLCBzZXRJc09wZW4sdXNlckNoYXQsIHNldFVzZXJDaGF0IH0pIHtcbiAgICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgICBjb25zdCBnZXRDaGF0UmVmID0gKCkgPT4ge1xuICAgICAgICBpZiAodXNlciAmJiB1c2VyLmVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLndoZXJlKFwidXNlcnNcIiwgXCJhcnJheS1jb250YWluc1wiLCB1c2VyLmVtYWlsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmQ2hhdCA9IGdldENoYXRSZWYoKTtcblxuICAgIGNvbnN0IFtjaGF0c1NuYXBTaG90XSA9IHVzZUNvbGxlY3Rpb24ocmVmQ2hhdCk7XG5cbiAgICBjb25zdCBjaGF0RXhpc3RzID0gKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmIChjaGF0c1NuYXBTaG90KSB7XG4gICAgICAgICAgICByZXR1cm4gY2hhdHNTbmFwU2hvdC5kb2NzLnNvbWUoZG9jID0+IGRvYy5kYXRhKCkudXNlcnMuaW5jbHVkZXMoZW1haWwpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUNoYXQoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBwcm9tcHQoXCJFc2NyZXZhIG8gZW1haWwgZGVzZWphZG9cIik7XG4gICAgICAgIGlmICghZW1haWxJbnB1dCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghRW1haWxWYWxpZGF0b3IudmFsaWRhdGUoZW1haWxJbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkVtYWlsIGludsOhbGlkb1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbWFpbElucHV0ID09PSB1c2VyPy5lbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW5zaXJhIHVtIGVtYWlsIGRpZmVyZW50ZSBkbyBzZXVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhdEV4aXN0cyhlbWFpbElucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiQ2hhdCBqw6EgZXhpc3RlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmFkZCh7XG4gICAgICAgICAgICB1c2VyczogW3VzZXI/LmVtYWlsLCBlbWFpbElucHV0XSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgc2l6ZT17XCJmdWxsXCJ9IGlzT3Blbj17aXNPcGVufSBpc0NlbnRlcmVkPlxuICAgICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgdz17XCIxMDAlXCJ9IGhlaWdodD17XCIxMDB2aFwifSBiZz17XCJ3aGl0ZVwifT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHc9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9e1wiNjAwXCJ9IGNvbG9yPXtcImJsYWNrXCJ9IGZvbnRTaXplPXtcIjEuMjZyZW1cIn0+Q2hhdCBBcHA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcD17XCIxcmVtXCJ9IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0gZGlzcGxheT17XCJmbGV4XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gW2F1dGguc2lnbk91dCgpLCBzZXRVc2VyQ2hhdChudWxsKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8ucGhvdG9VUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9ezM1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3PXszNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjUwJVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcz17XCJidXR0b25cIn0gaWNvbj17PFNtYWxsQWRkSWNvbiBjb2xvcj17XCJ3aGl0ZVwifSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZUNoYXR9IGJnPXtcIiM2QzYzRkZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogJyM1MDM2ZjUnIH19IGZvbnRXZWlnaHQ9e1wiNTAwXCJ9IGZvbnRTaXplPXtcIjEuMnJlbVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHc9e1wiMTAwJVwifSBib3JkZXI9e1wiMnB4IHNvbGlkICM0NTJhZDhcIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5IHc9e1wiMTAwJVwifSBiZz17XCJ3aGl0ZVwifSBmbGV4RGlyPXtcImNvbHVtblwifSBkaXNwbGF5PXtcImZsZXhcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keU1vYmlsZVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJDaGF0PXt1c2VyQ2hhdH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyQ2hhdD17c2V0VXNlckNoYXR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aCIsImRiIiwiU21hbGxBZGRJY29uIiwiQm94IiwiRGl2aWRlciIsIkljb25CdXR0b24iLCJJbWciLCJNb2RhbCIsIk1vZGFsQm9keSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiVGV4dCIsInVzZVN0YXRlIiwidXNlQXV0aFN0YXRlIiwidXNlQ29sbGVjdGlvbiIsIk1vYmlsZUNoYXQiLCJNb2RhbEJvZHlNb2JpbGUiLCJNb2RhbEluZGV4IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlckNoYXQiLCJzZXRVc2VyQ2hhdCIsInVzZXIiLCJnZXRDaGF0UmVmIiwiZW1haWwiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJyZWZDaGF0IiwiY2hhdHNTbmFwU2hvdCIsImNoYXRFeGlzdHMiLCJkb2NzIiwic29tZSIsImRvYyIsImRhdGEiLCJ1c2VycyIsImluY2x1ZGVzIiwiaGFuZGxlQ3JlYXRlQ2hhdCIsImVtYWlsSW5wdXQiLCJwcm9tcHQiLCJFbWFpbFZhbGlkYXRvciIsInZhbGlkYXRlIiwiYWxlcnQiLCJhZGQiLCJzaXplIiwiaXNDZW50ZXJlZCIsInciLCJoZWlnaHQiLCJiZyIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwicCIsImp1c3RpZnlDb250ZW50IiwiZGlzcGxheSIsIm9uQ2xpY2siLCJzaWduT3V0Iiwic3JjIiwicGhvdG9VUkwiLCJoIiwiYm9yZGVyUmFkaXVzIiwiYXMiLCJpY29uIiwiX2hvdmVyIiwiYm9yZGVyIiwiZmxleERpciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ModalMobile/index.js\n"));

/***/ })

});