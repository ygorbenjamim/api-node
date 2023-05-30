import express from "express";

// Controllers
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller";

const routes = express.Router();

// Task
routes.get("/task", getTasks);
routes.post("/task", createTask);
routes.delete("/task/:id", deleteTask);
routes.put("/task/:id", updateTask);

export default routes;
