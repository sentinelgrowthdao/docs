"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8403],{4155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),i=t(11151);const s={title:"Tendermint Internal Metrics",sidebar_position:2},o="Tendermint Internal Metrics",a={id:"exporters/tendermint-internal-metrics",title:"Tendermint Internal Metrics",description:"Tendermint Internal Metrics can be enabled by simply editing your validator config.toml file.",source:"@site/docs/node-monitoring/exporters/tendermint-internal-metrics.md",sourceDirName:"exporters",slug:"/exporters/tendermint-internal-metrics",permalink:"/node-monitoring/exporters/tendermint-internal-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-monitoring/exporters/tendermint-internal-metrics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tendermint Internal Metrics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Node Exporter",permalink:"/node-monitoring/exporters/node-exporter"},next:{title:"Cosmos Validator Exporter",permalink:"/node-monitoring/exporters/cosmos-validator-exporter"}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tendermint-internal-metrics",children:"Tendermint Internal Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["Tendermint Internal Metrics can be enabled by simply editing your validator ",(0,r.jsx)(n.code,{children:"config.toml"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"Open your config file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /home/<your-user>/.sentinelhub/config/config.toml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Edit the followinf fields like below"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"prometheus = true\nprometheus_listen_addr = :26660\n"})}),"\n",(0,r.jsx)(n.p,{children:"Save the file and restart your validator"}),"\n",(0,r.jsxs)(n.p,{children:["You can verify that ",(0,r.jsx)(n.code,{children:"metrics"})," are being exported by cURLing the /metrics endpoint:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:26660/metrics\n"})}),"\n",(0,r.jsx)(n.p,{children:"Success! Tendermint Internal Metrics is now exposing metrics that Prometheus can scrape, including a wide variety of system metrics further down in the output."}),"\n",(0,r.jsxs)(n.admonition,{title:"Important",type:"danger",children:[(0,r.jsx)(n.p,{children:"After successfully enabling Tendermint Internal Metrics, the next step is to open port 26660 on your Validator's firewall. This port should be accessible exclusively from your monitoring machine. This action is essential to enable Prometheus to collect data from Tendermint Internal Metrics."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow from monitor_ip to validator_ip port 26660\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);