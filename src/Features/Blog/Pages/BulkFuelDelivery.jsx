import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../Data/BlogData";

export default function BulkFuelDelivery() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="py-20 text-center text-red-500 text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ===== HERO ===== */}
      <section className="px-4 sm:px-6 lg:px-10 py-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-center mb-4">
          {blog.card.title}
        </h1>

        <p className="text-center text-gray-600 mb-8">
          By {blog.author} | {blog.card.date} | {blog.readTime}
        </p>

        <img
          src={blog.heroImage}
          alt={blog.card.title}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
        />
      </section>

      {/* ===== INTRO ===== */}
  <section className="py-14">
  <div className=" lg:px-10 sm:px-6">

    {/* HEADING WITH SIDE LINES */}
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="hidden sm:block w-12 border-t border-gray-400"></span>

      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
        {blog.intro.heading}
      </h2>

      <span className="hidden sm:block w-12 border-t border-gray-400"></span>
    </div>

    {/* PARAGRAPH */}
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center whitespace-pre-line">
      {blog.intro.text}
    </p>

  </div>
</section>



      {/* ===== HOW IT WORKS ===== */}
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="space-y-8 lg:px-10 mx-auto">
          {blog.steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-10 py-14">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why It Matters
        </h2>

        <ul className="max-w-xl mx-auto space-y-3 mb-10">
          {blog.advantages.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <img
          src={blog.deliveryImage}
          alt="Delivery"
          className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-xl shadow-lg"
        />
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="px-4 sm:px-6 lg:px-10 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Industries That Depend on This
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blog.industries.map((industry, i) => (
            <div
              key={i}
              className="p-5 bg-white border rounded-lg text-center shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* ===== COMPLIANCE ===== */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          UAE Compliance & Safety Standards
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {blog.compliance}
        </p>
      </section>

      {/* ===== TAKEAWAY ===== */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          The Final Takeaway
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {blog.takeaway}
        </p>
      </section>
    </div>
  );
}
