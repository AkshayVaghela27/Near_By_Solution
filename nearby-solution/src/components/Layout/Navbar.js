// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 sticky p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          NearbySolutions
        </Link>
        <div className="flex items-center">
          <Link to="/sign-in" 
          className="text-white mr-4"
          >
            Login
          </Link>
          <Link to="/about" className="text-white mr-4">
            About
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
