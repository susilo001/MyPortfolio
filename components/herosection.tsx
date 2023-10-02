"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { GoDotFill, GoSearch, GoFile, GoGitBranch } from "react-icons/go";

export function HeroSection() {
  return (
    <div className="flex lg:justify-between items-center flex-col lg:flex-row gap-8">
      <div className="space-y-2 basis-3/5">
        <h1 className="text-lg lg:text-3xl font-mono">
          <strong>Hi,I&apos;m Susilo Suharsono</strong>
        </h1>
        <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          Fullstack Web Developer.
        </span>
        <p className="font-mono text-sm lg:text-lg text-justify">
          I work with both front-end and back-end technologies. My ultimate goal
          is to transform creative ideas into functional and visually appealing
          web solutions, making the digital world more engaging and efficient
          for users.
        </p>
        <Button asChild size="sm">
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>

      <div className="w-full h-64 lg:w-96 lg:h-64 border-2 rounded-lg shadow-lg basis-2/5">
        <div className="w-full border-b flex justify-end ">
          <Button variant="ghost" size="sm">
            <GoDotFill className="h-2 w-2" />
          </Button>
        </div>
        <div className="flex gap-2 h-3/4">
          <div className="border-r w-1/12 px-4 flex flex-col items-center">
            <Button variant="ghost" size="sm">
              <GoFile className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm">
              <GoSearch className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm">
              <GoGitBranch className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="text-xs">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("console.log('Hello World!');")
                    .deleteAll()
                    .typeString("echo 'Hello World!';")
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full border-t flex justify-end py-1">
          <Button variant="ghost" size="sm" className="h-5">
            <GoDotFill className="h-2 w-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
