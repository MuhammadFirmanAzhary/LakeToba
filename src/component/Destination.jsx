import React from 'react'
import A1 from '../assets/a1.jpg'
import A2 from '../assets/a2.jpg'
import A3 from '../assets/bg.jpg'
import A4 from '../assets/a4.jpg'
import A5 from '../assets/a5.jpg'


export const Destination = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1 className='text-3xl md:text-4xl font-bold'>All-Inclusive Resorts</h1>
            <p>On the Lake-Toba The Best Lake In the World </p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={A3} alt="" />
                <img className='w-full h-full object-cover' src={A1} alt="" />
                <img className='w-full h-full object-cover' src={A2} alt="" />
                <img className='w-full h-full object-cover' src={A4} alt="" />
                <img className='w-full h-full object-cover' src={A5} alt="" />
            </div>
        </div>
    )
}
