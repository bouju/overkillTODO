(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayoutGap=\"20px\">\n  <app-header></app-header>\n    <div fxLayoutAlign=\"center center\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <a routerLink=\"/\" >Overkill TODO</a>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-detail/todo-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-detail/todo-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"todo-detail-card\" fxLayout=\"column\" *ngIf=\"todo\">\n    <mat-card-title [ngStyle]=\"{'text-decoration': todo.stateOfDo ? 'line-through' : ''}\">\n      {{ todo.title }}\n    </mat-card-title>\n    <mat-card-subtitle>{{ todo.stateOfDo ? 'Done' : 'To do' }}</mat-card-subtitle>\n    <mat-card-content>\n      <p>\n        {{ todo.description }}\n      </p>\n    </mat-card-content>\n  </mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-edit/todo-edit.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-edit/todo-edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>\n    Create a new Todo\n  </mat-card-title>\n  <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"todo-edit-component\">\n        <mat-form-field>\n          <input matInput placeholder=\"Title\" formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n        </mat-form-field>\n      </div>\n      <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!todoForm.valid\">Creation</button>\n  </form>\n</mat-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-item/todo-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-item/todo-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"todo-item-card\">\n    <a mat-stroked-button\n      [ngStyle]=\"{'text-decoration': todo.stateOfDo ? 'line-through' : ''}\"\n      style=\"cursor: pointer\"\n      [routerLink]=\"[todo.id]\"\n      routerLinkActive=\"active\">\n        {{ todo.title }}\n    </a>\n<!--     <mat-card-title\n      [ngStyle]=\"{'text-decoration': todo.stateOfDo ? 'line-through' : ''}\"\n      style=\"cursor: pointer\"\n      [routerLink]=\"[todo.id]\"\n      routerLinkActive=\"active\">\n      {{ todo.title }}\n    </mat-card-title> -->\n    <mat-card-title>\n        <mat-slide-toggle\n        class=\"todo-slide\"\n        [checked]=\"todo.stateOfDo\"\n        (change)=\"onChange()\"\n        >\n          {{ todo.stateOfDo ? 'Done' : 'To do' }}\n        </mat-slide-toggle>\n    </mat-card-title>\n  </mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list fxLayout=\"column\" fxLayoutGap=\"30px\">\n    <button mat-raised-button color=\"primary\" (click)=\"onNewTodo()\">new Todo</button>\n    <mat-list-item *ngFor=\"let todoElement of (todos | async ).todos.slice().reverse() | isDone : false\">\n        <app-todo-item [todo]=\"todoElement\"></app-todo-item>\n    </mat-list-item>\n    <mat-list-item *ngFor=\"let todoElement of (todos | async ).todos.slice().reverse() | isDone : true\">\n        <app-todo-item [todo]=\"todoElement\"></app-todo-item>\n    </mat-list-item>\n</mat-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-start/todo-start.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-start/todo-start.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"todo-stard\">Welcome to your awesome TODO list manager</h3>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n  <div class=\"todo-list\">\n    <app-todo-list></app-todo-list>\n  </div>\n  <div class=\"todo-detail\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-todo-list></app-todo-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todo_start_todo_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo-start/todo-start.component */ "./src/app/todo/todo-start/todo-start.component.ts");
/* harmony import */ var _todo_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo-detail/todo-detail.component */ "./src/app/todo/todo-detail/todo-detail.component.ts");
/* harmony import */ var _todo_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo-edit/todo-edit.component */ "./src/app/todo/todo-edit/todo-edit.component.ts");







const routes = [
    { path: '', redirectTo: '/todo', pathMatch: 'full' },
    { path: 'todo', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"], children: [
            { path: '', component: _todo_todo_start_todo_start_component__WEBPACK_IMPORTED_MODULE_4__["TodoStartComponent"] },
            { path: 'new', component: _todo_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_6__["TodoEditComponent"] },
            { path: ':id', component: _todo_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\r\n  display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'overkill TODO';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _todo_todo_list_store_todo_list_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todo-list/store/todo-list.reducer */ "./src/app/todo/todo-list/store/todo-list.reducer.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _todo_todo_list_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./todo/todo-list/todo-item/todo-item.component */ "./src/app/todo/todo-list/todo-item/todo-item.component.ts");
/* harmony import */ var _shared_is_done_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/is-done.pipe */ "./src/app/shared/is-done.pipe.ts");
/* harmony import */ var _todo_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./todo/todo-detail/todo-detail.component */ "./src/app/todo/todo-detail/todo-detail.component.ts");
/* harmony import */ var _todo_todo_start_todo_start_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./todo/todo-start/todo-start.component */ "./src/app/todo/todo-start/todo-start.component.ts");
/* harmony import */ var _todo_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./todo/todo-edit/todo-edit.component */ "./src/app/todo/todo-edit/todo-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _todo_todo_list_store_todo_list_effects__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./todo/todo-list/store/todo-list.effects */ "./src/app/todo/todo-list/store/todo-list.effects.ts");
































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _todo_todo_component__WEBPACK_IMPORTED_MODULE_12__["TodoComponent"],
            _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_13__["TodoListComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _todo_todo_list_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_25__["TodoItemComponent"],
            _shared_is_done_pipe__WEBPACK_IMPORTED_MODULE_26__["IsDonePipe"],
            _todo_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_27__["TodoDetailComponent"],
            _todo_todo_start_todo_start_component__WEBPACK_IMPORTED_MODULE_28__["TodoStartComponent"],
            _todo_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_29__["TodoEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_shared_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ todoList: _todo_todo_list_store_todo_list_reducer__WEBPACK_IMPORTED_MODULE_10__["todoListReducer"] }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["NoopAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_todo_todo_list_store_todo_list_effects__WEBPACK_IMPORTED_MODULE_31__["TodoEffects"]]),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() { }
    createDb() {
        // tslint:disable-next-line: prefer-const
        let todos = [
            // tslint:disable-next-line: max-line-length
            { id: 0, title: 'Make an awesome todo manager', stateOfDo: true, description: 'Our fantastic product owner has a wonderful, amazing and revolutionary idea... he wants to build a new Todo application. He has a pretty accurate vision of what he wants, and so comes with a backlog' },
            { id: 1, title: 'Present my todo manager', stateOfDo: false, description: '' }
        ];
        return { todos };
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/is-done.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/is-done.pipe.ts ***!
  \****************************************/
/*! exports provided: IsDonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDonePipe", function() { return IsDonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IsDonePipe = class IsDonePipe {
    transform(todoList, askedType) {
        if (todoList.length === 0) {
            return todoList;
        }
        const resultArray = [];
        for (const todo of todoList) {
            if (todo.stateOfDo === askedType) {
                resultArray.push(todo);
            }
        }
        return resultArray;
    }
};
IsDonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'isDone',
        pure: false
    })
], IsDonePipe);



/***/ }),

/***/ "./src/app/shared/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Todo {
    constructor(id, title, stateOfDo, description) {
        this.id = id;
        this.title = title;
        this.stateOfDo = stateOfDo;
        this.description = description;
    }
}


/***/ }),

/***/ "./src/app/shared/todo.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/todo.service.ts ***!
  \****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodoService = class TodoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = 'http://localhost:8080/api/';
    }
    getTodos() {
        return this.httpClient.get(this.SERVER_URL + 'todos');
    }
    getTodo(todoId) {
        return this.httpClient.get(`${this.SERVER_URL + 'todos'}/${todoId}`);
    }
    createTodo(todo) {
        return this.httpClient.post(`${this.SERVER_URL + 'todos'}`, todo);
    }
    deleteTodo(todoId) {
        return this.httpClient.delete(`${this.SERVER_URL + 'todos'}/${todoId}`);
    }
    updateTodo(todo) {
        return this.httpClient.put(`${this.SERVER_URL + 'todos'}/${todo.id}`, todo);
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoService);



/***/ }),

/***/ "./src/app/todo/todo-detail/todo-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/todo/todo-detail/todo-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-detail-card {\r\n  display: flex;\r\n  min-width: 600px;\r\n}\r\n\r\np {\r\n max-width: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWRldGFpbC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/todo/todo-detail/todo-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-detail/todo-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_shared_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/todo.model */ "./src/app/shared/todo.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TodoDetailComponent = class TodoDetailComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.todo = new src_app_shared_todo_model__WEBPACK_IMPORTED_MODULE_3__["Todo"](-1, '', false, '');
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((params) => {
            // tslint:disable-next-line: no-string-literal
            return +params['id'];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(id => {
            this.id = id;
            return this.store.select('todoList');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(todoState => {
            return todoState.todos.find((todo, index) => {
                return index === this.id;
            });
        })).subscribe(todo => {
            this.todo = todo;
        });
    }
};
TodoDetailComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-detail/todo-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-detail.component.css */ "./src/app/todo/todo-detail/todo-detail.component.css")).default]
    })
], TodoDetailComponent);



/***/ }),

/***/ "./src/app/todo/todo-edit/todo-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-edit/todo-edit.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-edit-component {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 600px;\r\n}\r\n\r\n.todo-edit-component > * {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWVkaXQvdG9kby1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1lZGl0L3RvZG8tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tZWRpdC1jb21wb25lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4udG9kby1lZGl0LWNvbXBvbmVudCA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/todo/todo-edit/todo-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-edit/todo-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _todo_todo_list_store_todo_list_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../todo/todo-list/store/todo-list.action */ "./src/app/todo/todo-list/store/todo-list.action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TodoEditComponent = class TodoEditComponent {
    constructor(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        let id;
        let title = '';
        let descritpion = '';
        let stateOfDo = false;
        this.store.select('todoList').subscribe((todosState) => {
            id = todosState.todos.reduce((max, todo) => (todo.id > max ? todo.id : max), todosState.todos[0].id) + 1;
            this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](descritpion),
                stateOfDo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](stateOfDo)
            });
        });
    }
    onSubmit() {
        this.store.dispatch(new _todo_todo_list_store_todo_list_action__WEBPACK_IMPORTED_MODULE_3__["AddTodo"](this.todoForm.value));
        this.router.navigate(['../'], { relativeTo: this.route });
    }
};
TodoEditComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
TodoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-edit/todo-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-edit.component.css */ "./src/app/todo/todo-edit/todo-edit.component.css")).default]
    })
], TodoEditComponent);



/***/ }),

/***/ "./src/app/todo/todo-list/store/todo-list.action.ts":
/*!**********************************************************!*\
  !*** ./src/app/todo/todo-list/store/todo-list.action.ts ***!
  \**********************************************************/
/*! exports provided: ADD_TODO_START, ADD_TODO, ADD_TODOS, UPDATE_STATE_OF_DO, AddTodo, AddTodoStart, AddTodos, UpdateStateOfDo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO_START", function() { return ADD_TODO_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODOS", function() { return ADD_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATE_OF_DO", function() { return UPDATE_STATE_OF_DO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoStart", function() { return AddTodoStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodos", function() { return AddTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStateOfDo", function() { return UpdateStateOfDo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ADD_TODO_START = 'ADD_TODO_START';
const ADD_TODO = 'ADD_TODO';
const ADD_TODOS = 'ADD_TODOS';
const UPDATE_STATE_OF_DO = 'UPDATE_STATE_OF_DO';
class AddTodo {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
}
class AddTodoStart {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TODO_START;
    }
}
class AddTodos {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TODOS;
    }
}
class UpdateStateOfDo {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_STATE_OF_DO;
    }
}


/***/ }),

/***/ "./src/app/todo/todo-list/store/todo-list.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-list/store/todo-list.effects.ts ***!
  \***********************************************************/
/*! exports provided: TodoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function() { return TodoEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _todo_list_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list.action */ "./src/app/todo/todo-list/store/todo-list.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let TodoEffects = class TodoEffects {
    constructor(actions, todoServ) {
        this.actions = actions;
        this.todoServ = todoServ;
        this.todoCreate = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todo_list_action__WEBPACK_IMPORTED_MODULE_4__["ADD_TODO_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((TodoData) => {
            return this.todoServ.createTodo(TodoData.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resData => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _todo_list_action__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](TodoData.payload));
            }));
        }));
    }
};
TodoEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
    { type: src_app_shared_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], TodoEffects.prototype, "todoCreate", void 0);
TodoEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"])()
], TodoEffects);



/***/ }),

/***/ "./src/app/todo/todo-list/store/todo-list.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-list/store/todo-list.reducer.ts ***!
  \***********************************************************/
/*! exports provided: todoListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListReducer", function() { return todoListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _todo_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.action */ "./src/app/todo/todo-list/store/todo-list.action.ts");


const initialState = {
    todos: Array()
};
function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case _todo_list_action__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"]:
            return Object.assign({}, state, { todos: [...state.todos, action.payload] });
        case _todo_list_action__WEBPACK_IMPORTED_MODULE_1__["ADD_TODOS"]:
            return Object.assign({}, state, { todos: [...state.todos, ...action.payload] });
        case _todo_list_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_STATE_OF_DO"]:
            const todo = state.todos[action.payload.index];
            todo.stateOfDo = !todo.stateOfDo;
            const updateTodo = Object.assign({}, todo, action.payload.todo);
            const updateTodos = [...state.todos];
            updateTodos[action.payload.index] = updateTodo;
            return Object.assign({}, state, { todos: updateTodos });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/todo/todo-list/todo-item/todo-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/todo/todo-list/todo-item/todo-item.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-item-card {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  min-width: 600px;\r\n}\r\n\r\n.todo-item-card button,\r\n.todo-item-card a {\r\n  margin-right: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8taXRlbS1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtaW4td2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4udG9kby1pdGVtLWNhcmQgYnV0dG9uLFxyXG4udG9kby1pdGVtLWNhcmQgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/todo/todo-list/todo-item/todo-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/todo/todo-list/todo-item/todo-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_todo_list_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/todo-list.action */ "./src/app/todo/todo-list/store/todo-list.action.ts");




let TodoItemComponent = class TodoItemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    onChange() {
        this.store.dispatch(new _store_todo_list_action__WEBPACK_IMPORTED_MODULE_3__["UpdateStateOfDo"]({ index: this.todo.id, todo: this.todo }));
    }
};
TodoItemComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodoItemComponent.prototype, "todo", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-item/todo-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todo/todo-list/todo-item/todo-item.component.css")).default]
    })
], TodoItemComponent);



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TodoListComponent = class TodoListComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.todos = this.store.select('todoList');
    }
    onNewTodo() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-list/todo-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo/todo-list/todo-list.component.css")).default]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/todo/todo-start/todo-start.component.css":
/*!**********************************************************!*\
  !*** ./src/app/todo/todo-start/todo-start.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-start {\r\n  display: flex;\r\n  min-width: 600px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLXN0YXJ0L3RvZG8tc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8tc3RhcnQvdG9kby1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tc3RhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/todo/todo-start/todo-start.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-start/todo-start.component.ts ***!
  \*********************************************************/
/*! exports provided: TodoStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStartComponent", function() { return TodoStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoStartComponent = class TodoStartComponent {
    constructor() { }
    ngOnInit() {
    }
};
TodoStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo-start/todo-start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-start.component.css */ "./src/app/todo/todo-start/todo-start.component.css")).default]
    })
], TodoStartComponent);



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n}\r\n\r\n.todo-list {\r\n  flex: 1;\r\n}\r\n\r\n.todo-detail {\r\n  flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50b2RvLWxpc3Qge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50b2RvLWRldGFpbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/todo.service */ "./src/app/shared/todo.service.ts");
/* harmony import */ var _todo_list_store_todo_list_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/store/todo-list.action */ "./src/app/todo/todo-list/store/todo-list.action.ts");





let TodoComponent = class TodoComponent {
    constructor(todoServ, store) {
        this.todoServ = todoServ;
        this.store = store;
    }
    ngOnInit() {
        this.todoServ.getTodos().subscribe((data) => {
            this.store.dispatch(new _todo_list_store_todo_list_action__WEBPACK_IMPORTED_MODULE_4__["AddTodos"](data));
        });
    }
};
TodoComponent.ctorParameters = () => [
    { type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/todo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")).default]
    })
], TodoComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SQUAD\Airbus DS the EXO\overkillTODO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map