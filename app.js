const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const router = express.Router();
const env = require('dotenv').config();
//declaration of variables
const passsword = process.env.password
mongoose.connect("mongodb+srv://admin:"+passsword+"@cluster0.qrgfq.mongodb.net/ProductDevelopementProgram?retryWrites=true&w=majority",{
useNewUrlParser:true,useUnifiedTopology:true
},(err=>{
  if(err){
    console.log(error);
  }else{
    console.log("connected successfuly");
  }
}))

// parse requests of content-type - application/json
app.use(express.json());

app.use(express.static(path.join(__dirname, '/')));
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));

const { error } = require('console');

router.get('/',function(req,res){
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log('Homepage called ip address '+ip);
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(3000,()=>{
  console.log("Running in port 3000");
})