"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[605],{70605:(e,t,s)=>{s.r(t),s.d(t,{dyte_setup_screen:()=>p});var r=s(37176),i=s(22906),o=s(9367),n=s(67341),a=s(68753),l=s(74710),c=s(60804),d=s(39571);const p=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.join=async()=>{var e,t,s;""===(null===(e=this.displayName)||void 0===e?void 0:e.trim())||this.isJoining||(this.isJoining=!0,null===(t=this.meeting)||void 0===t||t.self.setName(this.displayName),c.g.setItem("dyte-display-name",this.displayName),await(null===(s=this.meeting)||void 0===s?void 0:s.joinRoom()))},this.meeting=void 0,this.states=d.s,this.size=void 0,this.config=o.d,this.iconPack=a.d,this.t=(0,l.u)(),this.displayName=void 0,this.isJoining=!1,this.canEditName=!0}connectedCallback(){this.meetingChanged(this.meeting)}componentDidLoad(){var e;null===(e=this.inputEl)||void 0===e||e.focus()}meetingChanged(e){var t,s;null!=e&&(this.canEditName=null===(t=e.self.permissions.canEditDisplayName)||void 0===t||t,this.displayName=(null===(s=e.self.name)||void 0===s?void 0:s.trim())||"",d.s.meeting="setup")}render(){var e,t,s,o;const a=""===(null===(e=this.displayName)||void 0===e?void 0:e.trim()),l={meeting:this.meeting,config:this.config,states:this.states||d.s,size:this.size,iconPack:this.iconPack,t:this.t};return(0,r.h)(r.H,null,(0,r.h)("div",{class:"container"},(0,r.h)(n.R,{element:"dyte-participant-tile",defaults:l,props:{participant:null===(t=this.meeting)||void 0===t?void 0:t.self,size:"md"},childProps:{participant:null===(s=this.meeting)||void 0===s?void 0:s.self,size:"md"},deepProps:!0}),(0,r.h)("div",{class:"metadata"},""===(null===(o=this.displayName)||void 0===o?void 0:o.trim())?(0,r.h)("div",{class:"name"},this.t("setup_screen.join_in_as")):(0,r.h)("div",{class:"label"},(0,r.h)("p",null,this.t("setup_screen.joining_as")),(0,r.h)("div",{class:"name"},(0,i.s)(this.displayName,20))),this.canEditName&&(0,r.h)("input",{placeholder:this.t("setup_screen.your_name"),value:this.displayName,autoFocus:!0,ref:e=>{this.inputEl=e},onInput:e=>{this.displayName=e.target.value},onKeyDown:e=>{"Enter"===e.key&&this.join()}}),(0,r.h)("dyte-button",{size:"lg",kind:"wide",onClick:this.join,disabled:a,iconPack:this.iconPack,t:this.t},this.isJoining?(0,r.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t}):this.t("join")))))}static get watchers(){return{meeting:["meetingChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;padding:var(--dyte-space-4, 16px);height:100%;min-height:100%;width:100%;display:flex;place-items:center;justify-content:center;--dyte-controlbar-button-background-color:rgb(var(--dyte-colors-background-700, 44 44 44))}.container{width:100%;max-width:1080px;display:flex;align-items:center;justify-content:space-evenly}.metadata{width:100%;max-width:var(--dyte-space-80, 320px)}.label{display:flex;flex-direction:column;align-items:center}.label p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px}.name{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-6, 24px);text-align:center;font-size:28px;font-weight:500;letter-spacing:-0.025em;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}input{margin-bottom:var(--dyte-space-6, 24px);display:block;height:var(--dyte-space-10, 40px);width:100%;max-width:var(--dyte-space-80, 320px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));box-sizing:border-box;font-size:16px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input{border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}dyte-spinner{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--icon-size:var(--dyte-space-8, 32px)}:host([size='sm']) .container,:host([size='md']) .container{height:100%;flex-direction:column;justify-content:space-evenly}dyte-camera-toggle{margin-left:var(--dyte-space-1\\.5, 6px)}dyte-participant-tile{height:auto;width:100%;max-width:var(--dyte-space-96, 384px)}"},67341:(e,t,s)=>{s.d(t,{R:()=>l,l:()=>a});var r=s(37176);const i=({element:e,size:t,states:s={},config:r={}})=>{let i=[];const o=null==r?void 0:r.root[e],n=e=>{i.push(e),"string"==typeof t&&i.push(`${e}.${t}`)};if(n(e),"object"==typeof o&&!Array.isArray(o)&&null!==o){const{state:t,states:r}=o;let i=e,a=[];if(Array.isArray(r)){a=r.filter((e=>s[e])),a.sort();for(const e of a)n(`${i}.${e}`);if(a.length>1){n([i,...a].join("."))}}if("string"==typeof t){const r=`${e}[${t}=${s[t]}]`;n(r);for(const e of a)n(`${r}.${e}`);if(a.length>1){n([r,...a].join("."))}}}return i},o=({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let s=[];for(const r of e){const e=t[r];if(Array.isArray(e))s=[...e];else if(e){if(e.children&&(s=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)s=s.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,r]of Object.entries(e.addBefore)){const e=s.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&s.splice(e,0,...r)}Array.isArray(e.add)&&(s=s.concat(e.add)),Array.isArray(e.prepend)&&(s=e.prepend.concat(s))}}return s},n=({elements:e,defaults:t,props:s={},deepProps:i=!1,elementProps:o={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,r.h)(l,{element:e,defaults:t,props:s,childProps:i&&s,elementProps:o}))):null,a=({element:e,defaults:t,props:s={},elementProps:r={}})=>{var n;const{config:a,size:l,states:c}=t;let d,p={},h=[];Array.isArray(e)?[d,p,...h]=e:d=e;const u=null===(n=null==a?void 0:a.root)||void 0===n?void 0:n[d];null!=u&&"props"in u&&(s=Object.assign(Object.assign({},u.props),s)),s=Object.assign(Object.assign({},s),p),d in r&&(s=Object.assign(Object.assign({},s),r[d]));const y=i({element:d,size:l,states:c,config:a});return o({selectors:y,root:a.root}).length},l=({element:e,defaults:t,childProps:s={},props:a={},onlyChildren:l=!1,asHost:c=!1,deepProps:d=!1,elementProps:p={}},h)=>{var u;const{config:y,size:f,states:g}=t;let m,b={},v=[];Array.isArray(e)?[m,b,...v]=e:m=e;const x=null===(u=null==y?void 0:y.root)||void 0===u?void 0:u[m];null!=x&&"props"in x&&(a=Object.assign(Object.assign({},x.props),a)),a=Object.assign(Object.assign({},a),b),m in p&&(a=Object.assign(Object.assign({},a),p[m]));const k=i({element:m,size:f,states:g,config:y}),w=o({selectors:k,root:y.root});if(l)return(0,r.h)(n,{elements:w,defaults:t,props:s,deepProps:d,elementProps:p});const j=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const s={};for(const r of e){const e=t[r];null!=e&&Object.assign(s,e)}return s})({selectors:k,styles:y.styles});if(c)return(0,r.h)(r.H,Object.assign({},t,{style:j},a),(0,r.h)(n,{elements:w,defaults:t,props:s,deepProps:d,elementProps:p}),h,v.map((e=>{if(Array.isArray(e)){const[s,i]=e;return(0,r.h)(s,Object.assign({},t,i))}return e})));if(["dyte-header","dyte-controlbar"].includes(m)&&(a.disableRender=!0),m.startsWith("dyte-"))return(0,r.h)(m,Object.assign({},t,{style:j},a),(0,r.h)(n,{elements:w,defaults:t,props:s,deepProps:d,elementProps:p}),h,v.map((e=>{if(Array.isArray(e)){const[s,i]=e;return(0,r.h)(s,Object.assign({},t,i))}return e})));{const[e,i]=m.split("#");return(0,r.h)(e,Object.assign({id:i,style:j},a),(0,r.h)(n,{elements:w,defaults:t,props:s,deepProps:d,elementProps:p}),h,v.map((e=>{if(Array.isArray(e)){const[s,i]=e;return(0,r.h)(s,Object.assign({},t,i))}return e})))}}},39571:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>l});var r=s(37176);const i=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(i))}),2e3),n=e=>"function"==typeof e?e():e,a=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:l,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=n(e);let r=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;r=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),i.reset.forEach((e=>e()))},l=e=>(i.get.forEach((t=>t(e))),r.get(e)),c=(e,s)=>{const o=r.get(e);t(s,o,e)&&(r.set(e,s),i.set.forEach((t=>t(e,s,o))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(c(t,s),!0)}),p=(e,t)=>(i[e].push(t),()=>{a(i[e],t)});return{state:d,get:l,set:c,on:p,onChange:(t,s)=>{const r=p("set",((e,r)=>{e===t&&s(r)})),i=p("reset",(()=>s(n(e)[t])));return()=>{r(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=r.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.a)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),o(e)}}})()),s})({})},22906:(e,t,s)=>{s.d(t,{a:()=>o,f:()=>n,g:()=>a,h:()=>i,s:()=>r});const r=(e,t=20)=>null==e?"":e.length>t?`${e.substring(0,t)}...`:e,i=e=>/^\p{Emoji}+$/u.test(e)&&!/^\d+$/.test(e),o=e=>(null==e?void 0:e.trim().toLowerCase().startsWith("javascript:"))?"https://dyte.io":e,n=e=>""===(e=null==e?void 0:e.trim())?"Participant":e;function a(e,t=2){return e.replace(/[^\u00BF-\u1FFF\u2C00-\uD7FF\w\s]/g,"").trim().split(/\s+/).slice(0,t).map((e=>e.charAt(0))).join("").toUpperCase()}}}]);