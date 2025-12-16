import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/Images/Fuel Supply.webp";
import img2 from "../../../assets/Images/Trans.webp";
import img3 from "../../../assets/Images/Quality Assurance.webp";
import img4 from "../../../assets/Images/Environmental Responsibility.webp";


import truck from "../../../assets/Icons/Truck.gif";
import badge from "../../../assets/Icons/Badge.gif";
import icon from "../../../assets/Icons/Icon.gif";

export default function StatsAndOffer() {

  // ✅ Correct AOS init
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const stats = [
    { icon, title: "20+ Years", desc: "Industry Expertise" },
    { icon: truck, title: "24/7", desc: "Logistics Support" },
    { icon: badge, title: "High Quality", desc: "Certified Supply" },
  ];

  const services = [
    {
      title: "Fuel Supply",
      desc: "Premium Delivery For Industries, Fleets & Commercial Sectors.",
      img: img1,
    },
    {
      title: "Transportation",
      desc: "Safe, On-Time Fuel Logistics With Modern Fleet Tracking.",
      img: img2,
    },
    {
      title: "Quality Assurance",
      desc: "Strict Testing & Compliance At Every Stage.",
      img: img3,
    },
    {
      title: "Environmental Responsibility",
      desc: "Fuel Solutions With Sustainability In Focus.",
      img: img4,
    },
  ];

  return (
    <>
      {/* ===== SERVICES ===== */}
      <section className="bg-white py-12 sm:py-16 overflow-hidden">
        <h2
          data-aos="fade-up"
          className="text-center text-[26px] sm:text-[30px] lg:text-[34px] font-semibold mb-8"
        >
          What We Offer
        </h2>

        <div className=" px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={`${index * 120}`}
                className="text-center"
              >
                {/* Image Card */}
                <div className="relative mx-auto w-full max-w-[280px]">
                  <div className="border border-gray-900 rounded-2xl overflow-hidden
                                  [clip-path:polygon(0%_0%,100%_0%,97%_100%,3%_100%)]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[180px] sm:h-[200px] object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed px-4">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2
                             text-blue-700 font-medium text-sm hover:underline"
                >
                  Learn More <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-gray-50 py-12 sm:py-16 overflow-hidden">
        <div className=" px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 150}`}
                className="bg-white rounded-xl border border-gray-200
                           shadow-sm px-6 sm:px-8 py-8 sm:py-10
                           text-center hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
