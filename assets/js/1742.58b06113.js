"use strict";
exports.id = 1742;
exports.ids = [1742];
exports.modules = {

/***/ 41742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_sidebar: () => (/* binding */ DyteSidebar)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8934);
/* harmony import */ var _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86020);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46503);
/* harmony import */ var _sidebar_4555d4ae_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24953);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24555);
/* harmony import */ var _flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24942);









const dyteSidebarCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;max-width:var(--dyte-space-80, 320px);box-sizing:border-box;display:flex;flex-direction:column;position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);left:auto;z-index:50;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}:host([view='sidebar']){right:var(--dyte-space-2, 8px);overflow:clip;border-radius:var(--dyte-border-radius-lg, 12px);--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-900, 26 26 26));--tw-shadow:var(--tw-shadow-colored)}:host([view='full-screen']){top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);max-width:100%}";

const DyteSidebar = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.getTabs = () => {
      if (!this.meeting.self.config) {
        return this.enabledSections;
      }
      return this.enabledSections.filter((section) => this.meeting.self.config.controlBar.elements[section.id]);
    };
    this.close = () => {
      this.stateUpdate.emit({ activeSidebar: false, sidebar: this.defaultSection });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.sidebar = this.currentTab;
    };
    this.enabledSections = [];
    this.defaultSection = 'chat';
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.size = undefined;
    this.view = 'sidebar';
    this.currentTab = this.defaultSection;
  }
  connectedCallback() {
    this.viewChanged(this.view);
    this.statesChanged(this.states);
    this.meetingChanged(this.meeting);
    (0,_store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.o)('sidebar', () => this.statesChanged());
  }
  disconnectedCallback() {
    var _a, _b;
    document.removeEventListener('keydown', this.keydownListener);
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', this.updateEnabledSections);
  }
  meetingChanged(meeting) {
    var _a, _b;
    this.updateEnabledSections(meeting);
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.on('stageStatusUpdate', this.updateEnabledSections);
  }
  statesChanged(s) {
    const states = s || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s;
    if (states === null || states === void 0 ? void 0 : states.sidebar) {
      this.currentTab = states.sidebar;
    }
  }
  viewChanged(view) {
    if (view === 'full-screen') {
      this.keydownListener = (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      };
      document.addEventListener('keydown', this.keydownListener);
    }
  }
  viewSection(section) {
    this.currentTab = section;
    this.stateUpdate.emit({ activeSidebar: true, sidebar: this.currentTab });
    _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.activeSidebar = true;
    _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.sidebar = this.currentTab;
  }
  updateEnabledSections(meeting = this.meeting) {
    const list = [];
    if ((0,_sidebar_4555d4ae_js__WEBPACK_IMPORTED_MODULE_5__.c)(meeting)) {
      list.push({ id: 'chat', name: this.t('chat') });
    }
    if ((0,_sidebar_4555d4ae_js__WEBPACK_IMPORTED_MODULE_5__.d)(meeting)) {
      list.push({ id: 'polls', name: this.t('polls') });
    }
    if ((0,_sidebar_4555d4ae_js__WEBPACK_IMPORTED_MODULE_5__.a)(meeting)) {
      list.push({ id: 'participants', name: this.t('participants') });
    }
    if ((0,_sidebar_4555d4ae_js__WEBPACK_IMPORTED_MODULE_5__.b)(meeting)) {
      list.push({ id: 'plugins', name: this.t('plugins') });
    }
    this.enabledSections = list;
  }
  render() {
    var _a;
    const defaults = {
      meeting: this.meeting,
      config: this.config,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s,
      size: this.size,
      t: this.t,
      iconPack: this.iconPack,
    };
    // NOTE(ishita1805): This makes it easier to use the sidebar component in isolation.
    if (((_a = this.states) === null || _a === void 0 ? void 0 : _a.activeSidebar) === false || !this.currentTab) {
      return null;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-sidebar-ui", { tabs: this.getTabs(), currentTab: this.currentTab, view: this.view, onTabChange: (e) => {
        this.viewSection(e.detail);
      }, onSidebarClose: this.close }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat", Object.assign({}, defaults, { slot: "chat" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-polls", Object.assign({}, defaults, { slot: "polls" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-participants", Object.assign({}, defaults, { slot: "participants" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-plugins", Object.assign({}, defaults, { slot: "plugins" })))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"],
    "view": ["viewChanged"]
  }; }
};
DyteSidebar.style = dyteSidebarCss;




/***/ }),

/***/ 24953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ canViewParticipants),
/* harmony export */   b: () => (/* binding */ canViewPlugins),
/* harmony export */   c: () => (/* binding */ canViewChat),
/* harmony export */   d: () => (/* binding */ canViewPolls)
/* harmony export */ });
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24555);
/* harmony import */ var _flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24942);



const canViewChat = (meeting) => {
  if (meeting && !meeting.chat)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.chat)
    return false;
  const { chatPublic, chatPrivate } = meeting.self.permissions;
  return (chatPublic.canSend ||
    chatPublic.text ||
    chatPublic.files ||
    chatPrivate.canSend ||
    chatPrivate.canReceive ||
    chatPrivate.files ||
    chatPrivate.text);
};
const canViewPolls = (meeting) => {
  if (meeting && !meeting.polls)
    return false;
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.polls)
    return false;
  const { polls } = meeting.self.permissions;
  return polls.canCreate || polls.canView || polls.canVote;
};
const canViewParticipants = (meeting) => {
  var _a, _b, _c;
  if ((meeting === null || meeting === void 0 ? void 0 : meeting.__internals__.features.hasFeature(_flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_1__.F.FEAT_PARTICIPANT_LIST)) &&
    !((_a = meeting.self.permissions) === null || _a === void 0 ? void 0 : _a.showParticipantList)) {
    return false;
  }
  if ((0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__.s)(meeting) && !((_b = meeting.self.permissions) === null || _b === void 0 ? void 0 : _b.acceptPresentRequests))
    return false;
  if (meeting && !meeting.participants)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM') {
    return meeting.self.permissions.acceptPresentRequests || ((_c = meeting === null || meeting === void 0 ? void 0 : meeting.stage) === null || _c === void 0 ? void 0 : _c.status) === 'ON_STAGE';
  }
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.participants)
    return false;
  return true;
};
const canViewPlugins = (meeting) => {
  if ((0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_0__.a)(meeting))
    return false;
  if (meeting && !meeting.plugins)
    return false;
  if (meeting.meta.viewType === 'LIVESTREAM')
    return meeting.stage.status === 'ON_STAGE';
  const config = meeting === null || meeting === void 0 ? void 0 : meeting.self.config;
  if (config && !config.controlBar.elements.plugins)
    return false;
  const { plugins } = meeting.self.permissions;
  return plugins.canClose || plugins.canStart;
};




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