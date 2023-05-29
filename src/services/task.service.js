// Responsável por formatar os dados
// Em desenvolvimento

const tasksRepository = require("../repositories/tasks.repository");

const getAll = async (res) => {
  const tasks = await tasksRepository.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (body, res) => {
  const createdtask = await tasksRepository.createTask(body);
  return res.status(201).json(createdtask);
};

const deleteTask = async (id, res) => {
  await tasksRepository.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (id, body, res) => {
  await tasksRepository.updateTask(id, body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
