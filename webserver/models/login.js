var mongoose=require('mongoose');
var schema=mongoose.Schema;
var userDetailsSchema=new schema({
"userName":String,
"password":String
})
module.exports=mongoose.model('userCredentials',userDetailsSchema);