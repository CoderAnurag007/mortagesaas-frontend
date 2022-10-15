import axios from "axios";

const API = axios.create({
  baseURL: "https://mortasegas.herokuapp.com",
});

export const EditPostRoute = (id, data) => API.put(`/edit/${id}/post`, data);
