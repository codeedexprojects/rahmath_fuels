import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Eco from "../../../assets/Images/Eco.jpg";
import Delivery from "../../../assets/Images/Delivery .jpg";
import FuelTest from "../../../assets/Images/FuelTest.jpg";

export default function DiscoverMore() {
  const articles = [
    {
      id: 1,
      image: Delivery,
      category: "Logistics",
      date: "Feb 2025",
      title: "How Bulk Fuel Delivery Works In The UAE",
    },
    {
      id: 2,
      image: FuelTest,
      category: "Quality",
      date: "Jan 2025",
      title: "Why Fuel Quality Testing Matters",
    },
    {
      id: 3,
      image: Eco,
      category: "Sustainability",
      date: "Feb 2025",
      title: "The Future Of Eco-Friendly Transport",
    },
  ];

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
      className="w-full lg:px-10 mx-auto px-4 py-16 bg-white"
    >
      {/* HEADING */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Discover More
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {articles.map((article, index) => (
          <div
            key={article.id}
            data-aos="fade-up"
            data-aos-delay={200 + index * 150}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            {/* IMAGE + OVERLAY */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* CATEGORY */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white/80 text-sm mb-1">
                  {article.date}
                </p>
                <h3 className="text-white text-lg font-bold leading-snug">
                  {article.title}
                </h3>
              </div>
            </div>

            {/* READ MORE (HOVER ONLY) */}
            <div className="px-5 pb-5">
              <div
                className="
                  flex items-center gap-2 text-blue-700 font-medium cursor-pointer
                  opacity-0 group-hover:opacity-100
                  translate-y-2 group-hover:translate-y-0
                  transition-all duration-300
                "
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
