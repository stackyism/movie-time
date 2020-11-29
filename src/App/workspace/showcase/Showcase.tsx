import React  from "react";
import CardComp from "../../components/card/Card";
import { useQuery } from "../../../hooks/useQuery";

const ShowCase = () => {
  const data = useQuery();

  console.log("wow data", data);
  return (
    <div className="flex flex-wrap overflow-y-auto">
      {(data.results || []).map((datum) => (
        <div className="mb-5" key={datum.id}>
          <CardComp
            imageUrl={
              datum.poster_path
                ? `https://image.tmdb.org/t/p/w300${datum.poster_path}`
                : `https://picsum.photos/200/300?random=${Math.random().toString(36).substr(2, 9)}`
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
            </div>
          </CardComp>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
