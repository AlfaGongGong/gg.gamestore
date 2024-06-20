import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
import ProductCard from "../components/ProductCard/ProductCard.js";
import axios from "../axios.js";
import "../styles/Homepage.css";
import GameCard from "../components/ProductCard/ProductCard.js";

function HomePage() {
  const [bestRatedGames, setBestRatedGames] = useState([]);

  useEffect(() => {
    const fetchBestRatedGames = async () => {
      try {
        const response = await axios.get("/games/best-rated");
        setBestRatedGames(response.data);
        const items = response.data;
        const item = items[0];
        return items.map((item) => <ProductCard key={item.id} item={item} />);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBestRatedGames();
  }, []);

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
        <div className="row cards active">
          {bestRatedGames.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
