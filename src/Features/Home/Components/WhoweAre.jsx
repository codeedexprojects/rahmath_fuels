import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import truck from "../../../assets/Images/Trans.webp";
import HandShake from "../../../assets/Images/Hanshake.webp";

export default function WhoWeAre() {
  const navigate=useNavigate();

   const AboutNavigate = () => {
  navigate("/About");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // ✅ Correct AOS init
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="py-16 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden"
    >
      <div className="">

        {/* ===== HEADING ===== */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 inline-flex items-center gap-4">
            <span className="hidden sm:block w-12 h-0.5 bg-gray-400"></span>
            Who We Are
          </h2>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT IMAGES ===== */}
          <div
            data-aos="fade-right"
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background block */}
            <div className="absolute top-10 sm:top-16 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0
                            w-52 sm:w-72 h-32 sm:h-44 bg-[#203882] rounded-lg z-0" />

            {/* Image 1 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="relative z-10 rounded-lg lg:mt-20 overflow-hidden shadow-xl
                         w-48 sm:w-64 h-40 sm:h-48"
            >
              <img
                src={truck}
                alt="Fuel trucks"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative z-10 rounded-lg overflow-hidden shadow-xl
                         w-40 sm:w-52 h-40 sm:h-48 ml-4 sm:ml-6 mt-10"
            >
              <img
                src={HandShake}
                alt="Business handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div
            data-aos="fade-left"
            className="space-y-6 text-center lg:text-left"
          >
            <h6 className="text-xl sm:text-2xl lg:text-[24px] text-[#242424] leading-tight">
              We Are A Leading Fuel Trading Company Delivering Premium Petroleum
              Products With Guaranteed Quality, Flexible Delivery, And
              Industry-Standard Safety Compliance.
            </h6>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At Rahmat Fuel Trading LLC, We Are Driven By Our Mission To Fuel
              Success For Our Customers, Employees, And Communities.
            </p>

            <button
            onClick={AboutNavigate} className="inline-block px-6 py-3 bg-[#203882] text-white rounded-md
                               hover:bg-[#1a2d6b] transition-colors font-medium">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
