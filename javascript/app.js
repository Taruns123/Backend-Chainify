var invoker = require('./invoke.js')
var queryF = require('./query.js')
var express = require('express')
const { PREFER_MSPID_SCOPE_ALLFORTX } = require('fabric-network/lib/impl/event/defaulteventhandlerstrategies.js')
var app = express()
const port = 3002





app.get('/getQuery/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    res.send(await queryF.mainQuery());
    // console.log(queryF.mainQuery());
})




app.get('/create/:carid/:maker/:model/:color/:owner/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    invoker.mainCarInvoker(req.params.carid.toString(),req.params.maker.toString(),req.params.model.toString(),req.params.color.toString(),req.params.owner.toString());
    res.send("success");
    // console.log(queryF.mainQuery());
})

app.get('/createChalan/:chalanid/:carNumber/:carBuild/:color/:owner/:issue/:challanDate/:payStatus/:payAmount/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    invoker.mainChalanInvoker(req.params.chalanid.toString(),req.params.carNumber.toString(),req.params.carBuild.toString(),req.params.color.toString(),req.params.owner.toString(),req.params.issue.toString(),req.params.challanDate.toString(),req.params.payStatus.toString(),req.params.payAmount.toString());
    res.send("success");
    // console.log(queryF.mainQuery());
})

app.get('/changeOwner/:carid/:newOwner/',async(req,res)=>{
    // var result= await queryF.mainQuery().toString();
    // res.send(queryF.mainQuery().toString());
    
    invoker.mainCarChangeInvoker(req.params.carid.toString(),req.params.newOwner.toString());
    res.send("success");
    // console.log(queryF.mainQuery());
})

app.listen(port,()=>{
    console.log("listening on port: ",port);
})