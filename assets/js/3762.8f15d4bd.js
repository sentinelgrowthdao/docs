"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3762],{66154:(t,e,s)=>{s.r(e),s.d(e,{dyte_join_stage:()=>l,dyte_overlay_modal:()=>d});var r=s(37176),a=s(9367),i=s(68753),o=s(74710),n=s(67341),c=s(39571);const l=class{constructor(t){(0,r.r)(this,t),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.joinStage=(0,r.c)(this,"dyteJoinStage",7),this.leaveStage=(0,r.c)(this,"dyteLeaveStage",7),this.meeting=void 0,this.config=a.d,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,o.u)(),this.dataConfig={title:this.t("stage.join_title"),label:{accept:this.t("stage.join_confirm"),reject:this.t("stage.join_cancel")},description:this.t("stage.join_summary")},this.isLoading=!1}render(){var t,e,s,a;const i={meeting:this.meeting,size:this.size,states:this.states||c.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,r.h)(r.H,{class:{livestream:"LIVESTREAM"===(null===(t=this.meeting)||void 0===t?void 0:t.meta.viewType),webinar:"WEBINAR"===(null===(e=this.meeting)||void 0===e?void 0:e.meta.viewType)}},(0,r.h)("header",null,(0,r.h)("h2",null,this.dataConfig.title)),(0,r.h)(n.R,{element:"dyte-participant-setup",defaults:i,props:{participant:null===(s=this.meeting)||void 0===s?void 0:s.self,size:"md"},childProps:{participant:null===(a=this.meeting)||void 0===a?void 0:a.self,size:"md"},deepProps:!0}),(0,r.h)("div",{class:"summary"},this.dataConfig.description),(0,r.h)("div",{class:"container"},(0,r.h)("dyte-button",{variant:"secondary",onClick:()=>this.leaveStage.emit(),title:this.dataConfig.label.reject,iconPack:this.iconPack,t:this.t},this.dataConfig.label.reject),(0,r.h)("dyte-button",{onClick:()=>{this.isLoading||(this.isLoading=!0,this.joinStage.emit())},title:this.dataConfig.label.accept,iconPack:this.iconPack,t:this.t},this.isLoading?(0,r.h)("dyte-icon",{icon:this.iconPack.spinner}):this.dataConfig.label.accept)))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}:host::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host(.webinar){box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-6, 24px);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}:host(.webinar) dyte-participant-setup{display:flex;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}:host(.webinar) .container dyte-button{margin:var(--dyte-space-3, 12px);flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}:host(.webinar) header{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host(.webinar) .summary{padding:var(--dyte-space-4, 16px)}:host(.livestream){box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding:var(--dyte-space-8, 32px);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}:host(.livestream) dyte-participant-setup{display:flex;width:100%;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}:host(.livestream) .container dyte-button{flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}:host(.livestream) .container dyte-button:nth-child(1){margin-right:var(--dyte-space-1\\.5, 6px)}:host(.livestream) .container dyte-button:nth-child(2){margin-left:var(--dyte-space-1\\.5, 6px)}:host(.livestream) h2{font-size:24px;font-weight:500;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host(.livestream) .summary{margin-top:var(--dyte-space-6, 24px);margin-bottom:var(--dyte-space-6, 24px);text-align:left;font-size:14px}.deny-access{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.container{width:100%;max-width:1080px;display:flex;flex:1 1 0%;align-items:center;justify-content:space-around}header{display:flex;align-items:center;justify-content:space-between}";const d=class{constructor(t){(0,r.r)(this,t),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=i.d,this.t=(0,o.u)()}connectedCallback(){this.states.activeOverlayModal.timeout&&setTimeout((()=>{this.stateUpdate.emit({activeOverlayModal:{active:!1}}),c.s.activeOverlayModal={active:!1}}),this.states.activeOverlayModal.timeout)}componentDidLoad(){}disconnectedCallback(){}render(){return(0,r.h)(r.H,null,(0,r.h)("dyte-icon",{icon:this.states.activeOverlayModal.icon,iconPack:this.iconPack,t:this.t}),(0,r.h)("h2",null,this.states.activeOverlayModal.title),(0,r.h)("p",null,this.states.activeOverlayModal.description))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);z-index:50}dyte-icon{height:var(--dyte-space-20, 80px)}h2{margin:var(--dyte-space-2, 8px);font-weight:500}p{margin:var(--dyte-space-0, 0px);font-size:16px}"},67341:(t,e,s)=>{s.d(e,{R:()=>c,l:()=>n});var r=s(37176);const a=({element:t,size:e,states:s={},config:r={}})=>{let a=[];const i=null==r?void 0:r.root[t],o=t=>{a.push(t),"string"==typeof e&&a.push(`${t}.${e}`)};if(o(t),"object"==typeof i&&!Array.isArray(i)&&null!==i){const{state:e,states:r}=i;let a=t,n=[];if(Array.isArray(r)){n=r.filter((t=>s[t])),n.sort();for(const t of n)o(`${a}.${t}`);if(n.length>1){o([a,...n].join("."))}}if("string"==typeof e){const r=`${t}[${e}=${s[e]}]`;o(r);for(const t of n)o(`${r}.${t}`);if(n.length>1){o([r,...n].join("."))}}}return a},i=({selectors:t,root:e})=>{if(!e||!Array.isArray(t))return[];let s=[];for(const r of t){const t=e[r];if(Array.isArray(t))s=[...t];else if(t){if(t.children&&(s=[...t.children]),Array.isArray(t.remove))for(const e of t.remove)s=s.filter((t=>"string"==typeof t?t!==e:!Array.isArray(t)||t[0]!==e));if(t.addBefore)for(const[e,r]of Object.entries(t.addBefore)){const t=s.findIndex((t=>"string"==typeof t?t===e:!!Array.isArray(t)&&t[0]===e));t>=0&&s.splice(t,0,...r)}Array.isArray(t.add)&&(s=s.concat(t.add)),Array.isArray(t.prepend)&&(s=t.prepend.concat(s))}}return s},o=({elements:t,defaults:e,props:s={},deepProps:a=!1,elementProps:i={}})=>Array.isArray(t)&&0!==t.length?t.map((t=>(0,r.h)(c,{element:t,defaults:e,props:s,childProps:a&&s,elementProps:i}))):null,n=({element:t,defaults:e,props:s={},elementProps:r={}})=>{var o;const{config:n,size:c,states:l}=e;let d,p={},h=[];Array.isArray(t)?[d,p,...h]=t:d=t;const g=null===(o=null==n?void 0:n.root)||void 0===o?void 0:o[d];null!=g&&"props"in g&&(s=Object.assign(Object.assign({},g.props),s)),s=Object.assign(Object.assign({},s),p),d in r&&(s=Object.assign(Object.assign({},s),r[d]));const y=a({element:d,size:c,states:l,config:n});return i({selectors:y,root:n.root}).length},c=({element:t,defaults:e,childProps:s={},props:n={},onlyChildren:c=!1,asHost:l=!1,deepProps:d=!1,elementProps:p={}},h)=>{var g;const{config:y,size:u,states:f}=e;let b,v={},m=[];Array.isArray(t)?[b,v,...m]=t:b=t;const x=null===(g=null==y?void 0:y.root)||void 0===g?void 0:g[b];null!=x&&"props"in x&&(n=Object.assign(Object.assign({},x.props),n)),n=Object.assign(Object.assign({},n),v),b in p&&(n=Object.assign(Object.assign({},n),p[b]));const w=a({element:b,size:u,states:f,config:y}),k=i({selectors:w,root:y.root});if(c)return(0,r.h)(o,{elements:k,defaults:e,props:s,deepProps:d,elementProps:p});const j=(({selectors:t,styles:e})=>{if(!Array.isArray(t)||null==e)return{};const s={};for(const r of t){const t=e[r];null!=t&&Object.assign(s,t)}return s})({selectors:w,styles:y.styles});if(l)return(0,r.h)(r.H,Object.assign({},e,{style:j},n),(0,r.h)(o,{elements:k,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,a]=t;return(0,r.h)(s,Object.assign({},e,a))}return t})));if(["dyte-header","dyte-controlbar"].includes(b)&&(n.disableRender=!0),b.startsWith("dyte-"))return(0,r.h)(b,Object.assign({},e,{style:j},n),(0,r.h)(o,{elements:k,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,a]=t;return(0,r.h)(s,Object.assign({},e,a))}return t})));{const[t,a]=b.split("#");return(0,r.h)(t,Object.assign({id:a,style:j},n),(0,r.h)(o,{elements:k,defaults:e,props:s,deepProps:d,elementProps:p}),h,m.map((t=>{if(Array.isArray(t)){const[s,a]=t;return(0,r.h)(s,Object.assign({},e,a))}return t})))}}},39571:(t,e,s)=>{s.d(e,{o:()=>l,s:()=>c});var r=s(37176);const a=t=>!("isConnected"in t)||t.isConnected,i=((t,e)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...r)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(a))}),2e3),o=t=>"function"==typeof t?t():t,n=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:c,onChange:l}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=o(t);let r=new Map(Object.entries(null!=s?s:{}));const a={dispose:[],get:[],set:[],reset:[]},i=()=>{var e;r=new Map(Object.entries(null!==(e=o(t))&&void 0!==e?e:{})),a.reset.forEach((t=>t()))},c=t=>(a.get.forEach((e=>e(t))),r.get(t)),l=(t,s)=>{const i=r.get(t);e(s,i,t)&&(r.set(t,s),a.set.forEach((e=>e(t,s,i))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>c(e),ownKeys:t=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>r.has(e),set:(t,e,s)=>(l(e,s),!0)}),p=(t,e)=>(a[t].push(e),()=>{n(a[t],e)});return{state:d,get:c,set:l,on:p,onChange:(e,s)=>{const r=p("set",((t,r)=>{t===e&&s(r)})),a=p("reset",(()=>s(o(t)[e])));return()=>{r(),a()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(p("set",e.set)),e.get&&t.push(p("get",e.get)),e.reset&&t.push(p("reset",e.reset)),e.dispose&&t.push(p("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{a.dispose.forEach((t=>t())),i()},reset:i,forceUpdate:t=>{const e=r.get(t);a.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof r.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,r.a)();s&&((t,e,s)=>{const r=t.get(e);r?r.includes(s)||r.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(r.f)),i(t)},reset:()=>{t.forEach((t=>t.forEach(r.f))),i(t)}}})()),s})({})}}]);