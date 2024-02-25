import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import customerModal from '../../models/mobile/customersModal.js';

// function to generate token

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
};

// get all the registration info of currently registered user
const getRegistrationInfoOfCurrentCustomer = async (req, res) => {
  const { email } = req.params;
  if (mongoose.Types.ObjectId.isValid(email)) {
    return res.status(404).send(`No workout with id: ${email}`);
  }
  try {
    const user = await customerModal.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update the registration info of currently registered user

const updateCustomerRegistrationInfo = async (req, res) => {
  const { email } = req.params;
  const { name, address, phone } = req.body;
  try {
    const user = await customerModal.findOneAndUpdate(
      { email },
      { name, address, phone }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all users

// delete user by id
const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await customerModal.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  deleteCustomer,
  getRegistrationInfoOfCurrentCustomer,
  updateCustomerRegistrationInfo,
};
