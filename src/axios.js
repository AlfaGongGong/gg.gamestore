import Axios from "axios";
import config from "./config.json";

const axios = Axios.create({
  baseURL: `${config.RAWG_API_URL}`,
  headers: {
    " Content-Type": "application/json",
    token: `Token ${config.RAWG_API_KEY}`,
  },
});

export default axios;
