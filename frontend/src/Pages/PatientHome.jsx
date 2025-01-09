import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PatientHome = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("50");
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-12">
          <h1 className="text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            <Typewriter
              options={{
                strings: ["Wanna! Book A Virtual CheckUp?"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h4 className="text-center mt-4">
            <span 
              className="text-blue-600 hover:text-blue-800 cursor-pointer text-lg font-semibold transition-colors"
              onClick={() => navigate()}
            >
              Book? Click here
            </span>
          </h4>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search based on Location and Specialization"
            className="w-full py-4 pl-12 pr-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
          />
        </div>

        <div className="mt-8">
          <Card />
        </div>

        <div className="flex items-center justify-center gap-8 my-8">
          <input
            type="range"
            min="0"
            max="500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-1/2 h-3 bg-blue-200 rounded-xl appearance-none cursor-pointer"
          />
          <p className="text-xl font-bold text-gray-800">Amount: ${amount}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {[
            { text: "Book a Consultations", route: "/consultation" },
            { text: "Create Your Diet Chart", route: "/dietchart" },
            { text: "Purchase Your Medicine", route: "/purchasemedicine" },
            { text: "Subscription", route: "/subscription" }
          ].map((button, i) => (
            <button
              key={i}
              onClick={() => button.route && navigate(button.route)}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-medium"
            >
              {button.text}
            </button>
          ))}
        </div>

        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8">Feedbacks and Reviews</h1>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
            { name: "Monica Geller", stars: "⭐⭐⭐⭐⭐" },
            { name: "Rachel Green", stars: "⭐⭐⭐⭐☆" },
            { name: "Phoebe Buffay", stars: "⭐⭐⭐⭐⭐" },
            { name: "Janice Litman", stars: "⭐⭐⭐☆☆" },
            { name: "Mike Hannigan", stars: "⭐⭐⭐⭐☆" },
            { name: "Gunther Centralperk", stars: "⭐⭐⭐☆☆" },
            { name: "Richard Burke", stars: "⭐⭐⭐⭐☆" },
            { name: "Emily Waltham", stars: "⭐⭐⭐☆☆" },
            { name: "David Scientist", stars: "⭐⭐⭐⭐☆" },
            { name: "Carol Willick", stars: "⭐⭐⭐⭐☆" },
            
            ].map((review, i) => (
              <div
                key={i}
                className="flex-none w-80 p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-indigo-500 transform hover:scale-105 transition-transform duration-200"
              >
                <h2 className="text-2xl font-bold text-white mb-3">{review.name}</h2>
                <div className="text-lg mb-3">{review.stars}</div>
                <p className="text-white text-opacity-90">
                  It's amazing! and highly recommended as it has the virtual
                  Consultations that save time
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-indigo-500">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-1/2 p-4 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
            <textarea
              placeholder="Describe your problem"
              rows="4"
              required
              className="w-4/5 p-4 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 transition-shadow"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-white shadow-md py-6">
        <p className="text-center text-gray-600">&copy; 2025 MedNutr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PatientHome;