import React from "react";
import Link from "next/link";

const articles = [
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
      className="container bg-black h-screen w-full text-white p-10 "
    >
      <p className="text-sm md:text-lg tracking-[0.4em] uppercase">
        I&apos;ve written about
      </p>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-5">
        {articles.map(({ description, href, title, language }) => (
          <div key={href} className=" bg-white text-black  p-12 hover:shadow-xl col-span-1">
            <Link href={href}>
              <p className="">{language}</p>
              <p className="font-bold text-4xl my-2">{title}</p>
              <p>{description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
