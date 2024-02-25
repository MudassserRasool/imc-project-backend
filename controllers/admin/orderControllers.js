import Order from '../../models/common/orderModel.js';

// get all orders of any spesific user with the help of  their email
const getOrders = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get all orders of all users

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// const deleteOrder = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(404).send(`No workout with id: ${id}`);
//     }
//     const order = await Order.findByIdAndDelete(id);
//     if (!order) {
//       return res.status(400).json({ message: 'workout not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting order:', error);
//     res.status(500).json({ error: 'Error deleting order' });
//   }
// };

export { getAllOrders, getOrders };
