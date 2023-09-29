"use strict";
exports.id = 9853;
exports.ids = [9853];
exports.modules = {

/***/ 69853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_debugger_audio: () => (/* binding */ DyteDebuggerAudio$2),
/* harmony export */   dyte_debugger_screenshare: () => (/* binding */ DyteDebuggerAudio$1),
/* harmony export */   dyte_debugger_video: () => (/* binding */ DyteDebuggerAudio)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8934);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46503);








const dyteDebuggerAudioCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:600}.status{margin-left:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px}.status dyte-icon{margin-right:var(--dyte-space-2, 8px)}.scroll{overflow:auto;border-radius:var(--dyte-border-radius-none, 0)}.warning,.NOT_REQUESTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity)) !important;opacity:0.8}.success,.ACCEPTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity)) !important;opacity:0.8}.COULD_NOT_START,.error,.failed,.DENIED,.SYSTEM_DENIED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity)) !important;opacity:0.8}.row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.section{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}h3{margin:var(--dyte-space-0, 0px);font-size:14px;font-weight:600}.stage-indicator{margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.status-text{margin-top:var(--dyte-space-3, 12px);font-size:14px;font-weight:100 !important}.status-text dyte-icon{margin-right:var(--dyte-space-2, 8px)}.tooltip-text{display:flex;flex-direction:column;font-size:12px}.tooltip-text span{margin-left:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88)) !important}.tooltip-text div{margin-top:var(--dyte-space-1, 4px)}.tooltip-text div:nth-child(1){margin:var(--dyte-space-0, 0px)}.row{display:flex;flex-direction:row;align-items:center;justify-content:center}.row dyte-switch{margin-left:var(--dyte-space-8, 32px)}.row dyte-button{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px)}.row .label{width:var(--dyte-space-40, 160px)}.row .text{margin-top:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px)}.m3{margin-top:var(--dyte-space-3, 12px)}.m1{margin-top:var(--dyte-space-1, 4px)}.col{display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}.label{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;justify-content:space-between;font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.text{margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));opacity:0.7}.title{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.sub-title{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.error-text{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;font-size:14px;font-weight:100 !important;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.error-text dyte-icon{margin-right:var(--dyte-space-2, 8px)}.volume-indicator{margin-left:var(--dyte-space-4, 16px);height:var(--dyte-space-3, 12px);width:var(--dyte-space-56, 224px);overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.volume-level{height:var(--dyte-space-3, 12px);width:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-400, 53 110 253) / var(--tw-bg-opacity));transition:width 0.5s}.stage-manager{position:-webkit-sticky;position:sticky;bottom:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}.stage-button{display:flex;cursor:pointer;flex-direction:row;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.stage-button dyte-icon{padding:var(--dyte-space-0, 0px)}.disabled{cursor:not-allowed;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52)) !important}#header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;border-radius:var(--dyte-border-radius-none, 0)}#header dyte-button:hover{background-color:transparent}#header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}.tab-body{display:flex;height:100%;flex-direction:column;justify-content:space-between;overflow-y:auto;padding:var(--dyte-space-4, 16px)}.speaker-test{margin-top:var(--dyte-space-4, 16px);display:flex;flex-direction:row}.speaker-test dyte-button{margin-right:var(--dyte-space-2, 8px)}";

const DyteDebuggerAudio$2 = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.testProgress = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "testProgress", 7);
    this.lowVolCount = 0;
    this.silenceCount = 0;
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.micMetadata = {};
    this.micPreview = false;
    this.speakerPreview = false;
    this.audioTrackStats = {
      lowVolume: false,
      clip: false,
      silence: false,
      volume: 0,
      timestamp: 0,
    };
    this.activeTab = 'Report';
    this.stage = 0;
    this.mediaPermission = 'NOT_REQUESTED';
    this.speakerDevice = undefined;
    this.speakerTest = 'none';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.updateProgress();
  }
  disconnectedCallback() {
    var _a;
    const { self, troubleshoot } = this.meeting;
    this.micPreview && this.toggleMicTest();
    this.speakerPreview && this.toggleSpeakerTest();
    self === null || self === void 0 ? void 0 : self.removeListener('deviceUpdate', this.deviceUpdateListener);
    self === null || self === void 0 ? void 0 : self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_a = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.audio) === null || _a === void 0 ? void 0 : _a.removeListener('audioTrackStats', this.audioTrackUpdateListener);
  }
  async meetingChanged(meeting) {
    var _a, _b;
    if (!meeting)
      return;
    const { self, troubleshoot } = meeting;
    if (self === null || self === void 0 ? void 0 : self.audioTrack) {
      await this.getTrackInfo();
    }
    self === null || self === void 0 ? void 0 : self.on('deviceUpdate', this.deviceUpdateListener.bind(this));
    self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener.bind(this));
    const permission = (_a = self === null || self === void 0 ? void 0 : self.mediaPermissions) === null || _a === void 0 ? void 0 : _a.audio;
    this.mediaPermissionUpdateListener({ kind: 'audio', message: permission });
    (_b = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.audio) === null || _b === void 0 ? void 0 : _b.on('audioTrackStats', this.audioTrackUpdateListener.bind(this));
  }
  deviceUpdateListener({ device, preview }) {
    if (preview)
      return;
    if (device.kind === 'audioInput')
      this.speakerDevice = device;
    if (device.kind === 'audiooutput')
      this.getTrackInfo();
  }
  mediaPermissionUpdateListener({ kind, message }) {
    if (kind !== 'audio')
      return;
    this.mediaPermission = message;
    if (this.mediaPermission !== 'ACCEPTED') {
      this.stage = 0;
      this.updateProgress();
      if (this.micPreview)
        this.toggleMicTest();
      if (this.speakerPreview)
        this.toggleSpeakerTest();
    }
  }
  audioTrackUpdateListener(data) {
    this.audioTrackStats = Object.assign(Object.assign({}, data), { volume: this.normalizeVolume(data === null || data === void 0 ? void 0 : data.volume) });
    if (this.volumeEl)
      this.volumeEl.style.width = `${this.audioTrackStats.volume}%`;
  }
  setActiveTab(state) {
    this.activeTab = state;
    this.updateProgress();
  }
  async toggleMicTest() {
    var _a, _b, _c;
    const troubleshooter = (_a = this.meeting.troubleshoot) === null || _a === void 0 ? void 0 : _a.audio;
    this.micPreview = !this.micPreview;
    if (this.micPreview) {
      await this.getTrackInfo();
      troubleshooter.stopTrackAnalysis();
      await (troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.startTrackAnalysis(true));
    }
    else {
      (_c = (_b = this.meeting.troubleshoot) === null || _b === void 0 ? void 0 : _b.audio) === null || _c === void 0 ? void 0 : _c.stopTrackAnalysis();
      this.audioTrackStats.volume = 0;
      if (this.volumeEl)
        this.volumeEl.style.width = '5%';
    }
  }
  async toggleSpeakerTest() {
    var _a, _b, _c, _d;
    const troubleshooter = (_a = this.meeting.troubleshoot) === null || _a === void 0 ? void 0 : _a.audio;
    if ((_b = this.testAudioEl) === null || _b === void 0 ? void 0 : _b.paused) {
      this.testAudioEl.currentTime = 0.2;
      (_c = this.testAudioEl) === null || _c === void 0 ? void 0 : _c.play();
      this.speakerPreview = true;
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.startTrackAnalysis(true);
      this.testAudioEl.addEventListener('ended', () => {
        this.speakerPreview = false;
        troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopTrackAnalysis();
      });
    }
    else {
      (_d = this.testAudioEl) === null || _d === void 0 ? void 0 : _d.pause();
      this.speakerPreview = false;
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopTrackAnalysis();
    }
    if (this.speakerPreview) {
      const { self } = this.meeting;
      const speakerDevices = await (self === null || self === void 0 ? void 0 : self.getSpeakerDevices());
      if (!speakerDevices)
        return;
      this.speakerDevice = speakerDevices[0];
      self === null || self === void 0 ? void 0 : self.setDevice(speakerDevices[0]);
    }
  }
  async getTrackInfo() {
    var _a, _b;
    this.micMetadata = await ((_b = (_a = this.meeting.troubleshoot) === null || _a === void 0 ? void 0 : _a.audio) === null || _b === void 0 ? void 0 : _b.getTrackMetadata(true));
  }
  changeStage(stage) {
    if (this.mediaPermission !== 'ACCEPTED')
      return;
    stage = Math.max(0, stage);
    stage = Math.min(2, stage);
    this.stage = stage;
    this.updateProgress();
    if (this.micPreview)
      this.toggleMicTest();
    if (this.speakerPreview)
      this.toggleSpeakerTest();
  }
  updateProgress() {
    if (this.activeTab === 'Troubleshoot') {
      this.testProgress.emit(((this.stage + 1) * 100) / 3);
    }
    else
      this.testProgress.emit(0);
  }
  getAudioLevelStatus() {
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    if (this.detectLowVolume()) {
      message = 'Low volume detected, please move closer to the device.';
      icon = 'warning';
      style = 'warning';
    }
    if (this.audioTrackStats.clip) {
      message = 'Clipping detected. Your audio may be noisy.';
      icon = 'warning';
      style = 'error';
    }
    if (this.detectSilence()) {
      message = 'Silence detected. Your device is not picking up audio.';
      icon = 'warning';
      style = 'error';
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  getDeviceInformationStatus() {
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    const { channelCount: count, channelInterpretation: mode, channelType: type, outputs, } = this.micMetadata;
    if (mode === 'discrete' && outputs > count) {
      message = 'Audio quality might be degraded.';
      icon = 'warning';
      style = 'warning';
    }
    else if ((type === 'STEREO' && outputs === 1) ||
      (type === 'QUAD' && outputs === 1) ||
      (type === 'QUAD' && outputs === 2)) {
      message = 'Audio quality might be degraded.';
      icon = 'warning';
      style = 'warning';
    }
    if ((type === 'MONO' && count < 1) ||
      (type === 'STEREO' && count < 2) ||
      (type === 'QUAD' && count < 4)) {
      message = 'Looks like your device is not functioning properly.';
      icon = 'warning';
      style = 'error';
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  getSpeakerTestStatus() {
    if (this.speakerTest === 'success')
      return 'All systems are functional.';
    if (this.speakerTest === 'failed')
      return 'Test failed. Please ensure your system volume is not 0.';
  }
  setSpeakerTestResult(status) {
    if (this.speakerPreview)
      this.toggleSpeakerTest();
    this.speakerTest = status;
  }
  boolToStr(val) {
    if (val)
      return 'Yes';
    return 'No';
  }
  formatLabel(camelCaseLabel) {
    const result = camelCaseLabel.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  normalizeVolume(val = 0) {
    let max = 0.3;
    const min = 0.001;
    if (val > max)
      max = val;
    return Math.max(5, Math.round((val * 100) / (max - min)));
  }
  detectLowVolume() {
    var _a;
    if ((_a = this.audioTrackStats) === null || _a === void 0 ? void 0 : _a.lowVolume) {
      this.lowVolCount++;
    }
    else {
      this.lowVolCount = 0;
    }
    return this.lowVolCount > 10;
  }
  detectSilence() {
    var _a;
    if ((_a = this.audioTrackStats) === null || _a === void 0 ? void 0 : _a.silence) {
      this.silenceCount++;
    }
    else {
      this.silenceCount = 0;
    }
    return this.silenceCount > 5;
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__.s,
      iconPack: this.iconPack,
      t: this.t,
      size: this.size,
    };
    const deviceInfoKeys = ['label', 'channelType'];
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("audio", { preload: "auto", src: "https://assets.dyte.io/ui-kit/speaker-test.mp3", ref: (el) => (this.testAudioEl = el) }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "header" }, ['Report', 'Troubleshoot'].map((section) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { key: section, variant: "ghost", class: { active: this.activeTab === section }, onClick: () => this.setActiveTab(section), iconPack: this.iconPack, t: this.t }, this.t(section))))), this.activeTab === 'Troubleshoot' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-indicator" }, "Step ", this.stage + 1, "/3"), this.stage === 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-permissions-ui", Object.assign({}, defaults, { mediaType: "audio" }))), this.stage === 1 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title" }, "Microphone Test"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t('Please start the microphone test and start speaking in order to test your audio device.')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", onClick: () => this.toggleMicTest() }, this.micPreview ? 'Stop' : 'Start', " Microphone Test"), this.micPreview && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Device Information", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-information-tooltip", { iconPack: this.iconPack }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "tootlip-text", class: "tooltip-text" }, Object.keys(this.micMetadata).map((key) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.formatLabel(key), ": ", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.micMetadata[key]))))))), deviceInfoKeys.map((key) => {
      const val = this.micMetadata[key];
      if (!val)
        return;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t(this.formatLabel(key))), ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t(val))));
    }), this.getDeviceInformationStatus(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Audio Level Analysis", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-information-tooltip", { iconPack: this.iconPack }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "tootlip-text", class: "tooltip-text" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Volume Level:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.audioTrackStats.volume, "/100")), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Low Volume:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.boolToStr(this.audioTrackStats.lowVolume))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Silence Detected:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.boolToStr(this.audioTrackStats.silence))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Noise Detected:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.boolToStr(this.audioTrackStats.clip))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Time:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, new Date(this.audioTrackStats.timestamp).toLocaleTimeString()))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.speaker, size: "md" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "volume-indicator" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "volume-level", ref: (el) => (this.volumeEl = el) }))), this.getAudioLevelStatus())))), this.stage === 2 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title" }, "Speaker Test"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t('Upon starting this test, an audio will be played. Please ensure your system volume is not set to zero.')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.toggleSpeakerTest(), size: "md" }, this.speakerPreview ? 'Stop' : 'Start', " Speaker Test"), this.speakerDevice && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Device Information"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Label"), ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.speakerDevice.label)))), this.speakerPreview && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "sub-title" }, "Are you able to hear the audio?"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "speaker-test" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.setSpeakerTestResult('success'), size: "sm", variant: "primary" }, "Yes"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.setSpeakerTestResult('failed'), size: "sm", variant: "secondary" }, "No")))), !this.speakerPreview && this.speakerTest !== 'none' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${this.speakerTest}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[this.speakerTest === 'failed' ? 'dismiss' : 'checkmark'] }), this.getSpeakerTestStatus()))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-manager" }, this.stage < 2 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage + 1) }, "Next", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_right }))), this.stage > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage - 1) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_left }), "Prev"))))), this.activeTab === 'Report' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-issues-ui", Object.assign({}, defaults, { mediaType: "audio" }))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteDebuggerAudio$2.style = dyteDebuggerAudioCss;

const dyteDebuggerScreenshareCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:600}.status{margin-left:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px}.status dyte-icon{margin-right:var(--dyte-space-2, 8px)}.stage-indicator{margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.scroll{overflow:auto;border-radius:var(--dyte-border-radius-none, 0)}.warning,.NOT_REQUESTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity)) !important;opacity:0.8}.success,.ACCEPTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity)) !important;opacity:0.8}.COULD_NOT_START,.error,.DENIED,.SYSTEM_DENIED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity)) !important;opacity:0.8}h3{margin:var(--dyte-space-0, 0px);font-size:14px;font-weight:600}.status-text{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:100 !important}.status-text dyte-icon{margin-right:var(--dyte-space-2, 8px)}.tooltip-text{display:flex;flex-direction:column;font-size:12px}.tooltip-text span{margin-left:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88)) !important}.tooltip-text div{margin-top:var(--dyte-space-1, 4px)}.tooltip-text div:nth-child(1){margin:var(--dyte-space-0, 0px)}.row{display:flex;width:100%;flex-direction:row;align-items:center;justify-content:flex-start}.row dyte-switch{margin-left:var(--dyte-space-8, 32px)}.row dyte-icon{margin-left:var(--dyte-space-2, 8px)}.row dyte-button{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px)}.row .label{width:var(--dyte-space-28, 112px) !important;min-width:var(--dyte-space-28, 112px)}.row .text{margin-top:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px)}.align-start{align-items:flex-start !important}.col{display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}.label{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;justify-content:space-between;font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.info{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;font-size:14px;font-weight:100 !important;--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity));opacity:0.7}.info dyte-icon{margin-right:var(--dyte-space-2, 8px)}.text{margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));opacity:0.7}.title{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.sub-title{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.stage-manager{margin-top:var(--dyte-space-4, 16px);display:flex;width:100%;flex-direction:row-reverse;align-items:center;justify-content:space-between;align-self:flex-end;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}.stage-button{display:flex;cursor:pointer;flex-direction:row;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.stage-button dyte-icon{padding:var(--dyte-space-0, 0px)}.disabled{cursor:not-allowed;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52)) !important}#header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;border-radius:var(--dyte-border-radius-none, 0)}#header dyte-button:hover{background-color:transparent}#header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}.tab-body{position:relative;display:flex;height:100%;flex-direction:column;justify-content:space-between;overflow-y:auto;padding:var(--dyte-space-4, 16px)}";

const DyteDebuggerAudio$1 = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.testProgress = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "testProgress", 7);
    this.lowVolCount = 0;
    this.silenceCount = 0;
    this.frozenFramesCount = 0;
    this.blackFramesCount = 0;
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.activeTab = 'Report';
    this.stage = 0;
    this.mediaPermission = 'NOT_REQUESTED';
    this.screenshareEnabled = false;
    this.audioTrackMetadata = {};
    this.videoTrackMetadata = {};
    this.screenshareTest = false;
    this.audioTrackStats = {
      lowVolume: false,
      clip: false,
      silence: false,
      volume: 0,
      timestamp: 0,
    };
    this.videoTrackStats = {
      isBlackFrame: false,
      isFrozenFrame: false,
      timestamp: 0,
      videoScore: 0,
    };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.updateProgress();
  }
  disconnectedCallback() {
    var _a, _b;
    const { self, troubleshoot } = this.meeting;
    this.screenshareTest && this.toggleScreenshareTest();
    self === null || self === void 0 ? void 0 : self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    self.removeListener('screenShareUpdate', this.screenShareUpdateListener);
    (_a = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.screenshare) === null || _a === void 0 ? void 0 : _a.removeListener('audioTrackStats', this.audioTrackUpdateListener);
    (_b = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.screenshare) === null || _b === void 0 ? void 0 : _b.removeListener('videoTrackStats', this.videoTrackUpdateListener);
  }
  async meetingChanged(meeting) {
    var _a, _b, _c;
    if (!meeting)
      return;
    const { self, troubleshoot } = meeting;
    self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener.bind(this));
    self.addListener('screenShareUpdate', this.screenShareUpdateListener.bind(this));
    (_a = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.screenshare) === null || _a === void 0 ? void 0 : _a.on('audioTrackStats', this.audioTrackUpdateListener.bind(this));
    (_b = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.screenshare) === null || _b === void 0 ? void 0 : _b.on('videoTrackStats', this.videoTrackUpdateListener.bind(this));
    const permission = (_c = self === null || self === void 0 ? void 0 : self.mediaPermissions) === null || _c === void 0 ? void 0 : _c.screenshare;
    this.mediaPermissionUpdateListener({ kind: 'screenshare', message: permission });
    const screenShareEnabled = self === null || self === void 0 ? void 0 : self.screenShareEnabled;
    this.screenShareUpdateListener({ screenShareEnabled });
  }
  mediaPermissionUpdateListener({ kind, message }) {
    if (kind !== 'screenshare')
      return;
    this.mediaPermission = message;
    if (this.mediaPermission !== 'ACCEPTED') {
      this.stage = 0;
      this.updateProgress();
    }
  }
  screenShareUpdateListener({ screenShareEnabled }) {
    this.screenshareEnabled = screenShareEnabled;
    if (!this.screenshareEnabled && this.screenshareTest)
      this.toggleScreenshareTest();
  }
  audioTrackUpdateListener(stats) {
    this.audioTrackStats = Object.assign(Object.assign({}, stats), { volume: this.normalizeVolume(stats === null || stats === void 0 ? void 0 : stats.volume) });
  }
  videoTrackUpdateListener(stats) {
    this.videoTrackStats = Object.assign(Object.assign({}, stats), { videoScore: this.normalizeVideoScore(stats === null || stats === void 0 ? void 0 : stats.videoScore) });
  }
  async toggleScreenshareTest() {
    var _a, _b, _c;
    this.screenshareTest = !this.screenshareTest;
    const troubleshooter = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.troubleshoot.screenshare;
    if (this.screenshareTest && this.screenshareEnabled) {
      this.audioTrackMetadata = (_b = troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.getAudioTrackMetaData()) !== null && _b !== void 0 ? _b : {};
      this.videoTrackMetadata = (_c = troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.getVideoTrackMetaData()) !== null && _c !== void 0 ? _c : {};
      await troubleshooter.startAudioTrackAnalysis();
      await troubleshooter.startVideoTrackAnalysis();
    }
    else {
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopAudioTrackAnalysis();
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopVideoTrackAnalysis();
    }
  }
  setActiveTab(state) {
    this.activeTab = state;
    this.updateProgress();
  }
  changeStage(stage) {
    if (this.mediaPermission !== 'ACCEPTED')
      return;
    stage = Math.max(0, stage);
    stage = Math.min(1, stage);
    this.stage = stage;
    this.updateProgress();
    if (this.screenshareTest)
      this.toggleScreenshareTest();
  }
  updateProgress() {
    if (this.activeTab === 'Troubleshoot') {
      this.testProgress.emit(((this.stage + 1) * 100) / 2);
    }
    else
      this.testProgress.emit(0);
  }
  getDeviceInformationStatus() {
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    if (this.audioTrackMetadata) {
      const { channelCount: count, channelInterpretation: mode, channelType: type, outputs, } = this.audioTrackMetadata;
      if (mode === 'discrete' && outputs > count) {
        message = 'Audio quality might be degraded.';
        icon = 'warning';
        style = 'warning';
      }
      else if ((type === 'STEREO' && outputs === 1) ||
        (type === 'QUAD' && outputs === 1) ||
        (type === 'QUAD' && outputs === 2)) {
        message = 'Audio quality might be degraded.';
        icon = 'warning';
        style = 'warning';
      }
      if ((type === 'MONO' && count < 1) ||
        (type === 'STEREO' && count < 2) ||
        (type === 'QUAD' && count < 4)) {
        message = 'Looks like your device is not functioning properly.';
        icon = 'warning';
        style = 'error';
      }
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  getAudioAnalysisStatus() {
    var _a;
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    if (!((_a = this.audioTrackMetadata) === null || _a === void 0 ? void 0 : _a.label))
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text warning` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.warning }), this.t('Not Available')));
    if (this.detectLowVolume()) {
      message = 'Low volume detected.';
      icon = 'warning';
      style = 'warning';
    }
    if (this.audioTrackStats.clip) {
      message = 'Your audio may be noisy.';
      icon = 'warning';
      style = 'error';
    }
    if (this.detectSilence()) {
      message = 'Silence detected.';
      icon = 'warning';
      style = 'error';
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  getVideoAnalysisStatus() {
    var _a, _b;
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    if ((_a = this.videoTrackStats) === null || _a === void 0 ? void 0 : _a.isBlackFrame) {
      this.blackFramesCount++;
    }
    else {
      this.blackFramesCount = 0;
    }
    if ((_b = this.videoTrackStats) === null || _b === void 0 ? void 0 : _b.isFrozenFrame) {
      this.frozenFramesCount++;
    }
    else {
      this.frozenFramesCount = 0;
    }
    if (this.frozenFramesCount > 4) {
      message = 'Looks like the video is frozen.';
      icon = 'warning';
      style = 'error';
    }
    if (this.blackFramesCount > 4) {
      message = 'Video is not being processed by the camera.';
      icon = 'warning';
      style = 'error';
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  formatLabel(camelCaseLabel) {
    const result = camelCaseLabel.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  nullToStr(val) {
    if (!val)
      return 'Not Available';
    return val;
  }
  normalizeVolume(val = 0) {
    let max = 0.3;
    const min = 0.001;
    if (val > max)
      max = val;
    return Math.max(5, Math.round((val * 100) / (max - min)));
  }
  normalizeVideoScore(val = 0) {
    let max = 1;
    const min = 0;
    if (val > max)
      max = val;
    return Math.max(5, Math.round((val * 10) / (max - min)));
  }
  detectLowVolume() {
    var _a;
    if ((_a = this.audioTrackStats) === null || _a === void 0 ? void 0 : _a.lowVolume) {
      this.lowVolCount++;
    }
    else {
      this.lowVolCount = 0;
    }
    return this.lowVolCount > 10;
  }
  detectSilence() {
    var _a;
    if ((_a = this.audioTrackStats) === null || _a === void 0 ? void 0 : _a.silence) {
      this.silenceCount++;
    }
    else {
      this.silenceCount = 0;
    }
    return this.silenceCount > 5;
  }
  render() {
    var _a, _b;
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__.s,
      iconPack: this.iconPack,
      t: this.t,
      size: this.size,
    };
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "header" }, ['Report', 'Troubleshoot'].map((section) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { key: section, variant: "ghost", class: { active: this.activeTab === section }, onClick: () => this.setActiveTab(section), iconPack: this.iconPack, t: this.t }, this.t(section))))), this.activeTab === 'Troubleshoot' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-indicator" }, "Step ", this.stage + 1, "/2"), this.stage === 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-permissions-ui", Object.assign({}, defaults, { mediaType: "screenshare" }))), this.stage === 1 &&
      (this.screenshareEnabled ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots."), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.toggleScreenshareTest() }, this.screenshareTest ? 'Stop' : 'Start', " Screenshare Tests"), this.screenshareTest && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Device Information", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-information-tooltip", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "tootlip-text", class: "tooltip-text" }, Object.keys(this.audioTrackMetadata).map((key) => {
        if (key === 'label')
          return;
        return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Audio ", this.formatLabel(key), ":", ' ', (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.audioTrackMetadata[key])));
      }), Object.keys(this.videoTrackMetadata).map((key) => {
        if (key === 'label')
          return;
        return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Video ", this.formatLabel(key), ":", ' ', (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, JSON.stringify(this.videoTrackMetadata[key]))));
      })))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row align-start" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Audio Label"), ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.nullToStr((_a = this.audioTrackMetadata) === null || _a === void 0 ? void 0 : _a.label))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row align-start" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Video Label"), ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.nullToStr((_b = this.videoTrackMetadata) === null || _b === void 0 ? void 0 : _b.label))), this.getDeviceInformationStatus(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Device Analysis"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row " }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Audio Analysis"), " :"), this.getAudioAnalysisStatus()), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "Video Analysis"), " :"), this.getVideoAnalysisStatus()))))) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "info" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.warning }), "You are not sharing your screen."), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, "In order for us to test your screenshare, you need to be sharing your screen. You can enable screenshare from the control bar."))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-manager" }, this.stage < 1 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage + 1) }, "Next", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_right }))), this.stage > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage - 1) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_left }), "Prev"))))), this.activeTab === 'Report' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-issues-ui", Object.assign({}, defaults, { mediaType: "screenshare" }))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteDebuggerAudio$1.style = dyteDebuggerScreenshareCss;

const dyteDebuggerVideoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:600}.status{margin-left:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:12px}.status dyte-icon{margin-right:var(--dyte-space-2, 8px)}.stage-indicator{margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:center;font-size:12px;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.scroll{overflow:auto;border-radius:var(--dyte-border-radius-none, 0)}.warning,.NOT_REQUESTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity)) !important;opacity:0.8}.success,.ACCEPTED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity)) !important;opacity:0.8}.COULD_NOT_START,.error,.DENIED,.SYSTEM_DENIED{--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity)) !important;opacity:0.8}.row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}h3{margin:var(--dyte-space-0, 0px);font-size:14px;font-weight:600}.status-text{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:100 !important}.status-text dyte-icon{margin-right:var(--dyte-space-2, 8px)}.tooltip-text{display:flex;flex-direction:column;font-size:12px}.tooltip-text span{margin-left:var(--dyte-space-1, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88)) !important}.tooltip-text div{margin-top:var(--dyte-space-1, 4px)}.tooltip-text div:nth-child(1){margin:var(--dyte-space-0, 0px)}.row{display:flex;flex-direction:row;align-items:center;justify-content:center}.row dyte-switch{margin-left:var(--dyte-space-8, 32px)}.row dyte-button{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px)}.row .label{width:var(--dyte-space-40, 160px)}.row .text{margin-top:var(--dyte-space-1, 4px);margin-left:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-0, 0px)}.col{display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}.label{margin-top:var(--dyte-space-1, 4px);display:flex;flex-direction:row;justify-content:space-between;font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.text{margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));opacity:0.7}.title{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.sub-title{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;align-items:center;font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.stage-manager{position:-webkit-sticky;position:sticky;bottom:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);display:flex;width:100%;flex-direction:row-reverse;align-items:center;justify-content:space-between;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-600, 13 81 253) / var(--tw-text-opacity))}.stage-button{display:flex;cursor:pointer;flex-direction:row;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px)}.stage-button dyte-icon{padding:var(--dyte-space-0, 0px)}.disabled{cursor:not-allowed;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52)) !important}.video-container{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.no-video-preview{position:absolute;top:50%;left:50%;z-index:50;display:flex;height:var(--dyte-space-12, 48px);width:var(--dyte-space-12, 48px);align-items:center;justify-content:center;border-radius:50%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));translate:-50% -50%}.video-preview{margin-top:var(--dyte-space-1, 4px);aspect-ratio:16 / 9;height:var(--dyte-space-28, 112px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}video{transform:scaleX(-1)}#header{margin-top:var(--dyte-space-2, 8px);display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}#header dyte-button{border-bottom:var(--dyte-border-width-md, 2px) solid transparent;border-radius:var(--dyte-border-radius-none, 0)}#header dyte-button:hover{background-color:transparent}#header dyte-button.active{border-color:rgb(var(--dyte-colors-brand-400, 53 110 253))}.tab-body{display:flex;height:100%;flex-direction:column;justify-content:space-between;overflow-y:auto;padding:var(--dyte-space-4, 16px)}";

const DyteDebuggerAudio = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.testProgress = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "testProgress", 7);
    this.blackFramesCount = 0;
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.activeTab = 'Report';
    this.stage = 0;
    this.mediaPermission = 'NOT_REQUESTED';
    this.videoPreview = false;
    this.videoMetadata = {};
    this.videoTrackStats = {
      isBlackFrame: false,
      isFrozenFrame: false,
      timestamp: 0,
      videoScore: 0,
    };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
    this.updateProgress();
  }
  disconnectedCallback() {
    var _a;
    const { self, troubleshoot } = this.meeting;
    this.videoPreview && this.toggleVideoTest();
    self === null || self === void 0 ? void 0 : self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_a = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.video) === null || _a === void 0 ? void 0 : _a.removeListener('videoTrackStats', this.videoTrackUpdateListener);
  }
  async meetingChanged(meeting) {
    var _a, _b;
    if (!meeting)
      return;
    const { self, troubleshoot } = meeting;
    if (self === null || self === void 0 ? void 0 : self.videoTrack) {
      await this.getTrackInfo();
    }
    self === null || self === void 0 ? void 0 : self.on('deviceUpdate', this.deviceUpdateListner.bind(this));
    self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener.bind(this));
    const permission = (_a = self === null || self === void 0 ? void 0 : self.mediaPermissions) === null || _a === void 0 ? void 0 : _a.video;
    this.mediaPermissionUpdateListener({ kind: 'video', message: permission });
    (_b = troubleshoot === null || troubleshoot === void 0 ? void 0 : troubleshoot.video) === null || _b === void 0 ? void 0 : _b.on('videoTrackStats', this.videoTrackUpdateListener.bind(this));
  }
  mediaPermissionUpdateListener({ kind, message }) {
    if (kind !== 'video')
      return;
    this.mediaPermission = message;
    if (this.mediaPermission !== 'ACCEPTED') {
      this.stage = 0;
      this.updateProgress();
      if (this.videoPreview)
        this.toggleVideoTest();
    }
  }
  deviceUpdateListner({ device, preview }) {
    if (preview)
      return;
    if ((device === null || device === void 0 ? void 0 : device.kind) !== 'videoinput')
      return;
    this.getTrackInfo();
  }
  videoTrackUpdateListener(data) {
    this.videoTrackStats = Object.assign(Object.assign({}, data), { videoScore: this.normalizeVideoScore(data === null || data === void 0 ? void 0 : data.videoScore) });
  }
  setActiveTab(state) {
    this.activeTab = state;
    this.updateProgress();
  }
  async toggleVideoTest() {
    var _a, _b;
    this.videoPreview = !this.videoPreview;
    const troubleshooter = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.troubleshoot) === null || _b === void 0 ? void 0 : _b.video;
    if (this.videoPreview) {
      const track = await (troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.startPreview());
      const stream = new MediaStream();
      if (!track)
        return;
      stream.addTrack(track);
      setTimeout(() => {
        this.videoEl.srcObject = stream;
      }, 500);
      this.getTrackInfo();
      await (troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.startTrackAnalysis());
    }
    else {
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopPreview();
      troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.stopTrackAnalysis();
      this.videoEl.srcObject = undefined;
    }
  }
  getTrackInfo() {
    var _a, _b;
    this.videoMetadata = (_b = (_a = this.meeting.troubleshoot) === null || _a === void 0 ? void 0 : _a.video) === null || _b === void 0 ? void 0 : _b.getTrackMetadata();
  }
  getAnalysisStatus() {
    var _a, _b;
    let message = 'All systems are functional.';
    let icon = 'checkmark';
    let style = 'success';
    if ((_a = this.videoTrackStats) === null || _a === void 0 ? void 0 : _a.isBlackFrame) {
      this.blackFramesCount++;
    }
    else {
      this.blackFramesCount = 0;
    }
    if ((_b = this.videoTrackStats) === null || _b === void 0 ? void 0 : _b.isFrozenFrame) {
      message = 'Looks like the video is frozen.';
      icon = 'warning';
      style = 'error';
    }
    if (this.blackFramesCount > 10) {
      message = 'Video is not being processed by the camera.';
      icon = 'warning';
      style = 'error';
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `row status-text ${style}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[icon] }), this.t(message)));
  }
  changeStage(stage) {
    if (this.mediaPermission !== 'ACCEPTED')
      return;
    stage = Math.max(0, stage);
    stage = Math.min(1, stage);
    this.stage = stage;
    this.updateProgress();
    if (this.videoPreview)
      this.toggleVideoTest();
  }
  updateProgress() {
    if (this.activeTab === 'Troubleshoot') {
      this.testProgress.emit(((this.stage + 1) * 100) / 2);
    }
    else
      this.testProgress.emit(0);
  }
  formatLabel(camelCaseLabel) {
    const result = camelCaseLabel.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  boolToStr(val) {
    if (val)
      return 'Yes';
    return 'No';
  }
  normalizeVideoScore(val = 0) {
    let max = 1;
    const min = 0;
    if (val > max)
      max = val;
    return Math.max(5, Math.round((val * 10) / (max - min)));
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_6__.s,
      iconPack: this.iconPack,
      t: this.t,
      size: this.size,
    };
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "header" }, ['Report', 'Troubleshoot'].map((section) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { key: section, variant: "ghost", class: { active: this.activeTab === section }, onClick: () => this.setActiveTab(section), iconPack: this.iconPack, t: this.t }, this.t(section))))), this.activeTab === 'Troubleshoot' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-indicator" }, "Step ", this.stage + 1, "/2"), this.stage === 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-permissions-ui", Object.assign({}, defaults, { mediaType: "video" }))), this.stage === 1 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title" }, "Camera Test"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t('Upon starting the Camera Test, a video preview will be enabled for you.')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "md", onClick: () => this.toggleVideoTest() }, this.videoPreview ? 'Stop' : 'Start', " Camera Test"), this.videoPreview && this.videoMetadata && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "col" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Device Information", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-information-tooltip", { iconPack: this.iconPack }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "tootlip-text", class: "tooltip-text" }, Object.keys(this.videoMetadata).map((key) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.formatLabel(key), ":", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, JSON.stringify(this.videoMetadata[key])))))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('Device Label')), ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t(this.videoMetadata.label))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, "Video & Device Analysis", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-information-tooltip", { iconPack: this.iconPack }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { slot: "tootlip-text", class: "tooltip-text" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Video Score:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.videoTrackStats.videoScore, "/10")), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Black Frame Detected:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.boolToStr(this.videoTrackStats.isBlackFrame))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Frozen Frame Detected:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.boolToStr(this.videoTrackStats.isFrozenFrame))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Time:", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, new Date(this.videoTrackStats.timestamp).toLocaleTimeString()))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "video-container" }, !this.videoPreview && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "no-video-preview" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.video_off, size: "md" }))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => (this.videoEl = el), autoPlay: true, playsInline: true, muted: true, class: "video-preview" })), this.getAnalysisStatus()))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stage-manager" }, this.stage > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage - 1) }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_left }), "Prev")), this.stage < 1 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'stage-button': true, disabled: this.mediaPermission !== 'ACCEPTED' }, onClick: () => this.changeStage(this.stage + 1) }, "Next", (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack.chevron_right })))))), this.activeTab === 'Report' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tab-body" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-debugger-issues-ui", Object.assign({}, defaults, { mediaType: "video" }))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteDebuggerAudio.style = dyteDebuggerVideoCss;




/***/ }),

/***/ 46503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;