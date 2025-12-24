import React, { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-12">
      <div className="px-10 mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to <strong>Rahmath Fuels</strong>. By accessing or using our
          website, services, or any related content, you agree to comply with
          and be bound by the following Terms & Conditions. Please read them
          carefully before using our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          1. About Rahmath Fuels
        </h2>
        <p className="text-gray-600">
          Rahmath Fuels is engaged in the supply, transportation, and distribution
          of fuel products for industrial, commercial, and fleet-based clients.
          All services are subject to availability, regulatory compliance, and
          contractual agreements.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          2. Use of Website
        </h2>
        <p className="text-gray-600">
          You agree to use this website only for lawful purposes. You must not
          misuse the website by attempting to gain unauthorized access, disrupt
          services, or transmit harmful or malicious content.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          3. Service Information
        </h2>
        <p className="text-gray-600">
          All information provided on this website, including service
          descriptions, specifications, and availability, is for general
          informational purposes only and may be updated without prior notice.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          4. Orders & Enquiries
        </h2>
        <p className="text-gray-600">
          Submitting an enquiry or request through our website does not
          constitute a binding agreement. Final terms, pricing, and delivery
          conditions will be confirmed through official communication or
          contracts.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          5. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All content on this website, including text, logos, images, graphics,
          and design elements, is the property of Rahmath Fuels and may not be
          copied, reproduced, or distributed without prior written permission.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          Rahmath Fuels shall not be held liable for any direct or indirect
          damages arising from the use or inability to use this website or its
          services, except as required by applicable law.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          7. Regulatory Compliance
        </h2>
        <p className="text-gray-600">
          All fuel supply and transportation activities are conducted in
          accordance with applicable local laws, safety standards, and
          environmental regulations.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          8. Changes to Terms
        </h2>
        <p className="text-gray-600">
          Rahmath Fuels reserves the right to modify or update these Terms &
          Conditions at any time. Continued use of the website after changes
          implies acceptance of the updated terms.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          9. Contact Information
        </h2>
        <p className="text-gray-600">
          For any questions regarding these Terms & Conditions, please contact
          Rahmath Fuels through the official contact details provided on our
          website.
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
}
