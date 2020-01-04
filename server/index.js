const express = require('express');
const bodyParser = require("body-parser"); // parse json
const app = express();
var session = require('express-session');
var cors = require('cors')
var moment=require('moment');



//const redisClient = redis.createClient();
var fileupload = require("express-fileupload");
app.use(cors())
app.use(fileupload())
app.use(session({secret:"123e#$#$#$#", resave:false, saveUninitialized:true}));
app.use(bodyParser.json());
const path = require('path');
mongoose = require('mongoose').set('debug', true);
mongoose.connect("mongodb://test:test123@test-shard-00-00-qy33i.mongodb.net:27017,test-shard-00-01-qy33i.mongodb.net:27017,test-shard-00-02-qy33i.mongodb.net:27017/Skrum?ssl=true&replicaSet=Test-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser:true});
const myModels = require('./models.js');
const Scrumd = myModels.scrumd
const Dlist =myModels.dlist


app.get("/namelist/:AID", (req, res) => {
    var aid = req.params.AID;
    Scrumd.find({}, function(err,user){
        if(err){
          console.log(err);
        }
        else {
          console.log(user);
          res.send(user);
        }
      });
  });
  
  app.listen(3002,(error)=>{
    if(error) 
     console.log(error);
     else
     console.log("connected")
   })

   app.get("/statlist/:date", (req, res) => {
    var date = req.params.date;
    Dlist.find({"Date":date}, function(err,user){
        if(err){
          console.log(err);
        }
        else {
          console.log(user);
          res.send(user);
        }
      });
  });

  app.post("/savetodb", (req, res)=>{
    array = req.body.package;
    const dlist = new Dlist({
       //Date: moment().format('DD MM YYYY'),
       Date:new Date,
       AttArr:array
    });
    dlist.save().then(()=>{
        console.log("Attendance succesfully saved");
    });
     res.send("done");
  });

  app.get("/getbydate", (req, res) => {
    var from = req.query.fromd;
    var to=req.query.tod
    Dlist.find({"Date":{"$gte":from,"$lte":to}}, function(err,user){
        if(err){
          console.log(err);
        }
        else {
          console.log(user);
          res.send(user);
        }
      });
  });
