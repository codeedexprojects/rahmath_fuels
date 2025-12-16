import React from 'react'
import FuelSupplyHero from '../Components/FuelSupplyHero'
import FuelTypes from '../Components/FuelTypes'
import FuelDeliveryProcess from '../../Home/Components/Delivery'

export default function FuelSupply() {
  return (
    <div>
        <FuelSupplyHero />
        <FuelTypes />
        <FuelDeliveryProcess />
      
    </div>
  )
}
