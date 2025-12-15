import React from "react";
import { Building2, Factory, Landmark, Truck, Ship } from "lucide-react";

export default function IndustriesCompliance() {
  const industries = [
    {
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Construction & Infrastructure Projects",
    },
    {
      icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Logistics & Transportation Fleets",
    },
    {
      icon: <Factory className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Industrial Manufacturing",
    },
    {
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Marine Operations",
    },
    {
      icon: <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Government & Municipal Services",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12 lg:py-16">
      
      {/* ✅ CENTERED RESPONSIVE CONTAINER */}
      <div className=" px-10 sm:px-6 lg:px-10">

        {/* TITLE */}
        <h2 className="text-lg sm:text-xl lg:text-3xl font-bold 
                       text-center mb-6 sm:mb-8 lg:mb-12 text-gray-900">
          — Industries That Depend on Bulk Fuel Delivery
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-4 sm:gap-6 lg:gap-8">
          
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 
                         p-4 sm:p-5 rounded-lg 
                         bg-white border border-gray-200
                         hover:border-blue-300 hover:shadow-md 
                         transition-all duration-200"
            >
              {/* ICON */}
              <div className="text-blue-600 flex-shrink-0">
                {industry.icon}
              </div>

              {/* TEXT */}
              <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug">
                {industry.title}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
