import React from 'react'
import AboutCompanySection from '../Components/AboutHero'
import AboutText from '../Components/AboutText'
import ImpactNumbers from '../../Home/Components/ImpactNumbers'
import TestimonialQuote from '../Components/Manager'
import TestimonialSection from '../Components/Manager'
import ClientTestimonials from '../../Home/Components/Testimonial'

export default function AboutPage() {
  return (
    <div>
        <AboutCompanySection />
        <AboutText />
        <ImpactNumbers />
        <TestimonialSection />
        <ClientTestimonials />
      
    </div>
  )
}
