const bcrypt=require('bcrypt');
const User=require('../model/User');

const handleRegister= async (req,res)=>{
    const {username,password,email}=req.body;
    if(!uname || !pwd || !email) return res.status(400).json({'message':"username , password and email is required!"});

    const duplicate=User.findOne({username}).exec();

    if(duplicate)return res.sendStatus(409);
    try{
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser=await User.create({
        "username" : username,
        "password" : hashedPwd,
        "email" :email
    });

    res.status(201).json({ 'success': `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
};

module.exports={handleRegister};