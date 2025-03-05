import React from "react";
import Navbar from "./components/Navbar";
import SearchOverlay from "./components/SearchOverlay";
import ImageContainer from "./components/ImageContainer";
import Carousel from "./components/Carousel";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const images = [
    { src: "../images/landing-carousel-image-1.png", alt: "Image 1" },
    { src: "../images/landing-carousel-image-2.jpg", alt: "Image 2" },
    { src: "../images/landing-carousel-image-3.png", alt: "Image 3" },
    { src: "../images/landing-carousel-image-4.png", alt: "Image 4" },
    { src: "../images/landing-carousel-image-5.png", alt: "Image 5" },
    { src: "../images/landing-carousel-image-6.png", alt: "Image 6" },
  ];

  return (
    <div className="App">
      <Navbar />
      <SearchOverlay />
      <ImageContainer />
      <Carousel />
      <ImageGrid images={images} />
      <Footer />
    </div>
  );
}

export default App;
