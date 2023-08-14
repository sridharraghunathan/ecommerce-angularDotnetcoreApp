(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "YF+o":
/*!********************************************!*\
  !*** ./src/app/account/login.component.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/text-input/text-input.component */ "gA0Q");







class LoginComponent {
    constructor(accountService, activatedRoute, router) {
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
        this.createLoginForm();
    }
    createLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]
                    .pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        this.accountService.login(this.loginForm.value).subscribe(() => {
            this.router.navigateByUrl(this.returnUrl);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 5, consts: [[1, "d-flex", "justify-content-center"], [1, "login-wrapper", "my-auto"], [1, "login-title"], [3, "formGroup", "ngSubmit"], ["formControlName", "email", 3, "label"], ["formControlName", "password", 3, "label", "type"], ["name", "login", "id", "login", "type", "submit", 1, "btn", "btn-block", "login-btn", 3, "disabled"], [1, "login-wrapper-footer-text"], ["href", "#!", 1, "text-reset"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Password")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_4__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".login-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  padding-top: 24px;\n  padding-bottom: 24px;\n}\n\n@media (max-width: 575px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.login-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #b0adad;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #e7e7e7;\n  border-radius: 0;\n  padding: 9px 5px;\n  min-height: 40px;\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #b0adad;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  background-color: #fdbb28;\n  border-radius: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  margin-bottom: 14px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fdbb28;\n  background-color: #fff;\n  color: #fdbb28;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n  color: #080808;\n  font-size: 14px;\n  text-decoration: underline;\n  display: inline-block;\n  margin-bottom: 54px;\n}\n\n@media (max-width: 575px) {\n  .login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}\n\n.login-wrapper-footer-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.login-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n\n.login-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  object-position: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUFJO0VBQ0U7SUFDRSxXQUFBO0VBR047QUFDRjs7QUFISTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLTjs7QUFISTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU1OOztBQUdNO0VBQ0UsY0FBQTtBQWdCUjs7QUFmSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWtCTjs7QUFqQk07RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQW9CUjs7QUFuQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXNCTjs7QUFyQk07RUFDRTtJQUNFLG1CQUFBO0VBd0JSO0FBQ0Y7O0FBeEJJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTBCTjs7QUF4QkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEyQko7O0FBekJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFRyxpQkFBQTtFQUVBLHFCQUFBO0FBNEJQIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7IH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAubG9naW4td3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxyXG4gICAgLmxvZ2luLXdyYXBwZXIgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2IwYWRhZDsgfVxyXG4gICAgICBcclxuICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBwYWRkaW5nOiA5cHggNXB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cclxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cclxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cclxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XHJcbiAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cclxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XHJcbiAgICAubG9naW4td3JhcHBlciAubG9naW4tYnRuIHtcclxuICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYjI4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxyXG4gICAgICAubG9naW4td3JhcHBlciAubG9naW4tYnRuOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRiYjI4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZGJiMjg7IH1cclxuICAgIC5sb2dpbi13cmFwcGVyIGEuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgICBjb2xvcjogIzA4MDgwODtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1NHB4OyB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgICAgIC5sb2dpbi13cmFwcGVyIGEuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfSB9XHJcbiAgICAubG9naW4td3JhcHBlci1mb290ZXItdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICBcclxuICAubG9naW4tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cclxuICBcclxuICAubG9naW4taW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAtby1vYmplY3QtcG9zaXRpb246IGxlZnQ7XHJcbiAgICAgICBvYmplY3QtcG9zaXRpb246IGxlZnQ7IH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "YF+o");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "q8HH");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _account_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "q8HH":
/*!***********************************************!*\
  !*** ./src/app/account/register.component.ts ***!
  \***********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/text-input/text-input.component */ "gA0Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function RegisterComponent_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r2);
} }
function RegisterComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ul_10_li_1_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
class RegisterComponent {
    constructor(fb, accountService, router) {
        this.fb = fb;
        this.accountService = accountService;
        this.router = router;
    }
    ngOnInit() {
        this.createRegisterForm();
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            displayName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
                [this.emailExistCheck()]
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        this.accountService.register(this.registerForm.value).subscribe(Response => {
            this.router.navigateByUrl('/shop');
        }, error => {
            console.log(error);
            this.errors = error.errors;
            ;
        });
    }
    emailExistCheck() {
        return control => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                if (!control.value) {
                    return null;
                }
                //call the service to check email exist or not
                return this.accountService.emailExistCheck(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
                    return res ? { emailExists: true } : null;
                }));
            }));
        };
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 11, vars: 7, consts: [[1, "d-flex", "justify-content-center"], [1, "login-wrapper", "my-auto"], [1, "login-title"], [3, "formGroup", "ngSubmit"], ["formControlName", "displayName", 3, "label"], ["formControlName", "email", 3, "label"], ["formControlName", "password", 3, "label", "type"], ["name", "signup", "id", "signup", "type", "submit", 1, "btn", "btn-block", "login-btn", 3, "disabled"], ["class", "text-danger list-unstyled", 4, "ngIf"], [1, "text-danger", "list-unstyled"], [4, "ngFor", "ngForOf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-text-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-text-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_ul_10_Template, 2, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Password")("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".login-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  padding-top: 24px;\n  padding-bottom: 24px;\n}\n\n@media (max-width: 575px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.login-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #b0adad;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #e7e7e7;\n  border-radius: 0;\n  padding: 9px 5px;\n  min-height: 40px;\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #b0adad;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  background-color: #fdbb28;\n  border-radius: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  margin-bottom: 14px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n  border: 1px solid #fdbb28;\n  background-color: #fff;\n  color: #fdbb28;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n  color: #080808;\n  font-size: 14px;\n  text-decoration: underline;\n  display: inline-block;\n  margin-bottom: 54px;\n}\n\n@media (max-width: 575px) {\n  .login-wrapper[_ngcontent-%COMP%]   a.forgot-password-link[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}\n\n.login-wrapper-footer-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.login-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #000;\n  font-weight: bold;\n  margin-bottom: 25px;\n}\n\n.login-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  object-position: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNNLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNOOztBQUFNO0VBQ0U7SUFDRSxXQUFBO0VBR1I7QUFDRjs7QUFITTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLUjs7QUFITTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU1SOztBQUdRO0VBQ0UsY0FBQTtBQWdCVjs7QUFmTTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQWtCUjs7QUFqQlE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQW9CVjs7QUFuQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXNCUjs7QUFyQlE7RUFDRTtJQUNFLG1CQUFBO0VBd0JWO0FBQ0Y7O0FBeEJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTBCUjs7QUF4Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEyQk47O0FBekJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFRyxpQkFBQTtFQUVBLHFCQUFBO0FBNEJUIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDsgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAubG9naW4td3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfSB9XHJcbiAgICAgIC5sb2dpbi13cmFwcGVyIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cclxuICAgICAgICBcclxuICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XHJcbiAgICAgICAgLmxvZ2luLXdyYXBwZXIgLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2IwYWRhZDsgfVxyXG4gICAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNiMGFkYWQ7IH1cclxuICAgICAgICAubG9naW4td3JhcHBlciAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2IwYWRhZDsgfVxyXG4gICAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2IwYWRhZDsgfVxyXG4gICAgICAgIC5sb2dpbi13cmFwcGVyIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjYjBhZGFkOyB9XHJcbiAgICAgIC5sb2dpbi13cmFwcGVyIC5sb2dpbi1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYjI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cclxuICAgICAgICAubG9naW4td3JhcHBlciAubG9naW4tYnRuOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGJiMjg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgY29sb3I6ICNmZGJiMjg7IH1cclxuICAgICAgLmxvZ2luLXdyYXBwZXIgYS5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICMwODA4MDg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NHB4OyB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAgICAgICAubG9naW4td3JhcHBlciBhLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfSB9XHJcbiAgICAgIC5sb2dpbi13cmFwcGVyLWZvb3Rlci10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgXHJcbiAgICAubG9naW4tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxyXG4gICAgXHJcbiAgICAubG9naW4taW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgLW8tb2JqZWN0LXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgICAgICBvYmplY3QtcG9zaXRpb246IGxlZnQ7IH1cclxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "YF+o");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "q8HH");






const routes = [
    { path: "login", component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "register", component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] }
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map