import { Router } from 'express';

import userRoutes from './user.routes.ts';

const router = Router();

router.use(userRoutes);

export default router;
