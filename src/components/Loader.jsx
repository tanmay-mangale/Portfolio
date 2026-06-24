import React from "react";
import { motion } from "framer-motion";
import logoWhite from "../assets/logoWhite.svg";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg overflow-hidden z-50"
      exit={{ y: "-100%" }}
      transition={{ duration: 1 }}
    >
      
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-[1px] bg-white/10"
            style={{ left: `${i * 5}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.03,
            }}
          />
        ))}

        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-[1px] bg-white/10"
            style={{ top: `${i * 10}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
            }}
          />
        ))}
      </div>

      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={logoWhite}
          alt="logo"
          className="w-32 md:w-44 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;