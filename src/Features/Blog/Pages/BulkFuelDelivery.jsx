import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


import { blogData } from "../Data/BlogData";
import { Building2, Truck, Factory, Ship, Landmark } from "lucide-react";

export default function BulkFuelDelivery() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  const industryIcons = {
    building: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    truck: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />,
    factory: <Factory className="w-5 h-5 sm:w-6 sm:h-6" />,
    ship: <Ship className="w-5 h-5 sm:w-6 sm:h-6" />,
    landmark: <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

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
      <section className="py-10 lg:py-16">
        <div className="px-6 sm:px-8 lg:px-10">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-center mb-4"
          >
            {blog.card.title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-center text-gray-600 mb-8"
          >
            By {blog.author} | {blog.card.date} | {blog.readTime}
          </p>

          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            src={blog.heroImage}
            alt={blog.card.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-14">
        <div className="px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-[28px] sm:text-3xl font-bold text-gray-900 mb-6">
            {blog.intro.heading}
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {blog.intro.text}
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-10 sm:py-14">
        <div className="px-6 sm:px-8 lg:px-10">
          <h2
            data-aos="fade-up"
            className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-10"
          >
            How It Works
          </h2>

          <div className="space-y-10">
            {blog.steps.map((step, index) => (
              <div
                key={step.num}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="flex gap-4 sm:gap-6 items-start"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                  {step.num}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="py-10 sm:py-14">
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="bg-white rounded-xl shadow-sm border-l-4 border-gray-800 p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-bold text-center mb-6">
              Why It Matters
            </h2>

            <ul className="space-y-5">
              {blog.advantages.map((adv, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="flex items-center justify-center gap-4 text-gray-700 text-lg sm:text-xl"
                >
                  <span className="w-2.5 h-2.5 bg-gray-800 rounded-full shrink-0"></span>
                  <span className="text-center">{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-48 sm:h-64 lg:h-72">
            <img
              src={blog.deliveryImage}
              alt="Fuel delivery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-12">
        <div className="px-6 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl font-bold mb-10">
            — Industries That Depend on Bulk Fuel Delivery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.industries.map((industry, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="flex items-center gap-4 bg-white p-5 rounded-lg hover:shadow-md transition"
              >
                <div className="text-blue-900">
                  {industryIcons[industry.icon]}
                </div>
                <span className="font-medium text-gray-700">
                  {industry.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE ===== */}
      <section className="py-10">
        <div className="px-6 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl font-bold mb-6">
            UAE Compliance & Safety Standards
          </h2>
          <p className="text-center text-gray-700 text-lg leading-relaxed">
            {blog.compliance}
          </p>
        </div>
      </section>

      {/* ===== TAKEAWAY ===== */}
      <section className="py-10">
        <div className="px-6 sm:px-8 lg:px-10">
          <h2 className="text-center text-3xl font-bold mb-6">
            The Final Takeaway
          </h2>
          <p className="text-center text-gray-700 text-lg leading-relaxed">
            {blog.takeaway}
          </p>
        </div>
      </section>
      {/* ===== DISCOVER MORE ===== */}
<section className="py-16 bg-white">
  <div className="px-6 sm:px-8 lg:px-10">
    <h2
      data-aos="fade-up"
      className="text-3xl font-bold text-center mb-12"
    >
      Discover More 
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData
        .filter((item) => item.id !== blog.id) // ❗ exclude current blog
        .slice(0, 3)
        .map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white
                       hover:shadow-lg transition"
          >
            {/* ===== IMAGE ===== */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.card.image}
                alt={item.card.title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Category */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">
                  {item.card.category}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white/80 text-sm">
                  {item.card.date}
                </p>
                <h3 className="text-white text-lg font-bold">
                  {item.card.title}
                </h3>
              </div>
            </div>

            {/* ===== READ MORE ===== */}
            <div className="px-5 pb-5">
              <Link
                to={`/blog/${item.id}`}
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




    </div>
  );
}
