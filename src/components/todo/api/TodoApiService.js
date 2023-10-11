import axios from "axios";
import { apiClient } from "./ApiClient";

// export function retrieveHelloWorldBean() {
//   return axios.get("http://localhost:8080/hello-world-bean");
// }

export const retrieveAllTodosForUsername = (username) =>
  apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todo/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todo/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/users/${username}/todo/${id}`, todo);

export const createTodoApi = (username, todo) =>
  apiClient.post(`/users/${username}/todo`, todo);
