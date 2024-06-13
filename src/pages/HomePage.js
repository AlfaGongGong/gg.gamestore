import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
import "../styles/Homepage.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="product-slider-container">
          <ProductSlider />
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default HomePage;
