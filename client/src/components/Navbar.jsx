import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/2.png'; 

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogout = () => {
    setIsLoggedIn(false);  
    
  };

  return (
    <nav className="bg-black p-2">
      <div className="container mx-5 flex justify-between items-center">

        <div className="text-white text-3xl font-bold">
        <Link to="/">
            <img src={logo} alt="Company Logo" className="h-11 w-15" /> 
          </Link>
        </div>
        
  
        <ul className="flex ml-0 font-nsans-Medium text-2xl space-x-11">
          <li><Link className="text-white hover:text-green-300" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-green-300" to="/services">Services</Link></li>
          <li><Link className="text-white hover:text-green-300" to="/garage">Garage</Link></li>
          <li><Link className="text-white hover:text-green-300" to="/support">Support</Link></li>
        </ul>


        <div className="relative ml-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-7 py-2 rounded-full focus:outline-none" 
          />
          
        </div>

    
        <div className="flex space-x-3">
          {!isLoggedIn ? (
            <>
              <Link 
                to="/signin" 
                className="bg-white font-nsans-Bold text-gray-400 px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-white font-nsans-Bold text-gray-400 px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
        
              <Link 
                to="/profile" 
                className="text-white hover:text-gray-200"
              >
                Profile
              </Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
