/* eslint-disable no-unused-vars */
import React from 'react'
import WorkCard from './WorkCard'
import Rect1 from '../assets/Images/RECT1.png'
import Rect2 from '../assets/Images/3 1.png'
import Rect3 from '../assets/Images/Rect4.png'
import Rect4 from '../assets/Images/4 1.png'

const WorkBottom = () => {
    const CardData=[
        {
         width:"545px",
         height: "647px",
         img:Rect1,
         contentHeight:"133px" ,
         contentWidth:"448px",
        padding:"37px",
        innerHead:"Kota",
        innerText:"Instant access to insurance and retirement providers, with flexible contributions, automated accounting and a delightfully simple employee app.",
        LinkToWeb:"https://www.kota.io/"
        },
        {
            width:"315px",
            height: "646px",
            img:Rect2,
            contentWidth:"290px",
            padding:"20px",
            innerHead:"Pickle",
            innerText:"Our platform connects individuals with shareable closets, offering a dynamic and effortless rental experience akin to borrowing from a friend",
            LinkToWeb:"https://www.shoponpickle.com/"

        },
    ]
    const CardData2=[
        {
            width:"430px",
            height: "312.5px",
            img:Rect3,
            contentWidth:"290px",
            padding:"25px",
            innerHead:"Timbuktu",
            innerText:"Timbuktu help you explore the world easily and affordably, no matter your experience or budget.",
             LinkToWeb:"https://www.timbuktutravel.com/"
           
            
        },
        {
            width:"430px",
            height: "312.5px",
            img:Rect4,
            contentWidth:"290px",
            padding:"25px",
              innerHead:"MYANT HEALTH",
            innerText:"MYANT health provide people with the tools to improve heart health, strengthen connections with loved ones, and enhance quality of life.",
              LinkToWeb:"https://myanthealth.com/"
        },
]
  return (
    <div className='xl:w-[1350px] w-full xl:px-0 px-5   flex  slg:flex-wrap slg:justify-center  flex-wrap sxl:flex-wrap lg:flex-wrap md::flex-wrap lmd::flex-wrap sm:flex-wrap xsm::flex-wrap slg::flex-wrap items-center justify-center xl:flex-nowrap gap-5  sxl:gap-2 xl:gap-10 relative'>
{CardData.map((e,i)=>(
   <a key={i} href={e.LinkToWeb}>
    <div className={`${i==0 ? "xl:h-[647px] xl:w-[545px]": "xl:h-[646px] xl:w-[315px] "} 
    sxl:w-[40vw] lmd:w-[60vw] w-[70vw] h-[350px] lmd:h-[450px] xsm:w-[60vw] xsm:h-[400px] sm:w-[60vw] sm:h-[400px] md:w-[60vw] md:h-[450px] lg:w-[60vw] lg:h-[500px] sxl:h-[500px]`}>
    <WorkCard key={e.img} padding={e.padding} img={e.img} 
    contentHeight={e.contentHeight} contentWidth={e.contentWidth} innerHead={e.innerHead} innerText={e.innerText}
    />
    </div>
   </a>
))}
<div className='flex flex-col xl:flex-col sxl:flex-row sxl:gap-2 xl:gap-0 justify-between gap-5 min-h-[647px]'>
{CardData2.map((e,i)=>(
   <a key={i} href={e.LinkToWeb}>
    <div className={`xl:w-[430px] xl:h-[312.5px] sxl:w-[40vw] lmd:w-[60vw] w-[70vw] h-[350px] lmd:h-[450px] xsm:w-[60vw] xsm:h-[400px] sm:w-[60vw] sm:h-[400px] md:w-[60vw] md:h-[450px] lg:w-[60vw] lg:h-[500px] sxl:h-[500px] `}>
    <WorkCard key={e.img} padding={e.padding} img={e.img}
    contentHeight={e.contentHeight} contentWidth={e.contentWidth} innerHead={e.innerHead} innerText={e.innerText}
    />
    </div>
   </a>
))}
</div>
</div>
  )
}

export default WorkBottom