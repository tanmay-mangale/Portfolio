import React from 'react'
import { motion } from "motion/react"

const AboutStrip = () => {
  return (
    <div id="about" className='h-90 md:h-120 flex flex-col items-center gap-5 md:gap-10 mt-20 md:mt-20 '>
        <motion.div initial={{opacity:0,translateY:100}} whileInView={{opacity:1,translateY:0,transition:{duration:0.5 }}} viewport={{ once: true }} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-6 text-white h-20  md:h-30 w-[80%]  flex justify-center items-center gap-3 text-center md:gap-10'><h1 className='text-black font-semibold dark:text-dark-text text-sm md:text-2xl hidden md:flex'>SY CSE student passionate about Full Stack Development and scalable systems.</h1><h1 className='md:hidden text-black dark:text-dark-text text-sm'>SY CSE student passionate about Full Stack Development</h1></motion.div>
        <motion.div initial={{opacity:0,translateY:100}} whileInView={{opacity:1,translateY:0,transition:{duration:0.5 }}} viewport={{ once: true }} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-6 text-white  h-20  md:h-30 w-[80%]  flex justify-center items-center gap-3 text-center  md:gap-10'><h1 className='text-black font-semibold dark:text-dark-text text-sm md:text-2xl hidden md:flex '>Learning Web Development, Generative AI, System Design, and core networking concepts.</h1><h1 className='md:hidden text-black dark:text-dark-text text-sm'>Learning Generative AI, System Design, and core networking concepts.</h1></motion.div>
        <motion.div initial={{opacity:0,translateY:100}} whileInView={{opacity:1,translateY:0,transition:{duration:0.5 }}} viewport={{ once: true }} className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-6 text-white  h-20  md:h-30 w-[80%]  flex justify-center items-center gap-3 text-center  md:gap-10'><h1 className='text-black font-semibold dark:text-dark-text text-sm md:text-2xl hidden md:flex '>Interested in how real-world applications handle scalability, security, and large-scale users.</h1><h1 className='md:hidden text-black dark:text-dark-text text-sm'>Intrested to learn how real large scale apps works</h1></motion.div>
    </div>
  )
}

export default AboutStrip