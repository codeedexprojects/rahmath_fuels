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
   
      </h2>

      {/* Left-Aligned QR Section */}
    <div data-aos="fade-left" className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Open our location in Maps
            </h2>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <iframe
                className="w-full rounded-lg
                           h-[240px]
                           sm:h-[280px]
                           md:h-[320px]
                           lg:h-[360px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1436131763517!2d55.530908475171735!3d25.433461777559607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7e1dea3ed83%3A0x7a50272f2cdb9ad4!2sRAHMAT%20FUEL%20LLC!5e0!3m2!1sen!2sin!4v1765961756389!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
    </section>
  );
}
