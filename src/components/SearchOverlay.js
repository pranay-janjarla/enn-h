import React from "react";
import "./SearchOverlay.css";

const SearchOverlay = () => {
  return (
    <div className="overlay">
      <button className="close-btn" onClick={() => {}}>
        ×
      </button>
      <h2>Search</h2>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchOverlay;
