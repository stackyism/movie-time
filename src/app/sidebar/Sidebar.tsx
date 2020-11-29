import React, { useCallback, useState } from "react";
import { Select } from "baseui/select";
import { StarRating } from "baseui/rating";
import { FormControl } from "baseui/form-control";
import { useFilters } from "../providers/FiltersProvider";
import { useGenres } from "../../hooks/useGenres";
import { useYears } from "../../hooks/useYears";

const TypesMap = {
  movie: { id: "movie", label: "Movie" },
  tv: { id: "tv", label: "TV Shows" },
};

const Sidebar = () => {
  const { filters, updateFilter } = useFilters();
  const [selectedGenre, setSelectedGenre] = useState();
  const { yearOptions, setDates, dates } = useYears();
  const genres = useGenres();

  const handleChange = useCallback(
    (changeKey, { option, value }) => {
      switch (changeKey) {
        case "type": {
          setSelectedGenre(undefined);
          return updateFilter({ type: option?.id, genres: undefined });
        }
        case "genres": {
          updateFilter({ [changeKey]: option?.id });
          return setSelectedGenre(value);
        }
        case "startDate":
        case "endDate":
          updateFilter({
            [changeKey]: option?.id ? `${option.id}-01-01` : undefined,
          });
          return setDates({ [changeKey]: value });
        case "rating":
          return updateFilter({ rating: value, ratingLTE: value });
        default:
          return updateFilter({ [changeKey]: option?.id });
      }
    },
    [filters, updateFilter, setDates]
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
            id="genres"
            options={genres}
            labelKey="name"
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
                options={yearOptions}
                value={dates.startDate}
                onChange={handleChange.bind(null, "startDate")}
                size="compact"
              />
            </FormControl>
          </div>
          <div className="mx-4 text-gray-200 self-center">-</div>
          <div>
            <FormControl>
              <Select
                options={yearOptions}
                value={dates.endDate}
                onChange={handleChange.bind(null, "endDate")}
                size="compact"
              />
            </FormControl>
          </div>
        </div>
        <FormControl
          label="Rating"
          overrides={{ Label: { style: { color: "white" } } }}
        >
          <StarRating
            numItems={5}
            onChange={handleChange.bind(null, "rating")}
            size={22}
            value={filters.rating}
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Sidebar;
