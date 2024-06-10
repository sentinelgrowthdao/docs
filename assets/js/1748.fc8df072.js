"use strict";
exports.id = 1748;
exports.ids = [1748];
exports.modules = {

/***/ 31748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ended_screen: () => (/* binding */ DyteEndedScreen)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59990);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17073);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_f602d399_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6302);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93514);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94370);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55055);
/* harmony import */ var _breakout_rooms_50756495_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55524);
/* harmony import */ var _flags_fc3b9ebe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81195);











const dyteEndedScreenCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center;gap:var(--dyte-space-8, 32px)}dyte-logo.loaded{height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p.breakout{font-size:20px;display:flex;flex-direction:column;align-items:center}p.breakout span{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}";

const DyteEndedScreen = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.size = undefined;
    this.icon = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.states = undefined;
    this.t = (0,_index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.message = '';
    this.meeting = undefined;
  }
  connectedCallback() {
    this.statesChanged(this.states);
    this.removeStateChangeListener = (0,_store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.o)('roomLeftState', () => this.statesChanged());
  }
  disconnectedCallback() {
    this.removeStateChangeListener && this.removeStateChangeListener();
  }
  getBreakoutRoomsMessage(states) {
    var _a;
    let message;
    if ((states === null || states === void 0 ? void 0 : states.roomLeftState) === 'connected-meeting') {
      if (((_a = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager) === null || _a === void 0 ? void 0 : _a.destinationMeetingId) ===
        this.meeting.connectedMeetings.parentMeeting.id) {
        message = 'breakout_rooms.move_reason.switch_main_room';
      }
      else {
        message = 'breakout_rooms.move_reason.switch_room';
      }
    }
    return message;
  }
  statesChanged(s) {
    const states = s || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states != null) {
      switch (states === null || states === void 0 ? void 0 : states.roomLeftState) {
        case 'left':
          this.message = 'ended.left';
          break;
        case 'kicked':
          this.message = 'ended.kicked';
          break;
        case 'disconnected':
          this.message = 'ended.disconnected';
          break;
        case 'rejected':
          this.message = 'ended.rejected';
          break;
        case 'connected-meeting':
          this.message = this.getBreakoutRoomsMessage(states);
          break;
        default:
          this.message = 'ended';
      }
    }
  }
  renderBreakoutRoomScreen() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.breakout_rooms }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { part: "message", class: "breakout" }, this.t(this.message)))));
  }
  render() {
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s;
    if (states.roomLeftState === 'connected-meeting') {
      return this.renderBreakoutRoomScreen();
    }
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, part: "logo", t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { part: "message" }, this.t(this.message)), (states === null || states === void 0 ? void 0 : states.roomLeftState) === 'disconnected' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { part: "description" }, this.t('ended.network'))))));
  }
  static get watchers() { return {
    "states": ["statesChanged"]
  }; }
};
DyteEndedScreen.style = dyteEndedScreenCss;




/***/ })

};
;