"use strict";
exports.id = 5439;
exports.ids = [5439];
exports.modules = {

/***/ 35439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_file_dropzone: () => (/* binding */ DyteFileDropzone)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74710);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const dyteFileDropzoneCss = "#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;animation:0.2s slide-up ease-in}";

const DyteFileDropzone = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onDropCallback = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dropCallback", 7);
    this.hostEl = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.dropzoneActivated = false;
  }
  connectedCallback() {
    if (!this.hostEl)
      throw new Error('hostEl prop is required');
    this.hostEl.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.dropzoneActivated = true;
    });
    this.hostEl.addEventListener('dragleave', () => {
      this.dropzoneActivated = false;
    });
    this.hostEl.addEventListener('drop', (e) => {
      e.preventDefault();
      this.dropzoneActivated = false;
      this.onDropCallback.emit(e);
    });
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('chat.send_attachment')))));
  }
};
DyteFileDropzone.style = dyteFileDropzoneCss;




/***/ })

};
;