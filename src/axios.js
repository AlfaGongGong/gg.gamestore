import Axios from "axios";
import config from "./config.json";

const axios = Axios.create({
  baseURL: config.API_URL,
});

export default axios;
