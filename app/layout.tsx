import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/darkmode";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

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
          <main className="flex min-h-screen flex-col items-center space-y-10 p-20">
            <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <div className="flex items-center gap-4">
                <Link href="/" className="font-bold text-xl">
                  Susilo Suharsono
                </Link>
                <Navbar />
              </div>
              <div className="flex items-center gap-4">
                <ModeToggle />
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/susilo001">
                    <FaGithub className="h-[1.2rem] w-[1.2rem] text-gray-500 dark:text-gray-400" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/susilosuharsono/">
                    <FaLinkedin className="h-[1.2rem] w-[1.2rem] text-gray-500 dark:text-gray-400" />
                  </Link>
                </div>
              </div>
            </div>
            {children}
            <footer className="flex items-center justify-center w-full max-w-5xl h-24 border-t">
              <div className="flex items-center justify-center space-x-4">
                <Link
                  href=" 
                  https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                >
                  Powered by{" "}
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="text-slate-50"
                    width={72}
                    height={16}
                  />
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
