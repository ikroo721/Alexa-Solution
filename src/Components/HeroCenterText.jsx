/* eslint-disable no-unused-vars */
import React from 'react'
import HeroCircles from './HeroCircles'
import HeroText from './HeroText'

const HeroCenterText = () => {

  return (
    <div  className={`w-full h-[80%]  flex items-center justify-center !z-[99]`}>
           <div className='flex flex-col items-center gap-[30px] z-[2]'>
            <HeroText/>
            <HeroCircles/>
           </div>
        </div>
  )
}

export default HeroCenterText