import { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======
import axios from "axios";
import mysql from "mysql2/promise";

const RoccatGear = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://real-time-product-search.p.rapidapi.com/search",
          params: {
            q: "Roccat",
            country: "us",
            language: "en",
            page: "3",
            limit: "100",
            sort_by: "BEST_MATCH",
            product_condition: "NEW",
            min_rating: "ANY",
          },
          headers: {
            "x-rapidapi-key":
              "f6d1f840a3msh19d03ebda2bde72p14ca93jsn16413aedab2d",
            "x-rapidapi-host": "real-time-product-search.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
    const createTable = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://real-time-product-search.p.rapidapi.com/search",
          params: {
            q: "Roccat",
            country: "us",
            language: "en",
            page: "3",
            limit: "100",
            sort_by: "BEST_MATCH",
            product_condition: "NEW",
            min_rating: "ANY",
          },
          headers: {
            "x-rapidapi-key":
              "f6d1f840a3msh19d03ebda2bde72p14ca93jsn16413aedab2d",
            "x-rapidapi-host": "real-time-product-search.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        const products = response.data.products;
        const columns = Object.keys(products[0]).map(
          (column) => `${column} VARCHAR(255)`
        );
        const createTableQuery = `CREATE TABLE IF NOT EXISTS products (${columns.join(
          ", "
        )})`;
        // Execute the create table query using your MySQL library of choice
        // For example, using the mysql2 library:
        const connection = await mysql.createConnection({
          host: "localhost:3306",
          user: "root",
          password: "root",
          database: "gg_database",
        });
        await connection.execute(createTableQuery);
        console.log("Table created successfully!");
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
    createTable();
  }, []);
};

export default RoccatGear;
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
