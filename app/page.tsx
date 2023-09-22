import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiExpress,
} from "react-icons/si";

import React from "react";

export default function Home() {
  return (
    <div className="max-w-5xl space-y-10">
      <p className="text-2xl">
        <strong>Hi!, I&apos;m Susilo Suharsono</strong> a full-stack web
        developer. I specialize in creating functional and elegant websites and
        web applications. Explore my work and let&rsquo;s collaborate on your
        next project. Whether you&apos;re here to check out my work or discuss
        potential projects, I&apos;m thrilled to connect with you. Feel free to
        reach out, and let&apos;s turn your web development visions into
        reality! I look forward to the opportunity to work together.
      </p>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {contents.map((content, index) => (
            <a
              href="#"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              key={index}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {content.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {content.description}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Skills</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {skills.map((skill, index) => (
            <a
              href="#"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <h2 className={`text-2xl font-semibold text-center`}>
                {skill.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  {React.createElement(skill.icon, {
                    className: "h-[2rem] w-[2rem]",
                  })}
                </span>
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const contents = [
  {
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
    href: "https://nextjs.org/docs",
  },
  {
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
    href: "https://nextjs.org/learn",
  },
  {
    title: "Examples",
    description: "Discover and deploy boilerplate example Next.js projects.",
    href: "#",
  },
  {
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
    href: "#",
  },
  {
    title: "Next.js Conf",
    description: "Watch talks by the creators of Next.js in a virtual event.",
    href: "#",
  },
  {
    title: "Examples",
    description: "Discover and deploy boilerplate example Next.js projects.",
    href: "#",
  },
  {
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
    href: "#",
  },
  {
    title: "Next.js Conf",
    description: "Watch talks by the creators of Next.js in a virtual event.",
    href: "#",
  },
];

const skills = [
  {
    title: "PHP",
    icon: SiPhp,
  },
  {
    title: "Javascript",
    icon: SiJavascript,
  },
  {
    title: "Typescript",
    icon: SiTypescript,
  },
  {
    title: "Laravel",
    icon: SiLaravel,
  },
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "NodeJS",
    icon: SiNodedotjs,
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    title: "ExpressJS",
    icon: SiExpress,
  },
];
