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

/***/ "./pages/chat.tsx":
/*!************************!*\
  !*** ./pages/chat.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const modelArray = [\n        \"gpt-4\",\n        \"gpt-4-0314\",\n        \"gpt-4-32k\",\n        \"gpt-4-32k-0314\",\n        \"gpt-3.5-turbo\",\n        \"gpt-3.5-turbo-0301\"\n    ];\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onChange = (e)=>setMessage(e.target.value);\n    const request = async ()=>{\n        await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown\",\n                style: {\n                    marginBottom: \"5%\",\n                    marginTop: \"5%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            fontSize: \"150%\"\n                        },\n                        children: \"Select Model\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        tabIndex: 0,\n                        className: \"btn m-1\",\n                        children: \"Click\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        tabIndex: 0,\n                        className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                        children: modelArray.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (event)=>{\n                                        setModel(item);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: item\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 33\n                                }, this)\n                            }, item, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type here\",\n                        className: \"input input-bordered w-full max-w-xs\",\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        style: {\n                            marginLeft: \"2%\"\n                        },\n                        children: \"확인\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"gEq5DDRc3IHkFBqT0wjZwch/moM=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNFO0FBRzlDLFNBQVNHLE9BQU87O0lBQ1osTUFBTUMsYUFBYTtRQUFDO1FBQVM7UUFBYztRQUFhO1FBQWtCO1FBQWlCO0tBQXFCO0lBRWhILE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUE7SUFFdEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUVsQyxNQUFNUSxXQUFXLENBQUNDLElBQU1KLFdBQVdJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUVqRCxNQUFNQyxVQUFVLFVBQVc7UUFDdkIsTUFBTVgsMERBQVdBO0lBQ3JCO0lBQ0FGLGdEQUFTQSxDQUFDLElBQU0sQ0FFaEI7SUFFQSxxQkFDSSw4REFBQ2M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTtnQkFBV0MsT0FBTztvQkFBQ0MsY0FBYztvQkFBTUMsV0FBVTtnQkFBSTs7a0NBQ2hFLDhEQUFDQzt3QkFBR0gsT0FBTzs0QkFBQ0ksVUFBVTt3QkFBTTtrQ0FBRzs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQU1DLFVBQVU7d0JBQUdQLFdBQVU7a0NBQVU7Ozs7OztrQ0FDeEMsOERBQUNRO3dCQUFHRCxVQUFVO3dCQUFHUCxXQUFVO2tDQUN0QlgsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQyxPQUFTOzRCQUN0QixxQkFDSSw4REFBQ1g7MENBQ0csNEVBQUNZO29DQUFHQyxTQUFTLENBQUNDLFFBQVU7d0NBQUNwQixTQUFTaUI7b0NBQUs7OENBQ25DLDRFQUFDSTtrREFBR0o7Ozs7Ozs7Ozs7OytCQUZGQTs7Ozs7d0JBS2xCOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNYOztrQ0FDRyw4REFBQ2dCO3dCQUFNQyxNQUFLO3dCQUFPQyxhQUFZO3dCQUFZakIsV0FBVTt3QkFBdUNOLFVBQVVBOzs7Ozs7a0NBQ3RHLDhEQUFDd0I7d0JBQU9sQixXQUFVO3dCQUFNQyxPQUFPOzRCQUFDa0IsWUFBWTt3QkFBSTtrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5FO0dBdENTL0I7S0FBQUE7QUF3Q1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3g/ZmYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjaGF0UmVxdWVzdCB9IGZyb20gXCIuLi9zcmMvY2hhdC5saWJcIjtcblxuXG5mdW5jdGlvbiBDaGF0KCkge1xuICAgIGNvbnN0IG1vZGVsQXJyYXkgPSBbXCJncHQtNFwiLCBcImdwdC00LTAzMTRcIiwgXCJncHQtNC0zMmtcIiwgXCJncHQtNC0zMmstMDMxNFwiLCBcImdwdC0zLjUtdHVyYm9cIiwgXCJncHQtMy41LXR1cmJvLTAzMDFcIl07XG5cbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgW21vZGVsLCBzZXRNb2RlbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhc3luYygpID0+IHtcbiAgICAgICAgYXdhaXQgY2hhdFJlcXVlc3QoKVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1JVwiLCBtYXJnaW5Ub3A6XCI1JVwifX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMTUwJVwifX0+U2VsZWN0IE1vZGVsPC9oMT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBtLTFcIj5DbGljazwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IG1lbnUgcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCI+XG4gICAgICAgICAgICAgICAgICAgIHttb2RlbEFycmF5Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZXZlbnQpID0+IHtzZXRNb2RlbChpdGVtKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIiBvbkNoYW5nZT17b25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyJVwifX0+7ZmV7J24PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNoYXRSZXF1ZXN0IiwiQ2hhdCIsIm1vZGVsQXJyYXkiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1vZGVsIiwic2V0TW9kZWwiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVlc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImgxIiwiZm9udFNpemUiLCJsYWJlbCIsInRhYkluZGV4IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiZXZlbnQiLCJhIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});