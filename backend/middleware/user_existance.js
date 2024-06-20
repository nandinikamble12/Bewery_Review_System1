
const express=require('express');
const {User}=require('../db/models/user');
 const userExistance=async function(req,res,next){
    const {username,email}=req.body;
    try{
        const user = await User.findOne({ $or: [{ username }, { email }] });
        if (user) {
            return res.status(400).send('User already exists');
        }
        else{
            next();
        }

    }
    catch(err){
        console.error(err); // Log the error to the console
        res.status(500).send('Internal server error');
    }
 

}

const userLoginCheck=async function(req,res,next){
    const { email, password } = req.body;

    try{
        const user=await User.findOne(
            {
                email:email,
                password:password
            }
        )
        if(user){
            req.user=user;
            next();
        }
        else{

            res.status(400).send('User does not exist');
        }
    }
    catch(err){
        console.error(err);
        res.status(500).send('Internal server error')
    }
   
}

module.exports={userExistance,userLoginCheck};
