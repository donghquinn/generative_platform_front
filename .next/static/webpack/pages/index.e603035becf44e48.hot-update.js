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

/***/ "./components/chat.tsx":
/*!*****************************!*\
  !*** ./components/chat.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble */ \"./components/bubble.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SendChat(param) {\n    let { model  } = param;\n    _s();\n    const [sent, setSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const request = async ()=>{\n        setSent(true);\n        const response = await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)(model, prompt);\n        if (response.resCode === \"200\") {\n            setSuccess(true);\n        }\n    };\n    const onChange = (e)=>setPrompt(e.target.value);\n    if (sent === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn loading\",\n            children: \"Waiting For chatGPT\"\n        }, void 0, false, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this);\n    }\n    if (success) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bubble__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            message: prompt\n        }, void 0, false, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Type here\",\n                className: \"input input-bordered w-full max-w-xs\",\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                style: {\n                    marginLeft: \"2%\"\n                },\n                onClick: (event)=>{\n                    request();\n                },\n                children: \"보내기\"\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(SendChat, \"RjN5YGO9y97oIM67Ybvvt8VE+TY=\");\n_c = SendChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendChat);\nvar _c;\n$RefreshReg$(_c, \"SendChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNhO0FBQ1o7QUFFbEMsU0FBU0csU0FBUyxLQUFPLEVBQUU7UUFBVCxFQUFDQyxNQUFLLEVBQUMsR0FBUDs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBO0lBRXBDLE1BQU1XLFVBQVUsVUFBVztRQUN2QkwsUUFBUSxJQUFJO1FBRVosTUFBTU0sV0FBVyxNQUFNWCwwREFBV0EsQ0FBQ0csT0FBT0s7UUFFMUMsSUFBSUcsU0FBU0MsT0FBTyxLQUFLLE9BQU87WUFDNUJMLFdBQVcsSUFBSTtRQUNuQixDQUFDO0lBQ0w7SUFFQSxNQUFNTSxXQUFXLENBQUNDLElBQU1MLFVBQVVLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUloRCxJQUFJWixTQUFTLElBQUksRUFBRTtRQUNmLHFCQUNJLDhEQUFDYTtZQUFPQyxXQUFVO3NCQUFjOzs7Ozs7SUFFeEMsQ0FBQztJQUVELElBQUlaLFNBQVM7c0JBQ1QsOERBQUNMLCtDQUFVQTtZQUFDa0IsU0FBU1g7Ozs7OztJQUN6QixDQUFDO0lBRUQscUJBQ0ksOERBQUNZOzswQkFDRyw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQVlMLFdBQVU7Z0JBQXVDTCxVQUFVQTs7Ozs7OzBCQUN0Ryw4REFBQ0k7Z0JBQU9DLFdBQVU7Z0JBQU1NLE9BQU87b0JBQUNDLFlBQVk7Z0JBQUk7Z0JBQUdDLFNBQVMsQ0FBQ0MsUUFBVTtvQkFBQ2pCO2dCQUFTOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFJaEc7R0FwQ1NSO0tBQUFBO0FBc0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdC50c3g/YzI2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2hhdFJlcXVlc3QgfSBmcm9tIFwiLi4vc3JjL2NoYXQubGliXCI7XG5pbXBvcnQgQ2hhdEJ1YmJsZSBmcm9tIFwiLi9idWJibGVcIjtcblxuZnVuY3Rpb24gU2VuZENoYXQoe21vZGVsfSkge1xuICAgIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIHNldFNlbnQodHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNoYXRSZXF1ZXN0KG1vZGVsLCBwcm9tcHQpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNDb2RlID09PSBcIjIwMFwiKSB7XG4gICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpO1xuXG5cbiBcbiAgICBpZiAoc2VudCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9hZGluZ1wiPldhaXRpbmcgRm9yIGNoYXRHUFQ8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIDxDaGF0QnViYmxlIG1lc3NhZ2U9e3Byb21wdH0+PC9DaGF0QnViYmxlPlxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfS8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyJVwifX0gb25DbGljaz17KGV2ZW50KSA9PiB7cmVxdWVzdCgpfX0+67O064K06riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW5kQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjaGF0UmVxdWVzdCIsIkNoYXRCdWJibGUiLCJTZW5kQ2hhdCIsIm1vZGVsIiwic2VudCIsInNldFNlbnQiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInByb21wdCIsInNldFByb21wdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInJlc0NvZGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm9uQ2xpY2siLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chat.tsx\n"));

/***/ })

});