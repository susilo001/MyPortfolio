import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="lg:max-w-5xl w-full h-24 border-t justify-center py-4 grid sm:grid-cols-2 gap-2">
      <div className="flex flex-col items-center justify-center sm:items-start">
        <h3 className="lg:text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          <Link href="/">Susilo Suharsono</Link>
        </h3>
        <span className="text-sm">susiloodie@gmail.com</span>
      </div>

      <div className="flex items-center justify-center sm:justify-end">
        <Button size="icon" variant="ghost">
          <Link href="https://github.com/susilo001">
            <SiGithub className="h-[1.5rem] w-[1.5rem] text-[#181717] dark:text-[#E8E8E8]" />
          </Link>
        </Button>
        <Button size="icon" variant="ghost">
          <Link href="https://www.linkedin.com/in/susilosuharsono/">
            <SiLinkedin className="h-[1.5rem] w-[1.5rem] text-[#0A66C2]" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
