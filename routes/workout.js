import { Router } from 'express';
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from '../controllers/workoutControllers.js';
import { requireAuth } from '../middleware/requireAuth.js';
const router = Router();

router.use(requireAuth);

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.delete('/:id', deleteWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);

export default router;
