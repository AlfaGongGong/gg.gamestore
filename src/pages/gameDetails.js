import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { RAWG_API_KEY } from "../config.json";

import "./GameDetails.css";

function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await Axios.get(
          `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search_exact=${id}`
        );
        setGame(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();

    return () => {
      setGame({});
    };
  }, [id]);

  return (
    <div className="game-details container">
      <div className="row">
        <div className="col-md-12">
          <img src={game.background_image} alt={game.name} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-info">
          <h1>{game.name}</h1>
          <p>Released: {game.released}</p>
          <p>Metacritic: {game.metacritic}</p>
          <p>Rating: {game.rating}</p>
          <p>Description: {game.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-platforms">
          <h2>Platforms</h2>
          <ul>
            {game.platforms.map((platform) => (
              <li key={platform.platform.id}>
                {platform.platform.name} ({platform.slug})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-requirements">
          <h2> System Requirements</h2>
          <p>Minimum: {game.requirements.minimum}</p>
          <p>Recommended: {game.requirements.recommended}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
