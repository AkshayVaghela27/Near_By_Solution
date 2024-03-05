const express=require('express');
const User=require('../model/User');
const bcrypt=require('bcrypt');

const handleLogin= async (req,res)=>{
  try{
        const {username,password}=req.body;
        if(!username || !password) return res.status(400).json({'message':"username , password are required!"});
        const user=await User.findOne({"username":username});
        if(!user)return res.status('401').json({'message':'user is not registerd'});
        const match=await bcrypt.compare(password,user.password);
        if(match){
            return res.sendStatus(200);
        }else{
            return res.sendStatus(401);
        }

  }catch(err){
    console.error(err);
  }
    
}

module.exports={handleLogin};