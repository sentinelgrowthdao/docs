"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1784],{54780:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=r(85893),n=r(11151);const a={title:"Create New User",sidebar_position:2},i="Create New User",c={id:"server-setup/create-user",title:"Create New User",description:"Creating a new user is crucial because you should avoid managing your validator under the root user account.",source:"@site/docs/validator-setup/server-setup/create-user.md",sourceDirName:"server-setup",slug:"/server-setup/create-user",permalink:"/validator-setup/server-setup/create-user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create New User",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/validator-setup/server-setup/requirements"},next:{title:"SSH",permalink:"/validator-setup/server-setup/ssh"}},o={},u=[];function l(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"create-new-user",children:"Create New User"}),"\n",(0,t.jsxs)(s.p,{children:["Creating a new user is crucial because you should avoid managing your validator under the root user account.\nOur user will be named ",(0,t.jsx)(s.code,{children:"sentinel"}),", and you will be asked to create a new password for this user."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"adduser sentinel\n"})}),"\n",(0,t.jsx)(s.p,{children:"Grant sudo access to sentinel user. Open the sudoers file"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"nano /etc/sudoers\n"})}),"\n",(0,t.jsx)(s.p,{children:"Add the following line"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="/etc/sudoers"',children:"sentinel ALL=(ALL:ALL) ALL\n"})}),"\n",(0,t.jsx)(s.p,{children:"Switch to the newly created user"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - sentinel\n"})})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);