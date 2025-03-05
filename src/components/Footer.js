import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <button className="down-arrow-button" aria-label="Scroll Down">
        <img
          class="footer-down-arrow"
          src={
            process.env.PUBLIC_URL +
            "/images/Screenshot 2025-01-31 191040-Photoroom.png"
          }
          alt="Down Arrow"
        />
      </button>
    </div>
  );
};

export default Footer;
