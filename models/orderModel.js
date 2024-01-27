import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalPrice: Number,
    orderDate: { type: Date, default: Date.now },
    address: String,
    phoneNumber: String,
    userName: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
