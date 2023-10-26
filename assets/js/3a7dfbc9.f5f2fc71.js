"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[9330],{89642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const i={title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},n="Submit Operator",s={unversionedId:"restake/submit-operator",id:"restake/submit-operator",title:"Submit Operator",description:"How to submit your operatir to the validator registry",source:"@site/docs/validator-setup/restake/submit-operator.md",sourceDirName:"restake",slug:"/restake/submit-operator",permalink:"/validator-setup/restake/submit-operator",draft:!1,editUrl:"https://github.com/sentinel-official/docs/tree/main/docs/validator-setup/restake/submit-operator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Submit Operator",description:"How to submit your operatir to the validator registry",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup & Configuration",permalink:"/validator-setup/restake/setup-config"},next:{title:"Cosmovisor",permalink:"/validator-setup/category/cosmovisor"}},l={},d=[{value:"Fork and clone the Validator Registry",id:"fork-and-clone-the-validator-registry",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"submit-operator"},"Submit Operator"),(0,o.kt)("p",null,"The REStake bot will automatically re-stake your rewards. To do this, you need to submit your operator address to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry"},"Validator Registry"),"."),(0,o.kt)("h2",{id:"fork-and-clone-the-validator-registry"},"Fork and clone the Validator Registry"),(0,o.kt)("p",null,"Update the Validator Registry to include your operator data for auto-compounding on any desired networks."),(0,o.kt)("p",null,"Fork the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eco-stake/validator-registry"},"Validator Registry")," repository."),(0,o.kt)("p",null,"Clone the Validator Registry repository fork."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<your-github-user-name>/\nrestake-validator-registry\n")),(0,o.kt)("p",null,"Create a new directory for your validator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir <your-validator-name>\ncd <your-validator-name>\n")),(0,o.kt)("p",null,"Create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano chains.json\n")),(0,o.kt)("p",null,"Add the following block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=chains.json",title:"chains.json"},'{\n  "$schema": "../chains.schema.json",\n  "name": "<your_validator_name>",\n  "chains": [\n    {\n      "name": "sentinel",\n      "address": "<your_validator_sentvaloper_address>",\n      "restake": {\n        "address": "<your_restake_operator_address>",\n        "run_time": "every 1 hour",\n        "minimum_reward": 1000000\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Create the file ",(0,o.kt)("inlineCode",{parentName:"p"},"profile.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano profile.json\n")),(0,o.kt)("p",null,"Add the following block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=profile.json",title:"profile.json"},'{\n  "$schema": "../profile.schema.json",\n  "name": "<your_validator_name>",\n  "identity": "<your_16_digit_keybase_identity>"\n}\n')),(0,o.kt)("p",null,"Push to the origin and create a pull request adding a commit message"))}m.isMDXComponent=!0}}]);