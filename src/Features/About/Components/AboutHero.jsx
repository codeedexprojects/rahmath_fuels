import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import truck from "../../../assets/Images/Trans.png";
import HandShake from "../../../assets/Images/Hanshake.png";
import { useNavigate } from "react-router-dom";

export default function AboutCompanySection() {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="bg-white py-16"
    >
      {/* ✅ MAIN CONTAINER */}
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">

          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-right" className="space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[58px]
                         font-bold leading-tight text-gray-900"
            >
              Fueling Businesses With Trust & Excellence
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              Delivering Certified, High-Quality Fuel Solutions Backed By Decades Of Expertise.
            </p>

            <button
            onClick={()=>{navigate('/Contact')}}
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold
                         hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </button>
          </div>

          {/* ================= RIGHT IMAGES ================= */}
          <div
            data-aos="fade-left"
            className="relative flex items-end md:items-center gap-3
                       min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
          >
            {/* Background block */}
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="absolute top-10 left-12
                         w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px]
                         h-[100px] sm:h-[130px] md:h-[160px] lg:h-[180px]
                         bg-[#203882] rounded-lg z-0"
            />

            {/* Truck image */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative z-20 rounded-lg mt-20 overflow-hidden shadow-xl
                         w-[180px] sm:w-[210px] md:w-[240px] lg:w-[270px]
                         h-[240px] sm:h-[260px] md:h-[300px] lg:h-[330px]"
            >
              <img
                src={truck}
                alt="truck"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Handshake image */}
            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="relative z-20 rounded-lg overflow-hidden shadow-xl
                         w-[130px] sm:w-[180px] md:w-[180px] lg:w-[200px]
                         h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px]"
            >
              <img
                src={HandShake}
                alt="handshake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
