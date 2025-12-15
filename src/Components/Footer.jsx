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
  return (
    <footer className="bg-white border-t-2 border-blue-200">
      <div className="lg:px-10 mx-auto px-4 sm:px-6 md:px-10  xl:px-20 py-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Company Info */}
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
                    className="text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-blue-900 hover:text-blue-900 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-900">
                <Mail size={16} className="text-blue-900" />
                <a
                  href="mailto:contact@company.com"
                  className="hover:text-blue-900 transition-colors"
                >
                  contact@company.com
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-blue-900">
                <Phone size={16} className="text-blue-900" />
                <a
                  href="tel:+14146875892"
                  className="hover:text-blue-900 transition-colors"
                >
                  (414) 687 - 5892
                </a>
              </li>

              <li className="flex items-start gap-2 text-sm text-blue-900">
                <MapPin size={16} className="text-blue-900 mt-1" />
                <span>
                  Rahmat Fuel Trading LLC
                  <br />
                  UAE
                </span>
              </li>
            </ul>
          </div>

          {/* Service Links */}
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
                    href="#"
                    className="text-blue-900 hover:text-blue-900 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-blue-900">

          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Rahmat Fuel Trading LLC.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-end gap-3">
            <span className="whitespace-nowrap">All Rights Reserved</span>
            <span>|</span>

            <a
              href="#"
              className="text-blue-900 transition-colors underline"
            >
              Terms & Conditions
            </a>

            <span>|</span>

            <a
              href="#"
              className="hover:text-blue-900 transition-colors underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
