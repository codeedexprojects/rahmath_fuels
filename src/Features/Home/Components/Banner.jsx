import AOS from "aos";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FuelSupplyCTA() {
  const navigate = useNavigate();
  
   const ContactNavigate = () => {
    navigate("/Contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    
   const ServiceNavigate = () => {
    navigate("/Services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-cubic", once: false });
  }, []);

  return (
    <div data-aos="fade-up" className="w-full px-4 sm:px-6 lg:px-10 py-8">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl px-6 sm:px-10 py-10 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div data-aos="fade-right" className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Need fuel supply for your business?
          </h2>
          <p className="text-gray-300">
            Talk to our team for customized plans and bulk pricing.
          </p>
        </div>

        <div data-aos="fade-left" className="flex flex-col sm:flex-row gap-4">
          <button
          onClick={ContactNavigate}
           className="bg-white text-gray-900 px-6 py-3 rounded-xl flex items-center gap-2">
            Contact Us <ArrowUpRight />
          </button>
          <button 
          onClick={ServiceNavigate} className="border-2 border-white text-white px-6 py-3 rounded-xl flex items-center gap-2">
            View Services <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}
