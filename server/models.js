const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkrumDataSchema =new Schema({
AID:String,
Name:String,
Manager:String,    
})


const scrumd =mongoose.model('scrumdata',SkrumDataSchema,'donottouch');

const myModels={'scrumd':scrumd}
module.exports = myModels;