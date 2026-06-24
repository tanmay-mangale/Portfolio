import React from "react";

const ResumeBtn = () => {
  return (
    <div className=" mt-5 flex justify-center items-center md:hidden block">
      <a href="/resume.pdf" download="Tanmay_Mangale_Resume.pdf">
        <button className="px-24 rounded py-3 bg-[#A8E524] text-black cursor-pointer dark:hover:bg-[#A8E524]">
          <h1 className="text-xl font-semibold">Resume</h1>
        </button>
      </a>
    </div>
  );
};

export default ResumeBtn;
