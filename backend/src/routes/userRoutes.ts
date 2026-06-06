import { Router } from 'express';
import { getAllUsers } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.get('/', authMiddleware, roleMiddleware(['ADMIN']), getAllUsers);

export default router;\n