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

/***/ "./src/chat.recoil.ts":
/*!****************************!*\
  !*** ./src/chat.recoil.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chatRecoil\": function() { return /* binding */ chatRecoil; },\n/* harmony export */   \"requestSuccess\": function() { return /* binding */ requestSuccess; },\n/* harmony export */   \"responseRecoil\": function() { return /* binding */ responseRecoil; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n\nconst chatRecoil = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"chatRecoil\",\n    default: [\n        \"\"\n    ]\n});\nconst responseRecoil = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"responseRecoil\",\n    default: [\n        \"\"\n    ]\n});\nconst requestSuccess = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"requestSuccess\",\n    default: false\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hhdC5yZWNvaWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUV2QixNQUFNQyxhQUFhRCw0Q0FBSUEsQ0FBQztJQUMzQkUsS0FBSztJQUNMQyxTQUFTO1FBQUM7S0FBRztBQUNqQixHQUFHO0FBRUksTUFBTUMsaUJBQWlCSiw0Q0FBSUEsQ0FBRTtJQUNoQ0UsS0FBSztJQUNMQyxTQUFTO1FBQUM7S0FBRztBQUNqQixHQUFHO0FBRUksTUFBTUUsaUJBQWlCTCw0Q0FBSUEsQ0FBQztJQUMvQkUsS0FBSztJQUNMQyxTQUFTLEtBQUs7QUFDbEIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY2hhdC5yZWNvaWwudHM/YTdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xuXG5leHBvcnQgY29uc3QgY2hhdFJlY29pbCA9IGF0b20oe1xuICAgIGtleTogXCJjaGF0UmVjb2lsXCIsXG4gICAgZGVmYXVsdDogW1wiXCJdLFxufSk7XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZVJlY29pbCA9IGF0b20gKHtcbiAgICBrZXk6IFwicmVzcG9uc2VSZWNvaWxcIixcbiAgICBkZWZhdWx0OiBbXCJcIl0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RTdWNjZXNzID0gYXRvbSh7XG4gICAga2V5OiBcInJlcXVlc3RTdWNjZXNzXCIsXG4gICAgZGVmYXVsdDogZmFsc2UsXG59KTtcbiJdLCJuYW1lcyI6WyJhdG9tIiwiY2hhdFJlY29pbCIsImtleSIsImRlZmF1bHQiLCJyZXNwb25zZVJlY29pbCIsInJlcXVlc3RTdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/chat.recoil.ts\n"));

/***/ })

});