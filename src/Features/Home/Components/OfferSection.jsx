import img1 from "../../../assets/Images/Fuel Supply.png";
import img2 from "../../../assets/Images/Transportation.png";
import img3 from "../../../assets/Images/Quality Assurance.jpg";
import img4 from "../../../assets/Images/Environmental Responsibility.png";

import truck from "../../../assets/Icons/Truck.gif";
import badge from "../../../assets/Icons/Badge.gif";
import icon from "../../../assets/Icons/Icon.gif";

export default function StatsAndOffer() {
  /* ===================== ✅ STATS DATA ===================== */
  const stats = [
    {
      icon: icon,
      title: "20+ Years",
      desc: "Industry Expertise",
    },
    {
      icon: truck,
      title: "24/7",
      desc: "Logistics Support",
    },
    {
      icon: badge,
      title: "High Quality",
      desc: "Certified Supply",
    },
  ];

  /* ===================== ✅ OFFER DATA ===================== */
  const services = [
    {
      title: "Fuel Supply",
      desc: "Premium Delivery For Industries, Fleets & Commercial Sectors.",
      img: img1,
    },
    {
      title: "Transportation",
      desc: "Safe, On-Time Fuel Logistics With Modern Fleet Tracking.",
      img: img2,
    },
    {
      title: "Quality Assurance",
      desc: "Strict Testing & Compliance At Every Stage.",
      img: img3,
    },
    {
      title: "Environmental Responsibility",
      desc: "Fuel Solutions With Sustainability In Focus.",
      img: img4,
    },
  ];

  return (
    <>
      {/* =====================  OFFER SECTION ===================== */}
      <section className="bg-white  py-12 sm:py-16 ">
        <h1 className="text-center text-[26px] sm:text-[30px] lg:text-[34px] font-semibold mb-4 sm:mb-5">
          What We Offer
        </h1>

        <div className="px-4 sm:px-6 lg:px-10  ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4  sm:gap-6 lg:gap-8">
            {services.map((item, index) => (
              <div key={index} className="text-center ">
                {/* ✅ IMAGE WITH TAPERED BOTTOM + BORDER */}
                <div
                  className="relative mx-auto w-full lg:px-10     sm:max-w-[280px] mt-6 lg:max-w-[364px] xl:max-w-[320px]
                  shadow-black"
                >
                  <div
                    className="
                      border border-black
                      rounded-2xl
                      overflow-hidden
                      [clip-path:polygon(0%_0%,100%_0%,97%_100%,3%_100%)]
                    "
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[180px] sm:h-[200px] lg:h-[220px] object-cover border-black"
                    />
                  </div>
                </div>

                <h3 className="mt-5 sm:mt-6 text-base sm:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed px-2">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-blue-700 font-medium text-xs sm:text-sm hover:underline"
                >
                  Learn More <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ✅ STATS SECTION ===================== */}
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className=" mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="
                
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  shadow-sm
                  px-6 sm:px-8
                  py-8 sm:py-10
                  text-center
                  hover:shadow-md
                  transition
                  duration-300
                "
              >
                <div className="flex justify-center  mb-3 sm:mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
