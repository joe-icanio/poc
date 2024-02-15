import axios from "axios";

export const baseURL = "https://mask-api.icaniotech.com";

const clientInstance = axios.create({
  baseURL: baseURL,
});

export default clientInstance;
