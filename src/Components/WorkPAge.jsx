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
        padding:"37px",
        innerHead:"Kota",
        innerText:"Instant access to insurance and retirement providers, with flexible contributions, automated accounting and a delightfully simple employee app.",
        LinkToWeb:"https://www.kota.io/"
        // https://www.timbuktutravel.com/"
// PICKLE: https://www.shoponpickle.com/i

// Timbuktu: https://www.timbuktutravel.com/

// Kota: 
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
    <div id="work" className='  flex flex-col gap-10 mb-52'>
        <WorkHeader/>
        <div>
<div className=' w-full   px-12 flex items-center justify-center '>
<div className='w-[1350px]  flex gap-10'>
{CardData.map((e)=>(
   <a key={e} href={e.LinkToWeb}>
     <WorkCard key={e.img} padding={e.padding} img={e.img} height={e.height} width={e.width} 
    contentHeight={e.contentHeight} contentWidth={e.contentWidth} innerHead={e.innerHead} innerText={e.innerText}
    />
   </a>
))}
<div className='flex flex-col justify-between h-[647px]'>
{CardData2.map((e)=>(
   <a key={e} href={e.LinkToWeb}>
     <WorkCard key={e.img} padding={e.padding} img={e.img} height={e.height} width={e.width} 
    contentHeight={e.contentHeight} contentWidth={e.contentWidth} innerHead={e.innerHead} innerText={e.innerText}
    /> 
   </a>
))}
</div>
</div>
</div>
        </div>

    </div>
  )
}

export default WorkPAge