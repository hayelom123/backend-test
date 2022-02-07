const mongoose = require("mongoose");

const taskschema=mongoose.Schema({
    name:{type:String},
    desc:{type:String},
    owner:{
        type: mongoose.Schema.Types.ObjectId, ref: "Users",
        required:true}
})
taskschema.pre('save',function(){
     console.log('before:',this)
})
const Tasks = mongoose.model('Tasks',taskschema);
module.exports = Tasks;