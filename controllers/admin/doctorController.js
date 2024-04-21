import mongoose from 'mongoose';
import multer from 'multer';
import Doctor from '../../models/common/doctorModel.js';
const upload = multer({ dest: 'uploads/' });

const addDoctor = async (req, res) => {
  const {
    name,
    specialization,
    qualification,
    experience,
    fees,
    rating,
    days,
    time,
  } = req.body;
  const image = req.file.path;
  try {
    await Doctor.create({
      image,
      name,
      specialization,
      qualification,
      experience,
      fees,
      rating,
      days,
      time,
    });

    res.status(201).json({ message: 'Doctor added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete doctor by id
const deleteDoctor = async (req, res) => {
  const doctorId = req.params.id;
  try {
    if (doctorId) {
      const doctor = await Doctor.findByIdAndDelete(doctorId);
      res.json({ message: 'Doctor removed' });
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update doctor by id
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    specialization,
    qualification,
    experience,
    fees,
    rating,
    days,
    time,
  } = req.body;
  const updatedDoctor = {
    name,
    specialization,
    qualification,
    experience,
    fees,
    rating,
    days,
    time,
  };
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No ambulance with id: ${id}`);
    }
    // const image = req.file.path;
    if (req.file) {
      updatedDoctor.image = req.file.path;
    }

    const createdDoctor = await Doctor.findByIdAndUpdate(id, updatedDoctor, {
      new: true,
    });
    res.status(200).json(createdDoctor);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Server catch an error-----' + error.message });
  }
};

export { addDoctor, deleteDoctor, getAllDoctors, updateDoctor };
