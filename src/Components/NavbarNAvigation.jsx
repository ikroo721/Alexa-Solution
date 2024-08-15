/* eslint-disable no-unused-vars */
import { easeInOut, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-scroll';
const NavbarNAvigation = () => {
    const NAvData=[
    {name:"Services",
        section:"accordian"
    },
    {name:"Projects",
        section:"work"
    }
    ,
    {name:"What we offer?",
        section:"accordian"
    }
    ,
    {name:"What People say",
        section:"PeopleSay"
    }
    ]
    const [Toggle, setToggle] = useState(false)
    const [Hover, setHover] = useState(null)
    const HandleMove=(i)=>{
      setHover(i)
    }
    const HandleLeave=()=>{
      setHover(null)
    }
const Toggler=()=>{
  setToggle(!Toggle)
}
  return (
    <div className="w-[80%]  h-full flex items-center justify-center ">
    <div className="lg:w-[80%] lmd:w-[85%] md:w-[85%] slg:w-[80%] xl:w-[75%]  flex  justify-between ">
     {NAvData.map((e,i)=>(
     <div key={i} className=' hidden  lmd:flex slg:flex xl:flex md:flex  lg:flex'>
        <div  className='  min-h-10  flex items-center' >
        <Link to={e.section}  
       smooth={true}
       duration={500} 
       onMouseEnter={()=>{HandleMove(i)}} 
       onMouseLeave={HandleLeave} key={e}
       className="xlg:text-[25px] lmd:text-[19px] sm:text-[16px] md:text-[19px] slg:text-[19px] lg:text-[20px] cursor-pointer text-nowrap">
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
     ))}
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
     
    </div>
  </div>
  )
}

export default NavbarNAvigation