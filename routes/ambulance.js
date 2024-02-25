import { Router } from 'express';
import {
  deleteAmbulance,
  getAllAmbulances,
  postAmbulance,
  updateAmbulance,
} from '../controllers/admin/ambulanceController.js';
const router = Router();
router.post('/postAmbulance', postAmbulance);
router.get('/getAllAmbulances', getAllAmbulances);
router.delete('/deleteAmbulance/:id', deleteAmbulance);
router.patch('/updateAmbulance/:id', updateAmbulance);

export default router;
