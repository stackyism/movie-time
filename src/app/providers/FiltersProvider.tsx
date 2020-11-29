import React, { useCallback, useContext, useState } from "react";
import { Filter } from "../../types";

const DEFAULT_FILTERS: Filter = {
  order: "desc",
  type: "movie",
  sort: "popularity",
};

export const FiltersContext = React.createContext<{
  filters: Filter;
  updateFilter: React.Dispatch<React.SetStateAction<Partial<Filter>>>;
}>({
  filters: DEFAULT_FILTERS,
  updateFilter: () => DEFAULT_FILTERS,
});

export const FiltersProvider: React.FC = (props) => {
  const [filters, setFilters] = useState<Filter>(DEFAULT_FILTERS);
  const updateFilter = useCallback(
    (newFilter) => {
      setFilters({ ...filters, ...newFilter });
    },
    [setFilters, filters]
  );
  const filterValues = React.useMemo(() => ({ filters, updateFilter }), [
    filters,
    updateFilter,
  ]);

  return (
    <FiltersContext.Provider value={filterValues}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
