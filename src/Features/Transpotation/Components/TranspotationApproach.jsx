import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ClipboardCheck, Route, Truck, Radar } from "lucide-react";

export default function TransportationApproach() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Assess Transport Requirements",
      description:
        "We analyze fuel volumes, delivery locations, site conditions, and timelines to build a clear transportation plan.",
    },
    {
      icon: Route,
      title: "Plan Safe & Efficient Routes",
      description:
        "Routes are carefully optimized to ensure safety, minimize risks, and maintain on-time delivery schedules.",
    },
    {
      icon: Truck,
      title: "Certified Fuel Transportation",
      description:
        "Fuel is transported using certified tankers and approved equipment in compliance with UAE safety standards.",
    },
    {
      icon: Radar,
      title: "Real-Time Delivery Monitoring",
      description:
        "GPS-enabled monitoring allows continuous tracking to ensure secure and successful delivery completion.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-8 lg:px-10 py-16 bg-white">
      
      {/* HEADING */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
      >
        Our Approach
      </h2>

      {/* TIMELINE */}
      <div className="px-10 mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative pl-14 pb-12 last:pb-0"
          >
            {/* VERTICAL LINE */}
            {index !== steps.length - 1 && (
              <span className="absolute left-6 top-12 w-px h-full bg-gray-300"></span>
            )}

            {/* STEP ICON */}
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
              <step.icon className="w-6 h-6 text-white" />
            </div>

            {/* CONTENT */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
