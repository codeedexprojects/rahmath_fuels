import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Rahmat Fuel Has Been A Reliable Partner — Consistent Delivery And Unmatched Support Rahmat Fuel Has Been A Reliable Partner — Consistent Delivery And Unmatched Support.",
      name: "Operations Manager",
      company: "XYZ Logistics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      text: "Outstanding service quality and timely deliveries. Their team goes above and beyond to ensure our operations run smoothly without any fuel supply disruptions.",
      name: "Fleet Director",
      company: "ABC Transport",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      text: "We've been working with Rahmat Fuel for years. Their competitive pricing and exceptional customer service make them our preferred fuel supplier.",
      name: "Procurement Head",
      company: "Global Industries",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  // ✅ AUTO SLIDE EVERY 4 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change slide every 4s

    return () => clearInterval(interval); // ✅ Cleanup
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="w-full lg:px-10 mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-white">
      
      {/* ✅ Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-16">
        What Our Clients Say
      </h2>

      {/* ✅ Testimonial Card */}
      <div className="w-full bg-white border border-gray-200 rounded-2xl 
        p-5 sm:p-8 md:p-10 
        shadow-sm mb-8 
        min-h-[200px] sm:min-h-[240px] transition-all duration-500">
        
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
          "{testimonials[currentIndex].text}"
        </p>

        {/* ✅ Client Info */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm sm:text-base text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              {testimonials[currentIndex].company}
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Navigation */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        
        <button
          onClick={prevSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* ✅ Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-blue-900"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>
    </div>
  );
}
