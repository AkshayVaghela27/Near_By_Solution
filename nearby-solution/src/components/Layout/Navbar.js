import logo from "../../miscellaneous/Designer.png"
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 sticky  p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          NearbySolutions
        </Link>
        <div className="flex items-center">
          <ul className='flex flex-row'>
            <li >
          <Link to="/sign-in" 
          className="text-white hover:border-b-2 text-center hover:border-b-white  mr-4"
          >
            Login
          </Link>

            </li>
            <li >
          <Link to="/about" className="text-white hover:border-b-2 text-center hover:border-b-white  mr-4">
            About
          </Link>
          </li>
            </ul>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
