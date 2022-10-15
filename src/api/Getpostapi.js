import axios from "axios";

const API = axios.create({
  baseURL: "https://mortasegas.herokuapp.com",
});

export const GetPostRoute = () => API.get("/get/post");
