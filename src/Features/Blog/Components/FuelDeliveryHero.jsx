import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "../../../assets/Images/Blog.jpg";

export default function BulkFuelArticle() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="px-10 mx-auto py-8 bg-white"
    >
      {/* Article Header */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-[56px] md:text-5xl font-bold text-gray-900 mb-4 text-center"
      >
        How Bulk Fuel Delivery Works In The UAE
      </h1>

      {/* Article Meta */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-center text-gray-600 text-[28px] mb-8"
      >
        <span>By Hazzaz Zaid | Published - Feb 2025 | 5 min read</span>
      </div>

      {/* Featured Image */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="mb-8"
      >
        <img
          src={Blog}
          alt="Fuel tanker truck on highway"
          className="
            w-full
            h-48 sm:h-64 md:h-80 lg:h-96
            object-cover
            rounded-xl
            shadow-lg
          "
        />
      </div>

      {/* Introduction Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="450"
        className="mb-8 text-center px-10 mx-auto"
      >
        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          — Introduction
        </h2>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="650"
          className="text-gray-700 text-[23px] text-center"
        >
          Bulk Fuel Delivery Plays A Crucial Role In Keeping UAE Businesses Running Smoothly.
          From Construction Sites To Logistics Fleets, Companies Rely On Timely And Safe Fuel
          Supply To Maintain Operations Without Interruption. This Article Breaks Down How The
          Entire Process Works — From Order Placement To Final On-Site Delivery.
        </p>
      </div>
    </div>
  );
}
