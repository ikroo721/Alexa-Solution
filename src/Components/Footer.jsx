/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
const Footer = () => {
  return (
    <div className='bg-[#04040C]
    flex flex-col items-center pt-40 w-full min-h-12 relative'>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}


export default memo(Footer)