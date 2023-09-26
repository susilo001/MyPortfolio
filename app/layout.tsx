import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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
          <main className="flex min-h-screen flex-col items-center space-y-10 p-10 lg:p-20 justify-between">
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
