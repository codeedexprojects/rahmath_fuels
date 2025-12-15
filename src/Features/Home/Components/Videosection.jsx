import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import thumbnail1 from "../../../assets/Images/Thumbnail1.jpg";
import thumbnail2 from "../../../assets/Images/Thumbnail2.jpg";
import thumbnail3 from "../../../assets/Images/Thumbnail3.png";

export default function VideoCarousel() {
  const slides = [
    { id: 1, image: thumbnail1, title: "Road Transportation" },
    { id: 2, image: thumbnail2, title: "Business Solutions" },
    { id: 3, image: thumbnail3, title: "Industrial Facilities" },
  ];

  // ✅ Triple clone for infinite effect
  const extendedSlides = [...slides, ...slides, ...slides];
  const baseLength = slides.length;

  // ✅ Start from the middle clone
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

  // ✅ Invisible infinite snap-back (no visible jump)
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
    <div className="w-full bg-white  py-10 sm:py-16 overflow-hidden">
      <div className=" lg:px-10 sm:px-4">

        {/* ✅ VIEWPORT (Perfect Centering + Fixed Height) */}
        <div className="relative overflow-hidden h-[300px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
          
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
                  className="flex-[0_0_33.3333%] px-1 sm:px-2 md:px-4 flex justify-center"
                >
                  {/* ✅ CARD */}
                  <div
                    className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700
                      ${
                        isCenter
                          ? "scale-105 sm:scale-110 h-40 sm:h-60 md:h-72 w-full max-w-xs sm:max-w-sm md:max-w-md"
                          : "scale-90 sm:scale-95 h-32 sm:h-52 md:h-64 w-full max-w-xs sm:max-w-sm md:max-w-md"
                      }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    {/* ✅ Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* ✅ Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 transition">
                        <Play
                          className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    {/* ✅ Title */}
                    <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5">
                      <h3 className="text-white text-xs sm:text-sm md:text-lg font-semibold">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ✅ BUTTONS (Perfect Position – No Floating, No Gap) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 flex gap-4 sm:gap-6 z-20">
            <button
              type="button"
              onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border shadow hover:scale-110 transition"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
            </button>

            <button
              type="button"
              onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border shadow hover:scale-110 transition"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
