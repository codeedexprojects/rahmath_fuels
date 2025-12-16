import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import FuelTank from "../../../assets/Images/FuelTank.jpg";
import Truck from "../../../assets/Images/Trans.png";
import Test from "../../../assets/Images/Testing.png";

export default function FuelServicesHero() {
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
      className="py-16 lg:py-24 bg-white"
    >
      {/* ✅ SAME CONTAINER AS OTHER SECTIONS */}
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 className="text-[45px] sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Fuel Services For Every Industry
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed"
            >
              Delivering Certified Petroleum Products With Unmatched Efficiency
              Across The UAE And Beyond.
            </p>

            <button
            onClick={()=>navigate("/EnquiryForm")}
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold
                         hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
            >
              Get A Quote
            </button>
          </div>

          {/* ================= RIGHT IMAGE GRID ================= */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              {/* TOP LEFT */}
              <div
                data-aos="fade-down-right"
                data-aos-delay="200"
                className="
                  bg-white rounded-2xl shadow-lg overflow-hidden
                  transform rotate-[-3deg] hover:rotate-[-1deg] hover:scale-105
                  transition-all duration-300
                  aspect-[16/10] sm:aspect-[16/9]
                "
              >
                <img
                  src={Test}
                  alt="Laboratory testing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TALL IMAGE */}
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="
                  bg-white rounded-2xl shadow-lg overflow-hidden row-span-2
                  transform hover:scale-105 transition-all duration-300
                  aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] lg:aspect-[4/5]
                "
              >
                <img
                  src={Truck}
                  alt="Fuel delivery truck"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BOTTOM LEFT */}
              <div
                data-aos="fade-up-right"
                data-aos-delay="400"
                className="
                  bg-white rounded-2xl shadow-lg overflow-hidden
                  transform rotate-[2deg] hover:rotate-0 hover:scale-105
                  transition-all duration-300
                  aspect-[16/10] sm:aspect-[16/9]
                "
              >
                <img
                  src={FuelTank}
                  alt="Fuel storage tanks"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* DECORATIVE BLURS */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="absolute -z-10 top-0 right-0 w-20 sm:w-32 h-20 sm:h-32
                         bg-blue-200 rounded-full blur-3xl opacity-50"
            />

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="absolute -z-10 bottom-0 left-0 w-24 sm:w-40 h-24 sm:h-40
                         bg-orange-200 rounded-full blur-3xl opacity-50"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
