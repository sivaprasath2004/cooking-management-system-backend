const mongoose=require('mongoose')
const login_schema=require('../mongodb/Admin')
require('dotenv').config()
const login=async(req,res)=>{
    try{
   await mongoose.connect(process.env.DATABASE)
   let response=await login_schema.where('UserName').equals(req.body.UserName)
   if(response.length>=1){
    if(response[0].Password===req.body.Password){
        const data={id:response[0]._id,status:'ok'}
    res.status(200).send(data)
    }
    else{
    res.status(200).send('Password is incorrect')
    }
   }
   else{
    res.status(200).send('User Name is invalid')
   }
    }
    catch(err){
        console.log(err)
    }
}
module.exports=login