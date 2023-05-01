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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const modelArray = [\n        \"gpt-4\",\n        \"gpt-4-0314\",\n        \"gpt-4-32k\",\n        \"gpt-4-32k-0314\",\n        \"gpt-3.5-turbo\",\n        \"gpt-3.5-turbo-0301\"\n    ];\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onChange = (e)=>setMessage(e.target.value);\n    const request = async ()=>{\n        await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)(model, message);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-2 px-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        style: {\n                            marginBottom: \"5%\",\n                            marginTop: \"5%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    fontSize: \"150%\"\n                                },\n                                children: \"Select Model\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn m-1\",\n                                children: \"Models\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                children: modelArray.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: (event)=>{\n                                                setModel(item);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: item\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, item, false, {\n                                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Type here\",\n                            className: \"input input-bordered w-full max-w-xs\",\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn\",\n                            style: {\n                                marginLeft: \"2%\"\n                            },\n                            children: \"확인\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"8jPEgzws+ErPOOCAY4YIWNyw9so=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNFO0FBRzlDLFNBQVNHLE9BQU87O0lBQ1osTUFBTUMsYUFBYTtRQUFDO1FBQVM7UUFBYztRQUFhO1FBQWtCO1FBQWlCO0tBQXFCO0lBQ2hILE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQTtJQUV0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBO0lBSWxDLE1BQU1VLFdBQVcsQ0FBQ0MsSUFBTUosV0FBV0ksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBRWpELE1BQU1DLFVBQVUsVUFBVztRQUN2QixNQUFNYiwwREFBV0EsQ0FBQ08sT0FBT0Y7SUFDN0I7SUFDQVAsZ0RBQVNBLENBQUMsSUFBTSxDQUVoQjtJQUVBLHFCQUNJLDhEQUFDZ0I7a0JBQ0QsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7d0JBQVdDLE9BQU87NEJBQUNDLGNBQWM7NEJBQU1DLFdBQVU7d0JBQUk7OzBDQUNoRSw4REFBQ0M7Z0NBQUdILE9BQU87b0NBQUNJLFVBQVU7Z0NBQU07MENBQUc7Ozs7OzswQ0FDL0IsOERBQUNDO2dDQUFNQyxVQUFVO2dDQUFHUCxXQUFVOzBDQUFVOzs7Ozs7MENBR3hDLDhEQUFDUTtnQ0FBR0QsVUFBVTtnQ0FBR1AsV0FBVTswQ0FDdEJiLFdBQVdzQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztvQ0FDdEIscUJBQ0ksOERBQUNYO2tEQUNHLDRFQUFDWTs0Q0FBR0MsU0FBUyxDQUFDQyxRQUFVO2dEQUFFcEIsU0FBU2lCOzRDQUFLO3NEQUNwQyw0RUFBQ0k7MERBQUdKOzs7Ozs7Ozs7Ozt1Q0FGRkE7Ozs7O2dDQUtsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSVIsOERBQUNYOztzQ0FDRyw4REFBQ2dCOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFZakIsV0FBVTs0QkFBdUNOLFVBQVVBOzs7Ozs7c0NBQ3RHLDhEQUFDd0I7NEJBQU9sQixXQUFVOzRCQUFNQyxPQUFPO2dDQUFDa0IsWUFBWTs0QkFBSTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0EvQ1NqQztLQUFBQTtBQWlEVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LnRzeD9mZjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNoYXRSZXF1ZXN0IH0gZnJvbSBcIi4uL3NyYy9jaGF0LmxpYlwiO1xuXG5cbmZ1bmN0aW9uIENoYXQoKSB7XG4gICAgY29uc3QgbW9kZWxBcnJheSA9IFtcImdwdC00XCIsIFwiZ3B0LTQtMDMxNFwiLCBcImdwdC00LTMya1wiLCBcImdwdC00LTMyay0wMzE0XCIsIFwiZ3B0LTMuNS10dXJib1wiLCBcImdwdC0zLjUtdHVyYm8tMDMwMVwiXTtcbiAgICBjb25zdCBbc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcERvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XG5cbiAgICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICAgIFxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGF3YWl0IGNoYXRSZXF1ZXN0KG1vZGVsLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgcHgtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIiBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1JVwiLCBtYXJnaW5Ub3A6XCI1JVwifX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMTUwJVwifX0+U2VsZWN0IE1vZGVsPC9oMT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImJ0biBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9kZWxzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dWwgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIj5cbiAgICAgICAgICAgICAgICAgICAge21vZGVsQXJyYXkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhldmVudCkgPT4geyBzZXRNb2RlbChpdGVtKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW19PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIiBvbkNoYW5nZT17b25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyJVwifX0+7ZmV7J24PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2hhdFJlcXVlc3QiLCJDaGF0IiwibW9kZWxBcnJheSIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wRG93biIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibW9kZWwiLCJzZXRNb2RlbCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWVzdCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaDEiLCJmb250U2l6ZSIsImxhYmVsIiwidGFiSW5kZXgiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJldmVudCIsImEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});