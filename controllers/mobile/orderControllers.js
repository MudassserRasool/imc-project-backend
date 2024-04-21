import Order from '../../models/common/orderModel.js';

const placeOrder = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const image = req.file.path;
    const order = new Order({
      image,
      name,
      phone,
      address,
    });
    const savedOrder = await order.save();
    res.status(201).json('successfully placed order\n' + savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { placeOrder };
