import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from 'images/icon_search.svg';

const SearchBar = (props) => {
  const [isFocused, setFocus] = useState(props.isFocused || false);

  const onInputFocus = (evt) => {
    setFocus(true);
  };

  const onInputBlur = (evt) => {
    setFocus(false);
  };

  const searchBarClasses = "searchBar d-flex p-a-1"
    + `${isFocused ? " focus" : ""}`;

  return (
    <div className={searchBarClasses}>

      <SearchIcon fill="#ffffff" />
      <input type="text"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
    </div>
  );
};

export default SearchBar;