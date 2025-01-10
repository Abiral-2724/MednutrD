import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Navbar from "./Navbar";
import People from "../assets/people.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);

  const card = [
    {
      photo: People,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      description: "Skincare and dermatological expert.",
      fee: "$150",
    },
    {
      photo: People,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$100",
    },
    {
      photo: People,
      name: "Dr. Jane George",
      specialty: "Neurology",
      description:
        "Treatment of all categories of conditions and disease involving the nervous system.",
      fee: "$430",
    },
    {
      photo: People,
      name: "Dr. Ava Thomsan",
      specialty: "Psychiatry",
      description:
        "Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of deleterious mental conditions.",
      fee: "$75",
    },
    {
      photo: People,
      name: "Dr. Oliver Vale",
      specialty: "Endocrinologists",
      description:
        "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.",
      fee: "$152",
    },
    {
      photo: People,
      name: "Dr. Chandler Bing",
      specialty: "Gastroenterologists",
      description:
        "They're specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Joey Barry",
      specialty: "Hematologists",
      description:
        "These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
      fee: "$340",
    },
    {
      photo: People,
      name: "Dr. Racheal Geller",
      specialty: "Nephrologists",
      description:
        "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$210",
    },
    {
      photo: People,
      name: "Dr. Ross Gelleen",
      specialty: "Neurologists",
      description:
        "These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.",
      fee: "$900",
    },
    {
      photo: People,
      name: "Dr. Pheebe Deb",
      specialty: "Oncologists",
      description:
        "They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.",
      fee: "$768",
    },
    {
      photo: People,
      name: "Dr. Rosie Jack",
      specialty: "Otolaryngologists",
      description:
        "They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system.",
      fee: "$100",
    },
    {
      photo: People,
      name: "Dr. Georgiana Messi",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$130",
    },
    {
      photo: People,
      name: "Dr. Scarlett Ruth",
      specialty: "Pathologists",
      description: "These lab doctors identify the causes of diseases.",
      fee: "$40",
    },
    {
      photo: People,
      name: "Dr. Harley Jaely",
      specialty: "Plastic Surgeons",
      description:
        "They rebuild or repair your skin, face, hands, breasts, or body.",
      fee: "$650",
    },
    {
      photo: People,
      name: "Dr. Tim Horton",
      specialty: "Pulmonologists",
      description:
        "Specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.",
      fee: "$450",
    },
    {
      photo: People,
      name: "Dr. Jenny Jade",
      specialty: "Radiologists",
      description:
        "They use X-rays, ultrasound, and other imaging tests to diagnose diseases.",
      fee: "$990",
    },
    {
      photo: People,
      name: "Dr. Velma Walker",
      specialty: "Pediatrician",
      description:
        "They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$790",
    },
    {
      photo: People,
      name: "Dr. Allen Walker",
      specialty: "Sports Medicine Specialists",
      description:
        "These doctors diagnose, treat, and prevent injuries related to sports and exercise.",
      fee: "$89",
    },
    {
      photo: People,
      name: "Dr. Jackie Jade",
      specialty: "Urologists",
      description:
        "Surgeons who care for men and women for problems in the urinary tract, like a leaky bladder.",
      fee: "$70",
    },
    {
      photo: People,
      name: "Dr. Greig Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$104",
    },
    {
      photo: People,
      name: "Dr. Emery Doe",
      specialty: "Rheumatologists",
      description:
        "Specialist in arthritis and other diseases in your joints, muscles, bones, and tendons.",
      fee: "$200",
    },
    {
      photo: People,
      name: "Dr. Allena Joe",
      specialty: "Psychiatrists",
      description:
        "Doctors work with people with mental, emotional, or addictive disorders.",
      fee: "$180",
    },
    {
      photo: People,
      name: "Dr. Emilser John",
      specialty: "Physiatrists",
      description:
        "specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.",
      fee: "$1000",
    },
    {
      photo: People,
      name: "Dr. James Joey",
      specialty: "Ophthalmologists",
      description: "Specialist of Eye",
      fee: "$240",
    },
    {
      photo: People,
      name: "Dr. Monica Bing",
      specialty: "Gynecologists",
      description:
        "Specialist in women's health, including pregnancy and childbirth",
      fee: "$300",
    },
    {
      photo: People,
      name: "Dr. Darisy Charles",
      specialty: "Nephrologists",
      description:
        "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$170",
    },
    {
      photo: People,
      name: "Dr. John Dacke",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
    },
  ];

  const handleBookNow = (doctor) => {
    if (!cart.find((item) => item.id === doctor.id)) {
      setCart((prev) => [...prev, doctor]);
      alert(`${doctor.name} has been added to the cart.`);
    } else {
      alert(`${doctor.name} is already in the cart.`);
    }
  };

  const handleRemove = (doctor) => {
    setCart((prev) => prev.filter((item) => item.id !== doctor.id));
    alert(`${doctor.name} has been removed from the cart.`);
  };

  const handleCheckout = () => {
    const totalAmount = cart.reduce((sum, doctor) => sum + doctor.fee, 0);
    alert(`Checkout successful! Total Amount: ${totalAmount}`);
    setCart([]);
    setShowCart(false);
  };

  const filteredDoctors = card.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {showCart ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="flex items-center justify-between border-b pb-4 mb-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <p className="text-blue-500 font-semibold">
                        {doctor.fee}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(doctor)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="text-right">
                  <h3 className="text-xl font-bold">
                    Total: {cart.reduce((sum, doctor) => sum + doctor.fee,0)}
                  </h3>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowCart(false)}
              className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Back to Doctors
            </button>
          </div>
        ) : (
          <>
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor, index) => (
                <Card
                  key={doctor.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="relative">
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg">
                        {doctor.fee}
                      </div>
                      <img
                        src={doctor.photo}
                        alt={doctor.name}
                        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
                      />
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mt-1">
                        {doctor.specialty}
                      </p>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {doctor.description}
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      <button
                        onClick={() => handleBookNow(doctor)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                      >
                        Book Appointment
                      </button>
                      <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="fixed bottom-8 right-8">
                <button
                  className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setShowCart(true)}
                >
                  View Cart ({cart.length})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Consultation;
