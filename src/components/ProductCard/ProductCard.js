import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./ProductCard.scss";
function ProductCard({ game }) {
  const price = Math.round(game.price * 100) / 100;

  const { id } = useParams();

  const handleAddToCart = () => {
    <Link to={`/cart/:${id}`} />;
  };

  const handleAddToWishlist = () => {
    <Link to={`/wishlist/:${id}`} />;
  };

  const handleViewDetails = () => {
    <Link to={`/game/:${id}`} />;
  };

  if (!game) {
    return <div>Invalid game data</div>;
  } else {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="product-details">
          <h3>{game.name}</h3>
          <span className="product-price">${price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="add-to-wishlist-btn" onClick={handleAddToWishlist}>
            Add to Wishlist
          </button>
          <button className="view-details-btn" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
