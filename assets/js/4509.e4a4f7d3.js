"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4509,6545],{16545:(t,e,s)=>{s.r(e),s.d(e,{dyte_breakout_rooms_toggle:()=>c});var o=s(37176),i=s(68753),n=s(74710),r=s(39571),a=s(52732);s(2079),s(78410);const c=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.breakoutRoomToggle=()=>{var t,e,s;const o=this.meeting.connectedMeetings.isActive?"view":"create";this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(e=null===(t=this.states)||void 0===t?void 0:t.activeBreakoutRoomsManager)||void 0===e?void 0:e.active),mode:o}}),r.s.activeBreakoutRoomsManager={active:!(null===(s=r.s.activeBreakoutRoomsManager)||void 0===s?void 0:s.active),mode:o}},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,n.u)()}render(){if((0,a.c)(this.meeting))return(0,o.h)(o.H,{title:this.t("breakout_rooms")},(0,o.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.breakoutRoomToggle,icon:this.iconPack.breakout_rooms,label:this.t("breakout_rooms"),variant:this.variant}))}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},39571:(t,e,s)=>{s.d(e,{o:()=>h,s:()=>c});var o=s(37176);const i=t=>!("isConnected"in t)||t.isConnected,n=((t,e)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...o)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(i))}),2e3),r=t=>"function"==typeof t?t():t,a=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:c,onChange:h}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=r(t);let o=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{var e;o=new Map(Object.entries(null!==(e=r(t))&&void 0!==e?e:{})),i.reset.forEach((t=>t()))},c=t=>(i.get.forEach((e=>e(t))),o.get(t)),h=(t,s)=>{const n=o.get(t);e(s,n,t)&&(o.set(t,s),i.set.forEach((e=>e(t,s,n))))},u="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>c(e),ownKeys:t=>Array.from(o.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>o.has(e),set:(t,e,s)=>(h(e,s),!0)}),d=(t,e)=>(i[t].push(e),()=>{a(i[t],e)});return{state:u,get:c,set:h,on:d,onChange:(e,s)=>{const o=d("set",((t,o)=>{t===e&&s(o)})),i=d("reset",(()=>s(r(t)[e])));return()=>{o(),i()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{i.dispose.forEach((t=>t())),n()},reset:n,forceUpdate:t=>{const e=o.get(t);i.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof o.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,o.a)();s&&((t,e,s)=>{const o=t.get(e);o?o.includes(s)||o.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(o.f)),n(t)},reset:()=>{t.forEach((t=>t.forEach(o.f))),n(t)}}})()),s})({})}}]);