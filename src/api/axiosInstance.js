import axios from "axios";

export const url = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
