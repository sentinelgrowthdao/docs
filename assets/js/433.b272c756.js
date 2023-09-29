"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 10489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextMessageView)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37531);



const KNOWN_TAGS = ['<a>', '<b>', '<i>', '<q>', '<s>'];
function parseRichText(text) {
  text = text
    .split(' ')
    .map((word) => {
    if (_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.l.test(word)) {
      const res = _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.l.exec(word);
      word = word.replace(res[0], `<a>${res[0]}</a>`);
    }
    else {
      if (_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.j.test(word)) {
        const res = _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.j.exec(word);
        word = word.replace(res[0], `<b>${res[1]}</b>`);
      }
      if (_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.k.test(word)) {
        const res = _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.k.exec(word);
        word = word.replace(res[0], `<i>${res[1]}</i>`);
      }
      if (_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.m.test(word)) {
        const res = _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.m.exec(word);
        word = word.replace(res[0], `<s>${res[1]}</s>`);
      }
    }
    return word;
  })
    .join(' ');
  text = text
    .split(' ')
    .map((word, idx) => {
    if (word === '>' && (idx === 0 || word[idx - 1] === '>')) {
      return `<q></q>`;
    }
    return word;
  })
    .join(' ');
  const [tokens] = generateTokens(text);
  return tokens;
}
const generateTokens = (text, endTag = '') => {
  const tokens = [];
  if (text.length === 0) {
    return [tokens, 0];
  }
  let i = 0;
  while (i < text.length) {
    if (endTag.length && endTag === text.substring(i, i + endTag.length)) {
      return [tokens, i + endTag.length];
    }
    if (KNOWN_TAGS.includes(text.substring(i, i + 3))) {
      const [subtokens, pos] = generateTokens(text.substring(i + 3), `</${text[i + 1]}>`);
      tokens.push({
        type: text[i + 1],
        content: subtokens.length === 1 && subtokens[0].type === 'plain_text'
          ? subtokens[0].content
          : subtokens,
      });
      i += pos + 3;
    }
    else {
      let top = tokens[tokens.length - 1];
      if (!top || top.type !== 'plain_text') {
        tokens.push({ type: 'plain_text', content: '' });
        top = tokens[tokens.length - 1];
      }
      top.content += text[i];
      i++;
    }
  }
  return [tokens, i];
};
const restoreEmpty = (content, tag, renderCallback) => {
  return content.trim().length === 0 ? `${tag}${content}${tag}` : renderCallback(content);
};
const renderLink = (content) => {
  return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { class: "link", href: content, target: "_blank", rel: "noopener noreferrer" }, content));
};
const renderBold = (content) => {
  if (typeof content === 'string') {
    return restoreEmpty(content, '*', (c) => (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, c));
  }
  return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderItalic = (content) => {
  if (typeof content === 'string') {
    return restoreEmpty(content, '_', (c) => (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, c));
  }
  return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, renderTokens(content));
};
const renderStrikethrough = (content) => {
  if (typeof content === 'string') {
    return restoreEmpty(content, '~', (c) => (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("s", null, c));
  }
  return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("b", null, renderTokens(content));
};
const renderPlainText = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(content));
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
        return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "block-quote" });
      case 'plain_text':
      default:
        return renderPlainText(token.content);
    }
  });
};
const TextMessageView = ({ message }) => {
  const slicedMessage = message.slice(0, _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.M);
  const withReply = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.f)(slicedMessage, true);
  const withoutReply = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_1__.s)(slicedMessage);
  return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null,
    withReply.length !== 0 && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("blockquote", null, withReply.split('\n').map((line) => {
      const tokens = parseRichText(line);
      return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    }))),
    withoutReply.split('\n').map((line) => {
      const tokens = parseRichText(line);
      return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, renderTokens(tokens));
    })));
};




/***/ }),

/***/ 40433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_chat: () => (/* binding */ DyteChat),
/* harmony export */   dyte_participants: () => (/* binding */ DyteParticipants),
/* harmony export */   dyte_plugins: () => (/* binding */ DytePlugins),
/* harmony export */   dyte_polls: () => (/* binding */ DytePolls),
/* harmony export */   dyte_sidebar_ui: () => (/* binding */ DyteSidebarUi)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8934);
/* harmony import */ var _chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37531);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24942);
/* harmony import */ var _TextMessage_3039fe94_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10489);
/* harmony import */ var _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86020);
/* harmony import */ var _pipStore_5d9dd8bf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21237);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24555);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46503);
/* harmony import */ var _index_6873e729_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90362);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60804);
/* harmony import */ var _scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82321);















const dyteChatCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin:var(--dyte-space-0, 0px);display:flex;height:var(--dyte-space-12, 48px);align-items:center;justify-content:center;font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}#dropzone{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;display:none;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}#dropzone.active{display:flex;-webkit-animation:0.2s slide-up ease-in;animation:0.2s slide-up ease-in}dyte-chat-messages-ui,dyte-chat-messages-ui-paginated{flex:1 0 0}.chat-container{display:flex;height:100%;width:100%;flex-direction:row}.chat{display:flex;flex:1 1 0%;flex-direction:column}.banner{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.banner .welcome-new-channel{width:var(--dyte-space-48, 192px)}.banner .create-channel-illustration{height:var(--dyte-space-40, 160px);width:var(--dyte-space-40, 160px)}.quoted-message-container{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);margin-top:var(--dyte-space-2, 8px);display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-radius:var(--dyte-border-radius-md, 8px);border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}.quoted-message-container .quoted-message{flex:1 1 0%;padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);max-height:var(--dyte-space-24, 96px);overflow-y:auto;word-break:break-all}.quoted-message-container .quoted-message blockquote{display:none}.quoted-message-container dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.quoted-message-container dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.quoted-message-container dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.channel-selector-header{box-sizing:border-box;height:var(--dyte-space-16, 64px);padding:var(--dyte-space-4, 16px);display:flex;justify-content:space-between;border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.channel-selector-header .channel-create-btn{width:var(--dyte-space-8, 32px);justify-content:center}.channel-selector-header .channel-create-btn:hover{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}";

const DyteChat = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.channelMap = new Map();
    this.disconnectMeeting = (meeting) => {
      var _a, _b, _c, _d, _e, _f;
      if (this.isPrivateChatSupported()) {
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantsUpdate', this.onParticipantUpdate);
        meeting === null || meeting === void 0 ? void 0 : meeting.participants.joined.removeListener('participantLeft', this.onParticipantUpdate);
      }
      (_a = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _a === void 0 ? void 0 : _a.removeListener('chatUpdate', this.chatUpdateListener);
      (_b = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _b === void 0 ? void 0 : _b.removeListener('channelCreate', this.onChannelCreateOrUpdate);
      (_c = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _c === void 0 ? void 0 : _c.removeListener('channelUpdate', this.onChannelCreateOrUpdate);
      (_d = meeting === null || meeting === void 0 ? void 0 : meeting.chat) === null || _d === void 0 ? void 0 : _d.removeListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
      (_f = (_e = meeting === null || meeting === void 0 ? void 0 : meeting.participants) === null || _e === void 0 ? void 0 : _e.all) === null || _f === void 0 ? void 0 : _f.removeListener('participantsUpdate', this.onChannelCreateOrUpdate);
    };
    this.onParticipantUpdate = () => {
      this.participants = this.meeting.participants.joined
        .toArray()
        .filter((p) => this.privatePresetFilter.length === 0 || this.privatePresetFilter.includes(p.presetName));
      // if selected participant leaves, reset state to everyone
      if (this.selectedParticipant && !this.participants.includes(this.selectedParticipant)) {
        this.selectedParticipant = null;
        this.chatRecipientId = this.selectedGroup = 'everyone';
      }
    };
    this.usePaginatedChat = () => (0,_flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting);
    this.updateUnreadCountGroups = (obj) => {
      this.unreadCountGroups = Object.assign(Object.assign({}, this.unreadCountGroups), obj);
    };
    this.isPrivateChatSupported = () => {
      var _a, _b, _c;
      return (!(0,_flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_5__.u)(this.meeting) &&
        this.canPrivateMessage &&
        !this.disablePrivateChat &&
        ((_c = (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features) === null || _c === void 0 ? void 0 : _c.getFeatureValue('chat_socket_server')) ===
          'socket-service');
    };
    this.updateRecipients = (event) => {
      if (typeof event.detail === 'string') {
        this.chatRecipientId = 'everyone';
        this.selectedParticipant = null;
      }
      else {
        const { userId } = event.detail;
        this.chatRecipientId = userId;
        this.selectedParticipant = this.participants.find((p) => p.userId === userId);
      }
      if (this.chatRecipientId !== 'everyone') {
        const allParticipants = [this.chatRecipientId, this.meeting.self.userId];
        const targetKey = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.g)(allParticipants);
        this.selectedGroup = targetKey;
      }
      else {
        this.selectedGroup = 'everyone';
      }
      this.updateUnreadCountGroups({ [this.selectedGroup]: 0 });
    };
    this.isTextMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendTextMessage;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateTexts;
    };
    this.isFileMessagingAllowed = () => {
      if (this.chatRecipientId === 'everyone') {
        // public chat
        return this.canSend && this.canSendFiles;
      }
      // private chat
      return this.canPrivateMessage && this.canSendPrivateFiles;
    };
    this.onChannelChanged = (e) => {
      if (e.detail.includes(_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.T)) {
        this.createDMChannel(e.detail.replace(_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.T, ''));
      }
      else {
        this.selectedChannelId = e.detail;
      }
      this.cleanup();
    };
    this.createDMChannel = async (memberId) => {
      this.creatingChannel = true;
      const newChannel = await this.meeting.chat.createChannel('Direct Message', [memberId], {
        visibility: 'private',
        isDirectMessage: true,
      });
      this.creatingChannel = false;
      this.selectedChannelId = newChannel.id;
    };
    this.cleanup = () => {
      this.editingMessage = null;
      this.replyMessage = null;
      this.searchQuery = '';
    };
    this.onChannelCreateOrUpdate = (channel) => {
      if (channel) {
        this.channelMap.set(channel.id, channel);
      }
      else {
        this.meeting.chat.channels.forEach((chan) => this.channelMap.set(chan.id, chan));
      }
      const channels = Array.from(this.channelMap.values())
        .filter((channel) => !(0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.i)(channel))
        .sort((a, b) => (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      const membersWithChannel = Array.from(this.channelMap.values())
        .filter(_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.i)
        .map((channel) => {
        return Object.assign(Object.assign({}, channel), { displayName: this.getMemberDisplayName(channel) });
      });
      const membersWithoutChannel = this.meeting.participants.all
        .toArray()
        .filter((member) => {
        if (member.userId === this.meeting.self.userId)
          return false;
        const matcher = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.e)([this.meeting.self.userId, member.userId]);
        return membersWithChannel.every((channel) => (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.e)(channel.memberIds) !== matcher);
      })
        .map((member) => {
        return {
          id: `${_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.T}${member.userId}`,
          displayName: member.name,
          displayPictureUrl: member.picture,
          isDirectMessage: true,
          unreadCount: 0,
        };
      });
      const dms = [...membersWithChannel, ...membersWithoutChannel].sort((a, b) => (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.d)(a.displayName, b.displayName));
      this.channels = [...channels, ...dms];
    };
    this.getMemberDisplayName = (channel) => {
      var _a;
      let id;
      if (channel.memberIds.length === 1) {
        // channel with self
        id = channel.memberIds[0];
      }
      else {
        id =
          channel.memberIds[0] === this.meeting.self.userId
            ? channel.memberIds[1]
            : channel.memberIds[0];
      }
      const member = this.meeting.participants.all.toArray().find((member) => member.userId === id);
      return (_a = member === null || member === void 0 ? void 0 : member.name) !== null && _a !== void 0 ? _a : id;
    };
    this.onNewMessageHandler = async (e) => {
      const message = e.detail;
      if (this.isChatViewType) {
        await this.meeting.chat.sendMessageToChannel(message, this.selectedChannelId, this.replyMessage
          ? {
            replyTo: this.replyMessage,
          }
          : {});
        this.replyMessage = null;
      }
      else {
        this.meeting.chat.sendMessage(message, this.getRecipientPeerIds());
      }
    };
    this.onEditMessageHandler = async (e) => {
      var _a, _b;
      await ((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.editTextMessage(e.detail.id, e.detail.message, e.detail.channelId));
      this.editingMessage = null;
    };
    this.onSearchHandler = async (e) => {
      this.searchQuery = e.detail;
    };
    this.onSearchDismissed = () => {
      this.searchQuery = '';
    };
    this.onChannelCreateClicked = () => {
      this.stateUpdate.emit({ activeChannelCreator: true });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s.activeChannelCreator = true;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_7__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.disablePrivateChat = false;
    this.privatePresetFilter = [];
    this.unreadCountGroups = {};
    this.chatGroups = { everyone: [] };
    this.selectedGroup = 'everyone';
    this.now = new Date();
    this.dropzoneActivated = false;
    this.showLatestMessageButton = false;
    this.canSend = false;
    this.canSendTextMessage = false;
    this.canSendFiles = false;
    this.canPrivateMessage = false;
    this.canSendPrivateTexts = false;
    this.canSendPrivateFiles = false;
    this.emojiPickerEnabled = false;
    this.chatRecipientId = 'everyone';
    this.participants = [];
    this.selectedParticipant = undefined;
    this.channels = [];
    this.selectedChannelId = undefined;
    this.editingMessage = null;
    this.replyMessage = null;
    this.searchQuery = '';
    this.creatingChannel = false;
  }
  connectedCallback() {
    if (!this.meeting)
      return;
    this.meetingChanged(this.meeting);
    if (this.meeting && !this.meeting.chat) {
      return;
    }
    if (this.isFileMessagingAllowed()) {
      this.host.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropzoneActivated = true;
      });
      this.host.addEventListener('dragleave', () => {
        this.dropzoneActivated = false;
      });
      this.host.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropzoneActivated = false;
        (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.h)(e.dataTransfer.items, (type, file) => {
          var _a, _b, _c, _d;
          switch (type) {
            case 'image':
              if (this.isFileMessagingAllowed()) {
                (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.sendImageMessage(file, this.getRecipientPeerIds());
              }
              break;
            case 'file':
              if (this.isFileMessagingAllowed()) {
                (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.chat) === null || _d === void 0 ? void 0 : _d.sendFileMessage(file, this.getRecipientPeerIds());
              }
              break;
          }
        });
      });
    }
  }
  onEditMessageInit(event) {
    if (event.detail.flags.isReply) {
      this.replyMessage = event.detail.payload;
    }
    else if (event.detail.flags.isEdit) {
      this.editingMessage = event.detail.payload;
    }
  }
  disconnectedCallback() {
    this.disconnectMeeting(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    var _a, _b, _c, _d, _e;
    if (oldMeeting != undefined)
      this.disconnectMeeting(oldMeeting);
    if (meeting && !meeting.chat)
      return;
    if (meeting != null) {
      this.canSend = meeting.self.permissions.chatPublic.canSend;
      this.canSendTextMessage = meeting.self.permissions.chatPublic.text;
      this.canSendFiles = meeting.self.permissions.chatPublic.files;
      this.canPrivateMessage = !!(((_a = meeting.self.permissions.chatPrivate) === null || _a === void 0 ? void 0 : _a.canSend) ||
        ((_b = meeting.self.permissions.chatPrivate) === null || _b === void 0 ? void 0 : _b.canReceive));
      this.canSendPrivateTexts = !!((_c = meeting.self.permissions.chatPrivate) === null || _c === void 0 ? void 0 : _c.text);
      this.canSendPrivateFiles = !!((_d = meeting.self.permissions.chatPrivate) === null || _d === void 0 ? void 0 : _d.files);
      this.isChatViewType = meeting.meta.viewType === 'CHAT';
      if (this.isChatViewType) {
        this.onChannelCreateOrUpdate();
        const validChannels = this.channels.filter((channel) => !channel.id.includes(_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.T));
        if (validChannels.length) {
          this.selectedChannelId = this.channels[0].id;
        }
      }
      this.initializeChatGroups();
      // shallow copy to trigger render
      this.chatGroups = Object.assign({}, this.chatGroups);
      this.chatUpdateListener = ({ message }) => {
        if (message.channelId)
          return;
        this.addToChatGroup(message);
        // shallow copy to trigger render
        this.chatGroups = Object.assign({}, this.chatGroups);
      };
      this.onParticipantUpdate();
      if (!this.usePaginatedChat()) {
        (_e = meeting.chat) === null || _e === void 0 ? void 0 : _e.addListener('chatUpdate', this.chatUpdateListener);
      }
      if (this.isPrivateChatSupported()) {
        meeting.participants.joined.addListener('participantJoined', this.onParticipantUpdate);
        meeting.participants.joined.addListener('participantLeft', this.onParticipantUpdate);
      }
      if (this.isChatViewType) {
        meeting.chat.addListener('channelCreate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelUpdate', this.onChannelCreateOrUpdate);
        meeting.chat.addListener('channelMessageUpdate', this.onChannelCreateOrUpdate);
        meeting.participants.all.addListener('participantsUpdate', this.onChannelCreateOrUpdate);
      }
    }
  }
  chatGroupsChanged(chatGroups) {
    var _a, _b;
    if (!this.isPrivateChatSupported()) {
      return;
    }
    const unreadCounts = {};
    for (const key in chatGroups) {
      const lastReadTimestamp = (_a = _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key]) !== null && _a !== void 0 ? _a : 0;
      unreadCounts[key] = chatGroups[key].filter((c) => c.type == 'chat' &&
        c.message.time > lastReadTimestamp &&
        c.message.userId !== this.meeting.self.userId).length;
      if (key ===
        (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.g)([this.meeting.self.userId, (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId]) ||
        (key === 'everyone' && this.selectedParticipant === null)) {
        unreadCounts[key] = 0;
        _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__.c[key] = new Date();
      }
    }
    this.updateUnreadCountGroups(unreadCounts);
  }
  initializeChatGroups() {
    var _a;
    (_a = this.meeting.chat) === null || _a === void 0 ? void 0 : _a.messages.forEach((message) => {
      this.addToChatGroup(message);
    });
  }
  addToChatGroup(message) {
    var _a;
    const parsedMessage = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.p)(message);
    let key = 'everyone';
    if (((_a = parsedMessage.targetUserIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      const allParticipants = new Set([
        parsedMessage.userId,
        ...parsedMessage.targetUserIds,
      ]);
      key = (0,_chat_33b12f6d_js__WEBPACK_IMPORTED_MODULE_3__.g)(Array.from(allParticipants));
    }
    if (this.chatGroups[key] === undefined)
      this.chatGroups[key] = [];
    this.chatGroups[key] = [
      ...this.chatGroups[key],
      { type: 'chat', message: parsedMessage },
    ];
  }
  getRecipientPeerIds() {
    let peerIds = [];
    if (this.chatRecipientId !== 'everyone') {
      peerIds = [this.selectedParticipant.id];
    }
    return peerIds;
  }
  channelSwitchListener(e) {
    this.onChannelChanged(e);
  }
  renderHeadlessComponents() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-dialog-manager", { meeting: this.meeting }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-notifications", { meeting: this.meeting })));
  }
  renderComposerUI() {
    var _a, _b;
    if (this.isChatViewType && this.channels.length === 0)
      return null;
    if (this.isChatViewType && this.searchQuery !== '')
      return null;
    if (this.isChatViewType && !this.selectedChannelId)
      return null;
    if (this.chatRecipientId === 'everyone') {
      if (!this.canSendTextMessage && !this.canSendFiles)
        return null;
    }
    else {
      if (!this.canSendPrivateTexts && !this.canSendPrivateFiles)
        return null;
    }
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const prefill = {};
    if (this.editingMessage) {
      prefill.editMessage = this.editingMessage;
    }
    else if (this.replyMessage) {
      prefill.replyMessage = this.replyMessage;
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-composer-ui", Object.assign({ canSendTextMessage: this.isTextMessagingAllowed(), canSendFiles: this.isFileMessagingAllowed(), disableEmojiPicker: !!((_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__) === null || _b === void 0 ? void 0 : _b.features.hasFeature(_flags_d0561f1f_js__WEBPACK_IMPORTED_MODULE_5__.F.DISABLE_EMOJI_PICKER)), members: this.meeting.participants.all.toArray(), prefill: prefill, channelId: this.selectedChannelId, onDyteNewMessage: this.onNewMessageHandler, onDyteEditMessage: this.onEditMessageHandler, onDyteEditCancelled: () => (this.editingMessage = null) }, uiProps), this.replyMessage && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message-container", slot: "quote-block" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "quoted-message scrollbar" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_TextMessage_3039fe94_js__WEBPACK_IMPORTED_MODULE_6__.T, { message: this.replyMessage.message })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { "aria-label": this.t('dismiss'), class: "dismiss", icon: this.iconPack.dismiss, onClick: () => (this.replyMessage = null), iconPack: this.iconPack, t: this.t })))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "chat-addon", slot: "chat-addon" })));
  }
  renderFullChat() {
    if (this.creatingChannel) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "lg" })));
    }
    if (this.channels.length === 0 || !this.selectedChannelId) {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "banner" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.create_channel_illustration, iconPack: this.iconPack, t: this.t, slot: "start", class: 'create-channel-illustration' }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "wide", variant: "primary", size: "md", onClick: this.onChannelCreateClicked, class: "welcome-new-channel" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t, slot: "start" }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('chat.new_channel')))));
    }
    const selectedChannel = this.channels.find((channel) => channel.id === this.selectedChannelId);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-header", { slot: "header", meeting: this.meeting, channel: selectedChannel, onSearch: this.onSearchHandler, onSearchDismissed: this.onSearchDismissed }), this.searchQuery !== '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-search-results", { meeting: this.meeting, query: this.searchQuery, channelId: this.selectedChannelId })), this.searchQuery === '' && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t, selectedChannelId: this.selectedChannelId, selectedChannel: selectedChannel }))));
  }
  render() {
    var _a, _b;
    if (!this.meeting)
      return null;
    const uiProps = { iconPack: this.iconPack, t: this.t, size: this.size };
    const selfUserId = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId;
    const chatMessages = this.chatGroups[this.selectedGroup] || [];
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isChatViewType && this.renderHeadlessComponents(), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat-container" }, this.isChatViewType && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-channel-selector-ui", { channels: this.channels, onChannelChanged: this.onChannelChanged, selectedChannelId: this.selectedChannelId, showRecentMessage: true }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "channel-selector-header", slot: "header" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.t('chat.new_channel'), iconPack: this.iconPack, t: this.t }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { iconPack: this.iconPack, t: this.t, kind: "button", variant: "ghost", size: "md", onClick: this.onChannelCreateClicked, class: "channel-create-btn" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.add, iconPack: this.iconPack, t: this.t })))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "chat" }, this.isFileMessagingAllowed() && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { id: "dropzone", class: { active: this.dropzoneActivated }, part: "dropzone" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.attach, iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('chat.send_attachment')))), this.isPrivateChatSupported() && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-selector-ui", Object.assign({ selfUserId: selfUserId, groups: this.participants, selectedGroupId: (_b = this.selectedParticipant) === null || _b === void 0 ? void 0 : _b.userId, unreadCounts: this.unreadCountGroups, onDyteChatGroupChanged: this.updateRecipients }, uiProps))), this.isChatViewType ? (this.renderFullChat()) : this.usePaginatedChat() ? ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui-paginated", { meeting: this.meeting, size: this.size, iconPack: this.iconPack, t: this.t })) : ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-chat-messages-ui", Object.assign({ messages: chatMessages, selfUserId: selfUserId, selectedGroup: this.selectedGroup }, uiProps))), this.renderComposerUI()))));
  }
  get host() { return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "chatGroups": ["chatGroupsChanged"]
  }; }
};
DyteChat.style = dyteChatCss;

const dyteParticipantsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}:host([size='md']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}:host([size='sm']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}";

const DyteParticipants = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onSearchInput = (e) => {
      this.search = e.target.value;
    };
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_7__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.search = '';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
  }
  meetingChanged(meeting) {
    if (meeting == null)
      return;
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s,
      config: this.config,
      size: this.size,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "search", part: "search" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.search, part: "search-icon", iconPack: this.iconPack, t: this.t }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "search", autocomplete: "off", placeholder: "Search", onInput: this.onSearchInput, part: "search-input" })), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr scrollbar", part: "container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6873e729_js__WEBPACK_IMPORTED_MODULE_11__.R, { element: "dyte-participants-waiting-list", defaults: defaults }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6873e729_js__WEBPACK_IMPORTED_MODULE_11__.R, { element: "dyte-participants-stage-queue", defaults: defaults }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6873e729_js__WEBPACK_IMPORTED_MODULE_11__.R, { element: "dyte-participants-stage-list", defaults: defaults, props: { search: this.search } }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6873e729_js__WEBPACK_IMPORTED_MODULE_11__.R, { element: "dyte-participants-viewer-list", defaults: defaults, props: { search: this.search } }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipants.style = dyteParticipantsCss;

const dytePluginsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:block;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}ul{overflow-y:auto;padding:var(--dyte-space-0, 0px);flex-grow:1;flex-basis:0}.metadata{display:flex;align-items:center}.metadata img{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-sm, 4px)}.metadata .name{margin-left:var(--dyte-space-2, 8px);font-weight:500}.plugin{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.plugin .buttons{display:flex;align-items:center}dyte-button:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-ring-opacity));--tw-ring-offset-width:2px;--tw-ring-offset-color:rgb(var(--dyte-colors-background-1000, 8 8 8))}";

const DytePlugins = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.close = () => {
      this.stateUpdate.emit({ activeSidebar: false, sidebar: undefined });
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s.activeSidebar = false;
      _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_10__.s.sidebar = undefined;
    };
    this.meeting = undefined;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_7__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.plugins = [];
    this.canStartPlugins = false;
    this.canClosePlugins = false;
    this.activatedPluginsId = [];
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.plugins.all.removeListener('stateUpdate', this.updateActivePlugins);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.canStartPlugins = meeting.self.permissions.plugins.canStart;
      this.canClosePlugins = meeting.self.permissions.plugins.canClose;
      this.plugins = meeting.plugins.all
        .toArray()
        .filter((plugin) => { var _a; return !((_a = meeting.self.config.disabledPlugins) === null || _a === void 0 ? void 0 : _a.includes(plugin.id)); });
      this.updateActivePlugins = () => {
        this.activatedPluginsId = meeting.plugins.active.toArray().map((p) => p.id);
      };
      this.updateActivePlugins();
      meeting.plugins.all.addListener('stateUpdate', this.updateActivePlugins);
    }
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "scrollbar" }, this.plugins.map((plugin) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: plugin.name, class: "plugin" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "metadata" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: plugin.picture }), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "name" }, plugin.name)), !this.activatedPluginsId.includes(plugin.id) && this.canStartPlugins && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", size: "lg", iconPack: this.iconPack, t: this.t, onClick: () => {
        plugin.activate();
        this.close();
      }, "aria-label": `${this.t('activate')} ${plugin.name}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.rocket, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t })))), this.activatedPluginsId.includes(plugin.id) && this.canClosePlugins && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "buttons" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", size: "lg", onClick: () => {
        plugin.deactivate();
      }, iconPack: this.iconPack, t: this.t, "aria-label": `${this.t('close')} ${plugin.name}` }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss, tabIndex: -1, "aria-hidden": true, iconPack: this.iconPack, t: this.t }))))))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePlugins.style = dytePluginsCss;

const dytePollsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{box-sizing:border-box;padding:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);display:flex;flex:1 1 0%;flex-direction:column}.polls-view{overflow-y:auto;flex:1 1 0%;flex-basis:0}";

const DytePolls = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onPollsUpdate = (data) => {
      this.polls = [...data.polls];
    };
    this.meeting = undefined;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_7__.d;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.create = false;
    this.polls = undefined;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    if (this.meeting == null)
      return;
    (_a = this.meeting.polls) === null || _a === void 0 ? void 0 : _a.removeListener('pollsUpdate', this.onPollsUpdate);
  }
  meetingChanged(meeting) {
    if (meeting == undefined)
      return;
    if (meeting && !meeting.polls)
      return;
    this.polls = [...meeting.polls.items];
    meeting.polls.addListener('pollsUpdate', this.onPollsUpdate);
    this.onCreate = async (data) => {
      this.create = false;
      await meeting.polls.create(data.question, data.options, data.anonymous, data.hideVotes);
    };
    this.onVote = async (id, index) => {
      await meeting.polls.vote(id, index);
    };
  }
  toggleCreateState() {
    this.create = !this.create;
  }
  componentDidRender() {
    (0,_scroll_8cc79809_js__WEBPACK_IMPORTED_MODULE_13__.s)(this.pollEl);
  }
  render() {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ctr", part: "container" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "polls-view scrollbar", ref: (el) => (this.pollEl = el), part: "polls" }, this.polls.map((item) => {
      var _a;
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll", { key: item.id, poll: item, onDyteVotePoll: (e) => {
          this.onVote(e.detail.id, e.detail.index);
        }, self: (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.userId, iconPack: this.iconPack, t: this.t, permissions: this.meeting.self.permissions }));
    }), this.create && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-poll-form", { part: "poll-form", onDyteCreatePoll: (e) => {
        this.onCreate(e.detail);
      }, iconPack: this.iconPack, t: this.t }))), this.meeting.self.permissions.polls.canCreate && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "wide", onClick: () => this.toggleCreateState(), variant: this.create ? 'secondary' : 'primary', part: "button", iconPack: this.iconPack, t: this.t }, this.create ? this.t('polls.cancel') : this.t('polls.create'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePolls.style = dytePollsCss;

const dyteSidebarUiCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;height:100%;width:100%;font-family:var(--dyte-font-family, sans-serif);z-index:50;display:flex;flex-direction:column}:host([view='sidebar']){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}:host([view='full-screen']){position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);max-width:100%;border:none}::slotted(*){flex-grow:1}.close{position:absolute;top:var(--dyte-space-2, 8px);left:var(--dyte-space-2, 8px)}.main-header{display:flex;height:var(--dyte-space-12, 48px);place-items:center;justify-content:center}.main-header,.mobile-tabs{flex-shrink:0}.mobile-tabs{display:flex;place-items:center;justify-content:space-evenly;border-bottom:1px solid rgb(var(--dyte-colors-background-700, 44 44 44))}.mobile-tabs button{margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;padding:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));height:var(--dyte-space-10, 40px);cursor:pointer;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);font-weight:500;border-bottom:1px solid transparent}.mobile-tabs button.active{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}header h3{font-size:14px;font-weight:500}@media only screen and (max-device-height: 480px) and (orientation: landscape){.main-header{display:none !important}}";

const DyteSidebarUi = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.tabChange = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "tabChange", 7);
    this.sidebarClose = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "sidebarClose", 7);
    this.onClose = () => {
      this.sidebarClose.emit();
    };
    this.view = 'sidebar';
    this.tabs = [];
    this.currentTab = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    const isFullScreen = this.view === 'full-screen';
    const activeTab = this.tabs.find((tab) => tab.id === this.currentTab);
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: this.view }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { variant: "ghost", kind: "icon", class: "close", onClick: this.onClose, "aria-label": this.t('close') }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss })), activeTab && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "main-header" }, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, activeTab.name))), isFullScreen && ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: "mobile-tabs" }, this.tabs.map((tab) => ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: () => {
        this.tabChange.emit(tab.id);
      }, class: {
        active: this.currentTab === tab.id,
      } }, tab.name))))), (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: this.currentTab })));
  }
};
DyteSidebarUi.style = dyteSidebarUiCss;




/***/ }),

/***/ 90362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!root || !Array.isArray(selectors))
    return [];
  let children = [];
  for (const selector of selectors) {
    const el = root[selector];
    if (Array.isArray(el)) {
      children = [...el];
    }
    else if (el) {
      if (el.children) {
        children = [...el.children];
      }
      if (Array.isArray(el.remove)) {
        for (const toRemove of el.remove) {
          children = children.filter((child) => {
            if (typeof child === 'string') {
              return child !== toRemove;
            }
            else if (Array.isArray(child)) {
              return child[0] !== toRemove;
            }
            return true;
          });
        }
      }
      if (el.addBefore) {
        for (const [beforeEl, toAdd] of Object.entries(el.addBefore)) {
          const idx = children.findIndex((child) => {
            if (typeof child === 'string') {
              return child === beforeEl;
            }
            else if (Array.isArray(child)) {
              return child[0] === beforeEl;
            }
            return false;
          });
          if (idx >= 0) {
            children.splice(idx, 0, ...toAdd);
          }
        }
      }
      if (Array.isArray(el.add)) {
        children = children.concat(el.add);
      }
      if (Array.isArray(el.prepend)) {
        children = el.prepend.concat(children);
      }
    }
  }
  return children;
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, elementProps = {}, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props, elementProps: elementProps }));
  });
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, elementProps = {}, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {}, configChildren = [];
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps, ...configChildren] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  if (Tag in elementProps) {
    props = Object.assign(Object.assign({}, props), elementProps[Tag]);
  }
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  if (['dyte-header', 'dyte-controlbar'].includes(Tag)) {
    props['disableRender'] = true;
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, Object.assign({ id: id, style: styles }, props),
      (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps, elementProps: elementProps }),
      children,
      configChildren.map((child) => {
        if (Array.isArray(child)) {
          const [Tag, props] = child;
          return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, props));
        }
        return child;
      })));
  }
};




/***/ }),

/***/ 82321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ smoothScrollToBottom)
/* harmony export */ });
/**
 * Scroll to bottom of an element.
 *
 * Works in all browsers - just that in Safari, the smooth scrolling doesn't work.
 * @param el The bottom of which element you want to scroll down to
 */
const smoothScrollToBottom = (el, smooth = true) => {
  if (el == null)
    return;
  el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
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