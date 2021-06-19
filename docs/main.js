(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projektek\sajat\webclient\angular\despoiler\client\src\main.ts */"zUnb");


/***/ }),

/***/ "06w8":
/*!************************************************************!*\
  !*** ./src/app/pages/item-detail/item-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/base.component */ "qCwG");
/* harmony import */ var _item_detail_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-detail-form */ "In5Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_busy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/busy.service */ "kKoH");
/* harmony import */ var _shared_icon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/icon.service */ "Wlel");
/* harmony import */ var _shared_db_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/db.service */ "WLGv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














function ItemDetailComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r0.icons.save);
} }
function ItemDetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Expires in");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "days");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_div_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.toggleExpiresInDaysView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r1.form.expiresInDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r1.icons.swap);
} }
function ItemDetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Expires on");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.toggleExpiresInDaysView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.form.expiresDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r2.icons.swap);
} }
function ItemDetailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.itemData == null ? null : ctx_r3.itemData.added);
} }
function ItemDetailComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.deleteItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ItemDetailComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.reactivate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Reactivate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class ItemDetailComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(route, router, busy, icons, db) {
        super();
        this.route = route;
        this.router = router;
        this.busy = busy;
        this.icons = icons;
        this.db = db;
        this.form = new _item_detail_form__WEBPACK_IMPORTED_MODULE_5__["ItemDetailForm"]();
        this.expiresInDaysView = true;
    }
    ngOnInit() {
        this.subscriptions.push(this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            let key = params["key"];
            if (!key) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
            }
            this.ref = this.db.getItem(key);
            return this.ref.valueChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(item => !!item), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(a => a))
            .subscribe(item => {
            this.itemData = {
                isActive: item.isActive,
                added: dayjs__WEBPACK_IMPORTED_MODULE_1__(item.added).format("YYYY. MM. DD.")
            };
            this.form.setData({
                expires: item.expires,
                name: item.name
            });
            this.form.markAsPristine();
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.form.destroy();
    }
    toggleExpiresInDaysView() {
        this.expiresInDaysView = !this.expiresInDaysView;
    }
    reactivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.ref) {
                yield this.busy.do(() => this.ref.update({ isActive: true }));
            }
        });
    }
    back() {
        this.router.navigateByUrl("list");
    }
    deleteItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.ref) {
                yield this.busy.do(() => this.ref.remove());
                this.router.navigateByUrl("list");
            }
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            let formData = this.form.getData();
            if (this.ref) {
                yield this.busy.do(() => this.ref.update({
                    name: formData.name,
                    expires: formData.expires
                }));
            }
            else {
                yield this.busy.do(() => this.db.createItem({
                    name: formData.name,
                    added: dayjs__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD"),
                    expires: formData.expires,
                    isActive: true,
                }));
            }
            this.router.navigate(["/", "list"]);
        });
    }
    completeButtonClicked() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.ref) {
                yield this.busy.do(() => this.ref.update({
                    isActive: false
                }));
            }
        });
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_busy_service__WEBPACK_IMPORTED_MODULE_8__["BusyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_icon_service__WEBPACK_IMPORTED_MODULE_9__["IconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_db_service__WEBPACK_IMPORTED_MODULE_10__["DbService"])); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 8, consts: [[1, "page-wrapper"], [1, "page-header"], [1, "btn", "mod-btn-icon", 3, "click"], [3, "icon"], ["class", "btn mod-btn-icon add-icon", 3, "click", 4, "ngIf"], [1, "page-content"], [3, "ngSubmit"], [1, "text-input"], [3, "formControl"], ["class", "text-input", 4, "ngIf"], [1, "d-none"], [1, "button-container"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "btn", "mod-btn-icon", "add-icon", 3, "click"], ["type", "number", 3, "formControl"], [1, "days-suffix"], ["type", "button", 1, "btn", "mod-btn-icon", "add-icon", 3, "click"], ["type", "date", 3, "formControl"], ["disabled", "", 3, "ngModel"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemDetailComponent_Template_button_click_2_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ItemDetailComponent_button_4_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ItemDetailComponent_Template_form_ngSubmit_6_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ItemDetailComponent_div_11_Template, 8, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ItemDetailComponent_div_12_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ItemDetailComponent_div_14_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ItemDetailComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ItemDetailComponent_button_17_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.icons.back);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.form.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.expiresInDaysView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.expiresInDaysView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.itemData == null ? null : ctx.itemData.added);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.itemData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.itemData && !ctx.itemData.isActive);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], styles: [".page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.days-suffix[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsaUJBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxtQkFBQTtBQUNGIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZS1jb250ZW50IHtcblx0cGFkZGluZzogMXJlbTtcbn1cblxuLmRheXMtc3VmZml4IHtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcblx0bWFyZ2luLXRvcDogMXJlbTtcblxuXHRidXR0b24gKyBidXR0b24ge1xuXHRcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAjQ8JgwxsESsW0FTIL3HMmj7DSqTqkUP0",
        authDomain: "despoiler-test.firebaseapp.com",
        databaseURL: "https://despoiler-test-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "despoiler-test",
        storageBucket: "despoiler-test.appspot.com",
        messagingSenderId: "28456551983",
        appId: "1:28456551983:web:a1072e9103d21460ea28da"
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

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = yield this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).toPromise();
            if (user)
                return true;
            return this.router.createUrlTree(["/login"]);
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/base.component */ "qCwG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/busy.service */ "kKoH");







class LoginForm extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"] {
    get username() { return this.controls.username; }
    get password() { return this.controls.password; }
    constructor() {
        super({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("")
        });
    }
}
class LoginComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(auth, router, busy) {
        super();
        this.auth = auth;
        this.router = router;
        this.busy = busy;
        this.form = new LoginForm();
    }
    ngOnInit() {
        this.subscriptions.push(this.auth.user.subscribe(u => {
            if (u) {
                this.router.navigate(["/"]);
            }
        }));
    }
    login() {
        this.busy.do(() => this.auth.login(this.form.username.value, this.form.password.value));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 2, consts: [[3, "ngSubmit"], [1, "text-input"], ["type", "email", 3, "formControl"], ["type", "password", 3, "formControl"], [1, "button-container"], [1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: ["form[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.7rem;\n}\nform[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n}\nform[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDtBQUNDO0VBQ0MscUJBQUE7QUFDRjtBQUVDO0VBQ0MsYUFBQTtBQUFGO0FBRUU7RUFDQyxPQUFBO0FBQUgiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cclxuXHQmID4gKiB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwLjdyZW07XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLWNvbnRhaW5lciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "In5Q":
/*!*******************************************************!*\
  !*** ./src/app/pages/item-detail/item-detail-form.ts ***!
  \*******************************************************/
/*! exports provided: ItemDetailForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailForm", function() { return ItemDetailForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


class ItemDetailForm extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"] {
    constructor() {
        let group = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            ["name"]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ["expiresDate"]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ["expiresInDays"]: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        super(group.controls, group.validator, group.asyncValidator);
        this.subscriptions = [];
        this.subscriptions.push(this.expiresDate.valueChanges.subscribe(value => this.updateExpiresInDays(value)));
        this.subscriptions.push(this.expiresInDays.valueChanges.subscribe(value => this.updateExpiresDate(value)));
    }
    get name() { return this.controls["name"]; }
    get expiresDate() { return this.controls["expiresDate"]; }
    get expiresInDays() { return this.controls["expiresInDays"]; }
    setData(value) {
        this.setValue({
            name: value.name,
            expiresInDays: this.getNumberFromDate(value.expires),
            expiresDate: value.expires
        });
    }
    getData() {
        return {
            name: this.name.value,
            expires: this.expiresDate.value
        };
    }
    destroy() {
        for (let sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
    updateExpiresInDays(value) {
        if (typeof value === "string" && /\d{4}-\d{2}-\d{2}/.test(value)) {
            let diff = this.getNumberFromDate(value);
            if (this.expiresInDays.value !== diff)
                this.expiresInDays.setValue(diff);
        }
    }
    updateExpiresDate(value) {
        if (typeof value === "number") {
            let date = this.getDateFromNumber(value);
            if (this.expiresDate.value !== date) {
                this.expiresDate.setValue(date);
            }
        }
    }
    getDateFromNumber(num) {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__().add(num, "days").format("YYYY-MM-DD");
    }
    getNumberFromDate(date) {
        let valDate = dayjs__WEBPACK_IMPORTED_MODULE_1__(date).startOf("day");
        let now = dayjs__WEBPACK_IMPORTED_MODULE_1__().startOf("day");
        let diff = Math.round(valDate.diff(now, "days"));
        return diff;
    }
}


/***/ }),

/***/ "JJOU":
/*!********************************************************!*\
  !*** ./src/app/pages/item-list/item-list.component.ts ***!
  \********************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/base.component */ "qCwG");
/* harmony import */ var _shared_storage_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/storage-keys */ "vftd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_icon_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/icon.service */ "Wlel");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_busy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/busy.service */ "kKoH");
/* harmony import */ var _shared_db_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/db.service */ "WLGv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");

















function ItemListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_2_Template_fa_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r0.icons.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r0.icons.add);
} }
function ItemListComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_3_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.registerNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Subscribe to notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ItemListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Show active only");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ItemListComponent_div_3_div_8_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.icons.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r1.activeOnlyControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isNotificationPermissionGranted() === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r1.icons.signOut);
} }
function ItemListComponent_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" (", item_r12.expiresText, ")");
} }
function ItemListComponent_div_5_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "fa-icon", 27);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r14.icons.check);
} }
function ItemListComponent_div_5_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-warning", item_r12.spoilState === "warning")("text-danger", item_r12.spoilState === "spoiled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r15.icons.warning);
} }
function ItemListComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_5_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.markComplete(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r16.icons.check);
} }
function ItemListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemListComponent_div_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const item_r12 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.openDetails(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ItemListComponent_div_5_span_5_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ItemListComponent_div_5_fa_icon_7_Template, 1, 1, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ItemListComponent_div_5_fa_icon_8_Template, 1, 5, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ItemListComponent_div_5_div_9_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r12.expiresText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r12.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r12.isActive && item_r12.spoilState !== "ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r12.isActive);
} }
const warningRatio = 0.6;
class ItemListComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(icons, messaging, auth, router, busy, db) {
        super();
        this.icons = icons;
        this.messaging = messaging;
        this.auth = auth;
        this.router = router;
        this.busy = busy;
        this.db = db;
        this.isMenuOpen = false;
        this.items = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        this.activeOnlyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](localStorage.getItem(_shared_storage_keys__WEBPACK_IMPORTED_MODULE_6__["StorageKeys"].showActiveOnly) === "true");
    }
    ngOnInit() {
        if (this.isNotificationPermissionGranted()) {
            // try to get token if permission is granted
            this.subscriptions.push(this.messaging.getToken.subscribe(token => this.updateToken(token)));
        }
        this.subscriptions.push(this.activeOnlyControl.valueChanges.subscribe(value => {
            localStorage.setItem(_shared_storage_keys__WEBPACK_IMPORTED_MODULE_6__["StorageKeys"].showActiveOnly, value ? "true" : "false");
        }));
        this.items = this.activeOnlyControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.activeOnlyControl.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(value => {
            return this.db.getItems({ activeOnly: value }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => changes.map(a => {
                let item = a.payload.val();
                let added = dayjs__WEBPACK_IMPORTED_MODULE_2__(item.added);
                let expires = dayjs__WEBPACK_IMPORTED_MODULE_2__(item.expires);
                let result = {
                    key: a.payload.key,
                    name: item.name,
                    isActive: item.isActive,
                    spoilState: this.getSpoilState(added, expires),
                    expiresText: this.getExpiresText(expires),
                    expires
                };
                return result;
            })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(list => list.sort((a, b) => {
            function getSpoilScore(item) {
                switch (item.spoilState) {
                    case "spoiled": return 2;
                    case "warning": return 1;
                    default: return 0;
                }
            }
            let scoreA = getSpoilScore(a);
            let scoreB = getSpoilScore(b);
            if (scoreA === scoreB)
                return a.expires.diff(b.expires);
            return scoreB - scoreA;
        })));
    }
    isNotificationPermissionGranted() { return Notification.permission === "granted"; }
    registerNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = yield this.messaging.requestToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
            yield this.updateToken(token);
        });
    }
    updateToken(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (token !== null) {
                let user = yield this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
                if (user) {
                    this.db.updateNotificationToken(token, user.uid);
                }
            }
            else {
                console.error("token is null");
            }
        });
    }
    addItem() {
        this.router.navigate(["/", "detail"]);
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.busy.do(() => this.auth.logout());
            this.router.navigate(["/", "login"]);
        });
    }
    toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
    openDetails(item) {
        this.router.navigate(["/", "detail"], { queryParams: { key: item.key } });
    }
    markComplete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.db.getItems().update(item.key, { isActive: false });
        });
    }
    getSpoilState(added, expires) {
        let now = dayjs__WEBPACK_IMPORTED_MODULE_2__();
        if (expires.isBefore(now))
            return "spoiled";
        let totalLifetime = expires.diff(added);
        let currentLifetime = now.diff(added);
        if (currentLifetime * 1.0 / totalLifetime > warningRatio)
            return "warning";
        return "ok";
    }
    getExpiresText(expires) {
        let days = this.getDaysUntil(expires);
        if (days === 0)
            return "OMG expires TODAY";
        if (days > 0)
            return `expires in ${days} days`;
        return `expired ${-days} days ago`;
    }
    getDaysUntil(date) {
        let originalDate = dayjs__WEBPACK_IMPORTED_MODULE_2__(date).startOf("day");
        let now = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf("day");
        return originalDate.diff(now, "day");
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_icon_service__WEBPACK_IMPORTED_MODULE_8__["IconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_9__["AngularFireMessaging"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_busy_service__WEBPACK_IMPORTED_MODULE_12__["BusyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_db_service__WEBPACK_IMPORTED_MODULE_13__["DbService"])); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [[1, "page-wrapper"], [1, "page-header"], ["class", "header-inner mod-menu-closed", 4, "ngIf"], ["class", "header-inner mod-menu-open", 4, "ngIf"], [1, "page-content"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "header-inner", "mod-menu-closed"], [1, "btn", "mod-btn-icon", 3, "click"], [3, "icon"], [1, "btn", "mod-btn-icon", "add-icon"], [3, "icon", "click"], [1, "header-inner", "mod-menu-open"], [1, "no-padding"], [1, "checkbox"], ["id", "activeOnly", "type", "checkbox", 3, "formControl"], ["for", "activeOnly"], ["class", "header-item-bottom-margin", 4, "ngIf"], [1, "btn", "btn-light", 3, "click"], [1, "header-item-bottom-margin"], [1, "list-item"], [1, "name"], [1, "btn", 3, "click"], [4, "ngIf"], [1, "icon"], ["class", "icon-green", 3, "icon", 4, "ngIf"], [3, "icon", "text-warning", "text-danger", 4, "ngIf"], ["class", "action", 4, "ngIf"], [1, "icon-green", 3, "icon"], [1, "action"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ItemListComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ItemListComponent_div_3_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ItemListComponent_div_5_Template, 10, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 3, ctx.items));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".header-inner.mod-menu-closed[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header-inner.mod-menu-open[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.header-inner.mod-menu-open[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.header-inner.mod-menu-open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.header-inner.mod-menu-open[_ngcontent-%COMP%]   div.no-padding[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.header-inner[_ngcontent-%COMP%]   .header-item-bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: white;\n  margin: 0.5rem 0;\n  margin-left: 0.5rem;\n  min-height: 50px;\n}\n.list-item[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7QUFBRjtBQUdDO0VBQ0Msb0JBQUE7QUFERjtBQUdFO0VBQ0Msb0JBQUE7QUFESDtBQUlFO0VBQ0Msa0JBQUE7QUFGSDtBQUlHO0VBQ0MsZUFBQTtBQUZKO0FBT0M7RUFDQyxtQkFBQTtBQUxGO0FBU0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5EO0FBUUM7RUFDQyxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBTkYiLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbm5lciB7XG5cdCYubW9kLW1lbnUtY2xvc2VkIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXG5cdCYubW9kLW1lbnUtb3BlbiB7XG5cdFx0cGFkZGluZy1ib3R0b206IDFyZW07XG5cblx0XHQuY2hlY2tib3gge1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDFyZW07XG5cdFx0fVxuXG5cdFx0ZGl2IHtcblx0XHRcdHBhZGRpbmctbGVmdDogMXJlbTtcblxuXHRcdFx0Ji5uby1wYWRkaW5nIHtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5oZWFkZXItaXRlbS1ib3R0b20tbWFyZ2luIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHR9XG59XG5cbi5saXN0LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luOiAwLjVyZW0gMDtcblx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcblx0bWluLWhlaWdodDogNTBweDtcblxuXHQuYWN0aW9uIHtcblx0XHRmbGV4OiAxO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "QNcV":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");




class AuthService {
    constructor(ngAuth) {
        this.ngAuth = ngAuth;
        this.isPersistenceSet = false;
        this.user = this.ngAuth.user;
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setPersistence();
            return this.ngAuth.signInWithEmailAndPassword(username, password);
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setPersistence();
            yield this.ngAuth.signOut();
        });
    }
    setPersistence() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isPersistenceSet) {
                yield this.ngAuth.setPersistence(firebase__WEBPACK_IMPORTED_MODULE_1__["default"].auth.Auth.Persistence.LOCAL);
                this.isPersistenceSet = true;
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_busy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/busy.service */ "kKoH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(busy) {
        this.busy = busy;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_busy_service__WEBPACK_IMPORTED_MODULE_1__["BusyService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [["class", "progress-overlay", 4, "ngIf"], [1, "progress-overlay"], [1, "progress"], [1, "progress-bar", "progress-bar-animated", "progress-bar-striped"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.busy.isBusy));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".progress-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.progress-overlay[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 5px;\n}\n.progress-overlay[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #19297c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFERDtBQUlDO0VBQ0MsV0FBQTtBQUZGO0FBSUU7RUFDQyxXQUFBO0VBQ0EseUJDaEJPO0FEY1YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9pbXBvcnRzLnNjc3NcIjtcclxuXHJcbi5wcm9ncmVzcy1vdmVybGF5IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTA7XHJcblx0dG9wOjA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblxyXG5cdFxyXG5cdC5wcm9ncmVzcyB7XHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdFxyXG5cdFx0LnByb2dyZXNzLWJhciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIkcHJpbWFyeTogIzE5Mjk3YztcclxuXHJcbiRib290c3RyYXBTbTogNTc2cHg7XHJcbiRib290c3RyYXBNZDogNzY4cHg7XHJcbiRib290c3RyYXBMZzogOTkycHg7XHJcbiRib290c3RyYXBYbDogMTIwMHB4OyJdfQ== */"] });


/***/ }),

/***/ "WLGv":
/*!**************************************!*\
  !*** ./src/app/shared/db.service.ts ***!
  \**************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



class DbService {
    constructor(db) {
        this.db = db;
    }
    getItems(filters) {
        let query = (filters === null || filters === void 0 ? void 0 : filters.activeOnly) ? ref => ref.orderByChild("isActive").equalTo(true) : undefined;
        return this.db.list("/items", query);
    }
    getItem(key) {
        return this.db.object(`/items/${key}`);
    }
    createItem(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let ref = yield this.getItems().push(data);
            return ref.key;
        });
    }
    updateNotificationToken(token, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.object(`/users/${userId}`).update({
                notificationToken: token
            });
        });
    }
}
DbService.ɵfac = function DbService_Factory(t) { return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DbService, factory: DbService.ɵfac });


/***/ }),

/***/ "Wlel":
/*!****************************************!*\
  !*** ./src/app/shared/icon.service.ts ***!
  \****************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IconService {
    constructor() {
        this.menu = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"];
        this.close = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"];
        this.signOut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSignOutAlt"];
        this.add = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.check = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.warning = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faExclamationTriangle"];
        this.back = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowLeft"];
        this.save = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSave"];
        this.swap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSync"];
    }
}
IconService.ɵfac = function IconService_Factory(t) { return new (t || IconService)(); };
IconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IconService, factory: IconService.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/item-detail/item-detail.component */ "06w8");
/* harmony import */ var _pages_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/item-list/item-list.component */ "JJOU");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/auth.service */ "QNcV");
/* harmony import */ var _shared_busy_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/busy.service */ "kKoH");
/* harmony import */ var _shared_db_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/db.service */ "WLGv");
/* harmony import */ var _shared_icon_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/icon.service */ "Wlel");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["VAPID_KEY"],
            useValue: "BLEKb-9jgQZdfFx8ZX91IRYlSXBUpS-QxeudB90y64CAHUUnHZ_7aRII9MsmV3sZXGY4jLEKSD466r_dVCmF_X4"
        },
        _shared_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
        _shared_busy_service__WEBPACK_IMPORTED_MODULE_14__["BusyService"],
        _shared_icon_service__WEBPACK_IMPORTED_MODULE_16__["IconService"],
        _shared_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
        _shared_db_service__WEBPACK_IMPORTED_MODULE_15__["DbService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessagingModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabaseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _pages_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__["ItemListComponent"],
        _pages_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessagingModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabaseModule"]] }); })();


/***/ }),

/***/ "kKoH":
/*!****************************************!*\
  !*** ./src/app/shared/busy.service.ts ***!
  \****************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BusyService {
    constructor() {
        this._isBusy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.counter = 0;
        this.isBusy = this._isBusy.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    do(block) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.counter++;
            this.updateValue();
            this._isBusy.next(true);
            try {
                return yield block();
            }
            finally {
                this.counter--;
                this.updateValue();
            }
        });
    }
    updateValue() {
        this._isBusy.next(this.counter > 0);
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(); };
BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac });


/***/ }),

/***/ "qCwG":
/*!******************************************!*\
  !*** ./src/app/shared/base.component.ts ***!
  \******************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// tslint:disable-next-line: directive-class-suffix
class BaseComponent {
    constructor() {
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseComponent });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/item-detail/item-detail.component */ "06w8");
/* harmony import */ var _pages_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/item-list/item-list.component */ "JJOU");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component: _pages_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "detail", component: _pages_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_1__["ItemDetailComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vftd":
/*!****************************************!*\
  !*** ./src/app/shared/storage-keys.ts ***!
  \****************************************/
/*! exports provided: StorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageKeys", function() { return StorageKeys; });
const prefix = "despoiler.";
const StorageKeys = {
    showActiveOnly: `${prefix}showActiveOnly`
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map