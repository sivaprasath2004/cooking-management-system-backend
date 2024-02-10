const mongoose=require('mongoose')
const Admin_Schema=new mongoose.Schema({
    UserName:String,
    Password:String,
    MobileNumber:String,
    EmailId:String
})
module.exports=mongoose.model('admin',Admin_Schema)