import React from "react";
import TopBar from "./top-bar/TopBar";
import SearchBar from "./search-bar/SearchBar";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-300 text-4xl font-thin">Discover</div>
      <TopBar />
      <SearchBar />
    </div>
  );
};

export default Header;
