const mongoose = require('mongoose');


const dbConnect=async()=>{
   try{
       await mongoose.connect(process.env.DB_URL
       );
       console.log("connected to database!!");
   }catch(err){
    console.log(err);
   }
}

module.exports=dbConnect;