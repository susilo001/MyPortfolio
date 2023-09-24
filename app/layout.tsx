import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/darkmode";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
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

const inter = Inter({ subsets: ["latin"], adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Susilo Suharsono",
  description: "Susilo Suharsono's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center space-y-10 p-10 lg:p-20">
            <div className="lg:max-w-5xl items-center justify-between text-sm flex w-full">
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
                      <Button variant="ghost" size="sm">
                        <HiBars3 className="h-[1.5rem] w-[1.5rem] text-[#181717] dark:text-[#E8E8E8]" />
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
            </div>
            {children}
            <footer className="lg:max-w-5xl w-full h-24 border-t py-8 grid lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">
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
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
