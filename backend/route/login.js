const express=require('express')

const router=express.Router();
const {User}=require('../db/models/user');
const {userLoginCheck}=require('../middleware/user_existance');

router.use(express.json());
const jwt=require('jsonwebtoken');

router.post('/',userLoginCheck,async(req,res)=>{


      const user=req.user;
      try{
        const token=jwt.sign({id:user._id,username:user.username},"sahilgupta")
        res.json({token:token})  
      }
        catch(err){
            res.status(500).send('Internal server error')
        }
      
})

module.exports=router;
