import React from 'react'
import Action from '../Cleanenergy/Action'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Carousel2 from './Carousel2'
import Cleanmobility from './Cleanmobility'
import "./Mobility.css"
import RoadSafer from './RoadSafer'

const Mobility = () => {
  return (
    <div>
      <Navbar/>
      <Carousel2/>
      <RoadSafer/>
      <Cleanmobility/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default Mobility
