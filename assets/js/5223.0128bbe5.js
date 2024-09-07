"use strict";
exports.id = 5223;
exports.ids = [5223];
exports.modules = {

/***/ 15223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_information_tooltip: () => (/* binding */ DyteInformationTooltip)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54956);









const dyteInformationTooltipCss = ":host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);cursor:pointer}.tooltip-container{position:relative;display:flex;flex-direction:row;align-items:center}.tooltip-container dyte-icon{cursor:pointer;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.tooltip-container dyte-icon:hover+.tooltip{display:flex !important}.tooltip{position:absolute;margin-left:var(--dyte-space-2, 8px);display:none !important;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));z-index:50;display:flex;min-width:var(--dyte-space-60, 240px);flex-direction:column;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);left:14px}";

const DyteInformationTooltip = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tooltip-container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.info, size: "sm" }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tooltip" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "tootlip-text" })))));
  }
};
DyteInformationTooltip.style = dyteInformationTooltipCss;




/***/ })

};
;