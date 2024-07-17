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

export { getAllOrders, getOrders };
