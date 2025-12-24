import React, { useEffect, useState } from "react";
import AOS from "aos";
import QR from "../../../assets/Images/QR.png";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SEND FORM DATA VIA EMAIL
  const handleSubmit = (e) => {
    e.preventDefault();

    const receiverEmail = "Info@rahmatfuel.com";
    const subject = "Quick Inquiry from Website";

    const body =
      `Hello Rahmat Fuel Trading LLC,\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`;

    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Quick Inquiry</h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT FORM */}
          <div data-aos="fade-right">
            <p className="text-xl font-medium mb-6">
              We respond quickly to all business inquiries.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {["name", "company", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 resize-none outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* RIGHT MAP */}
          <div data-aos="fade-left" className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Open our location in Maps
            </h2>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow flex justify-center">
              <img
                src={QR}
                alt="Location QR Code"
                className="
                  w-40 h-40
                  sm:w-48 sm:h-48
                  md:w-56 md:h-56
                  lg:w-64 lg:h-64
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
