"use strict";
exports.id = 7005;
exports.ids = [7005];
exports.modules = {

/***/ 7005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_mute_all_button: () => (/* binding */ DyteMuteAllButton)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_f602d399_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94370);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59990);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_50756495_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55524);
/* harmony import */ var _flags_fc3b9ebe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81195);










const dyteMuteAllButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteMuteAllButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.permissionsUpdateListener = () => {
      var _a;
      this.canDisable = !!((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.canDisableParticipantAudio);
    };
    this.onMuteAll = () => {
      this.stateUpdate.emit({ activeMuteAllConfirmation: true });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeMuteAllConfirmation = true;
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.t = (0,_index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_5__.u)();
    this.canDisable = false;
  }
  connectedCallback() {
    this.meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
    this.permissionsUpdateListener();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  render() {
    if (!this.canDisable) {
      return null;
    }
    const label = this.t('mute_all');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: label, part: "tooltip" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", icon: this.iconPack.speaker_off, label: label, size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, onClick: this.onMuteAll }))));
  }
};
DyteMuteAllButton.style = dyteMuteAllButtonCss;




/***/ })

};
;