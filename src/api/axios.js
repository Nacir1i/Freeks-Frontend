import axios from "axios";

export const axiosAPI = axios.create({
  withCredentials: true,
  baseURL: "https://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    Accept: "application/json",
  },
});
