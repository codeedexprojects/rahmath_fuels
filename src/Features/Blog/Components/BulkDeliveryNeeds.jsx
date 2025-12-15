import React from "react";
import Trans from "../../../assets/Images/BlogDelivery.jpg";

export default function BulkFuelDeliveryNeeds() {
  const advantages = [
    "Prevents Unexpected Fuel Shortages",
    "Ensures Uninterrupted Productivity",
    "Saves Time And Cost Compared To Self-Refueling",
    "Guarantees Certified, High-Quality Fuel",
    "Provides Safer And Controlled Onsite Delivery",
  ];

  return (
    <section className="bg-gray-100 py-10 sm:py-14">
      
      {/* ✅ CENTERED RESPONSIVE CONTAINER */}
      <div className="px-10  sm:px-6 lg:px-10">

        {/* INFO CARD */}
        <div className="bg-white rounded-xl shadow-sm border-l-4 border-gray-800 
                        p-6 sm:p-8 mb-8 sm:mb-12">
          
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light 
                         text-center mb-3 sm:mb-4 text-gray-800">
            — Why Bulk Fuel Delivery Matters
          </h2>

          <p className="text-center text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
            Bulk Delivery Offers Several Advantages That Make It Essential For UAE Operations:
          </p>

          <ul className="space-y-3 max-w-xl mx-auto">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex gap-3 text-gray-700 text-sm sm:text-base">
                <span className="text-gray-800">•</span>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={Trans}
            alt="Fuel delivery trucks at industrial facility"
            className="w-full 
                       h-48 sm:h-64 lg:h-72 
                       object-cover"
          />
        </div>

      </div>
    </section>
  );
}
