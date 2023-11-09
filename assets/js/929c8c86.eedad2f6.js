"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[2909],{10413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(85893),a=i(11151);const t={title:"Basic Commands",description:"some useful commands and explain their outputs",sidebar_position:7},o="Basic Commands",l={id:"basic-cmd",title:"Basic Commands",description:"some useful commands and explain their outputs",source:"@site/docs/validator-setup/basic-cmd.md",sourceDirName:".",slug:"/basic-cmd",permalink:"/validator-setup/basic-cmd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Basic Commands",description:"some useful commands and explain their outputs",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Become a Validator",permalink:"/validator-setup/validator-tx"},next:{title:"Free Up Space with State Sync",permalink:"/validator-setup/state-sync"}},r={},d=[{value:"Slashing params list",id:"slashing-params-list",level:2},{value:"Signing result",id:"signing-result",level:2},{value:"Info about your validator and synchronization",id:"info-about-your-validator-and-synchronization",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"basic-commands",children:"Basic Commands"}),"\n",(0,s.jsx)(n.h2,{id:"slashing-params-list",children:"Slashing params list"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sentinelhub q slashing params\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output looks like"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'downtime_jail_duration: 600s\nmin_signed_per_window: "0.050000000000000000"\nsigned_blocks_window: "10000"\nslash_fraction_double_sign: "0.050000000000000000"\nslash_fraction_downtime: "0.000100000000000000"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Basically it explain the rules not to get jailed"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There is a window of 10k blocks (signed_blocks_window)."}),"\n",(0,s.jsx)(n.li,{children:"Any validator needs to sign 5% (min_signed_per_window) of the blocks in this window (i.e., 500 blocks within any 10k blocks window)."}),"\n",(0,s.jsx)(n.li,{children:"If the percentage of signed blocks falls below 5, the validator is jailed for downtime."}),"\n",(0,s.jsx)(n.li,{children:"If a validator is jailed for downtime, they are slashed 0.01% (slash_fraction_downtime) of their stake and can be unjailed after 10 minutes (downtime_jail_duration)."}),"\n",(0,s.jsx)(n.li,{children:"If a validator is jailed for a double sign, they are slashed 5% (slash_fraction_double_sign) and cannot unjail ever."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"signing-result",children:"Signing result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sentinelhub q slashing signing-info $(sentinelhub tendermint show-validator)\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will get something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'address: sentvalcons1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nindex_offset: "11513"\njailed_until: "1970-01-01T00:00:00Z" #(if different from this, means you are jailed)\nmissed_blocks_counter: "5" #how many blocks you skipped within the 10k blocks window\nstart_height: "9982764"\ntombstoned: false #if true, means you double signed\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Please note that if you use TMKMS with our priv_validator_key.json (as described in ",(0,s.jsx)(n.a,{href:"https://p4privacy.gitbook.io/tmkms-guide-for-sentinel-validator/",children:"this guide"}),") on a different machine and have subsequently removed it from your validator machine, the above command will not work."]}),"\n",(0,s.jsx)(n.h2,{id:"info-about-your-validator-and-synchronization",children:"Info about your validator and synchronization"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl localhost:26657/status\n"})}),"\n",(0,s.jsx)(n.p,{children:"When you receive the output, check the following fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sync_info.catching_up #if true, it means your node is not synced and therefore it will not sign blocks until it catches up with the rest of the chain\nsync_info.latest_block_time #the value should be close to the current time. If it's not, that means your node is also out of sync and won't be able to sign blocks (or the chain has halted).\nvalidator_info.voting_power #If the value is 0, this node is not an active validator, either because you are not in the active set, or because you are jailed, or because the priv_validator_key does not match the validator key\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);