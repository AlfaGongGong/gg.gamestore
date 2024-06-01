import React from 'react';
import './GameCard.css';
import getRandomLoremIpsumText from '../../utils/RandomLoremIpsum.js';

const GameCard = ({ item }) => {
  const handleMoreInfo = (id) => {
    console.log(`More info for item with id: ${id}`);
  }

  const handleBuy = (id) => {
    console.log(`Buying item with id: ${id}`);
  }

  return (
    <div className="product-card col-md-3" key={item.id}>
      <img src={item.image} alt={item.title} className="product-image" />
      <h2 className="product-name">{item.title}</h2>
      <div className="product-info-container">
        <p className="product-dates">Release Date: {item.releaseDate}</p>
        <p className="product-price-normal">{item.normalPrice} KM</p>
        <p className="product-price-sale">Now: {item.salePrice} KM</p>
        <div className="product-buttons">
          <button onClick={() => handleMoreInfo(item.id)} className="btn more-info" title="More Info">
            <i className="fas fa-info-circle"></i>
          </button>

          <button onClick={() => handleBuy(item.id)} className="btn cart-btn" title="Buy">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
