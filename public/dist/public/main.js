(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'products/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: 'products/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_4__["ShowComponent"] },
    { path: 'products', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'products/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/products' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0px;\n    margin: 0px;\n    font-family: sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\t<head>\n\t\t<title>Commerce Manager</title>\n\n</head>\n\t<body>\n\t\t<div id=\"wrapper\">\n\n      <h1>Commerce Manager</h1>\n\n      <router-outlet></router-outlet>\n    </div><!--end of wrapper-->\n\t</body>\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./root.service */ "./src/app/root.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_6__["ShowComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_root_service__WEBPACK_IMPORTED_MODULE_9__["RootService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0px;\n    margin: 0px;\n    font-family: sans-serif; \n }\n \n .add_edit_btn {\n     background-color: rgb(28, 212, 111);\n     color: white;\n     padding: 5px 15px;\n     display: block;\n     margin-left: 30%;\n     margin-top: 5%;\n }\n \n .cancel_button {\n     background-color: pink;\n     color: white;\n     padding: 5px 15px;\n }\n \n #wrapper {\n     border: 2px solid black;\n     padding: 5%;\n }\n \n .error_msg {\n    color: purple;\n}\n \n #labels, #attributes{\n    display: inline-block;\n    margin-right: 15%;\n    margin-top: 4%;\n}\n \n h3 {\n    color: grey;\n}\n \n h1 {\n    margin-bottom: 4%;\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n  <head>\n    <title>Authors Home</title>\n  \n  </head>\n\n  <body *ngIf=\"product\">\n    <div id=\"wrapper\">\n      <h1>Edit this product</h1>\n\n      <div *ngIf = \"errorMessages\">\n        <p class=\"error_msg\" *ngFor = \"let error of objectKeys(errorMessages)\">{{errorMessages[error].message}}</p>\n      </div>\n\n      <form id=\"form\" (submit)=\"editSubmit(product_id)\">\n        \n        <div id=\"labels\">\n          <h3>Name:</h3> \n          <h3>Qty</h3> \n          <h3>Price</h3>\n        </div>\n\n        <div id=\"attributes\">\n            <div class=\"error_msg\" *ngIf=\"!name.valid\">\n                Name must be at least 3 characters.\n              </div>\n    \n              <input \n                type=\"text\" \n                name=\"name\" \n                [(ngModel)]=\"productEdits.name\"\n                #name=\"ngModel\"\n                required\n                minlength=\"3\"\n              /><br>\n    \n              <div class=\"error_msg\" *ngIf=\"!qty.valid\">\n                  Quantity must be greater than 0.\n              </div>\n              \n              <input \n                type=\"text\" \n                name=\"qty\" \n                [(ngModel)]=\"productEdits.qty\"\n                required\n                min=\"0\"\n                #qty=\"ngModel\"\n              /><br>\n    \n              <div class=\"error_msg\" *ngIf=\"!price.valid\">\n                  Price must be greater than 0.\n              </div>\n    \n              <input \n                type=\"text\" \n                name=\"price\" \n                [(ngModel)]=\"productEdits.price\"\n                required\n                min=\"0\"\n                #price=\"ngModel\"\n              /><br>\n        </div>\n\n        <button class= \"add_edit_btn\" \n          [disabled]=\"!price.valid || !qty.valid || !name.valid\">\n          UPDATE\n        </button>\n      </form>\n\n      <button class=\"cancel_button\" (click) = \"redirectHome()\">CANCEL</button> \n      <button class=\"cancel_button\" (click) = \"reset()\">RESET</button> \n\n    </div>\n\n  </body>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root.service */ "./src/app/root.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    // product = {name: "", type: "", description: "", skills: ["", "", ""]};
    function EditComponent(_rootService, router, route) {
        this._rootService = _rootService;
        this.router = router;
        this.route = route;
        this.productEdits = { name: "", qty: 0, price: 0 };
        this.product = [];
        this.product_id = 0;
        this.errorMessages = [];
        this.saveCopyObject = { name: "", qty: 0, price: 0 };
        // this.productEdits = {name: "", skills: ["","",""], type: "", description: ""};
        // this.product = [];
        // this.product_id = 0;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params); //log the entire params object
            console.log("Edit id passed through url=", params['id']); //log the value of id
            _this.product_id = params['id'];
            var editObservable = _this._rootService.getProductByID(_this.product_id);
            editObservable.subscribe(function (data) {
                console.log("Getting product back to edit: ", data);
                _this.productEdits = data["data"][0];
                _this.saveCopyObject.name = data["data"][0]["name"];
                _this.saveCopyObject.qty = data["data"][0]["qty"];
                _this.saveCopyObject.price = data["data"][0]["price"];
                console.log("Getting this.productEdits: ", _this.productEdits);
            });
        });
    };
    EditComponent.prototype.editSubmit = function (product_id) {
        var _this = this;
        console.log("In edit submit");
        console.log("Edit product in on submit: ", this.productEdits);
        var observable = this._rootService.editProduct(this.productEdits, product_id);
        observable.subscribe(function (data) {
            console.log("in Create observable, data: ", data);
            if (data["error"]) {
                _this.errorMessages = data["error"]["errors"];
                console.log("In if in observable create, errormessages: ", _this.errorMessages);
            }
            else {
                _this.redirectHome();
            }
        });
        // this.productEdits = { name: "", qty: 0, price: 0 };
    };
    EditComponent.prototype.redirectHome = function () {
        this.router.navigate(['/']);
    };
    EditComponent.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    EditComponent.prototype.reset = function () {
        this.productEdits = this.saveCopyObject;
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0px;\n    margin: 0px;\n    font-family: sans-serif;\n}\n\n#wrapper {\n    border: 2px solid black;\n    margin: 0 auto;\n    padding: 5%;\n}\n\n#add_btn {\n    padding: 5px 20px;\n    background-color:rgb(88, 116, 133);\n    color: white;\n    font-size: 14pt;\n    display: inline-block;\n    margin-left: 50%;\n    margin-bottom: 8%;\n    vertical-align: top;\n    border-radius: 5px;\n}\n\ntable {\n    width: 80%;\n}\n\ntable tr:nth-child(even) {\n    background-color: #eee;\n}\n\ntable tr:nth-child(odd) {\n    background-color: #fff;\n}\n\n.edit_btn {\n    padding: 5px 20px;\n    background-color: tan;\n    color: white;\n    border-radius: 5px;\n}\n\n.details_btn {\n    padding: 5px 20px;\n    background-color: pink;\n    color: white;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <title>Products Home</title>\n\n</head>\n\n<body>\n  <div id=\"wrapper\">\n\n    <h1>Product List</h1>\n    <a [routerLink]=\"['/products/new']\"><button id=\"add_btn\">Add New Product</button></a>\n    <br>\n\n    <table width=\"400\">\n      <tr>\n        <th class=\"top_row\">Id</th>\n        <th class=\"top_row\">Name</th>\n        <th class=\"top_row\">Qty</th>\n        <th class=\"top_row\">Price</th>\n        <th class=\"top_row\">Action</th>\n      </tr>\n      <tr *ngFor=\"let product of products\">\n        <td>{{product._id}}</td>\n        <td>{{product.name}}</td>\n        <td>{{product.qty}}</td>\n        <td>${{product.price}}</td>\n        <td>\n          <button class=\"details_btn\"[routerLink]=\"['/products/' + product._id]\">Details</button>\n          <button class=\"edit_btn\" [routerLink]=\"['/products/'+ product._id + '/edit']\">Edit</button>\n        </td>\n      </tr>\n    </table>\n\n    </div>\n  <!--end of wrapper-->\n  \n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root.service */ "./src/app/root.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_rootService) {
        this._rootService = _rootService;
        this.products = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProductsFromService();
    };
    HomeComponent.prototype.editProduct = function (product) {
        console.log("product to edit: ", product);
        return product;
        // this.editingproduct = true;
    };
    HomeComponent.prototype.getProductsFromService = function () {
        var _this = this;
        var observable = this._rootService.getProducts();
        observable.subscribe(function (data) {
            // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
            // This may be different for you, depending on how you set up your Task API.copy
            _this.products = data["data"];
            console.log("all products: ", _this.products);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n   padding: 0px;\n   margin: 0px;\n   font-family: sans-serif; \n}\n\n.add_edit_button {\n    background-color: rgb(39, 99, 168);\n    color: white;\n    padding: 5px 15px;\n    display: block;\n    margin-left: 30%;\n    margin-top: 5%;\n}\n\n.cancel_button {\n    background-color: pink;\n    color: white;\n    padding: 5px 15px;\n}\n\n.error_msg {\n    color: purple;\n}\n\n#labels, #attributes{\n    display: inline-block;\n    margin-right: 15%;\n    margin-top: 4%;\n}\n\nh1 {\n    margin-bottom: 3%;\n}\n\nh3 {\n    color: grey;\n}\n\n#add_product {\n    border: 2px solid black;\n    padding: 5%;\n    margin: 0 auto;\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html lang=\"en\">\n\n  <head>\n    <title>Products Home</title>\n  \n  </head>\n\n  <body>\n    <div id=\"add_product\">\n      <h1>New Product</h1>\n\n      <div *ngIf = \"errorMessages\">\n        <p class=\"error_msg\" *ngFor = \"let error of objectKeys(errorMessages)\">{{errorMessages[error].message}}</p>\n      </div>\n\n      <form id=\"form\" (submit)=\"onSubmit()\">\n\n        <div id=\"labels\">\n          <h3>Name:</h3> \n          <h3>Qty:</h3> \n          <h3>Price:</h3>\n        </div>\n\n        <div id=\"attributes\">\n\n          <div class=\"error_msg\" *ngIf=\"!name.valid\">\n            First name must be at least 3 characters.\n          </div>\n\n          <input \n            type=\"text\" \n            name=\"name\" \n            [(ngModel)]=\"newProduct.name\"\n            #name=\"ngModel\"\n            required\n            minlength=\"3\"\n          /><br>\n\n          <div class=\"error_msg\" *ngIf=\"!qty.valid\">\n              Quantity must be greater than 0.\n          </div>\n          \n          <input \n            type=\"text\" \n            name=\"qty\" \n            [(ngModel)]=\"newProduct.qty\"\n            required\n            min=\"0\"\n            #qty=\"ngModel\"\n          /><br>\n\n          <div class=\"error_msg\" *ngIf=\"!price.valid\">\n              Price must be greater than 0.\n          </div>\n\n          <input \n            type=\"text\" \n            name=\"price\" \n            [(ngModel)]=\"newProduct.price\"\n            required\n            min=\"0\"\n            #price=\"ngModel\"\n          /><br>\n\n        </div>\n        \n        <button class= \"add_edit_button\"\n          [disabled]=\"!price.valid || !qty.valid || !name.valid\">\n          CREATE\n        </button>\n      </form>\n\n      <button class=\"cancel_button\" (click) = \"redirectHome()\">Cancel</button>\n      <button class=\"cancel_button\" (click) = \"reset()\">RESET</button> \n\n    </div>\n\n  </body>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../root.service */ "./src/app/root.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.newProduct = { name: "", qty: 0, price: 0 };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("In submit");
        console.log("New Product in on submit: ", this.newProduct);
        var observable = this._httpService.addNewProduct(this.newProduct);
        observable.subscribe(function (data) {
            console.log("in Create observable, data: ", data);
            if (data["error"]) {
                _this.errorMessages = data["error"]["errors"];
                console.log("In if in observable create, errormessages: ", _this.errorMessages);
            }
            else {
                _this.redirectHome();
            }
        });
        this.newProduct = { name: "", qty: 0, price: 0 };
    };
    NewComponent.prototype.redirectHome = function () {
        this.router.navigate(['/']);
    };
    NewComponent.prototype.objectKeys = function (obj) {
        return Object.keys(obj);
    };
    NewComponent.prototype.reset = function () {
        this.newProduct = { name: "", qty: 0, price: 0 };
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_1__["RootService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/root.service.ts":
/*!*********************************!*\
  !*** ./src/app/root.service.ts ***!
  \*********************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootService = /** @class */ (function () {
    function RootService(_http) {
        this._http = _http;
        // this.getProducts();
        // this.getProductByID();
    }
    RootService.prototype.getProducts = function () {
        return this._http.get('/api/products');
    };
    RootService.prototype.getProductByID = function (product_id) {
        console.log("In service, Product id passed: ", product_id);
        return this._http.get('/api/products/' + product_id);
    };
    RootService.prototype.addNewProduct = function (newProduct) {
        console.log("In service, Product: ", newProduct);
        return this._http.post('/api/Products', newProduct);
    };
    RootService.prototype.editProduct = function (productEdits, product_id) {
        return this._http.patch('/api/Products/' + product_id, productEdits);
    };
    RootService.prototype.deleteProduct = function (product_id) {
        return this._http.delete('/api/Products/' + product_id);
    };
    RootService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RootService);
    return RootService;
}());



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0px;\n    margin: 0px;\n}\n\n#red_btn {\n    padding: 5px 20px;\n    border-radius: 3px;\n    color: white;\n    background-color: red;\n}\n\n.back_button {\n    border-radius: 3px;\n    padding: 5px 20px;\n    background-color: rgb(203, 178, 226);\n}\n\nh3 {\n    color: grey;\n}\n\n#labels, #attributes{\n    display: inline-block;\n    margin-right: 15%;\n}\n\n"

/***/ }),

/***/ "./src/app/show/show.component.html":
/*!******************************************!*\
  !*** ./src/app/show/show.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html lang=\"en\">\n\n    <div *ngIf=\"product\">\n      <h3>Product Details</h3><br><br>\n      \n      <div id=\"labels\">\n        <h3>Name </h3>\n        <h3>Qty </h3>\n        <h3>Price </h3>\n      </div>\n\n      <div id=\"attributes\">\n        <p>{{product.name}}</p>\n        <p>{{product.qty}}</p>\n        <p>${{product.price}}</p>\n      </div>\n\n\n      <button class=\"back_btn\" (click) = \"redirectHome()\">BACK</button>\n      <button id=\"red_btn\" [disabled]=\"product.qty != 0\" (click)=\"deleteById(product._id)\" >DELETE</button>\n\n    </div>\n    \n</html>\n"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../root.service */ "./src/app/root.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = /** @class */ (function () {
    function ShowComponent(_rootService, router, route) {
        var _this = this;
        this._rootService = _rootService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
            console.log(params); //log the entire params object
            console.log("Edit id passed through url=", params['id']); //log the value of id
            _this.product_id = params['id'];
            var editObservable = _this._rootService.getProductByID(_this.product_id);
            editObservable.subscribe(function (data) {
                console.log("Getting product back to show: ", data);
                _this.product = data["data"][0];
            });
        });
    }
    ShowComponent.prototype.ngOnInit = function () {
        // this.getproduct();
    };
    ShowComponent.prototype.redirectHome = function () {
        this.router.navigate(['/products']);
    };
    ShowComponent.prototype.deleteById = function (product_id) {
        // console.log("cake id: ",cake_id);
        var observable = this._rootService.deleteProduct(product_id);
        observable.subscribe(function (data) {
            console.log("Data in delete show: ", data);
        });
        this.redirectHome();
    };
    ShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ShowComponent);
    return ShowComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sadieflick/Desktop/DojoAssignments/MEAN/angular/belt_exam/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map