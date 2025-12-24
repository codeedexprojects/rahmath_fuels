import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QR from "../../../assets/Images/QR.png";

export default function LocateUs() {
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
      className="py-12 px-10 sm:px-6 md:px-10"
    >
      {/* Heading - Left aligned */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8  text-center"
      >
        Locate Us
      </h2>

      {/* QR Section - Left aligned */}
      <div data-aos="fade-left" className="text-left max-w-md">
        

        <div className="bg-white lg:px-10 p-4 sm:p-6 rounded-xl shadow inline-block">
          <img
            src={QR}
            alt="Location QR Code"
            className="
              w-56 h-56
              sm:w-56 sm:h-56
              md:w-64 md:h-64
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
