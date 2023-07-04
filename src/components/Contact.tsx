import Link from "next/link";
import React from "react";
import { BsBoxArrowDownRight } from "react-icons/bs";
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

export const Contact = () => {
  return (
    <section
      id="contact"
      className="container bg-black w-full text-white p-10 "
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
  );
};
