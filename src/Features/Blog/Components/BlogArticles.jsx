import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogData } from "../Data/BlogData";

export default function BlogArticles() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-10 bg-white">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Explore Our Articles
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
              <img
                src={blog.card.image}
                alt={blog.card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Category */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
                  {blog.card.category}
                </span>
              </div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white/80 text-sm mb-1">
                  {blog.card.date}
                </p>
                <h3 className="text-white text-lg font-bold leading-snug">
                  {blog.card.title}
                </h3>
              </div>
            </div>

            {/* Read More */}
            <div className="px-5 pb-5">
              <Link
                to={`/blog/${blog.id}`}
                className="flex items-center gap-2 text-blue-700 font-medium
                           opacity-0 group-hover:opacity-100
                           translate-y-2 group-hover:translate-y-0
                           transition-all duration-300"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
