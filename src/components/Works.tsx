import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
export interface WorksProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export const works: WorksProps[] = [
  {
    title: "NeuRMS",
    description:
      "An enterprise product that help businesses keep record and account (Click to see live demo)",
    imageUrl: "/assets/img/NeuRMSImg.png",
    href: "https://www.neurms.com",
  },
  {
    title: "Scout4job",
    description:
      "An Job search platform for both job seeker and recruiter (Click to see live demo)",
    imageUrl: "/assets/img/scout4jobImg.png",
    href: "https://scout4job.com/",
  },
  {
    title: "Softstructures",
    description:
      "This is a website for a company that offers software services (Click to see live demo)",
    imageUrl: "/assets/img/softstructures.png",
    href: "https://softstructuresweb.netlify.app/",
  },
  {
    title: "Velsta",
    description:
      "A personal website for a company that offers virtual assistance (Click to see live demo)",
    imageUrl: "/assets/img/velsta.png",
    href: "https://velstacompany.com/",
  },
];

export const Works = () => {
  return (
    <section
      id="works"
      className=" bg-black w-full text-white p-10 "
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase text-center lg:text-left">
        What I&apos;ve done
      </p>
      <div className="grid lg:grid-cols-2
       gap-10 mt-5 w-full">
        {works.map(({ href, imageUrl, description, title }, index) => (
          <div
            key={index}
            className={clsx("col-span-1 lg:h- px-6 py-4 rounded-xl bg-white")}
          >
            <Link href={href} target="_blank" className="mx-auto">
              <div className="w-full mx-auto">
                <img
                  src={imageUrl}
                  alt="works"
                  width={500}
                  height={500}
                  className="object-contain aspect-[3/2]"
                />
              </div>
              <div className="mt-2 text-black">
                <p className="font-bold  text-lg">{title}</p>
                <p className="text-sm">{description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
