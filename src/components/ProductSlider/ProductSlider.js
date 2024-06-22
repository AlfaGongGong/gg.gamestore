import React, { useState, useEffect } from "react";
import Axios from "axios";
import config from "../../config.json";
import "./ProductSlider.scss";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const [items, setItems] = useState([]);
  const [activeSlide, setActiveSlide] = useState(null);
  const { RAWG_API_URL, RAWG_API_KEY } = config;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `${RAWG_API_URL}/games?key=${RAWG_API_KEY}&ordering=rating`
        );
        const topItems = response.data.results.slice(0, 5);
        setItems(topItems);
        localStorage.setItem("items", JSON.stringify(topItems));
      } catch (error) {
        console.error(error);
      }
    };

    const cachedItems = JSON.parse(localStorage.getItem("items"));
    if (cachedItems) {
      setItems(cachedItems);
    } else {
      fetchData();
    }
  }, []);

  const toggleActiveSlide = (index) => {
    setActiveSlide(index);
  };

  const handleMouseEnter = (index) => {
    const slide = document.querySelector(`[data-id="${items[index].id}"]`);
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = "Click to expand";
    slide.appendChild(tooltip);
  };

  const handleMouseLeave = () => {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  };

  const viewDetails = (id) => {
    window.location.href = `/game/${id}`;
  };

  if (!items) {
    window.location.href = `/error`;
  }

  return (
    <div className="product-slider">
      {items.length > 0 ? (
        <div className="slider-container">
          {items.map((item, index) => (
            <div
              className={`slide ${activeSlide === index ? "active" : ""}`}
              key={item.id}
              data-id={item.id}
              style={{ backgroundImage: `url(${item.background_image})` }}
              onClick={() => toggleActiveSlide(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="slide-overlay">
                <h3>
                  {item.name} <br />
                  <Link
                    to={`/game/${item.id}`}
                    element="button"
                    className="view-details-btn"
                    style={{ textDecoration: "none" }}
                  >
                    View Details
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductSlider;
