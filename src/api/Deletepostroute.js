import axios from "axios";

const API = axios.create({
  baseURL: "https://mortasegas.herokuapp.com",
});

export const DeletePostRoute = (id) => API.delete(`/delete/${id}/post`);
