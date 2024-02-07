import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <div className="min-h-screen dark:bg-[#202C36] flex flex-col justify-between bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
          <div>
            <Navbar />
            <main className="h-full w-full max-w-[1440px] px-4 sm:px-12 lg:px-20 mt-6 sm:mt-9 lg:mt-12 mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
