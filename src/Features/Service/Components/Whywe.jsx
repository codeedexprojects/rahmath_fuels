import React from 'react'
import truck from "../../../assets/Icons/Truck.gif";
import badge from "../../../assets/Icons/Badge.gif";
import icon from "../../../assets/Icons/Icon.gif";

export default function Whywe() {
      const stats = [
        {
          icon: icon,
          title: "20+ Years",
          desc: "Industry Expertise",
        },
        {
          icon: truck,
          title: "24/7",
          desc: "Logistics Support",
        },
        {
          icon: badge,
          title: "High Quality",
          desc: "Certified Supply",
        },
      ];
  return (
    <div>
         <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className=" mx-auto px-4 sm:px-6">
            <h1 className='text-center font-bold text-[36px] mb-6'>Why Businesses Choose Rahmat Fuel</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  px-6 sm:px-8
                  py-8 sm:py-10
                  text-center
                  hover:shadow-md
                  transition
                  duration-300
                "
              >
                <div className="flex justify-center  mb-3 sm:mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}
