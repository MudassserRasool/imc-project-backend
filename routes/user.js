import { Router } from 'express';
import {
  getRegistrationInfo,
  loginUser,
  registerUser,
} from '../controllers/userController.js';
const router = Router();

// login user
router.post('/login', loginUser);

// register user
router.post('/register', registerUser);

// get information of current user
router.get('/current/:email', getRegistrationInfo);

export default router;
