import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import { useParams } from "react-router-dom";
import axios from "../axios.js";
const GamesList = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Games List</h1>
        <div className="row">
          {games.map((game) => (
            <div className="col-md-4" key={game.id}>
              <div className="card">
                <img
                  src={game.image}
                  className="card-img-top"
                  alt={game.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{game.title}</h5>
                  <p className="card-text">{game.description}</p>
                  <p className="card-text">${game.price}</p>
                  <a href={`/games/${game.id}`} className="btn btn-primary">
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesList;
