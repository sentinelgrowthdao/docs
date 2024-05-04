"use strict";
exports.id = 6205;
exports.ids = [6205];
exports.modules = {

/***/ 46205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_debugger_toggle: () => (/* binding */ DyteDebuggerToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74157);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteDebuggerToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteDebuggerToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = undefined;
  }
  toggleDebugger() {
    var _a;
    this.stateUpdate.emit({
      activeDebugger: !((_a = this.states) === null || _a === void 0 ? void 0 : _a.activeDebugger),
      activeMoreMenu: false,
    });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeDebugger = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeDebugger;
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeMoreMenu = false;
  }
  render() {
    var _a;
    if (!((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.troubleshoot))
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t('Network & Trouble Shooting') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { size: this.size, iconPack: this.iconPack, t: this.t, onClick: () => this.toggleDebugger(), icon: this.iconPack.debug, label: this.t('Troubleshooting and Help'), variant: this.variant })));
  }
};
DyteDebuggerToggle.style = dyteDebuggerToggleCss;




/***/ })

};
;