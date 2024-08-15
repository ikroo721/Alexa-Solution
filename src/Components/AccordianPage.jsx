/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { memo, useMemo, useState } from 'react'
import AccordianButton from './AccordianButton';
import AccordianContent from './AccordianContent';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
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
            heading: "App Development",
            content: (
              <>
               <p className='text-[18px]'>We craft exceptional mobile applications that are not only visually striking but also uniquely innovative, designed to deliver your brand's message with precision and impact. Our development approach ensures that every app is a perfect blend of functionality and creativity, tailored to provide an engaging and seamless user experience.
               </p>
              </>
            ),
          },
          {
            id: 8,
            heading: "Lead Generation",
            content: (
              <>
               <p className='text-[18px]'>we specialize in generating high-quality leads that drive business growth. Our approach combines strategic insights with innovative techniques to attract and engage your ideal customers. From crafting compelling campaigns to leveraging data-driven insights, we ensure every step of the lead generation process is optimized for maximum impact. Whether you're looking to boost your sales pipeline or expand your market reach, our tailored solutions are designed to deliver qualified leads that convert. Partner with us to turn prospects into loyal customers and achieve your business goals.</p>
              </>
            ),
          },
      ];
  return (
    <div id="accordian" className='min-h-[10vh] w-full   !z-[99] px-12 flex slg:flex-col lmd:flex-col md:flex-col sm:flex-col xsm:flex-col flex-col lg:flex-col xl:flex-row  mb-[20vw]'>
        <div className='lg:w-full xl:w-1/2 text-white !z-[99] flex xl:items-start xl:justify-start items-center justify-center flex-col gap-6  pt-[10vw]'>
        <h2 className='lmd:text-[74px] md:text-[74px] xl:text-[74px] lg:text-[74px] slg:text-[74px] text-[35px] xsm:text-[50px] sm:text-[70px] font-anton !z-[99]'>Expertise we Offer</h2>
        <p className='lg:w-[500px] xsm:w-[400px] sm:w-[500px] md:w-[550px] lmd:w-[550px] slg:w-[550px] xl:w-[500px] text-[20px] font-roboto !z-[99]'>Alexa IT Solution’s dedicated team empowers 
businesses with innovative technology solutions tailored 
to meet unique needs, driving success through our diverse
 expertise and comprehensive services.</p>
        </div>
        <div id="accordion-collapse" className='xl:w-1/2  pt-[18vw]  z-[99] flex items-center justify-center flex-col gap-5 '>
        {accordionItems.map(({ id, heading, content })=>(
       <div  key={id} className='overflow-hidden'>
             <motion.div
             whileHover={{backgroundColor:"black"}}
             transition={{duration:2,ease:easeInOut}}
            className='min-h-[89px] w-[300px] xsm:w-[470px] sm:w-[600px] md:w-[700px] lmd:w-[750px] slg:w-[800px] lg:w-[800px] xl:w-[655px] bg-[#262626] rounded-[20px] flex justify-center flex-col gap-2 px-8 py-5 text-white border-[#27AFE8] border-[1px] border-opacity-30 !transition-all !duration-200 '>
            <AccordianButton id={id} toggleAccordion={toggleAccordion} heading={heading}  activeIndex={activeIndex} />
            <AccordianContent  id={id} activeIndex={activeIndex} content={content} />
           </motion.div>
       </div>
        ))}
        </div>
    </div>
  )
}

export default memo(AccordianPage)