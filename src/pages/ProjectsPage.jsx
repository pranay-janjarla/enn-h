import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include any other headers you might need
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const responseData = await response.json();
        
        // Check if the data property exists in the response
        if (responseData.success && responseData.data) {
          setPlaces(responseData.data);
        } else {
          throw new Error("Invalid data format from server");
        }
        
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-content">
        <ul className="projects-list">
          {places.length > 0 ? (
            places.map((place) => (
              <li
                key={place._id || place.title}
                className={`project-item ${
                  selectedPlace?._id === place._id ? "active" : ""
                }`}
                onClick={() => setSelectedPlace(place)}
              >
                <h3 className="project-item-title">{place.title}</h3>
              </li>
            ))
          ) : (
            <li className="project-item">
              <h3 className="project-item-title">No projects found</h3>
            </li>
          )}
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
              {selectedPlace.images && selectedPlace.images.map((image, index) => (
                <div key={index} className="gallery-image-container">
                  <img
                    className="gallery-image"
                    src={image}
                    alt={`${selectedPlace.title} scene ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="project-contributors">
              <h4 className="contributors-title">
                People Who Worked On This Project
              </h4>
              <div className="contributors-list">
                {selectedPlace.peopleWorked && selectedPlace.peopleWorked.map((person, index) => (
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
