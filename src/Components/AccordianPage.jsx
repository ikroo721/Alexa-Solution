/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import AccordianButton from './AccordianButton';
import AccordianContent from './AccordianContent';
const AccordianPage = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleAccordion = (index) => {
      setActiveIndex(prevIndex => (prevIndex === index ? index : index));
    };
    const accordionItems = [
        {
          id: 1,
          heading: "Web Development",
          content: (
            <>
             <p className='text-[18px]'>We craft custom websites that are visually appealing, responsive, and 
             tailored to meet your business needs.</p>
            </>
          ),
        },
        {
            id: 2,
            heading: "E-commerce",
            content: (
              <>
               <p className='text-[18px]'>We design and build custom e-commerce platforms that are visually stunning, fully responsive, and tailored to drive your business growth.</p>
              </>
            ),
          },
          {
            id: 3,
            heading: "Digital Marketing",
            content: (
              <>
               <p className='text-[18px]'>We create customized digital marketing strategies that are visually compelling, highly engaging, and tailored to amplify your brand's online presence.</p>
              </>
            ),
          },
          {
            id: 4,
            heading: "Classified Ads",
            content: (
              <>
               <p className='text-[18px]'>We develop targeted classified ad platforms that are user-friendly, visually appealing, and designed to maximize engagement and reach.</p>
              </>
            ),
          },
          {
            id: 5,
            heading: "Social Media Marketing",
            content: (
              <>
               <p className='text-[18px]'>We craft personalized social media marketing campaigns that are visually captivating, highly shareable, and tailored to boost your brand's online influence.</p>
              </>
            ),
          },
          {
            id: 6,
            heading: "Graphic Designing",
            content: (
              <>
               <p className='text-[18px]'>We create stunning graphic designs that are visually impactful, creatively unique, and tailored to communicate your brand's message effectively.</p>
              </>
            ),
          },
          {
            id: 7,
            heading: "Mobile App Development",
            content: (
              <>
               <p className='text-[18px]'>We craft exceptional mobile applications that are not only visually striking but also uniquely innovative, designed to deliver your brand's message with precision and impact. Our development approach ensures that every app is a perfect blend of functionality and creativity, tailored to provide an engaging and seamless user experience.

</p>
              </>
            ),
          },
          {
            id: 8,
            heading: "Content Writing",
            content: (
              <>
               <p className='text-[18px]'>We produce compelling content that captivates and informs, designed to resonate with your audience and amplify your brand’s message. Our writing is meticulously crafted to be both engaging and impactful, ensuring that your content stands out with creativity and clarity, tailored to meet your specific needs and objectives.</p>
              </>
            ),
          },
      ];
  return (
    <div id="accordian" className='min-h-[10vh] w-full  !z-[99] px-12 flex  mb-[20vw]'>
        <div className='w-1/2 text-white !z-[99] flex flex-col gap-6  pt-[10vw]'>
        <h2 className='text-[74px] font-anton !z-[99]'>Expertise we Offer</h2>
        <p className='w-[500px] text-[20px] font-roboto !z-[99]'>Alexa IT Solution’s dedicated team empowers 
businesses with innovative technology solutions tailored 
to meet unique needs, driving success through our diverse
 expertise and comprehensive services.</p>
        </div>
        <div id="accordion-collapse" className='w-1/2 pt-[18vw]  z-[99] flex items-center justify-center flex-col gap-5 '>
        {accordionItems.map(({ id, heading, content })=>(
            <div key={id} className='min-h-[89px] w-[655px] bg-[#262626] rounded-[20px] flex justify-center flex-col gap-2 px-8 py-5 text-white border-[#27AFE8] border-[1px] border-opacity-30 !transition-all !duration-200 '>
            <AccordianButton id={id} toggleAccordion={toggleAccordion} heading={heading}  activeIndex={activeIndex} />
            <AccordianContent  id={id} activeIndex={activeIndex} content={content} />
           </div>
        ))}
        </div>
    </div>
  )
}

export default AccordianPage