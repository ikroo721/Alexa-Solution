/* eslint-disable no-unused-vars */
import React from 'react'
import Rect1 from '../assets/Images/RECT1.png'
import Rect2 from '../assets/Images/3 1.png'
import Rect3 from '../assets/Images/Rect4.png'
import Rect4 from '../assets/Images/4 1.png'
import WorkCard from './WorkCard'
import WorkHeader from './WorkHeader'
const WorkPAge = () => {
    const CardData=[
        {
         width:"545px",
         height: "647px",
         img:Rect1,
         contentHeight:"133px" ,
         contentWidth:"448px",
         padding:"37px"
        },
        {
            width:"315px",
            height: "646px",
            img:Rect2,
            contentWidth:"290px",
            padding:"20px"
        },
    ]
    const CardData2=[
        {
            width:"430px",
            height: "312.5px",
            img:Rect3,
            contentWidth:"290px",
            padding:"25px"
        },
        {
            width:"430px",
            height: "312.5px",
            img:Rect4,
            contentWidth:"290px",
            padding:"25px"
        },
]
  return (
    <div id="work" className='  flex flex-col gap-10 mb-52'>
        <WorkHeader/>
        <div>
<div className=' w-full  px-12 flex items-center justify-center '>
<div className='w-[88%]  flex gap-4'>
{CardData.map((e)=>(
    <WorkCard key={e.img} padding={e.padding} img={e.img} height={e.height} width={e.width} 
    contentHeight={e.contentHeight} contentWidth={e.contentWidth}
    />
))}
<div className='flex flex-col justify-between h-[647px]'>
{CardData2.map((e)=>(
    <WorkCard key={e.img} padding={e.padding} img={e.img} height={e.height} width={e.width} 
    contentHeight={e.contentHeight} contentWidth={e.contentWidth}
    />
))}
</div>
</div>
</div>
        </div>

    </div>
  )
}

export default WorkPAge