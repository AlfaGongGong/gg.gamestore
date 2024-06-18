import { useState, useEffect } from "react";
import axios from "../axios.js";
import { useParams } from "react-router-dom";

function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`/games/${id}`);
        setGame(response.data);
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
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>{game.price}</p>
    </div>
  );
}

export default GameDetails;
