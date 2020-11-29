import React from "react";
import CardComp from "../../components/card/Card";
import { useQuery } from "../../../hooks/useQuery";

const ShowCase = () => {
  const data = useQuery();

  return (
    <div className="flex flex-wrap overflow-y-auto">
      {(data.results || []).map((datum) => (
        <div className="mb-5" key={datum.id}>
          <CardComp
            imageUrl={
              datum.poster_path
                ? `https://image.tmdb.org/t/p/w300${datum.poster_path}`
                : `https://picsum.photos/200/300?random=${Math.random()
                    .toString(36)
                    .substr(2, 9)}`
            }
          >
            <div className="flex flex-col items-center justify-center">
              <div
                className="text-clr01 flex overflow-hidden truncate"
                style={{ maxWidth: "150px" }}
              >
                {/*//@ts-ignore*/}
                {datum.title || datum.name}
              </div>
              <div className="text-gray-500 flex overflow-hidden truncate">
                {/*//@ts-ignore*/}
                {datum.first_air_date || datum.release_date}
              </div>
            </div>
          </CardComp>
        </div>
      ))}
      {!data?.results?.length ? (
        <div className="text-gray-500 text-4xl flex flex-col justify-center items-center">
          Well! You've reached the dead end.
        </div>
      ) : null}
    </div>
  );
};

export default ShowCase;
