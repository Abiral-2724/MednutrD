import React, { useState } from 'react';
import { Search, ShoppingCart, Filter } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from './Navbar';

const PurchaseMedicine = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const medicines = [
    { id: 1, name: 'Paracetamol', price: 5.99, category: 'Pain Relief', description: '500mg tablets for fever and pain', stock: 50 },
    { id: 2, name: 'Amoxicillin', price: 12.99, category: 'Antibiotics', description: '250mg capsules', stock: 30 },
    { id: 3, name: 'Cetirizine', price: 8.99, category: 'Allergy', description: '10mg antihistamine tablets', stock: 45 },
    { id: 4, name: 'Omeprazole', price: 15.99, category: 'Digestive', description: '20mg acid reducer', stock: 25 },
    { id: 5, name: 'Vitamin D3', price: 9.99, category: 'Supplements', description: '1000 IU daily supplement', stock: 60 },
    { id: 6, name: 'Ibuprofen', price: 6.99, category: 'Pain Relief', description: '200mg anti-inflammatory', stock: 40 },
    { id: 7, name: 'Aspirin', price: 4.99, category: 'Pain Relief', description: '81mg low-dose tablets', stock: 35 },
    { id: 8, name: 'Loratadine', price: 7.99, category: 'Allergy', description: '10mg non-drowsy antihistamine', stock: 50 },
    { id: 9, name: 'Metformin', price: 10.99, category: 'Diabetes', description: '500mg blood sugar control tablets', stock: 20 },
    { id: 10, name: 'Losartan', price: 11.99, category: 'Blood Pressure', description: '50mg tablets for hypertension', stock: 25 },
    { id: 11, name: 'Simvastatin', price: 13.99, category: 'Cholesterol', description: '20mg cholesterol-lowering tablets', stock: 15 },
    { id: 12, name: 'Ranitidine', price: 8.99, category: 'Digestive', description: '150mg acid reducer tablets', stock: 30 },
    { id: 13, name: 'Fexofenadine', price: 9.99, category: 'Allergy', description: '180mg tablets for seasonal allergies', stock: 40 },
    { id: 14, name: 'Levothyroxine', price: 7.49, category: 'Thyroid', description: '50mcg tablets for thyroid function', stock: 50 },
    { id: 15, name: 'Prednisone', price: 5.99, category: 'Steroid', description: '5mg tablets for inflammation', stock: 35 },
    { id: 16, name: 'Atorvastatin', price: 12.49, category: 'Cholesterol', description: '10mg cholesterol-lowering tablets', stock: 20 },
    { id: 17, name: 'Ciprofloxacin', price: 14.99, category: 'Antibiotics', description: '500mg broad-spectrum antibiotics', stock: 25 },
    { id: 18, name: 'Hydrochlorothiazide', price: 6.49, category: 'Diuretic', description: '25mg tablets for fluid retention', stock: 40 },
    { id: 19, name: 'Melatonin', price: 4.99, category: 'Supplements', description: '3mg tablets for sleep aid', stock: 60 },
    { id: 20, name: 'Clopidogrel', price: 16.99, category: 'Blood Thinner', description: '75mg tablets to prevent blood clots', stock: 15 },
    { id: 21, name: 'Salbutamol', price: 9.99, category: 'Respiratory', description: 'Inhaler for asthma relief', stock: 25 },
    { id: 22, name: 'Azithromycin', price: 18.99, category: 'Antibiotics', description: '500mg capsules', stock: 20 },
    { id: 23, name: 'Calcium Carbonate', price: 7.99, category: 'Supplements', description: 'Calcium tablets for bone health', stock: 50 },
    { id: 24, name: 'Esomeprazole', price: 13.49, category: 'Digestive', description: '40mg acid reducer capsules', stock: 30 },
    { id: 25, name: 'Montelukast', price: 8.49, category: 'Respiratory', description: '10mg tablets for allergies and asthma', stock: 40 },
    { id: 26, name: 'Warfarin', price: 11.99, category: 'Blood Thinner', description: '2mg tablets to prevent clotting', stock: 15 },
    { id: 27, name: 'Doxycycline', price: 19.99, category: 'Antibiotics', description: '100mg tablets for bacterial infections', stock: 20 },
    { id: 28, name: 'Zinc Sulfate', price: 5.49, category: 'Supplements', description: 'Tablets to support immunity', stock: 50 },
    { id: 29, name: 'Pantoprazole', price: 14.49, category: 'Digestive', description: '40mg acid reducer tablets', stock: 35 },
    { id: 30, name: 'Fluticasone', price: 9.99, category: 'Respiratory', description: 'Nasal spray for allergies', stock: 45 },
    { id: 31, name: 'Insulin Glargine', price: 25.99, category: 'Diabetes', description: 'Long-acting insulin injections', stock: 10 },
    { id: 32, name: 'Metronidazole', price: 9.49, category: 'Antibiotics', description: '400mg tablets for infections', stock: 30 },
    { id: 33, name: 'Amlodipine', price: 10.99, category: 'Blood Pressure', description: '5mg tablets for hypertension', stock: 40 },
    { id: 34, name: 'Propranolol', price: 12.99, category: 'Heart', description: '10mg tablets for heart conditions', stock: 25 },
    { id: 35, name: 'Lansoprazole', price: 15.49, category: 'Digestive', description: '30mg acid reducer capsules', stock: 20 },
    { id: 36, name: 'Ivermectin', price: 8.49, category: 'Antiparasitic', description: '12mg tablets for parasitic infections', stock:20}
  ] ;

  const addToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Purchase Medicines
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search medicines..." 
                className="pl-10"
              />
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                      {cartItems.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                  {cartItems.length > 0 ? (
                    <Button className="w-full mt-4">
                      Checkout (${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)})
                    </Button>
                  ) : (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  <span>{medicine.name}</span>
                  <Badge variant="secondary">{medicine.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{medicine.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${medicine.price}</span>
                  <Badge variant="outline">{medicine.stock} in stock</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => addToCart(medicine)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Prescription?</h2>
          <p className="text-gray-600 mb-4">
            Upload your prescription or book a consultation with our doctors
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Upload Prescription</Button>
            <Button>Book Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseMedicine;