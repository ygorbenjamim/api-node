import { Router } from "express";

// Controllers
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller";

const tasksRoutes = Router();

tasksRoutes.get("/", getTasks);
tasksRoutes.post("/", createTask);
tasksRoutes.delete("/:id", deleteTask);
tasksRoutes.put("/:id", updateTask);

export default tasksRoutes;
