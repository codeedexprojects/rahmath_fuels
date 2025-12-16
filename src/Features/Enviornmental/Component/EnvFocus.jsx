import { Leaf, ShieldCheck, Recycle, Truck, TrendingUp } from "lucide-react";

export default function EnvFocus() {
  const items = [
    {
      icon: <Truck className="w-6 h-6" />,
      text: "Low-emission transport practices",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      text: "Spill prevention and waste control systems",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Compliance with environmental regulations",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "Responsible fuel storage and handling",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Continuous improvement in eco-friendly practices",
    },
  ];

  return (
    <section className="py-16 px-10">
      <div className="px-10 grid md:grid-cols-2 gap-14 items-start">
        
        {/* LEFT – Heading Block */}
        <div className="md:sticky md:top-28">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Sustainability Focus
          </h2>
          <p className="text-gray-700 leading-relaxed text-[20px]">
            We integrate environmental responsibility into every stage of fuel
            transportation and handling, ensuring sustainable and compliant
            operations.
          </p>
        </div>

        {/* RIGHT – List */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#203882] text-white flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-base md:text-lg leading-relaxed flex-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
