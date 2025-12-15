import React, { useEffect, useState } from "react";
import img1 from "../../../assets/Images/img1.png";
import img2 from "../../../assets/Images/img2.jpg";
import img3 from "../../../assets/Images/img3.png";
import img4 from "../../../assets/Images/Fuel Supply.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle card positions
  const getCardPosition = (index) => {
    const diff = (index - currentIndex + slides.length) % slides.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === slides.length - 1) return "left";
    return "hidden";
  };

  return (
    <section className="overflow-hidden">
      {/* HERO TEXT SECTION */}
      <div className="sm:px-6 bg-[#f3f8fd] pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40 relative">
        <div className=" mx-auto px-6 sm:px-10">
          <h1
            style={{
              fontWeight: 600,
              lineHeight: "100%",
              color: "#111827",
            }}
            className="text-[34px] sm:text-[40px] md:text-[50px] lg:text-[60px]"
          >
            Fueling The Future With Trusted <br /> Energy Solutions
          </h1>

          <p className="max-w-xl text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-gray-700 mt-3">
            A Trusted name in Fuel Trading And Transportation with Decades of
            Expertise.
          </p>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-8 sm:mt-10">
            <div className="flex gap-4 flex-wrap">
              <button className="px-4 py-2 bg-[#203882] text-white rounded hover:bg-[#1a2d6b] transition-colors">
                Get A Quote
              </button>
              <button className="px-4 py-2 border-2 border-[#CB9A3E] text-[#CB9A3E] rounded hover:bg-[#CB9A3E] hover:text-white transition-colors">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDING CAROUSEL */}
      <div className="relative z-10 sm:py-20 mb-20 md:-mt-32 lg:-mt-60 flex justify-center sm:justify-end px-4">
        <div className="relative w-full max-w-5xl h-[200px] sm:h-[260px] md:h-[320px]">

          {slides.map((slide, index) => {
            const position = getCardPosition(index);

            return (
              <div
                key={index}
                className={` sm:mt-15
                  absolute 
                  rounded-2xl overflow-hidden shadow-lg
                  w-[180px] h-[200px]
                  sm:w-[240px] sm:h-[260px]
                  md:w-[300px] md:h-[320px]
                  transition-all duration-700 ease-in-out
                  ${
                    position === "center"
                      ? "left-1/2 -translate-x-1/2 scale-110 z-30 opacity-100"
                      : position === "left"
                      ? "left-[5%] sm:left-[10%] md:left-[15%] scale-90 z-20 opacity-60"
                      : position === "right"
                      ? "right-[5%] sm:right-[10%] md:right-[15%] scale-90 z-20 opacity-60"
                      : "left-1/2 -translate-x-1/2 scale-75 z-10 opacity-0"
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

      {/* CAROUSEL INDICATORS */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#203882] w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
