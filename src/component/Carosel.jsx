import React, { useState } from 'react'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { BsArrowRightSquareFill } from 'react-icons/bs'
const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1465145782865-09532f760e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGJsdXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1518984720889-45999dcda13f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFrZSUyMGJsdXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        url: "https://images.unsplash.com/photo-1598062568618-29c189c7f303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkYW58ZW58MHx8MHx8fDA%3D"
    },
];

const Carosel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length
    const pevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={pevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8' />
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
            {sliderData.map((item, index) => (
                <div className={index === slide ? 'opacity-100 w-full' : 'opacity-0'}>
                    {index === slide &&    <img className=' w-full rounded-md  ' src={item.url} alt="/" />}
                    
                </div>
                
            ))}
        </div>
    )
}

export default Carosel