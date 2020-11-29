import React from "react";
import { useFilters } from "../../../providers/FiltersProvider";
import { Filter } from "../../../../types";

const actions: { id: Filter["sort"]; label: string }[] = [
  { id: "popularity", label: "POPULAR" },
  { id: "trending", label: "TREND" },
  { id: "release_date", label: "NEWEST" },
  { id: "vote_average", label: "TOP RATED" },
];

const TopBar = () => {
  const { updateFilter, filters } = useFilters();

  return (
    <div className="row-span-1 flex">
      {actions.map((action) => (
        <div
          className={`hover:text-gray-200 ml-4 cursor-pointer font-extrabold ${
            filters.sort === action.id ? "text-white" : "text-clr01"
          }`}
          onClick={() => updateFilter({ sort: action.id })}
        >
          {action.label}
        </div>
      ))}
    </div>
  );
};

export default TopBar;
