import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Sidebar.css";

const Sidebar = ({ onSelectPlace, places }) => {
  return (
    <aside className="sidebar">
      <Link to="/">
        <h2>Enhance</h2>
      </Link>
      <ul className="sidebar-list">
        <li onClick={() => onSelectPlace("Hyderabad")}>Hyderabad</li>
        <li onClick={() => onSelectPlace("Vijayawada")}>Vijayawada</li>
        <li onClick={() => onSelectPlace("Vizag")}>Vizag</li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
