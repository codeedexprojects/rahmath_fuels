import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, ArrowRight } from "lucide-react";

import Base from "../../../assets/Images/Base.jpg";
import imgTech from "../../../assets/Images/Tech.jpg";
import imgQuality from "../../../assets/Images/Travel.jpg";
import imgEnvironment from "../../../assets/Images/Windmill.jpg";

export default function MappedServiceSections() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
    AOS.refresh();
  }, []);

  const sections = [
    {
      title: "Fuel Supply",
      description:
        "Premium-Grade Petroleum Products Delivered Safely And On Time To Industries, Fleets, And Commercial Sectors.",
      img: Base,
      features: [
        "Bulk Fuel Delivery",
        "Flexible Quantities",
        "Region-Wide Coverage",
        "Strict Quality Control",
      ],
      button: "Request Supply Quote",
    },
    {
      title: "Fuel Transportation",
      description:
        "Dependable Logistics And Fleet Management Ensuring Safe Movement Of Fuel Across All Regions.",
      img: imgQuality,
      features: [
        "Modern Tanker Fleet",
        "Certified Drivers",
        "GPS Tracking",
        "24/7 Dispatch Support",
      ],
      button: "Speak To Logistics Team",
    },
    {
      title: "Quality Assurance",
      description:
        "Every Batch Is Tested To Meet International Safety And Performance Standards.",
      img: imgTech,
      features: [
        "Laboratory-Tested Fuel",
        "Full Compliance Documents",
        "No Contamination Policy",
        "UAE Regulatory Certifications",
      ],
      button: "View Certification Process",
    },
    {
      title: "Environmental Responsibility",
      description:
        "Fuel Operations Built Around Sustainability And Responsible Handling.",
      img: imgEnvironment,
      features: [
        "Low-Emission Transport Fleet",
        "Waste Fuel Handling Systems",
        "Green Compliance",
        "Carbon-Conscious Operations",
      ],
      button: "Our Sustainability Practices",
    },
  ];

  return (
    <>
      {sections.map((item, index) => {
        const reverse = index % 2 !== 0;

        return (
          <section
            key={index}
            data-aos="fade-up"
            className="py-16 px-4 sm:px-6 lg:px-10 bg-white"
          >
            <div
              className={`
                px-10 mx-auto grid md:grid-cols-2 gap-12 items-center
                ${reverse ? "md:[direction:rtl]" : ""}
              `}
            >
              {/* IMAGE */}
              <div
                data-aos={reverse ? "fade-left" : "fade-right"}
                data-aos-delay="150"
                className="relative w-full md:[direction:ltr]"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div
                data-aos={reverse ? "fade-right" : "fade-left"}
                data-aos-delay="250"
                className="md:[direction:ltr]"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4 mb-8">
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={300 + i * 100}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="text-green-500" size={22} />
                      <span className="text-gray-700 text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="
                    flex items-center gap-2 px-6 py-3 border-2 border-gray-900
                    text-gray-900 rounded-lg font-semibold
                    hover:bg-gray-900 hover:text-white
                    transition-all duration-300 group
                  "
                >
                  {item.button}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
