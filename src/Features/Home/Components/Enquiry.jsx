import React, { useEffect, useState } from "react";
import AOS from "aos";
import QR from "../../../assets/Images/QR.webp";

export default function QuickInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div
      data-aos="fade-up"
      className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Quick Inquiry</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <p className="text-xl font-medium mb-6">
              We respond quickly to all business inquiries.
            </p>

            <form className="space-y-4">
              {["name", "company", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg">
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div data-aos="fade-left" className="text-center">
            <h2 className="text-2xl font-bold mb-2">Scan for Directions</h2>
            <p className="text-gray-500 mb-4">Open our location in Maps</p>

            <div className="inline-block bg-white p-6 rounded-lg shadow">
              <img src={QR} alt="QR" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
