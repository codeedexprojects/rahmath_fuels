import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogConclusion() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full">
      <section
        data-aos="fade-up"
        className="w-full px-10 sm:px-6 lg:px-10 py-8 sm:py-10"
      >
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900"
        >
          UAE Compliance & Safety Standards
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-center text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
        >
          All Bulk Fuel Movements In The UAE Follow Strict Regulatory
          Guidelines. Tankers Must Be Licensed, Drivers Must Be Certified, And
          Equipment Must Undergo Regular Inspections. These Measures Ensure Safe
          Handling And Environmental Protection Throughout The Process.
        </p>
      </section>

      {/* Final Takeaway Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="150"
        className="w-full lg:px-10 sm:px-6 py-8 sm:py-10"
      >
        <div className="p-6 sm:p-8 lg:p-10">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-center sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900"
          >
            The Final Takeaway
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-center text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
          >
            Bulk Fuel Delivery Is A Streamlined And Highly Regulated Process
            Designed To Keep UAE Businesses Operating At Full Capacity. When
            Done Correctly, It Ensures Quality, Safety, And Uninterrupted
            Performance — Making It A Key Part Of The Country&apos;s Industrial
            Growth.
          </p>
        </div>
      </section>
    </div>
  );
}
