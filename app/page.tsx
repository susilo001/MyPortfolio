import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

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
      revalidate: 1300,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Home() {
  const posts = await getGithubData();

  return (
    <div className="max-w-5xl space-y-20">
      <div className="flex gap-2 items-center flex-col lg:flex-row">
        <div className="space-y-2">
          <h1 className="text-3xl font-mono">
            <strong>Hello, I&apos;m Susilo Suharsono</strong>
          </h1>
          <p className="font-mono">Fullstack web developer.</p>
          <p className="font-mono">
            PHP & JavaScript Enthusiast Crafting web experiences with Laravel
            and React.js Turning ideas into code
          </p>
          <Button asChild>
            <Link href="/contact">Contact me</Link>
          </Button>
        </div>
        <Image
          src="https://picsum.photos/200"
          alt="illustration"
          width={200}
          height={200}
        />
      </div>

      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p>Here are some of my projects that I have worked on.</p>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {posts?.map((post, index) => (
            <a
              href={post.html_url}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              key={index}
            >
              <div className="space-y-2 w-full">
                <h3
                  className={`text-xl font-semibold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
                >
                  {post.name}
                </h3>
                <p className={`text-sm text-justify opacity-75`}>
                  {post.description}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <Icon
                    iconName={post.language}
                    className="h-[2rem] w-[2rem]"
                  />
                  {post.topics.map((topic, index) => (
                    <Icon
                      key={index}
                      iconName={topic}
                      className="h-[2rem] w-[2rem]"
                    />
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
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
          {skills.map((skill, index) => (
            <div
              className="group rounded-lg border border-transparent px-5 py-4 "
              key={index}
            >
              <h3 className={`text-lg font-semibold`}>
                {skill.title}{" "}
                <span>
                  <Icon iconName={skill.title} className="h-[2rem] w-[2rem]" />
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
  },
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "Laravel",
  },
  {
    title: "ReactJS",
  },
  {
    title: "NodeJS",
  },
  {
    title: "NextJS",
  },
  {
    title: "TailwindCSS",
  },
  {
    title: "ExpressJS",
  },
  {
    title: "Docker",
  },
];
