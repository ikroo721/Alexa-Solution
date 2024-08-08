/* eslint-disable no-unused-vars */
import React from 'react'

const HeroText = () => {
  return (
    <div className='w-[786px] h-[386px] mt-28  flex flex-col justify-between items-center'>
                <div className='text-center'>
                <h2 className='text-[74px] font-anton text-white'>Turning Ideas into Reality 
                with <span className='text-[#27AFE8]'>Alexa IT Solution</span></h2>
                </div>
                <div className='text-center text-[#FFFFFF] font-roboto'>
                <p className='text-[24px]'>Supercharge Your Business in the Digital Age with Our Expert Touch</p>
                </div>
                <button className='w-[302px] h-[72px] text-[28px] font-roboto  rounded-[49px] font-bold bg-[#27AFE8] text-white  hover:bg-transparent hover:border-[1px]
                hover:border-[#27AFE8] transition-all duration-200
                '>Show Projects</button>
            </div>
  )
}

export default HeroText