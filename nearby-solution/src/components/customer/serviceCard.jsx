import React from 'react';
import myImage from '../../images/myImage.jpg'; // Adjust the path to your image file

const ServiceCard = () => {
  return (
    <div className=" bg-slate-300 rounded-xl drop-shadow-2xl justify-self-center w-full relative overflow-hidden">
      <a href="#" className="group relative block bg-black">
        <img
          alt=""
          src={myImage}
          className="absolute inset-0 h-full  w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">


          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div
              className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p className='text-sm font-bold uppercase tracking-widest text-black'>description</p>
              <p className="text-sm text-white font-semibold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-black">Category</p>
          <p className="text-xl font-bold text-white sm:text-2xl">Product name</p>
          <div className='flex justify-between justify-items-center'><span className='text-sm font-bold text-white'>6kms away</span> <a href="#" className="inline-flex drop-shadow-2xl items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Get directions
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a></div>
        </div>
      </a>
    </div>
  )
}

export default ServiceCard;
