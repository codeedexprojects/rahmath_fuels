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

    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="py-10 px-6 bg-white"
    >
      <div className="px-10 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-6xl font-semibold text-gray-900 mb-8 leading-tight"
            >
              Let's Discuss Your Fuel Requirements
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-gray-500 text-xl leading-relaxed"
            >
              Our Team Responds Quickly To All Business Inquiries. Send Us A
              Message — We're Ready To Assist.
            </p>
          </div>

          {/* RIGHT IMAGE */}
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
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
