"use strict";
(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_circular_circular_module_ts"],{

/***/ 7739:
/*!*********************************************!*\
  !*** ./src/app/circular/circular.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularModule": () => (/* binding */ CircularModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/test.component */ 1132);
/* harmony import */ var _circular_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circular.routing */ 8609);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 8401);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ 5408);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class CircularModule {
}
CircularModule.ɵfac = function CircularModule_Factory(t) { return new (t || CircularModule)(); };
CircularModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CircularModule });
CircularModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__.MatTreeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_circular_routing__WEBPACK_IMPORTED_MODULE_1__.CircularRoutes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CircularModule, { declarations: [_test_test_component__WEBPACK_IMPORTED_MODULE_0__.TestComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__.MatTreeModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 8609:
/*!**********************************************!*\
  !*** ./src/app/circular/circular.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularRoutes": () => (/* binding */ CircularRoutes)
/* harmony export */ });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ 8401);

const CircularRoutes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent
    }
];


/***/ }),

/***/ 6026:
/*!********************************************!*\
  !*** ./src/app/circular/list/chat-data.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
const messages = [{
        from: 'Nirav Joshi',
        photo: 'assets/images/users/1.jpg',
        subject: 'Hey, how are you?',
        chat: [
            {
                type: 'odd',
                msg: 'Hi Luke.',
                date: new Date("2016-01-05")
            },
            {
                type: 'odd',
                msg: 'How are you my friend?',
                date: new Date("2016-01-06")
            },
            {
                type: 'even',
                msg: 'I am good and what about you?',
                date: new Date("2016-01-07")
            },
            {
                type: 'odd',
                msg: 'Lorem Ipsum is simply dummy text of the printing & type setting industry.',
                date: new Date("2016-01-08")
            },
            {
                type: 'even',
                msg: 'I would love to join the team.',
                date: new Date("2016-01-09")
            },
            {
                type: 'odd',
                msg: 'Well we have good budget for the project.',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Sunil Joshi',
        photo: 'assets/images/users/2.jpg',
        subject: 'Lorem ipsum done dkaghdka',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd2',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even2',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Vishal bhatt',
        photo: 'assets/images/users/3.jpg',
        subject: 'Thanks mate',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Genelia Desouza',
        photo: 'assets/images/users/4.jpg',
        subject: 'This is my shot',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Linda muke',
        photo: 'assets/images/users/5.jpg',
        subject: 'You have to do it with your self',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Vaibhav Zala',
        photo: 'assets/images/users/6.jpg',
        subject: 'No mate this is not',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even',
                date: new Date("2016-01-10")
            }
        ]
    }, {
        from: 'Kalu valand',
        photo: 'assets/images/users/1.jpg',
        subject: 'Arti thai gai ne?',
        chat: [
            {
                type: 'odd',
                msg: 'this is odd',
                date: new Date("2016-01-10")
            },
            {
                type: 'even',
                msg: 'this is even',
                date: new Date("2016-01-10")
            }
        ]
    }];


/***/ }),

/***/ 8401:
/*!*************************************************!*\
  !*** ./src/app/circular/list/list.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _chat_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-data */ 6026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);














function ListComponent_mat_tree_node_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r4.name, " ");
} }
function ListComponent_mat_tree_node_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 25)(1, "button", 27)(2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.treeControl.isExpanded(node_r5) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r5.name, " ");
} }
const _c0 = function (a0, a1) { return { "side-panel-opened": a0, "side-panel-closed": a1 }; };
const TREE_DATA = [
    {
        name: 'Credit monitoring dept',
        children: [
            { name: 'GF (109)',
                children: [
                    { name: '2022 - 23',
                        children: [
                            { name: 'HO/CrMD/CIR/GF:109/19' },
                            { name: 'HO/CrMD/CIR/GF:109/20' },
                            { name: 'HO/CrMD/CIR/GF:109/21' },
                        ] },
                    { name: '2023 - 24' },
                    { name: '2021 - 22' },
                ]
            },
            { name: 'FF (110)' },
            { name: 'SF (130)' },
        ]
    },
    {
        name: 'Managing director secretariat',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Chairman secretariat',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussels sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    }
];
class ListComponent {
    constructor() {
        this.sidePanelOpened = true;
        this.msg = '';
        this.messages = _chat_data__WEBPACK_IMPORTED_MODULE_0__.messages;
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
        this.selectedMessage = this.messages[0];
    }
    ngOnInit() {
    }
    // @ViewChild('myInput', { static: true }) myInput: ElementRef;
    isOver() {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }
    onSelect(message) {
        this.selectedMessage = message;
    }
    OnAddMsg() {
        // this.msg = this.myInput.nativeElement.value;
        if (this.msg != '') {
            this.selectedMessage.chat.push({
                type: 'even',
                msg: this.msg,
                date: new Date()
            });
        }
        // this.myInput.nativeElement.value = '';
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 40, vars: 10, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex.gt-md", "100", "fxFlex.gt-sm", "100", "fxFlex", "100"], [1, "mat-card-top", "chat-app"], [3, "ngClass"], [3, "mode", "opened", "open", "close"], ["chatnav", ""], ["color", "accent", 1, "no-shadow"], ["fxLayout", "row", "fxFlex", "100"], [1, "m-t-0", "font-14"], [3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["color", "accent", 1, "bg-success", "no-shadow", "chat-right-panel"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 1, "mr-1", 3, "click"], [1, "top-avatar", "m-r-10"], ["fxFlex", ""], [1, "font-14"], ["mat-icon-button", "", 1, "ml-1", 3, "matMenuTriggerFor"], ["x-position", "before"], ["them", "matMenu"], ["mat-menu-item", ""], [1, "chat-middle-box"], [1, "chat-footer"], ["fxLayout", "row", "layout-align", "start center"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-sidenav-container", 3)(4, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("open", function ListComponent_Template_mat_sidenav_open_4_listener() { return ctx.sidePanelOpened = true; })("close", function ListComponent_Template_mat_sidenav_close_4_listener() { return ctx.sidePanelOpened = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-toolbar", 6)(7, "div", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Circulars ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-tree", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListComponent_mat_tree_node_11_Template, 3, 1, "mat-tree-node", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListComponent_mat_tree_node_12_Template, 5, 3, "mat-tree-node", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-toolbar", 12)(14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "short_text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "HO/CrMD/CIR/GF:109/19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 18)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-menu", 19, 20)(27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Contact info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Delete chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card-content", 22)(34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Path : Root folder/Circular/HO/CrMD/CIR/GF:109/19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Document overview : HO/CrMD/CIR/GF:109/19");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card-actions", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx.sidePanelOpened, !ctx.sidePanelOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeNodeDef, _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeNodePadding, _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeNodeToggle, _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTree, _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__.MatTreeNode, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar], styles: ["mat-sidenav[_ngcontent-%COMP%] {\r\n    width: 340px;\r\n}\r\n.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\r\n    min-height: 600px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbn1cclxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 1132:
/*!*************************************************!*\
  !*** ./src/app/circular/test/test.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8205:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/tree.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTreeControl": () => (/* binding */ BaseTreeControl),
/* harmony export */   "CDK_TREE_NODE_OUTLET_NODE": () => (/* binding */ CDK_TREE_NODE_OUTLET_NODE),
/* harmony export */   "CdkNestedTreeNode": () => (/* binding */ CdkNestedTreeNode),
/* harmony export */   "CdkTree": () => (/* binding */ CdkTree),
/* harmony export */   "CdkTreeModule": () => (/* binding */ CdkTreeModule),
/* harmony export */   "CdkTreeNode": () => (/* binding */ CdkTreeNode),
/* harmony export */   "CdkTreeNodeDef": () => (/* binding */ CdkTreeNodeDef),
/* harmony export */   "CdkTreeNodeOutlet": () => (/* binding */ CdkTreeNodeOutlet),
/* harmony export */   "CdkTreeNodeOutletContext": () => (/* binding */ CdkTreeNodeOutletContext),
/* harmony export */   "CdkTreeNodePadding": () => (/* binding */ CdkTreeNodePadding),
/* harmony export */   "CdkTreeNodeToggle": () => (/* binding */ CdkTreeNodeToggle),
/* harmony export */   "FlatTreeControl": () => (/* binding */ FlatTreeControl),
/* harmony export */   "NestedTreeControl": () => (/* binding */ NestedTreeControl),
/* harmony export */   "getTreeControlFunctionsMissingError": () => (/* binding */ getTreeControlFunctionsMissingError),
/* harmony export */   "getTreeControlMissingError": () => (/* binding */ getTreeControlMissingError),
/* harmony export */   "getTreeMissingMatchingNodeDefError": () => (/* binding */ getTreeMissingMatchingNodeDefError),
/* harmony export */   "getTreeMultipleDefaultNodeDefsError": () => (/* binding */ getTreeMultipleDefaultNodeDefsError),
/* harmony export */   "getTreeNoValidDataSourceError": () => (/* binding */ getTreeNoValidDataSourceError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */

class BaseTreeControl {
  constructor() {
    /** A selection model with multi-selection to track expansion status. */
    this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.SelectionModel(true);
  }
  /** Toggles one single data node's expanded/collapsed state. */


  toggle(dataNode) {
    this.expansionModel.toggle(this._trackByValue(dataNode));
  }
  /** Expands one single data node. */


  expand(dataNode) {
    this.expansionModel.select(this._trackByValue(dataNode));
  }
  /** Collapses one single data node. */


  collapse(dataNode) {
    this.expansionModel.deselect(this._trackByValue(dataNode));
  }
  /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */


  isExpanded(dataNode) {
    return this.expansionModel.isSelected(this._trackByValue(dataNode));
  }
  /** Toggles a subtree rooted at `node` recursively. */


  toggleDescendants(dataNode) {
    this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
  }
  /** Collapse all dataNodes in the tree. */


  collapseAll() {
    this.expansionModel.clear();
  }
  /** Expands a subtree rooted at given data node recursively. */


  expandDescendants(dataNode) {
    let toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.select(...toBeProcessed.map(value => this._trackByValue(value)));
  }
  /** Collapses a subtree rooted at given data node recursively. */


  collapseDescendants(dataNode) {
    let toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.deselect(...toBeProcessed.map(value => this._trackByValue(value)));
  }

  _trackByValue(value) {
    return this.trackBy ? this.trackBy(value) : value;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */


class FlatTreeControl extends BaseTreeControl {
  /** Construct with flat tree data node functions getLevel and isExpandable. */
  constructor(getLevel, isExpandable, options) {
    super();
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.options = options;

    if (this.options) {
      this.trackBy = this.options.trackBy;
    }
  }
  /**
   * Gets a list of the data node's subtree of descendent data nodes.
   *
   * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
   * with correct levels.
   */


  getDescendants(dataNode) {
    const startIndex = this.dataNodes.indexOf(dataNode);
    const results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
    // The level of descendants of a tree node must be greater than the level of the given
    // tree node.
    // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
    // If we reach a node whose level is greater than the level of the tree node, we hit a
    // sibling of an ancestor.

    for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
      results.push(this.dataNodes[i]);
    }

    return results;
  }
  /**
   * Expands all data nodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
   * data nodes of the tree.
   */


  expandAll() {
    this.expansionModel.select(...this.dataNodes.map(node => this._trackByValue(node)));
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */


class NestedTreeControl extends BaseTreeControl {
  /** Construct with nested tree function getChildren. */
  constructor(getChildren, options) {
    super();
    this.getChildren = getChildren;
    this.options = options;

    if (this.options) {
      this.trackBy = this.options.trackBy;
    }
  }
  /**
   * Expands all dataNodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
   * data nodes of the tree.
   */


  expandAll() {
    this.expansionModel.clear();
    const allNodes = this.dataNodes.reduce((accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode], []);
    this.expansionModel.select(...allNodes.map(node => this._trackByValue(node)));
  }
  /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */


  getDescendants(dataNode) {
    const descendants = [];

    this._getDescendants(descendants, dataNode); // Remove the node itself


    return descendants.splice(1);
  }
  /** A helper function to get descendants recursively. */


  _getDescendants(descendants, dataNode) {
    descendants.push(dataNode);
    const childrenNodes = this.getChildren(dataNode);

    if (Array.isArray(childrenNodes)) {
      childrenNodes.forEach(child => this._getDescendants(descendants, child));
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(childrenNodes)) {
      // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
      // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
      childrenNodes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(Boolean)).subscribe(children => {
        for (const child of children) {
          this._getDescendants(descendants, child);
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */


const CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('CDK_TREE_NODE_OUTLET_NODE');
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */

class CdkTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }

}

CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
  return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CDK_TREE_NODE_OUTLET_NODE, 8));
};

CdkTreeNodeOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkTreeNodeOutlet,
  selectors: [["", "cdkTreeNodeOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkTreeNodeOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [CDK_TREE_NODE_OUTLET_NODE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Context provided to the tree node component. */


class CdkTreeNodeOutletContext {
  constructor(data) {
    this.$implicit = data;
  }

}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */


class CdkTreeNodeDef {
  /** @docs-private */
  constructor(template) {
    this.template = template;
  }

}

CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
  return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef));
};

CdkTreeNodeDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkTreeNodeDef,
  selectors: [["", "cdkTreeNodeDef", ""]],
  inputs: {
    when: ["cdkTreeNodeDefWhen", "when"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkTreeNodeDef]',
      inputs: ['when: cdkTreeNodeDefWhen']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when there is no usable data.
 * @docs-private
 */


function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * @docs-private
 */


function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * @docs-private
 */


function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
/**
 * Returns an error to be thrown when there are tree control.
 * @docs-private
 */


function getTreeControlMissingError() {
  return Error(`Could not find a tree control for the tree.`);
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * @docs-private
 */


function getTreeControlFunctionsMissingError() {
  return Error(`Could not find functions for nested/flat tree in tree control.`);
}
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */


class CdkTree {
  constructor(_differs, _changeDetectorRef) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    /** Subject that emits when the component has been destroyed. */

    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** Level of nodes */

    this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
    //     Remove the MAX_VALUE in viewChange

    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
  }
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */


  get dataSource() {
    return this._dataSource;
  }

  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }

  ngOnInit() {
    this._dataDiffer = this._differs.find([]).create(this.trackBy);

    if (!this.treeControl && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTreeControlMissingError();
    }
  }

  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();

    this.viewChange.complete();

    this._onDestroy.next();

    this._onDestroy.complete();

    if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
      this.dataSource.disconnect(this);
    }

    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();

      this._dataSubscription = null;
    }
  }

  ngAfterContentChecked() {
    const defaultNodeDefs = this._nodeDefs.filter(def => !def.when);

    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }

    this._defaultNodeDef = defaultNodeDefs[0];

    if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
      this._observeRenderChanges();
    }
  } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
  //     and nested trees.

  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */


  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
      this.dataSource.disconnect(this);
    }

    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();

      this._dataSubscription = null;
    } // Remove the all dataNodes if there is now no data source


    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }

    this._dataSource = dataSource;

    if (this._nodeDefs) {
      this._observeRenderChanges();
    }
  }
  /** Set up a subscription for the data provided by the data source. */


  _observeRenderChanges() {
    let dataStream;

    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this._dataSource);
    }

    if (dataStream) {
      this._dataSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(data => this.renderNodeChanges(data));
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getTreeNoValidDataSourceError();
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */


  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);

    if (!changes) {
      return;
    }

    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);

        this._levels.delete(item.item);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });

    this._changeDetectorRef.detectChanges();
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */


  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }

    const nodeDef = this._nodeDefs.find(def => def.when && def.when(i, data)) || this._defaultNodeDef;

    if (!nodeDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }

    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */


  insertNode(nodeData, index, viewContainer, parentData) {
    const node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view


    const context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
    // Otherwise, use the level of parent node.

    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
    } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
      context.level = this._levels.get(parentData) + 1;
    } else {
      context.level = 0;
    }

    this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet


    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
    // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
    //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }

}

CdkTree.ɵfac = function CdkTree_Factory(t) {
  return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

CdkTree.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CdkTree,
  selectors: [["cdk-tree"]],
  contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nodeDefs = _t);
    }
  },
  viewQuery: function CdkTree_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](CdkTreeNodeOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "cdk-tree"],
  inputs: {
    dataSource: "dataSource",
    treeControl: "treeControl",
    trackBy: "trackBy"
  },
  exportAs: ["cdkTree"],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function CdkTree_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 0);
    }
  },
  dependencies: [CdkTreeNodeOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'cdk-tree',
      exportAs: 'cdkTree',
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        'class': 'cdk-tree',
        'role': 'tree'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.Default
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
    }];
  }, {
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    treeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    _nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */


class CdkTreeNode {
  constructor(_elementRef, _tree) {
    this._elementRef = _elementRef;
    this._tree = _tree;
    /** Subject that emits when the component has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** Emits when the node's data has changed. */

    this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    CdkTreeNode.mostRecentTreeNode = this;
    this.role = 'treeitem';
  }
  /**
   * The role of the tree node.
   * @deprecated The correct role is 'treeitem', 'group' should not be used. This input will be
   *   removed in a future version.
   * @breaking-change 12.0.0 Remove this input
   */


  get role() {
    return 'treeitem';
  }

  set role(_role) {
    // TODO: move to host after View Engine deprecation
    this._elementRef.nativeElement.setAttribute('role', _role);
  }
  /** The tree node's data. */


  get data() {
    return this._data;
  }

  set data(value) {
    if (value !== this._data) {
      this._data = value;

      this._setRoleFromData();

      this._dataChanges.next();
    }
  }

  get isExpanded() {
    return this._tree.treeControl.isExpanded(this._data);
  }

  get level() {
    // If the treeControl has a getLevel method, use it to get the level. Otherwise read the
    // aria-level off the parent node and use it as the level for this node (note aria-level is
    // 1-indexed, while this property is 0-indexed, so we don't need to increment).
    return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : this._parentNodeAriaLevel;
  }

  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);

    this._elementRef.nativeElement.setAttribute('aria-level', `${this.level + 1}`);
  }

  ngOnDestroy() {
    // If this is the last tree node being destroyed,
    // clear out the reference to avoid leaking memory.
    if (CdkTreeNode.mostRecentTreeNode === this) {
      CdkTreeNode.mostRecentTreeNode = null;
    }

    this._dataChanges.complete();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Focuses the menu item. Implements for FocusableOption. */


  focus() {
    this._elementRef.nativeElement.focus();
  } // TODO: role should eventually just be set in the component host


  _setRoleFromData() {
    if (!this._tree.treeControl.isExpandable && !this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }

    this.role = 'treeitem';
  }

}
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */


CdkTreeNode.mostRecentTreeNode = null;

CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
  return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTree));
};

CdkTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkTreeNode,
  selectors: [["cdk-tree-node"]],
  hostAttrs: [1, "cdk-tree-node"],
  hostVars: 1,
  hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
    }
  },
  inputs: {
    role: "role"
  },
  exportAs: ["cdkTreeNode"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'cdk-tree-node',
      exportAs: 'cdkTreeNode',
      host: {
        'class': 'cdk-tree-node',
        '[attr.aria-expanded]': 'isExpanded'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: CdkTree
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;

  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }

  if (!parent) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw Error('Incorrect tree structure containing detached node.');
    } else {
      return -1;
    }
  } else if (parent.classList.contains('cdk-nested-tree-node')) {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(parent.getAttribute('aria-level'));
  } else {
    // The ancestor element is the cdk-tree itself
    return 0;
  }
}

function isNodeElement(element) {
  const classList = element.classList;
  return !!((classList === null || classList === void 0 ? void 0 : classList.contains('cdk-nested-tree-node')) || (classList === null || classList === void 0 ? void 0 : classList.contains('cdk-tree')));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * The children of node will be automatically added to `cdkTreeNodeOutlet`.
 */


class CdkNestedTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, _differs) {
    super(elementRef, tree);
    this._differs = _differs;
  }

  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

    if (!this._tree.treeControl.getChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTreeControlFunctionsMissingError();
    }

    const childrenNodes = this._tree.treeControl.getChildren(this.data);

    if (Array.isArray(childrenNodes)) {
      this.updateChildrenNodes(childrenNodes);
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(childrenNodes)) {
      childrenNodes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(result => this.updateChildrenNodes(result));
    }

    this.nodeOutlet.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  } // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.


  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    this._clear();

    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */


  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();

    if (children) {
      this._children = children;
    }

    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;

      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      // Reset the data differ if there's no children nodes displayed
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */


  _clear() {
    const outlet = this._getNodeOutlet();

    if (outlet) {
      outlet.viewContainer.clear();

      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */


  _getNodeOutlet() {
    const outlets = this.nodeOutlet; // Note that since we use `descendants: true` on the query, we have to ensure
    // that we don't pick up the outlet of a child node by accident.

    return outlets && outlets.find(outlet => !outlet._node || outlet._node === this);
  }

}

CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
  return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers));
};

CdkNestedTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkNestedTreeNode,
  selectors: [["cdk-nested-tree-node"]],
  contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
    }
  },
  hostAttrs: [1, "cdk-nested-tree-node"],
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["cdkNestedTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: CdkTreeNode,
    useExisting: CdkNestedTreeNode
  }, {
    provide: CDK_TREE_NODE_OUTLET_NODE,
    useExisting: CdkNestedTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'cdk-nested-tree-node',
      exportAs: 'cdkNestedTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        'class': 'cdk-nested-tree-node'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.IterableDiffers
    }];
  }, {
    nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
/** Regex used to split a string on its CSS units. */


const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */

class CdkTreeNodePadding {
  constructor(_treeNode, _tree, _element, _dir) {
    this._treeNode = _treeNode;
    this._tree = _tree;
    this._element = _element;
    this._dir = _dir;
    /** Subject that emits when the component has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** CSS units used for the indentation value. */

    this.indentUnits = 'px';
    this._indent = 40;

    this._setPadding();

    if (_dir) {
      _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => this._setPadding(true));
    } // In Ivy the indentation binding might be set before the tree node's data has been added,
    // which means that we'll miss the first render. We have to subscribe to changes in the
    // data to ensure that everything is up to date.


    _treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */


  get level() {
    return this._level;
  }

  set level(value) {
    this._setLevelInput(value);
  }
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */


  get indent() {
    return this._indent;
  }

  set indent(indent) {
    this._setIndentInput(indent);
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */


  _paddingIndent() {
    const nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === 'number' ? `${level * this._indent}${this.indentUnits}` : null;
  }

  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();

    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
      const resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';
      element.style[paddingProp] = padding || '';
      element.style[resetProp] = '';
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */


  _setLevelInput(value) {
    // Set to null as the fallback value so that _setPadding can fall back to the node level if the
    // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
    // they set 0 explicitly.
    this._level = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value, null);

    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */


  _setIndentInput(indent) {
    let value = indent;
    let units = 'px';

    if (typeof indent === 'string') {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }

    this.indentUnits = units;
    this._indent = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceNumberProperty)(value);

    this._setPadding();
  }

}

CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
  return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8));
};

CdkTreeNodePadding.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkTreeNodePadding,
  selectors: [["", "cdkTreeNodePadding", ""]],
  inputs: {
    level: ["cdkTreeNodePadding", "level"],
    indent: ["cdkTreeNodePaddingIndent", "indent"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkTreeNodePadding]'
    }]
  }], function () {
    return [{
      type: CdkTreeNode
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
      }]
    }];
  }, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['cdkTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['cdkTreeNodePaddingIndent']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Node toggle to expand/collapse the node.
 */


class CdkTreeNodeToggle {
  constructor(_tree, _treeNode) {
    this._tree = _tree;
    this._treeNode = _treeNode;
    this._recursive = false;
  }
  /** Whether expand/collapse the node recursively. */


  get recursive() {
    return this._recursive;
  }

  set recursive(value) {
    this._recursive = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }

  _toggle(event) {
    this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
    event.stopPropagation();
  }

}

CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
  return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CdkTreeNode));
};

CdkTreeNodeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: CdkTreeNodeToggle,
  selectors: [["", "cdkTreeNodeToggle", ""]],
  hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
        return ctx._toggle($event);
      });
    }
  },
  inputs: {
    recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkTreeNodeToggle]',
      host: {
        '(click)': '_toggle($event)'
      }
    }]
  }], function () {
    return [{
      type: CdkTree
    }, {
      type: CdkTreeNode
    }];
  }, {
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['cdkTreeNodeToggleRecursive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

class CdkTreeModule {}

CdkTreeModule.ɵfac = function CdkTreeModule_Factory(t) {
  return new (t || CdkTreeModule)();
};

CdkTreeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CdkTreeModule
});
CdkTreeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4972:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/tree.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatNestedTreeNode": () => (/* binding */ MatNestedTreeNode),
/* harmony export */   "MatTree": () => (/* binding */ MatTree),
/* harmony export */   "MatTreeFlatDataSource": () => (/* binding */ MatTreeFlatDataSource),
/* harmony export */   "MatTreeFlattener": () => (/* binding */ MatTreeFlattener),
/* harmony export */   "MatTreeModule": () => (/* binding */ MatTreeModule),
/* harmony export */   "MatTreeNestedDataSource": () => (/* binding */ MatTreeNestedDataSource),
/* harmony export */   "MatTreeNode": () => (/* binding */ MatTreeNode),
/* harmony export */   "MatTreeNodeDef": () => (/* binding */ MatTreeNodeDef),
/* harmony export */   "MatTreeNodeOutlet": () => (/* binding */ MatTreeNodeOutlet),
/* harmony export */   "MatTreeNodePadding": () => (/* binding */ MatTreeNodePadding),
/* harmony export */   "MatTreeNodeToggle": () => (/* binding */ MatTreeNodeToggle)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const _MatTreeNodeBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode));
/**
 * Wrapper for the CdkTree node with Material design styles.
 */


class MatTreeNode extends _MatTreeNodeBase {
  constructor(elementRef, tree, tabIndex) {
    super(elementRef, tree);
    this.tabIndex = Number(tabIndex) || 0;
  } // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.


  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}

MatTreeNode.ɵfac = function MatTreeNode_Factory(t) {
  return new (t || MatTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'));
};

MatTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatTreeNode,
  selectors: [["mat-tree-node"]],
  hostAttrs: [1, "mat-tree-node"],
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  exportAs: ["matTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
    useExisting: MatTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'mat-tree-node',
      exportAs: 'matTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
        useExisting: MatTreeNode
      }],
      host: {
        'class': 'mat-tree-node'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();
/**
 * Wrapper for the CdkTree node definition with Material design styles.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */


class MatTreeNodeDef extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef {}

MatTreeNodeDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatTreeNodeDef_BaseFactory;
  return function MatTreeNodeDef_Factory(t) {
    return (ɵMatTreeNodeDef_BaseFactory || (ɵMatTreeNodeDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatTreeNodeDef)))(t || MatTreeNodeDef);
  };
}();

MatTreeNodeDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatTreeNodeDef,
  selectors: [["", "matTreeNodeDef", ""]],
  inputs: {
    when: ["matTreeNodeDefWhen", "when"],
    data: ["matTreeNode", "data"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
    useExisting: MatTreeNodeDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matTreeNodeDef]',
      inputs: ['when: matTreeNodeDefWhen'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
        useExisting: MatTreeNodeDef
      }]
    }]
  }], null, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matTreeNode']
    }]
  });
})();
/**
 * Wrapper for the CdkTree nested node with Material design styles.
 */


class MatNestedTreeNode extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode {
  constructor(elementRef, tree, differs, tabIndex) {
    super(elementRef, tree, differs);
    this._disabled = false;
    this.tabIndex = Number(tabIndex) || 0;
  }
  /** Whether the node is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Tabindex for the node. */


  get tabIndex() {
    return this.disabled ? -1 : this._tabIndex;
  }

  set tabIndex(value) {
    // If the specified tabIndex value is null or undefined, fall back to the default value.
    this._tabIndex = value != null ? value : 0;
  } // This is a workaround for https://github.com/angular/angular/issues/19145
  // In aot mode, the lifecycle hooks from parent class are not called.
  // TODO(tinayuangao): Remove when the angular issue #19145 is fixed


  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}

MatNestedTreeNode.ɵfac = function MatNestedTreeNode_Factory(t) {
  return new (t || MatNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'));
};

MatNestedTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatNestedTreeNode,
  selectors: [["mat-nested-tree-node"]],
  hostAttrs: [1, "mat-nested-tree-node"],
  inputs: {
    role: "role",
    disabled: "disabled",
    tabIndex: "tabIndex",
    node: ["matNestedTreeNode", "node"]
  },
  exportAs: ["matNestedTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode,
    useExisting: MatNestedTreeNode
  }, {
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
    useExisting: MatNestedTreeNode
  }, {
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE,
    useExisting: MatNestedTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatNestedTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'mat-nested-tree-node',
      exportAs: 'matNestedTreeNode',
      inputs: ['role', 'disabled', 'tabIndex'],
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE,
        useExisting: MatNestedTreeNode
      }],
      host: {
        'class': 'mat-nested-tree-node'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.IterableDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    node: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matNestedTreeNode']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
/**
 * Wrapper for the CdkTree padding with Material design styles.
 */


class MatTreeNodePadding extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }

  set level(value) {
    this._setLevelInput(value);
  }
  /** The indent for each level. Default number 40px from material design menu sub-menu spec. */


  get indent() {
    return this._indent;
  }

  set indent(indent) {
    this._setIndentInput(indent);
  }

}

MatTreeNodePadding.ɵfac = /* @__PURE__ */function () {
  let ɵMatTreeNodePadding_BaseFactory;
  return function MatTreeNodePadding_Factory(t) {
    return (ɵMatTreeNodePadding_BaseFactory || (ɵMatTreeNodePadding_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatTreeNodePadding)))(t || MatTreeNodePadding);
  };
}();

MatTreeNodePadding.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatTreeNodePadding,
  selectors: [["", "matTreeNodePadding", ""]],
  inputs: {
    level: ["matTreeNodePadding", "level"],
    indent: ["matTreeNodePaddingIndent", "indent"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
    useExisting: MatTreeNodePadding
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matTreeNodePadding]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
        useExisting: MatTreeNodePadding
      }]
    }]
  }], null, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matTreeNodePaddingIndent']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */


class MatTreeNodeOutlet {
  constructor(viewContainer, _node) {
    this.viewContainer = viewContainer;
    this._node = _node;
  }

}

MatTreeNodeOutlet.ɵfac = function MatTreeNodeOutlet_Factory(t) {
  return new (t || MatTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE, 8));
};

MatTreeNodeOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatTreeNodeOutlet,
  selectors: [["", "matTreeNodeOutlet", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet,
    useExisting: MatTreeNodeOutlet
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeNodeOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matTreeNodeOutlet]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet,
        useExisting: MatTreeNodeOutlet
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CDK_TREE_NODE_OUTLET_NODE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTable with Material design styles.
 */


class MatTree extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree {}

MatTree.ɵfac = /* @__PURE__ */function () {
  let ɵMatTree_BaseFactory;
  return function MatTree_Factory(t) {
    return (ɵMatTree_BaseFactory || (ɵMatTree_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatTree)))(t || MatTree);
  };
}();

MatTree.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MatTree,
  selectors: [["mat-tree"]],
  viewQuery: function MatTree_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](MatTreeNodeOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "mat-tree"],
  exportAs: ["matTree"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
    useExisting: MatTree
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["matTreeNodeOutlet", ""]],
  template: function MatTree_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 0);
    }
  },
  dependencies: [MatTreeNodeOutlet],
  styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mat-tree',
      exportAs: 'matTree',
      template: `<ng-container matTreeNodeOutlet></ng-container>`,
      host: {
        'class': 'mat-tree',
        'role': 'tree'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.Default,
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
        useExisting: MatTree
      }],
      styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}"]
    }]
  }], null, {
    _nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [MatTreeNodeOutlet, {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wrapper for the CdkTree's toggle with Material design styles.
 */


class MatTreeNodeToggle extends _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle {}

MatTreeNodeToggle.ɵfac = /* @__PURE__ */function () {
  let ɵMatTreeNodeToggle_BaseFactory;
  return function MatTreeNodeToggle_Factory(t) {
    return (ɵMatTreeNodeToggle_BaseFactory || (ɵMatTreeNodeToggle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatTreeNodeToggle)))(t || MatTreeNodeToggle);
  };
}();

MatTreeNodeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatTreeNodeToggle,
  selectors: [["", "matTreeNodeToggle", ""]],
  inputs: {
    recursive: ["matTreeNodeToggleRecursive", "recursive"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle,
    useExisting: MatTreeNodeToggle
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeNodeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[matTreeNodeToggle]',
      providers: [{
        provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle,
        useExisting: MatTreeNodeToggle
      }],
      inputs: ['recursive: matTreeNodeToggleRecursive']
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

class MatTreeModule {}

MatTreeModule.ɵfac = function MatTreeModule_Factory(t) {
  return new (t || MatTreeModule)();
};

MatTreeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MatTreeModule
});
MatTreeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, MAT_TREE_DIRECTIVES],
      declarations: MAT_TREE_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 */


class MatTreeFlattener {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }

  _flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);

    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);

      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(children => {
            this._flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }

    return resultNodes;
  }

  _flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      let childParentMap = parentMap.slice();
      childParentMap.push(index != children.length - 1);

      this._flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */


  flattenNodes(structuredData) {
    let resultNodes = [];
    structuredData.forEach(node => this._flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */


  expandFlattenedNodes(nodes, treeControl) {
    let results = [];
    let currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach(node => {
      let expand = true;

      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }

      if (expand) {
        results.push(node);
      }

      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }

}
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `MatTree`.
 * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
 * to type `F` for `MatTree` to consume.
 */


class MatTreeFlatDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource {
  constructor(_treeControl, _treeFlattener, initialData) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    this._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);

    if (initialData) {
      // Assign the data through the constructor to ensure that all of the logic is executed.
      this.data = initialData;
    }
  }

  get data() {
    return this._data.value;
  }

  set data(value) {
    this._data.next(value);

    this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

    this._treeControl.dataNodes = this._flattenedData.value;
  }

  connect(collectionViewer) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));

      return this._expandedData.value;
    }));
  }

  disconnect() {// no op
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */


class MatTreeNestedDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource {
  constructor() {
    super(...arguments);
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
  }
  /**
   * Data for the nested tree
   */


  get data() {
    return this._data.value;
  }

  set data(value) {
    this._data.next(value);
  }

  connect(collectionViewer) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...[collectionViewer.viewChange, this._data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.data));
  }

  disconnect() {// no op
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_circular_circular_module_ts.js.map