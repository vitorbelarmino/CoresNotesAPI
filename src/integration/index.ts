import { NoteController } from '../controllers/NoteController';
import { UserController } from '../controllers/UserController';
import { NoteService } from '../services/NoteService';
import { UserService } from '../services/UserService';

const userServices = new UserService();
const userController = new UserController();

const noteController = new NoteController();
const noteService = new NoteService();

export { userServices, userController, noteService, noteController };
