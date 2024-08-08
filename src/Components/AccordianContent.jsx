/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const AccordianContent = ({id,activeIndex,content}) => {
  return (
    <div id={`accordion-collapse-body-${id}`} className={`w-[558px] 
        ${activeIndex === id ? 'block' : 'hidden'}`} aria-labelledby={`accordion-collapse-heading-${id}`} >
        {content}
     </div>
  )
}

export default AccordianContent