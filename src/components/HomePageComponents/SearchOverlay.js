import React from "react";
import { Link } from "react-router-dom";
import "./SearchOverlay.css";

const SearchOverlay = () => {
  const closeSearch = () => {
    document.getElementById("searchOverlay").style.display = "none";
  };
  return (
    <div className="overlay">
      <button className="close-btn" onClick={closeSearch}>
        ×
      </button>
      <h2>Search</h2>
      <input type="text" placeholder="Search..." />
      <div className="overlay-links">
        <Link to="/projects" onClick={closeSearch}>Projects</Link>
      </div>
    </div>
  );
};

export default SearchOverlay;