import React from "react";
import Sidebar from "./Sidebar";
import Slideshow from "./Slideshow";
import ProjectDescription from "./ProjectDescription";
import PeopleWorkedOnProject from "./PeopleWorkedOnProject";

const ProjectsPage = ({ selectedPlace, onSelectPlace, places }) => {
  return (
    <div className="container-projects-page">
      <Sidebar places={places} onSelectPlace={onSelectPlace} />
      <div className="content">
        <Slideshow />
        <ProjectDescription />
        <PeopleWorkedOnProject />
      </div>
    </div>
  );
};

export default ProjectsPage;
