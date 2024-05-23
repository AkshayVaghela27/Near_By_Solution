import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import connectionString from '../connectionString';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AddService = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            navigate("/");
        }
    }, [navigate]);    
    let long , lat;
    const Caliber=(e)=>{
        // console.log("asdf");
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((x)=>{
                long=x.coords.longitude;
                lat=x.coords.latitude;
                console.log(long)
                console.log(lat)
            })
        }
        else{
            toast.error("Location services not supported by browser")
        }

    }

    const [serviceName, setServiceName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('photo');
    const [ratedFor, setratedFor] = useState('')
    const [category, setcategory] = useState('')
    const [availibility, setAvailibility] = useState(false); // Initialize to false

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Make POST request to backend API
            if(!long || !lat) throw 500;
            const response = await axios.post(`${connectionString}registerService`,{
                name:serviceName,
                description: description,
                photo: "asdf",
                category: category,
                longitude: long,
                latitude: lat,
                ratedFor: ratedFor,
                availability: availibility,
                price: price
            });

            // Reset the form fields after successful submission
            setServiceName('');
            setPrice('');
            setDescription('');
            setPhoto('');
            setcategory('');
            setratedFor('');
            setAvailibility(false);

            // Show success message
            toast.success("Your data has been added successfully");
        } catch (error) {
            console.error('Error adding service:', error);
            toast.error('Error adding service. Please try again.');
        }
    };
   
    return (
        <div className="top-0 left-0 flex justify-center items-center">
            <div className="bg-gray-100 bg-opacity-100 rounded-lg p-8 w-3/6 shadow-2xl ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="serviceName" className="block text-gray-700 font-bold mb-2">Service Name:</label>
                        <input
                            type="text"
                            id="serviceName"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="Service Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="Price"
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
                        <input
                            type="text"
                            id="category"
                            // accept="image/*"
                            placeholder='clothing'
                            onChange={(e) => setcategory(e.target.value)}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder="Description"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">Photo:</label>
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            // onChange={(e) => setPhoto(e.target.files[0])}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="ratedFor" className="block text-gray-700 font-bold mb-2">Rated For:</label>
                        <input
                            type="text"
                            id="ratedFor"
                            // accept="image/*"
                            onChange={(e) => setratedFor(e.target.value)}
                            className="rounded-none rounded-s-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                            placeholder='6-50'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <input 
                            type='checkbox' 
                            id="availibility" 
                            checked={availibility} // Set checked state to availibility
                            onChange={() => setAvailibility(!availibility)} // Toggle availibility state
                            required 
                        />
                        <label htmlFor='availibility' className='block text-gray-700 font-bold mb-2'>Available</label>
                    </div> 
                   <div className='mb-6'>
                    <input type='checkbox' id="location" onClick={Caliber} required/>
                    <label htmlFor='location' className='block text-gray-700 font-bold mb-2'>Allow location</label>
                   </div>
                    <button type="submit" className="bg-blue-600 text-white font-bold px-3 py-1 rounded hover:bg-blue-700">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;
