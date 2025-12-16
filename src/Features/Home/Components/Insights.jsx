import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { ArrowRight } from "lucide-react";

import Eco from "../../../assets/Images/Eco.webp";
import Delivery from "../../../assets/Images/Delivery.webp";
import FuelTest from "../../../assets/Images/FuelTest.webp";

export default function InsightsSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

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

  return (
    <section
      data-aos="fade-up"
      className="py-16 bg-white"
    >
      {/* ✅ SAME CONTAINER ALIGNMENT */}
      <div className="px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Insights & Industry Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.map((article, index) => (
            <div
              key={article.id}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white
                         hover:shadow-lg transition"
            >
              {/* ===== IMAGE ===== */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-white/80 text-sm">{article.date}</p>
                  <h3 className="text-white text-lg font-bold">
                    {article.title}
                  </h3>
                </div>
              </div>

              {/* ===== READ MORE (LINKED) ===== */}
              <div className="px-5 pb-5">
                <Link
                  to={`/blog/${article.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="
                    flex items-center gap-2 text-blue-700 font-medium
                    opacity-100 translate-y-0
                    sm:opacity-0 sm:translate-y-2
                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  <span className="mt-2">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
