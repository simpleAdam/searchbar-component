import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="searchbox">
      <input aria-label="search-input" type="text" className="searchbar" placeholder="Search..." />
    </div>
  );
}

export default Search;
