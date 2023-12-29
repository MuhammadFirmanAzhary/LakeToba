import React from 'react'
import tobaVid from '../assets/toba.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={tobaVid} autoPlay loop muted></video>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                    <h1 className='text-3xl md:text-4xl font-bold'>First Class Travel</h1>
                    <h2 className='text-3xl font-bold'>Top 1% Locations Worldwide</h2>
                    <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border rounded-md bg-gray-100/90 text-black p-1 mt-5' >
                        <div>
                            <label htmlFor="input">
                            <input className='bg-transparent w-[300px] sm:w[400px] focus:outline-none' type="text"  id='input' placeholder='Search Destinations'/>
                            </label>
                            
                        </div>
                        <div>
                            <button className='p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md '><AiOutlineSearch size={20} className='icon text-2xl cursor-pointer text-white flex justify-between'/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero