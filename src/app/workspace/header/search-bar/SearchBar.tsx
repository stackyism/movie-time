import React, { useCallback } from 'react';
import { StatefulInput } from "baseui/input";
import { Search } from "baseui/icon";
import { useFilters } from '../../../providers/FiltersProvider';

const debounce = (callbackFn: Function, delay: number) => {
  let timerId: NodeJS.Timeout | undefined;
  return function() {
    const args = arguments;
    //@ts-ignore
    clearTimeout(timerId);
    timerId = setTimeout(() => callbackFn.apply(null, args), delay)
  }
}

const SearchBar = () => {
  const {updateFilter} = useFilters();
  //@ts-ignore
  const onChange = useCallback((event) => {
    console.log(updateFilter({ keyword :  event.target?.value?.replace(/ /g, '+') }));
  } , [updateFilter]);
  return (
    <div className="row-span-1">
      <StatefulInput onChange={debounce(onChange, 200)} size="compact" endEnhancer={<Search />} />
    </div>
  );
};

export default SearchBar;
