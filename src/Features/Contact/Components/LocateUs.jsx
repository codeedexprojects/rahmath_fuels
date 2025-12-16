import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QR from "../../../assets/Images/QR.webp";

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
      {/* Centered Heading */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10"
      >
        Locate Us
      </h2>

      {/* Left-Aligned QR Section */}
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        className="w-full flex justify-start"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-white p-10 sm:p-6 rounded-lg shadow-md"
        >
          <img
            src={QR}
            alt="QR Code"
            className="
              w-40 h-40
              sm:w-56 sm:h-56
              md:w-64 md:h-64
              lg:w-72 lg:h-72
              xl:w-80 xl:h-80
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
