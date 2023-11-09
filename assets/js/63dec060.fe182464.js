"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[1582],{11085:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=a(85893),s=a(11151);const t={title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",sidebar_position:3},l="Install Docker",o={id:"manual/docker-setup",title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",source:"@site/docs/node-setup/manual/docker-setup.md",sourceDirName:"manual",slug:"/manual/docker-setup",permalink:"/node-setup/manual/docker-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Install Docker",description:"Sentinel dVPN requires Docker to be installed",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Preliminary Operations",permalink:"/node-setup/manual/preliminary"},next:{title:"Preparing Sentinel Docker image",permalink:"/node-setup/manual/docker-image"}},i={},c=[{value:"Install Portainer (optional)",id:"install-portainer-optional",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"install-docker",children:"Install Docker"}),"\n",(0,r.jsx)(n.p,{children:"Install dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install --yes curl git openssl\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get the official Docker installation script"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -fsSL get.docker.com -o ${HOME}/get-docker.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo sh ${HOME}/get-docker.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enable Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable --now docker\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add user to Docker group"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $(whoami)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Execute the final command to apply the changes (similar to logging in again)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo -i -u $(whoami)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-portainer-optional",children:"Install Portainer (optional)"}),"\n",(0,r.jsxs)(n.p,{children:["If you want a nice graphic view to manager your Node container, you can install ",(0,r.jsx)(n.a,{href:"https://docs.portainer.io/start/install-ce/server/docker/linux",children:"Portainer"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker volume create portainer_data\ndocker run -d -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"https://localhost:9443\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);