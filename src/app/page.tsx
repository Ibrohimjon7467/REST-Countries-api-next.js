import { Metadata } from "next";
import CountriesOverview from "./components/CountriesOverview";
import getData from "./libs/getData";
import * as apiResponseTypes from "./libs/types/apiResponseTypes";

export const metadata: Metadata = {
  title: `Countries Overview | REST Countries API`,
  description: "An overview of all countries in the world.",
};

export default async function Overview() {
  const data: apiResponseTypes.Country[] = await getData(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <>
      <CountriesOverview data={data} />
    </>
  );
}
