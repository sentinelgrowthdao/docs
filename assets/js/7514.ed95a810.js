"use strict";
exports.id = 7514;
exports.ids = [7514];
exports.modules = {

/***/ 19075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_markdown_view: () => (/* binding */ DyteMarkdownView)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10510);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85114);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60804);





const dyteMarkdownViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}a{color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.block-quote,blockquote{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px);--tw-border-spacing-x:1px;--tw-border-spacing-y:1px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-md, 2px);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;border-left-color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));padding:var(--dyte-space-0\\.5, 2px);padding-left:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);border-top-left-radius:var(--dyte-border-radius-none, 0);border-bottom-left-radius:var(--dyte-border-radius-none, 0)}";

const DyteMarkdownView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.restoreEmpty = (content, tag, renderCallback) => {
      return content.trim().length === 0 ? `${tag}${content}${tag}` : renderCallback(content);
    };
    this.renderLink = (content) => {
      return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
    };
    this.renderBold = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '*', (c) => (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, c));
      }
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, this.renderTokens(content));
    };
    this.renderItalic = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '_', (c) => (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, c));
      }
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, this.renderTokens(content));
    };
    this.renderStrikethrough = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '~', (c) => (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, c));
      }
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, this.renderTokens(content));
    };
    this.renderPlainText = (content) => {
      if (typeof content === 'string') {
        return content;
      }
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(content));
    };
    this.renderTokens = (tokens) => {
      return tokens.map((token) => {
        switch (token.type) {
          case 'a':
            if (typeof token.content === 'string') {
              return this.renderLink(token.content);
            }
          case 'b':
            return this.renderBold(token.content);
          case 'i':
            return this.renderItalic(token.content);
          case 's':
            return this.renderStrikethrough(token.content);
          case 'q':
            return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
          case 'plain_text':
          default:
            return this.renderPlainText(token.content);
        }
      });
    };
    this.text = undefined;
    this.maxLength = _chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.M;
  }
  render() {
    const slicedMessage = this.text.slice(0, this.maxLength);
    const withReply = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.e)(slicedMessage, true);
    const withoutReply = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, withReply.length !== 0 && ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(tokens));
    }))), withoutReply.split('\n').map((line) => {
      const tokens = (0,_chat_13a50f6c_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(tokens));
    })));
  }
};
DyteMarkdownView.style = dyteMarkdownViewCss;




/***/ })

};
;