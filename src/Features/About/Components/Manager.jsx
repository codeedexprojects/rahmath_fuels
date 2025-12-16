import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Manager from "../../../assets/Images/Manager.webp";

export default function TestimonialQuote() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="py-12 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div
            data-aos="fade-right"
            className="relative p-6 sm:p-8 md:p-10"
          >
            <div className="absolute -top-2 -left-2 w-16 sm:w-20 h-10 sm:h-12 border-t-4 border-l-4 border-blue-900"></div>
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-20 h-10 sm:h-12 border-b-4 border-l-4 border-blue-900"></div>

            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="bg-white p-6 sm:p-8 md:p-10 rounded shadow-sm"
            >
              <div className="text-gray-800 font-medium text-[20px] sm:text-[26px] md:text-[30px] leading-relaxed mb-6 sm:mb-8">
                “Fuel supply is more than delivery — it's a promise of reliability
                and trust. We ensure every client receives uncompromised quality
                and timely support.”
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex items-center gap-3"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-900 rounded-sm"></div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    Rahman PM
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative w-fit mx-auto pr-[14px] sm:pr-[20px]"
          >
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="absolute top-[-14px] sm:top-[-20px] bottom-[-14px] sm:bottom-[-20px] right-0 w-[10px] sm:w-[12px] bg-blue-900 z-20"
            ></div>

            <div className="absolute top-[-14px] sm:top-[-20px] left-[10px] sm:left-[12px] right-0 h-[10px] sm:h-[12px] bg-blue-900 z-15"></div>
            <div className="absolute bottom-[-14px] sm:bottom-[-20px] left-[10px] sm:left-[12px] right-0 h-[10px] sm:h-[12px] bg-blue-900 z-15"></div>

            <div
              data-aos="zoom-in"
              data-aos-delay="350"
              className="relative z-30 overflow-hidden shadow-xl rounded-md"
            >
              <img
                src={Manager}
                alt="Managing Director"
                className="
                  object-cover block
                  w-[200px] h-[280px]
                  sm:w-[240px] sm:h-[330px]
                  md:w-[260px] md:h-[360px]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
