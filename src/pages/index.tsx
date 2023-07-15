import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="">
      <div className="block lg:hidden">

      <Hero />
      <About />
      <Works />
      <Blog />
      <Contact />
      </div>

      <div className="hidden lg:block">
      <Hero />

      </div>
    </main>
  );
}
