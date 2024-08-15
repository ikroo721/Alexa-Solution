/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import BgRect from '../assets/Images/Rectangle 6.png'
import { easeInOut, motion } from 'framer-motion'
const WorkCard = ({img,contentHeight,contentWidth,padding,innerHead,innerText}) => {
const [Hover, setHover] = useState(false)
const HandleEnter=()=>{
    setHover(true)
}
const HandleLeave=()=>{
    setHover(false)
}
  return (
    <motion.div
    
    initial={{scale:0,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    transition={{duration:.5, ease:'linear'}}
    onMouseEnter={HandleEnter} onMouseLeave={HandleLeave} style={{
               background:`url(${img})`,
               backgroundSize:"cover",backgroundPosition:"center"}}
 className={`rounded-[20px] h-full w-full  overflow-hidden `}>
   {
    Hover &&  <div 
    style={{
    padding:padding,
    background:`url(${BgRect})`,
    backgroundSize:"cover",backgroundPosition:"center"}}
    className={`h-full w-full  bg-[url('${BgRect}')] flex items-end`}>
<div style={{
     height:contentHeight,
     width:contentWidth,
}} className={`flex flex-col justify-between text-white`}>
<h3 className='text-[32px] font-bold  font-roboto'>{innerHead}</h3>
<p className='text-[18px] font-roboto'>{innerText}</p>
</div>
</div> 
   }

</motion.div>
  )
}

export default WorkCard