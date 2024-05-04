"use strict";
exports.id = 1780;
exports.ids = [1780];
exports.modules = {

/***/ 71780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_settings_audio: () => (/* binding */ DyteSettingsAudio),
/* harmony export */   dyte_settings_video: () => (/* binding */ DyteSettingsVideo)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17073);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74157);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55055);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26468);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64383);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94370);








const dyteSettingsAudioCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}audio{visibility:hidden}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.dyte-select{width:100%;max-width:100%;text-overflow:ellipsis}dyte-audio-visualizer{flex-shrink:0}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button dyte-icon{margin-right:var(--dyte-space-2, 8px)}";

const DyteSettingsAudio = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.stageStateListener = () => {
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
    };
    this.deviceListUpdateListener = ({ added, removed }) => {
      added.map((device) => {
        if (device.kind === 'audioinput')
          this.audioDevices = [...this.audioDevices, device];
        if (device.kind === 'audiooutput')
          this.speakerDevices = [...this.speakerDevices, device];
      });
      removed.map((device) => {
        if (device.kind === 'audioinput')
          this.audioDevices = this.audioDevices.filter((x) => x.deviceId !== device.deviceId);
        if (device.kind === 'audiooutput')
          this.speakerDevices = this.speakerDevices.filter((x) => x.deviceId !== device.deviceId);
      });
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind === 'audioinput') {
        this.currentDevices = Object.assign(Object.assign({}, this.currentDevices), { audio: device });
      }
      if (device.kind === 'audiooutput') {
        this.currentDevices = Object.assign(Object.assign({}, this.currentDevices), { speaker: device });
      }
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.audioDevices = [];
    this.speakerDevices = [];
    this.canProduceAudio = true;
    this.currentDevices = { audio: undefined, speaker: undefined };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.stageStateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b, _c, _d;
      const { self, stage } = meeting;
      const audioDevices = await meeting.self.getAudioDevices();
      const speakerDevices = await meeting.self.getSpeakerDevices();
      const currentAudioDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.audio;
      const currentSpeakerDevice = (_b = meeting.self.getCurrentDevices()) === null || _b === void 0 ? void 0 : _b.speaker;
      this.currentDevices = {
        audio: currentAudioDevice,
        speaker: currentSpeakerDevice,
      };
      this.canProduceAudio = this.meeting.self.permissions.canProduceAudio === 'ALLOWED';
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStateListener);
      self.addListener('deviceListUpdate', this.deviceListUpdateListener);
      self.addListener('deviceUpdate', this.deviceUpdateListener);
      if (currentAudioDevice != undefined) {
        this.audioDevices = [
          (_c = audioDevices.find((device) => device.deviceId === currentAudioDevice.deviceId)) !== null && _c !== void 0 ? _c : currentAudioDevice,
          ...audioDevices.filter((device) => device.deviceId !== currentAudioDevice.deviceId),
        ];
      }
      else {
        this.audioDevices = audioDevices;
      }
      if (currentSpeakerDevice != undefined) {
        this.speakerDevices = [
          (_d = speakerDevices.find((device) => device.deviceId === currentSpeakerDevice.deviceId)) !== null && _d !== void 0 ? _d : currentSpeakerDevice,
          ...speakerDevices.filter((device) => device.deviceId !== currentSpeakerDevice.deviceId),
        ];
      }
      else {
        this.speakerDevices = speakerDevices;
      }
    });
  }
  testAudio() {
    var _a;
    (_a = this.testAudioEl) === null || _a === void 0 ? void 0 : _a.play();
  }
  setDevice(kind, deviceId) {
    var _a, _b;
    if ((0,_flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_5__.d)(this.meeting))
      return;
    const device = kind === 'audio'
      ? this.audioDevices.find((d) => d.deviceId === deviceId)
      : this.speakerDevices.find((d) => d.deviceId === deviceId);
    this.currentDevices = Object.assign(Object.assign({}, this.currentDevices), { [kind]: device });
    if (device != null) {
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device);
      if (device.kind === 'audiooutput') {
        (_b = this.testAudioEl) === null || _b === void 0 ? void 0 : _b.setSinkId(device.deviceId);
      }
    }
  }
  render() {
    var _a, _b;
    if (this.meeting == null)
      return null;
    let unnamedMicCount = 0;
    let unnamedSpeakerCount = 0;
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialNotificationSoundsPreference = ((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.muteNotificationSounds) === true ||
      (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.b)('mute-notification-sounds') === 'true';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("audio", { preload: "auto", src: "https://assets.dyte.io/ui-kit/speaker-test.mp3", ref: (el) => (this.testAudioEl = el) }), this.canProduceAudio && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "microphone-selection" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, this.t('settings.microphone_input')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice('audio', e.target.value) }, this.audioDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = this.currentDevices.audio) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Microphone ${++unnamedMicCount}`));
    })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-audio-visualizer", { participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, iconPack: this.iconPack, t: this.t })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "speaker-selection" }, this.speakerDevices.length > 0 && !(0,_flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_5__.d)(this.meeting) && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, this.t('settings.speaker_output')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice('speaker', e.target.value) }, this.speakerDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: deviceId, selected: ((_a = this.currentDevices.speaker) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId }, label || `Speaker ${++unnamedSpeakerCount}`));
    }))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", onClick: () => this.testAudio(), iconPack: this.iconPack, t: this.t }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.speaker, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('test'))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "notification-toggle" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "notification-toggle" }, this.t('settings.notification_sound')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { id: "notification-toggle", checked: !initialNotificationSoundsPreference, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        const muteNotificationSounds = !checked;
        this.stateUpdate.emit({ prefs: { muteNotificationSounds } });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { muteNotificationSounds });
        (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.s)('mute-notification-sounds', muteNotificationSounds);
      }, iconPack: this.iconPack, t: this.t })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSettingsAudio.style = dyteSettingsAudioCss;

const dyteSettingsVideoCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column}.dyte-select{width:100%;text-overflow:ellipsis}dyte-participant-tile{margin-left:auto;margin-right:auto;margin-bottom:var(--dyte-space-4, 16px);max-width:100%}#icon{padding-bottom:var(--dyte-space-1, 4px)}.apply-button{height:var(--dyte-space-10, 40px)}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.section{display:flex;flex-direction:column}@media only screen and (max-height: 480px) and (orientation: landscape){:host{flex-direction:row}:host([size='sm']){flex-direction:row}.section[part='tile-preview']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);max-height:90%;max-width:40%;flex-shrink:1}.section[part='video-settings']{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);flex-grow:1}}";

const DyteSettingsVideo = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.onVideoUpdate = (videoState) => {
      this.videoEnabled = videoState.videoEnabled;
    };
    this.deviceListUpdateListener = ({ added, removed }) => {
      added.map((device) => {
        if (device.kind !== 'videoinput')
          return;
        this.videoDevices = [...this.videoDevices, device];
      });
      removed.map((device) => {
        if (device.kind !== 'videoinput')
          return;
        this.videoDevices = this.videoDevices.filter((x) => x.deviceId !== device.deviceId);
      });
    };
    this.deviceUpdateListener = ({ device }) => {
      if (device.kind !== 'videoinput')
        return;
      this.currentDevice = device;
    };
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoDevices = [];
    this.currentDevice = undefined;
    this.videoEnabled = undefined;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting == null)
      return;
    this.videoEnabled = meeting.self.videoEnabled;
    (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.addListener('videoUpdate', this.onVideoUpdate);
    (_b = meeting.self) === null || _b === void 0 ? void 0 : _b.addListener('deviceListUpdate', this.deviceListUpdateListener);
    (_c = meeting.self) === null || _c === void 0 ? void 0 : _c.addListener('deviceUpdate', this.deviceUpdateListener);
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(async () => {
      var _a, _b;
      const videoDevices = await meeting.self.getVideoDevices();
      const currentVideoDevice = (_a = meeting.self.getCurrentDevices()) === null || _a === void 0 ? void 0 : _a.video;
      //  NOTE(callmetarush): Setting current video device to show on top of list
      if (currentVideoDevice != undefined) {
        this.videoDevices = [
          (_b = videoDevices.find((device) => device.deviceId === currentVideoDevice.deviceId)) !== null && _b !== void 0 ? _b : currentVideoDevice,
          ...videoDevices.filter((device) => device.deviceId !== currentVideoDevice.deviceId),
        ];
      }
      else {
        this.videoDevices = videoDevices;
      }
    });
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.meeting.self) === null || _a === void 0 ? void 0 : _a.removeListener('videoUpdate', this.onVideoUpdate);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('deviceListUpdate', this.deviceListUpdateListener);
    (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  async setDevice(deviceId) {
    var _a;
    const device = this.videoDevices.find((d) => d.deviceId === deviceId);
    this.currentDevice = device;
    if (device != null) {
      await ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.setDevice(device));
    }
  }
  render() {
    var _a, _b, _c;
    if (this.meeting == null)
      return null;
    let unnamedVideoCount = 0;
    const states = this.states || _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s;
    const initialMirrorPreference = ((_a = states === null || states === void 0 ? void 0 : states.prefs) === null || _a === void 0 ? void 0 : _a.mirrorVideo) === true || (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.b)('mirror-video') === 'true';
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "section", part: "tile-preview" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "tile-preview" }, this.videoEnabled === true ? ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { meeting: this.meeting, participant: (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self, iconPack: this.iconPack, t: this.t, states: states, size: this.size, isPreview: true })) : ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "camera-off-helper" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participant-tile", { meeting: this.meeting, participant: (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.self, size: this.size }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { id: "icon", icon: this.iconPack.video_off, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.t('settings.camera_off')))))))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "section", part: "video-settings" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "camera-selection" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", null, this.t('camera')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: "dyte-select", onChange: (e) => this.setDevice(e.target.value) }, this.videoDevices.map(({ deviceId, label }) => {
      var _a;
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: ((_a = this.currentDevice) === null || _a === void 0 ? void 0 : _a.deviceId) === deviceId, value: deviceId }, label || `Camera ${++unnamedVideoCount}`));
    })))), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "group", part: "mirror-toggle" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "row" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { htmlFor: "mirror-toggle" }, this.t('settings.mirror_video')), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-switch", { checked: initialMirrorPreference, iconPack: this.iconPack, t: this.t, onDyteChange: (e) => {
        var _a;
        const { checked } = e.target;
        this.stateUpdate.emit({ prefs: { mirrorVideo: checked } });
        _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs = Object.assign(Object.assign({}, ((_a = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_4__.s.prefs) !== null && _a !== void 0 ? _a : {})), { mirrorVideo: checked });
        (0,_user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_3__.s)('mirror-video', checked);
      } }))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteSettingsVideo.style = dyteSettingsVideoCss;




/***/ })

};
;