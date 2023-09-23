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
import { Badge } from "@/components/ui/badge";
import React from "react";

type githubData = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  topics: string[];
};

async function getGithubData(): Promise<githubData[] | undefined> {
  const res = await fetch("https://api.github.com/users/susilo001/repos", {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Home() {
  const posts = await getGithubData();

  const getLanguageIcon = (language: string) => {
    switch (language) {
      case "PHP":
        return SiPhp;
      case "JavaScript":
        return SiJavascript;
      case "TypeScript":
        return SiTypescript;
      default:
        return SiPhp;
    }
  };

  return (
    <div className="max-w-5xl space-y-20">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl">
          <strong>Hi!, I&apos;m Susilo Suharsono</strong> a full-stack web
          developer. Explore my work and let&rsquo;s collaborate on your next
          project. Whether you&apos;re here to check out my work or discuss
          potential projects, I&apos;m thrilled to connect with you. Feel free
          to reach out, and let&apos;s turn your web development visions into
          reality! I look forward to the opportunity to work together.
        </h1>
      </div>

      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p>Here are some of my projects that I have worked on.</p>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {posts?.map((post, index) => (
            <a
              href={post.html_url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              key={index}
            >
              <div className="space-y-2">
                <h3
                  className={`text-xl font-semibold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
                >
                  {post.name}
                </h3>
                <p className={`max-w-[30ch] text-sm opacity-50`}>
                  {post.description}
                </p>
                <div>
                  {React.createElement(getLanguageIcon(post.language), {
                    className:
                      "h-[1.5rem] w-[1.5rem] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",
                  })}
                </div>
                <div className="flex items-center justify-center gap-2 w-full">
                  {post.topics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p>
          I have experience in building web applications using the following
          technologies.
        </p>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {skills.map((skill, index) => (
            <div
              className="group rounded-lg border border-transparent px-5 py-4 "
              key={index}
            >
              <h3 className={`text-xl font-semibold text-center`}>
                {skill.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  {React.createElement(skill.icon, {
                    className: "h-[2rem] w-[2rem]",
                  })}
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
