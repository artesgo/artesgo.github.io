(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./d3/d3.module": [
		"./src/app/d3/d3.module.ts",
		"d3-d3-module"
	],
	"./firestore/firestore.module": [
		"./src/app/firestore/firestore.module.ts",
		"firestore-firestore-module"
	],
	"./js/js.module": [
		"./src/app/js/js.module.ts",
		"js-js-module"
	],
	"./web/web.module": [
		"./src/app/web/web.module.ts",
		"web-web-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angular works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular/angular.component.scss":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL2FuZ3VsYXIvYW5ndWxhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.scss */ "./src/app/angular/angular.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-container\">\n  <button\n    class=\"fdn-skip\"\n    [class.accessible]=\"!showSkip\"\n    (focus)=\"showSkip = true\"\n    (blur)=\"showSkip = false\"\n    (click)=\"skipToMain()\">\n    Skip to Main Content\n  </button>\n  <button (click)=\"navOpen = !navOpen\" [attr.aria-expanded]=\"navOpen\">\n    <svg width=\"24px\" height=\"24px\">\n      <rect\n        x=\"0\"\n        y=\"0\"\n        [attr.width]=\"24\"\n        [attr.height]=\"24\"\n        [attr.fill]=\"'#000'\">\n      </rect>\n      <rect [@nav]=\"navOpen\"\n        x=\"3\"\n        y=\"3\"\n        [attr.width]=\"navOpen ? 7 : 2\"\n        [attr.height]=\"18\"\n        [attr.fill]=\"'#FC0'\">\n      </rect>\n    </svg>\n    <span class=\"accessible\">navigation</span>\n  </button>\n  <button (click)=\"userSession()\">User</button>\n</div>\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" [opened]=\"navOpen\">\n    <nav>\n      <a href=\"#\" routerLink=\"/github\">Github</a>\n      <a href=\"#\" routerLink=\"/js\">Javascript</a>\n      <a href=\"#\" routerLink=\"/web\">Web</a>\n      <a href=\"#\" routerLink=\"/typescript\">Typescript</a>\n      <a href=\"#\" routerLink=\"/angular\">Angular</a>\n      <a href=\"#\" routerLink=\"/chess\">Chess</a>\n      <a href=\"#\" routerLink=\"/trading\">Trading</a>\n      <a href=\"#\" routerLink=\"/d3\">D3</a>\n    </nav>\n  </mat-drawer>\n  <mat-drawer-content>\n    <header>\n      <h1 #title tabindex=\"-1\">{{ page }}</h1>\n    </header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-drawer-content>\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  display: flex;\n  flex-direction: column;\n  margin-top: 4rem; }\n  nav a {\n    margin: 8px; }\n  .button-container {\n  position: fixed;\n  z-index: 10;\n  width: 100%; }\n  @media (max-width: 512px) {\n    .button-container {\n      position: relative; } }\n  .button-container button {\n    background: none;\n    border: none;\n    height: 24px;\n    margin: 8px; }\n  .button-container .fdn-skip {\n    position: fixed;\n    width: 100%;\n    background: rgba(255, 185, 0, 0.5); }\n  header {\n  display: flex; }\n  main {\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGVzZ28vRG9jdW1lbnRzL2dpdGh1Yi9mZG4vYXBwcy9mZG4vc3JjL3N0eWxlcy9fbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSxXQVJFLEVBQUE7RUFZVjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVyxFQUFBO0VDaEJYO0lEYUo7TUFLUSxrQkFBa0IsRUFBQSxFQWV6QjtFQXBCRDtJQVNRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVcsRUFBQTtFQVpuQjtJQWdCUSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtDQUFrQyxFQUFBO0VBSTFDO0VBQ0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoiYXBwcy9mZG4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfbWVkaWEnO1xuXG4kdW5pdDogOHB4O1xuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuXG4gICAgYSB7XG4gICAgICAgIG1hcmdpbjogJHVuaXQ7XG4gICAgfVxufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgfVxuXG4gICAgLmZkbi1za2lwIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4NSwgMCwgMC41KTtcbiAgICB9XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxubWFpbiB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG4iLCJAbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.page = "Git";
        this.showSkip = false;
        this.navOpen = false;
    }
    AppComponent.prototype.skipToMain = function () {
        this.title.nativeElement.focus();
    };
    AppComponent.prototype.userSession = function () {
        this.dialog.open(_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], {
            width: '250px'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "title", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "fdn-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('nav', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 2 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 6 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 6 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ width: 2 }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var artesgo_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! artesgo-foundation */ "../../node_modules/artesgo-foundation/fesm5/artesgo-foundation.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chess/chess.component */ "./src/app/chess/chess.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "../../node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "../../node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "../../node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"],
                _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_7__["TypescriptComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_8__["AngularComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _chess_chess_component__WEBPACK_IMPORTED_MODULE_10__["ChessComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                artesgo_foundation__WEBPACK_IMPORTED_MODULE_3__["FoundationModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typescript/typescript.component */ "./src/app/typescript/typescript.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chess/chess.component */ "./src/app/chess/chess.component.ts");








var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/trading', pathMatch: 'full' },
                    { path: 'js', loadChildren: './js/js.module#JsModule' },
                    { path: 'd3', loadChildren: './d3/d3.module#D3Module' },
                    { path: 'web', loadChildren: './web/web.module#WebModule' },
                    { path: 'trading', loadChildren: './firestore/firestore.module#FirestoreModule' },
                    { path: 'github', component: _github_github_component__WEBPACK_IMPORTED_MODULE_3__["GithubComponent"] },
                    { path: 'typescript', component: _typescript_typescript_component__WEBPACK_IMPORTED_MODULE_4__["TypescriptComponent"] },
                    { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__["AngularComponent"] },
                    { path: 'chess', component: _chess_chess_component__WEBPACK_IMPORTED_MODULE_7__["ChessComponent"], data: { title: 'Chess' } },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/chess/cell.ts":
/*!*******************************!*\
  !*** ./src/app/chess/cell.ts ***!
  \*******************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());



/***/ }),

/***/ "./src/app/chess/chess.component.html":
/*!********************************************!*\
  !*** ./src/app/chess/chess.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <fdn-grid [cols]=\"8\" [rows]=\"8\" [columnSizes]=\"colSizes\" [rowSizes]=\"rowSizes\">\n    <ng-container *ngFor=\"let c of cells; trackBy: trackIndex;\">\n      <div fdn-grid-item [row]=\"c.row\" [col]=\"c.col\" [debug]=\"false\" class=\"rel\"\n        [ngClass]=\"(c.col + c.row) % 2 === 0 ? 'white': 'black'\"\n        [class.selected]=\"c.selected\"\n        [class.inRange]=\"c.inRange\">\n        <button class=\"abs\" (click)=\"select(c)\">\n          <ng-container *ngIf=\"c.piece\">\n            {{ c.piece.name }}  {{ getCol(c.piece.col) }}{{ getRow(c.piece.row) }}\n          </ng-container>\n        </button>\n      </div>\n    </ng-container>\n  </fdn-grid>\n</section>\n\n{{ selectedCell | json }}"

/***/ }),

/***/ "./src/app/chess/chess.component.scss":
/*!********************************************!*\
  !*** ./src/app/chess/chess.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding-bottom: 100%; }\n\nfdn-grid {\n  margin: 0 auto; }\n\n.rel {\n  position: relative; }\n\n.abs {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: none;\n  border: none; }\n\n.black {\n  background-color: #888;\n  border-radius: 8px; }\n\n.selected {\n  background: #FC0; }\n\n.inRange {\n  background: #CF0; }\n\n.container {\n  border: 5px solid black;\n  max-width: 600px; }\n\n.moveable {\n  background: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvY2hlc3MvY2hlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL2NoZXNzL2NoZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTsgLy8gbWFrZXMgYSBzcXVhcmUgOk9cbn1cblxuZmRuLWdyaWQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI0ZDMDtcbn1cblxuLmluUmFuZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNDRjA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5tb3ZlYWJsZSB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chess/chess.component.ts":
/*!******************************************!*\
  !*** ./src/app/chess/chess.component.ts ***!
  \******************************************/
/*! exports provided: ChessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chess */ "./src/app/chess/chess.ts");



var ChessComponent = /** @class */ (function () {
    function ChessComponent() {
        this.whiteTurn = true;
        this.attack = false;
        this.rowSizes = [];
        this.colSizes = [];
        this.colHeader = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }
    ChessComponent.prototype.ngOnInit = function () {
        // initialize chess board
        this.chess = new _chess__WEBPACK_IMPORTED_MODULE_2__["Chess"]();
        this.cells = this.chess.initializeBoard();
        // setup css grid sizes
        for (var i = 0; i < 8; i++) {
            this.rowSizes = this.rowSizes.concat([{ value: 1, unit: "fr" }]);
            this.colSizes = this.colSizes.concat([{ value: 1, unit: "fr" }]);
        }
    };
    ChessComponent.prototype.select = function (cell) {
        if (cell.inRange) {
            // move the selected piece
            this.selectedCell.piece.col = cell.col;
            this.selectedCell.piece.row = cell.row;
            // assign piece to other cell
            cell.piece = this.selectedCell.piece; // if other cell had enemy piece, it would get overridden, removing it from game
            this.selectedCell.piece = null;
            // remove selected state from cell
            this.selectedCell.selected = false;
            this.whiteTurn = !this.whiteTurn;
            this.dehighlightMoves();
        }
        else {
            if (this.selectedCell) {
                this.selectedCell.selected = false;
            }
            this.selectedCell = cell;
            if (this.selectedCell.piece) {
                this.dehighlightMoves();
                if (this.whiteTurn && !this.selectedCell.piece.black) {
                    this.selectedCell.selected = true;
                    this.highlightMoves();
                }
                else if (!this.whiteTurn && this.selectedCell.piece.black) {
                    this.selectedCell.selected = true;
                    this.highlightMoves();
                }
            }
            else {
                this.dehighlightMoves();
            }
        }
    };
    ChessComponent.prototype.highlightMoves = function () {
        var _this = this;
        _chess__WEBPACK_IMPORTED_MODULE_2__["Chess"].getMoves(this.selectedCell.piece, this.cells).map(function (move) {
            var _row = move[0], _col = move[1];
            _this.cells = _this.cells.map(function (cell) {
                if (cell.row === _row && cell.col === _col) {
                    cell.inRange = true;
                }
                return cell;
            });
        });
    };
    ChessComponent.prototype.dehighlightMoves = function () {
        this.cells = this.cells.map(function (cell) {
            cell.inRange = false;
            return cell;
        });
    };
    ChessComponent.prototype.trackIndex = function (cell) {
        return cell.index;
    };
    ChessComponent.prototype.getCol = function (col) {
        return this.colHeader[col - 1];
    };
    ChessComponent.prototype.getRow = function (row) {
        return Math.abs(row - 9);
    };
    ChessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-chess',
            template: __webpack_require__(/*! ./chess.component.html */ "./src/app/chess/chess.component.html"),
            styles: [__webpack_require__(/*! ./chess.component.scss */ "./src/app/chess/chess.component.scss")]
        })
    ], ChessComponent);
    return ChessComponent;
}());



/***/ }),

/***/ "./src/app/chess/chess.ts":
/*!********************************!*\
  !*** ./src/app/chess/chess.ts ***!
  \********************************/
/*! exports provided: Chess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/app/chess/piece.ts");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/app/chess/cell.ts");


var Chess = /** @class */ (function () {
    function Chess() {
        this.rookMoveSet = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        this.bishMoveSet = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
        this.knightMoveSet = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
        this.cells = [];
    }
    Chess.inRange = function (num, min, max) {
        return num >= min && num <= max;
    };
    Chess.move = function (row, col, piece, cells) {
        var moved = false;
        var _moves = Chess.getMoves(piece, cells);
        _moves.map(function (cell) {
            var _row = cell[0], _col = cell[1];
            if (_row === row && _col === col) {
                piece.row = row;
                piece.col = col;
                moved = true;
                if (piece.name === 'pawn' && piece.moves.length > 1) {
                    piece.firstMove();
                }
            }
        });
        return moved;
    };
    Chess.getMoves = function (piece, cells) {
        var _cells = [];
        if (piece) {
            if (piece.finite) {
                var _loop_1 = function (m) {
                    var _x = m[0], _y = m[1];
                    // check if out of bound
                    if (Chess.inRange(_x + piece.row, 1, 8) && Chess.inRange(_y + piece.col, 1, 8)) {
                        var move = [_x + piece.row, _y + piece.col];
                        var x_1 = move[0], y_1 = move[1];
                        var found = cells.find(function (cell) { return cell.row === x_1 && cell.col === y_1 && !!cell.piece; });
                        if (!found || found.piece.black !== piece.black) {
                            _cells.push(move);
                        }
                    }
                };
                for (var _i = 0, _a = piece.moves; _i < _a.length; _i++) {
                    var m = _a[_i];
                    _loop_1(m);
                }
            }
            else {
                var _loop_2 = function (m) {
                    // get the directions for the move
                    var _x = m[0], _y = m[1];
                    // initialize the origin for this move set
                    var mx = piece.row;
                    var my = piece.col;
                    var done = false;
                    while (!done) {
                        mx += _x;
                        my += _y;
                        if (Chess.inRange(mx, 1, 8) && Chess.inRange(my, 1, 8)) {
                            // check if cell already has a piece
                            var found = cells.find(function (cell) {
                                if (cell.row === mx && cell.col === my && !!cell.piece) {
                                    return !!cell;
                                }
                            });
                            if (found) {
                                done = true;
                                // add pieces of opposite team, then done
                                if (found.piece.black !== piece.black) {
                                    _cells.push([mx, my]);
                                }
                            }
                            else {
                                _cells.push([mx, my]);
                            }
                        }
                        else {
                            done = true;
                        }
                    }
                };
                for (var _b = 0, _c = piece.moves; _b < _c.length; _b++) {
                    var m = _c[_b];
                    _loop_2(m);
                }
            }
        }
        return _cells;
    };
    Chess.prototype.initializeBoard = function () {
        var _this = this;
        this.initializeBlack().map(function (piece) { return _this.addCell(piece.row, piece.col, piece); });
        this.initializeBlank().map(function (cell) { return _this.addCell(cell.row, cell.col); });
        this.initializeWhite().map(function (piece) { return _this.addCell(piece.row, piece.col, piece); });
        return this.cells;
    };
    Chess.prototype.initializeBlank = function () {
        var cells = [];
        for (var i = 3; i < 7; i++) {
            for (var j = 1; j < 9; j++) {
                var cell = new _cell__WEBPACK_IMPORTED_MODULE_1__["Cell"]();
                cell.row = i;
                cell.col = j;
                cells.push(cell);
            }
        }
        return cells;
    };
    Chess.prototype.initializeBlack = function () {
        var r1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('rook', this.rookMoveSet, 1, 1, false, true);
        var r2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('rook', this.rookMoveSet, 1, 8, false, true);
        var k1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('knight', this.knightMoveSet, 1, 2, true, true);
        var k2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('knight', this.knightMoveSet, 1, 7, true, true);
        var b1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('bishop', this.bishMoveSet, 1, 3, false, true);
        var b2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('bishop', this.bishMoveSet, 1, 6, false, true);
        var qn = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('queen', this.rookMoveSet.concat(this.bishMoveSet), 1, 4, false, true);
        var kn = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('king', this.rookMoveSet.concat(this.bishMoveSet), 1, 5, true, true);
        var pawns = [];
        for (var i = 1; i < 9; i++) {
            pawns.push(new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('pawn', [[1, 0], [2, 0]], 2, i, true, true));
        }
        return [r1, k1, b1, qn, kn, b2, k2, r2].concat(pawns);
    };
    Chess.prototype.initializeWhite = function () {
        var r1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('rook', this.rookMoveSet, 8, 1, false, false);
        var r2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('rook', this.rookMoveSet, 8, 8, false, false);
        var k1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('knight', this.knightMoveSet, 8, 2, true, false);
        var k2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('knight', this.knightMoveSet, 8, 7, true, false);
        var b1 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('bishop', this.bishMoveSet, 8, 3, false, false);
        var b2 = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('bishop', this.bishMoveSet, 8, 6, false, false);
        var qn = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('queen', this.rookMoveSet.concat(this.bishMoveSet), 8, 4, false, false);
        var kn = new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('king', this.rookMoveSet.concat(this.bishMoveSet), 8, 5, true, false);
        var pawns = [];
        for (var i = 1; i < 9; i++) {
            pawns.push(new _piece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]('pawn', [[-1, 0], [-2, 0]], 7, i, true, false));
        }
        return pawns.concat([r1, k1, b1, qn, kn, b2, k2, r2]);
    };
    Chess.prototype.addCell = function (row, col, piece) {
        if (piece === void 0) { piece = null; }
        var cell = new _cell__WEBPACK_IMPORTED_MODULE_1__["Cell"]();
        cell.index = this.cells.length;
        cell.row = row;
        cell.col = col;
        cell.piece = piece;
        this.cells.push(cell);
    };
    return Chess;
}());



/***/ }),

/***/ "./src/app/chess/piece.ts":
/*!********************************!*\
  !*** ./src/app/chess/piece.ts ***!
  \********************************/
/*! exports provided: ChessPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPiece", function() { return ChessPiece; });
var ChessPiece = /** @class */ (function () {
    function ChessPiece(name, moves, row, col, finite, // if move is infinite or finite
    black) {
        this.name = name;
        this.moves = moves;
        this.row = row;
        this.col = col;
        this.finite = finite;
        this.black = black;
        this.first = true;
    }
    ChessPiece.prototype.firstMove = function () {
        this.moves.pop();
    };
    return ChessPiece;
}());



/***/ }),

/***/ "./src/app/github/github.component.html":
/*!**********************************************!*\
  !*** ./src/app/github/github.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Install git command line tool</h2>\n\n<ol>\n  <li>Download <a href=\"https://git-scm.com/downloads\" target=\"_blank\">git command line</a></li>\n</ol>\n\n<h2>Prerequisites: signup for an email</h2>\n\n<ol>\n  <li>Go to <a href=\"https://www.github.com\" target=\"_blank\">Github</a></li>\n  <li>Sign up with your email</li>\n  <li>Capcha test</li>\n  <li>Subscription level (free is fine)</li>\n  <li>Verify your email, remember your passwords</li>\n</ol>\n\n<h2>Code Storage</h2>\n\n<ol>\n  <li>Log into your <a href=\"https://www.github.com\" target=\"_blank\">Github</a> account</li>\n  <li>Start a new Repository</li>\n  <li>Give your project a name: foundation</li>\n  <li>leave other options at default</li>\n  <li>you will get a repository url, copy it</li>\n  <li>you'll need a folder to store your code</li>\n  <li>once you have a folder</li>\n  <li>open a command window and type</li>\n</ol>\n\n<ul class=\"code\">\n  <li>\n    <code>git clone https://github.com/user/project.git</code>\n  </li>\n</ul>\n<div>If you have an existing project</div>\n<ul class=\"code\">\n  <li>\n    <code>git remote add origin https://github.com/user/project.git</code>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/github/github.component.scss":
/*!**********************************************!*\
  !*** ./src/app/github/github.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL2dpdGh1Yi9naXRodWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/github/github.component.ts":
/*!********************************************!*\
  !*** ./src/app/github/github.component.ts ***!
  \********************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var GithubComponent = /** @class */ (function () {
    function GithubComponent() {
    }
    GithubComponent.prototype.ngOnInit = function () {
    };
    GithubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-github',
            template: __webpack_require__(/*! ./github.component.html */ "./src/app/github/github.component.html"),
            styles: [__webpack_require__(/*! ./github.component.scss */ "./src/app/github/github.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "../../node_modules/@angular/fire/auth/index.js");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.user = angularFireAuth.authState;
    }
    /* Sign up */
    AuthenticationService.prototype.signUp = function (email, password) {
        this.angularFireAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            console.log('Successfully signed up!', res);
        })
            .catch(function (error) {
            console.log('Something is wrong:', error.message);
        });
    };
    /* Sign in */
    AuthenticationService.prototype.signIn = function (email, password) {
        this.angularFireAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (res) {
            console.log('Successfully signed in!');
        })
            .catch(function (err) {
            console.log('Something is wrong:', err.message);
        });
    };
    /* Sign out */
    AuthenticationService.prototype.signOut = function () {
        this.angularFireAuth.auth.signOut();
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a *ngFor=\"let route of routes\" [routerLink]=\"route.route\">{{route.label}}</a>\n</nav>"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvc2hhcmVkL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUEiLCJmaWxlIjoiYXBwcy9mZG4vc3JjL2FwcC9zaGFyZWQvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NavComponent.prototype, "routes", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");





var EXPORTS = [
    _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: EXPORTS.slice(),
            exports: EXPORTS.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>Signin</h1>\n\n  <hr>\n\n  <form class=\"login-form\" [formGroup]=\"login\">\n    <mat-form-field>\n      <input matInput placeholder=\"email\" formControlName=\"email\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"password\" formControlName=\"password\">\n    </mat-form-field>\n    <button (click)=\"signin()\">Login</button>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/signin/signin.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, dialogRef, data, auth) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.auth = auth;
        this.login = fb.group({
            email: this.email,
            password: this.password,
        });
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function () {
        var email;
        var password;
        this.auth.signIn(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/typescript/typescript.component.html":
/*!******************************************************!*\
  !*** ./src/app/typescript/typescript.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  typescript works!\n</p>\n"

/***/ }),

/***/ "./src/app/typescript/typescript.component.scss":
/*!******************************************************!*\
  !*** ./src/app/typescript/typescript.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL3R5cGVzY3JpcHQvdHlwZXNjcmlwdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/typescript/typescript.component.ts":
/*!****************************************************!*\
  !*** ./src/app/typescript/typescript.component.ts ***!
  \****************************************************/
/*! exports provided: TypescriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptComponent", function() { return TypescriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TypescriptComponent = /** @class */ (function () {
    function TypescriptComponent() {
    }
    TypescriptComponent.prototype.ngOnInit = function () {
    };
    TypescriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-typescript',
            template: __webpack_require__(/*! ./typescript.component.html */ "./src/app/typescript/typescript.component.html"),
            styles: [__webpack_require__(/*! ./typescript.component.scss */ "./src/app/typescript/typescript.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypescriptComponent);
    return TypescriptComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCVDFxptcLPj4U01ZYtOI7-2Z7C9VVSDbw",
        authDomain: "derpa-1fcce.firebaseapp.com",
        databaseURL: "https://derpa-1fcce.firebaseio.com",
        projectId: "derpa-1fcce",
        storageBucket: "derpa-1fcce.appspot.com",
        messagingSenderId: "756492956773",
        appId: "1:756492956773:web:aa3bdaba3c65db24"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/artesgo/Documents/github/fdn/apps/fdn/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map