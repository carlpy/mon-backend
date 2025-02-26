import { Router } from 'express';
import { userController } from '../controllers/index.ts';

const router = Router();

router.get('/users', userController.getUsers);
router.get('/users/:user', userController.getUser);
router.post('/users', userController.createUser);
/* router.put('/users', userController.updateUser);
router.delete('/users/:user', userController.deleteUser); */

export default router;
