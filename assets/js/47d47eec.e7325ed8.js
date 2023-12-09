"use strict";(self.webpackChunksentinel_docs=self.webpackChunksentinel_docs||[]).push([[3434],{85589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(85893),r=t(11151);const o={title:"gRPC Go",sidebar_position:3},i=void 0,c={id:"grpc/interact-grpc-go",title:"gRPC Go",description:"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server.",source:"@site/docs/apis/grpc/interact-grpc-go.mdx",sourceDirName:"grpc",slug:"/grpc/interact-grpc-go",permalink:"/apis/grpc/interact-grpc-go",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"gRPC Go",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"gRPCurl",permalink:"/apis/grpc/interact-grpc-curl"},next:{title:"Rest Endpoints",permalink:"/apis/interact-rest"}},a={},d=[{value:"Install Cosmos SDK",id:"install-cosmos-sdk",level:4},{value:"Query for historical state using Go",id:"query-for-historical-state-using-go",level:4}];function g(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server."}),"\n",(0,s.jsx)(n.h4,{id:"install-cosmos-sdk",children:"Install Cosmos SDK"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go get github.com/cosmos/cosmos-sdk@main\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    myAddress, err := sdk.AccAddressFromBech32("cosmos1...")\n    if err != nil {\n        return err\n    }\n\n    // Create a connection to the gRPC server.\n    grpcConn, err := grpc.Dial(\n        "127.0.0.1:9090", // your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism. \n        // This instantiates a general gRPC codec which handles proto bytes. We pass in a nil interface registry\n        // if the request/response types contain interface instead of \'nil\' you should pass the application specific codec.\n\t\tgrpc.WithDefaultCallOptions(grpc.ForceCodec(codec.NewProtoCodec(nil).GRPCCodec())),\n\t)\n    if err != nil {\n        return err\n    }\n    defer grpcConn.Close()\n\n    // This creates a gRPC client to query the x/bank service.\n    bankClient := banktypes.NewQueryClient(grpcConn)\n    bankRes, err := bankClient.Balance(\n        context.Background(),\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(bankRes.GetBalance()) // Prints the account balance\n\n    return nil\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can replace the query client (here we are using ",(0,s.jsx)(n.code,{children:"x/bank"}),"'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/issues/7786",children:"coming soon"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"query-for-historical-state-using-go",children:"Query for historical state using Go"}),"\n",(0,s.jsx)(n.p,{children:"Querying for historical blocks is done by adding the block height metadata in the gRPC request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/metadata"\n\n    "github.com/cosmos/cosmos-sdk/codec"\n    sdk "github.com/cosmos/cosmos-sdk/types"\n    grpctypes "github.com/cosmos/cosmos-sdk/types/grpc"\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc queryState() error {\n    // --snip--\n\n    var header metadata.MD\n    bankRes, err = bankClient.Balance(\n        metadata.AppendToOutgoingContext(context.Background(), grpctypes.GRPCBlockHeightHeader, "12"), // Add metadata to request\n        &banktypes.QueryBalanceRequest{Address: myAddress.String(), Denom: "atom"},\n        grpc.Header(&header), // Retrieve header from response\n    )\n    if err != nil {\n        return err\n    }\n    blockHeight := header.Get(grpctypes.GRPCBlockHeightHeader)\n\n    fmt.Println(blockHeight) // Prints the block height (12)\n\n    return nil\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);