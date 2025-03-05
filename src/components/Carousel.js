import React from "react";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item active">
        <img src="/images/landing-carousel-image-1.png" alt="Carousel 1" />
      </div>
      <div className="carousel-item">
        <img src="/images/landing-carousel-image-2.jpg" alt="Carousel 2" />
      </div>
      <div className="carousel-item">
        <img src="/images/landing-carousel-image-3.png" alt="Carousel 3" />
      </div>
      <div className="carousel-item">
        <img src="/images/landing-carousel-image-4.png" alt="Carousel 4" />
      </div>
      <div className="carousel-item">
        <img src="/images/landing-carousel-image-5.png" alt="Carousel 5" />
      </div>
    </div>
  );
};

export default Carousel;
