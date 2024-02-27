"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4482,1210],{54482:(t,e,s)=>{s.r(e),s.d(e,{dyte_livestream_toggle:()=>l});var i=s(37176),r=s(68753),a=s(74710),n=s(78410),o=s(39571);const l=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,i.c)(this,"dyteAPIError",7),this.livestreamStateListener=t=>{this.livestreamState=t,"LIVESTREAMING"!==t&&"IDLE"!==t||(this.stateUpdate.emit({activeMoreMenu:!1}),o.s.activeMoreMenu=!1)},this.isLoading=()=>null==this.meeting||"STARTING"===this.livestreamState||"STOPPING"===this.livestreamState,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,a.u)(),this.livestreamState="IDLE"}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.clearListeners()}meetingChanged(t){var e,s;null!=t&&(this.livestreamState=null===(e=this.meeting.livestream)||void 0===e?void 0:e.state,null===(s=this.meeting.livestream)||void 0===s||s.on("livestreamUpdate",this.livestreamStateListener))}async toggleLivestream(){var t,e;if("LIVESTREAMING"===this.livestreamState)try{await(null===(t=this.meeting.livestream)||void 0===t?void 0:t.stop())}catch(s){this.dyteAPIError.emit({trace:this.t("livestream.stop"),message:this.t("livestream.error.stop")})}else try{await(null===(e=this.meeting.livestream)||void 0===e?void 0:e.start())}catch(i){this.dyteAPIError.emit({trace:this.t("livestream.start"),message:this.t("livestream.error.start")})}}clearListeners(){var t;null===(t=this.meeting.livestream)||void 0===t||t.removeListener("livestreamUpdate",this.livestreamStateListener)}getLivestreamLabel(){switch(this.livestreamState){case"IDLE":return this.t("livestream.go_live");case"LIVESTREAMING":return this.t("livestream.end_live");case"STARTING":return this.t("livestream.starting");case"STOPPING":return this.t("livestream.stopping");default:return this.t("livestream.error")}}getLivestreamIcon(){return"IDLE"===this.livestreamState?this.iconPack.start_livestream:this.iconPack.stop_livestream}render(){if((0,n.i)(this.meeting))return(0,i.h)(i.H,null,(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,isLoading:this.isLoading(),class:{"active-livestream":"LIVESTREAMING"===this.livestreamState},onClick:()=>this.toggleLivestream(),icon:this.getLivestreamIcon(),disabled:this.isLoading(),label:this.t(this.getLivestreamLabel()),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"]}}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},39571:(t,e,s)=>{s.d(e,{o:()=>h,s:()=>l});var i=s(37176);const r=t=>!("isConnected"in t)||t.isConnected,a=((t,e)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...i)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(r))}),2e3),n=t=>"function"==typeof t?t():t,o=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:l,onChange:h}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=n(t);let i=new Map(Object.entries(null!=s?s:{}));const r={dispose:[],get:[],set:[],reset:[]},a=()=>{var e;i=new Map(Object.entries(null!==(e=n(t))&&void 0!==e?e:{})),r.reset.forEach((t=>t()))},l=t=>(r.get.forEach((e=>e(t))),i.get(t)),h=(t,s)=>{const a=i.get(t);e(s,a,t)&&(i.set(t,s),r.set.forEach((e=>e(t,s,a))))},c="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>l(e),ownKeys:t=>Array.from(i.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>i.has(e),set:(t,e,s)=>(h(e,s),!0)}),v=(t,e)=>(r[t].push(e),()=>{o(r[t],e)});return{state:c,get:l,set:h,on:v,onChange:(e,s)=>{const i=v("set",((t,i)=>{t===e&&s(i)})),r=v("reset",(()=>s(n(t)[e])));return()=>{i(),r()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(v("set",e.set)),e.get&&t.push(v("get",e.get)),e.reset&&t.push(v("reset",e.reset)),e.dispose&&t.push(v("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{r.dispose.forEach((t=>t())),a()},reset:a,forceUpdate:t=>{const e=i.get(t);r.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof i.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,i.a)();s&&((t,e,s)=>{const i=t.get(e);i?i.includes(s)||i.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(i.f)),a(t)},reset:()=>{t.forEach((t=>t.forEach(i.f))),a(t)}}})()),s})({})}}]);