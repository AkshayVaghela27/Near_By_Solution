import React from 'react';
import ServiceCard from './serviceCard'; // Assuming ServiceCard is another component

const SearchService = () => {
  return (
    <div className="w-4/5  mx-auto ">
      <div className='bg-blue-600 my-4 px-4 backdrop-blur-sm py-2 drop-shadow-2xl rounded-md w-full  h-20'>
      <div >
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg my-2 focus:ring-blue-500 focus:border-blue-400 block w-4/5  p-2.5 " placeholder="Search for services / products" required />
        </div>
         </div>
      <div className="grid justify-center bg-blue-600 rounded-md backdrop-blur-sm drop-shadow-2xl 2xl:grid-cols-3 grid-cols-1 md:grid-cols-2 py-4 px-8 gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default SearchService;
