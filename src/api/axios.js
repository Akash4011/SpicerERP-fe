import axios from "axios";

const api = axios.create({
  baseURL:
    "https://spicererp-be.onrender.com/api",

  headers: {
    "Content-Type": "application/json"
  }
});

export default api;