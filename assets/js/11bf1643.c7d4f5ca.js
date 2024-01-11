"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[7508],{80410:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var a=l(85893),s=l(11151);const t={title:"Install Golang",sidebar_position:3},o="Install Golang",r={id:"golang",title:"Install Golang",description:"First of all install some required packages",source:"@site/docs/validator-setup/golang.md",sourceDirName:".",slug:"/golang",permalink:"/validator-setup/golang",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Golang",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SSH",permalink:"/validator-setup/server-setup/ssh"},next:{title:"Install and Configure Full Node",permalink:"/validator-setup/node-setup"}},i={},d=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"Manually",id:"manually",level:2},{value:"Export Golang environment variables",id:"export-golang-environment-variables",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"install-golang",children:"Install Golang"}),"\n",(0,a.jsx)(n.p,{children:"First of all install some required packages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y curl git jq make unzip\n"})}),"\n",(0,a.jsx)(n.p,{children:"You now have two methods for installing Golang."}),"\n",(0,a.jsx)(n.h2,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,a.jsx)(n.p,{children:"To install Go on Ubuntu, you can easily follow the steps provided."}),"\n",(0,a.jsx)(n.p,{children:"Add the repository"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:longsleep/golang-backports\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install Golang"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y golang-go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,a.jsx)(n.p,{children:"This method should work on all Linux systems, although it is intended for more experienced users."}),"\n",(0,a.jsxs)(n.p,{children:["Get a copy of the ",(0,a.jsx)(n.a,{href:"https://go.dev/dl/",children:"last"})," Golang version and unpack it"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ~ && \\\ncurl -OL https://golang.org/dl/goX.X.X.linux-amd64.tar.gz && \\\ntar -C ${HOME} -xvf goX.X.X.linux-amd64.tar.gz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Move the extracted go into ",(0,a.jsx)(n.code,{children:"/usr/local/lib/go"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo mv ${HOME}/go /usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.h2,{id:"export-golang-environment-variables",children:"Export Golang environment variables"}),"\n",(0,a.jsx)(n.p,{children:"Now that you've successfully installed Golang, it's essential to configure its environmental variables."}),"\n",(0,a.jsx)(n.p,{children:"Open the .bashrc file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano ${HOME}/.bashrc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Based on your installation type, set the GOROOT environment variable by choosing one of the following lines"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# For Ubuntu installation\nexport GOROOT=/usr/lib/go\n\n# For Manual installation\nexport GOROOT=/usr/local/lib/go\n"})}),"\n",(0,a.jsx)(n.p,{children:"After setting the appropriate GOROOT environment variable, you can add the following lines"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="${HOME}/.bashrc"',children:"export GOPATH=${HOME}/go\nexport GOBIN=${GOPATH}/bin\nexport PATH=${PATH}:${GOROOT}/bin:${GOBIN}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Source the file to reflect changes in the current Terminal session."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.bashrc\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);