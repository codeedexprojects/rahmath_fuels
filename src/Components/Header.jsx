import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logos/Logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/Services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Blog", path: "/Blogs" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 font-sans bg-white shadow">

        {/* 🔵 Top Blue Bar */}
        <div className="bg-blue-900 text-white text-xs sm:text-sm py-2">
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
                       flex flex-row flex-wrap
                       items-center
                       justify-center sm:justify-end
                       gap-4 sm:gap-6 lg:gap-10"
          >
            <a
              href="tel:+971509916875"
              className="flex items-center gap-2 hover:underline"
            >
              📞 +971 50991 6875
            </a>

            <a
              href="mailto:Info@rahmatfuel.com"
              className="flex items-center gap-2 hover:underline"
            >
              ✉️ Info@rahmatfuel.com
            </a>
          </div>
        </div>

        {/* 🔽 Main Navigation */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="h-10 sm:h-12" />
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 lg:gap-8 font-medium">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition text-base lg:text-[20px] ${
                      isActive
                        ? "text-blue-800 font-bold"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <NavLink
                to="/EnquiryForm"
                className="bg-blue-800 text-white px-5 lg:px-6 py-2 rounded-lg
                           hover:bg-blue-900 transition text-sm lg:text-base"
              >
                Get A Quote
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-900"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white border-t px-6 py-6 space-y-5 shadow-lg">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg transition ${
                      isActive
                        ? "text-blue-800 font-bold"
                        : "text-gray-700 hover:text-blue-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/EnquiryForm"
                onClick={() => setOpen(false)}
                className="block text-center w-full bg-blue-800 text-white py-3 rounded-lg
                           hover:bg-blue-900 transition"
              >
                Get A Quote
              </NavLink>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-[112px]" />
    </>
  );
}
