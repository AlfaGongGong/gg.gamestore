import React from "react";
import GameCard from "../components/GameCard/GameCard.js";
import fakeData from "./../utils/fakeData.json";

import "../styles/Homepage.css";

function HomePage() {
  const gameList = fakeData.items.map((item) => {
    return <GameCard key={item.id} item={item} />;
  });
  return (
    <div className="home-page container">
      <h1 className="page-title">Welcome to our store</h1>
      <div className="row">{gameList}</div>
    </div>
  );
}

export default HomePage;
