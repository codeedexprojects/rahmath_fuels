import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fuel, Truck, Package } from "lucide-react";

export default function FuelTypes() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const services = [
    {
      icon: Fuel,
      title: "Diesel 10ppm",
      description:
        "Ultra-Low Sulfur Diesel For Efficient Industrial And Commercial Performance",
    },
    {
      icon: Truck,
      title: "Retail Vehicle Fuel Services",
      description:
        "Reliable, High-Quality Fuel Supply For Cars, Fleets, And On-Road Vehicles.",
    },
    {
      icon: Package,
      title: "Wholesale Fuel Distribution",
      description:
        "High-Volume Fuel Supply With Consistent Quality And On-Time Delivery.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 lg:px-10 py-16 bg-white">
      
      {/* HEADING */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Type Of Fuels We Supply
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="
              bg-white border border-gray-200 rounded-lg p-8
              hover:shadow-lg transition-shadow duration-300
            "
          >
            {/* ICON */}
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 150}
              className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
            >
              <service.icon
                className="w-8 h-8 text-white"
                strokeWidth={2}
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
