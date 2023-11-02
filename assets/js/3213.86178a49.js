"use strict";
exports.id = 3213;
exports.ids = [3213];
exports.modules = {

/***/ 63213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_transcripts: () => (/* binding */ DyteTranscripts)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74710);
/* harmony import */ var _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9367);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78410);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const dyteTranscriptsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;width:100%;justify-content:center;z-index:50}dyte-transcript{margin-top:var(--dyte-space-2, 8px)}";

const DyteTranscripts = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTranscript = (transcript) => {
      if (transcript.transcript) {
        this.add(transcript);
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_e1146f58_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.transcripts = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  clearListeners(meeting) {
    this.onTranscript && meeting.meta.removeListener('transcript', this.onTranscript);
    clearTimeout(this.disconnectTimeout);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    this.meeting.meta.addListener('transcript', this.onTranscript);
  }
  add(transcript) {
    // show transcripts only if tab is in focus and a maximum of 3 at a time
    this.transcripts.splice(0, this.transcripts.length - 2);
    this.transcripts = [...this.transcripts, transcript];
  }
  remove(id) {
    this.transcripts = this.transcripts.filter((transcript) => transcript.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  render() {
    var _a;
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (_a = this.transcripts) === null || _a === void 0 ? void 0 : _a.map((transcript) => ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-transcript", { key: transcript.id, "data-id": transcript.id, transcript: transcript, onDyteTranscriptDismiss: (e) => this.handleDismiss(e), t: this.t })))));
  }
  get host() { return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteTranscripts.style = dyteTranscriptsCss;




/***/ })

};
;