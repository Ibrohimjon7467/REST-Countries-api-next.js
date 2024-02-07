"use client";

import React from "react";
import BackButton from "./components/BackButton";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function error() {
  return (
    <div className="h-[25vh] flex flex-col justify-center items-center">
      <MdOutlineErrorOutline className="w-10 h-10 mb-2" />
      <h2 className="text-2xl mb-12">An error occurred.</h2>
      <BackButton />
    </div>
  );
}
