import AOS from "aos";
import { useEffect } from "react";
import { Truck, TrendingUp, MapPin, Clock } from "lucide-react";

export default function ImpactNumbers() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  const stats = [
    { icon: Truck, number: "50,000+", label: "Liters Delivered Daily" },
    { icon: TrendingUp, number: "20+", label: "Industries Served" },
    { icon: MapPin, number: "30+", label: "Serving All 7 Emirates" },
    { icon: Clock, number: "24/7", label: "Operations" },
  ];

  return (
    <div data-aos="fade-up" className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Impact In Numbers
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Icon className="text-white" />
              </div>
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
