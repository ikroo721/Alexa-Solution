/* eslint-disable no-unused-vars */
import React from "react";
import NavLogo from "./NavLogo";
import NavbarNAvigation from "./NavbarNAvigation";
const Navbar = () => {
  return (
    <nav
      className="w-full h-28 bg-[#262626]  border-[#27AFE8] border-[1px] border-opacity-30 rounded-3xl p-[1px]  flex overflow-hidden text-white">
     <NavLogo/>
      <NavbarNAvigation/>
    </nav>
  );
};

export default Navbar;
