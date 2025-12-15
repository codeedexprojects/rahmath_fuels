import React from 'react'
import Header from '../../../Components/Header'
import Hero from '../Components/Hero'
import OfferSection from '../Components/OfferSection'
import WhatWeOffer from '../Components/OfferSection'
import StatsAndOffer from '../Components/OfferSection'
import WhoWeAre from '../Components/WhoweAre'
import FuelDeliveryProcess from '../Components/Delivery'
import VideoCarousel from '../Components/Videosection'
import FuelSupplyCTA from '../Components/Banner'
import ImpactNumbers from '../Components/ImpactNumbers'
import ClientTestimonials from '../Components/Testimonial'
import InsightsSection from '../Components/Insights'
import QuickInquiry from '../Components/Enquiry'

export default function HomePage() {
  return (
    <div>
        <Hero/>
        <StatsAndOffer/>
        <WhoWeAre/>
        <FuelDeliveryProcess />
        <VideoCarousel />
        <FuelSupplyCTA />
        <ImpactNumbers />
        <ClientTestimonials />
        <InsightsSection />
        <QuickInquiry />
        
    
    </div>
  )
}
