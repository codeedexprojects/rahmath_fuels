import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Logo from "../assets/logos/Logo.png";

export default function Footer() {

  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/Services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Blog", path: "/Blogs" },
  ];

  return (
    <footer className="bg-white border-t-2 border-blue-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

      
          <div>
            <img src={Logo} alt="Logo" className="h-12 mb-4" />

            <p className="text-sm text-blue-900 mb-6">
              Fueling reliability since 2024.
            </p>

            <div className="flex gap-4 flex-wrap">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-900 hover:text-blue-700 transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Quick Navigation
            </h3>

            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-blue-900 hover:text-blue-700 transition text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-900">
                <Mail size={16} />
                <a href="mailto:contact@company.com">
                 Info@rahmatfuel.com
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-blue-900">
                <Phone size={16} />
                <a href="tel:+14146875892">
                  +971 50991 6875
                </a>
              </li>

              <li className="text-sm text-blue-900">
  <a
    href="https://maps.app.goo.gl/jc2fHW9AtkCneZLg7"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-2 hover:underline hover:text-blue-700 transition"
  >
    <MapPin size={16} className="mt-1 flex-shrink-0" />
    <span>
      Rahmat Fuel Trading LLC
      <br />
      UAE
    </span>
  </a>
</li>

            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Services Links
            </h3>

            <ul className="space-y-2">
              {[
                "Fuel Supply",
                "Fuel Transportation",
                "Quality Assurance",
                "Sustainability",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/Services"
                    className="text-blue-900 hover:text-blue-700 transition text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

     
        <div className="pt-6 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-blue-900">

          <p>© {new Date().getFullYear()} Rahmat Fuel Trading LLC.</p>

          <div className="flex flex-wrap gap-3">
            <span>All Rights Reserved</span>
            <span>|</span>
            <a href="#" className="underline">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

