import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blur from "../../../assets/Images/Blur.jpg";

export default function BlogHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <section data-aos="fade-up" className="w-full bg-white py-12 lg:py-20">
      {/* ✅ SAME CONTAINER AS ALL OTHER SECTIONS */}
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* ================= LEFT TEXT ================= */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex-1 text-center md:text-left"
          >
            <h1
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                font-bold text-gray-900 leading-tight mb-4
                text-[45px] sm:text-5xl md:text-[60px]
              "
            >
              Insights & Industry <br />Updates
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="
                text-gray-600
                text-sm sm:text-base lg:text-[24px]
                font-normal
                mx-auto md:mx-0
              "
            >
              Stay Informed With The Latest News, Trends, And Guidance In Fuel
              Trading, Logistics, Petroleum Quality Management.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative flex items-center justify-center"
          >
            {/* BACKGROUND CIRCLE */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="
                rounded-full bg-[#e9edf5] relative
                ml-[60px]
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-52 md:h-52
                lg:w-60 lg:h-60
              "
            />

            {/* FOREGROUND IMAGE */}
            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="
                absolute
                left-[-40px] top-[40px]
                rounded-full bg-white shadow-xl overflow-hidden
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-60 md:h-60
                lg:w-64 lg:h-64
              "
            >
              <img
                src={Blur}
                alt="Industrial facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
