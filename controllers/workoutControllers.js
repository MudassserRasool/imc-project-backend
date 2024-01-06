import mongoose from 'mongoose';
import Workout from '../models/workoutModel.js';

// get all workouts
const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  // through if the i is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }
  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create a workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  const emptyError = [];
  if (!title) {
    emptyError.push('title');
  }
  if (!load) {
    emptyError.push('load');
  }
  if (!reps) {
    emptyError.push('reps');
  }

  if (emptyError.length > 0) {
    return res.status(400).json({ error: `please add ${emptyError}` });
  }
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, rips, load } = req.body;
  // through if the i is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }
  const updatedWorkout = { title, rips, load, _id: id };
  await Workout.findByIdAndUpdate(id, updatedWorkout, { new: true });
  res.json(updatedWorkout);
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json({ message: 'workout not found' });
  }
  res
    .status(200)
    .json({ message: `workout of id ${id} is delete scuessfully` });
};

export { deleteWorkout, getWorkout, getWorkouts, updateWorkout };
