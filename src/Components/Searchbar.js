import React from 'react';
import '../css/Searchbar.css';

const Searchbar = () => {
  return(
    <div className="search-container">
      <form action="#">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Searchbar;