/* eslint-disable no-unused-vars */
import React from 'react'
import ContactFormData from './ContactFormData'
import ContactMapSection from './ContactMapSection'
const ContactForm = () => { 
  return (
    <div className=' text-white min-h-screen flex justify-center items-center gap-16 pt-[31vh]'>
        <ContactFormData/>
        <ContactMapSection/>
    </div>
  )
}

export default ContactForm