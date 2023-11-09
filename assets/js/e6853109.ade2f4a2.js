"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[433],{39846:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=e(85893),o=e(11151);const a={title:"Edit Validator Config",description:"Modify your validator config.toml file",sidebar_position:4},l="Edit Validator Config",s={id:"tmkms/edit-val-config",title:"Edit Validator Config",description:"Modify your validator config.toml file",source:"@site/docs/validator-setup/tmkms/edit-val-config.md",sourceDirName:"tmkms",slug:"/tmkms/edit-val-config",permalink:"/validator-setup/tmkms/edit-val-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Edit Validator Config",description:"Modify your validator config.toml file",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup & Config",permalink:"/validator-setup/tmkms/setup-config"},next:{title:"Run the Validator with TMKMS",permalink:"/validator-setup/tmkms/run-tmkms-val"}},r={},d=[];function c(t){const i={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"edit-validator-config",children:"Edit Validator Config"}),"\n",(0,n.jsx)(i.p,{children:"Now we need the validator config file to use the port you selected in the tmkms.toml file."}),"\n",(0,n.jsx)(i.p,{children:"To do this open the config file"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"sudo nano $HOME/.sentinelhub/config/config.toml\n"})}),"\n",(0,n.jsx)(i.p,{children:"Set the field private validator listening address"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:"title=$HOME/.sentinelhub/config/config.toml",children:'priv_validator_laddr = "tcp://0.0.0.0:26659"\n'})}),"\n",(0,n.jsxs)(i.p,{children:["It is also recommended to comment out the ",(0,n.jsx)(i.code,{children:"priv_validator_key_file"})," line and the ",(0,n.jsx)(i.code,{children:"priv_validator_state_file"})," line:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",metastring:"title=$HOME/.sentinelhub/config/config.toml",children:'# Path to the JSON file containing the private key to use as a validator in the consensus protocol\n# priv_validator_key_file = "config/priv_validator_key.json"\n\n# Path to the JSON file containing the last sign state of a validator\n# priv_validator_state_file = "data/priv_validator_state.json"\n'})}),"\n",(0,n.jsxs)(i.admonition,{title:"Important",type:"danger",children:[(0,n.jsx)(i.p,{children:"Open port 26659 on the Validator firewall to accept incoming traffic exclusively from the TMKMS machine."}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"sudo ufw allow from tmkms_ip to validator_ip port 26659\n"})})]})]})}function p(t={}){const{wrapper:i}={...(0,o.a)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}}}]);