const express = require("express");

const router = express.Router();
const {User}=require('../db/models/user');
const {userExistance}=require('../middleware/user_existance');

router.post('/',userExistance,async(req,res)=>{
   const {username,email,password}=req.body;

   try{
        await User.create({username,email,password});
        res.status(201).send({message:'User Created'});
   }
   catch(err){
    console.log(err)
    res.status(500).send({ message: 'Error creating user', err:err });
   }    
})

module.exports=router;