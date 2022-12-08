import axios from "axios";

const axiosClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
