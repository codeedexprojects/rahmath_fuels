import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Truck, Factory, Home } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    { icon: Building2, label: "Construction" },
    { icon: Truck, label: "Logistics" },
    { icon: Factory, label: "Industrial" },
    { icon: Home, label: "Retail Fuel Stations" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-50"
    >
      <div className="px-10 mx-auto">
        {/* SECTION TITLE */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-4 
            sm:gap-6 
            lg:gap-8
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + index * 150}
                className="
                  bg-white 
                  rounded-xl 
                  p-6 sm:p-8 
                  flex flex-col items-center justify-center 
                  gap-4 sm:gap-5
                  hover:shadow-lg 
                  transition-shadow duration-300 
                  group cursor-pointer
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14 h-14 sm:w-16 sm:h-16 
                    bg-blue-100 
                    rounded-xl 
                    flex items-center justify-center 
                    group-hover:bg-blue-900 
                    transition-colors duration-300
                  "
                >
                  <Icon
                    className="text-blue-900 group-hover:text-white transition-colors duration-300"
                    size={28}
                  />
                </div>

                {/* LABEL */}
                <p className="text-gray-700 font-medium text-center text-sm sm:text-base lg:text-lg">
                  {industry.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
