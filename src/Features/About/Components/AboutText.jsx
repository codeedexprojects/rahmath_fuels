import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Eye, Award } from "lucide-react";

export default function AboutText() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To Provide Dependable Fuel Solutions With Safety, Transparency, And Operational Excellence.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To Be The Most Trusted And Future-Ready Fuel Partner In The Region.",
    },
    {
      icon: Award,
      title: "Values",
      description:
        "Reliability • Quality • Integrity • Sustainability • Customer Commitment",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <section
      data-aos="fade-up"
      className="py-12 px-4 sm:px-6 lg:px-10 bg-white"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-center mb-14"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Who We Are
        </h2>

        <p className="text-gray-700 mx-auto mb-4 leading-relaxed text-base sm:text-lg px-2 sm:px-4">
          Rahmat Fuel Trading LLC Is A Trusted Fuel Trading And Logistics Partner
          Serving Industrial, Commercial, And Fleet Clients Throughout The UAE.
          We Specialize In Premium Fuel Supply, Safe Transportation, And
          Quality-Driven Operational Support Designed To Keep Businesses Running
          Without Interruption.
        </p>

        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg px-2 sm:px-4">
          Our Commitment Is Simple —{" "}
          <span className="font-semibold">
            Deliver The Right Fuel, At The Right Time, With Uncompromising
            Quality And Compliance.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-2 sm:px-4 lg:px-10 mx-auto">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg p-8 text-center border border-gray-100 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="text-blue-900" size={30} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
