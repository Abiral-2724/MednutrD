import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Video, 
  Stethoscope, 
  Clock, 
  Calendar, 
  AlertCircle,
  UserPlus,
  Activity,
  Microscope,
  Heart
} from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Icon className="w-8 h-8 text-blue-600" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
      <CardDescription className="text-base mt-2">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <Button className="w-full mt-4">Book Now</Button>
    </CardContent>
  </Card>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Specialist Consultation",
      description: "Connect with experienced specialists across multiple disciplines including cardiology, dermatology, orthopedics, and more.",
      icon: UserPlus
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams and state-of-the-art facilities for urgent medical needs.",
      icon: AlertCircle
    },
    {
      title: "Primary Care",
      description: "Comprehensive primary healthcare services including regular check-ups, vaccinations, and preventive care.",
      icon: Stethoscope
    },
    {
      title: "Video Consultation",
      description: "Convenient online consultations with healthcare professionals from the comfort of your home.",
      icon: Video
    },
    {
      title: "Lab Services",
      description: "Advanced diagnostic testing and laboratory services with quick and accurate results.",
      icon: Microscope
    },
    {
      title: "Wellness Programs",
      description: "Personalized wellness programs including nutrition counseling, fitness plans, and mental health support.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Healthcare Services</h1>
          <p className="text-xl opacity-90">Comprehensive care for you and your family</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock medical support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Activity className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Highly qualified medical professionals</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Simple online booking system</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Always Connected</h3>
              <p className="text-gray-600">Immediate response to your queries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;