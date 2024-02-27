"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[360,9728],{69728:(e,t,s)=>{s.r(t),s.d(t,{dyte_polls_toggle:()=>l});var i=s(37176),n=s(68753),o=s(74710),a=s(39571),r=s(57419);s(78410),s(2079);const l=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.onPollsUpdate=({newPoll:e})=>{!0===e&&(this.unreadPollsCount+=1)},this.updateCanView=()=>{this.canViewPolls=(0,r.d)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,o.u)(),this.pollsActive=!1,this.unreadPollsCount=0,this.canViewPolls=!1}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,a.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var e,t,s;null===(e=this.meeting.polls)||void 0===e||e.removeListener("pollsUpdate",this.onPollsUpdate),null===(s=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===s||s.removeListener("stageStatusUpdate",this.updateCanView)}meetingChanged(e){var t;e&&e.polls&&(this.unreadPollsCount=e.polls.items.length,this.meeting.polls.addListener("pollsUpdate",this.onPollsUpdate),this.canViewPolls=(0,r.d)(e),null===(t=null==e?void 0:e.stage)||void 0===t||t.on("stageStatusUpdate",this.updateCanView))}statesChanged(e){const t=e||a.s;null!=t&&(this.pollsActive=!0===t.activeSidebar&&"polls"===t.sidebar)}togglePollsTab(){const e=this.states||a.s;this.unreadPollsCount=0,this.pollsActive=!((null==e?void 0:e.activeSidebar)&&"polls"===(null==e?void 0:e.sidebar)),this.stateUpdate.emit({activeSidebar:this.pollsActive,sidebar:this.pollsActive?"polls":void 0,activeMoreMenu:!1,activeAI:!1}),a.s.activeSidebar=this.pollsActive,a.s.sidebar=this.pollsActive?"polls":void 0,a.s.activeMoreMenu=!1}render(){if(!this.canViewPolls)return;const e=this.t("polls");return(0,i.h)(i.H,{title:e},0!==this.unreadPollsCount&&!this.pollsActive&&(0,i.h)("div",{class:"unread-count",part:"unread-count"},(0,i.h)("span",null,this.unreadPollsCount<=100?this.unreadPollsCount:"99+")),(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pollsActive},onClick:()=>this.togglePollsTab(),icon:this.iconPack.poll,label:e,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}"},57419:(e,t,s)=>{s.d(t,{a:()=>r,b:()=>l,c:()=>o,d:()=>a});var i=s(78410),n=s(2079);const o=e=>{if(e&&!e.chat)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:i}=e.self.permissions;return s.canSend||s.text||s.files||i.canSend||i.canReceive||i.files||i.text},a=e=>{if(e&&!e.polls)return!1;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.polls)return!1;const{polls:s}=e.self.permissions;return s.canCreate||s.canView||s.canVote},r=e=>{var t,s,o,a;if((null===(t=null==e?void 0:e.__internals__)||void 0===t?void 0:t.features.hasFeature(n.F.FEAT_PARTICIPANT_LIST))&&!(null===(s=e.self.permissions)||void 0===s?void 0:s.showParticipantList))return!1;if((0,i.s)(e)&&!(null===(o=e.self.permissions)||void 0===o?void 0:o.acceptPresentRequests))return!1;if(e&&!e.participants)return!1;if("LIVESTREAM"===e.meta.viewType)return e.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(a=null==e?void 0:e.stage)||void 0===a?void 0:a.status);const r=null==e?void 0:e.self.config;return!(r&&!r.controlBar.elements.participants)},l=e=>{if((0,i.a)(e))return!1;if(e&&!e.plugins)return!1;if("LIVESTREAM"===e.meta.viewType)return"ON_STAGE"===e.stage.status;const t=null==e?void 0:e.self.config;if(t&&!t.controlBar.elements.plugins)return!1;const{plugins:s}=e.self.permissions;return s.canClose||s.canStart}},39571:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>l});var i=s(37176);const n=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),a=e=>"function"==typeof e?e():e,r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:l,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=a(e);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var t;i=new Map(Object.entries(null!==(t=a(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},l=e=>(n.get.forEach((t=>t(e))),i.get(e)),c=(e,s)=>{const o=i.get(e);t(s,o,e)&&(i.set(e,s),n.set.forEach((t=>t(e,s,o))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>l(t),ownKeys:e=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>i.has(t),set:(e,t,s)=>(c(t,s),!0)}),u=(e,t)=>(n[e].push(t),()=>{r(n[e],t)});return{state:d,get:l,set:c,on:u,onChange:(t,s)=>{const i=u("set",((e,i)=>{e===t&&s(i)})),n=u("reset",(()=>s(a(e)[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(u("set",t.set)),t.get&&e.push(u("get",t.get)),t.reset&&e.push(u("reset",t.reset)),t.dispose&&e.push(u("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const t=i.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),o(e)}}})()),s})({})}}]);