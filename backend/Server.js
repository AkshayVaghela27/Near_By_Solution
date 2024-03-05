require('dotenv').config();
const express=require('express');
const app=express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const dbConnect=require('./config/dbConnect');
const PORT=process.env.PORT || 3500;

//connecting to database
dbConnect();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/register',require('./routes/register'));
app.use('/signin',require('./routes/auth'));
app.listen(PORT,()=>{
    console.log("server is runnning!!");
});