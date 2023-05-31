import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
require("dotenv").config();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  try {
    jwt.verify(token!, process.env.SECRET_KEY!);
    next();
  } catch (error) {
    return res.status(401).json((error as Error).message);
  }
};

export { verifyToken };
