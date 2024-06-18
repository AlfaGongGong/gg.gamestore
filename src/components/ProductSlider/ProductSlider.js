import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import "./ProductSlider.scss";

const ProductSlider = () => {
  const [items, setItem] = useState([]);
  const { RAWG_API_URL, RAWG_API_KEY } = config;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${RAWG_API_URL}/games?key=${RAWG_API_KEY}`
        );
        setItem(response.data.results.slice(0, 5));

        const items = response.data.results.slice(0, 5);
        localStorage.setItem("items", JSON.stringify(items));
      } catch (error) {
        console.error(error);
      }
    };

    const cachedItems = JSON.parse(localStorage.getItem("items"));
    if (cachedItems) {
      setItem(cachedItems);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const sliderPluggin = (activeSlide = 0) => {
      const slides = document.querySelectorAll(".slide");
      let currentSlideIndex = activeSlide;

      slides[currentSlideIndex]?.classList.add("active");

      function toggleActiveSlide() {
        clearActiveClasses();
        this.classList.add("active");
      }

      function clearActiveClasses() {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
      }

      slides.forEach((slide) => {
        slide.addEventListener("click", toggleActiveSlide);
      });
    };
    sliderPluggin();
  });

  return items.length > 0 ? (
    items.map((item) => (
      <div
        className="slide"
        style={{ backgroundImage: `url(${item.background_image})` }}
        key={item.id}
      >
        <h3>{item.name}</h3>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};

export default ProductSlider;
