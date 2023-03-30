import { Router } from 'express';
import todo_controller from '../controllers/todo_controller.js';

const router = Router();

router.get('/', todo_controller.todoList);
router.post('/addTodo', todo_controller.addTodo);
router.get('/deleteTodo/:ids', todo_controller.deleteTodo);


export default router;