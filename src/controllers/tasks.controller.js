const taskRepository = require("../repositories/tasks.repository");

const getAll = async (_req, res) => {
  const tasks = await taskRepository.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdtask = await taskRepository.createTask(req.body);
  return res.status(201).json(createdtask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await taskRepository.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  await taskRepository.updateTask(id, req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
