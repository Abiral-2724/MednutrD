import React from "react";
import Logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 mix-blend-multiply hover:scale-105 transition-transform"
            />
            <div className="hidden md:flex ml-8 space-x-6">
              <button
                onClick={() => navigate("/")}
                className="text-white hover:text-blue-100 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/dietchart")}
                className="text-white hover:text-blue-100 transition-colors"
              >
                Diet Chart
              </button>
              <button
                onClick={() => navigate("/consultation")}
                className="text-white hover:text-blue-100 transition-colors"
              >
                Consultation
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-blue-50 transition-all hover:shadow-md"
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-indigo-900 text-white rounded-lg font-medium hover:bg-indigo-800 transition-all hover:shadow-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;