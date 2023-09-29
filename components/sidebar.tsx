"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Sidebar() {
  const [isDark, setIsDark] = React.useState(false);
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  console.log(isDark);

  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild variant="ghost" size="icon">
          <HiBars3 className="h-[1.5rem] w-[1.5rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">Susilo Suharsono</Link>
          </SheetTitle>
          <SheetDescription>Full Stack Web Developer</SheetDescription>

          <Separator />
          <Link href="/about" className="text-left">
            About
          </Link>
          <Link href="/contact" className="text-left">
            Contact
          </Link>
          <Separator />
          <Link href="/" className="text-left">
            Home
          </Link>
          <Link
            href="https://github.com/susilo001"
            className="flex items-center justify-between w-full"
          >
            Github <SiGithub className="h-[1rem] w-[1rem]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/susilosuharsono/"
            className="flex items-center justify-between w-full"
          >
            LinkedIn <SiLinkedin className="h-[1rem] w-[1rem]" />
          </Link>
          <Separator />
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={toggleTheme}
          >
            {isDark ? "Dark" : "Light"}
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
          </Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
