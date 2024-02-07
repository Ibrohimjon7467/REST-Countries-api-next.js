"use client";

import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import { MdClose, MdSearch } from "react-icons/md";

type searchFilterProps = {
  setSearchFilter: Dispatch<SetStateAction<string>>;
};

export default function SearchFilter(props: searchFilterProps) {
  const [filterText, setFilterText] = useState("");

  const handleChange = (text: string) => {
    setFilterText(text);
  };

  useEffect(() => props.setSearchFilter(filterText), [filterText]);

  const searchBox = useRef<any>();

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (searchBox.current === document.activeElement && e.key === "Escape") {
        setFilterText("");
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  });

  return (
    <div className="relative">
      <MdSearch className="absolute dark:text-white h-4 sm:h-5 w-4 sm:w-5 text-light-text dark:text-dark-input top-4 sm:top-[1.15rem] left-4" />
      <input type="text" placeholder="Search for a country..." value={filterText}
        onChange={(e) => handleChange(e.target.value)} ref={searchBox}
        className="h-12 dark:bg-[#2B3844] dark:text-white sm:h-[3.5rem] w-full sm:w-[20.5rem] lg:w-[30rem] bg-light-elements dark:bg-dark-elements shadow-md shadow-box-shadow rounded-[0.3125rem] px-11 sm:px-[3.2rem] text-xs sm:text-sm text-light-input dark:text-dark-input placeholder:dark:text-dark-input"
      />
      {filterText !== "" && (
        <MdClose onClick={() => setFilterText("")} aria-label="Clear search"
          className="absolute h-4 sm:h-5 w-4 sm:w-5 text-light-input dark:text-dark-input right-4 top-4 sm:top-[1.15rem] hover:text-red-700 dark:hover:text-red-700 hover:scale-150 cursor-pointer transition-transform"
        />
      )}
    </div>
  );
}
