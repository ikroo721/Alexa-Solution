/* eslint-disable no-unused-vars */
import React from 'react'
const WorkHeader = () => {
    const ButtonsData=["Web Development ","E-commerce","Digital Marketing","Classified Ads","Social Media Marketing","Graphic Designing"]
  return (
 <>
    <div className='text-white flex items-center justify-center'>
            <h3 className='text-[74px] font-anton'>Our work Experience</h3>
        </div>
        <div className='flex items-center justify-center text-white '>
            <div className='w-[1216px] h-[41px] flex gap-[18px]'>
                {ButtonsData.map((e)=>(
                    <button key={e} className='px-[25px] py-[10px] text-[18px] font-roboto text-nowrap hover:border-[#27AFE8] hover:text-[#27AFE8] border-[1px] rounded-full flex items-center justify-center'>{e}</button>
                ))}
            </div>
        </div>
 </>
  )
}

export default WorkHeader