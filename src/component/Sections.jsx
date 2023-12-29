import React from 'react'

import A1 from '../assets/a1.jpg'
import A2 from '../assets/a2.jpg'
import A3 from '../assets/bg.jpg'
import A4 from '../assets/a4.jpg'
import A5 from '../assets/a5.jpg'
import SelectCard from './SelectCard'



const Sections = () => {
  return (
    <div className=' max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectCard bg={A1} text='Lake-Toba'/>
      <SelectCard bg={A2} text='Lake-Toba'/>
      <SelectCard bg={A3} text='Lake-Toba'/>
      <SelectCard bg={A5} text='Lake-Toba'/>
      <SelectCard bg={A1} text='Lake-Toba'/>
      <SelectCard bg={A4} text='Lake-Toba'/>
    </div>
  )
}

export default Sections