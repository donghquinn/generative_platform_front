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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_chat_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/chat.lib */ \"./src/chat.lib.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Chat() {\n    _s();\n    const modelArray = [\n        \"gpt-4\",\n        \"gpt-4-0314\",\n        \"gpt-4-32k\",\n        \"gpt-4-32k-0314\",\n        \"gpt-3.5-turbo\",\n        \"gpt-3.5-turbo-0301\"\n    ];\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onChange = (e)=>setMessage(e.target.value);\n    const request = async ()=>{\n        await (0,_src_chat_lib__WEBPACK_IMPORTED_MODULE_2__.chatRequest)();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        tabIndex: 0,\n                        className: \"btn m-1\",\n                        children: \"Click\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        tabIndex: 0,\n                        className: \"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52\",\n                        children: modelArray.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    onClick: (event)=>{\n                                        setModel(item);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: item\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 33\n                                }, this)\n                            }, item, false, {\n                                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Type here\",\n                className: \"input input-bordered w-full max-w-xs\",\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                style: {\n                    marginLeft: \"2%\"\n                },\n                children: \"확인\"\n            }, void 0, false, {\n                fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimdonghyun/Desktop/codes/imlab/gpt-front/pages/chat.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Chat, \"gEq5DDRc3IHkFBqT0wjZwch/moM=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNFO0FBRzlDLFNBQVNHLE9BQU87O0lBQ1osTUFBTUMsYUFBYTtRQUFDO1FBQVM7UUFBYztRQUFhO1FBQWtCO1FBQWlCO0tBQXFCO0lBRWhILE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUE7SUFFdEMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUVsQyxNQUFNUSxXQUFXLENBQUNDLElBQU1KLFdBQVdJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUVqRCxNQUFNQyxVQUFVLFVBQVc7UUFDdkIsTUFBTVgsMERBQVdBO0lBQ3JCO0lBQ0FGLGdEQUFTQSxDQUFDLElBQU0sQ0FFaEI7SUFFQSxxQkFDSSw4REFBQ2M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxVQUFVO3dCQUFHRixXQUFVO2tDQUFVOzs7Ozs7a0NBQ3hDLDhEQUFDRzt3QkFBR0QsVUFBVTt3QkFBR0YsV0FBVTtrQ0FDdEJYLFdBQVdlLEdBQUcsQ0FBQyxDQUFDQyxPQUFTOzRCQUN0QixxQkFDSSw4REFBQ047MENBQ0csNEVBQUNPO29DQUFHQyxTQUFTLENBQUNDLFFBQVU7d0NBQUNmLFNBQVNZO29DQUFLOzhDQUNuQyw0RUFBQ0k7a0RBQUdKOzs7Ozs7Ozs7OzsrQkFGRkE7Ozs7O3dCQUtsQjs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDSztnQkFBTUMsTUFBSztnQkFBT0MsYUFBWTtnQkFBWVosV0FBVTtnQkFBdUNOLFVBQVVBOzs7Ozs7MEJBQ3RHLDhEQUFDbUI7Z0JBQU9iLFdBQVU7Z0JBQU1jLE9BQU87b0JBQUNDLFlBQVk7Z0JBQUk7MEJBQUc7Ozs7Ozs7Ozs7OztBQUcvRDtHQW5DUzNCO0tBQUFBO0FBcUNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQudHN4P2ZmMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2hhdFJlcXVlc3QgfSBmcm9tIFwiLi4vc3JjL2NoYXQubGliXCI7XG5cblxuZnVuY3Rpb24gQ2hhdCgpIHtcbiAgICBjb25zdCBtb2RlbEFycmF5ID0gW1wiZ3B0LTRcIiwgXCJncHQtNC0wMzE0XCIsIFwiZ3B0LTQtMzJrXCIsIFwiZ3B0LTQtMzJrLTAzMTRcIiwgXCJncHQtMy41LXR1cmJvXCIsIFwiZ3B0LTMuNS10dXJiby0wMzAxXCJdO1xuXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGF3YWl0IGNoYXRSZXF1ZXN0KClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJidG4gbS0xXCI+Q2xpY2s8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx1bCB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiPlxuICAgICAgICAgICAgICAgICAgICB7bW9kZWxBcnJheS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KGV2ZW50KSA9PiB7c2V0TW9kZWwoaXRlbSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtfTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiIG9uQ2hhbmdlPXtvbkNoYW5nZX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMiVcIn19Pu2ZleyduDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2hhdFJlcXVlc3QiLCJDaGF0IiwibW9kZWxBcnJheSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibW9kZWwiLCJzZXRNb2RlbCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWVzdCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwidGFiSW5kZXgiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsIm9uQ2xpY2siLCJldmVudCIsImEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInN0eWxlIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});