import React from "react";
import { Link } from "react-router-dom";

import "./GameCard.scss";
const GameCard = ({ item }) => {
  const handleMoreInfo = (id) => {
    return (
      <Link to={`/games/${id}`}>
        <button>More info</button>
      </Link>
    );
  };

  const handleBuy = (id) => {
    return (
      <Link to={`/games/${id}`}>
        <button>Buy</button>
      </Link>
    );
  };

  const randomPrice = Math.floor(Math.random() * (200 - 50 + 1) + 50);

  return (
    <div className="card col-md-3" key={item.id}>
      <img src={item.background_image} alt={item.name} className="card-image" />
      <div className="card-info-container">
        <h2 className="card-name">{item.name}</h2>
        <p className="card-price-normal"> ${randomPrice} KM</p>
        <p className="card-price-sale"></p>
      </div>
      <button
        onClick={() => handleMoreInfo(item.id)}
        className="card-btn more-info"
        title="More Info"
      >
        <i className="fas fa-info-circle"></i>
      </button>

      <button
        onClick={() => handleBuy(item.id)}
        className="product-btn cart-btn"
        title="Buy"
      >
        <i className="fas fa-shopping-cart"></i>
      </button>
    </div>
  );
};

export default GameCard;
