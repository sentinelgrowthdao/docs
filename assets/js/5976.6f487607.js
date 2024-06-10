"use strict";
exports.id = 5976;
exports.ids = [5976];
exports.modules = {

/***/ 15976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_debugger: () => (/* binding */ DyteDebugger)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59990);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26468);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55055);






const dyteDebuggerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{margin-right:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-between;padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}header h3{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px)}.back-btn{border-radius:var(--dyte-border-radius-sm, 4px);background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.back-btn:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside{box-sizing:border-box;display:flex;max-width:var(--dyte-space-56, 224px) !important;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-2, 8px)}aside button{margin-top:var(--dyte-space-4, 16px);box-sizing:border-box;display:flex;width:100%;align-items:center;justify-content:space-between;border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px);padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);background-color:transparent;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));cursor:default;font-size:14px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px}aside button .right{display:flex;align-items:center}aside button .right dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}aside button .right dyte-icon:last-child{margin-left:var(--dyte-space-4, 16px)}aside button[type='button']{cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}aside button[type='button']:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}aside button[type='button']{border-right:var(--dyte-border-width-md, 2px) solid transparent}aside button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity));background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}aside button.active:hover{background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / 0.2)}main{position:relative;box-sizing:border-box;display:flex;height:100%;width:100%;flex-direction:column;padding-top:var(--dyte-space-1, 4px)}:host([size='sm']) aside{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));width:100% !important;max-width:100% !important;padding-left:var(--dyte-space-0, 0px)}:host([size='sm']) aside button{border-radius:var(--dyte-border-radius-none, 0)}:host([size='sm']) aside button.active{border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent}:host([size='sm']) aside button.active:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host([size='sm']) aside.hide{display:none}:host([size='sm']) main{display:none;height:100%;width:100%;padding:var(--dyte-space-0, 0px)}:host([size='sm']) main.active{display:block}:host([size='sm']) header{margin:var(--dyte-space-0, 0px);justify-content:center}:host([size='sm']) header dyte-button{position:absolute;left:var(--dyte-space-4, 16px)}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}::-webkit-scrollbar-thumb:hover{border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.progress-bar{height:var(--dyte-space-1, 4px);width:100%;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.progress-indicator{height:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity))}";

const DyteDebugger = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.keyPressListener = (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_fcbfb3a0_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.activeTab = 'audio';
    this.isMobileMainVisible = false;
    this.progress = 0;
  }
  connectedCallback() {
    document.addEventListener('keydown', this.keyPressListener);
  }
  disconnectedCallback() {
    this.keyPressListener && document.removeEventListener('keydown', this.keyPressListener);
  }
  progressUpdate(event) {
    this.progress = event.detail;
  }
  changeTab(tab) {
    this.activeTab = tab;
    if (this.size === 'sm') {
      if (!this.isMobileMainVisible) {
        this.isMobileMainVisible = true;
      }
    }
  }
  close() {
    this.stateUpdate.emit({ activeDebugger: false });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeDebugger = false;
  }
  getActiveTab() {
    switch (this.activeTab) {
      case 'audio':
        return this.t('Audio Troubleshooting');
      case 'screenshare':
        return this.t('Media Troubleshooting');
      case 'video':
        return this.t('Video Troubleshooting');
      default:
        return this.t('Troubleshooting');
    }
  }
  render() {
    if (this.meeting == null)
      return null;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s,
      iconPack: this.iconPack,
      t: this.t,
      size: this.size,
    };
    const tab = this.getActiveTab();
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("aside", { class: { hide: this.isMobileMainVisible }, part: "menu" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('Troubleshooting'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { type: "button", class: { active: this.activeTab === 'audio' }, onClick: () => this.changeTab('audio') }, this.t('audio'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.mic_on, iconPack: this.iconPack, t: this.t }), this.size === 'sm' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_right, iconPack: this.iconPack, t: this.t })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { type: "button", class: { active: this.activeTab === 'video' }, onClick: () => this.changeTab('video') }, this.t('video'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.video_on, iconPack: this.iconPack, t: this.t }), this.size === 'sm' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_right, iconPack: this.iconPack, t: this.t })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { type: "button", class: { active: this.activeTab === 'screenshare' }, onClick: () => this.changeTab('screenshare') }, this.t('Screenshare'), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "right" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.share_screen_start, iconPack: this.iconPack, t: this.t }), this.size === 'sm' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_right, iconPack: this.iconPack, t: this.t }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("main", { class: { active: this.isMobileMainVisible }, part: "main-content" }, this.size === 'sm' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", class: "back-btn", onClick: () => (this.isMobileMainVisible = false), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_left, iconPack: this.iconPack, t: this.t })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4", null, tab))), this.activeTab === 'audio' && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-audio", Object.assign({}, defaults)), this.activeTab === 'video' && (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-video", Object.assign({}, defaults)), this.activeTab === 'screenshare' && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-screenshare", Object.assign({}, defaults))), this.progress > 1 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "progress-bar" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "progress-indicator", style: {
        width: `${this.progress}%`,
      } }))))));
  }
};
DyteDebugger.style = dyteDebuggerCss;




/***/ })

};
;