/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-scroll'
const HeroText = () => {
  return (
    <div className='lg:w-[786px] slg:w-[786px] md:w-[740px] lmd:w-[786px] xsm:w-[450px] w-[300px] sm:w-[600px]  sxl:w-[786px] xl:w-[786px] h-[200px] xsm:h-[250px] sm:h-[280px] md:h-[386px] lmd:h-[386px] xl:h-[386px] slg:h-[386px] lg:h-[386px] mt-28  flex flex-col justify-between items-center slg:bg-blue-300 lg:bg-green-300 lmd:bg-slate-300 sm:bg-purple-300 md:bg-red-300 '>
                <div className='text-center'>
                <h2 className='lmd:text-[70px] text-[25px] xsm:text-[40px]  sm:text-[50px] md:text-[60px] slg:text-[74px]  lg:text-[74px] xl:text-[74px] font-anton  text-white'>Turning Ideas into Reality <br /> with 
                <span className='text-[#27AFE8]'> Alexa IT Solution</span></h2>
                </div>
                <div className='text-center text-[#FFFFFF] font-roboto flex justify-center'>
                <p className='w-1/2 xsm:w-1/2 sm:w-full md:w-full lmd:w-full xl:w-full text-[12px] xsm:text-[15px] sm:text-[18px] md:text-[22px] lmd:text-[22px] slg:text-[24px] lg:text-[24px] xl:text-[24px]'>Supercharge Your Business in the Digital Age with Our Expert Touch</p>
                </div>
                <Link to='work' className='h-[35px] flex items-center justify-center cursor-pointer w-[180px] xsm:h-[45px] xsm:w-[210px] sm:h-[45px] sm:w-[210px] md:w-[220px] md:h-[50px] lmd:h-[55px] lmd:w-[240px] slg:h-[55px] slg:w-[240px] lg:w-[302px] lg:h-[72px] xl:w-[302px] lg: xl:h-[72px] text-[20px] xsm:text-[22px] sm:text-[22px] md:text-[25px] lmd:text-[25px] slg:text-[28px] xl:text-[28px] lg:text-[28px] font-roboto  rounded-[49px] font-bold bg-[#27AFE8] text-white  hover:bg-transparent hover:border-[1px]
                hover:border-[#27AFE8] transition-all duration-200
                '>Show Projects</Link>
            </div>
  )
}

export default HeroText