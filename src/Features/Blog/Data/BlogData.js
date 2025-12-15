import Blog from "../../../assets/Images/Blog.jpg";
import Trans from "../../../assets/Images/BlogDelivery.jpg";

import Eco from "../../../assets/Images/Eco.jpg";
import Delivery from "../../../assets/Images/Delivery .jpg";
import FuelTest from "../../../assets/Images/FuelTest.jpg";
import Lab from "../../../assets/Images/Laboratary.jpg";

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
      heading: "— Introduction",
      text: `Bulk Fuel Delivery Plays A Crucial Role In Keeping UAE Businesses Running Smoothly.
From Construction Sites To Logistics Fleets, Companies Rely On Timely And Safe Fuel Supply
To Maintain Operations Without Interruption. This Article Breaks Down The Entire Process
From Order Placement To Final On-Site Delivery.`,
    },

    steps: [
      {
        num: 1,
        title: "Fuel Order & Requirement Analysis",
        desc:
          "The Process Begins When A Business Places A Fuel Request Specifying Quantity, Fuel Type, And Delivery Time.",
      },
      {
        num: 2,
        title: "Quality Testing & Certification",
        desc:
          "Before Dispatch, Fuel Undergoes Laboratory Testing To Ensure It Meets UAE Safety Standards.",
      },
      {
        num: 3,
        title: "Secure Loading at the Depot",
        desc:
          "Fuel Is Loaded Using Controlled Pumps And Safety Protocols To Prevent Spills Or Contamination.",
      },
      {
        num: 4,
        title: "Transportation & GPS Monitoring",
        desc:
          "Licensed Tankers Are GPS-Tracked To Ensure Safe And Timely Delivery.",
      },
      {
        num: 5,
        title: "On-Site Delivery to the Customer",
        desc:
          "Fuel Is Safely Dispensed Into Storage Tanks Or Fleet Vehicles On Arrival.",
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
      "Construction & Infrastructure Projects",
      "Logistics & Transportation Fleets",
      "Industrial Manufacturing",
      "Marine Operations",
      "Government & Municipal Services",
    ],

    compliance:
      "Bulk Fuel Operations In The UAE Follow Strict Safety And Environmental Regulations Including Licensed Tankers, Certified Drivers, And Regular Inspections.",

    takeaway:
      "Bulk Fuel Delivery Is A Reliable, Safe, And Efficient Fuel Supply Solution That Supports The UAE’s Growing Industrial And Commercial Sectors.",
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
    heroImage: FuelTest,

    intro: {
      heading: "— Introduction",
      text: `Fuel Quality Testing Is Essential To Ensure Efficient Performance, Safety, And Longevity
Of Engines And Equipment. Poor Fuel Quality Can Cause Serious Mechanical Failures, Increased
Maintenance Costs, And Unexpected Downtime.`,
    },

    steps: [
      {
        num: 1,
        title: "Detection of Contaminants",
        desc:
          "Testing Identifies Water, Sediments, And Microbial Contamination That Can Damage Equipment.",
      },
      {
        num: 2,
        title: "Regulatory Compliance",
        desc:
          "Fuel Testing Ensures Compliance With National And International Quality Standards.",
      },
      {
        num: 3,
        title: "Optimized Engine Performance",
        desc:
          "Certified Fuel Improves Combustion Efficiency And Reduces Emissions.",
      },
      {
        num: 4,
        title: "Reduced Maintenance Costs",
        desc:
          "Early Detection Prevents Expensive Repairs And Operational Disruptions.",
      },
      {
        num: 5,
        title: "Extended Equipment Lifespan",
        desc:
          "Clean Fuel Reduces Wear And Tear On Engines And Storage Systems.",
      },
    ],

    advantages: [
      "Protects Engines And Equipment",
      "Ensures Compliance And Safety",
      "Reduces Operational Risks",
      "Improves Fuel Efficiency",
      "Extends Asset Life",
    ],

    deliveryImage: FuelTest,

    industries: [
      "Transportation & Logistics",
      "Power Generation",
      "Manufacturing Plants",
      "Marine Operations",
      "Construction Fleets",
    ],

    compliance:
      "Fuel Quality Testing In The UAE Is Conducted Through Certified Laboratories Following Strict Industry And Environmental Guidelines.",

    takeaway:
      "Consistent Fuel Quality Testing Safeguards Operations, Minimizes Risk, And Ensures Long-Term Reliability.",
  },

  /* ======================= BLOG 3 ======================= */
  {
    id: 3,

    card: {
      image: Eco, // ✅ second image from your screenshot
      category: "Sustainability",
      date: "Feb 2025",
      title: "The Future Of Eco-Friendly Transport",
    },

    author: "Hazzaz Zaid",
    readTime: "4 min read",
    heroImage: Eco,

    intro: {
      heading: "— Introduction",
      text: `Eco-Friendly Transport Is Transforming The Global Logistics And Mobility Landscape.
With Growing Environmental Concerns And Regulatory Pressures, Businesses Are Shifting Toward
Cleaner Energy Solutions To Reduce Emissions And Carbon Footprints.`,
    },

    steps: [
      {
        num: 1,
        title: "Shift Toward Renewable Energy",
        desc:
          "Solar, Wind, And Hydrogen Energy Are Being Integrated Into Transportation Infrastructure.",
      },
      {
        num: 2,
        title: "Adoption of Electric & Hybrid Vehicles",
        desc:
          "Fleet Operators Are Transitioning To Electric And Hybrid Vehicles To Reduce Fuel Consumption.",
      },
      {
        num: 3,
        title: "Smarter Logistics Planning",
        desc:
          "AI And GPS-Based Route Optimization Minimizes Fuel Usage And Emissions.",
      },
      {
        num: 4,
        title: "Government Incentives & Policies",
        desc:
          "Regulatory Support Encourages Adoption Of Sustainable Transport Solutions.",
      },
      {
        num: 5,
        title: "Sustainable Fuel Alternatives",
        desc:
          "Biofuels And Synthetic Fuels Offer Cleaner Alternatives To Traditional Fossil Fuels.",
      },
    ],

    advantages: [
      "Reduces Carbon Emissions",
      "Lowers Long-Term Operating Costs",
      "Improves Corporate Sustainability Goals",
      "Enhances Environmental Compliance",
      "Supports Green Innovation",
    ],

    deliveryImage: Eco,

    industries: [
      "Logistics & Transportation",
      "Public Transportation",
      "Marine & Aviation",
      "Urban Infrastructure",
      "Government & Municipal Services",
    ],

    compliance:
      "The UAE’s Sustainability Initiatives And Net-Zero Targets Encourage Adoption Of Clean Transport Technologies Across Industries.",

    takeaway:
      "Eco-Friendly Transport Is No Longer A Choice — It Is The Future. Businesses That Adapt Early Will Lead The Transition Toward Sustainable Growth.",
  },
];
