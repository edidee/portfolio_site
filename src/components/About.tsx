import React from "react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      className="container lg:h-screen xl:h-auto flex flex-col justify-center  px-6 text-center lg:text-left bg-black  py-10 text-[#B7AB98]"
    >
      <div className="mt-[50px] lg:mt-[90px]">

      <p className="text-xs md:text-sm tracking-[0.4em] uppercase">About Me</p>
      <p className="mt-6 text-2xl md:text-4xl lg:text-6xl font-secondary text-[#B7AB98] ">
        A <span className="">frontend developer</span> with passion
        for building user-friendly and visually appealing web applications. With{" "}
        <span className="">2+ years of experience</span>, I specialize
        in creating dynamic and responsive user interfaces using{" "}
        <span className="text-[#eb5939]">React</span>,{" "}
        <span className="text-[#eb5939]">Next.js</span>,{" "}
        <span className="text-[#eb5939]">TypeScript</span>, and{" "}
        <span className="text-[#eb5939]">Tailwind CSS</span>.{" "}
      </p>
      {/* <div className="flex items-center gap-2 mt-5 w-9/12 mx-auto lg:mx-0">
        <p>Fun Fact: I love good food and good friends</p>
        <img
          src="/assets/img/100-emoji.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
      </div> */}
      <div className="w-60 mx-auto mt-10">
        <button className="border px-4 py-2 rounded-md ">
          <Link href="/assets/img/Edidiong_Etok_CV.pdf" target="_blank">
            Download Resume
          </Link>
        </button>
      </div>
      </div>
    </section>
  );
};
