import React from "react";
import "./ProjectDescription.css";

const ProjectDescription = ({ title, description }) => {
  return (
    <div className="project-description">
      <h3 id="project-title">{title}</h3>
      <p id="project-text">{description}</p>
      <div className="blog-description">
        <h4>Blog Description</h4>
        <p>
          This section provides additional insights and details about the
          project, including challenges faced and solutions implemented.
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;
