import React from 'react';
import { Fuel, Car, Package } from 'lucide-react';

export default function FuelServices() {
  const services = [
    {
      icon: Fuel,
      title: "Diesel 10ppm",
      description: "Ultra-Low Sulfur Diesel For Efficient Industrial And Commercial Performance"
    },
    {
      icon: Car,
      title: "Retail Vehicle Fuel Services",
      description: "Reliable, High-Quality Fuel Supply For Cars, Fleets, And On-Road Vehicles."
    },
    {
      icon: Package,
      title: "Wholesale Fuel Distribution",
      description: "High-Volume Fuel Supply With Consistent Quality And On-Time Delivery."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="inline-block w-12 h-0.5 bg-gray-800 align-middle mr-4"></span>
          Type Of Fuels We Supply
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}