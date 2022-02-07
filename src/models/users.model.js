const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{type:String}
});
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });
userSchema.virtual('tasks',{
    ref:'Tasks',
    localField:'_id',
    foreignField:'owner'
})
// userSchema.virtual('wellcome').get(function(){
//     return `well come ${this.name}`
// })
// your own static method
userSchema.statics.findByName=function(name){
    return this.where({name:new RegExp(name,'i')})
}
// query level method
userSchema.query.byName= function(name){
    return this.where({name:new RegExp(name,'i')})
}
// converts to json 
userSchema.methods.toJSON=function(){
    console.log(`well com ${this.name}`)
    const user =this
    const userObject =user.toObject()
    delete userObject.__v
    return userObject
}
const Users =mongoose.model("Users",userSchema);
module.exports=Users;