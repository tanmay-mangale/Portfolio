import React from 'react'
import logoWhite from '../assets/logoWhite.svg'
import logoBlack from '../assets/logoBlack.svg'
import { MdWbSunny } from "react-icons/md";

const Navbar = ({toggleTheme,isDark}) => {

  return (
    <div className='px-10 py-8 flex justify-between items-center'>
        <div className="logo ">
            <img src={isDark?logoWhite:logoBlack} className='h-8 md:h-10' alt="" />
        </div>
        <button id="menu-btn" className="dark:text-dark-text md:hidden block" onClick={toggleTheme}>
          <MdWbSunny size={25} />
        </button>

        <div className="links text-black dark:text-dark-text hidden md:flex justify-center items-center gap-20 font-bold text-2xl font-mono mr-10">
            <a href="#about "><h3>About</h3></a>
            <a href="#projects"><h3>Projects</h3></a>
            <a href="#contact"><h3>Contact</h3></a>
            <button className="h-12 w-12 flex justify-center items-center text-black hover:bg-black hover:text-white rounded-full dark:text-dark-text dark:hover:bg-white dark:hover:text-black cursor-pointer" onClick={toggleTheme}>
              <MdWbSunny />
            </button>
        </div>
    </div>
  )
}

export default Navbar