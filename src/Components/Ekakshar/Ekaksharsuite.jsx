import React from 'react'
import Action from '../Ekakmain/Action'
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
