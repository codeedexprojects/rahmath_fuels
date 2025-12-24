import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-12">
      <div className=" px-10 bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At <strong>Rahmath Fuels</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, store, and safeguard information
          when you visit our website or interact with our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600">
          We may collect personal information such as your name, phone number,
          email address, company name, and enquiry details when you submit forms
          or contact us through our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>To respond to enquiries and service requests</li>
          <li>To provide fuel supply and related services</li>
          <li>To improve our website, services, and customer experience</li>
          <li>To communicate important updates or operational information</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          3. Information Sharing
        </h2>
        <p className="text-gray-600">
          Rahmath Fuels does not sell, rent, or trade your personal information.
          Information may only be shared with trusted service providers or
          authorities when required to fulfill services or comply with legal
          obligations.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-600">
          We implement reasonable administrative and technical safeguards to
          protect your personal data against unauthorized access, loss, misuse,
          or disclosure.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          5. Cookies & Tracking
        </h2>
        <p className="text-gray-600">
          Our website may use cookies or similar technologies to enhance user
          experience, analyze traffic, and improve functionality. You may choose
          to disable cookies through your browser settings.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          6. Third-Party Links
        </h2>
        <p className="text-gray-600">
          Our website may contain links to third-party websites. Rahmath Fuels is
          not responsible for the privacy practices or content of external
          sites.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          7. Your Rights
        </h2>
        <p className="text-gray-600">
          You have the right to request access, correction, or deletion of your
          personal information, subject to applicable laws and operational
          requirements.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          8. Changes to This Policy
        </h2>
        <p className="text-gray-600">
          Rahmath Fuels reserves the right to update this Privacy Policy at any
          time. Changes will be effective upon posting on this page.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          9. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact Rahmath Fuels using the contact details available on our
          website.
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
}
