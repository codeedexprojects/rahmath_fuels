import React from "react";
import QR from "../../../assets/Images/QR.png";

export default function LocateUs() {
  return (
    <section className="py-12 px-10 sm:px-6 md:px-10">
      {/* Centered Heading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Locate Us
      </h2>

      {/* Left-Aligned QR Section */}
      <div className="w-full flex justify-start">
        <div className="bg-white p-10 sm:p-6 rounded-lg shadow-md">
          <img
            src={QR}
            alt="QR Code"
            className="
              w-40 h-40
              sm:w-56 sm:h-56
              md:w-64 md:h-64
              lg:w-72 lg:h-72
              xl:w-80 xl:h-80
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
