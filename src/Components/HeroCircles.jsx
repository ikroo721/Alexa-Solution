/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Circle1 from '../assets/Images/Ellipse 4 (1).png'
import Circle2 from '../assets/Images/Ellipse 5 (1).png'
import Circle3 from '../assets/Images/Ellipse 6.png'
import Circle4 from '../assets/Images/Ellipse 7.png'
import Circle5 from '../assets/Images/Ellipse 8 (1).png'

const HeroCircles = () => {
    const CircleData=[Circle1,Circle2,Circle3,Circle4,Circle5]
    const [count, setCount] = useState(0); 
    const maxCount = 1500;
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < maxCount) {
            return prevCount + 3;
          } else {
            clearInterval(intervalId);
            return prevCount;
          }
        });
      }, 1); 
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <div className='h-[49px] w-[250px] slg:w-[302px] lg:w-[302px] xlg:w-[302px] flex items-center justify-between flex-col xsm:flex-col sm:flex-col slg:flex-row lmd:flex-row md:flex-row lg:flex-row xl:flex-row  gap-3'>
<div className='flex  '>
{CircleData.map((e,i)=>(
    <div key={i} className={`md:-[45px] lmd:-[49px] lg:-[49px] xlg:h-[49px] rounded-full md:-[45px] lmd:-[49px] lg:-[49px] xlg:w-[49px] ${!i==0 && "-ml-[19px]"}`}>
    <img src={e} className='h-full w-full object-cover' alt="" />
    </div>
))}
</div>
<div className='w-[126px] h-[42px] flex  relative justify-center xl:flex-col sm:flex-row sm:gap-2 slg:flex-col lmd:flex-col lg:gap-0 slg:gap-0 md:gap-0 lmd:gap-0 md:flex-col  lg:flex-col  font-roboto text-white'>
    <p className='text-[18px] text-nowrap ' >
    <span className='font-bold' >{count}+ </span> 
</p>
<p className='text-[18px] text-nowrap   ' >
    satisfied Clients
</p>
</div>
            </div>
  )
}

export default HeroCircles