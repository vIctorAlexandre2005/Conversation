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

/***/ "./src/components/Sidebar/SidebarChatItem/index.js":
/*!*********************************************************!*\
  !*** ./src/components/Sidebar/SidebarChatItem/index.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarChatItem: function() { return /* binding */ SidebarChatItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst getUser = (users, userLogged)=>{\n    if (!users || !Array.isArray(users)) return null;\n    return users.filter((user)=>user !== (userLogged === null || userLogged === void 0 ? void 0 : userLogged.email))[0];\n};\nfunction SidebarChatItem(param) {\n    let { id, users, user, setUserChat, active } = param;\n    var _getUserItem_docs_, _getUserItem_docs;\n    _s();\n    const otherUserEmail = getUser(users, user);\n    const [getUserItem] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"users\").where(\"email\", \"==\", otherUserEmail));\n    const avatarData = getUserItem === null || getUserItem === void 0 ? void 0 : (_getUserItem_docs = getUserItem.docs) === null || _getUserItem_docs === void 0 ? void 0 : (_getUserItem_docs_ = _getUserItem_docs[0]) === null || _getUserItem_docs_ === void 0 ? void 0 : _getUserItem_docs_.data();\n    const userName = otherUserEmail === null || otherUserEmail === void 0 ? void 0 : otherUserEmail.split(\"@\")[0];\n    function handleNewChat() {\n        const userChat = {\n            chatId: id,\n            name: userName,\n            photoURL: avatarData === null || avatarData === void 0 ? void 0 : avatarData.photoURL\n        };\n        setUserChat(userChat);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        _hover: {\n            bg: \"#3825ae\",\n            transition: \"0.3s\"\n        },\n        gap: 6,\n        display: \"flex\",\n        alignItems: \"center\",\n        onClick: handleNewChat,\n        p: \"1rem\",\n        children: [\n            avatarData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                src: avatarData === null || avatarData === void 0 ? void 0 : avatarData.photoURL\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/Sidebar/SidebarChatItem/index.js\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"1.26rem\",\n                color: \"white\",\n                fontWeight: \"500\",\n                children: userName\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/Sidebar/SidebarChatItem/index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/Sidebar/SidebarChatItem/index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(SidebarChatItem, \"qEYOIJBpq2cjJOoeEweKJL1ikgQ=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = SidebarChatItem;\nvar _c;\n$RefreshReg$(_c, \"SidebarChatItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJDaGF0SXRlbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNTO0FBQ2E7QUFFL0QsTUFBTUssVUFBVSxDQUFDQyxPQUFPQztJQUNwQixJQUFJLENBQUNELFNBQVMsQ0FBQ0UsTUFBTUMsT0FBTyxDQUFDSCxRQUFRLE9BQU87SUFDNUMsT0FBT0EsTUFBTUksTUFBTSxDQUFDLENBQUNDLE9BQVNBLFVBQVNKLHVCQUFBQSxpQ0FBQUEsV0FBWUssS0FBSyxFQUFDLENBQUMsRUFBRTtBQUNoRTtBQUVPLFNBQVNDLGdCQUFnQixLQUF3QztRQUF4QyxFQUFFQyxFQUFFLEVBQUVSLEtBQUssRUFBRUssSUFBSSxFQUFFSSxXQUFXLEVBQUVDLE1BQU0sRUFBRSxHQUF4QztRQU9UQyxvQkFBQUE7O0lBTm5CLE1BQU1DLGlCQUFpQmIsUUFBUUMsT0FBT0s7SUFFdEMsTUFBTSxDQUFDTSxZQUFZLEdBQUdiLDZFQUFhQSxDQUMvQkosa0RBQUVBLENBQUNtQixVQUFVLENBQUMsU0FBU0MsS0FBSyxDQUFDLFNBQVMsTUFBTUY7SUFHaEQsTUFBTUcsYUFBYUosd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUssSUFBSSxjQUFqQkwseUNBQUFBLHFCQUFBQSxpQkFBbUIsQ0FBQyxFQUFFLGNBQXRCQSx5Q0FBQUEsbUJBQXdCTSxJQUFJO0lBQy9DLE1BQU1DLFdBQVdOLDJCQUFBQSxxQ0FBQUEsZUFBZ0JPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUU5QyxTQUFTQztRQUNMLE1BQU1DLFdBQVc7WUFDYkMsUUFBUWQ7WUFDUmUsTUFBTUw7WUFDTk0sUUFBUSxFQUFFVCx1QkFBQUEsaUNBQUFBLFdBQVlTLFFBQVE7UUFDbEM7UUFFQWYsWUFBWVk7SUFDaEI7SUFFQSxxQkFDSSw4REFBQzFCLGlEQUFHQTtRQUNBOEIsUUFBUTtZQUFFQyxJQUFJO1lBQVdDLFlBQVk7UUFBTztRQUM1Q0MsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsU0FBU1g7UUFDVFksR0FBRzs7WUFFRmpCLDJCQUFhLDhEQUFDbkIsaURBQUdBO2dCQUFDcUMsR0FBRyxFQUFFbEIsdUJBQUFBLGlDQUFBQSxXQUFZUyxRQUFROzs7Ozt1QkFBTzswQkFDbkQsOERBQUMzQixrREFBSUE7Z0JBQUNxQyxVQUFVO2dCQUFXQyxPQUFPO2dCQUFTQyxZQUFZOzBCQUNsRGxCOzs7Ozs7Ozs7Ozs7QUFJakI7R0FuQ2dCWDs7UUFHVVQseUVBQWFBOzs7S0FIdkJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhckNoYXRJdGVtL2luZGV4LmpzP2Q3ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICdAL3NlcnZpY2VzL2ZpcmViYXNlJztcbmltcG9ydCB7IEJveCwgSW1nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb2xsZWN0aW9uIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlJztcblxuY29uc3QgZ2V0VXNlciA9ICh1c2VycywgdXNlckxvZ2dlZCkgPT4ge1xuICAgIGlmICghdXNlcnMgfHwgIUFycmF5LmlzQXJyYXkodXNlcnMpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICE9PSB1c2VyTG9nZ2VkPy5lbWFpbClbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyQ2hhdEl0ZW0oeyBpZCwgdXNlcnMsIHVzZXIsIHNldFVzZXJDaGF0LCBhY3RpdmUgfSkge1xuICAgIGNvbnN0IG90aGVyVXNlckVtYWlsID0gZ2V0VXNlcih1c2VycywgdXNlcik7XG4gICAgXG4gICAgY29uc3QgW2dldFVzZXJJdGVtXSA9IHVzZUNvbGxlY3Rpb24oXG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS53aGVyZShcImVtYWlsXCIsIFwiPT1cIiwgb3RoZXJVc2VyRW1haWwpXG4gICAgKTtcblxuICAgIGNvbnN0IGF2YXRhckRhdGEgPSBnZXRVc2VySXRlbT8uZG9jcz8uWzBdPy5kYXRhKCk7XG4gICAgY29uc3QgdXNlck5hbWUgPSBvdGhlclVzZXJFbWFpbD8uc3BsaXQoXCJAXCIpWzBdO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTmV3Q2hhdCgpIHtcbiAgICAgICAgY29uc3QgdXNlckNoYXQgPSB7XG4gICAgICAgICAgICBjaGF0SWQ6IGlkLFxuICAgICAgICAgICAgbmFtZTogdXNlck5hbWUsXG4gICAgICAgICAgICBwaG90b1VSTDogYXZhdGFyRGF0YT8ucGhvdG9VUkwsXG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0VXNlckNoYXQodXNlckNoYXQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggXG4gICAgICAgICAgICBfaG92ZXI9e3sgYmc6ICcjMzgyNWFlJywgdHJhbnNpdGlvbjogJzAuM3MnIH19IFxuICAgICAgICAgICAgZ2FwPXs2fSBcbiAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifSBcbiAgICAgICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9IFxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV3Q2hhdH1cbiAgICAgICAgICAgIHA9e1wiMXJlbVwifVxuICAgICAgICA+XG4gICAgICAgICAgICB7YXZhdGFyRGF0YSA/IDxJbWcgc3JjPXthdmF0YXJEYXRhPy5waG90b1VSTH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcIjEuMjZyZW1cIn0gY29sb3I9e1wid2hpdGVcIn0gZm9udFdlaWdodD17XCI1MDBcIn0+XG4gICAgICAgICAgICAgICAge3VzZXJOYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImRiIiwiQm94IiwiSW1nIiwiVGV4dCIsInVzZUNvbGxlY3Rpb24iLCJnZXRVc2VyIiwidXNlcnMiLCJ1c2VyTG9nZ2VkIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwidXNlciIsImVtYWlsIiwiU2lkZWJhckNoYXRJdGVtIiwiaWQiLCJzZXRVc2VyQ2hhdCIsImFjdGl2ZSIsImdldFVzZXJJdGVtIiwib3RoZXJVc2VyRW1haWwiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJhdmF0YXJEYXRhIiwiZG9jcyIsImRhdGEiLCJ1c2VyTmFtZSIsInNwbGl0IiwiaGFuZGxlTmV3Q2hhdCIsInVzZXJDaGF0IiwiY2hhdElkIiwibmFtZSIsInBob3RvVVJMIiwiX2hvdmVyIiwiYmciLCJ0cmFuc2l0aW9uIiwiZ2FwIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwicCIsInNyYyIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sidebar/SidebarChatItem/index.js\n"));

/***/ })

});