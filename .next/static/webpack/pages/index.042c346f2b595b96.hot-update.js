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

/***/ "./src/components/chat/chatBody/index.js":
/*!***********************************************!*\
  !*** ./src/components/chat/chatBody/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatBody: function() { return /* binding */ ChatBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Message */ \"./src/components/Message/index.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatBody(param) {\n    let { chatId } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [messagesRes] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(_services_firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"chats\").doc(chatId).collection(\"messages\").orderBy(\"timestamp\", \"asc\"));\n    const refBody = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (messagesRes) {\n            setLoading(false);\n        }\n        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {\n            refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight;\n        }\n    }, [\n        messagesRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refBody,\n        flex: 1,\n        bg: \"#e7e7e7\",\n        overflow: \"auto\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            mt: \"10rem\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_6__.MoonLoader, {\n                size: 40,\n                color: \"#5036f5\"\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n                lineNumber: 30,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n            lineNumber: 29,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: messagesRes === null || messagesRes === void 0 ? void 0 : messagesRes.docs.map((message)=>{\n                var _message_data_timestamp;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                    user: message.data().user,\n                    message: {\n                        message: message.data().message,\n                        timestamp: (_message_data_timestamp = message.data().timestamp) === null || _message_data_timestamp === void 0 ? void 0 : _message_data_timestamp.toDate().getTime()\n                    }\n                }, message.id, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatBody, \"QMGwxGfo1+sl9pLpg4kaU/tgGcs=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = ChatBody;\nvar _c;\n$RefreshReg$(_c, \"ChatBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXRCb2R5L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ1c7QUFDaEI7QUFDQTtBQUNIO0FBRXJDLFNBQVNVLFNBQVMsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNyQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxZQUFZLEdBQUdULDZFQUFhQSxDQUMvQkUsa0RBQUVBLENBQUNRLFVBQVUsQ0FBQyxTQUFTQyxHQUFHLENBQUNMLFFBQVFJLFVBQVUsQ0FBQyxZQUFZRSxPQUFPLENBQUMsYUFBYTtJQUduRixNQUFNQyxVQUFVZiw2Q0FBTUEsQ0FBQztJQUV2QkQsZ0RBQVNBLENBQUM7UUFDTixJQUFHWSxhQUFhO1lBQ1pELFdBQVc7UUFDZjtRQUNBLElBQUlLLFFBQVFDLE9BQU8sQ0FBQ0MsWUFBWSxHQUFHRixRQUFRQyxPQUFPLENBQUNFLFlBQVksRUFBRTtZQUM3REgsUUFBUUMsT0FBTyxDQUFDRyxTQUFTLEdBQ3JCSixRQUFRQyxPQUFPLENBQUNDLFlBQVksR0FBR0YsUUFBUUMsT0FBTyxDQUFDRSxZQUFZO1FBQ25FO0lBQ0osR0FBRztRQUFDUDtLQUFZO0lBRWhCLHFCQUNJLDhEQUFDZCxpREFBR0E7UUFBQ3VCLEtBQUtMO1FBQVNNLE1BQU07UUFBR0MsSUFBSTtRQUFXQyxVQUFVO2tCQUNoRGQsd0JBQ0csOERBQUNaLGlEQUFHQTtZQUFDMkIsU0FBUztZQUFRQyxnQkFBZ0I7WUFBVUMsWUFBWTtZQUFVQyxJQUFJO3NCQUN0RSw0RUFBQ3JCLHNEQUFVQTtnQkFBQ3NCLE1BQU07Z0JBQUlDLE9BQU07Ozs7Ozs7Ozs7aUNBR2hDO3NCQUNDbEIsd0JBQUFBLGtDQUFBQSxZQUFhbUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7b0JBT0RBO3FDQUxuQiw4REFBQzNCLHdEQUFPQTtvQkFFSjRCLE1BQU1ELFFBQVFFLElBQUksR0FBR0QsSUFBSTtvQkFDekJELFNBQVM7d0JBQ0xBLFNBQVNBLFFBQVFFLElBQUksR0FBR0YsT0FBTzt3QkFDL0JHLFNBQVMsR0FBRUgsMEJBQUFBLFFBQVFFLElBQUksR0FBR0MsU0FBUyxjQUF4QkgsOENBQUFBLHdCQUEwQkksTUFBTSxHQUFHQyxPQUFPO29CQUN6RDttQkFMS0wsUUFBUU0sRUFBRTs7Ozs7Ozs7Ozs7O0FBYXZDO0dBMUNnQi9COztRQUVVTCx5RUFBYUE7OztLQUZ2QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhdC9jaGF0Qm9keS9pbmRleC5qcz9iNDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJ0Avc2VydmljZXMvZmlyZWJhc2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ0AvY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCB7IE1vb25Mb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0Qm9keSh7IGNoYXRJZCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IFxuICAgIGNvbnN0IFttZXNzYWdlc1Jlc10gPSB1c2VDb2xsZWN0aW9uKFxuICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY2hhdHNcIikuZG9jKGNoYXRJZCkuY29sbGVjdGlvbihcIm1lc3NhZ2VzXCIpLm9yZGVyQnkoXCJ0aW1lc3RhbXBcIiwgXCJhc2NcIilcbiAgICApO1xuXG4gICAgY29uc3QgcmVmQm9keSA9IHVzZVJlZihcIlwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2VzUmVzKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmQm9keS5jdXJyZW50LnNjcm9sbEhlaWdodCA+IHJlZkJvZHkuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJlZkJvZHkuY3VycmVudC5zY3JvbGxUb3AgPVxuICAgICAgICAgICAgICAgIHJlZkJvZHkuY3VycmVudC5zY3JvbGxIZWlnaHQgLSByZWZCb2R5LmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgfSwgW21lc3NhZ2VzUmVzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHJlZj17cmVmQm9keX0gZmxleD17MX0gYmc9e1wiI2U3ZTdlN1wifSBvdmVyZmxvdz17XCJhdXRvXCJ9PlxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9IG10PXtcIjEwcmVtXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8TW9vbkxvYWRlciBzaXplPXs0MH0gY29sb3I9JyM1MDM2ZjUnIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge21lc3NhZ2VzUmVzPy5kb2NzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17bWVzc2FnZS5kYXRhKCkudXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLmRhdGEoKS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbWVzc2FnZS5kYXRhKCkudGltZXN0YW1wPy50b0RhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUNvbGxlY3Rpb24iLCJhdXRoIiwiZGIiLCJNZXNzYWdlIiwiTW9vbkxvYWRlciIsIkNoYXRCb2R5IiwiY2hhdElkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlc1JlcyIsImNvbGxlY3Rpb24iLCJkb2MiLCJvcmRlckJ5IiwicmVmQm9keSIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxUb3AiLCJyZWYiLCJmbGV4IiwiYmciLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtdCIsInNpemUiLCJjb2xvciIsImRvY3MiLCJtYXAiLCJtZXNzYWdlIiwidXNlciIsImRhdGEiLCJ0aW1lc3RhbXAiLCJ0b0RhdGUiLCJnZXRUaW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/chat/chatBody/index.js\n"));

/***/ })

});