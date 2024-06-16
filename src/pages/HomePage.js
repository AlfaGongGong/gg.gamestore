import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
import ProductCard from "../components/GameCard/GameCard.js";
import "../styles/Homepage.css";

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="product-slider-container">
          <ProductSlider />
        </div>
      </div>
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
    </>
  );
}

export default HomePage;
