import React from 'react'
import About from './About'
import Partener from '../Ekakshar/Partener'
import Achievment from './Achievment'
import Carousal from './Carousal'
import Impact from './Impact'
import Innovation from './Innovation'
import Solution from './Solution'
import Success from './Success'
import Sustability from './Sustability'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div>
     
      <Carousal/>
      <About/>
      <Success/>
      <Solution/>
      <Sustability/>
      <Innovation/>
      <Impact/>
      <Achievment/>
      <Partener/>
     
    </div>
  )
}

export default Home
