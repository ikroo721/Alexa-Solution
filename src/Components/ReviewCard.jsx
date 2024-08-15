/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Star from '../assets/Images/ph_star-fill.png'
import Comma from '../assets/Images/comma.png'
import Comma2 from "../assets/Images/Comma2.png"
import { motion } from 'framer-motion'
const ReviewCard = ({bg,text,circle,rotate,index,Animate}) => {
  const [First, setfirst] = useState("")
useEffect(() => {
  Animate == "Normal" ? setfirst("0deg") : setfirst(rotate)

}, [Animate, rotate])
  return (
    <div
    style={{backgroundColor:bg ,color:text,'--rotation': `${First}`}} className={`transition-all duration-700 ease-in-out h-[330px] w-[330px] sm:h-[450px] sm:w-[450px]  xsm:h-[430px] xsm:w-[430px] lmd:h-[450px] lmd:w-[450px] md:h-[450px] md:w-[450px] slg:h-[280px] slg:w-[230px] lg:h-[300px] lg:w-[300px] sxl:h-[400px] sxl:w-[400px] xl:h-[430px] xl:w-[430px]  
       ${index == 1 && "sxl:-ml-5 lg:-ml-5 slg:-ml-5  xl:-ml-5"} ${index == 2 && "xl:-ml-1 sxl:-ml-1 lg:-ml-1 slg:-ml-1"}  
    flex items-center justify-center rounded-[25px] lg:rounded-[25px] md:rounded-[25px] sm:rounded-[25px] lmd:rounded-[25px] xl:rounded-[25px] sxl:rounded-[25px] xsm:rounded-[25px] slg:rounded-[20px] rotate-0 sm:rotate-0 xsm:rotate-0 md:rotate-0 lmd:rotate-0 
    lg:rotate-[var(--rotation)] slg:rotate-[var(--rotation)] xl:rotate-[var(--rotation)] sxl:rotate-[var(--rotation)]`}>
            <div className='flex flex-col justify-center items-center  xl:justify-end xl:items-end'>
            <div className='sm:w-[430px] sm:h-[350px] w-[300px] xsm:w-[400px] xsm:h-[350px]  lmd:w-[430px] lmd:h-[350px] md:w-[430px] md:h-[350px] xl:w-[380px] slg:w-[200px] slg:h-[240px] lg:w-[270px] lg:h-[250px] sxl:w-[340px] sxl:h-[300px] xl:h-[327px] '>
                <div className='w-full sm:h-[320px] xsm:h-[320px] md:h-[350px] lmd:h-[350px] lg:h-[250px] slg:h-[230px] xl:h-[327px] flex flex-col gap-2'>
                       <div className='w-full xsm:h-[320px] sm:h-[320px] lmd:h-[320px] md:h-[320px]  slg:h-[240px] xl:h-[275px] xl:gap-0 gap-3 flex flex-col justify-between'>
                             <div className='h-[65px] flex gap-[16px] '>
                              <div style={{backgroundColor:circle}} className={`h-[65px] w-[65px] rounded-full flex items-center justify-center`}>
                                <h3 className='text-[26px] font-roboto font-semibold text-white'>MS</h3>
                              </div>
                              <div className={`h-[43px] flex flex-col gap-[6px]`}>
                                 <h4 className='text-[18px] font-roboto font-semibold'>Melissa Steward</h4>
                                 <h5 className='text-[14px] font-roboto'>VP of Marketing</h5>
                              </div>
                             </div>
                             <div className=' xl:h-[184px] '>
                                <div className=' '>
                                      <img src={index ===1 ? Comma :Comma2 } alt="" />
                                </div>
                                  <h5 className='sm:text-[22px] xsm:text-[22px] lmd:text-[22px] md:text-[22px] slg:text-[11px] lg:text-[14px] xl:text-[20px] font-roboto'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Nulla orci arcu, vehicula et 
condimentum ac, porta eget mi. Curabitur 
pellentesque metus. Curabitur vel pellente 
metus. Curabitur vel pellentesque metus. </h5>
                             </div>
                       </div>
                       <div>
                        <div className=' flex justify-center'>
                           <div className='flex'>
                           <div className='w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                           </div>
                        </div>
                       </div>
                </div> 
             </div>
            <div className='w-[380px] flex justify-center xl:justify-end'>
            <h6 className=' text-[14px] font-roboto'>New York</h6>
            </div>
            </div>
    </div>
  )
}

export default ReviewCard