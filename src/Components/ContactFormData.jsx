/* eslint-disable no-unused-vars */
import React from 'react'

const ContactFormData = () => {
  return (
    <div className='w-[764px] h-[702px] bg-[#262626] text-white rounded-[20px] flex flex-col items-center justify-center gap-10'>
    <h3 className='text-[54px] font-anton'>Get In Touch</h3>
    <form className='w-[638px] flex  flex-col gap-5'>
        <input type="text" placeholder='Name' className='rounded-[10px] px-[23px] py-[27px] w-[638px] h-[77px] font-roboto text-[20px]' />
        <input type="text" placeholder='Phone' className='rounded-[10px] px-[23px] py-[27px] w-[638px] h-[77px] font-roboto text-[20px]' />
        <input type="email" placeholder='Email' className='rounded-[10px] px-[23px] py-[27px] w-[638px] h-[77px] font-roboto text-[20px]' />
        <input type="text" placeholder='Any additional information' className='rounded-[10px] px-[23px] py-[27px] w-[638px] h-[196px]  placeholder:absolute placeholder:top-5 font-roboto text-[20px]' />
    </form>
</div>
  )
}

export default ContactFormData