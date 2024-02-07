import { Dispatch, SetStateAction } from "react";
import SearchFilter from "./SearchFilter";

type filtersProps = {
  setSearchFilter: Dispatch<SetStateAction<string>>;
};

export default function Filters(props: filtersProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
      <SearchFilter setSearchFilter={props.setSearchFilter} />
    </div>
  );
}