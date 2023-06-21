import React from "react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      className="lg:h-screen px-6 text-center lg:text-left bg-black  py-10 text-white"
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase ">About Me</p>
      <p className="mt-6 text-2xl md:text-4xl lg:text-6xl font-primary text-gray-500">
        A <span className="text-white">frontend developer</span>  with passion for building user-friendly and
        visually appealing web applications. With <span className="text-white">2 years of experience</span>, I
        specialize in creating dynamic and responsive user interfaces using{" "}
        <span className="text-white">React</span>, <span className="text-white">Next.js</span>, <span className="text-white">TypeScript</span>, and <span className="text-white">Tailwind CSS</span>.{" "}
      </p>
      <div className="flex items-center gap-2 mt-5 w-9/12 mx-auto lg:mx-0">
        <p>Fun Fact: I love good food and good friends</p>
        <Image
          src="/assets/img/100-emoji.svg"
          alt="logo"
          width={30}
          height={30}
          className=""
        />
      </div>
      <div className="w-60 mx-auto mt-5">
      <button className="border px-4 py-2 rounded-md ">
        <Link href="/assets/img/Edidiong_Etok_CV.pdf" target="_blank">
        Download Resume
        </Link>
      </button>
      </div>
    </section>
  );
};
