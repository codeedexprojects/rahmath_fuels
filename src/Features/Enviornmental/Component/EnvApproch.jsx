import { CheckCircle2 } from "lucide-react";

export default function EnvApproach() {
  const steps = [
    "Reduce emissions during transportation",
    "Follow strict fuel handling procedures",
    "Monitor and evaluate environmental impact",
    "Improve operations with sustainable methods",
  ];

  return (
    <section className="py-16 px-10 bg-gray-50">
      <div className="px-10 mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-10">
          Our Approach
        </h2>

        {/* Approach List */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative pl-10 py-4 bg-white rounded-xl border border-gray-200 hover:border-blue-900 transition"
            >
              {/* Left Accent Line */}
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-900 rounded-l-xl"></span>

              {/* Content */}
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-5 h-5 text-blue-900 flex-shrink-0" />
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
