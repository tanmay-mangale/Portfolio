import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import shareEzy from "../assets/shareEzy.png";
import mentorise from "../assets/mentorise.png";
import yojanaGPT from "../assets/yojanaGPT.png";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto px-4 py-20 flex flex-col items-center">
      <h1 className="text-black font-semibold dark:text-dark-text text-4xl md:text-5xl font-serif mb-12">
        Projects
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col p-3 w-full max-w-[400px] min-h-[550px] shadow-xl border-1 dark:border-white rounded-2xl">
          <div className="h-60 md:h-72 w-full overflow-hidden rounded-2xl bg-white border-1">
            <img
              src={shareEzy}
              alt="ShareEzy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 px-2">
            <h1 className="text-2xl font-semibold text-black dark:text-dark-text">ShareEzy</h1>
            <p className="text-black dark:text-dark-text">A real-time peer-to-peer file sharing platform</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 px-2">
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">React</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Tailwind</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Socket.io</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">WebRTC</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Node.js</div>
          </div>

          <div className="flex gap-3 mt-5 px-2">
            <a
              target="_blank"
              href="https://github.com/tanmay-mangale/shareEzy"
              className="h-10 w-10 rounded-full  dark:text-white flex items-center justify-center"
            >
              <FiGithub size={25} />
            </a>

            <a
              target="_blank"
              href="https://shareezy.vercel.app/"
              className="h-10 w-10 rounded-full  dark:text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={22 } />
            </a>
          </div>
        </div>

        <div className="flex flex-col p-3 w-full max-w-[400px] min-h-[550px] shadow-xl border-1 dark:border-white  rounded-2xl">
          <div className="h-60 md:h-72 w-full overflow-hidden rounded-2xl  border-1">
            <img
              src={mentorise}
              alt="Mentorise"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 px-2">
            <h1 className="text-2xl font-semibold text-black dark:text-dark-text">Mentorise</h1>
            <p className="text-black dark:text-dark-text">A mentor mentee connecting platform</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 px-2">
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">HTML</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Tailwind</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">JavaScript</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Socket.io</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Express</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Firebase</div>
          </div>

          <div className="flex gap-3 mt-5 px-2">
            <a
              target="_blank"
              href="https://github.com/tanmay-mangale/mentorise"
              className="h-10 w-10 rounded-full  dark:text-white flex items-center justify-center"
            >
              <FiGithub size={25} />
            </a>

            <a
              target="_blank"
              href="https://mentorise.onrender.com/"
              className="h-10 w-10 rounded-full  dark:text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          </div>
        </div>

        <div className="flex flex-col p-3 w-full max-w-[400px] min-h-[550px] shadow-xl border-1 dark:border-white    rounded-2xl">
          <div className="h-60 md:h-72 w-full overflow-hidden rounded-2xl border-1">
            <img
              src={yojanaGPT}
              alt="YojanaGPT"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 px-2">
            <h1 className="text-2xl font-semibold text-black dark:text-dark-text">YojanaGPT</h1>
            <p className="text-black dark:text-dark-text">
              A scheme website summarizing Chrome extension
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 px-2">
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">HTML</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">CSS</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Local Ollama model</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">DOM</div>
            <div className="px-3 py-1 rounded-full dark:bg-white dark:text-black bg-black text-white">Chrome APIs</div>
          </div>

          <div className="flex gap-3 mt-5 px-2">
            <a
              target="_blank"
              href="https://github.com/tanmay-mangale/yojanaGPT"
              className="h-10 w-10 rounded-full  dark:text-white flex items-center justify-center"
            >
              <FiGithub size={25} />
            </a>

            <a
              target="_blank"
              href="https://github.com/tanmay-mangale/yojanaGPT"
              className="h-10 w-10 rounded-full dark:text-white flex items-center justify-center"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
