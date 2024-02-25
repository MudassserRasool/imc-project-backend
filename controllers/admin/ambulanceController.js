import mongoose from 'mongoose';
import Ambulance from '../../models/common/ambulanceModel.js';

const postAmbulance = async (req, res) => {
  const { name, phone, address, fare, ambulanceNumber } = req.body;
  try {
    await Ambulance.create({
      name,
      phone,
      address,
      fare,
      ambulanceNumber,
    });
    res.status(201).json({ message: 'Ambulance added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAmbulances = async (req, res) => {
  try {
    const ambulances = await Ambulance.find({});
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete ambulance by id
const deleteAmbulance = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }

  try {
    await Ambulance.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `Ambulance of id ${id} is delete scuessfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update the ambulance
const updateAmbulance = async (req, res) => {
  const { id } = req.params;
  const { name, phone, address, ambulanceNumber } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No ambulance with id: ${id}`);
  }

  try {
    const updatedAmbulance = {
      name,
      phone,
      address,
      fare,
      ambulanceNumber,
      _id: id,
    };
    await Ambulance.findByIdAndUpdate(id, updatedAmbulance, { new: true });
    res.json(updatedAmbulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { deleteAmbulance, getAllAmbulances, postAmbulance, updateAmbulance };
