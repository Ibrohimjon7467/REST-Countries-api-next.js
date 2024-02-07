"use client";

import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} aria-label="Back button"
      className="flex justify-between items-center px-6 sm:px-8 w-[6.5rem] dark:bg-[#2B3844]  dark:text-white h-8 sm:w-[7.5rem] sm:h-9 md:w-[8.5rem] md:h-10 bg-light-elements dark:bg-dark-elements rounded-[0.3125rem] shadow-md shadow-box-shadow hover:scale-105 text-sm md:text-base"
    >
      <MdArrowBack className="h-4 md:h-6 w-4 md:w-6" />
      Back
    </button>
  );
}
