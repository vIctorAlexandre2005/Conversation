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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatBody: function() { return /* binding */ ChatBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Message */ \"./src/components/Message/index.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatBody(param) {\n    let { chatId } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [messagesRes] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(_services_firebase__WEBPACK_IMPORTED_MODULE_3__.db.collection(\"chats\").doc(chatId).collection(\"messages\").orderBy(\"timestamp\", \"asc\"));\n    const refBody = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {\n            refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight;\n        }\n        if (messagesRes) {\n            setLoading(false);\n        }\n    }, [\n        messagesRes\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refBody,\n        flex: 1,\n        bg: \"#e7e7e7\",\n        overflow: \"auto\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            mt: \"10rem\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_6__.MoonLoader, {\n                size: 40,\n                color: \"#5036f5\"\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n                lineNumber: 32,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: messagesRes === null || messagesRes === void 0 ? void 0 : messagesRes.docs.map((message)=>{\n                var _message_data_timestamp;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_4__.Message, {\n                    user: message.data().user,\n                    message: {\n                        message: message.data().message,\n                        timestamp: (_message_data_timestamp = message.data().timestamp) === null || _message_data_timestamp === void 0 ? void 0 : _message_data_timestamp.toDate().getTime()\n                    }\n                }, message.id, false, {\n                    fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, this);\n            })\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/chat/chatBody/index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatBody, \"QMGwxGfo1+sl9pLpg4kaU/tgGcs=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = ChatBody;\nvar _c;\n$RefreshReg$(_c, \"ChatBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGF0L2NoYXRCb2R5L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ1c7QUFDaEI7QUFDQTtBQUNIO0FBRXJDLFNBQVNVLFNBQVMsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNyQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxZQUFZLEdBQUdULDZFQUFhQSxDQUMvQkUsa0RBQUVBLENBQUNRLFVBQVUsQ0FBQyxTQUFTQyxHQUFHLENBQUNMLFFBQVFJLFVBQVUsQ0FBQyxZQUFZRSxPQUFPLENBQUMsYUFBYTtJQUduRixNQUFNQyxVQUFVZiw2Q0FBTUEsQ0FBQztJQUV2QkQsZ0RBQVNBLENBQUM7UUFFTixJQUFJZ0IsUUFBUUMsT0FBTyxDQUFDQyxZQUFZLEdBQUdGLFFBQVFDLE9BQU8sQ0FBQ0UsWUFBWSxFQUFFO1lBQzdESCxRQUFRQyxPQUFPLENBQUNHLFNBQVMsR0FDckJKLFFBQVFDLE9BQU8sQ0FBQ0MsWUFBWSxHQUFHRixRQUFRQyxPQUFPLENBQUNFLFlBQVk7UUFDbkU7UUFFQSxJQUFHUCxhQUFhO1lBQ1pELFdBQVc7UUFDZjtJQUNKLEdBQUc7UUFBQ0M7S0FBWTtJQUVoQixxQkFDSSw4REFBQ2QsaURBQUdBO1FBQUN1QixLQUFLTDtRQUFTTSxNQUFNO1FBQUdDLElBQUk7UUFBV0MsVUFBVTtrQkFDaERkLHdCQUNHLDhEQUFDWixpREFBR0E7WUFBQzJCLFNBQVM7WUFBUUMsZ0JBQWdCO1lBQVVDLFlBQVk7WUFBVUMsSUFBSTtzQkFDdEUsNEVBQUNyQixzREFBVUE7Z0JBQUNzQixNQUFNO2dCQUFJQyxPQUFNOzs7Ozs7Ozs7O2lDQUdoQztzQkFDQ2xCLHdCQUFBQSxrQ0FBQUEsWUFBYW1CLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO29CQU1EQTtxQ0FMbkIsOERBQUMzQix3REFBT0E7b0JBRUo0QixNQUFNRCxRQUFRRSxJQUFJLEdBQUdELElBQUk7b0JBQ3pCRCxTQUFTO3dCQUNMQSxTQUFTQSxRQUFRRSxJQUFJLEdBQUdGLE9BQU87d0JBQy9CRyxTQUFTLEdBQUVILDBCQUFBQSxRQUFRRSxJQUFJLEdBQUdDLFNBQVMsY0FBeEJILDhDQUFBQSx3QkFBMEJJLE1BQU0sR0FBR0MsT0FBTztvQkFDekQ7bUJBTEtMLFFBQVFNLEVBQUU7Ozs7Ozs7Ozs7OztBQWF2QztHQTNDZ0IvQjs7UUFFVUwseUVBQWFBOzs7S0FGdkJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NoYXQvY2hhdEJvZHkvaW5kZXguanM/YjQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmUnO1xuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICdAL3NlcnZpY2VzL2ZpcmViYXNlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvTWVzc2FnZSc7XG5pbXBvcnQgeyBNb29uTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhdEJvZHkoeyBjaGF0SWQgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyBcbiAgICBjb25zdCBbbWVzc2FnZXNSZXNdID0gdXNlQ29sbGVjdGlvbihcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNoYXRzXCIpLmRvYyhjaGF0SWQpLmNvbGxlY3Rpb24oXCJtZXNzYWdlc1wiKS5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiYXNjXCIpXG4gICAgKTtcblxuICAgIGNvbnN0IHJlZkJvZHkgPSB1c2VSZWYoXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgICAgICBpZiAocmVmQm9keS5jdXJyZW50LnNjcm9sbEhlaWdodCA+IHJlZkJvZHkuY3VycmVudC5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJlZkJvZHkuY3VycmVudC5zY3JvbGxUb3AgPVxuICAgICAgICAgICAgICAgIHJlZkJvZHkuY3VycmVudC5zY3JvbGxIZWlnaHQgLSByZWZCb2R5LmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobWVzc2FnZXNSZXMpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9LCBbbWVzc2FnZXNSZXNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcmVmPXtyZWZCb2R5fSBmbGV4PXsxfSBiZz17XCIjZTdlN2U3XCJ9IG92ZXJmbG93PXtcImF1dG9cIn0+XG4gICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0gbXQ9e1wiMTByZW1cIn0+XG4gICAgICAgICAgICAgICAgICAgIDxNb29uTG9hZGVyIHNpemU9ezQwfSBjb2xvcj0nIzUwMzZmNScgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZXNSZXM/LmRvY3MubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXttZXNzYWdlLmRhdGEoKS51c2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UuZGF0YSgpLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtZXNzYWdlLmRhdGEoKS50aW1lc3RhbXA/LnRvRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQ29sbGVjdGlvbiIsImF1dGgiLCJkYiIsIk1lc3NhZ2UiLCJNb29uTG9hZGVyIiwiQ2hhdEJvZHkiLCJjaGF0SWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2VzUmVzIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJyZWZCb2R5IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInNjcm9sbFRvcCIsInJlZiIsImZsZXgiLCJiZyIsIm92ZXJmbG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm10Iiwic2l6ZSIsImNvbG9yIiwiZG9jcyIsIm1hcCIsIm1lc3NhZ2UiLCJ1c2VyIiwiZGF0YSIsInRpbWVzdGFtcCIsInRvRGF0ZSIsImdldFRpbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/chat/chatBody/index.js\n"));

/***/ })

});