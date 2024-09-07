"use strict";
exports.id = 8115;
exports.ids = [8115];
exports.modules = {

/***/ 91364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49583);


/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.i)(value) && (0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.b)(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.r.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if ((0,_isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_0__.a)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}




/***/ }),

/***/ 28115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_message_list_view: () => (/* binding */ DyteMessageListView)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72944);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26468);
/* harmony import */ var _breakout_rooms_manager_2750a354_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86824);
/* harmony import */ var _livestream_8216e2d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26786);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17073);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55055);
/* harmony import */ var _debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91364);
/* harmony import */ var _breakout_rooms_607110c8_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50057);
/* harmony import */ var _flags_e3703792_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54956);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49583);











const dyteMessageListViewCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}.loading{cursor:wait}.content-wrapper{height:100%;overflow-y:auto;position:relative;contain:strict}.scroller{width:1px;opacity:0}.content{position:absolute;top:0;width:100%}.smallest-dom-element{width:100%;height:2px;background:red}.loader{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;justify-content:center}";

const MAX_VISIBLE_ITEMS = 20;
const OVERSCAN_BUFFER = 5;
const DyteMessageListView = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.sizes = new Map();
    this.lastScrollTop = 0;
    this.scrollToBottomRetries = 0;
    this.elementObserver = (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        else if (typeof ResizeObserver !== 'undefined') {
          return (_ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this.measureElement(entry.target, entry);
            });
          }));
        }
        else {
          return null;
        }
      };
      return {
        disconnect: () => { var _a; return (_a = get()) === null || _a === void 0 ? void 0 : _a.disconnect(); },
        observe: (target) => { var _a; return (_a = get()) === null || _a === void 0 ? void 0 : _a.observe(target, { box: 'border-box' }); },
        unobserve: (target) => { var _a; return (_a = get()) === null || _a === void 0 ? void 0 : _a.unobserve(target); },
      };
    })();
    this.measureElement = (node, entry) => {
      if (!node)
        return;
      const id = node.dataset.id;
      if (this.sizes.has(id)) {
        this.elementObserver.unobserve(node);
        return;
      }
      if (entry) {
        const box = entry.borderBoxSize[0];
        if (box && box.blockSize > 0) {
          this.saveItemSize(id, box.blockSize);
          this.elementObserver.unobserve(node);
          return;
        }
      }
      const rect = node.getBoundingClientRect();
      if (rect.height > 0)
        this.saveItemSize(id, rect.height);
    };
    this.getVisibleItems = () => {
      return this.messages.slice(this.range.start, this.range.end + 1);
    };
    this.updateVisibleItems = (start, end) => {
      const total = this.messages.length;
      let newStart = start;
      let newEnd = end;
      if (total <= this.visibleItemsCount) {
        // render all
        newStart = 0;
        newEnd = total - 1;
      }
      else if (end - start < this.visibleItemsCount - 1) {
        // if range is less then visible, adjust start based on end
        newStart = this.range.end - this.visibleItemsCount + 1;
      }
      if (this.range.start !== newStart) {
        this.range = { start: newStart, end: newEnd };
        this.totalHeight = this.getRangeSize(0, total);
      }
    };
    this.getEstimatedItemSize = () => {
      return this.estimateItemSize;
    };
    this.getRangeSize = (start, end) => {
      let total = 0;
      let itemSize = 0;
      for (let index = start; index < end; index++) {
        itemSize = this.sizes.get(this.messages[index].id);
        total = total + (!!itemSize ? itemSize : this.getEstimatedItemSize());
      }
      return total;
    };
    this.getScrollTop = () => {
      return this.$listRef ? Math.ceil(this.$listRef.scrollTop) : 0;
    };
    this.getClientHeight = () => {
      return this.$listRef ? Math.ceil(this.$listRef.clientHeight) : 0;
    };
    this.getScrollHeight = () => {
      return this.$listRef ? Math.ceil(this.$listRef.scrollHeight) : 0;
    };
    this.getItemsScrolled = () => {
      const offset = this.lastScrollTop;
      if (offset <= 0) {
        return 0;
      }
      let low = 0;
      let middle = 0;
      let middleOffset = 0;
      let high = this.messages.length;
      while (low <= high) {
        middle = (low + high) >>> 1;
        middleOffset = this.getRangeSize(0, middle);
        if (middleOffset === offset) {
          return middle;
        }
        else if (middleOffset < offset) {
          low = middle + 1;
        }
        else if (middleOffset > offset) {
          high = middle - 1;
        }
      }
      return low > 0 ? --low : 0;
    };
    this.getEndByStart = (start) => {
      return Math.min(start + this.visibleItemsCount, this.messages.length - 1);
    };
    this.scrollToOffset = (offset) => {
      if (this.$listRef) {
        this.$listRef.scrollTop = offset;
      }
    };
    this.scrollToIndex = (index) => {
      if (index >= this.messages.length - 1) {
        this.scrollToBottom();
      }
      else {
        const offset = index < 1 ? 0 : this.getRangeSize(0, index);
        this.scrollToOffset(offset);
      }
    };
    this.scrollToBottom = () => {
      if (!this.$listEndRef)
        return;
      (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.$listEndRef.scrollIntoView();
        if (this.getScrollHeight() - (this.getScrollTop() + this.getClientHeight()) > 0 &&
          this.scrollToBottomRetries < 10) {
          setTimeout(() => {
            this.scrollToBottom();
          }, 1000 / 60);
        }
        else {
          this.scrollToBottomRetries = 0;
          this.autoScroll = true;
        }
      });
    };
    this.handleScroll = async () => {
      if (this.isFetching)
        return;
      const scrollTop = this.getScrollTop();
      const direction = scrollTop < this.lastScrollTop || scrollTop === 0 ? 'UP' : 'DOWN';
      this.lastScrollTop = scrollTop;
      if (this.loadMore && scrollTop === 0 && direction === 'UP' && this.isFetching === false) {
        this.isFetching = true;
        const newMessages = await this.loadMore(this.messages[0]);
        if (newMessages && newMessages.length) {
          this.messages = [...newMessages, ...this.messages];
        }
        this.isFetching = false;
      }
      if (direction === 'UP') {
        this.handleTop();
      }
      else if (direction === 'DOWN') {
        this.handleBottom();
      }
    };
    this.handleTop = () => {
      const scrolledItems = this.getItemsScrolled();
      if (scrolledItems <= this.range.end - OVERSCAN_BUFFER) {
        this.autoScroll = false;
      }
      if (scrolledItems > this.range.start + OVERSCAN_BUFFER) {
        return;
      }
      const newStart = Math.max(this.range.start - OVERSCAN_BUFFER, 0);
      this.updateVisibleItems(newStart, this.getEndByStart(newStart));
    };
    this.handleBottom = () => {
      const scrolledItems = this.getItemsScrolled();
      if (scrolledItems < this.range.start + OVERSCAN_BUFFER) {
        return;
      }
      const newStart = this.range.start + OVERSCAN_BUFFER;
      const newEnd = this.getEndByStart(newStart);
      if (newEnd === this.messages.length - 1) {
        this.updateVisibleItems(newEnd - this.visibleItemsCount, newEnd);
      }
      else {
        this.updateVisibleItems(newStart, newEnd);
      }
    };
    this.updateTotalHeight = (0,_debounce_d1d72dac_js__WEBPACK_IMPORTED_MODULE_6__.d)(() => {
      this.totalHeight = this.getRangeSize(0, this.messages.length);
    }, 1000 / 30, { leading: true });
    this.rendererInternal = (containerElement, message, index) => {
      if (!containerElement)
        return;
      if (containerElement.dataset.id === message.id)
        return;
      const viewElement = this.renderer(message, index);
      if (containerElement.hasChildNodes) {
        containerElement.innerHTML = '';
      }
      this.elementObserver.observe(containerElement);
      containerElement.dataset.id = message.id;
      containerElement.appendChild(viewElement);
    };
    this.messages = undefined;
    this.renderer = undefined;
    this.loadMore = undefined;
    this.visibleItemsCount = MAX_VISIBLE_ITEMS;
    this.estimateItemSize = 100;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_4__.d;
    this.range = undefined;
    this.isFetching = false;
    this.autoScroll = true;
    this.totalHeight = 0;
  }
  connectedCallback() {
    const total = this.messages.length - 1;
    this.range = { start: total - this.visibleItemsCount, end: total };
    this.updateVisibleItems(this.range.start, this.range.end);
    this.totalHeight = this.getRangeSize(0, total);
  }
  componentDidLoad() {
    if (this.autoScroll) {
      this.scrollToBottom();
    }
  }
  messagesUpdated(newValue, previousValue) {
    if (newValue.length > previousValue.length) {
      const diff = newValue.length - previousValue.length;
      this.updateVisibleItems(diff, this.getEndByStart(diff));
      this.scrollToIndex(this.range.start);
    }
  }
  saveItemSize(id, height) {
    this.sizes.set(id, Math.round(height));
    this.updateTotalHeight();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scrollbar content-wrapper", ref: (el) => (this.$listRef = el), onScroll: this.handleScroll }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "scroller" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
        height: `${this.totalHeight}px`,
      } }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "smallest-dom-element", id: "list-end", ref: (el) => (this.$listEndRef = el) })), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "content", style: {
        transform: `translateY(${this.getRangeSize(0, this.range.start)}px)`,
      } }, this.isFetching && ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "loader" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-spinner", { size: "md" }))), this.getVisibleItems().map((msg, index) => ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: msg.id, ref: (el) => this.rendererInternal(el, msg, index) }))))));
  }
  static get watchers() { return {
    "messages": ["messagesUpdated"]
  }; }
};
DyteMessageListView.style = dyteMessageListViewCss;




/***/ })

};
;