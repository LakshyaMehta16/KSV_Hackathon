import { Router } from 'express';
import { createRFQ, getActiveRFQs } from '../controllers/rfqController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.post('/', authMiddleware, roleMiddleware(['PROCUREMENT_OFFICER']), createRFQ);
router.get('/active', authMiddleware, roleMiddleware(['VENDOR']), getActiveRFQs);

export default router;\n