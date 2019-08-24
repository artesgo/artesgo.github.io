(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firestore-firestore-module"],{

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




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
        return doc.update(data);
    };
    FirestoreService.prototype.deleteDocument = function (collection, data) {
        var doc = this.db.collection(collection).doc(data.key);
        return doc.delete();
    };
    FirestoreService.prototype.collection = function (collection) {
        var _this = this;
        return this.db.collection(collection).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) { return _this.mapPayload(changes); }));
    };
    /**
     * Get Specific Page from Layout
     * @param layout
     * @param pageName
     */
    FirestoreService.prototype.getPages = function (layout, pageName) {
        var _this = this;
        return this.db.collection('layouts').doc(layout).collection(pageName).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) { return _this.mapPayload(changes); }));
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
            { path: '', component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_4__["TradeComponent"] },
            { path: 'portforia', component: _portforia_portforia_component__WEBPACK_IMPORTED_MODULE_5__["PortforiaComponent"] },
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
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _firestore_routing_module__WEBPACK_IMPORTED_MODULE_3__["FirestoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                artesgo_foundation__WEBPACK_IMPORTED_MODULE_10__["FoundationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
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
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _grid_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grid.parser */ "./src/app/firestore/grid.parser.ts");





var PortforiaComponent = /** @class */ (function () {
    function PortforiaComponent(fb) {
        this.fb = fb;
        this.page$ = [];
    }
    PortforiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.collection('layouts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (items) {
            var page = items[0];
            _this.layout$ = items;
            return _this.fb.getPages(page.key, 'pages');
        })).subscribe(function (layouts) {
            // layout retrieved as fields in document, which needs to be turned into array
            _this.page$ = [];
            var layout = layouts[0];
            Object.keys(layout).map(function (key) {
                if (key !== 'key') {
                    _this.page$.push(_grid_parser__WEBPACK_IMPORTED_MODULE_4__["GridUtils"].parser(key, layout[key]));
                }
            });
        }, function (err) {
            _this.setData();
        });
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
                _this.page$.push(_grid_parser__WEBPACK_IMPORTED_MODULE_4__["GridUtils"].parser(key, mock[key]));
            }
        });
    };
    PortforiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fdn-portforia',
            template: __webpack_require__(/*! ./portforia.component.html */ "./src/app/firestore/portforia/portforia.component.html"),
            styles: [__webpack_require__(/*! ./portforia.component.scss */ "./src/app/firestore/portforia/portforia.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], PortforiaComponent);
    return PortforiaComponent;
}());



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
        console.log(trade);
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
    { key: '1234', user: 'jon', timestamp: 1234, shares: 10, price: 100, commission: 10, ticker: 'rbc' },
    { key: '1234', user: 'jon', timestamp: 1234, shares: 10, price: 110, commission: 10, ticker: 'rbc' },
];


/***/ }),

/***/ "./src/app/firestore/trade/trade.component.html":
/*!******************************************************!*\
  !*** ./src/app/firestore/trade/trade.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n  <div class=\"flex-child\">\n    <h2>All Positions</h2>\n    <fdn-grid [cols]=\"4\" [columnSizes]=\"colSizes\" class=\"main\" (keydown)=\"navigate($event)\">\n      <!-- column header -->\n      <div fdn-grid-item [col]=\"1\" class=\"row\">\n        <div id=\"tic\">Ticker</div>\n        <div id=\"inv\">Invested</div>\n      </div>\n      <div fdn-grid-item [col]=\"2\" class=\"row\">\n        <div id=\"pri\">Price</div>\n        <div id=\"sha\">Shares</div>\n      </div>\n      <div fdn-grid-item [col]=\"3\" class=\"row\">\n        <div id=\"dat\">Date</div>\n        <div id=\"com\">Commission</div>\n      </div>\n      <div fdn-grid-item [col]=\"4\" class=\"row\">\n        <button (click)=\"add()\" class=\"col\">add<span class=\"accessible\"> Position</span></button>\n        <button *ngIf=\"consolidation.length > 1\"\n          (click)=\"consolidate(consolidating, consolidation)\" class=\"col\">consolidate<span class=\"accessible\"> position</span></button>\n      </div>\n    \n      <!-- data -->\n      <ng-container *ngFor=\"let t of trades; let row = index; trackBy: trackByFn\">\n        <div fdn-grid-item [col]=\"1\" class=\"row col-start\">\n          <button aria-describedby=\"tic\" class=\"tic text\"\n            (keypress.ArrowDown)=\"navigate()\">{{ t.ticker }}</button>\n          <button aria-describedby=\"inv\" class=\"tic text\">{{ t.price * t.shares | number: '1.2-2' }}</button>\n        </div>  \n        <div fdn-grid-item [col]=\"2\" class=\"row\">\n          <button aria-describedby=\"pri\" class=\"col pri num\">{{ t.price | number: '1.2-2' }}</button>\n          <button aria-describedby=\"sha\" class=\"col sha num\">{{ t.shares }}</button>\n        </div>\n        <div fdn-grid-item [col]=\"3\" class=\"row\">\n          <button aria-describedby=\"dat\" class=\"col dat num\">{{ t.timestamp | date:'shortDate' }}</button>\n          <button aria-describedby=\"com\" class=\"col com num\" *ngIf=\"t.commission\">{{ t.commission }}</button>\n        </div>\n        <div fdn-grid-item [col]=\"4\" class=\"row col-end\">\n          <button class=\"col\" (click)=\"delete(t)\">delete</button>\n          <label class=\"col con\">\n            <input type=\"checkbox\" (change)=\"addConsolidation($event, t)\">\n            <span class=\"col accessible\">select to </span>consolidate\n          </label>\n        </div>\n      </ng-container>\n    </fdn-grid>\n  </div>\n  \n  <div class=\"flex-child\">\n    <h2>Consolidated</h2>\n    <fdn-grid [cols]=\"4\" [columnSizes]=\"colSizes\">\n      <div fdn-grid-item [col]=\"1\" class=\"row\" id=\"tic\">\n        <div id=\"tic\">Ticker</div>\n        <div id=\"cur\">Current</div>\n      </div>\n      <div fdn-grid-item [col]=\"2\" class=\"row\">\n        <div id=\"inv\">Invested</div>\n        <div id=\"pri\">Average</div>\n      </div>\n      <div fdn-grid-item [col]=\"3\" class=\"row\">\n          <div id=\"sha\">Shares</div>\n          <div id=\"gl\">Gain/Loss</div>\n      </div>\n      <div fdn-grid-item [col]=\"4\" class=\"row\">\n        <div id=\"com\">Commission</div>\n      </div>\n    \n      <ng-container *ngFor=\"let t of aggregated; let row = index;\">\n        <div fdn-grid-item [col]=\"1\" class=\"row col-start\">\n          <button aria-describedby=\"tic\" class=\"tic text\">{{ t.ticker }}</button>\n          <div *ngIf=\"t.invested > 0\"><input type=\"text\" class=\"current\" [(ngModel)]=\"t.current\"></div>\n        </div>\n        <div fdn-grid-item [col]=\"2\" class=\"row\">\n          <ng-container *ngIf=\"t.invested > 0; else notInvested\">\n            <button aria-describedby=\"inv\" class=\"col inv num\">\n              {{ t.invested | number: '1.2-2' }}\n            </button>\n            <button aria-describedby=\"pri\" class=\"col pri num\">\n              {{ t.price | number: '1.2-2' }}\n            </button>\n          </ng-container>\n          <ng-template #notInvested>\n            <button aria-describedby=\"inv\" class=\"col inv num\">\n              -\n            </button>\n            <button aria-describedby=\"pri\" class=\"col pri num\">\n              -\n            </button>\n          </ng-template>\n        </div>\n        <div fdn-grid-item [col]=\"3\" class=\"row\">\n          <button aria-describedby=\"sha\" class=\"col sha num\">{{ t.shares }}</button>\n          <button aria-describedby=\"gl\" class=\"col gl num\">\n            <ng-container *ngIf=\"t.invested > 0; else notInvestedGains\">\n              {{ round((t.current - t.price) * t.shares) }}\n            </ng-container>\n            <ng-template #notInvestedGains>\n              {{ -(t.invested) }}\n            </ng-template>\n          </button>\n        </div>\n        <div fdn-grid-item [col]=\"4\" class=\"row col-end\">\n          <button aria-describedby=\"com\" class=\"col com num\" *ngIf=\"t.commission\">{{ t.commission }}</button>\n        </div>\n      </ng-container>\n    </fdn-grid>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/firestore/trade/trade.component.scss":
/*!******************************************************!*\
  !*** ./src/app/firestore/trade/trade.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background: none;\n  border: none; }\n  button.text {\n    text-align: left;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem; }\n  button.num {\n    text-align: right;\n    padding-left: 0.2rem;\n    padding-right: 0.2rem; }\n  button, label {\n  padding: 0;\n  width: 100%;\n  margin: 2px 0; }\n  input[type='checkbox'] {\n  padding: 0;\n  margin: 0; }\n  .col {\n  border-left: 1px solid #888; }\n  .col-end {\n    border-right: 1px solid #888; }\n  .col-start {\n    border-left: 1px solid #888; }\n  label.con {\n  width: 100%;\n  font-size: 11px;\n  text-align: center;\n  display: block; }\n  span {\n  font-size: 0.6rem; }\n  .row {\n  border-bottom: 1px solid black; }\n  @media (min-width: 768px) {\n  .flex {\n    display: flex; } }\n  .flex-child {\n  margin: 0 2px; }\n  @media (min-width: 768px) {\n    .flex-child {\n      width: 50%; } }\n  input[type=\"text\"] {\n  border: none;\n  background: #BBB;\n  padding-left: 0.25rem;\n  box-sizing: border-box;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcnRlc2dvL0RvY3VtZW50cy9naXRodWIvZmRuL2FwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlL3RyYWRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FydGVzZ28vRG9jdW1lbnRzL2dpdGh1Yi9mZG4vYXBwcy9mZG4vc3JjL3N0eWxlcy9fbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFGaEI7SUFLUSxnQkFBZ0I7SUFDaEIsb0JBUFE7SUFRUixxQkFSUSxFQUFBO0VBQ2hCO0lBVVEsaUJBQWlCO0lBQ2pCLG9CQVpRO0lBYVIscUJBYlEsRUFBQTtFQWlCaEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWEsRUFBQTtFQUdqQjtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFHYjtFQUNJLDJCQUEyQixFQUFBO0VBRTNCO0lBQ0ksNEJBQTRCLEVBQUE7RUFHaEM7SUFDSSwyQkFBMkIsRUFBQTtFQUtuQztFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksOEJBQThCLEVBQUE7RUMxQzlCO0VENkNKO0lBRVEsYUFBYSxFQUFBLEVBU3BCO0VBUEc7RUFDSSxhQUFhLEVBQUE7RUNsRGpCO0lEaURBO01BSVEsVUFBVSxFQUFBLEVBRWpCO0VBR0w7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBIiwiZmlsZSI6ImFwcHMvZmRuL3NyYy9hcHAvZmlyZXN0b3JlL3RyYWRlL3RyYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX21lZGlhJztcblxuJHBhZGRpbmc6IDAuMnJlbTtcbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmLnRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZztcbiAgICB9XG4gICAgJi5udW0ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZztcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmc7XG4gICAgfVxufVxuXG5idXR0b24sIGxhYmVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMnB4IDA7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29sIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg7XG5cbiAgICAmLWVuZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XG4gICAgfVxuICAgIFxuICAgICYtc3RhcnQge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg7XG4gICAgfVxufVxuXG5cbmxhYmVsLmNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi5yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmZsZXgge1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAmLWNoaWxkIHtcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcblxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI0JCQjtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCJAbWl4aW4gbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var _trade_aggregate_trade_aggregate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trade-aggregate/trade-aggregate.component */ "./src/app/firestore/trade-aggregate/trade-aggregate.component.ts");
/* harmony import */ var _trade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade.service */ "./src/app/firestore/trade/trade.service.ts");
/* harmony import */ var _trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trade-adder/trade-adder.component */ "./src/app/firestore/trade-adder/trade-adder.component.ts");
/* harmony import */ var _trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../trade-delete/trade-delete.component */ "./src/app/firestore/trade-delete/trade-delete.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");









var TradeComponent = /** @class */ (function () {
    function TradeComponent(ts, dialog) {
        this.ts = ts;
        this.dialog = dialog;
        this.aggregated = [];
        this.consolidation = [];
        this.consolidating = '';
        this.title = 0;
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
        this.ts.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (trades) {
            // layout retrieved as fields in document, which needs to be turned into array
            _this.trades = trades;
            for (var _i = 0, _a = _this.trades; _i < _a.length; _i++) {
                var t = _a[_i];
                _this.addToAggregate(t);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Get cumulative earnings for ticker
     * @param ticker
     */
    TradeComponent.prototype.aggregate = function (ticker, trades) {
        var _invested = 0;
        var _shares = 0;
        var _comm = 0;
        trades.map(function (transaction) {
            if (transaction.ticker === ticker) {
                _comm += (transaction.commission ? transaction.commission : 0);
                _invested += (transaction.shares * transaction.price);
                _shares += transaction.shares;
            }
        });
        var ret = {
            invested: this.round(_invested),
            shares: _shares,
            price: 0,
            commission: _comm,
            ticker: ticker,
            current: 0,
        };
        if (ret.shares) {
            ret.price = this.round(ret.invested / ret.shares);
            ret.current = ret.price;
        }
        return ret;
    };
    TradeComponent.prototype.openDialog = function (ticker) {
        var _trade = this.aggregated.find(function (trade) { return trade.ticker === ticker; });
        this.dialog.open(_trade_aggregate_trade_aggregate_component__WEBPACK_IMPORTED_MODULE_4__["TradeAggregateComponent"], {
            width: '250px',
            data: _trade
        });
    };
    TradeComponent.prototype.add = function () {
        var _this = this;
        var dialog = this.dialog.open(_trade_adder_trade_adder_component__WEBPACK_IMPORTED_MODULE_6__["TradeAdderComponent"], {
            width: '250px'
        });
        dialog.afterClosed().subscribe(function (trade) {
            if (trade) {
                _this.ts.addTrade(trade).then(function (data) {
                    _this.updateAggregate(trade);
                });
            }
        });
    };
    TradeComponent.prototype.updateAggregate = function (trade) {
        var _this = this;
        this.aggregated = this.aggregated.map(function (t) {
            if (t.ticker === trade.ticker) {
                t.commission += trade.commission;
                t.invested += trade.price * trade.shares;
                t.shares += trade.shares;
                t.price = _this.round(t.invested / t.shares);
                t.current = trade.price;
            }
            return t;
        });
    };
    TradeComponent.prototype.addToAggregate = function (trade) {
        if (this.aggregated.find(function (t) { return trade.ticker === t.ticker; })) {
            this.updateAggregate(trade);
        }
        else {
            var tradeAgg = {
                ticker: trade.ticker,
                shares: trade.shares,
                price: trade.price,
                invested: trade.price * trade.shares,
                commission: trade.commission,
                current: trade.price
            };
            this.aggregated.push(tradeAgg);
        }
    };
    TradeComponent.prototype.delete = function (trade) {
        var _this = this;
        var dialog = this.dialog.open(_trade_delete_trade_delete_component__WEBPACK_IMPORTED_MODULE_7__["TradeDeleteComponent"], {
            width: '250px'
        });
        dialog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.ts.deleteTrade(trade);
            }
        });
    };
    /**
     * round to nearest cent
     * @param num
     */
    TradeComponent.prototype.round = function (num) {
        return (Math.round(num * 100) / 100);
    };
    TradeComponent.prototype.navigate = function ($event) {
        // $event.preventDefault();
        // $event.stopPropagation();
        console.log(this.tic);
    };
    TradeComponent.prototype.focus = function (ref) {
    };
    TradeComponent.prototype.addConsolidation = function (event, trade) {
        console.log(event.target, trade);
    };
    TradeComponent.prototype.consolidate = function (consolidate) {
        var last = consolidate.reverse()[0];
        var consolidated;
        consolidated = this.aggregate(last.ticker, consolidate);
        // delete consolidated trades
        // update last trade
        var trade = new _trade__WEBPACK_IMPORTED_MODULE_2__["TradeDocument"]();
        trade.shares = consolidated.shares;
        trade.ticker = consolidated.ticker;
        trade.commission = consolidated.commission;
        trade.price = this.round(consolidated.invested / consolidated.shares);
        trade.key = last.key;
        trade.timestamp = last.timestamp;
        trade.user = last.user;
        return trade;
    };
    TradeComponent.prototype.trackByFn = function (trade) {
        return trade.key;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_trade_service__WEBPACK_IMPORTED_MODULE_5__["TradeService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], TradeComponent);
    return TradeComponent;
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



var TradeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TradeService, _super);
    function TradeService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.COLLECTION = 'trades';
        return _this;
    }
    TradeService.prototype.get = function () {
        return this.collection(this.COLLECTION);
    };
    // TODO: insert user id into trade$ object
    TradeService.prototype.addTrade = function (trade) {
        trade.timestamp = +new Date();
        trade.key = trade.timestamp + "_" + trade.ticker + "_" + trade.shares;
        return this.addDocument(this.COLLECTION, trade);
    };
    TradeService.prototype.updateTrade = function (trade) {
        return this.updateDocument(this.COLLECTION, trade);
    };
    TradeService.prototype.deleteTrade = function (trade) {
        return this.deleteDocument(this.COLLECTION, trade);
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