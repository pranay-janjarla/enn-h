import React, { useState } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      title: "Hyderabad",
      description: "projects",
      peopleWorked: ["Person A", "Person B"],
      images: [
        "/images/hero.png",
        "/images/victor-wJ4kpIZOjtE-unsplash.jpg",
        "/images/landing-carousel-image-4.png",
      ],
      location: "Hyderabad, India",
    },
    {
      title: "Vijayawada",
      description: "Description for Vijayawada",
      peopleWorked: ["Person C", "Person D"],
      images: [
        "/images/landing-carousel-image-1.png",
        "/images/landing-carousel-image-2.jpg",
        "/images/landing-carousel-image-3.png",
      ],
      location: "Vijayawada, India",
    },
    {
      title: "Vizag",
      description: "Description for Vizag",
      peopleWorked: ["Person E", "Person F"],
      images: [
        "/images/landing-carousel-image-4.png",
        "/images/landing-carousel-image-5.png",
        "/images/landing-carousel-image-6.png",
      ],
      location: "Vizag, India",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-content">
        <ul className="projects-list">
          {places.map((place) => (
            <li
              key={place.title}
              className={`project-item ${
                selectedPlace?.title === place.title ? "active" : ""
              }`}
              onClick={() => setSelectedPlace(place)}
            >
              <h3 className="project-item-title">{place.title}</h3>
            </li>
          ))}
        </ul>

        {selectedPlace ? (
          <div className="project-details">
            <h2 className="project-details-title">{selectedPlace.title}</h2>
            <p className="project-details-description">
              {selectedPlace.description}
            </p>
            <div className="project-details-location">
              {selectedPlace.location}
            </div>

            <div className="project-gallery">
              {selectedPlace.images.map((image, index) => (
                <div key={index} className="gallery-image-container">
                  <img
                    className="gallery-image"
                    src={image}
                    alt={`${selectedPlace.title} scene ${index + 1}`}                   />
                </div>
              ))}
            </div>

            <div className="project-contributors">
              <h4 className="contributors-title">
                People Who Worked On This Project
              </h4>
              <div className="contributors-list">
                {selectedPlace.peopleWorked.map((person, index) => (
                  <span key={index} className="contributor-tag">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🏙️</div>
            <p className="empty-state-text">
              Select a location to view project details
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
