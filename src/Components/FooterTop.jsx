/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../assets/Images/LogoWhite.png'
const FooterTop = () => {
  return (
    <div>
        <div className='w-[88.8vw] h-[138px] flex justify-between  items-center '>
                 <div className='w-[452px] h-full flex flex-col justify-between  '>
                               <div className='w-[129px] h-[69px]  flex items-start justify-start m'>
                                  <img src={Logo} className='w-[100px] h-[70px] object-cover' alt="" />
                               </div>
                               <h6 className='text-[18px] font-roboto text-[#FFFFFF] opacity-80'><span className='text-[#27AFE8] font-bold'>Alexa IT Solution</span> offers expert web development, <br />
                               e-commerce, digital marketing, graphic design, and more</h6>
                 </div>
                 <div className='w-[508px] h-[107px] flex gap-28  '>
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