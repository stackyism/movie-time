import React from 'react';
import { StatefulInput } from "baseui/input";
import { Search } from "baseui/icon";

const SearchBar = () => <div className="row-span-1"><StatefulInput endEnhancer={<Search/>}/></div>

export default SearchBar;
