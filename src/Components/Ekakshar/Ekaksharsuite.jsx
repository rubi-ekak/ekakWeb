import React from 'react'
import Action from '../Cleanenergy/Action'
import Ekaksharmain from './Ekaksharmain'
import Suiteoffer from './Suiteoffer'

const Ekaksharsuite = ({data}) => {
  return (
    <div>
      <Ekaksharmain/>
      <Suiteoffer data={data}/>
      <Action/>
    </div>
  )
}

export default Ekaksharsuite
