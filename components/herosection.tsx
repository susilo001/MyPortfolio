"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <div className="flex gap-2 items-center flex-col lg:flex-row">
      <div className="space-y-2">
        <h1 className="text-3xl font-mono">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("<strong>Hello, I&apos;m Susilo Suharsono</strong>")
                .pauseFor(1000)
                .start();
            }}
          />
        </h1>
        <p className="font-mono">Fullstack web developer.</p>
        <p className="font-mono">
          PHP & JavaScript Enthusiast Crafting web experiences with Laravel and
          React.js Turning ideas into code
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
  );
}
