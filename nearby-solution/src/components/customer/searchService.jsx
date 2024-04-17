import React, { useState } from 'react';
import axios from 'axios';
import ServiceCard from './serviceCard'; // Assuming ServiceCard is another component

const SearchService = () => {
  const [searchString, setSearchString] = useState('');
  const [serviceIds, setServiceIds] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (searchString.trim() === '') {
      setServiceIds([]);
      return;
    }

    try {
      const response = await axios.get(`/services?searchString=${encodeURIComponent(searchString)}`);
      setServiceIds(response.data.serviceIds);
      setError(null);
    } catch (error) {
      console.error('Error searching for services:', error);
      setError('Error searching for services. Please try again.');
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className='bg-blue-600 my-4 px-4 backdrop-blur-sm py-2 drop-shadow-2xl rounded-md w-full  h-20'>
        <div className="flex items-center">
          <input
            type="text"
            id="search_string"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-2 focus:ring-blue-500 focus:border-blue-400 block w-4/5  p-2.5"
            placeholder="Search for services / products"
            required
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">Search</button>
        </div>
      </div>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid justify-center bg-blue-600 rounded-md backdrop-blur-sm drop-shadow-2xl 2xl:grid-cols-3 grid-cols-1 md:grid-cols-2 py-4 px-8 gap-6">
        <ServiceCard/>
        {serviceIds.length > 0 ? (
          serviceIds.map(serviceId => <ServiceCard key={serviceId} id={serviceId} />)
        ) : (
          <p className="text-white text-center">Nothing to show here.</p>
        )}
      </div>
    </div>
  );
};

export default SearchService;
