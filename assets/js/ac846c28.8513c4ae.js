"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2964],{37045:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(85893),o=i(11151);const r={title:"2 - Linux Script",sidebar_position:4},s="Linux Script",l={id:"linux-script",title:"2 - Linux Script",description:"A Linux script that provides a very easy way to spawn a Sentinel dVPN node via command line.",source:"@site/docs/node-setup/linux-script.md",sourceDirName:".",slug:"/linux-script",permalink:"/node-setup/linux-script",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"2 - Linux Script",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Run the Node",permalink:"/node-setup/manual/node-run"},next:{title:"3 - Cloudmos on Akash",permalink:"/node-setup/cloudmos-on-akash"}},d={},a=[{value:"Execution",id:"execution",level:2},{value:"What does the script do?",id:"what-does-the-script-do",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linux-script",children:"Linux Script"}),"\n",(0,t.jsxs)(n.p,{children:["A Linux script that provides a very easy way to spawn a Sentinel dVPN node via command line.\r\nIt can be found ",(0,t.jsx)(n.a,{href:"https://github.com/hoon-node/Node-Setup/blob/main/Speedrun%20Any%25.md",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,t.jsxs)(n.p,{children:["This script has been tested and run on Ubuntu 22.04 under ",(0,t.jsx)(n.code,{children:"root"})," user"]})}),"\n",(0,t.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,t.jsx)(n.p,{children:"The initial step is to execute the script:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/hoon-node/Node-Setup/main/Speedrun.sh | bash\n"})})}),"\n",(0,t.jsx)(n.p,{children:"Wou will be prompted to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select a name for your node, referred to as the ",(0,t.jsx)(n.code,{children:"Moniker"}),". The chosen name must be minimum 4 letters long."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) import an ",(0,t.jsx)(n.code,{children:"Existing Wallet"})]}),"\n",(0,t.jsxs)(n.li,{children:["Choose a ",(0,t.jsx)(n.code,{children:"Key Name"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,t.jsxs)(n.p,{children:["If you created a new wallet, make sure to save your ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Mnemonic"})})," in a safe place. Also take not of the ",(0,t.jsx)(n.code,{children:"sentnode address"})," and ",(0,t.jsx)(n.code,{children:"wallet address"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"After the installation is complete, you can modify the default minimum price."}),"\n",(0,t.jsx)(n.h2,{id:"what-does-the-script-do",children:"What does the script do?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get the official Docker installation script"}),"\n",(0,t.jsx)(n.li,{children:"Install Docker"}),"\n",(0,t.jsx)(n.li,{children:"Add user to Docker group"}),"\n",(0,t.jsx)(n.li,{children:"Create /etc/docker/daemon.json with configuration"}),"\n",(0,t.jsx)(n.li,{children:"Restart the Docker process"}),"\n",(0,t.jsx)(n.li,{children:"Install iptables-persistent package (No recommended when asked to save IP rules)"}),"\n",(0,t.jsx)(n.li,{children:"Enable NAT for the private Docker subnet on the host"}),"\n",(0,t.jsx)(n.li,{children:"Install Git package"}),"\n",(0,t.jsx)(n.li,{children:"Clone the GitHub repository"}),"\n",(0,t.jsx)(n.li,{children:"Change the working directory and checkout to the latest tag"}),"\n",(0,t.jsx)(n.li,{children:"Build the image"}),"\n",(0,t.jsx)(n.li,{children:"Install openssl package"}),"\n",(0,t.jsxs)(n.li,{children:["Initialize the application configuration ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelnode/config.toml"})]}),"\n",(0,t.jsxs)(n.li,{children:["Initialize the WireGuard configuration ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelnode/wireguard.toml"})]}),"\n",(0,t.jsxs)(n.li,{children:["Initialize the WireGuard configuration ",(0,t.jsx)(n.code,{children:"${HOME}/.sentinelnode/v2ray.toml"})]}),"\n",(0,t.jsx)(n.li,{children:"Create a self-signed TLS certificate"}),"\n",(0,t.jsx)(n.li,{children:"Move the created TLS keys"}),"\n",(0,t.jsx)(n.li,{children:"Ask you for your moniker and add it in the config.toml"}),"\n",(0,t.jsx)(n.li,{children:"Check for your IP to add it to the remote_url in the config.toml"}),"\n",(0,t.jsx)(n.li,{children:"Look for your API port and add it to the remote_url in the config.toml"}),"\n",(0,t.jsx)(n.li,{children:"Look for your Wireguard port for the starting command"}),"\n",(0,t.jsx)(n.li,{children:"Look for your v2ray port for the starting command"}),"\n",(0,t.jsx)(n.li,{children:"Ask you for your keyname and create a wallet with it"}),"\n",(0,t.jsx)(n.li,{children:"Give you an output with your seedphrase and (node)wallet"}),"\n",(0,t.jsx)(n.li,{children:"Give you an output with your starting command"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);