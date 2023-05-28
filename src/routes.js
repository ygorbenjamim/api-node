const express = require("express");

// Controllers
const tasksController = require("./controllers/tasks.controller");
const authController = require("./controllers/auth.controller");

// Middlewares
const taskMiddleware = require("./middlewares/tasks.middleware");
const authMiddleware = require("./middlewares/auth.meddleware");

const router = express.Router();

router.post("/auth", authController.auth);

router.get("/task", authMiddleware.verifyToken, tasksController.getAll);
router.post(
  "/task",
  taskMiddleware.validateFieldTitle,
  tasksController.createTask
);
router.delete("/task/:id", tasksController.deleteTask);
router.put(
  "/task/:id",
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  tasksController.updateTask
);

module.exports = router;
