import { Router } from 'express';
import { createVendor, getAllVendors } from '../controllers/vendorController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'PROCUREMENT_OFFICER']));

router.post('/', createVendor);
router.get('/', getAllVendors);

export default router;\n