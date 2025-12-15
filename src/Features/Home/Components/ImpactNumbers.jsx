import { Truck, TrendingUp, MapPin, Clock } from "lucide-react";

export default function ImpactNumbers() {
  const stats = [
    {
      icon: Truck,
      number: "50,000+",
      label: "Liters Delivered Daily",
    },
    {
      icon: TrendingUp,
      number: "20+",
      label: "Industries Served",
    },
    {
      icon: MapPin,
      number: "30+",
      label: "Serving All 7 Emirates",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Operations",
    },
  ];

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-white">
      
      {/* ✅ Responsive Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 sm:mb-16">
        Our Impact In Numbers
      </h2>

      {/* ✅ Responsive Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-900 flex items-center justify-center mb-5 sm:mb-6">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {stat.number}
        </h3>

        <p className="text-gray-600 text-sm sm:text-base">
          {stat.label}
        </p>
      </div>
    );
  })}
</div>

    </div>
  );
}
