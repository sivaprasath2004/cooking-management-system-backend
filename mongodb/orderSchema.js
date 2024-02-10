const mongoose=require('mongoose')
const order_schema=new mongoose.Schema({
    name:String,
    MobileNumber:String,
    FunctionName:String,
    Members:String,
    Address:String,
    Bookdate:String,
    Mark:String,
    bookTime:String,
})
module.exports=mongoose.model('orders',order_schema)
