import { TestTube, Microscope, BadgeCheck, Truck } from "lucide-react";

export default function QualityControlProcess() {
  const steps = [
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Fuel Sample Collection",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Comprehensive Laboratory Analysis",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Certification and Approval",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Secure Storage and Controlled Delivery",
    },
  ];

  return (
    <section className="py-16 px-10 bg-white">
      <div className=" mx-auto">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-14">
          Quality Control Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-[2px] bg-gray-200" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="z-10 w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center mb-4">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="text-sm font-semibold text-blue-900 mb-1">
                Step {index + 1}
              </span>

              {/* Title */}
              <h3 className="text-gray-900 font-medium leading-snug max-w-[200px]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
