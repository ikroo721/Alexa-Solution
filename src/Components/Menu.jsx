/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
const Menu = ({NAvData,}) => {
    const [Toggle, setToggle] = useState(false)
    const Toggler=()=>{
      setToggle(!Toggle)
    }
  return (
    <div className="md:hidden lg:hidden w-[100%] z-[99] " >
    <div onClick={Toggler} className="w-[60vw] xsm:w-[60vw] sm:w-[60vw]  h-20 mt-1   flex justify-end items-center px-2 relative">  
    <button onClick={Toggler} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden   text-white" aria-controls="navbar-default" aria-expanded="false">
      <span  onClick={Toggler} className="sr-only">Open main menu</span>
      <svg onClick={Toggler} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
    </div>
    <div className="absolute w-[90%] -mt-1 left-1/2 -translate-x-1/2  md:block md:w-auto z-[100]" id="navbar-default">
    <ul
    
    className="font-medium flex flex-col w-full  md:p-0  overflow-hidden   ">
      {
        Toggle && NAvData.map((e, i) => (
          <motion.div
          initial={{y:"-300px"}}
          animate={{y:"0px"}}
          transition={{duration:1,ease:easeInOut}}
          key={i} className={` relative  bg-[#262626] h-20 w-full  px-4 flex items-center justify-center z-10  cursor-pointer
           `} > 
            <Link
            onClick={Toggler}
            to={e.section} 
            className={
              ` 
               uppercase text-xl focus:text-[${e.bg}]  `
            }
          >
            <motion.span
   initial={{color:"white"}}
   whileHover={{color:"#27AFE8",fontWeight:"800"}}
   transition={{duration:1, ease:easeInOut}}
   >{e.name}</motion.span> 
          </Link>
          </motion.div>
        ))
      }
    </ul>
  </div>
    </div>
  )
}

export default Menu