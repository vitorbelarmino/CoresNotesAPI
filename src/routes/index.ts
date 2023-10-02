import { Router } from 'express';
import { noteController, userController } from '../integration';
import { Validade } from '../middleware/Validations';

const router = Router();

export { router };
router
  .post('/user/create', userController.create)
  .get('/user/:id/notes', userController.getAllNotesUser)
  .post('/note/create', Validade.createNoteValidade, noteController.create)
  .put('/note/update/:id', Validade.updateNoteValidade, noteController.update)
  .delete('/note/delete/:id', noteController.delete);
