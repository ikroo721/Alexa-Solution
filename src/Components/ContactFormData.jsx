/* eslint-disable no-unused-vars */
import React from 'react'

const ContactFormData = () => {
  //
  // w-[47.75vw]
  return (
    <div className='w-[300px] xsm:w-[450px] sm:w-[600px] lmd:w-[750px] md:w-[720px] lg:w-[770px] slg:w-[770px] sxl:w-[650px]  xl:w-[764px] h-[702px] bg-[#262626] text-white rounded-[20px] flex flex-col items-center justify-center gap-10'>
    <h3 className='text-[54px] font-anton'>Get In Touch</h3>
    <form className='lmd:w-[700px] w-[250px] xsm:w-[400px] sm:w-[550px] md:w-[650px] 
    lg:w-[700px] slg:w-[700px] xl:w-[638px] items-center sxl:w-[638px] s flex  flex-col gap-5'>
        <input type="text" placeholder='Name' className='rounded-[10px] px-[23px] py-[27px] 
        xl:w-[638px] sxl:w-[600px] w-full h-[77px] font-roboto text-[20px]' />
        <input type="text" placeholder='Phone' className='rounded-[10px] px-[23px] py-[27px]
      xl:w-[638px] sxl:w-[600px] h-[77px] w-full font-roboto text-[20px]' />
        <input type="email" placeholder='Email' className='rounded-[10px] px-[23px] py-[27px]
         xl:w-[638px] sxl:w-[600px] h-[77px] w-full font-roboto text-[20px]' />
        <input type="text" placeholder='Any additional information' className='rounded-[10px] px-[23px] py-[27px] xl:w-[638px] sxl:w-[600px] w-full h-[196px]  placeholder:absolute placeholder:top-5 font-roboto text-[20px]' />
        <button   className='rounded-[10px] px-[23px] py-[27px] flex items-center justify-center font-bold text-2xl uppercase
         xl:w-[638px] sxl:w-[600px] h-[45px] w-full font-roboto text-[20px] bg-white hover:bg-[#262626] hover:text-white hover:border hover:border-white text-[#262626]' >Submit</button>
    </form>
</div>
  )
}

export default ContactFormData