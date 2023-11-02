"use strict";
exports.id = 6430;
exports.ids = [6430];
exports.modules = {

/***/ 59614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextMessageView)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10510);



const renderLink = (content) => {
  return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
};
const renderBold = (content) => {
  if (typeof content === 'string') {
    return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, content);
  }
  return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderItalic = (content) => {
  if (typeof content === 'string') {
    return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, content);
  }
  return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, renderTokens(content));
};
const renderStrikethrough = (content) => {
  if (typeof content === 'string') {
    return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, content);
  }
  return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderPlainText = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(content));
};
const renderTokens = (tokens) => {
  return tokens.map((token) => {
    switch (token.type) {
      case 'a':
        if (typeof token.content === 'string') {
          return renderLink(token.content);
        }
      case 'b':
        return renderBold(token.content);
      case 'i':
        return renderItalic(token.content);
      case 's':
        return renderStrikethrough(token.content);
      case 'q':
        return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
      case 'plain_text':
      default:
        return renderPlainText(token.content);
    }
  });
};
const TextMessageView = ({ message }) => {
  const slicedMessage = message.slice(0, _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.M);
  const withReply = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.e)(slicedMessage, true);
  const withoutReply = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
  return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null,
    withReply.length !== 0 && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    }))),
    withoutReply.split('\n').map((line) => {
      const tokens = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    })));
};




/***/ }),

/***/ 46430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_transcript: () => (/* binding */ DyteTranscript)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74710);
/* harmony import */ var _TextMessage_7561072e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59614);
/* harmony import */ var _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10510);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteTranscriptCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{pointer-events:none;display:block;height:var(--dyte-space-10, 40px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;justify-content:center;vertical-align:middle;animation:show 0.4s ease;transition:0.4s;z-index:50}.ctr{box-sizing:border-box;display:inline-flex;height:100%;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto}.message{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.message p{margin:var(--dyte-space-0, 0px);display:inline-block}.message blockquote{display:none}:host(.exit){animation:exit 0.4s ease}@keyframes show{0%{opacity:0;transform:translateY(120px)}100%{opacity:1;transform:translateY(0px)}}@keyframes exit{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-120px)}}:host([size='sm']){font-size:14px}";

const DyteTranscript = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.dismiss = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteTranscriptDismiss", 7);
    this.transcript = undefined;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.transcriptChanged(this.transcript);
  }
  transcriptChanged(transcript) {
    if (transcript === null || transcript === void 0 ? void 0 : transcript.id) {
      setTimeout(() => {
        this.dismiss.emit(transcript.id);
      }, 10000);
    }
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: "message" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_7561072e_js__WEBPACK_IMPORTED_MODULE_2__.T, { message: `${this.transcript.name}: ${this.transcript.transcript}` })))));
  }
  static get watchers() { return {
    "transcript": ["transcriptChanged"]
  }; }
};
DyteTranscript.style = dyteTranscriptCss;




/***/ })

};
;