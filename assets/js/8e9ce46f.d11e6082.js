"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[273],{10076:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(85893),i=n(11151);const r={title:"Rest Endpoints",sidebar_position:4},a=void 0,o={id:"interact-rest",title:"Rest Endpoints",description:"Using the REST Endpoints",source:"@site/docs/apis/interact-rest.mdx",sourceDirName:".",slug:"/interact-rest",permalink:"/apis/interact-rest",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Rest Endpoints",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"gRPC Go",permalink:"/apis/grpc/interact-grpc-go"},next:{title:"Javascript",permalink:"/apis/interact-javascript"}},l={},c=[{value:"Using the REST Endpoints",id:"using-the-rest-endpoints",level:2},{value:"Query for historical state using REST",id:"query-for-historical-state-using-rest",level:3},{value:"Cross-Origin Resource Sharing (CORS)",id:"cross-origin-resource-sharing-cors",level:3},{value:"Setting up a public rest server",id:"setting-up-a-public-rest-server",level:3},{value:"Signing transactions",id:"signing-transactions",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"using-the-rest-endpoints",children:"Using the REST Endpoints"}),"\n",(0,t.jsxs)(s.p,{children:["All gRPC services on the Cosmos SDK  and Sentinel are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the ",(0,t.jsx)(s.code,{children:"cosmos.bank.v1beta1.Query/AllBalances"})," method is ",(0,t.jsx)(s.code,{children:"GET /cosmos/bank/v1beta1/balances/{address}"}),". Request arguments are passed as query parameters."]}),"\n",(0,t.jsxs)(s.p,{children:["As a concrete example, the ",(0,t.jsx)(s.code,{children:"curl"})," command to make balances request is:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    https://lcd.sentinel.co/cosmos/bank/v1beta1/balances/<your_address>\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at ",(0,t.jsx)(s.code,{children:"localhost:1317/swagger"}),". Make sure that the ",(0,t.jsx)(s.code,{children:"api.swagger"})," field is set to true in your ",(0,t.jsx)(s.code,{children:"app.toml"})," file."]}),"\n",(0,t.jsx)(s.h3,{id:"query-for-historical-state-using-rest",children:"Query for historical state using REST"}),"\n",(0,t.jsxs)(s.p,{children:["Querying for historical state is done using the HTTP header ",(0,t.jsx)(s.code,{children:"x-cosmos-block-height"}),". For example, a curl command would look like:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl \\\n    -X GET \\\n    -H "Content-Type: application/json" \\\n    -H "x-cosmos-block-height: 13000000"\n    http://localhost:1317/cosmos/bank/v1beta1/balances/<your_validator>\n'})}),"\n",(0,t.jsx)(s.p,{children:"Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response."}),"\n",(0,t.jsx)(s.h3,{id:"cross-origin-resource-sharing-cors",children:"Cross-Origin Resource Sharing (CORS)"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS policies"})," are not enabled by default to help with security."]}),"\n",(0,t.jsx)(s.h3,{id:"setting-up-a-public-rest-server",children:"Setting up a public rest server"}),"\n",(0,t.jsx)(s.p,{children:"If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy. We can share our Terraform infrastructurefor setting up rest servers in DigitalOcean. We will write a guide soon and publish a repo soon. In the meantime feel free to reachout in Discord. s"}),"\n",(0,t.jsxs)(s.p,{children:["For testing and development purposes there is an ",(0,t.jsx)(s.code,{children:"enabled-unsafe-cors"})," field inside ",(0,t.jsx)(s.code,{children:"app.toml"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"signing-transactions",children:"Signing transactions"}),"\n",(0,t.jsxs)(s.p,{children:["Sending transactions using gRPC and REST requires some additional steps: generating the transaction, signing it, and finally broadcasting it. Read about ",(0,t.jsx)(s.a,{href:"https://docs.cosmos.network/v0.46/run-node/txs.html",children:"generating and signing transactions"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);