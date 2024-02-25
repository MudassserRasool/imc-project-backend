import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
  image: { type: String },
  name: { required: true, type: String },
  specialization: { required: true, type: String },
  qualification: { required: true, type: String },
  experience: { required: true, type: Number },
  fees: { required: true, type: Number },
  rating: { required: true, type: Number },
  days: { required: true, type: String },
  time: { required: true, type: String },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
