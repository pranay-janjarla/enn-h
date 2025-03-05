import React from "react";
import "./Heading.css"; // Optional: Create a CSS file for styling

const Heading = ({ level, children }) => {
  const Tag = level; // Use the level prop to determine the heading tag

  return <Tag className="heading">{children}</Tag>;
};

export default Heading;
