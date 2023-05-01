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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble */ \"./components/bubble.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _src_chat_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/chat.recoil */ \"./src/chat.recoil.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SendChat(param) {\n    let { model  } = param;\n    _s();\n    const [sent, setSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [success, setSuccess] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_src_chat_recoil__WEBPACK_IMPORTED_MODULE_5__.requestSuccess);\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const request = async ()=>{\n        setSent(true);\n        const response = await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)(model, prompt);\n        if (response.resCode === \"200\") {\n            setSuccess(true);\n        }\n    };\n    const onChange = (e)=>setPrompt(e.target.value);\n    if (sent === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn loading\",\n            children: \"Waiting For chatGPT\"\n        }, void 0, false, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this);\n    }\n    if (success) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bubble__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            message: prompt\n        }, void 0, false, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Type here\",\n                className: \"input input-bordered w-full max-w-xs\",\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                style: {\n                    marginLeft: \"2%\"\n                },\n                onClick: (event)=>{\n                    request();\n                },\n                children: \"보내기\"\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(SendChat, \"490CEssree74+3cJo61kpQQ7Bt4=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = SendChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendChat);\nvar _c;\n$RefreshReg$(_c, \"SendChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFDWjtBQUNNO0FBQ1k7QUFFcEQsU0FBU0ssU0FBUyxLQUFPLEVBQUU7UUFBVCxFQUFDQyxNQUFLLEVBQUMsR0FBUDs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1Asc0RBQWNBLENBQUNDLDREQUFjQTtJQUMzRCxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBO0lBSXBDLE1BQU1hLFVBQVUsVUFBVztRQUN2QkwsUUFBUSxJQUFJO1FBRVosTUFBTU0sV0FBVyxNQUFNYiwwREFBV0EsQ0FBQ0ssT0FBT0s7UUFFMUMsSUFBSUcsU0FBU0MsT0FBTyxLQUFLLE9BQU87WUFDNUJMLFdBQVcsSUFBSTtRQUNuQixDQUFDO0lBQ0w7SUFFQSxNQUFNTSxXQUFXLENBQUNDLElBQU1MLFVBQVVLLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUloRCxJQUFJWixTQUFTLElBQUksRUFBRTtRQUNmLHFCQUNJLDhEQUFDYTtZQUFPQyxXQUFVO3NCQUFjOzs7Ozs7SUFFeEMsQ0FBQztJQUVELElBQUlaLFNBQVM7c0JBQ1QsOERBQUNQLCtDQUFVQTtZQUFDb0IsU0FBU1g7Ozs7OztJQUN6QixDQUFDO0lBRUQscUJBQ0ksOERBQUNZOzswQkFDRyw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQVlMLFdBQVU7Z0JBQXVDTCxVQUFVQTs7Ozs7OzBCQUN0Ryw4REFBQ0k7Z0JBQU9DLFdBQVU7Z0JBQU1NLE9BQU87b0JBQUNDLFlBQVk7Z0JBQUk7Z0JBQUdDLFNBQVMsQ0FBQ0MsUUFBVTtvQkFBQ2pCO2dCQUFTOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFJaEc7R0F0Q1NSOztRQUV5QkYsa0RBQWNBOzs7S0FGdkNFO0FBd0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdC50c3g/YzI2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2hhdFJlcXVlc3QgfSBmcm9tIFwiLi4vc3JjL2NoYXQubGliXCI7XG5pbXBvcnQgQ2hhdEJ1YmJsZSBmcm9tIFwiLi9idWJibGVcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgcmVxdWVzdFN1Y2Nlc3MgfSBmcm9tIFwiLi4vc3JjL2NoYXQucmVjb2lsXCI7XG5cbmZ1bmN0aW9uIFNlbmRDaGF0KHttb2RlbH0pIHtcbiAgICBjb25zdCBbc2VudCwgc2V0U2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlUmVjb2lsU3RhdGUocmVxdWVzdFN1Y2Nlc3MpO1xuICAgIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIHNldFNlbnQodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGF0UmVxdWVzdChtb2RlbCwgcHJvbXB0KTtcblxuICAgICAgICBpZiAocmVzcG9uc2UucmVzQ29kZSA9PT0gXCIyMDBcIikge1xuICAgICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4gc2V0UHJvbXB0KGUudGFyZ2V0LnZhbHVlKTtcblxuXG4gXG4gICAgaWYgKHNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvYWRpbmdcIj5XYWl0aW5nIEZvciBjaGF0R1BUPC9idXR0b24+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICA8Q2hhdEJ1YmJsZSBtZXNzYWdlPXtwcm9tcHR9PjwvQ2hhdEJ1YmJsZT5cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIG9uQ2hhbmdlPXtvbkNoYW5nZX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMiVcIn19IG9uQ2xpY2s9eyhldmVudCkgPT4ge3JlcXVlc3QoKX19PuuztOuCtOq4sDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VuZENoYXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2hhdFJlcXVlc3QiLCJDaGF0QnViYmxlIiwidXNlUmVjb2lsU3RhdGUiLCJyZXF1ZXN0U3VjY2VzcyIsIlNlbmRDaGF0IiwibW9kZWwiLCJzZW50Iiwic2V0U2VudCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwicmVzQ29kZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJtYXJnaW5MZWZ0Iiwib25DbGljayIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chat.tsx\n"));

/***/ }),

/***/ "./src/chat.recoil.ts":
/*!****************************!*\
  !*** ./src/chat.recoil.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chatRecoil\": function() { return /* binding */ chatRecoil; },\n/* harmony export */   \"requestSuccess\": function() { return /* binding */ requestSuccess; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n\nconst chatRecoil = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"chatRecoil\",\n    default: [\n        \"\"\n    ]\n});\nconst requestSuccess = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"requestSuccess\",\n    default: false\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hhdC5yZWNvaWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLGFBQWFELDRDQUFJQSxDQUFDO0lBQzNCRSxLQUFLO0lBQ0xDLFNBQVM7UUFBQztLQUFHO0FBQ2pCLEdBQUc7QUFFSSxNQUFNQyxpQkFBaUJKLDRDQUFJQSxDQUFDO0lBQy9CRSxLQUFLO0lBQ0xDLFNBQVMsS0FBSztBQUNsQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jaGF0LnJlY29pbC50cz9hN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XG5cbmV4cG9ydCBjb25zdCBjaGF0UmVjb2lsID0gYXRvbSh7XG4gICAga2V5OiBcImNoYXRSZWNvaWxcIixcbiAgICBkZWZhdWx0OiBbXCJcIl0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTdWNjZXNzID0gYXRvbSh7XG4gICAga2V5OiBcInJlcXVlc3RTdWNjZXNzXCIsXG4gICAgZGVmYXVsdDogZmFsc2UsXG59KTtcbiJdLCJuYW1lcyI6WyJhdG9tIiwiY2hhdFJlY29pbCIsImtleSIsImRlZmF1bHQiLCJyZXF1ZXN0U3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/chat.recoil.ts\n"));

/***/ })

});