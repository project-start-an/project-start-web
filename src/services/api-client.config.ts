import axios from "axios";

const baseURL: string = "http://localhost:8000/";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
export const getBaseUrl = baseURL;
