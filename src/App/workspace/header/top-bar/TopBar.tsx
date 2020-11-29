import React from "react";
import { useFilters } from "../../../providers/FiltersProvider";
import { Filter } from "../../../../types";

const actions: { id: Filter["sort"]; label: string }[] = [
  { id: "popularity", label: "Popular" },
  { id: "trending", label: "Trend" },
  { id: "release_date", label: "Newest" },
  { id: "vote_average", label: "Top Rated" },
];

const TopBar = () => {
  const { updateFilter, filters } = useFilters();

  return (
    <div className="row-span-1 flex">
      {actions.map((action) => (
        <div
          className={`hover:text-gray-200 ml-4 cursor-pointer ${
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
