import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://spicererp-be.onrender.com/api",

  headers: {
    "Content-Type": "application/json"
  }
});

export default api;