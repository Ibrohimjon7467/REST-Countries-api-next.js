"use client";

import Link from "next/link";

import DarkMode from './DarkMode'

export default function Navbar() {

  return (
    <div className="relative dark:bg-slate-[#2B3844] w-full h-20 bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow">
      <nav className="max-w-[1440px] px-4 sm:px-12 lg:px-20 h-full flex justify-between items-center mx-auto">
        <Link href="/" aria-label="Home">
          <h1 className="text-sm sm:text-2xl dark:text-white font-extrabold hover:scale-105 transition-transform">
            Where in the world?
          </h1>
        </Link>
        <DarkMode />
      </nav>
    </div>
  );
}
