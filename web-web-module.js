(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-web-module"],{

/***/ "./src/app/web/css/css.component.html":
/*!********************************************!*\
  !*** ./src/app/web/css/css.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  css works!\n</p>\n"

/***/ }),

/***/ "./src/app/web/css/css.component.scss":
/*!********************************************!*\
  !*** ./src/app/web/css/css.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL3dlYi9jc3MvY3NzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/web/css/css.component.ts":
/*!******************************************!*\
  !*** ./src/app/web/css/css.component.ts ***!
  \******************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CssComponent = /** @class */ (function () {
    function CssComponent() {
    }
    CssComponent.prototype.ngOnInit = function () {
    };
    CssComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-css',
            template: __webpack_require__(/*! ./css.component.html */ "./src/app/web/css/css.component.html"),
            styles: [__webpack_require__(/*! ./css.component.scss */ "./src/app/web/css/css.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CssComponent);
    return CssComponent;
}());



/***/ }),

/***/ "./src/app/web/html/html.component.html":
/*!**********************************************!*\
  !*** ./src/app/web/html/html.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  html works!\n</p>\n"

/***/ }),

/***/ "./src/app/web/html/html.component.scss":
/*!**********************************************!*\
  !*** ./src/app/web/html/html.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL3dlYi9odG1sL2h0bWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/web/html/html.component.ts":
/*!********************************************!*\
  !*** ./src/app/web/html/html.component.ts ***!
  \********************************************/
/*! exports provided: HtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlComponent", function() { return HtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HtmlComponent = /** @class */ (function () {
    function HtmlComponent() {
    }
    HtmlComponent.prototype.ngOnInit = function () {
    };
    HtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-html',
            template: __webpack_require__(/*! ./html.component.html */ "./src/app/web/html/html.component.html"),
            styles: [__webpack_require__(/*! ./html.component.scss */ "./src/app/web/html/html.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HtmlComponent);
    return HtmlComponent;
}());



/***/ }),

/***/ "./src/app/web/web-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/web/web-routing.module.ts ***!
  \*******************************************/
/*! exports provided: WebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRoutingModule", function() { return WebRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _html_html_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/html.component */ "./src/app/web/html/html.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/css.component */ "./src/app/web/css/css.component.ts");
/* harmony import */ var _web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web.component */ "./src/app/web/web.component.ts");






var routes = [
    {
        path: '', component: _web_component__WEBPACK_IMPORTED_MODULE_5__["WebComponent"], children: [
            { path: '', component: _html_html_component__WEBPACK_IMPORTED_MODULE_3__["HtmlComponent"] },
            { path: 'css', component: _css_css_component__WEBPACK_IMPORTED_MODULE_4__["CssComponent"] },
        ]
    }
];
var WebRoutingModule = /** @class */ (function () {
    function WebRoutingModule() {
    }
    WebRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WebRoutingModule);
    return WebRoutingModule;
}());



/***/ }),

/***/ "./src/app/web/web.component.html":
/*!****************************************!*\
  !*** ./src/app/web/web.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fdn-nav [routes]=\"routes\"></fdn-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/web/web.component.scss":
/*!****************************************!*\
  !*** ./src/app/web/web.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL3dlYi93ZWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/web/web.component.ts":
/*!**************************************!*\
  !*** ./src/app/web/web.component.ts ***!
  \**************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var WebComponent = /** @class */ (function () {
    function WebComponent() {
        this.routes = [
            { route: '/web', label: 'HTML' },
            { route: '/web/css', label: 'CSS' },
        ];
    }
    WebComponent.prototype.ngOnInit = function () {
    };
    WebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-web',
            template: __webpack_require__(/*! ./web.component.html */ "./src/app/web/web.component.html"),
            styles: [__webpack_require__(/*! ./web.component.scss */ "./src/app/web/web.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebComponent);
    return WebComponent;
}());



/***/ }),

/***/ "./src/app/web/web.module.ts":
/*!***********************************!*\
  !*** ./src/app/web/web.module.ts ***!
  \***********************************/
/*! exports provided: WebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebModule", function() { return WebModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-routing.module */ "./src/app/web/web-routing.module.ts");
/* harmony import */ var _html_html_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/html.component */ "./src/app/web/html/html.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/css.component */ "./src/app/web/css/css.component.ts");
/* harmony import */ var _web_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web.component */ "./src/app/web/web.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    WebModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _html_html_component__WEBPACK_IMPORTED_MODULE_4__["HtmlComponent"],
                _css_css_component__WEBPACK_IMPORTED_MODULE_5__["CssComponent"],
                _web_component__WEBPACK_IMPORTED_MODULE_6__["WebComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _web_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ]
        })
    ], WebModule);
    return WebModule;
}());



/***/ })

}]);
//# sourceMappingURL=web-web-module.js.map