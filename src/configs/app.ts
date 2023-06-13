import express, { Request, Response, NextFunction } from "express";
import { tasksRoutes } from "../routes";

const app = express();

// Utilizar body em json como padrão
app.use(express.json());

app.use("/tasks", tasksRoutes);

// Interceptador de erros
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({ message: error.message });
  }
  return res.status(500).json({ message: "Erro interno do servidor" });
});

export default app;
