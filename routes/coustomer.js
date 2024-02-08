import express from 'express';
import {
  getAllAppointments,
  getAllFeedbacks,
  postAppointment,
  postFeedback,
} from '../controllers/coustomerController.js';

const router = express.Router();

router.post('/postFeedback', postFeedback);
router.get('/getAllFeedbacks', getAllFeedbacks);

router.post('/postAppointment', postAppointment);
router.get('/getAllAppointments', getAllAppointments);
export default router;
