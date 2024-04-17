const axios = require('axios');
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const MapMain = (props) => {
  const [long, setLong] = useState(0); // Initialize long with null
  const [lat, setLat] = useState(); // Initialize lat with null

  const Caliber = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLong(position.coords.longitude);
          setLat(position.coords.latitude);
          resolve(); // Resolve the promise after setting long and lat
        });
      } else {
        reject("Location services not supported by browser");
      }
    });
  };
  const [routeCoordinates, setrouteCoordinates] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Caliber();
        } catch (error) {
          toast.error(error); // Handle error if any
        }
      };
      fetchData();
      const options = {
        method: 'GET',
        url: 'https://trueway-directions2.p.rapidapi.com/FindDrivingPath',
        params: {

          origin: `${long},${lat}`,
          destination: `${coords.long},${coords.lat}`
          
        },
        headers: {
          'X-RapidAPI-Key': '0e3471c4bcmsh74a7adb62786907p1672d8jsneff89e0cb003',
          'X-RapidAPI-Host': 'trueway-directions2.p.rapidapi.com'
        }
      };
      debugger;
      console.log(`${long},${lat}`)
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setrouteCoordinates(response.data);
      } catch (error) {
        console.error(error);
      }
  }, []); // Empty dependency array ensures Caliber is called only once


  console.log(routeCoordinates.length/2)
  return (
    <MapContainer className='h-1/3 w-2/3' center={routeCoordinates[parseInt(routeCoordinates.length/2)]} zoom={15} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={routeCoordinates} color="blue" weight={5} />
    </MapContainer>
  );

};

export default MapMain;
