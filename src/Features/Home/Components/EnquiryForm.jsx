import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    agree: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept Terms & Conditions");
      return;
    }

    // ✅ WhatsApp number (NO +, NO spaces)
    const whatsappNumber = "971509916875";

    const message =
      `Hello Rahmat Fuel Trading LLC 👋\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Location: ${formData.location}\n\n` +
      `Message:\n${formData.message}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

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

        {/* HEADER */}
        <div data-aos="fade-up" className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Request Your Quote
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Enter your details and we’ll prepare a personalized price estimate.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="text-sm text-gray-600">Company Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">
                Phone Number / WhatsApp
              </label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9715xxxxxxx"
                  className="w-full border border-blue-300 rounded-md
                             pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@mail.com"
                  className="w-full border border-blue-300 rounded-md
                             pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-sm text-gray-600">Location</label>
            <div className="relative mt-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Add here"
                className="w-full border border-blue-300 rounded-md
                           pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-600">
              Message / Special Requests
            </label>
            <textarea
              rows={4}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full border border-blue-300 rounded-md
                         p-4 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 accent-blue-700"
            />
            <p>
              I accept the{" "}
              <a href="/TermsAndConditions" className="text-blue-700 underline">Terms & Condition</a>
              .
            </p>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
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
