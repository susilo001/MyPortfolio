import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { LuUser2, LuCircleDot, LuStar, LuGitFork } from "react-icons/lu";
import { HeroSection } from "@/components/herosection";

type githubData = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  owner: {
    avatar_url: string;
  };
  topics: string[];
  watchers_count: number;
  open_issues_count: number;
  stargazers_count: number;
  forks_count: number;
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

  console.log(posts);

  return (
    <div className="max-w-5xl space-y-20">
      <HeroSection />

      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p>Here are some of my projects that I have worked on.</p>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left">
          {posts?.map((post, index) => (
            <a
              key={index}
              href={post.html_url}
              className={`${
                post.name === "susilo001" ? "hidden" : ""
              } group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
            >
              <div className="space-y-2 w-full">
                <div className="flex items-start gap-6 border-2 p-2 rounded-lg h-48">
                  <div>
                    <h3
                      className={`text-xl font-semibold inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
                    >
                      {post.name}
                    </h3>
                    <p className={`text-xs text-justify opacity-75`}>
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LuUser2 className="h-4 w-4 text-gray-400" />
                        {post.watchers_count}
                      </div>
                      <div className="flex items-center gap-2">
                        <LuCircleDot className="h-4 w-4 text-gray-400" />
                        {post.open_issues_count}
                      </div>
                      <div className="flex items-center gap-2">
                        <LuStar className="h-4 w-4 text-gray-400" />
                        {post.stargazers_count}
                      </div>
                      <div className="flex items-center gap-2">
                        <LuGitFork className="h-4 w-4 text-gray-400" />
                        {post.forks_count}
                      </div>
                    </div>
                  </div>
                  <Image
                    src={post.owner.avatar_url}
                    width={50}
                    height={50}
                    alt="illustration"
                    className="rounded-lg"
                  />
                </div>

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
