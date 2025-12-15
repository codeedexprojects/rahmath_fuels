import { ArrowUpRight } from "lucide-react";

export default function FuelSupplyCTA() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl 
        px-6 sm:px-10 
        lg:px-10
        py-10 sm:py-16 
        flex flex-col lg:flex-row 
        items-center justify-between 
        gap-8 w-full">
        
        {/* ✅ Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Need fuel supply for your
            <br className="hidden sm:block" />
            business?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Talk to our team for customized plans
            <br className="hidden sm:block" />
            and bulk pricing.
          </p>
        </div>

        {/* ✅ Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Contact Us Button */}
          <button className="w-full sm:w-auto bg-white text-gray-900 
            px-6 py-3 sm:py-4 
            rounded-xl font-semibold 
            flex items-center justify-center gap-2 
            hover:bg-gray-100 transition-colors">
            <span>Contact Us Today</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          {/* View All Services Button */}
          <button className="w-full sm:w-auto bg-transparent border-2 border-white 
            text-white px-6 py-3 sm:py-4 
            rounded-xl font-semibold 
            flex items-center justify-center gap-2 
            hover:bg-white/10 transition-colors">
            <span>View All Services</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
}
