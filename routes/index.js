import { Router } from 'express';
import { todo } from '../controllers/todo_controller.js';

const router = Router();

router.get('/', todo);


export default router;