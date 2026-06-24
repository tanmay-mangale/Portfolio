import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import logoBlack from "../assets/logoBlack.svg";

const IconsContainer = () => {
  return (
    <div className="mt-8 flex gap-4 md:mt-10">
      <a href="https://www.linkedin.com/in/tanmay-mangale-147098337/" target="_blank">
        <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  dark:bg-[#0E100F] outline-2 rounded-full hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black cursor-pointer">
          <FaLinkedinIn size={25} />
        </div>
      </a>
      <a href="https://github.com/tanmay-mangale" target="_blank">
        <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center dark:bg-[#0E100F] outline-2 cursor-pointer hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-full">
          <FiGithub size={25} />
        </div>
      </a>
      <a href="https://x.com/Tanmay_Mangale" target="_blank">
        <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center bg-black text-white hover:outline-black hover:bg-white hover:text-black dark:bg-white dark:text-black cursor-pointer dark:hover:bg-black dark:hover:text-white dark:outline-white outline-black hover:outline-2">
          <FiTwitter size={30} />
        </div>
      </a>
      <a href="https://www.instagram.com/tanmay_mangale/" target="_blank">
        <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  bg-black text-white hover:outline-black hover:bg-white hover:text-black dark:bg-white dark:text-black cursor-pointer dark:hover:bg-black dark:hover:text-white dark:outline-white outline-black hover:outline-2">
          <FaInstagram size={30} />
        </div>
      </a>
      <div className="h-10 w-10 md:h-16 md:w-16 flex justify-center items-center  bg-[#A8E524] text-black cursor-pointer dark:hover:bg-[#A8E524]">
        <img src={logoBlack} alt="" className="h-6 text-black " />
      </div> 
      <a href="/resume.pdf" download="Tanmay_Mangale_Resume.pdf">
        <button className="h-10 w-10 md:flex hidden px-30 rounded-br-3xl md:h-16 md:w-16 flex justify-center items-center  bg-[#A8E524] text-black cursor-pointer dark:hover:bg-[#A8E524]">
          <h1 className="text-2xl font-semibold">Resume</h1>
        </button>
      </a>
    </div>
  );
};

export default IconsContainer;
