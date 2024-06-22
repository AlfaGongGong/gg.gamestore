import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProductSlider.scss";

const ProductSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_RAWG_API_URL}/games?key=${process.env.REACT_APP_RAWG_API_KEY}`
        );
        setItems(response.data.results.slice(0, 5));
        localStorage.setItem(
          "items",
          JSON.stringify(response.data.results.slice(0, 5))
        );
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

  useEffect(() => {
    const sliderPlugin = (activeSlide = 0) => {
      const slides = document.querySelectorAll(`.${styles.slide}`);
      let currentSlideIndex = activeSlide;

      slides[currentSlideIndex]?.classList.add(styles.active);

      function toggleActiveSlide() {
        clearActiveClasses();
        this.classList.add(styles.active);
      }

      function clearActiveClasses() {
        slides.forEach((slide) => {
          slide.classList.remove(styles.active);
        });
      }

      slides.forEach((slide) => {
        slide.addEventListener("click", toggleActiveSlide);
      });
    };
    sliderPlugin();
  });

  return items.length > 0 ? (
    <div className={styles.sliderContainer}>
      {items.map((item) => (
        <div
          className={styles.slide}
          key={item.id}
          style={{ backgroundImage: `url(${item.background_image})` }}
        >
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductSlider;
