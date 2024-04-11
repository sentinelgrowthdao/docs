"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[701],{16066:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={title:"Scripts",sidebar_position:7},o="Node Scripts",c={id:"scripts",title:"Scripts",description:"Please be patient, Trinity Validator is working on this",source:"@site/docs/nodes/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/nodes/scripts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Scripts",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/nodes/tools"}},d={},l=[{value:"Instructions",id:"instructions",level:2},{value:"Script list",id:"script-list",level:2},{value:"<code>Node Status</code>",id:"node-status",level:3},{value:"<code>RPC Countries</code>",id:"rpc-countries",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"node-scripts",children:"Node Scripts"}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"note",children:(0,t.jsxs)(n.p,{children:["Please be patient, ",(0,t.jsx)(n.a,{href:"https://trinityvalidator.com",children:(0,t.jsx)(n.strong,{children:"Trinity Validator"})})," is working on this"]})}),"\n",(0,t.jsx)(n.p,{children:"This page contains simple and useful scripts for development within the Sentinel Ecosystem."}),"\n",(0,t.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the scripts below into a file and save it with a ",(0,t.jsx)(n.code,{children:".sh"})," extension."]}),"\n",(0,t.jsx)(n.p,{children:"Make the file executable by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x filename.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the file using the terminal"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./filename\n"})}),"\n",(0,t.jsx)(n.h2,{id:"script-list",children:"Script list"}),"\n",(0,t.jsx)(n.p,{children:"Explore the collection of scripts below"}),"\n",(0,t.jsx)(n.h3,{id:"node-status",children:(0,t.jsx)(n.code,{children:"Node Status"})}),"\n",(0,t.jsxs)(n.p,{children:["Provides the status of the specified ",(0,t.jsx)(n.code,{children:"sentnode"})," address."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Node Status"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="/home/${USER}/sentnode-status.sh"',children:'#!/bin/bash\n\n# Fetching the JSON data from the API\napi_response=$(curl -s https://api.sentinelgrowthdao.com/sentinel/nodes/sentnode1rx7kjsvhvklcluhu9zl6hswrau06vh3ll7gthr)\n\n# Extracting the remote URL from the JSON response\nremote_url=$(echo "$api_response" | jq -r \'.node.remote_url\')\n\n# Fetching the status from the remote URL\nstatus_response=$(curl -k "$remote_url/status" | jq \'.\')\n\necho "Status from $remote_url:"\necho "$status_response" | jq \'.\'\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"rpc-countries",children:(0,t.jsx)(n.code,{children:"RPC Countries"})}),"\n",(0,t.jsx)(n.p,{children:"Lists the countries of the RPC Nodes."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"RPC Countries"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="/home/${USER}/rpc-countries.sh"',children:'#!/bin/bash\n\n# List of addresses to iterate over\n\naddresses=("rpc.trinityvalidator.com"\n           "rpc.sentinel.co"\n           "rpc.sentinel.quokkastake.io"\n           "rpc.sentinel.chaintools.tech"\n           "sentinel.declab.pro"\n           "rpc-sentinel.whispernode.com"\n           "rpc.sentinelgrowthdao.com"\n           "sentinel-rpc.publicnode.com"\n           "rpc.dvpn.roomit.xyz"\n           "sentinel.rpc.nodeshub.online"\n           "public.stakewolle.com/cosmos/sentinel/rpc"\n           "sentinel-rpc.validatornode.com"\n           "rpc.mathnodes.com"\n           "rpc.dvpn.me"\n           "rpc-sentinel.busurnode.com/")\n\n\n# Iterate over each address\nfor address in "${addresses[@]}"; do\n    echo "Address: $address"\n    \n    # Get the IP address\n    rpc_ipv4=$(nslookup "$address" | awk \'/^Address: / { print $2 }\')\n    \n    # Get country information for the address\n    country=$(curl -s "http://ip-api.com/json/${rpc_ipv4}" | jq -r \'.country\')\n    \n    # Print the country information\n    echo "Country: $country"\n    echo ""\ndone\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);