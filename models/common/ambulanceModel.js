import mongoose from 'mongoose';

const ambulanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  fare: { type: String, required: true },
  ambulanceNumber: { type: String, required: true },
});

const AmbulanceModel = mongoose.model('Ambulance', ambulanceSchema);
export default AmbulanceModel;
