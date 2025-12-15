import { useEffect, useState } from "react";
import AOS from "aos";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "aos/dist/aos.css";

import thumbnail1 from "../../../assets/Images/Thumbnail1.jpg";
import thumbnail2 from "../../../assets/Images/Thumbnail2.jpg";
import thumbnail3 from "../../../assets/Images/Thumbnail3.png";

export default function VideoCarousel() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const slides = [
    { id: 1, image: thumbnail1, title: "Road Transportation" },
    { id: 2, image: thumbnail2, title: "Business Solutions" },
    { id: 3, image: thumbnail3, title: "Industrial Facilities" },
  ];

  const extendedSlides = [...slides, ...slides, ...slides];
  const baseLength = slides.length;

  const [index, setIndex] = useState(baseLength);
  const [isAnimating, setIsAnimating] = useState(true);

  const next = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === baseLength * 2) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(baseLength);
      }, 700);
    }
    if (index === baseLength - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(baseLength * 2 - 1);
      }, 700);
    }
  }, [index, baseLength]);

  return (
    <div
      data-aos="fade-up"
      className="w-full bg-white py-10 sm:py-16 overflow-hidden"
    >
      {/* ✅ overflow clipped here */}
      <div className="lg:px-10 sm:px-4 overflow-hidden">
        <div className="relative overflow-hidden h-[300px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
          
          {/* SLIDES */}
          <div
            className={`flex items-center ${
              isAnimating ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(calc(50% - ${(index + 0.5) * 33.3333}%))`,
            }}
          >
            {extendedSlides.map((slide, i) => {
              const isCenter = i === index;

              return (
                <div
                  key={i}
                  data-aos="zoom-in"
                  className="flex-[0_0_33.3333%] px-2 flex justify-center overflow-hidden"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl 
                    transition-all duration-700 will-change-transform ${
                      isCenter
                        ? "scale-110 h-72"
                        : "scale-95 h-64 opacity-80"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-7 h-7 text-white" fill="currentColor" />
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CONTROLS */}
          <div className="absolute bottom-6 flex gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
