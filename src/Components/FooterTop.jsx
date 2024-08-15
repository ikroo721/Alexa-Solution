/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Images/LogoWhite.png'
const FooterTop = () => {
  return (
    <div>
        <div className='w-[88.8vw] xsm:w-[88.8vw] sm:w-[88.8vw] lmd:w-[88.8vw] md:w-[88.8vw] sxl:w-[88.8vw] slg:w-[85.8vw]  lg:w-[88.8vw] xl:w-[88.8vw] 
        min-h-[138px] flex justify-between  flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap lmd:flex-nowrap sxl:flex-nowrap slg:flex-nowrap  items-center '>
                 <div className='xl:w-[452px] lg:w-[452px] slg:w-[452px] md:w-[452px] 
                 lmd:w-[452px] h-full flex xl:flex-col sxl:flex-col lg:flex-col slg:flex-col lmd:flex-col md:flex-col flex-row  justify-between  '>
                               <div className='min-w-[129px] h-[69px]  flex items-start justify-start m'>
                                  <img src={Logo} className='w-[100px] h-[70px] object-cover' alt="" />
                               </div>
                               <h6 className='text-[18px] font-roboto text-[#FFFFFF] opacity-80'><span className='text-[#27AFE8] font-bold'>Alexa IT Solution</span> offers expert web development, <br />
                               e-commerce, digital marketing, graphic design, and more</h6>
                 </div>
                 <div className='sxl:w-[508px] lg:w-[508px] slg:w-[508px] lmd:w-[508px] md:w-[508px] w-full justify-center xl:justify-start lg:justify-start slg:justify-start lmd:justify-start md:justify-start sxl:justify-start xl:w-[508px] h-[107px] flex gap-28  '>
                           <ul className='font-roboto text-[18px]  text-[#FFFFFF] opacity-80'>
                            <li className='text-[20px] font-bold text-[#27AFE8]'>Quick Link</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                           </ul>
                           <ul className='font-roboto text-[18px]  text-[#FFFFFF] opacity-80'>
                            <li className='text-[20px] font-bold text-[#27AFE8]'>Company</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                           </ul>
                 </div>
        </div>
    </div>
  )
}

export default FooterTop