const axios = require("axios");
const mysql = require("mysql2/promise");
const { DB_CONFIG, RAPIDAPI_KEY, RAPIDAPI_HOST } = require("../config.json");

const options = {
  method: "GET",
  url: "https://real-time-product-search.p.rapidapi.com/search",
  params: {
    q: "roccat, steelseries, razer, ROG",
    country: "us",
    language: "en",
    page: "10",
    sort_by: "BEST_MATCH",
    product_condition: "NEW",
    min_rating: "ANY",
  },
  headers: {
    "x-rapidapi-key": RAPIDAPI_KEY,
    "x-rapidapi-host": RAPIDAPI_HOST,
  },
};

const productExists = async (productId, connection) => {
  const [rows] = await connection.execute(
    "SELECT * FROM products WHERE product_id = ?",
    [productId]
  );
  return rows.length > 0 ? rows[0] : false;
};

const saveToDatabase = async (product, connection) => {
  const insertQuery = `
    INSERT INTO products (product_id, product_title, product_description, product_photos, product_attributes, product_rating, product_page_url, product_offers_page_url, product_specs_page_url, product_reviews_page_url, product_num_reviews, product_num_offers, typical_price_range, offer)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    await connection.execute(insertQuery, [
      product.product_id,
      product.product_title,
      product.product_description,
      JSON.stringify(product.product_photos),
      JSON.stringify(product.product_attributes),
      product.product_rating,
      product.product_page_url,
      product.product_offers_page_url,
      product.product_specs_page_url,
      product.product_reviews_page_url,
      product.product_num_reviews,
      product.product_num_offers,
      JSON.stringify(product.typical_price_range),
      JSON.stringify(product.offer),
    ]);

    console.log(`Product with ID ${product.product_id} inserted successfully.`);
  } catch (error) {
    console.error(
      `Error inserting product with ID ${product.product_id}: ${error.message}`
    );
  }
};

const handleRateLimit = async (currentPage) => {
  const HOUR_LIMIT = 1000; // Maksimalni broj zahtjeva po satu
  const MONTH_LIMIT = 100; // Maksimalni broj zahtjeva po mjesecu
  const currentHourRequests = currentPage % HOUR_LIMIT;
  const currentMonthRequests = currentPage % MONTH_LIMIT;

  if (currentHourRequests === 0) {
    console.log(
      "Rate limit reached for the hour. Waiting for the next hour..."
    );
    await new Promise((resolve) => setTimeout(resolve, 3600000)); // Čeka 1 sat
  }

  if (currentMonthRequests === 0) {
    throw new Error(
      "Monthly rate limit reached. Cannot proceed further this month."
    );
  }
};

const main = async () => {
  const connection = await mysql.createConnection(DB_CONFIG);
  console.log("Connected to the database");

  let currentPage = 1;
  let hasMorePages = true;

  try {
    while (hasMorePages) {
      await handleRateLimit(currentPage);

      const response = await axios.request({
        ...options,
        params: { ...options.params, page: currentPage },
      });

      console.log(`Page ${currentPage} data:`, response.data);

      for (const product of response.data.data) {
        const existingProduct = await productExists(
          product.product_id,
          connection
        );
        if (existingProduct) {
          console.log(
            `Product with ID ${product.product_id} already exists. Skipping.`
          );
          continue;
        }
        await saveToDatabase(product, connection);
      }

      hasMorePages = response.data.next_page_url != null;
      currentPage++;
    }
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
  } finally {
    await connection.end();
    console.log("Disconnected from the database");
  }
};

main();
