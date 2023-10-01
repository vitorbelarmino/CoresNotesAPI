import { Router } from 'express';
import { noteController, userController } from '../integration';
import { Validade } from '../middleware/Validations';

const router = Router();

export { router };
router
  .post('/user/create', userController.create)
  .post('/note/create', Validade.createNoteValidade, noteController.create)
  .get('/note/:id', noteController.getById)
  .put('/note/:id', Validade.updateNoteValidade, noteController.update)
  .delete('/note/:id', noteController.delete);
