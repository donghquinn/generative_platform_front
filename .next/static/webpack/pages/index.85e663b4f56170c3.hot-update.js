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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat */ \"./components/chat.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const modelArray = [\n        \"gpt-4\",\n        \"gpt-4-0314\",\n        \"gpt-4-32k\",\n        \"gpt-4-32k-0314\",\n        \"gpt-3.5-turbo\",\n        \"gpt-3.5-turbo-0301\"\n    ];\n    const [showDropdown, setShowDropDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-2 px-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown\",\n                        style: {\n                            marginBottom: \"5%\",\n                            marginTop: \"5%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                style: {\n                                    fontSize: \"150%\"\n                                },\n                                children: \"Select Model\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                tabIndex: 0,\n                                className: \"btn m-1\",\n                                children: \"Models\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                tabIndex: 0,\n                                className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                children: modelArray.map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: (event)=>{\n                                                setModel(item);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: item\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, item, false, {\n                                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    model: model\n                }, void 0, false, {\n                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"iEqK3zv9yGk2VCSKpfWNnjca71A=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVGO0FBRzFDLFNBQVNFLE9BQU87O0lBQ1osTUFBTUMsYUFBYTtRQUFDO1FBQVM7UUFBYztRQUFhO1FBQWtCO1FBQWlCO0tBQXFCO0lBQ2hILE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFJdEQsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUtsQyxxQkFDSSw4REFBQ1E7a0JBQ0QsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7d0JBQVdDLE9BQU87NEJBQUNDLGNBQWM7NEJBQU1DLFdBQVU7d0JBQUk7OzBDQUNoRSw4REFBQ0M7Z0NBQUdILE9BQU87b0NBQUNJLFVBQVU7Z0NBQU07MENBQUc7Ozs7OzswQ0FDL0IsOERBQUNDO2dDQUFNQyxVQUFVO2dDQUFHUCxXQUFVOzBDQUFVOzs7Ozs7MENBR3hDLDhEQUFDUTtnQ0FBR0QsVUFBVTtnQ0FBR1AsV0FBVTswQ0FDdEJOLFdBQVdlLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29DQUN0QixxQkFDSSw4REFBQ1g7a0RBQ0csNEVBQUNZOzRDQUFHQyxTQUFTLENBQUNDLFFBQVU7Z0RBQUVmLFNBQVNZOzRDQUFLO3NEQUNwQyw0RUFBQ0k7MERBQUdKOzs7Ozs7Ozs7Ozt1Q0FGRkE7Ozs7O2dDQUtsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSUosOERBQUNsQix3REFBUUE7b0JBQUNLLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQXJDU0o7S0FBQUE7QUF1Q1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC50c3g/ZmYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjaGF0UmVxdWVzdCB9IGZyb20gXCIuLi9zcmMvY2hhdC5saWJcIjtcbmltcG9ydCBTZW5kQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0XCI7XG5cblxuZnVuY3Rpb24gQ2hhdCgpIHtcbiAgICBjb25zdCBtb2RlbEFycmF5ID0gW1wiZ3B0LTRcIiwgXCJncHQtNC0wMzE0XCIsIFwiZ3B0LTQtMzJrXCIsIFwiZ3B0LTQtMzJrLTAzMTRcIiwgXCJncHQtMy41LXR1cmJvXCIsIFwiZ3B0LTMuNS10dXJiby0wMzAxXCJdO1xuICAgIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gXG5cblxuICAgIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG5cblxuICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yIHB4LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiNSVcIiwgbWFyZ2luVG9wOlwiNSVcIn19PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2ZvbnRTaXplOiBcIjE1MCVcIn19PlNlbGVjdCBNb2RlbDwvaDE+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vZGVsc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IG1lbnUgcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCI+XG4gICAgICAgICAgICAgICAgICAgIHttb2RlbEFycmF5Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZXZlbnQpID0+IHsgc2V0TW9kZWwoaXRlbSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbmRDaGF0IG1vZGVsPXttb2RlbH0+PC9TZW5kQ2hhdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2VuZENoYXQiLCJDaGF0IiwibW9kZWxBcnJheSIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wRG93biIsIm1vZGVsIiwic2V0TW9kZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImgxIiwiZm9udFNpemUiLCJsYWJlbCIsInRhYkluZGV4IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJvbkNsaWNrIiwiZXZlbnQiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});