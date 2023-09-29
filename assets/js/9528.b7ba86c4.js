"use strict";
exports.id = 9528;
exports.ids = [9528];
exports.modules = {

/***/ 79528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_debugger_issues_ui: () => (/* binding */ DyteDebuggerAudio$1),
/* harmony export */   dyte_debugger_permissions_ui: () => (/* binding */ DyteDebuggerAudio),
/* harmony export */   dyte_information_tooltip: () => (/* binding */ DyteInformationTooltip)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24555);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8934);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







function getDeniedSteps({ osName, browserName, media }) {
  function getDevice() {
    if (media === 'audio')
      return 'Microphone';
    if (media === 'video')
      return 'Camera';
    return 'Screenshare';
  }
  if (browserName === 'Chrome') {
    return [
      'Open Chrome browser settings by clicking the three dots at the top right.',
      'Select Settings, Under Privacy and Security, click Site Settings, navigate to Permissions.',
      `Choose ${getDevice()}, provide the appropriate permission and reload this application.`,
    ];
  }
  if (browserName === 'Safari') {
    return [
      'Open Safari browser settings by clicking on Safari > Preferences at the top left.',
      `Under Websites, select ${getDevice()} from the devices on the left and pick this webiste.`,
      'Allow permissions from the pop-up menu and reload this application.',
    ];
  }
  if (browserName.includes('Opera')) {
    let results = [];
    if (osName === 'macOS' || osName === 'iOS') {
      results.push('To open settings, click Opera in the toolbar (top-left) > Preferences.');
    }
    else {
      results.push('To open settings, click the Opera icon (top-left) > Settings.');
    }
    results = [
      ...results,
      'Under Privacy and Security, click Site Settings.',
      `Select ${getDevice()}, enable permissions and reload this application.`,
    ];
    return results;
  }
  if (browserName === 'Firefox') {
    let results = [];
    if (osName === 'macOS' || osName === 'iOS') {
      results.push('To open settings, at the top right, click Preferneces');
    }
    else {
      results.push('To open settings, at the top right, click Options');
    }
    results = [
      ...results,
      'Under Privacy and Security, scroll down to the  Permissions  section',
      `Select Settings for ${getDevice()}`,
      'Enter the website URL in the search field, enable permissions and reload this application.',
    ];
    return results;
  }
  if (browserName.includes('Edge')) {
    return [
      'To open settings, at the top right click Settings & More > Settings.',
      `Under Site Premissions, click ${getDevice()}.`,
      'Use the drop-down menu and select the default device, allow permission and reload this application.',
    ];
  }
}
function getSysDeniedSteps({ osName, media }) {
  function getDevice() {
    if (media === 'audio')
      return 'Microphone';
    if (media === 'video')
      return 'Camera';
    return 'Screenshare';
  }
  if (osName === 'macOS') {
    return [
      ' To give ${getDevice()} access to your browser, choose Apple menu  > System Settings, then click Privacy & Security.',
      `From the sidebar select ${getDevice()}`,
      `If you don’t see  ${getDevice()}, upgrade to macOS Mojave or later.`,
      'Allow access to your browser,',
      'Reload this application.',
    ];
  }
  if (osName === 'iOS') {
    return [
      `To give ${getDevice()} access to your browser, go to phone Settings > Privacy.`,
      `Tap on ${getDevice()}. Allow access for your browser.`,
      'Reload this application.',
    ];
  }
  if (osName === 'Windows') {
    return [
      `To give ${getDevice()} access to your browser, go to the Start menu on Windows.`,
      `Select Settings > Privacy > ${getDevice()}`,
      `Allow permissions and reload this application.`,
    ];
  }
  if (osName.includes('Android')) {
    return [
      `To give ${getDevice()} access to your browser, go to phone Settings > Apps.`,
      'Select your browser from the list',
      `Tap Permissions and allow ${getDevice()} permissions.`,
      'Reload this application.',
    ];
  }
  return [];
}
function getDeniedImage({ browserName, isMobile, osName }) {
  if (browserName === 'Chrome') {
    if (!isMobile && osName === 'macOS')
      return 'Desktop_Chrome.mp4'; //macOS
    if (!isMobile)
      return ''; //windows
    if (osName === 'iOS')
      return 'Chrome_ios.mp4'; //iOS
    else
      return 'Android_Chrome.mp4'; //android
  }
  if (browserName === 'Firefox') {
    if (!isMobile && osName === 'macOs')
      return 'Desktop_Firefox.mp4'; //macOS
    if (!isMobile)
      return ''; //windows
    if (osName === 'iOS')
      return ''; // iOS
    else
      return 'Android_Firefox.mp4'; //android
  }
  if (browserName === 'Safari') {
    if (!isMobile)
      return 'Desktop_Safari.mp4'; // macOS
    return 'iOS Safari.mp4'; //iOS
  }
  if (browserName.includes('Edge')) {
    if (!isMobile && osName === 'macOs')
      return 'Desktop_Edge.mp4'; //macOS
    if (!isMobile)
      return ''; //windows
    if (osName === 'iOS')
      return ''; // iOS
    else
      return ''; //android
  }
  if (browserName === 'Opera') {
    if (!isMobile && osName === 'macOs')
      return ''; //macOS
    if (!isMobile)
      return ''; //windows
    if (osName === 'iOS')
      return ''; // iOS
    else
      return ''; //android
  }
  if (browserName === 'Opera') {
    if (!isMobile)
      return ''; // need
    if (osName === 'iOS')
      return ''; // need
    else
      return ''; // need
  }
}
function getSysDeniedImage({ osName }) {
  if (osName === 'macOS')
    return '';
  if (osName === 'iOS')
    return '';
  if (osName === 'Windows')
    return '';
  if (osName.includes('Android'))
    return '';
}
const audioPermissions = {
  ACCEPTED: {
    info: 'Permission granted',
    icon: 'checkmark',
    text: 'Your audio devices, such as microphones and speakers, should work as expected.',
    steps: () => [],
    image: () => '',
  },
  SYSTEM_DENIED: {
    info: 'Permission denied by system',
    icon: 'dismiss',
    text: 'Your browser does not have the required permissions to access your microphone',
    steps: getSysDeniedSteps,
    image: getSysDeniedImage,
  },
  DENIED: {
    info: 'Permission denied by browser',
    icon: 'dismiss',
    text: 'We do not have the required permissions to access your microphone',
    steps: getDeniedSteps,
    image: getDeniedImage,
  },
  COULD_NOT_START: {
    info: 'Could not start device',
    icon: 'dismiss',
    text: 'Access to the microphone may be restricted by a hardware error in the operating system or browser',
    steps: () => [
      'Restart your browser.',
      'Update your browser.',
      'If using an external device, try switching to another device.',
      'Switch to a different browser.',
    ],
    image: () => '',
  },
  NOT_REQUESTED: {
    info: 'You have not yet used your microphone yet',
    icon: 'warning',
    text: 'We cannot access the data to troubleshoot unless you try to use the microphone at least once. Please click on the "Allow Permissions" button to fix this. Others will not be able to hear you.',
    steps: () => [],
    image: () => '',
  },
};
const videoPermissions = {
  ACCEPTED: {
    info: 'Permission granted',
    icon: 'checkmark',
    text: 'Your camera devices should work as expected',
    steps: () => [],
    image: () => '',
  },
  SYSTEM_DENIED: {
    info: 'Permission denied by system',
    icon: 'dismiss',
    text: 'Your browser does not have the required permissions to access your camera',
    steps: getSysDeniedSteps,
    image: getSysDeniedImage,
  },
  DENIED: {
    info: 'Permission denied by browser',
    icon: 'dismiss',
    text: 'We do not not have the required permissions to access your camera',
    steps: getDeniedSteps,
    image: getDeniedImage,
  },
  COULD_NOT_START: {
    info: 'Could not start device',
    icon: 'dismiss',
    text: 'Access to the camera may be restricted by a hardware error in the operating system or browser',
    steps: () => [
      'Restart your browser.',
      'Update your browser.',
      'If using an external device, try switching to another device.',
      'Switch to a different browser.',
    ],
    image: () => '',
  },
  NOT_REQUESTED: {
    info: 'You have not yet used your camera yet',
    icon: 'warning',
    text: 'We cannot access the data to troubleshoot unless you try to use the camera at least once. Please click on the "Allow Permissions" button to fix this. Others will not be able to see you.',
    steps: () => [],
    image: () => '',
  },
};
const screensharePermissions = {
  ACCEPTED: {
    info: 'Permission granted',
    icon: 'checkmark',
    text: 'Your screen share should work as expected',
    steps: () => [],
    image: () => '',
  },
  SYSTEM_DENIED: {
    info: 'Permission denied by system',
    icon: 'dismiss',
    text: 'Your browser does not have the required permissions to share screen',
    steps: getSysDeniedSteps,
    image: getSysDeniedImage,
  },
  DENIED: {
    info: 'Permission denied by browser',
    icon: 'dismiss',
    text: 'We do not have the required permissions to share screen',
    steps: getDeniedSteps,
    image: getDeniedImage,
  },
  COULD_NOT_START: {
    info: 'Could not start screenshare',
    icon: 'dismiss',
    text: 'Access for screen share may be restricted by a hardware error in the operating system or browser',
    steps: () => [
      'Restart your browser.',
      'Update your browser to the latest version.',
      'Try sharing a tab or window instead of the entire screen.',
      'Switch a different browser.',
    ],
    image: () => '',
  },
  NOT_REQUESTED: {
    info: 'You have not yet used shared screen yet',
    icon: 'warning',
    text: 'We cannot access the data to troubleshoot unless you screenshare at least once. You can try screensharing fix this.',
    steps: () => [],
    image: () => '',
  },
};
const audioIssues = [
  {
    index: 0,
    value: 'Please select an issue',
    steps: [],
    troubleshoot: false,
  },
  {
    index: 1,
    value: "Participants can't hear me",
    steps: [
      'Please make sure that your microphone is unmuted. You can do this by clicking on the mic icon from the control bar.',
      'If using an external device, please make sure that you are sitting close to the microphone.',
    ],
    troubleshoot: false,
  },
  {
    index: 2,
    value: "I can't hear participants",
    steps: [
      'Please ensure that the window or tab is not muted.',
      'Please ensure that the volume level of your audio device is not set to 0.',
      'Please ensure you are connected to the correct speaker device.',
    ],
    troubleshoot: false,
  },
  {
    index: 3,
    value: 'My audio is laggy',
    steps: [
      'Please ensure that you have a stable internet connection.',
      'Please try switching to a different audio device.',
      'If your network connection is weak, consider disabling your video to improve the audio bandwidth.',
    ],
    troubleshoot: false,
  },
  {
    index: 4,
    value: 'My audio is unclear',
    steps: [
      'Please make sure you are using a good-quality microphone.',
      'Please make sure you are in close proximity to the microphone.',
    ],
    troubleshoot: false,
  },
  {
    index: 5,
    value: "Participant's audio is laggy",
    steps: [
      'Please ensure that you have a stable internet connection.',
      'Please request the participant to use an alternative audio device.',
      'If your network connection is weak, consider disabling your video to improve the audio bandwidth.',
    ],
    troubleshoot: false,
  },
  {
    index: 6,
    value: 'The audio from a participant is not clear',
    steps: [
      "Please ensure that your system's speaker volume is checked and adjusted if necessary.",
      'Please request the participant to move close to the microphone.',
    ],
    troubleshoot: false,
  },
];
const videoIssues = [
  {
    index: 0,
    value: 'Please select an issue',
    steps: [],
    troubleshoot: false,
  },
  {
    index: 1,
    value: "Participants can't see my video",
    steps: [
      'Please ensure you have turned on your video from the control bar.',
      'If using an external device, please ensure your device is connected and working properly.',
    ],
    troubleshoot: false,
  },
  {
    index: 2,
    value: 'Not able to view participnats video',
    steps: [
      'Please ensure you have a stable internet connection.',
      'If you have a poor network connection, please try moving closer to the Wi-Fi router.',
    ],
    troubleshoot: false,
  },
  {
    index: 3,
    value: 'My video is laggy',
    steps: [
      'Please ensure that you have a stable internet connection.',
      'Please try switching to a different video device.',
    ],
    troubleshoot: false,
  },
  {
    index: 4,
    value: 'My video is unclear',
    steps: [
      'Please ensure you are not using a faulty device.',
      'Please make sure you are in a well-lit area.',
      'Please ensure you have a stable internet connection.',
    ],
    troubleshoot: false,
  },
  {
    index: 5,
    value: "Participant's video is laggy",
    steps: [
      'Please ensure you have a stable internet connection.',
      'Please request the participant to use an alternative video device.',
      'If your network connection is weak, consider disabling your video to improve the audio bandwidth.',
    ],
    troubleshoot: false,
  },
  {
    index: 6,
    value: "Participant's video is unclear",
    steps: [
      'Please ensure you have a stable internet connection.',
      'Please ensure the participant is not using a faulty device.',
      'Please make sure the participant is in a well-lit area.',
    ],
    troubleshoot: false,
  },
];
const screenshareIssues = [
  {
    index: 0,
    value: 'Please select an issue',
    steps: [],
    troubleshoot: false,
  },
  {
    index: 1,
    value: 'There is a delay in my screen sharing',
    steps: ['Please ensure you have a stable internet connection.'],
    troubleshoot: false,
  },
  {
    index: 2,
    value: "There is a delay in participant's screen share",
    steps: ['Please ensure you have a stable internet connection.'],
    troubleshoot: false,
  },
  {
    index: 3,
    value: 'Not able to start or stop screen share',
    steps: [
      'This error is most likely related to the browser or system you are using. Please ensure that your browser is updated to the latest version.',
      'Please try switching to another browser',
      'Please try sharing a tab or a window incase you are unable to share your entire screen.',
    ],
    troubleshoot: false,
  },
  {
    index: 4,
    value: "Not able to view a participant's screen share",
    steps: ['Please ensure you have a stable internet connection.'],
    troubleshoot: false,
  },
];
const permissionPrompts = {
  audio: audioPermissions,
  video: videoPermissions,
  screenshare: screensharePermissions,
};
const issueList = {
  audio: audioIssues,
  video: videoIssues,
  screenshare: screenshareIssues,
};

const dyteDebuggerIssuesUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}.section{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.title{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;flex-direction:row;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.title dyte-icon{margin-right:var(--dyte-space-2, 8px)}.sub-title{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));letter-spacing:0.5px}.text{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px;font-weight:100 !important;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;font-size:12px;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation div{margin-right:var(--dyte-space-2, 8px)}.device{margin-top:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);font-size:12px}select{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0) !important;border-style:none !important;outline:2px solid transparent !important;outline-offset:2px !important}.dyte-select{width:100%;max-width:100%;font-size:14px}.disabled{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.report-link{margin-bottom:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-6, 24px);cursor:pointer;font-size:12px;--tw-text-opacity:1 !important;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity)) !important;-webkit-text-decoration-line:underline;text-decoration-line:underline}.report-issue{margin-top:var(--dyte-space-2, 8px)}";

const DyteDebuggerAudio$1 = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.mediaType = undefined;
    this.issueIndex = 0;
    this.reported = true;
  }
  selectIssue(val) {
    this.issueIndex = parseInt(val);
    this.reported = false;
    setTimeout(() => {
      var _a;
      (_a = this.reportEl) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, 100);
  }
  // TODO: (ishita1805) Send surrounding data for issues in phase 3.
  reportIssue() {
    const { value } = issueList[this.mediaType][this.issueIndex];
    this.meeting.__internals__.logger.info('dyteTroubleshooting::issue', {
      issue: value,
    });
    this.reported = true;
    setTimeout(() => {
      this.reported = false;
    }, 3000);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const issues = (_a = issueList[this.mediaType]) !== null && _a !== void 0 ? _a : [];
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t('Please select a prompt that best describes your issue')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { class: `dyte-select ${this.issueIndex === 0 ? 'disabled' : ''}`, onChange: (e) => this.selectIssue(e.target.value) }, issues.map((issue) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: issue.index }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, issue.value))))), ((_c = (_b = issues[this.issueIndex]) === null || _b === void 0 ? void 0 : _b.steps) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, this.t('How to fix this:'))), (_e = (_d = issues[this.issueIndex]) === null || _d === void 0 ? void 0 : _d.steps) === null || _e === void 0 ? void 0 :
      _e.map((step) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "recommendation" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "\u2022"), this.t(step)))), ((_g = (_f = issues[this.issueIndex]) === null || _f === void 0 ? void 0 : _f.steps) === null || _g === void 0 ? void 0 : _g.length) > 0 &&
      (this.reported ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "report-link" }, this.t('Your issue has been reported.'))) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "report-issue" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "recommendation", ref: (el) => (this.reportEl = el) }, this.t('Still facing the issue?')), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { size: "sm", variant: "secondary", onClick: () => this.reportIssue() }, this.t('Report Now')))))));
  }
};
DyteDebuggerAudio$1.style = dyteDebuggerIssuesUiCss;

const dyteDebuggerPermissionsUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;width:100%}h3{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px}.info{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:14px}.info dyte-icon{margin-right:var(--dyte-space-2, 8px)}.text{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-1, 4px);font-size:14px;font-weight:100 !important;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.title{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;flex-direction:row;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.title dyte-icon{margin-right:var(--dyte-space-2, 8px)}.device-indicator{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:column}.sub-title{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px;font-weight:600;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));letter-spacing:0.5px}.recommendation{margin-bottom:var(--dyte-space-1, 4px);display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-start;font-size:12px;line-height:1.5;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.recommendation div{margin-right:var(--dyte-space-2, 8px)}.device{margin-bottom:var(--dyte-space-2, 8px);display:flex;flex-direction:row;font-size:14px}.device .label{width:var(--dyte-space-32, 128px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.device .seperator{margin-right:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.ACCEPTED{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}.NOT_REQUESTED{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.NOT_REQUESTED dyte-icon{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}.DENIED,.SYSTEM_DENIED,.COULD_NOT_START{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}video{margin-top:var(--dyte-space-2, 8px);height:var(--dyte-space-36, 144px);width:auto;border-radius:var(--dyte-border-radius-md, 8px)}dyte-button{margin-top:var(--dyte-space-2, 8px)}";

const DyteDebuggerAudio = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_4__.u)();
    this.issueKey = 0;
    this.permission = undefined;
    this.devices = {};
    this.mediaType = undefined;
  }
  connectedCallback() {
    this.permissionUpdate(this.meeting, this.mediaType);
  }
  disconnectedCallback() {
    const { self } = this.meeting;
    self === null || self === void 0 ? void 0 : self.removeListener('mediaPermissionUpdate', this.updatePermission);
  }
  permissionUpdate(meeting, mediaType) {
    var _a, _b;
    if (!meeting || !mediaType)
      return;
    const { self, troubleshoot } = meeting;
    this.permission = (_b = (_a = troubleshoot[mediaType]) === null || _a === void 0 ? void 0 : _a.mediaPermission) !== null && _b !== void 0 ? _b : 'NOT_REQUESTED';
    this.getDevices();
    self === null || self === void 0 ? void 0 : self.addListener('mediaPermissionUpdate', this.updatePermission.bind(this));
    self === null || self === void 0 ? void 0 : self.addListener('deviceUpdate', this.deviceUpdateListener.bind(this));
  }
  updatePermission({ kind, message }) {
    if (kind !== this.mediaType)
      return;
    this.permission = message;
  }
  // TODO: later change this to events and consume the functions in audio/video troubleshooter components
  async allowPermission() {
    var _a, _b;
    if (this.mediaType === 'audio') {
      const troubleshooter = (_a = this.meeting.troubleshoot) === null || _a === void 0 ? void 0 : _a.audio;
      await (troubleshooter === null || troubleshooter === void 0 ? void 0 : troubleshooter.startTrackAnalysis(true));
      troubleshooter.stopTrackAnalysis();
    }
    if (this.mediaType === 'video') {
      const troubleshooter = (_b = this.meeting.troubleshoot) === null || _b === void 0 ? void 0 : _b.video;
      await troubleshooter.startPreview();
      troubleshooter.stopPreview();
    }
  }
  deviceUpdateListener({ device, preview }) {
    if (preview)
      return;
    if (device.kind === 'audioinput')
      this.devices = Object.assign(Object.assign({}, this.devices), { Microphone: device });
    if (device.kind === 'audiooutput')
      this.devices = Object.assign(Object.assign({}, this.devices), { Speaker: device });
    if (device.kind === 'videoinput')
      this.devices = Object.assign(Object.assign({}, this.devices), { Camera: device });
  }
  getDevices() {
    var _a, _b;
    const currentDevices = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self) === null || _b === void 0 ? void 0 : _b.getCurrentDevices();
    const Microphone = currentDevices === null || currentDevices === void 0 ? void 0 : currentDevices.audio;
    const Speaker = currentDevices === null || currentDevices === void 0 ? void 0 : currentDevices.speaker;
    const Camera = currentDevices === null || currentDevices === void 0 ? void 0 : currentDevices.video;
    if (Microphone)
      this.devices = Object.assign(Object.assign({}, this.devices), { Microphone });
    if (Speaker)
      this.devices = Object.assign(Object.assign({}, this.devices), { Speaker });
    if (Camera)
      this.devices = Object.assign(Object.assign({}, this.devices), { Camera });
  }
  render() {
    var _a;
    const permission = (_a = permissionPrompts[this.mediaType]) === null || _a === void 0 ? void 0 : _a[this.permission];
    // const devices = this.getDevices();
    const { browserName, osName, isMobile } = this.meeting.self.device;
    const steps = permission.steps({ browserName, osName, media: this.mediaType });
    const image = permission.image({ browserName, isMobile, osName });
    const devices = this.mediaType === 'audio'
      ? ['Microphone', 'Speaker']
      : this.mediaType === 'video'
        ? ['Camera']
        : [];
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, "Device Permissions"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `info ${this.permission}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { size: "sm", icon: this.iconPack[permission.icon] }), permission.info), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, permission.text), this.permission === 'ACCEPTED' && devices.length > 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "device-indicator" }, devices.map((device) => {
      var _a;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "device" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "label" }, "Active ", device), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "seperator" }, ":"), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "device-name" }, (_a = this.devices[device]) === null || _a === void 0 ? void 0 : _a.label)));
    }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "text" }, this.t('You can change the active devices from settings.')))), steps.length > 0 && (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "sub-title" }, this.t('How to fix this:')), steps === null || steps === void 0 ? void 0 :
      steps.map((step) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "recommendation" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "\u2022"), this.t(step)))), image !== '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("video", { src: `https://cdn.dyte.in/assets/permissions/${image}`, autoPlay: true, muted: true, loop: true })), this.mediaType !== 'screenshare' && this.permission === 'NOT_REQUESTED' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => this.allowPermission() }, "Allow Device Permission"))));
  }
  static get watchers() { return {
    "meeting": ["permissionUpdate"],
    "mediaType": ["permissionUpdate"]
  }; }
};
DyteDebuggerAudio.style = dyteDebuggerPermissionsUiCss;

const dyteInformationTooltipCss = ":host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);cursor:pointer}.tooltip-container{position:relative;display:flex;flex-direction:row;align-items:center}.tooltip-container dyte-icon{cursor:pointer;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.tooltip-container dyte-icon:hover+.tooltip{display:flex !important}.tooltip{position:absolute;margin-left:var(--dyte-space-2, 8px);display:none !important;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);font-weight:400;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));z-index:50;display:flex;min-width:var(--dyte-space-60, 240px);flex-direction:column;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);left:14px}";

const DyteInformationTooltip = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_3__.d;
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tooltip-container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.info, size: "sm" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "tooltip" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "tootlip-text" })))));
  }
};
DyteInformationTooltip.style = dyteInformationTooltipCss;




/***/ })

};
;