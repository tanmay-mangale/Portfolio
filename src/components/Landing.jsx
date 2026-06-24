import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import '../App.css';


const Landing = ({toggleTheme,isDark}) => {
  return (
    <div className='grid-wrapper '>
        <div className="grid-background dark:opacity-1"></div>
      <div className='relative z-10 h-full w-full flex flex-col'>
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <Hero isDark={isDark}/>
      </div>
    </div>
  )
}

export default Landing