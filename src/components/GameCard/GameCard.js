

import React from 'react';
import './ProductCard.scss'; // You can create a separate SCSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
