import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import QR from "../../../assets/Images/QR.png";


export default function GetInTouch() {
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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="py-14 px-4 sm:px-6 md:px-10 bg-gray-50">
      <div className="px-10 mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Get In Touch
          </h2>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* LEFT SIDE — FORM */}
          <div className="w-full">
            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-900 text-white py-3 sm:py-4 rounded-lg font-semibold tracking-wide hover:bg-blue-800 transition-all duration-200 text-sm sm:text-base"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT INFO */}
          <div className="space-y-8 text-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              RAHMAT FUEL LLC
            </h3>

            {/* ADDRESS */}
            <div className="flex gap-4">
              <MapPin size={26} className="mt-1 flex-shrink-0 text-blue-900" />
              <p className="text-base sm:text-lg leading-relaxed">
                Jassim Building, Jurf Industrial Zone 1 - Office No 7 <br />
                Ajman – (Br. Dubai) U.A.E
              </p>
            </div>

            {/* PHONES */}
            <div className="flex gap-4">
              <Phone size={26} className="mt-1 flex-shrink-0 text-blue-900" />
              <div className="text-base sm:text-lg">
                <a
                  href="tel:+971652078840"
                  className="block hover:text-blue-900 transition"
                >
                  +97 165 207 840
                </a>
                <a
                  href="tel:+971509916875"
                  className="block underline hover:text-blue-900 transition"
                >
                  +97 150 991 6875
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4">
              <Mail size={26} className="mt-1 flex-shrink-0 text-blue-900" />
              <a
                href="mailto:info@rahmatfuel.com"
                className="text-base sm:text-lg hover:text-blue-900 transition"
              >
                info@rahmatfuel.com
              </a>
            </div>

            {/* OFFICE HOURS */}
            <p className="text-base sm:text-lg">
              Office hours: Monday – Saturday<br />9 AM to 8 PM UAE Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
