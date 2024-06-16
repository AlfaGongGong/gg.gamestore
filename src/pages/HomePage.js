import React from "react";
<<<<<<< HEAD
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
import ProductCard from "../components/GameCard/GameCard.js";
=======
import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
import "../styles/Homepage.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="product-slider-container">
          <ProductSlider />
        </div>
      </div>
<<<<<<< HEAD
      <div className="header">
        <Navbar />
      </div>
      <div className="greeting">
        <h1 className="title">Welcome to GG Gamestore</h1>
        <p className="subtitle">
          We offer a wide range of gaming at the best prices. For Gamers By
          Gamers
        </p>
      </div>
      <div className="container">
        <h2>Best Rated Games</h2>
        <div className="row">
          {useEffect(() => {
            const bestRatedGames = async () => {};
          }, [])}
          <div className="col-md-4">
            <ProductCard />
          </div>
          <div className="col-md-4">
            <ProductCard />
          </div>
          <div className="col-md-4">
            <ProductCard />
          </div>
        </div>
      </div>
=======
      <Navbar />
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
    </>
  );
}

export default HomePage;
