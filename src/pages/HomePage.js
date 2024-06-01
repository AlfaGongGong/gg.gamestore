import React from 'react';
import { Helmet } from "react-helmet";
import GameCard from '../components/GameCard/GameCard';
import '../styles/Homepage.css';

function HomePage() {
  return (
    <>
<Helmet>
        <title> Home-Page</title>
      </Helmet>
      <div className="home-page">
        <h1>Home Page</h1>
        <GameCard />
        </div>

    </>
  );
}

export default HomePage;
