import React from "react";
import "./ImageGrid.css";
import Heading from "./Heading";

const ImageGrid = ({ images }) => {
  return (
    <div>
      {/* Parent wrapper */}
      <Heading level="h1">This is an H1 Heading</Heading>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-grid-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
