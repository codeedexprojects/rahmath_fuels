import { ShieldCheck, FlaskConical, FileCheck, Droplets ,ClipboardCheck} from "lucide-react";

export default function WhatWeEnsure() {
  const points = [
    {
      icon: <FlaskConical className="w-6 h-6 text-blue-700" />,
      text: "Laboratory-tested fuel for consistent quality",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
      text: "Full compliance with UAE fuel regulations",
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-700" />,
      text: "Contamination-free handling and storage",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-700" />,
      text: "Proper documentation and certification",
    },
    
  ];

  return (
    <section className="py-14 px-10 bg-white">
      <div className=" mx-auto">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-10">
          What We Ensure
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
