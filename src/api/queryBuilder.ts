import { Filter } from "../types";

const APIKeysMap: Record<string, string> = {
  sort: "sort_by",
  genres: "with_genres",
  startDate: "release_date.gte",
  endDate: "release_date.lte",
  rating: "vote_average.gte",
};

const BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = "3a94078fb34b772a31d9a1348035bed7";

export const buildQuery = (filters: Filter) => {
  let url = `${BASE_URL}`;
  if (filters.sort === "trending") {
    return url + `trending/${filters.type}/day?api_key=${API_KEY}`;
  }
  url = url + `discover/${filters.type}?api_key=${API_KEY}&language=en-US&page=1`;
  const filterQueries = Object.entries(filters).reduce((acc, filter) => {
    const [key, value] = filter;
    const apiQueryKey = APIKeysMap[key];
    if (apiQueryKey && value !== 'trending') {
      acc = `&${apiQueryKey}=${value}`;
    }
    return acc;
  }, "");
  return url + filterQueries;
};

export const fetchData = async (filters: Filter) => {
  return await fetch(buildQuery(filters)).then((res) => res.json());
};
