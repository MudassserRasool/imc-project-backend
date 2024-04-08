import express from 'express';

import { getAllAppointments } from '../controllers/admin/customer/appintmentController.js';
import { getAllCustomers } from '../controllers/admin/customer/coustomerController.js';
import { getAllFeedbacks } from '../controllers/admin/customer/feedbackController.js';
import { deleteCustomer } from '../controllers/common/customerController.js';
import { postAppointment } from '../controllers/mobile/customer/appintmentController.js';
import {
  getProfile,
  loginCustomer,
  registerCustomer,
  updateProfile,
} from '../controllers/mobile/customer/customerController.js';
import { postFeedback } from '../controllers/mobile/customer/feedbackController.js';

const router = express.Router();

// admin
router.get('/getAllFeedbacks', getAllFeedbacks);
router.get('/getAllAppointments', getAllAppointments);
router.get('/getAllCustomers', getAllCustomers);

// mobile
router.post('/registerCustomer', registerCustomer);
router.post('/loginCustomer', loginCustomer);
router.post('/postFeedback', postFeedback);
router.post('/postAppointment', postAppointment);
router.get('/current/:email', getProfile);
router.patch('/update/:email', updateProfile);

// common
router.delete('/deleteCustomer/:id', deleteCustomer);

export default router;
