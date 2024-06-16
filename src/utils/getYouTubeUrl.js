const mysql = require("mysql2/promise");
const axios = require("axios");
const fs = require("fs");
const { DB_CONFIG, RAWG_API_KEY, RAWG_API_URL } = require("../config.json");
let rateLimit = 20000;

const countDownRateLimit = () => {
  rateLimit--;
};

const pool = mysql.createPool(DB_CONFIG);

const delay = (ms, factor) =>
  new Promise((resolve) => setTimeout(resolve, ms * factor));

const gameExists = async (id) => {
  const [rows] = await pool.query("SELECT id FROM games WHERE id = ?", [id]);
  return rows.length > 0;
};

const insertGames = async (games) => {
  let insertedCount = 0;
  const gameValues = [];

  for (const game of games) {
    if (!(await gameExists(game.id))) {
      const { id, name } = game;
      gameValues.push([id, name]);
      // Pretpostavimo da želite da ažurirate igru ako već postoji u bazi
      await pool.query("UPDATE games SET rawg_id = ? WHERE name = ?", [
        game.rawg_id,
        game.name,
      ]);
    }
    insertedCount++;
  }
};

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

      const gamesFromApi = response.data.results.map((game) => ({
        id: game.id, // Ovde se osiguravamo da je 'id' brojčana vrednost
        name: game.name,
        rawg_id: game.id, // Dodajemo 'rawg_id' koji će se koristiti za ažuriranje
      }));

      fs.writeFileSync("lastSuccessfulPage.txt", currentPage.toString());
      fs.writeFileSync("rateLimit.txt", rateLimit.toString());

      if (gamesFromApi.length >= 800) {
        insertedCount += await insertGames(gamesFromApi);
        console.log(`Inserted (${insertedCount}) ID's`);
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
    console.log(`Inserted (${insertedCount}) ID's`);
  }

  console.log(`Total fetched games: ${fetchedCount}`);
  console.log(`Total inserted ID's: ${insertedCount}`);
  console.log(`Rate limit remaining: ${rateLimit}`);
};

const fetchAndSave = async () => {
  const getRawgIds = async () => {
    const [rows] = await pool.query("SELECT rawg_id FROM games");
    return rows.map((row) => row.rawg_id);
  };

  if (rows.length === 0) {
    console.log("Nema igara za obraditi.");
    setTimeout(fetchAndSave, 5000);
    return;
  } else {
    console.log(`Dohvaćeno ${rows.length} igara za obraditi.`);
  }

  const rawgIds = await getRawgIds();
  for (const rawgId of rawgIds) {
    try {
      const response = await axios.get(
        `${RAWG_API_URL}/games/${rawgId}/youtube?key=${RAWG_API_KEY}`
      );
      if (!response.data || !response.data.results) {
        console.error("No data returned from the server for game ID:", game.id);
        continue;
      }

      const videos = response.data.results;

      for (const video of videos) {
        const videoData = {
          game_id: game.id,
          external_id: video.external_id,
          channel_id: video.channel_id,
          channel_title: video.channel_title,
          video_name: video.name,
          description: video.description,
          created: video.created,
          view_count: video.view_count,
          comments_count: video.comments_count,
          like_count: video.like_count,
          dislike_count: video.dislike_count,
          favorite_count: video.favorite_count,
        };
        await pool.query("INSERT INTO youtube_videos SET ?", [videoData]);
        console.log(`Video ${video.name} umetnut.`);
      }

      rateLimit -= videos.length;
      fs.writeFileSync(
        "rate_limit_log.txt",
        `Rate Limit: ${rateLimit}\nLast Page: ${currentPage}`
      );
    } catch (error) {
      console.error("Došlo je do greške pri obradi igre ID:", rawgId, error);
      setTimeout(fetchAndSave, 5000);
    }
  }

  fetchAndSave();
};

const main = async () => {
  try {
    await getAllGames(RAWG_API_KEY, 1);
    await fetchAndSave();

    console.log("Sve igre su uspješno dohvaćene i spremljene.");
  } catch (error) {
    console.error(`Error fetching games: ${error.message}`);
    setTimeout(main, 5000);
  }
};

main();

(async () => {
  while (true) {
    try {
      await main();
      break;
    } catch (error) {
      console.error(`Error restarting the script: ${error.message}`);
      setTimeout(main, 5000);
    }
  }
})();
