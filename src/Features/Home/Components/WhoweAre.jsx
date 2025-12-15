import React from "react";
import truck from "../../../assets/Images/Trans.png";
import HandShake from "../../../assets/Images/Hanshake.png";

export default function WhoWeAre() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className=" mx-auto px-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 inline-flex items-center gap-4">
            <span className="w-10 sm:w-16 h-0.5 bg-gray-400"></span>
            Who We Are
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2  items-center ">
          
          {/* ✅ Left Side - SAME IMAGE STRUCTURE (Only Responsive Sizes Added) */}
          <div className="relative flex items-start justify-start min-h-[260px] sm:min-h-[320px] lg:min-h-[350px]">
            
            {/* ✅ SAME Blue Section - Now Responsive */}
            <div className="
              absolute 
              top-[40px] sm:top-[60px] 
              left-[40px] sm:left-[80px] 
              w-[200px] sm:w-[280px] 
              h-[130px] sm:h-[180px] 
              bg-[#203882] 
              rounded-lg 
              z-10">
            </div>

            {/* ✅ SAME Truck Image */}
            <div className="relative z-20 rounded-lg overflow-hidden shadow-xl 
              w-[180px] sm:w-[250px] 
              h-[160px] sm:h-[200px] 
              mt-25 ml-0">
              <img
                src={truck}
                alt="Fuel trucks"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ SAME Handshake Image */}
            <div className="relative z-20 rounded-lg overflow-hidden shadow-xl  
             lg:w-[200px] sm:w-[160px] 
              h-[160px] sm:h-[200px] 
              ml-3 sm:ml-5">
              <img
                src={HandShake}
                alt="Business handshake"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* ✅ Right Side - Responsive Only */}
          <div className="space-y-6 text-center lg:text-left ">
            <h6 className="text-xl sm:text-2xl py-5 lg:text-[24px]  text-[#242424] leading-tight ">
              We Are A Leading Fuel Trading Company Delivering Premium Petroleum Products With Guaranteed Quality, Flexible Delivery, And Industry-Standard Safety Compliance.
            </h6>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At Rahmat Fuel Trading LLC, We Are Driven By Our Mission To Fuel Success For Our Customers, Employees, And Communities.
            </p>

            <button className="px-6 py-3 bg-[#203882] text-white rounded-md hover:bg-[#1a2d6b] transition-colors font-medium">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
