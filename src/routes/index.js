const express = require("express");

// Controllers
const taskController = require("../controllers/tasks.controller");
const authController = require("../controllers/auth.controller");

// Middlewares
const taskMiddleware = require("../middlewares/task.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/auth", authController.auth);

router.get("/task", taskController.getAll);
router.post(
  "/task",
  taskMiddleware.validateFieldTitle,
  taskController.createTask
);
router.delete("/task/:id", taskController.deleteTask);
router.put(
  "/task/:id",
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  taskController.updateTask
);

module.exports = router;
