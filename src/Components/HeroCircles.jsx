/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Circle1 from '../assets/Images/Ellipse 4 (1).png'
import Circle2 from '../assets/Images/Ellipse 5 (1).png'
import Circle3 from '../assets/Images/Ellipse 6.png'
import Circle4 from '../assets/Images/Ellipse 7.png'
import Circle5 from '../assets/Images/Ellipse 8 (1).png'

const HeroCircles = () => {
    const CircleData=[Circle1,Circle2,Circle3,Circle4,Circle5]
    const [count, setCount] = useState(0); // Initial count set to 0
    const maxCount = 1500;
    useEffect(() => {
      // This effect updates the counter every 1 millisecond
      const intervalId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount < maxCount) {
            return prevCount + 3;
          } else {
            clearInterval(intervalId); // Stop the counter when reaching maxCount
            return prevCount;
          }
        });
      }, 1); // Update every 1 millisecond
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <div className='h-[49px] w-[302px] flex items-center justify-between  gap-3'>
<div className='flex  '>
{CircleData.map((e,i)=>(
    <div key={i} className={`h-[49px] rounded-full w-[49px] ${!i==0 && "-ml-[19px]"}`}>
    <img src={e} className='h-full w-full object-cover' alt="" />
    </div>
))}
</div>
<div className='w-[126px] h-[42px] flex items-center justify-center'>
    <p className='text-[18px] text-nowrap font-roboto text-white' ><span className='font-bold' >{count}+ <br /></span> 
    satisfied Clients</p>
</div>
            </div>
  )
}

export default HeroCircles