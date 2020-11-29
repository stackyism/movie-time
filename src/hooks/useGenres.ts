import { useEffect, useState, useMemo } from "react";
import { useFilters } from "../app/providers/FiltersProvider";
import { MOVIE_GENRES_URL, TV_GENRES_URL } from "../api/constants";

const useMovieGenres = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  useEffect(() => {
    fetch(MOVIE_GENRES_URL)
      .then((res) => res.json())
      .then(setMovieGenres);
  }, []);
  return movieGenres;
};
const useTVGenres = () => {
  const [tvGenres, setTvGenres] = useState([]);
  useEffect(() => {
    fetch(TV_GENRES_URL)
      .then((res) => res.json())
      .then(setTvGenres);
  }, []);
  return tvGenres;
};
export const useGenres = () => {
  const { filters } = useFilters();
  const movieGenres = useMovieGenres();
  const tvGenres = useTVGenres();

  return useMemo(() => (filters.type === "movie" ? movieGenres : tvGenres), [
    movieGenres,
    tvGenres,
    filters.type,
  ]);
};
