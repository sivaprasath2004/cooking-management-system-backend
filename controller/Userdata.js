const mongoose=require('mongoose')
const orders=require('../mongodb/orderSchema')
require('dotenv').config()
const orderSchema = require('../mongodb/orderSchema')
const userDetails=async(req,res)=>{
    try{
   await mongoose.connect(process.env.DATABASE)
   console.log(req.body.detail)
    await orderSchema.create(req.body.detail)
    res.status(200).send('ok')
}
catch(err){console.log(err)}
finally{
    mongoose.disconnect()
}
}
const marked=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DATABASE)
        await orderSchema.findByIdAndUpdate(req.body.id,{ Mark:'marked'})
        res.status(200).send('ok')
    }
    catch(err){
        console.log(err)
    }
    finally{
        await mongoose.disconnect()
    }
}
const customer_details=async(req,res)=>{
    try{
   await mongoose.connect(process.env.DATABASE)
   if(req.body.id.length===Number(process.env.ID_NUM)){
   let response=await orderSchema.find({})
   res.send(response)
   }
   else{
    console.log('err')
   }
    }
    catch(err){
       console.log(err)
    }
    finally{
        await mongoose.disconnect()
    }
}
module.exports={userDetails,customer_details,marked}
