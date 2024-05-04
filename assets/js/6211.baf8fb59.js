"use strict";
exports.id = 6211;
exports.ids = [6211];
exports.modules = {

/***/ 36211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_markdown_view: () => (/* binding */ DyteMarkdownView),
/* harmony export */   dyte_text_message_view: () => (/* binding */ DyteTextMessageView)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8327);
/* harmony import */ var _string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55055);





const dyteMarkdownViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{overflow-wrap:break-word}a{color:currentColor}.block-quote,blockquote{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px);--tw-border-spacing-x:1px;--tw-border-spacing-y:1px;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-left-width:var(--dyte-border-width-md, 2px);border-right-width:var(--dyte-border-width-none, 0);border-style:solid;padding:var(--dyte-space-0\\.5, 2px);padding-left:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);border-top-left-radius:var(--dyte-border-radius-none, 0);border-bottom-left-radius:var(--dyte-border-radius-none, 0)}";

const DyteMarkdownView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.restoreEmpty = (content, tag, renderCallback) => {
      return content.trim().length === 0 ? `${tag}${content}${tag}` : renderCallback(content);
    };
    this.renderLink = (content) => {
      return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
    };
    this.renderBold = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '*', (c) => (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, c));
      }
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, this.renderTokens(content));
    };
    this.renderItalic = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '_', (c) => (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, c));
      }
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, this.renderTokens(content));
    };
    this.renderStrikethrough = (content) => {
      if (typeof content === 'string') {
        return this.restoreEmpty(content, '~', (c) => (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, c));
      }
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, this.renderTokens(content));
    };
    this.renderPlainText = (content) => {
      if (typeof content === 'string') {
        return content;
      }
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(content));
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
            return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
          case 'plain_text':
          default:
            return this.renderPlainText(token.content);
        }
      });
    };
    this.text = undefined;
    this.maxLength = _chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.M;
  }
  render() {
    const slicedMessage = this.text.slice(0, this.maxLength);
    const withReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.e)(slicedMessage, true);
    const withoutReply = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, withReply.length !== 0 && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(tokens));
    }))), withoutReply.split('\n').map((line) => {
      const tokens = (0,_chat_847b21f6_js__WEBPACK_IMPORTED_MODULE_1__.p)(line);
      return (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.renderTokens(tokens));
    })));
  }
};
DyteMarkdownView.style = dyteMarkdownViewCss;

const dyteTextMessageViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.text{display:block;overflow-wrap:break-word;line-height:1.375}.text.emoji{font-size:24px}";

const DyteTextMessageView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.text = undefined;
    this.isMarkdown = false;
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: { text: true, emoji: (0,_string_274004ff_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.text) } }, this.isMarkdown ? (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-markdown-view", { text: this.text }) : this.text));
  }
};
DyteTextMessageView.style = dyteTextMessageViewCss;




/***/ }),

/***/ 1821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ sanitizeLink),
/* harmony export */   f: () => (/* binding */ formatName),
/* harmony export */   g: () => (/* binding */ getInitials),
/* harmony export */   h: () => (/* binding */ hasOnlyEmojis),
/* harmony export */   s: () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const num = /^\d+$/;
  const re = /^\p{Emoji}+$/u;
  return re.test(str) && !num.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link === null || link === void 0 ? void 0 : link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name === null || name === void 0 ? void 0 : name.trim();
  if (name === '')
    return 'Participant';
  return name;
};
const whiteSpace = new RegExp(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/, 'g');
const space = new RegExp(/\s+/);
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(whiteSpace, '');
  const words = cleanedName.trim().split(space).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;