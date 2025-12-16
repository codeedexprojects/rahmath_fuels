import Blog from "../../../assets/Images/Blog.webp";
import Trans from "../../../assets/Images/BlogDelivery.webp";

import Eco from "../../../assets/Images/Eco.webp";
import Delivery from "../../../assets/Images/Delivery.webp";
import FuelTest from "../../../assets/Images/FuelTest.webp";
import LabTest from "../../../assets/Images/LabTest.webp";
import FuelTesting from "../../../assets/Images/FuelTesting.webp";

import Solar from "../../../assets/Images/Solar.webp";
import BlogMill from "../../../assets/Images/BlogMill.webp";

export const blogData = [
  /* ======================= BLOG 1 ======================= */
  {
    id: 1,

    card: {
      image: Delivery,
      category: "Logistics",
      date: "Feb 2025",
      title: "How Bulk Fuel Delivery Works In The UAE",
    },

    author: "Hazzaz Zaid",
    readTime: "5 min read",
    heroImage: Blog,

    intro: {
      heading: " Introduction",
      text: `Bulk Fuel Delivery Plays A Crucial Role In Keeping UAE Businesses Running Smoothly.
From Construction Sites To Logistics Fleets, Companies Rely On Timely And Safe Fuel Supply
To Maintain Operations Without Interruption. This Article Breaks Down The Entire Process
From Order Placement To Final On-Site Delivery.`,
    },

    steps: [
      {
        num: 1,
        title: "Fuel Order & Requirement Analysis",
        desc: "The process begins when a business places a fuel request specifying quantity, fuel type, and delivery time. The supplier checks availability, schedules the delivery slot, and prepares the dispatch plan based on customer needs.",
      },
      {
        num: 2,
        title: "Quality Testing & Certification",
        desc: "Before the fuel leaves the depot, it undergoes laboratory testing to ensure it meets UAE safety and performance standards. Only certified, contamination-free fuel is approved for transportation.",
      },
      {
        num: 3,
        title: "Secure Loading at the Depot",
        desc: "Fuel is loaded into tankers using modern pumps and controlled filling systems. Safety protocols — such as grounding, flow monitoring, and spill prevention — are followed to ensure a secure transfer.",
      },
      {
        num: 4,
        title: "Transportation & GPS Monitoring",
        desc: "Once loaded, the fuel tanker begins its journey. In the UAE, all licensed tankers are equipped with GPS tracking, allowing real-time monitoring of routes and delivery status. Trained and certified drivers ensure safe movement across all emirates.",
      },
      {
        num: 5,
        title: "On-Site Delivery to the Customer",
        desc: "Upon arrival, the team conducts safety checks and begins the offloading process using sealed hoses and calibrated meters. Fuel is dispensed directly into storage tanks, generators, or fleet vehicles depending on customer requirements.",
      },
    ],

    advantages: [
      "Prevents Unexpected Fuel Shortages",
      "Ensures Uninterrupted Productivity",
      "Saves Time And Operational Costs",
      "Guarantees Certified Fuel Quality",
      "Provides Safe Onsite Delivery",
    ],

    deliveryImage: Trans,

    industries: [
      { icon: "building", title: "Construction & Infrastructure Projects" },
      { icon: "truck", title: "Logistics & Transportation Fleets" },
      { icon: "factory", title: "Industrial Manufacturing" },
      { icon: "ship", title: "Marine Operations" },
      { icon: "landmark", title: "Government & Municipal Services" },
    ],

    compliance:
      "All bulk fuel movements in the UAE follow strict regulatory guidelines. Tankers must be licensed, drivers must be certified, and equipment must undergo regular inspections. These measures ensure safe handling and environmental protection throughout the process.",

    takeaway:
      "Bulk fuel delivery is a streamlined and highly regulated process designed to keep UAE businesses operating at full capacity. When done correctly, it ensures quality, safety, and uninterrupted performance — making it a key part of the country’s industrial growth.",
  },

  /* ======================= BLOG 2 ======================= */
  {
    id: 2,

    card: {
      image: FuelTest,
      category: "Quality",
      date: "Jan 2025",
      title: "Why Fuel Quality Testing Matters",
    },

    author: "Hazzaz Zaid",
    readTime: "4 min read",
    heroImage: LabTest,

    intro: {
      heading: "Introduction",
      text: `Fuel Quality Testing Is Essential To Ensure Efficient Performance, Safety, And Longevity
Of Engines And Equipment. Poor Fuel Quality Can Cause Serious Mechanical Failures, Increased
Maintenance Costs, And Unexpected Downtime.`,
    },

    steps: [
      {
        num: 1,
        title: "Detection of Contaminants",
        desc: "Fuel Testing Identifies Harmful Contaminants Such As Water, Sediments, And Microbial Growth That Can Cause Corrosion, Block Fuel Systems, And Lead To Premature Equipment Failure.",
      },
      {
        num: 2,
        title: "Regulatory Compliance",
        desc: "Comprehensive Testing Ensures Fuel Meets National And International Quality Standards, Helping Businesses Maintain Regulatory Compliance And Avoid Legal, Safety, And Operational Risks.",
      },
      {
        num: 3,
        title: "Optimized Engine Performance",
        desc: "Certified High-Quality Fuel Ensures Efficient Combustion, Enhances Engine Performance, Reduces Emissions, And Supports Consistent Operational Output Across Fleets And Machinery.",
      },
      {
        num: 4,
        title: "Reduced Maintenance Costs",
        desc: "Early Identification Of Fuel Quality Issues Helps Prevent Costly Breakdowns, Minimizes Unplanned Downtime, And Significantly Reduces Long-Term Maintenance And Repair Expenses.",
      },
      {
        num: 5,
        title: "Extended Equipment Lifespan",
        desc: "Using Clean, Tested Fuel Reduces Internal Wear, Protects Critical Components, And Extends The Operational Lifespan Of Engines, Storage Systems, And Fuel Infrastructure.",
      },
    ],

    advantages: [
      "Protects Engines And Equipment",
      "Ensures Compliance And Safety",
      "Reduces Operational Risks",
      "Improves Fuel Efficiency",
      "Extends Asset Life",
    ],

    deliveryImage: FuelTesting,

    industries: [
      { icon: "building", title: "Construction & Infrastructure Projects" },
      { icon: "truck", title: "Logistics & Transportation Fleets" },
      { icon: "factory", title: "Industrial Manufacturing" },
      { icon: "ship", title: "Marine Operations" },
      { icon: "landmark", title: "Government & Municipal Services" },
    ],

    compliance:
      "Bulk fuel operations in the UAE are governed by strict safety, environmental, and regulatory standards designed to protect people, assets, and the environment. All fuel transportation is carried out using licensed tankers that comply with local authority requirements and international safety norms. Drivers are professionally trained, certified, and regularly assessed to ensure safe handling and transportation of hazardous materials. Regular inspections, calibration of delivery equipment, spill prevention systems, and emergency response protocols are mandatory to maintain operational integrity and regulatory compliance across all emirates.",

    takeaway:
      "Bulk fuel delivery is more than just a supply service — it is a strategic solution that ensures operational continuity, cost efficiency, and safety for businesses across the UAE. By partnering with a reliable fuel supplier, organizations gain access to certified fuel quality, dependable logistics, and full regulatory compliance. As industries continue to grow and infrastructure expands, bulk fuel delivery remains a critical backbone that supports productivity, sustainability, and long-term business success.",
  },

  /* ======================= BLOG 3 ======================= */
  {
    id: 3,

    card: {
      image: BlogMill, // ✅ second image from your screenshot
      category: "Sustainability",
      date: "Feb 2025",
      title: "The Future Of Eco-Friendly Transport",
    },

    author: "Hazzaz Zaid",
    readTime: "4 min read",
    heroImage: BlogMill,

    intro: {
      heading: "Introduction",
      text: `Eco-Friendly Transport Is Transforming The Global Logistics And Mobility Landscape.
With Growing Environmental Concerns And Regulatory Pressures, Businesses Are Shifting Toward
Cleaner Energy Solutions To Reduce Emissions And Carbon Footprints.`,
    },

    steps: [
      {
        num: 1,
        title: "Shift Toward Renewable Energy",
        desc: "Renewable Energy Sources Such As Solar, Wind, And Hydrogen Are Being Actively Integrated Into Transportation Infrastructure To Reduce Dependence On Fossil Fuels And Lower Overall Carbon Emissions.",
      },
      {
        num: 2,
        title: "Adoption of Electric & Hybrid Vehicles",
        desc: "Fleet Operators Are Rapidly Transitioning To Electric And Hybrid Vehicles To Improve Energy Efficiency, Reduce Fuel Consumption, And Meet Sustainability And Emissions Reduction Targets.",
      },
      {
        num: 3,
        title: "Smarter Logistics Planning",
        desc: "Advanced AI And GPS-Based Route Optimization Enables Smarter Logistics Planning, Minimizing Fuel Usage, Reducing Emissions, And Improving Delivery Efficiency Across Transport Networks.",
      },
      {
        num: 4,
        title: "Government Incentives & Policies",
        desc: "Supportive Government Policies, Incentives, And Regulatory Frameworks Encourage Businesses To Adopt Sustainable Transport Solutions And Invest In Clean Mobility Technologies.",
      },
      {
        num: 5,
        title: "Sustainable Fuel Alternatives",
        desc: "Cleaner Fuel Alternatives Such As Biofuels And Synthetic Fuels Provide Viable Low-Emission Options That Help Reduce Environmental Impact While Maintaining Performance And Reliability.",
      },
    ],

    advantages: [
      "Reduces Carbon Emissions",
      "Lowers Long-Term Operating Costs",
      "Improves Corporate Sustainability Goals",
      "Enhances Environmental Compliance",
      "Supports Green Innovation",
    ],

    deliveryImage: Solar,

    industries: [
      { icon: "building", title: "Construction & Infrastructure Projects" },
      { icon: "truck", title: "Logistics & Transportation Fleets" },
      { icon: "factory", title: "Industrial Manufacturing" },
      { icon: "ship", title: "Marine Operations" },
      { icon: "landmark", title: "Government & Municipal Services" },
    ],

    compliance:
      "The UAE’s national sustainability initiatives and Net-Zero 2050 targets are actively driving the adoption of clean, low-emission transport technologies across all major industries. Government regulations, green mobility frameworks, and incentive programs encourage businesses to shift toward electric vehicles, renewable energy integration, and alternative fuels. These initiatives support reduced carbon emissions, improved energy efficiency, and long-term environmental responsibility while ensuring alignment with national climate commitments and global sustainability standards.",

    takeaway:
      "Eco-friendly transport is no longer an optional upgrade — it is the foundation of future-ready business operations. Organizations that embrace sustainable mobility solutions today gain a competitive advantage through reduced emissions, optimized operating costs, and improved regulatory compliance. By adapting early to green transport technologies, businesses position themselves as industry leaders, contribute to environmental preservation, and play an active role in shaping a cleaner, more sustainable economic future.",
  },
];
