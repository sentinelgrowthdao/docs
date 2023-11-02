"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 50285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_draft_attachment_view: () => (/* binding */ DyteDraftAttachmentView),
/* harmony export */   dyte_emoji_picker: () => (/* binding */ DyteEmojiPicker),
/* harmony export */   dyte_emoji_picker_button: () => (/* binding */ DyteEmojiPickerButton),
/* harmony export */   dyte_file_picker_button: () => (/* binding */ DyteFilePickerButton),
/* harmony export */   dyte_text_composer_view: () => (/* binding */ DyteTextComposerView),
/* harmony export */   dyte_text_message_view: () => (/* binding */ DyteTextMessageView)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68753);
/* harmony import */ var _index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74710);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);
/* harmony import */ var _string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22906);







const dyteDraftAttachmentViewCss = ":host{display:flex;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px)}.preview-overlay{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);background-color:inherit}.preview{position:absolute;top:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);max-width:-moz-fit-content;max-width:fit-content;max-height:var(--dyte-space-20, 80px)}.preview:hover dyte-tooltip{display:block}.preview dyte-tooltip{position:absolute;top:calc(var(--dyte-space-1, 4px) * -1);left:calc(var(--dyte-space-1, 4px) * -1);display:none;margin-left:calc(var(--dyte-space-1, 4px) * -1);margin-top:calc(var(--dyte-space-1, 4px) * -1)}.preview dyte-button{display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));border:1px solid rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.preview-image{height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);-o-object-fit:cover;object-fit:cover;max-height:100%;max-width:100%;overflow:clip;border-radius:var(--dyte-border-radius-md, 8px)}.preview-file{padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--dyte-border-radius-md, 8px);max-width:200px}";

const DyteDraftAttachmentView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onDeleteAttachment = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "deleteAttachment", 7);
    this.fileReader = new FileReader();
    this.generatePreview = () => {
      if (this.attachment.type === 'image') {
        this.fileReader.readAsDataURL(this.attachment.file);
      }
      else if (this.attachment.type === 'file') {
        this.filePreview = this.attachment.file.name;
      }
    };
    this.onDeleteClickHandler = () => {
      this.filePreview = null;
      this.onDeleteAttachment.emit();
    };
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.attachment = null;
    this.filePreview = null;
  }
  onAttachmentChange() {
    this.generatePreview();
  }
  connectedCallback() {
    this.fileReader.onload = (e) => {
      if (typeof e.target.result === 'string') {
        this.filePreview = e.target.result;
      }
    };
    // this.fileReader.onloadstart = () => {};
    // this.fileReader.onloadend = () => {};
  }
  componentWillLoad() {
    this.onAttachmentChange();
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-overlay" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.cancel_upload') }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "secondary", kind: "icon", onClick: this.onDeleteClickHandler }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), this.attachment.type === 'image' ? ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { class: "preview-image", src: this.filePreview })) : ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "preview-file" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.filePreview)))))));
  }
  static get watchers() { return {
    "attachment": ["onAttachmentChange"]
  }; }
};
DyteDraftAttachmentView.style = dyteDraftAttachmentViewCss;

const EMOJI_ASSET_URL = 'https://cdn.dyte.in/assets/emojis-data.json';
/**
 * fetches the latest emoji list from CDN
 * @returns list of emojis
 */
const fetchEmojis = async () => {
  const emojis = await fetch(EMOJI_ASSET_URL);
  return emojis.json();
};

const dyteEmojiPickerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.emoji-parent{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);max-width:640px;flex-direction:column;padding:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-0, 0px);width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.close-parent{display:flex;flex:1 1 0%;justify-content:flex-end;padding:var(--dyte-space-0, 0px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:wrap;overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";

const DyteEmojiPicker = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.pickerClose = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "pickerClose", 7);
    this.emojiClicked = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteEmojiClicked", 7);
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.emojiList = undefined;
    this.filterVal = '';
    this.filteredEmojis = [];
  }
  componentWillLoad() {
    // Don't use async here as it will block the render
    fetchEmojis().then((e) => {
      this.emojiList = e;
      this.handleInputChange({ value: '' });
    });
  }
  handleInputChange(target) {
    this.filterVal = target.value;
    const regex = new RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`, 'g');
    this.filteredEmojis = Array.from(this.emojiList['search'].matchAll(regex)).map((m) => {
      return { name: m[1], emoji: this.emojiList['emojis'][m[2]] };
    });
  }
  handleEmojiClick(emoji) {
    this.emojiClicked.emit(emoji);
  }
  mapEmojiList() {
    var _a;
    if (((_a = this.emojiList) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "loader" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { iconPack: this.iconPack, t: this.t })));
    }
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "emoji-grid", class: "scrollbar max-w-40" }, this.filteredEmojis.map((e) => ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, key: `emoji-button-${e.name}`, class: "emoji", variant: "ghost", kind: "icon", title: e.name, onClick: () => this.handleEmojiClick(e.emoji) }, e.emoji)))));
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'close-parent' }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: "close", onClick: () => { var _a; return (_a = this.pickerClose) === null || _a === void 0 ? void 0 : _a.emit(); }, "aria-label": this.t('close') }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'emoji-parent' }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { value: this.filterVal, onInput: (event) => this.handleInputChange(event.target), placeholder: this.t('search') }), this.mapEmojiList())));
  }
};
DyteEmojiPicker.style = dyteEmojiPickerCss;

const dyteEmojiPickerButtonCss = ":host{}";

const DyteEmojiPickerButton = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.isActive = undefined;
  }
  render() {
    const uiProps = { iconPack: this.iconPack, t: this.t };
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: this.t('chat.send_emoji') }, uiProps), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: { active: this.isActive }, title: this.t('chat.send_emoji'), iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.emoji_multiple }))));
  }
};
DyteEmojiPickerButton.style = dyteEmojiPickerButtonCss;

const dyteFilePickerButtonCss = ":host{}";

const DyteFilePickerButton = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onFileChange = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "fileChange", 7);
    this.uploadFile = () => {
      const input = document.createElement('input');
      input.type = 'file';
      if (this.filter) {
        input.accept = this.filter;
      }
      input.onchange = (e) => {
        const { validity, files: [file], } = e.target;
        if (validity.valid) {
          this.onFileChange.emit(file);
        }
      };
      input.click();
    };
    this.filter = undefined;
    this.label = undefined;
    this.icon = 'attach';
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_83532c35_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  render() {
    const uiProps = { iconPack: this.iconPack, t: this.t };
    const label = this.label || this.t('chat.send_file');
    const icon = this.iconPack[this.icon];
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", Object.assign({ label: label }, uiProps), (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", onClick: () => this.uploadFile(), title: label, iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: icon }))));
  }
};
DyteFilePickerButton.style = dyteFilePickerButtonCss;

const dyteTextComposerViewCss = ".chat-input{position:relative;z-index:10;box-sizing:border-box;display:flex;flex-direction:column;border-top-left-radius:var(--dyte-border-radius-md, 8px);border-top-right-radius:var(--dyte-border-radius-md, 8px)}.chat-input textarea{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));box-sizing:border-box;padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-input textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-input textarea::placeholder{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-input textarea{font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;min-height:60px;font-size:14px}";

const DyteTextComposerView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTextChange = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "textChange", 7);
    this.onInputHandler = () => {
      const text = this.$textArea.value.trim();
      this.maybeResize(text);
      this.onTextChange.emit(text);
    };
    this.maybeResize = (text) => {
      const newLines = [...text.matchAll(/\n/g)].length;
      this.$textArea.style.height = `${Math.min(200, 60 + 20 * newLines)}px`;
    };
    this.disabled = false;
    this.placeholder = undefined;
    this.value = undefined;
    this.maxLength = undefined;
    this.keyDownHandler = () => { };
  }
  componentDidLoad() {
    if (this.maxLength) {
      this.$textArea.maxLength = this.maxLength;
    }
    const text = this.$textArea.value.trim();
    if (text !== '') {
      this.maybeResize(text);
    }
  }
  /** Sets value of the text input */
  async setText(text, focus = false) {
    this.$textArea.value = text;
    this.maybeResize(text);
    if (focus) {
      this.$textArea.focus();
    }
    this.onTextChange.emit(text);
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-input", part: "chat-input-container" }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", { ref: (el) => (this.$textArea = el), placeholder: this.placeholder, disabled: this.disabled, onInput: this.onInputHandler, onKeyDown: this.keyDownHandler, part: "chat-input", value: this.value })));
  }
};
DyteTextComposerView.style = dyteTextComposerViewCss;

const dyteTextMessageViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.text{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow-wrap:break-word;font-size:14px;line-height:1.375}.text.emoji{font-size:24px}";

const DyteTextMessageView = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.text = undefined;
    this.isMarkdown = true;
  }
  render() {
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: { text: true, emoji: (0,_string_8aa800b0_js__WEBPACK_IMPORTED_MODULE_5__.h)(this.text) } }, this.isMarkdown ? this.text : (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-markdown-view", { text: this.text })));
  }
};
DyteTextMessageView.style = dyteTextMessageViewCss;




/***/ }),

/***/ 22906:
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
function getInitials(name, maxInitials = 2) {
  // removes any character that is not a letter, number or whitespace
  const cleanedName = name.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g, '');
  const words = cleanedName.trim().split(/\s+/).slice(0, maxInitials);
  return words
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}




/***/ })

};
;