import axios from "axios";

const API = axios.create({
  baseURL: "https://mortasegas.herokuapp.com",
});

export const PostRoute = (data) => API.post("/post", data);
