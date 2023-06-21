import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="lg:h-screen px-6 text-center lg:text-left bg-black text-white py-10"
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase">About Me</p>
      <p className="mt-6 text-2xl md:text-4xl lg:text-6xl font-primary">
        A frontend developer with passion for building user-friendly and
        visually appealing web applications. With over 2 years of experience, I
        specialize in creating dynamic and responsive user interfaces using
        React, Next.js, TypeScript, and Tailwind CSS.{" "}
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
    </section>
  );
};
