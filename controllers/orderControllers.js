import mongoose from 'mongoose';
import Order from '../models/orderModel.js';

const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, address, phoneNumber, userName } = req.body;
    const order = new Order({
      items,
      totalPrice,
      address,
      phoneNumber,
      userName,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};


const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No workout with id: ${id}`);
    }
    const order = await Order.findByIdAndDelete(id); // findByIdAndDelete
    if (!order) {
      return res.status(400).json({ message: 'workout not found' });
    }
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Error deleting order' });
  }
};
export { deleteOrder, placeOrder };