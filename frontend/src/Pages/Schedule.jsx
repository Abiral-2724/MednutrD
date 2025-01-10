import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, MapPin, User, Phone, MessageSquare } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const [date, setDate] = React.useState(new Date());
    const navigate = useNavigate() ;
  const handleclick = () => {
    navigate('/doctor-home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Schedule Your Visit
            </h1>
            <p className="text-gray-600 mt-2">
              Book an appointment with our healthcare professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Appointment Form */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Appointment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="firstName" className="pl-9" placeholder="John" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="lastName" className="pl-9" placeholder="Doe" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="phone" className="pl-9" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="email" type="email" className="pl-9" placeholder="john@example.com" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Type */}
                <div className="space-y-2">
                  <Label>Appointment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Checkup</SelectItem>
                      <SelectItem value="specialist">Specialist Consultation</SelectItem>
                      <SelectItem value="followup">Follow-up Visit</SelectItem>
                      <SelectItem value="virtual">Virtual Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Location */}
                <div className="space-y-2">
                  <Label>Preferred Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Select>
                      <SelectTrigger className="pl-9">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Main Hospital</SelectItem>
                        <SelectItem value="north">North Clinic</SelectItem>
                        <SelectItem value="south">South Clinic</SelectItem>
                        <SelectItem value="virtual">Virtual Visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Please provide any additional information about your visit"
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Calendar Section */}
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />

                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Select>
                      <SelectTrigger className="pl-9">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9">9:00 AM</SelectItem>
                        <SelectItem value="10">10:00 AM</SelectItem>
                        <SelectItem value="11">11:00 AM</SelectItem>
                        <SelectItem value="14">2:00 PM</SelectItem>
                        <SelectItem value="15">3:00 PM</SelectItem>
                        <SelectItem value="16">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" onClick={handleclick}>
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Emergency Contact",
                description: "Call (555) 999-911 for immediate assistance"
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Working Hours",
                description: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM"
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Location",
                description: "123 Medical Center Drive, Healthcare City"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;