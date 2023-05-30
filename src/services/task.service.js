// Em desenvolvimento

const tasksRepository = require("../repositories/tasks.repository");

const getAll = async () => {
  return await tasksRepository.getAll();
};

const createTask = async (body) => {
  const { name } = body;
  return await tasksRepository.createTask(name);
};

const deleteTask = async (id) => {
  const { affectedRows } = await tasksRepository.deleteTask(id);
  return { affectedRows };
};

const updateTask = async (id, body) => {
  const { name, status } = body;
  const { affectedRows } = await tasksRepository.updateTask(id, name, status);
  return { affectedRows };
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
