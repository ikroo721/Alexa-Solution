/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './Components/Hero'
import AccordianPage from './Components/AccordianPage'
import WorkPAge from './Components/WorkPAge'
import PeopleSay from './Components/PeopleSay'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

const App = () => {
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

export default App