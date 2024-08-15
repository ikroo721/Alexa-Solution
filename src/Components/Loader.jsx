import React from 'react'
import AnimatedSVG from './SVG'
import { motion } from 'framer-motion';
const Loader = () => {
  return (
    <motion.div
    className='h-screen w-full flex items-center justify-center  ' // Animated background color
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  >
    <div>
      <AnimatedSVG />
    </div>
  </motion.div>
  )
}

export default Loader