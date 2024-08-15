/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import React, { memo, useState } from 'react'
import ReviewCard from './ReviewCard'

const PeopleSay = () => {
    const [Rotate, setRotate] = useState("")
    const ReviewCardData=[
        {
            bg:"#FFFFFF",
            text:"black",
            circle:"#27AFE8",
            rotate:"-8.33deg"
        },
        {
            bg:"#27AFE8",
            text:"white",
            circle:"#222222",
            rotate:"0deg"
        },
        {
            bg:"white",
            text:"black",
            circle:"#27AFE8",
            rotate:"6.07deg"
        }
    ]
    const HandleRotate=()=>{
        setRotate("Normal")
    }
    const HandleLeaveRotate=()=>{
        setRotate("Rotate")
    }
  return (
    <div onMouseLeave={HandleLeaveRotate} onMouseEnter={HandleRotate} id="PeopleSay" className=' w-full  flex flex-col gap-20  '>
        <div className=' flex justify-center text-white'>
            <h2 className='lg:text-[74px] xl:text-[74px] sxl:text-[74px] lmd:text-[74px] slg:text-[74px] md:text-[74px] sm:text-[74px] xsm:text-[70px] text-[40px] font-anton'>What people say</h2>
        </div>
        <div  className='  flex px-12 justify-center '>
            <div className={`flex xl:flex-row lg:flex-row slg:flex-row flex-col justify-center items-center  transition-all duration-700 ease-in-out ${Rotate== "Normal" ?"xl:gap-10 lg:gap-7 slg:gap-7 gap-5" :"slg:gap-0 sxl:gap-0 gap-5 lg:gap-0 xl:gap-0"}`}>
                {
                    ReviewCardData.map((e,i)=>(
                        <ReviewCard key={i} Animate={Rotate} bg={e.bg} index={i} rotate={e.rotate} text={e.text} circle={e.circle} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default memo(PeopleSay)