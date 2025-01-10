import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import People from '../assets/people.png'

const DoctorCard = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);


  const cards = [
    {
      photo:People,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200"
    },
    {
      photo:People,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist", 
      description: "Skincare and dermatological expert.",
      fee: "$150"
    },
    {
      photo:People,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$100"
    },
    {
      photo:People,
      name: "Dr. Jane George",
      specialty: "Neurology",
      description: "Treatment of all categories of conditions and disease involving the nervous system.",
      fee: "$430"
    },
    {
      photo:People,
      name: "Dr. Ava Thomsan",
      specialty: "Psychiatry", 
      description: "Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of deleterious mental conditions.",
      fee: "$75"
    },
    {
      photo:People,
      name: "Dr. Oliver Vale",
      specialty: "Endocrinologists",
      description: "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.",
      fee: "$152"
    },
    {
      photo:People,
      name: "Dr. Chandler Bing",
      specialty: "Gastroenterologists",
      description: "They're specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder.",
      fee: "$200"
    },
    {
      photo:People,
      name: "Dr. Joey Barry",
      specialty: "Hematologists",
      description: "These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
      fee: "$340"
    },
    {
      photo:People,
      name: "Dr. Racheal Geller",
      specialty: "Nephrologists",
      description: "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$210"
    },
    {
      photo:People,
      name: "Dr. Ross Gelleen",
      specialty: "Neurologists",
      description: "These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.",
      fee: "$900"
    },
    {
      photo:People,
      name: "Dr. Pheebe Deb",
      specialty: "Oncologists",
      description: "They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.",
      fee: "$768"
    },
    {
      photo:People,
      name: "Dr. Rosie Jack",
      specialty: "Otolaryngologists",
      description: "They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system.",
      fee: "$100"
    },
    {
      photo:People,
      name: "Dr. Georgiana Messi",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$130"
    },
    {
      photo:People,
      name: "Dr. Scarlett Ruth",
      specialty: "Pathologists",
      description: "These lab doctors identify the causes of diseases.",
      fee: "$40"
    },
    {
      photo:People,
      name: "Dr. Harley Jaely",
      specialty: "Plastic Surgeons",
      description: "They rebuild or repair your skin, face, hands, breasts, or body.",
      fee: "$650"
    },
    {
      photo:People,
      name: "Dr. Tim Horton",
      specialty: "Pulmonologists",
      description: "Specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.",
      fee: "$450"
    },
    {
      photo:People,
      name: "Dr. Jenny Jade",
      specialty: "Radiologists",
      description: "They use X-rays, ultrasound, and other imaging tests to diagnose diseases.",
      fee: "$990"
    },
    {
      photo:People,
      name: "Dr. Velma Walker",
      specialty: "Pediatrician",
      description: "They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$790"
    },
    {
      photo:People,
      name: "Dr. Allen Walker",
      specialty: "Sports Medicine Specialists",
      description: "These doctors diagnose, treat, and prevent injuries related to sports and exercise.",
      fee: "$89"
    },
    {
      photo:People,
      name: "Dr. Jackie Jade",
      specialty: "Urologists",
      description: "Surgeons who care for men and women for problems in the urinary tract, like a leaky bladder.",
      fee: "$70"
    },
    {
      photo:People,
      name: "Dr. Greig Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$104"
    },
    {
      photo:People,
      name: "Dr. Emery Doe",
      specialty: "Rheumatologists",
      description: "Specialist in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$200"
    },
    {
      photo:People,
      name: "Dr. Allena Joe",
      specialty: "Psychiatrists",
      description: "Doctors work with people with mental, emotional, or addictive disorders.",
      fee: "$180"
    },
    {
      photo:People,
      name: "Dr. Emilser John",
      specialty: "Physiatrists",
      description: "specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.",
      fee: "$1000"
    },
    {
      photo:People,
      name: "Dr. James Joey",
      specialty: "Ophthalmologists",
      description: "Specialist of Eye",
      fee: "$240"
    },
    {
      photo:People,
      name: "Dr. Monica Bing",
      specialty: "Gynecologists",
      description: "Specialist in women's health, including pregnancy and childbirth",
      fee: "$300"
    },
    {
      photo:People,
      name: "Dr. Darisy Charles",
      specialty: "Nephrologists",
      description: "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$170"
    },
    {
      photo:People,
      name: "Dr. John Dacke",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200"
    }
  ];
  
      const handleCardChange = (direction) => {
        if (direction === "next") {
          setCurrentCard((prev) => (prev + 1) % cards.length);
        } else {
          setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
        }
      };
    
      const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 3; i++) {
          visibleCards.push(cards[(currentCard + i) % cards.length]);
        }
        return visibleCards;
      };
    
      return (
        <div className="flex items-center justify-center gap-4 p-6 overflow-hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => handleCardChange("prev")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
    
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
    
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => handleCardChange("next")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      );
    };
    
    export default DoctorCard;