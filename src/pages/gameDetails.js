import { useState, useEffect } from "react";
import mysql from "mysql2/promise";
import { useParams } from "react-router-dom";

function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });

      const [rows] = await connection.execute(
        `SELECT * FROM games WHERE id = ${id}`
      );

      setGame(rows[0]);
    };

    fetchGame();
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
