import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px]  flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1 className='text-3xl md:text-4xl font-bold'>LAKETOBA.</h1>
                    <div className='icon text-2xl cursor-pointer text-primaryDark flex justify-end  w-full sm:max-w[280px] my-4'>
                        <FaFacebook className='mr-32'/>
                        <FaYoutube  className='mr-32'/>
                        <FaInstagram  className='mr-32'/>
                        <FaTwitter  className='mr-32'/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Advertising</li>
                        <li>Newsroom</li>
                    </ul>
                    <ul className='text-right lg:flex'>
                        <li >Home</li>
                        <li >Destination</li>
                        <li >View</li>
                        <li >Travel</li>
                        <li >Book</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer