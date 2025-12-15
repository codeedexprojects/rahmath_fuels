import React, { useState } from "react";
import QR from "../../../assets/Images/QR.png";

export default function QuickInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 2xl:px-40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
            <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-20 h-0.5 bg-gray-400"></span>
            Quick Inquiry
          </h1>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left - Form */}
          <div className="w-full">
            <p className="text-black font-medium text-xl sm:text-2xl mb-6">
              We respond quickly to all business inquiries.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none 
                focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium 
                hover:bg-blue-800 transition-all duration-200"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right - QR Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Scan for Directions
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Open our location instantly in Maps.
            </p>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <img
                src={QR}
                alt="QR Code"
                className="
                  w-48 h-48         /* Mobile */
                  sm:w-64 sm:h-64   /* Small Tablets */
                  md:w-72 md:h-72   /* Large Tablets */
                  lg:w-80 lg:h-80   /* Laptops */
                  xl:w-96 xl:h-96   /* Big Screens */
                  object-contain
                "
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
