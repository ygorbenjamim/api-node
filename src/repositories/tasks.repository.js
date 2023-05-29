const connection = require("../configs/database");
//const Task = require("../models/tasks.models");

const getAll = async () => {
  const query = "SELECT * FROM tasks;";
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createTask = async (task) => {
  const query = "INSERT INTO tasks (name, status) VALUES (?, ?);";
  const { name } = task;
  const [createdTask] = await connection.execute(query, [name, "pendente"]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?;";
  const [removeTask] = await connection.execute(query, [id]);
  return removeTask;
};

const updateTask = async (id, task) => {
  const query = "UPDATE tasks SET name = ?, status = ? WHERE id = ?;";
  const { name, status } = task;
  const [updatedTask] = await connection.execute(query, [name, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
