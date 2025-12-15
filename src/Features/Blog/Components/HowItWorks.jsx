import React from "react";

export default function BulkFuelWorking() {
  const steps = [
    {
      num: 1,
      title: "Fuel Order & Requirement Analysis",
      desc:
        "The Process Begins When A Business Places A Fuel Request Specifying Quantity, Fuel Type, And Delivery Time. The Supplier Checks Availability, Schedules The Delivery Slot, And Prepares The Dispatch Plan Based On Customer Needs.",
    },
    {
      num: 2,
      title: "Quality Testing & Certification",
      desc:
        "Before The Fuel Leaves The Depot, It Undergoes Laboratory Testing To Ensure It Meets UAE Safety And Performance Standards. Only Certified, Contaminant-Free Fuel Is Approved For Transportation.",
    },
    {
      num: 3,
      title: "Secure Loading at the Depot",
      desc:
        "Fuel Is Loaded Into Tankers Using Modern Pumps And Controlled Filling Systems. Safety Protocols — Such As Grounding, Flow Monitoring, And Spill Prevention — Are Followed To Ensure A Secure Transfer.",
    },
    {
      num: 4,
      title: "Transportation & GPS Monitoring",
      desc:
        "Once Loaded, The Fuel Tanker Begins Its Journey. Licensed Tankers Are Equipped With GPS Tracking, Allowing Real-Time Monitoring Of Routes And Delivery Status.",
    },
    {
      num: 5,
      title: "On-Site Delivery to the Customer",
      desc:
        "Upon Arrival, Safety Checks Are Conducted Before Offloading Begins. Fuel Is Dispensed Directly Into Storage Tanks Or Fleet Vehicles As Required.",
    },
  ];

  return (
    <div className="w-full bg-white px-4 sm:px-8 lg:px-10 py-10 sm:py-14">

      {/* TITLE */}
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:block w-12 border-t border-gray-400"></span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <span className="hidden sm:block w-12 border-t border-gray-400"></span>
        </div>
      </div>

      {/* STEPS */}
      <div className="px-10 mx-auto space-y-8 sm:space-y-10">

        {steps.map((step) => (
          <div
            key={step.num}
            className="flex gap-4 sm:gap-6 items-start"
          >
            {/* NUMBER */}
            <div className="flex-shrink-0">
              <div
                className="
                  w-9 h-9 sm:w-11 sm:h-11
                  rounded-full bg-blue-100 text-blue-600
                  flex items-center justify-center
                  font-semibold text-sm sm:text-base
                "
              >
                {step.num}
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base lg:text-[17px] text-gray-600 leading-relaxed sm:leading-loose">
                {step.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
