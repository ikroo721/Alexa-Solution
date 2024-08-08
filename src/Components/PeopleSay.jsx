/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import React from 'react'
import ReviewCard from './ReviewCard'

const PeopleSay = () => {
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
  return (
    <div  id="PeopleSay" className=' w-full  flex flex-col gap-20 '>
        <div className='flex justify-center text-white'>
            <h2 className='text-[74px] font-anton'>What people say</h2>
        </div>
        <div className='flex px-12 justify-center '>
            <div className='flex'>
                {
                    ReviewCardData.map((e,i)=>(
                        <ReviewCard key={i} bg={e.bg} index={i} rotate={e.rotate} text={e.text} circle={e.circle} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PeopleSay