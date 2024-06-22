import { useState, useEffect } from "react";
import axios from "axios"; // Modified Axios to axios to match the common usage
import { useParams } from "react-router-dom";
import config from "../config.json";
import "./GameDetails.scss";

const { RAWG_API_KEY } = config;

function GameDetails() {
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`
        );
        setGame(response.data); // Removed .results[0] as it's incorrect based on RAWG API documentation
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();

    return () => {
      setGame({});
    };
  }, [id]);

  useEffect(() => {
    const fetchScreenshots = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`
        );
        setScreenshots(response.data.results);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
      }
    };

    fetchScreenshots();

    return () => {
      setScreenshots([]);
    };
  }, [id]);

  function renderPlatforms(platforms) {
    if (!Array.isArray(platforms)) {
      return null;
    } else {
      return platforms.map((platform) => (
        <li key={platform.platform.id}>
          {platform.platform.name} ({platform.slug})
        </li>
      ));
    }
  }

  function renderRequirements(requirements) {
    if (!requirements || !requirements.minimum) {
      return null;
    } else {
      return (
        <>
          <p>Minimum: {requirements.minimum}</p>
          <p>Recommended: {requirements.recommended}</p>
        </>
      );
    }
  }

  const renderScreenshots = () => {
    return screenshots.map((screenshot) => (
      <li key={screenshot.id}>
        <img src={screenshot.image} alt="screenshot" />
      </li>
    ));
  };

  return (
    <div className="game-details container">
      <div className="row">
        <div className="col-md-12 game-image">
          <img src={game.background_image} alt={game.name} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-info">
          <h1>{game.name}</h1>
          <p>{game.description_raw}</p>
          <p>Rating: {game.rating}</p>
          <p>Released: {game.released}</p>
          <p>Developed by: {game.developers?.[0]?.name}</p>{" "}
          {/* Added optional chaining */}
          <p>Released by: {game.publishers?.[0]?.name}</p>{" "}
          {/* Added optional chaining */}
          <p>Tags: {game.tags?.map((tag) => tag.name).join(", ")}</p>{" "}
          {/* Added optional chaining */}
          <p>
            Website: <a href={game.website}>{game.website}</a>
          </p>
          <p>Metacritic: {game.metacritic}</p>
          <p>
            Metacritic URL:{" "}
            <a href={game.metacritic_url}>{game.metacritic_url}</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-platforms">
          <h2>Platforms</h2>
          <ul>{renderPlatforms(game.platforms)}</ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-requirements">
          <h2>System Requirements</h2>
          {renderRequirements(game.requirements)}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 game-screenshots">
          <h2>Screenshots</h2>
          <ul>{renderScreenshots()}</ul>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
