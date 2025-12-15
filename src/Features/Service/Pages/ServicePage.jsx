import React from 'react'
import Hero from '../../Home/Components/Hero'
import FuelServicesHero from '../Components/Hero'
import StatsAndOffer from '../../Home/Components/OfferSection'
import Offersection from '../Components/Offersection'
import FullServiceSections from '../Components/Imagesectio'
import Whywe from '../Components/Whywe'
import IndustriesWeServe from '../Components/WeServing'
import FuelSupplyCTA from '../../Home/Components/Banner'

export default function ServicePage() {
  return (
    <div>
      <FuelServicesHero />
      <Offersection />
      <FullServiceSections />
      <Whywe />
      <IndustriesWeServe />
      <FuelSupplyCTA />
      
    </div>
  )
}
