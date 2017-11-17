webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainForm{ background-color:  #eee}\r\n\r\n.tbmain{\r\n    border:1px; border-style:solid;\r\n}\r\n.mainForm{ margin-top:4%; box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888}\r\n\r\n.back{margin-top: 3px;\r\n    display: inline-block;\r\n    position: absolute;}\r\n\r\n.mainAddDiv{\r\n    border-style: solid!important;\r\n    border-color: darkgray!important;\r\n    border:1px!important;\r\n    border-width: 1px!important;\r\n    box-shadow: 10px 10px 44px #888888!important;\r\n    \r\n}\r\n\r\n\r\n.searchInput{\r\n    width: 146px!important;\r\n    border: 1px!important;\r\n    border-color: lightgray!important;\r\n    border-style: solid!important;\r\n    height: 20px!important;\r\n    padding-top: 10px!important;\r\n    background-color: white!important;\r\n    font-weight:100;\r\n\r\n}\r\n\r\n.inputtext{\r\n    margin-left:2%!important;width:50%!important;\r\n}\r\n\r\n.icons{\r\n    color: black;font-weight: 900;\r\n}\r\n\r\n.providerList{\r\n\r\n    color:black;font-size:24px;font-family:arial;font-weight:700;\r\n    margin-left:1%\r\n}\r\n.meaningFull{\r\n    color: white;\r\n    font-size: 47px;\r\n    font-family: arial;\r\n    font-weight: 700;\r\n    position: absolute;\r\n    margin-top: -9%;\r\n    margin-left: 3%;\r\n}\r\n\r\n.searchIcon{color: white !important;\r\n    background-color: #0071BC!important;\r\n    height: 24px!important;\r\n    padding-top: 3px!important;\r\n    margin-top: 6px!important;\r\n    position: absolute!important;\r\n    margin-left:-2%!important;\r\n\r\n}\r\n\r\n\r\n.ng2-smart-th id.ng2-smart-title{\r\n    \r\n        border: 1px!important;\r\n        border-style: solid!important;\r\n        text-align: center!important;\r\n        box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n    }\r\n    .ng2-smart-title{\r\n        \r\n            border: 1px!important;\r\n            border-style: solid!important;\r\n            text-align: center!important;\r\n            box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n        }\r\n        .ng2-smart-th.ng2-smart-title{\r\n            \r\n                border: 1px!important;\r\n                border-style: solid!important;\r\n                text-align: center!important;\r\n                box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n            }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div  style=\"margin-left:11%;width:78%\" class=\"col-md-9 col-md-offset-3 mainAddDiv \">\r\n        <div>\r\n            <img style=\"width:100%\" [src]=\"providerImage\"/>\r\n            <span class=\"meaningFull\">UserDashboard</span>\r\n    \r\n        <div class=\"stepsBody\">\r\n            <div style=\"cursor:pointer\"(click)=\"back()\">   <i class=\"material-icons\">arrow_back</i> <span class=\"back\">Back</span></div>\r\n            \r\n\r\n    \r\n    <div *ngIf=\"commonServiceComponent.action=='add'\" class=\"col-md-6 col-md-offset-3\">\r\n        <h2>Add User</h2>\r\n        <form *ngIf=\"commonServiceComponent.action=='add'\" name=\"form\" (ngSubmit)=\"f.form.valid && add()\" #f=\"ngForm\" novalidate>\r\n                \r\n            \r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" ngModel [email]=true #email=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n            </div>  \r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button style=\"background-color:#0F3C6D;\" [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n             \r\n                <a style=\"background-color:#0F3C6D;\" [routerLink]=\"['/register']\" class=\"btn btn-link\">Back</a>\r\n            </div>\r\n        \r\n        </form>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"commonServiceComponent.action=='modify'\" class=\"col-md-6 col-md-offset-3\">\r\n        <h2>Update User</h2>\r\n        <form *ngIf=\"commonServiceComponent.action=='modify'\" name=\"form\" (ngSubmit)=\"f.form.valid && update()\" #f=\"ngForm\" novalidate>\r\n                \r\n            \r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n          \r\n\r\n\r\n\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button style=\"background-color:#0F3C6D;\" [disabled]=\"loading\" class=\"btn btn-primary\">Update</button>\r\n             \r\n                <a style=\"background-color:#0F3C6D;\" [routerLink]=\"['/register']\" class=\"btn btn-link\">Back</a>\r\n            </div>\r\n        \r\n        </form>\r\n    </div>\r\n\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlGlobal__ = __webpack_require__("../../../../../src/app/urlGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginmodel__ = __webpack_require__("../../../../../src/app/loginmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddComponent = (function () {
    function AddComponent(commonServiceComponent, router) {
        this.commonServiceComponent = commonServiceComponent;
        this.router = router;
        this.model = {};
        this.userStatus = "Select Status";
        this.status = ["Active", "InActive"];
        this.providerImage = __WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].PROVIDER_IMAGE;
        this.model.email = "";
        this.model.password = "";
        if (this.commonServiceComponent.action == "modify") {
            this.model.username = this.commonServiceComponent.modifyData.userName;
            this.model.password = this.commonServiceComponent.modifyData.userPassword;
            this.userStatus = this.commonServiceComponent.modifyData.userStatus;
            this.model.lastName = this.commonServiceComponent.modifyData.userLastName;
            this.model.email = this.commonServiceComponent.modifyData.userEmail;
        }
        if (this.commonServiceComponent.userStatus != "admin") {
            this.router.navigate(['']);
        }
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.update = function () {
        var _this = this;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_4__loginmodel__["a" /* LoginModel */]();
        this.loginModel.userId = this.commonServiceComponent.modifyData.userId;
        this.loginModel.userName = this.model.username.toLowerCase();
        this.loginModel.userPassword = this.model.password;
        // this.loginModel.userStatus=this.userStatus;
        this.loginModel.userEmail = this.model.email;
        this.loginModel.userLastName = this.model.lastName;
        this.commonServiceComponent.updateUser(this.loginModel)
            .subscribe(function (users) {
            if ((users.message == "Update successfully" && users.statusCode == "200")) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: '',
                    text: 'Update Successfully',
                    type: 'success'
                }).then(function () {
                    ;
                });
                _this.router.navigate(['/register']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: '',
                    text: 'Not Able to Update User Detail',
                    type: 'error'
                });
            }
        });
    };
    AddComponent.prototype.duplicateUser = function () {
    };
    AddComponent.prototype.add = function () {
        var _this = this;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_4__loginmodel__["a" /* LoginModel */]();
        this.loginModel.userName = this.model.username.toLowerCase();
        this.loginModel.userPassword = this.model.password;
        this.loginModel.userStatus = this.userStatus;
        this.loginModel.userEmail = this.model.email;
        this.loginModel.userLastName = this.model.lastName;
        this.commonServiceComponent.duplicateUser(this.loginModel)
            .subscribe(function (users) {
            if (users.message == "newUser" && users.statusCode == "200") {
                _this.commonServiceComponent.addUser(_this.loginModel)
                    .subscribe(function (users) {
                    if ((users.message == "User Detail Saved" && users.statusCode == "200")) {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            title: '',
                            text: 'Data Save Successfully',
                            type: 'success'
                        }).then(function () {
                            ;
                        });
                        _this.router.navigate(['/register']);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                            title: '',
                            text: 'Not Able to Save User Detail',
                            type: 'error'
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: '',
                    text: 'Username already exists',
                    type: 'error'
                });
            }
        });
    };
    AddComponent.prototype.back = function () {
        this.router.navigate(['/register']);
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AddComponent);
    return AddComponent;
    var _a, _b;
}());

//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/add/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    cursor: pointer;\r\n}\r\n\r\n.mainRow{\r\n\r\n    background-color: #0F3C6D!important;\r\n}\r\n\r\n.help-block {\r\n    font-size: 12px;\r\n}\r\n\r\n\r\n:host /deep/ ng2-smart-table tbody > tr > td { \r\n\ttext-align: center; \r\n    font-size: 15px;\r\n    color:darkslategray;\r\n    font-weight: 600;     \r\n}\r\n:host /deep/ ng2-smart-table thead > tr > th { \r\n    border: 1px!important;\r\n    border-style: hidden!important;\r\n    text-align: center!important;\r\n    box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n    font-size:16px;\r\n         \r\n}\r\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{\r\n    background-color:lightgray!important;\r\n}\r\n.ngx-datatable.material{height: 256px!important;box-shadow: 0px!important;}\r\n.ngx-datatable.material .datatable-footer{\r\n    margin-top: 2%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"text-align:center\" >\r\n    <h1 style=\"display:none;\">\r\n      Welcome to {{title}}!\r\n    </h1>\r\n   </div>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_index__ = __webpack_require__("../../../../../src/app/add/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__urlGlobal__ = __webpack_require__("../../../../../src/app/urlGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__commonpipe__ = __webpack_require__("../../../../../src/app/commonpipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_index__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__add_index__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_15__commonpipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__commonpipe__["b" /* FilterPipeCCN */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_materialize__["a" /* MaterializeModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__common_service__["a" /* CommonServiceComponent */], __WEBPACK_IMPORTED_MODULE_11__urlGlobal__["a" /* GlobalUrl */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_index__ = __webpack_require__("../../../../../src/app/add/index.ts");




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__add_index__["a" /* AddComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlGlobal__ = __webpack_require__("../../../../../src/app/urlGlobal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonServiceComponent = (function () {
    function CommonServiceComponent(http) {
        this.http = http;
        this.userStatus = "noValue";
        this.action = "notDefine";
    }
    CommonServiceComponent.prototype.loginAuthentication = function (loginModel) {
        // return this.http.get(URL.LOGIN_URL).map(res => res.json());
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].LOGIN_URL, loginModel, this.addCommonHeader())
            .map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.getRegistration = function (regitration) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].REGISTRATION_URL).map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.duplicateUser = function (loginModel) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].DUPLICATE_USER, loginModel, this.addCommonHeader())
            .map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.addUser = function (userModel) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].ADD_USER_URL, userModel, this.addCommonHeader())
            .map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.deleteUser = function (ID) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].DELETE_USER_URL, ID, this.addCommonHeader())
            .map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.updateUser = function (userModel) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlGlobal__["b" /* URL */].UPDATE_USER_URL, userModel, this.addCommonHeader())
            .map(function (res) { return res.json(); });
    };
    CommonServiceComponent.prototype.addCommonHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    CommonServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommonServiceComponent);
    return CommonServiceComponent;
    var _a;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/commonpipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterPipeCCN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input == null || input == "" || input == " " || !input || undefined == input) {
            return value;
        }
        else {
            return value.filter(function (v) { return v.userName.toLowerCase().indexOf(input) !== -1; });
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterPipe',
        })
    ], FilterPipe);
    return FilterPipe;
}());

var FilterPipeCCN = (function () {
    function FilterPipeCCN() {
    }
    FilterPipeCCN.prototype.transform = function (value, input) {
        if (input == null || input == "" || input == " " || !input || undefined == input) {
            return value;
        }
        else {
            return value.filter(function (v) { return v.provider_Id.toString().toLowerCase().indexOf(input) !== -1; });
        }
    };
    FilterPipeCCN = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'FilterPipeCCN',
        })
    ], FilterPipeCCN);
    return FilterPipeCCN;
}());

//# sourceMappingURL=commonpipe.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainForm{ margin-top:4%; box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888}\r\n.mainRow{color:white;text-align:center;background-color:#26a69a}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainForm\" >\r\n    <div class=\"panel-body\">\r\n            <div style=\"background-color:#0F3C6D;\"class=\"row mainRow\" >\r\n                    <h1 >\r\n                            User Dashboard\r\n                          </h1>\r\n\r\n        </div>\r\n     \r\n     \r\n     \r\n        <div class=\"row\">\r\n     \r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login(model.username)\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button style=\"background-color:#0F3C6D;\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                 \r\n                </div>\r\n            </form>\r\n            \r\n\r\n\r\n<!--      \r\n     \r\n     \r\n            <div class=\"input-field col s12\">\r\n                <input [(ngModel)]=\"userName\" id=\"username\" name=\"username\"  #username=\"ngModel\" required\r\n                    type=\"text\" class=\"validate\">\r\n                <label style=\"color:#0F3C6D;\" for=\"userName\">Username</label>\r\n              \r\n            </div>\r\n            <div class=\"input-field col s12\">\r\n                <input [(ngModel)]=\"userPassword\" id=\"password\" name=\"password\"  #password=\"ngModel\" required\r\n                    type=\"password\" class=\"validate\">\r\n                <label style=\"color:#0F3C6D;\" for=\"userPassword\">Password</label>\r\n              \r\n            </div>\r\n              \r\n\r\n        </div>\r\n\r\n         \r\n        <button style=\"background-color:#0F3C6D;\" (click)=\"login(userName)\" \r\n            class=\"btn waves-effect waves-light\" \r\n            >Login</button> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginmodel__ = __webpack_require__("../../../../../src/app/loginmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(commonServiceComponent, router) {
        this.commonServiceComponent = commonServiceComponent;
        this.router = router;
        this.model = {};
        //userName: string;
        //userPassword:string;
        this.userResult = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_3__loginmodel__["a" /* LoginModel */]();
        this.loginModel.userName = this.model.username.toLowerCase();
        this.loginModel.userPassword = this.model.password;
        this.commonServiceComponent.loginAuthentication(this.loginModel)
            .subscribe(function (users) {
            if (users.message.toLowerCase() == "admin" && users.statusCode == "200") {
                _this.commonServiceComponent.userName = user;
                _this.commonServiceComponent.userStatus = "admin";
                _this.router.navigate(['/register']);
            }
            else if (users.message == "userFound" && users.statusCode == "200") {
                user = "Hi " + user;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: user,
                    text: 'You are Login Succesfully!',
                    type: 'success'
                }).then(function () {
                    ;
                });
            }
            else {
                user = "Sorry " + user;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: user,
                    text: 'Unauthorize login attempt!',
                    type: 'error'
                });
                _this.model.username = "";
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=loginmodel.js.map

/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainForm{ background-color:  #eee}\r\n\r\n.tbmain{\r\n    border:1px; border-style:solid;\r\n}\r\n.mainForm{ margin-top:4%; box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888}\r\n\r\n.searchInput{\r\n    width: 146px!important;\r\n    border: 1px!important;\r\n    border-color: lightgray!important;\r\n    border-style: solid!important;\r\n    height: 20px!important;\r\n    padding-top: 7px!important;\r\n    background-color: white!important;\r\n \r\n    font-weight:100;\r\n\r\n}\r\n\r\n.searchIcons{\r\n    background-color: #0A2A50!important;\r\n    color: white!important;\r\n    height: 29px!important;\r\n    margin-left:28%;\r\n}\r\n\r\n.icons{\r\n    color: black;font-weight: 900;\r\n}\r\n.addIcon{\r\n    color: #0A2A50;\r\n    font-size: 70px;\r\n    margin-top: 1%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    float:right;\r\n}\r\n.providerList{\r\n\r\n    color:black;font-size:24px;font-family:arial;font-weight:700;\r\n    margin-left:1%\r\n}\r\n.meaningFull{\r\n    color: white;\r\n    font-size: 47px;\r\n    font-family: arial;\r\n    font-weight: 700;\r\n    position: absolute;\r\n    margin-top: -9%;\r\n    margin-left: 3%;\r\n}\r\n\r\n.searchIcon{color: white !important;\r\n    background-color: #0071BC!important;\r\n    height: 24px!important;\r\n    padding-top: 3px!important;\r\n    margin-top: 6px!important;\r\n    position: absolute!important;\r\n    margin-left:-2%!important;\r\n\r\n}\r\n.back{margin-top: 3px;\r\n    display: inline-block;\r\n    position: absolute;}\r\n\r\n.stepsBody{\r\n    margin-top:0%;\r\n    border-style: solid;\r\n    border-color: darkgray;\r\n    height: auto;\r\n    border-width: 1px;\r\n    height:auto;\r\n    \r\n}\r\n.ng2-smart-th id.ng2-smart-title{\r\n    \r\n        border: 1px!important;\r\n        border-style: solid!important;\r\n        text-align: center!important;\r\n        box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n    }\r\n    .ng2-smart-title{\r\n        \r\n            border: 1px!important;\r\n            border-style: solid!important;\r\n            text-align: center!important;\r\n            box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n        }\r\n        .ng2-smart-th.ng2-smart-title{\r\n            \r\n                border: 1px!important;\r\n                border-style: solid!important;\r\n                text-align: center!important;\r\n                box-shadow: 10px 10px 44px #888888; border-style:hidden;border-color:#888888;\r\n            }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"step1\" style=\"margin-left:11%;width:78%\" class=\"col-md-9 col-md-offset-3  \">\r\n    <div>\r\n        <img style=\"width:100%\" [src]=\"providerImage\"/>\r\n        <span class=\"meaningFull\">UserDashboard</span>\r\n\r\n    <div class=\"stepsBody\">\r\n        <div style=\"cursor:pointer\"(click)=\"back()\">   <i class=\"material-icons\">arrow_back</i> <span class=\"back\">Back to Login</span></div>\r\n        \r\n        <div><br/><br/>\r\n          \r\n       \r\n    <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;\r\n            \r\n        <span class=\"providerList\">User List</span>     <i  class=\"material-icons searchIcons\">&#xE8B6;</i><input type=\"text\" [(ngModel)]=\"searchby\" placeholder=\"Search By Username....\"  (ngModelChange)=\"valuechange($event)\"\r\n        class=\"searchInput\"/>\r\n   \r\n        <span (click)=\"calladd()\" style=\"float:right;cursor:pointer;\">click to ddd user &nbsp;\r\n            <i  class=\"material-icons addIcon\">add_circle_outline</i></span>\r\n    \r\n            <br/><br/>\r\n    \r\n            <div *ngIf=\"userResult\" style=\"width: 95%;\r\n            margin-left: 3%;\">\r\n            <ngx-datatable\r\n            [rows]=\"userResult | FilterPipe : searchby\"\r\n            [headerHeight]=\"40\"\r\n            [limit]=\"4\"\r\n            [footerHeight]=\"50\"\r\n            [columnMode]=\"'force'\"\r\n            class=\"material\"\r\n            [rowHeight]=\"50\"\r\n    \r\n            \r\n            >\r\n            \r\n           \r\n\r\n            <ngx-datatable-column name=\"UserName\"  max-width=\"200\" >\r\n                <template let-column=\"column\"  ngx-datatable-header-template>\r\n                    {{column.name}}\r\n                </template>\r\n                <template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row['userName']}} \r\n               </template>\r\n            </ngx-datatable-column>\r\n\r\n\r\n\r\n            <ngx-datatable-column name=\"LastName\" >\r\n                    <template let-column=\"column\"  ngx-datatable-header-template>\r\n                        \r\n                            {{column.name}}  \r\n                        </template>\r\n                    <template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                {{row['userLastName']}}\r\n                </template>\r\n                </ngx-datatable-column>\r\n\r\n            \r\n\r\n            <ngx-datatable-column name=\"UserPassword\"  max-width=\"200\" >\r\n                <template let-column=\"column\"  ngx-datatable-header-template>\r\n                    {{column.name}}\r\n                      </template>\r\n                <template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row['userPassword']}} \r\n            \r\n            </template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Email\" >\r\n                <template let-column=\"column\"  ngx-datatable-header-template>\r\n                    \r\n                        {{column.name}}  \r\n                    </template>\r\n                <template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            {{row['userEmail']}}\r\n            </template>\r\n            </ngx-datatable-column>\r\n\r\n\r\n           \r\n\r\n\r\n\r\n\r\n\r\n\r\n            <ngx-datatable-column name=\"Status\" >\r\n                \r\n                <template let-column=\"column\"  ngx-datatable-header-template>\r\n                    {{column.name}}\r\n                  \r\n                </template>\r\n                \r\n                \r\n                <template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n             <a style=\"cursor:pointer;color:#0A2A50\" (click)=\"modifyUser(row)\">Modify</a> | <a style=\"cursor:pointer;color:#0A2A50\" (click)=\"delete(row)\" >Delete</a>\r\n\r\n            </template>\r\n            \r\n            </ngx-datatable-column>\r\n    \r\n            </ngx-datatable>\r\n            <br/><br/>\r\n            </div>\r\n            \r\n            \r\n    </div>\r\n    \r\n    \r\n        \r\n    \r\n    \r\n    </div>\r\n    \r\n</div>  \r\n  \r\n    \r\n    </div>\r\n   \r\n    \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registermodel__ = __webpack_require__("../../../../../src/app/registermodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urlGlobal__ = __webpack_require__("../../../../../src/app/urlGlobal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(commonServiceComponent, router) {
        this.commonServiceComponent = commonServiceComponent;
        this.router = router;
        this.checkboxByDefault = false;
        this.blankCheckbox = false;
        this.rows = [];
        this.searchby = null;
        this.checkArrow = false;
        this.checkArrowname = false;
        this.checkArrowstatus = false;
        this.selectedProvider = [];
        this.providerImage = __WEBPACK_IMPORTED_MODULE_4__urlGlobal__["b" /* URL */].PROVIDER_IMAGE;
        this.selectedProvider = [];
        this.step1 = true;
        if (this.commonServiceComponent.userStatus.toLowerCase() != "admin") {
            this.router.navigate(['']);
        }
        else {
            this.getRegistrationData();
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.getRegistrationData = function () {
        var _this = this;
        this.registerModel = new __WEBPACK_IMPORTED_MODULE_3__registermodel__["a" /* RegisterModel */]();
        this.registerModel.userName = this.commonServiceComponent.userName;
        this.commonServiceComponent.getRegistration(this.registerModel).subscribe(function (users) {
            _this.userResult = users;
        });
    };
    RegisterComponent.prototype.delete = function (row) {
        var _this = this;
        this.registerModel = new __WEBPACK_IMPORTED_MODULE_3__registermodel__["a" /* RegisterModel */]();
        this.registerModel.userId = row.userId;
        this.commonServiceComponent.deleteUser(this.registerModel)
            .subscribe(function (users) {
            if ((users.message == "Delete successfully" && users.statusCode == "200")) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: '',
                    text: 'Delete successfully',
                    type: 'success'
                }).then(function () {
                    ;
                });
                _this.getRegistrationData();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: '',
                    text: 'Not Able to Delete User Detail',
                    type: 'error'
                });
            }
        });
    };
    RegisterComponent.prototype.calladd = function () {
        this.router.navigate(['add']);
        this.commonServiceComponent.action = "add";
    };
    RegisterComponent.prototype.modifyUser = function (row) {
        this.commonServiceComponent.action = "modify";
        this.commonServiceComponent.modifyData = row;
        this.router.navigate(['add']);
    };
    RegisterComponent.prototype.back = function () {
        this.router.navigate(['']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonServiceComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/registermodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModel; });
var RegisterModel = (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());

//# sourceMappingURL=registermodel.js.map

/***/ }),

/***/ "../../../../../src/app/urlGlobal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var URL = Object.freeze({
    //LOGIN_URL:'assets/mock-data/login.json?',
    ADD_USER_URL: 'user/adduser',
    UPDATE_USER_URL: 'user/updateuser',
    DELETE_USER_URL: 'user/deleteuser',
    DUPLICATE_USER: 'user/duplicate',
    LOGIN_URL: 'user/authenticateuser',
    REGISTRATION_URL: 'user/userlist',
    //REGISTRATION_URL:'assets/mock-data/register.json?',
    PROVIDER_IMAGE: 'assets/images/provider.png'
});
var GlobalUrl = (function () {
    function GlobalUrl() {
    }
    GlobalUrl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalUrl);
    return GlobalUrl;
}());

//# sourceMappingURL=urlGlobal.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map