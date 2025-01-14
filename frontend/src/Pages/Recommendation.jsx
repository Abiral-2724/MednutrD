import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import People from '../assets/people.png'

const Recommendation = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);


  const cards = [
    {
      photo:People,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
      location:"Pune"
    },
    {
      photo:People,
      name: "Dr. Monica Dacke",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$100",
      location:"Pune"
    }
  ];
  
    
      const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 2; i++) {
          visibleCards.push(cards[(currentCard + i) % cards.length]);
        }
        return visibleCards;
      };
    
      return (
        <div className="flex items-center justify-center gap-4 p-6 overflow-hidden mb-9">
          <div className="flex gap-6">
            {getVisibleCards().map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="w-[320px] bg-gradient-to-br from-blue-100 to-purple-100 hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-2">
                      <AvatarImage src={doctor.photo} alt={doctor.name} />
                      <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl">{doctor.name}</h3>
                    <Badge variant="secondary" className="mx-auto">
                      {doctor.specialty}
                    </Badge>
                    <Badge variant="secondary" className="mx-auto">
                      {doctor.location}
                    </Badge>
                  </CardHeader>
    
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {doctor.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-lg">
                        {doctor.fee}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/explore')}
                      >
                        Explore More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
    
                  <CardFooter>
                    <Button className="w-full bg-black hover:bg-gray-800" size="lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Recommendation;