"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/login/login.js":
/*!***************************************!*\
  !*** ./src/components/login/login.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);\n([_services_firebase__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction LoginComponent() {\n    function handleSignin() {\n        _services_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.signInWithPopup(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.provider).catch(alert);\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            onClick: handleSignin,\n            children: \"Login com o Google\"\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/login/login.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDVjtBQUVuQyxTQUFTRztJQUNaLFNBQVNDO1FBQ0xKLG9EQUFJQSxDQUFDSyxlQUFlLENBQUNKLHdEQUFRQSxFQUFFSyxLQUFLLENBQUNDO0lBQ3pDOztJQUVBLHFCQUNJO2tCQUVKLDRFQUFDTCxvREFBTUE7WUFBQ00sU0FBU0o7c0JBQWM7Ozs7Ozs7QUFNbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWNvbnZlcnNhdGlvbi8uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzPzE2MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCwgcHJvdmlkZXIgfSBmcm9tIFwiQC9zZXJ2aWNlcy9maXJlYmFzZVwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Db21wb25lbnQoKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlU2lnbmluKCkge1xuICAgICAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikuY2F0Y2goYWxlcnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICBcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25pbn0+XG4gICAgICAgIExvZ2luIGNvbSBvIEdvb2dsZVxuICAgIDwvQnV0dG9uPiAgICBcbiAgICAgICAgXG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aCIsInByb3ZpZGVyIiwiQnV0dG9uIiwiTG9naW5Db21wb25lbnQiLCJoYW5kbGVTaWduaW4iLCJzaWduSW5XaXRoUG9wdXAiLCJjYXRjaCIsImFsZXJ0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/login/login.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/login/login */ \"./src/components/login/login.js\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_login_login__WEBPACK_IMPORTED_MODULE_1__, _services_firebase__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_login_login__WEBPACK_IMPORTED_MODULE_1__, _services_firebase__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_services_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (user) {\n            _services_firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection(\"users\").doc(user.uid).set({\n                email: user.email,\n                photoUrl: user.photoURL\n            });\n        }\n    }, [\n        user\n    ]);\n    if (!user) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_login_login__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, {}, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n            lineNumber: 22,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNYO0FBQ0c7QUFDaEI7QUFDc0I7QUFFekMsU0FBU00sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsdUVBQVlBLENBQUNKLG9EQUFJQTtJQUV6Q0csZ0RBQVNBLENBQUM7UUFDUixJQUFHSyxNQUFNO1lBQ1BQLGtEQUFFQSxDQUFDUyxVQUFVLENBQUMsU0FBU0MsR0FBRyxDQUFDSCxLQUFLSSxHQUFHLEVBQUVDLEdBQUcsQ0FBQztnQkFDdkNDLE9BQU9OLEtBQUtNLEtBQUs7Z0JBQ2pCQyxVQUFVUCxLQUFLUSxRQUFRO1lBQ3pCO1FBQ0Y7SUFDRixHQUFHO1FBQUNSO0tBQUs7SUFFVCxJQUFJLENBQUNBLE1BQU0scUJBQU8sOERBQUNULG1FQUFjQTs7Ozs7SUFDakMscUJBQ00sOERBQUNHLDREQUFjQTtrQkFDYiw0RUFBQ0k7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY29udmVyc2F0aW9uLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbG9naW4vbG9naW5cIjtcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIkAvc2VydmljZXMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZih1c2VyKSB7XG4gICAgICBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVzZXIudWlkKS5zZXQoe1xuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgcGhvdG9Vcmw6IHVzZXIucGhvdG9VUkwsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgaWYgKCF1c2VyKSByZXR1cm4gPExvZ2luQ29tcG9uZW50IC8+XG4gIHJldHVybiAoXG4gICAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMb2dpbkNvbXBvbmVudCIsImF1dGgiLCJkYiIsIkNoYWtyYVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlQXV0aFN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsImxvYWRpbmciLCJjb2xsZWN0aW9uIiwiZG9jIiwidWlkIiwic2V0IiwiZW1haWwiLCJwaG90b1VybCIsInBob3RvVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/services/firebase.js":
/*!**********************************!*\
  !*** ./src/services/firebase.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   provider: () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCt8Z5Pvaem_zAMqh9lv21tHjjJ0GK__0I\",\n    authDomain: \"newchat-ec261.firebaseapp.com\",\n    projectId: \"newchat-ec261\",\n    storageBucket: \"newchat-ec261.appspot.com\",\n    messagingSenderId: \"267101995029\",\n    appId: \"1:267101995029:web:846d631d6a9be36fc40e1c\"\n};\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nconst db = app.firestore();\nconst auth = app.auth();\nconst provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDSztBQUVuQyxNQUFNQyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxNQUFNUix5RUFBc0IsQ0FBQ0M7QUFFbkMsTUFBTVMsS0FBS0YsSUFBSUcsU0FBUztBQUN4QixNQUFNQyxPQUFPSixJQUFJSSxJQUFJO0FBQ3JCLE1BQU1DLFdBQVcsSUFBSWIsZ0VBQWEsQ0FBQ2Msa0JBQWtCO0FBRXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1jb252ZXJzYXRpb24vLi9zcmMvc2VydmljZXMvZmlyZWJhc2UuanM/NTQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9hdXRoJztcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q3Q4WjVQdmFlbV96QU1xaDlsdjIxdEhqakowR0tfXzBJXCIsXG4gIGF1dGhEb21haW46IFwibmV3Y2hhdC1lYzI2MS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm5ld2NoYXQtZWMyNjFcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJuZXdjaGF0LWVjMjYxLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI2NzEwMTk5NTAyOVwiLFxuICBhcHBJZDogXCIxOjI2NzEwMTk5NTAyOTp3ZWI6ODQ2ZDYzMWQ2YTliZTM2ZmM0MGUxY1wiXG59O1xuXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuY29uc3QgZGIgPSBhcHAuZmlyZXN0b3JlKCk7XG5jb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCB7IGRiLCBhdXRoLCBwcm92aWRlciB9OyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImRiIiwiZmlyZXN0b3JlIiwiYXV0aCIsInByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/firebase.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();