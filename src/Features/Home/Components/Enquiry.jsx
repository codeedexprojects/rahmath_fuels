import React, { useEffect, useState } from "react";
import AOS from "aos";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ WhatsApp number WITHOUT + or spaces
    const whatsappNumber = "971509916875";

    // ✅ EXACT user-entered message
    const message =
      `Hello Rahmat Fuel Trading LLC 👋\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`;

    // ✅ Encode & open WhatsApp
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
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
                  type="text"
                  name={field}
                  required
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
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

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <iframe
                className="w-full rounded-lg
                           h-[240px]
                           sm:h-[280px]
                           md:h-[320px]
                           lg:h-[360px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1436131763517!2d55.530908475171735!3d25.433461777559607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7e1dea3ed83%3A0x7a50272f2cdb9ad4!2sRAHMAT%20FUEL%20LLC!5e0!3m2!1sen!2sin!4v1765961756389!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
