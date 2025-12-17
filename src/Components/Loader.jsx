import React from "react";
import logo from "../assets/logos/Logo.png";

export default function LogoLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="w-28 sm:w-32"
        />

        {/* Loading Bar */}
        <div className="relative w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}
