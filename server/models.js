const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkrumDataSchema =new Schema({
AID:String,
Name:String,
Manager:String,    
})

const DateListSchema =new Schema({
Date:String,
AttArr:[{
AID:String,
Present:Boolean,
Name:String,
Reason:String,
Update:String
}]
})

const scrumd =mongoose.model('scrumdata',SkrumDataSchema,'donottouch');
const dlist =mongoose.model('dlist',DateListSchema,'therealthang');
const myModels={'scrumd':scrumd,'dlist':dlist}
module.exports = myModels;