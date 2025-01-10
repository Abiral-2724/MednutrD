import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Phone, MapPin, Star, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DoctorHomepage = () => {
  const navigate = useNavigate() ;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-blue-600">HealthCare</div>
            <div className="space-x-6">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost" onClick={() => navigate('/doctor-services')}>Services</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="default">Book Appointment</Button>
            </div>
          </nav>

          <div className="flex items-center justify-between py-12">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your Health Is Our Top Priority
              </h1>
              <p className="text-gray-600 mb-8">
                Expert medical care with a personal touch. Our experienced team is here
                to provide you with the highest quality healthcare services.
              </p>
              <div className="space-x-4">
                <Button size="lg" onClick={() => navigate('/schedule')}>Schedule a Visit</Button>
                
                <Button variant="outline" size="lg">Learn More</Button>
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

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Primary Care", icon: <User className="h-8 w-8 mb-4" /> },
            { title: "Specialist Consultation", icon: <Star className="h-8 w-8 mb-4" /> },
            { title: "Emergency Care", icon: <Phone className="h-8 w-8 mb-4" /> },
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
                    <span className="font-semibold">Available 7 days a week</span>
                  </div>
                  <p className="text-gray-600">Choose a convenient time for your visit</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold">Extended Hours</span>
                  </div>
                  <p className="text-gray-600">Morning and evening slots available</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="mt-8 mr-5" onClick={() => navigate('/schedule')}>
              Schedule Now
            </Button>
            <Button size="lg" className="mt-8" onClick={() => navigate('/videocall')}>
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
                <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-semibold">Contact</span>
                </div>
                <p className="text-gray-600">Phone: (555) 123-4567<br />Email: care@healthcare.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HealthCare</h3>
              <p className="text-gray-400">Providing quality healthcare services</p>
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
              <p className="text-gray-400">Monday - Friday: 8:00 AM - 8:00 PM<br />
                Saturday - Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorHomepage;