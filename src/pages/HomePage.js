import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar.js";
import ProductSlider from "../components/ProductSlider/ProductSlider.js";
import ProductCard from "../components/ProductCard/ProductCard.js";
import axios from "../axios.js";
import "./Homepage.scss";

function HomePage() {
  const { id } = useParams();

  const [bestRatedGames, setBestRatedGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [gamingAccessories, setGamingAccessories] = useState([]);

  useEffect(() => {
    const fetchBestRatedGames = async () => {
      try {
        const response = await axios.get("/games/best-rated");
        setBestRatedGames(response.data);
      } catch (error) {
        console.error("Error fetching best rated games:", error);
      }
    };

    const fetchNewGames = async () => {
      try {
        const response = await axios.get("/games/new");
        setNewGames(response.data);
      } catch (error) {
        console.error("Error fetching new games:", error);
      }
    };

    const fetchGamingAccessories = async () => {
      try {
        const response = await axios.get("/accessories/popular");
        setGamingAccessories(response.data);
      } catch (error) {
        console.error("Error fetching gaming accessories:", error);
      }
    };

    Promise.all([
      fetchBestRatedGames(),
      fetchNewGames(),
      fetchGamingAccessories(),
    ]);
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-12">
          <ProductSlider />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>GG Game Store</h1>
          <p>Welcome to our gaming store!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Best Rated Games</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="product-grid">
            {bestRatedGames.map((game) => (
              <ProductCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>New Games</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="product-grid">
            {newGames.map((game) => (
              <ProductCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Gaming Accessories</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="product-grid">
            {gamingAccessories.map((accessory) => (
              <ProductCard key={accessory.id} game={accessory} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer col-md-12"></div>
      </div>
    </div>
  );
}

export default HomePage;
