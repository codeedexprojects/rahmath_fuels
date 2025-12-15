import React from "react";
import Blur from "../../../assets/Images/Blur.jpg";


export default function BlogHero() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-10">
      <div className="px-10 mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE TEXT */}
          <div className="flex-1 text-center md:text-left ">
            <h1 className="font-bold text-gray-900 leading-tight mb-4 
              text-4xl sm:text-5xl md:text-[60px]
            ">
              Insights & Industry <br className="hidden md:block" /> Updates
            </h1>

            <p className="text-gray-600    mx-auto md:mx-0 
              text-sm sm:text-base lg:text-[24px] font-normal
            ">
              Stay Informed With The Latest News, Trends, And Guidance In Fuel
              Trading,  Logistics,Petroleum quality management.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center mb-5">

            {/* GRAY BACKGROUND CIRCLE */}
            <div
              className="
                rounded-full bg-[#e9edf5] relative
                ml-[60px]
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-52 md:h-52
                lg:w-60 lg:h-60
              "
            ></div>

            {/* WHITE OVERLAPPING IMAGE CIRCLE */}
            <div
              className="
                absolute 
                left-[-40px] top-[40px]
                rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-60 md:h-60
                lg:w-64 lg:h-64
              "
            >
              <img
                src= {Blur}
                alt='Industrial facility'
                className='w-full h-full object-cover'
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
