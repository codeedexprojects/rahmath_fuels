import React, { useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EnquiryForm() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="min-h-screen bg-gray-100 flex items-center justify-center
                 px-4 sm:px-6 lg:px-10 py-10 overflow-x-hidden"
    >
      <div
        data-aos="zoom-in"
        className="w-full bg-white rounded-xl shadow-lg
                   p-6 sm:p-8 lg:p-10"
      >

        {/* ===== HEADER ===== */}
        <div data-aos="fade-up" className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Request Your Quote
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Enter your details and we’ll prepare a personalized price estimate.
          </p>
        </div>

        {/* ===== FORM ===== */}
        <form className="space-y-6">

          {/* Name */}
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="text-sm text-gray-600">Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="John"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:outline-none
                           focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="150">
            <label className="text-sm text-gray-600">Company Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:outline-none
                           focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-sm text-gray-600">
                Phone Number / WhatsApp
              </label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="126555"
                  className="w-full border border-blue-300 rounded-md
                             pl-10 pr-4 py-3 focus:outline-none
                             focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="John@mail.com"
                  className="w-full border border-blue-300 rounded-md
                             pl-10 pr-4 py-3 focus:outline-none
                             focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div data-aos="fade-up" data-aos-delay="250">
            <label className="text-sm text-gray-600">Location</label>
            <div className="relative mt-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Add here"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:outline-none
                           focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Message */}
          <div data-aos="fade-up" data-aos-delay="300">
            <label className="text-sm text-gray-600">
              Message / Special Requests
            </label>
            <textarea
              rows={4}
              placeholder="How can we help you ?"
              className="w-full border border-blue-300 rounded-md
                         p-4 focus:outline-none
                         focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Checkbox */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="flex items-start gap-3 text-xs sm:text-sm text-gray-600"
          >
            <input type="checkbox" className="mt-1 accent-blue-700" />
            <p>
              I accept the{" "}
              <span className="text-blue-700 underline cursor-pointer">
                Terms & Condition
              </span>
              . By submitting this form, I consent to receive relevant
              communications via email, phone, or text. I understand I can opt
              out at any time. Read our{" "}
              <span className="text-blue-700 underline cursor-pointer">
                privacy policy
              </span>
              .
            </p>
          </div>

          {/* Submit */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center pt-4"
          >
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800
                         text-white px-10 py-3 rounded-md
                         font-medium transition"
            >
              Submit Enquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
