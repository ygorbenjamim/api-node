import { Request, Response } from "express";
import { authService } from "../services/auth.service";
require("dotenv").config();

const auth = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  const authorized = await authService(user, password);

  return authorized
    ? res.status(200).json(authorized)
    : res.status(400).json({ message: "Verifique o usuário e senha" });
};

export { auth };
