"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { Editor } from "./editor";

export function HeroSection() {
  return (
    <div className="flex lg:justify-between items-center flex-col lg:flex-row gap-8">
      <div className="space-y-2 max-w-lg">
        <h1 className="text-3xl font-mono">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("<strong>Hello, I&apos;m Susilo Suharsono</strong>")
                .typeString(
                  "<span class='bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text'> a Fullstack Web Developer.</span>"
                )
                .pauseFor(1000)
                .start();
            }}
          />
        </h1>
        <p className="font-mono">
          I work with both front-end and back-end technologies. My ultimate goal
          is to transform creative ideas into functional and visually appealing
          web solutions, making the digital world more engaging and efficient
          for users.
        </p>
        <Button asChild>
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
      <Editor />
    </div>
  );
}
