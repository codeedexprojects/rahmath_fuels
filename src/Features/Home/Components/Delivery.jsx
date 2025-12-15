export default function FuelDeliveryProcess() {
  const steps = [
    {
      number: 1,
      title: "Request & Planning",
      description: "Submit Your Fuel Requirements And Our Team Plans The Delivery."
    },
    {
      number: 2,
      title: "Secure Transportation",
      description: "Our Certified Fleet Ensures Safe And Secure Fuel Transport."
    },
    {
      number: 3,
      title: "On-Site Delivery",
      description: "Timely And Efficient Delivery Directly To Your Location."
    },
    {
      number: 4,
      title: "Quality Check",
      description: "Every Batch Is Tested To Ensure It Meets The Highest Standards"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
      
      {/* ✅ Responsive Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
        How Our Fuel Delivery Works
      </h2>

      <div className="relative">
        
        {/* ✅ Dotted Line - Desktop Only (UNCHANGED IDEA) */}
        <div
          className="absolute top-[48px] hidden md:block border-t-2 border-dashed border-gray-300"
          style={{
            left: "0%",
            right: "0%",
          }}
        ></div>

        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative"
            >
              
              {/* ✅ Responsive Circles (Same Design, Scales Down on Mobile) */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 rounded-full bg-[#E9EBF3] flex items-center justify-center mb-5 sm:mb-6 relative z-10">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#203882]">
                  {step.number}
                </span>
              </div>

              {/* ✅ Responsive Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* ✅ Responsive Description */}
              <p className="text-sm text-gray-600 leading-relaxed px-3 sm:px-2">
                {step.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
