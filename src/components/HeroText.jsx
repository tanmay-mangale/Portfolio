import React from "react";
import IconsContainer from "./IconsContainer";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="text-center md:text-left mt-12 px-5 text-black dark:text-dark-text md:mb-10 md:ml-20">
      <h2 className="text-4xl md:text-7xl font-bold">
        <TypeAnimation
          sequence={[
            "नमस्ते",
            1000, 
            "Hello",
            1000,
            "Bonjour",
            1000,
            "Hola",
            1000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />{" "}
        World!
      </h2>
      <h2 className="text-3xl mt md:text-6xl font-bold md:mt-4 md:mb-8">
        Im <span className="font-serif text-[#A8E524]">Tanmay</span>
      </h2>
      <p className="hidden md:block md:text-2xl font-mono">
        A passionate Fullstack Developer with creative <br /> thinking.Loves
        creating sleek designs <br /> and best softwares out of the box, I
        always wanna make <br />
        products the best and most efficient.
      </p>
      <p className="text-gray-400 mt-2 block md:hidden">
        A passionate Fullstack Developer
      </p>
      <IconsContainer />
    </div>
  );
};

export default HeroText;
