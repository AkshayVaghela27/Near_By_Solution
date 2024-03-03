const mongoose = require('mongoose');


const dbConnect=async()=>{
   try{
       await mongoose.connect('mongodb+srv://shivjadav206:shiv123@cluster0.c9a8uzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
       );
       console.log("connected to database!!");
   }catch(err){
    console.log(err);
   }
}

module.exports=dbConnect;