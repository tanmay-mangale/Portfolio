import React, { useState } from "react";
import slogan from "../assets/slogan.svg";
import sloganLight from "../assets/sloganLight.svg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); 

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_6y6lij4",
        "template_kjug9o4",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "2MvZyeHVJvwEYSne_",
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };


  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center min-h-screen w-full"
    >
      <div className="w-full lg:w-[40%] flex justify-center items-center py-10">
        <motion.img
          src={isDark ? slogan : sloganLight}
          alt="slogan"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-64 md:w-80 lg:w-[70%] h-auto md:h-130 md:ml-40"
        />
      </div>

      <div className="w-full lg:w-[60%] flex justify-center items-center px-4 pb-10">
        <div className="w-full border-l-10 border-1 border-l-[#A8E524] max-w-3xl rounded-4xl md:mt-13 md:mr-15 flex flex-col gap-10 py-8 px-6 md:px-12 lg:px-20 bg-white/10 backdrop-blur-md dark:border dark:border-l-10 dark:border-l-[#A8E524] dark:border-white/20 shadow-lg">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-dark-text">
              Let's create great
              <br />
              things together
            </h1>
          </div>

          <div className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-[#dfdfdf45] dark:bg-[#606060] py-4 px-6 rounded-4xl text-black dark:text-dark-text placeholder:text-gray-300 outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-[#dfdfdf45] dark:bg-[#606060] py-4 px-6 rounded-4xl text-black dark:text-dark-text placeholder:text-gray-300 outline-none"
            />

            <div className="relative">
              <textarea
                placeholder="Email here........"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className=" bg-[#dfdfdf45] dark:bg-[#606060] h-40 w-full py-4 px-6 pr-24 rounded-4xl text-black dark:text-dark-text placeholder:text-gray-300 resize-none outline-none"
              />

              <button
                onClick={sendEmail}
                className="absolute bottom-4 right-4 bg-[#A8E524] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
