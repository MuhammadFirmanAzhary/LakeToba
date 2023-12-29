import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,}from 'react-icons/fa'

const Navbar = () => {
    const[nav,setNav] = useState(false)
    const [logo,setLogo]= useState(false)
    const handleNav = () => {
         setNav(!nav)
         setLogo(!logo)
    }
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 z-10  absolute text-white'>
            <div>
                <h1 onClick={handleNav} className={logo ?'hidden' :'block text-3xl md:text-4xl font-bold'}>LAKETOBA.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li >Home</li>
                <li >Destination</li>
                <li >View</li>
                <li >Travel</li>
                <li >Book</li>
            </ul>
          
            <div className='hidden md:flex'>
                <BiSearch/>
                <BsPerson />
            </div> 
            
   
             {/* Humberger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
            </div>
                     {/* Mobile menu dropdown */}
            <div onClick={handleNav} className= {nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' :'absolute left-[-100%] '}>
                <ul>
                <h1 className='text-3xl md:text-4xl font-bold'>LAKETOBA.</h1>
                <li className='text-xl border-b'>Home</li>
                <li className='text-xl border-b'>Destination</li>
                <li className='text-xl border-b'>View</li>
                <li className='text-xl border-b'>Travel</li>
                <li className='text-xl border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md text-white my-6'>Search</button>
                    <button  className='p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md text-white'>Account</button>
                </div>
                <div className='icon text-2xl cursor-pointer text-primaryDark flex justify-between my-6'>
                <FaFacebook />
                <FaYoutube />
                <FaInstagram />
                <FaTwitter/>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar