import axios from "axios";

export const url = "https://suspect-management-backend.vercel.app/";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
