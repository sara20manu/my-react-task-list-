import axios from "./axios.js";

export const getTasksResquest = () => axios.get("/list-view/tasks");

export const getTaskResquest = (id) => axios.get(`/list-view/tasks${id}`);

export const getTasksCompletedResquest = () =>
  axios.get("/list-view/completed");

export const getTasksIncompleteResquest = () =>
  axios.get("/list-view/incomplete");

export const createTaskRequest = (task) =>
  axios.post("/list-edit/create", task);

export const updateTaskRequest = (task) =>
  axios.put(`/list-edit/update/${task._id}`, task);

export const deleteTaskRequest = (id) =>
  axios.delete(`/list-edit/delete/${id}`);
