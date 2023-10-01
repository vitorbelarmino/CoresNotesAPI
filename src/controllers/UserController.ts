import { Request, Response } from 'express';
import { userServices } from '../integration';

class UserController {
  async create(req: Request, res: Response) {
    const id = await userServices.create();
    res.status(200).json({ userId: id });
  }
}

export { UserController };
