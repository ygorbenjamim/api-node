import { ResultSetHeader } from "mysql2";
import connection from "../configs/database";
import { Task } from "../models/tasks.model";

const getAllRepository = async () => {
  const query = "SELECT * FROM tasks;";
  const [tasks] = await connection.execute(query);
  return tasks;
};

const createRepository = async (task: Task) => {
  const query = "INSERT INTO tasks (name, status) VALUES (?, ?);";
  const [createdTask] = await connection.execute(query, [
    task.name,
    "pendente",
  ]);
  const insertId = (createdTask as ResultSetHeader).insertId;
  return { insertId };
};

const deleteRepository = async (id: string) => {
  const query = "DELETE FROM tasks WHERE id = ?;";
  const [removeTask] = await connection.execute(query, [id]);
  const affectedRows = (removeTask as ResultSetHeader).affectedRows;
  return { affectedRows };
};

const updateRepository = async (id: string, task: Task) => {
  const query = "UPDATE tasks SET name = ?, status = ? WHERE id = ?;";
  const [updatedTask] = await connection.execute(query, [
    task.name,
    task.status,
    id,
  ]);
  const affectedRows = (updatedTask as ResultSetHeader).affectedRows;
  return { affectedRows };
};

export {
  getAllRepository,
  createRepository,
  deleteRepository,
  updateRepository,
};
