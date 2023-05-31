import express from "express";

// Middlewares
import { verifyToken } from "../middlewares/auth.middleware";

// Controllers
import { auth } from "../controllers/auth.controller";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller";

const routes = express.Router();

// Auth
routes.post("/auth", verifyToken, auth);

// Task
routes.get("/task", getTasks);
routes.post("/task", createTask);
routes.delete("/task/:id", deleteTask);
routes.put("/task/:id", updateTask);

export default routes;
