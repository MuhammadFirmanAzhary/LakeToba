import React, { useState } from 'react'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { BsArrowRightSquareFill } from 'react-icons/bs'
const sliderData = [
    {
        url: "https://media.istockphoto.com/id/1491756541/photo/tropical-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=0vENGA83uu8VBHUKAPCfL3Oj7gEB5lBOQP3GPn7bImY="
    },
    {
        url: "https://media.istockphoto.com/id/1884865414/photo/sunlight-reflected-on-water-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nr1Vg1GpWgPKKx_ifDVzILJDwnK1Sc2cBPFBcdoRuZk="
    },
    {
        url: "https://media.istockphoto.com/id/1771970810/photo/lake-motosu-and-mt-fuji-sunrise-glow.webp?a=1&b=1&s=612x612&w=0&k=20&c=1wi7-Z-I6LME-9lVFPDEBtJu2fETZr2Y292b2NKuo4Q="
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