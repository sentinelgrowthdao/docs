"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[4563],{71363:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(74848),r=s(28453);const i={title:"Setup & Configuration",description:"A step-by-step procedure to prepare you REStake service",sidebar_position:2},a="Setup & Configuration",l={id:"restake/setup-config",title:"Setup & Configuration",description:"A step-by-step procedure to prepare you REStake service",source:"@site/docs/validator-setup/restake/setup-config.md",sourceDirName:"restake",slug:"/restake/setup-config",permalink:"/validator-setup/restake/setup-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup & Configuration",description:"A step-by-step procedure to prepare you REStake service",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/validator-setup/restake/overview"},next:{title:"Submit Operator",permalink:"/validator-setup/restake/submit-operator"}},c={},o=[{value:"Install Docker",id:"install-docker",level:2},{value:"Create a mnemonic you will use only for Restake.app",id:"create-a-mnemonic-you-will-use-only-for-restakeapp",level:2},{value:"Clone and configure Restake",id:"clone-and-configure-restake",level:2},{value:"Running the script",id:"running-the-script",level:2},{value:"Setting up a timer to run the script on a schedule",id:"setting-up-a-timer-to-run-the-script-on-a-schedule",level:2},{value:"Create a systemd unit file",id:"create-a-systemd-unit-file",level:3},{value:"Create a systemd timer file",id:"create-a-systemd-timer-file",level:3},{value:"Enable and start the 2 created services",id:"enable-and-start-the-2-created-services",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup--configuration",children:"Setup & Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"install-docker",children:"Install Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Install Docker Engine from official ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/",children:"site"})]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-mnemonic-you-will-use-only-for-restakeapp",children:"Create a mnemonic you will use only for Restake.app"}),"\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.code,{children:"Sentinel CLI"})," from ",(0,t.jsx)(n.a,{href:"https://github.com/sentinel-official/cli-client/releases",children:"here"})," and install it by typing:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/sentinel-official/cli-client/releases/download/v0.X.X/sentinelcli_linux_x86_64.tar.gz\ntar xvzf sentinelcli_linux_x86_64.tar.gz\nsudo mv ${HOME}/sentinelcli /usr/local/bin\n"})}),"\n",(0,t.jsx)(n.p,{children:"To create a mnemonic type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelcli keys add keyname\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a passphrase and take note of both mnemonic and operator address (also make sure to ",(0,t.jsx)(n.strong,{children:"add funds"})," into it)"]}),"\n",(0,t.jsx)(n.h2,{id:"clone-and-configure-restake",children:"Clone and configure Restake"}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository and copy the sample .env file ready for your mnemonic"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/eco-stake/restake.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Go into Restake directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd restake\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create your ",(0,t.jsx)(n.code,{children:".env"})," file from the sample ",(0,t.jsx)(n.code,{children:".env.sample"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp .env.sample .env\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano .env\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add your mnemonic:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"MNEMONIC=my hot wallet seed words here that has minimal funds\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"Dockerfile"})," and if the node version is not the last, update it manually (I put 20 instead 18)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano Dockerfile\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pre-build your Docker containers with the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose run --rm app npm install\ndocker compose build --no-cache\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Go into ",(0,t.jsx)(n.code,{children:"src"})," directory"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd src/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create your ",(0,t.jsx)(n.code,{children:".networks.local.json"})," file from the sample .networks.local.json.sample and open it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp networks.local.json.sample networks.local.json\nsudo nano networks.local.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace the file with this code block and, on ",(0,t.jsx)(n.code,{children:"restUrl"})," field, select your desired one from ",(0,t.jsx)(n.a,{href:"https://cosmos.directory/sentinel/nodes",children:"here"})," and click on REST tab:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title=".networks.local.json"',children:'{\n  "sentinel": {\n    "prettyName": "Sentinel 881",\n    "restUrl": [\n      "https://api.sentinel.quokkastake.io:443" \n    ],\n    "autostake": {\n      "correctSlip44": false\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"running-the-script",children:"Running the script"}),"\n",(0,t.jsx)(n.p,{children:"Run this command adding as last word sentinel which is the network we are going to enable"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo docker compose run --rm app npm run autostake sentinel\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see something like that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"> restake@0.1.0 autostake\n> node scripts/autostake.mjs sentinel\n\n[09:30:19.711] \u269b\n[09:30:20.268] Loaded Sentinel 881\n[09:30:20.458] Bot address is sent1eyhgvkqu48luluafpfn4myg5jr04g6zje9zkkf\n[09:30:20.459] Not an operator\n[09:30:20.460] Autostake finished\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The message ",(0,t.jsx)(n.code,{children:'"Not an Operator"'})," is fine as we have to submit our operator to Chain Registry"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-a-timer-to-run-the-script-on-a-schedule",children:"Setting up a timer to run the script on a schedule"}),"\n",(0,t.jsx)(n.p,{children:"You should setup your script to run at the same time each day. We will use the methos based on systemd-timer which allows to run a one-off service with specified rules. This method is arguably preferable to crontab, which we will not cover."}),"\n",(0,t.jsx)(n.h3,{id:"create-a-systemd-unit-file",children:"Create a systemd unit file"}),"\n",(0,t.jsxs)(n.p,{children:["The unit file describes the application to run. We define a dependency with the timer with the Wants statement.\nCreate the ",(0,t.jsx)(n.code,{children:"restake.service"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/restake.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add the following code block"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"restake.service"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/restake.service"',children:"[Unit]\nDescription=restake service with docker compose\nRequires=docker.service\nAfter=docker.service\nWants=restake.timer\n\n[Service]\nType=oneshot\nWorkingDirectory=/home/trinity/restake\nExecStart=/usr/bin/docker compose run --rm app npm run autostake sentinel\n\n[Install]\nWantedBy=multi-user.target\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-systemd-timer-file",children:"Create a systemd timer file"}),"\n",(0,t.jsxs)(n.p,{children:["The timer file defines the rules for running the restake service every hour. All rules are described in the ",(0,t.jsx)(n.a,{href:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html",children:"systemd documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Create the ",(0,t.jsx)(n.code,{children:"restake.timer"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/restake.timer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add the following code block"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"restake.timer"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="/etc/systemd/system/restake.timer"',children:"[Unit]\nDescription=Restake bot timer\n\n[Timer]\nAccuracySec=1min\nOnCalendar=*-*-* *:00:00\n\n[Install]\nWantedBy=timers.target\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"enable-and-start-the-2-created-services",children:"Enable and start the 2 created services"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable restake.service\nsudo systemctl enable restake.timer\nsudo systemctl start restake.timer\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check the restake.timer status"})}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"systemctl"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status restake.timer\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or with ",(0,t.jsx)(n.code,{children:"journalctl"})," in real time:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u restake.service -f --output=cat\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see something like that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u25cf restake.timer - Restake bot timer\n     Loaded: loaded (/etc/systemd/system/restake.timer; enabled; vendor preset: enabled)\n     Active: active (waiting) since Thu 2023-07-13 12:24:40 UTC; 4min 19s ago\n    Trigger: Thu 2023-07-13 13:00:00 UTC; 30min left\n   Triggers: \u25cf restake.service\n\nJul 13 12:24:40 trinity-management systemd[1]: Started Restake bot timer.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check the restake.service status"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status restake.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see something like that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u25cf restake.service - restake service with docker compose\n     Loaded: loaded (/etc/systemd/system/restake.service; enabled; vendor preset: enabled)\n     Active: inactive (dead)\nTriggeredBy: \u25cf restake.timer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you are ready to submit your operator to Restake.app"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);