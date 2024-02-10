const mongoose=require('mongoose')
const order_schema=new mongoose.Schema({
    name:String,
    MobileNumber:String,
    FunctionName:String,
    Members:String,
    Address:String,
    Date:String,
    Mark:String,
    Time:String,
})
module.exports=mongoose.model('orders',order_schema)
