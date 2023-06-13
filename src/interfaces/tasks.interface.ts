export interface Task {
  name: string;
  status?: string | number;
}

export interface ExistTask extends Task {
  id: number;
  created_at: Date;
  updated_at: Date;
}
