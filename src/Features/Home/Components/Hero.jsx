import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/Images/img1.webp";
import img2 from "../../../assets/Images/img2.webp";
import img3 from "../../../assets/Images/img3.webp";
import img4 from "../../../assets/Images/Fuel Supply.webp";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

 const EnquiryNavigate = () => {
  navigate("/EnquiryForm");
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  
 const ServiceNavigate = () => {
  navigate("/Services");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const slides = [img1, img2, img3];

  /* ================= AOS ================= */
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  /* ================= POSITION LOGIC ================= */
  const getCardStyle = (index) => {
    const total = slides.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;

    if (index === currentIndex) return "center";
    if (index === prev) return "left";
    if (index === next) return "right";
    return "hidden";
  };

  return (
    <section className="bg-[#f3f8fd] overflow-hidden py-16 lg:py-24">
      {/* ✅ SAME CONTAINER AS AboutCompanySection */}
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h1
              data-aos="fade-up"
              className="
                text-[34px] sm:text-[42px] md:text-[52px] lg:text-[45px]
                font-semibold leading-[1.05] text-gray-900
              "
            >
              Fueling The Future With Trusted Energy Solutions
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="
                mt-4
                text-[16px] sm:text-[18px] md:text-[20px]
                leading-[1.6] text-gray-700
              "
            >
              A trusted name in Fuel Trading and Transportation with decades of
              expertise.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={EnquiryNavigate}
                className="px-5 py-3 bg-[#203882] text-white rounded-md
                           hover:bg-[#1a2d6b] transition"
              >
                Get A Quote
              </button>

              <button
              onClick={ServiceNavigate}
                className="px-5 py-3 border-2 border-[#CB9A3E]
                           text-[#CB9A3E] rounded-md
                           hover:bg-[#CB9A3E] hover:text-white transition"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* ================= RIGHT CAROUSEL ================= */}
          <div
            data-aos="fade-up"
            className="relative flex justify-center lg:justify-end mt-10"
          >
            <div className="relative w-full sm:max-w-lg h-[220px] sm:h-[280px] md:h-[340px]">
              {slides.map((slide, index) => {
                const position = getCardStyle(index);

                return (
                  <div
                    key={index}
                    className={`
                      absolute rounded-2xl overflow-hidden shadow-lg
                      transition-all duration-700 ease-in-out
                      w-[180px] h-[220px]
                      sm:w-[240px] sm:h-[280px]
                      md:w-[300px] md:h-[340px]
                      ${
                        position === "center"
                          ? "left-1/2 -translate-x-1/2 scale-110 z-30 opacity-100"
                          : position === "left"
                          ? "left-[5%] scale-95 z-20 opacity-60 blur-sm"
                          : position === "right"
                          ? "right-[5%] scale-95 z-20 opacity-60 blur-sm"
                          : "opacity-0 pointer-events-none"
                      }
                    `}
                  >
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= INDICATORS ================= */}
        <div className="flex justify-center lg:justify-start gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#203882] w-6"
                  : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
