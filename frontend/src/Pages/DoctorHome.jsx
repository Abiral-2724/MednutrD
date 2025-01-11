import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Phone, MapPin, Star, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

const DoctorHomepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  const emergencyData = {
    name: "John Doe",
    type: "Emergency",
    disease: "Heart Attack",
  };

  const regularData = {
    name: "Jane Smith",
    type: "Regular",
    disease: "Diabetes",
  };

  const seminarData = [
    {
      name: "Health Webinar 1",
      date: "2025-01-25",
      time: "10:00 AM",
      description: "Learn about the importance of healthy eating habits.",
    },
    {
      name: "Health Webinar 2",
      date: "2025-01-31",
      time: "2:00 PM",
      description: "Understanding the importance of mental health.",
    },
    {
      name: "Health Webinar 3",
      date: "2025-02-20",
      time: "7:00 PM",
      description: "Learn about the importance of the physical health.",
    },
    {
      name: "Health Webinar 4",
      date: "2025-03-01",
      time: "11:00 AM",
      description: "Importance of the Yoga and Meditation in Life",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your Health Is Our
                <span className="text-blue-600"> Top Priority</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Expert medical care with a personal touch. Our experienced team
                is here to provide you with the highest quality healthcare services.
              </p>
              <div className="space-x-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/schedule")}
                >
                  Schedule a Visit
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <User size={200} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Calling Requests */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Active Requests</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Emergency Request */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">{emergencyData.name}</span>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                    {emergencyData.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{emergencyData.disease}</p>
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline"
                    onClick={() => setModalData(emergencyData)}
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    View Details
                  </Button>
                  <Button 
                    onClick={() => navigate("/schedule")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Regular Request */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">{regularData.name}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {regularData.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{regularData.disease}</p>
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline"
                    onClick={() => setModalData(regularData)}
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    View Details
                  </Button>
                  <Button 
                    onClick={() => navigate("/videocall")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Seminars & Webinars</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seminarData.map((seminar, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{seminar.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {seminar.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {seminar.time}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{seminar.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Join Webinar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Primary Care",
                icon: <User className="h-8 w-8 mb-4 text-blue-600" />,
                description: "Comprehensive primary healthcare services for all ages."
              },
              {
                title: "Specialist Consultation",
                icon: <Star className="h-8 w-8 mb-4 text-blue-600" />,
                description: "Expert consultation with specialized healthcare professionals."
              },
              {
                title: "Emergency Care",
                icon: <Phone className="h-8 w-8 mb-4 text-blue-600" />,
                description: "24/7 emergency medical services when you need them most."
              },
            ].map((service, index) => (
              <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent>
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Book an Appointment</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                    <span className="font-bold text-lg">Available 7 days a week</span>
                  </div>
                  <p className="text-gray-600">Choose a convenient time for your visit</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 mr-3 text-blue-600" />
                    <span className="font-bold text-lg">Extended Hours</span>
                  </div>
                  <p className="text-gray-600">Morning and evening slots available</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate("/schedule")}
              >
                Schedule Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/videocall")}
              >
                Schedule Video Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                  <span className="font-bold text-lg">Location</span>
                </div>
                <p className="text-gray-600">
                  123 Medical Center Drive<br />
                  MedNutr City, HC 12345
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 mr-3 text-blue-600" />
                  <span className="font-bold text-lg">Contact</span>
                </div>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: care@mednutr.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Patient Details</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setModalData(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold"></span>
                  <span className="font-semibold">Name: </span>
                  {modalData.name}
                </div>
                <div>
                  <span className="font-semibold">Disease: </span>
                  {modalData.disease}
                </div>
                <div>
                  <span className="font-semibold">Type: </span>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    modalData.type === 'Emergency' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {modalData.type}
                  </span>
                </div>
                <Button 
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={() => modalData.type === 'Emergency' ? navigate("/schedule") : navigate("/videocall")}
                >
                  {modalData.type === 'Emergency' ? 'Schedule Emergency Visit' : 'Schedule Video Call'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DoctorHomepage;