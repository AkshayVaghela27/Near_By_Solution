const mongoose = require('mongoose');


const dbConnect=async()=>{
   try{
       await mongoose.connect(process.env.DB_URL
       );
       mongoose.connection.db.collection('services').createIndex({ "location.coordinates": "2dsphere" });
       console.log("connected to database!!");
   }catch(err){
    console.log(err);
   }
}


module.exports=dbConnect;