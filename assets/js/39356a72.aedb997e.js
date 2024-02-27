"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5834],{77544:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>r,frontMatter:()=>h,metadata:()=>a,toc:()=>l});var n=t(85893),i=t(11151);const h={title:"Health Check",sidebar_position:4},o="Node Health Check",a={id:"health-check",title:"Health Check",description:"To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the Node Health Check.",source:"@site/docs/nodes/health-check.md",sourceDirName:".",slug:"/health-check",permalink:"/nodes/health-check",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Health Check",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Earnings",permalink:"/nodes/earnings"},next:{title:"Node Stats",permalink:"/nodes/stats"}},d={},l=[{value:"How can I verify that my node has successfully passed the Health Check?",id:"how-can-i-verify-that-my-node-has-successfully-passed-the-health-check",level:2},{value:"1 - Node Dashboard",id:"1---node-dashboard",level:3},{value:"2 - Busurnode Website",id:"2---busurnode-website",level:3},{value:"3 - Manual Check via API",id:"3---manual-check-via-api",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"node-health-check",children:"Node Health Check"}),"\n",(0,n.jsxs)(s.p,{children:["To be added into the Subscription Plan and consequently be eligible to Node Revenue System, the node is required to pass the ",(0,n.jsx)(s.code,{children:"Node Health Check"}),".\nThis check occurs multiple times a day and will test:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"the node endpoint"}),"\n",(0,n.jsx)(s.li,{children:"the node configuration"}),"\n",(0,n.jsx)(s.li,{children:"the node hourly price (4.16 DVPN for datacenters and 13.7 DVPN for residentials nodes)"}),"\n",(0,n.jsx)(s.li,{children:"the node connectivity"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"By implementing this process, the Subscription Plan ensures a continuous assessment, allowing for the addition of new nodes and the removal of problematic ones that require corrective measures."}),"\n",(0,n.jsx)(s.h2,{id:"how-can-i-verify-that-my-node-has-successfully-passed-the-health-check",children:"How can I verify that my node has successfully passed the Health Check?"}),"\n",(0,n.jsx)(s.p,{children:"You have three methods to verify whether your node has successfully passed the Health Check."}),"\n",(0,n.jsx)(s.h3,{id:"1---node-dashboard",children:"1 - Node Dashboard"}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.a,{href:"https://nodes.sentinel.co",children:"Node Dashboard"})," each node features an indicator on the page, clearly indicating whether it has successfully passed the health check or not. Simply paste your ",(0,n.jsx)(s.code,{children:"sentnode"})," address into the search bar. Furthermore, an alert system will be implemented to promptly notify node operators in the event that their node fails a health check, providing them with timely and actionable information."]}),"\n",(0,n.jsx)(s.h3,{id:"2---busurnode-website",children:"2 - Busurnode Website"}),"\n",(0,n.jsxs)(s.p,{children:["Navigate to xplore the ",(0,n.jsx)(s.a,{href:"https://sentinel.busurnode.com/",children:"Busurnode Website"})," to access comprehensive statistics for both individual nodes and the entire network."]}),"\n",(0,n.jsx)(s.h3,{id:"3---manual-check-via-api",children:"3 - Manual Check via API"}),"\n",(0,n.jsxs)(s.p,{children:["To verify your Health Check status paste the following link into your browser: ",(0,n.jsx)(s.code,{children:"https://api.health.sentinel.co/v1/records/<your_sent_node_address>"})]}),"\n",(0,n.jsxs)(s.p,{children:["For a comprehensive list of nodes, you can also explore the ",(0,n.jsx)(s.a,{href:"https://api.health.sentinel.co/v1/records",children:"API Records"})," main page"]}),"\n",(0,n.jsx)(s.p,{children:"Ensure the following fields meet the specified conditions:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ok"})," must be true"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"status"})," must be 1"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"info_fetch_timestamp"})," should not be a zero timestamp"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"config_exchange_timestamp"})," should not be a timestamp"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"location_fetch_timestamp"})," should not be a zero timestamp"]}),"\n"]})]})}function r(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);