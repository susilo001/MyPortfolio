import { ModeToggle } from "@/components/darkmode";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="lg:max-w-5xl items-center justify-between text-sm flex w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-bold text-xl">
          Susilo Suharsono
        </Link>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button asChild variant="ghost" size="icon">
                <HiBars3 className="h-[1.5rem] w-[1.5rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="https://github.com/susilo001">Github</Link>
                <DropdownMenuShortcut>
                  <SiGithub className="h-[1rem] w-[1rem] " />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="https://www.linkedin.com/in/susilosuharsono/">
                  LinkedIn
                </Link>
                <DropdownMenuShortcut>
                  <SiLinkedin className="h-[1rem] w-[1rem]" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="lg:flex lg:items-center lg:gap-4 hidden">
          <Link href="https://github.com/susilo001">
            <SiGithub className="h-[1.5rem] w-[1.5rem] text-[#181717] dark:text-[#E8E8E8]" />
          </Link>
          <Link href="https://www.linkedin.com/in/susilosuharsono/">
            <SiLinkedin className="h-[1.5rem] w-[1.5rem] text-[#0A66C2]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
