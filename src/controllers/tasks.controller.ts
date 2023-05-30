import { Request, Response } from "express";
import {
  getAllService,
  postService,
  deleteService,
  updateService,
} from "../services/tasks.service";

const getTasks = async (_req: Request, res: Response) => {
  const tasks = await getAllService();
  return res.status(200).json(tasks);
};

const createTask = async (req: Request, res: Response) => {
  const createdtask = await postService(req.body);
  return res.status(201).json(createdtask);
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await deleteService(id);
  return res.status(200).json(deletedTask);
};

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const affectedRows = await updateService(id, req.body);
  return res.status(200).json(affectedRows);
};

export { getTasks, createTask, deleteTask, updateTask };
