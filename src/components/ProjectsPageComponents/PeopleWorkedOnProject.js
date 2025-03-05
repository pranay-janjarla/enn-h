import React from "react";

const PeopleWorkedOnProject = () => {
  return (
    <div className="people-worked-on-the-project">
      <h1
        style={{ color: "rgb(46, 45, 45)" }}
        className="people-worked-on-the-project-heading"
      >
        People worked on the project
      </h1>
      <div>
        <img
          className="people-image-in-project"
          src="./images/fotis-fotopoulos--R_LZNfPeWM-unsplash.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="people-image-in-project"
          src="./images/jossuha-theophile-U2JgZnfAEBE-unsplash.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="people-image-in-project"
          src="./images/justin-chrn-DaQcLTlz83k-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PeopleWorkedOnProject;
