"use strict";
exports.id = 5267;
exports.ids = [5267];
exports.modules = {

/***/ 72729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ differenceInMinutes),
/* harmony export */   e: () => (/* binding */ elapsedDuration),
/* harmony export */   f: () => (/* binding */ formatDateTime)
/* harmony export */ });
const differenceInMinutes = (oldDate, newDate) => {
  // difference in milliseconds
  const diff = newDate.getTime() - oldDate.getTime();
  return Math.round(Math.abs(diff / 1000 / 60));
};
const elapsedDuration = (oldDate, newDate) => {
  const minutes = differenceInMinutes(oldDate, newDate);
  if (minutes < 2) {
    return 'just now';
  }
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (minutes < 90) {
    return `about ${hours}h ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  const weeks = Math.round(days / 7);
  return `${weeks}w ago`;
};
const formatDateTime = (date) => {
  return date.toDateString() + ' ' + date.toLocaleTimeString();
};




/***/ }),

/***/ 75267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_message_view: () => (/* binding */ DyteMessageView)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72729);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68753);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);






const dyteMessageViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.message-wrapper{display:flex;flex-direction:row-reverse;gap:var(--dyte-space-2, 8px)}.message-wrapper.incoming{flex-direction:row}.message{display:flex;flex-direction:column}.header{margin-bottom:var(--dyte-space-1, 4px);align-self:flex-end;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));font-size:14px;font-weight:600}.incoming .header{align-self:flex-start}.body{display:flex;flex-direction:column;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));font-size:14px;line-height:1.375;position:relative}.body .metadata{margin-top:var(--dyte-space-1, 4px);align-self:flex-end;font-size:10px}.body:hover dyte-menu{visibility:visible}.bubble{max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:var(--dyte-border-radius-md, 8px)}.incoming .bubble{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.avatar{display:none}dyte-menu{position:absolute;right:var(--dyte-space-0, 0px);top:var(--dyte-space-0, 0px);border-radius:var(--dyte-border-radius-lg, 12px);visibility:hidden}dyte-menu dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);cursor:pointer}.actions{display:flex;align-items:center;justify-content:center;padding-left:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-right:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;background:radial-gradient(\n    at top right,\n    rgb(var(--dyte-colors-brand-300, 73 124 253)) 60%,\n    rgba(255, 255, 255, 0) 80%\n  )}.actions dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.incoming .actions{background:radial-gradient(\n      at top right,\n      rgb(var(--dyte-colors-background-600, 60 60 60)) 60%,\n      rgba(255, 255, 255, 0) 80%\n    )}.incoming dyte-avatar{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}@media (orientation: landscape) and (min-width: 400px){.avatar{display:flex;width:var(--dyte-space-6, 24px)}.avatar dyte-avatar{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);font-size:10px}}";

const DyteMessageView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onAction = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "action", 7);
    this.actions = [];
    this.variant = 'bubble';
    this.viewType = 'outgoing';
    this.avatarUrl = undefined;
    this.hideAvatar = false;
    this.authorName = undefined;
    this.hideAuthorName = false;
    this.hideMetadata = false;
    this.time = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
  }
  renderActions() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu", { placement: "top-end" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { slot: "trigger", class: "actions" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.chevron_down })), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-list", null, this.actions.map((action) => ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-menu-item", { onClick: () => this.onAction.emit(action.id) }, action.icon && (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: action.icon, slot: "start" }), action.label))))));
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { 'message-wrapper': true, [this.viewType]: true } }, !this.hideAvatar && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("aside", { class: "avatar" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-avatar", { participant: { name: this.authorName, picture: this.avatarUrl }, size: "sm" }))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "message" }, !this.hideAuthorName && (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "header" }, this.authorName), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { body: true, bubble: this.variant === 'bubble' } }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), !this.hideMetadata && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "metadata", title: (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_4__.f)(this.time) }, (0,_date_8c24cfe1_js__WEBPACK_IMPORTED_MODULE_4__.e)(this.time, new Date(Date.now())))), this.actions.length !== 0 && this.renderActions())))));
  }
};
DyteMessageView.style = dyteMessageViewCss;




/***/ })

};
;