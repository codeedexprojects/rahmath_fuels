import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section
      data-aos="fade-up"
      className="py-12 sm:py-14 px-4 sm:px-6 bg-gray-50"
    >
      {/* OUTER CONTAINER */}
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* HEADER */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Get In Touch
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-16 lg:gap-20">
          
          {/* LEFT — FORM */}
          <div data-aos="fade-right" data-aos-delay="200" className="w-full">
            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 resize-none"
              />

              <button
                onClick={handleSubmit}
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-full bg-blue-900 text-white py-3 sm:py-4 rounded-lg font-semibold tracking-wide hover:bg-blue-800 transition-all duration-200"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="space-y-6 sm:space-y-8 text-gray-700 px-0 sm:px-6 md:px-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              RAHMAT FUEL LLC
            </h3>

            <div className="flex gap-4">
              <MapPin size={26} className="mt-1 text-blue-900" />
              <p className="text-base sm:text-lg leading-relaxed">
                Jassim Building, Jurf Industrial Zone 1 - Office No 7 <br />
                Ajman – (Br. Dubai) U.A.E
              </p>
            </div>

            <div className="flex gap-4">
              <Phone size={26} className="mt-1 text-blue-900" />
              <div className="text-base sm:text-lg">
                <a
                  href="tel:+971652078840"
                  className="block hover:text-blue-900"
                >
                  +97 165 207 840
                </a>
                <a
                  href="tel:+971509916875"
                  className="block underline hover:text-blue-900"
                >
                  +97 150 991 6875
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={26} className="mt-1 text-blue-900" />
              <a
                href="mailto:info@rahmatfuel.com"
                className="text-base sm:text-lg hover:text-blue-900"
              >
                info@rahmatfuel.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={26} className="mt-1 text-blue-900 flex-shrink-0" />
              <p className="text-base sm:text-lg leading-relaxed">
                Office hours: Monday – Saturday
                <br />
                9 AM to 8 PM UAE Time
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
