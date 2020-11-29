import React, { useCallback, useEffect, useState } from "react";
import CardComp from "../../components/card/Card";
import { useFilters } from "../../providers/FiltersProvider";
import { buildQuery, fetchData } from "../../../api/queryBuilder";
import { APIResponse } from "../../../types";

const movies = [
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
  {
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71VkjnT9UvL._SY550_.jpg",
    name: "Wake up sid",
  },
];
const ShowCase = () => {
  const { filters } = useFilters();
  const [data, setData] = useState<APIResponse>({});

  useEffect(() => {
    fetchData(filters).then(setData);
  }, [filters, setData]);

  console.log("wow data", data);
  return (
    <div className="flex flex-wrap overflow-y-auto">
      {(data.results || []).map((movie) => (
        <div className="mb-5" key={movie.id}>
          <CardComp
            imageUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          >
            <div className="flex flex-col">
              <div
                className="text-clr01 flex overflow-hidden truncate"
                style={{ maxWidth: "150px" }}
              >
                {movie.title}
              </div>
            </div>
          </CardComp>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
