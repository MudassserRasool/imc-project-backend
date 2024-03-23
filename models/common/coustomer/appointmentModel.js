import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  doctor: { type: String, required: true },
});

const Appointment = mongoose.model('appointment', AppointmentSchema);
export default Appointment;
