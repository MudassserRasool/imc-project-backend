// admin actions to perform for coustomer
import customerModal from '../../../models/mobile/customersModal.js';

const getAllCustomers = async (req, res) => {
  try {
    const users = await customerModal.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getAllCustomers };
