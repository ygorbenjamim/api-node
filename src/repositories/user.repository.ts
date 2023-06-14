import { ResultSetHeader } from "mysql2";
import connection from "../configs/database";
import { IUser, IUserExists } from "../interfaces/user.interface";

const getAllRepository = async (): Promise<IUserExists[]> => {
  const query = "SELECT * FROM users";
  const [users] = await connection.execute(query);
  return users as IUserExists[];
};

const createRepository = async (user: IUser) => {
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  const [createdUser] = await connection.execute(query, [
    user.name,
    user.email,
    user.password,
  ]);
  const insertId = (createdUser as ResultSetHeader).insertId;
  return { insertId };
};
