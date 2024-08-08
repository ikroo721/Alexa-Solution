/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Star from '../assets/Images/ph_star-fill.png'
import Comma from '../assets/Images/comma.png'
import Comma2 from "../assets/Images/Comma2.png"
const ReviewCard = ({bg,text,circle,rotate,index}) => {
  return (
    <div style={{backgroundColor:bg,rotate:rotate,color:text}} className={`h-[430px] w-[430px]  rouned-[25px] ${index == 1 && "-ml-5"} ${index == 2 && "-ml-1"}  
    flex items-center justify-center rounded-[25px] `}>
            <div className='flex flex-col justify-end items-end'>
            <div className='w-[380px] h-[327px]  '>
                <div className='w-full h-[327px] flex flex-col gap-2'>
                       <div className='w-full h-[275px]  flex flex-col justify-between'>
                             <div className='h-[65px] flex gap-[16px] '>
                              <div style={{backgroundColor:circle}} className={`h-[65px] w-[65px] rounded-full flex items-center justify-center`}>
                                <h3 className='text-[26px] font-roboto font-semibold text-white'>MS</h3>
                              </div>
                              <div className={`h-[43px] flex flex-col gap-[6px]`}>
                                 <h4 className='text-[18px] font-roboto font-semibold'>Melissa Steward</h4>
                                 <h5 className='text-[14px] font-roboto'>VP of Marketing</h5>
                              </div>
                             </div>
                             <div className='h-[184px] '>
                                <div className=' '>
                                      <img src={index ===1 ? Comma :Comma2 } alt="" />
                                </div>
                                  <h5 className='text-[20px] font-roboto'>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Nulla orci arcu, vehicula et 
condimentum ac, porta eget mi. Curabitur 
pellentesque metus. Curabitur vel pellente 
metus. Curabitur vel pellentesque metus. </h5>
                             </div>
                       </div>
                       <div>
                        <div className=' flex justify-center'>
                           <div className='flex'>
                           <div className='w-[24px] h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[24px] h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[24px] h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[24px] h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                            <div className='w-[24px] h-[24px] '>
                             <img src={Star} alt="star" />
                            </div>
                           </div>
                        </div>
                       </div>
                </div> 
             </div>
            <div className='w-[380px] flex justify-end'>
            <h6 className=' text-[14px] font-roboto'>New York</h6>
            </div>
            </div>
    </div>
  )
}

export default ReviewCard