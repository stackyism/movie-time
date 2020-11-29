import React, { useCallback, useState } from "react";
import { Select } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { useFilters } from "../providers/FiltersProvider";
import { useGenres } from "../../hooks/useGenres";

const TypesMap = {
  movie: { id: "movie", label: "Movie" },
  tv: { id: "tv", label: "TV Shows" },
};

const years = [2019, 2020];

const Sidebar = () => {
  const { filters, updateFilter } = useFilters();
  const [selectedGenre, setSelectedGenre] = useState();
  const [dates, setDates] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const genres = useGenres();
  const handleChange = useCallback(
    (changeKey, { option }) => {
      updateFilter({ [changeKey]: option.id });
      switch (changeKey) {
        case "genres": {
          return setSelectedGenre(option);
        }
      }
    },
    [filters, updateFilter]
  );
  return (
    <div
      className="flex flex-col h-full flex-1 pr-10"
      style={{ backgroundColor: "#131a20" }}
    >
      <div
        className="grid text-gray-500 flex items-center"
        style={{ gridTemplateRows: "100px calc(100% - 100px)" }}
      >
        DISCOVER OPTIONS
      </div>
      <div>
        <FormControl
          overrides={{ Label: { style: { color: "white" } } }}
          label="Type"
        >
          <Select
            id="genres"
            clearable={false}
            options={Object.values(TypesMap)}
            value={[TypesMap[filters.type]]}
            onChange={handleChange.bind(null, "type")}
            size="compact"
          />
        </FormControl>
        <FormControl
          overrides={{ Label: { style: { color: "white" } } }}
          label="Genre"
        >
          <Select
            clearable
            options={genres}
            labelKey="name"
            searchable={false}
            onChange={handleChange.bind(null, "genres")}
            value={selectedGenre}
            size="compact"
          />
        </FormControl>
        <div className="flex items-end">
          <div>
            <FormControl
              overrides={{ Label: { style: { color: "white" } } }}
              label="Year"
            >
              <Select
                options={years.map((year) => ({
                  id: year,
                  label: String(year),
                }))}
                onChange={handleChange.bind(null, "startDate")}
                size="compact"
              />
            </FormControl>
          </div>
          <div className="mx-4 text-gray-200 self-center">-</div>
          <div>
            <FormControl>
              <Select
                options={years.map((year) => ({
                  id: year,
                  label: String(year),
                }))}
                onChange={handleChange.bind(null, "endDate")}
                size="compact"
              />
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
