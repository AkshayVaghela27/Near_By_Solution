import React from 'react'
import { MdAddToPhotos } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { TbMapSearch } from 'react-icons/tb';
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';
import connectionString from '../connectionString';
const SidebarService = () => {
   const logout= async (e)=>{
      e.preventDefault();
      const res= await fetch(`${connectionString}logout`,{
         method: 'post',
         headers: {
            "Content-Type": "application/json",
          }
      });
      sessionStorage.clear();
      window.location.href="/"
   }

  return (
    <div>
      
<aside id="default-sidebar" className="  w-64 h-screen max-h-full  min-h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 ">
      <ul className="space-y-2 font-medium">

        <li data-tooltip-id='my-tooltip' data-tooltip-content="Get services/product nearby">
                     <Link to="/search" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-blue-100  group">
                        <TbMapSearch className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-blue-600' />
                        <span className="flex-1 ms-3 hover:text-blue-600 whitespace-nowrap" >Search</span>
                     </Link>
                  </li>
                  {sessionStorage.getItem("token") && 
         <li data-tooltip-id='my-tooltip' data-tooltip-content="Add service / provide">
            <Link to="/addService" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-blue-100  group">
             
               <MdAddToPhotos className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-blue-600"/>
               <span className="flex-1 ms-3 hover:text-blue-600 whitespace-nowrap">Add</span>
            </Link>
         </li>}
         {sessionStorage.getItem("token")!==null &&
         <li data-tooltip-id='my-tooltip' onClick={logout} data-tooltip-content="Logout">
            <Link to="" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-blue-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                <span className="flex-1 ms-3 hover:text-blue-600 whitespace-nowrap">Log out</span>
            </Link>
         </li>
}
{sessionStorage.getItem("token")!==null &&
         <li data-tooltip-id='my-tooltip'  data-tooltip-content="Logout">
            <Link to="/getallservices" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-blue-100  group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                <span className="flex-1 ms-3 hover:text-blue-600 whitespace-nowrap">Show Feedbacks</span>
            </Link>
         </li>
}
      </ul>
   </div>
</aside>
    </div>
  )
}

export default SidebarService
