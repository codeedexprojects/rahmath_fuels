import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import truck from "../../../assets/Images/Trans.png";
import HandShake from "../../../assets/Images/Hanshake.png";

export default function AboutCompanySection() {
 

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="px-10 mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 mb-20">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1
              className="
                text-[32px]  sm:text-[42px] md:text-[48px] lg:text-[52px] 
                xl:text-[58px] font-bold leading-tight text-gray-900 
              "
            >
              Fueling Businesses With Trust & Excellence
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Delivering Certified, High-Quality Fuel Solutions Backed By Decades Of Expertise.
            </p>

            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold 
              hover:bg-blue-800 transition duration-200 shadow-lg hover:shadow-xl">
              Contact Our Team
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex flex-row items-end md:items-center justify-start gap-3 min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]  ">

            {/* Blue Decorative Box */}
            <div
              className="
                absolute 
                top-10 sm:top-12 md:top-14 
                left-12 sm:left-12 md:left-16
                w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px]
                h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px]
                bg-[#203882] rounded-lg z-0
              "
            />

            {/* TRUCK IMAGE */}
            <div
              className="
                relative z-20 rounded-lg mt-20 overflow-hidden shadow-xl
                w-[180px] sm:w-[210px] md:w-[240px] lg:w-[270px]
                h-[240px] sm:h-[260px] md:h-[300px] lg:h-[330px]
                object-cover
              "
            >
              <img src={truck} alt="truck" className="w-full h-full object-cover" />
            </div>

            {/* HANDSHAKE IMAGE */}
            <div
              className=" 
                relative z-20 mb-30 rounded-lg overflow-hidden shadow-xl
                w-[130px] sm:w-[180px] md:w-[180px] lg:w-[200px]
                h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px]
              "
            >
              <img src={HandShake} alt="handshake" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

    

      </div>
    </section>
  );
}
