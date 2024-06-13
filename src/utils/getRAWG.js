const axios = require("axios");
const mysql = require("mysql2/promise");
const { RAWG_API_KEY, DB_CONFIG } = require("../config.json");
const fs = require("fs");

let rateLimit = 20000;

const countDownRateLimit = () => {
  rateLimit--; // Ispravno dekrementiranje rateLimit varijable
};

// Kreiranje connection pool-a
const pool = mysql.createPool(DB_CONFIG);

// Funkcija za odgodu sa backoff mehanizmom
const delay = (ms, factor) =>
  new Promise((resolve) => setTimeout(resolve, ms * factor));

// Provjera da li igra postoji u bazi
const gameExists = async (id) => {
  const [rows] = await pool.query("SELECT id FROM games WHERE id = ?", [id]);
  return rows.length > 0;
};

// Batch insert igara
const insertGames = async (games) => {
  let insertedCount = 0;
  const gameValues = [];
  const platformValues = [];
  const storeValues = [];
  const genreValues = [];
  const tagValues = [];
  const screenshotValues = [];

  for (const game of games) {
    if (!(await gameExists(game.id))) {
      const {
        id,
        slug,
        name,
        released,
        background_image,
        rating,
        platforms,
        stores,
        genres,
        tags,
        short_screenshots,
      } = game;

      gameValues.push([id, slug, name, released, background_image, rating]);

      platforms?.forEach(
        ({ platform: { id: platformId, name: platformName } }) => {
          platformValues.push([id, platformId, platformName]);
        }
      );

      stores?.forEach(({ id: storeId, store }) => {
        if (storeId && store) {
          const { name: storeName, slug: storeSlug } = store;
          storeValues.push([id, storeId, storeName, storeSlug]);
        }
      });

      genres?.forEach(({ id: genreId, name: genreName }) => {
        genreValues.push([id, genreId, genreName]);
      });

      tags?.forEach(({ id: tagId, name: tagName }) => {
        tagValues.push([id, tagId, tagName]);
      });

      short_screenshots?.forEach(
        ({ id: screenshotId, image: screenshotImage }) => {
          screenshotValues.push([id, screenshotId, screenshotImage]);
        }
      );

      insertedCount++;
    } else {
      console.log(
        `Game ${game.name} with ID ${game.id} already exists. Skipping.`
      );
    }
  }

  if (gameValues.length)
    await pool.query(
      "INSERT INTO games (id, slug, name, released, background_image, rating) VALUES ?",
      [gameValues]
    );
  if (platformValues.length)
    await pool.query(
      "INSERT INTO platforms (game_id, platform_id, platform_name) VALUES ?",
      [platformValues]
    );
  if (storeValues.length)
    await pool.query(
      "INSERT INTO stores (game_id, store_id, store_name, store_slug) VALUES ?",
      [storeValues]
    );
  if (genreValues.length)
    await pool.query(
      "INSERT INTO genres (game_id, genre_id, genre_name) VALUES ?",
      [genreValues]
    );
  if (tagValues.length)
    await pool.query("INSERT INTO tags (game_id, tag_id, tag_name) VALUES ?", [
      tagValues,
    ]);
  if (screenshotValues.length)
    await pool.query(
      "INSERT INTO screenshots (game_id, screenshot_id, screenshot_image) VALUES ?",
      [screenshotValues]
    );

  return insertedCount;
};

// Glavna funkcija za dohvaćanje svih igara
const getAllGames = async (apiKey, lastSuccessfulPage) => {
  let fetchedCount = 0;
  let insertedCount = 0;
  let games = [];
  let currentPage = lastSuccessfulPage;

  while (true) {
    try {
      let url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-released&page=${currentPage}&page_size=40`;
      const response = await axios.get(url);
      response.data.results.forEach(() => countDownRateLimit());
      fetchedCount += response.data.results.length;

      console.log(`Fetched (${fetchedCount}) games from page ${currentPage}`);
      console.log(`Rate limit remaining: ${rateLimit}`);

      games = [...games, ...response.data.results];

      fs.writeFileSync("lastSuccessfulPage.txt", currentPage.toString());
      fs.writeFileSync("rateLimit.txt", rateLimit.toString());

      if (games.length >= 800) {
        // Adjust this number based on your needs
        insertedCount += await insertGames(games);
        console.log(`Inserted (${insertedCount}) games`);
        games = [];
      }

      if (response.data.next === null) {
        console.log("No more pages to fetch.");
        break;
      }

      currentPage++;
    } catch (error) {
      console.error(`Error fetching games: ${error.message}`);
      if (error.response && error.response.status === 502) {
        console.log("Bad Gateway error, trying again...");
        await delay(10000, 2);
      } else {
        console.log("An error occurred, retrying...");
        await delay(5000, 2);
      }
    }
  }

  if (games.length) {
    insertedCount += await insertGames(games);
    console.log(`Inserted (${insertedCount}) games`);
  }

  console.log(`Total fetched games: ${fetchedCount}`);
  console.log(`Total inserted games: ${insertedCount}`);
  console.log(`Rate limit remaining: ${rateLimit}`);
};
// Glavna funkcija
const main = async () => {
  console.log("Connected to the database");
  let lastSuccessfulPage = 1;
  if (fs.existsSync("lastSuccessfulPage.txt")) {
    lastSuccessfulPage = parseInt(fs.readFileSync("lastSuccessfulPage.txt"));
  }
  if (fs.existsSync("rateLimit.txt")) {
    rateLimit = parseInt(fs.readFileSync("rateLimit.txt"));
  }

  let allGamesFetched = false;
  while (!allGamesFetched) {
    try {
      await getAllGames(RAWG_API_KEY, lastSuccessfulPage);
      allGamesFetched = true;
    } catch (error) {
      console.error(`Error fetching games: ${error.message}`);
      console.log("Retrying...");
      await delay(5000, 2);
    }
  }

  await pool.end();
  console.log("Disconnected from the database");
};

// Pokretanje glavne funkcije
(async () => {
  while (true) {
    try {
      await main();
      break;
    } catch (error) {
      console.error(`Error restarting the script: ${error.message}`);
      console.log("Retrying...");
      await delay(5000, 2);
    }
  }
})();
