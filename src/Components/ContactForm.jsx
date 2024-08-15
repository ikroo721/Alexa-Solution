/* eslint-disable no-unused-vars */
import React from 'react'
import ContactFormData from './ContactFormData'
import ContactMapSection from './ContactMapSection'
const ContactForm = () => { 
  return (
    <div className=' text-white min-h-screen flex justify-center items-center
    lg:gap-3 slg:gap-3 xl:flex-nowrap sxl:flex-nowrap flex-wrap
    sxl:gap-5 xl:gap-16 pt-[31vh] '>
        <ContactFormData/>
        <ContactMapSection/>
    </div>
  )
}

export default ContactForm