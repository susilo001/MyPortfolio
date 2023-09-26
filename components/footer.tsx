import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="lg:max-w-5xl w-full h-24 border-t py-8 grid lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          <Link href="/">Susilo Suharsono</Link>
        </h3>
        <span>susiloodie@gmail.com</span>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link href="https://github.com/susilo001">
          <SiGithub className="h-[1.5rem] w-[1.5rem] text-[#181717] dark:text-[#E8E8E8]" />
        </Link>
        <Link href="https://www.linkedin.com/in/susilosuharsono/">
          <SiLinkedin className="h-[1.5rem] w-[1.5rem] text-[#0A66C2]" />
        </Link>
      </div>
    </footer>
  );
}
