"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[8589],{33864:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(85893),i=s(11151);const a={title:"Commands",sidebar_position:3},o="Commands",l={id:"commands",title:"Commands",description:"This section describes the commands available from sentinelhub, the command line interface that connects a running sentinelhub process.",source:"@site/docs/sentinel-core/commands.md",sourceDirName:".",slug:"/commands",permalink:"/sentinel-core/commands",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Commands",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/sentinel-core/build"},next:{title:"Key Management",permalink:"/sentinel-core/category/key-management"}},r={},d=[{value:"<code>add-genesis-account</code>",id:"add-genesis-account",level:3},{value:"<code>collect-gentxs</code>",id:"collect-gentxs",level:3},{value:"<code>config</code>",id:"config",level:3},{value:"This is the output of <code>sentinelhub config</code>",id:"this-is-the-output-of-sentinelhub-config",level:4},{value:"<code>debug</code>",id:"debug",level:3},{value:"This is the output of <code>sentinelhub debug</code>",id:"this-is-the-output-of-sentinelhub-debug",level:4},{value:"<code>export</code>",id:"export",level:3},{value:"<code>gentx</code>",id:"gentx",level:3},{value:"<code>help</code>",id:"help",level:3},{value:"<code>init</code>",id:"init",level:3},{value:"<code>keys</code>",id:"keys",level:3},{value:"This is the output of <code>sentinelhub keys</code>",id:"this-is-the-output-of-sentinelhub-keys",level:4},{value:"<code>query</code>",id:"query",level:3},{value:"This is the output of <code>sentinelhub query</code>",id:"this-is-the-output-of-sentinelhub-query",level:4},{value:"<code>rollback</code>",id:"rollback",level:3},{value:"<code>start</code>",id:"start",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"This is the output of <code>sentinelhub status</code>",id:"this-is-the-output-of-sentinelhub-status",level:4},{value:"<code>tendermint</code>",id:"tendermint",level:3},{value:"This is the output of <code>sentinelhub tendermint</code>",id:"this-is-the-output-of-sentinelhub-tendermint",level:4},{value:"<code>tx</code>",id:"tx",level:3},{value:"This is the output of <code>sentinelhub tx</code>",id:"this-is-the-output-of-sentinelhub-tx",level:4},{value:"<code>validate-genesis</code>",id:"validate-genesis",level:3},{value:"<code>version</code>",id:"version",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"commands",children:"Commands"}),"\n",(0,t.jsxs)(n.p,{children:["This section describes the commands available from ",(0,t.jsx)(n.code,{children:"sentinelhub"}),", the command line interface that connects a running ",(0,t.jsx)(n.code,{children:"sentinelhub"})," process."]}),"\n",(0,t.jsx)(n.h3,{id:"add-genesis-account",children:(0,t.jsx)(n.code,{children:"add-genesis-account"})}),"\n",(0,t.jsxs)(n.p,{children:["Add a genesis account to ",(0,t.jsx)(n.code,{children:"genesis.json"}),". The provided account must specify\nthe account address or key name and a list of initial coins. If a key name is given,\nthe address will be looked up in the local Keybase. The list of initial tokens must\ncontain valid denominations. Accounts may optionally be supplied with vesting parameters."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub add-genesis-account [address_or_key_name] [coin][,[coin]] [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"collect-gentxs",children:(0,t.jsx)(n.code,{children:"collect-gentxs"})}),"\n",(0,t.jsxs)(n.p,{children:["Collects genesis transactions and outputs them to ",(0,t.jsx)(n.code,{children:"genesis.json"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub collect-gentxs [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"config",children:(0,t.jsx)(n.code,{children:"config"})}),"\n",(0,t.jsx)(n.p,{children:"Create or query an application CLI configuration file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub config <key> [value] [flags]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Output"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-config",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub config"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"chain-id": "",\n\t"keyring-backend": "os",\n\t"output": "text",\n\t"node": "tcp://localhost:26657",\n\t"broadcast-mode": "sync"\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"debug",children:(0,t.jsx)(n.code,{children:"debug"})}),"\n",(0,t.jsx)(n.p,{children:"Tool for helping with debugging your application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub debug [flags]\nsentinelhub debug [subcommand]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available subcommands"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-debug",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub debug"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"addr        Convert an address between hex and bech32\npubkey      Decode a pubkey from proto JSON\nraw-bytes   Convert raw bytes output (eg. [10 21 13 255]) to hex\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"export",children:(0,t.jsx)(n.code,{children:"export"})}),"\n",(0,t.jsx)(n.p,{children:"Exports the state to JSON."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub export [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"gentx",children:(0,t.jsx)(n.code,{children:"gentx"})}),"\n",(0,t.jsxs)(n.p,{children:["Generate a genesis transaction that creates a validator with a self-delegation,\nthat is signed by the key in the Keyring referenced by a given name. A node ID and Bech32 consensus\npubkey may optionally be provided. If they are omitted, they will be retrieved from the ",(0,t.jsx)(n.code,{children:"priv_validator.json"}),"\nfile."]}),"\n",(0,t.jsx)(n.p,{children:"The following default parameters are included:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"delegation amount:           100000000stake\ncommission rate:             0.1\ncommission max rate:         0.2\ncommission max change rate:  0.01\nminimum self delegation:     1\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub gentx [key_name] [amount][denom] [flags]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sentinelhub gentx my-key-name 1000000udvpn --home=/path/to/home/dir --keyring-backend=os --chain-id=sentinelhub-2 \\\n   --moniker="myValidator" \\\n   --commission-max-change-rate=0.01 \\\n   --commission-max-rate=1.0 \\\n   --commission-rate=0.07 \\\n   --details="..." \\\n   --security-contact="..." \\\n   --website="..."\n'})}),"\n",(0,t.jsx)(n.h3,{id:"help",children:(0,t.jsx)(n.code,{children:"help"})}),"\n",(0,t.jsx)(n.p,{children:"Help provides help for any command in the application.\nSimply type sentinelhub help [path to command] for full details."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub help [command] [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"init",children:(0,t.jsx)(n.code,{children:"init"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize validators's and node's configuration files"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub init [moniker] [flags]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub init my-node\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keys",children:(0,t.jsx)(n.code,{children:"keys"})}),"\n",(0,t.jsx)(n.p,{children:"Keyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key."}),"\n",(0,t.jsx)(n.p,{children:"The keyring supports the following backends:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"os       Uses the operating system's default credentials store.\nfile     Uses encrypted file-based keystore within the app's configuration directory.\n         This keyring will request a password each time it is accessed, which may occur\n         multiple times in a single command resulting in repeated password prompts.\nkwallet  Uses KDE Wallet Manager as a credentials management application.\npass     Uses the pass command line utility to store and retrieve keys.\ntest     Stores keys insecurely to disk. It does not prompt for a password to be unlocked\n         and it should be use only for testing purposes.\n"})}),"\n",(0,t.jsx)(n.p,{children:"kwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["KWallet     ",(0,t.jsx)(n.a,{href:"https://github.com/KDE/kwallet",children:"https://github.com/KDE/kwallet"})]}),"\n",(0,t.jsxs)(n.li,{children:["pass        ",(0,t.jsx)(n.a,{href:"https://www.passwordstore.org/",children:"https://www.passwordstore.org/"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The pass backend requires GnuPG: ",(0,t.jsx)(n.a,{href:"https://gnupg.org/",children:"https://gnupg.org/"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub keys [command]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available subcommands"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-keys",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub keys"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file\ndelete      Delete the given keys\nexport      Export private keys\nimport      Import private keys into the local keybase\nlist        List all keys\nmigrate     Migrate keys from the legacy (db-based) Keybase\nmnemonic    Compute the bip39 mnemonic for some input entropy\nparse       Parse address from hex to bech32 and vice versa\nshow        Retrieve key information by name or address\n"})})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more detailed usage instructions for keys, please refer to the related section ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/sentinel-core/category/key-management",children:"here"})})]})}),"\n",(0,t.jsx)(n.h3,{id:"query",children:(0,t.jsx)(n.code,{children:"query"})}),"\n",(0,t.jsx)(n.p,{children:"Manages queries."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub query [flags]\nsentinelhub query [subcommand]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available subcommands"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-query",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub query"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"authz               Authorization transactions subcommands\nbank                Bank transaction subcommands\nbroadcast           Broadcast transactions generated offline\ncrisis              Crisis transactions subcommands\ndecode              Decode a binary encoded transaction string\ndistribution        Distribution transactions subcommands\nencode              Encode transactions generated offline\nevidence            Evidence transaction subcommands\nfeegrant            Feegrant transactions subcommands\ngov                 Governance transactions subcommands\nibc                 IBC transaction subcommands\nibc-fee             IBC relayer incentivization transaction subcommands\nibc-transfer        IBC fungible token transfer transaction subcommands\nmultisign           Generate multisig signatures for transactions generated offline\nmultisign-batch     Assemble multisig transactions in batch from batch signatures\nsign                Sign a transaction generated offline\nsign-batch          Sign transaction batch files\nslashing            Slashing transaction subcommands\nstaking             Staking transaction subcommands\nswap                Swap module sub-commands\nvalidate-signatures validate transactions signatures\nvesting             Vesting transaction subcommands\nvpn                 VPN transactions subcommands\nwasm                Wasm transaction subcommands\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"rollback",children:(0,t.jsx)(n.code,{children:"rollback"})}),"\n",(0,t.jsx)(n.p,{children:"A state rollback is performed to recover from an incorrect application state transition,\nwhen Tendermint has persisted an incorrect app hash and is thus unable to make\nprogress. Rollback overwrites a state at height n with the state at height n - 1.\nThe application also roll back to height n - 1. No blocks are removed, so upon\nrestarting Tendermint the transactions in block n will be re-executed against the\napplication."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub rollback [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start",children:(0,t.jsx)(n.code,{children:"start"})}),"\n",(0,t.jsx)(n.p,{children:"Run the full node application with Tendermint in or out of process. By\ndefault, the application will run with Tendermint in process."}),"\n",(0,t.jsx)(n.p,{children:"Pruning options can be provided via the '--pruning' flag or alternatively with '--pruning-keep-recent',\n'pruning-keep-every', and 'pruning-interval' together."}),"\n",(0,t.jsx)(n.p,{children:"For '--pruning' the options are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"default:    the last 100 states are kept in addition to every 500th state; pruning at 10 block intervals\nnothing:    all historic states will be saved, nothing will be deleted (i.e. archiving node)\neverything: all saved states will be deleted, storing only the current and previous state; pruning at 10 block intervals\ncustom:     allow pruning options to be manually specified through 'pruning-keep-recent', 'pruning-keep-every', and 'pruning-interval'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Node halting configurations exist in the form of two flags: '--halt-height' and '--halt-time'. During\nthe ABCI Commit phase, the node will check if the current block height is greater than or equal to\nthe halt-height or if the current block time is greater than or equal to the halt-time. If so, the\nnode will attempt to gracefully shutdown and the block will not be committed. In addition, the node\nwill not be able to commit subsequent blocks."}),"\n",(0,t.jsx)(n.p,{children:"For profiling and benchmarking purposes, CPU profiling can be enabled via the '--cpu-profile' flag\nwhich accepts a path for the resulting pprof file."}),"\n",(0,t.jsx)(n.p,{children:"The node may be started in a 'query only' mode where only the gRPC and JSON HTTP\nAPI services are enabled via the 'grpc-only' flag. In this mode, Tendermint is\nbypassed and can be used when legacy queries are needed after an on-chain upgrade\nis performed. Note, when enabled, gRPC will also be automatically enabled."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub start [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"status",children:(0,t.jsx)(n.code,{children:"status"})}),"\n",(0,t.jsx)(n.p,{children:'Displays the status of a remote node (default "tcp://localhost:26657").'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub status [flags]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Output"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-status",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub status"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "NodeInfo":{\n      "protocol_version":{\n         "p2p":"8",\n         "block":"11",\n         "app":"0"\n      },\n      "id":"fd1c929dc0c2ce6418b6ed31747469de6c7b15bb",\n      "listen_addr":"tcp://0.0.0.0:26656",\n      "network":"sentinelhub-2",\n      "version":"0.34.27",\n      "channels":"40202122233038606100",\n      "moniker":"2-private-node",\n      "other":{\n         "tx_index":"on",\n         "rpc_address":"tcp://0.0.0.0:26657"\n      }\n   },\n   "SyncInfo":{\n      "latest_block_hash":"64012F64E1BD3CDF52E8A68EE4CB8BA42740C7550704800536109DF8C6F24E9A",\n      "latest_app_hash":"B9648EC2A213E81D9FE42932F69113FA9F0965FA3DD0C4E4D15DDB7940DC0C8F",\n      "latest_block_height":"12638588",\n      "latest_block_time":"2023-09-10T02:09:42.963271871Z",\n      "earliest_block_hash":"11E60037E22F6ABDF29DE851063E4C0E0A34E4D3D067EDA55B1674A0257E7D03",\n      "earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "earliest_block_height":"901801",\n      "earliest_block_time":"2021-05-29T14:30:00Z",\n      "catching_up":false\n   },\n   "ValidatorInfo":{\n      "Address":"6D2F88F51486E74768A85DA4E375F3551F2762A8",\n      "PubKey":{\n         "type":"tendermint/PubKeyEd25519",\n         "value":"S+wi725X8wyDhgEmRlR0xnjuxBDntlBGsLLMmpIFXiY="\n      },\n      "VotingPower":"0"\n   }\n}\n\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"tendermint",children:(0,t.jsx)(n.code,{children:"tendermint"})}),"\n",(0,t.jsx)(n.p,{children:"Manages the Tendermint protocol."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub tendermint [command] [flags]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available subcommands"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-tendermint",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub tendermint"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"reset-state      Remove all the data and WAL\nshow-address     Shows this node's tendermint validator consensus address\nshow-node-id     Show this node's ID\nshow-validator   Show this node's tendermint validator info\nunsafe-reset-all (unsafe) Remove all the data and WAL, reset this node's validator to genesis state\nversion          Print tendermint libraries' version\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"tx",children:(0,t.jsx)(n.code,{children:"tx"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieves a transaction by its hash, account sequence, or signature."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub tx [flags]\nsentinelhub tx [subcommand]\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Available subcommands"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.h4,{id:"this-is-the-output-of-sentinelhub-tx",children:["This is the output of ",(0,t.jsx)(n.code,{children:"sentinelhub tx"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"authz               Authorization transactions subcommands\nbank                Bank transaction subcommands\nbroadcast           Broadcast transactions generated offline\ncrisis              Crisis transactions subcommands\ndecode              Decode a binary encoded transaction string\ndistribution        Distribution transactions subcommands\nencode              Encode transactions generated offline\nevidence            Evidence transaction subcommands\nfeegrant            Feegrant transactions subcommands\ngov                 Governance transactions subcommands\nibc                 IBC transaction subcommands\nibc-fee             IBC relayer incentivization transaction subcommands\nibc-transfer        IBC fungible token transfer transaction subcommands\nmultisign           Generate multisig signatures for transactions generated offline\nmultisign-batch     Assemble multisig transactions in batch from batch signatures\nsign                Sign a transaction generated offline\nsign-batch          Sign transaction batch files\nslashing            Slashing transaction subcommands\nstaking             Staking transaction subcommands\nswap                Swap module sub-commands\nvalidate-signatures validate transactions signatures\nvesting             Vesting transaction subcommands\nvpn                 VPN transactions subcommands\nwasm                Wasm transaction subcommands\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"validate-genesis",children:(0,t.jsx)(n.code,{children:"validate-genesis"})}),"\n",(0,t.jsx)(n.p,{children:"validates the genesis file at the default location or at the location passed as an argument."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub validate-genesis [file] [flags]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub validate-genesis genesis.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"version",children:(0,t.jsx)(n.code,{children:"version"})}),"\n",(0,t.jsx)(n.p,{children:"Print the application binary version information."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sentinelhub version [flags]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);