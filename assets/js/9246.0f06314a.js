"use strict";
exports.id = 9246;
exports.ids = [9246];
exports.modules = {

/***/ 43367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ RemoteUpdateType)
/* harmony export */ });
var RemoteUpdateType;
(function (RemoteUpdateType) {
  RemoteUpdateType["REQUEST_RECEIVED"] = "REQUEST_RECEIVED";
  RemoteUpdateType["REQUEST_SENT"] = "REQUEST_SENT";
  RemoteUpdateType["INCOMING_REQUEST_ACCEPTED"] = "INCOMING_REQUEST_ACCEPTED";
  RemoteUpdateType["OUTGOING_REQUEST_ACCEPTED"] = "OUTGOING_REQUEST_ACCEPTED";
  RemoteUpdateType["INCOMING_REQUEST_ENDED"] = "INCOMING_REQUEST_ENDED";
  RemoteUpdateType["OUTGOING_REQUEST_ENDED"] = "OUTGOING_REQUEST_ENDED";
})(RemoteUpdateType || (RemoteUpdateType = {}));




/***/ }),

/***/ 89246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_screenshare_view: () => (/* binding */ DyteScreenshareView)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74710);
/* harmony import */ var _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43367);
/* harmony import */ var _full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30099);






const dyteScreenshareViewCss = ":host {\n  line-height: initial;\n  font-family: var(--dyte-font-family, sans-serif);\n\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n}\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n\n:host {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: var(--dyte-border-radius-lg, 12px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));\n  container-type: inline-size;\n  container-name: screentile;\n}\n\n::slotted(dyte-name-tag) {\n  position: absolute;\n  left: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n  opacity: 0.8;\n}\n\n#video-container {\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n#video-container .fit-in-container {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\nvideo {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n:host([variant='gradient']) ::slotted(dyte-audio-visualizer) {\n  position: absolute;\n  top: var(--dyte-space-2, 8px);\n  right: var(--dyte-space-2, 8px);\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));\n  padding: var(--dyte-space-2, 8px);\n}\n\n:host([variant='gradient']) ::slotted(dyte-name-tag) {\n  bottom: var(--dyte-space-0, 0px);\n  left: var(--dyte-space-0, 0px);\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: transparent;\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n  --tw-gradient-from: rgb(var(--dyte-colors-background-1000, 8 8 8));\n  --tw-gradient-to: rgba(var(--dyte-colors-background-1000, 8 8 8) / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: transparent;\n}\n\n:host([size='sm'][variant='gradient']) ::slotted(dyte-audio-visualizer) {\n  height: var(--dyte-space-5, 20px);\n  width: var(--dyte-space-5, 20px);\n}\n\nvideo.visible {\n  animation: video-fadein 0.4s ease;\n}\n\n#controls {\n  display: none;\n  position: absolute;\n  top: var(--dyte-space-3, 12px);\n  right: var(--dyte-space-3, 12px);\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--dyte-space-2, 8px);\n}\n\n:host(:hover) #controls, \n:host(:active) #controls, \n:host(:focus-visible) #controls {\n  display: flex;\n}\n\n#full-screen-btn {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));\n}\n\n/** For self view */\n\nh3 {\n  margin-top: var(--dyte-space-10, 40px);\n  margin-bottom: var(--dyte-space-6, 24px);\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n}\n\n:host([size='sm']) h3 {\n  font-size: 16px;\n}\n\n#self-message {\n  padding-left: var(--dyte-space-4, 16px);\n  padding-right: var(--dyte-space-4, 16px);\n}\n\n:host(.isSelf) #self-view {\n  flex: 1 1 0%;\n}\n\n:host(.isSelf) #video-container {\n  position: static;\n  aspect-ratio: auto;\n  height: auto;\n  width: 50%;\n  max-width: var(--dyte-space-96, 384px);\n  border-radius: var(--dyte-border-radius-md, 8px);\n  transition: 0.6s ease;\n}\n\n:host(.isSelf) #video-container.expand {\n  width: 60%;\n  max-width: 100%;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--dyte-space-2, 8px);\n}\n\n:host([size='sm'].isSelf) #video-container,\n:host([size='md'].isSelf) #video-container,\n:host([size='sm'].isSelf) #expand-btn,\n:host([size='md'].isSelf) #expand-btn {\n  /** Hide video, fullscreen buttons in sm and md breakpoints */\n  display: none;\n}\n\n/** Remote control */\n\np {\n  margin: var(--dyte-space-0, 0px);\n  padding: var(--dyte-space-0, 0px);\n}\n\n.remote-control {\n  z-index: 10;\n  height: 100%;\n  max-height: 100%;\n  flex: 0 1 auto;\n}\n\n#remote-control-self {\n  position: absolute;\n  top: var(--dyte-space-0, 0px);\n  left: 50%;\n  z-index: 10;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  height: var(--dyte-space-8, 32px);\n  align-items: center;\n  overflow: hidden;\n  border-radius: var(--dyte-border-radius-sm, 4px);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-bg-opacity));\n  font-size: 12px;\n  color: rgb(var(--dyte-colors-text-1000, 255 255 255));\n  transform: translateX(-50%);\n}\n\n#remote-control-self p {\n  padding-left: var(--dyte-space-3, 12px);\n  padding-right: var(--dyte-space-3, 12px);\n  padding-top: var(--dyte-space-2, 8px);\n  padding-bottom: var(--dyte-space-2, 8px);\n}\n\n#remote-control-self dyte-button {\n  height: 100%;\n  border-radius: var(--dyte-border-radius-none, 0);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-bg-opacity));\n  font-size: 12px;\n}\n\n:host([size='sm']) #remote-control-self {\n  height: auto;\n  flex-direction: column;\n}\n\n:host([size='sm']) #remote-control-self dyte-button {\n  width: 100%;\n  padding-top: var(--dyte-space-1, 4px);\n  padding-bottom: var(--dyte-space-1, 4px);\n}\n\n/** Name tag positions */\n\n:host([name-tag-position='bottom-right']) ::slotted(dyte-name-tag) {\n  left: auto;\n  right: var(--dyte-space-3, 12px);\n}\n\n:host([name-tag-position='bottom-center']) ::slotted(dyte-name-tag) {\n  left: auto;\n  right: auto;\n}\n\n:host([name-tag-position='top-left']) ::slotted(dyte-name-tag) {\n  top: var(--dyte-space-3, 12px);\n  bottom: auto;\n}\n\n:host([name-tag-position='top-right']) ::slotted(dyte-name-tag) {\n  top: var(--dyte-space-3, 12px);\n  right: var(--dyte-space-3, 12px);\n  left: auto;\n  bottom: auto;\n}\n\n:host([name-tag-position='top-center']) ::slotted(dyte-name-tag) {\n  left: auto;\n  right: auto;\n  bottom: auto;\n  top: var(--dyte-space-3, 12px);\n}\n\n/** Keyframes */\n\n@keyframes video-fadein {\n  0% {\n    opacity: 0;\n    transform: scale(1.4) translateY(20px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n\n::slotted(dyte-network-indicator) {\n  position: absolute;\n  right: var(--dyte-space-3, 12px);\n  bottom: var(--dyte-space-3, 12px);\n}\n\n@container screentile (max-width: 400px) {\n  ::slotted(dyte-name-tag) {\n    transform-origin: 0 130%;\n    transform: scale(0.7)\n  }\n}";

const DyteScreenshareView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.fullScreenListener = () => {
      this.isFullScreen = (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.i)();
    };
    this.onRemoteUpdate = ({ payload, type }) => {
      var _a, _b;
      let remoteControlInfo = '';
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.INCOMING_REQUEST_ACCEPTED) {
        const remotePeer = this.meeting.participants.joined.get(payload.request.remotePeerId);
        remoteControlInfo = `${remotePeer.name} is controlling your screen.`;
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.OUTGOING_REQUEST_ACCEPTED) {
        const hostPeer = this.meeting.participants.joined.get(payload.request.hostPeerId);
        remoteControlInfo = `You are controlling ${hostPeer.name}'s screen.`;
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.INCOMING_REQUEST_ENDED ||
        type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.OUTGOING_REQUEST_ENDED) {
        remoteControlInfo = '';
      }
      if (type === _dyte_client_faf935bd_js__WEBPACK_IMPORTED_MODULE_3__.R.REQUEST_RECEIVED && !Boolean((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.active)) {
        this.stateUpdate.emit({ activeRemoteAccessManager: true });
      }
      this.remoteControlInfo = remoteControlInfo;
    };
    this.onMouseEvent = (event) => {
      var _a, _b;
      if (this.shouldSkipEventTrigger()) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.mouseEvent(event, this.videoEl);
    };
    this.onKeyDown = (event) => {
      var _a, _b;
      if (this.shouldSkipEventTrigger()) {
        return;
      }
      (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.keyboardEvent(event);
    };
    this.toggleFullScreen = () => {
      if (!this.isFullScreen) {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.r)(this.host);
        this.isFullScreen = true;
      }
      else {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.e)();
        this.isFullScreen = false;
      }
    };
    this.hideFullScreenButton = false;
    this.nameTagPosition = 'bottom-left';
    this.participant = undefined;
    this.meeting = undefined;
    this.variant = 'solid';
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoExpanded = false;
    this.screenShareEnabled = false;
    this.isFullScreen = false;
    this.remoteControlInfo = undefined;
  }
  participantScreenshareUpdate(p) {
    if (p.id !== this.participant.id)
      return;
    this.screenShareListener(p);
  }
  connectedCallback() {
    window === null || window === void 0 ? void 0 : window.addEventListener('fullscreenchange', this.fullScreenListener);
    window === null || window === void 0 ? void 0 : window.addEventListener('webkitfullscreenchange', this.fullScreenListener);
  }
  componentDidLoad() {
    this.participantChanged(this.participant);
  }
  disconnectedCallback() {
    var _a, _b;
    const { self } = this.meeting;
    if (this.participant.id === self.id && this.screenShareListener)
      this.participant.removeListener('screenShareUpdate', this.screenShareListener);
    else
      this.meeting.participants.joined.removeListener('screenShareUpdate', this.participantScreenshareUpdate);
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.removeListener('remoteUpdate', this.onRemoteUpdate);
    window === null || window === void 0 ? void 0 : window.removeEventListener('fullscreenchange', this.fullScreenListener);
    window === null || window === void 0 ? void 0 : window.removeEventListener('webkitfullscreenchange', this.fullScreenListener);
  }
  participantChanged(participant) {
    var _a, _b, _c, _d, _e;
    if (participant != null) {
      const { self } = this.meeting;
      this.screenShareListener = ({ screenShareEnabled, screenShareTracks }) => {
        const enabled = screenShareEnabled && screenShareTracks.video != null;
        (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
          this.screenShareEnabled = enabled;
        });
        if (enabled) {
          const stream = new MediaStream();
          stream.addTrack(screenShareTracks.video);
          if (this.videoEl != null) {
            this.videoEl.srcObject = stream;
            this.videoEl.play();
          }
        }
        else if (this.videoEl != null) {
          this.videoEl.srcObject = undefined;
        }
      };
      this.screenShareListener(participant);
      if (Boolean((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.remote) === null || _b === void 0 ? void 0 : _b.active) &&
        [this.meeting.remote.active.hostPeerId, this.meeting.remote.active.remotePeerId].includes(participant === null || participant === void 0 ? void 0 : participant.id)) {
        this.onRemoteUpdate({
          payload: { request: this.meeting.remote.active },
          type: ((_c = this.meeting.remote.active) === null || _c === void 0 ? void 0 : _c.hostPeerId) === this.meeting.self.id
            ? 'INCOMING_REQUEST_ACCEPTED'
            : 'OUTGOING_REQUEST_ACCEPTED',
        });
      }
      if (participant.id === self.id)
        participant.addListener('screenShareUpdate', this.screenShareListener);
      else
        this.meeting.participants.joined.addListener('screenShareUpdate', this.participantScreenshareUpdate.bind(this));
      (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.remote) === null || _e === void 0 ? void 0 : _e.addListener('remoteUpdate', this.onRemoteUpdate);
    }
  }
  shouldSkipEventTrigger() {
    var _a, _b, _c;
    if (this.meeting == null || this.participant == null)
      return true;
    return (!Boolean((_a = this.meeting.remote) === null || _a === void 0 ? void 0 : _a.active) ||
      // It is you, who is moving over your own shared screen
      !Boolean(this.meeting.participants.joined.get((_b = this.meeting.remote) === null || _b === void 0 ? void 0 : _b.active.hostPeerId)) ||
      // Skip nonactive screenshare events, Redundant check
      ((_c = this.meeting.remote) === null || _c === void 0 ? void 0 : _c.active.hostPeerId) != this.participant.id);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isSelf = ((_a = this.participant) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.id);
    const text = this.isFullScreen ? this.t('full_screen.exit') : this.t('full_screen');
    const icon = this.isFullScreen
      ? this.iconPack.full_screen_minimize
      : this.iconPack.full_screen_maximize;
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: { isSelf } }, Boolean(((_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.remote) === null || _d === void 0 ? void 0 : _d.active) && this.remoteControlInfo) && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "remote-control-self", key: "remote-control-self" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "remote-control-message" }, this.remoteControlInfo), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => { var _a; return (_a = this.meeting.remote) === null || _a === void 0 ? void 0 : _a.endControl(); }, iconPack: this.iconPack, t: this.t }, ((_f = (_e = this.meeting.remote) === null || _e === void 0 ? void 0 : _e.active) === null || _f === void 0 ? void 0 : _f.hostPeerId) === this.meeting.self.id
      ? 'Revoke access'
      : 'Stop'))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "video-container", id: "video-container", class: { expand: this.videoExpanded }, contentEditable: Boolean((_g = this.meeting.remote) === null || _g === void 0 ? void 0 : _g.active), onKeyDown: this.onKeyDown }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { ref: (el) => (this.videoEl = el), class: {
        visible: this.screenShareEnabled,
        'fit-in-container': this.participant.supportsRemoteControl,
      }, playsInline: true, autoPlay: true, muted: true, id: `screen-share-video-${this.participant.id}`, onMouseMove: this.onMouseEvent, onClick: this.onMouseEvent, onContextMenu: this.onMouseEvent })), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "controls", key: "controls" }, !this.hideFullScreenButton && !isSelf && (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.a)() && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: text, iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { id: "full-screen-btn", kind: "icon", onClick: this.toggleFullScreen, title: text, iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: icon, "aria-hidden": true, tabIndex: -1, iconPack: this.iconPack, t: this.t })))), ((_h = this.participant) === null || _h === void 0 ? void 0 : _h.supportsRemoteControl) === true && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { id: "menu", key: "menu", iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", slot: "trigger", iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.more_vertical, iconPack: this.iconPack, t: this.t })), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", { iconPack: this.iconPack, t: this.t }, !isSelf && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { style: {
        cursor: this.participant.supportsRemoteControl ? 'pointer' : 'not-allowed',
      }, iconPack: this.iconPack, t: this.t, onClick: () => {
        var _a, _b;
        if ((_a = this.participant) === null || _a === void 0 ? void 0 : _a.supportsRemoteControl) {
          (_b = this.meeting.remote) === null || _b === void 0 ? void 0 : _b.requestControl(this.participant.id);
        }
      } }, "Request remote control")), isSelf && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { iconPack: this.iconPack, t: this.t, onClick: () => this.stateUpdate.emit({ activeRemoteAccessManager: true }) }, "Manage remote control requests")))))), isSelf && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "self-message", key: "self-message" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('screenshare.shared')), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "actions" }, this.meeting != null && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "danger", onClick: () => {
        this.meeting.self.disableScreenShare();
      }, iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.share_screen_stop, slot: "start", iconPack: this.iconPack, t: this.t }), this.t('screenshare.stop'))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", id: "expand-btn", iconPack: this.iconPack, t: this.t, onClick: () => {
        this.videoExpanded = !this.videoExpanded;
      } }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.videoExpanded
        ? this.iconPack.full_screen_minimize
        : this.iconPack.full_screen_maximize, slot: "start", iconPack: this.iconPack, t: this.t }), this.videoExpanded
      ? this.t('screenshare.min_preview')
      : this.t('screenshare.max_preview'))))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get host() { return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "participant": ["participantChanged"]
  }; }
};
DyteScreenshareView.style = dyteScreenshareViewCss;




/***/ }),

/***/ 30099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ isFullScreenSupported),
/* harmony export */   e: () => (/* binding */ exitFullSreen),
/* harmony export */   i: () => (/* binding */ isFullScreenEnabled),
/* harmony export */   r: () => (/* binding */ requestFullScreen)
/* harmony export */ });
const requestFullScreen = (el) => {
  if (el == null)
    return;
  if (el.requestFullscreen != null) {
    el.requestFullscreen();
  }
  else if (el.mozRequestFullScreen != null) {
    /* Firefox */
    el.mozRequestFullScreen();
  }
  else if (el.webkitRequestFullscreen != null) {
    /* Chrome, Safari & Opera */
    el.webkitRequestFullscreen();
  }
  else if (el.msRequestFullscreen != null) {
    /* IE/Edge */
    el.msRequestFullscreen();
  }
};
const exitFullSreen = () => {
  if (document.exitFullscreen != null) {
    document.exitFullscreen();
  }
  else if (document.mozExitFullScreen != null) {
    /* Firefox */
    document.mozExitFullScreen();
  }
  else if (document.webkitExitFullscreen != null) {
    /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  }
  else if (document.msExitFullscreen != null) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
};
const isFullScreenEnabled = () => {
  return document.fullscreenElement != null || document.webkitCurrentFullScreenElement != null;
};
const isFullScreenSupported = () => {
  if (typeof document !== 'undefined') {
    return (document.fullscreenEnabled ||
      document.mozFullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.msFullscreenEnabled);
  }
  return false;
};




/***/ })

};
;