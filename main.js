(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/balamb/front-gate/src/index.ts":
/*!*************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/index.ts ***!
  \*************************************************************************************/
/*! exports provided: balambFrontGateRoutes, BalambFrontGateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_balamb_front_gate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/balamb-front-gate.module */ "../../libs/balamb/front-gate/src/lib/balamb-front-gate.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "balambFrontGateRoutes", function() { return _lib_balamb_front_gate_module__WEBPACK_IMPORTED_MODULE_0__["balambFrontGateRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BalambFrontGateModule", function() { return _lib_balamb_front_gate_module__WEBPACK_IMPORTED_MODULE_0__["BalambFrontGateModule"]; });




/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.html":
/*!***************************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/arrival/arrival.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h1>On Approach</h1>\n  \n</main>"

/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.scss":
/*!***************************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/arrival/arrival.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/arrival/arrival.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ArrivalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalComponent", function() { return ArrivalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrivalComponent = /** @class */ (function () {
    function ArrivalComponent() {
    }
    ArrivalComponent.prototype.ngOnInit = function () { };
    ArrivalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foundation-arrival',
            template: __webpack_require__(/*! ./arrival.component.html */ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.html"),
            styles: [__webpack_require__(/*! ./arrival.component.scss */ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArrivalComponent);
    return ArrivalComponent;
}());



/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/balamb-front-gate.module.ts":
/*!************************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/balamb-front-gate.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: balambFrontGateRoutes, BalambFrontGateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balambFrontGateRoutes", function() { return balambFrontGateRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalambFrontGateModule", function() { return BalambFrontGateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gate_gate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gate/gate.component */ "../../libs/balamb/front-gate/src/lib/gate/gate.component.ts");
/* harmony import */ var _arrival_arrival_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrival/arrival.component */ "../../libs/balamb/front-gate/src/lib/arrival/arrival.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var balambFrontGateRoutes = [
    {
        path: '',
        component: _arrival_arrival_component__WEBPACK_IMPORTED_MODULE_4__["ArrivalComponent"]
    },
    {
        path: 'gate',
        component: _gate_gate_component__WEBPACK_IMPORTED_MODULE_3__["GateComponent"]
    }
];
var BalambFrontGateModule = /** @class */ (function () {
    function BalambFrontGateModule() {
    }
    BalambFrontGateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(balambFrontGateRoutes)],
            declarations: [_gate_gate_component__WEBPACK_IMPORTED_MODULE_3__["GateComponent"], _arrival_arrival_component__WEBPACK_IMPORTED_MODULE_4__["ArrivalComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BalambFrontGateModule);
    return BalambFrontGateModule;
}());



/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/gate/gate.component.html":
/*!*********************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/gate/gate.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <h1>Welcome to Foundation</h1>\n  \n</main>"

/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/gate/gate.component.scss":
/*!*********************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/gate/gate.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../libs/balamb/front-gate/src/lib/gate/gate.component.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/balamb/front-gate/src/lib/gate/gate.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: GateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateComponent", function() { return GateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GateComponent = /** @class */ (function () {
    function GateComponent() {
    }
    GateComponent.prototype.ngOnInit = function () { };
    GateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foundation-gate',
            template: __webpack_require__(/*! ./gate.component.html */ "../../libs/balamb/front-gate/src/lib/gate/gate.component.html"),
            styles: [__webpack_require__(/*! ./gate.component.scss */ "../../libs/balamb/front-gate/src/lib/gate/gate.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GateComponent);
    return GateComponent;
}());



/***/ }),

/***/ "../../libs/foundation/src/index.ts":
/*!******************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/foundation/src/index.ts ***!
  \******************************************************************************/
/*! exports provided: EXPORTED, FoundationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_foundation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/foundation.module */ "../../libs/foundation/src/lib/foundation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPORTED", function() { return _lib_foundation_module__WEBPACK_IMPORTED_MODULE_0__["EXPORTED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FoundationModule", function() { return _lib_foundation_module__WEBPACK_IMPORTED_MODULE_0__["FoundationModule"]; });




/***/ }),

/***/ "../../libs/foundation/src/lib/foundation.module.ts":
/*!**********************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/foundation/src/lib/foundation.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EXPORTED, FoundationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORTED", function() { return EXPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationModule", function() { return FoundationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select/select.component */ "../../libs/foundation/src/lib/select/select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EXPORTED = [
    _select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"],
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: EXPORTED,
            exports: EXPORTED
        })
    ], FoundationModule);
    return FoundationModule;
}());



/***/ }),

/***/ "../../libs/foundation/src/lib/select/select.component.html":
/*!******************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/foundation/src/lib/select/select.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"showList\" (click)=\"closeDropdown()\"></div>\n<fieldset style=\"position: relative;\">\n  <!-- Hide Native Controls -->\n  <label *ngFor=\"let option of options; let f = first; let l = last; let i = index;\" class=\"hidden\">\n    <!-- single select -->\n    <input type=\"radio\" [name]=\"name\" #radio\n      [value]=\"option.value\"\n      (keydown.arrowdown)=\"keydown(true)\"\n      (keydown.arrowup)=\"keydown(true)\"\n      (keydown.arrowright)=\"keydown(true)\"\n      (keydown.arrowleft)=\"keydown(true)\"\n      (keydown.enter)=\"keydown(false); click(false);\"\n      (keydown.tab)=\"keydown(false); click(false);\"\n      (keydown.shift.tab)=\"keydown(false); click(false);\"\n      (click)=\"click(!showList); select(option, i);\"\n      (focus)=\"focused = option\"\n    >\n    <div>\n      {{ option.display }}\n    </div>\n  </label>\n\n  <!-- Custom Dropdown Trigger -->\n  <div class=\"selected\" (click)=\"showList = !showList; focusRadios();\">{{ selectedOpt?.display ? selectedOpt.display : placeholder }}</div>\n  \n  <!-- Custom Dropdown List -->\n  <section *ngIf=\"showList\">\n    <div *ngFor=\"let option of options; let i = index;\"\n      class=\"foundation__options\"\n      [class.selected-option]=\"option.selected\"\n      (click)=\"click(!showList); select(option, i); selectNative(i);\">\n      {{ option.display }}\n    </div>\n  </section>\n</fieldset>"

/***/ }),

/***/ "../../libs/foundation/src/lib/select/select.component.scss":
/*!******************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/foundation/src/lib/select/select.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n\nfieldset {\n  border: none;\n  padding: none;\n  margin: none; }\n\nsection {\n  position: absolute;\n  border: 1px solid black;\n  overflow: scroll;\n  background: white;\n  width: 100%;\n  box-sizing: border-box; }\n\n.hidden {\n  position: absolute;\n  left: -9999px; }\n\n.selected {\n  border: 1px solid black;\n  border-bottom: 2px solid black;\n  padding: 0.5rem 1rem; }\n\n.foundation__options:hover {\n  background: #ccc;\n  transition: 300ms; }\n\n.selected-option {\n  color: #FC0;\n  background: #333; }\n\n.selected-option:hover {\n    background: #333; }\n"

/***/ }),

/***/ "../../libs/foundation/src/lib/select/select.component.ts":
/*!****************************************************************************************************!*\
  !*** /Users/535441984/code/personal/foundation/libs/foundation/src/lib/select/select.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Radio Select Control
 * 👍 Completed Features
 * 👍 Open and Close if group is blurred
 *
 * 👎 Todo Features
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.placeholder = 'Select...';
        this.showList = false;
        this._keydown = false;
    }
    SelectComponent.prototype.keydown = function (selected) {
        this.showList = selected;
        this._keydown = true;
        if (selected) {
            this.showList = true;
        }
    };
    SelectComponent.prototype.click = function (selected) {
        // prevents keydowns (up/down) from triggering this
        if (!this._keydown) {
            this.showList = selected;
        }
        this._keydown = false;
    };
    SelectComponent.prototype.select = function (opt, index) {
        if (this.selectedOpt) {
            this.selectedOpt.selected = false;
        }
        this.selectedOpt = opt;
        this.selectedOpt.selected = true;
        this._index = index;
    };
    // close when overlay is clicked
    SelectComponent.prototype.closeDropdown = function () {
        this.showList = false;
    };
    // clicking the custom dropdown also selects the respective native control
    SelectComponent.prototype.selectNative = function (index) {
        if (this.radios) {
            var radios = this.radios.toArray();
            radios[index].nativeElement.focus();
            radios[index].nativeElement.checked = true;
        }
    };
    // required so that clicking on the trigger allows navigation via keyboard input
    SelectComponent.prototype.focusRadios = function () {
        var radios = this.radios.toArray();
        if (this._index) {
            radios[this._index].nativeElement.focus();
        }
        else {
            radios[0].nativeElement.focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('radio'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SelectComponent.prototype, "radios", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foundation-select',
            template: __webpack_require__(/*! ./select.component.html */ "../../libs/foundation/src/lib/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "../../libs/foundation/src/lib/select/select.component.scss")]
        })
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@foundation/balamb/admin": [
		"../../libs/balamb/admin/src/lib/balamb-admin.module.ts",
		"foundation-balamb-admin"
	],
	"@foundation/balamb/garden": [
		"../../libs/balamb/garden/src/lib/balamb-garden.module.ts",
		"foundation-balamb-garden"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"\">Driveway</button>\n<button routerLink=\"/gate\">Gate</button>\n<button routerLink=\"/balamb-garden/help\">Help</button>\n<button routerLink=\"/balamb-garden/training\">Training</button>\n<button routerLink=\"/balamb-garden/social\">Social</button>\n<button routerLink=\"/balamb-garden/profile\">Profile</button>\n<foundation-select [options]=\"opts\" name=\"temp\"></foundation-select>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'foundation';
        this.opts = [
            { value: 'test1', display: 'testing1' },
            { value: 'test2', display: 'testing2' },
            { value: 'test3', display: 'testing3' },
            { value: 'test4', display: 'testing4' },
            { value: 'test5', display: 'testing5' },
            { value: 'test6', display: 'testing6' },
            { value: 'test7', display: 'testing7' },
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foundation-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nrwl_nx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _foundation_balamb_front_gate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @foundation/balamb/front-gate */ "../../libs/balamb/front-gate/src/index.ts");
/* harmony import */ var _foundation_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @foundation/foundation */ "../../libs/foundation/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _nrwl_nx__WEBPACK_IMPORTED_MODULE_3__["NxModule"].forRoot(),
                _foundation_balamb_front_gate__WEBPACK_IMPORTED_MODULE_5__["BalambFrontGateModule"],
                _foundation_foundation__WEBPACK_IMPORTED_MODULE_6__["FoundationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', children: _foundation_balamb_front_gate__WEBPACK_IMPORTED_MODULE_5__["balambFrontGateRoutes"] },
                    {
                        path: 'balamb-garden',
                        loadChildren: '@foundation/balamb/garden#BalambGardenModule'
                    },
                    {
                        path: 'balamb-admin',
                        loadChildren: '@foundation/balamb/admin#BalambAdminModule'
                    }
                ], {
                    initialNavigation: 'enabled'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/535441984/code/personal/foundation/apps/balamb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map