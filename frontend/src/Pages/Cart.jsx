import React from 'react';
import Navbar from './Navbar';

const Cart = ({ cart, handleRemove, handleCheckout }) => {
e
  const totalAmount = cart.reduce((sum, doctor) => sum + doctor.fee);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((doctor, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 font-medium mb-1">{doctor.fee}</p>
                  <button
                    onClick={() => handleRemove(doctor)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Total Amount</h2>
                <p className="text-xl font-semibold text-blue-600">{totalAmount}</p>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty. Add some appointments to proceed!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
