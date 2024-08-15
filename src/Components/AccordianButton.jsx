/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Plus from '../assets/Images/ic_round-plus.png'
import Minus from '../assets/Images/ic_round-minus.png'
const AccordianButton = ({activeIndex,id,toggleAccordion,heading}) => {
  return (
    <div onClick={() => toggleAccordion(id)} id={`accordion-collapse-heading-${id}`} className='h-[38px] w-full text-nowrap lg:w-full xl:w-[595px] flex items-center justify-between' >
            <button onClick={(id) => toggleAccordion(id)}
                aria-expanded={activeIndex === id}
                aria-controls={`accordion-collapse-body-${id}`}
             className={`font-roboto md:text-[32px] text-[17px] xsm:text-[25px] sm:text-[25px] lmd:text-[32px] slg:text-[32px] lg:text-[32px] xl:text-[32px] font-bold ${activeIndex === id ? "text-[#27AFE8]" : "text-white" } `}>{heading}</button>
            <div className='h-[24px] w-[24px]'>
               <img src={activeIndex === id ? Minus : Plus} alt="" />
            </div>
    </div>
  )
}

export default AccordianButton