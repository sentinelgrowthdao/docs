"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9608],{93944:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=i(85893),t=i(11151);const l={title:"Build",sidebar_position:2},o="Build the Source Code",r={id:"build",title:"Build",description:"To compile the source code of Sentinel Hun into a binary, two essential steps are necessary: installing Go and executing the build process.",source:"@site/docs/sentinel-core/build.md",sourceDirName:".",slug:"/build",permalink:"/sentinel-core/build",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Build",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/sentinel-core/"},next:{title:"Commands",permalink:"/sentinel-core/commands"}},d={},c=[{value:"Install Go",id:"install-go",level:2},{value:"Build Sentinel",id:"build-sentinel",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"build-the-source-code",children:"Build the Source Code"}),"\n",(0,s.jsx)(n.p,{children:"To compile the source code of Sentinel Hun into a binary, two essential steps are necessary: installing Go and executing the build process."}),"\n",(0,s.jsx)(n.h2,{id:"install-go",children:"Install Go"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.a,{href:"https://go.dev/doc/install",children:"Go"})," by following instructions there."]}),"\n",(0,s.jsxs)(n.p,{children:["Verify the installation by typing ",(0,s.jsx)(n.code,{children:"go version"})," in your terminal."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should receive this output: ",(0,s.jsx)(n.code,{children:"go version go1.xx.x darwin/amd64"})]}),"\n",(0,s.jsx)(n.h2,{id:"build-sentinel",children:"Build Sentinel"}),"\n",(0,s.jsxs)(n.p,{children:["In order to build Sentinel you need the source code. Either ",(0,s.jsx)(n.a,{href:"https://github.com/sentinel-official/hub/releases",children:"download the source of a release"})," or ",(0,s.jsx)(n.a,{href:"https://github.com/sentinel-official/hub.git",children:"clone the git repository"})," and make sure you always download the ",(0,s.jsx)(n.strong,{children:"latest version"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Build Sentinel from the source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/sentinel-official/hub.git "${HOME}/sentinelhub"\ncd "${HOME}/sentinelhub"\ngit checkout v0.11.3 # always make sure it\'s the latest version\nmake install\nsudo ln -s "${GOBIN}/sentinelhub" /usr/local/bin/sentinelhub\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After building, you should see a new executable file ",(0,s.jsx)(n.code,{children:"/usr/local/bin/sentinelhub"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);