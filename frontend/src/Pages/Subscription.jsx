import React from 'react';
import Navbar from './Navbar';

const Subscription = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: [
        'Virtual consultations: 2/month',
        'Basic health tracking',
        'Diet recommendations',
        'Email support',
        'Mobile app access'
      ],
      highlighted: false
    },
    {
      name: 'Premium',
      price: '49',
      features: [
        'Virtual consultations: 5/month',
        'Advanced health tracking',
        'Personalized diet plans',
        'Priority support 24/7',
        'Mobile app access',
        'Mental health support',
        'Fitness tracking'
      ],
      highlighted: true
    },
    {
      name: 'Family',
      price: '89',
      features: [
        'Virtual consultations: 10/month',
        'Family health tracking',
        'Custom diet plans for 4',
        'Premium support 24/7',
        'Mobile app access',
        'Mental health support',
        'Fitness tracking',
        'Quarterly health reports'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Health Plan
          </h1>
          <p className="text-gray-600">Select the perfect plan for your healthcare needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform hover:-translate-y-2'
                  : 'bg-white hover:-translate-y-2'
              } transition-all duration-300 shadow-xl`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${!plan.highlighted && 'text-gray-800'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${!plan.highlighted && 'text-gray-800'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                  /month
                </span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-2 ${
                        plan.highlighted ? 'text-blue-100' : 'text-blue-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={`${!plan.highlighted && 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include access to basic features and 24/7 customer support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;