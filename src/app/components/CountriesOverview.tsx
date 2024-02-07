"use client";

import { useEffect, useState } from "react";
import * as apiResponseTypes from "../libs/types/apiResponseTypes";
import CountryCard from "./CountryCard";
import Filters from "./Filters";

type countriesOverviewProps = {
  data: apiResponseTypes.Country[];
};

export default function CountriesOverview({ data }: countriesOverviewProps) {
  const [toTopVisible, setToTopVisible] = useState(false);

  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
          setToTopVisible(true);
          return;
        }
        setToTopVisible(false);
      }),
    []
  );

  const [regionFilter, setRegionFilter] = useState("");
  const countriesFilteredByRegion = data.filter((country) =>
    country.region.includes(regionFilter)
  );


  const [searchFilter, setSearchFilter] = useState("");
  const countriesFilteredByRegionAndSearch = countriesFilteredByRegion.filter(
    (country) => country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const countriesToRender = countriesFilteredByRegionAndSearch.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Filters setSearchFilter={setSearchFilter} />
      {countriesToRender?.length ? (
        <div className="my-6 sm:my-9 dark:text-white lg:my-12 flex flex-wrap justify-center gap-8 xl:gap-10 2xl:gap-[4.6rem]">
          {countriesToRender.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital = { country?.capital === undefined ? "-" : country.capital[0] }
            />
          ))}
        </div>
      ) : (
        <p className="w-full my-6 sm:my-9 lg:my-12 text-center text-lg">
          {`No country with a name containing '${searchFilter}' was found${
            regionFilter === ""
              ? "."
              : regionFilter === "Americas" || regionFilter === "Antarctic"
              ? ` in the ${regionFilter}.`
              : ` in ${regionFilter}.`
          }`}
        </p>
      )}
      {toTopVisible}
    </div>
  );
}
