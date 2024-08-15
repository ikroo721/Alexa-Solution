/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './Hero'
import AccordianPage from './AccordianPage'
import WorkPAge from './WorkPAge'
import PeopleSay from './PeopleSay'
import ContactForm from './ContactForm'
import Footer from './Footer'
const FullApp = () => {
  return (
    <div className='bg-[#04040C]'>
    <Hero/>
    <AccordianPage/>
    <WorkPAge/>
    <PeopleSay/>
    <ContactForm/>
    <Footer/>
  </div>
  )
}

export default FullApp