"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1841,5486],{5486:(e,t,n)=>{n.r(t),n.d(t,{dyte_fullscreen_toggle:()=>u});var s=n(37176),l=n(68753),c=n(74710),r=n(30099),i=n(39571);const u=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.onFullScreenchange=()=>{this.fullScreenActive=(0,r.i)()},this.toggleFullScreen=()=>{let e=this.targetElement||document.querySelector("dyte-meeting");e&&(this.fullScreenActive?((0,r.e)(),this.fullScreenActive=!1):((0,r.r)(e),this.fullScreenActive=!0),this.stateUpdate.emit({activeMoreMenu:!1}),i.s.activeMoreMenu=!1)},this.states=void 0,this.targetElement=void 0,this.variant="button",this.size=void 0,this.iconPack=l.d,this.t=(0,c.u)(),this.fullScreenActive=!1,this.isFullScreenSupported=!0}connectedCallback(){this.isFullScreenSupported=(0,r.a)(),this.onFullScreenchange(),window.addEventListener("webkitfullscreenchange",this.onFullScreenchange),window.addEventListener("fullscreenchange",this.onFullScreenchange)}disconnectedCallback(){window.removeEventListener("webkitfullscreenchange",this.onFullScreenchange),window.removeEventListener("fullscreenchange",this.onFullScreenchange)}render(){return this.isFullScreenSupported?(0,s.h)(s.H,{title:this.t("full_screen")},(0,s.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,onClick:this.toggleFullScreen,icon:this.fullScreenActive?this.iconPack.full_screen_minimize:this.iconPack.full_screen_maximize,label:this.fullScreenActive?this.t("full_screen.exit"):this.t("full_screen"),variant:this.variant})):null}};u.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},30099:(e,t,n)=>{n.d(t,{a:()=>r,e:()=>l,i:()=>c,r:()=>s});const s=e=>{null!=e&&(null!=e.requestFullscreen?e.requestFullscreen():null!=e.mozRequestFullScreen?e.mozRequestFullScreen():null!=e.webkitRequestFullscreen?e.webkitRequestFullscreen():null!=e.msRequestFullscreen&&e.msRequestFullscreen())},l=()=>{null!=document.exitFullscreen?document.exitFullscreen():null!=document.mozExitFullScreen?document.mozExitFullScreen():null!=document.webkitExitFullscreen?document.webkitExitFullscreen():null!=document.msExitFullscreen&&document.msExitFullscreen()},c=()=>null!=document.fullscreenElement||null!=document.webkitCurrentFullScreenElement,r=()=>"undefined"!=typeof document&&(document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled)},39571:(e,t,n)=>{n.d(t,{o:()=>o,s:()=>u});var s=n(37176);const l=e=>!("isConnected"in e)||e.isConnected,c=((e,t)=>{let n;return(...s)=>{n&&clearTimeout(n),n=setTimeout((()=>{n=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(l))}),2e3),r=e=>"function"==typeof e?e():e,i=(e,t)=>{const n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},{state:u,onChange:o}=((e,t)=>{const n=((e,t=((e,t)=>e!==t))=>{const n=r(e);let s=new Map(Object.entries(null!=n?n:{}));const l={dispose:[],get:[],set:[],reset:[]},c=()=>{var t;s=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),l.reset.forEach((e=>e()))},u=e=>(l.get.forEach((t=>t(e))),s.get(e)),o=(e,n)=>{const c=s.get(e);t(n,c,e)&&(s.set(e,n),l.set.forEach((t=>t(e,n,c))))},a="undefined"==typeof Proxy?{}:new Proxy(n,{get:(e,t)=>u(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,n)=>(o(t,n),!0)}),h=(e,t)=>(l[e].push(t),()=>{i(l[e],t)});return{state:a,get:u,set:o,on:h,onChange:(t,n)=>{const s=h("set",((e,s)=>{e===t&&n(s)})),l=h("reset",(()=>n(r(e)[t])));return()=>{s(),l()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{l.dispose.forEach((e=>e())),c()},reset:c,forceUpdate:e=>{const t=s.get(e);l.set.forEach((n=>n(e,t,t)))}}})(e,t);return n.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const n=(0,s.a)();n&&((e,t,n)=>{const s=e.get(t);s?s.includes(n)||s.push(n):e.set(t,[n])})(e,t,n)},set:t=>{const n=e.get(t);n&&e.set(t,n.filter(s.f)),c(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),c(e)}}})()),n})({})}}]);