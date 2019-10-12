(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firestore-firestore-module"],{

/***/ "../../node_modules/artesgo-foundation/fesm5/artesgo-foundation.js":
/*!*******************************************************************************************************!*\
  !*** /Users/artesgo/Documents/github/fdn/node_modules/artesgo-foundation/fesm5/artesgo-foundation.js ***!
  \*******************************************************************************************************/
/*! exports provided: FoundationModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationModule", function() { return FoundationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GridItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this._rowSizes = [];
        this._columnSizes = [];
        this.style = {};
    }
    Object.defineProperty(GridComponent.prototype, "rowSizes", {
        set: /**
         * @param {?} rows
         * @return {?}
         */
        function (rows) {
            this._rowSizes = rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columnSizes", {
        set: /**
         * @param {?} cols
         * @return {?}
         */
        function (cols) {
            this._columnSizes = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "rows", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            /** @type {?} */
            var rows = "";
            for (var i = 0; i < val; i++) {
                rows = rows + " " + this.getSize(this._rowSizes, i);
            }
            rows = rows.trim();
            this.style = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.style, { 'grid-template-rows': rows });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "cols", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._cols = val;
            /** @type {?} */
            var cols = "";
            for (var i = 0; i < val; i++) {
                cols = cols + " " + this.getSize(this._columnSizes, i);
            }
            cols = cols.trim();
            this.style = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.style, { 'grid-template-columns': cols });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} arr
     * @param {?} col
     * @return {?}
     */
    GridComponent.prototype.getSize = /**
     * @param {?} arr
     * @param {?} col
     * @return {?}
     */
    function (arr, col) {
        return "" + (arr[col].value || 1) + arr[col].unit;
    };
    GridComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'fdn-grid',
                    template: "<div class=\"grid\" [ngStyle]=\"style\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host{display:block}.grid{display:grid;display:-ms-grid}"]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return []; };
    GridComponent.propDecorators = {
        rowSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        columnSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return GridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GridItemDirective = /** @class */ (function () {
    function GridItemDirective(el) {
        this.el = el;
    }
    Object.defineProperty(GridItemDirective.prototype, "row", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._row = val;
            this.el.nativeElement.style.gridRow = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemDirective.prototype, "col", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._col = val;
            this.el.nativeElement.style.gridColumn = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemDirective.prototype, "rowSpan", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowSpan = val;
            this.el.nativeElement.style.gridRowEnd = this._row + val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemDirective.prototype, "colSpan", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._colSpan = val;
            this.el.nativeElement.style.gridColumnEnd = this._col + val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridItemDirective.prototype, "debug", {
        set: /**
         * @param {?} debug
         * @return {?}
         */
        function (debug) {
            if (debug) {
                this.el.nativeElement.style.border = '1px solid black';
                this.el.nativeElement.style.backgroundColor = this.randomRGB();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GridItemDirective.prototype.random = /**
     * @return {?}
     */
    function () {
        return Math.floor(Math.random() * 128) + 127;
    };
    /**
     * @return {?}
     */
    GridItemDirective.prototype.randomRGB = /**
     * @return {?}
     */
    function () {
        return "rgba(" + this.random() + ", " + this.random() + ", " + this.random() + ", 1)";
    };
    GridItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[fdn-grid-item]'
                },] }
    ];
    /** @nocollapse */
    GridItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    GridItemDirective.propDecorators = {
        row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        col: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        rowSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        colSpan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        debug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return GridItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED = [
    GridComponent,
    GridItemDirective,
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: EXPORTED,
                    exports: EXPORTED
                },] }
    ];
    return FoundationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=artesgo-foundation.js.map

/***/ }),

/***/ "./src/app/firestore.service.ts":
/*!**************************************!*\
  !*** ./src/app/firestore.service.ts ***!
  \**************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "../../node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var FirestoreService = /** @class */ (function () {
    function FirestoreService(db) {
        this.db = db;
    }
    FirestoreService.prototype.addDocument = function (collection, data) {
        var doc = this.db.collection(collection).doc(data.key);
        return doc.set(data);
    };
    FirestoreService.prototype.updateDocument = function (collection, data) {
        var doc = this.db.collection(collection).doc(data.key);
        delete data[data.key];
        return doc.update(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data));
    };
    FirestoreService.prototype.deleteDocument = function (collection, data) {
        var doc = this.db.collection(collection).doc(data.key);
        return doc.delete();
    };
    FirestoreService.prototype.collection = function (collection, user) {
        var _this = this;
        if (user) {
            return this.db.collection(collection, function (ref) { return ref.where('user', '==', user); })
                .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) { return _this.mapPayload(changes); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
    };
    /**
     * Get Specific Page from Layout
     * @param layout
     * @param pageName
     */
    FirestoreService.prototype.getPages = function (layout, pageName) {
        var _this = this;
        return this.db.collection('layouts').doc(layout).collection(pageName).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) { return _this.mapPayload(changes); }));
    };
    // appends document id to data
    FirestoreService.prototype.mapPayload = function (changes) {
        return changes.map(function (c) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.doc.id }, c.payload.doc.data());
        });
    };
    FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/firestore/firestore-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/firestore/firestore-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FirestoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreRoutingModule", function() { return FirestoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firestore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firestore.component */ "./src/app/firestore/firestore.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/firestore/trade/trade.component.ts");
/* harmony import */ var _portforia_portforia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portforia/portforia.component */ "./src/app/firestore/portforia/portforia.component.ts");






var routes = [
    {
        path: '', component: _firestore_component__WEBPACK_IMPORTED_MODULE_3__["FirestoreComponent"], children: [
            { path: '', component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_4__["TradeComponent"], data: { title: 'Trade Tracker' } },
            { path: 'portforia', component: _portforia_portforia_component__WEBPACK_IMPORTED_MODULE_5__["PortforiaComponent"], data: { title: 'Page Builder' } },
        ]
    }
];
var FirestoreRoutingModule = /** @class */ (function () {
    function FirestoreRoutingModule() {
    }
    FirestoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FirestoreRoutingModule);
    return FirestoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/firestore/firestore.component.html":
/*!****************************************************!*\
  !*** ./src/app/firestore/firestore.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fdn-nav [routes]=\"routes\"></fdn-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/firestore/firestore.component.scss":
/*!****************************************************!*\
  !*** ./src/app/firestore/firestore.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL2ZpcmVzdG9yZS9maXJlc3RvcmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/firestore/firestore.component.ts":
/*!**************************************************!*\
  !*** ./src/app/firestore/firestore.component.ts ***!
  \**************************************************/
/*! exports provided: FirestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreComponent", function() { return FirestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FirestoreComponent = /** @class */ (function () {
    function FirestoreComponent() {
        this.routes = [
            { route: '/firestore', label: 'Trades' },
            { route: '/firestore/portforia', label: 'Portfolio' },
        ];
    }
    FirestoreComponent.prototype.ngOnInit = function () {
    };
    FirestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-firestore',
            template: __webpack_require__(/*! ./firestore.component.html */ "./src/app/firestore/firestore.component.html"),
            styles: [__webpack_require__(/*! ./firestore.component.scss */ "./src/app/firestore/firestore.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirestoreComponent);
    return FirestoreComponent;
}());



/***/ }),

/***/ "./src/app/firestore/firestore.module.ts":
/*!***********************************************!*\
  !*** ./src/app/firestore/firestore.module.ts ***!
  \***********************************************/
/*! exports provided: FirestoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreModule", function() { return FirestoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _firestore_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firestore-routing.module */ "./src/app/firestore/firestore-routing.module.ts");
/* harmony import */ var _trade_aggregate_trade_aggregate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade-aggregate/trade-aggregate.component */ "./src/app/firestore/trade-aggregate/trade-aggregate.component.ts");
/* harmony import */ var _firestore_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firestore.component */ "./src/app/firestore/firestore.component.ts");
/* harmony import */ var _portforia_portforia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portforia/portforia.component */ "./src/app/firestore/portforia/portforia.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/firestore/trade/trade.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var artesgo_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! artesgo-foundation */ "../../node_modules/artesgo-foundation/fesm5/artesgo-foundation.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trade-adder/trade-adder.component */ "./src/app/firestore/trade-adder/trade-adder.component.ts");
/* harmony import */ var _trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trade-delete/trade-delete.component */ "./src/app/firestore/trade-delete/trade-delete.component.ts");
/* harmony import */ var _trade_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trade.pipe */ "./src/app/firestore/trade.pipe.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _trade_state_trade_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trade/+state/trade.reducer */ "./src/app/firestore/trade/+state/trade.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _trade_state_trade_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./trade/+state/trade.effects */ "./src/app/firestore/trade/+state/trade.effects.ts");



















var FirestoreModule = /** @class */ (function () {
    function FirestoreModule() {
    }
    FirestoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _firestore_component__WEBPACK_IMPORTED_MODULE_5__["FirestoreComponent"],
                _portforia_portforia_component__WEBPACK_IMPORTED_MODULE_6__["PortforiaComponent"],
                _trade_trade_component__WEBPACK_IMPORTED_MODULE_7__["TradeComponent"],
                _trade_aggregate_trade_aggregate_component__WEBPACK_IMPORTED_MODULE_4__["TradeAggregateComponent"],
                _trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_12__["TradeAdderComponent"],
                _trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_13__["TradeDeleteComponent"],
                _trade_pipe__WEBPACK_IMPORTED_MODULE_14__["TradePipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _firestore_routing_module__WEBPACK_IMPORTED_MODULE_3__["FirestoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                artesgo_foundation__WEBPACK_IMPORTED_MODULE_10__["FoundationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forFeature(_trade_state_trade_reducer__WEBPACK_IMPORTED_MODULE_16__["tradeFeature"], _trade_state_trade_reducer__WEBPACK_IMPORTED_MODULE_16__["tradeReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forFeature([_trade_state_trade_effects__WEBPACK_IMPORTED_MODULE_18__["TradeEffects"]]),
            ],
            entryComponents: [
                _trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_12__["TradeAdderComponent"],
                _trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_13__["TradeDeleteComponent"],
                _trade_aggregate_trade_aggregate_component__WEBPACK_IMPORTED_MODULE_4__["TradeAggregateComponent"],
            ],
        })
    ], FirestoreModule);
    return FirestoreModule;
}());



/***/ }),

/***/ "./src/app/firestore/grid.parser.ts":
/*!******************************************!*\
  !*** ./src/app/firestore/grid.parser.ts ***!
  \******************************************/
/*! exports provided: GridUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridUtils", function() { return GridUtils; });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/app/firestore/layout.ts");

var GridUtils = /** @class */ (function () {
    function GridUtils() {
    }
    GridUtils.parser = function (id, str) {
        var split = "*";
        var layout = new _layout__WEBPACK_IMPORTED_MODULE_0__["Layout"]();
        layout.id = id;
        layout.raw = str;
        var grid = str.substr(0, str.indexOf(split));
        if (grid) {
            var _a = grid.split(','), row = _a[0], rowspan = _a[1], col = _a[2], colspan = _a[3], type = _a[4], alignment = _a[5];
            var content = str.substr(str.indexOf(split) + 1);
            layout.row = Number.parseInt(row, 10);
            layout.rowspan = Number.parseInt(rowspan, 10);
            layout.col = Number.parseInt(col, 10);
            layout.colspan = Number.parseInt(colspan, 10);
            layout.content = content;
            layout.type = type; // optional
            layout.alignment = Number.parseInt(alignment, 10); // optional;
        }
        return layout;
    };
    return GridUtils;
}());



/***/ }),

/***/ "./src/app/firestore/layout.ts":
/*!*************************************!*\
  !*** ./src/app/firestore/layout.ts ***!
  \*************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
var Layout = /** @class */ (function () {
    function Layout() {
    }
    return Layout;
}());



/***/ }),

/***/ "./src/app/firestore/portforia/portforia.component.html":
/*!**************************************************************!*\
  !*** ./src/app/firestore/portforia/portforia.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fdn-grid [cols]=\"2\" [columnSizes]=\"[1,1]\" class=\"main\">\n    <div *ngFor=\"let cell of page$\" fdn-grid-item [debug]=\"false\" [col]=\"cell.col\" [row]=\"cell.row\">{{ cell.content }}</div>\n</fdn-grid>"

/***/ }),

/***/ "./src/app/firestore/portforia/portforia.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/firestore/portforia/portforia.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zkbi9zcmMvYXBwL2ZpcmVzdG9yZS9wb3J0Zm9yaWEvcG9ydGZvcmlhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/firestore/portforia/portforia.component.ts":
/*!************************************************************!*\
  !*** ./src/app/firestore/portforia/portforia.component.ts ***!
  \************************************************************/
/*! exports provided: PortforiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortforiaComponent", function() { return PortforiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grid_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid.parser */ "./src/app/firestore/grid.parser.ts");
/* harmony import */ var _portforia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portforia.service */ "./src/app/firestore/portforia/portforia.service.ts");




var PortforiaComponent = /** @class */ (function () {
    function PortforiaComponent(ls) {
        this.ls = ls;
        this.page$ = [];
    }
    PortforiaComponent.prototype.ngOnInit = function () {
        // this.fb.collection('layouts').pipe(
        //   switchMap((items: StoreDocument[]) => {
        //     const [page] = items;
        //     this.layout$ = items;
        //     return this.fb.getPages(page.key, 'pages');
        //   })
        // ).subscribe((layouts: StoreDocument[]) => {
        //   // layout retrieved as fields in document, which needs to be turned into array
        //   this.page$ = [];
        //   const [layout] = layouts;
        //   Object.keys(layout).map( key => {
        //     if (key !== 'key') {
        //       this.page$.push(GridUtils.parser(key, layout[key]));
        //     }
        //   })
        // }, (err) => {
        //   this.setData();
        // });
    };
    PortforiaComponent.prototype.setData = function () {
        var _this = this;
        var mock = {
            title: '1,1,1,1*this is a test',
            description: '1,1,2,1*this is the content for the test',
            image: '2,1,1,2,i*some more content to look at'
        };
        Object.keys(mock).map(function (key) {
            if (key !== 'key') {
                _this.page$.push(_grid_parser__WEBPACK_IMPORTED_MODULE_2__["GridUtils"].parser(key, mock[key]));
            }
        });
    };
    PortforiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-portforia',
            template: __webpack_require__(/*! ./portforia.component.html */ "./src/app/firestore/portforia/portforia.component.html"),
            styles: [__webpack_require__(/*! ./portforia.component.scss */ "./src/app/firestore/portforia/portforia.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_portforia_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], PortforiaComponent);
    return PortforiaComponent;
}());



/***/ }),

/***/ "./src/app/firestore/portforia/portforia.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/firestore/portforia/portforia.service.ts ***!
  \**********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firestore.service */ "./src/app/firestore.service.ts");



var LayoutService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayoutService, _super);
    function LayoutService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLECTION = 'layouts';
        return _this;
    }
    LayoutService.prototype.get = function (user) {
        return this.collection(this.COLLECTION, user.uid);
    };
    LayoutService.prototype.addLayout = function (layout) {
        this.addDocument(this.COLLECTION, layout);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}(_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]));



/***/ }),

/***/ "./src/app/firestore/trade-adder/trade-adder.component.html":
/*!******************************************************************!*\
  !*** ./src/app/firestore/trade-adder/trade-adder.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>Add A Position</h1>\n\n  <hr>\n\n  <form class=\"example-form\" [formGroup]=\"trade\">\n    <mat-form-field>\n      <input matInput placeholder=\"Ticker\" formControlName=\"ticker\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Current Price\" formControlName=\"price\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Shares\" formControlName=\"shares\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Commission\" formControlName=\"comm\">\n    </mat-form-field>\n    <button (click)=\"add()\">Add</button>\n  </form>\n</section>"

/***/ }),

/***/ "./src/app/firestore/trade-adder/trade-adder.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/firestore/trade-adder/trade-adder.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlLWFkZGVyL3RyYWRlLWFkZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QixFQUFBIiwiZmlsZSI6ImFwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlLWFkZGVyL3RyYWRlLWFkZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firestore/trade-adder/trade-adder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/firestore/trade-adder/trade-adder.component.ts ***!
  \****************************************************************/
/*! exports provided: TradeAdderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeAdderComponent", function() { return TradeAdderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var TradeAdderComponent = /** @class */ (function () {
    function TradeAdderComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TradeAdderComponent.prototype.ngOnInit = function () {
        this.priceCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        // TODO: set value to avg or ngrx stored value for ticker
        this.trade = this.fb.group({
            price: this.priceCtrl,
            ticker: this.tickerCtrl,
            comm: this.commCtrl,
            shares: this.sharesCtrl,
        });
    };
    TradeAdderComponent.prototype.add = function () {
        // TODO: Validate before close
        var trade = {
            shares: +this.trade.value.shares,
            price: +this.trade.value.price,
            commission: +this.trade.value.comm,
            ticker: this.trade.value.ticker,
        };
        this.dialogRef.close(trade);
    };
    TradeAdderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-trade-adder',
            template: __webpack_require__(/*! ./trade-adder.component.html */ "./src/app/firestore/trade-adder/trade-adder.component.html"),
            styles: [__webpack_require__(/*! ./trade-adder.component.scss */ "./src/app/firestore/trade-adder/trade-adder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TradeAdderComponent);
    return TradeAdderComponent;
}());



/***/ }),

/***/ "./src/app/firestore/trade-aggregate/trade-aggregate.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/firestore/trade-aggregate/trade-aggregate.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>{{ data.ticker.toUpperCase() }}</h1>\n\n  <hr>\n\n  <form class=\"example-form\" [formGroup]=\"priceForm\" *ngIf=\"data.invested > 0\">\n    <mat-form-field>\n      <input matInput placeholder=\"Current Price\" formControlName=\"price\">\n    </mat-form-field>\n  </form>\n\n  <div>\n    <span>Gain/Loss</span>\n    <span>{{ earnings | number: '1.2-2' }}</span>\n  </div>\n\n  <hr>\n  <div class=\"invested\">\n    <span>Invested</span>\n    <span *ngIf=\"data.invested > 0 else noInvested\">{{ data.invested }}</span>\n    <ng-template #noInvested>\n      <span>0</span>\n    </ng-template>\n  </div>\n  <div class=\"shares\">\n    <span>Shares</span>\n    <span>{{ data.shares }}</span>\n  </div>\n  <div class=\"average\">\n    <span>Average</span>\n    <span>{{ data.price }}</span>\n  </div>\n  <div class=\"commission\">\n    <span>Commission</span>\n    <span>{{ data.commission }}</span>\n  </div>\n\n  <hr>\n  <div class=\"total\">\n      <span>Total</span>\n      <span>{{ earnings - data.commission | number: '1.2-2' }}</span>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/firestore/trade-aggregate/trade-aggregate.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/firestore/trade-aggregate/trade-aggregate.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlLWFnZ3JlZ2F0ZS90cmFkZS1hZ2dyZWdhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUEiLCJmaWxlIjoiYXBwcy9mZG4vc3JjL2FwcC9maXJlc3RvcmUvdHJhZGUtYWdncmVnYXRlL3RyYWRlLWFnZ3JlZ2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/firestore/trade-aggregate/trade-aggregate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/firestore/trade-aggregate/trade-aggregate.component.ts ***!
  \************************************************************************/
/*! exports provided: TradeAggregateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeAggregateComponent", function() { return TradeAggregateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var TradeAggregateComponent = /** @class */ (function () {
    function TradeAggregateComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.earnings = 0;
    }
    TradeAggregateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        // TODO: set value to avg or ngrx stored value for ticker
        this.priceForm = this.fb.group({
            price: this.priceCtrl
        });
        this.priceForm.valueChanges.subscribe(function (change) {
            var amt = _this.data.shares * Number.parseFloat(change['price']);
            _this.earnings = amt - _this.data.invested;
        });
        if (this.data.shares === 0) {
            this.data.price = 0;
            this.earnings = this.data.invested + this.data.commission;
        }
        this.priceCtrl.setValue(this.data.price);
    };
    TradeAggregateComponent.prototype.round = function (num) {
        return (Math.round(num * 100) / 100);
    };
    TradeAggregateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-trade-aggregate',
            template: __webpack_require__(/*! ./trade-aggregate.component.html */ "./src/app/firestore/trade-aggregate/trade-aggregate.component.html"),
            styles: [__webpack_require__(/*! ./trade-aggregate.component.scss */ "./src/app/firestore/trade-aggregate/trade-aggregate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TradeAggregateComponent);
    return TradeAggregateComponent;
}());



/***/ }),

/***/ "./src/app/firestore/trade-delete/trade-delete.component.html":
/*!********************************************************************!*\
  !*** ./src/app/firestore/trade-delete/trade-delete.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>Add A Position</h1>\n\n  <hr>\n\n  <button class=\"secondary\" (click)=\"delete(false)\">Cancel</button>\n  <button class=\"primary\" (click)=\"delete(true)\">Delete</button>\n</section>"

/***/ }),

/***/ "./src/app/firestore/trade-delete/trade-delete.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/firestore/trade-delete/trade-delete.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlLWRlbGV0ZS90cmFkZS1kZWxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUEiLCJmaWxlIjoiYXBwcy9mZG4vc3JjL2FwcC9maXJlc3RvcmUvdHJhZGUtZGVsZXRlL3RyYWRlLWRlbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/firestore/trade-delete/trade-delete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/firestore/trade-delete/trade-delete.component.ts ***!
  \******************************************************************/
/*! exports provided: TradeDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDeleteComponent", function() { return TradeDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");



var TradeDeleteComponent = /** @class */ (function () {
    function TradeDeleteComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TradeDeleteComponent.prototype.ngOnInit = function () {
    };
    TradeDeleteComponent.prototype.delete = function (del) {
        this.dialogRef.close(del);
    };
    TradeDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-trade-delete',
            template: __webpack_require__(/*! ./trade-delete.component.html */ "./src/app/firestore/trade-delete/trade-delete.component.html"),
            styles: [__webpack_require__(/*! ./trade-delete.component.scss */ "./src/app/firestore/trade-delete/trade-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TradeDeleteComponent);
    return TradeDeleteComponent;
}());



/***/ }),

/***/ "./src/app/firestore/trade.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/firestore/trade.pipe.ts ***!
  \*****************************************/
/*! exports provided: TradePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradePipe", function() { return TradePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TradePipe = /** @class */ (function () {
    function TradePipe() {
    }
    TradePipe.prototype.transform = function (trades, ticker) {
        if (ticker === '') {
            return trades;
        }
        if (trades.length > 0) {
            return trades.filter(function (t) { return t.ticker === ticker; });
        }
    };
    TradePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'tradeFilter'
        })
    ], TradePipe);
    return TradePipe;
}());



/***/ }),

/***/ "./src/app/firestore/trade.ts":
/*!************************************!*\
  !*** ./src/app/firestore/trade.ts ***!
  \************************************/
/*! exports provided: TradeArgs, TradeDocument, TradeAggregate, mockTrades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeArgs", function() { return TradeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDocument", function() { return TradeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeAggregate", function() { return TradeAggregate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTrades", function() { return mockTrades; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var TradeArgs = /** @class */ (function () {
    function TradeArgs() {
    }
    return TradeArgs;
}());

var TradeDocument = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TradeDocument, _super);
    function TradeDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TradeDocument;
}(TradeArgs));

var TradeAggregate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TradeAggregate, _super);
    function TradeAggregate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TradeAggregate;
}(TradeArgs));

var mockTrades = [
    { key: '1', user: 'jon', timestamp: 1, shares: 10, price: 100, commission: 10, ticker: 'rbc' },
    { key: '2', user: 'jon', timestamp: 2, shares: 10, price: 110, commission: 10, ticker: 'rbc' },
];


/***/ }),

/***/ "./src/app/firestore/trade/+state/trade.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/firestore/trade/+state/trade.actions.ts ***!
  \*********************************************************/
/*! exports provided: TRADE_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRADE_ACTIONS", function() { return TRADE_ACTIONS; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var TRADE_ACTIONS = {
    TRADE_GET: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Get', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_ADD: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Add', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_UPD: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Upd', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_DEL: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Del', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_GET_SUCCESS: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Get Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_ADD_SUCCESS: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Add Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_UPD_SUCCESS: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Upd Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_DEL_SUCCESS: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Del Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    TRADE_ADD_FAILURE: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Add Failure'),
    TRADE_DEL_FAILURE: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Del Failure'),
    TRADE_UPD_FAILURE: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Trade] Upd Failure'),
};


/***/ }),

/***/ "./src/app/firestore/trade/+state/trade.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/firestore/trade/+state/trade.effects.ts ***!
  \*********************************************************/
/*! exports provided: TradeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeEffects", function() { return TradeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _trade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trade.service */ "./src/app/firestore/trade/trade.service.ts");
/* harmony import */ var _trade_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade.actions */ "./src/app/firestore/trade/+state/trade.actions.ts");







var TradeEffects = /** @class */ (function () {
    function TradeEffects(actions$, ts) {
        var _this = this;
        this.actions$ = actions$;
        this.ts = ts;
        this.getter$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_GET), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('user'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (user) {
                return _this.ts.get(user)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_GET_SUCCESS({ trades: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }));
            }));
        });
        this.deleter$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_DEL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('trade'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (trade) {
                return _this.ts.deleteTrade(trade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_DEL_SUCCESS({ trade: trade }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }));
            }));
        });
        this.updater$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_UPD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('trade'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (trade) {
                return _this.ts.updateTrade(trade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_UPD_SUCCESS({ trade: trade }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }));
            }));
        });
        this.adder$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('trade'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (trade) {
                return _this.ts.addTrade(trade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _trade_actions__WEBPACK_IMPORTED_MODULE_6__["TRADE_ACTIONS"].TRADE_ADD_SUCCESS({ trade: trade }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"]; }));
            }));
        });
    }
    TradeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _trade_service__WEBPACK_IMPORTED_MODULE_5__["TradeService"]])
    ], TradeEffects);
    return TradeEffects;
}());



/***/ }),

/***/ "./src/app/firestore/trade/+state/trade.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/firestore/trade/+state/trade.reducer.ts ***!
  \*********************************************************/
/*! exports provided: tradeFeature, initialState, tradeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradeFeature", function() { return tradeFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradeReducer", function() { return tradeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _trade_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade.actions */ "./src/app/firestore/trade/+state/trade.actions.ts");



var tradeFeature = 'trades';
var initialState = {
    trades: [],
    score: 0
};
var tradeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_trade_actions__WEBPACK_IMPORTED_MODULE_2__["TRADE_ACTIONS"].TRADE_GET_SUCCESS, function (state, _a) {
    var trades = _a.trades;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trades: trades.slice() }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_trade_actions__WEBPACK_IMPORTED_MODULE_2__["TRADE_ACTIONS"].TRADE_DEL_SUCCESS, function (state, _a) {
    var trade = _a.trade;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trades: state.trades.filter(function (t) { return t.key !== trade.key; }) }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_trade_actions__WEBPACK_IMPORTED_MODULE_2__["TRADE_ACTIONS"].TRADE_UPD_SUCCESS, function (state, _a) {
    var trade = _a.trade;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { trades: state.trades.map(function (t) {
            if (t.key === trade.key) {
                return trade;
            }
            return t;
        }) }));
}));


/***/ }),

/***/ "./src/app/firestore/trade/+state/trade.selectors.ts":
/*!***********************************************************!*\
  !*** ./src/app/firestore/trade/+state/trade.selectors.ts ***!
  \***********************************************************/
/*! exports provided: tradesFeature, tradesSelector, scoreSelector, tickerSelector, aggregator, aggregateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradesFeature", function() { return tradesFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tradesSelector", function() { return tradesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreSelector", function() { return scoreSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickerSelector", function() { return tickerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggregator", function() { return aggregator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggregateSelector", function() { return aggregateSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trade */ "./src/app/firestore/trade.ts");


var tradesFeature = function (state) { return state.trades; };
var tradesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tradesFeature, function (tf) { return tf.trades; });
var scoreSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tradesFeature, function (tf) { return tf.score; });
var tickerSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tradesSelector, function (trades, trade) { return trades.filter(function (t) {
    if (!trade || trade === undefined) {
        return t;
    }
    if (t.key === trade.key) {
        return t;
    }
}); });
function aggregator(trades) {
    var aggregated = [];
    var _loop_1 = function (trade) {
        var aggregate = aggregated.find(function (t) { return t.ticker === trade.ticker; });
        // aggregate does not exist, initialize it
        if (!aggregate) {
            aggregate = new _trade__WEBPACK_IMPORTED_MODULE_1__["TradeAggregate"]();
            aggregate.ticker = trade.ticker;
            aggregate.invested = 0;
            aggregate.shares = 0;
            aggregate.commission = 0;
            // only add to agg[] if it's new
            aggregated.push(aggregate);
        }
        aggregate.shares += trade.shares;
        aggregate.commission += trade.commission;
        if (trade.shares !== 0) {
            aggregate.invested += trade.price * trade.shares;
        }
        else {
            aggregate.invested += trade.price;
        }
        if (aggregate.shares !== 0) {
            var localPrice = Number.parseFloat(localStorage.getItem(aggregate.ticker));
            if (localPrice) {
                aggregate.current = localPrice;
            }
            aggregate.price = Math.round(aggregate.invested / aggregate.shares * 100) / 100;
        }
        else {
            // invert invested incase aggregate zero
            if (trades.filter(function (t) { return t.ticker === aggregate.ticker; }).length > 1) {
                aggregate.invested = -aggregate.invested;
            }
        }
    };
    for (var _i = 0, trades_1 = trades; _i < trades_1.length; _i++) {
        var trade = trades_1[_i];
        _loop_1(trade);
    }
    return aggregated;
}
var aggregateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(tradesSelector, function (trades) { return aggregator(trades); });


/***/ }),

/***/ "./src/app/firestore/trade/trade.component.html":
/*!******************************************************!*\
  !*** ./src/app/firestore/trade/trade.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n  <div class=\"flex-child\">\n    <h2>All Positions</h2>\n    <fdn-grid [cols]=\"4\" [columnSizes]=\"colSizes\" class=\"main\" (keydown)=\"navigate($event)\">\n      <!-- column header -->\n      <div fdn-grid-item [col]=\"1\" class=\"row\">\n        <div id=\"tic\">Ticker</div>\n        <div id=\"inv\">Invested</div>\n      </div>\n      <div fdn-grid-item [col]=\"2\" class=\"row\">\n        <div id=\"pri\">Price</div>\n        <div id=\"sha\">Shares</div>\n      </div>\n      <div fdn-grid-item [col]=\"3\" class=\"row\">\n        <div id=\"dat\">Date</div>\n        <div id=\"com\">Commission</div>\n      </div>\n      <div fdn-grid-item [col]=\"4\" class=\"row\">\n        <button (click)=\"add()\" class=\"col\">add<span class=\"accessible\"> Position</span></button>\n        <button *ngIf=\"consolidation.length > 1\"\n          (click)=\"performConsolidation(consolidation)\" class=\"col\">consolidate<span class=\"accessible\"> position</span></button>\n      </div>\n    \n      <!-- data -->\n      <ng-container *ngFor=\"let t of trade$ | async | tradeFilter: consolidating as trades; let row = index; trackBy: trackByFn;\">\n        <ng-template #rowMarker><span class=\"accessible\">row {{ row + 1 }}</span></ng-template>\n        <div fdn-grid-item [col]=\"1\" [class.hidden]=\"t.deleted\" class=\"row col-start\">\n          <button aria-describedby=\"tic\" class=\"tic text\"\n            (keypress.ArrowDown)=\"navigate()\">{{ t.ticker }}\n            <ng-container *ngTemplateOutlet=\"rowMarker\"></ng-container>\n          </button>\n          <button aria-describedby=\"inv\" class=\"tic text\">{{ t.price * t.shares | number: '1.2-2' }}</button>\n        </div> \n        <div fdn-grid-item [col]=\"2\" [class.hidden]=\"t.deleted\" class=\"row\">\n          <button aria-describedby=\"pri\" class=\"col pri num\"\n            [class.buy]=\"t.shares > 0\"\n            [class.sell]=\"t.shares < 0\"\n            [class.sold]=\"t.shares === 0\"\n            >{{ t.price | number: '1.2-2' }}</button>\n          <button aria-describedby=\"sha\" class=\"col sha num\">{{ t.shares }}</button>\n        </div>\n        <div fdn-grid-item [col]=\"3\" [class.hidden]=\"t.deleted\" class=\"row\">\n          <button aria-describedby=\"dat\" class=\"col dat num\">{{ t.timestamp | date:'shortDate' }}</button>\n          <button aria-describedby=\"com\" class=\"col com num\" *ngIf=\"t.commission\">{{ t.commission | number: '1.2-2' }}</button>\n        </div>\n        <div fdn-grid-item [col]=\"4\" [class.hidden]=\"t.deleted\" class=\"row col-end\">\n          <button class=\"col\" (click)=\"delete(t)\">delete</button>\n          <!-- show if consolidation list is 0 -->\n          <!-- or if consolidating ticker == t.ticker -->\n          <label class=\"col con\" *ngIf=\"(consolidation.length === 0 || consolidating === t.ticker) && tradeCount(trades, t)\">\n            <input type=\"checkbox\" (change)=\"consolidate($event, t)\" [checked]=\"t.checked\">\n            <span class=\"col accessible\">select to </span>consolidate\n          </label>\n        </div>\n      </ng-container>\n    </fdn-grid>\n  </div>\n  <div class=\"flex-child\">\n    <h2>Consolidated</h2>\n    <fdn-grid [cols]=\"4\" [columnSizes]=\"colSizes\">\n      <div fdn-grid-item [col]=\"1\" class=\"row\" id=\"tic\">\n        <div id=\"tic\">Ticker</div>\n        <div id=\"cur\">Current</div>\n      </div>\n      <div fdn-grid-item [col]=\"2\" class=\"row\">\n        <div id=\"inv\">Invested</div>\n        <div id=\"pri\">Average</div>\n      </div>\n      <div fdn-grid-item [col]=\"3\" class=\"row\">\n          <div id=\"sha\">Shares</div>\n          <div id=\"gl\">Gain/Loss</div>\n      </div>\n      <div fdn-grid-item [col]=\"4\" class=\"row\">\n        <div id=\"com\">Commission</div>\n      </div>\n    \n      <ng-container *ngFor=\"let t of aggregate$ | async as aggregated; let row = index;\">\n        <div fdn-grid-item [col]=\"1\" class=\"row col-start\">\n          <button aria-describedby=\"tic\" class=\"tic text\">{{ t.ticker }}</button>\n          <div *ngIf=\"t.shares > 0\">\n            <input aria-describedby=\"cur\" type=\"text\" class=\"current\" [(ngModel)]=\"t.current\" (change)=\"updateLocalPrice(t)\">\n          </div>\n        </div>\n        <div fdn-grid-item [col]=\"2\" class=\"row\">\n          <ng-container *ngIf=\"t.shares > 0; else notInvested\">\n            <button aria-describedby=\"inv\" class=\"col inv num\">\n              {{ t.invested | number: '1.2-2' }}\n            </button>\n            <button aria-describedby=\"pri\" class=\"col pri num\">\n              {{ t.price | number: '1.2-2' }}\n            </button>\n          </ng-container>\n          <ng-template #notInvested>\n            <button aria-describedby=\"inv\" class=\"col inv num\">\n              -\n            </button>\n            <button aria-describedby=\"pri\" class=\"col pri num\">\n              -\n            </button>\n          </ng-template>\n        </div>\n        <div fdn-grid-item [col]=\"3\" class=\"row\">\n          <button aria-describedby=\"sha\" class=\"col sha num\">{{ t.shares }}</button>\n          <button aria-describedby=\"gl\" class=\"col gl num\">\n            <ng-container *ngIf=\"t.shares > 0; else notInvestedGains\">\n              {{ round((t.current - t.price) * t.shares) }}\n            </ng-container>\n            <ng-template #notInvestedGains>\n              {{ round(t.invested) }}\n            </ng-template>\n          </button>\n        </div>\n        <div fdn-grid-item [col]=\"4\" class=\"row col-end\">\n          <button aria-describedby=\"com\" class=\"col com num\" *ngIf=\"t.commission\">{{ t.commission }}</button>\n        </div>\n      </ng-container>\n    </fdn-grid>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/firestore/trade/trade.component.scss":
/*!******************************************************!*\
  !*** ./src/app/firestore/trade/trade.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background: none;\n  border: none; }\n  button.text {\n    text-align: left;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem; }\n  button.num {\n    text-align: right;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem; }\n  button, label {\n  padding: 0;\n  width: 100%;\n  margin: 2px 0; }\n  input[type='checkbox'] {\n  padding: 0;\n  margin: 0; }\n  .col {\n  border-left: 1px solid #888; }\n  .col-end {\n    border-right: 1px solid #888; }\n  .col-start {\n    border-left: 1px solid #888; }\n  label.con {\n  width: 100%;\n  font-size: 11px;\n  text-align: center;\n  display: block; }\n  span {\n  font-size: 0.6rem; }\n  .row {\n  border-bottom: 1px solid black; }\n  @media (min-width: 768px) {\n  .flex {\n    display: flex; } }\n  .flex-child {\n  margin: 0 2px; }\n  @media (min-width: 768px) {\n    .flex-child {\n      width: 50%; } }\n  input[type=\"text\"] {\n  border: none;\n  background: #BBB;\n  padding-left: 0.25rem;\n  box-sizing: border-box;\n  width: 100%; }\n  .hidden {\n  display: none; }\n  .buy {\n  background: #FC0; }\n  .sell {\n  background: #F0C; }\n  .sold {\n  background: #CCC; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlL3RyYWRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGVzZ28vRG9jdW1lbnRzL2dpdGh1Yi9mZG4vYXBwcy9mZG4vc3JjL3N0eWxlcy9fbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFGaEI7SUFLUSxnQkFBZ0I7SUFDaEIsb0JBUFE7SUFRUixxQkFSUSxFQUFBO0VBQ2hCO0lBVVEsaUJBQWlCO0lBQ2pCLG9CQVpRO0lBYVIscUJBYlEsRUFBQTtFQWlCaEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWEsRUFBQTtFQUdqQjtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFHYjtFQUNJLDJCQUEyQixFQUFBO0VBRTNCO0lBQ0ksNEJBQTRCLEVBQUE7RUFHaEM7SUFDSSwyQkFBMkIsRUFBQTtFQUtuQztFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksOEJBQThCLEVBQUE7RUMxQzlCO0VENkNKO0lBRVEsYUFBYSxFQUFBLEVBU3BCO0VBUEc7RUFDSSxhQUFhLEVBQUE7RUNsRGpCO0lEaURBO01BSVEsVUFBVSxFQUFBLEVBRWpCO0VBR0w7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBO0VBR2Y7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoiYXBwcy9mZG4vc3JjL2FwcC9maXJlc3RvcmUvdHJhZGUvdHJhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfbWVkaWEnO1xuXG4kcGFkZGluZzogMC4ycmVtO1xuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgICYudGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmc7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xuICAgIH1cbiAgICAmLm51bSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZztcbiAgICB9XG59XG5cbmJ1dHRvbiwgbGFiZWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAycHggMDtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jb2wge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ODtcblxuICAgICYtZW5kIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzg4ODtcbiAgICB9XG4gICAgXG4gICAgJi1zdGFydCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ODtcbiAgICB9XG59XG5cblxubGFiZWwuY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbn1cblxuLnJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZmxleCB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgICYtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDAgMnB4O1xuXG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjQkJCO1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkMwO1xufVxuLnNlbGwge1xuICAgIGJhY2tncm91bmQ6ICNGMEM7XG59XG4uc29sZCB7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbn0iLCJAbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/firestore/trade/trade.component.ts":
/*!****************************************************!*\
  !*** ./src/app/firestore/trade/trade.component.ts ***!
  \****************************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trade */ "./src/app/firestore/trade.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _trade_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade.facade */ "./src/app/firestore/trade/trade.facade.ts");
/* harmony import */ var _trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trade-adder/trade-adder.component */ "./src/app/firestore/trade-adder/trade-adder.component.ts");
/* harmony import */ var _trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trade-delete/trade-delete.component */ "./src/app/firestore/trade-delete/trade-delete.component.ts");
/* harmony import */ var _services_authentication_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/authentication.facade */ "./src/app/services/authentication.facade.ts");
/* harmony import */ var _state_trade_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/trade.selectors */ "./src/app/firestore/trade/+state/trade.selectors.ts");









var TradeComponent = /** @class */ (function () {
    function TradeComponent(ts, dialog, af) {
        this.ts = ts;
        this.dialog = dialog;
        this.af = af;
        this.consolidation = [];
        this.consolidating = '';
        this.title = 0;
        this.uid = '';
        this.colSizes = [
            { value: 1, unit: "fr" },
            { value: 1, unit: "fr" },
            { value: 1, unit: "fr" },
            { value: 1, unit: "fr" },
            { value: 1, unit: "fr" },
        ];
    }
    TradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.user.subscribe(function (user) {
            if (!!user) {
                _this.ts.retrieveData(user);
            }
        });
        this.trade$ = this.ts.getTrades();
        this.aggregate$ = this.ts.getAggregate();
    };
    /**
     * Add Trade Dialog
     */
    TradeComponent.prototype.add = function () {
        var _this = this;
        var dialog = this.dialog.open(_trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_5__["TradeAdderComponent"], {
            width: '250px'
        });
        dialog.afterClosed().subscribe(function (trade) {
            if (trade) {
                _this.ts.addTrade(trade);
                _this.updateLocalPrice(trade);
            }
        });
    };
    /**
     * Delete Trade
     * TODO: update aggregate
     * @param trade
     */
    TradeComponent.prototype.delete = function (trade) {
        var _this = this;
        var dialog = this.dialog.open(_trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_6__["TradeDeleteComponent"], {
            width: '250px'
        });
        dialog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.deleteTrade(trade);
            }
        });
    };
    TradeComponent.prototype.deleteTrade = function (trade) {
        this.ts.deleteTrade(trade);
    };
    /**
     * round to nearest cent
     * TODO: find more robust way?
     * @param num
     */
    TradeComponent.prototype.round = function (num) {
        return (Math.round(num * 100) / 100);
    };
    TradeComponent.prototype.navigate = function ($event) {
        // $event.preventDefault();
        // $event.stopPropagation();
        // console.log(this.tic);
    };
    /**
     * accessibility feature, move to directive
     * @param ref
     */
    TradeComponent.prototype.focus = function (ref) {
    };
    /**
     * Consolidation of existing trades for cleaner view
     * @param event
     * @param trade
     */
    TradeComponent.prototype.consolidate = function (event, trade) {
        if (event.target['checked']) {
            trade['checked'] = true;
            this.addConsolidation(trade);
        }
        else {
            trade['checked'] = false;
            this.removeConsolidation(trade);
        }
    };
    /**
     * Add Trade to be consolidated
     * @param trade
     */
    TradeComponent.prototype.addConsolidation = function (trade) {
        // check consolidation list
        if (this.consolidation.length === 0) {
            // removes checkboxes from other tickers
            this.consolidating = trade.ticker;
        }
        this.consolidation.push(trade);
    };
    /**
     * Remove Trade from list to be consolidated
     * @param trade
     */
    TradeComponent.prototype.removeConsolidation = function (trade) {
        // check consolidation list
        var index = this.consolidation.indexOf(trade);
        this.consolidation.splice(index, 1);
        if (this.consolidation.length === 0) {
            this.consolidating = '';
        }
    };
    /**
     * Commit Consolidated Changes to Database
     * @param consolidate
     */
    TradeComponent.prototype.performConsolidation = function (consolidate) {
        var _a = consolidate.reverse(), last = _a[0], rest = _a.slice(1);
        var consolidated;
        consolidated = Object(_state_trade_selectors__WEBPACK_IMPORTED_MODULE_8__["aggregator"])(consolidate)[0];
        // delete consolidated trades
        // update last trade
        var trade = new _trade__WEBPACK_IMPORTED_MODULE_2__["TradeDocument"]();
        trade.shares = consolidated.shares;
        trade.ticker = consolidated.ticker;
        trade.commission = consolidated.commission;
        // RULE: if consolidated shares is 0, do not divide
        if (consolidated.shares === 0) {
            trade.price = -consolidated.invested;
        }
        else {
            trade.price = this.round(consolidated.invested / consolidated.shares);
        }
        trade.key = last.key;
        trade.timestamp = last.timestamp;
        trade.user = last.user ? last.user : this.uid;
        this.ts.updateTrade(trade);
        for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var t = rest_1[_i];
            t['checked'] = false;
            this.hideTrade(t);
        }
        this.clearConsolidation();
        last.shares = trade.shares;
        last.price = trade.price;
        last['checked'] = false;
        return trade;
    };
    TradeComponent.prototype.hideTrade = function (trade) {
        trade['deleted'] = true;
        this.ts.deleteTrade(trade);
    };
    TradeComponent.prototype.trackByFn = function (trade) {
        return trade.key;
    };
    TradeComponent.prototype.clearConsolidation = function () {
        this.consolidating = '';
        this.consolidation = [];
    };
    TradeComponent.prototype.updateLocalPrice = function (trade) {
        var price = trade['current'] || trade.price;
        localStorage.setItem(trade.ticker, price.toString());
    };
    TradeComponent.prototype.tradeCount = function (trades, trade) {
        return trades.filter(function (t) { return trade.ticker === t.ticker; }).length > 1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.pos'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "pos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.tic'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "tic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.pri'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "pri", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.sha'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "sha", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.dat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "dat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('.com'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TradeComponent.prototype, "com", void 0);
    TradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/firestore/trade/trade.component.html"),
            styles: [__webpack_require__(/*! ./trade.component.scss */ "./src/app/firestore/trade/trade.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trade_facade__WEBPACK_IMPORTED_MODULE_4__["TradeFacade"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_authentication_facade__WEBPACK_IMPORTED_MODULE_7__["AuthenticationFacade"]])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/firestore/trade/trade.facade.ts":
/*!*************************************************!*\
  !*** ./src/app/firestore/trade/trade.facade.ts ***!
  \*************************************************/
/*! exports provided: TradeFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFacade", function() { return TradeFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_trade_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/trade.actions */ "./src/app/firestore/trade/+state/trade.actions.ts");
/* harmony import */ var _state_trade_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/trade.selectors */ "./src/app/firestore/trade/+state/trade.selectors.ts");





var TradeFacade = /** @class */ (function () {
    function TradeFacade(store) {
        this.store = store;
        this.COLLECTION = 'trades';
    }
    TradeFacade.prototype.getTrades = function (trade) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_trade_selectors__WEBPACK_IMPORTED_MODULE_4__["tickerSelector"], trade));
    };
    TradeFacade.prototype.getAggregate = function (trade) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_trade_selectors__WEBPACK_IMPORTED_MODULE_4__["aggregateSelector"], trade));
    };
    TradeFacade.prototype.retrieveData = function (user) {
        this.store.dispatch(_state_trade_actions__WEBPACK_IMPORTED_MODULE_3__["TRADE_ACTIONS"].TRADE_GET({ user: user }));
    };
    TradeFacade.prototype.addTrade = function (trade) {
        this.store.dispatch(_state_trade_actions__WEBPACK_IMPORTED_MODULE_3__["TRADE_ACTIONS"].TRADE_ADD({ trade: trade }));
    };
    TradeFacade.prototype.updateTrade = function (trade) {
        this.store.dispatch(_state_trade_actions__WEBPACK_IMPORTED_MODULE_3__["TRADE_ACTIONS"].TRADE_UPD({ trade: trade }));
    };
    TradeFacade.prototype.deleteTrade = function (trade) {
        this.store.dispatch(_state_trade_actions__WEBPACK_IMPORTED_MODULE_3__["TRADE_ACTIONS"].TRADE_DEL({ trade: trade }));
    };
    TradeFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TradeFacade);
    return TradeFacade;
}());



/***/ }),

/***/ "./src/app/firestore/trade/trade.service.ts":
/*!**************************************************!*\
  !*** ./src/app/firestore/trade/trade.service.ts ***!
  \**************************************************/
/*! exports provided: TradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeService", function() { return TradeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _state_trade_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/trade.reducer */ "./src/app/firestore/trade/+state/trade.reducer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





var TradeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TradeService, _super);
    function TradeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLECTION = _state_trade_reducer__WEBPACK_IMPORTED_MODULE_3__["tradeFeature"];
        return _this;
    }
    TradeService.prototype.get = function (user) {
        this.uid = user.uid;
        return this.collection(this.COLLECTION, user.uid);
    };
    TradeService.prototype.addTrade = function (trade) {
        trade.timestamp = +new Date();
        trade.user = this.uid;
        trade.key = trade.timestamp + "_" + trade.user;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.addDocument(this.COLLECTION, trade));
    };
    TradeService.prototype.updateTrade = function (trade) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.updateDocument(this.COLLECTION, trade));
    };
    TradeService.prototype.deleteTrade = function (trade) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.deleteDocument(this.COLLECTION, trade));
    };
    TradeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TradeService);
    return TradeService;
}(_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]));



/***/ })

}]);
//# sourceMappingURL=firestore-firestore-module.js.map