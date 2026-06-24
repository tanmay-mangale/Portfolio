import React from "react";
import { motion } from "framer-motion";
import reimagineImg from "../assets/reimagine.jpeg";
import algoImg from "../assets/algo.png";

const Achievements = () => {
  const achievements = [
    {
      year: "2026",
      title: "Frontend Hackathon Runner-Up",
      description:
        "Secured 2nd place in Reimagine Hackathon with Team 3Bits. Leaded a team",
      image: reimagineImg,
    },
    {
      year: "2026",
      title: "Finalist @TechIdeathon",
      description:
        "Finalist at TechIdeathon created EcoPrompt Project with team AlgoMasters",
      image: algoImg,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-[#A8E524] md:-translate-x-1/2"></div>

        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative mb-12 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div className="absolute left-4 md:left-1/2 top-8 w-5 h-5 bg-[#A8E524] rounded-full md:-translate-x-1/2 border-4 border-black z-10"></div>

            <div className="ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[45%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <p className="text-[#A8E524] font-semibold">{item.year}</p>

                <h2 className="text-xl text-black dark:text-dark-text md:text-2xl font-bold mt-2">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-400">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
