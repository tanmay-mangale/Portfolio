import React, { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Loader from './components/Loader'
import Landing from './components/Landing'
import AboutStrip from './components/AboutStrip'
import ResumeBtn from './components/ResumeBtn'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Footer from './components/Footer'
import ContactCard from './components/ContactCard';
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  const [isDark, setIsDark] = useState(true)
  const [loading, setLoading] = useState(true)

  function toggleTheme(){
    setIsDark(!isDark)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={isDark ? "dark" : ""}>

      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className='min-h-screen bg-light-bg dark:bg-dark-bg'>
          <Landing toggleTheme={toggleTheme} isDark={isDark} />
          <ResumeBtn />
          <AboutStrip />
          <Skills />
          <Projects />
          <Achievements />
          <Contact isDark={isDark} />
          <ContactCard/>
          <Footer />
        </div>
      )}

      <Analytics/>
    </div>
  )
}

export default App