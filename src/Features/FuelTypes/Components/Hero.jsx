import React from "react";
import FuelTruck from "../../../assets/Images/OilTank.png";
import Container from "../../../assets/Images/Container.png";

export default function FuelSupplyLanding() {
  return (
    <div className="min-h-screen bg-white px-10">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-10 lg:px-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="
              font-bold text-gray-900 leading-tight mb-6
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[60px]
            ">
              Reliable Fuel Supply For Every Industry
            </h1>

            <p className="
              text-gray-700 leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
            ">
              We Deliver High-Quality, Certified Petroleum Products With Flexible
              Quantities, Fast Response, And UAE-Wide Coverage.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={FuelTruck}
              alt="White fuel tanker truck"
              className="
                w-full h-auto object-contain
                max-h-[280px]
                sm:max-h-[350px]
                md:max-h-[420px]
                lg:max-h-none
              "
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-gray-50 py-10 sm:py-14 lg:py-10 lg:px-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
    
    {/* Left Image */}
    <div className="order-2 md:order-1">
      <img
        src={Container}
        alt="Fuel storage tanks"
        className="w-full rounded-xl shadow-lg"
      />
    </div>

    {/* Right Content */}
    <div className="order-1 md:order-2">
      <h2
        className="
          font-bold text-gray-900 mb-5
          text-2xl
          sm:text-3xl
          md:text-3xl
          lg:text-4xl
        "
      >
        Fuel Supply Services Tailored For Your Operations
      </h2>

      <div
        className="
          space-y-4 text-gray-700 leading-relaxed
          text-sm
          sm:text-base
          md:text-lg
        "
      >
        <p>
          Rahmat Fuel Provides Dependable Bulk Fuel Supply To Industrial,
          Commercial, And Fleet-Based Businesses Across The UAE.
        </p>

        <p>
          Our Supply Operations Ensure Consistent Product Quality, Timely
          Delivery, And Complete Documentation — Keeping Your Business
          Running Without Interruption.
        </p>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}
