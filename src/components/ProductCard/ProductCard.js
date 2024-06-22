import React from "react";
import "./ProductCard.scss"; // Separate SCSS file for styling

const ProductCard = React.memo(({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
});

export default ProductCard;
