import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from "next/router";
import clsx from "clsx";
import { BsBoxArrowDownRight } from "react-icons/bs";

// import {gsap } from "gsap"
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


interface socialsProps {
  title: string;
  href: string;
}
const socials: socialsProps[] = [
  {
    title: "Twitter",
    href: "https://twitter.com/EdidiongEtok",
  },

  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/edidiong-etok-bb1425189",
  },

  {
    title: "Github",
    href: "https://github.com/edidee",
  },

  {
    title: "Medium",
    href: "https://medium.com/@edidee",
  },
];
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

  const [openHamburger, setOpenHamburger] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const openMobileNav = () => {
    setOpenHamburger((prevIsOpen) => !prevIsOpen);
  };

  return (
    <main id="smooth-wrapper" className="container">
      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="sticky top-0 flex justify-between items-center py-2 px-6 bg-black  text-[#B7AB98]">
          <div className="z-30">
            <img
              src="/assets/img/peace-emoji.svg"
              alt="logo"
              width={70}
              height={70}
            />
          </div>
          <button onClick={openMobileNav} className="z-30">
            {openHamburger ? (
              <ImCancelCircle className="w-8 h-8" />
            ) : (
              <FaHamburger className="w-8 h-8" />
            )}
          </button>

          {openHamburger && (
            <nav className="fixed top-0 left-0 z-20 h-screen w-10/12 overflow-hidden bg-black text-white lg:hidden">
              <ul className="flex flex-col items-center justify-center h-screen space-y-4 text-sm font-bold uppercase">
                <li onClick={() => setOpenHamburger(false)}>
                  <Link
                    href="#home"
                    className={clsx(pathname === "/#home" && "text-[#eb5939]")}
                  >
                    Home
                  </Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link
                    href="#about"
                    className={clsx(pathname === "/#about" && "text-[#eb5939]")}
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link
                    href="#works"
                    className={clsx(pathname === "/#works" && "text-[#eb5939]")}
                  >
                    Works
                  </Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link href="#blog">Blog </Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link href="#contact">Contact </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div>{children}</div>
      </div>

      {/* web view */}

      <div
        id="smooth-content"
        className="hidden lg:grid grid-cols-12 bg-black px-10 text-[#B7AB98]"
      >
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
        <div className="col-span-10">{children}
        
        <section
      id="contact"
      className="container bg-black w-full text-[#B7AB98] p-10 "
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase">
        Let&apos;s Connect
      </p>

      <div className="lg:grid lg:grid-cols-2 my-5">
        <div className="col-span-1 md:grid md:grid-cols-2 gap-4 ">
          {socials.map(({ href, title }) => (
            <div key={title} className="flex items-center space-x-5 w-6/12">
              <BsBoxArrowDownRight className="text-[#eb5939]" />
              <Link href={href} className="text-xl">
                {title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-0">
          <div className="text-xl">
            <p>Email:</p>
            <Link href="mailto:etokedidionge@gmail.com" className="text-lg">
              etokedidionge@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Edidiong Etok. All rights reserved
      </div>
    </section>
        </div>

        <div className="sticky top-0 col-span-1 bg-black text-[#B7AB98] h-screen px-4 py-12">
          <nav>
            <ul className="flex flex-col gap-2 text-sm md:text-base font-bold uppercase text-right">
              <li>
                <Link
                  href="/"
                  className={clsx(pathname === "/" && "text-[#eb5939]")}
                >
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={clsx(pathname === "/about" && "text-[#eb5939]")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className={clsx(pathname === "/works" && "text-[#eb5939]")}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={clsx(pathname === "/blog" && "text-[#eb5939]")}
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className={clsx(pathname === "/contact" && "text-[#eb5939]")}
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};
