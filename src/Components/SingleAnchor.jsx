/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

const SingleAnchor = ({e,i}) => {

    const [Hover, setHover] = useState(null)
    const HandleMove=(i)=>{
      setHover(i)
    }
    const HandleLeave=()=>{
      setHover(null)
    }
    return (
    <div  className=' hidden  lmd:flex slg:flex xl:flex md:flex  lg:flex'>
        <div  className='  min-w-32  lmd:min-w-32 slg:min-w-40   min-h-10  flex items-center justify-center'  >
       <div className=''>
       <Link to={e.section}  
       smooth={true}
       duration={500} 
       onMouseEnter={()=>{HandleMove(i)}} 
       onMouseLeave={HandleLeave}
       className="xlg:text-[25px] lmd:text-[15px]  md:text-[15px] slg:text-[17px] lg:text-[19px] cursor-pointer text-nowrap">
     <motion.span
     initial={{color:"white"}}
     whileHover={{color:"#27AFE8",fontWeight:"800"}}
     transition={{duration:1, ease:easeInOut}}
     >{e.name}</motion.span>
      {i == Hover && <motion.span
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{duration:.6}}
      className="w-full  h-[2px] bg-[#27AFE8] block"></motion.span>}
        </Link>
       </div>
       </div>
     </div>
  )
}

export default SingleAnchor