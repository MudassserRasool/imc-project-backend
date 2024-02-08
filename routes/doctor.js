import express from 'express';
import multer from 'multer';
import {
  addDoctor,
  deleteDoctor,
  getAllDoctors,
  updateDoctor,
} from '../controllers/doctorController.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();
router.post('/postDoctor', upload.single('image'), addDoctor);
// router.post(('/postDoctor', upload.single('image')), addDoctor);
router.get('/getAllDoctors', getAllDoctors);
router.delete('/deleteDoctor/:id', deleteDoctor);
router.patch('/updateDoctor/:id', updateDoctor);

export default router;
