import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { MessageOutlined } from '@ant-design/icons';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "./Navbar";
import Card from "./Card";
import Chatbot from './Chatbot';
import Recommendation from "./Recommendation";

const PatientHome = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("50");
  const [showChatbot, setShowChatbot] = useState(false);
  
  const quickActions = [
    { text: "Book a Consultation", route: "/consultation", 
      description: "Schedule virtual checkups with healthcare professionals" },
    { text: "Create Diet Chart", route: "/dietchart",
      description: "Get personalized nutrition plans for your needs" },
    { text: "Purchase Medicine", route: "/purchasemedicine",
      description: "Order prescribed medications online" },
    { text: "Subscription", route: "/subscription",
      description: "Access premium healthcare benefits" }
  ];

  const reviews = [
    { name: "Monica Geller", stars: "⭐⭐⭐⭐⭐", 
      text: "The virtual consultations are incredibly convenient and time-saving!" },
    { name: "Rachel Green", stars: "⭐⭐⭐⭐☆",
      text: "Great experience with the diet planning feature. Very helpful!" },
    { name: "Phoebe Buffay", stars: "⭐⭐⭐⭐⭐",
      text: "The doctors are very professional and caring. Highly recommended!" },
    // ... other reviews
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              <Typewriter
                options={{
                  strings: ["Your Health, Our Priority", "Virtual Care Made Simple"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access quality healthcare from the comfort of your home
            </p>
            <button 
              onClick={() => navigate("/consultation")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </section>

        {/* Search Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search doctors by specialty or location..."
              className="w-full py-4 pl-12 pr-4 rounded-xl border-2 border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </section>

        {/* Price Range Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">We Recommended</h2>
          <Recommendation />
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Button className="w-30 bg-black hover:bg-gray-800" size="lg">Explore More Doctors</Button>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, i) => (
              <div
                key={i}
                onClick={() => action.route && navigate(action.route)}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{action.text}</h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Doctors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Doctors</h2>
          <Card />
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Patient Reviews</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-none w-96 p-6 rounded-xl shadow-lg bg-white border-2 border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{review.name}</h3>
                <div className="text-lg mb-3">{review.stars}</div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-4 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Describe your concern"
                  rows="4"
                  required
                  className="w-full p-4 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Chatbot Toggle */}
      <button 
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <MessageOutlined className="text-white text-2xl" />
      </button>

      {showChatbot && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] bg-white rounded-xl shadow-2xl border-2 border-gray-100">
          <Chatbot />
        </div>
      )}

<footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">MedNutr</h3>
              <p className="text-gray-400">
                Providing quality healthcare services with a focus on patient well-being and comfort.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                <li className="hover:text-white cursor-pointer transition-colors">Services</li>
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Working Hours</h3>
              <div className="space-y-3 text-gray-400">
                <p>Monday - Friday:<br />8:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday:<br />9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 MedNutr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PatientHome;