"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[5214],{49868:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(85893),r=o(11151);const i={title:"Overview",description:"The importance of implementing a reliable monitoring system",sidebar_position:1},s="Monitoring Tools",a={id:"README",title:"Overview",description:"The importance of implementing a reliable monitoring system",source:"@site/docs/node-monitoring/README.md",sourceDirName:".",slug:"/",permalink:"/node-monitoring/",draft:!1,unlisted:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/node-monitoring/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",description:"The importance of implementing a reliable monitoring system",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Node Exporter",permalink:"/node-monitoring/exporters/node-exporter"}},l={},d=[{value:"Node Machine - Exporters",id:"node-machine---exporters",level:2},{value:"Monitoring Machine",id:"monitoring-machine",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"monitoring-tools",children:"Monitoring Tools"}),"\n",(0,n.jsx)(t.p,{children:"If you are running a node or a validator, it is crucial to have a reliable monitoring system in place. Without one, there is always a risk that something will break, and your node will go offline or your validator will start skipping blocks. In the best case scenario, someone may notice and let you know so that you can fix it in time. However, in the worst case scenario, the validator may skip the required number of blocks, leading to a slashing of all delegators' coins and a reputation mark (which everyone you know can see you went to jail). It is also essential to have alerting set up to make you aware of any issues or potential problems."}),"\n",(0,n.jsx)(t.p,{children:"To do this we will use popular tools in the field of monitoring and visualization of system metrics."}),"\n",(0,n.jsx)(t.h2,{id:"node-machine---exporters",children:"Node Machine - Exporters"}),"\n",(0,n.jsxs)(t.p,{children:["The first monitoring tools are called ",(0,n.jsx)(t.strong,{children:"Exporters"})," and are agents that run on each machine that is to be monitored. They collect various system-level metrics and expose them in a format that can be understood by Prometheus."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/exporters/node-exporter",children:(0,n.jsx)(t.strong,{children:"Node Exporter"})}),": it collects various system-level metrics, such as CPU usage, memory usage, disk usage, network activity, and others."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/exporters/tendermint-internal-metrics",children:(0,n.jsx)(t.strong,{children:"Tendermint Internal Metrics"})}),": it collects various system-level metrics of your validator, and can be easily enabled from your validator configuration file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/exporters/cosmos-validator-exporter",children:(0,n.jsx)(t.strong,{children:"Cosmos Validator Exporter"})}),": a Prometheus scraper designed to retrieve validator statistics from an LCD server exposed by a full node. It was created by Quokkastake, a very active community member."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/exporters/cosmos-node-exporter",children:(0,n.jsx)(t.strong,{children:"Cosmos Node Exporter"})}),": another Prometheus scraper created by Quokkastake, designed to collect other essential data for monitoring your node."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"monitoring-machine",children:"Monitoring Machine"}),"\n",(0,n.jsx)(t.p,{children:"The next two must be installed on a separated machine which is used just to monitor your node."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/prometheus",children:(0,n.jsx)(t.strong,{children:"Prometheus"})}),": a monitoring system that collects metrics from the Exporters. It stores the metrics in a time-series database and provides a powerful query language to extract and aggregate the data. Prometheus also has an alerting system that can be used to send notifications when certain thresholds are breached"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/node-monitoring/grafana",children:(0,n.jsx)(t.strong,{children:"Grafana"})}),": a visualization tool that can be used to create dashboards and charts to display the data collected by Prometheus. Grafana supports a wide range of data sources, including Prometheus, and provides a rich set of visualization options, including graphs, tables, and alerts."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"How do these tools work?"}),"\n",(0,n.jsx)(t.p,{children:"In terms of communication, the Exporters send metrics to Prometheus over HTTP. Prometheus scrapes the metrics from the Exporters on a regular interval, typically every few seconds. Once the data is collected, Prometheus stores it in its time-series database. Grafana, in turn, connects to Prometheus as a data source and queries the data using the powerful Prometheus query language. Grafana then uses this data to create beautiful visualizations that can be shared with others."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);