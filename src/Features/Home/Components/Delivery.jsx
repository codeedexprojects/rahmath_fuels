import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FuelDeliveryProcess() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  const steps = [
    {
      number: 1,
      title: "Request & Planning",
      description:
        "Submit Your Fuel Requirements And Our Team Plans The Delivery.",
    },
    {
      number: 2,
      title: "Secure Transportation",
      description:
        "Our Certified Fleet Ensures Safe And Secure Fuel Transport.",
    },
    {
      number: 3,
      title: "On-Site Delivery",
      description:
        "Timely And Efficient Delivery Directly To Your Location.",
    },
    {
      number: 4,
      title: "Quality Check",
      description:
        "Every Batch Is Tested To Ensure It Meets The Highest Standards",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-white"
    >
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
      >
        How Our Fuel Delivery Works
      </h2>

      <div className="relative">
        <div
          data-aos="fade-in"
          data-aos-delay="200"
          className="absolute top-[48px] hidden md:block border-t-2 border-dashed border-gray-300"
          style={{ left: "0%", right: "0%" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 rounded-full bg-[#E9EBF3] flex items-center justify-center mb-5 sm:mb-6 relative z-10">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203882]">
                  {step.number}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed px-3 sm:px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
