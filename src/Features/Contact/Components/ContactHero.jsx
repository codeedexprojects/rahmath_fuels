import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../../../assets/Images/Contact.png";

export default function ContactHero() {
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
      className="bg-white py-10 lg:py-16"
    >
      {/* ✅ SAME CONTAINER AS HERO */}
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div data-aos="fade-right">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                         font-semibold text-gray-900 mb-6 leading-tight"
            >
              Let’s Discuss Your Fuel Requirements
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-500 text-lg sm:text-xl leading-relaxed"
            >
              Our Team Responds Quickly To All Business Inquiries. Send Us A
              Message — We're Ready To Assist.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative"
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="350"
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={Contact}
                alt="Industrial fuel facility at dusk"
                className="w-full h-72 sm:h-80 md:h-[360px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
