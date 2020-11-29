import React from "react";
import TopBar from "./top-bar/TopBar";
import SearchBar from "./search-bar/SearchBar";
import { useFilters } from '../../providers/FiltersProvider';

const Header = () => {

  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-500 text-3xl">Discover</div>
      <TopBar />
      <SearchBar />
    </div>
  );
};

export default Header;
