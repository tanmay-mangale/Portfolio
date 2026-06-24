import React from "react";
import { motion, scale } from "motion/react"

const Skills = () => {
  return (
    <div className="skillbg h-340 md:h-150 md:mt-20 flex flex-col items-center py-16 px-4">
      <div className="text-center mb-12">
        <motion.h1 initial={{scale:2}} whileInView={{scale:1,transition:{duration:0.7 }}} viewport={{ once: true }} className="text-5xl md:text-5xl font-bold text-[#A8E524]  font-serif">Skills</motion.h1>
        <p  className="text-black dark:text-dark-text font-semibold  mt-2 text-lg md:text-xl">
          My Technical Toolkit
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-7xl">
        <motion.div whileHover={{ scale: 1.1 }} className="bg-white rounded-3xl shadow-xl p-6 min-h-[250px]">
          <h3 className="text-xl font-bold mb-5">Frontend</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border">HTML</span>
            <span className="px-4 py-2 rounded-full border">CSS</span>
            <span className="px-4 py-2 rounded-full border">JavaScript</span>
            <span className="px-4 py-2 rounded-full border">React</span>
            <span className="px-4 py-2 rounded-full border">Tailwind CSS</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1}} className="bg-white rounded-3xl shadow-xl p-6 min-h-[250px]">
          <h3 className="text-xl font-bold mb-5">Backend</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border">Node.js</span>
            <span className="px-4 py-2 rounded-full border">Express</span>
            <span className="px-4 py-2 rounded-full border">MongoDB</span>
            <span className="px-4 py-2 rounded-full border">MySQL</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="bg-white rounded-3xl shadow-xl p-6 min-h-[250px]">
          <h3 className="text-xl font-bold mb-5">Languages</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border">Core Java</span>
            <span className="px-4 py-2 rounded-full border">C++</span>
            <span className="px-4 py-2 rounded-full border">C</span>
            <span className="px-4 py-2 rounded-full border">Python</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className="bg-white rounded-3xl shadow-xl p-6 min-h-[250px]">
          <h3 className="text-xl font-bold mb-5">Tools</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border">Git</span>
            <span className="px-4 py-2 rounded-full border">GitHub</span>
            <span className="px-4 py-2 rounded-full border">Figma</span>
            <span className="px-4 py-2 rounded-full border">Postman</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
