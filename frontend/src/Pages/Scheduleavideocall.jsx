import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useNavigate } from "react-router-dom";
import { 
  Video, 
  Clock, 
  Globe, 
  Wifi, 
  Monitor, 
  MessageSquare, 
  Phone, 
  User, 
  Calendar as CalendarIcon,
  CheckCircle2 
} from 'lucide-react';

const VideoConsultation = () => {
  const [date, setDate] = React.useState(new Date());
 
  const navigate = useNavigate();

  const handleSchedule = () => {
   

    setTimeout(() => {
      navigate('/doctor-home');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Video className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Schedule Video Consultation
            </h1>
            <p className="text-gray-600 mt-2">
              Connect with our healthcare professionals from the comfort of your home
            </p>
          </div>

          {/* Requirements Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Requirements for Video Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Wifi className="h-6 w-6" />,
                    title: "Stable Internet",
                    description: "Minimum 1 Mbps speed required"
                  },
                  {
                    icon: <Monitor className="h-6 w-6" />,
                    title: "Device Ready",
                    description: "Computer or mobile device with camera"
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Quiet Environment",
                    description: "For clear communication"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Consultation Details */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Consultation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-9" placeholder="Your full name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-9" placeholder="Your contact number" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Consultation Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Consultation</SelectItem>
                      <SelectItem value="followup">Follow-up Visit</SelectItem>
                      <SelectItem value="specialist">Specialist Consultation</SelectItem>
                      <SelectItem value="second-opinion">Second Opinion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Preferred Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Symptoms/Concerns</Label>
                  <Textarea 
                    placeholder="Please describe your symptoms or concerns"
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Schedule Section */}
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
                  <Label>Available Time Slots</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
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

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600">
                      Consultation Duration: 30 minutes
                    </p>
                    <p className="text-sm text-blue-600">
                      Fee: $50
                    </p>
                  </div>
                  <Button 
                    onClick={handleSchedule}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Video Consultation Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <CalendarIcon className="h-6 w-6" />,
                    title: "Schedule",
                    description: "Book your preferred time slot"
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6" />,
                    title: "Confirmation",
                    description: "Receive confirmation via email"
                  },
                  {
                    icon: <Video className="h-6 w-6" />,
                    title: "Join Call",
                    description: "Click the link to join consultation"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Consultation",
                    description: "Meet with healthcare professional"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;