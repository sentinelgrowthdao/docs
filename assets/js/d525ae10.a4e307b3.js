"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2871],{91990:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const s={title:"Grafana",description:"A tool used for visualizing and analyzing metrics",sidebar_position:4},i="Grafana",l={unversionedId:"monitoring/grafana",id:"monitoring/grafana",title:"Grafana",description:"A tool used for visualizing and analyzing metrics",source:"@site/docs/validator-setup/monitoring/grafana.md",sourceDirName:"monitoring",slug:"/monitoring/grafana",permalink:"/validator-setup/monitoring/grafana",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/monitoring/grafana.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Grafana",description:"A tool used for visualizing and analyzing metrics",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/validator-setup/monitoring/prometheus"},next:{title:"REStake App Setup",permalink:"/validator-setup/category/restake-app-setup"}},o={},u=[{value:"Download &amp; Installation",id:"download--installation",level:2},{value:"Add a system unit file",id:"add-a-system-unit-file",level:2},{value:"Start Grafana service",id:"start-grafana-service",level:2}],d={toc:u},p="wrapper";function c(a){let{components:e,...t}=a;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grafana"},"Grafana"),(0,r.kt)("h2",{id:"download--installation"},"Download & Installation"),(0,r.kt)("p",null,"On your monitoring machine, download and unpack Prometheus (check the last version ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"here"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.4.3.linux-amd64.tar.gz\ntar -zxvf grafana-enterprise-9.4.3.linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"Rename the folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv grafana-enterprise-9.4.3.linux-amd64 grafana\n")),(0,r.kt)("h2",{id:"add-a-system-unit-file"},"Add a system unit file"),(0,r.kt)("p",null,"Open the .service with a text editor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/grafana.service\n")),(0,r.kt)("p",null,"Paste the below text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=/etc/systemd/system/grafana.service",title:"/etc/systemd/system/grafana.service"},"[Unit]\nDescription=Grafana\nAfter=network-online.target\n\n[Service]\nUser=youruser #modify this field with your user\nTimeoutStartSec=0\nCPUWeight=95\nIOWeight=95\nWorkingDirectory=/home/youruser/grafana\nExecStart=/home/youruser/grafana/bin/grafana-server web --config.file=/home/youruser/grafana/conf/default.ini\nRestart=always\nRestartSec=2\nLimitNOFILE=800000\nKillSignal=SIGTERM\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Reload the systemd Daemon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,r.kt)("p",null,"Enable autostart of Grafana service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable grafana.service\n")),(0,r.kt)("h2",{id:"start-grafana-service"},"Start Grafana service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start grafana.service\n")),(0,r.kt)("p",null,"Use this command to check logs in real time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u grafana.service -f\n")),(0,r.kt)("p",null,"If you are running Grafana on a VPS and want to access the web UI via an external browser, you need to first enable port 3000 on ufw:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 3000/tcp\n")),(0,r.kt)("p",null,"You can now type this address into your browser"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://grafana_ip:3000\n")))}c.isMDXComponent=!0}}]);