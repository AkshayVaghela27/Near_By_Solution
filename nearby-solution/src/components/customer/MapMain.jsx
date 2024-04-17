import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const axios = require('axios');

const MapMain = () => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const location = useLocation();
  const { props } = location.state;

  const Caliber = () => {
    return new Promise((resolve, reject) => {
      const successCallback = (position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        resolve({ long, lat });
      };

      const errorCallback = (error) => {
        reject(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { long, lat } = await Caliber();
        console.log(long, lat);

        const url = `https://trueway-directions2.p.rapidapi.com/FindDrivingPath?origin=${lat}%2C${long}&destination=${props[1]}%2C${props[0]}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '0e3471c4bcmsh74a7adb62786907p1672d8jsneff89e0cb003',
            'X-RapidAPI-Host': 'trueway-directions2.p.rapidapi.com'
          }
        };

        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const myData = await JSON.parse(result);
        setRouteCoordinates(myData.route.geometry.coordinates);
      } catch (error) {
        toast.error("There was an error.");
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {routeCoordinates.length && (
        <MapContainer className='h-1/3 w-2/3' center={routeCoordinates[parseInt(routeCoordinates.length / 2)]} zoom={15} style={{ height: '500px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline positions={routeCoordinates} color="blue" weight={5} />
        </MapContainer>
      )}
    </>
  );
};

export default MapMain;
