import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import truck from "../../../assets/Images/Env2.jpg";
import Container from "../../../assets/Images/Container.webp";
import Blog from "../../../assets/Images/Env1.jpg";
import Env3 from "../../../assets/Images/Env3.jpg";


export default function EnvHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className=" lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Driving Fuel Operations With Environmental Responsibility
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              We operate with a strong commitment to sustainability, environmental
              protection, and responsible fuel handling across all operations.
            </p>
          </div>

          {/* RIGHT IMAGE GALLERY */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="grid grid-cols-2 gap-4"
          >
            {[truck, Container, Blog, Env3].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl h-40 sm:h-48 md:h-56"
              >
                <img
                  src={img}
                  alt="Environmental fuel operations"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="lg:px-10 mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="zoom-in" data-aos-delay="100">
            <img
              src={Blog}
              alt="Industrial fuel storage tanks"
              className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h2
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              Fuel Supply Services Designed For Sustainable Operations
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="text-lg text-gray-700 mb-5 leading-relaxed"
            >
              Rahmat Fuel delivers environmentally responsible fuel solutions to
              industrial, commercial, and fleet-based businesses across the UAE,
              combining reliability with reduced environmental impact.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="450"
              className="text-lg text-gray-700 leading-relaxed"
            >
              Our supply operations prioritize cleaner fuel handling, certified
              quality standards, efficient delivery practices, and responsible
              documentation — supporting sustainable business performance without
              disruption.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
