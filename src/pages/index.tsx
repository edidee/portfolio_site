
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <main className="">
     <Hero />
      <About />
      <Works />
      <Blog />
      <Contact />
    </main>
  );
}
