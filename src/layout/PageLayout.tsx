import React, {useRef, useLayoutEffect} from "react";
import Image from "next/image";
import Link from "next/link";


// import {gsap } from "gsap"
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
interface LayoutProps {
  children: React.ReactNode;
}

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const PageLayout: React.FC<LayoutProps> = ({ children }) => {

  // const mainContainer = useRef();
  // const smoother = useRef();

  // const scrollTo = () => {
  //   smoother.current.scrollTo('#About', true, 'center center')
  // }

  return (
    <main id="smooth-wrapper" className="container">
      {/* mobile view */}
      <div className="block md:hidden">
        <div className="sticky top-0 flex justify-between items-center py-2 px-6 bg-black  text-white">
          <div>
            <img
              src="/assets/img/peace-emoji.svg"
              alt="logo"
              width={70}
              height={70}
              className=""
            />
          </div>
          <nav className="">
            <ul className="flex gap-2 text-xs font-bold uppercase text-right">
              <li>
                <Link href="#home">Home </Link>
              </li>
              <li>
                <Link href="#about">About </Link>
              </li>
              <li>
                <Link href="#works">Works </Link>
              </li>
              <li>
                <Link href="#blog">Blog </Link>
              </li>
              <li>
                <Link href="#contact">Contact </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>{children}</div>
      </div>

      {/* web view */}

      <div id="smooth-content" className="hidden md:grid grid-cols-12 bg-black px-10 text-white">
        <div className="sticky top-0 col-span-1 h-screen px-4 py-8 flex flex-col items-center justify-between">
          <div>
            <img
              src="/assets/img/peace-emoji.svg"
              alt="logo"
              width={90}
              height={90}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div>
          <div className="text-[#eb5939] text-lg my-4 grayscale hover:grayscale-0">
              <Link
                href="https://www.linkedin.com/in/edidiong-etok-bb1425189"
                target="_blank"
              >
                LI
              </Link>
            </div>
            <div className="text-[#eb5939] text-lg my-4 grayscale hover:grayscale-0">
              <Link href="https://twitter.com/EdidiongEtok" target="_blank">
                TW
              </Link>
            </div>
            <div className="text-[#eb5939] text-lg my-4 grayscale hover:grayscale-0">
              <Link href="https://github.com/edidee" target="_blank">
                GH
              </Link>
            </div>
            <div className="text-[#eb5939] text-lg my-4 grayscale hover:grayscale-0">
              <Link href="https://medium.com/@edidee" target="_blank">
                MD
              </Link>
            </div>
           
          </div>
        </div>
        <div className="col-span-10">{children}</div>

        <div className="sticky top-0 col-span-1 bg-black text-white h-screen px-4 py-12">
          <nav>
            <ul className="flex flex-col gap-2 text-sm md:text-base font-bold uppercase text-right">
              <li>
                <Link href="#home">Home </Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#works">Works</Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};
