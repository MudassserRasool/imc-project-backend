import Order from '../models/orderModel.js';

const placeOrder = async (req, res) => {
  try {
    /*
    
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
    */
    const { items, totalPrice, address, phoneNumber, userName, email } =
      req.body;
    const order = new Order({
      items,
      totalPrice,
      address,
      phoneNumber,
      userName,
      email,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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

export { getAllOrders, getOrders, placeOrder };
