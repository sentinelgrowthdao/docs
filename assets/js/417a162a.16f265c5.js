"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[6825],{16639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(85893),o=r(11151),i=r(6103);r(39960);const a={title:"Sentinel Public APIs",sidebar_position:1},s="Sentinel Public APIs",c={id:"README",title:"Sentinel Public APIs",description:"There are currently 3 public APIs provided by Sentinel: LCD, RPC and the historical data API.",source:"@site/docs/apis/README.mdx",sourceDirName:".",slug:"/",permalink:"/apis/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sentinel Public APIs",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"RPC Gateway",permalink:"/apis/rpc/"}},l={},u=[];function f(e){const t={a:"a",admonition:"admonition",h1:"h1",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sentinel-public-apis",children:"Sentinel Public APIs"}),"\n",(0,n.jsx)(t.p,{children:"There are currently 3 public APIs provided by Sentinel: LCD, RPC and the historical data API."}),"\n",(0,n.jsxs)(i._,{title:"APIs",id:"apis",children:[(0,n.jsx)(i.w,{title:"RPC endpoints",description:"Sentinel RPC endpoints",to:"/api/?v=RPC",svgFile:"/icons/api.svg"}),(0,n.jsx)(i.w,{title:"gRPC",description:"Sentinel high performance, universal RPC framework",to:"/apis/grpc",svgFile:"/icons/api.svg"}),(0,n.jsx)(i.w,{title:"LCD",description:"State queries, legacy transactions endpoints",to:"/api/?v=LCD",svgFile:"/icons/api.svg"})]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsxs)(t.p,{children:["Please note that for maximun reliability and speed, LCD or RPC can be hosted by anyone by simple running a node and ",(0,n.jsx)(t.a,{href:"https://docs.cosmos.network/main/learn/advanced/grpc_rest",children:"configuring the API service"}),"."]})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},6103:(e,t,r)=>{r.d(t,{w:()=>y,_:()=>d});r(67294);var n=r(97582);function o(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function s(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}function c(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,n=void 0===r?i:r,c=t.stripRegexp,l=void 0===c?a:c,u=t.transform,f=void 0===u?o:u,p=t.delimiter,d=void 0===p?" ":p,y=s(s(e,n,"$1\0$2"),l,"\0"),h=0,_=y.length;"\0"===y.charAt(h);)h++;for(;"\0"===y.charAt(_-1);)_--;return y.slice(h,_).split("\0").map(f).join(d)}(e,(0,n.__assign)({delimiter:"."},t))}function l(e,t){return void 0===t&&(t={}),c(e,(0,n.__assign)({delimiter:"-"},t))}var u=r(39960),f=r(90512),p=r(85893);function d(e){let{id:t,title:r,children:n,description:o,className:i,hasSubSections:a=!1,HeadingTag:s="h3"}=e;return(0,p.jsxs)("div",{className:(0,f.Z)("homepage-section",a&&"has-sub-sections",i),children:[r&&(0,p.jsx)(s,{id:t??l(r),children:r}),o&&(0,p.jsx)("p",{className:"section-description",children:o}),(0,p.jsx)("div",{className:"section-content",children:n})]})}function y(e){let{id:t,icon:r,svgFile:n,title:o,description:i,to:a}=e;return(0,p.jsxs)(u.Z,{to:a,className:"homepage-card",children:[n?(0,p.jsx)("div",{className:"icon",children:(0,p.jsx)("img",{src:n})}):r&&(0,p.jsx)("div",{className:"icon",children:r}),(0,p.jsxs)("div",{className:"card-content",children:[(0,p.jsx)("div",{className:"title",id:t&&l(o),children:o}),(0,p.jsx)("div",{className:"description",children:i})]})]})}},97582:(e,t,r)=>{r.r(t),r.d(t,{__addDisposableResource:()=>k,__assign:()=>i,__asyncDelegator:()=>S,__asyncGenerator:()=>x,__asyncValues:()=>O,__await:()=>P,__awaiter:()=>y,__classPrivateFieldGet:()=>I,__classPrivateFieldIn:()=>D,__classPrivateFieldSet:()=>C,__createBinding:()=>_,__decorate:()=>s,__disposeResources:()=>N,__esDecorate:()=>l,__exportStar:()=>v,__extends:()=>o,__generator:()=>h,__importDefault:()=>R,__importStar:()=>T,__makeTemplateObject:()=>A,__metadata:()=>d,__param:()=>c,__propKey:()=>f,__read:()=>m,__rest:()=>a,__runInitializers:()=>u,__setFunctionName:()=>p,__spread:()=>w,__spreadArray:()=>j,__spreadArrays:()=>g,__values:()=>b,default:()=>M});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function s(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t,r,n,o,i){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,c=n.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?n.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var y={};for(var h in n)y[h]="access"===h?{}:n[h];for(var h in n.access)y.access[h]=n.access[h];y.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(e||null))};var _=(0,r[d])("accessor"===c?{get:f.get,set:f.set}:f[l],y);if("accessor"===c){if(void 0===_)continue;if(null===_||"object"!=typeof _)throw new TypeError("Object expected");(s=a(_.get))&&(f.get=s),(s=a(_.set))&&(f.set=s),(s=a(_.init))&&o.unshift(s)}else(s=a(_))&&("field"===c?o.unshift(s):f[l]=s)}u&&Object.defineProperty(u,n.name,f),p=!0}function u(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function d(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function y(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function s(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}function h(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(c){s=[6,c],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var _=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||_(t,e,r)}function b(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function j(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function x(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=o[e](t)).value instanceof P?Promise.resolve(r.value.v).then(c,l):u(i[0][2],r)}catch(n){u(i[0][3],n)}var r}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function S(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:P(e[n](t)),done:!1}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=b(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function A(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var E=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function T(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&_(t,e,r);return E(t,e),t}function R(e){return e&&e.__esModule?e:{default:e}}function I(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function C(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function D(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function k(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var F="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function N(e){function t(t){e.error=e.hasError?new F(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,(function(e){return t(e),r()}))}catch(i){t(i)}}if(e.hasError)throw e.error}()}const M={__extends:o,__assign:i,__rest:a,__decorate:s,__param:c,__metadata:d,__awaiter:y,__generator:h,__createBinding:_,__exportStar:v,__values:b,__read:m,__spread:w,__spreadArrays:g,__spreadArray:j,__await:P,__asyncGenerator:x,__asyncDelegator:S,__asyncValues:O,__makeTemplateObject:A,__importStar:T,__importDefault:R,__classPrivateFieldGet:I,__classPrivateFieldSet:C,__classPrivateFieldIn:D,__addDisposableResource:k,__disposeResources:N}}}]);