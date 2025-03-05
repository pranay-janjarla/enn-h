import React, { useState } from "react";

const Slideshow = ({ images = [], description = "Slideshow" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Don't try to navigate if there are no images
  const nextSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="slideshow">
      <h4>{description}</h4>
      <div className="slideshow-container">
        {images.length > 0 ? (
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        ) : (
          <div className="no-images">No images to display</div>
        )}
        <div className="slideshow-controls">
          <button onClick={prevSlide} disabled={images.length <= 1}>
            Previous
          </button>
          <button onClick={nextSlide} disabled={images.length <= 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
