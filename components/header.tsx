import { ModeToggle } from "@/components/darkmode";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="lg:max-w-5xl items-center justify-between text-sm flex w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-xl lg:text-2xl">
          Susilo Suharsono
        </Link>
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <Sidebar />
        </div>
        <div className="lg:flex lg:items-center  hidden">
          <ModeToggle />
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
      </div>
    </header>
  );
}
