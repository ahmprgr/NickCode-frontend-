import axios from "axios";
import qs from "qs";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1404/api",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },

  transformRequest: [
    (data) => {
      if (data && typeof data === "object") {
        return qs.stringify(data);
      }
      return data;
    },
  ],
});

export default axiosInstance;
