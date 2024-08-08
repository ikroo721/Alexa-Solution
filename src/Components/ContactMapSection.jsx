/* eslint-disable no-unused-vars */
import React from 'react'
import Contact from '../assets/Images/Contact.png'
import Email from '../assets/Images/Email.png'
import Map from '../assets/Images/image 5.png'
const ContactMapSection = () => {
  return (
    <div className='w-[600px] h-[702px]  flex flex-col justify-between pt-16'>
            <h4 className='text-[22px] font-roboto'>Lorem ipsum dolor sit amet, consectetur<br /> 
            adipiscing elit. </h4>
            <div className='flex flex-col gap-4'>
                <div className='flex  items-start justify-start gap-2'>
                    <div className='w-[19px] h-[19px]  mt-1'>
                        <img src={Contact} alt="" />
                    </div>
                    <div className='text-[20px] font-roboto flex flex-col gap-[10px]'>
                        <h5 className=' font-bold '>Contact</h5>
                        <h5 className='text-[FFFFFF]'>+92 449 - 0000</h5>
                    </div>
                </div>
                <div className='flex  items-start justify-start gap-2'>
                    <div className='w-[19px] h-[19px] mt-1'>
                        <img src={Email} alt="" />
                    </div>
                    <div className='text-[20px]  font-roboto flex flex-col gap-[10px]'>
                        <h5 className=' font-bold '>Email</h5>
                        <h5 className='text-[FFFFFF]'>xyz@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className='w-[522px] h-[350px] rounded-[20px] overflow-hidden'>
                 <img src={Map} alt="" />
            </div>
        </div>
  )
}

export default ContactMapSection