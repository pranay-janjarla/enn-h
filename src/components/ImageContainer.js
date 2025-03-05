import React from "react";
import "./ImageContainer.css";
const ImageContainer = () => {
  return (
    <div className="image-container">
      <img src="../images/hero.png" alt="Hero" className="hero-image" />
      <div className="overlay-text">
        <h1>Welcome to Our Service</h1>
        <p>Your satisfaction is our priority.</p>
      </div>
    </div>
  );
};

export default ImageContainer;
