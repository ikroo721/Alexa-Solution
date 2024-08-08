/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import BG from '../assets/Images/pikaso_embed 1.png'
import HeroCenterText from './HeroCenterText'
import BgSphere from './BgSphere'
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${BG})` }}
     className={`h-screen w-full  bg-[#262626]   relative`} >
    <div className='px-12 pt-3 z-0 '>
             <Navbar/>
    </div>
        <HeroCenterText/>
        <BgSphere/>
    </div>
  )
}

export default Hero