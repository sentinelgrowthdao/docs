"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9607],{44209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(85893),i=n(11151);const s={title:"Certbot",sidebar_position:9},a="Certbot",o={id:"certbot",title:"Certbot",description:"Certbot is specifically used for obtaining and renewing SSL/TLS certificates for websites. SSL/TLS certificates are cryptographic certificates that enable the encryption of data transmitted between a web server and a user's web browser, preventing eavesdropping, data tampering, and other security threats. Below the required steps.",source:"@site/docs/full-node-setup/certbot.md",sourceDirName:".",slug:"/certbot",permalink:"/full-node-setup/certbot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Certbot",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"NGINX",permalink:"/full-node-setup/nginx"},next:{title:"Add RPC to Chain Registry",permalink:"/full-node-setup/chain-registry"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"certbot",children:"Certbot"}),"\n",(0,r.jsx)(t.p,{children:"Certbot is specifically used for obtaining and renewing SSL/TLS certificates for websites. SSL/TLS certificates are cryptographic certificates that enable the encryption of data transmitted between a web server and a user's web browser, preventing eavesdropping, data tampering, and other security threats. Below the required steps."}),"\n",(0,r.jsx)(t.p,{children:"Install Certbot tool"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo apt install certbot\n"})}),"\n",(0,r.jsx)(t.p,{children:"Enable port 80 and 443 on your firewall"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\n"})}),"\n",(0,r.jsx)(t.p,{children:"Generate a SSL Certificate"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo certbot certonly -d rpc.sentinel.mynodename.com,api.sentinel.mynodename.com\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will be prompted to follow some steps."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['When asked "How would you like to authenticate with the ACME CA?", select ',(0,r.jsx)(t.code,{children:"Spin up a temporary webserver (standalone)"})]}),"\n",(0,r.jsx)(t.li,{children:'On "Enter email address (used for urgent renewal and security notices)" insert your email. By doing so, you will receive notifications when the certificate needs to be renewed'}),"\n",(0,r.jsx)(t.li,{children:'Accept "Terms of Service"'}),"\n",(0,r.jsx)(t.li,{children:"Choose whether to share your email address with EFF or not"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If everything goes well, the certificate will be generated, and you will receive a message similar to this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Congratulations! Your certificate and chain have been saved at:\n/etc/letsencrypt/live/rpc.sentinel.mynodename.com/fullchain.pem\nYour key file has been saved at:\n/etc/letsencrypt/live/rpc.sentinel.mynodename.com/privkey.pem\nYour certificate will expire on EXPIRATION DATE. To obtain a new or\ntweaked version of this certificate in the future, simply run\ncertbot again. To non-interactively renew *all* of your\ncertificates, run "certbot renew"\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);