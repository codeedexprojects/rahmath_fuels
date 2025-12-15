import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../../assets/Images/Fuel Supply.png";
import img2 from "../../../assets/Images/Transportation.png";
import img3 from "../../../assets/Images/Quality Assurance.jpg";
import img4 from "../../../assets/Images/Environmental Responsibility.png";

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

export default function Offersection() {
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
      className="bg-white py-12 sm:py-16"
    >
      {/* HEADING */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center text-[26px] sm:text-[30px] lg:text-[34px] font-semibold mb-6"
      >
        What We Offer
      </h1>

      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
              className="text-center"
            >
              {/* IMAGE */}
              <div className="relative mx-auto w-full sm:max-w-[260px] md:max-w-[300px] lg:max-w-[330px]">
                <div
                  className="
                    border border-black rounded-2xl overflow-hidden
                    [clip-path:polygon(0%_0%,100%_0%,97%_100%,3%_100%)]
                    shadow-md hover:shadow-lg transition-all
                  "
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[170px] sm:h-[190px] md:h-[210px] lg:h-[220px] object-cover"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed px-4">
                {item.desc}
              </p>

              {/* LINK */}
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-blue-700 font-medium text-sm hover:underline"
              >
                Learn More ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
