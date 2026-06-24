import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import logoBlack from "../assets/logoBlack.svg";

const Footer = () => {
  return (
    <div className='h-80     w-full flex items-center justify-center  '>
        <div className='h-80  w-[90%] border-t border-black dark:border-white flex flex-col justify-center items-center gap-4 md:gap-6'>
            <div>
                <h1 className='text-black dark:text-dark-text text-s'>Thanks for visiting my portfolio</h1>
            </div>
            <div className="mt-2 flex gap-4 md:mt-1">
                  <a href="https://www.linkedin.com/in/tanmay-mangale-147098337/" target="_blank">
                    <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  dark:bg-white outline-2 rounded-full  cursor-pointer">
                      <FaLinkedinIn size={25} />
                    </div>
                  </a>
                  <a href="https://github.com/tanmay-mangale" target="_blank">
                    <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center dark:bg-white outline-2 cursor-pointer  rounded-full">
                      <FiGithub size={28} />
                    </div>
                  </a>
                  <a href="https://x.com/Tanmay_Mangale" target="_blank">
                    <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center bg-black text-white  dark:bg-white dark:text-black cursor-pointer  dark:outline-white outline-black  rounded-full">
                      <FiTwitter size={28} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/tanmay_mangale/" target="_blank">
                    <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  bg-black text-white   dark:bg-white dark:text-black cursor-pointer   dark:outline-white outline-black  rounded-full">
                      <FaInstagram size={25} />
                    </div>
                  </a>
                  <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  bg-[#A8E524] text-black cursor-pointer dark:hover:bg-[#A8E524] rounded-full">
                    <img src={logoBlack} alt="" className="h-6 text-black " />
                  </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer