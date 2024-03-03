const express=require('express');
const path=require('path');
const app=express();
const PORT=process.env.PORT || 3500;



app.use('/auth',require('./routes/auth'));
app.listen(PORT,()=>{
    console.log("server is running!!");
});