import { Router } from 'express';
import { noteController, userController } from '../integration';

const router = Router();

export { router };
router
  .post('/user/create', userController.create)
  .post('/note/create', noteController.create)
  .get('/note/:id', noteController.getById)
  .put('/note/:id', noteController.update)
  .delete('/note/:id', noteController.delete);
