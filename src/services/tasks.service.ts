import { ExistTask, Task } from "../interfaces/tasks.interface";
import {
  getAllRepository,
  createRepository,
  deleteRepository,
  updateRepository,
} from "../repositories/tasks.repository";

const getAllService = async (): Promise<ExistTask[]> => {
  const tasks = await getAllRepository();
  return tasks as ExistTask[];
};

const postService = async (task: Task) => {
  return await createRepository(task);
};

const deleteService = async (id: string) => {
  return await deleteRepository(id);
};

const updateService = async (id: string, task: Task) => {
  return await updateRepository(id, task);
};

export { getAllService, postService, deleteService, updateService };
