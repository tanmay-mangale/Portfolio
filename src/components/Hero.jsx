import React from 'react'
import heroImg from '../assets/heroImg.svg'
import HeroText from './HeroText'
import heroImgMobile from '../assets/heroImgMobile.svg'
import heroImgMobileBgWhite from '../assets/heroMobileWhiteBg.svg'


const Hero = ({isDark}) => {
  return (
    <div className='flex-1 flex flex-col md:flex-row items-center md:ml-10  '>
        <div>
            <img src={heroImg} alt="" className='hidden md:block w-[530px] h-[530px] ml-10 mb-6'/>
            <img src={isDark?heroImgMobile:heroImgMobileBgWhite} alt="" className='block md:hidden  h-50 mt-14'/>
        </div>
        <div>
            <HeroText/>
        </div>
    </div>
  )
}

export default Hero