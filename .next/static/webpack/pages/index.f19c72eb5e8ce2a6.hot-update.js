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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat */ \"./components/chat.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const modelArray = [\n        \"gpt-4\",\n        \"gpt-4-0314\",\n        \"gpt-4-32k\",\n        \"gpt-4-32k-0314\",\n        \"gpt-3.5-turbo\",\n        \"gpt-3.5-turbo-0301\"\n    ];\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-2 px-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        style: {\n                            marginBottom: \"5%\",\n                            marginTop: \"5%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    fontSize: \"150%\"\n                                },\n                                children: \"Select Model\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn m-1\",\n                                children: \"Models\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                children: modelArray.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: (event)=>{\n                                                setModel(item);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: item\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, item, false, {\n                                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-2 px-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            model: model\n                        }, void 0, false, {\n                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"iEqK3zv9yGk2VCSKpfWNnjca71A=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVGO0FBRzFDLFNBQVNFLE9BQU87O0lBQ1osTUFBTUMsYUFBYTtRQUFDO1FBQVM7UUFBYztRQUFhO1FBQWtCO1FBQWlCO0tBQXFCO0lBQ2hILE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFJdEQsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUtsQyxxQkFDSSw4REFBQ1E7a0JBQ0QsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7d0JBQVdDLE9BQU87NEJBQUNDLGNBQWM7NEJBQU1DLFdBQVU7d0JBQUk7OzBDQUNoRSw4REFBQ0M7Z0NBQUdILE9BQU87b0NBQUNJLFVBQVU7Z0NBQU07MENBQUc7Ozs7OzswQ0FDL0IsOERBQUNDO2dDQUFNQyxVQUFVO2dDQUFHUCxXQUFVOzBDQUFVOzs7Ozs7MENBR3hDLDhEQUFDUTtnQ0FBR0QsVUFBVTtnQ0FBR1AsV0FBVTswQ0FDdEJOLFdBQVdlLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29DQUN0QixxQkFDSSw4REFBQ1g7a0RBQ0csNEVBQUNZOzRDQUFHQyxTQUFTLENBQUNDLFFBQVU7Z0RBQUVmLFNBQVNZOzRDQUFLO3NEQUNwQyw0RUFBQ0k7MERBQUdKOzs7Ozs7Ozs7Ozt1Q0FGRkE7Ozs7O2dDQUtsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSUosOERBQUNYO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1Isd0RBQVFBOzRCQUFDSyxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBekNTSjtLQUFBQTtBQTJDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LnRzeD9mZjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNoYXRSZXF1ZXN0IH0gZnJvbSBcIi4uL3NyYy9jaGF0LmxpYlwiO1xuaW1wb3J0IFNlbmRDaGF0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRcIjtcblxuXG5mdW5jdGlvbiBDaGF0KCkge1xuICAgIGNvbnN0IG1vZGVsQXJyYXkgPSBbXCJncHQtNFwiLCBcImdwdC00LTAzMTRcIiwgXCJncHQtNC0zMmtcIiwgXCJncHQtNC0zMmstMDMxNFwiLCBcImdwdC0zLjUtdHVyYm9cIiwgXCJncHQtMy41LXR1cmJvLTAzMDFcIl07XG4gICAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiBcblxuXG4gICAgY29uc3QgW21vZGVsLCBzZXRNb2RlbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cblxuXG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgcHgtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1JVwiLCBtYXJnaW5Ub3A6XCI1JVwifX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMTUwJVwifX0+U2VsZWN0IE1vZGVsPC9oMT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9kZWxzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIj5cbiAgICAgICAgICAgICAgICAgICAge21vZGVsQXJyYXkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhldmVudCkgPT4geyBzZXRNb2RlbChpdGVtKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VuZENoYXQgbW9kZWw9e21vZGVsfT48L1NlbmRDaGF0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZW5kQ2hhdCIsIkNoYXQiLCJtb2RlbEFycmF5Iiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3BEb3duIiwibW9kZWwiLCJzZXRNb2RlbCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaDEiLCJmb250U2l6ZSIsImxhYmVsIiwidGFiSW5kZXgiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJldmVudCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});