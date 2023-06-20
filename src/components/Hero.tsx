import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <header
      id="home"
      className="container h-screen w-full text-black md:text-white text-center"
    >
      <div className="w-10/12 md:w-8/12 mt-[100px] flex flex-col items-center justify-center mx-auto">
        <p className="text-sm md:text-lg tracking-[0.4em]">I am Edidiong Etok</p>
        <h1 className="text-5xl md:text-[115px] mt-[4rem] text-black md:text-white font-bold">
         Creative Frontend Developer <span className="text-[#eb5939]">et</span>{" "}
          Technical Writer
        </h1>
      </div>
    </header>
  );
};
