import Doctor from '../models/doctorModel.js';
// const upload = multer({ dest: 'uploads/' });
// const addDoctor = async (req, res) => {
//   const {
//     name,
//     specialization,
//     qualification,
//     experience,
//     fees,
//     rating,
//     days,
//     time,
//   } = req.body;
//   const image = req.file.path;
//   try {
//     await Doctor.create({
//       image,
//       name,
//       specialization,
//       qualification,
//       experience,
//       fees,
//       rating,
//       days,
//       time,
//     });

//     res.status(201).json({ message: 'Doctor added successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
  const {
    image,
    name,
    specialization,
    qualification,
    experience,
    fees,
    rating,
    days,
    time,
  } = req.body;
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (doctor) {
      doctor.image = image;
      doctor.name = name;
      doctor.specialization = specialization;
      doctor.qualification = qualification;
      doctor.experience = experience;
      doctor.fees = fees;
      doctor.rating = rating;
      doctor.days = days;
      doctor.time = time;
      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
    } else {
      res.status(404).json({ message: 'Doctor not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addDoctor, deleteDoctor, getAllDoctors, updateDoctor };
