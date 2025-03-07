import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Slideshow from "./Slideshow";
import ProjectDescription from "./ProjectDescription";
import PeopleWorkedOnProject from "./PeopleWorkedOnProject";

const ProjectsPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setPlaces(data);
        if (data.length > 0) {
          setSelectedPlace(data[0]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className="container-projects-page">
      <h1 onClick={() => navigate("/")}>Enhance</h1>
      <div className="main-content">
        <Sidebar places={places} onSelectPlace={setSelectedPlace} />
        <div className="content">
          {selectedPlace && (
            <>
              <Slideshow images={selectedPlace.images} />
              <ProjectDescription
                title={selectedPlace.title}
                description={selectedPlace.description}
                location={selectedPlace.location}
              />
              <PeopleWorkedOnProject people={selectedPlace.peopleWorked} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
