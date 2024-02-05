import React from 'react'

function Search() {
  return (
    <div className="d-flex ml-auto mt-4 " role="search">
      <input
        className="form-control p-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        
      />
    </div>
  );
}

export default Search;