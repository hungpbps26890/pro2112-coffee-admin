import axios from "./customized-axios";

export const fetchGetAllUsers = () => axios.get("/api/users");

export const fetchGetUserById = (id) => axios.get(`/api/users/${id}`);

export const putUpdateUser = (id, data) => axios.put(`/api/users/${id}`, data);
