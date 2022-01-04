"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-payment-intent";
exports.ids = ["pages/api/create-payment-intent"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/create-payment-intent.js":
/*!************************************************!*\
  !*** ./src/pages/api/create-payment-intent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPaymentIntent)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n// src/pages/api/create-payment-intent.js\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_SECRET_KEY);\nasync function createPaymentIntent(req, res) {\n    // const { items } = req.body\n    const paymentIntent = await stripe.paymentIntents.create({\n        amount: 1400,\n        currency: 'usd',\n        automatic_payment_methods: {\n            enabled: true\n        }\n    });\n    res.send({\n        clientSecret: paymentIntent.client_secret\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxFQUF5QztBQUNkO0FBRTNCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0QsK0NBQU0sQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQjtBQUU1QyxlQUFlQyxtQkFBbUIsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMzRCxFQUE2QjtJQUM3QixLQUFLLENBQUNDLGFBQWEsR0FBRyxLQUFLLENBQUNQLE1BQU0sQ0FBQ1EsY0FBYyxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUN4REMsTUFBTSxFQUFFLElBQUk7UUFDWkMsUUFBUSxFQUFFLENBQUs7UUFDZkMseUJBQXlCLEVBQUUsQ0FBQztZQUMxQkMsT0FBTyxFQUFFLElBQUk7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVEUCxHQUFHLENBQUNRLElBQUksQ0FBQyxDQUFDO1FBQ1JDLFlBQVksRUFBRVIsYUFBYSxDQUFDUyxhQUFhO0lBQzNDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGF5bWVudHMtc3lzdGVtLy4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQuanM/Zjc5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC5qc1xuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9TRUNSRVRfS0VZKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYXltZW50SW50ZW50KHJlcSwgcmVzKSB7XG4gIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHJlcS5ib2R5XG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICBhbW91bnQ6IDE0MDAsXG4gICAgY3VycmVuY3k6ICd1c2QnLFxuICAgIGF1dG9tYXRpY19wYXltZW50X21ldGhvZHM6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgfSlcblxuICByZXMuc2VuZCh7XG4gICAgY2xpZW50U2VjcmV0OiBwYXltZW50SW50ZW50LmNsaWVudF9zZWNyZXQsXG4gIH0pXG59Il0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX1NFQ1JFVF9LRVkiLCJjcmVhdGVQYXltZW50SW50ZW50IiwicmVxIiwicmVzIiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJhdXRvbWF0aWNfcGF5bWVudF9tZXRob2RzIiwiZW5hYmxlZCIsInNlbmQiLCJjbGllbnRTZWNyZXQiLCJjbGllbnRfc2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/create-payment-intent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-payment-intent.js"));
module.exports = __webpack_exports__;

})();