require('dotenv').config();
const express=require('express');
const app=express();
const cors = require('cors');
const corsOptions  = require('./config/corsOptions');
const dbConnect=require('./config/dbConnect');
const Service=require('./model/Service');
const { ObjectId } = require('mongodb');
// const PORT=process.env.PORT || 3001;


//connecting to database
dbConnect();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/register',require('./routes/register'));
app.use('/signin',require('./routes/auth'));

app.get('/services', async (req, res) => {
    const searchString = req.query.searchString;
    const longitude=req.query.long;
    const latitude=req.query.lat;
    try {
      const result = await Service.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [parseFloat(longitude), parseFloat(latitude)] // Parse coordinates to float
            },
            distanceField: 'distance',
            spherical: true,
            key: 'location.coordinates'
          }
        },
        {
          $match: {
            // name: { $eq: searchString } // Replace "Your_Name_Here" with the provided name
             name: { $regex: searchString, $options: 'i' } 
          }
        },
        {
          $project: {
            _id: 1,
            coordinates: '$location.coordinates'
          }
        },
        {
          $sort: {
            distance: 1
          }
        },
        {
          $project: {
            _id: 1,
            coordinates: 1
          }
        }
      ]);
      
  
      res.json(result);
      console.log(result);
    } catch (err) {
      console.error('Error:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.use('/logout',require('./routes/logout'));

app.get('/api/services/:id', async (req, res) => {
  const serviceId = new ObjectId(req.params.id);
  try {
      const service = await Service.findById(serviceId);
      if (service) {
          res.json(service);
      } else {
          res.status(404).json({ message: 'Service not found' });
      }
  } catch (error) {
      console.error('Error finding service by id:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});



app.use('/registerService',require('./routes/service'));
app.use('/registerfeedback',require('./routes/feedbackregister'));
app.listen(3001,()=>{
    console.log("server is runnning!!");
});