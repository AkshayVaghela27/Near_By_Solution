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

app.get('/services', async (req, res) => {
    const searchString = req.query.searchString;
  
    try {
    //   const matchingServices = await Service.find({ name: { $regex: searchString, $options: 'i' } });
    //   const serviceIds = matchingServices.map(service => service._id);
    const serviceIds=[1,2];
      res.json({ serviceIds });
    } catch (error) {
      console.error('Error searching for services:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  const services = [
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Category 1',
      productName: 'Product 1',
      price: 20,
      rating: 4.5,
      coordinates: '51.4994794,-0.1269979' // Coordinates for the service
    },
    {
      id: 2,
      description: 'Nulla facilisi. Mauris eleifend libero eget purus tristique, nec scelerisque nunc ullamcorper.',
      category: 'Category 2',
      productName: 'Product 2',
      price: 30,
      rating: 4.8,
      coordinates: '51.4994794,-0.1269979' // Coordinates for the service
    },
    // Add more service data as needed
  ];
  
  // Route handler to get service details by ID
  app.get('/api/services/:id', (req, res) => {
    const serviceId = parseInt(req.params.id);
    const service = services.find(service => service.id === serviceId);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  });



app.use('/registerService',require('./routes/service'));
app.listen(PORT,()=>{
    console.log("server is runnning!!");
});