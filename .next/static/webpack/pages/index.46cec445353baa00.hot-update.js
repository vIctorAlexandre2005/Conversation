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

/***/ "./src/components/ModalMobile/modalBodyContacts.js":
/*!*********************************************************!*\
  !*** ./src/components/ModalMobile/modalBodyContacts.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalContacts: function() { return /* binding */ ModalContacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/firebase */ \"./src/services/firebase.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst getUser = (users, userLogged)=>{\n    if (!users || !Array.isArray(users)) return null;\n    return users.filter((user)=>user !== (userLogged === null || userLogged === void 0 ? void 0 : userLogged.email))[0];\n};\nfunction ModalContacts(param) {\n    let { id, users, user, setUserChat } = param;\n    var _getUserItem_docs_, _getUserItem_docs;\n    _s();\n    const otherUserEmail = getUser(users, user);\n    const [getUserItem] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection)(_services_firebase__WEBPACK_IMPORTED_MODULE_1__.db.collection(\"users\").where(\"email\", \"==\", otherUserEmail));\n    const avatarData = getUserItem === null || getUserItem === void 0 ? void 0 : (_getUserItem_docs = getUserItem.docs) === null || _getUserItem_docs === void 0 ? void 0 : (_getUserItem_docs_ = _getUserItem_docs[0]) === null || _getUserItem_docs_ === void 0 ? void 0 : _getUserItem_docs_.data();\n    const userName = otherUserEmail === null || otherUserEmail === void 0 ? void 0 : otherUserEmail.split(\"@\")[0];\n    function handleNewChat() {\n        const userChat = {\n            chatId: id,\n            name: userName,\n            photoURL: avatarData === null || avatarData === void 0 ? void 0 : avatarData.photoURL\n        };\n        setUserChat(userChat);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        _hover: {\n            bg: \"#d1d1d1\",\n            transition: \"0.2s\"\n        },\n        gap: 6,\n        display: \"flex\",\n        alignItems: \"center\",\n        onClick: handleNewChat,\n        p: \"1rem\",\n        flexDirection: \"column\",\n        children: [\n            avatarData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Img, {\n                src: avatarData === null || avatarData === void 0 ? void 0 : avatarData.photoURL\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/modalBodyContacts.js\",\n                lineNumber: 40,\n                columnNumber: 27\n            }, this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"1.26rem\",\n                color: \"black\",\n                fontWeight: \"500\",\n                children: userName\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/modalBodyContacts.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                w: \"100%\",\n                border: \"1px solid black\"\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/modalBodyContacts.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/ModalMobile/modalBodyContacts.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(ModalContacts, \"qEYOIJBpq2cjJOoeEweKJL1ikgQ=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_2__.useCollection\n    ];\n});\n_c = ModalContacts;\nvar _c;\n$RefreshReg$(_c, \"ModalContacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbE1vYmlsZS9tb2RhbEJvZHlDb250YWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNrQjtBQUNJO0FBRS9ELE1BQU1NLFVBQVUsQ0FBQ0MsT0FBT0M7SUFDcEIsSUFBSSxDQUFDRCxTQUFTLENBQUNFLE1BQU1DLE9BQU8sQ0FBQ0gsUUFBUSxPQUFPO0lBQzVDLE9BQU9BLE1BQU1JLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxVQUFTSix1QkFBQUEsaUNBQUFBLFdBQVlLLEtBQUssRUFBQyxDQUFDLEVBQUU7QUFDaEU7QUFFTyxTQUFTQyxjQUFjLEtBQWdDO1FBQWhDLEVBQUVDLEVBQUUsRUFBRVIsS0FBSyxFQUFFSyxJQUFJLEVBQUVJLFdBQVcsRUFBRSxHQUFoQztRQU9QQyxvQkFBQUE7O0lBTm5CLE1BQU1DLGlCQUFpQlosUUFBUUMsT0FBT0s7SUFFdEMsTUFBTSxDQUFDSyxZQUFZLEdBQUdaLDZFQUFhQSxDQUMvQkwsa0RBQUVBLENBQUNtQixVQUFVLENBQUMsU0FBU0MsS0FBSyxDQUFDLFNBQVMsTUFBTUY7SUFHaEQsTUFBTUcsYUFBYUosd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBYUssSUFBSSxjQUFqQkwseUNBQUFBLHFCQUFBQSxpQkFBbUIsQ0FBQyxFQUFFLGNBQXRCQSx5Q0FBQUEsbUJBQXdCTSxJQUFJO0lBQy9DLE1BQU1DLFdBQVdOLDJCQUFBQSxxQ0FBQUEsZUFBZ0JPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUU5QyxTQUFTQztRQUNMLE1BQU1DLFdBQVc7WUFDYkMsUUFBUWI7WUFDUmMsTUFBTUw7WUFDTk0sUUFBUSxFQUFFVCx1QkFBQUEsaUNBQUFBLFdBQVlTLFFBQVE7UUFDbEM7UUFFQWQsWUFBWVc7SUFDaEI7SUFFQSxxQkFDSSw4REFBQzFCLGlEQUFHQTtRQUNBOEIsUUFBUTtZQUFFQyxJQUFJO1lBQVdDLFlBQVk7UUFBTztRQUM1Q0MsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLFlBQVk7UUFDWkMsU0FBU1g7UUFDVFksR0FBRztRQUNIQyxlQUFlOztZQUVkbEIsMkJBQWEsOERBQUNsQixpREFBR0E7Z0JBQUNxQyxHQUFHLEVBQUVuQix1QkFBQUEsaUNBQUFBLFdBQVlTLFFBQVE7Ozs7O3VCQUFPOzBCQUNuRCw4REFBQzFCLGtEQUFJQTtnQkFBQ3FDLFVBQVU7Z0JBQVdDLE9BQU87Z0JBQVNDLFlBQVk7MEJBQ2xEbkI7Ozs7OzswQkFFTCw4REFBQ3RCLHFEQUFPQTtnQkFBQzBDLEdBQUc7Z0JBQVFDLFFBQVE7Ozs7Ozs7Ozs7OztBQUd4QztHQXJDZ0IvQjs7UUFHVVQseUVBQWFBOzs7S0FIdkJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsTW9iaWxlL21vZGFsQm9keUNvbnRhY3RzLmpzPzhlODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zZXJ2aWNlcy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgQm94LCBEaXZpZGVyLCBJbWcsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29sbGVjdGlvbiB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcblxuY29uc3QgZ2V0VXNlciA9ICh1c2VycywgdXNlckxvZ2dlZCkgPT4ge1xuICAgIGlmICghdXNlcnMgfHwgIUFycmF5LmlzQXJyYXkodXNlcnMpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICE9PSB1c2VyTG9nZ2VkPy5lbWFpbClbMF07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxDb250YWN0cyh7IGlkLCB1c2VycywgdXNlciwgc2V0VXNlckNoYXQgfSkge1xuICAgIGNvbnN0IG90aGVyVXNlckVtYWlsID0gZ2V0VXNlcih1c2VycywgdXNlcik7XG5cbiAgICBjb25zdCBbZ2V0VXNlckl0ZW1dID0gdXNlQ29sbGVjdGlvbihcbiAgICAgICAgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLndoZXJlKFwiZW1haWxcIiwgXCI9PVwiLCBvdGhlclVzZXJFbWFpbClcbiAgICApO1xuXG4gICAgY29uc3QgYXZhdGFyRGF0YSA9IGdldFVzZXJJdGVtPy5kb2NzPy5bMF0/LmRhdGEoKTtcbiAgICBjb25zdCB1c2VyTmFtZSA9IG90aGVyVXNlckVtYWlsPy5zcGxpdChcIkBcIilbMF07XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOZXdDaGF0KCkge1xuICAgICAgICBjb25zdCB1c2VyQ2hhdCA9IHtcbiAgICAgICAgICAgIGNoYXRJZDogaWQsXG4gICAgICAgICAgICBuYW1lOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIHBob3RvVVJMOiBhdmF0YXJEYXRhPy5waG90b1VSTCxcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRVc2VyQ2hhdCh1c2VyQ2hhdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiAnI2QxZDFkMScsIHRyYW5zaXRpb246ICcwLjJzJyB9fVxuICAgICAgICAgICAgZ2FwPXs2fVxuICAgICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV3Q2hhdH1cbiAgICAgICAgICAgIHA9e1wiMXJlbVwifVxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cbiAgICAgICAgPlxuICAgICAgICAgICAge2F2YXRhckRhdGEgPyA8SW1nIHNyYz17YXZhdGFyRGF0YT8ucGhvdG9VUkx9IC8+IDogJyd9XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCIxLjI2cmVtXCJ9IGNvbG9yPXtcImJsYWNrXCJ9IGZvbnRXZWlnaHQ9e1wiNTAwXCJ9PlxuICAgICAgICAgICAgICAgIHt1c2VyTmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxEaXZpZGVyIHc9e1wiMTAwJVwifSBib3JkZXI9e1wiMXB4IHNvbGlkIGJsYWNrXCJ9IC8+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZGIiLCJCb3giLCJEaXZpZGVyIiwiSW1nIiwiVGV4dCIsInVzZUNvbGxlY3Rpb24iLCJnZXRVc2VyIiwidXNlcnMiLCJ1c2VyTG9nZ2VkIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwidXNlciIsImVtYWlsIiwiTW9kYWxDb250YWN0cyIsImlkIiwic2V0VXNlckNoYXQiLCJnZXRVc2VySXRlbSIsIm90aGVyVXNlckVtYWlsIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiYXZhdGFyRGF0YSIsImRvY3MiLCJkYXRhIiwidXNlck5hbWUiLCJzcGxpdCIsImhhbmRsZU5ld0NoYXQiLCJ1c2VyQ2hhdCIsImNoYXRJZCIsIm5hbWUiLCJwaG90b1VSTCIsIl9ob3ZlciIsImJnIiwidHJhbnNpdGlvbiIsImdhcCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwib25DbGljayIsInAiLCJmbGV4RGlyZWN0aW9uIiwic3JjIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJ3IiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ModalMobile/modalBodyContacts.js\n"));

/***/ })

});