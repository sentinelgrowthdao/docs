"use strict";
exports.id = 8863;
exports.ids = [8863];
exports.modules = {

/***/ 48863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_ui_provider: () => (/* binding */ DyteUiProvider)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _config_4706ae3f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25475);
/* harmony import */ var _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9367);
/* harmony import */ var _size_8c675fd1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26985);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74710);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78410);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60804);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68753);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9079);
/* harmony import */ var _breakout_rooms_34bb7ea2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52732);
/* harmony import */ var _flags_ef1a782f_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2079);












const DyteUiProvider = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.size = undefined;
    this.config = _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.iconPackUrl = undefined;
    this.loadConfigFromPreset = true;
    this.applyDesignSystem = true;
    this.joinRoom = true;
    this.isReady = false;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_7__.d;
  }
  async iconPackUrlChanged(url) {
    this.iconPack = await (0,_size_8c675fd1_js__WEBPACK_IMPORTED_MODULE_3__.g)(url);
  }
  async meetingChanged(meeting) {
    var _a;
    if (!meeting)
      return;
    if (!meeting.self.roomJoined && this.joinRoom) {
      this.isReady = false;
      await meeting.joinRoom();
      this.isReady = true;
    }
    if (this.loadConfigFromPreset && meeting.self.config != null) {
      const theme = meeting.self.config;
      const { config } = (0,_config_4706ae3f_js__WEBPACK_IMPORTED_MODULE_1__.s)(theme, meeting);
      if (this.config === _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__.d) {
        // only override the config if the object is same as defaultConfig
        // which means it's a different object passed via prop
        this.config = Object.assign(Object.assign(Object.assign({}, _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__.d), config), { designTokens: Object.assign(Object.assign({}, _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__.d.designTokens), config.designTokens) });
      }
    }
    if (this.applyDesignSystem &&
      ((_a = this.config) === null || _a === void 0 ? void 0 : _a.designTokens) != null &&
      typeof document !== 'undefined') {
      (0,_config_4706ae3f_js__WEBPACK_IMPORTED_MODULE_1__.u)(document.documentElement, this.config.designTokens);
    }
    Array.from(this.hostEl.children)
      .filter((element) => element.tagName.startsWith('DYTE-'))
      .forEach((element) => {
      element['meeting'] = meeting;
      element['config'] = this.config;
      element['size'] = this.size;
      element['iconPack'] = this.iconPack;
      element['t'] = this.t;
    });
  }
  connectedCallback() {
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.hostEl);
    this.meetingChanged(this.meeting);
    this.iconPackUrlChanged(this.iconPackUrl);
  }
  handleResize() {
    this.size = (0,_size_8c675fd1_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.hostEl.clientWidth);
  }
  render() {
    if (!this.isReady)
      return null;
    return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null);
  }
  get hostEl() { return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "iconPackUrl": ["iconPackUrlChanged"],
    "meeting": ["meetingChanged"]
  }; }
};




/***/ }),

/***/ 26985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getSize),
/* harmony export */   g: () => (/* binding */ getIconPack)
/* harmony export */ });
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68753);


const getIconPack = async (url) => {
  // check for both null/undefined
  if (url == null) {
    return _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_0__.d;
    }
    // merge defaultIconPack with the received iconPack so as to
    // fill the missing icons with default ones
    return Object.assign({}, _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_0__.d, await res.json());
  }
  catch (_) {
    return _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
};

const sm = 640;
const md = 768;
const lg = 1080;
const xl = 2160;
const breakpoints = {
	sm: sm,
	md: md,
	lg: lg,
	xl: xl
};

/**
 * Get the screen breakpoint from a given width
 * @param width The width of the container
 * @returns The screen breakpoint value
 */
const getSize = (width) => {
  if (width >= breakpoints.lg)
    return 'lg';
  else if (width >= breakpoints.md)
    return 'md';
  else
    return 'sm';
};




/***/ })

};
;