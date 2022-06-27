"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 9561:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4250:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 9561);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ 1173);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.module */ 7693);










let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule // Importante importar los componentes y los pipes
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Proyectos_ionic_05_peliculasApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 2040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ 841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _components_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/detalle/detalle.component */ 3887);







let Tab2Page = class Tab2Page {
    constructor(moviesService, modalCtrl) {
        this.moviesService = moviesService;
        this.modalCtrl = modalCtrl;
        this.textoBuscar = "";
        this.ideas = ["Spiderman", "Avenger", "El señor de los anillos", "La vida es bella"];
        this.peliculas = [];
        this.buscando = false;
    }
    buscar(event) {
        const valor = event.detail.value;
        if (valor.length === 0) {
            this.buscando = false;
            this.peliculas = [];
            return;
        }
        this.buscando = true;
        this.moviesService.buscarPeliculas(valor)
            .subscribe(resp => {
            console.log(resp);
            this.peliculas = resp["results"];
            this.buscando = false;
        });
    }
    verDetalle(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_3__.DetalleComponent,
                componentProps: {
                    id
                }
            });
            modal.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__.MoviesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab2',
        template: _E_Proyectos_ionic_05_peliculasApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 2040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Buscar película\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar>\n <ion-searchbar placeholder=\"Buscar Pelicula\" [value]=\"textoBuscar\"\n (ionChange)=\"buscar($event)\" [debounce]=\"700\" ></ion-searchbar>\n</ion-toolbar>\n<ion-content>\n\n<ion-grid *ngIf=\"buscando\">\n  <ion-row>\n    <ion-col style=\"text-align:center\">\n      <ion-spinner name=\"crescent\"></ion-spinner>\n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n\n  <ion-list *ngIf=\"peliculas.length === 0\">\n    <ion-list-header>\n      <ion-label>Ideas</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let idea of ideas\" (click)=\"textoBuscar= idea\"> \n      <!-- Al hacer clic se mostrará en el buscador la idea que he elegido miramos el value = textoBuscar-->\n      <ion-label color=\"primary\">{{idea}}</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let pelicula of peliculas\">\n\n        <ion-card>\n          <img [src]=\"pelicula.poster_path | imagen\" (click)=\"verDetalle(pelicula.id)\"> <!-- Importar el pipe imagen en .module.ts-->\n          <ion-card-header>\n            <ion-card-subtitle>{{pelicula.release_date}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <h2>{{pelicula.title}}</h2>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n     \n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map