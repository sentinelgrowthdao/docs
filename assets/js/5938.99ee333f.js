"use strict";
exports.id = 5938;
exports.ids = [5938];
exports.modules = {

/***/ 55938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_audio_tile: () => (/* binding */ DyteAudioTile)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8934);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteAudioTileCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column}.avatar-ctr{box-sizing:border-box;width:100%;flex:1 1 0%;padding:var(--dyte-space-1\\.5, 6px);border:2px solid transparent;border-radius:calc(var(--dyte-border-radius-xl, 40px) + var(--dyte-space-1\\.5, 6px))}.avatar-ctr.speaking{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2);--tw-shadow:var(--tw-shadow-colored)}dyte-avatar{aspect-ratio:1 / 1;height:100%;width:100%;border-radius:var(--dyte-border-radius-xl, 40px)}dyte-name-tag{display:block;height:var(--dyte-space-10, 40px);width:100%;text-align:center;line-height:2.5rem}:host([size='sm']) .avatar-ctr{border-radius:calc(var(--dyte-border-radius-lg, 12px) + var(--dyte-space-1\\.5, 6px))}:host([size='sm']) dyte-name-tag{height:var(--dyte-space-7, 28px);line-height:1.75rem}:host([size='sm']) dyte-avatar{border-radius:var(--dyte-border-radius-lg, 12px)}.mic-icon{position:absolute;bottom:calc(var(--dyte-space-1, 4px) * -1);right:calc(var(--dyte-space-1, 4px) * -1);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.mic-icon dyte-icon{height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}:host([size='sm']) .mic-icon dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='md']) .mic-icon dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}";

const DyteAudioTile = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onAudioUpdate = () => {
      if (!this.participant)
        return;
      this.isSpeaking = this.participant.audioEnabled;
    };
    this.meeting = undefined;
    this.config = undefined;
    this.size = undefined;
    this.states = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.participant = undefined;
    this.isSpeaking = false;
  }
  connectedCallback() {
    this.participantChanged(this.participant);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.participant) === null || _a === void 0 ? void 0 : _a.removeListener('audioUpdate', this.onAudioUpdate);
  }
  participantChanged(participant) {
    if (!participant) {
      return;
    }
    this.isSpeaking = participant.audioEnabled;
    participant.addListener('audioUpdate', this.onAudioUpdate);
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      config: this.config,
      states: this.states,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'avatar-ctr': true, speaking: this.isSpeaking } }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: this.participant, size: this.size }, !this.isSpeaking && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "mic-icon" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d.mic_off }))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-name-tag", Object.assign({ variant: "text", participant: this.participant }, defaults)), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  static get watchers() { return {
    "participant": ["participantChanged"]
  }; }
};
DyteAudioTile.style = dyteAudioTileCss;




/***/ })

};
;