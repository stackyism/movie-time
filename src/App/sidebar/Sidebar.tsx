import React from "react";
import { StatefulInput } from "baseui/input";
import { StatefulSelect } from "baseui/select";
import { FormControl } from "baseui/form-control";

const types = [
  { id: "movie", label: "Movies" },
  { id: "tv", label: "Tv Shows" },
];

const genres = [
  { id: "action", label: "Action" },
  { id: "romantic", label: "Romantic" },
];

const years = [2019,2020];

const Sidebar = () => {
  return (
    <div
      className="flex flex-col h-full flex-1"
      style={{ backgroundColor: "#131a20" }}
    >
      <div
        className="grid text-gray-500 flex items-center"
        style={{ gridTemplateRows: "100px calc(100% - 100px)" }}
      >
        Discover Options
      </div>
      <div>
        <FormControl
          overrides={{ Label: { style: { color: "white" } } }}
          label="Type"
        >
          <StatefulSelect options={types} />
        </FormControl>
        <FormControl
          overrides={{ Label: { style: { color: "white" } } }}
          label="Genre"
        >
          <StatefulSelect options={genres} />
        </FormControl>
        <FormControl
          overrides={{ Label: { style: { color: "white" } } }}
          label="Year"
        >
          <StatefulSelect options={years.map(year => ({id : year, label : String(year)}))} />
        </FormControl>
      </div>
    </div>
  );
};

export default Sidebar;
