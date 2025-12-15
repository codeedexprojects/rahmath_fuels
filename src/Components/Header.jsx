import React, { useState } from "react";
import Logo from "../assets/logos/Logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/Services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Blog", path: "/Blogs" }
  ];

  return (
    <header className="w-full font-sans">

      {/* ✅ TOP BAR */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-end gap-6 lg:gap-10">
          <div className="flex items-center gap-2">📞 +1 (414) 687 - 5892</div>
          <div className="flex items-center gap-2">✉️ contact@company.com</div>
        </div>
      </div>

      {/* ✅ MAIN NAVBAR */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

          {/* ✅ LOGO */}
          <div className="flex items-center gap-2">
            <img src={Logo} className="h-10 sm:h-12" alt="logo" />
          </div>

          {/* ✅ DESKTOP NAV */}
          <nav className="hidden md:flex justify-center gap-6 lg:gap-8 text-gray-700 font-medium">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="hover:text-blue-700 transition text-base lg:text-[20px]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ✅ DESKTOP BUTTON */}
          <div className="hidden md:flex">
            <button className="bg-blue-800 text-white px-5 lg:px-6 py-2 rounded-lg hover:bg-blue-900 transition text-sm lg:text-base">
              Get A Quote
            </button>
          </div>

          {/* ✅ MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-5">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block text-gray-700 font-medium text-lg hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition">
              Get A Quote
            </button>
          </div>
        )}
      </div>

    </header>
  );
}
