import React from 'react'
import Carousal1 from '../Carousel1'
import Navbar from '../Navbar'
import Action from './Action'
import Cardenergy from './Cardenergy'
import "./Clean.css"
import Offer from './Offer'

const Clean = () => {
  return (
    <>
      <Navbar/>
      <Carousal1/>
      <Cardenergy/>
      <Offer/>
      <Action/>
    </>
  )
}

export default Clean
