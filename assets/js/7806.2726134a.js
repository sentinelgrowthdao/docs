"use strict";
exports.id = 7806;
exports.ids = [7806];
exports.modules = {

/***/ 17806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_caption_toggle: () => (/* binding */ DyteCaptionToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_f602d399_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93514);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94370);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17073);
/* harmony import */ var _index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59990);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_50756495_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55524);
/* harmony import */ var _flags_fc3b9ebe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81195);











const dyteCaptionToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteCaptionToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.permissionsUpdateListener = () => {
      var _a;
      this.captionEnabled =
        (_a = this.meeting.self.permissions.transcriptionEnabled) !== null && _a !== void 0 ? _a : false;
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.size = undefined;
    this.t = (0,_index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_6__.u)();
    this.captionEnabled = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    if (meeting === null)
      return;
    this.permissionsUpdateListener();
    this.meeting.self.permissions.addListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.permissions.removeListener('permissionsUpdate', this.permissionsUpdateListener);
  }
  toggleCaptions() {
    this.stateUpdate.emit({ activeCaptions: !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeCaptions });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeCaptions = !_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeCaptions;
    this.stateUpdate.emit({ activeMoreMenu: false });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeMoreMenu = false;
  }
  render() {
    if (!this.captionEnabled)
      return null;
    const captionsEnabled = this.states.activeCaptions;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `Picture-in-Picture mode` }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: () => this.toggleCaptions(), icon: captionsEnabled ? this.iconPack.captionsOff : this.iconPack.captionsOn, label: captionsEnabled ? this.t('transcript.off') : this.t('transcript.on'), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteCaptionToggle.style = dyteCaptionToggleCss;




/***/ })

};
;