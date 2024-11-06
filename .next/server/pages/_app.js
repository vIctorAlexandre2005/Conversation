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

/***/ "./src/components/Context/index.js":
/*!*****************************************!*\
  !*** ./src/components/Context/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useContextUserChat: () => (/* binding */ useContextUserChat)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ParamsProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserChatComponent = ({ children })=>{\n    const [userChat, setUserChat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleEsc = (event)=>{\n            if (event.key === \"Escape\") {\n                console.log(\"Esc key was pressed\");\n                setUserChat(null);\n            }\n        };\n        window.addEventListener(\"keydown\", handleEsc);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleEsc);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ParamsProvider.Provider, {\n        value: {\n            userChat,\n            setUserChat\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/components/Context/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst useContextUserChat = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ParamsProvider);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserChatComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFFdkUsTUFBTUksK0JBQWlCSixvREFBYUE7QUFFcEMsTUFBTUssb0JBQW9CLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxZQUFZLENBQUNDO1lBQ2pCLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxVQUFVO2dCQUMxQkMsUUFBUUMsR0FBRyxDQUFDO2dCQUNaTCxZQUFZO1lBQ2Q7UUFDRjtRQUVBTSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXTjtRQUVuQyxPQUFPO1lBQ0xLLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdQO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNMLGVBQWVhLFFBQVE7UUFDdEJDLE9BQU87WUFDTFg7WUFDQUM7UUFDRjtrQkFFQ0Y7Ozs7OztBQUdQO0FBRU8sTUFBTWEscUJBQXFCLElBQU1sQixpREFBVUEsQ0FBQ0csZ0JBQWdCO0FBQ25FLGlFQUFlQyxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWNvbnZlcnNhdGlvbi8uL3NyYy9jb21wb25lbnRzL0NvbnRleHQvaW5kZXguanM/YzZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBhcmFtc1Byb3ZpZGVyID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBVc2VyQ2hhdENvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXJDaGF0LCBzZXRVc2VyQ2hhdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUVzYyA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVzYyBrZXkgd2FzIHByZXNzZWRcIik7XG4gICAgICAgIHNldFVzZXJDaGF0KG51bGwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFyYW1zUHJvdmlkZXIuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXJDaGF0LFxuICAgICAgICBzZXRVc2VyQ2hhdCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGFyYW1zUHJvdmlkZXIuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ29udGV4dFVzZXJDaGF0ID0gKCkgPT4gdXNlQ29udGV4dChQYXJhbXNQcm92aWRlcik7XG5leHBvcnQgZGVmYXVsdCBVc2VyQ2hhdENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFyYW1zUHJvdmlkZXIiLCJVc2VyQ2hhdENvbXBvbmVudCIsImNoaWxkcmVuIiwidXNlckNoYXQiLCJzZXRVc2VyQ2hhdCIsImhhbmRsZUVzYyIsImV2ZW50Iiwia2V5IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHRVc2VyQ2hhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Context/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Context */ \"./src/components/Context/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_theme__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);\n([_styles_theme__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/trabalho/chat/chat-portfolio/src/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2Q7QUFDVztBQUVuQyxTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTCwyREFBaUJBO2tCQUNoQiw0RUFBQ0UsNERBQWNBO1lBQUNELE9BQU9BLGdEQUFLQTtzQkFDMUIsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWNvbnZlcnNhdGlvbi8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJDaGF0Q29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGV4dFwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiQC9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyQ2hhdENvbXBvbmVudD5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvVXNlckNoYXRDb21wb25lbnQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVXNlckNoYXRDb21wb25lbnQiLCJ0aGVtZSIsIkNoYWtyYVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/breakpoints.js":
/*!***********************************!*\
  !*** ./src/styles/breakpoints.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breakpoints: () => (/* binding */ breakpoints)\n/* harmony export */ });\nconst breakpoints = {\n    // Dispositivos móveis\n    gb: \"0px\",\n    xs: \"320px\",\n    sm: \"480px\",\n    tablet: \"768px\",\n    tabletLandscape: \"1024px\",\n    desktop: \"1280px\",\n    laptop: \"1366px\",\n    desktopWide: \"1440px\",\n    desktopWide1: \"1460px\",\n    monitor: \"1920px\",\n    ultrawide: \"2560px\",\n    // Tablets\n    tablet: \"768px\",\n    tabletLandscape: \"1024px\",\n    // Desktop\n    desktop: \"1280px\",\n    desktopWide: \"1440px\",\n    // Laptops\n    laptop: \"1366px\",\n    // Monitores\n    monitor: \"1920px\",\n    // Ultra wide displays\n    ultrawide: \"2560px\",\n    // 4K e além\n    \"4k\": \"3840px\",\n    \"5k\": \"5120px\",\n    \"6k\": \"6144px\",\n    \"8k\": \"7680px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxjQUFjO0lBQ3pCLHNCQUFzQjtJQUN0QkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsUUFBUTtJQUNSQyxpQkFBaUI7SUFDakJDLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsU0FBUztJQUNUQyxXQUFXO0lBRVgsVUFBVTtJQUNWUCxRQUFRO0lBQ1JDLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1ZDLFNBQVM7SUFDVEUsYUFBYTtJQUViLFVBQVU7SUFDVkQsUUFBUTtJQUVSLFlBQVk7SUFDWkcsU0FBUztJQUVULHNCQUFzQjtJQUN0QkMsV0FBVztJQUVYLFlBQVk7SUFDWixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0FBQ1IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY29udmVyc2F0aW9uLy4vc3JjL3N0eWxlcy9icmVha3BvaW50cy5qcz9kZDkxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcbiAgLy8gRGlzcG9zaXRpdm9zIG3Ds3ZlaXNcbiAgZ2I6IFwiMHB4XCIsXG4gIHhzOiBcIjMyMHB4XCIsIC8vIEV4dHJhIHNtYWxsXG4gIHNtOiBcIjQ4MHB4XCIsIC8vIFNtYWxsXG4gIHRhYmxldDogXCI3NjhweFwiLCAvLyBNZWRpdW1cbiAgdGFibGV0TGFuZHNjYXBlOiBcIjEwMjRweFwiLCAvLyBMYXJnZVxuICBkZXNrdG9wOiBcIjEyODBweFwiLCAvLyBFeHRyYSBsYXJnZVxuICBsYXB0b3A6IFwiMTM2NnB4XCIsXG4gIGRlc2t0b3BXaWRlOiBcIjE0NDBweFwiLFxuICBkZXNrdG9wV2lkZTE6IFwiMTQ2MHB4XCIsXG4gIG1vbml0b3I6IFwiMTkyMHB4XCIsXG4gIHVsdHJhd2lkZTogXCIyNTYwcHhcIixcblxuICAvLyBUYWJsZXRzXG4gIHRhYmxldDogXCI3NjhweFwiLCAvLyBSZXRyYXRvIFRhYmxldFxuICB0YWJsZXRMYW5kc2NhcGU6IFwiMTAyNHB4XCIsIC8vIFBhaXNhZ2VtIFRhYmxldFxuICAvLyBEZXNrdG9wXG4gIGRlc2t0b3A6IFwiMTI4MHB4XCIsXG4gIGRlc2t0b3BXaWRlOiBcIjE0NDBweFwiLCAvLyBEZXNrdG9wIHdpZGVcblxuICAvLyBMYXB0b3BzXG4gIGxhcHRvcDogXCIxMzY2cHhcIiwgLy8gVGFtYW5obyBjb211bSBwYXJhIGxhcHRvcHNcblxuICAvLyBNb25pdG9yZXNcbiAgbW9uaXRvcjogXCIxOTIwcHhcIiwgLy8gUmVzb2x1w6fDo28gY29tdW0gcGFyYSBtb25pdG9yZXNcblxuICAvLyBVbHRyYSB3aWRlIGRpc3BsYXlzXG4gIHVsdHJhd2lkZTogXCIyNTYwcHhcIiwgLy8gVWx0cmF3aWRlIG1vbml0b3JzXG5cbiAgLy8gNEsgZSBhbMOpbVxuICBcIjRrXCI6IFwiMzg0MHB4XCIsIC8vIFJlc29sdcOnw6NvIDRLXG4gIFwiNWtcIjogXCI1MTIwcHhcIiwgLy8gUmVzb2x1w6fDo28gNUtcbiAgXCI2a1wiOiBcIjYxNDRweFwiLCAvLyBSZXNvbHXDp8OjbyA2S1xuICBcIjhrXCI6IFwiNzY4MHB4XCIsIC8vIFJlc29sdcOnw6NvIDhLIGUgYWzDqW1cbn07XG4iXSwibmFtZXMiOlsiYnJlYWtwb2ludHMiLCJnYiIsInhzIiwic20iLCJ0YWJsZXQiLCJ0YWJsZXRMYW5kc2NhcGUiLCJkZXNrdG9wIiwibGFwdG9wIiwiZGVza3RvcFdpZGUiLCJkZXNrdG9wV2lkZTEiLCJtb25pdG9yIiwidWx0cmF3aWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/breakpoints.js\n");

/***/ }),

/***/ "./src/styles/colors.js":
/*!******************************!*\
  !*** ./src/styles/colors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colors: () => (/* binding */ colors)\n/* harmony export */ });\nconst colors = {\n    bunker: {\n        50: \"#f0fafb\",\n        100: \"#d9f3f4\",\n        200: \"#b7e7ea\",\n        300: \"#85d4db\",\n        400: \"#4cb8c4\",\n        500: \"#319ca9\",\n        600: \"#2b7e8f\",\n        700: \"#296875\",\n        800: \"#295661\",\n        900: \"#264953\",\n        950: \"#071013\"\n    },\n    black: {\n        50: \"#f0f0f0\",\n        100: \"#e6e6e6\",\n        200: \"#cccccc\",\n        300: \"#b3b3b3\",\n        400: \"#999999\",\n        500: \"#808080\",\n        600: \"#666666\",\n        700: \"#4d4d4d\",\n        800: \"#3d3d3d\",\n        850: \"#171b1c\",\n        900: \"#262a2c\",\n        950: \"#252727\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NvbG9ycy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUztJQUNwQkMsUUFBUTtRQUNOLElBQUk7UUFDSixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0lBQ1A7SUFFQUMsT0FBTztRQUNMLElBQUk7UUFDSixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztJQUNQO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY29udmVyc2F0aW9uLy4vc3JjL3N0eWxlcy9jb2xvcnMuanM/YTYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBidW5rZXI6IHtcbiAgICA1MDogXCIjZjBmYWZiXCIsXG4gICAgMTAwOiBcIiNkOWYzZjRcIixcbiAgICAyMDA6IFwiI2I3ZTdlYVwiLFxuICAgIDMwMDogXCIjODVkNGRiXCIsXG4gICAgNDAwOiBcIiM0Y2I4YzRcIixcbiAgICA1MDA6IFwiIzMxOWNhOVwiLFxuICAgIDYwMDogXCIjMmI3ZThmXCIsXG4gICAgNzAwOiBcIiMyOTY4NzVcIixcbiAgICA4MDA6IFwiIzI5NTY2MVwiLFxuICAgIDkwMDogXCIjMjY0OTUzXCIsXG4gICAgOTUwOiBcIiMwNzEwMTNcIixcbiAgfSxcblxuICBibGFjazoge1xuICAgIDUwOiBcIiNmMGYwZjBcIixcbiAgICAxMDA6IFwiI2U2ZTZlNlwiLFxuICAgIDIwMDogXCIjY2NjY2NjXCIsXG4gICAgMzAwOiBcIiNiM2IzYjNcIixcbiAgICA0MDA6IFwiIzk5OTk5OVwiLFxuICAgIDUwMDogXCIjODA4MDgwXCIsXG4gICAgNjAwOiBcIiM2NjY2NjZcIixcbiAgICA3MDA6IFwiIzRkNGQ0ZFwiLFxuICAgIDgwMDogXCIjM2QzZDNkXCIsXG4gICAgODUwOiBcIiMxNzFiMWNcIixcbiAgICA5MDA6IFwiIzI2MmEyY1wiLFxuICAgIDk1MDogXCIjMjUyNzI3XCIsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbImNvbG9ycyIsImJ1bmtlciIsImJsYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/colors.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ \"./src/styles/colors.js\");\n/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakpoints */ \"./src/styles/breakpoints.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: _colors__WEBPACK_IMPORTED_MODULE_1__.colors,\n    breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_2__.breakpoints\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDYjtBQUNVO0FBRXJDLE1BQU1HLFFBQVFILDZEQUFXQSxDQUFDO0lBQy9CQyxNQUFNQSw2Q0FBQUE7SUFDTkMsV0FBV0EsdURBQUFBO0FBQ2IsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtY29udmVyc2F0aW9uLy4vc3JjL3N0eWxlcy90aGVtZS5qcz8xOWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuL2NvbG9yc1wiO1xuaW1wb3J0IHsgYnJlYWtwb2ludHMgfSBmcm9tIFwiLi9icmVha3BvaW50c1wiO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbG9ycyxcbiAgYnJlYWtwb2ludHMsXG59KTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImNvbG9ycyIsImJyZWFrcG9pbnRzIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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