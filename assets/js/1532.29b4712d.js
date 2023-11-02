"use strict";
exports.id = 1532;
exports.ids = [1532];
exports.modules = {

/***/ 51532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_sidebar_ui: () => (/* binding */ DyteSidebarUi)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74710);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const dyteSidebarUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;height:100%;width:100%;font-family:var(--dyte-font-family, sans-serif);z-index:50;display:flex;flex-direction:column}:host([view='sidebar']){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);max-width:100%;border:none}::slotted(*){flex-grow:1}.close{position:absolute;top:var(--dyte-space-2, 8px);left:var(--dyte-space-2, 8px);z-index:10}.main-header{position:relative;display:flex;height:var(--dyte-space-12, 48px);place-items:center;justify-content:center}.main-header,.mobile-tabs{flex-shrink:0}.mobile-tabs{display:flex;place-items:center;justify-content:space-evenly;border-bottom:1px solid rgb(var(--dyte-colors-background-700, 44 44 44))}.mobile-tabs button{margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;padding:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));height:var(--dyte-space-10, 40px);cursor:pointer;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);font-weight:500;border-bottom:1px solid transparent}.mobile-tabs button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}header h3{font-size:14px;font-weight:500}@media only screen and (max-device-height: 480px) and (orientation: landscape){.main-header{display:none !important}}";

const DyteSidebarUi = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tabChange = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tabChange", 7);
    this.sidebarClose = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "sidebarClose", 7);
    this.onClose = () => {
      this.sidebarClose.emit();
    };
    this.view = 'sidebar';
    this.tabs = [];
    this.currentTab = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  render() {
    const isFullScreen = this.view === 'full-screen';
    const activeTab = this.tabs.find((tab) => tab.id === this.currentTab);
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: this.view }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: "close", onClick: this.onClose, "aria-label": this.t('close') }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss })), activeTab && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "main-header" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, activeTab.name), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "pinned-state" }))), isFullScreen && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "mobile-tabs" }, this.tabs.map((tab) => ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => {
        this.tabChange.emit(tab.id);
      }, class: {
        active: this.currentTab === tab.id,
      } }, tab.name))))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: this.currentTab })));
  }
};
DyteSidebarUi.style = dyteSidebarUiCss;




/***/ })

};
;