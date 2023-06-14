export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserExists extends IUser {
  id: string | number;
  created_at?: Date;
  updated_at?: Date;
}
