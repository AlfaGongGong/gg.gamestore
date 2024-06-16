import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import config from "../../config.json";
import "./ProductSlider.scss";

const ProductSlider = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/games?key=${config.RAWG_API_KEY}&platforms=1&ordering=-ratings`
        );
        setItem(response.data.results.slice(0, 5));

        // Store data in localStorage as a fallback
        localStorage.setItem(
          "items",
          JSON.stringify(response.data.results.slice(0, 5))
        );
      } catch (error) {
        console.error("Error fetching popular items:", error);

        // If there's an error (e.g., third-party cookies are blocked), try to get data from localStorage
        const fallbackData = localStorage.getItem("items");
        if (fallbackData) {
          setItem(JSON.parse(fallbackData));
        }
      }
    };
    fetchData();
  }, []);

  // Clear local storage on unmount and window change to prevent stale data
  useEffect(() => {
    return () => {
      localStorage.removeItem("items");
    };
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
