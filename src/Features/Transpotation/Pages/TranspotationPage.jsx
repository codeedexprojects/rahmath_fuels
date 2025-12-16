import React from 'react'
import TransportHero from '../Components/TransportHero'
import TransportationFocus from '../Components/TranspotationFocus'
import FuelDeliveryProcess from '../../Home/Components/Delivery'
import TransportationApproach from '../Components/TranspotationApproach'

export default function Transpotation() {
  return (
    <div>
        <TransportHero />
        <TransportationFocus />
        <TransportationApproach />
        <FuelDeliveryProcess />
      
    </div>
  )
}
