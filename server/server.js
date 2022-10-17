const express=require('express');
const bodyparser=require('body-parser');
const cors= require('cors');


const port=3000;
const app=express();

app.use(bodyparser.json());
app.use(cors());
app.get('/',function(req,res){
    res.send('hello from server');
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(401).send({"message":"data received"});
})
app.listen(port,function(){
    console.log("server running on localhost" +port);
});