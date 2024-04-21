import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { required: true, type: String },
    phone: { required: true, type: String },
    address: { required: true, type: String },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
