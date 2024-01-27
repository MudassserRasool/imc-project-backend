// import { Router } from 'express';
// import { createWorkout } from '../controllers/workoutControllers.js';
// import {  deleteWorkout, getWorkout, getWorkouts, updateWorkout} from '../controllers/workoutControllers.js';
// import { requireAuth } from '../middleware/requireAuth.js';
// const router = Router();

// router.use(requireAuth);

// router.get('/', getWorkouts);
// router.get('/:id', getWorkout);
// router.delete('/:id', deleteWorkout);
// router.post('/', createWorkout);
// router.patch('/:id', updateWorkout);

// export default router;

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _express = require('express');
var _workoutControllers = require('../controllers/workoutControllers.js');
var _requireAuth = require('../middleware/requireAuth.js');
const router = (0, _express.Router)();
router.use(_requireAuth.requireAuth);
router.get('/', _workoutControllers.getWorkouts);
router.get('/:id', _workoutControllers.getWorkout);
router.delete('/:id', _workoutControllers.deleteWorkout);
router.post('/', _workoutControllers.createWorkout);
router.patch('/:id', _workoutControllers.updateWorkout);
var _default = (exports.default = router);
