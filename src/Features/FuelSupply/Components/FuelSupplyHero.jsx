import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import truck from "../../../assets/Images/OilTank.webp";
import Container from "../../../assets/Images/Container.webp";

export default function FuelSupplyHero() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white px-10">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-16 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Reliable Fuel Supply For Every Industry
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-lg text-gray-600 leading-relaxed"
            >
              We Deliver High-Quality, Certified Petroleum Products With Flexible Quantities, Fast Response, And UAE-Wide Coverage.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="flex justify-center lg:justify-end"
          >
            <img 
              src={truck} 
              alt="Fuel tanker truck"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* LEFT IMAGE */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img 
              src={Container}
              alt="Industrial fuel storage tanks"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              Fuel Supply Services Tailored For Your Operations
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              Rahmat Fuel Provides Dependable Bulk Fuel Supply To Industrial, Commercial, And Fleet-Based Businesses Across The UAE.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="450"
              className="text-lg text-gray-700 leading-relaxed"
            >
              Our Supply Operations Ensure Consistent Product Quality, Timely Delivery, And Complete Documentation — Keeping Your Business Running Without Interruption.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
