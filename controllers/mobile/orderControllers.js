import Order from '../../models/common/orderModel.js';

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

export { placeOrder };
