"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/laundry/domain/user",{

/***/ "./src/constant/laundry/SVCLaundryUserAttributes.ts":
/*!**********************************************************!*\
  !*** ./src/constant/laundry/SVCLaundryUserAttributes.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_sunny_develop_thepsyentist_docs_yarn_virtual_next_virtual_7cc2b3fb7e_0_cache_next_npm_13_4_3_db62749baa_65f13be060_zip_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/__virtual__/next-virtual-7cc2b3fb7e/0/cache/next-npm-13.4.3-db62749baa-65f13be060.zip/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"../../.yarn/__virtual__/next-virtual-7cc2b3fb7e/0/cache/next-npm-13.4.3-db62749baa-65f13be060.zip/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes */ \"./src/constant/attributes.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_sunny_develop_thepsyentist_docs_yarn_virtual_next_virtual_7cc2b3fb7e_0_cache_next_npm_13_4_3_db62749baa_65f13be060_zip_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar SVCOrder = [_attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].id, {\n  name: 'email',\n  required: false,\n  type: 'string',\n  description: '사용자의 이메일 입니다.\\n*사용하지는 않습니다.'\n}, {\n  name: 'username',\n  required: true,\n  type: 'string',\n  description: '사용자의 id 입니다. \\n해당 유저가 배송기사인 경우는 dv07'\n}, {\n  name: 'names.fullname',\n  required: true,\n  type: 'string',\n  description: '사용자의 이름 입니다. \\n해당 유저가 배송기사인 경우는 홍길동'\n}, {\n  name: 'roles',\n  required: true,\n  type: 'UserRoles',\n  description: '고객, 배송기사 , 지사 , 점주, 일반 관리자, 최고 관리자 나누기 위한 역할 필드입니다. \\n*설명 아래 참고'\n}, _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updated, _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].created, _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].status, _objectSpread(_objectSpread({}, _attributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userData), {}, {\n  type: 'LaundryUser',\n  description: '사용자의 고유정보를 나타냅니다.'\n})];\nvar userData = [{\n  name: 'containerId',\n  required: false,\n  type: 'string',\n  description: '해당 유저가 고객인 경우 이용하는 함의 id값에 대한 정보입니다.'\n}, {\n  name: 'userUniqueId',\n  required: false,\n  type: 'string',\n  description: '해당 유저가 고객인 경우 고객의 고유 Id입니다.'\n}, {\n  name: 'onComplexId',\n  required: false,\n  type: 'string[]',\n  description: '해당 유저가 배송기사인 경우 맡고 있는 단지의 id값들에 대한 정보입니다.'\n}, {\n  name: 'onContainerIdList',\n  required: false,\n  type: 'string[]',\n  description: '해당 유저가 배송기사인 경우 맡고 있는 보관함의 id값들에 대한 정보입니다.'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  root: SVCOrder,\n  userData: userData\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnQvbGF1bmRyeS9TVkNMYXVuZHJ5VXNlckF0dHJpYnV0ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFNQyxRQUFxQixHQUFHLENBQzVCRCxzREFENEIsRUFFNUI7RUFBRUcsSUFBSSxFQUFFLE9BQVI7RUFBaUJDLFFBQVEsRUFBRSxLQUEzQjtFQUFrQ0MsSUFBSSxFQUFFLFFBQXhDO0VBQWtEQyxXQUFXLEVBQUU7QUFBL0QsQ0FGNEIsRUFHNUI7RUFBRUgsSUFBSSxFQUFFLFVBQVI7RUFBb0JDLFFBQVEsRUFBRSxJQUE5QjtFQUFvQ0MsSUFBSSxFQUFFLFFBQTFDO0VBQW9EQyxXQUFXLEVBQUU7QUFBakUsQ0FINEIsRUFJNUI7RUFBRUgsSUFBSSxFQUFFLGdCQUFSO0VBQTBCQyxRQUFRLEVBQUUsSUFBcEM7RUFBMENDLElBQUksRUFBRSxRQUFoRDtFQUEwREMsV0FBVyxFQUFFO0FBQXZFLENBSjRCLEVBSzVCO0VBQUVILElBQUksRUFBRSxPQUFSO0VBQWlCQyxRQUFRLEVBQUUsSUFBM0I7RUFBaUNDLElBQUksRUFBRSxXQUF2QztFQUFvREMsV0FBVyxFQUFFO0FBQWpFLENBTDRCLEVBTTVCTiwyREFONEIsRUFPNUJBLDJEQVA0QixFQVE1QkEsMERBUjRCLGtDQVN2QkEsNERBVHVCO0VBU0ZLLElBQUksRUFBRSxhQVRKO0VBU21CQyxXQUFXLEVBQUU7QUFUaEMsR0FBOUI7QUFZQSxJQUFNSSxRQUFxQixHQUFHLENBQzVCO0VBQUVQLElBQUksRUFBRSxhQUFSO0VBQXVCQyxRQUFRLEVBQUUsS0FBakM7RUFBd0NDLElBQUksRUFBRSxRQUE5QztFQUF3REMsV0FBVyxFQUFFO0FBQXJFLENBRDRCLEVBRTVCO0VBQUVILElBQUksRUFBRSxjQUFSO0VBQXdCQyxRQUFRLEVBQUUsS0FBbEM7RUFBeUNDLElBQUksRUFBRSxRQUEvQztFQUF5REMsV0FBVyxFQUFFO0FBQXRFLENBRjRCLEVBRzVCO0VBQUVILElBQUksRUFBRSxhQUFSO0VBQXVCQyxRQUFRLEVBQUUsS0FBakM7RUFBd0NDLElBQUksRUFBRSxVQUE5QztFQUEwREMsV0FBVyxFQUFFO0FBQXZFLENBSDRCLEVBSTVCO0VBQUVILElBQUksRUFBRSxtQkFBUjtFQUE2QkMsUUFBUSxFQUFFLEtBQXZDO0VBQThDQyxJQUFJLEVBQUUsVUFBcEQ7RUFBZ0VDLFdBQVcsRUFBRTtBQUE3RSxDQUo0QixDQUE5QjtBQU9BLCtEQUFlO0VBQ2JLLElBQUksRUFBRVYsUUFETztFQUViUyxRQUFRLEVBQUVBO0FBRkcsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnQvbGF1bmRyeS9TVkNMYXVuZHJ5VXNlckF0dHJpYnV0ZXMudHM/Y2JkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUgfSBmcm9tICdAZG9jcy91aS9zcmMvdHlwZXMvbGlzdC50eXBlJztcbmltcG9ydCBhdHRyaWJ1dGVzIGZyb20gJy4uL2F0dHJpYnV0ZXMnO1xuXG5jb25zdCBTVkNPcmRlcjogQXR0cmlidXRlW10gPSBbXG4gIGF0dHJpYnV0ZXMuaWQsXG4gIHsgbmFtZTogJ2VtYWlsJywgcmVxdWlyZWQ6IGZhbHNlLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICfsgqzsmqnsnpDsnZgg7J2066mU7J28IOyeheuLiOuLpC5cXG4q7IKs7Jqp7ZWY7KeA64qUIOyViuyKteuLiOuLpC4nIH0sXG4gIHsgbmFtZTogJ3VzZXJuYW1lJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ+yCrOyaqeyekOydmCBpZCDsnoXri4jri6QuIFxcbu2VtOuLuSDsnKDsoIDqsIAg67Cw7Iah6riw7IKs7J24IOqyveyasOuKlCBkdjA3JyB9LFxuICB7IG5hbWU6ICduYW1lcy5mdWxsbmFtZScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICfsgqzsmqnsnpDsnZgg7J2066aEIOyeheuLiOuLpC4gXFxu7ZW064u5IOycoOyggOqwgCDrsLDshqHquLDsgqzsnbgg6rK97Jqw64qUIO2Zjeq4uOuPmScgfSxcbiAgeyBuYW1lOiAncm9sZXMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ1VzZXJSb2xlcycsIGRlc2NyaXB0aW9uOiAn6rOg6rCdLCDrsLDshqHquLDsgqwgLCDsp4DsgqwgLCDsoJDso7wsIOydvOuwmCDqtIDrpqzsnpAsIOy1nOqzoCDqtIDrpqzsnpAg64KY64iE6riwIOychO2VnCDsl63tlaAg7ZWE65Oc7J6F64uI64ukLiBcXG4q7ISk66qFIOyVhOuemCDssLjqs6AnIH0sXG4gIGF0dHJpYnV0ZXMudXBkYXRlZCxcbiAgYXR0cmlidXRlcy5jcmVhdGVkLFxuICBhdHRyaWJ1dGVzLnN0YXR1cyxcbiAgeyAuLi5hdHRyaWJ1dGVzLnVzZXJEYXRhLCB0eXBlOiAnTGF1bmRyeVVzZXInLCBkZXNjcmlwdGlvbjogJ+yCrOyaqeyekOydmCDqs6DsnKDsoJXrs7Trpbwg64KY7YOA64OF64uI64ukLicgfSxcbl07XG5cbmNvbnN0IHVzZXJEYXRhOiBBdHRyaWJ1dGVbXSA9IFtcbiAgeyBuYW1lOiAnY29udGFpbmVySWQnLCByZXF1aXJlZDogZmFsc2UsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ+2VtOuLuSDsnKDsoIDqsIAg6rOg6rCd7J24IOqyveyasCDsnbTsmqntlZjripQg7ZWo7J2YIGlk6rCS7JeQIOuMgO2VnCDsoJXrs7TsnoXri4jri6QuJyB9LFxuICB7IG5hbWU6ICd1c2VyVW5pcXVlSWQnLCByZXF1aXJlZDogZmFsc2UsIHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ+2VtOuLuSDsnKDsoIDqsIAg6rOg6rCd7J24IOqyveyasCDqs6DqsJ3snZgg6rOg7JygIElk7J6F64uI64ukLicgfSxcbiAgeyBuYW1lOiAnb25Db21wbGV4SWQnLCByZXF1aXJlZDogZmFsc2UsIHR5cGU6ICdzdHJpbmdbXScsIGRlc2NyaXB0aW9uOiAn7ZW064u5IOycoOyggOqwgCDrsLDshqHquLDsgqzsnbgg6rK97JqwIOunoeqzoCDsnojripQg64uo7KeA7J2YIGlk6rCS65Ok7JeQIOuMgO2VnCDsoJXrs7TsnoXri4jri6QuJyB9LFxuICB7IG5hbWU6ICdvbkNvbnRhaW5lcklkTGlzdCcsIHJlcXVpcmVkOiBmYWxzZSwgdHlwZTogJ3N0cmluZ1tdJywgZGVzY3JpcHRpb246ICftlbTri7kg7Jyg7KCA6rCAIOuwsOyGoeq4sOyCrOyduCDqsr3smrAg66eh6rOgIOyeiOuKlCDrs7TqtIDtlajsnZggaWTqsJLrk6Tsl5Ag64yA7ZWcIOygleuztOyeheuLiOuLpC4nIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJvb3Q6IFNWQ09yZGVyLFxuICB1c2VyRGF0YTogdXNlckRhdGEsXG59O1xuIl0sIm5hbWVzIjpbImF0dHJpYnV0ZXMiLCJTVkNPcmRlciIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwidHlwZSIsImRlc2NyaXB0aW9uIiwidXBkYXRlZCIsImNyZWF0ZWQiLCJzdGF0dXMiLCJ1c2VyRGF0YSIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constant/laundry/SVCLaundryUserAttributes.ts\n"));

/***/ })

});