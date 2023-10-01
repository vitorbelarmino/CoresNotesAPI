import { NextFunction, Request, Response } from 'express';
import { createNoteSchema } from '../schemas/createNoteSchema';
import { updateNoteSchema } from '../schemas/updateNoteSchema';

export class Validade {
  public static createNoteValidade(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const body = req.body;
    const { error } = createNoteSchema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ message: error.message });
  }

  public static updateNoteValidade(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const body = req.body;
    console.log(body);

    const { error } = updateNoteSchema.validate(body);
    if (!error) {
      return next();
    }
    return res.status(400).json({ message: error.message });
  }
}
