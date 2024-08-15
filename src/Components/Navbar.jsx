/* eslint-disable no-unused-vars */
import React from "react";
import NavLogo from "./NavLogo";
import NavbarNAvigation from "./NavbarNAvigation";
import { motion } from "framer-motion";
const Navbar = () => {

  return (
    <motion.nav
    initial={{backgroundColor:"#262626"}}
    whileHover={{backgroundColor:"black"}}
    transition={{duration:1}}
      className="w-full h-20 sm:h-20 md:h-20 lmd:h-24 slg:h-28 xlg:h-28 lg:h-28 bg-[#262626] 
      border-[#27AFE8] border-[1px] border-opacity-30 rounded-3xl p-[1px] relative  flex  text-white">
     <NavLogo/>
     <NavbarNAvigation/>
    </motion.nav>
  );
};

export default Navbar;
