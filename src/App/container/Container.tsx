import React from "react";
import "./container.css";

import Workspace from "../workspace/Workspace";
import Sidebar from "../sidebar/Sidebar";
import { FiltersProvider } from "../providers/FiltersProvider";

const Container = () => {
  return (
    <FiltersProvider>
      <section className="h-full w-full flex">
        <Workspace />
        <Sidebar />
      </section>
    </FiltersProvider>
  );
};

export default Container;
