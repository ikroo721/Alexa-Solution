/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Menu from './Menu';
import SingleAnchor from './SingleAnchor';
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
  return (
    <div className="w-[80%]  h-full flex items-center justify-center ">
    <div className="lg:w-[80%] lmd:w-[85%] md:w-[85%] slg:w-[80%] xl:w-[75%]  flex  justify-between ">
     {NAvData.map((e,i)=>(
      <SingleAnchor key={i} i={i} e={e} />
     ))}
     <Menu NAvData={NAvData} />   
    </div>
  </div>
  )
}

export default NavbarNAvigation