"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3328,893],{10893:(t,e,s)=>{s.r(e),s.d(e,{dyte_ai_toggle:()=>r});var i=s(37176),n=s(68753),o=s(74710),a=s(39571);const r=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.variant="button",this.states=void 0,this.meeting=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,o.u)(),this.aiActive=!1}statesChanged(t){const e=t||a.s;this.aiActive=e.activeAI}toggleAI(){const t=this.states||a.s;this.aiActive=!(null==t?void 0:t.activeAI),this.stateUpdate.emit({activeAI:this.aiActive,activeMoreMenu:!1,activeSidebar:!1}),a.s.activeAI=this.aiActive,a.s.activeMoreMenu=!1}render(){var t,e;const s=this.t("ai.meeting_ai");return(null===(e=null===(t=this.meeting)||void 0===t?void 0:t.self)||void 0===e?void 0:e.permissions).transcriptionEnabled?(0,i.h)(i.H,{title:s},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.aiActive},onClick:()=>this.toggleAI(),icon:this.iconPack.meeting_ai,label:s,variant:this.variant,brandIcon:!0})):null}static get watchers(){return{states:["statesChanged"]}}};r.style=":host{display:block}"},39571:(t,e,s)=>{s.d(e,{o:()=>h,s:()=>c});var i=s(37176);const n=t=>!("isConnected"in t)||t.isConnected,o=((t,e)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...i)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(n))}),2e3),a=t=>"function"==typeof t?t():t,r=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:c,onChange:h}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=a(t);let i=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},o=()=>{var e;i=new Map(Object.entries(null!==(e=a(t))&&void 0!==e?e:{})),n.reset.forEach((t=>t()))},c=t=>(n.get.forEach((e=>e(t))),i.get(t)),h=(t,s)=>{const o=i.get(t);e(s,o,t)&&(i.set(t,s),n.set.forEach((e=>e(t,s,o))))},l="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>c(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,s)=>(h(e,s),!0)}),u=(t,e)=>(n[t].push(e),()=>{r(n[t],e)});return{state:l,get:c,set:h,on:u,onChange:(e,s)=>{const i=u("set",((t,i)=>{t===e&&s(i)})),n=u("reset",(()=>s(a(t)[e])));return()=>{i(),n()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(u("set",e.set)),e.get&&t.push(u("get",e.get)),e.reset&&t.push(u("reset",e.reset)),e.dispose&&t.push(u("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{n.dispose.forEach((t=>t())),o()},reset:o,forceUpdate:t=>{const e=i.get(t);n.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof i.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,i.a)();s&&((t,e,s)=>{const i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(i.f)),o(t)},reset:()=>{t.forEach((t=>t.forEach(i.f))),o(t)}}})()),s})({})}}]);