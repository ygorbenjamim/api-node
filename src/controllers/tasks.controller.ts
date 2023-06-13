import { NextFunction, Request, Response } from "express";
import {
  getAllService,
  postService,
  deleteService,
  updateService,
} from "../services/tasks.service";

const getTasks = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await getAllService();
    return res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const insertId = await postService(req.body);
    return res.status(201).json(insertId);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const affectedRows = await deleteService(id);
    return res.status(200).json(affectedRows);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const affectedRows = await updateService(id, req.body);
    return res.status(200).json(affectedRows);
  } catch (error) {
    next(error);
  }
};

export { getTasks, createTask, deleteTask, updateTask };
