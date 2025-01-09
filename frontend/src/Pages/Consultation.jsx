import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const Consultation = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const card = [
    {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description: "Expert in treating heart-related conditions.",
      fee: "$200",
    },
    {
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      description: "Skincare and dermatological expert.",
      fee: "$150",
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      description: "Specialist in child healthcare.",
      fee: "$100",
    },
    {
      name: "Dr. Jane George",
      specialty: "Neurology",
      description:
        "Treatment of all categories of conditions and diseases involving the nervous system.",
      fee: "$430",
    },
    {
      name: "Dr. Ava Thomsan",
      specialty: "Psychiatry",
      description:
        "Psychiatry is the medical specialty devoted to the diagnosis, prevention, and treatment of deleterious mental conditions.",
      fee: "$75",
    },
    {
      name: "Dr. Oliver Vale",
      specialty: "Endocrinologists",
      description:
        "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.",
      fee: "$152",
    },
    {
      name: "Dr. Chandler Bing",
      specialty: "Gastroenterologists",
      description:
        "They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder.",
      fee: "$200",
    },
    {
      name: "Dr. Joey Barry",
      specialty: "Hematologists",
      description:
        "These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
      fee: "$340",
    },
    {
      name: "Dr. Racheal Geller",
      specialty: "Nephrologists",
      description:
        "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
      fee: "$210",
    },
    {
      name: "Dr. Ross Gelleen",
      specialty: "Neurologists",
      description:
        "These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.",
      fee: "$900",
    },
    // Rest of the objects...
  ];
  

  const handleBookNow = (doctor) => {
    setCart(prev => [...prev, doctor]);
    alert(`${doctor.name} has been added to the cart.`);
  };

  const filteredDoctors = card.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mt-1">{doctor.specialty}</p>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">{doctor.description}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <button 
                    onClick={() => handleBookNow(doctor)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                  >
                    Book Appointment
                  </button>
                  <button 
                    className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-8 right-8">
            <button 
              className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
            >
              View Cart ({cart.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultation;