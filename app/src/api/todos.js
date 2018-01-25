import axios from "axios";

export const addTodo = task => axios.post("todos/", { task });

export const getTodos = () => axios.get("todos/").then(res => res.data);
