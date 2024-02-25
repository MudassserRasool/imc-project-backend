import Router from 'express';
import { getOverview } from '../controllers/admin/overviewController.js';
const router = Router();

router.get('/getServicesOverview', getOverview);

export default router;
