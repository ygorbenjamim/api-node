const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM clientes";
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createTask = async (task) => {
  const query = "INSERT INTO tasks (name, status, created_at) VALUES (?, ?, ?)";
  const { title } = task;
  const date = new Date().toISOString();
  const [createdTask] = connection.execute(query, [title, "pendente", date]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  const [removeTask] = await connection.execute(query, [id]);
  return removeTask;
};

const updateTask = async (id, task) => {
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
  const { title, status } = task;
  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
