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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _src_chat_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/chat.recoil */ \"./src/chat.recoil.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SendChat(param) {\n    let { model  } = param;\n    _s();\n    const [sent, setSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [success, setSuccess] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_src_chat_recoil__WEBPACK_IMPORTED_MODULE_4__.requestSuccess);\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [response, setResponse] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_src_chat_recoil__WEBPACK_IMPORTED_MODULE_4__.responseRecoil);\n    const request = async ()=>{\n        setSent(true);\n        const response = await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)(model, prompt);\n        if (response.resCode === \"200\") {\n            setSuccess(true);\n            setResponse(response.dataRes);\n        }\n    };\n    const onChange = (e)=>setPrompt(e.target.value);\n    if (sent === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn loading\",\n            children: \"Waiting For chatGPT\"\n        }, void 0, false, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Type here\",\n                className: \"input input-bordered w-full max-w-xs\",\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                style: {\n                    marginTop: \"2%\"\n                },\n                onClick: (event)=>{\n                    request();\n                },\n                children: \"보내기\"\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/components/chat.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(SendChat, \"CRwUo42PRDCL3xJwO2k3jsoBXQc=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState\n    ];\n});\n_c = SendChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SendChat);\nvar _c;\n$RefreshReg$(_c, \"SendChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDYTtBQUVOO0FBQzRCO0FBRXBFLFNBQVNLLFNBQVMsS0FBTyxFQUFFO1FBQVQsRUFBQ0MsTUFBSyxFQUFDLEdBQVA7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdSLHNEQUFjQSxDQUFDQyw0REFBY0E7SUFDM0QsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQTtJQUNwQyxNQUFNLENBQUVhLFVBQVVDLFlBQVksR0FBR1osc0RBQWNBLENBQUNFLDREQUFjQTtJQUk5RCxNQUFNVyxVQUFVLFVBQVc7UUFDdkJQLFFBQVEsSUFBSTtRQUVaLE1BQU1LLFdBQVcsTUFBTVosMERBQVdBLENBQUNLLE9BQU9LO1FBRTFDLElBQUlFLFNBQVNHLE9BQU8sS0FBSyxPQUFPO1lBQzVCTixXQUFXLElBQUk7WUFDZkksWUFBWUQsU0FBU0ksT0FBTztRQUNoQyxDQUFDO0lBQ0w7SUFFQSxNQUFNQyxXQUFXLENBQUNDLElBQU1QLFVBQVVPLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUloRCxJQUFJZCxTQUFTLElBQUksRUFBRTtRQUNmLHFCQUNJLDhEQUFDZTtZQUFPQyxXQUFVO3NCQUFjOzs7Ozs7SUFFeEMsQ0FBQztJQUVELHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFZSixXQUFVO2dCQUF1Q0wsVUFBVUE7Ozs7OzswQkFDdEcsOERBQUNJO2dCQUFPQyxXQUFVO2dCQUFNSyxPQUFPO29CQUFDQyxXQUFXO2dCQUFJO2dCQUFHQyxTQUFTLENBQUNDLFFBQVU7b0JBQUNoQjtnQkFBUzswQkFBRzs7Ozs7Ozs7Ozs7O0FBSS9GO0dBcENTVjs7UUFFeUJILGtEQUFjQTtRQUVYQSxrREFBY0E7OztLQUoxQ0c7QUFzQ1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0LnRzeD9jMjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjaGF0UmVxdWVzdCB9IGZyb20gXCIuLi9zcmMvY2hhdC5saWJcIjtcbmltcG9ydCBDaGF0QnViYmxlIGZyb20gXCIuL2J1YmJsZVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyByZXF1ZXN0U3VjY2VzcywgcmVzcG9uc2VSZWNvaWwgfSBmcm9tIFwiLi4vc3JjL2NoYXQucmVjb2lsXCI7XG5cbmZ1bmN0aW9uIFNlbmRDaGF0KHttb2RlbH0pIHtcbiAgICBjb25zdCBbc2VudCwgc2V0U2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlUmVjb2lsU3RhdGUocmVxdWVzdFN1Y2Nlc3MpO1xuICAgIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFsgcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVJlY29pbFN0YXRlKHJlc3BvbnNlUmVjb2lsKTtcblxuICAgIFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBzZXRTZW50KHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hhdFJlcXVlc3QobW9kZWwsIHByb21wdCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc0NvZGUgPT09IFwiMjAwXCIpIHtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHJlc3BvbnNlLmRhdGFSZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4gc2V0UHJvbXB0KGUudGFyZ2V0LnZhbHVlKTtcblxuXG4gXG4gICAgaWYgKHNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvYWRpbmdcIj5XYWl0aW5nIEZvciBjaGF0R1BUPC9idXR0b24+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIG9uQ2hhbmdlPXtvbkNoYW5nZX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17e21hcmdpblRvcDogXCIyJVwifX0gb25DbGljaz17KGV2ZW50KSA9PiB7cmVxdWVzdCgpfX0+67O064K06riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW5kQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjaGF0UmVxdWVzdCIsInVzZVJlY29pbFN0YXRlIiwicmVxdWVzdFN1Y2Nlc3MiLCJyZXNwb25zZVJlY29pbCIsIlNlbmRDaGF0IiwibW9kZWwiLCJzZW50Iiwic2V0U2VudCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInJlcXVlc3QiLCJyZXNDb2RlIiwiZGF0YVJlcyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm9uQ2xpY2siLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chat.tsx\n"));

/***/ })

});