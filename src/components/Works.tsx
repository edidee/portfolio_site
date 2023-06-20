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
      "An enterprise product that help businesses keep record and account",
    imageUrl: "/assets/img/NeuRMSImg.png",
    href: "https://www.neurms.com",
  },
  {
    title: "Scout4job",
    description:
      "An enterprise product that help businesses keep record and account",
    imageUrl: "/assets/img/scout4jobImg.png",
    href: "https://scout4job.com/",
  },
  {
    title: "Softstructures",
    description:
      "An enterprise product that help businesses keep record and account",
    imageUrl: "/assets/img/softstructures.png",
    href: "https://softstructuresweb.netlify.app/",
  },
  {
    title: "Velsta",
    description:
      "An enterprise product that help businesses keep record and account",
    imageUrl: "/assets/img/velsta.png",
    href: "https://velstacompany.com/",
  },
];

export const Works = () => {
  return (
    <section
      id="works"
      className="container bg-black lg:h-screen w-full text-white px-20 py-10 "
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase">
        What I&apos;ve done
      </p>
      <div className="flex flex-wrap gap-6 mt-5 w-full">
        {works.map(({ href, imageUrl, description, title }, index) => (
          <div
            key={index}
            className={clsx("w-[500px] lg:h-96 px-6 py-6 rounded-xl bg-white")}
          >
              <Link href={href} className="mx-auto">
            <div className="w-full mx-auto">
                <Image src={imageUrl} alt="works" width={500} height={500} />
            </div>
            <div className="mt-4">
              <p className="font-bold text-black text-lg">{title}</p>
              <p className="text-black text-sm">{description}</p>
            </div>
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
