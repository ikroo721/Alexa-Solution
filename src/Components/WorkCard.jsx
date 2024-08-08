/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import BgRect from '../assets/Images/Rectangle 6.png'
const WorkCard = ({img,height,width,contentHeight,contentWidth,padding}) => {
const [Hover, setHover] = useState(false)
const HandleEnter=()=>{
    setHover(true)
}
const HandleLeave=()=>{
    setHover(false)
}
  return (
    <div onMouseEnter={HandleEnter} onMouseLeave={HandleLeave} style={{
               height:height,
               width:width,
               background:`url(${img})`,
               backgroundSize:"cover",backgroundPosition:"center"}}
 className={`rounded-[20px] overflow-hidden`}>
   {
    Hover &&  <div 
    style={{
    padding:padding,
    background:`url(${BgRect})`,
    backgroundSize:"cover",backgroundPosition:"center"}}
    className={`h-full w-full bg-[url('${BgRect}')] flex items-end`}>
<div style={{
     height:contentHeight,
     width:contentWidth,
}} className={`flex flex-col justify-between text-white`}>
<h3 className='text-[32px] font-bold  font-roboto'>Kota</h3>
<p className='text-[18px] font-roboto'>Instant access to insurance and retirement providers, 
with flexible contributions, automated accounting and a 
delightfully simple employee app.</p>
</div>
</div> 
   }

</div>
  )
}

export default WorkCard