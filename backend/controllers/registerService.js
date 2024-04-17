const Service=require('../model/Service');

const handleServiceRegister=async(req,res) => {
    const {name,description,longitude,latitude,price,category,availability,photo,ratedFor}=req.body;

    try{
    const newService=await Service.create({
        "name" : name,
        "description" : description,
        "location": {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          "price":price,
          "availability":availability,
          "category":category,

          "ratedFor":ratedFor,
          "photo":photo
    });
    res.status(201).json({ 'success': `New Bussines ${name} created!` });
}catch (err) {
    res.status(500).json({ 'message': err.message });
}
};

module.exports={handleServiceRegister};