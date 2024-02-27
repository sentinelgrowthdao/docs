"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7200,4592],{47200:(e,t,s)=>{s.r(t),s.d(t,{dyte_ended_screen:()=>c});var o=s(37176),n=s(74710),a=s(68753),r=s(39571),i=s(9367);s(78410),s(60804);const c=class{constructor(e){(0,o.r)(this,e),this.config=i.d,this.size=void 0,this.icon=a.d,this.states=void 0,this.t=(0,n.u)(),this.iconPack=a.d,this.message="",this.meeting=void 0}connectedCallback(){this.statesChanged(this.states),(0,r.o)("roomLeftState",(()=>this.statesChanged()))}getBreakoutRoomsMessage(e){var t;let s;return"connected-meeting"===(null==e?void 0:e.roomLeftState)&&(s=(null===(t=r.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)===this.meeting.connectedMeetings.parentMeeting.id?"breakout_rooms.move_reason.switch_main_room":"breakout_rooms.move_reason.switch_room"),s}statesChanged(e){const t=e||r.s;if(null!=t)switch(null==t?void 0:t.roomLeftState){case"left":this.message="ended.left";break;case"kicked":this.message="ended.kicked";break;case"disconnected":this.message="ended.disconnected";break;case"rejected":this.message="ended.rejected";break;case"connected-meeting":this.message=this.getBreakoutRoomsMessage(t);break;default:this.message="ended"}}renderBreakoutRoomScreen(){return(0,o.h)(o.H,null,(0,o.h)("div",{class:"ctr",part:"container"},(0,o.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,o.h)("p",{part:"message",class:"breakout"},this.t(this.message))))}render(){const e=this.states||r.s;return"connected-meeting"===e.roomLeftState?this.renderBreakoutRoomScreen():(0,o.h)(o.H,null,(0,o.h)("div",{class:"ctr",part:"container"},(0,o.h)("dyte-logo",{meeting:this.meeting,config:this.config,part:"logo",t:this.t}),(0,o.h)("p",{part:"message"},this.t(this.message)),"disconnected"===(null==e?void 0:e.roomLeftState)&&(0,o.h)("span",{part:"description"},this.t("ended.network"))))}static get watchers(){return{states:["statesChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center;gap:var(--dyte-space-8, 32px)}dyte-logo.loaded{height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p.breakout{font-size:20px;display:flex;flex-direction:column;align-items:center}p.breakout span{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}"},39571:(e,t,s)=>{s.d(t,{o:()=>d,s:()=>c});var o=s(37176);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...o)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=e=>"function"==typeof e?e():e,i=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:c,onChange:d}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=r(e);let o=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;o=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},c=e=>(n.get.forEach((t=>t(e))),o.get(e)),d=(e,s)=>{const a=o.get(e);t(s,a,e)&&(o.set(e,s),n.set.forEach((t=>t(e,s,a))))},p="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>c(t),ownKeys:e=>Array.from(o.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>o.has(t),set:(e,t,s)=>(d(t,s),!0)}),g=(e,t)=>(n[e].push(t),()=>{i(n[e],t)});return{state:p,get:c,set:d,on:g,onChange:(t,s)=>{const o=g("set",((e,o)=>{e===t&&s(o)})),n=g("reset",(()=>s(r(e)[t])));return()=>{o(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(g("set",t.set)),t.get&&e.push(g("get",t.get)),t.reset&&e.push(g("reset",t.reset)),t.dispose&&e.push(g("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=o.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof o.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,o.a)();s&&((e,t,s)=>{const o=e.get(t);o?o.includes(s)||o.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(o.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(o.f))),a(e)}}})()),s})({})}}]);