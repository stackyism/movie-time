import { Filter } from "../types";
import { BASE_URL, API_KEY } from "./constants";

const MoviesAPIKeysMap: Record<string, string> = {
  sort: "sort_by",
  genres: "with_genres",
  startDate: "release_date.gte",
  endDate: "release_date.lte",
  rating: "vote_average.gte",
  ratingLTE: "vote_average.lte",
  keyword: "query",
};
const TvAPIKeysMap: Record<string, string> = {
  sort: "sort_by",
  genres: "with_genres",
  startDate: "air_date.gte",
  endDate: "air_date.lte",
  rating: "vote_average.gte",
  ratingLTE: "vote_average.lte",
  keyword: "query",
};

export const buildQuery = (filters: Filter) => {
  let url = `${BASE_URL}`;
  if (filters.sort === "trending") {
    return url + `trending/${filters.type}/day?api_key=${API_KEY}`;
  }
  if (filters.keyword) {
    return (
      url + `search/${filters.type}?api_key=${API_KEY}&query=${filters.keyword}`
    );
  }
  url =
    url + `discover/${filters.type}?api_key=${API_KEY}&language=en-US&page=1`;
  const filterQueries = Object.entries(filters).reduce((acc, filter) => {
    const [key, value] = filter;
    const apiQueryKey =
      filters.type === "movie" ? MoviesAPIKeysMap[key] : TvAPIKeysMap[key];
    if (apiQueryKey && value && value !== "trending") {
      if (key === "sort") {
        acc = acc + `&${apiQueryKey}=${value}.${filters.order}`;
      } else {
        acc = acc + `&${apiQueryKey}=${value}`;
      }
    }
    return acc;
  }, "");
  return url + filterQueries;
};

export const fetchData = async (filters: Filter) => {
  return await fetch(buildQuery(filters)).then((res) => res.json());
};
