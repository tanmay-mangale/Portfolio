import React from 'react'
import heroImgMobile from '../assets/heroImgMobile.svg'
import heroImgMobileBgWhite from '../assets/heroMobileWhiteBg.svg'
import { motion } from "motion/react"

const ContactCard = () => {
  return (
    <motion.div  initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:0.75 }}} viewport={{ once: true }} className='h-120 w-full flex justify-center items-center mb-12'>
        <div className='dark:bg-white bg-[#0e100f] flex flex-col md:flex-row h-[90%] md:h-[80%] w-[90%] md:w-[40%] rounded-3xl overflow-hidden'>
            <div className='h-full md:w-[45%] flex justify-center items-center  bg-[#a8e524] shadow-xl rounded-br-full rounded-tr-[50%]'>
                <img src={heroImgMobileBgWhite} className='h-40 mr-18 md:mb-3 md:mr-10 md:h-50' alt="" />
            </div>
            <div className='h-full w-full md:w-[55%] flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white font-semibold dark:text-light-text text-xl'>Tanmay Mangale</h1>
                <h1 className='text-gray-400  dark:text-light-text text-xl'>+91 7588446278</h1>
                <h1 className='text-gray-400  dark:text-light-text text-xl'>tanmaymangale8@gmail.com</h1>
            </div>
        </div>
    </motion.div>
  )
}

export default ContactCard