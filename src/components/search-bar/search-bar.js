import React from 'react';

import { ReactComponent as SearchIcon } from 'images/icon_search.svg';

const SearchBar = () => {
  return (
    <div className="d-grid column gap-sm">
      <SearchIcon fill="#ffffff" />
      <input className="flex-grow"></input>
    </div>
  );
};

export default SearchBar;