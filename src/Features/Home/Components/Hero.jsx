import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../../assets/Images/img1.png";
import img2 from "../../../assets/Images/img2.jpg";
import img3 from "../../../assets/Images/img3.png";
import img4 from "../../../assets/Images/Fuel Supply.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate("/EnquiryForm")
  }

  const slides = [img1, img2, img3, img4];

  /* ================= AOS INIT ================= */
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
    <section className="overflow-hidden">

      {/* ================= HERO TEXT ================= */}
      <div className="bg-[#f3f8fd] pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40">
        <div className=" lg:px-10 sm:px-10">

          <h1
            data-aos="fade-up"
            className="text-[34px] sm:text-[40px] md:text-[50px] lg:text-[60px]
                       font-semibold leading-[1] text-gray-900"
          >
            Fueling The Future With Trusted <br /> Energy Solutions
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-xl text-[16px] sm:text-[18px] md:text-[20px]
                       leading-[1.6] text-gray-700 mt-3"
          >
            A trusted name in Fuel Trading and Transportation with decades of
            expertise.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4 mt-8 sm:mt-10"
          >
            <button 
            onClick={handleClick} 
            className="px-4 py-2 bg-[#203882] text-white rounded
                               hover:bg-[#1a2d6b] transition">
              Get A Quote
            </button>

            <button className="px-4 py-2 border-2 border-[#CB9A3E]
                               text-[#CB9A3E] rounded
                               hover:bg-[#CB9A3E] hover:text-white transition">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div
        data-aos="fade-up"
        className="relative z-10 sm:py-20 mb-20
                   md:-mt-32 lg:-mt-60
                   flex justify-center sm:justify-end px-4 overflow-hidden"
      >
        <div className="relative w-full max-w-5xl h-[200px] sm:h-[260px] md:h-[320px]">

          {slides.map((slide, index) => {
            const position = getCardStyle(index);

            return (
              <div
                key={index}
                className={`
                  absolute rounded-2xl overflow-hidden shadow-lg
                  w-[180px] h-[200px]
                  sm:w-[240px] sm:h-[260px]
                  md:w-[300px] md:h-[320px]
                  transition-all duration-700 ease-in-out
                  ${
                    position === "center"
                      ? "left-1/2 -translate-x-1/2 scale-110 z-30 opacity-100 blur-0"
                      : position === "left"
                      ? "left-[8%] sm:left-[12%] md:left-[18%] scale-95 z-20 opacity-60 blur-sm"
                      : position === "right"
                      ? "right-[8%] sm:right-[12%] md:right-[18%] scale-95 z-20 opacity-60 blur-sm"
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

      {/* ================= INDICATORS ================= */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#203882] w-6"
                : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
