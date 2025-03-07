import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import HomePage from "./pages/HomePage"; // Import HomePage
import Navbar from "./components/HomePageComponents/Navbar";
import SearchOverlay from "./components/HomePageComponents/SearchOverlay";
import ImageContainer from "./components/HomePageComponents/ImageContainer";
import Carousel from "./components/HomePageComponents/Carousel";
import ImageGrid from "./components/HomePageComponents/ImageGrid";
import Footer from "./components/HomePageComponents/Footer";
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
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <SearchOverlay />
                <ImageContainer />
                <Carousel />
                <ImageGrid images={images} />
                <Footer />
              </>
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
