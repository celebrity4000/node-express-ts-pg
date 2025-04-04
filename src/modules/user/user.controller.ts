import { Request, Response } from 'express';
import { getUsers } from './user.service';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
};
