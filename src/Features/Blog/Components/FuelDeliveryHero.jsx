import React from 'react';
import Blog from "../../../assets/Images/Blog.jpg"

export default function BulkFuelArticle() {
  return (
    <div className="px-10 mx-auto  py-8 bg-white">
      {/* Article Header */}
      <h1 className="text-[56px] md:text-5xl font-bold text-gray-900 mb-4 text-center">
        How Bulk Fuel Delivery Works In The UAE
      </h1>
      
      {/* Article Meta */}
      <div className="text-center text-gray-600 text-[28px] mb-8">
        <span>By Hazzaz Zaid | Published - Feb 2025 | 5 min read</span>
      </div>
      
      {/* Featured Image */}
     <div className="mb-8">
  <img 
    src={Blog} 
    alt="Fuel tanker truck on highway"
    className="
      w-full 
      h-48 sm:h-64 md:h-80 lg:h-96 
      object-cover 
      rounded-xl 
      shadow-lg
    "
  />
</div>

      
      {/* Introduction Section */}
     <div className="mb-8 text-center px-10 mx-auto">
  
  {/* Title */}
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    — Introduction
  </h2>

  {/* Paragraph */}
  <p className="text-gray-700 text-[23px]  text-center">
    Bulk Fuel Delivery Plays A Crucial Role In Keeping UAE Businesses Running Smoothly. 
    From Construction Sites To Logistics Fleets, Companies Rely On Timely And Safe Fuel 
    Supply To Maintain Operations Without Interruption. This Article Breaks Down How The 
    Entire Process Works — From Order Placement To Final On-Site Delivery.
  </p>

</div>

      

    </div>
  );
}