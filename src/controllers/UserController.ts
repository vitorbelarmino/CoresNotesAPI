import { Request, Response } from 'express';
import { userServices } from '../integration';

class UserController {
  async create(req: Request, res: Response) {
    const id = await userServices.create();
    res.status(201).json({ userId: id });
  }
  async getAllNotesUser(req: Request, res: Response) {
    const { id } = req.params;
    const data = await userServices.getAllNotes(id);
    res.status(200).json(data);
  }
}

export { UserController };
