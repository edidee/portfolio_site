import React from "react";
import Link from "next/link";
import { LuMousePointerClick } from "react-icons/lu";
interface ArticleProps {
  title: string;
  description: string;
  href: string;
  language: string;
}

const articles: ArticleProps[] = [
  {
    title: "Routing in React",
    description: "Learn how to route pages in React",
    href: "https://medium.com/shecodeafrica/routing-in-react-b9853d0d9f8e",
    language: "React",
  },
  {
    title: "Core Concept of React Query",
    description: "Learn the key concepts of React Query",
    href: "https://medium.com/dev-genius/core-concepts-of-react-query-567c91035331",
    language: "React",
  },
  {
    title: "How to Interact With an API from a Vue.js Application",
    description: "Learn how to use Apis with Vue.js Framework",
    href: "https://www.section.io/engineering-education/how-to-interact-with-an-api-from-a-vuejs-application/",
    language: "Vue",
  },
  {
    title: "How to build a task manager with Angular",
    description: "Learn how to build a task manager with Angular",
    href: "https://www.section.io/engineering-education/how-to-build-a-task-manager-with-angular/",
    language: "Angular",
  },
];

export const Blog = () => {
  return (
    <section
      id="blog"
      className=" bg-black w-full text-white p-10 "
    >
      <div className="mt-[50px] lg:mt-[70px]">

      <p className="text-xs md:text-sm tracking-[0.4em] uppercase">
        I&apos;ve written about
      </p>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-5">
        {articles.map(({ description, href, title, language }) => (
          <div
            key={href}
            className=" bg-white text-black p-12 col-span-1 transition md:group-hover:opacity-50 md:hover:scale-[1.04] hover:shadow-[0 26px 49px rgba(0,0,0,.08)] md:hover:opacity"
          >
            <Link href={href}>
              <p className="text-gray-400">{language}</p>
              <p className="font-bold text-4xl my-2">{title}</p>
              <div className="flex items-center space-x-4">
                <p>{description}</p>
                <LuMousePointerClick />
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
