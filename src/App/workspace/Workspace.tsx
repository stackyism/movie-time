import React from "react";
import Header from "./header/Header";
import Showcase from "./showcase/Showcase";

const Workspace = () => {
  return (
    <div
      className="flex-1 grid row-span-6 px-10"
      style={{
        gridTemplateRows: "100px calc(100% - 100px)",
        backgroundColor: "#131a20",
        flexGrow: 5,
      }}
    >
      <Header />
      <Showcase />
    </div>
  );
};

export default Workspace;
