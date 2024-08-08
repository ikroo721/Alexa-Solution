/* eslint-disable no-unused-vars */
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
    const [Hover, setHover] = useState(null)
    const HandleMove=(i)=>{
      setHover(i)
    }
    const HandleLeave=()=>{
      setHover(null)
    }
  return (
    <div className="w-[80%]  h-full flex items-center justify-center">
    <div className="w-[75%]  flex  justify-between">
     {NAvData.map((e,i)=>(
       <Link to={e.section}  
       smooth={true}
       duration={500} 
       onMouseEnter={()=>{HandleMove(i)}} 
       onMouseLeave={HandleLeave} key={e}
       className="text-[25px] cursor-pointer hover:text-[#27AFE8] hover:font-bold transition-all duration-30">
     {e.name}
      {i == Hover && <span className="w-full  h-[2px] bg-[#27AFE8] block"></span>}
     </Link>
     ))}
    </div>
  </div>
  )
}

export default NavbarNAvigation