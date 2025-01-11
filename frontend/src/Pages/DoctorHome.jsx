import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Phone, MapPin, Star, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import './DoctorHome.css'
import { useState } from "react";

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

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div>
          <Navbar />

          <div className="flex items-center justify-between py-12">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 ml-10">
                Your Health Is Our Top Priority
              </h1>
              <p className="text-gray-600 mb-8 ml-10">
                Expert medical care with a personal touch. Our experienced team
                is here to provide you with the highest quality healthcare
                services.
              </p>
              <div className="space-x-4 ml-10">
                <Button size="lg" onClick={() => navigate("/schedule")}>
                  Schedule a Visit
                </Button>

                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-96 h-96 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={200} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Calling Request</h2>
      <section className="card">
       
        <div className="header">
          <span><b>{emergencyData.name}</b></span>
          <span className="type"><b>{emergencyData.type}</b></span>
        </div>
        <input
          type="text"
          placeholder={emergencyData.disease}
          className="input-field"
          readOnly
          style={{width:'150px'}}
        />
        <div className="actions">
          <button className="button" onClick={() => openModal(emergencyData)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="button schedule"
           onClick={() => navigate("/schedule")}>Schedule Now</button>
        </div>
      </section>

      {/* Regular Section */}
      <section className="card">
        <div className="header">
          <span><b>{regularData.name}</b></span>
          <span className="type"><b>{regularData.type}</b></span>
        </div>
        <input
          type="text"
          placeholder={regularData.disease}
          className="input-field"
          readOnly
          style={{width:'150px'}}
        />
        <div className="actions">
          <button className="button" onClick={() => openModal(regularData)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="button schedule"
           onClick={() => navigate("/videocall")}>Schedule Now</button>
        </div>
      </section>

      {/* Seminars and Webinars */}
      <section className="bg-blue-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Seminars & Webinars</h2>
        <div className="webinar-container">
          {seminarData.map((seminar, index) => (
            <div key={index} className="webinar" style={{backgroundColor:'white',height:'200px'}}>
              <p style={{textAlign:'center',fontSize:'19px',fontWeight:'bold',padding:'5px'}}><b>{seminar.name}</b></p>
              <div style={{display:'flex',padding:'3px'}}> 
              <p style={{padding:'3px',marginLeft:'15px',marginRight:'4px'}}><b>{seminar.date}</b></p>
              <p style={{padding:'3px',marginLeft:'100px'}}><b>{seminar.time}</b></p>
              </div>
              <p style={{padding:'8px'}}>{seminar.description}</p>
              <div style={{display:'flex',justifyContent:'center',alignItems:'baseline'}}>
              <button className="button join"
              style={{width:'90px',height:'40px'}}>Join</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && modalData && (
        <div className="modal">
          <div className="modal-content">
            <h3>Patient Details</h3>
            <p>
              <strong>Name:</strong> {modalData.name}
            </p>
            <p>
              <strong>Disease:</strong> {modalData.disease}
            </p>
            <p>
              <strong>Type:</strong> {modalData.type}
            </p>
            <button className="button close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Primary Care", icon: <User className="h-8 w-8 mb-4" /> },
            {
              title: "Specialist Consultation",
              icon: <Star className="h-8 w-8 mb-4" />,
            },
            {
              title: "Emergency Care",
              icon: <Phone className="h-8 w-8 mb-4" />,
            },
          ].map((service, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent>
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  Professional healthcare services tailored to your needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Appointment Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Book an Appointment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold">
                      Available 7 days a week
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Choose a convenient time for your visit
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold">Extended Hours</span>
                  </div>
                  <p className="text-gray-600">
                    Morning and evening slots available
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button
              size="lg"
              className="mt-8 mr-5"
              onClick={() => navigate("/schedule")}
            >
              Schedule Now
            </Button>
            <Button
              size="lg"
              className="mt-8"
              onClick={() => navigate("/videocall")}
            >
              Schedule a video call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-gray-600">
                  123 Medical Center Drive
                  <br />
                  MedNutr City, HC 12345
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Contact</span>
                </div>
                <p className="text-gray-600">
                  Phone: (555) 123-4567
                  <br />
                  Email: care@mednutr.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MedNutr</h3>
              <p className="text-gray-400">
                Providing quality healthcare services
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 8:00 AM - 8:00 PM
                <br />
                Saturday - Sunday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorHomepage;