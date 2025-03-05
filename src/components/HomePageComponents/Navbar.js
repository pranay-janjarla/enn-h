import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const openSearch = () => {
    
    document.getElementById("searchOverlay").style.display = "flex";
  };

  const closeSearch = () => {
    
    document.getElementById("searchOverlay").style.display = "none";
  };

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <div className="logo">Enhance</div>
        </a>
        <div className="nav-links">
          <button
            onClick={openSearch}
            className="search-button"
            aria-label="Open Search"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/nav-icon.png"}
              alt="Search Icon"
            />
          </button>
        </div>
      </nav>

      <div id="searchOverlay" className="overlay">
        <span className="close-btn" onClick={closeSearch}>
          &times;
        </span>
        <div className="section1">
          <div className="top-arrow">
            <p>People</p>
            <a href="/people">
              <img
                className="top-arrow-img"
                src="./images/Screenshot 2025-01-31 191040-Photoroom.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="section2">
          {/* Removed link to navigate to ProjectsPage */}
          <div className="left-arrow">
            <a
              href="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              <img
                className="left-arrow-img"
                src="./images/Screenshot 2025-01-31 191040-Photoroom.png"
                alt=""
              />
            </a>
            <p>Projects</p>
          </div>
          <input type="text" placeholder="search" className="search" />
          <div className="right-arrow">
            <a href="/">
              <img
                className="right-arrow-img"
                src="./images/Screenshot 2025-01-31 191040-Photoroom.png"
                alt=""
              />
            </a>
            <p>Home</p>
          </div>
        </div>
        <div className="section3">
          <div className="bottom-arrow">
            <img
              className="bottom-arrow-img"
              src="./images/Screenshot 2025-01-31 191040-Photoroom.png"
              alt=""
            />
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
