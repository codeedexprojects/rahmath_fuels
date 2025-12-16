import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Truck, Navigation, UserCheck, Route, Clock } from "lucide-react";

export default function TransportationFocus() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const focusAreas = [
    {
      icon: Truck,
      title: "Certified Fuel Tanker Fleet",
      description:
        "A modern, fully certified tanker fleet designed for safe and secure fuel transportation across all regions.",
    },
    {
      icon: Navigation,
      title: "GPS-Enabled Vehicle Tracking",
      description:
        "Real-time GPS monitoring ensures visibility, route accuracy, and on-time fuel deliveries.",
    },
    {
      icon: UserCheck,
      title: "Trained & Licensed Drivers",
      description:
        "Experienced, licensed drivers trained in fuel handling, safety protocols, and compliance standards.",
    },
    {
      icon: Route,
      title: "Route Planning & Risk Management",
      description:
        "Optimized route planning to reduce transit risks, delays, and operational disruptions.",
    },
    {
      icon: Clock,
      title: "24/7 Logistics Coordination",
      description:
        "Round-the-clock logistics support to ensure uninterrupted fuel transportation and response readiness.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 lg:px-10 py-16 bg-white">
      
      {/* HEADING */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Our Transportation Focus
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((item, index) => (
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
              <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
