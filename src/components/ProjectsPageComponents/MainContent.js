import React from "react";
import ProjectDescription from "./ProjectDescription";
import Slideshow from "./Slideshow";
import PeopleWorkedOnProject from "./PeopleWorkedOnProject";

const MainContent = ({ images, description, title, peopleWorked }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <ProjectDescription title={title} description={description} />
      <Slideshow images={images} description={description} />
      <PeopleWorkedOnProject people={peopleWorked} />
      <PeopleWorkedOnProject />
    </div>
  );
};

export default MainContent;
