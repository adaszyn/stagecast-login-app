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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n    color: #FFFFFF;\n    height: 100%;\n    width: 80%;\n    max-width: 750px;\n    max-height: 560px;\n    background-color: #233947;\n    padding: 40px 50px;\n    box-sizing: border-box;\n    position: relative;\n}\n.logo-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 50px;\n}\n@media(max-width: 400px) {\n    .app-container {\n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"logo-container\">\n      <img style=\"margin: auto\" width=\"100px\" src=\"http://www.stagecast.se/assets/images/stagecast-logo-white.png\">          \n  </div>\n  <router-outlet></router-outlet>  \n</div>\n\n"

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
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/components/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_stgc_button_stgc_button_component__ = __webpack_require__("../../../../../src/app/components/stgc-button/stgc-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_stgc_input_stgc_input_component__ = __webpack_require__("../../../../../src/app/components/stgc-input/stgc-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_password_setup_password_setup_component__ = __webpack_require__("../../../../../src/app/components/password-setup/password-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_stgc_password_stgc_password_component__ = __webpack_require__("../../../../../src/app/components/stgc-password/stgc-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_password_change_success_password_change_success_component__ = __webpack_require__("../../../../../src/app/components/password-change-success/password-change-success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_6__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: 'setup', component: __WEBPACK_IMPORTED_MODULE_10__components_password_setup_password_setup_component__["a" /* PasswordSetupComponent */] },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_12__components_password_change_success_password_change_success_component__["a" /* PasswordChangeSuccessComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_stgc_button_stgc_button_component__["a" /* StgcButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_stgc_input_stgc_input_component__["a" /* StgcInputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_password_setup_password_setup_component__["a" /* PasswordSetupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_stgc_password_stgc_password_component__["a" /* StgcPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_password_change_success_password_change_success_component__["a" /* PasswordChangeSuccessComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                useHash: true
            }
            // { enableTracing: true }
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ greeting }}\n</p>\n\n<div class=\"bottom-wrapper\">\n  <div class=\"centered-container\">\n    <app-stgc-button route=\"/reset\" text=\"RESET PASSWORD\"></app-stgc-button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPageComponent = (function () {
    function LoginPageComponent() {
        this.greeting = 'Welcome to this awesome login page!';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/components/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginPageComponent);

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/password-change-success/password-change-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/password-change-success/password-change-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{successMessage}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/password-change-success/password-change-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PasswordChangeSuccessComponent = (function () {
    function PasswordChangeSuccessComponent() {
    }
    PasswordChangeSuccessComponent.prototype.ngOnInit = function () {
        var email = window._email;
        if (email) {
            this.successMessage = "The password for " + email + " has been successfully changed.";
        }
        else {
            this.successMessage = 'Something went wrong!';
        }
    };
    return PasswordChangeSuccessComponent;
}());
PasswordChangeSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-password-change-success',
        template: __webpack_require__("../../../../../src/app/components/password-change-success/password-change-success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/password-change-success/password-change-success.component.css")]
    })
], PasswordChangeSuccessComponent);

//# sourceMappingURL=password-change-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ greeting }}\n</p>\n\n\n<div class=\"bottom-wrapper\">\n    <div class=\"centered-container\">\n        <form>\n          <div class=\"input-container\">\n            <label for=\"password\">E-MAIL</label>\n            <div class=\"centered-container\">\n                <input autofocus [ngClass]=\"{ 'stgc-input': true, 'invalid': !isValid }\" type=\"email\" (keyup)=\"emailChanged($event)\" name=\"email-input\" label=\"E-MAIL\"/>\n              </div>\n          </div>\n         \n          \n          <app-stgc-button route=\"/setup\" text=\"SUBMIT\" [disabled]=\"!isValid\"></app-stgc-button>\n        </form>\n      </div>\n      \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var PasswordResetComponent = (function () {
    function PasswordResetComponent() {
        this.greeting = 'No worries! Enter your email and we will send you a link to reset your password.';
        this.isValid = false;
    }
    PasswordResetComponent.prototype.ngOnInit = function () { };
    PasswordResetComponent.prototype.validateEmail = function (email) {
        return EMAIL_REGEX.test(email);
    };
    PasswordResetComponent.prototype.emailChanged = function (_a) {
        var value = _a.target.value;
        if (this.validateEmail(value)) {
            window._email = value; // feels bad man.
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    };
    return PasswordResetComponent;
}());
PasswordResetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-password-reset',
        template: __webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/password-reset/password-reset.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PasswordResetComponent);

//# sourceMappingURL=password-reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/password-setup/password-setup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/password-setup/password-setup.component.html":
/***/ (function(module, exports) {

module.exports = "{{ greeting }}\n<div class=\"bottom-wrapper\">\n    <div class=\"centered-container\">\n        <b>{{error}}</b>\n        <form>\n          <div class=\"input-container\">\n            <label for=\"password\">NEW PASSWORD</label>\n            <input autofocus [ngClass]=\"{ 'stgc-input': true, 'invalid': !isValid }\" name=\"password\" type=\"password\" (keyup)=\"onPassword1Change($event)\"\n            />\n          </div>\n          <br/>\n          <div class=\"input-container\">\n            <label for=\"repeated-password\">REPEAT NEW PASSWORD</label>\n            <input [ngClass]=\"{ 'stgc-input': true, 'invalid': !isValid }\" name=\"repeated-password\" (keyup)=\"onPassword2Change($event)\"\n              type=\"password\" />\n          </div>\n          <br/>\n          \n          <app-stgc-button [disabled]=\"!isValid\" route=\"/success\" text=\"SUBMIT\"></app-stgc-button>\n        </form>\n      </div>\n      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/password-setup/password-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordSetupComponent = (function () {
    function PasswordSetupComponent(route) {
        this.route = route;
        this.greeting = "Now you can choose a new password for your Stagecast account.";
        this.password1 = '';
        this.isValid = false;
        this.password2 = '';
        this.email = '';
        this.error = '';
    }
    PasswordSetupComponent.prototype.ngOnInit = function () {
        this.email = this.route.snapshot.queryParams.email;
    };
    PasswordSetupComponent.prototype.onPassword1Change = function (_a) {
        var value = _a.target.value;
        this.password1 = value;
        this.validatePasswords();
    };
    PasswordSetupComponent.prototype.onPassword2Change = function (_a) {
        var value = _a.target.value;
        this.password2 = value;
        this.validatePasswords();
    };
    PasswordSetupComponent.prototype.validatePasswords = function () {
        this.error = "";
        if (this.isPasswordCorrect()) {
            if (this.doPasswordsMatch()) {
                this.isValid = true;
                return;
            }
            else {
                this.error = "Passwords don't match";
                this.isValid = false;
                return;
            }
        }
        this.error = "Password needs to be longer";
        this.isValid = false;
    };
    PasswordSetupComponent.prototype.isPasswordCorrect = function () {
        return this.password1.length > 1;
    };
    PasswordSetupComponent.prototype.doPasswordsMatch = function () {
        return this.password2 === this.password1;
    };
    return PasswordSetupComponent;
}());
PasswordSetupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-password-setup',
        template: __webpack_require__("../../../../../src/app/components/password-setup/password-setup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/password-setup/password-setup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], PasswordSetupComponent);

var _a;
//# sourceMappingURL=password-setup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stgc-button/stgc-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stgc-button {\n  border: 2px transparent;\n  width: 100%;\n  padding: 20px;\n  left: 667px;\n  top: 701px;\n  color: white;\n  background: #E43365;\n  border-radius: 100px;\n  cursor: pointer;\n  max-width: 320px;\n  transition: 0.2s ease all;\n}\n.stgc-button:hover {\n  border: 2px white;  \n  background: #EB1551;\n}\n.stgc-button.disabled {\n  background: #FF8CAC;\n  cursor: default;\n}    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stgc-button/stgc-button.component.html":
/***/ (function(module, exports) {

module.exports = "<label for=\"{{name}}\"></label>\n<button (click)=\"click($event)\" name=\"{{name}}\" [ngClass]=\"{ 'stgc-button': true, 'disabled': disabled }\">\n  {{ text }}\n</button>"

/***/ }),

/***/ "../../../../../src/app/components/stgc-button/stgc-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StgcButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StgcButtonComponent = (function () {
    function StgcButtonComponent(router) {
        this.router = router;
    }
    StgcButtonComponent.prototype.ngOnInit = function () {
    };
    StgcButtonComponent.prototype.click = function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.router.navigate([this.route]);
        }
    };
    return StgcButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StgcButtonComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StgcButtonComponent.prototype, "text", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StgcButtonComponent.prototype, "route", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], StgcButtonComponent.prototype, "disabled", void 0);
StgcButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stgc-button',
        template: __webpack_require__("../../../../../src/app/components/stgc-button/stgc-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stgc-button/stgc-button.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], StgcButtonComponent);

var _a;
//# sourceMappingURL=stgc-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stgc-input/stgc-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stgc-input/stgc-input.component.html":
/***/ (function(module, exports) {

module.exports = "<label for=\"{{name}}\">{{label}}</label>\n<input name=\"{{name}}\" type=\"text\"/>"

/***/ }),

/***/ "../../../../../src/app/components/stgc-input/stgc-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StgcInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StgcInputComponent = (function () {
    function StgcInputComponent() {
    }
    StgcInputComponent.prototype.ngOnInit = function () {
    };
    return StgcInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StgcInputComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StgcInputComponent.prototype, "label", void 0);
StgcInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stgc-input',
        template: __webpack_require__("../../../../../src/app/components/stgc-input/stgc-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stgc-input/stgc-input.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StgcInputComponent);

//# sourceMappingURL=stgc-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stgc-password/stgc-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stgc-password/stgc-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  stgc-password works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/stgc-password/stgc-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StgcPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StgcPasswordComponent = (function () {
    function StgcPasswordComponent() {
    }
    StgcPasswordComponent.prototype.ngOnInit = function () {
    };
    return StgcPasswordComponent;
}());
StgcPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stgc-password',
        template: __webpack_require__("../../../../../src/app/components/stgc-password/stgc-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stgc-password/stgc-password.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StgcPasswordComponent);

//# sourceMappingURL=stgc-password.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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