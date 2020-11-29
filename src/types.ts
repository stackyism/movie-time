export type Filter = {
  order?: "asc" | "desc";
  type: "movie" | "tv";
  sort: "popularity" | "release_date" | "vote_average" | "trending";
  genres?: string;
  startDate?: Date;
  endDate?: Date;
  rating?: number;
};

export type Result = Partial<{
  original_title: string;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  release_date: string;
  title: string;
  popularity: number;
  adult: boolean;
  id: number;
  overview: string;
  genre_ids: number[];
  backdrop_path: string;
  original_language: string;
}>;

export type APIResponse = Partial<{
  total_results: number;
  page: number;
  total_pages: number;
  results: Result[];
}>;
