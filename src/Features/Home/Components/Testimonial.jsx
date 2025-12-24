import { useState, useEffect } from "react";
import AOS from "aos";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profile1 from "../../../assets/Images/profile1.jpg"
import profile2 from "../../../assets/Images/profile2.jpg"
import profile3 from "../../../assets/Images/profile3.jpg"


export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "Rahmat Fuel Has Been A Reliable Partner — Consistent Delivery And Unmatched Support Rahmat Fuel Has Been A Reliable Partner — Consistent Delivery And Unmatched Support.",
      name: "Operations Manager",
      company: "TransLogix Freight Services",
      avatar:profile1
        
    },
    {
      id: 2,
      text: "Outstanding service quality and timely deliveries. Their team goes above and beyond to ensure our operations run smoothly without any fuel supply disruptions.",
      name: "Fleet Director",
      company: "BlueLine Transport Solutions",
      avatar:profile2
    },
    {
      id: 3,
      text: "We've been working with Rahmat Fuel for years. Their competitive pricing and exceptional customer service make them our preferred fuel supplier.",
      name: "Procurement Head",
      company: "Global Industries",
      avatar:profile3
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="w-full lg:px-10 mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-white"
    >
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-16"
      >
        What Our Clients Say
      </h2>

      <div
        data-aos="zoom-in"
        className="w-full bg-white border border-gray-200 rounded-2xl 
        p-5 sm:p-8 md:p-10 shadow-sm mb-8 min-h-[200px]"
      >
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          "{testimonials[currentIndex].text}"
        </p>

        <div className="flex items-center gap-4">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex].company}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
          <ChevronLeft />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? "w-8 bg-blue-900" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
