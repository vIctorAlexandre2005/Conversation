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

/***/ "./src/components/app/mobileIndex.js":
/*!*******************************************!*\
  !*** ./src/components/app/mobileIndex.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MobileContent: function() { return /* binding */ MobileContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sidebar */ \"./src/components/Sidebar/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat */ \"./src/components/chat/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _ModalMobile_modalbody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ModalMobile/modalbody */ \"./src/components/ModalMobile/modalbody.js\");\n/* harmony import */ var _ModalMobile_chatModalMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ModalMobile/chatModalMobile */ \"./src/components/ModalMobile/chatModalMobile/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MobileContent() {\n    _s();\n    const [userChat, setUserChat] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    //Sidebar Header\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_services_firebase__WEBPACK_IMPORTED_MODULE_5__.auth);\n    const getChatRef = ()=>{\n        if (user && user.email) {\n            return _services_firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"chats\").where(\"users\", \"array-contains\", user.email);\n        }\n        return null;\n    };\n    const refChat = getChatRef();\n    const [chatsSnapShot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useCollection)(refChat);\n    const chatExists = (email)=>{\n        if (chatsSnapShot) {\n            return chatsSnapShot.docs.some((doc)=>doc.data().users.includes(email));\n        }\n        return false;\n    };\n    function handleCreateChat() {\n        const emailInput = prompt(\"Escreva o email desejado\");\n        if (!emailInput) return;\n        if (!email_validator__WEBPACK_IMPORTED_MODULE_6__.validate(emailInput)) {\n            return alert(\"Email inv\\xe1lido\");\n        } else if (emailInput === (user === null || user === void 0 ? void 0 : user.email)) {\n            return alert(\"Insira um email diferente do seu\");\n        } else if (chatExists(emailInput)) {\n            return alert(\"Chat j\\xe1 existe\");\n        }\n        _services_firebase__WEBPACK_IMPORTED_MODULE_5__.db.collection(\"chats\").add({\n            users: [\n                user === null || user === void 0 ? void 0 : user.email,\n                emailInput\n            ]\n        });\n    }\n    ;\n    // SidebarBody\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n        w: \"100%\",\n        display: \"flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Modal, {\n            size: \"full\",\n            isOpen: isOpen,\n            isCentered: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ModalContent, {\n                w: \"100%\",\n                height: \"100vh\",\n                bg: \"white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ModalHeader, {\n                        w: \"100%\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Text, {\n                                fontWeight: \"600\",\n                                color: \"black\",\n                                fontSize: \"1.26rem\",\n                                children: \"Chat App\"\n                            }, void 0, false, {\n                                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                p: \"1rem\",\n                                justifyContent: \"space-between\",\n                                display: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Img, {\n                                        onClick: ()=>[\n                                                _services_firebase__WEBPACK_IMPORTED_MODULE_5__.auth.signOut(),\n                                                setUserChat(null)\n                                            ],\n                                        src: user === null || user === void 0 ? void 0 : user.photoURL,\n                                        h: 35,\n                                        w: 35,\n                                        borderRadius: \"50%\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.IconButton, {\n                                            as: \"button\",\n                                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_11__.SmallAddIcon, {\n                                                color: \"white\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 65\n                                            }, void 0),\n                                            onClick: handleCreateChat,\n                                            bg: \"#6C63FF\",\n                                            _hover: {\n                                                bg: \"#5036f5\"\n                                            },\n                                            fontWeight: \"500\",\n                                            fontSize: \"1.2rem\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n                        w: \"100%\",\n                        border: \"2px solid #452ad8\"\n                    }, void 0, false, {\n                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ModalBody, {\n                        w: \"100%\",\n                        bg: \"white\",\n                        mt: \"1.5rem\",\n                        flexDir: \"column\",\n                        display: \"flex\",\n                        children: userChat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalMobile_chatModalMobile__WEBPACK_IMPORTED_MODULE_9__.MobileChat, {\n                            userChat: userChat\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                            lineNumber: 85,\n                            columnNumber: 29\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalMobile_modalbody__WEBPACK_IMPORTED_MODULE_8__.ModalBodyMobile, {\n                            userChat: userChat,\n                            setUserChat: setUserChat\n                        }, void 0, false, {\n                            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                            lineNumber: 87,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/app/mobileIndex.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this);\n}\n_s(MobileContent, \"MPBgZfuOsgL6J8AR77xbH8/q2o8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useCollection\n    ];\n});\n_c = MobileContent;\nvar _c;\n$RefreshReg$(_c, \"MobileContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcHAvbW9iaWxlSW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDOEU7QUFDM0U7QUFDUDtBQUN3QjtBQUNWO0FBQ0c7QUFDYTtBQUNmO0FBQ1c7QUFDQztBQUdyRCxTQUFTb0I7O0lBQ1osTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVyQyxnQkFBZ0I7SUFDaEIsTUFBTSxDQUFDYyxLQUFLLEdBQUdiLHVFQUFZQSxDQUFDQyxvREFBSUE7SUFFaEMsTUFBTWEsYUFBYTtRQUNmLElBQUlELFFBQVFBLEtBQUtFLEtBQUssRUFBRTtZQUNwQixPQUFPYixrREFBRUEsQ0FBQ2MsVUFBVSxDQUFDLFNBQVNDLEtBQUssQ0FBQyxTQUFTLGtCQUFrQkosS0FBS0UsS0FBSztRQUM3RTtRQUNBLE9BQU87SUFDWDtJQUVBLE1BQU1HLFVBQVVKO0lBRWhCLE1BQU0sQ0FBQ0ssY0FBYyxHQUFHZiw2RUFBYUEsQ0FBQ2M7SUFFdEMsTUFBTUUsYUFBYSxDQUFDTDtRQUNoQixJQUFJSSxlQUFlO1lBQ2YsT0FBT0EsY0FBY0UsSUFBSSxDQUFDQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksR0FBR0MsS0FBSyxDQUFDQyxRQUFRLENBQUNYO1FBQ3BFO1FBQ0EsT0FBTztJQUNYO0lBRUEsU0FBU1k7UUFDTCxNQUFNQyxhQUFhQyxPQUFPO1FBQzFCLElBQUksQ0FBQ0QsWUFBWTtRQUVqQixJQUFJLENBQUN6QixxREFBdUIsQ0FBQ3lCLGFBQWE7WUFDdEMsT0FBT0csTUFBTTtRQUNqQixPQUFPLElBQUlILGdCQUFlZixpQkFBQUEsMkJBQUFBLEtBQU1FLEtBQUssR0FBRTtZQUNuQyxPQUFPZ0IsTUFBTTtRQUNqQixPQUFPLElBQUlYLFdBQVdRLGFBQWE7WUFDL0IsT0FBT0csTUFBTTtRQUNqQjtRQUVBN0Isa0RBQUVBLENBQUNjLFVBQVUsQ0FBQyxTQUFTZ0IsR0FBRyxDQUFDO1lBQ3ZCUCxPQUFPO2dCQUFDWixpQkFBQUEsMkJBQUFBLEtBQU1FLEtBQUs7Z0JBQUVhO2FBQVc7UUFDcEM7SUFDSjs7SUFFQSxjQUFjO0lBRWQscUJBQ0ksOERBQUN2QyxrREFBR0E7UUFBQzRDLEdBQUc7UUFBUUMsU0FBUztrQkFDckIsNEVBQUN6QyxvREFBS0E7WUFBQzBDLE1BQU07WUFBUXhCLFFBQVFBO1lBQVF5QixVQUFVO3NCQUMzQyw0RUFBQ3pDLDJEQUFZQTtnQkFBQ3NDLEdBQUc7Z0JBQVFJLFFBQVE7Z0JBQVNDLElBQUk7O2tDQUMxQyw4REFBQzFDLDBEQUFXQTt3QkFBQ3FDLEdBQUc7OzBDQUNaLDhEQUFDcEMsbURBQUlBO2dDQUFDMEMsWUFBWTtnQ0FBT0MsT0FBTztnQ0FBU0MsVUFBVTswQ0FBVzs7Ozs7OzBDQUU5RCw4REFBQ3BELGtEQUFHQTtnQ0FBQ3FELEdBQUc7Z0NBQVFDLGdCQUFnQjtnQ0FBaUJULFNBQVM7O2tEQUN0RCw4REFBQzFDLGtEQUFHQTt3Q0FDQW9ELFNBQVMsSUFBTTtnREFBQzNDLG9EQUFJQSxDQUFDNEMsT0FBTztnREFBSW5DLFlBQVk7NkNBQU07d0NBQ2xEb0MsR0FBRyxFQUFFakMsaUJBQUFBLDJCQUFBQSxLQUFNa0MsUUFBUTt3Q0FDbkJDLEdBQUc7d0NBQ0hmLEdBQUc7d0NBQ0hnQixjQUFjOzs7Ozs7a0RBR2xCLDhEQUFDNUQsa0RBQUdBO2tEQUNBLDRFQUFDRSx5REFBVUE7NENBQUMyRCxJQUFJOzRDQUFVQyxvQkFBTSw4REFBQzlDLDJEQUFZQTtnREFBQ21DLE9BQU87Ozs7Ozs0Q0FDakRJLFNBQVNqQjs0Q0FBa0JXLElBQUk7NENBQy9CYyxRQUFRO2dEQUFFZCxJQUFJOzRDQUFVOzRDQUFHQyxZQUFZOzRDQUFPRSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEUsOERBQUNuRCxzREFBT0E7d0JBQUMyQyxHQUFHO3dCQUFRb0IsUUFBUTs7Ozs7O2tDQUU1Qiw4REFBQzNELHdEQUFTQTt3QkFBQ3VDLEdBQUc7d0JBQVFLLElBQUk7d0JBQVNnQixJQUFJO3dCQUFVQyxTQUFTO3dCQUFVckIsU0FBUztrQ0FDeEV6Qix5QkFDRyw4REFBQ0Ysb0VBQVVBOzRCQUFDRSxVQUFVQTs7Ozs7aURBRXRCLDhEQUFDSCxtRUFBZUE7NEJBQUNHLFVBQVVBOzRCQUFVQyxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlFO0dBaEZnQkY7O1FBS0dSLG1FQUFZQTtRQVdISSx5RUFBYUE7OztLQWhCekJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FwcC9tb2JpbGVJbmRleC5qcz9kODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZGViYXIgfSBmcm9tIFwiLi4vU2lkZWJhclwiO1xuaW1wb3J0IHsgQm94LCBEaXZpZGVyLCBJY29uQnV0dG9uLCBJbWcsIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsQ29udGVudCwgTW9kYWxIZWFkZXIsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuLi9jaGF0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIkAvc2VydmljZXMvZmlyZWJhc2VcIjtcbmltcG9ydCAqIGFzIEVtYWlsVmFsaWRhdG9yIGZyb20gJ2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgU21hbGxBZGRJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IE1vZGFsQm9keU1vYmlsZSB9IGZyb20gXCIuLi9Nb2RhbE1vYmlsZS9tb2RhbGJvZHlcIjtcbmltcG9ydCB7IE1vYmlsZUNoYXQgfSBmcm9tIFwiLi4vTW9kYWxNb2JpbGUvY2hhdE1vZGFsTW9iaWxlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIE1vYmlsZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgW3VzZXJDaGF0LCBzZXRVc2VyQ2hhdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICAvL1NpZGViYXIgSGVhZGVyXG4gICAgY29uc3QgW3VzZXJdID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gICAgY29uc3QgZ2V0Q2hhdFJlZiA9ICgpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5lbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS53aGVyZShcInVzZXJzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgdXNlci5lbWFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlZkNoYXQgPSBnZXRDaGF0UmVmKCk7XG5cbiAgICBjb25zdCBbY2hhdHNTbmFwU2hvdF0gPSB1c2VDb2xsZWN0aW9uKHJlZkNoYXQpO1xuXG4gICAgY29uc3QgY2hhdEV4aXN0cyA9IChlbWFpbCkgPT4ge1xuICAgICAgICBpZiAoY2hhdHNTbmFwU2hvdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYXRzU25hcFNob3QuZG9jcy5zb21lKGRvYyA9PiBkb2MuZGF0YSgpLnVzZXJzLmluY2x1ZGVzKGVtYWlsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDcmVhdGVDaGF0KCkge1xuICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gcHJvbXB0KFwiRXNjcmV2YSBvIGVtYWlsIGRlc2VqYWRvXCIpO1xuICAgICAgICBpZiAoIWVtYWlsSW5wdXQpIHJldHVybjtcblxuICAgICAgICBpZiAoIUVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlKGVtYWlsSW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJFbWFpbCBpbnbDoWxpZG9cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZW1haWxJbnB1dCA9PT0gdXNlcj8uZW1haWwpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkluc2lyYSB1bSBlbWFpbCBkaWZlcmVudGUgZG8gc2V1XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXRFeGlzdHMoZW1haWxJbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkNoYXQgasOhIGV4aXN0ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjaGF0c1wiKS5hZGQoe1xuICAgICAgICAgICAgdXNlcnM6IFt1c2VyPy5lbWFpbCwgZW1haWxJbnB1dF0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTaWRlYmFyQm9keVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCB3PXtcIjEwMCVcIn0gZGlzcGxheT17XCJmbGV4XCJ9PlxuICAgICAgICAgICAgPE1vZGFsIHNpemU9e1wiZnVsbFwifSBpc09wZW49e2lzT3Blbn0gaXNDZW50ZXJlZD5cbiAgICAgICAgICAgICAgICA8TW9kYWxDb250ZW50IHc9e1wiMTAwJVwifSBoZWlnaHQ9e1wiMTAwdmhcIn0gYmc9e1wid2hpdGVcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB3PXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXtcIjYwMFwifSBjb2xvcj17XCJibGFja1wifSBmb250U2l6ZT17XCIxLjI2cmVtXCJ9PkNoYXQgQXBwPC9UZXh0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHA9e1wiMXJlbVwifSBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9IGRpc3BsYXk9e1wiZmxleFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFthdXRoLnNpZ25PdXQoKSwgc2V0VXNlckNoYXQobnVsbCldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LnBob3RvVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoPXszNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdz17MzV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCI1MCVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXM9e1wiYnV0dG9uXCJ9IGljb249ezxTbWFsbEFkZEljb24gY29sb3I9e1wid2hpdGVcIn0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVDaGF0fSBiZz17XCIjNkM2M0ZGXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmc6ICcjNTAzNmY1JyB9fSBmb250V2VpZ2h0PXtcIjUwMFwifSBmb250U2l6ZT17XCIxLjJyZW1cIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciB3PXtcIjEwMCVcIn0gYm9yZGVyPXtcIjJweCBzb2xpZCAjNDUyYWQ4XCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keSB3PXtcIjEwMCVcIn0gYmc9e1wid2hpdGVcIn0gbXQ9e1wiMS41cmVtXCJ9IGZsZXhEaXI9e1wiY29sdW1uXCJ9IGRpc3BsYXk9e1wiZmxleFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyQ2hhdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlQ2hhdCB1c2VyQ2hhdD17dXNlckNoYXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHlNb2JpbGUgdXNlckNoYXQ9e3VzZXJDaGF0fSBzZXRVc2VyQ2hhdD17c2V0VXNlckNoYXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn0iXSwibmFtZXMiOlsiU2lkZWJhciIsIkJveCIsIkRpdmlkZXIiLCJJY29uQnV0dG9uIiwiSW1nIiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIlRleHQiLCJDaGF0Q29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwiZGIiLCJFbWFpbFZhbGlkYXRvciIsInVzZUNvbGxlY3Rpb24iLCJTbWFsbEFkZEljb24iLCJNb2RhbEJvZHlNb2JpbGUiLCJNb2JpbGVDaGF0IiwiTW9iaWxlQ29udGVudCIsInVzZXJDaGF0Iiwic2V0VXNlckNoYXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VyIiwiZ2V0Q2hhdFJlZiIsImVtYWlsIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicmVmQ2hhdCIsImNoYXRzU25hcFNob3QiLCJjaGF0RXhpc3RzIiwiZG9jcyIsInNvbWUiLCJkb2MiLCJkYXRhIiwidXNlcnMiLCJpbmNsdWRlcyIsImhhbmRsZUNyZWF0ZUNoYXQiLCJlbWFpbElucHV0IiwicHJvbXB0IiwidmFsaWRhdGUiLCJhbGVydCIsImFkZCIsInciLCJkaXNwbGF5Iiwic2l6ZSIsImlzQ2VudGVyZWQiLCJoZWlnaHQiLCJiZyIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwicCIsImp1c3RpZnlDb250ZW50Iiwib25DbGljayIsInNpZ25PdXQiLCJzcmMiLCJwaG90b1VSTCIsImgiLCJib3JkZXJSYWRpdXMiLCJhcyIsImljb24iLCJfaG92ZXIiLCJib3JkZXIiLCJtdCIsImZsZXhEaXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/app/mobileIndex.js\n"));

/***/ })

});