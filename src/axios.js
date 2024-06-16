import Axios from "axios";
import config from "./config.json";

const axios = Axios.create({
<<<<<<< HEAD
  baseURL: config.API_URL,
=======
  baseURL: `${config.RAWG_API_URL}`,
  headers: {
    " Content-Type": "application/json",
    token: `Token ${config.RAWG_API_KEY}`,
  },
>>>>>>> 1a0e8a70e20dd0caaab108cd97413b29958a5d82
});

export default axios;
