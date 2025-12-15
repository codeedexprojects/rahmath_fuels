import React from 'react';
import FuelTank from "../../../assets/Images/FuelTank.jpg";
import Truck from "../../../assets/Images/Trans.png";
import Test from "../../../assets/Images/Testing.png";

export default function FuelServicesHero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10">
      <div className="px-10 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Fuel Services For Every Industry
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Delivering Certified Petroleum Products With Unmatched Efficiency Across The UAE And Beyond.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-xl">
              Get A Quote
            </button>
          </div>

          {/* RIGHT CONTENT — FULLY RESPONSIVE GRID */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">

              {/* TOP LEFT — Tilt + Responsive */}
              <div className="
                bg-white rounded-2xl shadow-lg overflow-hidden 
                transform rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105
                transition-all duration-300
                aspect-[16/10] sm:aspect-[16/9]
              ">
                <img src={Test} alt="Laboratory testing" className="w-full h-full object-cover" />
              </div>

              {/* TALL TRUCK IMAGE — Responsive & Two-row span */}
              <div className="
                bg-white rounded-2xl shadow-lg overflow-hidden row-span-2
                transform hover:scale-105 transition-all duration-300
                aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] lg:aspect-[4/5]
              ">
                <img src={Truck} alt="Fuel delivery truck" className="w-full h-full object-cover" />
              </div>

              {/* BOTTOM LEFT — Tilt + Responsive */}
              <div className="
                bg-white rounded-2xl shadow-lg overflow-hidden 
                transform rotate-[2deg] hover:rotate-0 hover:scale-105 
                transition-all duration-300
                aspect-[16/10] sm:aspect-[16/9]
              ">
                <img src={FuelTank} alt="Fuel storage tanks" className="w-full h-full object-cover" />
              </div>

            </div>

            {/* Decorative Blurs */}
            <div className="absolute -z-10 top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-24 sm:w-40 h-24 sm:h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
